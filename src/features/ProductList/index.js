/** @flow **/
import React from 'react'
import { List } from 'semantic-ui-react'
import {
  compose,
  type HOC,
} from 'recompose'
import { inject, observer } from 'mobx-react'

import Product from 'Features/Product'

type TProps = {
  productList: {
    list: {}
  }
}
const ListExampleDivided = ({
                              productList: {
                                list,
                              },
                            }: TProps) => (
  <List divided relaxed>
    {
      Object.entries(list).map(([id, product]) => (
        <Product key={id} id={id} {...product}>
          {product.name}
        </Product>
      ))
    }
  </List>
)

const composed: HOC<*, {}> = compose(
  inject('productList'),
  observer,
)

export default composed(ListExampleDivided)
