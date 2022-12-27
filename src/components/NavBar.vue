<template>
    <nav class="navbar">
        <div class="navbar-container container">
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <router-link class="nav-link" :to="{ name: 'home'}">Home</router-link>
                <router-link class="nav-link" :to="{ name: 'cats'}">Cats</router-link>
                <router-link class="nav-link" :to="{ name: 'menu'}">Menu</router-link>
                <router-link class="nav-link" :to="{ name: 'reservations'}">Reservations</router-link>
                <router-link class="nav-link" :to="{ name: 'contactUs'}">Contact Us</router-link>
            </ul>
            <h1 class="logo">Navbar</h1>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style>
.nav-link {
    padding: 5px;
}
</style>
