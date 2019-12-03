/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import s from './modal.module.css';

const Modal = ({ modalImage, onCloseModal }) => {
  return (
    <div className={s.Overlay} onClick={onCloseModal}>
      <div className={s.Modal}>
        <img src={modalImage} alt="some text" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImage: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
