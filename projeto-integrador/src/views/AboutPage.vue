<template>
  <main class="about-page" aria-labelledby="about-title">
    <section class="about-section">
      <div class="about-content">
        <h1 id="about-title">Sobre Nós</h1>
        <h2 class="subtitle">Aprenda a nossa história e paixão pelo sabor</h2>
        <p>
          Fundada em 2010, nossa hamburgueria surge da junção de ingredientes selecionados, receitas artesanais e amor pela culinária. Cada hambúrguer é feito com carinho, utilizando apenas ingredientes frescos e de alta qualidade para garantir uma experiência gastronômica única. Nosso compromisso vai além do sabor — buscamos constantemente inovação em nossas receitas, combinando tradição com criatividade para surpreender todos os paladares.
          Ao longo dos anos, nos tornamos referência em sabor e atendimento, sempre priorizando o bem-estar dos nossos clientes. Nosso ambiente foi pensado para reunir amigos, famílias e apaixonados por hambúrgueres em um espaço aconchegante e vibrante. Mais do que refeições, oferecemos momentos inesquecíveis e experiências que despertam memórias afetivas através do paladar.
        </p>
        <p>
          Nossa filosofia é simples: criar momentos inesquecíveis em torno do sabor, do convívio e do prazer de comer bem. Acreditamos que um bom hambúrguer é mais que comida — é uma celebração.
        </p>

        <div class="values-icons" role="list" aria-label="Nossos valores">
          <div class="value-item" role="listitem" tabindex="0" aria-label="Qualidade premium">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="#FD5406">
              <path d="M12 2L2 7v7c0 5 6 7 10 7s10-2 10-7V7l-10-5zM12 22c-3 0-8-1.5-8-5V9.3l8-4 8 4V17c0 3.5-5 5-8 5z"/>
            </svg>
            <span>Qualidade Premium</span>
          </div>
          <div class="value-item" role="listitem" tabindex="0" aria-label="Ingredientes frescos">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="#FD5406">
              <path d="M12 22c4-3 6-7 6-11 0-2-2-3-4-3-2 0-4 1-4 3 0 4 2 8 6 11zM4 13v2c3 2 7 2 10 0v-2c-3 2-7 2-10 0z"/>
            </svg>
            <span>Ingredientes Frescos</span>
          </div>
          <div class="value-item" role="listitem" tabindex="0" aria-label="Atendimento excepcional">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="#FD5406">
              <path d="M12 12c3 0 4-1 4-3 0-2-2-4-4-4s-4 2-4 4c0 2 1 3 4 3zM2 21v-2a7 7 0 0 1 14 0v2z"/>
            </svg>
            <span>Atendimento Excepcional</span>
          </div>
        </div>

        <h2 class="testimonial-title">O que dizem nossos clientes</h2>
        <div class="testimonials" role="list" aria-label="Depoimentos de clientes">
          <blockquote class="testimonial" role="listitem" tabindex="0">
            <p>"Simplesmente o melhor hambúrguer que já experimentei! O sabor e a qualidade são incomparáveis."</p>
            <footer>— Ana Clara</footer>
          </blockquote>
          <blockquote class="testimonial" role="listitem" tabindex="0">
            <p>"Ambiente agradável, atendimento atencioso e hambúrgueres deliciosos! Recomendo para todos."</p>
            <footer>— Marcos Silva</footer>
          </blockquote>
          <blockquote class="testimonial" role="listitem" tabindex="0">
            <p>"Experiência única, ingredientes fresquíssimos e um cuidado que faz toda a diferença no sabor."</p>
            <footer>— Paula Costa</footer>
          </blockquote>
          <blockquote class="testimonial" role="listitem" tabindex="0">
            <p>"Os hambúrgueres são incríveis e o atendimento é sempre excelente! Voltarei com certeza."</p>
            <footer>— João Pedro</footer>
          </blockquote>
          <blockquote class="testimonial" role="listitem" tabindex="0">
            <p>"Melhor lugar para um lanche rápido e saboroso. Sempre saio satisfeito!"</p>
            <footer>— Maria Fernanda</footer>
          </blockquote>
          <blockquote class="testimonial" role="listitem" tabindex="0">
            <p>"A combinação de sabores é perfeita! Cada visita é uma nova descoberta."</p>
            <footer>— Lucas Almeida</footer>
          </blockquote>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
function goToContact() {
  window.location.href = '/contato'; // ajuste conforme sua rota de contato
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.about-page {
    max-width: 1100px;
    margin: 3rem auto 5rem;
    padding-top: 5rem;
    font-family: 'Nunito', sans-serif;
}

.about-section {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #fff8f0;
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(253, 84, 6, 0.15);
}

.about-content {
  text-align: center;
}

.about-content h1 {
  font-size: 3rem;
  color: #fd5406;
  margin-bottom: 0.5rem;
  font-weight: 900;
  font-family: 'Arial Black', Arial, sans-serif;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #b85c24;
}

.about-content p {
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.values-icons {
  display: flex;
  gap: 2rem;
  margin: 3rem 0 4rem 0;
  justify-content: center;
  flex-wrap: wrap;
}

.value-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  text-align: center;
  cursor: default;
  transition: transform 0.3s ease;
}

.value-item:focus,
.value-item:hover {
  transform: scale(1.1);
  outline: none;
}

.icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
}

.value-item span {
  font-weight: 700;
  color: #fd5406;
  font-size: 1rem;
}

.testimonial-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ff6b00;
  margin-bottom: 1.5rem;
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.testimonial {
  background: white;
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  flex: 1 0 300px;
  min-width: 300px;
  max-width: none; 
  box-sizing: border-box;
}

.testimonial:focus,
.testimonial:hover {
  box-shadow: 0 14px 30px rgba(253, 84, 6, 0.4);
  outline: none;
}

.testimonial p {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.testimonial footer {
  text-align: right;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fd5406;
}

.about-btn {
  margin-top: 3rem;
  background-color: #fd5406;
  color: white;
  padding: 1rem 3rem;
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(253, 84, 6, 0.7);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.about-btn:hover,
.about-btn:focus {
  background-color: #d64503;
  outline: none;
  transform: scale(1.05);
}

/* Responsividade */
@media (max-width: 900px) {
  .about-section {
    flex-direction: column;
    padding: 3rem 1rem;
  }
  .about-content {
    max-width: 100%;
  }
  .testimonial {
    flex: 1 1 100%;
  }
  .values-icons {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .testimonials {
    flex-direction: column;
    align-items: center; 
  }

  .testimonial {
    width: 100%; 
    margin-bottom: 1rem; 
  }
}
</style>