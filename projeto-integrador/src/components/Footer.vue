<template>
    <footer class="site-footer">
  <div class="footer-content">
    <div class="footer-section logo-section">
        <img src="../assets/logo.png" alt="Logo Tweeb Burgers" class="footer-logo" />
        <p>O sabor que conquista. Ingredientes selecionados, preparo artesanal e muito carinho em cada pedido.</p>
    </div>
    <div class="footer-section">
      <h4>Links Rápidos</h4>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Cardápio</a></li>
        <li><a href="#">Sobre Nós</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Contato</h4>
      <p>Email: atendimento@tweebburgers.com</p>
      <p>Telefone: (67) 99999-9999</p>
      <p>Campo Grande - MS</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Tweeb Burgers. Todos os direitos reservados.</p>
  </div>
</footer>

</template>
<style scoped>
.site-footer {
  background-color: #020e13;
  color: white;
  padding: 4rem 2rem 2rem;
  font-family: 'Nunito', sans-serif;
}
.footer-logo {
  width: 150px;
  margin-bottom: 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
}

.footer-section {
  flex: 1 1 250px;
}

.footer-section h3,
.footer-section h4 {
  color: #FF8900;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #FD5406;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
  font-size: 0.9rem;
  color: #ccc;
}
@media (max-width: 768px) {
  .footer-logo {
    margin: 0 auto;
    display: block;
  }
}

</style>