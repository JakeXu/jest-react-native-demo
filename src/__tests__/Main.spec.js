jest.mock('react-native');
jest.dontMock('../Main');
import React from 'react';
import Main from '../Main';
import { Text, View } from 'react-native';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow } from 'enzyme';

console.log('\n\nText is defined?', Boolean(Text));
console.log('\n\nView is defined?', Boolean(View));

describe('<Main />', () => {
  it('creates the element', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(View).length).toEqual(1); //fails
  });
  it('works', () => {
    expect(1 + 4).toEqual(5);
  });
});
