<template>
    <nav class="border-gray-200 px-2 py-2.5 rounded">
        <div class="container flex flex-row justify-between mx-auto">
            <div id="navbar-default" class="flex w-full">
                <span class="self-center text-xl font-semibold whitespace-nowrap">Cat-Cafe</span>
                <ul class="flex self-end p-4 ml-auto rounded-lg">
                    <li>
                        <router-link
                            class="block py-2 pl-3 pr-4 rounded hover:bg-blue-100"
                            aria-current="page"
                            :to="{ name: 'home' }"
                        >
                            Home</router-link
                        >
                    </li>
                    <li v-for="route in routeLinks" :key="route.path">
                        <router-link
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-100"
                            :to="{ name: route.path }"
                        >
                            {{ route.label }}</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const routeLinks = [
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

<style></style>
