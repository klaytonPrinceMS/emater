/* Lote MAT Equações 3 — Equações, sistemas e funções (8 questões: MAT280–MAT287). Cotas: 4 expressões algébricas + 2 produtos notáveis/fatoração + 2 sistemas lineares. Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_EQUACOES_3 = [
{
  id: "MAT280",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O valor numérico da expressão E = 3x² − 2xy + y² para x = 2 e y = −1 é:",
  alternativas: ["9", "13", "17", "21"],
  correta: 2,
  porqueCerta: "Substituindo: 3 × 2² − 2 × 2 × (−1) + (−1)² = 3 × 4 + 4 + 1 = 12 + 4 + 1 = 17.",
  porqueErradas: [
    "9 surge de errar o sinal do termo do meio: 12 − 4 + 1 = 9, mas −2 × 2 × (−1) = +4, não −4.",
    "13 não corresponde a nenhuma conta correta: 12 + 4 + 1 = 17.",
    null,
    "21 somaria um termo a mais (por exemplo, contar o termo do meio duas vezes)."
  ],
  fonte: "Conteúdo: Expressões algébricas — valor numérico."
},
{
  id: "MAT281",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Simplificando a expressão 5(2x − 3) − 2(x + 4) + x, obtém-se:",
  alternativas: ["9x − 23", "9x − 7", "7x − 23", "8x − 11"],
  correta: 0,
  porqueCerta: "Distribuindo: 10x − 15 − 2x − 8 + x. Juntando os termos em x: 10x − 2x + x = 9x. Juntando os constantes: −15 − 8 = −23. Resultado: 9x − 23.",
  porqueErradas: [
    null,
    "9x − 7 erra a conta das constantes (−15 + 8 em vez de −15 − 8).",
    "7x − 23 subtrai o x solto em vez de somar (10 − 2 − 1 em vez de 10 − 2 + 1).",
    "8x − 11 não segue da distribuição correta dos parênteses."
  ],
  fonte: "Conteúdo: Expressões algébricas — simplificação de termos semelhantes."
},
{
  id: "MAT282",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Seja E = 2(a + b) − (a − b). Para a = 3 e b = −2, assinale a alternativa INCORRETA:",
  alternativas: ["A forma simplificada de E é a + 3b.", "Substituindo sem simplificar antes, obtém-se 2 × 1 − 5 = −3.", "O valor numérico de E nessas condições é −3.", "O valor numérico de E nessas condições é 3."],
  correta: 3,
  porqueCerta: "As três primeiras estão certas: E = 2a + 2b − a + b = a + 3b, e com a = 3 e b = −2, E = 3 + 3 × (−2) = −3 (direto: a + b = 1 e a − b = 5, logo 2 × 1 − 5 = −3). A última troca o sinal do resultado, então é a INCORRETA.",
  porqueErradas: [
    "Está CORRETA: 2a + 2b − a + b = a + 3b.",
    "Está CORRETA: a + b = 3 + (−2) = 1 e a − b = 3 − (−2) = 5, logo E = 2 − 5 = −3.",
    "Está CORRETA: 3 + 3 × (−2) = 3 − 6 = −3.",
    null
  ],
  fonte: "Conteúdo: Expressões algébricas — simplificação e valor numérico."
},
{
  id: "MAT283",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A expressão (12x³ − 8x² + 4x) ÷ (4x), com x ≠ 0, simplificada é igual a:",
  alternativas: ["3x³ − 2x² + 1", "3x² − 2x + 1", "3x² − 2x + 4x", "12x² − 8x + 4"],
  correta: 1,
  porqueCerta: "Dividindo termo a termo: 12x³ ÷ 4x = 3x², −8x² ÷ 4x = −2x e 4x ÷ 4x = 1. Resultado: 3x² − 2x + 1.",
  porqueErradas: [
    "Mantém os expoentes originais sem dividir por x (esquece que x³ ÷ x = x²).",
    null,
    "Não efetua a última divisão (4x ÷ 4x = 1, não 4x).",
    "Apenas remove os parênteses sem dividir os coeficientes nem os expoentes."
  ],
  fonte: "Conteúdo: Expressões algébricas — divisão de polinômio por monômio."
},
{
  id: "MAT284",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Desenvolvendo os produtos notáveis, (x + 5)² − (x − 5)² é igual a:",
  alternativas: ["20x", "50", "10x + 25", "2x² + 50"],
  correta: 0,
  porqueCerta: "(x + 5)² = x² + 10x + 25 e (x − 5)² = x² − 10x + 25. Subtraindo: (x² − x²) + (10x + 10x) + (25 − 25) = 20x.",
  porqueErradas: [
    null,
    "50 seria a SOMA das constantes (25 + 25), mas a questão pede a DIFERENÇA, que zera as constantes.",
    "10x + 25 desenvolve só o primeiro quadrado e ignora o segundo.",
    "2x² + 50 é a SOMA dos dois quadrados, não a diferença."
  ],
  fonte: "Conteúdo: Produtos notáveis — quadrado da soma e da diferença."
},
{
  id: "MAT285",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A forma fatorada de 9x² − 16 é:",
  alternativas: ["(3x − 4)²", "(9x − 4)(9x + 4)", "(3x − 4)(3x + 4)", "(x − 4)(9x + 4)"],
  correta: 2,
  porqueCerta: "É diferença de quadrados: 9x² = (3x)² e 16 = 4², logo 9x² − 16 = (3x − 4)(3x + 4). Conferindo: (3x − 4)(3x + 4) = 9x² + 12x − 12x − 16 = 9x² − 16.",
  porqueErradas: [
    "(3x − 4)² = 9x² − 24x + 16, que tem termo em x e constante +16, não −16.",
    "(9x − 4)(9x + 4) = 81x² − 16, com coeficiente 81, não 9.",
    null,
    "(x − 4)(9x + 4) = 9x² − 32x − 16, que tem termo em x a mais."
  ],
  fonte: "Conteúdo: Fatoração — diferença de quadrados."
},
{
  id: "MAT286",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre o sistema {x + y = 15; 2x − y = 9}, assinale a alternativa INCORRETA:",
  alternativas: ["Somando as duas equações, obtém-se 3x = 24.", "O par x = 7 e y = 8 é a solução do sistema.", "O valor de y na solução é 7.", "O par x = 8 e y = 7 satisfaz as duas equações."],
  correta: 1,
  porqueCerta: "Somando: (x + 2x) + (y − y) = 15 + 9 → 3x = 24 → x = 8 e y = 15 − 8 = 7 (confere: 2 × 8 − 7 = 9). Logo x = 7 e y = 8 NÃO é solução — é a INCORRETA.",
  porqueErradas: [
    "Está CORRETA: os termos em y se cancelam (+y − y = 0) e 15 + 9 = 24.",
    null,
    "Está CORRETA: y = 15 − 8 = 7, e 2 × 8 − 7 = 9 confirma.",
    "Está CORRETA: 8 + 7 = 15 e 16 − 7 = 9."
  ],
  fonte: "Conteúdo: Sistemas lineares 2×2 — método da adição."
},
{
  id: "MAT287",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Na cantina, 2 pastéis + 1 suco custam R$ 14,00 e 1 pastel + 2 sucos custam R$ 13,00. O preço de 1 pastel é:",
  alternativas: ["R$ 4,00", "R$ 4,50", "R$ 6,00", "R$ 5,00"],
  correta: 3,
  porqueCerta: "Com p = pastel e s = suco: 2p + s = 14 e p + 2s = 13. Da 1ª, s = 14 − 2p. Substituindo: p + 2(14 − 2p) = 13 → p + 28 − 4p = 13 → −3p = −15 → p = 5. Conferindo: s = 4, e 2 × 5 + 4 = 14 e 5 + 8 = 13.",
  porqueErradas: [
    "R$ 4,00 é o preço do SUCO (s = 14 − 2 × 5 = 4), não do pastel.",
    "R$ 4,50 não satisfaz: 2 × 4,50 + s = 14 daria s = 5, mas 4,50 + 10 = 14,50, não 13.",
    "R$ 6,00 daria 12 + s = 14 (s = 2), mas 6 + 4 = 10, não 13.",
    null
  ],
  fonte: "Conteúdo: Sistemas lineares 2×2 aplicados a problemas."
}
];
