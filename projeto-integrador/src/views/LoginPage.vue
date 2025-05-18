<template>
  <main class="login-page" aria-labelledby="login-title">
    <form @submit.prevent="handleLogin" class="login-form" novalidate>
      <h1 id="login-title">Faça Login</h1>
      <p class="subtitle">Acesse sua conta e faça seu pedido com facilidade</p>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="seu.email@exemplo.com"
          :class="{ invalid: emailError }"
          aria-describedby="email-error"
          required
        />
        <span v-if="emailError" id="email-error" class="error-msg">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="••••••••"
          :class="{ invalid: passwordError }"
          aria-describedby="password-error"
          minlength="6"
          required
        />
        <span v-if="passwordError" id="password-error" class="error-msg">{{ passwordError }}</span>
      </div>

      <button type="submit" class="login-btn" :disabled="isLoading">
        {{ isLoading ? 'Entrando...' : 'Entrar' }}
      </button>

      <p class="signup-link">
        Não tem uma conta?
        <a href="/cadastro">Cadastre-se aqui</a>
      </p>

      <p v-if="loginError" class="error-msg login-error" role="alert">{{ loginError }}</p>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');
const loginError = ref('');
const isLoading = ref(false);

function validateEmail(emailVal) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailVal);
}

function handleLogin() {
  emailError.value = '';
  passwordError.value = '';
  loginError.value = '';

  if (!email.value) {
    emailError.value = 'Email é obrigatório.';
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Informe um email válido.';
  }

  if (!password.value) {
    passwordError.value = 'Senha é obrigatória.';
  } else if (password.value.length < 6) {
    passwordError.value = 'Senha deve ter no mínimo 6 caracteres.';
  }

  if (emailError.value || passwordError.value) return;

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    if (email.value === 'usuario@exemplo.com' && password.value === '123456') {
      alert('Login realizado com sucesso!');
      window.location.href = '/';
    } else {
      loginError.value = 'Email ou senha incorretos.';
    }
  }, 1500);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Nunito', sans-serif;
}

.login-form {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 3rem 3.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 12px 32px rgb(253 84 6 / 0.6);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #333;
}

.login-logo {
  display: block;
  margin: 0 auto -2.0rem;
  max-width: 160px;
  width: 100%;
  height: auto;
}

.login-form h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: -0.45rem;
  color: #fd5406;
  text-align: center;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;
}

.form-group {
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.6rem;
  font-weight: 700;
  color: #fd5406;
}

.form-group input {
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid #ddd;
  transition: border-color 0.3s ease;
  font-family: 'Nunito', sans-serif;
}

.form-group input:focus {
  outline: none;
  border-color: #ff6e3e;
  box-shadow: 0 0 6px #ff6e3eaa;
}

.form-group input.invalid {
  border-color: #e74c3c;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.4rem;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
}

.login-btn {
  background-color: #fd5406;
  color: white;
  padding: 14px 0;
  font-size: 1.2rem;
  font-weight: 800;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 8px 22px rgb(253 84, 6 / 0.8);
  transition: background-color 0.3s ease, transform 0.2s ease;
  user-select: none;
}

.login-btn:disabled {
  background-color: #f29773;
  cursor: not-allowed;
  box-shadow: none;
}

.login-btn:hover:not(:disabled),
.login-btn:focus:not(:disabled) {
  background-color: #d64503;
  transform: scale(1.05);
  outline: none;
}

.signup-link {
  margin-top: 1.8rem;
  text-align: center;
  font-size: 1rem;
  color: #555;
}

.signup-link a {
  color: #fd5406;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.signup-link a:hover,
.signup-link a:focus {
  color: #d64503;
  outline: none;
}

.login-error {
  text-align: center;
  margin-top: 1.2rem;
  font-weight: 700;
  font-size: 1rem;
  color: #e74c3c;
}

/* Extra pequeno (xs) - padrão, sem breakpoint */
@media (min-width: 0px) {  }

/* Pequeno (sm) */
@media (min-width: 576px) {  }

/* Médio (md) */
@media (min-width: 768px) { }

/* Grande (lg) */
@media (min-width: 992px) { }

/* Extra grande (xl) */
@media (min-width: 1200px) { }

/* Extra extra grande (xxl) */
@media (min-width: 1400px) { 

}


</style>
