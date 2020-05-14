import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ query, onChange, onSearch }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button" onClick={onSearch}>
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={query}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
