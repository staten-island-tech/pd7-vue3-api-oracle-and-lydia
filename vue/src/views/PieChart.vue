<template>
    <div class="yes">
        <router-link to="/Home">Home</router-link>|
        <router-link to="/BarChart">Bar Chart</router-link>|
    <canvas id="piec"></canvas>

        <h3>hiih</h3>
    </div>
</template>
<script setup>
import{ ref, onMounted, onBeforeMount } from 'vue'
import Chart from 'chart.js/auto' 
const animal = ref('')

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
  animal.value = data
  console.log(animal)
  // animal.value.forEach(x => console.log(x))
  sortData2()
}


onMounted(() => {
  getInfo()
  
  console.log(animal)
})
</script>

<style scoped>
.yes{
    width: 50vw;
}
</style>