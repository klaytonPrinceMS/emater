/* Lote 3 — LP: Linguagem, discurso e textualidade (19 questões inéditas LP282-LP300). Cotas: 8 dialogismo/polifonia/tipos de discurso + 5 texto e discurso (enunciado/enunciação) + 6 metalinguagem (verbetes, dicionário, gramática). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_LP_DISCURSO_3 = [
{
  id: "LP282",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "A fala em discurso direto “A candidata disse: ‘Entregarei os documentos amanhã’.” corresponde, em discurso indireto, a:",
  alternativas: [
    "A candidata disse: “Entregarei os documentos amanhã”.",
    "A candidata disse que entregaria os documentos no dia seguinte.",
    "A candidata disse que “entregarei os documentos amanhã!”.",
    "A candidata disse entregarei os documentos amanhã que."
  ],
  correta: 1,
  porqueCerta: "No indireto, a fala é incorporada à narração: somem dois-pontos e aspas, entra a conjunção “que” e o verbo se transpõe para o futuro do pretérito (“entregaria”), com o ajuste do advérbio (“amanhã” → “no dia seguinte”).",
  porqueErradas: [
    "Mantém a forma do direto (dois-pontos, aspas, 1ª pessoa, “amanhã”); nada foi transposto.",
    null,
    "Mistura as estruturas: mantém aspas, 1ª pessoa e “amanhã” junto com “que”, forma inexistente.",
    "Construção agramatical, sem conjunção nem correlação verbal adequada."
  ],
  fonte: "LP — Tipos de discurso: transposição do direto para o indireto."
},
{
  id: "LP283",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Analise: I. A citação com aspas e indicação de autoria (“Como diz o edital: ‘...’”) é uma marca explícita de dialogismo. II. A paródia de um slogan oficial, invertendo seu sentido com humor, também é dialógica, pois responde ao texto-fonte. III. O uso irônico de um bordão (“como todo mundo sabe, o edital ‘sempre’ é simples...”) incorpora outra voz para confrontá-la. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas I e II.",
    "Apenas II e III.",
    "I, II e III."
  ],
  correta: 3,
  porqueCerta: "As três são formas de diálogo entre discursos: citação (retomada explícita e fiel), paródia (retomada com inversão crítica) e ironia (incorporação de voz alheia para confrontá-la). Todas evidenciam o dialogismo.",
  porqueErradas: [
    "Ignora II e III, que também são dialógicas, embora sem aspas literais.",
    "Exclui III indevidamente: a ironia é um dos mecanismos dialógicos mais cobrados.",
    "Exclui I indevidamente: a citação é o caso mais direto de presença do outro no texto.",
    null
  ],
  fonte: "LP — Dialogismo: citação, paródia e ironia."
},
{
  id: "LP284",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Assinale a alternativa em que há discurso direto:",
  alternativas: [
    "— Saiu o resultado? — perguntou o candidato, ansioso, na porta da escola.",
    "O candidato perguntou se o resultado tinha saído.",
    "O candidato saiu da escola. Será que o resultado tinha saído?",
    "O edital informa que os candidatos devem consultar o resultado no site."
  ],
  correta: 0,
  porqueCerta: "Há fronteira marcada entre narração e fala: travessão, interrogação reproduzida literalmente e verbo dicendi (“perguntou”). É a configuração típica do discurso direto.",
  porqueErradas: [
    null,
    "É discurso indireto: a pergunta foi subordinada ao narrador (“se... tinha saído”).",
    "É indireto livre: o pensamento irrompe sem verbo introdutor nem marcas formais.",
    "É fala reportada de forma sumária pelo narrador, sem reprodução literal da voz citada."
  ],
  fonte: "LP — Tipos de discurso: marcas do discurso direto."
},
{
  id: "LP285",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Sobre os tipos de discurso, assinale a alternativa INCORRETA:",
  alternativas: [
    "No discurso direto, a fala é reproduzida com marcas de fronteira, como dois-pontos, aspas ou travessão e verbo dicendi.",
    "No discurso indireto, a fala é subordinada à narração, com conjunção e ajustes de pessoa, tempo e advérbios.",
    "O discurso indireto livre exige verbo dicendi seguido de “que” e mantém os tempos verbais da fala original sem alteração.",
    "O discurso indireto livre funde a voz do narrador e a do personagem, sem verbo introdutor nem conjunção."
  ],
  correta: 2,
  porqueCerta: "A descrição mistura tudo: verbo dicendi + “que” e ausência de ajustes é o INDIRETO, não o indireto livre. O indireto livre dispensa justamente o verbo introdutor e a conjunção — por isso a alternativa está INCORRETA.",
  porqueErradas: [
    "Definição correta do direto: reprodução marcada e literal da fala.",
    "Definição correta do indireto: subordinação com transposições (pessoa, tempo, dêiticos).",
    null,
    "Definição correta do indireto livre: fusão de vozes sem marcas formais de introdução."
  ],
  fonte: "LP — Tipos de discurso: direto, indireto e indireto livre."
},
{
  id: "LP286",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Analise: I. “O chefe ordenou: ‘Arquivem estes processos hoje’.” — discurso direto. II. “O chefe ordenou que arquivassem aqueles processos naquele dia.” — discurso indireto. III. “Processos parados há semanas. Era preciso arquivá-los logo, pensava, cansado, diante da pilha.” — discurso indireto livre. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I e II.",
    "Apenas I.",
    "Apenas II e III.",
    "I, II e III."
  ],
  correta: 3,
  porqueCerta: "I reproduz a ordem literalmente com marcas formais (direto). II subordina com “que” e transpõe pessoa, demonstrativo e tempo (indireto). III apresenta o pensamento fundido à narração, sem verbo introdutor (indireto livre).",
  porqueErradas: [
    "Exclui III indevidamente: a ausência de verbo dicendi com voz interior é a marca do indireto livre.",
    "Ignora II e III, ambos canônicos.",
    "Exclui I indevidamente: dois-pontos + aspas + imperativo é direto típico.",
    null
  ],
  fonte: "LP — Tipos de discurso: identificação pelos marcadores."
},
{
  id: "LP287",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Uma reportagem sobre a feira do produtor traz a fala do extensionista, o depoimento de dois agricultores e o comentário do repórter, articulados no mesmo texto. Esse procedimento exemplifica a polifonia porque:",
  alternativas: [
    "O texto apresenta erros de concordância que revelam falta de revisão.",
    "O texto reúne várias vozes e perspectivas sociais distintas, compondo um todo organizado.",
    "O texto repete a mesma frase várias vezes para preencher espaço.",
    "O texto usa apenas a voz do repórter, sem citar nenhuma outra fonte."
  ],
  correta: 1,
  porqueCerta: "Polifonia é a presença de múltiplas vozes e pontos de vista em um mesmo texto. A reportagem com depoimentos e narração articulados é o exemplo jornalístico clássico desse fenômeno.",
  porqueErradas: [
    "Erros de revisão nada têm a ver com pluralidade de vozes.",
    null,
    "Repetição mecânica não configura diversidade de vozes.",
    "Descreve texto monofônico (voz única), o oposto da polifonia."
  ],
  fonte: "LP — Polifonia no texto jornalístico."
},
{
  id: "LP288",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Sobre dialogismo e polifonia, assinale a alternativa INCORRETA:",
  alternativas: [
    "O dialogismo pode existir sem diálogo formal: um edital pode responder a dúvidas anteriores dos candidatos sem usar travessão.",
    "O discurso indireto livre é um recurso polifônico, pois deixa a voz do personagem ressoar dentro da narração.",
    "Polifonia significa necessariamente fragmentação e incoerência, pois várias vozes impedem qualquer unidade de sentido.",
    "A citação de um especialista em uma notícia incorpora outra voz ao texto e evidencia o dialogismo."
  ],
  correta: 2,
  porqueCerta: "A alternativa confunde pluralidade com defeito: textos polifônicos (romances, reportagens, charges) podem ser perfeitamente coerentes. A unidade se constrói justamente na articulação das vozes — por isso a afirmativa está INCORRETA.",
  porqueErradas: [
    "Correto: dialogismo é relação de sentidos, não apenas pontuação de diálogo.",
    "Correto: o indireto livre é o exemplo literário clássico de fusão polifônica de vozes.",
    null,
    "Correto: citar a fonte é trazer o outro para dentro do discurso."
  ],
  fonte: "LP — Dialogismo e polifonia: visão geral."
},
{
  id: "LP289",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Analise: I. No discurso indireto, os pronomes e advérbios se ajustam ao ponto de vista do narrador (“eu” vira “ele”, “aqui” vira “ali”). II. No discurso direto, mantêm-se as marcas originais da fala (“eu”, “aqui”, “agora”) dentro das aspas. III. No indireto livre, há fusão: a narração usa 3ª pessoa, mas o vocabulário e as perguntas revelam a voz do personagem. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas I e II.",
    "I, II e III.",
    "Apenas III."
  ],
  correta: 2,
  porqueCerta: "As três descrevem corretamente os mecanismos de cada tipo: transposição dêitica no indireto, manutenção literal no direto e fusão de pessoa narrativa com tom do personagem no indireto livre.",
  porqueErradas: [
    "Ignora II e III, ambas verdadeiras.",
    "Exclui III indevidamente: a fusão de vozes é a marca definidora do indireto livre.",
    null,
    "Ignora I e II, que trazem as regras básicas de transposição."
  ],
  fonte: "LP — Tipos de discurso: dêiticos e pessoa narrativa."
},
{
  id: "LP290",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Na frase “Eu, abaixo-assinado, declaro para os devidos fins que resido neste município”, as marcas “eu”, “neste” e o presente de “declaro” indicam:",
  alternativas: [
    "A ausência total de enunciação, pois o texto é impessoal.",
    "As pegadas da enunciação no enunciado: pessoa, lugar e tempo em que o sujeito assume o dizer.",
    "Um caso de discurso indireto livre, pois não há verbo introdutor.",
    "Um erro de textualidade, pois documentos não podem ter 1ª pessoa."
  ],
  correta: 1,
  porqueCerta: "Enunciação é o ato de dizer; enunciado é o produto. Os dêiticos (“eu”, “neste”, presente) são as marcas que o ato deixa no produto: revelam QUEM diz, DE ONDE e QUANDO assume o dito.",
  porqueErradas: [
    "Há enunciação fortíssima: o sujeito se marca em 1ª pessoa e assume o ato (“declaro”).",
    null,
    "Não há fusão de vozes narrativa/personagem; há declaração formal em 1ª pessoa.",
    "A 1ª pessoa é prevista no gênero declaração; não é defeito textual."
  ],
  fonte: "LP — Texto e discurso: enunciado e enunciação."
},
{
  id: "LP291",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Sobre texto e discurso, enunciado e enunciação, assinale a alternativa INCORRETA:",
  alternativas: [
    "O enunciado é o produto linguístico observável; a enunciação é o ato de produzi-lo, com sujeito, tempo e lugar.",
    "Um mesmo enunciado (“a ata está pronta”) pode gerar efeitos diferentes conforme quem o diz, para quem e em que situação.",
    "Os dêiticos (“eu”, “aqui”, “agora”, “este”) ancoram o enunciado na situação de enunciação.",
    "Enunciado e enunciação são sinônimos perfeitos e dispensam qualquer distinção, pois o contexto nunca altera o sentido."
  ],
  correta: 3,
  porqueCerta: "A alternativa nega a distinção central e o papel do contexto: enunciado (produto) e enunciação (ato/situação) são conceitos diferentes, e o contexto altera os efeitos de sentido — por isso a afirmativa está INCORRETA.",
  porqueErradas: [
    "Definição correta e canônica da dupla enunciado x enunciação.",
    "Correto: a situação de produção modula os efeitos do mesmo material linguístico.",
    "Correto: dêiticos são as marcas da enunciação no enunciado.",
    null
  ],
  fonte: "LP — Texto e discurso: conceitos de base."
},
{
  id: "LP292",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Analise: I. Em “venham aqui agora”, “aqui” e “agora” só se interpretam a partir do lugar e do momento da enunciação. II. Em “isso que você disse ontem me preocupou”, “isso” e “ontem” remetem à situação partilhada entre os interlocutores. III. Sem conhecer a cena enunciativa (quem fala, quando, onde), muitos enunciados ficam incompletos ou ambíguos. Está correto o que se afirma em:",
  alternativas: [
    "I, II e III.",
    "Apenas I e II.",
    "Apenas II e III.",
    "Apenas I."
  ],
  correta: 0,
  porqueCerta: "As três tratam da dêixis: palavras como “aqui”, “agora”, “isso” e “ontem” são vazias fora da cena enunciativa e só ganham referência completa com sujeito, tempo e lugar partilhados.",
  porqueErradas: [
    null,
    "Exclui III indevidamente: a dependência da cena enunciativa é a tese central.",
    "Exclui I indevidamente: “aqui/agora” são os dêiticos espaciais e temporais por excelência.",
    "Ignora II e III, ambas verdadeiras."
  ],
  fonte: "LP — Enunciação: dêiticos de pessoa, tempo e lugar."
},
{
  id: "LP293",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Dois candidatos leem o mesmo aviso no mural: “Os interessados devem comparecer à sala 5 ainda hoje”. Para um deles, “hoje” é dia de prova; para o outro, que leu a foto do aviso dias depois num grupo de mensagens, “hoje” já passou. O exemplo mostra que:",
  alternativas: [
    "O texto dispensa qualquer situação de leitura, pois as palavras bastam por si sós.",
    "Os dicionários são inúteis, pois nenhuma palavra tem sentido estável.",
    "O sentido do enunciado se completa na enunciação e na cena de leitura: tempo, lugar e destinatário participam da interpretação.",
    "Há erro gramatical no aviso, pois “hoje” é palavra proibida em textos oficiais."
  ],
  correta: 2,
  porqueCerta: "O dêitico “hoje” ancora o sentido no momento da produção e da leitura. Mudada a cena (mural no dia x foto dias depois), muda a referência — prova de que enunciado e situação de enunciação/leitura produzem o sentido juntos.",
  porqueErradas: [
    "Contraria o exemplo: as mesmas palavras geraram leituras distintas por causa da situação.",
    "Generalização falsa: o exemplo mostra dependência contextual dos dêiticos, não inutilidade do dicionário.",
    null,
    "“Hoje” é dêitico legítimo; não há erro gramatical nem proibição."
  ],
  fonte: "LP — Enunciação e cena de leitura: efeitos de sentido."
},
{
  id: "LP294",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Sobre texto e discurso, assinale a alternativa INCORRETA:",
  alternativas: [
    "O texto é a materialidade linguística (o dito); o discurso é o texto em funcionamento, ligado a sujeitos e a uma situação histórica.",
    "Dois textos com as mesmas palavras podem constituir discursos diferentes se mudarem os interlocutores e a finalidade.",
    "A noção de discurso inclui as condições de produção: quem fala, de onde fala, para quem e com que intenção.",
    "Texto e discurso são idênticos e toda leitura dispensa considerar autoria, finalidade e contexto."
  ],
  correta: 3,
  porqueCerta: "A alternativa apaga a distinção texto x discurso e nega o papel das condições de produção, que são justamente o que transforma o material linguístico em discurso — por isso está INCORRETA.",
  porqueErradas: [
    "Definição correta e clássica: texto como materialidade, discurso como funcionamento situado.",
    "Correto: mesmos significantes, discursos distintos conforme a cena.",
    "Correto: condições de produção compõem o conceito de discurso.",
    null
  ],
  fonte: "LP — Texto x discurso: condições de produção."
},
{
  id: "LP295",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Há metalinguagem em:",
  alternativas: [
    "“O caminhão da EMATER-MG chegou cedo ao povoado.”",
    "“A reunião de produtores será amanhã, às 14h.”",
    "“O mutirão limpou a nascente no sábado.”",
    "“O verbete registra que ‘nascente’ é o ponto onde a água subterrânea aflora à superfície.”"
  ],
  correta: 3,
  porqueCerta: "O verbete usa a língua para explicar uma unidade da própria língua (“nascente”): o código volta-se para si mesmo. É metalinguagem em estado puro, típica de dicionários.",
  porqueErradas: [
    "Fala do mundo (chegada do caminhão), sem refletir sobre o código: função referencial.",
    "Informa um fato (reunião, horário): foco no referente, não na língua.",
    "Relata ação concreta (mutirão); não há análise de palavra ou regra.",
    null
  ],
  fonte: "LP — Metalinguagem: verbetes de dicionário."
},
{
  id: "LP296",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Uma aula explica: “Em ‘entrega à EMATER-MG’, há crase porque a preposição ‘a’ (exigida por ‘entrega’) se funde com o artigo ‘a’ antes de nome feminino”. Esse trecho é metalinguístico porque:",
  alternativas: [
    "A língua é tomada como objeto de análise: fala-se da língua usando a própria língua.",
    "O professor narra suas emoções com interjeições e 1ª pessoa.",
    "O texto dá uma ordem direta ao receptor com imperativos.",
    "O texto testa o canal de comunicação com perguntas de contato."
  ],
  correta: 0,
  porqueCerta: "Metalinguagem = código falando do código. Explicar a crase (preposição + artigo, regência) com termos gramaticais é analisar a língua por meio da própria língua, como fazem gramáticas e aulas.",
  porqueErradas: [
    null,
    "Descreve a função emotiva (foco no emissor), ausente no trecho explicativo.",
    "Descreve a função conativa (ordem ao receptor), que não ocorre aqui.",
    "Descreve a função fática (teste do canal), sem relação com a explicação gramatical."
  ],
  fonte: "LP — Metalinguagem: a gramática falando da língua."
},
{
  id: "LP297",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Analise: I. O verbete de dicionário (“cisterna: reservatório de água...”) é metalinguístico, pois define palavras com palavras. II. A explicação gramatical (“o pronome ‘se’ indica indeterminação do sujeito em ‘precisa-se de técnicos’”) é metalinguística, pois analisa o funcionamento da língua. III. O poema que reflete sobre o próprio ato de escrever (“este verso interroga o verso”) usa metalinguagem, pois a arte toma a si mesma como tema. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas I e II.",
    "I, II e III.",
    "Apenas III."
  ],
  correta: 2,
  porqueCerta: "As três são manifestações canônicas da metalinguagem: dicionário (léxico explicado pelo léxico), gramática (regra explicada pela língua) e arte autorreflexiva (poesia sobre a poesia).",
  porqueErradas: [
    "Ignora II e III, ambas metalinguísticas.",
    "Exclui III indevidamente: a poesia sobre o fazer poético é exemplo clássico.",
    null,
    "Ignora I e II, os exemplos mais diretos de código falando de si."
  ],
  fonte: "LP — Metalinguagem: dicionário, gramática e arte."
},
{
  id: "LP298",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Sobre metalinguagem, assinale a alternativa INCORRETA:",
  alternativas: [
    "O dicionário é um texto tipicamente metalinguístico: explica signos verbais por meio de outros signos verbais.",
    "Uma gramática que classifica “mas” como conjunção adversativa usa metalinguagem, pois descreve a língua com a língua.",
    "Só há metalinguagem em poemas; verbetes e gramáticas, por serem técnicos, nunca são metalinguísticos.",
    "Um manual que explica o sentido de “deferido” e “indeferido” em um edital usa metalinguagem."
  ],
  correta: 2,
  porqueCerta: "A alternativa restringe falsamente a metalinguagem à poesia e exclui seus casos mais típicos (dicionário e gramática). Verbetes e regras gramaticais são metalinguagem por excelência — por isso a afirmativa está INCORRETA.",
  porqueErradas: [
    "Definição correta do dicionário como texto metalinguístico.",
    "Exemplo correto: classificar e descrever categorias gramaticais é falar do código.",
    null,
    "Correto: explicar vocabulário do edital com a própria língua é procedimento metalinguístico."
  ],
  fonte: "LP — Metalinguagem: identificação e limites."
},
{
  id: "LP299",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Analise: I. Em “o plural de ‘pão’ é ‘pães’”, as aspas marcam o uso metalinguístico: as palavras são citadas como objeto, não usadas para falar do mundo. II. Em “a palavra ‘edital’ vem do latim ‘edictu’”, há metalinguagem etimológica, típica de verbetes. III. Em “‘casa’ é substantivo feminino”, o enunciado classifica um item do código, procedimento gramatical metalinguístico. Está correto o que se afirma em:",
  alternativas: [
    "I, II e III.",
    "Apenas I e III.",
    "Apenas II.",
    "Apenas I e II."
  ],
  correta: 0,
  porqueCerta: "As três mostram a língua citada como objeto: menção (aspas) em vez de uso, informação etimológica de verbete e classificação gramatical. São três faces da mesma operação metalinguística.",
  porqueErradas: [
    null,
    "Exclui II indevidamente: a etimologia do verbete é metalinguagem clássica.",
    "Ignora I e III, ambas corretas.",
    "Exclui III indevidamente: classificar a palavra é analisá-la como item do código."
  ],
  fonte: "LP — Metalinguagem: uso x menção, etimologia e classificação."
},
{
  id: "LP300",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Linguagem, discurso e textualidade",
  enunciado: "Sobre a função metalinguística, assinale a alternativa INCORRETA:",
  alternativas: [
    "Ela predomina quando a mensagem se volta para o próprio código, como em definições e explicações gramaticais.",
    "“Verbo é a palavra que indica ação, estado ou fenômeno” é um enunciado metalinguístico.",
    "Todo texto informativo (como a notícia de um mutirão) é automaticamente metalinguístico, pois informa com palavras.",
    "“Entre ‘mau’ (adjetivo) e ‘mal’ (advérbio) há diferença de classe e de sentido” é análise metalinguística."
  ],
  correta: 2,
  porqueCerta: "Usar palavras para informar sobre o mundo (mutirão) é função referencial, não metalinguagem. Metalinguagem exige o código como OBJETO (definir, classificar, explicar palavras e regras) — por isso a alternativa está INCORRETA.",
  porqueErradas: [
    "Definição correta da função metalinguística (foco no código).",
    "Exemplo correto: definir categoria gramatical com a língua.",
    null,
    "Exemplo correto: distinguir classes e sentidos é falar da língua com a língua."
  ],
  fonte: "LP — Função metalinguística x função referencial."
}
];
