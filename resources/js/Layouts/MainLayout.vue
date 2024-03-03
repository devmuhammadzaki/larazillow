<script setup>
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";

const page = usePage();

const flashSuccess = computed(() => page.props.value.flash.success);
</script>

<template>
    <div>
        <Link href="/">
            Home Page
        </Link>&nbsp;
        <Link href="/show">
            Show Page
        </Link>

        <hr>

        <div v-if="flashSuccess" class="success">
            {{ flashSuccess }}
        </div>

        <slot />
    </div>
</template>

<style scoped>
.success {
    background-color: green;
    color: white;
}
</style>
