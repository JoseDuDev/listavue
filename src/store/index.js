import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aguardandoServidor: false,
    titulo: "MM Listas",
    subtitulo: "Gerenciador de listas",
    produtos: [],
    listas: [],
    setores: [],
    marcas: [],
    usuarios: [],
    usuario: null,
    mensagemSemPermissao: {}
  },
  mutations: {
    set_produtos(state, data) {
      state.produtos = data;
    },
    set_setores(state, data) {
      state.setores = data;
    },
    set_marcas(state, data) {
      state.marcas = data;
    },
    set_listas(state, data) {
      state.listas = data;
    },
    set_mensagemSemPermissao(state, data) {
      state.marcas = data;
    },
    set_usuario(state, data) {
      state.usuarios = data;
    },
    set_usuario_atual(state, data) {
      state.usuario = data;
    }
  },
  actions: {
    async act_produtos({ commit }) {
      axios
        .get("/api/produto")
        .then(result => commit("set_produtos", result.data))
        .catch(console.error);
    },
    async act_setores({ commit }) {
      axios
        .get("/api/setor")
        .then(result => commit("set_produtos", result.data))
        .catch(console.error);
    },
    async act_marcas({ commit }) {
      axios
        .get("/api/marca")
        .then(result => commit("set_marcas", result.data))
        .catch(console.error);
    },
    async act_listas({ commit }) {
      axios
        .get("/api/lista")
        .then(result => commit("set_listas", result.data))
        .catch(console.error);
    },
    async act_usuario({ commit }) {
      axios
        .get("/api/usuario")
        .then(result => commit("set_usuario", result.data))
        .catch(console.error);
    },
    async act_usuario_atual({ commit, dispatch }, usuario) {
      return await axios({
        url: "/api/usuario/login",
        method: "post",
        data: usuario.usuario
      })
        .then(res => {
          commit("set_usuario_atual", res.data.usuario);
          return res.data;
        })
        .catch(err => {
          dispatch("a_enviarErro", err.response || err);
        });
    },
    async act_mensagemSemPermissao({ commit, mensagem }) {
      commit("set_mensagemSemPermissao", mensagem.texto);
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
