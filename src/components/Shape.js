import React from 'react';
import PropTypes from 'prop-types';


function Shape({ color, backgroundColor, text }){
  return ( 
    <>
      <p style={{ color:  color  }}>{text}</p>
      <div style={{ width: 300, height: 200, backgroundColor:  backgroundColor  }}>Hi</div>
    </>
  );
}

Shape.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Shape;
