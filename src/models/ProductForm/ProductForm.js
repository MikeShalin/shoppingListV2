import { types } from 'mobx-state-tree'
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
      const value = productList
        ? [...JSON.parse(productList), self.productName]
        : [self.productName]
      setItem({value: JSON.stringify(value), key})
      self.onChange('')
      return true
    },
  }))

export default ProductForm