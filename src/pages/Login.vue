<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <login-form></login-form>
    </div>
  </q-page>
</template>

<script>

import LoginForm from 'components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<!--<style scoped lang="less">
  .q-card {
    width: 450px;
  }
</style>-->
