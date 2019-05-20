import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ changeHandler, backgroundColor, color }){
  return (
      <>
      <input name="color" type="color" value={color} onChange={changeHandler}/>
      <input name="backgroundColor" type="color" value={backgroundColor} onChange={changeHandler}/>
      </>
  );
}


ColorSelector.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default ColorSelector;
