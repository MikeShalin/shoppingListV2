import Registration from './index'
import { userInfo } from 'Fixtures'

const item = Registration.create({
  login: '',
  password: '',
  withTerms: false,
  success: false,
  error: false,
  fetching: false,
})

it('creates an instance of model', () => {
  expect(item.login).toBe('')
  expect(item.password).toBe('')
  expect(item.withTerms).toBe(false)
})

it('can change login string', () => {
  item.onChange({ login: userInfo.login })
  expect(item.login).toBe(userInfo.login)
})

it('can change password string', () => {
  item.onChange({ password: userInfo.password })
  expect(item.password).toBe(userInfo.password)
})

it('can accept about the terms and conditions', () => {
  const withTerms = true
  item.onChange({ withTerms })
  expect(item.withTerms).toBe(withTerms)
})

it('can reject about the terms and conditions', () => {
  const withTerms = false
  item.onChange({ withTerms })
  expect(item.withTerms).toBe(withTerms)
})

