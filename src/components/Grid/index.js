import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, map } from 'lodash';

import Ul from './Ul';
import Wrapper from './Wrapper';

const Grid = ({ component, items }) => {
  const ComponentToRender = component;
  let content = <div />;

  if (!isEmpty(items)) {
    content = map(items, item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
};

Grid.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default Grid;
