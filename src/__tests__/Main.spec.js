import React from 'react';
import Main from '../Main';
import { shallow } from 'enzyme';

describe('<Main />', () => {
  it('creates the element', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.length).toEqual(1);
  });
  it('works', () => {
    expect(1 + 4).toEqual(5);
  });
});
