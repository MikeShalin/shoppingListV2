import { types } from 'mobx-state-tree'
import _ from 'lodash'

import { getItem, setItem } from 'Utils/localStorage'
import { key } from 'Config'

//TODO разделить на api и т.д.
const Registration = types
  .model('Store', {
    login: types.string,
    password: types.string,
    withTerms: types.boolean,
    success: types.boolean,
    error: types.boolean,
    fetching: types.boolean,
  })
  .actions(self => ({
    onChange(target) {
      const [[key, value]] = Object.entries(target)
      self[key] = value
    },
    onSuccess(){
      self.success = true
      self.error = false
      self.setFetching(false)
    },
    onError(){
      self.success = false
      self.error = true
      self.setFetching(false)
    },
    setFetching(state) {
      self.fetching = state
    },
    onSubmit() {
      const { login, password, withTerms } = self
      self.setFetching(true)
      if (!login || !password || !withTerms) {

        /** имитация загрузки **/
        //TODO calApi
        _.delay(self.onError , 1000)
        return false
      }
      self.login = ''
      self.password = ''
      self.withTerms = false

      //TODO не сбрасывается текст полей при отправке
      //TODO текст предупреждения
      //TODO Field Error
      //TODO Disabled Field submit, пока все не введешь
      //TODO Required
      /** имитация загрузки **/
      _.delay(self.onSuccess , 1000)
      return true
    },
  }))

export default Registration