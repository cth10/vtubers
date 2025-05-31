<template>
  <section id="popular" class="popular-vtubers-section">
    <div class="container">
      <h2>VTubers Populares</h2>
      <div class="vtuber-grid">
        <div class="vtuber-card" v-for="vtuber in vtubers" :key="vtuber.name">
          <img :src="vtuber.image" :alt="vtuber.name">
          <h3>{{ vtuber.name }}</h3>
          <p>{{ vtuber.description }}</p>
          <a :href="vtuber.channelUrl" target="_blank" class="btn-secondary">Ver Canal</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PopularVtubersSection',
  data() {
    return {
      vtubers: [
        {
          name: 'Gawr Gura',
          description: 'Uma tubarãozinha fofa e divertida da Hololive English, conhecida por sua voz adorável e gameplays energéticas.',
          image: require('@/assets/gura.jpg'), 
          channelUrl: 'https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g'
        },
        {
          name: 'Usada Pekora',
          description: 'Uma coelha excêntrica da Hololive Japan, famosa por suas travessuras e risada contagiante. Peko.',
          image: require('@/assets/pekora.jpeg'), 
          channelUrl: 'https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ'
        },
        {
          name: 'Ironmouse',
          description: 'Uma demônio rainha independente, conhecida por sua voz incrível para cantar e personalidade caótica e charmosa.',
          image: require('@/assets/ironmouse.webp'), 
          channelUrl: 'https://www.twitch.tv/ironmouse'
        },
         {
          name: 'Kizuna AI',
          description: 'A pioneira que popularizou o termo VTuber. Carismática e versátil, com uma longa história na criação de conteúdo.',
          image: require('@/assets/kizunaai.webp'), 
          channelUrl: 'https://www.youtube.com/channel/UC4YaOt1yT-ZeyB0OmxHgolA'
        }
      ]
    }
  }
}
</script>

<style scoped>
.popular-vtubers-section {
  padding: 80px 20px;
  text-align: center;
}

.popular-vtubers-section h2 {
  font-size: 2.8rem;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.popular-vtubers-section h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #ff4081;
  margin: 10px auto 0;
}

.vtuber-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.vtuber-card {
  background-color: #2a2a3a;
  border: 1px solid #4a4a5a;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vtuber-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 64, 129, 0.3);
  border-color: #ff4081;
}

.vtuber-card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #ff4081;
}

.vtuber-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #e0e0e0;
}

.vtuber-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #b0b0b0;
  margin-bottom: 20px;
  text-align: center;
  flex-grow: 1;
}

.btn-secondary {
  background-color: #0f3460;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: stretch;
  text-align:center;
  border: 1px solid transparent;
}

.btn-secondary:hover {
  background-color: #ff4081;
  color: #fff;
  transform: scale(1.05);
  border-color: #ff4081;
}
</style> 