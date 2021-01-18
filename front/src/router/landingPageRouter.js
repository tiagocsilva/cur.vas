import Home from "@/views/landingPage/Home.vue";
import About from "@/views/landingPage/About.vue";
import Catalog from "@/views/landingPage/Catalog.vue";
import Companies from "@/views/landingPage/Companies.vue";
import Opportunities from "@/views/landingPage/Opportunities.vue";

export default [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/catalog",
        name: "catalog",
        component: Catalog,
    },
    {
        path: "/opportunities",
        name: "opportunities",
        component: Opportunities,
    },
    {
        path: "/companies",
        name: "companies",
        component: Companies,
    }
];
