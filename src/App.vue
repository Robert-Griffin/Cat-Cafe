<template>
  <section>
    <div>
      Count<div>
        {{ store.count }}
      </div>
      <button @click="handleClick">Increment</button>
    </div>
  </section>
  <NavBar />
  <RouterView/>
</template>

<script setup lang="ts">
import { useGlobalStore } from './store/GlobalStore'
import NavBar from './components/NavBar.vue'

const store = useGlobalStore()
const handleClick = () => {
  store.getCats()
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
