
<template>
  <section id="popular" class="popular-vtubers-section">
    <div class="container">
      <!-- Título com efeito anime -->
      <div class="section-header">
        <h2 class="anime-title">
          <span class="kanji">人気</span>
          <span class="main-text">VTubers Populares</span>
          <span class="subtitle">〜 最高のバーチャルアイドル 〜</span>
        </h2>
        <div class="sakura-petals">
          <div class="petal"></div>
          <div class="petal"></div>
          <div class="petal"></div>
        </div>
      </div>

      <!-- Grid com cards estilo manga -->
      <div class="vtuber-grid">
        <div class="vtuber-card" v-for="(vtuber, index) in vtubers" :key="vtuber.name" :data-index="index">
          <div class="card-frame">
            <!-- Badge de rank -->
            <div class="rank-badge">
              <span class="rank-number">#{{ index + 1 }}</span>
              <div class="rank-stars">
                <span v-for="n in 5" :key="n" class="star">★</span>
              </div>
            </div>

            <!-- Avatar com efeito holográfico -->
            <div class="avatar-container">
              <div class="holographic-ring"></div>
              <img :src="vtuber.image" :alt="vtuber.name" class="vtuber-avatar">
              <div class="kawaii-effects">
                <div class="sparkle sparkle-1">✨</div>
                <div class="sparkle sparkle-2">💫</div>
                <div class="sparkle sparkle-3">⭐</div>
              </div>
            </div>

            <!-- Info do VTuber -->
            <div class="vtuber-info">
              <h3 class="vtuber-name">{{ vtuber.name }}</h3>
              <div class="vtuber-tags">
                <span class="tag" v-for="tag in vtuber.tags" :key="tag">{{ tag }}</span>
              </div>
              <p class="vtuber-description">{{ vtuber.description }}</p>
              
              <!-- Stats simuladas -->
              <div class="vtuber-stats">
                <div class="stat">
                  <span class="stat-icon">👥</span>
                  <span class="stat-value">{{ vtuber.subscribers }}</span>
                </div>
                <div class="stat">
                  <span class="stat-icon">🎬</span>
                  <span class="stat-value">{{ vtuber.videos }}</span>
                </div>
                <div class="stat">
                  <span class="stat-icon">❤️</span>
                  <span class="stat-value">{{ vtuber.likes }}</span>
                </div>
              </div>

              <!-- Botão com estilo game -->
              <a :href="vtuber.channelUrl" target="_blank" class="btn-watch">
                <span class="btn-text">見る (Assistir)</span>
                <span class="btn-icon">▶️</span>
              </a>
            </div>

            <!-- Efeitos decorativos -->
            <div class="decorative-elements">
              <div class="corner-ornament top-left">◆</div>
              <div class="corner-ornament top-right">◆</div>
              <div class="corner-ornament bottom-left">◆</div>
              <div class="corner-ornament bottom-right">◆</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decoração de fundo estilo anime -->
      <div class="background-decorations">
        <div class="floating-icon floating-icon-1">🌸</div>
        <div class="floating-icon floating-icon-2">⚡</div>
        <div class="floating-icon floating-icon-3">🎌</div>
        <div class="floating-icon floating-icon-4">🦋</div>
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
          description: 'Una tubarãozinha fofa e divertida da Hololive English, conhecida por sua voz adorável e gameplays energéticas.',
          image: require('@/assets/gura.jpg'),
          channelUrl: 'https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g',
          tags: ['Hololive', 'EN', 'Shark'],
          subscribers: '4.4M',
          videos: '500+',
          likes: '999K'
        },
        {
          name: 'Usada Pekora',
          description: 'Uma coelha excêntrica da Hololive Japan, famosa por suas travessuras e risada contagiante. Peko.',
          image: require('@/assets/pekora.jpeg'),
          channelUrl: 'https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ',
          tags: ['Hololive', 'JP', 'Rabbit'],
          subscribers: '2.1M',
          videos: '800+',
          likes: '888K'
        },
        {
          name: 'Ironmouse',
          description: 'Uma demônio rainha independente, conhecida por sua voz incrível para cantar e personalidade caótica e charmosa.',
          image: require('@/assets/ironmouse.webp'),
          channelUrl: 'https://www.twitch.tv/ironmouse',
          tags: ['VShojo', 'EN', 'Demon'],
          subscribers: '1.8M',
          videos: '1K+',
          likes: '777K'
        },
        {
          name: 'Kizuna AI',
          description: 'A pioneira que popularizou o termo VTuber. Carismática e versátil, com uma longa história na criação de conteúdo.',
          image: require('@/assets/kizunaai.webp'),
          channelUrl: 'https://www.youtube.com/channel/UC4YaOt1yT-ZeyB0OmxHgolA',
          tags: ['Independent', 'Pioneer', 'AI'],
          subscribers: '3.0M',
          videos: '600+',
          likes: '999K'
        }
      ]
    }
  }
}
</script>

<style scoped>
.popular-vtubers-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
}

.popular-vtubers-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ff4081" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.anime-title {
  position: relative;
  display: inline-block;
}

.kanji {
  display: block;
  font-size: 3rem;
  color: #ff4081;
  font-weight: bold;
  text-shadow: 0 0 20px #ff4081;
  margin-bottom: 10px;
  animation: glow 2s ease-in-out infinite alternate;
}

.main-text {
  display: block;
  font-size: 2.5rem;
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  margin-bottom: 5px;
}

.subtitle {
  display: block;
  font-size: 1rem;
  color: #00d4ff;
  opacity: 0.8;
  font-style: italic;
}

.sakura-petals {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 40px;
}

.petal {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #ff69b4;
  border-radius: 50% 0;
  transform: rotate(45deg);
  animation: float 3s ease-in-out infinite;
}

.petal:nth-child(1) { left: 20%; animation-delay: 0s; }
.petal:nth-child(2) { left: 50%; animation-delay: 1s; }
.petal:nth-child(3) { left: 80%; animation-delay: 2s; }

.vtuber-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.vtuber-card {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.vtuber-card:hover {
  transform: rotateY(5deg) rotateX(5deg) translateY(-10px);
}

.card-frame {
  background: linear-gradient(145deg, #2a2a3a 0%, #1e1e2e 100%);
  border: 2px solid #ff4081;
  border-radius: 20px;
  padding: 25px;
  position: relative;
  box-shadow: 
    0 10px 30px rgba(255, 64, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.rank-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background: linear-gradient(45deg, #ff4081, #ff6b9d);
  padding: 10px 15px;
  border-radius: 0 0 15px 15px;
  text-align: center;
  z-index: 10;
}

.rank-number {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.rank-stars {
  margin-top: 5px;
}

.star {
  color: #ffd700;
  font-size: 0.8rem;
  text-shadow: 0 0 5px #ffd700;
}

.avatar-container {
  position: relative;
  text-align: center;
  margin-bottom: 20px;
}

.holographic-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border: 3px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff4081, #00d4ff, #ff4081);
  animation: rotate 3s linear infinite;
  z-index: 1;
}

.vtuber-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border: 4px solid #fff;
  box-shadow: 0 0 20px rgba(255, 64, 129, 0.5);
  transition: transform 0.3s ease;
}

.vtuber-card:hover .vtuber-avatar {
  transform: scale(1.05);
}

.kawaii-effects {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  font-size: 1.5rem;
  animation: sparkle 2s ease-in-out infinite;
}

.sparkle-1 { top: 10%; right: 10%; animation-delay: 0s; }
.sparkle-2 { bottom: 10%; left: 10%; animation-delay: 0.7s; }
.sparkle-3 { top: 50%; right: 5%; animation-delay: 1.4s; }

.vtuber-info {
  text-align: center;
}

.vtuber-name {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  font-weight: bold;
}

.vtuber-tags {
  margin-bottom: 15px;
}

.tag {
  display: inline-block;
  background: linear-gradient(45deg, #00d4ff, #0099cc);
  color: #fff;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  margin: 0 5px 5px 0;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.vtuber-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 20px;
  text-align: center;
}

.vtuber-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: 1px solid rgba(255, 64, 129, 0.3);
}

.stat {
  text-align: center;
}

.stat-icon {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.stat-value {
  display: block;
  font-size: 0.9rem;
  color: #00d4ff;
  font-weight: bold;
}

.btn-watch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #ff4081, #ff6b9d);
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  box-shadow: 0 5px 15px rgba(255, 64, 129, 0.4);
  position: relative;
  overflow: hidden;
}

.btn-watch::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.btn-watch:hover::before {
  left: 100%;
}

.btn-watch:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 64, 129, 0.6);
}

.btn-text {
  margin-right: 10px;
}

.decorative-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.corner-ornament {
  position: absolute;
  color: #ff4081;
  font-size: 1.5rem;
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
}

.top-left { top: 10px; left: 10px; }
.top-right { top: 10px; right: 10px; }
.bottom-left { bottom: 10px; left: 10px; }
.bottom-right { bottom: 10px; right: 10px; }

.background-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-icon {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  animation: float-background 10s ease-in-out infinite;
}

.floating-icon-1 { top: 20%; left: 10%; animation-delay: 0s; }
.floating-icon-2 { top: 60%; right: 15%; animation-delay: 2.5s; }
.floating-icon-3 { bottom: 30%; left: 20%; animation-delay: 5s; }
.floating-icon-4 { top: 80%; right: 30%; animation-delay: 7.5s; }

/* Animações */
@keyframes glow {
  from { text-shadow: 0 0 20px #ff4081; }
  to { text-shadow: 0 0 30px #ff4081, 0 0 40px #ff4081; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50% { transform: translateY(-10px) rotate(45deg); }
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes float-background {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Responsivo */
@media (max-width: 768px) {
  .popular-vtubers-section {
    padding: 80px 15px;
  }

  .kanji {
    font-size: 2rem;
  }

  .main-text {
    font-size: 2rem;
  }

  .vtuber-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .card-frame {
    padding: 20px;
  }

  .vtuber-avatar,
  .holographic-ring {
    width: 140px;
    height: 140px;
  }

  .vtuber-name {
    font-size: 1.5rem;
  }

  .vtuber-stats {
    flex-direction: column;
    gap: 10px;
  }

  .stat {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .stat-icon,
  .stat-value {
    display: inline;
    margin: 0;
  }
}

@media (max-width: 480px) {
  .vtuber-grid {
    grid-template-columns: 1fr;
  }

  .rank-badge {
    right: 10px;
    padding: 8px 12px;
  }

  .btn-watch {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
}
</style>
