/* Lote MAT Equações — Equações, sistemas e funções (20 questões: MAT47–MAT66). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_EQUACOES = [
{
  id: "MAT47",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Um escritório cobra taxa fixa de R$ 40,00 mais R$ 6,00 por página digitada. Se a conta total foi de R$ 148,00, quantas páginas foram digitadas?",
  alternativas: ["16", "18", "20", "24"],
  correta: 1,
  porqueCerta: "Modelando: 40 + 6p = 148 → 6p = 108 → p = 18. Conferindo: 40 + 6 × 18 = 40 + 108 = 148.",
  porqueErradas: [
    "16 daria 40 + 96 = 136, abaixo do total.",
    null,
    "20 daria 40 + 120 = 160, acima do total.",
    "24 daria 40 + 144 = 184, bem acima do total."
  ],
  fonte: "Conteúdo: Equações do 1º grau (Álgebra — nível médio)."
},
{
  id: "MAT48",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A solução da equação 2(x + 5) + 3(x − 2) = 34 é:",
  alternativas: ["4", "5", "5,5", "6"],
  correta: 3,
  porqueCerta: "2x + 10 + 3x − 6 = 34 → 5x + 4 = 34 → 5x = 30 → x = 6. Conferindo: 2 × 11 + 3 × 4 = 22 + 12 = 34.",
  porqueErradas: [
    "x = 4 daria 2 × 9 + 3 × 2 = 18 + 6 = 24, não 34.",
    "x = 5 daria 2 × 10 + 3 × 3 = 20 + 9 = 29, não 34.",
    "x = 5,5 daria 5 × 5,5 + 4 = 31,5, não 34.",
    null
  ],
  fonte: "Conteúdo: Equações do 1º grau (Álgebra — nível médio)."
},
{
  id: "MAT49",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O conjunto solução da equação x² − 7x + 12 = 0, em ℝ, é:",
  alternativas: ["{3, 4}", "{2, 6}", "{1, 12}", "{−3, −4}"],
  correta: 0,
  porqueCerta: "Soma = 7 e produto = 12. Os números 3 e 4 satisfazem: 3 + 4 = 7 e 3 × 4 = 12. Conferindo: 9 − 21 + 12 = 0 e 16 − 28 + 12 = 0.",
  porqueErradas: [
    null,
    "2 + 6 = 8 (soma errada) e 2 × 6 = 12; além disso 4 − 14 + 12 = 2, não zero.",
    "1 e 12 somam 13, não 7.",
    "−3 e −4 somam −7, com sinal trocado; testando: 9 + 21 + 12 = 42."
  ],
  fonte: "Conteúdo: Equações do 2º grau (Álgebra — nível médio)."
},
{
  id: "MAT50",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Um terreno retangular tem comprimento 3 m maior que a largura e área de 70 m². A largura do terreno mede:",
  alternativas: ["5 m", "6 m", "7 m", "8 m"],
  correta: 2,
  porqueCerta: "Sendo x a largura: x(x + 3) = 70 → x² + 3x − 70 = 0. Δ = 9 + 280 = 289, √Δ = 17, x = (−3 + 17)/2 = 7. Conferindo: 7 × 10 = 70.",
  porqueErradas: [
    "5 × 8 = 40, não 70.",
    "6 × 9 = 54, não 70.",
    null,
    "8 × 11 = 88, não 70."
  ],
  fonte: "Conteúdo: Resolução de problemas envolvendo equações de 2º grau."
},
{
  id: "MAT51",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre a equação x² − 4x + 4 = 0, é correto afirmar que ela possui:",
  alternativas: ["Nenhuma raiz real", "Uma única raiz real (raiz dupla) igual a 2", "Duas raízes reais distintas: 0 e 4", "Duas raízes reais distintas: −2 e 2"],
  correta: 1,
  porqueCerta: "Δ = 16 − 16 = 0, logo há raiz dupla: x = 4/2 = 2. De fato, x² − 4x + 4 = (x − 2)².",
  porqueErradas: [
    "Δ = 0 indica raiz real (dupla), não ausência de raízes.",
    null,
    "0 não é raiz (0 − 0 + 4 = 4) e 4 também não (16 − 16 + 4 = 4).",
    "Testando: (−2)² − 4(−2) + 4 = 4 + 8 + 4 = 16, não zero."
  ],
  fonte: "Conteúdo: Equações do 2º grau; discriminante."
},
{
  id: "MAT52",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A maior raiz da equação x² − 2x − 15 = 0 é:",
  alternativas: ["5", "3", "−3", "−5"],
  correta: 0,
  porqueCerta: "Δ = 4 + 60 = 64, √Δ = 8, x = (2 ± 8)/2, ou seja, x = 5 ou x = −3. A maior é 5. Conferindo: 25 − 10 − 15 = 0.",
  porqueErradas: [
    null,
    "3 não é raiz: 9 − 6 − 15 = −12.",
    "−3 é a MENOR raiz, não a maior.",
    "−5 não é raiz: 25 + 10 − 15 = 20."
  ],
  fonte: "Conteúdo: Equações do 2º grau (Álgebra — nível médio)."
},
{
  id: "MAT53",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A solução da inequação 3x − 9 < 2x + 5, em ℝ, é:",
  alternativas: ["x > 14", "x ≥ 14", "x = 14", "x < 14"],
  correta: 3,
  porqueCerta: "3x − 2x < 5 + 9 → x < 14. Testando x = 0: −9 < 5, verdadeiro.",
  porqueErradas: [
    "Inverte o sinal: para x = 20, 51 < 45 é falso.",
    "x = 14 dá 33 < 33, que é falso (igualdade, não desigualdade).",
    "Apenas o valor 14 não satisfaz, pois 33 < 33 é falso.",
    null
  ],
  fonte: "Conteúdo: Inequações do 1º grau (Álgebra — nível médio)."
},
{
  id: "MAT54",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Um produtor vende cada caixa por R$ 12,00 e tem custo de R$ 4,00 por caixa mais R$ 200,00 fixos. Para ter lucro (receita maior que o custo), a quantidade mínima inteira de caixas a vender é:",
  alternativas: ["24", "25", "26", "30"],
  correta: 2,
  porqueCerta: "Lucro: 12q > 4q + 200 → 8q > 200 → q > 25. O menor inteiro maior que 25 é 26. Conferindo: 12 × 26 = 312 e 4 × 26 + 200 = 304; 312 > 304.",
  porqueErradas: [
    "Com 24: receita 288 contra custo 296 — há prejuízo.",
    "Com 25: receita 300 igual ao custo 300 — lucro zero, não maior.",
    null,
    "30 dá lucro, mas não é o MÍNIMO (26 já dá lucro)."
  ],
  fonte: "Conteúdo: Inequações do 1º grau aplicadas a problemas."
},
{
  id: "MAT55",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A soma de dois números é 20 e a diferença entre eles é 4. Esses números são:",
  alternativas: ["12 e 8", "10 e 10", "14 e 6", "11 e 9"],
  correta: 0,
  porqueCerta: "Somando as equações x + y = 20 e x − y = 4: 2x = 24 → x = 12 e y = 8. Conferindo: 12 + 8 = 20 e 12 − 8 = 4.",
  porqueErradas: [
    null,
    "10 e 10 somam 20, mas a diferença é 0, não 4.",
    "14 e 6 somam 20, mas a diferença é 8, não 4.",
    "11 e 9 somam 20, mas a diferença é 2, não 4."
  ],
  fonte: "Conteúdo: Sistemas de equações do 1º grau com duas incógnitas."
},
{
  id: "MAT56",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Na papelaria, 2 canetas + 3 cadernos custam R$ 41,00 e 1 caneta + 2 cadernos custam R$ 24,00. O preço de cada caneta é:",
  alternativas: ["R$ 8,00", "R$ 10,00", "R$ 12,00", "R$ 7,00"],
  correta: 1,
  porqueCerta: "Da 2ª equação: c = 24 − 2n. Substituindo: 2(24 − 2n) + 3n = 41 → 48 − n = 41 → n = 7 e c = 24 − 14 = 10. Conferindo: 20 + 21 = 41.",
  porqueErradas: [
    "Com caneta a R$ 8,00, o caderno sairia R$ 8,00 e 2 × 8 + 3 × 8 = 40, não 41.",
    null,
    "Com caneta a R$ 12,00, o caderno sairia R$ 6,00 e 24 + 18 = 42, não 41.",
    "R$ 7,00 é o preço do CADERNO, não da caneta — pegadinha típica."
  ],
  fonte: "Conteúdo: Sistemas de equações do 1º grau; método da substituição."
},
{
  id: "MAT57",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Duas irmãs têm juntas 45 anos e a diferença entre suas idades é de 9 anos. A idade da mais velha é:",
  alternativas: ["18", "20", "25", "27"],
  correta: 3,
  porqueCerta: "Somando x + y = 45 e x − y = 9: 2x = 54 → x = 27 e y = 18. Conferindo: 27 + 18 = 45 e 27 − 18 = 9.",
  porqueErradas: [
    "18 é a idade da MAIS NOVA, não da mais velha.",
    "20 + 25 = 45, mas a diferença seria 5, não 9.",
    "25 + 20 = 45, mas a diferença seria 5, não 9.",
    null
  ],
  fonte: "Conteúdo: Sistemas de equações do 1º grau; método da adição."
},
{
  id: "MAT58",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre a função f(x) = −2x + 6, é correto afirmar que:",
  alternativas: ["Seu zero é x = −3 e ela é crescente", "Seu zero é x = 6 e ela é crescente", "Seu zero é x = 3 e ela é decrescente", "Seu zero é x = 2 e ela é decrescente"],
  correta: 2,
  porqueCerta: "−2x + 6 = 0 → x = 3. Como o coeficiente angular (−2) é negativo, a função é decrescente.",
  porqueErradas: [
    "x = −3 dá f(−3) = 12, não zero; e a função é decrescente, não crescente.",
    "x = 6 dá f(6) = −6, não zero; e o coeficiente negativo indica decrescimento.",
    null,
    "x = 2 dá f(2) = 2, não zero (embora a função seja de fato decrescente)."
  ],
  fonte: "Conteúdo: Função afim — zero, coeficiente angular e crescimento."
},
{
  id: "MAT59",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O custo de um serviço é dado por C(x) = 20 + 5x, em que x é o número de horas. Para 10 horas de serviço, o custo é de:",
  alternativas: ["R$ 70,00", "R$ 50,00", "R$ 25,00", "R$ 60,00"],
  correta: 0,
  porqueCerta: "C(10) = 20 + 5 × 10 = 20 + 50 = 70. O gráfico é uma reta crescente que parte de 20 (taxa fixa).",
  porqueErradas: [
    null,
    "R$ 50,00 considera só 5 × 10, esquecendo a taxa fixa de 20.",
    "R$ 25,00 não corresponde a nenhum cálculo com x = 10.",
    "R$ 60,00 seria o valor para 8 horas (20 + 40), não 10."
  ],
  fonte: "Conteúdo: Função afim — conceito, gráfico e aplicações."
},
{
  id: "MAT60",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O vértice da parábola y = x² − 6x + 8 é o ponto:",
  alternativas: ["(2, 0)", "(6, 8)", "(−3, 35)", "(3, −1)"],
  correta: 3,
  porqueCerta: "xv = −(−6)/2 = 3 e yv = 9 − 18 + 8 = −1. Logo, V = (3, −1), ponto de mínimo, pois a > 0.",
  porqueErradas: [
    "(2, 0) é um ZERO da função (4 − 12 + 8 = 0), não o vértice.",
    "(6, 8) nem pertence à parábola: 36 − 36 + 8 = 8? Sim, pertence, mas não é o vértice.",
    "(−3, 35) nem pertence à parábola: 9 + 18 + 8 = 35? Pertence, mas não é o vértice (xv = 3, não −3).",
    null
  ],
  fonte: "Conteúdo: Função quadrática — vértice, gráfico e interpretação."
},
{
  id: "MAT61",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre o gráfico da função f(x) = −x² + 4x − 3, é correto afirmar que:",
  alternativas: ["Corta o eixo x em −1 e −3, com concavidade para cima", "Corta o eixo x em 1 e 3, com concavidade para baixo", "Corta o eixo x em 0 e 4, com concavidade para baixo", "Não corta o eixo x e tem concavidade para cima"],
  correta: 1,
  porqueCerta: "Δ = 16 − 12 = 4, raízes x = (4 ∓ 2)/2, ou seja, 1 e 3: f(1) = 0 e f(3) = 0. Como a = −1 < 0, a concavidade é para baixo.",
  porqueErradas: [
    "A concavidade é para baixo (a = −1) e as raízes são positivas, não negativas.",
    null,
    "0 não é raiz (f(0) = −3) e 4 não é raiz (f(4) = −3).",
    "Δ = 4 > 0 garante dois cortes no eixo x; e a < 0 dá concavidade para baixo."
  ],
  fonte: "Conteúdo: Função quadrática — raízes, concavidade e gráfico."
},
{
  id: "MAT62",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O lucro mensal de uma banca é dado por L(q) = −q² + 20q − 75, em que q é a quantidade vendida. A quantidade que maximiza o lucro é:",
  alternativas: ["5", "8", "10", "15"],
  correta: 2,
  porqueCerta: "O máximo ocorre no vértice: qv = −20/(2 × −1) = 10. Conferindo: L(10) = −100 + 200 − 75 = 25, maior que L(8) = 21 e L(15) = 0.",
  porqueErradas: [
    "q = 5 dá L = −25 + 100 − 75 = 0, bem abaixo do máximo.",
    "q = 8 dá L = −64 + 160 − 75 = 21, abaixo de 25.",
    null,
    "q = 15 dá L = −225 + 300 − 75 = 0, bem abaixo do máximo."
  ],
  fonte: "Conteúdo: Função quadrática — máximo/mínimo e aplicações."
},
{
  id: "MAT63",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Uma cultura de bactérias dobra a cada hora: N(t) = 100 × 2^t. Partindo de 100 bactérias, após quantas horas haverá 6.400 bactérias?",
  alternativas: ["6 horas", "5 horas", "8 horas", "32 horas"],
  correta: 0,
  porqueCerta: "100 × 2^t = 6.400 → 2^t = 64 → t = 6, pois 2^6 = 64. Conferindo: 100 × 64 = 6.400.",
  porqueErradas: [
    null,
    "t = 5 dá 100 × 32 = 3.200, metade do desejado.",
    "t = 8 dá 100 × 256 = 25.600, quatro vezes o desejado.",
    "32 é o resultado de 64/2, confusão entre expoente e metade da potência."
  ],
  fonte: "Conteúdo: Função exponencial — conceito e aplicações."
},
{
  id: "MAT64",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre a função f(x) = 3^x, é correto afirmar que:",
  alternativas: ["f(2) = 6 e a função é decrescente", "f(2) = 9 e a função é crescente", "f(2) = 8 e a função é crescente", "f(2) = 9 e a função é decrescente"],
  correta: 1,
  porqueCerta: "f(2) = 3² = 9. Como a base 3 é maior que 1, a função é crescente: valores maiores de x dão valores maiores de f(x).",
  porqueErradas: [
    "3² = 9, não 6 (6 seria 3 × 2); e base maior que 1 indica crescimento.",
    null,
    "3² = 9, não 8 (8 seria 2³ — troca de base com expoente).",
    "f(2) = 9 está certo, mas a função é CRESCENTE, não decrescente."
  ],
  fonte: "Conteúdo: Função exponencial — gráfico e interpretação."
},
{
  id: "MAT65",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O valor de log₂ 32 é:",
  alternativas: ["4", "6", "16", "5"],
  correta: 3,
  porqueCerta: "log₂ 32 = x significa 2^x = 32. Como 2^5 = 32, o logaritmo vale 5.",
  porqueErradas: [
    "2^4 = 16, não 32.",
    "2^6 = 64, não 32.",
    "16 é a metade de 32, não o expoente: confusão entre divisão e logaritmo.",
    null
  ],
  fonte: "Conteúdo: Função logarítmica — conceito."
},
{
  id: "MAT66",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O domínio da função f(x) = log(x − 2), considerando logaritmo de base maior que 1, é:",
  alternativas: ["x ≥ 0", "x ≥ 2", "x > 2", "Todos os números reais"],
  correta: 2,
  porqueCerta: "O logaritmando deve ser positivo: x − 2 > 0 → x > 2. Em x = 2, teríamos log 0, que não existe.",
  porqueErradas: [
    "Para 0 ≤ x ≤ 2, x − 2 é negativo ou zero e o log não existe (ex.: x = 0 dá log(−2)).",
    "x = 2 dá log 0, que não existe; por isso o 2 está EXCLUÍDO (desigualdade estrita).",
    null,
    "Valores menores ou iguais a 2 tornam o logaritmando não positivo, logo nem todos os reais servem."
  ],
  fonte: "Conteúdo: Função logarítmica — domínio e interpretação."
}
];