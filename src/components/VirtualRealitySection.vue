
<template>
  <section id="virtualreality" class="virtual-reality-section">
    <div class="container">
      <!-- Header com efeito neon -->
      <div class="section-header">
        <h2 class="neon-title">
          <span class="japanese-subtitle">バーチャルの世界へようこそ</span>
          Liberdade na Realidade Virtual
        </h2>
        <div class="divider-line"></div>
      </div>

      <!-- Grid principal -->
      <div class="content-grid">
        <!-- Personalidade Virtual -->
        <div class="feature-card persona-card">
          <div class="card-header">
            <div class="icon-container">
              <i class="fas fa-masks-theater"></i>
            </div>
            <h3>Escolha Sua Personalidade</h3>
          </div>
          <div class="card-content">
            <p>Como VTuber, você não está limitado pela sua personalidade do mundo real. Quer ser extrovertido quando é tímido? Confiante quando é inseguro? <strong>O avatar é sua máscara de liberdade.</strong></p>
            <ul class="feature-list">
              <li><i class="fas fa-star"></i> Reinvente-se completamente</li>
              <li><i class="fas fa-star"></i> Explore diferentes facetas da personalidade</li>
              <li><i class="fas fa-star"></i> Seja quem sempre quis ser</li>
            </ul>
          </div>
        </div>

        <!-- Aparência Virtual -->
        <div class="feature-card appearance-card">
          <div class="card-header">
            <div class="icon-container">
              <i class="fas fa-magic"></i>
            </div>
            <h3>Aparência dos Sonhos</h3>
          </div>
          <div class="card-content">
            <p>Seu avatar pode ser qualquer coisa que imaginar - desde uma garota anime kawaii até uma dragão majestosa. <strong>Não há limites físicos, apenas sua criatividade.</strong></p>
            <ul class="feature-list">
              <li><i class="fas fa-palette"></i> Cores impossíveis na natureza</li>
              <li><i class="fas fa-palette"></i> Características únicas (orelhas de gato, asas, etc.)</li>
              <li><i class="fas fa-palette"></i> Mude sua aparência quando quiser</li>
            </ul>
          </div>
        </div>

        <!-- Escapismo -->
        <div class="feature-card escape-card">
          <div class="card-header">
            <div class="icon-container">
              <i class="fas fa-door-open"></i>
            </div>
            <h3>Fuga da Realidade</h3>
          </div>
          <div class="card-content">
            <p>O mundo virtual oferece um refúgio dos problemas do dia a dia. <strong>Aqui você pode ser feliz, confiante e livre de julgamentos.</strong></p>
            <ul class="feature-list">
              <li><i class="fas fa-heart"></i> Deixe a ansiedade social para trás</li>
              <li><i class="fas fa-heart"></i> Conecte-se sem revelar sua identidade</li>
              <li><i class="fas fa-heart"></i> Crie um espaço seguro e acolhedor</li>
            </ul>
          </div>
        </div>

        <!-- Realidade Paralela -->
        <div class="feature-card parallel-card">
          <div class="card-header">
            <div class="icon-container">
              <i class="fas fa-globe"></i>
            </div>
            <h3>Vida Paralela</h3>
          </div>
          <div class="card-content">
            <p>Viva uma segunda vida onde você controla totalmente a narrativa. <strong>Crie sua própria história, relacionamentos e aventuras.</strong></p>
            <ul class="feature-list">
              <li><i class="fas fa-book"></i> Construa seu próprio lore</li>
              <li><i class="fas fa-book"></i> Forme famílias virtuais</li>
              <li><i class="fas fa-book"></i> Viva aventuras impossíveis</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Seção de citação inspiracional -->
      <div class="inspiration-quote">
        <div class="quote-container">
          <blockquote>
            "No mundo virtual, você não é limitado por gênero, aparência ou personalidade. 
            Você é livre para ser a melhor versão de si mesmo."
            <cite>- Filosofia VTuber</cite>
          </blockquote>
        </div>
      </div>

      <!-- Seção de benefícios psicológicos -->
      <div class="psychology-section">
        <h3 class="psychology-title">Benefícios Psicológicos</h3>
        <div class="benefits-grid">
          <div class="benefit-item">
            <i class="fas fa-shield-alt"></i>
            <h4>Proteção de Identidade</h4>
            <p>Mantenha sua privacidade enquanto se expressa livremente</p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-users"></i>
            <h4>Conexões Genuínas</h4>
            <p>Forme relacionamentos baseados em personalidade, não aparência</p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-brain"></i>
            <h4>Autoestima</h4>
            <p>Desenvolva confiança em um ambiente controlado e seguro</p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-theater-masks"></i>
            <h4>Expressão Criativa</h4>
            <p>Explore diferentes aspectos da sua personalidade</p>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="cta-section">
        <h3>Pronto para Começar Sua Jornada Virtual?</h3>
        <p>A realidade virtual te espera. Seja quem você sempre sonhou ser.</p>
        <a href="#howtobecome" class="btn-virtual">Iniciar Transformação</a>
      </div>
    </div>

    <!-- Partículas de fundo -->
    <div class="particles-background">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VirtualRealitySection'
}
</script>

<style scoped>
.virtual-reality-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
  color: #e0e0e0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Header com efeito neon */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.neon-title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #ff6b9d, #c44569, #ff9ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  text-shadow: 0 0 30px rgba(255, 107, 157, 0.5);
  position: relative;
}

.japanese-subtitle {
  display: block;
  font-size: 1.2rem;
  color: #ff6b9d;
  margin-bottom: 10px;
  font-weight: 400;
  letter-spacing: 2px;
}

.divider-line {
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #ff6b9d, transparent);
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.8);
}

/* Grid principal */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.feature-card {
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid rgba(255, 107, 157, 0.3);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.1), transparent);
  transition: left 0.5s ease;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #ff6b9d;
  box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon-container {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b9d, #c44569);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 5px 20px rgba(255, 107, 157, 0.4);
}

.card-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.card-content p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #b0b0b0;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #d0d0d0;
}

.feature-list i {
  color: #ff6b9d;
  margin-right: 10px;
  font-size: 0.9rem;
}

/* Citação inspiracional */
.inspiration-quote {
  text-align: center;
  margin: 80px 0;
}

.quote-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 107, 157, 0.1);
  border-left: 4px solid #ff6b9d;
  border-radius: 10px;
}

.quote-container blockquote {
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.8;
  margin: 0;
  color: #fff;
}

.quote-container cite {
  display: block;
  margin-top: 20px;
  font-size: 1rem;
  color: #ff6b9d;
}

/* Seção de psicologia */
.psychology-section {
  margin-bottom: 80px;
}

.psychology-title {
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 50px;
  position: relative;
}

.psychology-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b9d, #c44569);
  margin: 15px auto 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.benefit-item {
  text-align: center;
  padding: 30px 20px;
  background: rgba(22, 33, 62, 0.6);
  border-radius: 15px;
  border: 1px solid rgba(255, 107, 157, 0.2);
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  border-color: #ff6b9d;
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
}

.benefit-item i {
  font-size: 3rem;
  color: #ff6b9d;
  margin-bottom: 20px;
}

.benefit-item h4 {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 15px;
}

.benefit-item p {
  color: #b0b0b0;
  line-height: 1.6;
}

/* Call to action */
.cta-section {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(196, 69, 105, 0.1));
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 157, 0.3);
}

.cta-section h3 {
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.2rem;
  color: #d0d0d0;
  margin-bottom: 30px;
}

.btn-virtual {
  display: inline-block;
  padding: 15px 40px;
  background: linear-gradient(45deg, #ff6b9d, #c44569);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(255, 107, 157, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-virtual:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(255, 107, 157, 0.6);
  background: linear-gradient(45deg, #ff8fb3, #d45a7f);
}

/* Partículas animadas */
.particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ff6b9d;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  opacity: 0.7;
}

.particle:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  top: 60%;
  left: 80%;
  animation-delay: 2s;
}

.particle:nth-child(3) {
  top: 80%;
  left: 40%;
  animation-delay: 4s;
}

.particle:nth-child(4) {
  top: 40%;
  left: 10%;
  animation-delay: 1s;
}

.particle:nth-child(5) {
  top: 10%;
  left: 70%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Responsividade */
@media (max-width: 768px) {
  .virtual-reality-section {
    padding: 80px 15px;
  }

  .neon-title {
    font-size: 2.5rem;
  }

  .content-grid {
    gap: 20px;
    margin-bottom: 60px;
  }

  .feature-card {
    padding: 25px;
  }

  .card-header {
    flex-direction: column;
    text-align: center;
  }

  .icon-container {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .psychology-title {
    font-size: 2rem;
  }

  .benefits-grid {
    gap: 20px;
  }

  .cta-section {
    padding: 40px 20px;
  }

  .cta-section h3 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .neon-title {
    font-size: 2rem;
  }

  .japanese-subtitle {
    font-size: 1rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .quote-container {
    padding: 30px 20px;
  }

  .quote-container blockquote {
    font-size: 1.2rem;
  }
}
</style>
