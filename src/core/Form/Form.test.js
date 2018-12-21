import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Form from './index'

describe('Form component', () => {
  it('equal early snapshots with terms and conditions', () => {
    const props ={
      login: {
        label: 'First Name',
        placeholder: 'First Name',
      },
      password: {
        label: 'Enter Password',
        placeholder: 'Enter Password',
      },
      withTerms: true,
    }

    const tree = shallow(<Form {...props} />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
  it('equal early snapshots without terms and conditions', () => {
    const props ={
      login: {
        label: 'First Name',
        placeholder: 'First Name',
      },
      password: {
        label: 'Enter Password',
        placeholder: 'Enter Password',
      },
    }

    const tree = shallow(<Form {...props} />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})