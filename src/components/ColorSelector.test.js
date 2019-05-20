import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('Color input component', () => {
  it('renders a ColorSelector', () => {
    const wrapper = shallow(<ColorSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
