const QUESTIONS = [
// ============ LÍNGUA PORTUGUESA ============
{
  id: "LP01",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Leitura e interpretação de texto",
  enunciado: "Leia o texto: “A EMATER-MG atua em todo o território mineiro, levando assistência técnica e extensão rural sobretudo à agricultura familiar.” É correto afirmar que, segundo o texto:",
  alternativas: [
    "A atuação da EMATER-MG é restrita à capital mineira.",
    "A agricultura familiar é um dos públicos prioritários da atuação da EMATER-MG em todo o estado.",
    "A EMATER-MG atua apenas na agricultura empresarial de grande porte.",
    "O texto afirma que a EMATER-MG não atua fora de Minas Gerais nem dentro dela."
  ],
  correta: 1,
  porqueCerta: "O texto diz explicitamente “em todo o território mineiro” (abrangência estadual) e “sobretudo à agricultura familiar” (público prioritário, sem excluir outros). A alternativa B é a única que preserva esses dois sentidos.",
  porqueErradas: [
    "Contradiz “todo o território mineiro”. Restringir à capital é o oposto do que está explícito.",
    null,
    "Contradiz “agricultura familiar”. Troca o público citado por outro não mencionado.",
    "Frase autocontraditória e contrária ao texto, que afirma atuação dentro de Minas (“todo o território mineiro”)."
  ],
  fonte: "Conteúdo: Leitura e interpretação de textos; informações explícitas e implícitas."
},
{
  id: "LP02",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Coesão, operadores argumentativos e pontuação",
  enunciado: "Assinale a alternativa em que o conectivo estabelece relação de conclusão:",
  alternativas: [
    "O candidato estudou o edital, mas não fez a inscrição.",
    "O edital foi publicado; portanto, os prazos já estão valendo.",
    "Como choveu, a equipe adiou a visita técnica.",
    "Embora o conteúdo seja extenso, a revisão é possível."
  ],
  correta: 1,
  porqueCerta: "“Portanto” é operador conclusivo clássico: introduz a consequência/conclusão do que foi afirmado antes. É o padrão que a Fundep cobra em coesão e operadores argumentativos.",
  porqueErradas: [
    "“Mas” marca oposição/ressalva, não conclusão.",
    null,
    "“Como” (nesse uso) marca causa/explicação, não conclusão.",
    "“Embora” marca concessão, não conclusão."
  ],
  fonte: "Conteúdo: Coesão e coerência; operadores argumentativos."
},
{
  id: "LP03",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase em total acordo com a norma-padrão quanto à concordância verbal:",
  alternativas: [
    "Haviam muitos candidatos na sala de prova.",
    "Houve muitos recursos indeferidos por falta de fundamentação.",
    "Fazem dois anos que o concurso foi homologado.",
    "Existe candidatos aprovados em várias cidades."
  ],
  correta: 1,
  porqueCerta: "“Haver” no sentido de “existir” é impessoal: fica no singular (“houve”). “Recursos” é objeto direto, não sujeito. Construção correta e muito cobrada.",
  porqueErradas: [
    "“Haver” existencial não vai ao plural. O correto seria “Havia muitos candidatos”.",
    null,
    "“Fazer” indicando tempo decorrido é impessoal: o correto é “Faz dois anos”.",
    "O verbo deve concordar com “candidatos” (plural): “Existem candidatos”. "
  ],
  fonte: "Conteúdo: Concordância verbal aplicada ao texto."
},
{
  id: "LP04",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a alternativa em que o uso da crase está correto:",
  alternativas: [
    "O candidato chegou à tempo para a prova.",
    "A inscrição será feita à partir das 9 horas.",
    "O atendimento ocorrerá das 9h às 11h30.",
    "Entregou o documento à um fiscal da sala."
  ],
  correta: 2,
  porqueCerta: "Há locução com substantivo feminino determinado (“as 11h30”) e fusão de preposição + artigo: “das 9h às 11h30”. Modelo clássico de questão Fundep sobre crase.",
  porqueErradas: [
    "“A tempo” (masculino) não recebe crase; o correto é “a tempo”.",
    "Antes de verbo (“partir”) não há crase: “a partir”.",
    null,
    "Antes de artigo indefinido (“um”) não há crase: “a um fiscal”."
  ],
  fonte: "Conteúdo: Uso da crase."
},
{
  id: "LP05",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Coesão, operadores argumentativos e pontuação",
  enunciado: "Em “Os candidatos, que entregaram a documentação no prazo, foram convocados”, as vírgulas indicam que:",
  alternativas: [
    "Apenas os candidatos que entregaram a documentação foram convocados (sentido restritivo).",
    "Todos os candidatos entregaram a documentação e todos foram convocados (oração explicativa).",
    "Nenhum candidato entregou a documentação.",
    "As vírgulas estão obrigatoriamente erradas."
  ],
  correta: 1,
  porqueCerta: "Oração adjetiva entre vírgulas tem valor explicativo: refere-se à totalidade (“todos entregaram e todos foram convocados”). Sem vírgulas, o sentido seria restritivo. Distinção clássica de prova.",
  porqueErradas: [
    "Esse seria o sentido SEM vírgulas (restritiva). Com vírgulas, o sentido é o oposto.",
    null,
    "Contradiz a frase, que afirma entrega e convocação.",
    "As vírgulas estão corretas e mudam o sentido — são o ponto da questão."
  ],
  fonte: "Conteúdo: Sinais de pontuação como mecanismos de coesão e produção de sentidos."
},
{
  id: "LP06",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Semântica e classes de palavras no texto",
  enunciado: "Em “O edital é a bússola do candidato”, a palavra “bússola” está empregada em sentido:",
  alternativas: [
    "Denotativo, pois refere-se ao instrumento de navegação.",
    "Conotativo, pois expressa a ideia de orientação/guia de forma figurada.",
    "Homônimo, pois confunde-se com outro vocábulo.",
    "Arcaico, pois caiu em desuso."
  ],
  correta: 1,
  porqueCerta: "Há metáfora: o edital “orienta” como uma bússola. É sentido figurado (conotação), não o instrumento literal.",
  porqueErradas: [
    "Denotação seria o sentido literal do instrumento. Aqui o uso é figurado.",
    null,
    "Homonímia é igualdade de forma entre vocábulos distintos — não é o caso.",
    "“Bússola” é palavra corrente, não arcaísmo."
  ],
  fonte: "Conteúdo: Denotação e conotação; sentido próprio e figurado."
},

// ============ MATEMÁTICA E RACIOCÍNIO LÓGICO ============
{
  id: "MAT01",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Em um concurso, 1.200 candidatos se inscreveram para Assistente Administrativo II e 15% deles não compareceram à prova. Quantos compareceram?",
  alternativas: ["180", "900", "1.020", "1.035"],
  correta: 2,
  porqueCerta: "15% de 1.200 = 0,15 × 1.200 = 180 ausentes. Compareceram: 1.200 − 180 = 1.020.",
  porqueErradas: [
    "180 é o número de AUSENTES, não de presentes. Pegadinha típica: parar no meio do cálculo.",
    "900 corresponderia a 25% de ausência, não 15%.",
    null,
    "1.035 não corresponde a nenhum passo do cálculo (seria ~13,75% de ausência)."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT02",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Uma equipe de 4 servidores organiza 200 pastas em 5 dias. Mantido o ritmo, quantos dias 5 servidores levariam para organizar as mesmas 200 pastas?",
  alternativas: ["6 dias", "4 dias", "3 dias", "6,25 dias"],
  correta: 1,
  porqueCerta: "Servidores e dias são inversamente proporcionais: 4 × 5 = 5 × x → x = 20/5 = 4 dias. Mais gente, menos tempo.",
  porqueErradas: [
    "6 dias seria aplicar proporção direta (erro clássico: ignorar a inversão).",
    null,
    "3 dias não resulta de nenhum cálculo proporcional correto.",
    "6,25 dias seria multiplicar em vez de dividir (4×5×5/16 — sem sentido no problema)."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT03",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um valor de R$ 2.000,00 aplicado a juros simples de 2% ao mês rende, após 6 meses, juros de:",
  alternativas: ["R$ 40,00", "R$ 120,00", "R$ 240,00", "R$ 2.240,00"],
  correta: 2,
  porqueCerta: "J = C·i·t = 2.000 × 0,02 × 6 = 2.000 × 0,12 = R$ 240,00.",
  porqueErradas: [
    "R$ 40,00 é o juro de apenas 1 mês (2.000 × 0,02). Faltou multiplicar pelo tempo.",
    "R$ 120,00 seria 1% ao mês ou 3 meses — metade do correto.",
    null,
    "R$ 2.240,00 é o MONTANTE (capital + juros), não os juros. Pegadinha típica."
  ],
  fonte: "Conteúdo: Juros simples."
},
{
  id: "MAT04",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma urna há 5 canetas azuis e 3 pretas, indistinguíveis ao tato. Retirando-se uma ao acaso, a probabilidade de sair azul é:",
  alternativas: ["3/8", "5/8", "5/3", "1/2"],
  correta: 1,
  porqueCerta: "Casos favoráveis/total: 5/(5+3) = 5/8.",
  porqueErradas: [
    "3/8 é a probabilidade de sair PRETA. Inversão favorável/total.",
    null,
    "5/3 é maior que 1 — impossível como probabilidade, e inverte a fração.",
    "1/2 valeria se houvesse quantidades iguais."
  ],
  fonte: "Conteúdo: Probabilidade simples."
},
{
  id: "MAT05",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Lógica proposicional",
  enunciado: "A negação lógica da proposição “Todos os candidatos entregaram a documentação” é:",
  alternativas: [
    "Nenhum candidato entregou a documentação.",
    "Pelo menos um candidato não entregou a documentação.",
    "Todos os candidatos não entregaram a documentação.",
    "Apenas um candidato entregou a documentação."
  ],
  correta: 1,
  porqueCerta: "Negar o quantificador universal (“todos”) exige o existencial: basta UM contraexemplo (“existe ao menos um que não entregou”).",
  porqueErradas: [
    "“Nenhum entregou” é mais forte que a negação — a negação admite que alguns entregaram.",
    null,
    "Equivale a “nenhum entregou”; mesmo erro da alternativa A.",
    "“Apenas um entregou” é um caso particular, não a negação geral (que inclui 0, 1, vários, mas não todos)."
  ],
  fonte: "Conteúdo: Proposições; negações e equivalências."
},
{
  id: "MAT06",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um candidato obteve nas 4 partes da prova os pontos: 7, 6, 8 e 7. Sua média é:",
  alternativas: ["6,5", "7,0", "7,5", "28,0"],
  correta: 1,
  porqueCerta: "(7+6+8+7)/4 = 28/4 = 7,0.",
  porqueErradas: [
    "6,5 seria a média se a soma fosse 26, não 28.",
    null,
    "7,5 seria a média se a soma fosse 30.",
    "28 é a SOMA, não a média. Faltou dividir por 4."
  ],
  fonte: "Conteúdo: Média, moda e mediana."
},

// ============ CONHECIMENTOS GERAIS ============
{
  id: "CG01",
  disciplina: "CG",
  disciplinaNome: "Conhecimentos Gerais",
  tema: "EMATER-MG: história, natureza e atuação",
  enunciado: "Sobre a EMATER-MG, é correto afirmar:",
  alternativas: [
    "É empresa pública vinculada à Secretaria de Estado de Agricultura, Pecuária e Abastecimento de Minas Gerais, com atuação na assistência técnica e extensão rural.",
    "É um órgão do Poder Judiciário mineiro, voltado a atividades jurisdicionais.",
    "É uma instituição federal sem atuação em Minas Gerais.",
    "É uma empresa privada sem vínculo com a administração pública."
  ],
  correta: 0,
  porqueCerta: "Conforme o conteúdo programático e o edital (Lei Estadual 6.704/1975): empresa pública estadual, vinculada à SEAPA-MG, voltada à ATER, com atuação em todo o território mineiro e foco na agricultura familiar.",
  porqueErradas: [
    null,
    "Confunde com o TJMG. A EMATER é do Executivo (área agrícola), não do Judiciário.",
    "É estadual (Minas Gerais), não federal, e atua justamente em MG.",
    "É empresa pública (administração indireta), não empresa privada."
  ],
  fonte: "Conteúdo: A EMATER-MG — histórico, natureza jurídica, vinculação e área de atuação."
},
{
  id: "CG02",
  disciplina: "CG",
  disciplinaNome: "Conhecimentos Gerais",
  tema: "Princípios da Administração e ética no serviço público",
  enunciado: "São princípios constitucionais expressos da Administração Pública (art. 37, caput, da CF/1988):",
  alternativas: [
    "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
    "Paternalismo, sigilo, privilégio, lentidão e informalidade.",
    "Lucro, competitividade, marketing e expansão.",
    "Tradição, costume, hierarquia familiar e oralidade."
  ],
  correta: 0,
  porqueCerta: "É a literalidade do art. 37, caput (mnemônico LIMPE). A Fundep costuma cobrar a letra da lei nesse ponto.",
  porqueErradas: [
    null,
    "Lista vícios, opostos aos princípios constitucionais.",
    "Princípios de empresa privada, não da Administração Pública.",
    "Critérios sociológicos, sem previsão no art. 37."
  ],
  fonte: "Conteúdo: Ética no serviço público; princípios constitucionais."
},
{
  id: "CG03",
  disciplina: "CG",
  disciplinaNome: "Conhecimentos Gerais",
  tema: "Transparência, acesso à informação e LGPD",
  enunciado: "Sobre transparência e proteção de dados na administração pública, assinale a correta:",
  alternativas: [
    "A Lei de Acesso à Informação veda qualquer divulgação de atos públicos.",
    "A LGPD (Lei 13.709/2018) estabelece regras para o tratamento de dados pessoais, inclusive pelo poder público, que deve proteger os dados dos titulares.",
    "Dados pessoais de cidadãos podem ser divulgados livremente pelo servidor, sem regras.",
    "Transparência pública dispensa qualquer proteção a dados pessoais."
  ],
  correta: 1,
  porqueCerta: "A LGPD aplica-se ao poder público: tratamento de dados deve observar finalidade, necessidade, segurança e direitos do titular. Transparência e privacidade convivem — dados pessoais têm proteção.",
  porqueErradas: [
    "A LAI (12.527/2011) determina a publicidade como regra e o sigilo como exceção, não o contrário.",
    null,
    "A divulgação livre viola a LGPD e pode gerar responsabilização.",
    "O correto é o equilíbrio: transparência ativa/passiva + proteção de dados pessoais."
  ],
  fonte: "Conteúdo: Transparência, acesso à informação e LGPD."
},
{
  id: "CG04",
  disciplina: "CG",
  disciplinaNome: "Conhecimentos Gerais",
  tema: "Minas Gerais: território e meio rural",
  enunciado: "Sobre o território mineiro, é correto afirmar:",
  alternativas: [
    "Minas Gerais é o maior estado do Brasil em área territorial.",
    "Minas Gerais possui grande extensão territorial e diversidade regional, com o meio rural e a agropecuária tendo papel socioeconômico relevante.",
    "Minas Gerais não possui área rural nem atividade agropecuária.",
    "Minas Gerais é banhado pelo mar e sua economia é exclusivamente pesqueira."
  ],
  correta: 1,
  porqueCerta: "MG é um estado de grande extensão e diversidade regional; o meio rural/agropecuária é central para a economia e para a missão da EMATER-MG. As demais alternativas trazem erros factuais grosseiros — estilo típico de questão de Conhecimentos Gerais.",
  porqueErradas: [
    "O maior estado é o Amazonas. MG é grande, mas não o maior.",
    null,
    "Nega a realidade do rural mineiro, base da atuação da EMATER-MG.",
    "MG não tem litoral; a economia é diversificada (agropecuária, indústria, serviços)."
  ],
  fonte: "Conteúdo: Aspectos físicos, regionais e socioeconômicos de MG."
},
{
  id: "CG05",
  disciplina: "CG",
  disciplinaNome: "Conhecimentos Gerais",
  tema: "Princípios da Administração e ética no serviço público",
  enunciado: "Noções de integridade no serviço público incluem:",
  alternativas: [
    "A admissão de parentes por favoritismo, mesmo sem qualificação.",
    "A vedação ao nepotismo e a prevenção de conflitos de interesses.",
    "O uso de recursos públicos para fins particulares.",
    "A dispensa de observância do Código de Conduta."
  ],
  correta: 1,
  porqueCerta: "O Código de Conduta e o Plano de Integridade da EMATER-MG (e o Decreto 46.644/2014) vedam nepotismo e exigem prevenção de conflito de interesses.",
  porqueErradas: [
    "É exatamente o nepotismo, prática vedada.",
    null,
    "Configura desvio de finalidade/improbidade, oposto à integridade.",
    "O Código de Conduta é de observância obrigatória, não facultativa."
  ],
  fonte: "Conteúdo: Código de Conduta e Integridade; nepotismo e conflito de interesses."
},

// ============ CONHECIMENTOS ESPECÍFICOS ============
{
  id: "CE01",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "RH, departamento de pessoal e SISPATRI",
  enunciado: "Sobre rotinas de departamento de pessoal, assinale a correta:",
  alternativas: [
    "O controle de frequência (ponto) é irrelevante para a gestão de pessoas.",
    "O controle de ponto, o banco de horas e o monitoramento do absenteísmo são instrumentos de gestão de frequência e apoio ao planejamento de pessoal.",
    "Férias e licenças não precisam de nenhum controle.",
    "Recrutamento e seleção dispensam qualquer registro."
  ],
  correta: 1,
  porqueCerta: "Frequência, banco de horas e absenteísmo medem presença/ausência e subsidiam decisões (dimensionamento, horas extras, cobertura). É conteúdo expresso do programa do cargo.",
  porqueErradas: [
    "O ponto é base para pagamento, horas extras e disciplina — é central, não irrelevante.",
    null,
    "Férias e licença-prêmio exigem controle rigoroso de aquisição, gozo e pagamento.",
    "Recrutamento, seleção, admissão e demissão exigem registros e documentos formais."
  ],
  fonte: "Conteúdo específico: RH e departamento de pessoal; ponto, banco de horas, absenteísmo."
},
{
  id: "CE02",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Licitações (Lei 14.133) e convênios (Lei 13.019)",
  enunciado: "Segundo a Lei nº 14.133/2021, o processo licitatório, em regra, deve:",
  alternativas: [
    "Observar a publicidade e o planejamento, com definição do objeto e das condições da contratação.",
    "Ser sempre sigiloso, sem divulgação de edital.",
    "Dispensar qualquer fase preparatória.",
    "Vedação total a qualquer contratação direta, sem exceção legal."
  ],
  correta: 0,
  porqueCerta: "A Lei 14.133/2021 estrutura a contratação em fase preparatória (planejamento, termo de referência, estudo técnico) e exige publicidade/transparência. Contratação direta existe, mas só nas hipóteses legais (dispensa/inexigibilidade).",
  porqueErradas: [
    null,
    "A publicidade é princípio da licitação; o sigilo absoluto viola a lei.",
    "A fase preparatória é obrigatória e central na Nova Lei de Licitações.",
    "A lei prevê dispensa e inexigibilidade em hipóteses taxativas — não há vedação absoluta."
  ],
  fonte: "Conteúdo específico: Compras, contratos e licitações — Lei 14.133/2021."
},
{
  id: "CE03",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Licitações (Lei 14.133) e convênios (Lei 13.019)",
  enunciado: "A Lei nº 13.019/2014 trata:",
  alternativas: [
    "Do regime jurídico das parcerias entre a administração pública e as organizações da sociedade civil (termos de colaboração, fomento e acordos de cooperação).",
    "Apenas de crimes eleitorais.",
    "Exclusivamente do Código de Trânsito.",
    "Da CLT e das relações trabalhistas privadas."
  ],
  correta: 0,
  porqueCerta: "É o Marco Regulatório das Organizações da Sociedade Civil (MROSC), expressamente listado no conteúdo do cargo.",
  porqueErradas: [
    null,
    "Crimes eleitorais são matéria do Código Eleitoral/legislação eleitoral, não da Lei 13.019.",
    "Trânsito é o CTB (Lei 9.503/1997).",
    "Relações trabalhistas celetistas têm lei própria; a 13.019 é sobre parcerias com OSCs."
  ],
  fonte: "Conteúdo específico: Convênios na administração pública — Lei 13.019/2014."
},
{
  id: "CE04",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre gestão de estoques e almoxarifado, é correto afirmar:",
  alternativas: [
    "O giro de estoques mede quantas vezes o estoque se renova em um período; níveis máximo/mínimo e ponto de pedido evitam falta e excesso.",
    "Estoque parado, sem controle, é sempre a melhor estratégia.",
    "Inventário e controle patrimonial são desnecessários.",
    "Previsão de consumo e classificação de materiais não influenciam a gestão."
  ],
  correta: 0,
  porqueCerta: "Giro, níveis de estoque, ponto de pedido, inventário e classificação são os instrumentos básicos da gestão de materiais cobrados no programa.",
  porqueErradas: [
    null,
    "Estoque sem controle gera falta (paralisa o serviço) ou excesso (capital parado e desperdício).",
    "Inventário e patrimônio são controles obrigatórios e auditáveis.",
    "Previsão e classificação orientam quanto e quando comprar — são o coração do planejamento."
  ],
  fonte: "Conteúdo específico: Gestão e controle de estoques; giro, níveis, inventário."
},
{
  id: "CE05",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Na gestão de veículos e frotas, são práticas adequadas:",
  alternativas: [
    "Planejamento de rotas, controle de abastecimento e manutenção preventiva dos veículos.",
    "Circular sem habilitação e sem registro de uso do veículo.",
    "Ignorar sinalização e dispensar controle de quilometragem.",
    "Abastecer sem registro e nunca revisar o veículo."
  ],
  correta: 0,
  porqueCerta: "Rotas, abastecimento, manutenção preventiva e observância das normas de circulação/segurança são o conteúdo cobrado (inclusive Manual SIAD-MG e cartilhas de gestão de frotas).",
  porqueErradas: [
    null,
    "Conduzir sem CNH e sem registro viola a lei e inviabiliza qualquer controle.",
    "Sinalização e quilometragem são controles básicos de segurança e custo.",
    "Sem registro e sem revisão há desperdício, fraude e risco de acidentes."
  ],
  fonte: "Conteúdo específico: Logística; gestão de veículos e frotas."
},
{
  id: "CE06",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Administração geral e administração pública",
  enunciado: "Sobre a administração pública direta e indireta, assinale a correta:",
  alternativas: [
    "A EMATER-MG, como empresa pública, integra a administração indireta.",
    "Empresa pública integra a administração direta, como um ministério.",
    "Descentralização e desconcentração são conceitos idênticos e sem distinção.",
    "Órgãos públicos possuem personalidade jurídica própria."
  ],
  correta: 0,
  porqueCerta: "Empresas públicas (como a EMATER-MG, Lei 6.704/1975) são entidades da administração INDIRETA, com personalidade jurídica própria. Órgãos (ex.: uma secretaria) integram a direta e NÃO têm personalidade própria.",
  porqueErradas: [
    null,
    "Ministérios/secretarias são direta; empresas públicas, autarquias, fundações e sociedades de economia mista são indireta.",
    "Desconcentração é dentro da mesma pessoa jurídica; descentralização cria/outorga a outra pessoa jurídica. Distinção clássica.",
    "É o inverso: ENTIDADES têm personalidade; ÓRGÃOS não têm."
  ],
  fonte: "Conteúdo específico: Administração pública direta e indireta; descentralização."
},
{
  id: "CE07",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Redação oficial, arquivos e finanças",
  enunciado: "Sobre redação oficial e documentos administrativos, assinale a correta:",
  alternativas: [
    "Ofício e memorando admitem linguagem informal, gírias e abreviações íntimas.",
    "Clareza, objetividade, impessoalidade e observância da norma-padrão são exigências da redação oficial (Manual de Redação da Presidência).",
    "Ata é um documento que dispensa registro fiel do ocorrido.",
    "E-mail institucional dispensa identificação e assunto."
  ],
  correta: 1,
  porqueCerta: "O Manual de Redação da Presidência da República (referência do edital) exige impessoalidade, clareza, concisão, formalidade e padrão culto.",
  porqueErradas: [
    "A informalidade viola a impessoalidade e a formalidade exigidas.",
    null,
    "Ata deve registrar fielmente fatos, decisões e presenças — é documento de prova.",
    "E-mail oficial exige identificação, assunto, clareza e, quando cabível, assinatura."
  ],
  fonte: "Conteúdo específico: Redação oficial; Manual de Redação da Presidência."
},
{
  id: "CE08",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Redação oficial, arquivos e finanças",
  enunciado: "Sobre gestão de arquivos, é correto afirmar:",
  alternativas: [
    "Arquivo é o conjunto de documentos produzidos/recebidos no exercício das atividades, organizados para consulta e prova.",
    "Documentos de arquivo devem ser eliminados imediatamente, sem avaliação.",
    "Classificação e temporalidade são inúteis à gestão documental.",
    "Arquivo corrente e arquivo permanente têm a mesma função e o mesmo uso."
  ],
  correta: 0,
  porqueCerta: "É o conceito-base da Arquivologia (também na referência Mariz et al.): documentos orgânicos, classificados e avaliados quanto à guarda/eliminação.",
  porqueErradas: [
    null,
    "A eliminação exige avaliação e tabela de temporalidade; eliminar sem critério é infração.",
    "Classificação e temporalidade são os instrumentos centrais da gestão.",
    "Corrente (uso frequente), intermediário (pouco uso, guarda temporária) e permanente (valor histórico/probatório) têm funções distintas."
  ],
  fonte: "Conteúdo específico: Gestão de arquivos — conceitos, funções e práticas."
},
{
  id: "CE09",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Redação oficial, arquivos e finanças",
  enunciado: "Na rotina financeira de um escritório (contas a pagar/receber, adiantamentos e viagens), é correto afirmar:",
  alternativas: [
    "Adiantamentos e relatórios de viagem dispensam prestação de contas.",
    "O lançamento de notas fiscais, o controle de pagamentos e a prestação de contas (adiantamentos/relatórios de viagem) são rotinas obrigatórias de controle financeiro.",
    "Demonstrativos financeiros servem apenas como decoração.",
    "Fechamento de caixa mensal é proibido."
  ],
  correta: 1,
  porqueCerta: "O programa do cargo lista expressamente: contas a pagar/receber, lançamento de notas, prestação de contas de adiantamentos e viagens, demonstrativos e fechamento de caixa (GMD/GMR).",
  porqueErradas: [
    "Adiantamento sem prestação de contas é irregularidade grave.",
    null,
    "Demonstrativos são instrumentos de decisão e transparência.",
    "Fechamento de caixa é rotina obrigatória de controle."
  ],
  fonte: "Conteúdo específico: Contabilidade e finanças; prestação de contas; GMD/GMR."
},
{
  id: "CE10",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "RH, departamento de pessoal e SISPATRI",
  enunciado: "Sobre temas do programa (SISPATRI e jovem aprendiz), assinale a correta:",
  alternativas: [
    "O SISPATRI é o Sistema de Registro de Bens dos Agentes Públicos de MG, voltado ao controle patrimonial e à integridade.",
    "O programa Jovem Aprendiz proíbe qualquer atividade formativa ao aprendiz.",
    "Agentes públicos estão dispensados de declarar bens.",
    "O SENAC não tem relação com a formação do aprendiz."
  ],
  correta: 0,
  porqueCerta: "O SISPATRI-MG registra bens de agentes públicos (controle e prevenção de enriquecimento ilícito) e o programa Jovem Aprendiz/SENAC combina trabalho e formação — ambos constam do conteúdo do cargo.",
  porqueErradas: [
    null,
    "O aprendiz tem direito a formação teórico-prática; é a essência do programa.",
    "A declaração de bens é obrigação ligada à posse e à integridade.",
    "O SENAC é entidade formadora típica do programa de aprendizagem."
  ],
  fonte: "Conteúdo específico: SISPATRI; jovem aprendiz/SENAC."
}
];
