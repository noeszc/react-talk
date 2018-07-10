import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { bootstrapApp } from 'store/actions/app';

import './global-styles';

import Home from 'views/Home';
import Detail from 'views/Detail';

const AppWrapper = styled.div``;

class App extends Component {
  componentDidMount = () => this.props.bootstrapApp();

  render() {
    const { location } = this.props;
    return (
      <AppWrapper>
        <Route location={location} path="/" exact component={Home} />
        <Route
          location={location}
          path="/movie/:title/:id"
          exact
          component={Detail}
        />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = { bootstrapApp };

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(App);
