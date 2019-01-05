import RootModel from './index'

const item = RootModel.create({})
const initialState = {
  productForm: {
    productName: ''
  },
  productList: {
    list: {},
    error: null,
  },
}

it('creates an instance of model', () => {
  expect(item).toMatchObject(initialState)
})

it('can get child model ', () => {
  const models = Object.keys(initialState)
  models.forEach((modelName) => {
    const model = item.getModel(modelName)
    expect(model).toMatchObject(initialState[modelName])
  })
})

/** при тестировании внутри дочерней модели ругается на getParent **/
it('can submit form', () => {
  const ProductFormModel = item.getModel('productForm')
  const getSubmit = ProductFormModel.onSubmit()
  expect(getSubmit).toBe(true)
})
