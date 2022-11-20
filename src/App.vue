<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/header/header.vue';
import Navigation from './components/navigation/nav.vue';
import Tab from './components/navigation/tab.vue';
</script>

<template>
    <Header />
    <Navigation>
        <Tab to="/character">Character</Tab>
        <Tab to="/backgrounds">Backgrounds</Tab>
        <Tab to="/features">Features</Tab>
        <Tab to="/inventory">Inventory</Tab>
        <Tab to="/notes">Notes</Tab>
    </Navigation>

    <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
}

/* a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

@media (hover: hover) {
    a:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
    }
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    body {
        display: flex;
        place-items: center;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
} */
</style>
