<template>
  <div class="container">
    <AnimalCard
      v-for="(monster, index = 1) in animal"
      :key="monster.name"
      :id="index + 1"
      :animal="monster"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AnimalCard from '../components/AnimalCard.vue'
const animal = ref('')
async function getInfo() {
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animal.value = data.results
}
onMounted(() => {
  getInfo()
})
</script>

<style scoped></style>
