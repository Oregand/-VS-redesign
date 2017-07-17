import Vue from 'vue';
import Router from 'vue-router';
import DashboardS from '@/components/Dashboard-Secretary';
import DashboardT from '@/components/Dashboard-Teacher';
import SingleLearner from '@/components/Single-Learner';
import SingleFaculty from '@/components/Single-Faculty';
import MenuLayout from '@/components/Menu-Layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard-Secretary',
      component: DashboardS,
    },
    {
      path: '/DashboardV2',
      name: 'Dashboard-Teacher',
      component: DashboardT,
    },
    {
      path: '/SingleLearner',
      name: 'Single-Learner',
      component: SingleLearner,
    },
    {
      path: '/SingleFaculty',
      name: 'Single-Faculty',
      component: SingleFaculty,
    },
    {
      path: '/MenuLayout',
      name: 'Menu-Layout',
      component: MenuLayout,
    },
  ],
});
