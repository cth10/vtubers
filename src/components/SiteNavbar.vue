<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <!-- Logo redesenhado -->
      <div class="navbar-brand" @click="scrollToTop">
        <div class="brand-content">
          <span class="brand-main">VTuber</span>
          <span class="brand-sub">World</span>
        </div>
        <div class="brand-line"></div>
      </div>

      <!-- Menu toggle button -->
      <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': menuActive }" aria-label="Menu">
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
      </button>

      <!-- Menu principal -->
      <nav class="main-nav" :class="{ 'active': menuActive }">
        <a href="#about" @click="closeMenu" class="nav-link">
          <span class="link-text">Sobre</span>
          <span class="link-sub">概要</span>
        </a>
        <a href="#popular" @click="closeMenu" class="nav-link">
          <span class="link-text">Populares</span>
          <span class="link-sub">人気</span>
        </a>
        <a href="#howtobecome" @click="closeMenu" class="nav-link">
          <span class="link-text">Guia</span>
          <span class="link-sub">ガイド</span>
        </a>
        <a href="#glossary" @click="closeMenu" class="nav-link">
          <span class="link-text">Glossário</span>
          <span class="link-sub">用語集</span>
        </a>
      </nav>
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
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500&display=swap');

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 20, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.98);
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

/* Brand */
.navbar-brand {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: translateY(-1px);
}

.brand-content {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.brand-main {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.brand-sub {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #a0a0a0;
  letter-spacing: 0.05em;
}

.brand-line {
  height: 1px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, transparent);
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.navbar-brand:hover .brand-line {
  opacity: 1;
}

/* Navigation */
.main-nav {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.link-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
}

.link-sub {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.7rem;
  font-weight: 300;
  color: #666666;
  margin-top: 2px;
  transition: color 0.3s ease;
}

.nav-link:hover .link-text {
  color: #6366f1;
}

.nav-link:hover .link-sub {
  color: #8b5cf6;
}

/* Menu Toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.toggle-line {
  width: 100%;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.menu-toggle.active .toggle-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle.active .toggle-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .toggle-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
    height: 64px;
  }

  .menu-toggle {
    display: flex;
  }

  .main-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    flex-direction: column;
    padding: 2rem 0;
    gap: 1.5rem;
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .main-nav.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 1rem 0;
  }

  .brand-main {
    font-size: 1.3rem;
  }

  .brand-sub {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .brand-main {
    font-size: 1.2rem;
  }

  .brand-sub {
    font-size: 0.85rem;
  }

  .link-text {
    font-size: 1rem;
  }

  .link-sub {
    font-size: 0.75rem;
  }
}

/* Dark theme enhancements */
@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(8, 8, 12, 0.95);
  }

  .navbar.scrolled {
    background: rgba(5, 5, 8, 0.98);
  }
}
</style>