// BANCO DE PERGUNTAS (8 perguntas por ciclo = 32 perguntas no total)
const bancoPerguntas = {
  agua: {
    nome: "Ciclo da Água",
    classeCor: "azul",
    bordaCor: "#2563eb",
    perguntas: [
      {
        pergunta: "Qual é o nome da mudança de estado físico em que a água líquida dos rios e oceanos passa para o estado gasoso devido ao calor do Sol?",
        opcoes: ["Evaporação", "Condensação", "Solidificação", "Fusão"],
        correta: 0
      },
      {
        pergunta: "Como se chama o processo em que o vapor de água esfria nas camadas altas da atmosfera e forma as nuvens?",
        opcoes: ["Precipitação", "Condensação", "Infiltração", "Sublimação"],
        correta: 1
      },
      {
        pergunta: "Quando as gotículas de água das nuvens ficam pesadas e caem na forma de chuva, neve ou granizo, ocorre a:",
        opcoes: ["Transpiração", "Evaporação", "Precipitação", "Ebulição"],
        correta: 2
      },
      {
        pergunta: "De que maneira as plantas participam ativamente do ciclo da água, devolvendo vapor de água para a atmosfera pelas folhas?",
        opcoes: ["Fotossíntese", "Transpiração", "Decomposição", "Polinização"],
        correta: 1
      },
      {
        pergunta: "O que acontece durante a etapa de infiltração no ciclo da água?",
        opcoes: [
          "A água congela no topo das montanhas.",
          "A água evapora diretamente das folhas das árvores.",
          "A água penetra no solo, abastecendo os lençóis freáticos.",
          "A água forma neblina perto dos lagos."
        ],
        correta: 2
      },
      {
        pergunta: "Qual é a principal fonte de energia que impulsiona o ciclo da água na Terra?",
        opcoes: ["A energia geotérmica do núcleo", "O calor do Sol", "A força dos ventos", "A gravidade da Lua"],
        correta: 1
      },
      {
        pergunta: "O desmatamento e a pavimentação das cidades prejudicam diretamente qual etapa do ciclo da água?",
        opcoes: [
          "A infiltração da água no solo, aumentando o risco de enchentes.",
          "A condensação do vapor nas nuvens.",
          "O congelamento das calotas polares.",
          "A salinização dos oceanos."
        ],
        correta: 0
      },
      {
        pergunta: "Como se chama a reserva subterrânea de água doce formada pela água da chuva que infiltra no solo?",
        opcoes: ["Geleira", "Lençol freático (ou aquífero)", "Estuário", "Nuvem cumulonimbus"],
        correta: 1
      }
    ]
  },

  carbono: {
    nome: "Ciclo do Carbono",
    classeCor: "verde",
    bordaCor: "#16a34a",
    perguntas: [
      {
        pergunta: "Qual processo realizado pelas plantas, algas e cianobactérias retira gás carbônico (CO₂) da atmosfera para produzir matéria orgânica?",
        opcoes: ["Respiração celular", "Fotossíntese", "Combustão", "Decomposição"],
        correta: 1
      },
      {
        pergunta: "De que forma os animais e as plantas devolvem gás carbônico (CO₂) continuamente para a atmosfera?",
        opcoes: ["Pela transpiração", "Pela respiração celular", "Pela absorção pelas raízes", "Pela precipitação"],
        correta: 1
      },
      {
        pergunta: "O que são combustíveis fósseis (como petróleo, carvão mineral e gás natural) no ciclo do carbono?",
        opcoes: [
          "Rochas formadas apenas por oxigênio puro.",
          "Restos de seres vivos soterrados há milhões de anos ricos em carbono.",
          "Gases produzidos apenas pela respiração dos peixes.",
          "Fertilizantes artificiais usados na agricultura."
        ],
        correta: 1
      },
      {
        pergunta: "Qual atividade humana tem causado o maior desequilíbrio no ciclo do carbono e agravado o efeito estufa?",
        opcoes: [
          "O plantio de árvores nativas.",
          "O uso de energia eólica e solar.",
          "A queima de combustíveis fósseis e as queimadas.",
          "A reciclagem de metais e plásticos."
        ],
        correta: 2
      },
      {
        pergunta: "Qual é o papel dos fungos e bactérias decompositores no ciclo do carbono?",
        opcoes: [
          "Transformar gás carbônico em oxigênio.",
          "Decompor matéria orgânica morta, devolvendo carbono ao solo e ao ar.",
          "Impedir que o carbono entre nas cadeias alimentares.",
          "Produzir combustíveis fósseis em poucos dias."
        ],
        correta: 1
      },
      {
        pergunta: "Como os animais consumidores (como herbívoros e carnívoros) obtêm o carbono necessário para formar seus corpos?",
        opcoes: [
          "Respirando o gás carbônico do ar.",
          "Absorvendo carbono diretamente da luz solar.",
          "Por meio da alimentação, ao ingerir plantas ou outros animais.",
          "Bebendo água da chuva."
        ],
        correta: 2
      },
      {
        pergunta: "Além da atmosfera e das florestas, qual é outro grande reservatório que absorve imensas quantidades de gás carbônico na Terra?",
        opcoes: ["Os oceanos", "Os desertos de areia", "A camada de ozônio", "O núcleo terrestre"],
        correta: 0
      },
      {
        pergunta: "O aumento excessivo de gás carbônico (CO₂) na atmosfera está diretamente relacionado a qual fenômeno ambiental?",
        opcoes: [
          "Destruição total dos lençóis freáticos.",
          "Aquecimento global e mudanças climáticas.",
          "Diminuição da gravidade terrestre.",
          "Aumento da camada de ozônio."
        ],
        correta: 1
      }
    ]
  },
  oxigenio: {
    nome: "Ciclo do Oxigênio",
    classeCor: "amarelo",
    bordaCor: "#eab308",
    perguntas: [
      {
        pergunta: "Qual é o principal processo natural responsável por liberar gás oxigênio (O₂) para a atmosfera terrestre?",
        opcoes: ["Respiração", "Fotossíntese", "Combustão", "Fermentação"],
        correta: 1
      },
      {
        pergunta: "Quais organismos são os maiores responsáveis pela produção de oxigênio no planeta Terra?",
        opcoes: [
          "Apenas as árvores da Floresta Amazônica.",
          "O fitoplâncton (algas microscópicas e cianobactérias) dos oceanos.",
          "Os animais mamíferos terrestres.",
          "Os fungos que vivem no solo."
        ],
        correta: 1
      },
      {
        pergunta: "Na respiração celular, os seres vivos aeróbicos absorvem oxigênio (O₂) e liberam qual gás como resíduo?",
        opcoes: ["Gás nitrogênio (N₂)", "Gás carbônico (CO₂)", "Gás hélio (He)", "Gás hidrogênio (H₂)"],
        correta: 1
      },
      {
        pergunta: "O gás ozônio (O₃), formado a partir do oxigênio na estratosfera, tem qual função vital para os seres vivos?",
        opcoes: [
          "Aumentar a temperatura dos oceanos.",
          "Filtrar grande parte dos raios ultravioleta (UV) nocivos do Sol.",
          "Fornecer oxigênio direto para a respiração dos peixes.",
          "Causar as chuvas ácidas nas cidades."
        ],
        correta: 1
      },
      {
        pergunta: "Além da respiração dos seres vivos, qual outro processo consome grandes quantidades de gás oxigênio (O₂) do ambiente?",
        opcoes: [
          "A combustão (queima de materiais e combustíveis).",
          "A condensação das nuvens.",
          "A evaporação da água do mar.",
          "A infiltração da água no solo."
        ],
        correta: 0
      },
      {
        pergunta: "Por que dizemos que o ciclo do oxigênio e o ciclo do carbono estão intimamente ligados?",
        opcoes: [
          "Porque ambos ocorrem apenas no fundo dos oceanos.",
          "Porque a fotossíntese e a respiração trocam esses dois gases entre os seres vivos e o ambiente.",
          "Porque o oxigênio se transforma em carbono dentro das plantas.",
          "Porque nenhum dos dois precisa da luz do Sol."
        ],
        correta: 1
      },
      {
        pergunta: "O processo de enferrujamento (oxidação) de metais expostos ao ar livre ocorre porque o ferro reage com qual gás da atmosfera?",
        opcoes: ["Nitrogênio", "Oxigênio", "Argônio", "Metano"],
        correta: 1
      },
      {
        pergunta: "Se todas as plantas e algas do planeta desaparecessem, o que aconteceria com a quantidade de oxigênio atmosférico ao longo do tempo?",
        opcoes: [
          "Aumentaria rapidamente.",
          "Permaneceria exatamente igual.",
          "Diminuiria drasticamente, afetando os seres aeróbicos.",
          "Seria substituída pelo gás hélio."
        ],
        correta: 2
      }
    ]
  },

  nitrogenio: {
    nome: "Ciclo do Nitrogênio",
    classeCor: "vermelho",
    bordaCor: "#dc2626",
    perguntas: [
      {
        pergunta: "Qual é o gás mais abundante na atmosfera terrestre, representando cerca de 78% do ar que respiramos?",
        opcoes: ["Gás Oxigênio (O₂)", "Gás Carbônico (CO₂)", "Gás Nitrogênio (N₂)", "Gás Ozônio (O₃)"],
        correta: 2
      },
      {
        pergunta: "Por que as plantas e os animais não conseguem absorver o gás nitrogênio (N₂) diretamente do ar pela respiração?",
        opcoes: [
          "Porque o nitrogênio é tóxico para todos os seres vivos.",
          "Porque a molécula de N₂ é muito estável e precisa ser transformada por bactérias.",
          "Porque o nitrogênio só existe no espaço sideral.",
          "Porque o nitrogênio é sólido na temperatura ambiente."
        ],
        correta: 1
      },
      {
        pergunta: "Quais seres vivos são fundamentais para realizar a fixação do nitrogênio atmosférico no solo?",
        opcoes: ["Bactérias fixadoras", "Aves migratórias", "Insetos polinizadores", "Peixes de água doce"],
        correta: 0
      },
      {
        pergunta: "Onde vivem as bactérias do gênero Rhizobium, famosas por ajudar a fixar nitrogênio para as plantas?",
        opcoes: [
          "Nas folhas dos cactos.",
          "Em nódulos nas raízes de plantas leguminosas (como feijão e soja).",
          "Dentro das nuvens de chuva.",
          "No estômago dos animais carnívoros."
        ],
        correta: 1
      },
      {
        pergunta: "Para que os seres vivos precisam do elemento nitrogênio em seus organismos?",
        opcoes: [
          "Para produzir proteínas e ácidos nucleicos (como o DNA).",
          "Apenas para manter o corpo aquecido.",
          "Para realizar a transpiração pelas folhas.",
          "Para formar os ossos de cálcio."
        ],
        correta: 0
      },
      {
        pergunta: "Como os animais obtêm o nitrogênio necessário para construir suas proteínas?",
        opcoes: [
          "Respirando profundamente o ar atmosférico.",
          "Alimentando-se de plantas ou de outros animais.",
          "Tomando banho de sol diariamente.",
          "Absorvendo nitrogênio pela pele."
        ],
        correta: 1
      },
      {
        pergunta: "Qual é o nome da etapa final do ciclo do nitrogênio em que bactérias devolvem o gás nitrogênio (N₂) do solo para a atmosfera?",
        opcoes: ["Fotossíntese", "Desnitrificação", "Condensação", "Fixação"],
        correta: 1
      },
      {
        pergunta: "Por que os agricultores costumam plantar leguminosas (como soja, feijão ou ervilha) na rotação de culturas?",
        opcoes: [
          "Porque essas plantas retiram toda a água do solo.",
          "Porque suas raízes abrigam bactérias que enriquecem o solo com nitrogênio.",
          "Porque elas impedem a entrada de luz solar no solo.",
          "Porque elas produzem combustíveis fósseis."
        ],
        correta: 1
      }
    ]
  }
};

// Referências aos elementos da tela
const telaInicial = document.getElementById("tela-inicial");
const telaPergunta = document.getElementById("tela-pergunta");
const telaFeedback = document.getElementById("tela-feedback");

const badgeCiclo = document.getElementById("badge-ciclo");
const perguntaTexto = document.getElementById("pergunta-texto");
const opcoesLista = document.getElementById("opcoes-lista");
const mensagemFeedback = document.getElementById("mensagem-feedback");

let perguntaAtual = null;
let temporizadorRetorno = null;

// 2. SORTEAR E EXIBIR A PERGUNTA
function iniciarPergunta(cicloKey) {
  const ciclo = bancoPerguntas[cicloKey];
  
  // Sorteia aleatoriamente 1 entre as 8 perguntas do ciclo escolhido
  const indiceSorteado = Math.floor(Math.random() * ciclo.perguntas.length);
  perguntaAtual = ciclo.perguntas[indiceSorteado];

  // Configura o visual do cabeçalho da pergunta conforme a cor escolhida
  badgeCiclo.textContent = ciclo.nome;
  badgeCiclo.className = "badge-ciclo " + ciclo.classeCor;
  perguntaTexto.style.borderLeftColor = ciclo.bordaCor;

  // Insere o texto da pergunta
  perguntaTexto.textContent = perguntaAtual.pergunta;

  // Limpa alternativas anteriores e cria os 4 novos botões
  opcoesLista.innerHTML = "";
  const letras = ["A", "B", "C", "D"];

  perguntaAtual.opcoes.forEach((textoOpcao, index) => {
    const botao = document.createElement("button");
    botao.className = "btn-opcao";
    botao.textContent = `${letras[index]}) ${textoOpcao}`;
    botao.onclick = () => verificarResposta(index);
    opcoesLista.appendChild(botao);
  });

  // Alterna as telas
  telaInicial.classList.add("oculto");
  telaFeedback.classList.add("oculto");
  telaPergunta.classList.remove("oculto");
}

// 3. VERIFICAR RESPOSTA E DAR FEEDBACK
function verificarResposta(indiceEscolhido) {
  if (indiceEscolhido === perguntaAtual.correta) {
    exibirFeedback("Parabéns!!!", "texto-verde");
  } else {
    exibirFeedback("Azar +4", "texto-vermelho");
  }
}

// BOTÃO PULAR QUESTÃO
function pularQuestao() {
  exibirFeedback("Pulou Questão +2", "texto-pular");
}

// EXIBIR MENSAGEM E VOLTAR APÓS 2,5 SEGUNDOS
function exibirFeedback(texto, classeEstilo) {
  telaPergunta.classList.add("oculto");
  telaFeedback.classList.remove("oculto");

  mensagemFeedback.textContent = texto;
  mensagemFeedback.className = "mensagem-feedback " + classeEstilo;

  // Limpa qualquer temporizador anterior por segurança
  if (temporizadorRetorno) {
    clearTimeout(temporizadorRetorno);
  }

  // Volta automaticamente para a tela inicial após 2,5 segundos (2500 ms)
  temporizadorRetorno = setTimeout(() => {
    voltarParaInicio();
  }, 2500);
}

function voltarParaInicio() {
  telaFeedback.classList.add("oculto");
  telaPergunta.classList.add("oculto");
  telaInicial.classList.remove("oculto");
  perguntaAtual = null;
}
