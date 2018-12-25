import { types } from 'mobx-state-tree'

const ExecutionDataItem = types.model({
  id: types.number,
  start_time: types.string,
  finish_time: types.string,
  program_version: types.number,
})

const ProductList = types
  .model('Store', {
    list: types.optional(types.array(ExecutionDataItem), []),
    error: types.union(types.string, types.null),
  })
  .actions(self => ({
    handlerSubmit() {
      console.log('it submit ', self.productName)
      // self.productName = location
    },
    handleChange(target) {
      self.productName = target
    },
  }))

export default ProductList.create({
  list: [],
  error: null,
})
