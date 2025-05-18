
<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/logo (2).png" alt="Logo" />
      </div>

      <!-- Menu links -->
      <ul class="nav-links" :class="{ 'active': isMobileMenuOpen }">
        <li class="teste"><a href="#">Home</a></li>
        <li class="teste"><a href="#">Menu</a></li>
        <li class="teste2"><a href="#">About</a></li>
        <li class="teste2"><a href="#">Contact</a></li>
      </ul>

      <div class="navbar-right">
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="icon-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" aria-label="WhatsApp" class="icon-link">
          <i class="fab fa-whatsapp"></i>
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

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>

<style scoped>
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
  backdrop-filter: blur(6px);
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
  justify-content: center;
  list-style: none;
  max-width: 600px;
  width: 100%;
  gap: 4rem;
}
.nav-links .teste a{
    color: black;
    font-weight: bold;
    padding: 1rem;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.nav-links .teste a:hover{
     background-color: rgb(71, 69, 69);
    color: white;
    border-radius: 20px;
}
.nav-links .teste2 a{
    color: rgb(255, 255, 255);
    font-weight: bold;
    padding: 1rem;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.nav-links .teste2 a:hover{
    background-color: rgb(255, 250, 250);
    color: rgb(37, 37, 37);
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
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  text-decoration: none;
}

.icon-link:hover {
  color: #ffe066;
}

.hamburger {
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
}

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
