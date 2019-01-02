/** @flow **/

export const getItem = (name: string) => localStorage.getItem(name)

type ASetItem = {
  key: string,
  value: string,
}
export const setItem = ({ key, value }: ASetItem): boolean => {
  localStorage.setItem(key, value)
  return false
}