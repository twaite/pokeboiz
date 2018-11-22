import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Pokemon from '@/views/Pokemon.vue'; // @ -> /src/ -> ../../../../src/

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/:name",
      name: "pokemon",
      component: Pokemon
    }
  ]
});
