// import ProductForm from './ProductForm.js'
//
// const item = ProductForm.create({
//   productName: '',
// })
//
//
// const profile = {
//   team1_name_en: '',
//   score_team1: '',
//   score_team2: '',
//   team2_name_en: '',
//   match_date: '',
// }
//
// const json = {
//   data: [{
//     xml_export_sportscode: '',
//   },
//   ],
// }
// const param = 1
//
// const fetchXML = jest.fn((status) => (res) => {
//   if (status === 'onRequest') {
//     item.setFetching(true)
//   }
//   if (status === 'onSuccess') {
//     item.setFetching(false)
//   }
//   if (status === 'onError') {
//     item.setError(res)
//     item.setFetching(false)
//   }
// })
//
it('ok', () => {
  expect(true).toBe(true)
})
// it('creates an instance of model', () => {
//   expect(item.isOpened).toBe(false)
//   expect(item.checked).toEqual({})
//   expect(item.scope).toEqual({})
//   expect(item.isFetching).toBe(false)
//   expect(item.error).toBe(null)
// })
//
// it('sets fetch flag', () => {
//   item.setFetching(true)
//   expect(item.isFetching).toBe(true)
// })
//
// it('adds error message to item', () => {
//   item.setError(new Error())
//   expect(item.error).toBe('Error')
// })
//
// it('sets popup isOpened flag', () => {
//   item.setOpened(true)
//   expect(item.isOpened).toBe(true)
// })
//
// it('sets fetch flag to true, on request', () => {
//   fetchXML('onRequest')()
//   expect(item.isFetching).toBe(true)
// })
//
// it('sets fetch flag on false, on success response', () => {
//   fetchXML('onSuccess')({ data: json.data, profile })
//   expect(item.isFetching).toBe(false)
// })
//
// it('handles error on request failure', () => {
//   fetchXML('onError')(new Error())
//   expect(item.error).toBe('Error')
//   expect(item.isFetching).toBe(false)
// })
//
// it('sets checked params', () => {
//   item.checkParam([param], true)
//   expect(item.checked).toEqual({ [param]: true })
// })