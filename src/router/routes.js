
export const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export const makeBeforeEach = () => {
  return (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('bearerToken') === null) {
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  }
}
