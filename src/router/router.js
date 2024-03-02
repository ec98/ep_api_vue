import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/guardar",
        component: () => import('@/pages/EstudiantePagina')
    },
    {
        path: "/token",
        component: () => import('@/pages/RouterPagina')
    },
];

const router = createRouter({ history:createWebHashHistory(), routes});

export default router;