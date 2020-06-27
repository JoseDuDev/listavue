import Vue from "vue";

export const axiosNode = function(axios, url) {
  Vue.prototype.$axios_NODE = axios.create({
    baseURL: url,
    withCredentials: true
  });
};

export const axiosNet = function(axios, url) {
  Vue.prototype.$axios_NET = axios.create({ baseURL: url });
};
