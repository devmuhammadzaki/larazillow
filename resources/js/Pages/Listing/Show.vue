<script setup>
defineProps({
    listing: Object,
});
</script>

<template>
    <div>
        Property at {{ listing.street }} {{ listing.street_nr }},
        {{ listing.city }} for ${{ listing.price }}.
    </div>
</template>
