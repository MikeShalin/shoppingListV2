import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { formFields } from './config'
import Registration from './index'

describe('config Registration component', () => {
  it('formFields matches initial state', () => {
    expect(formFields).toEqual({
      login: {
        label: 'Enter email',
        placeholder: 'Enter email',
      },
      password: {
        label: 'Enter Password',
        placeholder: 'Enter Password',
      },
    })
  })
})

describe('Registration component', () => {
  it('matches early snapshots', () => {
    const tree = shallow(<Registration />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})