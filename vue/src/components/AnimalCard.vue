<template>
    <div class="card">
<h2>{{ animal.species_description }}</h2>
<h3>{{ animal.of_animals }} animal(s)</h3>
<h4>{{ animal.borough }}</h4>
<p>{{ animal.animal_condition }}</p>
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

.card{
    border: red 2px solid;
    width: 15rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 1rem;
}
</style>