<template>
  <router-link :to="pkmnPath" class="card">
    <h2>{{ newyorkian.name }}</h2>
    <h3>{{ id }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(({
  newyorkian: Object,
  id: Number,
}))
const pkmnPath = computed(()=>{
  return `/PokemonData/${props.newyorkian.name}`
})
</script>

<style scoped>
.card {
  width: 350px;
  background-color: rgb(125, 180, 125);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 50px;
  height: 370px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>
