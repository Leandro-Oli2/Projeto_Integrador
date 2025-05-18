<template>
  <main class="container" role="main" aria-label="Menu de Hambúrgueres">
    <h1>Menu</h1>
    <nav class="categories" role="tablist" aria-label="Categorias do menu">
      <button
        v-for="(category, index) in categories"
        :key="category"
        :class="['category-btn', { active: category === selectedCategory }]"
        role="tab"
        :aria-selected="category === selectedCategory"
        :tabindex="category === selectedCategory ? 0 : -1"
        @click="selectCategory(category)"
        @keyup.enter.space="selectCategory(category)"
      >
        {{ category }}
      </button>
    </nav>
    <section class="menu-grid" aria-live="polite" aria-label="Cardápio de hambúrgueres">
      <article
        v-for="(item, index) in filteredItems"
        :key="item.name + index"
        class="card"
        :aria-label="`${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')}`"
        tabindex="0"
      >
        <img :src="item.img" :alt="`Imagem do ${item.name}`" />
        <div class="card-content">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <div class="price">R$ {{ item.price.toFixed(2).replace('.', ',') }}</div>
          <button class="order-btn" @click="orderItem(item)">
            Pedir Agora
          </button>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "MenuHamburgueres",
  data() {
    return {
      categories: ["Lanches", "Bebidas", "Porções"],
      selectedCategory: "Lanches",
      items: [
        // Lanches
        {
          category: "Lanches",
          name: "Classic Beef",
          description:
            "Hambúrguer suculento de carne bovina com queijo cheddar, alface fresca, tomate e molho especial no pão brioche.",
          price: 24.9,
          img:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        },
        {
          category: "Lanches",
          name: "Veggie Delight",
          description:
            "Hambúrguer vegetariano de grão de bico com espinafre, tomate, alface e molho de iogurte no pão integral.",
          price: 27.0,
          img:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
        },
         {
            category: "Lanches",
            name: "Cheddar Max",
            description: "Explosão de queijo cheddar, carne dupla e pão australiano.",
            price: 31.5,
            img: "https://img.freepik.com/fotos-gratis/vista-de-uma-refeicao-deliciosa-pronta-para-comer_23-2151431747.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
            category: "Lanches",
            name: "Chicken Crispy",
            description: "Frango empanado crocante com maionese temperada e alface.",
            price: 26.0,
            img: "https://img.freepik.com/fotos-gratis/hamburguer-de-frango-de-vista-lateral-com-fatias-de-tomate-e-alface-no-quadro_141793-4817.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Lanches",
        name: "Barbecue Bacon",
        description: "Hambúrguer com molho barbecue, bacon crocante e cheddar.",
        price: 29.9,
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
        },
        {
        category: "Lanches",
        name: "Triplo Smash",
        description: "Três carnes smash, muito cheddar e picles crocante.",
        price: 36.5,
        img: "https://img.freepik.com/fotos-premium/jpg-hamburguer-imagem-de-comida-especial-para-o-seu-projeto_810484-72.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
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

        // Bebidas
        {
        category: "Bebidas",
        name: "Limonada Suíça",
        description: "Limonada cremosa com leite condensado e gelo.",
        price: 7.0,
        img: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGltb25hZGF8ZW58MHx8MHx8fDA%3D",
        },
        {
        category: "Bebidas",
        name: "Refrigerante 600ml",
        description: "Escolha entre Sprite, Coca-Cola ou Fanta Laranja.",
        price: 7.5,
        img: "https://storage.deliveryvip.com.br/KefEXPWN1Y8Q6wnQlDXm_CCzSDT2HwNRTdGRrLs_Efg/h:256/Z3M6Ly9kZWxpdmVy/eXZpcC9kaTRsYW1l/Z2MxZXczemptczdi/a3h0b3BqcXdx",
        },
        {
        category: "Bebidas",
        name: "Cerveja Long Neck",
        description: "Cerveja gelada para acompanhar seu lanche.",
        price: 9.9,
        img: "https://img.freepik.com/fotos-gratis/vista-frontal-de-copos-de-cerveja-com-trigo_23-2148755010.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Bebidas",
        name: "Suco de Laranja Natural",
        description: "Suco fresco da fruta, sem conservantes.",
        price: 8.5,
        img: "https://media.istockphoto.com/id/1165357423/pt/foto/juice.jpg?b=1&s=612x612&w=0&k=20&c=HiAmyFYYWtrSP-cNa9_wwSZUiDUWuQbz4F6l3pOGVeY=",
        },
        {
        category: "Bebidas",
        name: "Chá Mate com Limão",
        description: "Chá gelado com limão, refrescante e leve.",
        price: 6.0,
        img: "https://img.freepik.com/fotos-gratis/vista-frontal-da-lata-de-suco-de-maca-fresco-com-macas-verdes-frescas-em-uma-foto-colorida-de-bebida-de-frutas-escura_140725-92813.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },

        {
            category: "Bebidas",
            name: "Milkshake de Chocolate",
            description: "Milkshake cremoso de chocolate com cobertura de chantilly.",
            price: 11.5,
            img: "https://media.istockphoto.com/id/477812744/pt/foto/batido-de-leite-com-chocolate-na-mesa-de-madeira-r%C3%BAstico.jpg?b=1&s=612x612&w=0&k=20&c=8cPb6C_u_L2XIm3rYluy5rDaCu_xMir7i99c2eKIX0U=",
        },
        {
            category: "Bebidas",
            name: "Água com Gás",
            description: "Água gaseificada gelada, ideal para acompanhar qualquer prato.",
            price: 5.0,
            img: "https://images.unsplash.com/photo-1591656938066-cf1dfcb57661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWd1YSUyMGNvbSUyMGdhcyUyMGdhcnJhZmF8ZW58MHx8MHx8fDA%3D",
        },
        {
          category: "Bebidas",
          name: "Refrigerante Lata",
          description: "Refrigerante gelado para acompanhar seu lanche.",
          price: 7.0,
          img:
            "https://media.istockphoto.com/id/545800796/pt/foto/latas-de-bebidas.webp?a=1&b=1&s=612x612&w=0&k=20&c=Te58Y8Ochegd0u2B_MxC17fp1A6DfMU1zvmIhgc_3AM=",
        },
        // Porções
        {
        category: "Porções",
        name: "Batata Rústica",
        description: "Batatas com casca, temperadas com ervas e alho.",
        price: 18.5,
        img: "https://media.istockphoto.com/id/157648206/pt/foto/batata-doce-batatas-fritas-com-ketchup.webp?a=1&b=1&s=612x612&w=0&k=20&c=CJxXuOXzBZdiKmKeQ9hWcyBmtYpfnimcpt3uJqMd8dI=",
        },
        {
        category: "Porções",
        name: "Calabresa Acebolada",
        description: "Linguiça calabresa acebolada, ideal para compartilhar.",
        price: 22.0,
        img: "https://img.freepik.com/fotos-premium/salsicha-calabresa-fatiada-com-cebola-em-fundo-de-madeira_434193-1657.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Porções",
        name: "Bolinho de Queijo",
        description: "Porção com 12 bolinhos crocantes recheados.",
        price: 20.9,
        img: "https://img.freepik.com/fotos-gratis/deliciosos-croquetes-de-comida-de-perto_23-2149202667.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
        category: "Porções",
        name: "Frango com Bacon",
        description: "Tiras de frango enroladas no bacon, fritas na hora.",
        price: 25.9,
        img: "https://media.istockphoto.com/id/802475756/pt/foto/bacon-wrapped-chicken-drumsticks-in-a-black-cast-iron-skillet-on-the-wooden-rustic-table-top.jpg?b=1&s=612x612&w=0&k=20&c=YlB3V15g-uWnPo6ez2gR8aewWbnNeMW4atGPjO-hJSs=",
        },
        {
            category: "Porções",
            name: "Mini Coxinhas",
            description: "Porção com mini coxinhas de frango crocantes e bem temperadas.",
            price: 19.0,
            img: "https://img.freepik.com/fotos-gratis/vista-frontal-deliciosa-composicao-da-comida-brasileira_23-2148739224.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
            category: "Porções",
            name: "Mandioca Frita",
            description: "Porção de mandioca frita crocante por fora e macia por dentro.",
            price: 17.0,
            img: "https://img.freepik.com/fotos-gratis/composicao-nutritiva-da-mandioca-cozida_23-2149091055.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
          category: "Porções",
          name: "Batata Frita",
          description: "Porção generosa de batata frita crocante e salgada.",
          price: 15.0,
          img:
            "https://img.freepik.com/fotos-gratis/vista-superior-deliciosas-batatas-fritas-e-molho_23-2149235944.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
          category: "Porções",
          name: "Anéis de Cebola",
          description: "Croquetes de cebola empanados e fritos, perfeitos para acompanhar.",
          price: 16.0,
          img:
            "https://img.freepik.com/fotos-gratis/aneis-fritos-com-pimentao-doce_140725-3764.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
        {
          category: "Porções",
          name: "Nuggets de Frango",
          description:
            "Deliciosos nuggets de frango empanados, crocantes por fora e suculentos por dentro.",
          price: 18.0,
          img:
            "https://img.freepik.com/fotos-premium/nuggets-de-frango-frito-com-ketchp-e-molho-de-rosas_434193-1843.jpg?ga=GA1.1.951944169.1737859116&semt=ais_hybrid&w=740",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(
        (item) => item.category === this.selectedCategory
      );
    },
  },
  methods: {
    orderItem(item) {
      alert(`Você pediu: ${item.name} por R$ ${item.price.toFixed(2).replace('.', ',')}. Bom apetite!`);
    },
    selectCategory(category) {
      if (this.selectedCategory === category) return;
      const container = this.$refs.menuGrid;
      if (container) {
        // fade out animation
        container.style.opacity = 0;
        setTimeout(() => {
          this.selectedCategory = category;
          // scroll top for smooth UX
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // fade in animation
          container.style.opacity = 1;
        }, 300);
      } else {
        this.selectedCategory = category;
      }
    },
  },
};
</script>

<style scoped>
/* Reset e estilos básicos */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 960px;
  width: 100%;
  margin: 40px auto;
  padding-top: 80px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #f1f1f1;
}

h1 {
  text-align: center;
  font-weight: 900;
  font-size: 3rem;
  color: #ff3e00;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.categories {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.category-btn {
  background: #2c2c2c;
  border: 3px solid transparent;
  border-radius: 30px;
  padding: 10px 24px;
  font-weight: 700;
  color: #ff6e3e;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  user-select: none;
  box-shadow: 0 4px 12px rgb(255 62 0 / 0.4);
  outline-offset: 3px;
}
.category-btn:hover,
.category-btn:focus {
  background: #ff3e00;
  color: #fff;
  border-color: #ff6e3e;
  box-shadow: 0 6px 18px rgb(255 62 0 / 0.8);
}
.category-btn.active {
  background: #ff3e00;
  color: #fff;
  border-color: #ff6e3e;
  box-shadow: 0 8px 22px rgb(255 62 0 / 0.9);
}
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.card {
  background: #2c2c2c;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgb(255 62 0 / 0.35);
  transform-style: preserve-3d;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card:hover {
  transform: translateY(-14px);
  box-shadow: 0 18px 38px rgb(255 62 0 / 0.65);
}
.card img {
  width: 100%;
  object-fit: cover;
  height: 180px;
  filter: drop-shadow(0 2px 8px #ff3e00aa);
  border-bottom: 4px solid #ff3e00;
  transition: filter 0.3s ease;
}
.card:hover img {
  filter: drop-shadow(0 4px 16px #ff6e3ecc);
}
.card-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card-content h2 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #ff5e15;
}
.card-content p {
  font-size: 1rem;
  color: #ddd;
  line-height: 1.5;
  margin-bottom: 16px;
  flex-grow: 1;
}
.price {
  font-weight: 700;
  font-size: 1.25rem;
  color: #ff3e00;
  text-shadow: 0 0 8px #ff3e00bb;
}
.order-btn {
  margin-top: 18px;
  background: linear-gradient(90deg, #ff3e00, #ff6e3e);
  border: none;
  width: 100%;
  padding: 14px 0;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 8px 20px rgb(255 62 0 / 0.6);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}
.order-btn:hover {
  background: linear-gradient(90deg, #ff6e3e, #ff3e00);
  box-shadow: 0 10px 28px rgb(255 110 62 / 0.85);
}
@media (max-width: 480px) {
  h1 {
    font-size: 2.4rem;
  }
  .category-btn {
    font-size: 1rem;
    padding: 8px 20px;
  }
  .card-content h2 {
    font-size: 1.4rem;
  }
  .order-btn {
    font-size: 1.1rem;
  }
}
</style>
