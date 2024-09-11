<template>
    <div class="Profile">
      <section class="bg-green-50 px-4 py-10">
        <div class="profile-container">
          <!-- User Profile Section -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-10 max-w-lg mx-auto profile-background">
            <div class="flex items-center mb-6">
              <img
                :src="state.userProfile.profilePicture"
                alt="Profile Picture"
                class="w-24 h-24 rounded-full object-cover mr-4"
              />
              <div>
                <h2 class="text-2xl font-bold text-gray-800">{{ state.userProfile.name }}</h2>
                <p class="text-gray-600">{{ state.userProfile.email }}</p>
                <p class="mt-1">{{ $t('profile.accountType') }}: <span class="font-bold">{{ state.userProfile.AccountType }}</span></p>
                <p class="mt-2">{{ $t('profile.totalInvested') }}: <span class="font-bold">{{ state.userProfile.totalInvested }}</span></p>
                <p>{{ $t('profile.returns') }}: <span class="font-bold">{{ state.userProfile.returns }}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    // Any props can be added here if needed in the future
  });
  
  const state = {
    userProfile: {
      name: 'Winning Team',
      email: 'winningteam@gmail.com',
      profilePicture: 'f14.png', // Replace with actual image URL
      AccountType: 'uwekezaji wa kati',
      totalInvested: 'TZS 7,500,000,000',
      returns: 'TZS 15,000,000,000',
    },
  };
  </script>
  
  <style>
  /* Apply background to the whole profile */
  .Profile {
    background-color:white; /* Dark green background */
    background-image: linear-gradient(135deg, #217422, #067506); /* Green gradient */
    min-height: 100vh; /* Full height */
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  
  /* Customize the profile container */
  .profile-container {
    background-color: #17781d; /* Lighter green */
    border-radius: 20px;
    padding: 20px;
  }
  
  /* Adjust the profile card background */
  .profile-background {
    background-color: white;
  }

 
  </style>
  