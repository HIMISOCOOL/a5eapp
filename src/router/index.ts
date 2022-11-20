import { createRouter, createWebHistory } from 'vue-router';
import CharacterView from '../views/Character.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/character',
            name: 'character',
            component: CharacterView,
        },
        {
            path: '/backgrounds',
            name: 'backgrounds',
            component: () => import('../views/Backgrounds.vue'),
        },
        {
            path: '/features',
            name: 'features',
            component: () => import('../views/Features.vue'),
        },
        {
            path: '/inventory',
            name: 'inventory',
            component: () => import('../views/Inventory.vue'),
        },
        {
            path: '/notes',
            name: 'notes',
            component: () => import('../views/Notes.vue'),
        },
        {
            path: '/spells',
            name: 'spells',
            component: () => import('../views/Spells.vue'),
        },
    ],
});

export default router;
