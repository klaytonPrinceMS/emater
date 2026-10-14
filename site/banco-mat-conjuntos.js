/* Lote MAT — Conjuntos numéricos e operações fundamentais (10 questões inéditas). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_CONJUNTOS = [
{
  id: "MAT237",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Um escritório numerou caixas com os códigos 1.233, 1.235, 1.230 e 1.232. Qual desses números é divisível por 2, por 3 e por 5 ao mesmo tempo?",
  alternativas: ["1.233", "1.235", "1.230", "1.232"],
  correta: 2,
  porqueCerta: "1.230 termina em 0 (divisível por 2 e por 5) e a soma dos algarismos 1+2+3+0 = 6 é múltiplo de 3, logo é divisível por 3 também. Portanto é múltiplo comum de 2, 3 e 5.",
  porqueErradas: [
    "1.233 é ímpar, logo não é divisível por 2 nem por 5 (apesar de 1+2+3+3 = 9 ser múltiplo de 3).",
    "1.235 termina em 5 (divisível por 5), mas 1+2+3+5 = 11 não é múltiplo de 3 e é ímpar (não divisível por 2).",
    null,
    "1.232 é par (divisível por 2), mas termina em 2 (não divisível por 5) e 1+2+3+2 = 8 não é múltiplo de 3."
  ],
  fonte: "Conteúdo: Divisibilidade; múltiplos e divisores."
},
{
  id: "MAT238",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Quantos divisores positivos possui o número 36?",
  alternativas: ["6", "9", "8", "12"],
  correta: 1,
  porqueCerta: "Fatorando: 36 = 2² × 3². O número de divisores é (2+1) × (2+1) = 3 × 3 = 9. Conferindo: 1, 2, 3, 4, 6, 9, 12, 18 e 36.",
  porqueErradas: [
    "6 conta apenas parte dos divisores (faltam 9, 12 e 18, por exemplo).",
    null,
    "8 erra a contagem: a lista completa tem 9 elementos, não 8.",
    "12 confunde com os divisores de 60 ou aplica a fórmula errada (somar expoentes em vez de somar 1 e multiplicar)."
  ],
  fonte: "Conteúdo: Divisores; decomposição em fatores primos."
},
{
  id: "MAT239",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Assinale a alternativa que apresenta um número primo:",
  alternativas: ["29", "21", "27", "33"],
  correta: 0,
  porqueCerta: "29 só é divisível por 1 e por 29, logo é primo. É o único da lista com exatamente dois divisores positivos.",
  porqueErradas: [
    null,
    "21 = 3 × 7, portanto é composto, não primo.",
    "27 = 3 × 3 × 3 (3³), portanto é composto.",
    "33 = 3 × 11, portanto é composto."
  ],
  fonte: "Conteúdo: Números primos; divisores."
},
{
  id: "MAT240",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Dois ônibus de linhas rurais partem juntos do terminal às 7h. Um repete a partida a cada 12 minutos e o outro, a cada 18 minutos. Após a partida conjunta, depois de quantos minutos eles voltarão a partir juntos?",
  alternativas: ["24 minutos", "30 minutos", "54 minutos", "36 minutos"],
  correta: 3,
  porqueCerta: "É o MMC(12, 18). Fatorando: 12 = 2² × 3 e 18 = 2 × 3². MMC = 2² × 3² = 4 × 9 = 36 minutos.",
  porqueErradas: [
    "24 é múltiplo de 12, mas não de 18 (24/18 não é exato).",
    "30 não é múltiplo nem de 12 nem de 18.",
    "54 é múltiplo de 18, mas não de 12 (54/12 = 4,5). Erro típico: tomar um múltiplo comum qualquer em vez do MENOR.",
    null
  ],
  fonte: "Conteúdo: Múltiplos; mínimo múltiplo comum (MMC)."
},
{
  id: "MAT241",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Um almoxarifado tem 48 cadernos e 60 canetas para montar kits idênticos, sem sobras, com o MAIOR número possível de kits. Quantos kits serão montados?",
  alternativas: ["6 kits", "10 kits", "12 kits", "15 kits"],
  correta: 2,
  porqueCerta: "É o MDC(48, 60). Fatorando: 48 = 2⁴ × 3 e 60 = 2² × 3 × 5. MDC = 2² × 3 = 12. Cada kit terá 48/12 = 4 cadernos e 60/12 = 5 canetas, sem sobras.",
  porqueErradas: [
    "6 é um divisor comum, mas não o MAIOR (12 também divide ambos e é maior).",
    "10 não divide 48 (48/10 não é exato), logo haveria sobra.",
    null,
    "15 não divide 48 (48/15 não é exato), logo haveria sobra."
  ],
  fonte: "Conteúdo: Divisores; máximo divisor comum (MDC)."
},
{
  id: "MAT242",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Sobre os conjuntos numéricos, assinale a alternativa correta:",
  alternativas: ["Todo número natural é também inteiro, e todo inteiro é também racional.", "Todo número racional é também inteiro.", "Todo número irracional é também racional.", "O número 0,333... (dízima periódica) é irracional."],
  correta: 0,
  porqueCerta: "Vale a inclusão N ⊂ Z ⊂ Q: os naturais (0, 1, 2, ...) estão contidos nos inteiros, e todo inteiro pode ser escrito como fração (ex.: 5 = 5/1), logo é racional.",
  porqueErradas: [
    null,
    "Falso: 1/2 é racional, mas não é inteiro. A inclusão é no sentido contrário (Z ⊂ Q).",
    "Falso: por definição, racionais e irracionais são disjuntos — nenhum irracional (como √2 ou π) pode ser escrito como fração de inteiros.",
    "Falso: dízima PERIÓDICA é racional (0,333... = 1/3). Irracionais têm expansão decimal infinita e NÃO periódica."
  ],
  fonte: "Conteúdo: Conjuntos numéricos (naturais, inteiros, racionais e irracionais)."
},
{
  id: "MAT243",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor da expressão 20 − 3 × 4 + 12 ÷ 2 é:",
  alternativas: ["12", "14", "16", "22"],
  correta: 1,
  porqueCerta: "Pela ordem das operações, primeiro multiplicação e divisão: 3 × 4 = 12 e 12 ÷ 2 = 6. Depois: 20 − 12 + 6 = 8 + 6 = 14.",
  porqueErradas: [
    "12 erra a ordem ou os sinais (por exemplo, calcular 20 − 12 = 8 e depois somar errado).",
    null,
    "16 resulta de trocar um sinal (20 − 12 + 6 virando 20 − 12 + 8) — sem base no cálculo correto.",
    "22 resolve da esquerda para a direita ignorando a precedência (ex.: 20 − 3 = 17, ...), erro clássico."
  ],
  fonte: "Conteúdo: Operações fundamentais; ordem das operações."
},
{
  id: "MAT244",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor de (2³)² ÷ 2⁴ é:",
  alternativas: ["2", "8", "4", "16"],
  correta: 2,
  porqueCerta: "Potência de potência: (2³)² = 2⁶ = 64. Divisão de mesma base: 2⁶ ÷ 2⁴ = 2⁶⁻⁴ = 2² = 4.",
  porqueErradas: [
    "2 resulta de subtrair os expoentes errado (6 − 4 = 2 virando o resultado 2, em vez de 2²).",
    "8 confunde (2³)² com 2⁵ (multiplicar 3 × 2 errado como 3 + 2) e calcula 2⁵ ÷ 2².",
    null,
    "16 calcula (2³)² como 2⁹ ou erra a divisão (2⁶ ÷ 2²), sem aplicar 6 − 4 = 2."
  ],
  fonte: "Conteúdo: Potenciação; propriedades das potências."
},
{
  id: "MAT245",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor de √144 + ∛27 é:",
  alternativas: ["14", "13", "17", "15"],
  correta: 3,
  porqueCerta: "√144 = 12 (pois 12² = 144) e ∛27 = 3 (pois 3³ = 27). Somando: 12 + 3 = 15.",
  porqueErradas: [
    "14 erra uma das raízes (por exemplo, √144 = 11 ou ∛27 = 2).",
    "13 somaria ∛27 = 1, o que está errado (1³ = 1, não 27).",
    "17 somaria √144 = 14, o que está errado (14² = 196, não 144).",
    null
  ],
  fonte: "Conteúdo: Radiciação; raiz quadrada e raiz cúbica."
},
{
  id: "MAT246",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "De um lote de 250 mudas, 3/5 já foram distribuídas a produtores rurais. Quantas mudas já foram distribuídas?",
  alternativas: ["100", "150", "125", "175"],
  correta: 1,
  porqueCerta: "3/5 de 250 = (250 ÷ 5) × 3 = 50 × 3 = 150 mudas.",
  porqueErradas: [
    "100 corresponde a 2/5 do lote (250 − 150), ou seja, ao que AINDA FALTA distribuir.",
    null,
    "125 seria a metade (1/2) do lote, não 3/5.",
    "175 corresponderia a 7/10 do lote, não a 3/5."
  ],
  fonte: "Conteúdo: Operações fundamentais; fração de uma quantidade."
}
];
