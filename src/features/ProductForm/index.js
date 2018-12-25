/** @flow **/
import * as React from 'react'
import {
  Input,
  Form,
  Button,
} from 'semantic-ui-react'
import {
  compose,
  lifecycle,
  withHandlers,
  type HOC,
} from 'recompose'
import { inject, observer } from 'mobx-react'

type TProps = {
  handleChange: (value: SyntheticKeyboardEvent<KeyboardEvent>) => boolean,
  productForm: {
    onSubmit: () => boolean,
    productName: string,
  }
}

const FormExampleForm = ({
                           handleChange,
                           productForm: {
                             onSubmit,
                             productName,
                           },
                         }: TProps) => (
  <Form onSubmit={onSubmit}>
    <Form.Field>
      <Input
        placeholder='Enter product...'
        onChange={handleChange}
        value={productName}
      />
    </Form.Field>
    <Form.Field>
      <Button color='blue' type='submit'>Submit</Button>
    </Form.Field>
  </Form>
)

const composed: HOC<*, {}> = compose(
  inject('productForm'),
  withHandlers({
    handleChange: ({ productForm: { onChange } }) => (e) => {
      onChange(e.target.value)
      return false
    },
  }),
  observer,
)

export default composed(FormExampleForm)