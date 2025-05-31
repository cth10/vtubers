
<template>
  <section id="about" class="about-section">
    <div class="animated-bg">
      <div class="floating-particles"></div>
      <div class="neon-grid"></div>
    </div>
    
    <div class="container">
      <div class="section-header">
        <h2 class="glitch-title" data-text="什么是VTuber？">
          <span class="title-main">什么是VTuber？</span>
          <span class="title-sub">O que são VTubers?</span>
        </h2>
        <div class="cyber-line"></div>
      </div>
      
      <div class="about-content">
        <div class="content-card">
          <div class="card-header">
            <div class="status-indicator"></div>
            <span class="card-title">[ SISTEMA_INFORMAÇÃO.exe ]</span>
          </div>
          
          <div class="about-text">
            <div class="text-block fade-in">
              <span class="code-bracket">{</span>
              <p class="cyber-text">
                <span class="highlight-text">VTubers</span>，或 <span class="highlight-text">YouTubers Virtuais</span>，são criadores de conteúdo online que utilizam 
                <span class="neon-text">avatares digitais</span> em vez de sua aparência física. Esses avatares, 
                geralmente inspirados em <span class="anime-text">animes</span>, são animados usando tecnologias de 
                <span class="tech-text">captura de movimento facial e corporal</span>, permitindo que interajam com o público em tempo real.
              </p>
              <span class="code-bracket">}</span>
            </div>
            
            <div class="text-block fade-in">
              <span class="code-bracket">{</span>
              <p class="cyber-text">
                O fenômeno surgiu no <span class="location-text">日本 (Japão)</span> em meados de 2010 e rapidamente ganhou 
                <span class="popularity-text">popularidade mundial</span>. VTubers produzem uma variedade de conteúdos, incluindo 
                <span class="content-tags">
                  #gameplays #transmissões #vídeos_musicais #vlogs
                </span> 
                e muito mais. Eles oferecem uma forma única de entretenimento, combinando a personalidade do criador 
                com a estética e as possibilidades ilimitadas do <span class="virtual-text">mundo virtual</span>.
              </p>
              <span class="code-bracket">}</span>
            </div>
            
            <div class="text-block fade-in">
              <span class="code-bracket">{</span>
              <p class="cyber-text">
                A popularidade dos VTubers pode ser atribuída à <span class="novelty-text">novidade do formato</span>, 
                ao <span class="anonymous-text">anonimato</span> que proporciona aos criadores, e à capacidade de criar 
                <span class="story-text">personagens e narrativas envolventes</span>. Agências especializadas surgiram 
                para gerenciar e promover talentos VTubers, solidificando ainda mais sua presença na 
                <span class="culture-text">cultura da internet</span>.
              </p>
              <span class="code-bracket">}</span>
            </div>
          </div>
        </div>
        
        <div class="about-image-container">
          <div class="hologram-frame">
            <div class="scan-lines"></div>
            <img :src="require('@/assets/exmodel.jpg')" alt="VTuber Avatar Exemplo" class="hologram-image">
            <div class="image-overlay">
              <div class="status-bar">
                <span class="status-text">ONLINE</span>
                <div class="signal-bars">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="stats-panel">
            <div class="stat-item">
              <span class="stat-label">活跃度</span>
              <div class="stat-bar">
                <div class="stat-fill" style="width: 95%"></div>
              </div>
            </div>
            <div class="stat-item">
              <span class="stat-label">人气值</span>
              <div class="stat-bar">
                <div class="stat-fill" style="width: 88%"></div>
              </div>
            </div>
            <div class="stat-item">
              <span class="stat-label">萌度</span>
              <div class="stat-bar">
                <div class="stat-fill" style="width: 100%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  mounted() {
    this.startAnimations();
  },
  methods: {
    startAnimations() {
      // Adicionar animações de entrada progressiva
      const textBlocks = document.querySelectorAll('.text-block');
      textBlocks.forEach((block, index) => {
        setTimeout(() => {
          block.classList.add('visible');
        }, index * 500);
      });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Noto+Sans+SC:wght@400;700&display=swap');

.about-section {
  position: relative;
  padding: 100px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  overflow: hidden;
  min-height: 100vh;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #00ffff, transparent),
    radial-gradient(2px 2px at 40px 70px, #ff00ff, transparent),
    radial-gradient(1px 1px at 90px 40px, #ffff00, transparent),
    radial-gradient(1px 1px at 130px 80px, #ff0080, transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: float-particles 20s linear infinite;
  opacity: 0.3;
}

@keyframes float-particles {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-100vh); }
}

.neon-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-pulse 4s ease-in-out infinite;
}

@keyframes grid-pulse {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.glitch-title {
  position: relative;
  font-family: 'Orbitron', 'Noto Sans SC', sans-serif;
  margin: 0;
}

.title-main {
  display: block;
  font-size: 3.5rem;
  font-weight: 900;
  color: #00ffff;
  text-shadow: 
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff;
  animation: glitch-main 3s infinite;
}

.title-sub {
  display: block;
  font-size: 2rem;
  font-weight: 400;
  color: #ff00ff;
  margin-top: 10px;
  opacity: 0.8;
}

@keyframes glitch-main {
  0%, 90%, 100% { transform: translateX(0); }
  20% { transform: translateX(-2px) skew(-2deg); }
  40% { transform: translateX(2px) skew(2deg); }
  60% { transform: translateX(-1px) skew(1deg); }
}

.cyber-line {
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent);
  margin: 20px auto;
  animation: line-glow 2s ease-in-out infinite alternate;
}

@keyframes line-glow {
  0% { box-shadow: 0 0 5px #00ffff; }
  100% { box-shadow: 0 0 20px #ff00ff; }
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  align-items: start;
}

.content-card {
  background: rgba(15, 15, 35, 0.9);
  border: 1px solid #00ffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.3),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
}

.card-header {
  background: linear-gradient(90deg, #00ffff, #0080ff);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-indicator {
  width: 12px;
  height: 12px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse-status 2s infinite;
}

@keyframes pulse-status {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.card-title {
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  color: #000;
  font-size: 0.9rem;
}

.about-text {
  padding: 30px;
}

.text-block {
  margin-bottom: 25px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.text-block.visible {
  opacity: 1;
  transform: translateY(0);
}

.code-bracket {
  font-family: 'Orbitron', monospace;
  color: #ffff00;
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
  margin: 10px 0;
}

.cyber-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 15px 0;
  color: #e0e0e0;
  font-family: 'Arial', sans-serif;
}

.highlight-text {
  color: #00ffff;
  font-weight: bold;
  text-shadow: 0 0 5px #00ffff;
}

.neon-text {
  color: #ff00ff;
  font-weight: bold;
  text-shadow: 0 0 5px #ff00ff;
}

.anime-text {
  color: #ffff00;
  font-weight: bold;
  text-shadow: 0 0 5px #ffff00;
}

.tech-text {
  color: #00ff80;
  font-weight: bold;
  text-shadow: 0 0 5px #00ff80;
}

.location-text {
  color: #ff8000;
  font-weight: bold;
  font-family: 'Noto Sans SC', sans-serif;
}

.popularity-text {
  color: #ff0080;
  font-weight: bold;
  text-shadow: 0 0 5px #ff0080;
}

.content-tags {
  color: #8000ff;
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
}

.virtual-text {
  color: #0080ff;
  font-weight: bold;
  text-shadow: 0 0 5px #0080ff;
}

.novelty-text {
  color: #ff4080;
  font-weight: bold;
}

.anonymous-text {
  color: #80ff40;
  font-weight: bold;
}

.story-text {
  color: #ff80c0;
  font-weight: bold;
}

.culture-text {
  color: #40c0ff;
  font-weight: bold;
}

.about-image-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hologram-frame {
  position: relative;
  border: 2px solid #00ffff;
  border-radius: 15px;
  padding: 20px;
  background: rgba(0, 255, 255, 0.05);
  overflow: hidden;
}

.scan-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 255, 0.1) 2px,
    rgba(0, 255, 255, 0.1) 4px
  );
  animation: scan-animation 3s linear infinite;
  pointer-events: none;
}

@keyframes scan-animation {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.hologram-image {
  width: 100%;
  border-radius: 10px;
  filter: hue-rotate(10deg) contrast(1.2) brightness(1.1);
  transition: all 0.3s ease;
}

.hologram-image:hover {
  filter: hue-rotate(30deg) contrast(1.4) brightness(1.3);
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #00ffff;
}

.status-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-text {
  color: #00ff00;
  font-family: 'Orbitron', monospace;
  font-size: 0.8rem;
  font-weight: bold;
}

.signal-bars {
  display: flex;
  gap: 2px;
}

.bar {
  width: 3px;
  background: #00ff00;
  animation: signal-pulse 1.5s infinite;
}

.bar:nth-child(1) { height: 8px; animation-delay: 0s; }
.bar:nth-child(2) { height: 12px; animation-delay: 0.2s; }
.bar:nth-child(3) { height: 16px; animation-delay: 0.4s; }
.bar:nth-child(4) { height: 20px; animation-delay: 0.6s; }

@keyframes signal-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.stats-panel {
  background: rgba(15, 15, 35, 0.9);
  border: 1px solid #ff00ff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
}

.stat-item {
  margin-bottom: 15px;
}

.stat-label {
  display: block;
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 0.9rem;
  color: #ff00ff;
  margin-bottom: 5px;
}

.stat-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  border-radius: 4px;
  animation: stat-glow 2s ease-in-out infinite alternate;
  transition: width 2s ease;
}

@keyframes stat-glow {
  0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
  100% { box-shadow: 0 0 15px rgba(255, 0, 255, 0.8); }
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-image-container {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 60px 15px;
  }

  .title-main {
    font-size: 2.5rem;
  }

  .title-sub {
    font-size: 1.5rem;
  }

  .about-content {
    gap: 30px;
  }

  .content-card {
    margin: 0;
  }

  .cyber-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .title-main {
    font-size: 2rem;
  }

  .title-sub {
    font-size: 1.2rem;
  }

  .card-header {
    padding: 10px 15px;
  }

  .about-text {
    padding: 20px;
  }
}
</style>
