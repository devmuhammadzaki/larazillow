<script setup>
const prenav = window.location.origin;
</script>

<template>
    <div class="min-h-screen bg-indigo-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                class="mx-auto h-12 w-auto"
                :src="prenav + '/storage/email.svg'"
                alt="email"
            >
            <h2 class="mt-6 text-center text-3xl font-extrabold text-white-900">
                You need to be verified first
            </h2>
            <p class="mt-2 text-center text-sm text-white-600">
                Please verify your email address to access this page.
            </p>
        </div>
    </div>
</template>