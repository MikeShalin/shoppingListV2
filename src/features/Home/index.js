/** @flow **/
import * as React from 'react'
import { Segment } from 'semantic-ui-react'

import ProductForm from 'Features/ProductForm'
import ProductList from 'Features/ProductList'

const FormExampleForm = () => (
  <Segment>
    <ProductForm/>
    <ProductList/>
  </Segment>
)

export default FormExampleForm