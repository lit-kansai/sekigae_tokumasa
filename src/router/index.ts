import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Create1 from "@/views/Create1.vue";
import Create2 from "@/views/Create2.vue";
import Create3 from "@/views/Create3.vue";
import Random from "@/views/Random.vue";
import SeatMap from "@/views/SeatMap.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create/members",
    name: "Create1",
    component: Create1,
  },
  {
    path: "/create/tables",
    name: "Create2",
    component: Create2,
  },
  {
    path: "/create/info",
    name: "Create3",
    component: Create3,
  },
  {
    path: "/random",
    name: "Random",
    component: Random,
  },
  {
    path: "/seatmap",
    name: "SeatMap",
    component: SeatMap,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
