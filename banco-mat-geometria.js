/* Lote MAT Geometria — Geometria: perímetro, área, volumes e trigonometria (MAT207–MAT226). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_GEOMETRIA = [
{
  id: "MAT207",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um terreno retangular mede 25 m de comprimento por 12 m de largura. Qual é o perímetro desse terreno?",
  alternativas: ["37 m", "300 m", "74 m", "62 m"],
  correta: 2,
  porqueCerta: "Perímetro do retângulo = 2 × (comprimento + largura) = 2 × (25 + 12) = 2 × 37 = 74 m.",
  porqueErradas: [
    "37 m é o SEMIPERÍMETRO (25 + 12). Faltou multiplicar por 2.",
    "300 m é a ÁREA (25 × 12), não o perímetro. Confusão entre os dois conceitos.",
    null,
    "62 m não resulta de nenhum cálculo correto (seria algo como 25 + 25 + 12, esquecendo um lado)."
  ],
  fonte: "Conteúdo: Geometria plana — perímetro de figuras planas."
},
{
  id: "MAT208",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma placa quadrada de obra tem lado de 9 m. Qual é a área dessa placa?",
  alternativas: ["36 m²", "81 m²", "18 m²", "72 m²"],
  correta: 1,
  porqueCerta: "Área do quadrado = lado² = 9² = 81 m².",
  porqueErradas: [
    "36 m² é o PERÍMETRO (4 × 9), não a área.",
    null,
    "18 m² seria 9 × 2 — multiplica o lado por 2 em vez de elevar ao quadrado.",
    "72 m² não corresponde ao cálculo (seria 9 × 8, sem sentido no problema)."
  ],
  fonte: "Conteúdo: Geometria plana — área de figuras planas."
},
{
  id: "MAT209",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um canteiro triangular tem base de 10 m e altura de 6 m. Qual é a sua área?",
  alternativas: ["30 m²", "60 m²", "16 m²", "32 m²"],
  correta: 0,
  porqueCerta: "Área do triângulo = (base × altura)/2 = (10 × 6)/2 = 60/2 = 30 m².",
  porqueErradas: [
    null,
    "60 m² é o produto base × altura SEM dividir por 2 — erro clássico na área do triângulo.",
    "16 m² é a SOMA (10 + 6). Área não se calcula somando as medidas.",
    "32 m² seria o dobro da soma (perímetro parcial), sem relação com a fórmula da área."
  ],
  fonte: "Conteúdo: Geometria plana — área de figuras planas."
},
{
  id: "MAT210",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um terreno retangular de 40 m por 30 m será cercado com 3 voltas de arame. Quantos metros de arame serão necessários?",
  alternativas: ["140 m", "1.200 m", "3.600 m", "420 m"],
  correta: 3,
  porqueCerta: "Perímetro = 2 × (40 + 30) = 140 m. Com 3 voltas: 3 × 140 = 420 m.",
  porqueErradas: [
    "140 m é o arame de UMA volta só. Faltou multiplicar por 3.",
    "1.200 m é a ÁREA (40 × 30), não o comprimento da cerca.",
    "3.600 m é a área multiplicada por 3 — combina dois erros: usar área e ainda triplicar.",
    null
  ],
  fonte: "Conteúdo: Geometria plana — perímetro de figuras planas."
},
{
  id: "MAT211",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um triângulo retângulo tem catetos de 6 cm e 8 cm. Qual é a medida da hipotenusa?",
  alternativas: ["14 cm", "12 cm", "10 cm", "7 cm"],
  correta: 2,
  porqueCerta: "Teorema de Pitágoras: h² = 6² + 8² = 36 + 64 = 100, logo h = √100 = 10 cm.",
  porqueErradas: [
    "14 cm é a SOMA dos catetos (6 + 8). Hipotenusa não é soma — é raiz da soma dos quadrados.",
    "12 cm não corresponde ao cálculo (seria algo como √(64 + 80), sem sentido).",
    null,
    "7 cm é a média (14/2). Não há divisão por 2 no Teorema de Pitágoras."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT212",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um triângulo retângulo tem hipotenusa de 13 m e um dos catetos mede 5 m. Qual é a medida do outro cateto?",
  alternativas: ["12 m", "8 m", "18 m", "15,26 m"],
  correta: 0,
  porqueCerta: "Pitágoras: 13² = 5² + c² → 169 = 25 + c² → c² = 144 → c = 12 m.",
  porqueErradas: [
    null,
    "8 m é a DIFERENÇA (13 − 5). É preciso subtrair os QUADRADOS, não as medidas.",
    "18 m é a SOMA (13 + 5). O cateto é sempre MENOR que a hipotenusa.",
    "Aproximadamente 15,26 m seria √(169 + 64), isto é, SOMAR os quadrados — quando se procura um cateto, subtrai-se."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT213",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um lote retangular mede 9 m de frente por 12 m de fundo. Qual é a medida da diagonal desse lote?",
  alternativas: ["21 m", "15 m", "10,5 m", "3 m"],
  correta: 1,
  porqueCerta: "A diagonal é a hipotenusa do retângulo: d² = 9² + 12² = 81 + 144 = 225, logo d = 15 m.",
  porqueErradas: [
    "21 m é a soma (9 + 12). Diagonal não é soma de lados.",
    null,
    "10,5 m é a metade da soma (21/2). Não há divisão por 2 nesse cálculo.",
    "3 m é a diferença (12 − 9). É preciso somar os quadrados e extrair a raiz."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT214",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma escada de 5 m de comprimento está encostada em uma parede, com a base a 3 m da parede. A que altura do solo chega o topo da escada?",
  alternativas: ["8 m", "2 m", "5,83 m", "4 m"],
  correta: 3,
  porqueCerta: "A escada é a hipotenusa: 5² = 3² + h² → 25 = 9 + h² → h² = 16 → h = 4 m.",
  porqueErradas: [
    "8 m é a soma (5 + 3). A altura é sempre MENOR que o comprimento da escada.",
    "2 m é a diferença (5 − 3). É preciso operar com os quadrados.",
    "Aproximadamente 5,83 m seria √(25 + 9) = √34, isto é, somar os quadrados quando o correto é subtrair.",
    null
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT215",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Quantas diagonais possui um hexágono (polígono de 6 lados)?",
  alternativas: ["9", "6", "12", "18"],
  correta: 0,
  porqueCerta: "Número de diagonais = n(n − 3)/2 = 6 × 3/2 = 18/2 = 9.",
  porqueErradas: [
    null,
    "6 é o número de LADOS (e de vértices), não de diagonais.",
    "12 seria 6 × 2 — sem relação com a fórmula das diagonais.",
    "18 é o numerador (6 × 3) SEM dividir por 2 — cada diagonal foi contada duas vezes."
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: diagonais."
},
{
  id: "MAT216",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Qual é a soma das medidas dos ângulos internos de um pentágono (5 lados)?",
  alternativas: ["900°", "360°", "540°", "720°"],
  correta: 2,
  porqueCerta: "Soma = (n − 2) × 180° = (5 − 2) × 180° = 3 × 180° = 540°.",
  porqueErradas: [
    "900° seria 5 × 180°, sem subtrair os 2 triângulos (usa n em vez de n − 2).",
    "360° é a soma dos ângulos EXTERNOS de qualquer polígono convexo, não dos internos do pentágono.",
    null,
    "720° é a soma dos ângulos internos do HEXÁGONO (6 lados), não do pentágono."
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: ângulos internos."
},
{
  id: "MAT217",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Qual é a medida de cada ângulo interno de um octógono regular (8 lados iguais)?",
  alternativas: ["120°", "135°", "180°", "140°"],
  correta: 1,
  porqueCerta: "Soma = (8 − 2) × 180° = 1.080°. Dividindo pelos 8 ângulos iguais: 1.080°/8 = 135°.",
  porqueErradas: [
    "120° é o ângulo interno do HEXÁGONO regular (720°/6), não do octógono.",
    null,
    "180° é a medida de um ângulo raso — nenhum polígono convexo tem ângulo interno de 180°.",
    "140° seria 1.120°/8 — usa soma errada (equivale a (n − 1) × 160°, sem sentido)."
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: ângulos internos."
},
{
  id: "MAT218",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma praça circular tem raio de 7 m. Usando π = 3,14, qual é o comprimento da circunferência dessa praça?",
  alternativas: ["21,98 m", "153,86 m", "14 m", "43,96 m"],
  correta: 3,
  porqueCerta: "Comprimento = 2πR = 2 × 3,14 × 7 = 6,28 × 7 = 43,96 m.",
  porqueErradas: [
    "21,98 m é a METADE (πR). Faltou multiplicar por 2.",
    "153,86 m é a ÁREA (πR² = 3,14 × 49), não o comprimento.",
    "14 m é o DIÂMETRO (2 × 7), sem multiplicar por π.",
    null
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: comprimento."
},
{
  id: "MAT219",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um canteiro circular tem raio de 10 m. Usando π = 3,14, qual é a sua área?",
  alternativas: ["314 m²", "62,8 m²", "31,4 m²", "100 m²"],
  correta: 0,
  porqueCerta: "Área = πR² = 3,14 × 10² = 3,14 × 100 = 314 m².",
  porqueErradas: [
    null,
    "62,8 m² é o COMPRIMENTO da circunferência (2πR), não a área.",
    "31,4 m² seria πR (3,14 × 10) — faltou elevar o raio ao quadrado e multiplicar por 2? Na prática, erro duplo de fórmula.",
    "100 m² é R² sem multiplicar por π."
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: área."
},
{
  id: "MAT220",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma tampa circular de caixa d'água tem raio de 5 m. Usando π = 3,14, qual é a área da tampa?",
  alternativas: ["31,4 m²", "157 m²", "78,5 m²", "25 m²"],
  correta: 2,
  porqueCerta: "Área = πR² = 3,14 × 5² = 3,14 × 25 = 78,5 m².",
  porqueErradas: [
    "31,4 m² é o COMPRIMENTO (2πR = 2 × 3,14 × 5), não a área.",
    "157 m² é o DOBRO da área (2πR²) — erro de multiplicar por 2 a mais.",
    null,
    "25 m² é R² sem multiplicar por π."
  ],
  fonte: "Conteúdo: Geometria plana — circunferência e círculo: área."
},
{
  id: "MAT221",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma caixa cúbica de obra tem aresta de 4 m. Qual é o seu volume?",
  alternativas: ["16 m³", "64 m³", "96 m³", "24 m³"],
  correta: 1,
  porqueCerta: "Volume do cubo = aresta³ = 4³ = 4 × 4 × 4 = 64 m³.",
  porqueErradas: [
    "16 m³ é a área de UMA face (4²). Volume exige três dimensões, não duas.",
    null,
    "96 m³ é a ÁREA TOTAL (6 × 16). Confusão entre área e volume.",
    "24 m³ seria 4 × 6 — multiplica a aresta pelo número de faces, sem sentido para volume."
  ],
  fonte: "Conteúdo: Geometria espacial — volume do cubo."
},
{
  id: "MAT222",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma caixa d'água em forma de paralelepípedo mede 5 m de comprimento, 4 m de largura e 2 m de altura. Qual é o seu volume?",
  alternativas: ["11 m³", "76 m³", "20 m³", "40 m³"],
  correta: 3,
  porqueCerta: "Volume = comprimento × largura × altura = 5 × 4 × 2 = 40 m³.",
  porqueErradas: [
    "11 m³ é a SOMA (5 + 4 + 2). Volume se calcula multiplicando, não somando.",
    "76 m³ é a ÁREA TOTAL 2 × (20 + 10 + 8) — confusão entre área e volume.",
    "20 m³ é 5 × 4 — faltou multiplicar pela altura (só a área da base).",
    null
  ],
  fonte: "Conteúdo: Geometria espacial — volume do paralelepípedo."
},
{
  id: "MAT223",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um reservatório cilíndrico tem raio de 2 m e altura de 5 m. Usando π = 3,14, qual é o seu volume?",
  alternativas: ["62,8 m³", "31,4 m³", "125,6 m³", "251,2 m³"],
  correta: 0,
  porqueCerta: "Volume do cilindro = πR²h = 3,14 × 2² × 5 = 3,14 × 4 × 5 = 3,14 × 20 = 62,8 m³.",
  porqueErradas: [
    null,
    "31,4 m³ seria πRh (3,14 × 2 × 5) — faltou elevar o raio ao quadrado.",
    "125,6 m³ é o DOBRO do volume (erro de dobrar o resultado).",
    "251,2 m³ usa o DIÂMETRO (4 m) no lugar do raio: 3,14 × 16 × 5 — erro clássico."
  ],
  fonte: "Conteúdo: Geometria espacial — volume do cilindro."
},
{
  id: "MAT224",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma calha tem a forma de um prisma reto de 10 m de comprimento, cuja base é um triângulo de 6 m de base e 4 m de altura. Qual é o volume desse prisma?",
  alternativas: ["240 m³", "24 m³", "120 m³", "60 m³"],
  correta: 2,
  porqueCerta: "Área da base triangular = (6 × 4)/2 = 12 m². Volume = área da base × comprimento = 12 × 10 = 120 m³.",
  porqueErradas: [
    "240 m³ é 6 × 4 × 10 SEM dividir por 2 — esqueceu que a base é triangular.",
    "24 m³ é SÓ a área da base (6 × 4, sem /2 e sem × 10)? Na verdade 24 = 6 × 4: faltou dividir por 2 e multiplicar pelo comprimento.",
    null,
    "60 m³ é a metade do volume (120/2) — dividiu por 2 duas vezes."
  ],
  fonte: "Conteúdo: Geometria espacial — volume do prisma."
},
{
  id: "MAT225",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma rampa de 10 m de comprimento forma um ângulo de 30° com o solo. Qual é a altura da rampa em relação ao solo? (Use sen 30° = 1/2.)",
  alternativas: ["8,66 m", "5 m", "10 m", "2,5 m"],
  correta: 1,
  porqueCerta: "sen 30° = altura/hipotenusa → 1/2 = h/10 → h = 10/2 = 5 m.",
  porqueErradas: [
    "8,66 m usa o COSSENO de 30° (10 × 0,866) — essa é a projeção horizontal, não a altura.",
    null,
    "10 m confunde a rampa (hipotenusa) com a altura — ignora o ângulo.",
    "2,5 m seria 10/4 — divide por 4 em vez de usar sen 30° = 1/2."
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT226",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "O sol forma um ângulo de 45° com o solo e a sombra de um poste mede 12 m. Qual é a altura do poste? (Use tg 45° = 1.)",
  alternativas: ["6 m", "20,76 m", "8,49 m", "12 m"],
  correta: 3,
  porqueCerta: "tg 45° = altura/sombra → 1 = h/12 → h = 12 m. Com 45°, altura e sombra são iguais.",
  porqueErradas: [
    "6 m é a metade da sombra (12/2). Com tg 45° = 1, não há divisão por 2.",
    "Aproximadamente 20,76 m usa tg 60° (≈ 1,73 × 12) — ângulo errado.",
    "Aproximadamente 8,49 m seria 12 × sen 45° — confunde tangente com seno.",
    null
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
}
];
