<template>
    <div class="card">
<h2>{{ animal.species_description }}</h2>
<h3>{{ animal.borough }}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
animal: Object,
id: Number,
borough: String,

})
</script>

<style scoped>

</style>