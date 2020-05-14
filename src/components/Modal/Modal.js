import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    link: propTypes.string,
    onClick: propTypes.func.isRequired,
  };

  closeModalEvent = e => {
    if (e.key === 'Escape') this.props.onClick();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalEvent);
  }

  render() {
    const { link, onClick } = this.props;

    return (
      <div className="Overlay" onClick={onClick}>
        <div className="Modal">
          <img src={link} alt="" />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalEvent);
  }
}
