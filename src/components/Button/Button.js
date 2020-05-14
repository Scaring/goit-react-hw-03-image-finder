import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <div className="container">
      <button className={styles.Button} type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: propTypes.func.isRequired,
};

export default Button;
