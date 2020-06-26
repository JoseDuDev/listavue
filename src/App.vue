<template>
  <div id="app">
    <header>
      <HeaderPage />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderPage from "./views/parts/HeaderPage.vue";

export default {
  name: "App",
  computed: {},
  components: {
    HeaderPage
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Dancing+Script:wght@700&family=Indie+Flower&display=swap");

* {
  font-family: "Indie Flower", cursive;
  font-family: "Gloria Hallelujah", cursive;
  font-family: "Dancing Script", cursive;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
