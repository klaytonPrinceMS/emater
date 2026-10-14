/* Lote MAT Álgebra 2 — Equações, sistemas e funções: expressões algébricas + produtos notáveis/fatoração (10 questões: MAT227–MAT236). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_ALGEBRA_2 = [
{
  id: "MAT227",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O valor numérico da expressão 3x² − 2x + 5 para x = −2 é:",
  alternativas: ["13", "21", "9", "41"],
  correta: 1,
  porqueCerta: "Substituindo x = −2: 3 × (−2)² − 2 × (−2) + 5 = 3 × 4 + 4 + 5 = 12 + 4 + 5 = 21.",
  porqueErradas: [
    "13 resulta de errar o sinal: 12 − 4 + 5, tratando −2 × (−2) como −4.",
    null,
    "9 resulta de calcular 3 × (−2)² como −12 em vez de +12.",
    "41 resulta de calcular (−2)² como −8 ou somar errado: não confere com 12 + 4 + 5."
  ],
  fonte: "Conteúdo: Expressões algébricas — valor numérico (Álgebra — nível médio)."
},
{
  id: "MAT228",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Efetuando (5x³ − 2x² + x − 7) + (−2x³ + 4x² − 3x + 2), obtém-se:",
  alternativas: ["3x³ + 2x² − 2x − 5", "3x³ − 6x² − 2x − 5", "7x³ + 2x² + 4x − 9", "3x³ + 2x² + 4x − 5"],
  correta: 0,
  porqueCerta: "Somando termo a termo: 5x³ − 2x³ = 3x³; −2x² + 4x² = 2x²; x − 3x = −2x; −7 + 2 = −5. Logo, 3x³ + 2x² − 2x − 5.",
  porqueErradas: [
    null,
    "Erra o coeficiente de x²: −2 − 4 = −6 em vez de −2 + 4 = 2.",
    "Soma em vez de somar com sinais: 5 + 2 = 7 e mantém sinais errados nos demais termos.",
    "Erra os sinais de x e da constante na segunda parcela: mantém +4x em vez de −2x."
  ],
  fonte: "Conteúdo: Operações com polinômios — adição (Álgebra — nível médio)."
},
{
  id: "MAT229",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O valor da expressão 2a² − 3ab + b² para a = 3 e b = −1 é:",
  alternativas: ["10", "8", "2", "28"],
  correta: 3,
  porqueCerta: "2 × 3² − 3 × 3 × (−1) + (−1)² = 2 × 9 + 9 + 1 = 18 + 9 + 1 = 28.",
  porqueErradas: [
    "10 resulta de errar o sinal do termo do meio: 18 − 9 + 1, tratando −3 × 3 × (−1) como −9.",
    "8 resulta de calcular 2 × 3² como 12 em vez de 18.",
    "2 resulta de somar 18 − 9 − 7, com erros de sinal e de (−1)².",
    null
  ],
  fonte: "Conteúdo: Expressões algébricas — valor numérico com duas variáveis."
},
{
  id: "MAT230",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Desenvolvendo o produto 3x(x² − 2x + 4), obtém-se:",
  alternativas: ["3x³ − 2x + 4", "3x² − 6x + 12", "3x³ − 6x² + 12x", "3x³ − 6x² + 4"],
  correta: 2,
  porqueCerta: "Aplicando a distributiva: 3x × x² = 3x³; 3x × (−2x) = −6x²; 3x × 4 = 12x. Logo, 3x³ − 6x² + 12x.",
  porqueErradas: [
    "Esquece de multiplicar os dois últimos termos por 3x, mantendo −2x e 4 inalterados.",
    "Multiplica pelo expoente errado: 3x × x² daria 3x², quando o correto é somar expoentes (1 + 2 = 3).",
    null,
    "Erra o último termo: 3x × 4 = 12x, não 4 sozinho."
  ],
  fonte: "Conteúdo: Multiplicação de monômio por polinômio (Álgebra — nível médio)."
},
{
  id: "MAT231",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Simplificando a expressão 5(2m − 3n) − (m − 4n), obtém-se:",
  alternativas: ["9m − 11n", "9m − 19n", "11m − 11n", "10m − 15n − m − 4n"],
  correta: 0,
  porqueCerta: "10m − 15n − m + 4n = (10m − m) + (−15n + 4n) = 9m − 11n. Atenção ao jogo de sinal: menos com menos dá mais (−(−4n) = +4n).",
  porqueErradas: [
    null,
    "Erra o jogo de sinal: mantém −4n em vez de +4n, dando −15n − 4n = −19n.",
    "Soma 10m + m em vez de 10m − m.",
    "Apresenta a expressão sem reduzir os termos semelhantes — não é a forma simplificada."
  ],
  fonte: "Conteúdo: Expressões algébricas — simplificação e redução de termos semelhantes."
},
{
  id: "MAT232",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Desenvolvendo o quadrado da soma (x + 5)², obtém-se:",
  alternativas: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25", "2x + 10"],
  correta: 1,
  porqueCerta: "Quadrado da soma: (x + 5)² = x² + 2 × x × 5 + 5² = x² + 10x + 25. Conferindo com a distributiva: (x + 5)(x + 5) = x² + 5x + 5x + 25.",
  porqueErradas: [
    "Esquece o termo do meio (2 × x × 5); esse é o erro mais comum em produtos notáveis.",
    null,
    "Usa x × 5 = 5x uma única vez, mas o termo do meio é DOBRADO: 2 × 5x = 10x.",
    "Confunde quadrado da soma com dobro da soma: 2(x + 5) = 2x + 10."
  ],
  fonte: "Conteúdo: Produtos notáveis — quadrado da soma."
},
{
  id: "MAT233",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O desenvolvimento de (2a − 3b)² é:",
  alternativas: ["4a² − 9b²", "4a² + 9b²", "2a² − 12ab + 3b²", "4a² − 12ab + 9b²"],
  correta: 3,
  porqueCerta: "Quadrado da diferença: (2a)² − 2 × 2a × 3b + (3b)² = 4a² − 12ab + 9b².",
  porqueErradas: [
    "Esquece o termo do meio (−12ab) e erra o sinal do último termo.",
    "Troca o sinal do termo do meio e ignora os coeficientes 2 e 3 elevados ao quadrado.",
    "Não eleva os coeficientes ao quadrado: (2a)² = 4a² e (3b)² = 9b², não 2a² e 3b².",
    null
  ],
  fonte: "Conteúdo: Produtos notáveis — quadrado da diferença."
},
{
  id: "MAT234",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O produto (x + 7)(x − 7) é igual a:",
  alternativas: ["x² + 14x − 49", "(x + 7)²", "x² − 49", "x² − 14x + 49"],
  correta: 2,
  porqueCerta: "Produto da soma pela diferença: (x + 7)(x − 7) = x² − 7² = x² − 49. Os termos do meio (+7x − 7x) se cancelam.",
  porqueErradas: [
    "Confunde com o quadrado da soma (x + 7)² = x² + 14x + 49, com sinais trocados.",
    "Trata como quadrado da soma, mantendo o termo do meio — aqui ele se cancela.",
    null,
    "Trata como quadrado da diferença (x − 7)² = x² − 14x + 49, que é outro produto notável."
  ],
  fonte: "Conteúdo: Produtos notáveis — produto da soma pela diferença."
},
{
  id: "MAT235",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A forma fatorada de 6x³ + 9x², colocando o fator comum em evidência, é:",
  alternativas: ["3x²(2x + 3)", "3x(x + 3)", "x²(6x + 9)", "6x²(x + 3)"],
  correta: 0,
  porqueCerta: "O MDC entre 6x³ e 9x² é 3x². Dividindo: 6x³ ÷ 3x² = 2x e 9x² ÷ 3x² = 3. Logo, 3x²(2x + 3). Conferindo: 3x² × 2x + 3x² × 3 = 6x³ + 9x².",
  porqueErradas: [
    null,
    "Coloca apenas 3x em evidência e erra a divisão: 6x³ ÷ 3x = 2x², não x; e 9x² ÷ 3x = 3x, não 3.",
    "Coloca só x² em evidência, sem extrair o fator numérico comum 3 — a fatoração fica incompleta.",
    "Erra o segundo termo: 3x² × 3 = 9x², mas 6x² × 3 = 18x², que não confere com o original."
  ],
  fonte: "Conteúdo: Fatoração — fator comum em evidência."
},
{
  id: "MAT236",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Fatorando o trinômio m² + 7m + 12, obtém-se:",
  alternativas: ["(m + 6)(m + 1)", "(m + 3)(m + 4)", "(m − 3)(m − 4)", "(m + 12)(m + 1)"],
  correta: 1,
  porqueCerta: "Buscam-se dois números com produto 12 e soma 7: 3 e 4. Logo, m² + 7m + 12 = (m + 3)(m + 4). Conferindo: m² + 4m + 3m + 12 = m² + 7m + 12.",
  porqueErradas: [
    "6 × 1 = 6, não 12 — o produto não confere.",
    null,
    "Dá soma −7 e produto 12, ou seja, fatora m² − 7m + 12, com sinais trocados.",
    "O produto daria 12, mas a soma seria 13, não 7."
  ],
  fonte: "Conteúdo: Fatoração — trinômio do 2º grau (soma e produto)."
}
];
