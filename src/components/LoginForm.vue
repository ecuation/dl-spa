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
      email: 'test@test.dev',
      password: 'secret'
    }
  },
  methods: {
    onSubmit () {
      this.$nextTick(() => {
        // const clientId = process.env.API_CLIENT_ID
        // const secret = process.env.API_CLIENT_SECRET
        console.log(process.env.API_CLIENT_ID)
        this.$axios.post('http://docline-api.development/v1/oauth/token', {
          grant_type: 'password',
          client_id: 2,
          client_secret: '7jMyljwyEDRNQJtyhfl9YmVdzMoBxbZT0ZpAhYth',
          username: 'test-user@docline.development',
          password: 'secret123',
          scope: ''
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
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
