<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="navbar-brand">VTuber</a>
      <button class="navbar-toggler" @click="toggleMenu" aria-label="Toggle navigation">
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
      </button>
      <ul class="navbar-nav" :class="{ 'active': menuActive }">
        <li><a href="#about" @click="closeMenu">O que são?</a></li>
        <li><a href="#popular" @click="closeMenu">VTubers Populares</a></li>
        <li><a href="#howtobecome" @click="closeMenu">Como se Tornar</a></li>
        <li><a href="#glossary" @click="closeMenu">Glossário</a></li>
      </ul>
    </div>  
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar',
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = false;
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #16213e;
  color: #fff;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar-brand {
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.navbar-nav {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-nav li {
  margin-left: 20px;
}

.navbar-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-nav a:hover {
  background-color: #0f3460;
}

/* Mobile Menu Styles */
.navbar-toggler {
  display: none; /* Hidden by default, shown in media query */
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  flex-direction: column; /* Arrange spans vertically */
  padding: 0.5rem;
}

.toggler-icon {
  background-color: white;
  display: block;
  height: 3px;
  width: 25px;
  margin: 2px 0; /* Add some space between the lines */
  border-radius: 1px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

@media (max-width: 768px) {
  .navbar-nav {
    display: none; /* Hide horizontal nav on mobile */
    flex-direction: column;
    width: 100%;
    background-color: #16213e; /* Same as navbar bg */
    position: absolute;
    top: 60px; /* Adjust based on navbar height */
    left: 0;
    padding: 1rem 0;
  }

  .navbar-nav.active {
    display: flex; /* Show when active */
  }

  .navbar-nav li {
    margin-left: 0;
    text-align: center;
  }

  .navbar-nav a {
    display: block;
    padding: 0.8rem 1rem;
  }

  .navbar-toggler {
    display: flex; /* Show hamburger on mobile */
  }

  /* Animation for hamburger icon to X */
  .navbar-toggler.active .toggler-icon:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .navbar-toggler.active .toggler-icon:nth-child(2) {
    opacity: 0;
  }
  .navbar-toggler.active .toggler-icon:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style> 