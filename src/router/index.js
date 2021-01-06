import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { layout: "blank" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    beforeEnter: (to, from, next) => {
      let auth = sessionStorage.getItem("auth");
      if (auth) return next();
      else return next("/login");
    },
    children: [
      {
        path: "",
        component: () => import("@/views/user/list.vue")
      },
      {
        path: "CreateUser",
        name: "CreateUser",
        component: () => import("@/views/user/create.vue")
      },
      {
        path: "UpdateUser/:id",
        name: "UpdateUser",
        component: () => import("@/views/user/UpdateUser.vue"),
        props: true
      },
      {
        path: "Products",
        name: "Products",
        component: () => import("@/views/product/list.vue")
      },
      {
        path: "CreateProduct",
        name: "CreateProduct",
        component: () => import("@/views/product/create.vue")
      },
      {
        path: "UpdateProduct/:id",
        name: "UpdateProduct",
        component: () => import("@/views/product/UpdateProduct.vue"),
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
