/* Lote MAT Geo 2 — Geometria: perímetro, área, volumes e trigonometria (MAT298–MAT317). Estilo Fundep: 4 alternativas, 1 correta. 6 Pitágoras + 6 polígonos + 8 trigonometria. */
var BANCO_MAT_GEO_2 = [
{
  id: "MAT298",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um triângulo retângulo tem catetos de 20 cm e 21 cm. Qual é a medida da hipotenusa?",
  alternativas: ["41 cm", "20,5 cm", "29 cm", "61 cm"],
  correta: 2,
  porqueCerta: "Teorema de Pitágoras: h² = 20² + 21² = 400 + 441 = 841, logo h = √841 = 29 cm.",
  porqueErradas: [
    "41 cm é a SOMA dos catetos (20 + 21). Hipotenusa é a raiz da soma dos quadrados, não a soma.",
    "20,5 cm é a MÉDIA (41/2). Não há divisão por 2 no Teorema de Pitágoras.",
    null,
    "61 cm não resulta de nenhum cálculo correto."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT299",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um triângulo retângulo tem catetos de 7 m e 24 m. Qual é a medida da hipotenusa?",
  alternativas: ["25 m", "31 m", "15,5 m", "35 m"],
  correta: 0,
  porqueCerta: "Pitágoras: h² = 7² + 24² = 49 + 576 = 625, logo h = √625 = 25 m.",
  porqueErradas: [
    null,
    "31 m é a SOMA (7 + 24). É preciso somar os quadrados e extrair a raiz.",
    "15,5 m é a metade da soma (31/2), sem relação com a fórmula.",
    "35 m seria algo como √(625 + 600), sem sentido no problema."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT300",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um triângulo retângulo tem hipotenusa de 25 cm e um dos catetos mede 15 cm. Qual é a medida do outro cateto?",
  alternativas: ["10 cm", "40 cm", "5 cm", "20 cm"],
  correta: 3,
  porqueCerta: "Pitágoras: 25² = 15² + c² → 625 = 225 + c² → c² = 400 → c = 20 cm.",
  porqueErradas: [
    "10 cm é a DIFERENÇA (25 − 15). É preciso subtrair os QUADRADOS, não as medidas.",
    "40 cm é a SOMA (25 + 15). O cateto é sempre MENOR que a hipotenusa.",
    "5 cm seria algo como (25 − 15)/2 — combina dois erros: subtrair medidas e dividir.",
    null
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT301",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um triângulo retângulo tem hipotenusa de 17 m e um dos catetos mede 15 m. Qual é a medida do outro cateto?",
  alternativas: ["23 m", "8 m", "32 m", "2 m"],
  correta: 1,
  porqueCerta: "Pitágoras: 17² = 15² + c² → 289 = 225 + c² → c² = 64 → c = 8 m.",
  porqueErradas: [
    "23 m não corresponde ao cálculo (seria algo como √(289 + 240), sem sentido).",
    null,
    "32 m é a SOMA (17 + 15). O cateto nunca supera a hipotenusa.",
    "2 m é a DIFERENÇA (17 − 15). Deve-se operar com os quadrados: 289 − 225 = 64."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT302",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma escada de 29 m de comprimento está encostada em um galpão, com a base a 21 m da parede. A que altura do solo chega o topo da escada?",
  alternativas: ["50 m", "8 m", "20 m", "35,81 m"],
  correta: 2,
  porqueCerta: "A escada é a hipotenusa: 29² = 21² + h² → 841 = 441 + h² → h² = 400 → h = 20 m.",
  porqueErradas: [
    "50 m é a SOMA (29 + 21). A altura é sempre MENOR que a escada.",
    "8 m é a DIFERENÇA (29 − 21). É preciso subtrair os quadrados: 841 − 441 = 400.",
    null,
    "Aproximadamente 35,81 m seria √(841 + 441) = √1.282 — SOMAR os quadrados quando se procura um cateto é o erro clássico."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT303",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um triângulo retângulo tem catetos de 10 m e 24 m. Assinale a alternativa INCORRETA:",
  alternativas: ["A hipotenusa mede 34 m.", "A hipotenusa mede 26 m.", "Vale a relação 10² + 24² = 26².", "Cada cateto é menor que a hipotenusa."],
  correta: 0,
  porqueCerta: "10² + 24² = 100 + 576 = 676 e √676 = 26, não 34. Os 34 m são apenas a soma (10 + 24) — por isso essa afirmação é a INCORRETA.",
  porqueErradas: [
    null,
    "Afirmação CORRETA: a hipotenusa é 26 m, conforme o cálculo 100 + 576 = 676.",
    "Afirmação CORRETA: é exatamente o Teorema de Pitágoras aplicado (676 = 676).",
    "Afirmação CORRETA: em todo triângulo retângulo a hipotenusa é o maior lado."
  ],
  fonte: "Conteúdo: Geometria plana — Teorema de Pitágoras."
},
{
  id: "MAT304",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Quantas diagonais possui um octógono (polígono de 8 lados)?",
  alternativas: ["8", "16", "40", "20"],
  correta: 3,
  porqueCerta: "Número de diagonais = n(n − 3)/2 = 8 × 5/2 = 40/2 = 20.",
  porqueErradas: [
    "8 é o número de LADOS (e de vértices), não de diagonais.",
    "16 seria 8 × 2 — sem relação com a fórmula das diagonais.",
    "40 é o numerador (8 × 5) SEM dividir por 2 — cada diagonal foi contada duas vezes.",
    null
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: diagonais."
},
{
  id: "MAT305",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Qual é a soma das medidas dos ângulos internos de um heptágono (7 lados)?",
  alternativas: ["1.260°", "900°", "720°", "540°"],
  correta: 1,
  porqueCerta: "Soma = (n − 2) × 180° = (7 − 2) × 180° = 5 × 180° = 900°.",
  porqueErradas: [
    "1.260° é a soma do ENEÁGONO (9 lados), não do heptágono.",
    null,
    "720° é a soma do HEXÁGONO (6 lados), não do heptágono.",
    "540° é a soma do PENTÁGONO (5 lados), não do heptágono."
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: ângulos internos."
},
{
  id: "MAT306",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Qual é a medida de cada ângulo interno de um decágono regular (10 lados iguais)?",
  alternativas: ["140°", "150°", "144°", "180°"],
  correta: 2,
  porqueCerta: "Soma = (10 − 2) × 180° = 8 × 180° = 1.440°. Dividindo pelos 10 ângulos iguais: 1.440°/10 = 144°.",
  porqueErradas: [
    "140° não corresponde ao cálculo (1.440°/10 = 144°, não 140°).",
    "150° é o ângulo interno do DODECÁGONO regular (1.800°/12), não do decágono.",
    null,
    "180° é um ângulo raso — nenhum polígono convexo tem ângulo interno de 180°."
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: ângulos internos."
},
{
  id: "MAT307",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Quantas diagonais possui um decágono (polígono de 10 lados)?",
  alternativas: ["35", "10", "70", "20"],
  correta: 0,
  porqueCerta: "Número de diagonais = n(n − 3)/2 = 10 × 7/2 = 70/2 = 35.",
  porqueErradas: [
    null,
    "10 é o número de LADOS, não de diagonais.",
    "70 é o numerador (10 × 7) SEM dividir por 2 — cada diagonal contada duas vezes.",
    "20 é o número de diagonais do OCTÓGONO, não do decágono."
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: diagonais."
},
{
  id: "MAT308",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "A soma dos ângulos internos de um polígono é 720°. Assinale a alternativa INCORRETA:",
  alternativas: ["A soma corresponde a (6 − 2) × 180°.", "Trata-se de um pentágono (5 lados).", "Trata-se de um hexágono (6 lados).", "Cada ângulo interno do polígono regular correspondente mede 120°."],
  correta: 1,
  porqueCerta: "(n − 2) × 180° = 720° → n − 2 = 4 → n = 6: é um HEXÁGONO, não um pentágono (cuja soma é 540°). Logo, dizer que é um pentágono é a afirmação INCORRETA.",
  porqueErradas: [
    "Afirmação CORRETA: (6 − 2) × 180° = 4 × 180° = 720°.",
    null,
    "Afirmação CORRETA: n = 6, ou seja, hexágono.",
    "Afirmação CORRETA: 720°/6 = 120° para o hexágono regular."
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: ângulos internos."
},
{
  id: "MAT309",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Um polígono convexo possui 20 diagonais. Assinale a alternativa INCORRETA:",
  alternativas: ["O polígono tem 8 lados.", "Vale a conta 8 × 5 / 2 = 20.", "O número de lados é maior que o de um hexágono.", "O polígono é um pentágono (5 lados)."],
  correta: 3,
  porqueCerta: "n(n − 3)/2 = 20 → n² − 3n − 40 = 0 → n = 8 (octógono), pois 8 × 5/2 = 20. Dizer que é um pentágono (que tem só 5 diagonais) é a afirmação INCORRETA.",
  porqueErradas: [
    "Afirmação CORRETA: n = 8, o octógono.",
    "Afirmação CORRETA: 8 × 5/2 = 40/2 = 20.",
    "Afirmação CORRETA: 8 lados é mais que os 6 do hexágono.",
    null
  ],
  fonte: "Conteúdo: Geometria plana — polígonos: diagonais."
},
{
  id: "MAT310",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma escada de 20 m forma um ângulo de 60° com o solo. Qual é a altura do topo da escada? (Use sen 60° ≈ 0,866.)",
  alternativas: ["10 m", "17,32 m", "20 m", "34,64 m"],
  correta: 1,
  porqueCerta: "sen 60° = altura/hipotenusa → 0,866 = h/20 → h = 20 × 0,866 = 17,32 m.",
  porqueErradas: [
    "10 m usa o COSSENO de 60° (20 × 0,5) — essa é a projeção horizontal, não a altura.",
    null,
    "20 m confunde a escada (hipotenusa) com a altura — ignora o ângulo.",
    "34,64 m é o DOBRO da altura (2 × 17,32), sem sentido no problema."
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT311",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma rampa de 12 m forma um ângulo de 60° com o solo. Qual é a projeção horizontal da rampa (distância da base ao pé da altura)? (Use cos 60° = 1/2.)",
  alternativas: ["10,39 m", "12 m", "6 m", "3 m"],
  correta: 2,
  porqueCerta: "cos 60° = projeção/hipotenusa → 1/2 = p/12 → p = 12/2 = 6 m.",
  porqueErradas: [
    "Aproximadamente 10,39 m usa o SENO de 60° (12 × 0,866) — essa é a ALTURA, não a projeção horizontal.",
    "12 m confunde a rampa (hipotenusa) com a projeção — ignora o ângulo.",
    null,
    "3 m seria 12/4 — divide por 4 em vez de usar cos 60° = 1/2."
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT312",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "O sol forma um ângulo de 30° com o solo e a sombra de uma placa mede 9 m. Qual é a altura da placa? (Use tg 30° ≈ 0,577.)",
  alternativas: ["5,2 m", "9 m", "15,59 m", "4,5 m"],
  correta: 0,
  porqueCerta: "tg 30° = altura/sombra → 0,577 = h/9 → h = 9 × 0,577 ≈ 5,2 m (ou 3√3 m).",
  porqueErradas: [
    null,
    "9 m iguala altura e sombra — isso só vale com tg 45° = 1, não com 30°.",
    "Aproximadamente 15,59 m usa a tg 60° (≈ 1,73 × 9) — ângulo errado.",
    "4,5 m é a metade da sombra (9/2). Com tg 30° ≈ 0,577, não há divisão por 2."
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT313",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "O sol forma um ângulo de 60° com o solo e um totem de 15 m projeta uma sombra no chão. Quanto mede a sombra? (Use tg 60° ≈ 1,73.)",
  alternativas: ["15 m", "25,95 m", "5 m", "8,66 m"],
  correta: 3,
  porqueCerta: "tg 60° = altura/sombra → 1,73 = 15/s → s = 15/1,73 ≈ 8,66 m (ou 5√3 m).",
  porqueErradas: [
    "15 m iguala sombra e altura — isso só vale com 45°, não com 60°.",
    "Aproximadamente 25,95 m MULTIPLICA (15 × 1,73) em vez de dividir — inverte a fórmula.",
    "5 m seria 15/3 — divide por 3 sem relação com tg 60°.",
    null
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT314",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma escada de 10 m forma um ângulo de 45° com o solo. Qual é a altura do topo da escada? (Use sen 45° ≈ 0,707.)",
  alternativas: ["5 m", "10 m", "7,07 m", "14,14 m"],
  correta: 2,
  porqueCerta: "sen 45° = altura/hipotenusa → 0,707 = h/10 → h = 10 × 0,707 = 7,07 m (ou 5√2 m).",
  porqueErradas: [
    "5 m é a metade da escada (10/2). Com sen 45° ≈ 0,707, não há divisão por 2.",
    "10 m confunde a escada (hipotenusa) com a altura.",
    null,
    "Aproximadamente 14,14 m seria 10/0,707 — inverte a fórmula (divide em vez de multiplicar)."
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT315",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "O sol forma um ângulo de 60° com o solo e a sombra de uma árvore mede 10 m. Qual é a altura da árvore? (Use tg 60° ≈ 1,73.)",
  alternativas: ["17,32 m", "10 m", "5,77 m", "20 m"],
  correta: 0,
  porqueCerta: "tg 60° = altura/sombra → 1,73 = h/10 → h = 10 × 1,73 = 17,3 m (ou 10√3 ≈ 17,32 m).",
  porqueErradas: [
    null,
    "10 m iguala altura e sombra — isso só vale com tg 45° = 1.",
    "Aproximadamente 5,77 m DIVIDE (10/1,73) em vez de multiplicar — inverte a fórmula.",
    "20 m é o dobro da sombra (10 × 2), sem relação com tg 60°."
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT316",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "Uma tirolesa de 40 m forma um ângulo de 30° com a horizontal. Qual é a distância horizontal percorrida? (Use cos 30° ≈ 0,866.)",
  alternativas: ["20 m", "40 m", "17,32 m", "34,64 m"],
  correta: 3,
  porqueCerta: "cos 30° = horizontal/comprimento → 0,866 = d/40 → d = 40 × 0,866 = 34,64 m (ou 20√3 m).",
  porqueErradas: [
    "20 m usa o SENO de 30° (40 × 0,5) — essa é a queda vertical, não a distância horizontal.",
    "40 m confunde o cabo (hipotenusa) com a projeção — ignora o ângulo.",
    "Aproximadamente 17,32 m seria 20 × 0,866 — usa metade do cabo, sem sentido.",
    null
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
},
{
  id: "MAT317",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Geometria: perímetro, área, volumes e trigonometria",
  enunciado: "O sol forma um ângulo de 45° com o solo e a sombra de um poste mede 20 m. Assinale a alternativa INCORRETA:",
  alternativas: ["A altura do poste é igual à sombra: 20 m.", "A altura do poste é 10 m, metade da sombra.", "Vale a relação tg 45° = altura/20.", "Com 45°, altura e sombra têm a mesma medida."],
  correta: 1,
  porqueCerta: "tg 45° = 1, logo altura/sombra = 1 → altura = 20 m, não 10 m. A metade da sombra não entra no cálculo — por isso essa afirmação é a INCORRETA.",
  porqueErradas: [
    "Afirmação CORRETA: com tg 45° = 1, altura = sombra = 20 m.",
    null,
    "Afirmação CORRETA: é a definição de tangente (cateto oposto/cateto adjacente).",
    "Afirmação CORRETA: consequência direta de tg 45° = 1."
  ],
  fonte: "Conteúdo: Trigonometria no triângulo retângulo — seno, cosseno e tangente."
}
];
