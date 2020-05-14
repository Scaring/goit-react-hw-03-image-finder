import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ link, id, onClick }) => {
  return (
    <li className="ImageGalleryItem" id={id} onClick={onClick}>
      <img src={link} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  link: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
