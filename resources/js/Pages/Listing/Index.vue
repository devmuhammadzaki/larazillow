<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineProps({
    listings: Array,
});
</script>

<template>
    <div v-for="listing in listings" :key="listing.id">
        <Link :href="`/listing/${listing.id}`">
            Property at {{ listing.street }} {{ listing.street_nr }},
            {{ listing.city }} for ${{ listing.price }}.
        </Link>
    </div>
</template>
