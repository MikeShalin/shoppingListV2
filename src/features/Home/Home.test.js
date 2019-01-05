import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Home from './index'

describe('Home component', () => {
  it('matches early snapshots', () => {
    const tree = shallow(<Home />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})