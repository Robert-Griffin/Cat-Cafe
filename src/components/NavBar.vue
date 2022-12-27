<template>
    <nav class="navbar">
        <div class="navbar-container">
            <ul class="menu-items">
                <router-link :to="{ name: 'home'}">Home</router-link>
                <router-link :to="{ name: 'cats'}">Cats</router-link>
                <router-link :to="{ name: 'menu'}">Menu</router-link>
                <router-link :to="{ name: 'reservations'}">Reservations</router-link>
                <router-link :to="{ name: 'contactUs'}">Contact Us</router-link>
            </ul>
            <h1 class="logo">Navbar</h1>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style>
.menu-items a{
    padding: 5px;
}
</style>
