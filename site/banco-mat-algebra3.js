/* Reforço MAT — expressões algébricas e produtos notáveis/fatoração (8 questões MAT258-MAT265). */
var BANCO_MAT_ALGEBRA_3 = [
{
  id: "MAT258",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O valor numérico da expressão 3x² − 2x + 5 para x = 2 é:",
  alternativas: ["9", "11", "13", "17"],
  correta: 2,
  porqueCerta: "Substituindo x = 2: 3·(2²) − 2·(2) + 5 = 3·4 − 4 + 5 = 12 − 4 + 5 = 13.",
  porqueErradas: [
    "9 resultaria de erros na ordem das operações (somar antes de multiplicar).",
    "11 seria o valor se o termo independente fosse 3, não 5.",
    null,
    "17 ignora a subtração do termo −2x."
  ],
  fonte: "Conteúdo: Expressões algébricas; valor numérico."
},
{
  id: "MAT259",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Simplificando a expressão (4x³ − 2x² + 6x) ÷ (2x), com x ≠ 0, obtém-se:",
  alternativas: ["2x² − x + 3", "2x³ − x² + 3x", "4x² − 2x + 6", "2x² + x − 3"],
  correta: 0,
  porqueCerta: "Divide-se cada termo por 2x: 4x³/2x = 2x²; −2x²/2x = −x; 6x/2x = 3. Resultado: 2x² − x + 3.",
  porqueErradas: [
    null,
    "Mantém os expoentes originais, sem dividir as potências de x.",
    "Esquece de dividir por 2x (só removeu o divisor).",
    "Troca os sinais dos dois últimos termos."
  ],
  fonte: "Conteúdo: Expressões algébricas; operações com polinômios."
},
{
  id: "MAT260",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Um almoxarifado tem x caixas grandes com 12 resmas cada e mais 8 resmas avulsas. A expressão que representa o total de resmas é:",
  alternativas: ["12x + 8", "12(x + 8)", "20x", "12x · 8"],
  correta: 0,
  porqueCerta: "Cada caixa tem 12 resmas (12x) e somam-se as 8 avulsas: 12x + 8. A distributiva 12(x+8) multiplicaria as 8 avulsas por 12, o que está errado.",
  porqueErradas: [
    null,
    "12(x + 8) = 12x + 96: multiplica indevidamente as resmas avulsas.",
    "20x soma 12 + 8 como se fossem termos semelhantes.",
    "Multiplica em vez de somar as partes."
  ],
  fonte: "Conteúdo: Expressões algébricas; modelagem."
},
{
  id: "MAT261",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O perímetro de um retângulo de lados (x + 3) e (2x − 1) é expresso por:",
  alternativas: ["3x + 2", "6x + 4", "6x + 2", "2x² + 5x − 3"],
  correta: 1,
  porqueCerta: "Perímetro = 2·[(x+3) + (2x−1)] = 2·(3x+2) = 6x + 4.",
  porqueErradas: [
    "3x + 2 é a soma de apenas dois lados (semiperímetro), não o perímetro.",
    null,
    "6x + 2 erra a distributiva do termo independente (2·2 = 4, não 2).",
    "2x² + 5x − 3 é a ÁREA (produto dos lados), não o perímetro."
  ],
  fonte: "Conteúdo: Expressões algébricas; perímetro."
},
{
  id: "MAT262",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Desenvolvendo o produto notável (x + 5)², obtém-se:",
  alternativas: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25", "2x + 10"],
  correta: 1,
  porqueCerta: "Quadrado da soma: (primeiro)² + 2·(primeiro)·(segundo) + (segundo)² = x² + 10x + 25.",
  porqueErradas: [
    "x² + 25 esquece o termo do meio (2·x·5 = 10x). Erro clássico.",
    null,
    "x² + 5x + 25 erra o coeficiente do termo do meio (5x em vez de 10x).",
    "2x + 10 distribui o expoente como se fosse multiplicação."
  ],
  fonte: "Conteúdo: Produtos notáveis; quadrado da soma."
},
{
  id: "MAT263",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Desenvolvendo (2x − 3)², obtém-se:",
  alternativas: ["4x² − 9", "4x² − 12x + 9", "4x² + 12x + 9", "2x² − 6x + 9"],
  correta: 1,
  porqueCerta: "Quadrado da diferença: (2x)² − 2·(2x)·(3) + 3² = 4x² − 12x + 9.",
  porqueErradas: [
    "4x² − 9 omite o termo do meio (−12x).",
    null,
    "Troca o sinal do termo do meio (diferença gera −12x, não +12x).",
    "Não eleva os coeficientes ao quadrado (2x)² = 4x²."
  ],
  fonte: "Conteúdo: Produtos notáveis; quadrado da diferença."
},
{
  id: "MAT264",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Fatorando 6x² + 9x, obtém-se:",
  alternativas: ["3x(2x + 3)", "3(2x² + 3x)", "x(6x + 9)", "6x(x + 9)"],
  correta: 0,
  porqueCerta: "O fator comum é 3x (máximo divisor de 6 e 9 com menor expoente de x): 3x·(2x) + 3x·(3) = 3x(2x + 3).",
  porqueErradas: [
    null,
    "3(2x² + 3x) ainda tem fator x comum dentro dos parênteses: fatoração incompleta.",
    "x(6x + 9) não extrai o fator numérico 3: incompleta.",
    "6x(x + 9) altera o termo independente (6x·9 = 54x ≠ 9x)."
  ],
  fonte: "Conteúdo: Fatoração; fator comum."
},
{
  id: "MAT265",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A forma fatorada de x² − 49 é:",
  alternativas: ["(x − 7)²", "(x + 7)(x − 7)", "(x − 49)(x + 1)", "Não é fatorável"],
  correta: 1,
  porqueCerta: "Diferença de quadrados: a² − b² = (a+b)(a−b). Com a = x e b = 7: (x+7)(x−7).",
  porqueErradas: [
    "(x − 7)² = x² − 14x + 49, que tem termo do meio: não equivale.",
    null,
    "(x − 49)(x + 1) = x² − 48x − 49: produto errado.",
    "É fatorável como diferença de quadrados."
  ],
  fonte: "Conteúdo: Fatoração; diferença de quadrados."
}
];
