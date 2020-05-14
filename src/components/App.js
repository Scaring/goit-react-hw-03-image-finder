import React, { Component, Fragment } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import * as imagesAPI from '../services/image-api';
import styles from './App.module.css';

const mapper = images => {
  return images.map(
    ({ id, webformatURL: smallImgLink, largeImageURL: bigImgLink }) => ({
      id,
      smallImgLink,
      bigImgLink,
    }),
  );
};

export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    modalUrl: null,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });

    imagesAPI
      .fetchImages(query, page)
      .then(({ data }) => {
        this.setState({ images: mapper(data.hits) });
      })
      .then(() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      )
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearch = e => {
    e.preventDefault();

    this.setState({ page: 1 });
    this.fetchImages(this.state.query, 1);
  };

  handleIncrementPage = () => {
    const nextPage = this.state.page + 1;

    this.setState(
      () => ({ page: nextPage }),
      this.fetchImages(this.state.query, nextPage),
    );
  };

  handleOpenModal = e => {
    const targetImage = this.state.images.find(
      image => image.id === Number(e.currentTarget.id),
    );
    this.setState({ modalUrl: targetImage.bigImgLink });
  };

  handleCloseModal = () => {
    this.setState({ modalUrl: null });
  };

  render() {
    const { images, query, modalUrl, isLoading } = this.state;

    return (
      <Fragment>
        <Searchbar
          query={query}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
        />
        <div className={styles.App}>
          {images.length > 0 && (
            <ImageGallery images={images} onClick={this.handleOpenModal} />
          )}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          images.length > 0 && <Button onLoadMore={this.handleIncrementPage} />
        )}

        {modalUrl && <Modal link={modalUrl} onClick={this.handleCloseModal} />}
      </Fragment>
    );
  }
}
