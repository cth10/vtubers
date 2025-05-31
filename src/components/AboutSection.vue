<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>O que são VTubers?</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            VTubers, ou YouTubers Virtuais, são criadores de conteúdo online que utilizam avatares digitais em vez de sua aparência física. Esses avatares, geralmente inspirados em animes, são animados usando tecnologias de captura de movimento facial e corporal, permitindo que interajam com o público em tempo real.
          </p>
          <p>
            O fenômeno surgiu no Japão em meados de 2010 e rapidamente ganhou popularidade mundial. VTubers produzem uma variedade de conteúdos, incluindo gameplays, transmissões ao vivo, vídeos musicais, vlogs e muito mais. Eles oferecem uma forma única de entretenimento, combinando a personalidade do criador com a estética e as possibilidades ilimitadas do mundo virtual.
          </p>
          <p>
            A popularidade dos VTubers pode ser atribuída à novidade do formato, ao anonimato que proporciona aos criadores, e à capacidade de criar personagens e narrativas envolventes. Agências especializadas surgiram para gerenciar e promover talentos VTubers, solidificando ainda mais sua presença na cultura da internet.
          </p>
        </div>
        <div class="about-image">
          <img :src="require('@/assets/exmodel.jpg')" alt="VTuber Avatar Exemplo">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
  padding: 80px 20px;
  text-align: center;
}

.about-section h2 {
  font-size: 2.8rem;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.about-section h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #ff4081;
  margin: 10px auto 0;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.about-text {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-image {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  text-align: center;
}

.about-image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style> 