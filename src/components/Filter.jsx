// src/components/Filter.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <div className={styles.filter}>
        <label htmlFor="filterInput" className={styles.label}>
          Filter contacts by name:
        </label>
        <input
          type="text"
          id="filterInput"
          value={filter}
          onChange={onFilterChange}
          className={styles.input}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;