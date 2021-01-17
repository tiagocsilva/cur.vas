import Dashboard from "@/views/dashboard/Dashboard.vue";
import Personal from "@/views/dashboard/Personal.vue";

export default [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "personal",
        name: "personal",
        component: Personal,
    },
];
