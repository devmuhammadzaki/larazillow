<script setup>
const props = defineProps({
    message: String,
});
</script>

<template>
    <div>
        <h1>Index Page</h1>

        <p>{{ props.message }}</p>
    </div>
</template>
