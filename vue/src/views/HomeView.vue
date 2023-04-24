<template>
  <div class="container">
    <Card
      v-for="(monster, index) in newyorkian"
      :key="monster.name"
      :id="index + 1"
      :newyorkian="monster"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'
const newyorkian = ref('')
async function getNewYork() {
  let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  let data = await res.json()
  newyorkian.value = data.results
}
onMounted(() => {
  getNewYork()
})
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
