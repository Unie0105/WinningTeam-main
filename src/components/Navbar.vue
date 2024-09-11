<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isAuthenticated = ref(false);
const route = useRoute();
const router = useRouter();

const isActiveLink = (routePath) => route.path === routePath;

const checkAuth = () => {
  isAuthenticated.value = !!localStorage.getItem('token');
};

const logout = () => {
  localStorage.removeItem('token');
  isAuthenticated.value = false;
  router.push('/login');
};

const changeLanguage = (lang) => {
  locale.value = lang;
};

onMounted(() => {
  checkAuth();
});
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" src="/f1.png" alt="Furaha" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              ><i style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">{{ t('navbar.title') }}</i></span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >{{ t('navbar.home') }}</RouterLink
              >
              <RouterLink
                v-if="isAuthenticated"
                to="/profile"
                :class="[
                  isActiveLink('/profile')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >{{ t('navbar.profile') }}</RouterLink
              >
              
              <RouterLink
                v-if="isAuthenticated"
                to="/invest"
                :class="[
                  isActiveLink('/invest')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >{{ t('navbar.invest') }}</RouterLink
              >

              <RouterLink
                v-if="isAuthenticated"
                to="/education"
                :class="[
                  isActiveLink('/education')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >{{ t('navbar.education') }}</RouterLink
              >
              <RouterLink
               v-if="isAuthenticated"
                to="/Contact"
                :class="[
                  isActiveLink('/Contact')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >{{ t('navbar.contact') }}</RouterLink
              >
              <RouterLink
                v-if="!isAuthenticated"
                to="/signup"
                :class="[
                  isActiveLink('/signup')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >{{ t('navbar.signup') }}</RouterLink
              >
              <RouterLink
                v-if="!isAuthenticated"
                to="/login"
                :class="[
                  isActiveLink('/login')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >{{ t('navbar.login') }}</RouterLink
              >
             
              <button
                v-if="isAuthenticated"
                @click="logout"
                class="text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md"
              >
                {{ t('navbar.logout') }}
              </button>
              <select @change="changeLanguage($event.target.value)" class="bg-green-700 text-white">
                <option value="en">English </option>
                <option value="sw">Swahili </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>