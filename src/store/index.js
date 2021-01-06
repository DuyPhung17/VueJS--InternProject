import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user";
import Product from "./modules/product";

Vue.use(Vuex);

const store = {
  modules: { User, Product }
};

export default new Vuex.Store(store);
