import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/HomePage.vue")
  },
  {
    path: "/usuario",
    name: "Usuário",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/formularios/Usuario.vue")
  },

  {
    path: "/sobre",
    name: "Sobre",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "Página não encontrada",
    component: () =>
      import(/* webpackChunkName: 'demo' */ "../views/paginas/Erro404.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
