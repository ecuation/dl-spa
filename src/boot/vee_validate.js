import { extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

// Install rules
extend('required', {
  ...required,
  message: 'Required field'
})

extend('email', {
  ...email,
  message: 'Incorrect email'
})

extend('min', {
  ...min,
  message: 'Incorrect email'
})
