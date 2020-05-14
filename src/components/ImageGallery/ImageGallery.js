import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            link={image.smallImgLink}
            key={image.id}
            id={image.id}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
