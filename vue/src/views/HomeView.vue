<template>
  <div class="container">
    <h1>Urban Park Ranger Animal Condition </h1>
  <div class="animal-container">
<AnimalCard 
v-for="(monster, index) in animal" 
:key="monster.name" 
:id="index + 1" 
:animal="monster"/>
</div>
  </div>
</template>

<script setup>
import{ ref, onMounted } from 'vue'
import AnimalCard from '../components/AnimalCard.vue'
const animal = ref('')
async function getInfo(){
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animal.value = data
  // .splice(0,9)
}
 
onMounted(() => {
  getInfo()
})


</script>

<style scoped>
.animal-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;  
  justify-content: center;
  background-color: aqua;
}

.container{
  display: flex;
  margin: 0;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  background-color: blue;
}
</style>