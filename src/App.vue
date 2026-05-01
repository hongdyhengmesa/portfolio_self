<template>
    <div class="min-h-screen flex flex-col bg-gray-900">
        <!-- Navbar -->
        <Navbar/>
        <!-- Footer -->

        <!-- Call router -->
        <router-view/>

        <Footer/>
        <!-- Home View -->
        
    </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

   
</script>