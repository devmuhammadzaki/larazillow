<script setup>
import { Link } from "@inertiajs/inertia-vue3";
defineProps({
    message: String,
});
</script>

<template>
    <div>
        <h1>Index Page</h1>

        <Link href="/show">Show Page</Link>
    </div>
</template>
