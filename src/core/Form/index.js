/** @flow **/
import * as React from 'react'
import {
  Button,
  Checkbox,
  Form,
  Segment,
} from 'semantic-ui-react'

import Wrapper from 'Core/styled/Wrapper'

type TForm = {
  login: {
    label: string,
    placeholder: string,
    onChange: (value: {}) => void,
    name: string,
  },
  withTerms?: {
    label: string,
    onChange: () => mixed,
    checked: boolean,
  },
  password: {
    label: string,
    placeholder: string,
    onChange: (value: {}) => void,
    name: string,
  },
  onSubmit: () => boolean,
  children: *,
  success: boolean,
  error: boolean,
  loading: boolean,
}

const MainForm = ({
                    login,
                    withTerms,
                    password,
                    onSubmit,
                    children,
                    success,
                    error,
                    loading,
                  }: TForm) => (
  <Wrapper>
    <Segment>
      <Form
        onSubmit={onSubmit}
        success={success}
        error={error}
        loading={loading}
      >
        <Form.Field>
          <Form.Input {...login}/>
        </Form.Field>
        <Form.Field>
          <Form.Input {...password}/>
        </Form.Field>
        <Form.Field>
          {
            withTerms && <Checkbox {...withTerms}/>
          }
        </Form.Field>
        <Button
          color='blue'
          type='submit'
        >Submit</Button>
      </Form>
      {
        (success || error) && children
      }
    </Segment>
  </Wrapper>
)

export default MainForm