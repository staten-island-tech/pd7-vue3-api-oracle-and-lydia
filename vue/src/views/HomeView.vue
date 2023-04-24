<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const animal = ref('')
async function getInfo(){
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animal.value = data
}
onMounted(()=>{
  getInfo()
}
)
</script>

<style scoped>

</style>