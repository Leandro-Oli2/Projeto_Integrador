<template>
  <main class="contact-page" aria-labelledby="contact-title">
    <h1 id="contact-title">Fale Conosco</h1>
    <p class="intro-text">Tem alguma dúvida ou quer fazer um pedido especial? Envie sua mensagem para a gente!</p>

    <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
      <div class="form-group">
        <label for="name">Nome</label>
        <input
          id="name"
          type="text"
          v-model="name"
          placeholder="Seu nome"
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
        <label for="subject">Assunto</label>
        <input
          id="subject"
          type="text"
          v-model="subject"
          placeholder="Assunto da mensagem"
          :class="{ invalid: subjectError }"
          aria-describedby="subject-error"
          required
        />
        <span v-if="subjectError" id="subject-error" class="error-msg">{{ subjectError }}</span>
      </div>

      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Escreva sua mensagem aqui..."
          :class="{ invalid: messageError }"
          aria-describedby="message-error"
          rows="5"
          required
        ></textarea>
        <span v-if="messageError" id="message-error" class="error-msg">{{ messageError }}</span>
      </div>

      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
      </button>

      <p v-if="formSuccess" class="success-msg" role="alert">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
      <p v-if="formError" class="error-msg" role="alert">Ocorreu um erro ao enviar. Por favor, tente novamente.</p>
    </form>

    <section class="contact-info">
      <h2>Outras formas de contato</h2>
      <ul>
        <li><strong>Telefone:</strong> (11) 99999-9999</li>
        <li><strong>Email:</strong> contato@hamburgueria.com</li>
        <li><strong>Endereço:</strong> Rua Principal, 123 - Campo Grande, MS</li>
        <li>
          <strong>Instagram:</strong> 
          <a href="https://instagram.com/hamburgueria" target="_blank" rel="noopener" class="icon-link">
            <i class="fab fa-instagram"></i> @hamburgueria
          </a>
        </li>
        <li>
          <strong>WhatsApp:</strong> 
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" class="icon-link">
            <i class="fab fa-whatsapp"></i> Envie uma mensagem
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const nameError = ref('');
const emailError = ref('');
const subjectError = ref('');
const messageError = ref('');
const formSuccess = ref(false);
const formError = ref(false);
const isSubmitting = ref(false);

function validateEmail(emailVal) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailVal);
}

function validateForm() {
  nameError.value = '';
  emailError.value = '';
  subjectError.value = '';
  messageError.value = '';
  formSuccess.value = false;
  formError.value = false;

  let valid = true;

  if (!name.value.trim()) {
    nameError.value = 'Nome é obrigatório.';
    valid = false;
  }
  if (!email.value.trim()) {
    emailError.value = 'Email é obrigatório.';
    valid = false;
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Informe um email válido.';
    valid = false;
  }
  if (!subject.value.trim()) {
    subjectError.value = 'Assunto é obrigatório.';
    valid = false;
  }
  if (!message.value.trim()) {
    messageError.value = 'Mensagem é obrigatória.';
    valid = false;
  }

  return valid;
}

function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  formSuccess.value = false;
  formError.value = false;

  // Simula envio de formulário
  setTimeout(() => {
    isSubmitting.value = false;
    // Simular sucesso
    formSuccess.value = true;

    // Opcional: limpar campos
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
  }, 2000);
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.contact-page {
  max-width: 600px;
  margin: 2rem auto 4rem;
  padding-top: 5rem;
  font-family: 'Nunito', sans-serif;
  color: #333;
}
h1#contact-title {
  text-align: center;
  font-size: 2.75rem;
  font-weight: 900;
  color: #fd5406;
  margin-bottom: 0.5rem;
}

.intro-text {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.contact-form {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgb(253 84 6 / 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fd5406;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border-radius: 12px;
  border: 2px solid #ddd;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6e3e;
  box-shadow: 0 0 8px #ff6e3eaa;
}

.form-group input.invalid,
.form-group textarea.invalid {
  border-color: #e74c3c;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.4rem;
  font-weight: 600;
}

.submit-btn {
  background-color: #fd5406;
  color: white;
  padding: 14px 0;
  font-size: 1.2rem;
  font-weight: 800;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 24px rgba(253, 84, 6, 0.8);
  transition: background-color 0.3s ease, transform 0.2s ease;
  user-select: none;
}

.submit-btn:disabled {
  background-color: #f29773;
  cursor: not-allowed;
  box-shadow: none;
}

.submit-btn:hover:not(:disabled),
.submit-btn:focus:not(:disabled) {
  background-color: #d64503;
  outline: none;
  transform: scale(1.05);
}

.success-msg {
  margin-top: 1rem;
  color: #2ecc71;
  font-weight: 700;
  text-align: center;
}

.error-msg[role="alert"] {
  margin-top: 1rem;
  color: #e74c3c;
  font-weight: 700;
  text-align: center;
}

.contact-info {
  margin-top: 3rem;
  background: #fff8f0;
  padding: 2rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgb(253 84 6 / 0.2);
  color: #333;
}

.contact-info h2 {
  color: #fd5406;
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-info ul {
  list-style: none;
  padding-left: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-info ul li {
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.icon-link {
  color: #fd5406;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.icon-link i {
  font-size: 1.3rem;
}

.icon-link:hover,
.icon-link:focus {
  color: #d64404;
  outline: none;
}

@media (max-width: 600px) {
  .contact-page {
    margin: 1rem 1rem 3rem;
  }

  h1#contact-title {
    font-size: 2.2rem;
  }

  .contact-info h2 {
    font-size: 1.6rem;
  }
}
</style>
