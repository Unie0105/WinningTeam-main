<template>
  <div class="login-container">
    <div class="login">
      <h2>{{ $t('login.title') }}</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" :placeholder="$t('login.email')" required />
        <input v-model="password" type="password" :placeholder="$t('login.password')" required />
        <button type="submit" class="button1">{{ $t('login.login') }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();

    const handleLogin = async () => {
      try {
        const response = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('token', data.token);

          toast.success('login successfull');
          router.push('/');
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error('Login failed', error);
        toast.error($t('login.serverError'));
      }
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('f17.webp');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
}

.login {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px 30px;
  max-width: 400px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 1.8em;
}

input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

input:focus {
  border-color: #21a357;
  outline: none;
}

.button1 {
  width: 100%;
  background-color: #0e9044;
  color: white;
  border: none;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button1:hover {
  background-color: #27ae60;
}

@media (max-width: 768px) {
  .login {
    max-width: 90%;
  }

  h2 {
    font-size: 1.5em;
  }

  .button1 {
    font-size: 16px;
  }
}
</style>
