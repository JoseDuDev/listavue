import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/HomePage.vue")
  },
  {
    path: "/listas",
    name: "Listas",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/Listas.vue"),
    async beforeEnter(to, from, next) {
      console.log(store.state);
      if (store.state.usuario) {
        next();
      } else {
        next({ path: "/usuario" });
      }
    }
  },
  {
    path: "/usuario",
    name: "Usuário",
    component: () =>
      import(
        /* webpackChunkName: "usuario" */ "../views/formularios/Usuario.vue"
      ),
    async beforeEnter(to, from, next) {
      console.log(store.state);
      if (!store.state.usuario) {
        next();
      } else {
        next({ path: "/listas" });
      }
    }
  },
  {
    path: "/entrar",
    name: "Entrar",
    component: () =>
      import(
        /* webpackChunkName: "usuario" */ "../views/formularios/Entrar.vue"
      ),
    async beforeEnter(to, from, next) {
      console.log("entrar");
      console.log(store.state);
      if (!store.state.usuario) {
        next();
      } else {
        next({ path: "/listas" });
      }
    }
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/nao-autorizado",
    name: "Usuário não autorizado",
    component: () =>
      import(/* webpackChunkName: 'erro401' */ "../views/paginas/Erro401.vue")
  },
  {
    path: "*",
    name: "Página não encontrada",
    component: () =>
      import(/* webpackChunkName: 'demo' */ "../views/paginas/Erro404.vue")
  }
];

const router = new Router({
  routes
});

export default router;
