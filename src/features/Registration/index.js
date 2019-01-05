/** @flow **/
import * as React from 'react'
import { Fragment } from 'react'
import {
  compose,
  withProps,
  defaultProps,
} from 'recompose'
import { inject, observer } from 'mobx-react/index'
import { Message } from 'semantic-ui-react'

import Form from 'Core/Form'
import {
  password as passwordConfig,
  login as loginConfig,
  withTerms as withTermsConfig,
  message,
} from './config'

type TProps = {
  registration: {
    login: string,
    password: string,
    withTerms: boolean,
    success: boolean,
    error: boolean,
    onChange: (value: {}) => boolean,
    onSubmit: () => boolean,
    fetching: boolean,
  },
  handlerChange: (value: {}) => void,
  header: string,
  content: string,
}

//TODO подумать как лучше передать пропсы и не нарушает ли это какой нибудь принцип?
const FormExampleForm = ({
                           registration: {
                             login,
                             password,
                             withTerms,
                             onChange,
                             onSubmit,
                             fetching,
                             ...registration
                           },
                           handlerChange,
                           header,
                           content,
                         }: TProps) => (
  <Fragment>
    <Form
      login={{ onChange: handlerChange, ...loginConfig }}
      password={{ onChange: handlerChange, ...passwordConfig }}
      withTerms={{
        onChange: () => onChange({ withTerms: !withTerms }),
        checked: withTerms,
        ...withTermsConfig,
      }}
      onSubmit={onSubmit}
      loading={fetching}
      {...registration}
    >
      <Message
        header={header}
        content={content}
        {...registration}
      />
    </Form>
  </Fragment>
)

const composed = compose(
  inject('registration'),
  defaultProps({
    successMessage: message.success,
    errorMessage: message.error,
  }),
  withProps(({ registration: { onChange } }) => ({
    handlerChange: (e) => {
      const {
        currentTarget: {
          name,
          value,
        },
      } = e
      onChange({ [name]: value })
    },
  })),
  observer,
  withProps(({
               registration: {
                 success,
               },
               successMessage,
               errorMessage,
             }) => ({
    header: success
      ? successMessage.header
      : errorMessage.header,
    content: success
      ? successMessage.content
      : errorMessage.content,
  })),
  observer,
)

export default composed(FormExampleForm)