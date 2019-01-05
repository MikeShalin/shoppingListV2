import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ProductFormComponent from './index'
import ProductFormModel from 'Models/ProductForm'

const productForm = ProductFormModel.create({
  productName: '',
})

describe('ProductForm component', () => {
  it('matches early snapshots', () => {
    const props = {
      handleChange: () => false,
      productForm: {
        onSubmit: () => true,
        productName: '',
      },
    }
    const tree = shallow(
      <ProductFormComponent.wrappedComponent productForm={productForm} {...props} />,
    )
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})