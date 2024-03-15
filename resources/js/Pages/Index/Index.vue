<script setup>
import Listing from '@/Components/Listing.vue';
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    listings: Object,
});
</script>

<template>
    <div>
        <!-- Hero Section -->
        <section class="bg-gray-900 text-white py-20">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl font-bold mb-4">
                    Find Your Dream Home
                </h1>
                <p class="text-lg mb-8">
                    Discover the perfect property for you
                </p>
                <Link :href="route('listing.index')" class="btn-primary">
                    Get Started
                </Link>
            </div>
        </section>

        <!-- Featured Properties Section -->
        <section class="pb-6 bg-white dark:bg-gray-900">
            <div class="container mx-auto">
                <h2 class="text-3xl font-semibold text-indigo-600 dark:text-indigo-300 mb-8">
                    Featured Properties
                </h2>
                <div class="conatiner border border-gray-200 dark:border-gray-700 p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <Listing
                            v-for="listing in listings.data"
                            :key="listing.id"
                            :listing="listing"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action Section -->
        <section class="bg-gray-900 text-white py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-4">
                    Ready to find your dream home?
                </h2>
                <p class="text-lg mb-8">
                    Start your search today!
                </p>
                <Link :href="route('listing.index')" class="btn-primary">
                    Browse Properties
                </Link>
            </div>
        </section>
    </div>
</template>