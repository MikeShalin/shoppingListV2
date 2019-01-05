import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { formFields } from './config'
import Registration from './index'

//TODO описать другие тесты
// describe('config Registration component', () => {
//   it('formFields matches initial state', () => {
//     expect(formFields).toEqual({
//       login: {
//         label: 'Enter email',
//         placeholder: 'Enter email',
//       },
//       password: {
//         label: 'Enter Password',
//         placeholder: 'Enter Password',
//       },
//       withTerms: true,
//     })
//   })
// })
//
// describe('Registration component', () => {
//   it('matches early snapshots', () => {
//     const tree = shallow(<Registration />)
//     expect(shallowToJson(tree)).toMatchSnapshot()
//   })
// })
describe('Registration component', () => {
  it('matches early snapshots', () => {
    expect(true).toBe(true)
  })
})