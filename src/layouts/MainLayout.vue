<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-pa-md">
      <q-toolbar class="bg-primary text-white">
        <q-space />
        <q-tabs>
          <q-route-tab
            class="text-capitalize"
            :label="$t('Index')"
            :to="{path: '/'}"
            v-if="isAuthenticated"
          />
          <q-route-tab
            class="text-capitalize"
            :label="$t('Login')"
            :to="{path: 'login'}"
            v-if="!isAuthenticated"
          />
          <q-tab
            class="text-capitalize"
            name="logout"
            :label="$t('logout')"
            @click="logout"
            v-if="isAuthenticated"
          />
        </q-tabs>
      </q-toolbar>
    </div>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      isAuth: localStorage.getItem('bearerToken') !== null
    }
  },
  computed: {
    isAuthenticated: {
      get: function () {
        return this.isAuth
      },
      set: function (newValue) {
        this.isAuth = newValue
      }
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('bearerToken')
      this.$router.push({ path: '/login' })
      this.isAuthenticated = false
    }
  }
}
</script>
