import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';

function withLoader(Component) {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LoadingIndicator />;
  };
}

export default withLoader;
