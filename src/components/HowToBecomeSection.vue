<template>
  <section id="howtobecome" class="how-to-become-section">
    <div class="container">
      <h2>Como se Tornar um VTuber</h2>
      <div class="steps-container">
        <div class="step-card">
          <div class="step-icon"><i class="fas fa-desktop"></i></div>
          <h3>1. Equipamento Básico</h3>
          <p>Você precisará de um computador com bom desempenho, webcam, microfone de qualidade e software de streaming (como OBS Studio).</p>
        </div>
        <div class="step-card">
          <div class="step-icon"><i class="fas fa-paint-brush"></i></div>
          <h3>2. Crie ou Adquira um Avatar</h3>
          <p>Você pode criar seu próprio avatar 2D ou 3D ou comissionar um artista. Melhorar procurar modelos prontos para começar, mas fique atento aos termos de uso. </p>
        </div>
        <div class="step-card">
          <div class="step-icon"><i class="fas fa-cogs"></i></div>
          <h3>3. Software de Captura e Animação</h3>
          <p>Programas como VTube Studio são usados para animar seu avatar em tempo real, sincronizando com seus movimentos e expressões faciais. Dica: Tem modelos prontos no workshop da steam da página do VTube Studio.</p>
        </div>
        <div class="step-card">
          <div class="step-icon"><i class="fas fa-lightbulb"></i></div>
          <h3>4. Defina sua Persona e Conteúdo</h3>
          <p>Pense na personalidade do seu VTuber, o tipo de conteúdo que você quer criar (games, conversas, música, etc.) e como você vai interagir com sua audiência.</p>
        </div>
        <div class="step-card">
          <div class="step-icon"><i class="fas fa-play-circle"></i></div>
          <h3>5. Comece a Streamar!</h3>
          <p>Configure seu software de streaming, conecte suas contas e comece a criar conteúdo! Consistência e interação com o público são chave para o crescimento.</p>
        </div>
      </div>
       <p class="extra-info">Lembre-se que o mais importante é se divertir e ser autêntico (mesmo como um avatar)! Existem muitas comunidades e recursos online para ajudar VTubers iniciantes.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowToBecomeSection'
}
</script>

<style scoped>
.how-to-become-section {
  padding: 80px 20px;
  /* background-color: #f0f2f5; Removed for global dark theme */
  text-align: center;
}

.how-to-become-section h2 {
  font-size: 2.8rem;
  margin-bottom: 50px;
  /* color: #333; Removed to inherit global light text */
  position: relative;
  display: inline-block;
}

.how-to-become-section h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #ff4081;
  margin: 10px auto 0;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 40px auto;
}

.step-card {
  background-color: #2a2a3a; /* Dark background for step cards */
  border: 1px solid #4a4a5a; /* Subtle border */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2); /* Adjusted shadow */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(255, 64, 129, 0.25); /* Pink glow on hover */
  border-color: #ff4081; /* Pink border on hover */
}

.step-icon {
  font-size: 3rem;
  color: #ff4081;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.step-card:hover .step-icon {
  transform: scale(1.1); /* Slight scale effect for icon on card hover */
}

.step-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #e0e0e0; /* Light text for card heading */
}

.step-card p {
  font-size: 1rem;
  line-height: 1.7;
  color: #b0b0b0; /* Dimmer light text for card paragraph */
}

.extra-info {
    font-size: 1.1rem;
    color: #c0c0c0; /* Lighter text for extra info */
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
}

@media (max-width: 768px) {
  .how-to-become-section {
    padding: 60px 15px;
  }

  .how-to-become-section h2 {
    font-size: 2.2rem; /* Responsive heading */
    margin-bottom: 40px;
  }

  .steps-container {
    gap: 20px; /* Reduce gap for smaller screens */
  }

  .step-card {
    padding: 20px;
  }

  .step-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  .step-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .step-card p {
    font-size: 0.9rem;
  }
  .extra-info {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .steps-container {
    grid-template-columns: 1fr; /* Single column for very small screens */
  }
   .step-icon {
    font-size: 2.2rem;
  }
  .step-card h3 {
    font-size: 1.1rem;
  }
}

/* Adicione Font Awesome se não estiver globalmente */
/* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'); */
</style> 