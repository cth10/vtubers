<template>
  <SiteNavbar />
  <MainHero />
  <AboutSection />
  <VirtualRealitySection />
  <PopularVtubersSection />
  <HowToBecomeSection />
  <GlossarySection />
  <SiteFooter />
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue'
import MainHero from './components/MainHero.vue'
import AboutSection from './components/AboutSection.vue'
import VirtualRealitySection from './components/VirtualRealitySection.vue'
import PopularVtubersSection from './components/PopularVtubersSection.vue'
import HowToBecomeSection from './components/HowToBecomeSection.vue'
import GlossarySection from './components/GlossarySection.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteNavbar,
    MainHero,
    AboutSection,
    VirtualRealitySection,
    PopularVtubersSection,
    HowToBecomeSection,
    GlossarySection,
    SiteFooter
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

body {
  font-family: 'Noto Sans JP', sans-serif; /* Changed to Noto Sans JP for a more thematic feel */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1a1a2e; /* Dark background for the entire site */
  color: #e0e0e0; /* Light text color for readability on dark background */
  line-height: 1.6;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Estilos para rolagem suave */
html {
  scroll-behavior: smooth;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Estilizando a barra de rolagem para um visual mais moderno (apenas WebKit/Blink) */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #2c2c3b; /* Darker track for the scrollbar */
}

::-webkit-scrollbar-thumb {
  background: #4a4a5a; /* Thumb color for dark scrollbar */
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6a6a7a; /* Hover color for dark scrollbar thumb */
}

h1, h2, h3 {
    font-family: 'Orbitron', 'Roboto', sans-serif; /* Prioritizing Orbitron for titles, with Roboto as fallback */
}

/* Adicionando importação do Google Fonts para Roboto - caso não esteja no index.html */
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); */ /* Commented out as it's imported above */

/* Responsive adjustments */
@media (max-width: 768px) {
  body {
    font-size: 14px; /* Adjust base font size for smaller screens */
  }

  .container {
    padding: 0 10px; /* Reduce padding on smaller screens */
  }

  h1 {
    font-size: 2em; /* Adjust h1 size */
  }

  h2 {
    font-size: 1.5em; /* Adjust h2 size */
  }

  h3 {
    font-size: 1.2em; /* Adjust h3 size */
  }
}

@media (max-width: 480px) {
  body {
    font-size: 12px; /* Further adjust base font size for very small screens */
  }
  /* Add more specific mobile styles here if needed */
}
</style>