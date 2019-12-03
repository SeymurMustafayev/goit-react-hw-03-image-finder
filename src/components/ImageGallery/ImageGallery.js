import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onChangeModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(el => (
        <ImageGalleryItem
          key={el.id}
          url={el.webformatURL}
          modalImage={el.largeImageURL}
          alt={el.tags}
          onChangeModal={onChangeModal}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChangeModal: PropTypes.func.isRequired,
};

export default ImageGallery;
