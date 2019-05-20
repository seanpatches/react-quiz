import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ changeHandler }) {


  return (
      <>
      <input name="text" type="text" onChange={changeHandler} />
      </>
  );

}
TextSelector.propTypes = {
  changeHandler: PropTypes.func.isRequired
};

export default TextSelector;
