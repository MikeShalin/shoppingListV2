/** @flow **/

export const password = {
  label: 'Enter Password',
  placeholder: 'Enter Password',
  name: 'password',
  type: 'password',
}

export const login = {
  label: 'Enter email',
  placeholder: 'Enter email',
  name: 'login',
  type: 'email',
}

export const withTerms = {
  label: 'I agree to the Terms and Conditions',
}

export const message = {
  success: {
    header: 'Registration Completed',
    content: 'You`re all signed up for the newsletter',
  },
  error: {
    header: 'Registration Failed',
    content: 'You can only sign up for an account once with a given e-mail address.',
  },
}
