import Home from "@/views/landingPage/Home.vue";
import About from "@/views/landingPage/About.vue";

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
    }
];
