/** @flow **/
import m from 'moment'

export const getIcons = (name: string): string => `https://api.adorable.io/avatars/285/${name}.png`

type TGetHumanizedTime = {
  date: number,
  parse: string,
  isHumanize: boolean,
}
export const getHumanizedTime = ({ date, parse, isHumanize }: TGetHumanizedTime) => (
  m.duration(date, parse).humanize(isHumanize)
)

export const onPlayerImageError = (e: *) => {
  e.currentTarget.src = '/images/no-photo.png'
  e.currentTarget.onError = ''
  return true
}

