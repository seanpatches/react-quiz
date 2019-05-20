import React, { PureComponent } from 'react';

export default class ColorSelector extends PureComponent {

  state = {
    backgroundColor: '',
    color: ''
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { backgroundColor, color } = this.state;

    return (
      <>
      <input name="color" type="color" value={ color } onChange={this.changeHandler}/>
      <input name="backgroundColor" type="color" value={ backgroundColor } onChange={this.changeHandler}/>
      </>
    );
  }
}
