<template>
    <div class="relative">
        <Header />

        <div class="flex">
            <Sidebar />
            <Main />
        </div>
    </div>
</template>

<script setup lang="ts">
    import Header from './components/Header/index.vue'
    import Main from './components/Main/index.vue'
    import Sidebar from './components/Sidebar/index.vue'
</script>
