import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function GridItem({ item }) {
  return (
    <Wrapper>
      <Item>{item}</Item>
    </Wrapper>
  );
}

GridItem.propTypes = {
  item: PropTypes.any,
};

export default GridItem;
