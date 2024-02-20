<script setup>
const props = defineProps({
    message: String,
});
</script>

<script>
import MainLayout from "../../Layouts/MainLayout.vue";

export default {
    layout: MainLayout,
};
</script>

<template>
    <div>
        <h1>Index Page</h1>

        <p>{{ props.message }}</p>
    </div>
</template>
