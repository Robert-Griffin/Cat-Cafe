<template>
    <nav class="navbar">
        <div class="navbar-container">
            <ul class="list">
                <li v-for="route in routeLinks" :key="route.path">
                    <router-link :to="{ name: route.path }">{{ route.label }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
const routeLinks = [
    {
        path: 'home',
        label: 'Home',
    },
    {
        path: 'cats',
        label: 'Cats',
    },
    {
        path: 'reservations',
        label: 'Reservations',
    },
]
</script>

<style>
.list li {
    display: inline;
    padding: 5px;
}
</style>
