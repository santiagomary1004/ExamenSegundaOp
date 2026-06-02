import { createRouter, createWebHistory } from 'vue-router';
import TicketListView from '../views/TicketListView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/tickets' }, // Redirige la raíz a /tickets
    { path: '/tickets', component: TicketListView }
  ]
});

export default router;