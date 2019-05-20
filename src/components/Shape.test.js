import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape.js';

describe('Shape input component', () => {
  it('renders a Shape', () => {
    const wrapper = shallow(<Shape backgroundColor="blue" color="red" text="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
