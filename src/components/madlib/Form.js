import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, handleChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" id={0} onChange={handleChange} placeholder="adjective" />
    <input type="text" id={1} onChange={handleChange} placeholder="noun" />
    <input type="text" id={2} onChange={handleChange} placeholder="verb, past tense" />
    <input type="text" id={3} onChange={handleChange} placeholder="adverb" />
    <input type="text" id={4} onChange={handleChange} placeholder="adjective" />
    <input type="text" id={5} onChange={handleChange} placeholder="noun" />
    <input type="text" id={6} onChange={handleChange} placeholder="noun" />
    <input type="text" id={7} onChange={handleChange} placeholder="adjective" />
    <input type="text" id={8} onChange={handleChange} placeholder="verb" />
    <input type="text" id={9} onChange={handleChange} placeholder="adverb" />
    <input type="text" id={10} onChange={handleChange} placeholder="verb, past tense" />
    <input type="text" id={11} onChange={handleChange} placeholder="adjective" />
    <button>Create Madlib</button>
    <button type="reset" value="Clear Entries">Clear Entries</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
