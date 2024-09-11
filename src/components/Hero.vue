<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Welcome to Furaha Microinvestment',
  },
  subtitle: {
    type: String,
    default: 'Karibu katika uwekezaji wa faida',
  },
});
</script>

<template>
  <section>
    <div
      class="relative py-12 mb-4" 
      style="background-image: url('f8.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"
    >
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div class="text-center">
          <h1 class="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            {{ title }}
          </h1>
          <p class="my-2 text-lg text-white">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
