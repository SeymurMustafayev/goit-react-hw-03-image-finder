// import s from './button.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import s from './button.module.css';

const Button = ({ changePage }) => {
  return (
    <button onClick={changePage} className={s.Button} type="button">
      Lode More
    </button>
  );
};

export default Button;

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};
