import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    titulo: "MM Listas",
    subtitulo: "Gerenciador de listas",
    produtos: [],
    listas: [],
    setores: [],
    marcas: []
  },
  mutations: {
    set_produtos(state, data) {
      console.log(data);
      state.produtos = data;
    },
    set_setores(state, data) {
      console.log(data);
      state.setores = data;
    },
    set_marcas(state, data) {
      console.log(data);
      state.marcas = data;
    },
    set_listas(state, data) {
      console.log(data);
      state.listas = data;
    }
  },
  actions: {
    act_produtos({ commit }) {
      axios
        .get("/api/produto")
        .then(result => commit("set_produtos", result.data))
        .catch(console.error);
    },
    act_setores({ commit }) {
      axios
        .get("/api/setor")
        .then(result => commit("set_produtos", result.data))
        .catch(console.error);
    },
    act_marcas({ commit }) {
      axios
        .get("/api/marca")
        .then(result => commit("set_marcas", result.data))
        .catch(console.error);
    },
    act_listas({ commit }) {
      axios
        .get("/api/lista")
        .then(result => commit("set_listas", result.data))
        .catch(console.error);
    }
  },
  getters: {
    get_produtos(state) {
      return state.produtos;
    },

    get_setores(state) {
      return state.setores;
    },

    get_marcas(state) {
      return state.marcas;
    },

    get_listas(state) {
      return state.listas;
    },

    get_by_id_produto: state => id => {
      return state.produtos.filter(rt => rt.id == id)[0];
    },

    get_by_id_marca: state => id => {
      return state.marcas.filter(rt => rt.id == id)[0];
    },

    get_by_id_setor: state => id => {
      return state.setores.filter(rt => rt.id == id)[0];
    }
  }
});
