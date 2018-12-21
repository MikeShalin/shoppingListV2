/** @flow **/
import * as React from 'react'
import { Segment } from 'semantic-ui-react'

import ProductForm from 'Features/ProductForm'
import ProductList from 'Features/ProductList'
import Wrapper from 'Core/styled/Wrapper'

const FormExampleForm = () => (
  <Wrapper>
    <Segment>
      <ProductForm/>
      <ProductList/>
    </Segment>
  </Wrapper>
)

export default FormExampleForm