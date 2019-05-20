import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ changeHandler }){
  return (
      <>
      <input name="color" type="color" onChange={changeHandler}/>
      <input name="backgroundColor" type="color" onChange={changeHandler}/>
      </>
  );
}


ColorSelector.propTypes = {
  changeHandler: PropTypes.func.isRequired
};

export default ColorSelector;
