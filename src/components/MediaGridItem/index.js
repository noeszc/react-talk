import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GridItem from 'components/GridItem';
import Img from 'components/Img';

import Wrapper from './Wrapper';

const MediaGridItem = ({ item }) => {
  const content = (
    <Link to={{ pathname: `/movie/${item.friendlyTitle}/${item.id}` }}>
      <Wrapper>
        <Img src={item.poster} alt={item.title} />
      </Wrapper>
    </Link>
  );
  return <GridItem item={content} />;
};

MediaGridItem.propTypes = {
  item: PropTypes.shape()
};

export default MediaGridItem;
