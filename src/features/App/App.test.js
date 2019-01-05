import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import App from './index'

describe('App component', () => {
  it('matches early snapshots', () => {
    const tree = shallow(<App />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})