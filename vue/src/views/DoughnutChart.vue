<template>
    <div class="yes">
        <Doughnut v-if="loaded" :data="chartData"></Doughnut>
        <button @click="toggling()">click me</button>
    </div>
</template>
<script setup>
import{ ref, onMounted, reactive } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js' 

ChartJS.register(ArcElement, Tooltip, Legend)


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
async function getInfo(){
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animal.value = data
  console.log(animal)
  // animal.value.forEach(x => console.log(x))
  sortData()
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