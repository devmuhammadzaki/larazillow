<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/inertia-vue3';

const page = usePage();

const flashSuccess = computed(() => page.props.value.flash.success);
</script>

<template>
    <div>
        <Link :href="route('listing.index')">
            Listings
        </Link>&nbsp;
        <Link :href="route('listing.create')">
            New Listing
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
