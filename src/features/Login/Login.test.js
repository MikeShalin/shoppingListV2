import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { formFields } from './config'
import Login from './index'

describe('config login component', () => {
  it('formFields matches initial state', () => {
    expect(formFields).toEqual({
      login: {
        label: 'First Name',
        placeholder: 'First Name',
      },
      password: {
        label: 'Enter Password',
        placeholder: 'Enter Password',
      },
    })
  })
})

describe('Login component', () => {
  it('matches early snapshots', () => {
    const tree = shallow(<Login />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})