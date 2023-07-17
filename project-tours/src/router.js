import Vue from 'vue'
import VueRouter from "vue-router";

import TourismShop from './components/tourism_shop/TourismShop.vue'
import TourismTrips from './components/project_tours/content/TourismTrips.vue'

Vue.use(VueRouter);

const routes = [
  {path:"/shop", component: TourismShop},
  {path: "/", component: TourismTrips}

];

const router = new VueRouter({
  mode:'history',
  routes
});

export default router;