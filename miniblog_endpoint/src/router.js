import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/posts",
    name: "posts",
    component: () => import("./components/PostsList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddPost")
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;