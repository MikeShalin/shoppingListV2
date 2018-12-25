import ProductForm from 'Models/ProductForm'
import ProductList from 'Models/ProductList'

const stores = {}

Object.assign(stores, {
  productForm: ProductForm,
  productList: ProductList,
})

export default stores
