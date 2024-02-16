<script setup>
import MainLayout from "../../Layouts/MainLayout.vue";
const props = defineProps({
    message: String,
});
</script>

<template>
    <MainLayout>
        <div>
            <h1>Show Page</h1>

            <p>{{ props.message }}</p>
        </div>
    </MainLayout>
</template>
