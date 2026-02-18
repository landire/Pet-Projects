import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue"
import { createRouter, createWebHashHistory } from "vue-router";
import PostidPage from "@/pages/PostidPage.vue";
import PostPageWhithVuex from "@/pages/PostPageWhithVuex.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: PostidPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/store',
        component: PostPageWhithVuex
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
});

export default router;