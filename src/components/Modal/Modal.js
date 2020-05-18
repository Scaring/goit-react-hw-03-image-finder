import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    link: propTypes.string,
    onClick: propTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalEvent);
  }

  closeModalEvent = e => {
    if (e.key === 'Escape') this.props.onClick();
  };

  render() {
    const { link, onClick } = this.props;

    return (
      <div className={styles.Overlay} onClick={onClick}>
        <div className={styles.Modal}>
          <img src={link} alt="" />
        </div>
      </div>
    );
  }
}
