import Vue from 'vue';
import LoginForm from '../components/LoginForm';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

export default {
  title: 'Forms/Login',
  component: LoginForm
}

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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginForm },
  template: `<div class="row justify-center">
    <login-form></login-form>
  </div>`,
  i18n: new VueI18n({
    locale: 'en-us',
    fallbackLocale: 'en-us'
  })
});

export const Primary = Template.bind({});
