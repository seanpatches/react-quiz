import React, { PureComponent } from 'react';
import ColorSelector from '../components/ColorSelector';
import TextSelector from '../components/TextSelector';
import Shape from '../components/Shape';

export default class NameTag extends PureComponent {
  state = {
    color: '',
    backgroundColor: '',
    text: ''
  }

  

  render(){
    const { color, backgroundColor, text } = this.state;
    return (
        <>
        <ColorSelector />
        <TextSelector />
        <Shape backgroundColor={backgroundColor} color={color} text={text} />
      </>
    );
  }
}
