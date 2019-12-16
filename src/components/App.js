import React, { Component } from 'react';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import * as API from '../servises/api';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from '../components/ImageGalleryItem';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    modalOpen: false,
    modalLoading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSubmit = query => {
    this.setState({ query, modalLoading: true });
    API.getImages(query)
      .then(resData => {
        this.setState({ images: resData.data.hits });
      })
      .finally(() => this.setState({ modalLoading: false }));
  };

  onChangeModal = modalImage => {
    this.setState({ modalOpen: true, modalImage });
    window.addEventListener('keydown', this.onCloseModal);
  };

  onCloseModal = e => {
    if (e.target === e.currentTarget || e.keyCode === 27)
      this.setState({ modalOpen: false });
    window.removeEventListener('keydown', this.onCloseModal);
  };

  changePage = () => {
    const { query, page } = this.state;
    API.getImages(query, page + 1).then(resData => {
      this.setState(prevState => ({
        page: prevState.page + 1,
        images: [...prevState.images, ...resData.data.hits],
      }));
    });
  };

  render() {
    const { images, modalOpen, modalImage, modalLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {modalLoading && <Loader />}
        <ImageGallery images={images} onChangeModal={this.onChangeModal} />
        {images.length > 0 && <Button changePage={this.changePage} />}e
        {modalOpen && (
          <Modal onCloseModal={this.onCloseModal} modalImage={modalImage} />
        )}
      </div>
    );
  }
}
