<template>
  <div class="container pt-5">
    <h1 class="title is-1 mt-5">Twitch User ID Finder</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <a href="https://github.com/C0dingWithFun/twitch-user-id-finder" target="_blank">GitHub</a>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active,
#nav a:hover {
  color: #42b983;
}
</style>
