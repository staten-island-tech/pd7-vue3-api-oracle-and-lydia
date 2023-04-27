<template>
    <div class="card">
<h2>{{ animal.species_description }}</h2>
<h4>{{ animal.borough }}</h4>
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