import { getIcons } from '../helpers'

describe('helpers ', () => {
  it('getIcons', () => {
    const name = 'lol'
    expect(getIcons(name)).toBe(`https://api.adorable.io/avatars/285/${name}.png`)
  })
})