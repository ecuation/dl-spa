import Vue from 'vue';
import Quasar from 'quasar';
import { Ripple } from "quasar";
import 'quasar/dist/quasar.min.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

import 'quasar/dist/quasar.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

Vue.use(Quasar, {
  config: {},
  directives: [ Ripple ]
});
