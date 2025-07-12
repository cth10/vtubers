<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Bem-vindo ao Mundo dos VTubers!</h1>
      <p>Descubra o universo fascinante dos avatares digitais que estão conquistando a internet.</p>
      <a href="#about" class="btn-primary">Saiba Mais</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainHero'
}
</script>

<style scoped>
.hero {
  background-image: url('https://source.unsplash.com/1600x900/?gaming,anime'); /* Imagem de placeholder */
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
  padding-top: 80px; /* Ajuste para a navbar fixa */
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.btn-primary {
  background-color: #ff4081; /* Cor vibrante e moderna */
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.btn-primary:hover {
  background-color: #e0004d;
  transform: translateY(-2px);
}
</style> 