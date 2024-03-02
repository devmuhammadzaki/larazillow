<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
    <div>
        <Link href="/">Home Page</Link>&nbsp;
        <Link href="/show">Show Page</Link>

        <hr />
        <slot />
    </div>
</template>
