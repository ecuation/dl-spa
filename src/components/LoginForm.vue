<template>
  <div class="row">
    <q-card square>
      <q-card-section>
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <q-form @submit="handleSubmit(onSubmit)" class="q-gutter-md">
            <ValidationProvider
              class="input-val"
              rules="required|email"
              mode="lazy"
              v-slot="{ errors, invalid, validated }"
            >
                <q-input
                  v-model="email"
                  :label="$t('email')"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                  square
                  filled
                  clearable
                />
            </ValidationProvider>
            <ValidationProvider
              class="input-val"
              rules="required|min:4"
              v-slot="{ errors, invalid, validated }"
              mode="lazy"
            >
              <q-input
                v-model="password"
                type="password"
                :label="$t('password')"
                :error="invalid && validated"
                :error-message="errors[0]"
                square filled
                clearable/>
            </ValidationProvider>
            <q-card-actions class="justify-center">
              <q-btn type="submit" :label="$t('login')" color="primary" flat style="width: 150px"/>
            </q-card-actions>
          </q-form>
        </ValidationObserver>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  name: 'LoginForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios({ sendToken: false }).post('oauth/token', {
        grant_type: 'password',
        client_id: process.env.API_CLIENT_ID,
        client_secret: process.env.API_CLIENT_SECRET,
        username: this.email,
        password: this.password,
        scope: ''
      }).then(res => {
        localStorage.setItem('bearerToken', res.data.access_token)
        this.$router.push({ path: '/' })
      }).catch(err => {
        console.log('error: ', err)
      })
    }
  }
}
</script>

<style scoped lang="less">
.q-card {
  width: 450px;
}

.input-val {
  display: block;
}
</style>
