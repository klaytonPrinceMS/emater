/* Lote MAT Geo 3 — Geometria: perímetro, área, volumes e trigonometria (MAT318–MAT326). 5 de circunferência/círculo + 4 de volumes. Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_GEO_3 = [
{
  id: "MAT318",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma rotatória tem diâmetro de 20 m. Usando π = 3,14, qual é o comprimento da circunferência dessa rotatória?",
  alternativas: ["62,8 m", "31,4 m", "314 m", "125,6 m"],
  correta: 0,
  porqueCerta: "Comprimento = π × diâmetro = 3,14 × 20 = 62,8 m. (Equivale a 2πR, pois o raio é 10 m: 2 × 3,14 × 10 = 62,8 m.)",
  porqueErradas: [
    null,
    "31,4 m é a metade (π × raio = 3,14 × 10). Faltou multiplicar por 2 — ou use direto π × diâmetro.",
    "314 m² é a ÁREA (πR² = 3,14 × 100), não o comprimento. Confusão entre as duas fórmulas.",
    "125,6 m é o DOBRO do comprimento (62,8 × 2). Não há multiplicação extra por 2 na fórmula."
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: comprimento."
},
{
  id: "MAT319",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma pista circular de cooper tem comprimento de 25,12 m. Usando π = 3,14, qual é a medida do raio dessa pista?",
  alternativas: ["8 m", "4 m", "12,56 m", "2 m"],
  correta: 1,
  porqueCerta: "C = 2πR → 25,12 = 2 × 3,14 × R → 25,12 = 6,28 × R → R = 25,12 / 6,28 = 4 m.",
  porqueErradas: [
    "8 m é o DIÂMETRO (C/π = 25,12/3,14). Faltou dividir por 2 para achar o raio.",
    null,
    "12,56 m é a metade do comprimento (25,12/2). É preciso dividir por 2π (6,28), não só por 2.",
    "2 m é a metade do raio (4/2). Divisão extra por 2 sem fundamento na fórmula."
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: raio e diâmetro."
},
{
  id: "MAT320",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um relógio de praça tem mostrador circular com diâmetro de 6 m. Usando π = 3,14, qual é a área desse mostrador?",
  alternativas: ["18,84 m²", "113,04 m²", "28,26 m²", "9,42 m²"],
  correta: 2,
  porqueCerta: "Diâmetro 6 m → raio = 3 m. Área = πR² = 3,14 × 3² = 3,14 × 9 = 28,26 m².",
  porqueErradas: [
    "18,84 m² é o COMPRIMENTO da circunferência (2πR = 2 × 3,14 × 3), não a área.",
    "113,04 m² usa o DIÂMETRO (6 m) no lugar do raio: 3,14 × 36 — erro clássico.",
    null,
    "9,42 m² é a metade do comprimento (πR = 3,14 × 3). Nada a ver com a fórmula da área."
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: área."
},
{
  id: "MAT321",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um reservatório tem base circular com raio de 8 m (use π = 3,14). Assinale a afirmativa INCORRETA:",
  alternativas: ["O diâmetro da base mede 16 m.", "O comprimento da circunferência da base é 50,24 m.", "A área da base é 200,96 m².", "A área da base é 50,24 m²."],
  correta: 3,
  porqueCerta: "A área correta é πR² = 3,14 × 64 = 200,96 m². A alternativa D troca a área pelo comprimento (50,24 m = 2πR), logo é a INCORRETA.",
  porqueErradas: [
    "Alternativa CORRETA (verdadeira): diâmetro = 2 × raio = 2 × 8 = 16 m.",
    "Alternativa CORRETA (verdadeira): comprimento = 2πR = 2 × 3,14 × 8 = 6,28 × 8 = 50,24 m.",
    "Alternativa CORRETA (verdadeira): área = πR² = 3,14 × 64 = 200,96 m².",
    null
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: comprimento, área, raio e diâmetro."
},
{
  id: "MAT322",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma pulseira circular tem raio de 3 cm. Usando π = 3,14, qual é o comprimento dessa pulseira?",
  alternativas: ["18,84 cm", "9,42 cm", "28,26 cm", "37,68 cm"],
  correta: 0,
  porqueCerta: "Comprimento = 2πR = 2 × 3,14 × 3 = 6,28 × 3 = 18,84 cm.",
  porqueErradas: [
    null,
    "9,42 cm é a METADE (πR = 3,14 × 3). Faltou multiplicar por 2.",
    "28,26 cm é a ÁREA (πR² = 3,14 × 9), não o comprimento.",
    "37,68 cm é o DOBRO do comprimento (18,84 × 2). Não há esse fator extra na fórmula."
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: comprimento."
},
{
  id: "MAT323",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma caixa cúbica para armazenar grãos tem aresta de 5 m. Qual é o seu volume?",
  alternativas: ["25 m³", "125 m³", "150 m³", "75 m³"],
  correta: 1,
  porqueCerta: "Volume do cubo = aresta³ = 5³ = 5 × 5 × 5 = 125 m³.",
  porqueErradas: [
    "25 m³ é a área de UMA face (5²). Volume exige três dimensões, não duas.",
    null,
    "150 m³ é a ÁREA TOTAL (6 × 25). Confusão entre área e volume.",
    "75 m³ seria 25 × 3 (área de 3 faces). Não há multiplicação por 3 no volume do cubo."
  ],
  fonte: "Conteúdo: Geometria espacial — volume do cubo."
},
{
  id: "MAT324",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um depósito em forma de paralelepípedo mede 3 m de comprimento, 2 m de largura e 5 m de altura. Assinale a afirmativa INCORRETA:",
  alternativas: ["O volume do depósito é 30 m³.", "A área da base do depósito é 6 m².", "O volume do depósito é 16 m³.", "Se a altura dobrar para 10 m, o volume passa a 60 m³."],
  correta: 2,
  porqueCerta: "O volume correto é 3 × 2 × 5 = 30 m³. A alternativa C afirma 16 m³, valor sem fundamento — logo é a INCORRETA.",
  porqueErradas: [
    "Alternativa CORRETA (verdadeira): volume = 3 × 2 × 5 = 30 m³.",
    "Alternativa CORRETA (verdadeira): área da base = 3 × 2 = 6 m².",
    null,
    "Alternativa CORRETA (verdadeira): com altura 10 m, volume = 3 × 2 × 10 = 60 m³ (o dobro, pois só a altura dobrou)."
  ],
  fonte: "Conteúdo: Geometria espacial — volume do paralelepípedo."
},
{
  id: "MAT325",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma lata cilíndrica de adubo tem raio de 3 m e altura de 4 m. Usando π = 3,14, qual é o seu volume?",
  alternativas: ["37,68 m³", "56,52 m³", "339,12 m³", "113,04 m³"],
  correta: 3,
  porqueCerta: "Volume do cilindro = πR²h = 3,14 × 3² × 4 = 3,14 × 9 × 4 = 3,14 × 36 = 113,04 m³.",
  porqueErradas: [
    "37,68 m³ seria πRh (3,14 × 3 × 4) — faltou elevar o raio ao quadrado.",
    "56,52 m³ é a METADE do volume (113,04/2). Não há divisão por 2 na fórmula.",
    "339,12 m³ é o TRIPLO do volume (113,04 × 3). Multiplicação extra sem fundamento.",
    null
  ],
  fonte: "Conteúdo: Geometria espacial — volume do cilindro."
},
{
  id: "MAT326",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um comedouro tem a forma de um prisma reto de 7 m de comprimento, cuja base é um triângulo de 10 m de base e 6 m de altura. Assinale a afirmativa INCORRETA:",
  alternativas: ["A área da base triangular é 30 m².", "O volume do prisma é 420 m³.", "O volume do prisma é 210 m³.", "Se o comprimento dobrar para 14 m, o volume passa a 420 m³."],
  correta: 1,
  porqueCerta: "Área da base = (10 × 6)/2 = 30 m² e volume = 30 × 7 = 210 m³. A alternativa B usa 10 × 6 × 7 = 420 SEM dividir por 2 (esquece que a base é triangular) — logo é a INCORRETA.",
  porqueErradas: [
    "Alternativa CORRETA (verdadeira): área da base = (10 × 6)/2 = 60/2 = 30 m².",
    null,
    "Alternativa CORRETA (verdadeira): volume = 30 × 7 = 210 m³.",
    "Alternativa CORRETA (verdadeira): com 14 m, volume = 30 × 14 = 420 m³ (o dobro, pois só o comprimento dobrou)."
  ],
  fonte: "Conteúdo: Geometria espacial — volume do prisma."
}
];
