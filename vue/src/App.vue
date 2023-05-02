<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="nav">
      <router-link to="/Home">Home</router-link>|
      <router-link to="/BarChart">Bar Chart</router-link>|
      <router-link to="/PieChart">Pie Chart</router-link>
    </div>
    <RouterView />
  </div>
  
</template>

<style >
body, *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: pink;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
  flex-direction: row;
}
/* #app{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0;
} */
</style>
