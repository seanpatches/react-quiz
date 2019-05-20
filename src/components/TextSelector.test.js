import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('Color input component', () => {
  it('renders a ColorSelector', () => {
    const wrapper = shallow(<TextSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
