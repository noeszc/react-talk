import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isEqualWith, isEmpty, get } from 'lodash';

import { getMovie } from 'store/selectors/movies';
import api from 'api';
import LoadingIndicator from 'components/LoadingIndicator';
import H1 from 'components/h1';
import withLoading from 'hoc/withLoading';
import Section from './Section';
import Col from './Col';
import Poster from './Poster';

const Card = ({ detail }) => (
  <Section>
    <Poster hero={detail.poster} />
    <Col size={2}>
      <H1>{detail.title}</H1>
      <p>{detail.overview}</p>
    </Col>
  </Section>
);

const CardWithLoading = withLoading(Card);

class DetailPage extends React.PureComponent {
  state = { detail: null, loading: true };

  getMovieInfo = async () => {
    const movieId = get(this.state, ['detail', 'id']);
    try {
      const trailers = await api.getMovieTrailers(movieId);
      const related = await api.getRelatedMovies(movieId);

      this.setState({ loading: false });
    } catch (error) {}
  };

  copyMoviesFromProps = ({ movie }) =>
    !isEmpty(movie) &&
    this.setState({ detail: movie }, () => this.getMovieInfo());

  componentWillMount = () => {
    this.copyMoviesFromProps(this.props);
  };

  componentWillReceiveProps = nextProps => {
    if (!isEqualWith(nextProps.movie, this.props.movie)) {
      this.copyMoviesFromProps(nextProps);
    }
  };

  render() {
    const { detail, loading } = this.state;
    return loading ? (
      <LoadingIndicator />
    ) : (
      <Section>
        <Poster hero={detail.poster} />
        <Col size={2}>
          <H1>{detail.title}</H1>
          <p>{detail.overview}</p>
        </Col>
      </Section>
    );
  }

  /* render() {
    const { detail, loading } = this.state;
    return <CardWithLoading isLoading={loading} detail={detail} />;
  } */
}

DetailPage.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

const mapStateToProps = (state, props) => ({
  movie: getMovie(state, { ...props, posterSize: 'original' })
});

const mapDispatchToProps = {};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(DetailPage);
