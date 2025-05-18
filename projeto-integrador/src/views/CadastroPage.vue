<template>
  <main class="register-page" aria-labelledby="register-title">
    <form @submit.prevent="handleRegister" class="register-form" novalidate>
      <h1 id="register-title">Criar Conta</h1>
      <p class="subtitle">Junte-se a nós e aproveite nossos deliciosos hambúrgueres!</p>

      <div class="form-group">
        <label for="name">Nome</label>
        <input
          id="name"
          type="text"
          v-model="name"
          placeholder="Seu Nome"
          :class="{ invalid: nameError }"
          aria-describedby="name-error"
          required
        />
        <span v-if="nameError" id="name-error" class="error-msg">{{ nameError }}</span>
      </div>

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

      <div class="form-group">
        <label for="confirmPassword">Confirmar Senha</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          placeholder="••••••••"
          :class="{ invalid: confirmPasswordError }"
          aria-describedby="confirm-password-error"
          minlength="6"
          required
        />
        <span v-if="confirmPasswordError" id="confirm-password-error" class="error-msg">{{ confirmPasswordError }}</span>
      </div>

      <button type="submit" class="register-btn" :disabled="isLoading">
        {{ isLoading ? 'Criando...' : 'Cadastrar' }}
      </button>

      <p class="login-link">
        Já tem uma conta?
        <a href="/login">Faça login aqui</a>
      </p>

      <p v-if="registerError" class="error-msg register-error" role="alert">{{ registerError }}</p>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');
const registerError = ref('');
const isLoading = ref(false);

function validateEmail(emailVal) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailVal);
}

function handleRegister() {
  nameError.value = '';
  emailError.value = '';
  passwordError.value = '';
  confirmPasswordError.value = '';
  registerError.value = '';

  if (!name.value) {
    nameError.value = 'Nome é obrigatório.';
  }

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

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'As senhas não coincidem.';
  }

  if (nameError.value || emailError.value || passwordError.value || confirmPasswordError.value) return;

  // Simula registro (substitua por autenticação real)
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    alert('Cadastro realizado com sucesso!');
    // Redirecionar para a página de login ou home
    window.location.href = '/login';
  }, 1500);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.register-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Nunito', sans-serif;
}

.register-form {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 3rem 3.5rem;
  width: 90%; /* Ajuste a largura para 90% */
  max-width: 400px; /* Mantenha a largura máxima */
  box-shadow: 0 12px 32px rgb(253 84 6 / 0.6);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #333;
  margin-top: 20px; /* Adicione uma margem superior */
  margin-bottom: 20px; /* Adicione uma margem inferior */
}
.register-logo {
  display: block;
  margin: 0 auto 1.5rem;
  max-width: 160px;
  width: 100%;
  height: auto;
}

.register-form h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
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

.register-btn {
  background-color: #fd5406;
  color: white;
  padding: 14px 0;
  font-size: 1.2rem;
  font-weight: 800;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 8px 22px rgb(253, 84, 6 / 0.8);
  transition: background-color 0.3s ease, transform 0.2s ease;
  user-select: none;
}

.register-btn:disabled {
  background-color: #f29773;
  cursor: not-allowed;
  box-shadow: none;
}

.register-btn:hover:not(:disabled),
.register-btn:focus:not(:disabled) {
  background-color: #d64503;
  transform: scale(1.05);
  outline: none;
}

.login-link {
  margin-top: 1.8rem;
  text-align: center;
  font-size: 1rem;
  color: #555;
}

.login-link a {
  color: #fd5406;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-link a:hover,
.login-link a:focus {
  color: #d64503;
  outline: none;
}

.register-error {
  text-align: center;
  margin-top: 1.2rem;
  font-weight: 700;
  font-size: 1rem;
  color: #e74c3c;
}

/* A partir de sm (≥576px) */
@media (min-width: 576px) {
  .register-form {
    margin-top: 40px;
  }
}

/* A partir de md (≥768px) */
@media (min-width: 768px) {
  .register-form {
    margin-top: 60px;
  }
}

/* A partir de lg (≥992px) */
@media (min-width: 992px) {
  .register-form {
    margin-top: 75px;
  }
}

/* A partir de xl (≥1200px) */
@media (min-width: 1200px) {
  .register-form {
    margin-top: 90px;
  }
}

/* A partir de xxl (≥1400px) */
@media (min-width: 1400px) {
  .register-form {
    margin-top: 110px;
  }
}

</style>