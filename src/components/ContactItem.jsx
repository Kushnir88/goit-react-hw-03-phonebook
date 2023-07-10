// src/components/ContactItem.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onRemoveContact }) => {
  const { id, name, number } = contact;

  const handleRemove = () => {
    onRemoveContact(id);
  };

  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button onClick={handleRemove} className={styles.button}>
        Remove
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
 }).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactItem;