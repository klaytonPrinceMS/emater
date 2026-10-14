/* Lote MAT — Porcentagem, razão, proporção e regra de três 2 (20 questões inéditas MAT107-MAT126). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_PORCENTAGEM_2 = [
{
  id: "MAT107",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "O almoxarifado recebeu 250 caixas de papel A4 e 12% delas chegaram com avaria. Quantas caixas estão em boas condições de uso?",
  alternativas: ["220", "30", "238", "205"],
  correta: 0,
  porqueCerta: "Avaridas: 12% de 250 = 0,12 × 250 = 30 caixas. Em boas condições: 250 − 30 = 220 caixas.",
  porqueErradas: [
    null,
    "30 é a parte AVARIADA (12%), não as caixas boas. Erro típico: parar no meio do cálculo.",
    "238 subtrai o número 12 como se fosse quantidade absoluta (250 − 12), confundindo taxa percentual com unidades.",
    "205 corresponderia a 18% de avaria (250 × 0,82), não 12%."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT108",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Uma cadeira para o escritório custa R$ 800,00 e teve desconto de 25% para pagamento à vista. Qual o preço final à vista?",
  alternativas: ["R$ 200,00", "R$ 600,00", "R$ 550,00", "R$ 1.000,00"],
  correta: 1,
  porqueCerta: "Desconto: 25% de 800 = 0,25 × 800 = 200. Preço final: 800 − 200 = R$ 600,00 (ou 800 × 0,75 = 600).",
  porqueErradas: [
    "R$ 200,00 é o valor DO DESCONTO, não o preço final.",
    null,
    "R$ 550,00 corresponderia a um desconto de 31,25%, não de 25%.",
    "R$ 1.000,00 soma o desconto em vez de subtrair (800 + 200)."
  ],
  fonte: "Conteúdo: Porcentagem; descontos."
},
{
  id: "MAT109",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "A respeito de cálculos de porcentagem, assinale a alternativa INCORRETA, isto é, aquela em que a conta está ERRADA:",
  alternativas: ["10% de 300 = 30", "25% de 200 = 50", "20% de 150 = 25", "50% de 90 = 45"],
  correta: 2,
  porqueCerta: "20% de 150 = 0,20 × 150 = 30, e não 25. O valor 25 corresponderia a cerca de 16,7% de 150. Por isso essa é a única conta errada.",
  porqueErradas: [
    "Conta correta: 10% de 300 = 0,10 × 300 = 30.",
    "Conta correta: 25% de 200 = 1/4 × 200 = 50.",
    null,
    "Conta correta: 50% de 90 = metade de 90 = 45."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT110",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "O almoxarifado distribuiu 45 cartuchos de tinta para 15 impressoras, em partes iguais. A razão entre o número de cartuchos e o número de impressoras, na forma simplificada, é:",
  alternativas: ["1/3", "1/5", "5/1", "3/1"],
  correta: 3,
  porqueCerta: "Razão cartuchos/impressoras = 45/15. Simplificando por 15: 3/1, ou seja, 3 cartuchos por impressora.",
  porqueErradas: [
    "1/3 inverte a ordem (impressoras/cartuchos = 15/45 = 1/3).",
    "1/5 não resulta da simplificação de 45/15.",
    "5/1 não corresponde à divisão 45 ÷ 15.",
    null
  ],
  fonte: "Conteúdo: Razão e proporção."
},
{
  id: "MAT111",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Com 5 litros de desinfetante concentrado preparam-se 20 baldes de solução de limpeza, mantida a diluição. Com 8 litros, quantos baldes serão preparados?",
  alternativas: ["32", "30", "40", "28"],
  correta: 0,
  porqueCerta: "Grandezas diretamente proporcionais: 5/20 = 8/x → 5x = 160 → x = 32 baldes.",
  porqueErradas: [
    null,
    "30 ignora a proporção (seria 7,5 litros na mesma diluição).",
    "40 dobraria os baldes sem dobrar o concentrado.",
    "28 não satisfaz a igualdade 5/20 = 8/28."
  ],
  fonte: "Conteúdo: Razão e proporção."
},
{
  id: "MAT112",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "2 servidores conferem 400 dossiês em 10 dias, no mesmo ritmo. Com 4 servidores, os mesmos 400 dossiês serão conferidos em:",
  alternativas: ["20 dias", "10 dias", "8 dias", "5 dias"],
  correta: 3,
  porqueCerta: "Servidores e dias são inversamente proporcionais: 2 × 10 = 4 × x → 20 = 4x → x = 5 dias. Dobrando a equipe, o prazo cai pela metade.",
  porqueErradas: [
    "20 dias aplica proporção direta (10 × 4/2) — erro clássico de não inverter.",
    "10 dias repete o prazo original, ignorando o reforço da equipe.",
    "8 dias não resulta de nenhum cálculo proporcional correto.",
    null
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT113",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Sobre regra de três, assinale a alternativa INCORRETA, isto é, aquela em que o resultado NÃO decorre corretamente da proporção:",
  alternativas: ["2 pacotes → 100 envelopes; 5 pacotes → 250 envelopes", "3 técnicos → 12 visitas por dia; 6 técnicos → 24 visitas por dia", "4 torneiras enchem uma caixa em 6 h; 2 torneiras enchem em 3 h", "10 resmas → 5.000 folhas; 3 resmas → 1.500 folhas"],
  correta: 2,
  porqueCerta: "Torneiras e tempo são inversamente proporcionais: 4 × 6 = 2 × x → 24 = 2x → x = 12 h, e não 3 h. A alternativa aplicou proporção direta a grandezas inversas.",
  porqueErradas: [
    "Conta correta e direta: 50 envelopes por pacote; 5 × 50 = 250.",
    "Conta correta e direta: dobrando os técnicos, dobram as visitas (12 × 2 = 24).",
    null,
    "Conta correta e direta: 500 folhas por resma; 3 × 500 = 1.500."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT114",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "R$ 660,00 de material de expediente serão divididos entre dois setores em partes diretamente proporcionais a 5 e 6. Qual o valor da MENOR parte?",
  alternativas: ["R$ 300,00", "R$ 330,00", "R$ 360,00", "R$ 110,00"],
  correta: 0,
  porqueCerta: "Total de partes: 5 + 6 = 11. Cada parte: 660/11 = 60. Menor parte: 5 × 60 = R$ 300,00.",
  porqueErradas: [
    null,
    "R$ 330,00 seria a metade igualitária, ignorando a proporção 5:6.",
    "R$ 360,00 é a MAIOR parte (6 × 60), não a menor.",
    "R$ 110,00 dividiria em 6 partes iguais, sem relação com 5:6."
  ],
  fonte: "Conteúdo: Razão e proporção; divisão proporcional."
},
{
  id: "MAT115",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Os 140 candidatos classificados na primeira etapa correspondem a 35% do total de inscritos. Quantos candidatos se inscreveram ao todo?",
  alternativas: ["350", "400", "490", "175"],
  correta: 1,
  porqueCerta: "Se 35% = 140, então 1% = 140/35 = 4 e 100% = 4 × 100 = 400 inscritos. Ou: x = 140/0,35 = 400.",
  porqueErradas: [
    "350 corresponderia a 40% de classificados (140/350), não 35%.",
    null,
    "490 multiplica 140 por 3,5 sem base percentual.",
    "175 seria o total se 140 fosse 80% (140/0,8)."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT116",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "A tarifa do transporte de um escritório passou de R$ 4,00 para R$ 4,80. Qual foi o aumento percentual?",
  alternativas: ["8%", "16,7%", "20%", "25%"],
  correta: 2,
  porqueCerta: "Aumento absoluto: 4,80 − 4,00 = 0,80. Percentual sobre o valor ORIGINAL: 0,80/4,00 = 0,20 = 20%.",
  porqueErradas: [
    "8% confunde o aumento absoluto (R$ 0,80) com o percentual.",
    "16,7% divide pelo valor FINAL (0,80/4,80) — erro clássico: a base é o valor inicial.",
    null,
    "25% elevaria a tarifa a R$ 5,00 (4,00 × 1,25), não a R$ 4,80."
  ],
  fonte: "Conteúdo: Porcentagem; acréscimos."
},
{
  id: "MAT117",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "4 impressoras produzem 6.000 panfletos em 3 dias, em ritmo constante. Com 6 impressoras iguais, os mesmos 6.000 panfletos serão produzidos em:",
  alternativas: ["2 dias", "4 dias", "4,5 dias", "3 dias"],
  correta: 0,
  porqueCerta: "Impressoras e dias são inversamente proporcionais: 4 × 3 = 6 × x → 12 = 6x → x = 2 dias.",
  porqueErradas: [
    null,
    "4 dias aplica proporção direta (3 × 6/4) — erro clássico de não inverter.",
    "4,5 dias multiplica em vez de dividir (3 × 6/4).",
    "3 dias repete o prazo, ignorando o reforço das impressoras."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT118",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Sobre razão e proporção, assinale a alternativa INCORRETA:",
  alternativas: ["A razão 12/18, simplificada, é 2/3", "Se a/b = 2/5 e a + b = 28, então a = 8 e b = 20", "Na proporção 3/9 = 5/15, o produto dos meios é diferente do produto dos extremos", "1/4 = 25%"],
  correta: 2,
  porqueCerta: "Pela propriedade fundamental, meios × extremos são iguais: 9 × 5 = 45 e 3 × 15 = 45. Afirmar que são diferentes contraria a definição de proporção.",
  porqueErradas: [
    "Afirmação correta: 12/18 ÷ 6 = 2/3.",
    "Afirmação correta: 7 partes = 28, cada parte = 4; 2 × 4 = 8 e 5 × 4 = 20.",
    null,
    "Afirmação correta: 1/4 = 0,25 = 25%."
  ],
  fonte: "Conteúdo: Razão e proporção."
},
{
  id: "MAT119",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Dos 500 inscritos em um mutirão de atendimento, 60% compareceram. Dos que compareceram, 40% solicitaram segunda via de documentos. Quantos solicitaram a segunda via?",
  alternativas: ["200", "300", "140", "120"],
  correta: 3,
  porqueCerta: "Compareceram: 60% de 500 = 0,60 × 500 = 300. Segunda via: 40% de 300 = 0,40 × 300 = 120 (ou 0,40 × 0,60 × 500 = 120).",
  porqueErradas: [
    "200 é 40% do TOTAL (500), não dos presentes — ignora que a base dos 40% é 300.",
    "300 é o número de PRESENTES (60%). Faltou aplicar os 40%.",
    "140 não resulta de nenhum passo correto do cálculo.",
    null
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT120",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Com 3 kg de café preparam-se 120 cafezinhos no refeitório. Mantida a proporção, com 5 kg serão preparados:",
  alternativas: ["180", "200", "220", "150"],
  correta: 1,
  porqueCerta: "Proporção direta: 3/120 = 5/x → 3x = 600 → x = 200 cafezinhos (40 por quilo).",
  porqueErradas: [
    "180 corresponderia a 4,5 kg na mesma proporção.",
    null,
    "220 corresponderia a 5,5 kg na mesma proporção.",
    "150 aplica metade errada (seria o rendimento de 3,75 kg)."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT121",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Um digitador, em ritmo constante, digita 30 páginas em 2 horas. Mantido o ritmo, em 7 horas ele digita:",
  alternativas: ["90 páginas", "100 páginas", "105 páginas", "210 páginas"],
  correta: 2,
  porqueCerta: "Produtividade: 30/2 = 15 páginas por hora. Em 7 horas: 7 × 15 = 105 páginas (30/2 = x/7 → 2x = 210 → x = 105).",
  porqueErradas: [
    "90 páginas seria a produção em 6 horas (15 × 6).",
    "100 páginas não satisfaz a proporção 30/2 = 100/7.",
    null,
    "210 páginas dobra o correto (seria a produção em 14 horas, ou o erro de não dividir por 2)."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT122",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "De 2.000 inscrições recebidas, 12% obtiveram isenção de taxa. Quantas inscrições foram PAGANTES (sem isenção)?",
  alternativas: ["240", "1.760", "1.520", "1.880"],
  correta: 1,
  porqueCerta: "Isentas: 12% de 2.000 = 0,12 × 2.000 = 240. Pagantes: 2.000 − 240 = 1.760 (ou 2.000 × 0,88 = 1.760).",
  porqueErradas: [
    "240 é o número de ISENTAS, não de pagantes.",
    null,
    "1.520 subtrai o dobro da isenção (2.000 − 480).",
    "1.880 subtrai o número 120 como se fosse quantidade (2.000 − 120), confundindo taxa com unidades."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT123",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Sobre acréscimos e descontos, assinale a alternativa INCORRETA, isto é, aquela em que a conta está ERRADA:",
  alternativas: ["Aumento de 10% sobre R$ 200,00 resulta em R$ 220,00", "Desconto de 20% sobre R$ 300,00 resulta em R$ 240,00", "50% de 1.000 = 500", "15% de 400 somados a 400 resultam em 445"],
  correta: 3,
  porqueCerta: "15% de 400 = 0,15 × 400 = 60. Somando: 400 + 60 = 460, e não 445. Por isso essa é a única conta errada.",
  porqueErradas: [
    "Conta correta: 200 × 1,10 = 220.",
    "Conta correta: 300 × 0,80 = 240.",
    "Conta correta: metade de 1.000 = 500.",
    null
  ],
  fonte: "Conteúdo: Porcentagem; acréscimos e descontos."
},
{
  id: "MAT124",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Um setor tem 8 homens e 12 mulheres. A razão entre o número de homens e o número de mulheres, na forma simplificada, é:",
  alternativas: ["2/3", "3/2", "1/2", "4/3"],
  correta: 0,
  porqueCerta: "Razão homens/mulheres = 8/12. Simplificando por 4: 2/3.",
  porqueErradas: [
    null,
    "3/2 inverte a ordem (mulheres/homens = 12/8 = 3/2).",
    "1/2 seria a razão entre 6 e 12, não entre 8 e 12.",
    "4/3 não resulta da simplificação de 8/12."
  ],
  fonte: "Conteúdo: Razão e proporção."
},
{
  id: "MAT125",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "6 funcionários, trabalhando 8 horas por dia, atendem 240 produtores em 5 dias. Mantido o ritmo e a jornada, quantos produtores 4 funcionários atendem em 10 dias?",
  alternativas: ["240", "320", "360", "180"],
  correta: 1,
  porqueCerta: "Regra de três composta (funcionários e dias diretos com a produção): x = 240 × (4/6) × (10/5) = 240 × (2/3) × 2 = 320 produtores.",
  porqueErradas: [
    "240 repete o dado original, ignorando as mudanças de equipe e de prazo.",
    null,
    "360 inverte a fração dos funcionários (usa 6/4 em vez de 4/6).",
    "180 considera só uma das variações, sem combinar equipe e prazo."
  ],
  fonte: "Conteúdo: Regra de três simples e composta."
},
{
  id: "MAT126",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "O estoque de resmas caiu de 500 para 375 unidades em um mês. Qual foi a redução percentual do estoque?",
  alternativas: ["20%", "30%", "33,3%", "25%"],
  correta: 3,
  porqueCerta: "Queda absoluta: 500 − 375 = 125. Percentual sobre o valor INICIAL: 125/500 = 0,25 = 25%.",
  porqueErradas: [
    "20% corresponderia a uma queda de 100 unidades (para 400), não de 125.",
    "30% corresponderia a uma queda de 150 unidades (para 350).",
    "33,3% divide pela quantidade FINAL (125/375) — erro clássico: a base é o valor inicial (500).",
    null
  ],
  fonte: "Conteúdo: Porcentagem; decréscimos."
}
];
