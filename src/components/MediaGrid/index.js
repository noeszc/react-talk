import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import LoadingIndicator from 'components/LoadingIndicator';
import MediaGridItem from 'components/MediaGridItem';

const MediaGrid = ({ loading, error, items }) => {
  if (loading) {
    return <Grid component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <GridItem item="Something went wrong, please try again!" />
    );

    return <Grid component={ErrorComponent} />;
  }

  if (!isEmpty(items)) {
    return <Grid items={items} component={MediaGridItem} />;
  }

  return null;
};

MediaGrid.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any
};

export default MediaGrid;
