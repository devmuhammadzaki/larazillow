<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/inertia-vue3';

const page = usePage();

const flashSuccess = computed(() => page.props.value.flash.success);

const user = computed(
    () => page.props.value.user,
);

const prenav = window.location.origin;
</script>

<template>
    <header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full">
        <div class="container mx-auto">
            <nav class="p-4 flex items-center justify-between">
                <div>
                    <Link href="/">
                        <img
                            width="40"
                            height="40"
                            :src="prenav + '/storage/larazillowlogo.png'"
                        >
                    </Link>
                </div>
                <div class="text-xl text-indigo-600 dark:text-indigo-300 font-bold text-center">
                    <Link href="/">
                        LaraZillow
                    </Link>
                </div>
                <div v-if="user" class="flex items-center gap-4">
                    <Link class="text-sm text-gray-500" :href="route('realtor.listing.index')">
                        {{ user.name }}
                    </Link>
                    <Link :href="route('realtor.listing.create')" class="btn-primary">
                        + New Listing
                    </Link>
                    <div>
                        <Link
                            :href="route('logout')"
                            method="delete"
                            as="button"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
                <div v-else class="flex items-center gap-2">
                    <Link :href="route('user-account.create')" class="hover:text-indigo-600">
                        Register
                    </Link>
                    <Link :href="route('login')" class="hover:text-indigo-600">
                        Sign-In
                    </Link>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto p-4 w-full">
        <div
            v-if="flashSuccess"
            class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2"
        >
            {{ flashSuccess }}
        </div>
        <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full bottom-0">
        <div
            class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0"
        >
            <div
                class="p-4 flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14  text-indigo-600 dark:text-indigo-300"
            >
                <img
                    :src="prenav + '/storage/larazillowlogo.png'"
                    alt=""
                    class="w-8 h-8"
                >

                <Link href="/" class="hover:text-white">
                    Home
                </Link>
                <Link href="/about" class="hover:text-white">
                    About
                </Link>
            </div>

            <!-- Social Container -->
            <div class="flex space-x-10 py-6">
                <Link href="https://facebook.com">
                    <img
                        :src="prenav + '/storage/icon-facebook.svg'"
                        alt=""
                        class="h-6 ficon"
                    >
                </Link>
                <Link href="https://twitter.com">
                    <img
                        :src="prenav + '/storage/icon-twitter.svg'"
                        alt=""
                        class="h-6 ficon"
                    >
                </Link>
            </div>
        </div>
    </footer>
</template>
