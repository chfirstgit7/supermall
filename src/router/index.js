import { createRouter, createWebHashHistory } from "vue-router";
import Home from "views/home/Home";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("views/profile/Profile")
  },
  {
    path: "/category",
    name: "Category",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("views/category/Category")
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("views/cart/Cart")
  }
];

const router = createRouter({
  // history: createWebHashHistory(), //hash模式
  history: createWebHashHistory(process.env.BASE_URL), //history模式
  routes
});

export default router;
