import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/posts",
    name: "posts",
    component: () => import("./components/PostsList")
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;