import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ link, id, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} id={id} onClick={onClick}>
      <img src={link} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  link: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
