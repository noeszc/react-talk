import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const Img = (props, ...rest) => (
  <Image
    className={props.className}
    src={props.src}
    alt={props.alt}
    {...rest}
  />
);

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Img;
