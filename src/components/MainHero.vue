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
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  background-image: url('@/assets/1235063.jpg');
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
  overflow-x: hidden; /* Prevent horizontal scrolling */
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
  animation: fadeInSlideUp 0.8s ease-out forwards;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
  animation: fadeInSlideUp 0.8s ease-out 0.2s forwards; /* Delay for p */
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

@media (max-width: 768px) {
  .hero {
    height: auto; /* Adjust height for mobile */
    min-height: 70vh;
    padding-top: 70px; /* Slightly reduce padding if navbar is smaller or for more space */
  }

  .hero h1 {
    font-size: 2.5rem; /* Further reduce h1 size for mobile */
  }

  .hero p {
    font-size: 1.2rem; /* Further reduce p size for mobile */
  }

  .btn-primary {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem; /* Even smaller for very small screens */
  }

  .hero p {
    font-size: 1rem; /* Even smaller for very small screens */
  }
  .hero {
    min-height: 60vh;
    background-position: 70% center; /* Align image slightly to the right on mobile */
  }
}
</style> 