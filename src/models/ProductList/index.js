import { types } from 'mobx-state-tree'
import _ from 'lodash'

import { getItem, setItem } from 'Utils/localStorage'
import { key } from 'Config'

const Product = {
  id: types.number,
  name: types.string,
  icon: types.string,
  date: types.string,
}

const ProductList = types
  .model('Store', {
    list: types.frozen(Product),
    error: types.union(types.string, types.null),
  })
  .actions(self => ({
    removeProductOfList(id) {
      const list = JSON.parse(getItem(key))
      self.list = _.omit(list, id)
      setItem({ key, value: JSON.stringify(self.list) })
      return true
    },
    addToProductList(product) {
      const value = {...JSON.parse(getItem(key)), ...product}
      setItem({ value: JSON.stringify(value), key })
      self.list = value
      return true
    },
    handleChange(target) {
      self.productName = target
    },
  }))

export default ProductList
