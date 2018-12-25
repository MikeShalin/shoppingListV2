import React from 'react'
import { List } from 'semantic-ui-react'
import Product from 'Features/Product'

const ListExampleDivided = () => (
  <List divided relaxed>
    <Product name='rachel' date='10'>
      Semantic-Org/Semantic-UI
    </Product>
    <Product name='lol' date='22'>
      Semantic-Org/Semantic-UI-Docs
    </Product>
    <Product name='meow' date='34'>
      Semantic-Org/Semantic-UI-Meteor
    </Product>
  </List>
)

export default ListExampleDivided
