<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

let timer = ref(0);

setInterval(() => timer.value++, 1000);
</script>

<template>
    <div>
        <div>
            <h1>Timer: {{ timer }}</h1>
        </div>

        <Link href="/">Home Page</Link>&nbsp;
        <Link href="/show">Show Page</Link>

        <slot />
    </div>
</template>
