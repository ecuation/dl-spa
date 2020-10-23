<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="email" :label="$t('email')"/>
              <q-input square filled clearable v-model="password" type="password" :label="$t('password')"/>
            </q-form>
          </q-card-section>

          <q-card-actions class="justify-center">
            <q-btn :label="$t('Login')" color="primary" flat style="width: 150px"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped lang="less">
  .q-card {
    width: 450px;
  }
</style>
