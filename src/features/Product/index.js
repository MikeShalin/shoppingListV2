/** @flow **/
import React from 'react'
import {
  List,
  Image,
  Button,
} from 'semantic-ui-react'

import { getIcons } from 'Utils/helpers'

type TProps = {
  name: string,
  children: any,
  date: string,
}

const ListExampleDivided = ({
                              name,
                              children,
                              date,
                            }: TProps) => (
  <List.Item>
    <Image avatar src={getIcons(name)}/>
    <List.Content>
      <List.Header as='a'>{children}</List.Header>
      <List.Description as='a'>Updated {date} ago</List.Description>
    </List.Content>
    <List.Content floated='right'>
      <Button negative>✖</Button>
    </List.Content>
  </List.Item>
)

export default ListExampleDivided
