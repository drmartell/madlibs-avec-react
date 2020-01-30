import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, handleChange }) => (
  <form onSubmit={onSubmit} onChange={handleChange} className={styles.Form}>
    <input type="text" id={0} placeholder="adjective" />
    <input type="text" id={1} placeholder="noun" />
    <input type="text" id={2} placeholder="verb, past tense" />
    <input type="text" id={3} placeholder="adverb" />
    <input type="text" id={4} placeholder="adjective" />
    <input type="text" id={5} placeholder="noun" />
    <input type="text" id={6} placeholder="noun" />
    <input type="text" id={7} placeholder="adjective" />
    <input type="text" id={8} placeholder="verb" />
    <input type="text" id={9} placeholder="adverb" />
    <input type="text" id={10} placeholder="verb, past tense" />
    <input type="text" id={11} placeholder="adjective" />
    <button>Create Madlib</button>
    <button type="reset" value="Clear Entries">Clear Entries</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
