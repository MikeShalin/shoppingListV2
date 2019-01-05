import ProductForm from 'Models/ProductForm'
import ProductList from 'Models/ProductList'
import { getItem, setItem } from 'Utils/localStorage'
import { key } from 'Config'
import { types } from 'mobx-state-tree'

const RootStore = types
  .model('RootStore', {
    productForm: types.optional(ProductForm, {
      productName: '',
    }),
    productList: types.optional(ProductList, {
      list: getItem(key) ? JSON.parse(getItem(key)) : {},
      error: null,
    }),
  })
  .views(self => ({
    getModel(name){
      return self[name]
    }
  }))

export default RootStore