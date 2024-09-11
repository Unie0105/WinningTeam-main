u<template>
  <div class="contact-view">
    <aside class="sidebar">
      <h2 class="sidebar-title">{{ $t('sidebar.title') }}</h2>
      <p><strong>{{ $t('sidebar.phone') }}:</strong> +255 610 252 535</p>
      <p><strong>{{ $t('sidebar.email') }}:</strong> furahamicroinvestment123@gmail.com</p>
      <p><strong>{{ $t('sidebar.pobox') }}:</strong> 35091,<br>
         {{ $t('sidebar.city') }}</p>
    </aside>
    <div class="contact-content">
      <header>
        <h1 class="text-6xl text-center mb-8" style="color: black;">{{ $t('contact.title') }}</h1>
      </header>
      <section class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">{{ $t('contact.name') }}:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="email">{{ $t('contact.email') }}:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="message">{{ $t('contact.message') }}:</label>
            <textarea id="message" v-model="message" required></textarea>
          </div>
          <button type="submit" :disabled="isLoading" class="relative">
            <span :class="{ 'opacity-0': isLoading }">{{ $t('contact.send') }}</span>
            <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </button>
        </form>
        <div v-if="successMessage" class="success-message mt-4 p-4 bg-green-100 text-green-700 rounded">
          {{ successMessage }}
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
  display: flex;
  font-family: Arial, sans-serif;
  color: #000;
  background-color: #f0f4f8; /* Light greenish background for the whole page */
  padding: 20px;
}

.sidebar {
  width: 300px; /* Adjust width as needed */
  padding: 20px;
  background-color: #f4f4f4; /* Light gray background */
  border-right: 2px solid #004d00; /* Dark green border */
}

.sidebar-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #004d00; /* Dark Green */
  margin-bottom: 20px;
}

.contact-content {
  flex: 1;
  padding: 20px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #004d00; /* Dark Green */
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #000; /* Black */
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #004d00; /* Dark Green */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #003300; /* Slightly darker Dark Green */
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  font-size: 1.2em;
}
</style>
