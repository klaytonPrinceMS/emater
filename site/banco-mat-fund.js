/* Lote MAT — Conjuntos numéricos e operações fundamentais (14 questões inéditas: 2 operações fundamentais + 5 múltiplos/divisores/primos/MMC/MDC + 7 potenciação/radiciação). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_FUND = [
{
  id: "MAT266",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor da expressão (15 + 5) ÷ 4 + 6 × 2 é:",
  alternativas: ["13", "15", "17", "21"],
  correta: 2,
  porqueCerta: "Primeiro os parênteses: 15 + 5 = 20. Depois divisão e multiplicação: 20 ÷ 4 = 5 e 6 × 2 = 12. Por fim a soma: 5 + 12 = 17.",
  porqueErradas: [
    "13 ignora a precedência ou soma antes de dividir/multiplicar.",
    "15 resulta de errar uma das operações (por exemplo, 6 × 2 = 10).",
    null,
    "21 resolve da esquerda para a direita sem respeitar divisão/multiplicação antes da adição."
  ],
  fonte: "Conteúdo: Operações fundamentais; ordem das operações."
},
{
  id: "MAT267",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Um almoxarifado tinha 850 envelopes. Foram retirados 235 para os escritórios locais e depois chegaram 180 novos. Com quantos envelopes o almoxarifado ficou?",
  alternativas: ["795", "615", "670", "1.085"],
  correta: 0,
  porqueCerta: "850 − 235 = 615; 615 + 180 = 795 envelopes.",
  porqueErradas: [
    null,
    "615 é o resultado parcial após a retirada, sem somar a entrada de 180.",
    "670 troca os valores (850 − 180 = 670), invertendo retirada e entrada.",
    "1.085 soma tudo (850 + 235), tratando a retirada como entrada."
  ],
  fonte: "Conteúdo: Operações fundamentais; adição e subtração."
},
{
  id: "MAT268",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Qual dos números abaixo é divisível por 9?",
  alternativas: ["2.415", "2.413", "2.412", "2.418"],
  correta: 2,
  porqueCerta: "Um número é divisível por 9 quando a soma dos algarismos é múltiplo de 9. Em 2.412, 2+4+1+2 = 9, e 2.412 ÷ 9 = 268 exatos.",
  porqueErradas: [
    "2.415 soma 12 (2+4+1+5), divisível por 3 mas não por 9 (2.415 ÷ 9 não é exato).",
    "2.413 soma 10, que não é múltiplo de 3 nem de 9.",
    null,
    "2.418 soma 15, divisível por 3 mas não por 9 (9 × 269 = 2.421)."
  ],
  fonte: "Conteúdo: Critérios de divisibilidade; múltiplos e divisores."
},
{
  id: "MAT269",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Quantos divisores positivos possui o número 60?",
  alternativas: ["8", "12", "10", "16"],
  correta: 1,
  porqueCerta: "Fatorando: 60 = 2² × 3 × 5. Número de divisores = (2+1) × (1+1) × (1+1) = 3 × 2 × 2 = 12 (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 e 60).",
  porqueErradas: [
    "8 conta apenas parte da lista (faltam, por exemplo, 15, 20, 30 e 60).",
    null,
    "10 erra a contagem: a lista completa tem 12 elementos.",
    "16 confunde com outro número ou aplica a fórmula errada aos expoentes."
  ],
  fonte: "Conteúdo: Divisores; decomposição em fatores primos."
},
{
  id: "MAT270",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Assinale a alternativa que apresenta um número primo:",
  alternativas: ["49", "51", "55", "53"],
  correta: 3,
  porqueCerta: "53 só é divisível por 1 e por 53, logo é primo. É o único da lista com exatamente dois divisores positivos.",
  porqueErradas: [
    "49 = 7 × 7, portanto é composto.",
    "51 = 3 × 17, portanto é composto.",
    "55 = 5 × 11, portanto é composto.",
    null
  ],
  fonte: "Conteúdo: Números primos; divisores."
},
{
  id: "MAT271",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Dois sinalizadores de uma porteira piscam juntos agora. Um pisca a cada 8 segundos e o outro, a cada 20 segundos. Depois de quantos segundos voltarão a piscar juntos?",
  alternativas: ["28 segundos", "40 segundos", "80 segundos", "160 segundos"],
  correta: 1,
  porqueCerta: "É o MMC(8, 20). Fatorando: 8 = 2³ e 20 = 2² × 5. MMC = 2³ × 5 = 8 × 5 = 40 segundos.",
  porqueErradas: [
    "28 não é múltiplo nem de 8 nem de 20.",
    null,
    "80 é um múltiplo comum, mas não o MENOR (40 já é comum aos dois).",
    "160 também é múltiplo comum, mas não o menor. Erro típico: multiplicar 8 × 20."
  ],
  fonte: "Conteúdo: Múltiplos; mínimo múltiplo comum (MMC)."
},
{
  id: "MAT272",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Um viveiro tem 36 mudas de café e 54 mudas de milho para montar kits idênticos, sem sobras, com o MAIOR número possível de kits. Quantos kits serão montados?",
  alternativas: ["6 kits", "9 kits", "18 kits", "12 kits"],
  correta: 2,
  porqueCerta: "É o MDC(36, 54). Fatorando: 36 = 2² × 3² e 54 = 2 × 3³. MDC = 2 × 3² = 18. Cada kit terá 36/18 = 2 mudas de café e 54/18 = 3 mudas de milho, sem sobras.",
  porqueErradas: [
    "6 é um divisor comum, mas não o MAIOR (9, 12 e 18 também dividem ambos).",
    "9 é divisor comum, mas 18 é maior e também divide ambos sem sobras.",
    null,
    "12 não divide 54 (54/12 não é exato), logo haveria sobra."
  ],
  fonte: "Conteúdo: Divisores; máximo divisor comum (MDC)."
},
{
  id: "MAT273",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor de 3² + 4² é:",
  alternativas: ["7", "25", "14", "49"],
  correta: 1,
  porqueCerta: "3² = 9 e 4² = 16. Somando: 9 + 16 = 25.",
  porqueErradas: [
    "7 soma as bases (3 + 4) em vez de calcular as potências.",
    null,
    "14 soma base com expoente (3 + 4 + 3 + 4) ou erra as potências.",
    "49 calcula (3 + 4)² = 7², erro clássico de somar antes de elevar."
  ],
  fonte: "Conteúdo: Potenciação; quadrados."
},
{
  id: "MAT274",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor de 2⁴ × 2³ é:",
  alternativas: ["64", "32", "128", "4.096"],
  correta: 2,
  porqueCerta: "Multiplicação de potências de mesma base: somam-se os expoentes: 2⁴ × 2³ = 2⁷ = 128 (16 × 8 = 128).",
  porqueErradas: [
    "64 multiplica as bases ou erra um dos fatores (confunde 2⁴ × 2³ com 2⁶).",
    "32 confunde com 2⁵ (soma errada dos expoentes: 4 + 3 = 5 virando o resultado).",
    null,
    "4.096 multiplica os expoentes (4 × 3 = 12, dando 2¹²) em vez de somar."
  ],
  fonte: "Conteúdo: Potenciação; propriedades das potências."
},
{
  id: "MAT275",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Sobre potenciação, assinale a alternativa INCORRETA:",
  alternativas: ["7¹ = 7", "4² = 8", "10⁰ = 1", "2⁵ = 32"],
  correta: 1,
  porqueCerta: "4² = 4 × 4 = 16, e não 8. A alternativa afirma um valor falso, por isso é a INCORRETA (8 seria 4 × 2, confundindo potência com multiplicação pela base).",
  porqueErradas: [
    "Está correta: todo número elevado a 1 é ele mesmo (7¹ = 7).",
    null,
    "Está correta: por definição, qualquer base não nula elevada a 0 vale 1.",
    "Está correta: 2⁵ = 2×2×2×2×2 = 32."
  ],
  fonte: "Conteúdo: Potenciação; expoentes 0 e 1."
},
{
  id: "MAT276",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor de √81 − √16 é:",
  alternativas: ["5", "7", "13", "65"],
  correta: 0,
  porqueCerta: "√81 = 9 (pois 9² = 81) e √16 = 4 (pois 4² = 16). Subtraindo: 9 − 4 = 5.",
  porqueErradas: [
    null,
    "7 erra uma das raízes (por exemplo, √16 = 2).",
    "13 soma as raízes (9 + 4) em vez de subtrair.",
    "65 subtrai os radicandos (81 − 16) sem extrair as raízes, erro clássico."
  ],
  fonte: "Conteúdo: Radiciação; raiz quadrada."
},
{
  id: "MAT277",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Sobre raízes, assinale a alternativa INCORRETA:",
  alternativas: ["√64 = 8", "√50 = 5", "∛64 = 4", "√100 = 10"],
  correta: 1,
  porqueCerta: "√50 não vale 5: 5² = 25, não 50 (√50 ≈ 7,07). A igualdade é falsa, por isso a alternativa é a INCORRETA.",
  porqueErradas: [
    "Está correta: 8² = 64, logo √64 = 8.",
    null,
    "Está correta: 4³ = 64, logo ∛64 = 4.",
    "Está correta: 10² = 100, logo √100 = 10."
  ],
  fonte: "Conteúdo: Radiciação; raiz quadrada e raiz cúbica."
},
{
  id: "MAT278",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "O valor de (3²)³ é:",
  alternativas: ["81", "243", "729", "27"],
  correta: 2,
  porqueCerta: "Potência de potência: multiplicam-se os expoentes: (3²)³ = 3⁶ = 729.",
  porqueErradas: [
    "81 é 3⁴ (ou (3²)²), faltando um fator de 3².",
    "243 é 3⁵: resulta de somar os expoentes (2 + 3 = 5) em vez de multiplicar.",
    null,
    "27 é 3³: resulta de manter um dos expoentes e ignorar o outro."
  ],
  fonte: "Conteúdo: Potenciação; potência de potência."
},
{
  id: "MAT279",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Conjuntos numéricos e operações fundamentais",
  enunciado: "Assinale a alternativa INCORRETA:",
  alternativas: ["2³ = 8", "√36 = 6", "∛125 = 5", "5² = 15"],
  correta: 3,
  porqueCerta: "5² = 5 × 5 = 25, e não 15 (15 seria 5 × 3, confundindo quadrado com triplo). A igualdade é falsa, por isso é a INCORRETA.",
  porqueErradas: [
    "Está correta: 2³ = 2×2×2 = 8.",
    "Está correta: 6² = 36, logo √36 = 6.",
    "Está correta: 5³ = 125, logo ∛125 = 5.",
    null
  ],
  fonte: "Conteúdo: Potenciação e radiciação."
}
];
