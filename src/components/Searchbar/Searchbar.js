import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ query, onChange, onSearch }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button
          type="submit"
          className={styles.SearchFormButton}
          onClick={onSearch}
        >
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
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
