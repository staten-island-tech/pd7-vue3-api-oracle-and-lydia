<template>
  <div class="help_bro">
    <h1>Type of Species!</h1>
      <Doughnut v-if="loaded" :data="chartData"></Doughnut>
  </div>
</template>
<script setup>
import{ ref, onMounted, reactive } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js' 

ChartJS.register(ArcElement, Tooltip, Legend)

const animal = ref('')
const loaded = ref(false)
const toggle = ref(false)
const chartData = reactive({
  labels: null,
  datasets: [
      {
          data: null
      }
  ]
})

function sortStatusData() {
const data = []
animal.value.forEach((ani) => {
  const index = data.findIndex(e => e.species_status === ani.species_status)
  if (data[index]) {
    data[index].count++
  } else {
    const newObject = {
      species_status: ani.species_status,
      count: 1
    }
    data.push(newObject)
  }
})
console.log(data)

chartData.labels = data.map(x => x.species_status )
chartData.datasets[0].data = data.map(x => x.count)
console.log(chartData)
loaded.value = true
}

function sortClassData() {
const data = []
animal.value.forEach((ani) => {
  const index = data.findIndex(e => e.animal_class === ani.animal_class)
  if (data[index]) {
    data[index].count++
  } else {
    const newObject = {
      animal_class: ani.animal_class,
      count: 1
    }
    data.push(newObject)
  }
})
console.log(data)
chartData.labels = data.map(x => x.animal_class )
chartData.datasets[0].data = data.map(x => x.count)
console.log(chartData)
loaded.value = true
}

async function toggling() {
  loaded.value = false
  toggle.value = !toggle.value
  console.log(toggle.value)
  if(toggle) {
      await sortClassData()
  } else {
      await sortStatusData()
  }
}

async function getInfo(){
let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
let data = await res.json()
animal.value = data
console.log(animal)
sortStatusData()
}


onMounted(() => {
  try {
      getInfo()
      console.log(animal)
  } catch (e) {
      console.log(e)
  }
})
</script>

<style scoped>
.help_bro{
  width: 50vw;
}
*{
  background-color: rgb(160, 232, 154);
}
h1{
  margin: auto;
  text-align: center;
}
</style>