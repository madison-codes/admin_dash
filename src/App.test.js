import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import App from './App';

// describe('Application', () => {
//   context('renders correctly', () => {
//
//     it('renders without crashing', () => {
//       const div = document.createElement('div');
//       ReactDOM.render(<App />, div);
//     });
//
//     it('in the tag main', () => {
//       const wrapper = shallow(<App />);
//       assert.equal(wrapper.type(), 'main');
//     });
//
//     it('with the default states', () => {
//       const wrapper = mount(<App />)
//       wrapper.state.page =
//     })
//   });
// });
