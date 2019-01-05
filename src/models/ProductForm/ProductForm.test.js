import ProductForm from './index'

const item = ProductForm.create({
  productName: '',
})

it('creates an instance of model', () => {
  expect(item.productName).toBe('')
})

it('can change product name', () => {
  const product = 'product'
  item.onChange(product)
  expect(item.productName).toBe(product)
})

/** отправка формы тестируется в RootModel **/
