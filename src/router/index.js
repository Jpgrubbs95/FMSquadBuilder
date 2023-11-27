import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayout from '../layout/AppLayout.vue'
import RoleGradeView from '../views/RoleGradeView.vue'
import SquadAnalysis from '../views/SquadAnalysis.vue'
import PlayerAnalysis from '../views/PlayerAnalysis.vue'
import SquadFinances from '../views/SquadFinancesView.vue'
import ScoutingView from '../views/ScoutingView.vue'
import AboutView from '../views/AboutView.vue'
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
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
        {
          path: '/roleGrades',
          name: 'roleGrades',
          component: RoleGradeView
        },
        {
          path: '/playerAnalysis',
          name: 'playerAnalysis',
          component: PlayerAnalysis
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
        },
        {
          path: '/scouting',
          name: 'scouting',
          component: ScoutingView
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
