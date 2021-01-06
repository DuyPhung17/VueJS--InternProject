<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/views/Home.vue";

const defaultLayout = "default";
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  },
  components: { Home }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.text-green {
  color: cadetblue !important;
}

.btn-green {
  background-color: cadetblue !important;
  border: none;
  color: white !important;
}
.btn-invis {
  background-color: unset !important;
  border: none !important;
}
.btn-green:hover {
  background-color: teal !important;
  color: white !important;
}
</style>
