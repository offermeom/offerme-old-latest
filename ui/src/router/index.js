/** @format */

//import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import ChoiseScreen from "../views/ChoiseScreen.vue";

const routes = [
  {
    path: "/",
    name: "choisescreen",
    component: ChoiseScreen,
  },

  // {
  //   path: "/new-password",
  //   name: "new-password",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/NewPassword.vue"),
  // },
  // {
  //   path: "/forgot-password",
  //   name: "forgot-password",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ForgotPassword.vue"),
  // },
  // {
  //   path: "/",
  //   component: () => import("../BaseLayout"),
  //   children: [
  //     {
  //       path: "/",
  //       redirect: "/customer-details",
  //     },
  //     {
  //       path: "/customer-details",
  //       name: "common.customertitle",
  //       icon: "mdi-account-tie",
  //       meta: {
  //         icon: "mdi-account-tie",
  //       },
  //       component: () => import("../views/CustomerDetails.vue"),
  //     },
  //     {
  //       path: "/module",
  //       name: "common.moduletitle",
  //       icon: "mdi-dots-grid",
  //       meta: {
  //         icon: "mdi-dots-grid",
  //       },
  //       component: () => import("../views/ModuleLayout.vue"),
  //     },
  //     {
  //       path: "/plan",
  //       name: "common.plantitle",
  //       icon: "mdi-playlist-check",
  //       meta: {
  //         icon: "mdi-playlist-check",
  //       },
  //       component: () => import("../views/PlanLayout.vue"),
  //     },
  //     {
  //       path: "/coupon",
  //       name: "common.coupontitle",
  //       icon: "mdi-ticket-percent-outline",
  //       meta: {
  //         icon: "mdi-ticket-percent-outline",
  //       },
  //       component: () => import("../views/CouponLayout.vue"),
  //     },
  //     {
  //       path: "/subscription",
  //       name: "common.subscriptiontitle",
  //       icon: "mdi-bullhorn",
  //       meta: {
  //         icon: "mdi-bullhorn",
  //       },
  //       component: () => import("../views/SubscriptionLayout.vue"),
  //     },
  //     {
  //       path: "/renewal",
  //       name: "common.renewaltitle",
  //       icon: "mdi-autorenew",
  //       meta: {
  //         icon: "mdi-autorenew",
  //       },
  //       component: () => import("../views/RenewalLayout.vue"),
  //     },
  //     {
  //       path: "/reports",
  //       name: "common.reportstitle",
  //       icon: "mdi-file-chart",
  //       meta: {
  //         icon: "mdi-file-chart",
  //       },
  //       component: () => import("../views/ReportsLayout.vue"),
  //     },
  //     {
  //       path: "/audit-log",
  //       name: "common.auditlogtitle",
  //       icon: "mdi-text-box-search",
  //       meta: {
  //         icon: "mdi-text-box-search",
  //       },
  //       component: () => import("../views/AuditlogLayout.vue"),
  //     },
  //     {
  //       path: "/settings",
  //       name: "common.settingstitle",
  //       icon: "mdi-cog-outline",
  //       meta: {
  //         icon: "mdi-cog-outline",
  //       },
  //       component: () => import("../views/SettingsLayout.vue"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
