import React from 'react';
import propTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <div className="container">
      <button className="Button" type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: propTypes.func.isRequired,
};

export default Button;
