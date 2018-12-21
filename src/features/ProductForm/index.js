/** @flow **/
import * as React from 'react'
import {
  Input,
  Form,
  Button,
} from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <Input placeholder='Enter product...'/>
    </Form.Field>
    <Form.Field>
      <Button color='blue' type='submit'>Submit</Button>
    </Form.Field>
  </Form>
)

export default FormExampleForm