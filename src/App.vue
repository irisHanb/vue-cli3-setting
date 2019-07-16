<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Intro</router-link>|
      <router-link to="/event01">About</router-link>|
      <router-link to="/event02">Portfolio</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
}
.nav {
  padding-top: 5rem;
  color: #fff;
  a {
    padding: 1em;
  }
}
.logo {
  a {
    color: #fff;
    font-size: 2rem;
    padding: 1em;
    background-color: #dee2e6;
    border-radius: 50%;
  }
}
</style>
