import React from 'react';
import { shallow } from 'enzyme'

import Test from './Test';

// const initialState = {
//   data: 0,
// }

// const mockStore = configureStore()
// let wrapper;
// let store;

// beforeEach(() => {
//   store = mockStore(initialState)
//   wrapper = shallow(<Test store={store} />)
// })

describe('Test component', () => {
  it('should render component properly', () => {
    const wrapper = shallow(<Test />)
    expect(wrapper).toMatchSnapshot()
  })
})
