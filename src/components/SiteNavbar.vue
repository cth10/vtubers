
<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <!-- Logo com caracteres chineses -->
      <div class="navbar-brand">
        <span class="chinese-text">虚拟主播</span>
        <span class="english-text">VTuber World</span>
        <div class="brand-accent"></div>
      </div>
      
      <!-- Botão hamburger customizado -->
      <button class="navbar-toggler" @click="toggleMenu" :class="{ 'active': menuActive }" aria-label="Toggle navigation">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </button>
      
      <!-- Menu principal -->
      <ul class="navbar-nav" :class="{ 'active': menuActive }">
        <li class="nav-item">
          <a href="#about" @click="closeMenu" class="nav-link">
            <span class="nav-icon">🎭</span>
            <span class="nav-text">
              <span class="chinese">什么是</span>
              <span class="portuguese">O que são?</span>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#popular" @click="closeMenu" class="nav-link">
            <span class="nav-icon">⭐</span>
            <span class="nav-text">
              <span class="chinese">热门</span>
              <span class="portuguese">VTubers Populares</span>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#howtobecome" @click="closeMenu" class="nav-link">
            <span class="nav-icon">🚀</span>
            <span class="nav-text">
              <span class="chinese">成为</span>
              <span class="portuguese">Como se Tornar</span>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#glossary" @click="closeMenu" class="nav-link">
            <span class="nav-icon">📚</span>
            <span class="nav-text">
              <span class="chinese">术语</span>
              <span class="portuguese">Glossário</span>
            </span>
          </a>
        </li>
      </ul>
      
      <!-- Decoração com padrões chineses -->
      <div class="decoration-pattern"></div>
    </div>
    
    <!-- Efeito de partículas flutuantes -->
    <div class="floating-particles">
      <div class="particle" v-for="n in 8" :key="n" :style="getParticleStyle(n)"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar',
  data() {
    return {
      menuActive: false,
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    getParticleStyle(index) {
      return {
        left: `${Math.random() * 100}%`,
        animationDelay: `${index * 0.5}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      };
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&family=Orbitron:wght@400;700;900&display=swap');

.navbar {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #ff6b6b;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
  color: #fff;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  overflow: hidden;
}

.navbar.scrolled {
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(15, 52, 96, 0.95) 100%);
  padding: 0.5rem 0;
  box-shadow: 0 6px 30px rgba(255, 107, 107, 0.4);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.navbar-brand {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.chinese-text {
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b6b;
  text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
  display: block;
  line-height: 1;
}

.english-text {
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: 400;
  color: #4ecdc4;
  text-shadow: 0 0 8px rgba(78, 205, 196, 0.5);
  display: block;
  line-height: 1;
  margin-top: 2px;
}

.brand-accent {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
  border-radius: 1px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.navbar-brand:hover .brand-accent {
  opacity: 1;
}

.navbar-nav {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 107, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background: rgba(255, 107, 107, 0.1);
  border-color: #ff6b6b;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.5));
}

.nav-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;
}

.chinese {
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 0.7rem;
  color: #4ecdc4;
  opacity: 0.8;
}

.portuguese {
  font-family: 'Orbitron', monospace;
  font-size: 0.85rem;
  color: #fff;
  font-weight: 500;
}

/* Hamburger customizado */
.navbar-toggler {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  background: rgba(255, 107, 107, 0.2);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.hamburger-box {
  width: 24px;
  height: 18px;
  position: relative;
}

.hamburger-inner {
  position: absolute;
  width: 24px;
  height: 2px;
  background: #ff6b6b;
  border-radius: 1px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #ff6b6b;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.hamburger-inner::before {
  top: -8px;
}

.hamburger-inner::after {
  bottom: -8px;
}

.navbar-toggler.active .hamburger-inner {
  background: transparent;
}

.navbar-toggler.active .hamburger-inner::before {
  top: 0;
  transform: rotate(45deg);
}

.navbar-toggler.active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-45deg);
}

/* Padrão decorativo */
.decoration-pattern {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
  border: 2px solid rgba(255, 107, 107, 0.2);
  border-radius: 50%;
  opacity: 0.5;
}

.decoration-pattern::before {
  content: '龍';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 1.5rem;
  color: #4ecdc4;
  opacity: 0.6;
}

/* Partículas flutuantes */
.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #4ecdc4;
  border-radius: 50%;
  opacity: 0.6;
  animation: float 4s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* Mobile responsivo */
@media (max-width: 768px) {
  .navbar-nav {
    display: none;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(135deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.98) 100%);
    backdrop-filter: blur(15px);
    position: absolute;
    top: 100%;
    left: 0;
    padding: 2rem 1rem;
    gap: 1rem;
    border-top: 2px solid #ff6b6b;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .navbar-nav.active {
    display: flex;
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-link {
    width: 100%;
    justify-content: flex-start;
    padding: 1rem;
    margin: 0;
  }

  .navbar-toggler {
    display: flex;
  }

  .decoration-pattern {
    display: none;
  }

  .chinese-text {
    font-size: 1.3rem;
  }

  .english-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .navbar-nav {
    padding: 1.5rem 0.5rem;
  }

  .nav-text {
    gap: 2px;
  }

  .chinese {
    font-size: 0.6rem;
  }

  .portuguese {
    font-size: 0.8rem;
  }
}
</style>
