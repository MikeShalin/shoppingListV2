import { types, getParent } from 'mobx-state-tree'
import _ from 'lodash'

import { getItem, setItem } from 'Utils/localStorage'
import { key } from 'Config'

const ProductForm = types
  .model('Store', {
    productName: types.string,
  })
  .actions(self => ({
    onChange(target) {
      self.productName = target
    },
    onSubmit() {
      const productList = getItem(key)
      const id = productList ? _.size(JSON.parse(productList)) + 1 : 1
      const product = {
        [id]:{
          name: self.productName,
          date: new Date,
          icon: self.productName,
        }
      }

      /** Добавляем в модель **/
      getParent(self).productList.addToProductList(product)
      self.onChange('')
      return true
    },
  }))

export default ProductForm