import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Product from './index'
import ProductList from 'Models/ProductList'
import { product } from 'Fixtures'

const productList = ProductList.create(product)

describe('ProductList component', () => {
  it('matches early snapshots', () => {
    const props = {
      ...product.list,
      getUpdatedTime: () => 'a few seconds ago',
    }
    const tree = shallow(
      <Product.wrappedComponent productList={productList} {...props} />
    )
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})