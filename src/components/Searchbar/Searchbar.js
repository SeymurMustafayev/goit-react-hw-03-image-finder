/* eslint-disable react/static-property-placement */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    const { value } = e.target;

    this.setState({ text: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <header className={s.Searchbar}>
          <form onSubmit={this.handleSubmit} className={s.SearchForm}>
            <button type="submit" className={s.SearchForm_button}>
              <span className={s.SearchForm_button_label}>Search</span>
            </button>

            <input
              onChange={this.onChange}
              value={text}
              className={s.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
