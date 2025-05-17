<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>

      <!-- Menu links -->
      <ul class="nav-links" :class="{ 'active': isMobileMenuOpen }">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      
      <div class="icons">
        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://wa.me/5511999999999" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="/login"><i class="fas fa-user"></i></a>
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

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ce2317;
  z-index: 1000;
  padding: 0.8rem 1.5rem;
  backdrop-filter: blur(6px);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo img {
  height: 50px;
}

.nav-links {
  display: flex;
  flex: 1;
  justify-content: center;
  list-style: none;
  gap: 2rem;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Ícones à direita */
.icons {
  display: flex;
  gap: 1rem;
}

.icons i {
  color: white;
  font-size: 1.4rem;
}

/* Botão hamburger (mobile) */
.hamburger {
  display: none;
  font-size: 1.8rem;
  color: white;
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
    top: 70px;
    left: 0;
    padding: 1rem 0;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: block;
  }

  .icons {
    display: none;
  }
}
</style>
