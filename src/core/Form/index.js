/** @flow **/
import * as React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

type TForm = {
  login: {
    label: string,
    placeholder: string,
  },
  withTerms?: boolean,
  password: {
    label: string,
    placeholder: string,
  },
}

const MainForm = ({
                    login,
                    withTerms,
                    password,
                  }: TForm) => (
  <Form>
    <Form.Field>
      <Form.Input
        label={login.label}
        type='email'
        placeholder={login.placeholder}/>
    </Form.Field>
    <Form.Field>
      <Form.Input
        label={password.label}
        type='password'
        placeholder={password.placeholder}/>
    </Form.Field>
    <Form.Field>
      {withTerms && <Checkbox label='I agree to the Terms and Conditions'/>}
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default MainForm