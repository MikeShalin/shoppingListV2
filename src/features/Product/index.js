import React from 'react'
import { List, Image } from 'semantic-ui-react'

//TODO alias for utils
import { getIcons } from 'Root/utils/helpers'

const ListExampleDivided = ({
                              name,
                              children,
                              date,
                            }) => (
  <List.Item>
    <Image avatar src={getIcons(name)}/>
    <List.Content>
      <List.Header as='a'>{children}</List.Header>
      <List.Description as='a'>Updated {date} ago</List.Description>
    </List.Content>
  </List.Item>
)

export default ListExampleDivided
