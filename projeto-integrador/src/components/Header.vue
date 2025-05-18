
<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/logo (2).png" alt="Logo" />
      </div>

      <!-- Menu links -->
      <ul class="nav-links" :class="{ 'active': isMobileMenuOpen }">
        <li class="teste"><a href="/">Home</a></li>
        <li class="teste"><a href="/cardapio">Menu</a></li>
        <li class="teste2"><a href="/sobre">Sobre</a></li>
        <li class="teste2"><a href="/contato">Contato</a></li>
      </ul>

      <div class="navbar-right">
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="icon-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" aria-label="WhatsApp" class="icon-link">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="/login" aria-label="Login" class="icon-link">
          <i class="fas fa-user"></i>
        </a>
      </div>

      <div class="hamburger" @click="toggleMobileMenu">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  width: 100%;
  background-color: transparent;
  z-index: 1000;
  padding: 0.8rem 1.5rem;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo img {
  height: 100px;
  width: 120px;
}

.nav-links {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  list-style: none;
  max-width: 600px;
  width: 100%;
  gap: 3rem;
}

.nav-links .teste a,
.nav-links .teste2 a {
  color: rgb(240, 24, 24);
  font-weight: bold;
  padding: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links .teste a:hover,
.nav-links .teste2 a:hover {
  background-color: rgb(71, 69, 69);
  color: white;
  border-radius: 20px;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
}

.navbar-right {
  display: flex;
  gap: 1.5rem;
  margin-right: 2.5rem;
}

.icon-link {
  color: rgb(240, 24, 24);
  font-size: 1.3rem;
  transition: color 0.3s ease;
  text-decoration: none;
}

.fa-user {
  font-size: 1.2rem;
}

.icon-link:hover {
  color: #1f1f1f;
}

.hamburger {
  display: none;
  font-size: 1.8rem;
  color: rgb(240, 24, 24); /* Mudei a cor para combinar com o tema */
  cursor: pointer;
}

/* Responsividade */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    top: 70px; /* Ajuste a posição conforme necessário */
    left: 0;
    padding: 1rem 0;
    transition: max-height 0.3s ease; /* Adiciona transição suave */
    max-height: 0; /* Inicialmente escondido */
    overflow: hidden; /* Esconde o conteúdo que excede a altura */
  }

  .nav-links.active {
    display: flex;
    max-height: 300px; /* Ajuste a altura máxima conforme necessário */
  }

  .hamburger {
    display: block;
    margin-right: auto; /* Garante que o hambúrguer fique à direita */
  }

  .navbar-right {
    display: none; /* Esconde os ícones na versão mobile */
  }
}

@media (max-width: 480px) {
  .nav-links {
    padding: 0.5rem 0; /* Ajusta o padding para telas menores */
  }

  .nav-links li a {
    font-size: 1.1rem; /* Reduz o tamanho da fonte para telas menores */
  }

  .icon-link {
    font-size: 1.2rem; /* Reduz o tamanho dos ícones para telas menores */
  }
}


</style>
