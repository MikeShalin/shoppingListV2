import ProductList from './index'
import { product } from 'Fixtures'

const item = ProductList.create(product)

it('creates an instance of model', () => {
  expect(item.list).toEqual(product.list)
  expect(item.error).toBe(product.error)
})

it('remove product from list', () => {
  const fn = item.removeProductOfList(1)
  expect(item.list).toEqual({})
  expect(item.list).not.toEqual(product.list)
  expect(fn).toBe(true)
})

it('add product to list', () => {
  const newProduct = {
    id: 2,
    name: 'newProduct',
    icon: 'newProduct',
    date: 'Sat Jan 05 2019 12:41:54 GMT+0400 (Самарское стандартное время)',
  }
  const fn = item.addToProductList(newProduct)
  expect(item.list).toEqual(newProduct)
  expect(item.list).not.toEqual({})
  expect(fn).toBe(true)
})
