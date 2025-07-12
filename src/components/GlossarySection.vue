
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
export default {
  name: 'GlossarySection',
  data() {
    return {
      glossaryData: [
        {
          title: "Termos Gerais",
          terms: [
            {
              term: "VTuber (Virtual YouTuber)",
              definition: "Criador de conteúdo online ou streamer que utiliza um avatar digital para se representar. O termo foi originalmente cunhado por Kizuna Ai, mas agora se aplica a criadores em diversas plataformas, não apenas no YouTube.",
              expanded: false
            },
            {
              term: "Avatar",
              definition: "A representação digital de um VTuber.",
              expanded: false
            },
            {
              term: "Live2D",
              definition: "Software e técnica de animação usados para criar modelos 2D dinâmicos com expressões e movimentos. A maioria dos VTubers utiliza modelos Live2D.",
              expanded: false
            },
            {
              term: "Modelo 3D",
              definition: "Avatares criados com software de modelagem 3D, permitindo movimentos e expressões complexas.",
              expanded: false
            },
            {
              term: "Rigging",
              definition: "O processo de criar um \"esqueleto\" digital para um modelo 2D ou 3D, permitindo que ele seja animado em tempo real. A pessoa que faz isso é chamada de \"rigger\".",
              expanded: false
            },
            {
              term: "Debut",
              definition: "A transmissão de lançamento oficial de um VTuber. Geralmente inclui a apresentação do avatar, personalidade, objetivos e redes sociais.",
              expanded: false
            },
            {
              term: "Redebut",
              definition: "Uma nova transmissão de debut, geralmente para apresentar um novo design de avatar, mudança de nome, ou algo similar.",
              expanded: false
            },
            {
              term: "Graduação",
              definition: "Aposentadoria de um VTuber. Alguns celebram com transmissões elaboradas, enquanto outros podem se aposentar sem aviso.",
              expanded: false
            },
            {
              term: "Lore",
              definition: "Elementos fictícios do cenário ou história de um VTuber.",
              expanded: false
            },
            {
              term: "Mama/Papa",
              definition: "Termos usados para se referir ao designer, ilustrador ou rigger do modelo de um VTuber. \"Mama\" é frequentemente usado para a ilustradora e \"Papa\" para o rigger, mas pode variar.",
              expanded: false
            },
            {
              term: "Oshi",
              definition: "O VTuber favorito de um espectador. Termo originado da indústria de idols.",
              expanded: false
            },
            {
              term: "Oshi Mark",
              definition: "Um emoji ou conjunto de emojis escolhidos oficialmente para representar um VTuber, frequentemente usado por fãs em seus nomes de usuário nas redes sociais.",
              expanded: false
            },
            {
              term: "Fan Name",
              definition: "Um apelido de grupo para os espectadores de um determinado VTuber.",
              expanded: false
            },
            {
              term: "Collab (Colaboração)",
              definition: "Uma transmissão ou conteúdo onde múltiplos VTubers aparecem juntos.",
              expanded: false
            },
            {
              term: "Off-Collab",
              definition: "Uma colaboração onde os VTubers se encontram pessoalmente, em vez de online.",
              expanded: false
            },
            {
              term: "Zatsudan",
              definition: "Uma transmissão de \"Just Chatting\" (Apenas Conversando), onde o VTuber fala sobre tópicos diversos, muitas vezes interagindo com o chat.",
              expanded: false
            },
            {
              term: "Utawaku",
              definition: "Uma transmissão de karaokê ou canto ao vivo.",
              expanded: false
            },
            {
              term: "Superchat (Supa/SupaCha)",
              definition: "Um tipo de doação no YouTube Live que destaca a mensagem do doador. \"Akasupa\" refere-se ao Superchat vermelho, o de maior valor.",
              expanded: false
            },
            {
              term: "Anti",
              definition: "Um troll ou hater.",
              expanded: false
            },
            {
              term: "Doxxing",
              definition: "O ato de revelar publicamente informações pessoais sobre um VTuber, como seu nome real ou endereço. É uma prática mal vista na comunidade.",
              expanded: false
            },
            {
              term: "Past Life",
              definition: "A identidade que um VTuber tinha antes de se tornar VTuber. Revelar isso é geralmente um grande tabu.",
              expanded: false
            },
            {
              term: "PNGTuber",
              definition: "Um VTuber que se representa com uma imagem estática (formato PNG), como uma alternativa mais barata ou temporária a um modelo animado.",
              expanded: false
            },
            {
              term: "Seiso",
              definition: "Termo que significa \"puro\" ou \"sadio\". Usado para descrever VTubers que não usam palavrões ou falam sobre tópicos considerados rudes. Frequentemente usado ironicamente.",
              expanded: false
            },
            {
              term: "Teetee",
              definition: "Gíria que vem de \"toutoi\" (尊い), significando \"precioso\" ou \"adorável\". Usado para descrever momentos ou interações fofas entre VTubers.",
              expanded: false
            },
            {
              term: "Kusa (草)",
              definition: "Gíria japonesa da internet equivalente a \"lol\" ou \"lmao\". \"W\" (de \"wara\", rir) repetido (wwww) parece grama (kusa).",
              expanded: false
            },
            {
              term: "Yabai (やばい)",
              definition: "Palavra japonesa com múltiplos significados dependendo do contexto. No fandom de VTubers, é frequentemente usada para descrever algo \"perigoso\", \"arriscado\", ou sugestivo/picante.",
              expanded: false
            },
            {
              term: "VOD (Video On Demand)",
              definition: "Uma gravação arquivada de uma transmissão ao vivo.",
              expanded: false
            },
            {
              term: "Unarchived",
              definition: "Uma transmissão ao vivo para a qual não haverá VOD disponível, geralmente por razões de direitos autorais.",
              expanded: false
            },
            {
              term: "Guerilla Stream",
              definition: "Uma transmissão não planejada que acontece de surpresa.",
              expanded: false
            },
            {
              term: "Subathon",
              definition: "Uma maratona de streams cujo objetivo é conseguir mais inscrições (subscriptions) na Twitch. A duração do evento geralmente aumenta a cada nova inscrição.",
              expanded: false
            },
            {
              term: "Talent",
              definition: "O indivíduo por trás do VTuber, em oposição ao personagem. A identidade do \"talent\" é frequentemente um segredo bem guardado.",
              expanded: false
            },
            {
              term: "Babiniku",
              definition: "Um VTuber que é homem na vida real, mas usa um modelo feminino.",
              expanded: false
            },
            {
              term: "Mute VTuber",
              definition: "Um VTuber que não fala em seu conteúdo, por diversos motivos.",
              expanded: false
            },
            {
              term: "Indie VTuber",
              definition: "Um VTuber independente, não afiliado a uma agência.",
              expanded: false
            },
            {
              term: "Corpo VTuber",
              definition: "Um VTuber afiliado a uma corporação ou agência.",
              expanded: false
            },
            {
              term: "Hololive",
              definition: "Uma grande agência de talentos VTuber japonesa.",
              expanded: false
            },
            {
              term: "Nijisanji",
              definition: "Outra grande agência de talentos VTuber, também de origem japonesa.",
              expanded: false
            },
            {
              term: "VShojo",
              definition: "Uma agência de talentos VTuber baseada nos Estados Unidos.",
              expanded: false
            },
            {
              term: "EN VTuber",
              definition: "VTuber que fala inglês (English-speaking).",
              expanded: false
            },
            {
              term: "JP VTuber",
              definition: "VTuber que fala japonês (Japanese-speaking).",
              expanded: false
            },
            {
              term: "ID VTuber",
              definition: "VTuber que fala indonésio (Indonesian-speaking).",
              expanded: false
            },
            {
              term: "KR VTuber",
              definition: "VTuber que fala coreano (Korean-speaking).",
              expanded: false
            },
            {
              term: "VUP",
              definition: "Termo chinês para VTuber, popular na plataforma Bilibili (Virtual UP).",
              expanded: false
            },
            {
              term: "Otsu (おつ)",
              definition: "Abreviação de \"otsukaresama deshita\" (お疲れ様でした), que significa algo como \"obrigado pelo seu trabalho\" ou \"bom trabalho\". Usado como despedida no final de uma stream. Muitos VTubers têm suas próprias variações (ex: \"Otsupeko\" para Usada Pekora).",
              expanded: false
            }
          ]
        },
        {
          title: "Gírias e Memes",
          terms: [
            {
              term: "8888 (Hachi Hachi Hachi Hachi)",
              definition: "O número 8 em japonês é \"hachi\", que soa similar a \"pachi pachi\", a onomatopeia para palmas. Usado no chat para aplaudir.",
              expanded: false
            },
            {
              term: "Boing Boing",
              definition: "Refere-se a personagens com seios grandes e com física de movimento proeminente. O oposto de \"Pettanko\".",
              expanded: false
            },
            {
              term: "Pettanko (ぺったんこ)",
              definition: "Termo para personagens com peito plano.",
              expanded: false
            },
            {
              term: "Bottom Left",
              definition: "Gíria originada de um gráfico de alinhamento de pureza vs. inteligência entre membros da Hololive English. \"Bottom left\" representa alguém que é impuro e não muito inteligente, ou apenas impuro.",
              expanded: false
            },
            {
              term: "DD (Daredemo Daisuki - 誰でも大好き)",
              definition: "\"Eu amo qualquer um\". Usado para fãs que gostam e acompanham muitos VTubers, em vez de apenas um oshi.",
              expanded: false
            },
            {
              term: "Gachikoi (ガチ恋)",
              definition: "Fãs que estão romanticamente apaixonados por um VTuber.",
              expanded: false
            },
            {
              term: "Halu",
              definition: "Curto para \"halusinasi\" (alucinação em indonésio). Usado para descrever alguém que está sendo delirante, como acreditar que é casado com um talent.",
              expanded: false
            },
            {
              term: "Ikebo (イケボ)",
              definition: "Abreviação de \"ikemen voice\" (イケメンボイス), voz de homem bonito. Usado quando uma VTuber feminina faz uma voz masculina atraente.",
              expanded: false
            },
            {
              term: "Inaff",
              definition: "Contração de \"Ina\" (Ninomae Ina'nis da Hololive EN) e \"enough\" (suficiente). Usado quando alguém faz um trocadilho ruim, uma característica da Ina.",
              expanded: false
            },
            {
              term: "Kaigai Niki (海外ニキ)",
              definition: "\"Irmãos do exterior\". Termo usado por VTubers e fãs japoneses para se referir a fãs de fora do Japão.",
              expanded: false
            },
            {
              term: "PON (Ponkotsu - ポンコツ)",
              definition: "Significa \"desajeitado\", \"inútil\" ou \"não confiável\". Usado para descrever VTubers que cometem erros bobos, o que muitas vezes aumenta seu charme.",
              expanded: false
            },
            {
              term: "TSKR",
              definition: "Abreviação de \"tasukaru\" (助かる), que significa \"ser salvo\". Usado no chat quando um VTuber faz algo muito fofo ou prestativo, como se dissesse \"isso me salvou\" ou \"eu precisava disso\".",
              expanded: false
            },
            {
              term: "YAGOO",
              definition: "Apelido de Motoaki Tanigo, o CEO da Cover Corp (empresa da Hololive). Originou-se de um erro de digitação de Oozora Subaru.",
              expanded: false
            }
          ]
        }
      ],
      filteredGlossaryData: [],
      searchTerm: '',
      loading: false,
      error: null,
    };
  },
  created() {
    this.initializeGlossary();
  },
  methods: {
    initializeGlossary() {
      this.filteredGlossaryData = JSON.parse(JSON.stringify(this.glossaryData));
    },
    toggleTerm(item) {
      item.expanded = !item.expanded;
    },
    filterGlossary() {
      if (!this.searchTerm) {
        this.filteredGlossaryData = JSON.parse(JSON.stringify(this.glossaryData));
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
          item.definition.toLowerCase().includes(lowerSearchTerm)
        );
        if (matchingTerms.length > 0) {
          const newMatchingTerms = JSON.parse(JSON.stringify(matchingTerms));
          newMatchingTerms.forEach(term => term.expanded = false); 
          filtered.push({ title: section.title, terms: newMatchingTerms });
        }
      });
      this.filteredGlossaryData = filtered;
    }
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
  font-size: 3rem;
  color: #ff69b4;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff007f;
}

.glossary-section h2 .fas {
  margin: 0 15px;
  color: #f0f0f0;
  text-shadow: 0 0 8px #f0f0f0;
}

.search-bar-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto 40px auto;
}

.search-bar-container input {
  width: 100%;
  padding: 15px 20px 15px 50px;
  border-radius: 50px;
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
  color: #87cefa;
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
  background-color: rgba(42, 50, 78, 0.7);
  border: 1px solid #5a67d8;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
}

.term-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 20px rgba(255, 105, 180, 0.3), 0 0 15px #5a67d8;
}

.term-card h4 {
  font-family: 'Roboto', sans-serif;
  color: #f0f0f0;
  font-size: 1.3rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.term-card h4 .fas {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.term-card.expanded .fa-chevron-down {
    transform: rotate(180deg);
}

.term-definition {
  color: #ccc;
  font-size: 1rem;
  line-height: 1.7;
  padding-top: 10px;
  border-top: 1px dashed rgba(255,255,255,0.2);
  margin-top: 10px;
}

.term-definition ::v-deep(p) {
  margin-bottom: 0.5em;
}

.term-definition ::v-deep(ul),
.term-definition ::v-deep(ol) {
  padding-left: 20px;
  margin-bottom: 0.5em;
}

.full-glossary-link {
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px dashed rgba(255, 255, 255, 0.2);
}

.full-glossary-link a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ff69b4;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 15px 25px;
  border: 2px solid #ff69b4;
  border-radius: 25px;
  transition: all 0.3s ease;
  background-color: rgba(255, 105, 180, 0.1);
}

.full-glossary-link a:hover {
  background-color: rgba(255, 105, 180, 0.2);
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 105, 180, 0.4);
}

/* Animação para expandir/colapsar */
.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.no-results {
  text-align: center;
  font-size: 1.2rem;
  color: #ffc107;
  margin-top: 30px;
}

@media (max-width: 768px) {
  .glossary-section {
    padding: 40px 15px;
    min-height: auto;
  }

  .glossary-section h2 {
    font-size: 2.2rem;
    letter-spacing: 2px;
  }

  .search-bar-container {
    max-width: 100%;
    margin: 0 auto 30px auto;
    padding: 0 10px;
  }

  .search-bar-container input {
    padding: 14px 20px 14px 45px;
    font-size: 1rem;
    border-radius: 30px;
    width: 100%;
    box-sizing: border-box;
    min-height: 48px;
  }

  .search-icon {
    left: 18px;
    font-size: 1.1rem;
  }

  .glossary-category h3 {
    font-size: 1.6rem;
  }

  .terms-grid {
    gap: 15px;
  }

  .term-card {
    padding: 15px;
  }

  .term-card h4 {
    font-size: 1.1rem;
  }

  .term-definition {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .glossary-section {
    padding: 30px 10px;
  }

  .glossary-section h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .search-bar-container {
    padding: 0 5px;
    margin-bottom: 25px;
  }

  .search-bar-container input {
    padding: 12px 18px 12px 42px;
    font-size: 0.95rem;
    border-radius: 25px;
    min-height: 44px;
  }

  .search-icon {
    left: 16px;
    font-size: 1rem;
  }

  .glossary-category h3 {
    font-size: 1.4rem;
    margin-top: 30px;
  }

  .terms-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .term-card {
    padding: 12px;
  }
}
</style>
