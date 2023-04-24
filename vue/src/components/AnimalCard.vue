<template>
  <div class="card">
    <h2>{{ animal.name }}</h2>
    <h3>{{ id }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  animal: Object,
  id: Number
})
</script>

<style lang="scss" scoped></style>
