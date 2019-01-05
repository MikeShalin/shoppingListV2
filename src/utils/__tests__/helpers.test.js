import {
  getIcons,
  getHumanizedTime,
  onPlayerImageError,
} from '../helpers'
import { errorImgSrc as src } from 'Fixtures'

describe('helpers ', () => {
  it('return src for product icons', () => {
    const name = 'lol'
    expect(getIcons(name)).toBe(`https://api.adorable.io/avatars/285/${name}.png`)
  })

  it('return how long have the product been placed', () => {
    const parse = 'seconds'
    const date = -1
    const timeAgo = getHumanizedTime({
      parse,
      date,
      isHumanize: true,
    })
    expect(timeAgo).toBe('a few seconds ago')
  })

  it('handles image loading error', () => {
    const event = {
      currentTarget: {
        src: '',
        onError: true,
      },
    }

    const fn = onPlayerImageError(event)
    expect(fn).toBe(true)
    expect(event).toEqual({
      currentTarget: {
        onError: '',
        src,
      },
    })
  })
})