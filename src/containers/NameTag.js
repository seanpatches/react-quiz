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

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render(){
    const { color, backgroundColor, text } = this.state;
    return (
        <>
        <ColorSelector changeHandler= {this.changeHandler}/>
        <TextSelector changeHandler= {this.changeHandler}/>
        <Shape backgroundColor={backgroundColor} color={color} text={text} />
      </>
    );
  }
}
