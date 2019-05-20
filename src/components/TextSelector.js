import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ changeHandler, text }) {


  return (
      <>
      <input name="text" type="text" value={text} onChange={changeHandler} />
      </>
  );

}
TextSelector.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default TextSelector;
