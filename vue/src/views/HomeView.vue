<template>
  <div class="container">

    <h1>Urban Park Ranger Animal Condition </h1>
    <div id="nav">
    <router-link to="/BarChart">Bar Chart</router-link>|
    <router-link to="/PieChart">Pie Chart</router-link>
  </div>
    <canvas id="barc"></canvas>
  <div class="animal-container">
<AnimalCard 
v-for="(animal, index) in animal" 
:key="animal.name" 
:id="index + 1" 
:animal="animal"/>
</div>
<canvas id="piec"></canvas>
  </div>
</template>

<script setup>
import{ ref, onMounted, onBeforeMount } from 'vue'
import AnimalCard from '../components/AnimalCard.vue'
import Chart from 'chart.js/auto' 
const animal = ref('')

function sortData() {
  const data = []
  animal.value.forEach((ani) => {
    const index = data.findIndex(e => e.borough === ani.borough)
    if (data[index]) {
      data[index].count++
    } else {
      const newObject = {
        borough: ani.borough,
        count: 1
      }
      data.push(newObject)
    }
  })
  console.log(data)

  
  const ctx = document.getElementById("barc")
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(x => x.borough),
      datasets: [{
        label: '# of Animals',
        data: data.map(x => x.count),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
  myChart;
}
function sortData2() {
  const data = []
  animal.value.forEach((ani) => {
    const index = data.findIndex(e => e.animal_condition === ani.animal_condition)
    if (data[index]) {
      data[index].count++
    } else {
      const newObject = {
        animal_condition: ani.animal_condition,
        count: 1
      }
      data.push(newObject)
    }
  })
  console.log(data)

  
  const ctx = document.getElementById("piec")
  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: data.map(x => x.animal_condition),
      datasets: [{
        label: '# of Animals',
        data: data.map(x => x.count),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
  myChart;
}

async function getInfo(){
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animal.value = data.splice(0,40)
  // .splice(0,9)
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