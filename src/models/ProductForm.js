import { types } from 'mobx-state-tree'
import { getItem, setItem } from 'Utils/localStorage'

const ProductForm = types
  .model('Store', {
    productName: types.string,
  })
  .actions(self => ({
    onChange(target) {
      self.productName = target
    },
    onSubmit() {
      const key = 'productList'
      const productList = getItem(key)
      const value = productList
        ? JSON.stringify([...JSON.parse(productList), self.productName])
        : JSON.stringify(self.productName)
      setItem({value, key})
      self.onChange('')
      return false
    },
  }))

export default ProductForm.create({
  productName: '',
})
