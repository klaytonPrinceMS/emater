/* Lote MAT Probabilidade 2 — Probabilidade, combinatória e estatística (MAT327–MAT343). Estilo Fundep: 4 alternativas, 1 correta. 2 PFC + 7 perm/arranjo/comb (anagramas e fatorial) + 1 média/moda/mediana + 7 análise de dados. */
var BANCO_MAT_PROB_2 = [
{
  id: "MAT327",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um escritório da EMATER pode agendar uma reunião em 5 dias diferentes, em 3 turnos por dia e em 2 salas disponíveis. De quantas maneiras distintas é possível escolher o dia, o turno e a sala?",
  alternativas: ["10", "25", "30", "60"],
  correta: 2,
  porqueCerta: "Pelo Princípio Fundamental da Contagem: 5 × 3 × 2 = 30 combinações de dia, turno e sala.",
  porqueErradas: [
    "10 seria 5 + 3 + 2. Em escolhas sucessivas e independentes, multiplica-se, não se soma.",
    "25 não resulta de nenhuma multiplicação correta das três etapas (5 × 5?).",
    null,
    "60 dobra o valor correto (seria 5 × 3 × 2 × 2, como se houvesse uma 4ª etapa com 2 opções)."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem."
},
{
  id: "MAT328",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um sistema gera senhas formadas por 2 letras distintas (dentre as 26 do alfabeto) seguidas de 2 algarismos distintos (dentre os 10 disponíveis). Assinale a alternativa INCORRETA:",
  alternativas: [
    "O total de senhas é 70, pois basta somar 26 + 25 + 10 + 9.",
    "O número total de senhas é 26 × 25 × 10 × 9 = 58.500.",
    "Para a primeira letra há 26 possibilidades e, fixada ela, há 25 para a segunda letra.",
    "Se as repetições fossem permitidas, o total passaria a 26 × 26 × 10 × 10 = 67.600."
  ],
  correta: 0,
  porqueCerta: "A alternativa A está INCORRETA: escolhas sucessivas se multiplicam, não se somam. O correto é 26 × 25 × 10 × 9 = 58.500. Somar as possibilidades é o erro clássico no Princípio Fundamental da Contagem.",
  porqueErradas: [
    null,
    "Alternativa correta (enunciado pede a INCORRETA): 26 × 25 = 650 e 10 × 9 = 90; 650 × 90 = 58.500.",
    "Alternativa correta: sem repetição, cada escolha reduz em 1 o universo da etapa seguinte (26 e depois 25).",
    "Alternativa correta: com repetição cada etapa mantém o total (26, 26, 10, 10), dando 676 × 100 = 67.600."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem."
},
{
  id: "MAT329",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "O valor de 7!/5! é igual a:",
  alternativas: ["12", "21", "35", "42"],
  correta: 3,
  porqueCerta: "7!/5! = (7 × 6 × 5!)/5! = 7 × 6 = 42. Cancela-se o 5! do numerador com o do denominador.",
  porqueErradas: [
    "12 seria 7 + 5, sem relação com a divisão de fatoriais.",
    "21 seria 42/2 — nenhuma divisão por 2 ocorre no cancelamento.",
    "35 não corresponde a 7 × 6; confira a multiplicação.",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Fatorial."
},
{
  id: "MAT330",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Quantos anagramas distintos podem ser formados com as letras da palavra MILHO?",
  alternativas: ["25", "120", "60", "720"],
  correta: 1,
  porqueCerta: "MILHO tem 5 letras todas distintas: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 anagramas.",
  porqueErradas: [
    "25 seria 5², que conta escolhas com repetição — aqui cada letra entra uma única vez.",
    null,
    "60 é 5!/2 — não há divisão, pois não existe letra repetida.",
    "720 é 6!, como se a palavra tivesse 6 letras — ela tem 5."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Permutações e anagramas."
},
{
  id: "MAT331",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Quantos anagramas distintos podem ser formados com as letras da palavra EMATER?",
  alternativas: ["120", "720", "360", "180"],
  correta: 2,
  porqueCerta: "EMATER tem 6 letras com a letra E repetida 2 vezes: 6!/2! = 720/2 = 360 anagramas.",
  porqueErradas: [
    "120 é 5!, como se a palavra tivesse só 5 letras — ela tem 6.",
    "720 é 6! e ignora a repetição do E, contando cada anagrama 2 vezes.",
    null,
    "180 seria 720/4 — a divisão correta é por 2! = 2, não por 4."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Permutações com repetição (anagramas)."
},
{
  id: "MAT332",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Entre 10 funcionários, serão escolhidos um presidente, um secretário e um tesoureiro de comissão, cargos distintos. Quantas formações distintas são possíveis?",
  alternativas: ["120", "720", "30", "1.000"],
  correta: 1,
  porqueCerta: "A ordem importa (cargos distintos): arranjo A(10,3) = 10 × 9 × 8 = 720.",
  porqueErradas: [
    "120 é a COMBINAÇÃO C(10,3), que ignora a distinção entre os cargos — erro clássico.",
    null,
    "30 seria 10 × 3, sem sentido: o segundo cargo tem 9 opções e o terceiro, 8.",
    "1.000 seria 10³, que admitiria a mesma pessoa em mais de um cargo — impossível aqui."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Arranjos."
},
{
  id: "MAT333",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "De um grupo de 12 agricultores, serão escolhidos 2 representantes para uma reunião, sem distinção de função entre eles. Quantas duplas distintas podem ser formadas?",
  alternativas: ["66", "132", "24", "144"],
  correta: 0,
  porqueCerta: "A ordem não importa: C(12,2) = (12 × 11)/2 = 66.",
  porqueErradas: [
    null,
    "132 é o ARRANJO A(12,2) = 12 × 11 — conta cada dupla 2 vezes, como se houvesse cargos distintos.",
    "24 seria 12 × 2 — multiplica pelo tamanho do grupo em vez de aplicar a fórmula.",
    "144 seria 12², escolhas com repetição e ordem — não é o caso."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Combinações."
},
{
  id: "MAT334",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma biblioteca tem 7 cartilhas diferentes sobre irrigação. Um técnico vai levar 3 delas para uma visita de campo, sem importar a ordem. De quantas formas ele pode escolher as 3 cartilhas?",
  alternativas: ["21", "210", "105", "35"],
  correta: 3,
  porqueCerta: "C(7,3) = (7 × 6 × 5)/(3 × 2 × 1) = 210/6 = 35.",
  porqueErradas: [
    "21 seria 7 × 3 — multiplica o total pelo tamanho do grupo, sem relação com a fórmula.",
    "210 é o ARRANJO A(7,3) = 7 × 6 × 5 — conta cada trio 6 vezes, como se a ordem importasse.",
    "105 seria 210/2 — a divisão correta é por 3! = 6, não por 2.",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Combinações."
},
{
  id: "MAT335",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Sobre análise combinatória, assinale a alternativa INCORRETA:",
  alternativas: [
    "Na combinação, a ordem dos elementos escolhidos não altera o grupo formado.",
    "No arranjo para cargos distintos, trocar as pessoas de cargo pode gerar um resultado diferente.",
    "O número de combinações de 6 pessoas tomadas 2 a 2 é igual a 30.",
    "5! = 5 × 4 × 3 × 2 × 1 = 120."
  ],
  correta: 2,
  porqueCerta: "A alternativa C está INCORRETA: C(6,2) = (6 × 5)/2 = 15. O valor 30 é o ARRANJO A(6,2) = 6 × 5, que conta cada dupla 2 vezes.",
  porqueErradas: [
    "Alternativa correta (não é a pedida): essa é exatamente a definição de combinação.",
    "Alternativa correta: com cargos distintos a ordem importa, que é a definição de arranjo.",
    null,
    "Alternativa correta: o cálculo do fatorial está exato (120)."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Arranjos, combinações e fatorial."
},
{
  id: "MAT336",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "As notas de 5 candidatos em um teste foram: 4, 6, 6, 8 e 11. Sobre esse conjunto, é correto afirmar que:",
  alternativas: [
    "A média é 6,4 e a moda é 11.",
    "A média é 7,0, a mediana é 6 e a moda é 6.",
    "A mediana é 8 e a média é 6,0.",
    "A moda é 11 e a mediana é 7."
  ],
  correta: 1,
  porqueCerta: "Média = (4 + 6 + 6 + 8 + 11)/5 = 35/5 = 7,0. Dados já ordenados, a mediana (termo central) é 6. A moda (mais frequente) é 6, que aparece 2 vezes.",
  porqueErradas: [
    "6,4 resultaria de soma 32, mas a soma é 35; e 11 aparece 1 vez, não é moda.",
    null,
    "8 é o 4º valor, não o central (que é 6); e a média é 7,0, não 6,0.",
    "11 é o maior valor, não o mais frequente; 7 é a média, não a mediana."
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT337",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "A tabela mostra os atendimentos de um escritório: janeiro, 45; fevereiro, 55; março, 60; abril, 50. É correto afirmar que:",
  alternativas: [
    "O total do quadrimestre foi 210 atendimentos e o maior movimento foi em março, com 60.",
    "O total do quadrimestre foi 200 atendimentos e o maior movimento foi em fevereiro, com 55.",
    "O total do quadrimestre foi 210 atendimentos e o maior movimento foi em abril, com 50.",
    "O total do quadrimestre foi 160 atendimentos e o maior movimento foi em março, com 60."
  ],
  correta: 0,
  porqueCerta: "Total = 45 + 55 + 60 + 50 = 210. O maior valor mensal é 60, em março.",
  porqueErradas: [
    null,
    "O total não é 200 (faltam 10) e fevereiro (55) é menor que março (60).",
    "O total 210 está certo, mas abril teve 50, abaixo dos 60 de março.",
    "160 é a soma de apenas três meses (45 + 55 + 60); faltou abril."
  ],
  fonte: "Conteúdo: Estatística — Leitura e interpretação de tabelas."
},
{
  id: "MAT338",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma pesquisa ouviu 400 moradores: 40% aprovam um programa, 35% desaprovam e 25% se dizem indiferentes. Assinale a alternativa INCORRETA:",
  alternativas: [
    "160 moradores aprovam o programa.",
    "140 moradores desaprovam o programa.",
    "100 moradores se dizem indiferentes.",
    "Os que desaprovam superam a soma dos demais entrevistados."
  ],
  correta: 3,
  porqueCerta: "A alternativa D está INCORRETA: desaprovam 140, enquanto os demais somam 160 + 100 = 260. Logo 140 < 260, e a afirmação é falsa.",
  porqueErradas: [
    "Alternativa correta: 40% de 400 = 0,40 × 400 = 160.",
    "Alternativa correta: 35% de 400 = 0,35 × 400 = 140.",
    "Alternativa correta: 25% de 400 = 0,25 × 400 = 100.",
    null
  ],
  fonte: "Conteúdo: Estatística — Leitura e interpretação de gráficos e porcentagens."
},
{
  id: "MAT339",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "A produção de uma cooperativa passou de 200 t para 250 t de um ano para o outro. Qual foi o aumento percentual?",
  alternativas: ["20%", "50%", "25%", "125%"],
  correta: 2,
  porqueCerta: "Aumento = 250 − 200 = 50 t. Percentual = 50/200 = 0,25 = 25%.",
  porqueErradas: [
    "20% é 50/250 — usa o valor FINAL como base, mas a base é o valor INICIAL (200).",
    "50% corresponderia a um aumento de 100 t (metade de 200), não de 50 t.",
    null,
    "125% é 250/200 — essa é a razão entre os valores, não o AUMENTO (que é 25%)."
  ],
  fonte: "Conteúdo: Estatística — Variação e crescimento percentual."
},
{
  id: "MAT340",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "O preço de um insumo caiu de R$ 120,00 para R$ 96,00. Qual foi a queda percentual?",
  alternativas: ["12%", "20%", "24%", "80%"],
  correta: 1,
  porqueCerta: "Queda = 120 − 96 = 24. Percentual = 24/120 = 0,20 = 20%.",
  porqueErradas: [
    "12% não corresponde a nenhuma razão correta (24/200?). Confira: base é 120.",
    null,
    "24 é o valor absoluto da queda em reais, não o percentual.",
    "80% é 96/120 — essa é a fração que RESTOU do preço, não a queda (que é 100% − 80% = 20%)."
  ],
  fonte: "Conteúdo: Estatística — Variação e crescimento percentual."
},
{
  id: "MAT341",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma pesquisa ouviu 200 produtores (120 da zona rural e 80 da zona urbana). São favoráveis a uma nova técnica 90 produtores rurais e 30 urbanos. Escolhido ao acaso um produtor FAVORÁVEL, qual é a probabilidade de ele ser da zona rural?",
  alternativas: ["3/4 (ou 75%)", "9/20 (ou 45%)", "3/5 (ou 60%)", "1/2 (ou 50%)"],
  correta: 0,
  porqueCerta: "Favoráveis: 90 + 30 = 120. Condicionando a esse grupo: P = 90/120 = 3/4 = 75%.",
  porqueErradas: [
    null,
    "9/20 = 90/200 ignora o condicionamento (“dado que é favorável”) e usa o total geral.",
    "3/5 = 120/200 é a probabilidade de ser FAVORÁVEL, não de ser rural dado que é favorável.",
    "1/2 é um chute de equiprobabilidade sem contar os casos da tabela."
  ],
  fonte: "Conteúdo: Estatística — Leitura de tabelas e probabilidade condicional."
},
{
  id: "MAT342",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um gráfico de linhas mostra a safra de uma região (em mil t): 2021: 100; 2022: 130; 2023: 120; 2024: 160. Assinale a alternativa INCORRETA:",
  alternativas: [
    "O maior crescimento absoluto entre anos seguidos foi de 2023 para 2024, com +40.",
    "Houve queda de 2022 para 2023.",
    "A produção total do período foi 510 mil t.",
    "O crescimento de 2021 para 2022 foi de 40%."
  ],
  correta: 3,
  porqueCerta: "A alternativa D está INCORRETA: de 100 para 130 o aumento foi 30, e 30/100 = 30%, não 40%.",
  porqueErradas: [
    "Alternativa correta: +30 (21→22), −10 (22→23) e +40 (23→24); o maior é +40.",
    "Alternativa correta: 130 → 120 é queda de 10 mil t.",
    "Alternativa correta: 100 + 130 + 120 + 160 = 510.",
    null
  ],
  fonte: "Conteúdo: Estatística — Leitura e interpretação de gráficos; variação."
},
{
  id: "MAT343",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "As vendas de uma feira somaram R$ 1.000,00 em um mês e cresceram 10% ao mês nos dois meses seguintes. Qual foi o valor das vendas ao final desses dois meses de crescimento?",
  alternativas: ["R$ 1.200,00", "R$ 1.100,00", "R$ 1.210,00", "R$ 1.300,00"],
  correta: 2,
  porqueCerta: "Mês 1: 1.000 × 1,10 = 1.100. Mês 2: 1.100 × 1,10 = 1.210. Crescimentos sucessivos se multiplicam (1,10² = 1,21), não se somam.",
  porqueErradas: [
    "R$ 1.200,00 soma 10% + 10% = 20% sobre a base — ignora o juro sobre juro do 2º mês.",
    "R$ 1.100,00 é o valor após UM mês de crescimento, não dois.",
    null,
    "R$ 1.300,00 somaria 30% sem base no problema (seriam três meses a 10% simples)."
  ],
  fonte: "Conteúdo: Estatística — Crescimento percentual sucessivo."
}
];
