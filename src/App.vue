<template>
  <section>
    <div>
      Count<div>
        {{ store.count }}
      </div>
      <button @click="handleClick">Increment</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './store'

const store = useCounterStore()
const handleClick = () => {
  store.getTest()
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
