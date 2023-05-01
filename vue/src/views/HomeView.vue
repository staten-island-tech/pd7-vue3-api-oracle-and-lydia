<template>
  <div class="container">

    <h1>Urban Park Ranger Animal Condition </h1>
    <div id="nav">
    <router-link to="/BarChart">Bar Chart</router-link>|
    <router-link to="/PieChart">Pie Chart</router-link>
  </div>
  <div class="animal-container">
<AnimalCard 
v-for="(animal, index) in animal" 
:key="animal.name" 
:id="index + 1" 
:animal="animal"/>
</div>
  </div>
</template>

<script setup>
import{ ref, onMounted, onBeforeMount } from 'vue'
import AnimalCard from '../components/AnimalCard.vue'
import Chart from 'chart.js/auto' 
const animal = ref('')
 

async function getInfo(){
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animal.value = data
  // .splice(0,40)
  console.log(animal)
  // animal.value.forEach(x => console.log(x))
  sortData()
  sortData2()
}


onMounted(() => {
  getInfo()
  
  console.log(animal)
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
  /* background-color: red; */
}

.container{
  display: flex;
  margin: 0;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  /* background-color: yellow; */
}

</style>