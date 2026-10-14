/* Lote LP — Concordância, regência e crase (LP67–LP86). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_LP_CONCORDANCIA = [
{
  id: "LP67",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase em total acordo com a norma-padrão quanto à concordância verbal:",
  alternativas: [
    "Houve muitos pedidos de isenção indeferidos por falta de documentos.",
    "Haviam muitos candidatos aguardando o resultado na portaria.",
    "Houveram vários recursos contra o gabarito preliminar.",
    "Existia muitos requerimentos sem assinatura no protocolo."
  ],
  correta: 0,
  porqueCerta: "O verbo haver, com sentido de existir, é impessoal e fica no singular: Houve muitos pedidos. O sujeito da oração é inexistente; muitos pedidos é objeto direto.",
  porqueErradas: [
    null,
    "Haver existencial não vai ao plural. O correto seria Havia muitos candidatos.",
    "Mesmo erro: o correto é Houve vários recursos, no singular.",
    "O verbo deve concordar com o sujeito plural: Existiam muitos requerimentos."
  ],
  fonte: "LP — Concordância verbal aplicada ao texto (item 4.11)."
},
{
  id: "LP68",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase em total acordo com a norma-padrão quanto ao verbo fazer indicando tempo decorrido:",
  alternativas: [
    "Fazem três meses que as inscrições foram encerradas.",
    "Faz três meses que as inscrições foram encerradas.",
    "Vão fazer três meses que o edital foi publicado.",
    "Devem fazer dois anos que a última prova foi aplicada."
  ],
  correta: 1,
  porqueCerta: "Fazer indicando tempo decorrido é impessoal e fica no singular: Faz três meses. A impessoalidade se estende aos auxiliares (Vai fazer, Deve fazer).",
  porqueErradas: [
    "Fazer impessoal não vai ao plural. O correto é Faz três meses.",
    null,
    "O auxiliar herda a impessoalidade: o correto é Vai fazer três meses.",
    "O correto é Deve fazer dois anos, no singular."
  ],
  fonte: "LP — Concordância verbal aplicada ao texto (item 4.11)."
},
{
  id: "LP69",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com concordância verbal correta, considerando o sujeito posposto ao verbo:",
  alternativas: [
    "Chegou os fiscais e os candidatos antes das 7h.",
    "Faltou documentos na entrega feita pelo candidato.",
    "Chegaram os fiscais e os candidatos antes das 7h.",
    "Sobrou vagas para o cadastro de reserva."
  ],
  correta: 2,
  porqueCerta: "O sujeito composto posposto (os fiscais e os candidatos) exige o verbo no plural: Chegaram. A ordem invertida não dispensa a concordância.",
  porqueErradas: [
    "Sujeito composto no plural exige verbo no plural: Chegaram os fiscais e os candidatos.",
    "O sujeito é plural (documentos): o correto é Faltaram documentos.",
    null,
    "O sujeito é plural (vagas): o correto é Sobraram vagas."
  ],
  fonte: "LP — Concordância verbal aplicada ao texto (item 4.11)."
},
{
  id: "LP70",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com concordância correta na voz passiva sintética (verbo + se):",
  alternativas: [
    "Aluga-se salas para cursos preparatórios no centro.",
    "Conserta-se computadores no escritório regional.",
    "Vende-se lanches na cantina do local de prova.",
    "Exigem-se documentos autenticados no ato da posse."
  ],
  correta: 3,
  porqueCerta: "Com sujeito plural (documentos autenticados), o verbo da passiva sintética vai ao plural: Exigem-se documentos. A partícula se é apassivadora.",
  porqueErradas: [
    "O sujeito é plural (salas): o correto é Alugam-se salas.",
    "O sujeito é plural (computadores): o correto é Consertam-se computadores.",
    "O sujeito é plural (lanches): o correto é Vendem-se lanches.",
    null
  ],
  fonte: "LP — Concordância verbal aplicada ao texto (item 4.11)."
},
{
  id: "LP71",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase correta quanto à concordância nominal da palavra anexo:",
  alternativas: [
    "Seguem anexas as cópias dos comprovantes de inscrição.",
    "Seguem anexo as cópias dos comprovantes de inscrição.",
    "Seguem em anexo as cópia dos comprovantes de inscrição.",
    "Seguem anexos as cópias dos comprovantes de inscrição."
  ],
  correta: 0,
  porqueCerta: "Adjetivo anexo concorda com o substantivo que acompanha: cópias (feminino plural), logo anexas. Em anexo, como locução adverbial, é que seria invariável.",
  porqueErradas: [
    null,
    "Anexo como adjetivo deve concordar: o correto é anexas as cópias.",
    "Há erro em cópia (deveria ser cópias, plural).",
    "Anexos está no masculino, mas o substantivo cópias é feminino: o correto é anexas."
  ],
  fonte: "LP — Concordância nominal aplicada ao texto (item 4.11)."
},
{
  id: "LP72",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com concordância nominal correta no uso de mesmo e próprio:",
  alternativas: [
    "Elas mesmo conferiram os cartões-resposta.",
    "Elas mesmas conferiram os cartões-resposta.",
    "Ela próprias assinou a ata da reunião.",
    "Eles mesmo protocolaram os recursos."
  ],
  correta: 1,
  porqueCerta: "Mesmo como reforço (Elas mesmas = elas próprias) é adjetivo e varia: elas mesmas. É o uso que a banca cobra contra a forma invariável mesmo.",
  porqueErradas: [
    "Mesmo adjetivo deve concordar: o correto é Elas mesmas.",
    null,
    "O sujeito é singular (Ela): o correto é Ela própria assinou.",
    "O sujeito é plural masculino: o correto é Eles mesmos."
  ],
  fonte: "LP — Concordância nominal aplicada ao texto (item 4.11)."
},
{
  id: "LP73",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase correta quanto à concordância da palavra meio (sentido de um pouco):",
  alternativas: [
    "As candidatas chegaram meias atrasadas ao local.",
    "Eles estavam meios preocupados com o resultado.",
    "Elas estavam meio preocupadas com o resultado.",
    "Os documentos estavam meios rasurados."
  ],
  correta: 2,
  porqueCerta: "Com sentido de um pouco, meio é advérbio e invariável: meio preocupadas. A pegadinha é forçar a concordância (meias, meios), que só vale quando meio é numeral (meia hora, meio dia).",
  porqueErradas: [
    "Meio como advérbio não varia: o correto é meio atrasadas.",
    "O correto é meio preocupados, invariável.",
    null,
    "O correto é meio rasurados, invariável."
  ],
  fonte: "LP — Concordância nominal aplicada ao texto (item 4.11)."
},
{
  id: "LP74",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com concordância nominal correta na expressão é proibido:",
  alternativas: [
    "É proibido a entrada de celulares na sala de prova.",
    "É proibidas a entrada de celulares na sala de prova.",
    "É proibidas entrada de celulares na sala de prova.",
    "É proibida a entrada de celulares na sala de prova."
  ],
  correta: 3,
  porqueCerta: "Com substantivo determinado pelo artigo (a entrada), a expressão concorda: É proibida a entrada. Sem artigo, ficaria invariável (É proibido entrada).",
  porqueErradas: [
    "Com artigo definido (a entrada), o particípio deve concordar: É proibida.",
    "O sujeito é singular (a entrada): o correto é É proibida, no singular.",
    "Sem artigo o correto seria É proibido entrada; com o sentido usado aqui, falta o artigo e a concordância.",
    null
  ],
  fonte: "LP — Concordância nominal aplicada ao texto (item 4.11)."
},
{
  id: "LP75",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com regência correta do verbo assistir (presenciar):",
  alternativas: [
    "O fiscal assistiu à distribuição das provas sem intervir.",
    "O fiscal assistiu a distribuição das provas sem intervir.",
    "O fiscal assistiu as provas durante a aplicação.",
    "O fiscal assistiu para a distribuição das provas."
  ],
  correta: 0,
  porqueCerta: "Assistir no sentido de presenciar é transitivo indireto e exige a preposição a: assistiu a + a distribuição = assistiu à distribuição (crase).",
  porqueErradas: [
    null,
    "Falta a crase exigida pela regência (assistir a) + artigo (a distribuição): o correto é assistiu à.",
    "Sem a preposição a, a regência está errada: o correto é assistiu às provas.",
    "O verbo não rege a preposição para nesse sentido."
  ],
  fonte: "LP — Regência verbal aplicada ao texto (item 4.12)."
},
{
  id: "LP76",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com regência correta do verbo preferir:",
  alternativas: [
    "O candidato prefere mais o cargo de assistente do que o de técnico.",
    "O candidato prefere o cargo de assistente ao de técnico.",
    "O candidato prefere antes o cargo de assistente que o de técnico.",
    "O candidato prefere o cargo de assistente do que o de técnico."
  ],
  correta: 1,
  porqueCerta: "Preferir já contém a ideia de superioridade: é transitivo direto e indireto (preferir algo a outra coisa), sem mais, antes nem do que. Fórmula: prefere X a Y.",
  porqueErradas: [
    "Pleonasmo: preferir já significa querer mais; o mais é indevido, e do que também.",
    null,
    "O reforço antes é pleonástico e a correlação correta é com a, não que.",
    "Preferir não admite do que; o correto é ao de técnico."
  ],
  fonte: "LP — Regência verbal aplicada ao texto (item 4.12)."
},
{
  id: "LP77",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com regência correta do verbo aspirar (almejar):",
  alternativas: [
    "O candidato aspira o cargo de assistente administrativo.",
    "O candidato aspira pelo cargo de assistente administrativo.",
    "O candidato aspira ao cargo de assistente administrativo.",
    "O candidato aspira no cargo de assistente administrativo."
  ],
  correta: 2,
  porqueCerta: "Aspirar com sentido de almejar é transitivo indireto e exige a preposição a: aspira ao cargo. Sem preposição, aspirar significa sorver o ar.",
  porqueErradas: [
    "Sem preposição, o sentido seria sorver; para almejar, o correto é aspira ao cargo.",
    "O verbo não rege por nesse sentido.",
    null,
    "O verbo não rege em nesse sentido."
  ],
  fonte: "LP — Regência verbal aplicada ao texto (item 4.12)."
},
{
  id: "LP78",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com regência correta do verbo chegar, pela norma-padrão:",
  alternativas: [
    "Os candidatos chegaram o local antes do fechamento.",
    "Os candidatos chegaram no local antes do fechamento.",
    "Os candidatos chegaram em Belo Horizonte no dia da prova.",
    "Os candidatos chegaram ao local antes do fechamento dos portões."
  ],
  correta: 3,
  porqueCerta: "Chegar é transitivo indireto e rege a preposição a: chegar a + o local = ao local. A norma-padrão rejeita chegar em/no nesse uso.",
  porqueErradas: [
    "Falta a preposição exigida: o correto é chegaram ao local.",
    "Na norma-padrão, o correto é chegaram ao local, não no local.",
    "O correto é chegaram a Belo Horizonte.",
    null
  ],
  fonte: "LP — Regência verbal aplicada ao texto (item 4.12)."
},
{
  id: "LP79",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com regência correta do verbo obedecer:",
  alternativas: [
    "Os candidatos obedeceram às instruções dos fiscais.",
    "Os candidatos obedeceram as instruções dos fiscais.",
    "Os candidatos obedeceram para as instruções dos fiscais.",
    "Os candidatos obedeceram com as instruções dos fiscais."
  ],
  correta: 0,
  porqueCerta: "Obedecer é transitivo indireto e exige a preposição a: obedecer a + as instruções = obedecer às (crase).",
  porqueErradas: [
    null,
    "Falta a preposição e a crase: o correto é obedeceram às instruções.",
    "O verbo não rege a preposição para.",
    "O verbo não rege a preposição com."
  ],
  fonte: "LP — Regência verbal e uso da crase (itens 4.12 e 4.13)."
},
{
  id: "LP80",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com regência nominal correta:",
  alternativas: [
    "O acesso dos candidatos na sala foi liberado às 7h.",
    "O acesso dos candidatos à sala foi liberado às 7h.",
    "O acesso dos candidatos com a sala foi liberado às 7h.",
    "O acesso dos candidatos sobre a sala foi liberado às 7h."
  ],
  correta: 1,
  porqueCerta: "O substantivo acesso rege a preposição a: acesso a + a sala = acesso à sala (crase). É a regência nominal que a Fundep mais repete.",
  porqueErradas: [
    "Acesso rege a, não em: o correto é acesso à sala.",
    null,
    "Acesso não rege com.",
    "Acesso não rege sobre."
  ],
  fonte: "LP — Regência nominal aplicada ao texto (item 4.12)."
},
{
  id: "LP81",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase em que o uso da crase na indicação de horas está correto:",
  alternativas: [
    "A prova começará as 8h e terminará as 12h.",
    "A prova começará à 8h e terminará às 12h.",
    "A prova começará às 8h e terminará às 12h.",
    "A prova começará à 8hs e terminará à 12hs."
  ],
  correta: 2,
  porqueCerta: "Antes de hora determinada há crase (a + as): às 8h, às 12h. Oito e doze são plural, exigindo o artigo plural as.",
  porqueErradas: [
    "Falta a crase antes de hora determinada: o correto é às 8h e às 12h.",
    "8h equivale a oito horas (plural): o correto é às 8h, não à.",
    null,
    "Não existe 8hs; o símbolo de hora é invariável (8h), e a crase no singular está errada."
  ],
  fonte: "LP — Uso da crase (item 4.13)."
},
{
  id: "LP82",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a alternativa em que o uso (ou a ausência) da crase está correto:",
  alternativas: [
    "As inscrições estarão abertas à partir de segunda-feira.",
    "O atendimento será de segunda à sábado, sem intervalo.",
    "O edital foi publicado à meio-dia no site da banca.",
    "O atendimento será de segunda a sábado, a partir das 9h."
  ],
  correta: 3,
  porqueCerta: "Não há crase antes de palavra masculina (a sábado), nem antes de verbo (a partir): de segunda a sábado, a partir das 9h. É o gabarito por ausência correta de crase.",
  porqueErradas: [
    "Antes de verbo não há crase: o correto é a partir.",
    "Sábado é palavra masculina e não admite artigo a: o correto é a sábado.",
    "Meio-dia é masculino: o correto é a meio-dia, sem crase.",
    null
  ],
  fonte: "LP — Uso da crase (item 4.13)."
},
{
  id: "LP83",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase em que o uso da crase está correto:",
  alternativas: [
    "O ofício faz referência à Lei nº 14.133, de 2021.",
    "O ofício faz referência a Lei nº 14.133, de 2021.",
    "O ofício faz referência à leis federais de licitação.",
    "O ofício faz referência à partir da lei nova."
  ],
  correta: 0,
  porqueCerta: "Referência a + a Lei (substantivo feminino determinado) = referência à Lei. Há preposição exigida pelo substantivo e artigo definido antes de lei específica.",
  porqueErradas: [
    null,
    "Falta a crase: referência a + a Lei = à Lei.",
    "Antes de palavra plural sem artigo (leis) não há crase: o correto é a leis.",
    "Antes de verbo (partir) não há crase: o correto é a partir."
  ],
  fonte: "LP — Regência nominal e uso da crase (itens 4.12 e 4.13)."
},
{
  id: "LP84",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase em que a ausência da crase está correta:",
  alternativas: [
    "A comissão passou à revisar os editais publicados.",
    "A comissão passou a revisar os editais a partir das 14h.",
    "A comissão entregou o relatório à ela ontem à tarde.",
    "A comissão encaminhou o ofício à um diretor regional."
  ],
  correta: 1,
  porqueCerta: "Não há crase antes de verbo: passou a revisar; nem em a partir (verbo partir). As duas ausências estão corretas na alternativa.",
  porqueErradas: [
    "Antes de verbo não há crase: o correto é passou a revisar.",
    null,
    "Antes de pronome pessoal (ela) não há crase: o correto é a ela.",
    "Antes de artigo indefinido (um) não há crase: o correto é a um diretor."
  ],
  fonte: "LP — Uso da crase (item 4.13)."
},
{
  id: "LP85",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com colocação pronominal correta, pela norma-padrão:",
  alternativas: [
    "Se inscreveram centenas de candidatos no concurso.",
    "Me entregaram o comprovante na portaria do prédio.",
    "Não se inscreveram todos os candidatos no primeiro dia.",
    "Recorreram-se ao edital para tirar as dúvidas."
  ],
  correta: 2,
  porqueCerta: "A palavra negativa (não) atrai o pronome: próclise obrigatória (Não se inscreveram). É o caso clássico de próclise por palavra atrativa.",
  porqueErradas: [
    "Não se inicia frase com pronome átono: o correto é Inscreveram-se centenas.",
    "Não se inicia frase com pronome átono: o correto é Entregaram-me o comprovante.",
    null,
    "O verbo recorrer, nesse sentido, não é pronominal: o correto é Recorreram ao edital."
  ],
  fonte: "LP — Colocação pronominal aplicada ao texto (item 4.14)."
},
{
  id: "LP86",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com colocação pronominal correta no futuro, pela norma-padrão:",
  alternativas: [
    "Me classificarei entre os primeiros, se mantiver o ritmo.",
    "Classifico-me-ei entre os primeiros com esse ritmo.",
    "Se classificará os candidatos por ordem de nota.",
    "Classificar-me-ei entre os primeiros colocados."
  ],
  correta: 3,
  porqueCerta: "Sem palavra atrativa, o futuro do presente exige mesóclise: Classificar-me-ei. É a regra que a banca cobra para diferenciar o registro formal do coloquial.",
  porqueErradas: [
    "Sem atrativo, o futuro rejeita a próclise na norma-padrão: o correto é Classificar-me-ei.",
    "Mesóclise só ocorre no futuro do presente ou do pretérito: com o presente, o correto é Classifico-me.",
    "Não se inicia frase com pronome átono, e o futuro exige mesóclise: Classificar-se-ão.",
    null
  ],
  fonte: "LP — Colocação pronominal aplicada ao texto (item 4.14)."
}
];
