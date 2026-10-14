/* Lote MAT Seq — Probabilidade, combinatória e estatística (MAT288–MAT297): 5 PA + 5 PG. Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_SEQ = [
{
  id: "MAT288",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma progressão aritmética (PA), o primeiro termo é 4 e a razão é 3. Qual é o 10º termo dessa PA?",
  alternativas: ["28", "30", "31", "34"],
  correta: 2,
  porqueCerta: "Termo geral da PA: an = a1 + (n − 1)·r. Logo a10 = 4 + 9 × 3 = 4 + 27 = 31.",
  porqueErradas: [
    "28 seria 4 + 8 × 3 (o 9º termo), não o 10º.",
    "30 ignora o termo inicial: é apenas 10 × 3, sem somar o a1 = 4 corretamente.",
    null,
    "34 seria 4 + 10 × 3 — erro de contagem: usa n intervalos em vez de (n − 1)."
  ],
  fonte: "Conteúdo: Progressão Aritmética — termo geral."
},
{
  id: "MAT289",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "A sequência (7, 12, 17, 22, …) é uma progressão aritmética. Qual é a razão dessa PA?",
  alternativas: ["4", "5", "6", "7"],
  correta: 1,
  porqueCerta: "A razão é a diferença constante entre termos consecutivos: 12 − 7 = 5 (e 17 − 12 = 5).",
  porqueErradas: [
    "4 é menor que qualquer diferença entre termos vizinhos (12 − 7 = 5).",
    null,
    "6 é maior que a diferença real (12 − 7 = 5).",
    "7 é o primeiro termo da sequência, não a razão."
  ],
  fonte: "Conteúdo: Progressão Aritmética — razão."
},
{
  id: "MAT290",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma PA, o primeiro termo é 2 e a razão é 4. Qual é a soma dos 20 primeiros termos?",
  alternativas: ["800", "760", "840", "400"],
  correta: 0,
  porqueCerta: "Sn = n/2 × [2·a1 + (n − 1)·r] = 20/2 × [4 + 19 × 4] = 10 × 80 = 800.",
  porqueErradas: [
    null,
    "760 resulta de errar a parcela (n − 1)·r (usar 18 × 4 = 72 em vez de 76).",
    "840 resulta de somar 4 a mais na base (84 em vez de 80) antes de multiplicar por 10.",
    "400 é a metade da soma (esquecer de multiplicar por n/2 = 10 e usar só n/4)."
  ],
  fonte: "Conteúdo: Progressão Aritmética — soma dos termos."
},
{
  id: "MAT291",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Sobre a PA (3, 8, 13, 18, 23, …), assinale a afirmativa INCORRETA:",
  alternativas: ["A razão da PA é 5.", "O 6º termo é 28.", "A soma dos 5 primeiros termos é 65.", "O 10º termo é 45."],
  correta: 3,
  porqueCerta: "A afirmativa D está errada: a10 = 3 + 9 × 5 = 48, não 45. Como a questão pede a INCORRETA, o gabarito é a letra D.",
  porqueErradas: [
    "Está CORRETA: 8 − 3 = 5, logo não pode ser o gabarito de uma questão que pede a incorreta.",
    "Está CORRETA: a6 = 3 + 5 × 5 = 28, logo não é o gabarito.",
    "Está CORRETA: S5 = 5/2 × (3 + 23) = 5 × 13 = 65, logo não é o gabarito.",
    null
  ],
  fonte: "Conteúdo: Progressão Aritmética — termo geral, razão e soma (questão de alternativa incorreta)."
},
{
  id: "MAT292",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma PA, o primeiro termo é 10 e o quinto termo é 26. Qual é o oitavo termo dessa PA?",
  alternativas: ["34", "38", "36", "42"],
  correta: 1,
  porqueCerta: "r = (a5 − a1)/4 = (26 − 10)/4 = 4. Então a8 = 10 + 7 × 4 = 38.",
  porqueErradas: [
    "34 é o 7º termo (10 + 6 × 4), não o 8º.",
    null,
    "36 seria obtido com razão aproximada/errada (r ≈ 3,7), não com r = 4.",
    "42 seria 10 + 8 × 4 (conta n intervalos em vez de n − 1)."
  ],
  fonte: "Conteúdo: Progressão Aritmética — razão e termo geral."
},
{
  id: "MAT293",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma progressão geométrica (PG), o primeiro termo é 3 e a razão é 2. Qual é o 6º termo dessa PG?",
  alternativas: ["48", "64", "96", "192"],
  correta: 2,
  porqueCerta: "Termo geral da PG: an = a1 × q^(n−1). Logo a6 = 3 × 2^5 = 3 × 32 = 96.",
  porqueErradas: [
    "48 seria 3 × 2^4 (o 5º termo), não o 6º.",
    "64 é 2^6 — ignora o primeiro termo 3 e erra o expoente.",
    null,
    "192 seria 3 × 2^6 — usa expoente n em vez de (n − 1)."
  ],
  fonte: "Conteúdo: Progressão Geométrica — termo geral."
},
{
  id: "MAT294",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "A sequência (5, 15, 45, 135, …) é uma progressão geométrica. Qual é a razão dessa PG?",
  alternativas: ["3", "5", "9", "15"],
  correta: 0,
  porqueCerta: "A razão é o quociente constante entre termos consecutivos: 15 ÷ 5 = 3 (e 45 ÷ 15 = 3).",
  porqueErradas: [
    null,
    "5 é o primeiro termo, não a razão.",
    "9 seria (15 − 5) + ... — confunde diferença (PA) com quociente (PG).",
    "15 é o segundo termo, não a razão."
  ],
  fonte: "Conteúdo: Progressão Geométrica — razão."
},
{
  id: "MAT295",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma PG, o primeiro termo é 2 e a razão é 3. Qual é a soma dos 4 primeiros termos?",
  alternativas: ["40", "60", "121", "80"],
  correta: 3,
  porqueCerta: "S4 = 2 + 6 + 18 + 54 = 80 (ou pela fórmula: 2 × (3^4 − 1)/(3 − 1) = 2 × 80/2 = 80).",
  porqueErradas: [
    "40 é a metade da soma (erro na divisão da fórmula ou soma incompleta).",
    "60 seria 2 + 6 + 18 + 34 — erra o 4º termo (usa 34 em vez de 54).",
    "121 é 11², sem relação com a soma (possível confusão com 3^5 − ...).",
    null
  ],
  fonte: "Conteúdo: Progressão Geométrica — soma dos termos."
},
{
  id: "MAT296",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Sobre a PG (2, 6, 18, 54, …), assinale a afirmativa INCORRETA:",
  alternativas: ["A razão da PG é 3.", "O 5º termo é 162.", "O 6º termo é 324.", "A soma dos 3 primeiros termos é 26."],
  correta: 2,
  porqueCerta: "A afirmativa C está errada: a6 = 2 × 3^5 = 2 × 243 = 486, não 324. Como a questão pede a INCORRETA, o gabarito é a letra C.",
  porqueErradas: [
    "Está CORRETA: 6 ÷ 2 = 3, logo não pode ser o gabarito.",
    "Está CORRETA: a5 = 2 × 3^4 = 2 × 81 = 162, logo não é o gabarito.",
    null,
    "Está CORRETA: 2 + 6 + 18 = 26, logo não é o gabarito."
  ],
  fonte: "Conteúdo: Progressão Geométrica — razão, termo geral e soma (questão de alternativa incorreta)."
},
{
  id: "MAT297",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma PG de razão positiva, o primeiro termo é 4 e o terceiro termo é 36. Qual é a soma dos 3 primeiros termos?",
  alternativas: ["48", "52", "56", "76"],
  correta: 1,
  porqueCerta: "a3 = a1 × q² → 36 = 4q² → q² = 9 → q = 3. Termos: 4, 12, 36; soma = 52.",
  porqueErradas: [
    "48 somaria 4 + 8 + 36 (usa razão 2 no 2º termo, incompatível com a3 = 36).",
    null,
    "56 somaria 4 + 16 + 36 (usa razão 4 no 2º termo, incompatível com a3 = 36).",
    "76 usa a razão negativa q = −3 (termos 4, −12, 36, soma 28) ou outra combinação inválida — o enunciado exige razão positiva."
  ],
  fonte: "Conteúdo: Progressão Geométrica — razão e soma dos termos."
}
];
