import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isEqualWith } from 'lodash';

import SearchBar from 'components/SearchBar';
import MediaGrid from 'components/MediaGrid';

import { getMovies } from 'store/selectors/movies';
import filterCollection from 'utils/filterCollection';

import Section from './Section';
import { getLoading, getError } from '../../store/selectors/movies';

class HomePage extends React.PureComponent {
  state = { items: null };

  copyMoviesFromProps = ({ movies }) => this.setState({ items: movies });

  componentWillMount = () => {
    this.copyMoviesFromProps(this.props);
  };

  componentWillReceiveProps = nextProps => {
    if (!isEqualWith(nextProps.movies, this.props.movies)) {
      this.copyMoviesFromProps(nextProps);
    }
  };

  filterMovies = (event, data) => {
    const { value } = data;
    const { movies } = this.props;

    const items = filterCollection(movies, ['title'], value);

    this.setState({ items });
  };

  render() {
    const { loading, error } = this.props;
    const { items } = this.state;
    const movieGridProps = { loading, error, items };
    return (
      <Section>
        <SearchBar onChange={this.filterMovies} />
        <MediaGrid {...movieGridProps} />
      </Section>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
};

const mapStateToProps = (state, props) => ({
  movies: getMovies(state, { ...props, posterSize: 'original' }),
  loading: getLoading(state),
  error: getError(state)
});

const mapDispatchToProps = {};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(HomePage);
