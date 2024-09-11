import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import SignUpView from '@/views/SignUpView.vue';
import LoginView from '@/views/LoginView.vue';
import InvestView from '@/views/InvestView.vue';
import EducationSourcesView from '@/views/EducationSourcesView.vue';
import ContactView from '@/views/ContactView.vue';
import FinancialLiteracy from '@/components/FinancialLiteracy.vue';
import Budgeting from '@/components/Budgeting.vue';
import InvestmentGuides from '@/components/InvestmentGuides.vue';
import ProfileView from '@/views/ProfileView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView,
  },
  {
    path: '/invest',
    name: 'invest',
    component: InvestView,
    meta: { requiresAuth: true },
  },
  {
    path: '/education',
    name: 'education',
    component: EducationSourcesView,
    meta: { requiresAuth: true },
  },
  {
    path: '/financial-literacy',
    name: 'FinancialLiteracy',
    component: FinancialLiteracy,
  },
  {
    path: '/budgeting',
    name: 'Budgeting',
    component: Budgeting,
  },
  {
    path: '/investment-guides',
    name: 'InvestmentGuides',
    component: InvestmentGuides,
  },
   {
    path:'/Contact',
    name:'Contact',
    component:ContactView,
   },
   
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'login', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;