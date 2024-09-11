<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bg="bg-white-700" class="small-card">
          <h2 class="text-2xl font-bold"></h2>
          <div class="image-wrapper">
            <img src="/f12.png" alt="Investment Illustration">
            <div>
            <h2 class="text-2xl font-bold">{{ $t('welcome.title') }}</h2>
          <p class="mt-2 mb-4" style="padding: 10px;"> <!-- Reduced padding -->
            {{ $t('welcome.description') }}
          </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
<style>
/* Ensure the Card component is styled for smaller size */
.small-card {
  max-width: 300px; /* Adjust the max width as needed */
  margin: auto; /* Center the card horizontally */
  padding: 10px; /* Add some padding inside the card */
}

/* Image wrapper inside the card */
.image-wrapper {
  width: 100%; /* Ensure the wrapper takes full width of the card */
  overflow: hidden; /* Hide overflow */
}

.image-wrapper img {
  width: 100%; /* Make the image fit the width of the wrapper */
  height: auto; /* Maintain the aspect ratio */
  display: block; /* Remove inline space around the image */
}

/* Optional: Adjust grid layout for smaller cards */
.grid-cols-1, .md:grid-cols-2 {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr); /* Two columns on larger screens */
  }
}
</style>