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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ubuntu:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
  font-family: "Ubuntu", sans-serif;
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
