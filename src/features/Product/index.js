/** @flow **/
import React from 'react'
import {
  List,
  Image,
  Button,
} from 'semantic-ui-react'
import {
  compose,
  withHandlers,
  type HOC,
} from 'recompose'
import { inject, observer } from 'mobx-react/index'
import m from 'moment'

import { getIcons, getHumanizedTime } from 'Utils/helpers'

type TProps = {
  icon: string,
  children: any,
  date: string,
  getUpdatedTime: () => string,
  productList: (value: number) => boolean,
  id: number,
}


const ListExampleDivided = ({
                              icon,
                              children,
                              date,
                              id,
                              productList: {
                                removeProductOfList,
                              },
                              getUpdatedTime,
                            }: TProps) => (
  <List.Item>
    <Image avatar src={getIcons(icon)}/>
    <List.Content>
      <List.Header as='a'>{children}</List.Header>
      <List.Description as='a'>Updated {getUpdatedTime()}</List.Description>
    </List.Content>
    <List.Content floated='right'>
      <Button negative onClick={() => removeProductOfList(id)}>✖</Button>
    </List.Content>
  </List.Item>
)

const composed: HOC<*, {}> = compose(
  inject('productList'),
  withHandlers({
    getUpdatedTime: ({ date }) => () => {
      const parse = 'seconds'
      const a = m(date)
      const b = m(new Date())
      return getHumanizedTime({
        parse,
        date: a.diff(b, parse),
        isHumanize: true,
      })
    },
  }),
  observer,
)

export default composed(ListExampleDivided)
