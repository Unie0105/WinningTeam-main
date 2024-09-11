<template>
  <div class="signup-container">
    <div class="register">
      <h1><b>{{ $t('signup.title') }}</b></h1>

      <form @submit.prevent="handleSubmit">
        <div>
          <input
            type="text"
            v-model="name"
            id="name"
            required
            :placeholder="$t('signup.username')"
          />
        </div>
        
        <div>
          <input
            type="email"
            v-model="email"
            id="email"
            required
            :placeholder="$t('signup.email')"
          />
        </div>
        
        <div>
          <input
            type="password"
            v-model="password"
            id="password"
            required
            :placeholder="$t('signup.password')"
          />
        </div>

        <button type="submit" class="button1">{{ $t('signup.signUp') }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

export default {
  name: "Register",
  setup() {
    const toast = useToast()
    const router = useRouter()
    return { toast, router }
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch("http://localhost:8000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Store the token in localStorage
          localStorage.setItem('token', data.token);
          
          this.toast.success(this.$t('signup.success'));
          this.clearForm();
          // Redirect to landing page or dashboard
          this.router.push('/');
        } else {
          this.toast.error(data.message || this.$t('signup.failure'));
        }
      } catch (error) {
        this.toast.error(this.$t('signup.serverError'));
      }
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.password = "";
    }
  },
};
</script>

<style>
/* Same styles as before */
.register {
  position: relative;
  font-family: Arial, sans-serif;
  background-size: cover;
  height: 100vh;
  background-color: hsla(0, 8%, 88%, 0.076); 
  padding: 20px;
  max-width: 400px;
  margin:0 auto;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  box-shadow: 0 4px 8px ;
}

h1 {
  text-align: center;
  color: #efe8e8; 
  font-size: large;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus {
  border-color: #21a357; 
}

.button1 {
  width: 100%;
  background-color: #0e9044; 
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.button1:hover {
  background-color: #27ae60; 
}

.signup-container {
  background-image: url('f17.webp');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
