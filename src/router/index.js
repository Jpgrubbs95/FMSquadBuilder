import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayout from '../layout/AppLayout.vue'
import RoleGradeView from '../views/RoleGradeView.vue'
import SquadAnalysis from '../views/SquadAnalysis.vue'
import SquadFinances from '../views/SquadFinancesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'hello',
          component: HomeView
        },
        {
          path: '/roleGrades',
          name: 'roleGrades',
          component: RoleGradeView
        },
        {
          path: '/squadAnalysis',
          name: 'squadAnalysis',
          component: SquadAnalysis
        },
        {
          path: '/squadFinances',
          name: 'squadFinances',
          component: SquadFinances
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    }
  ]
})

export default router
