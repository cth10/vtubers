<template>
  <section id="glossary" class="glossary-section">
    <div class="container">
      <h2><i class="fas fa-book-open"></i> Glossário VTuber <i class="fas fa-book-open"></i></h2>
      
      <div class="search-bar-container">
        <input type="text" v-model="searchTerm" placeholder="Buscar termo..." @input="filterGlossary" />
        <i class="fas fa-search search-icon"></i>
      </div>

      <div v-if="loading">Carregando glossário...</div>
      <div v-if="error">{{ error }}</div>
      
      <div v-if="!loading && !error" class="glossary-content">
        <div v-for="(section, sectionIndex) in filteredGlossaryData" :key="sectionIndex" class="glossary-category">
          <h3>{{ section.title }}</h3>
          <div class="terms-grid">
            <div v-for="(item, itemIndex) in section.terms" :key="itemIndex" class="term-card" @click="toggleTerm(item)">
              <h4>{{ item.term }} <i :class="['fas', item.expanded ? 'fa-chevron-up' : 'fa-chevron-down']"></i></h4>
              <transition name="slide-fade">
                <div v-if="item.expanded" v-html="item.definition" class="term-definition"></div>
              </transition>
            </div>
          </div>
        </div>
         <div v-if="filteredGlossaryData.length === 0 && searchTerm" class="no-results">
          Nenhum termo encontrado para "{{ searchTerm }}".
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'GlossarySection',
  data() {
    return {
      rawMarkdown: '',
      glossaryData: [],
      filteredGlossaryData: [],
      searchTerm: '',
      loading: true,
      error: null,
    };
  },
  async created() {
    await this.loadGlossary();
  },
  methods: {
    async loadGlossary() {
      this.loading = true;
      this.error = null;
      try {
        // Ajuste o caminho para o arquivo Markdown conforme necessário
        // Presumindo que glossario_vtuber.md está na raiz do projeto Vue (pasta public ou acessível via fetch)
        // Se estiver em /public, o caminho seria /glossario_vtuber.md
        // Se estiver na raiz do workspace (fora de vtuber-site), precisará de um ajuste no build ou copiar para public
        const response = await fetch('/glossario_vtuber.md'); 
        if (!response.ok) {
          throw new Error(`Erro ao carregar o glossário: ${response.statusText} (status: ${response.status})`);
        }
        this.rawMarkdown = await response.text();
        this.parseMarkdown();
        this.filterGlossary(); // Aplicar filtro inicial (mostrar tudo)
      } catch (e) {
        console.error("Falha ao carregar ou processar o glossário:", e);
        this.error = "Não foi possível carregar o glossário. Verifique o console para mais detalhes.";
        this.glossaryData = [];
        this.filteredGlossaryData = [];
      }
      this.loading = false;
    },
    parseMarkdown() {
      const sections = this.rawMarkdown.split(/\n## /).slice(1); // Dividir por títulos de seção ##
      this.glossaryData = sections.map(sectionText => {
        const lines = sectionText.split('\n');
        const title = lines[0].trim();
        const terms = [];
        let currentTerm = null;

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line.startsWith('*   **')) { // Início de um novo termo
            if (currentTerm) terms.push(currentTerm); // Salva o termo anterior
            const termMatch = line.match(/\*\s*\*\*(.*?)\*\*:(.*)/);
            if (termMatch) {
              currentTerm = {
                term: termMatch[1].trim(),
                definition: marked.parse(termMatch[2].trim()), // Processa apenas a definição inicial
                rawDefinition: termMatch[2].trim(),
                expanded: false,
              };
            }
          } else if (currentTerm && line && !line.startsWith('##')) {
            // Linhas de continuação da definição
            currentTerm.rawDefinition += `\n${line}`;
            currentTerm.definition = marked.parse(currentTerm.rawDefinition);
          }
        }
        if (currentTerm) terms.push(currentTerm); // Salva o último termo da seção
        
        return { title, terms };
      });
    },
    toggleTerm(item) {
      item.expanded = !item.expanded;
    },
    filterGlossary() {
      if (!this.searchTerm) {
        this.filteredGlossaryData = JSON.parse(JSON.stringify(this.glossaryData)); // Cópia profunda para resetar
        // Resetar o estado de "expanded" ao limpar a busca
        this.filteredGlossaryData.forEach(section => {
            section.terms.forEach(term => term.expanded = false);
        });
        return;
      }
      const lowerSearchTerm = this.searchTerm.toLowerCase();
      const filtered = [];
      this.glossaryData.forEach(section => {
        const matchingTerms = section.terms.filter(item => 
          item.term.toLowerCase().includes(lowerSearchTerm) || 
          item.rawDefinition.toLowerCase().includes(lowerSearchTerm)
        );
        if (matchingTerms.length > 0) {
          // Ao filtrar, manter o estado de expansão ou colapsar tudo?
          // Por agora, vamos colapsar para um novo resultado de busca.
          const newMatchingTerms = JSON.parse(JSON.stringify(matchingTerms));
          newMatchingTerms.forEach(term => term.expanded = false); 
          filtered.push({ title: section.title, terms: newMatchingTerms });
        }
      });
      this.filteredGlossaryData = filtered;
    }
  },
  watch: {
    // Observar searchTerm para filtrar dinamicamente
    // searchTerm: 'filterGlossary' // Isso é redundante se @input chama filterGlossary
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');

.glossary-section {
  padding: 60px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #e0e0e0;
  font-family: 'Noto Sans JP', sans-serif;
  min-height: 100vh;
}

.glossary-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 3rem; /* Aumentado */
  color: #ff69b4; /* Rosa neon */
  text-transform: uppercase;
  letter-spacing: 3px; /* Aumentado */
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff007f; /* Efeito neon */
}

.glossary-section h2 .fas {
  margin: 0 15px;
  color: #f0f0f0; /* Ícones brancos para contraste */
  text-shadow: 0 0 8px #f0f0f0;
}

.search-bar-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto 40px auto;
}

.search-bar-container input {
  width: 100%;
  padding: 15px 20px 15px 50px; /* Espaço para o ícone */
  border-radius: 50px; /* Bordas arredondadas */
  border: 2px solid #ff69b4;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.1rem;
  outline: none;
  transition: all 0.3s ease;
  font-family: 'Noto Sans JP', sans-serif;
}

.search-bar-container input::placeholder {
  color: #bbb;
}

.search-bar-container input:focus {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #f0f0f0;
  box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
}

.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #ff69b4;
  font-size: 1.2rem;
}

.glossary-content {
  /* Layout será controlado pelos filhos */
}

.glossary-category h3 {
  font-family: 'Orbitron', sans-serif;
  color: #87cefa; /* Azul claro para títulos de categoria */
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #87cefa;
  text-shadow: 0 0 5px #87cefa;
}

.terms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.term-card {
  background-color: rgba(42, 50, 78, 0.7); /* Fundo translúcido */
  border: 1px solid #5a67d8; /* Borda roxa azulada */
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px); /* Efeito de vidro fosco */
}

.term-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 20px rgba(255, 105, 180, 0.3), 0 0 15px #5a67d8;
}

.term-card h4 {
  font-family: 'Roboto', sans-serif; /* Fonte mais padrão para o termo */
  color: #f0f0f0;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.term-card h4 .fas {
  font-size: 1rem;
  color: #ff69b4;
  transition: transform 0.3s ease;
}

.term-definition {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.7;
  overflow: hidden; /* Para a animação funcionar bem */
  margin-top: 10px;
}

.term-definition ::v-deep(p) {
  margin-bottom: 0.5em;
}

.term-definition ::v-deep(ul),
.term-definition ::v-deep(ol) {
  padding-left: 20px;
}

/* Animação de slide e fade para a definição */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  max-height: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 500px; /* Ajuste conforme necessário, deve ser maior que o conteúdo */
  opacity: 1;
}

.no-results {
  text-align: center;
  font-size: 1.2rem;
  color: #ffc0cb; /* Rosa claro */
  margin-top: 30px;
  font-style: italic;
}

/* Estilo global da barra de rolagem (já existe em App.vue, mas pode ser reforçado aqui se necessário) */

/* Responsividade */
@media (max-width: 768px) {
  .glossary-section h2 {
    font-size: 2.2rem;
  }
  .glossary-category h3 {
    font-size: 1.7rem;
  }
  .term-card h4 {
    font-size: 1.2rem;
  }
  .search-bar-container input {
    padding: 12px 15px 12px 40px;
    font-size: 1rem;
  }
  .search-icon {
    left: 15px;
  }
}

</style> 