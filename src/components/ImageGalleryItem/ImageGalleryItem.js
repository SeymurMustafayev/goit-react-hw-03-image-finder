/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import s from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt, onChangeModal, modalImage }) => {
  return (
    <li
      onClick={() => onChangeModal(modalImage)}
      className={s.ImageGalleryItem}
    >
      <img src={url} alt={alt} className={s.ImageGalleryItem_image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onChangeModal: PropTypes.func.isRequired,
  modalImage: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
