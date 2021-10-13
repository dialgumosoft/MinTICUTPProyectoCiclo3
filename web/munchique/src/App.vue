<template>
  <div id="app">
    <Navbar />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import home from  './views/home';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import products from './views/products';
import users from './views/users';
import listaproductos from './views/listaproductos';
import admin from './views/admin';

Vue.use(VueRouter);

export default {
  name: "App",
  components: {
    Navbar, home, users, Footer, products, 
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

#carouselExampleCaptions img {
  height: 270px;
}

#row img {
  width: 100%;
  height: 150px;
}

#pagination {
  margin-top: 30px;
  margin-bottom: 40px;
  align-content: center;
}
</style>
