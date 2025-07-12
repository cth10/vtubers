
<template>
  <section class="hero">
    <div class="hero-bg-effects">
      <div class="neon-grid"></div>
      <div class="floating-particles">
        <div class="particle" v-for="n in 20" :key="n"></div>
      </div>
      <div class="anime-sparkles">
        <div class="sparkle" v-for="n in 15" :key="n">✨</div>
      </div>
    </div>
    
    <div class="hero-content">
      <div class="title-container">
        <h1 class="main-title">
          <span class="title-jp">バーチャル世界へ</span>
          <span class="title-br">Bem-vindo ao Mundo VTuber!</span>
        </h1>
      </div>
      
      <div class="subtitle-container">
        <p class="hero-subtitle">
          <span class="accent-text">🌸 Descubra </span>
          o universo fascinante dos avatares digitais que estão 
          <span class="highlight-text">conquistando a internet</span>
          <span class="accent-text"> 🎮</span>
        </p>
      </div>
      
      <div class="cta-container">
        <a href="#about" class="btn-primary">
          <span class="btn-text">探索する</span>
          <span class="btn-subtext">Explorar Agora</span>
          <div class="btn-glow"></div>
        </a>
        <a href="#popular" class="btn-secondary">
          <span class="btn-icon">⭐</span>
          VTubers Populares
        </a>
      </div>
    </div>
    
    <!-- Elementos decorativos otaku -->
    <div class="otaku-decorations">
      <div class="decoration deco-1">萌</div>
      <div class="decoration deco-2">♡</div>
      <div class="decoration deco-3">☆</div>
      <div class="decoration deco-4">♪</div>
      <div class="decoration deco-5">◆</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainHero',
  mounted() {
    this.animateParticles();
  },
  methods: {
    animateParticles() {
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.2}s`;
      });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700;900&display=swap');

/* Animações */
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes neonPulse {
  0%, 100% {
    text-shadow: 
      0 0 10px #ff6b9d,
      0 0 20px #ff6b9d,
      0 0 30px #ff6b9d,
      0 0 40px #ff6b9d;
  }
  50% {
    text-shadow: 
      0 0 5px #ff6b9d,
      0 0 10px #ff6b9d,
      0 0 15px #ff6b9d,
      0 0 20px #ff6b9d;
  }
}

@keyframes floatUp {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes sparkleFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

@keyframes gridMove {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(-50px) translateY(-50px);
  }
}

@keyframes decorFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(120deg);
  }
  66% {
    transform: translateY(5px) rotate(240deg);
  }
}

/* Hero Principal */
.hero {
  background: linear-gradient(135deg, 
    #0f0f23 0%, 
    #1a0033 25%, 
    #330033 50%, 
    #1a0033 75%, 
    #0f0f23 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Efeitos de fundo */
.hero-bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.neon-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
  background-image: 
    linear-gradient(rgba(255, 107, 157, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 157, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #ff6b9d, #00d4ff);
  border-radius: 50%;
  animation: floatUp 8s linear infinite;
  left: var(--random-x, 50%);
}

.particle:nth-child(odd) {
  background: linear-gradient(45deg, #00d4ff, #c471ed);
  animation-duration: 10s;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; animation-delay: 1s; }
.particle:nth-child(3) { left: 30%; animation-delay: 2s; }
.particle:nth-child(4) { left: 40%; animation-delay: 3s; }
.particle:nth-child(5) { left: 50%; animation-delay: 4s; }
.particle:nth-child(6) { left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; animation-delay: 6s; }
.particle:nth-child(8) { left: 80%; animation-delay: 7s; }
.particle:nth-child(9) { left: 90%; animation-delay: 0.5s; }
.particle:nth-child(10) { left: 15%; animation-delay: 1.5s; }
.particle:nth-child(11) { left: 25%; animation-delay: 2.5s; }
.particle:nth-child(12) { left: 35%; animation-delay: 3.5s; }
.particle:nth-child(13) { left: 45%; animation-delay: 4.5s; }
.particle:nth-child(14) { left: 55%; animation-delay: 5.5s; }
.particle:nth-child(15) { left: 65%; animation-delay: 6.5s; }
.particle:nth-child(16) { left: 75%; animation-delay: 7.5s; }
.particle:nth-child(17) { left: 85%; animation-delay: 0.2s; }
.particle:nth-child(18) { left: 95%; animation-delay: 1.2s; }
.particle:nth-child(19) { left: 5%; animation-delay: 2.2s; }
.particle:nth-child(20) { left: 12%; animation-delay: 3.2s; }

.anime-sparkles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.sparkle {
  position: absolute;
  font-size: 20px;
  animation: sparkleFloat 3s ease-in-out infinite;
  color: #ffd700;
}

.sparkle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.sparkle:nth-child(2) { top: 30%; left: 80%; animation-delay: 1s; }
.sparkle:nth-child(3) { top: 60%; left: 20%; animation-delay: 2s; }
.sparkle:nth-child(4) { top: 70%; left: 90%; animation-delay: 0.5s; }
.sparkle:nth-child(5) { top: 40%; left: 70%; animation-delay: 1.5s; }
.sparkle:nth-child(6) { top: 80%; left: 30%; animation-delay: 2.5s; }
.sparkle:nth-child(7) { top: 15%; left: 60%; animation-delay: 3s; }
.sparkle:nth-child(8) { top: 50%; left: 5%; animation-delay: 0.8s; }
.sparkle:nth-child(9) { top: 25%; left: 40%; animation-delay: 1.8s; }
.sparkle:nth-child(10) { top: 75%; left: 75%; animation-delay: 2.8s; }
.sparkle:nth-child(11) { top: 35%; left: 15%; animation-delay: 0.3s; }
.sparkle:nth-child(12) { top: 65%; left: 85%; animation-delay: 1.3s; }
.sparkle:nth-child(13) { top: 10%; left: 50%; animation-delay: 2.3s; }
.sparkle:nth-child(14) { top: 90%; left: 60%; animation-delay: 0.7s; }
.sparkle:nth-child(15) { top: 45%; left: 25%; animation-delay: 1.7s; }

/* Conteúdo principal */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 40px;
}

.title-container {
  margin-bottom: 30px;
}

.main-title {
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0;
  animation: fadeInSlideUp 0.8s ease-out forwards;
}

.title-jp {
  display: block;
  font-size: 2rem;
  font-weight: 300;
  color: #ff6b9d;
  margin-bottom: 10px;
  animation: neonPulse 2s ease-in-out infinite;
}

.title-br {
  display: block;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #ff6b9d, #00d4ff, #c471ed);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
  text-shadow: 0 0 30px rgba(255, 107, 157, 0.5);
}

.subtitle-container {
  margin-bottom: 40px;
}

.hero-subtitle {
  font-size: 1.3rem;
  line-height: 1.6;
  color: #e0e0e0;
  animation: fadeInSlideUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
  font-weight: 300;
}

.accent-text {
  color: #ff6b9d;
  font-weight: 500;
}

.highlight-text {
  background: linear-gradient(45deg, #00d4ff, #c471ed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

/* Botões CTA */
.cta-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInSlideUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.btn-primary {
  position: relative;
  background: linear-gradient(45deg, #ff6b9d, #ff4081);
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 25px rgba(255, 107, 157, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  overflow: hidden;
  border: 2px solid transparent;
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 35px rgba(255, 107, 157, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-color: #00d4ff;
}

.btn-text {
  display: block;
  font-size: 1.1rem;
  font-family: 'Noto Sans JP', sans-serif;
}

.btn-subtext {
  display: block;
  font-size: 0.9rem;
  opacity: 0.9;
  margin-top: 2px;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.btn-primary:hover .btn-glow {
  left: 100%;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 15px 25px;
  text-decoration: none;
  border-radius: 25px;
  border: 2px solid #00d4ff;
  font-weight: bold;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary:hover {
  background: rgba(0, 212, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
}

.btn-icon {
  font-size: 1.2rem;
}

/* Decorações otaku */
.otaku-decorations {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.decoration {
  position: absolute;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  opacity: 0.3;
  animation: decorFloat 6s ease-in-out infinite;
}

.deco-1 {
  top: 15%;
  left: 15%;
  color: #ff6b9d;
  animation-delay: 0s;
}

.deco-2 {
  top: 25%;
  right: 20%;
  color: #00d4ff;
  animation-delay: 1s;
}

.deco-3 {
  bottom: 30%;
  left: 10%;
  color: #c471ed;
  animation-delay: 2s;
}

.deco-4 {
  bottom: 20%;
  right: 15%;
  color: #ffd700;
  animation-delay: 3s;
}

.deco-5 {
  top: 50%;
  left: 5%;
  color: #ff6b9d;
  animation-delay: 4s;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 70vh;
    padding: 100px 20px 50px;
  }

  .title-jp {
    font-size: 1.5rem;
  }

  .title-br {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .cta-container {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary, .btn-secondary {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  .decoration {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 60vh;
    padding: 80px 15px 40px;
  }

  .title-jp {
    font-size: 1.2rem;
  }

  .title-br {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .decoration {
    font-size: 1.5rem;
    opacity: 0.2;
  }

  .sparkle {
    font-size: 16px;
  }
}
</style>
