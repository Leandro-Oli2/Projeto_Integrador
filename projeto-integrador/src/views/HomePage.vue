<template>
    <section class="half-screen">
    <div class="left-side">
      <div class="text-content">
        <div class="title-group">
          <h3 class="nome-peq">Clássico e Saboroso</h3>
          <h1>BURGER</h1>
        </div>
        <p>Delicioso hambúrguer feito com ingredientes selecionados, grelhado na perfeição para satisfazer seu paladar.</p>
        <button v-on:click="goToMenuPage" class="visit-btn">Saiba Mais</button>
      </div>
    </div>

    <div class="right-side">
      <div class="burger-column">
        <a class="bg1" href="#menu"><img src="../assets/bugg.png" alt="Burger 1" /></a>
        <a href="#menu"><img src="../assets/bugg.png" alt="Burger 2" /></a>
        <a class="bg3" href="#menu"><img src="../assets/bugg.png" alt="Burger 3" /></a>
      </div>
    </div>
    <img src="../assets/bugg.png" alt="Hamburguer" class="central-burger" />
  </section>
  <section class="bottom-menu">
  <div class="menu-header">
    <h4>Variedades</h4>
    <h1>Explosão de Sabor</h1>
    <h3>Opções Mais pedidas</h3>
  </div>

  <div class="menu-grid">
    <div class="menu-card" v-for="(burger, index) in burgers" :key="index">
      <img :src="burger.img" :alt="burger.name" />
      <h2>{{ burger.name }}</h2>
      <p class="burger-description">{{ burger.description }}</p>
      <div class="menu-card-footer">
        <span class="price">R${{ burger.price }}</span>
        <button class="full-width-button">Pedir Agora</button>
      </div>
    </div>
  </div>
<div class="menu-button-wrapper">
  <button v-on:click="goToMenuPage" class="scroll-to-menu-btn">Ver Cardápio Completo</button>
</div>
</section>
<section class="about-intro">
  <div class="about-left">
    <h2>Sobre Nós</h2>
     <p>
    Na nossa hamburgueria, a paixão pela culinária artesanal se encontra com ingredientes de qualidade.
    Cada hambúrguer é feito com carinho para proporcionar uma experiência única e deliciosa.
  </p>
  <p>
    Valorizamos cada detalhe: do pão fresquinho aos molhos exclusivos, tudo é preparado com dedicação para garantir o melhor sabor em cada mordida.
    Acreditamos que um bom hambúrguer vai além da refeição — é um momento de prazer, de compartilhar com amigos e família.
  </p>
  <p>
    Nossa missão é oferecer mais do que um simples lanche. Queremos criar memórias, surpreender o paladar e transformar cada visita em uma nova descoberta.
    Venha conhecer nossa casa e sinta o verdadeiro sabor de um hambúrguer feito com amor.
  </p>
    <button @click="goToAboutPage" class="about-btn">Conheça Mais</button>
  </div>
  <div class="about-right">
    <img src="../assets/chef.jpg" alt="Chef" />
  </div>
</section>

</template>
<script setup>
function goToMenuPage() {
  window.location.href = '/cardapio'; 
}
function goToAboutPage() {
  window.location.href = '/sobre'; // ajuste conforme sua rota
}
const burgers = [
  {
   category: "Lanches",
        name: "Veggie Deluxe",
        description: "Hambúrguer vegano com grão-de-bico, rúcula e maionese verde.",
        price: 27.0,
        img: "https://img.freepik.com/fotos-premium/close-up-de-morangos-na-mesa_1048944-14379840.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Lanches",
        name: "Brie Burger",
        description: "Hambúrguer artesanal com queijo brie e geleia de pimenta.",
        price: 34.9,
        img: "https://img.freepik.com/fotos-premium/hamburguer-de-carne-artesanal-com-queijo-e-molho-de-mostarda-e-mel_74692-577.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Lanches",
        name: "Egg Bacon Burger",
        description: "Hambúrguer com ovo caipira, bacon e cheddar cremoso.",
        price: 30.5,
        img: "https://img.freepik.com/fotos-premium/burger-suculento-com-ovo-frito-e-bacon-crocante_198067-1257065.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Lanches",
        name: "Caramel Onion Burger",
        description: "Cebola caramelizada, carne suculenta e queijo prato.",
        price: 28.7,
        img: "https://img.freepik.com/fotos-gratis/cheeseburguer-gourmet-grelhado-em-mesa-de-madeira-rustica-gerada-por-ia_24640-82475.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Lanches",
        name: "Blue Cheese Burger",
        description: "Carne angus, queijo gorgonzola e mix de folhas.",
        price: 33.9,
        img: "https://img.freepik.com/fotos-premium/deliciosos-hamburgueres-com-queijo-azul-bacon-marmelada-de-carne-e-cebola-marmoreada-um-prato-de-salada-com-rucula-e-laranjas-fundo-preto-vista-do-topo_89816-7140.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Lanches",
        name: "Spicy Burger",
        description: "Hambúrguer apimentado com jalapeños e molho chipotle.",
        price: 29.0,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        },
        {
        category: "Lanches",
        name: "Kids Burger",
        description: "Mini hambúrguer simples com queijo e ketchup.",
        price: 19.9,
        img: "https://img.freepik.com/fotos-premium/deliciosa-carne-crua-de-hamburguer-e-pao-torrado_919857-1694.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Lanches",
        name: "Panda Special",
        description: "Nosso lanche exclusivo com blend da casa e molho secreto.",
        price: 35.0,
        img: "https://img.freepik.com/fotos-premium/um-hamburguer-gourmet-com-coberturas-picantes-servido-em-um-prato-preto-em-um-restaurante-mal-iluminado_93675-261906.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
  // ...adicione mais burgers aqui
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
.half-screen {
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 0px; 
}

.left-side,
.right-side {
  flex: 1;
  height: 100%;
}

.left-side {
  background-color: white;
}

.right-side {
  background-color: black;
}
.central-burger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 800px;
  z-index: 10;
}
.left-side {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.text-content {
  max-width: 500px;
  padding: 2rem;
  text-align: center;
  margin-left: 5rem;
}

.title-group {
  text-align: center;
  margin-bottom: 1rem;
}

.title-group h3 {
  font-size: 1.9rem;
  color: #FD5406;
  font-weight: 200;
  margin: 0;
}

.title-group h1 {
  font-size: 5.8rem;
  color: #FD5406;
  font-family: Arial, Helvetica, sans-serif;
  margin: -1.0rem 0 -1.5rem;
}

.text-content p {
  font-size: 1.4rem;
  color: #333;
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.visit-btn {
  background-color: #FD5406; 
  color: white;
  width: 20rem;
  padding: 1rem 2.5rem;      
  font-size: 1.2rem;         
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.visit-btn:hover {
  background-color: #d64404; 
}
.burger-column {
  position: absolute;
  top: 25%;
  right: 0;
  height: 50vh;
  width: 190px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;
}

.burger-column a {
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.burger-column a:last-child {
  border-bottom: none;
}



.burger-column img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.bg1{
  border-radius: 20px 0px 0px 0px;
}
.bg3{
  border-radius: 0px 0px 0px 20px;
}
.bottom-menu {
  background-color: #020e13;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
   
}

.menu-header h4 {
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: -4.0rem;
}

.menu-header h1 {
  font-size: 4.5rem;
  margin-bottom: -1.5rem;
  color: #FF8900;
  font-family:Arial, Helvetica, sans-serif
}

.menu-header h3 {
  font-size: 2.0rem;
  color: #ffffff;
  margin-bottom: 3rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-card {
  background-color: white;
  color: black;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
  min-height: 400px;
  max-width: 300px;
  margin: auto;
}

.menu-card:hover {
  transform: translateY(-5px);
}

.menu-card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.menu-card h2 {
  font-size: 1.4rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0.5rem;
  color: #ff5e15;
  text-shadow: 0 0 2.5px #ff5e15aa;
}

.burger-description {
  font-size: 0.95rem;
  color: #555;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Nunito', sans-serif;
  line-height: 1.4;
}

.menu-card-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
}

.menu-card-footer .price {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  
}

.menu-card-footer .full-width-button {
  background: linear-gradient(90deg, #ff3e00, #ff6e3e);
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.3s ease;
  width: 100%;
}

.menu-card-footer .full-width-button:hover {
  background-color: #d64404;
}
.scroll-to-menu-btn {
  background-color: transparent;
  margin-top: 2rem;
  border: 2px solid #FF8900;
  color: #FF8900;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.scroll-to-menu-btn:hover {
  background-color: #FF8900;
  color: white;
  transform: scale(1.05);
}
.about-intro {
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.about-left {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  text-align: left;
}

.about-left h2 {
  font-size: 3rem;
  color: #FD5406;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.about-left p {
  font-size: 1.2rem;
  color: #333;
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.about-btn {
  background-color: #FD5406;
  color: white;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.about-btn:hover {
  background-color: #d64404;
}

.about-right {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  text-align: center;
}

.about-right img {
  width: 500%;
  max-width: 800px;
  object-fit: contain;
}
/* A partir de sm (≥576px) */
@media (min-width: 576px) {
  .title-group h3 {
    font-size: 1.8rem;
  }
  .title-group h1 {
    font-size: 5rem;
  }

  .central-burger {
    width: 70vw;
    max-width: 500px;
  }
}

/* A partir de md (≥768px) */
@media (min-width: 768px) {
  .title-group h3 {
    font-size: 1.6rem;
  }
  .title-group h1 {
    font-size: 4rem;
  }

  .central-burger {
    width: 60vw;
    max-width: 600px;
  }
}

/* A partir de lg (≥992px) */
@media (min-width: 992px) {
  .title-group h3 {
    font-size: 1.5rem;
  }
  .title-group h1 {
    font-size: 3.5rem;
  }

  .central-burger {
    width: 50vw;
    max-width: 700px;
  }
}

/* A partir de xl (≥1200px) */
@media (min-width: 1200px) {
  .text-content{
    margin-right: 10rem;
  }
  .title-group h3 {
    font-size: 1.5rem;
    margin-bottom: 0.9rem;
  }
  .title-group h1 {
    font-size: 4.0rem;
  }
  .text-content p {
    font-size: 1.0rem;
  }
  .central-burger {
    width: 30vw;
    max-width: 800px;
  }
}

/* A partir de xxl (≥1400px) */
@media (min-width: 1400px) {
   .title-group h3 {
    font-size: 2rem;
  }
  .title-group h1 {
    font-size: 6rem;
  }
  .central-burger {
    width: 30vw;
    max-width: 900px;
  }
}

</style>
