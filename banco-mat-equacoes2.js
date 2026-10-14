/* Lote MAT Equações 2 — Equações, sistemas e funções (20 questões: MAT147–MAT166). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_EQUACOES_2 = [
{
  id: "MAT147",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A solução da equação x/3 + x/2 = 25, em ℝ, é:",
  alternativas: ["20", "24", "30", "36"],
  correta: 2,
  porqueCerta: "MMC(2,3) = 6: 2x + 3x = 150 → 5x = 150 → x = 30. Conferindo: 30/3 + 30/2 = 10 + 15 = 25.",
  porqueErradas: [
    "x = 20 dá 20/3 + 10 ≈ 16,67, não 25.",
    "x = 24 dá 8 + 12 = 20, não 25.",
    null,
    "x = 36 dá 12 + 18 = 30, acima de 25."
  ],
  fonte: "Conteúdo: Equações do 1º grau com frações (Álgebra — nível médio)."
},
{
  id: "MAT148",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A solução da equação (2x − 1)/3 = 7, em ℝ, é:",
  alternativas: ["11", "10", "8", "7"],
  correta: 0,
  porqueCerta: "2x − 1 = 21 → 2x = 22 → x = 11. Conferindo: (22 − 1)/3 = 21/3 = 7.",
  porqueErradas: [
    null,
    "x = 10 dá (20 − 1)/3 = 19/3, não 7.",
    "x = 8 dá 15/3 = 5, não 7.",
    "x = 7 dá 13/3, não 7."
  ],
  fonte: "Conteúdo: Equações do 1º grau (Álgebra — nível médio)."
},
{
  id: "MAT149",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O conjunto solução da equação 3x² − 12x = 0, em ℝ, é:",
  alternativas: ["{0, 2}", "{2, 6}", "{−4, 0}", "{0, 4}"],
  correta: 3,
  porqueCerta: "Fatorando: 3x(x − 4) = 0 → x = 0 ou x = 4. Conferindo: 3 × 16 − 48 = 48 − 48 = 0.",
  porqueErradas: [
    "x = 2 não é raiz: 12 − 24 = −12.",
    "x = 6 não é raiz: 108 − 72 = 36.",
    "−4 não é raiz: 48 + 48 = 96.",
    null
  ],
  fonte: "Conteúdo: Equações do 2º grau incompletas (Álgebra — nível médio)."
},
{
  id: "MAT150",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "As raízes da equação x² − 9x + 20 = 0, em ℝ, são:",
  alternativas: ["2 e 10", "4 e 5", "−4 e −5", "1 e 20"],
  correta: 1,
  porqueCerta: "Soma = 9 e produto = 20: 4 + 5 = 9 e 4 × 5 = 20. Conferindo: 16 − 36 + 20 = 0 e 25 − 45 + 20 = 0.",
  porqueErradas: [
    "2 e 10 somam 12, não 9 (além disso 4 − 18 + 20 = 6).",
    null,
    "−4 e −5 somam −9, com sinal trocado.",
    "1 e 20 somam 21, não 9."
  ],
  fonte: "Conteúdo: Equações do 2º grau; soma e produto (Álgebra — nível médio)."
},
{
  id: "MAT151",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre a equação x² + 4x + 5 = 0, em ℝ, assinale a alternativa INCORRETA:",
  alternativas: ["O discriminante é negativo", "A equação não possui raízes reais", "As raízes reais são −1 e −5", "O gráfico de y = x² + 4x + 5 não toca o eixo x"],
  correta: 2,
  porqueCerta: "Δ = 16 − 20 = −4 < 0, logo não há raízes reais: a alternativa que afirma raízes −1 e −5 é falsa (e, portanto, a INCORRETA). De fato, 1 − 4 + 5 = 2 e 25 − 20 + 5 = 10.",
  porqueErradas: [
    "Está CORRETA: Δ = 16 − 20 = −4, negativo.",
    "Está CORRETA: com Δ < 0 não há raiz real.",
    null,
    "Está CORRETA: sem raízes reais, a parábola (concavidade para cima) fica toda acima do eixo x."
  ],
  fonte: "Conteúdo: Equações do 2º grau; discriminante e interpretação gráfica."
},
{
  id: "MAT152",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Um número positivo somado ao seu quadrado resulta em 30. Esse número é:",
  alternativas: ["5", "6", "4", "15"],
  correta: 0,
  porqueCerta: "x² + x = 30 → x² + x − 30 = 0. Δ = 1 + 120 = 121, √Δ = 11, x = (−1 + 11)/2 = 5 (a outra raiz, −6, é descartada por ser negativa). Conferindo: 25 + 5 = 30.",
  porqueErradas: [
    null,
    "36 + 6 = 42, não 30.",
    "16 + 4 = 20, não 30.",
    "225 + 15 = 240, não 30."
  ],
  fonte: "Conteúdo: Resolução de problemas envolvendo equações de 2º grau."
},
{
  id: "MAT153",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre o sistema { x + y = 12; 2x − y = 9 }, assinale a alternativa INCORRETA:",
  alternativas: ["A solução é x = 7 e y = 5", "O sistema é possível e determinado", "A solução é x = 5 e y = 7", "Somando as duas equações obtém-se 3x = 21"],
  correta: 2,
  porqueCerta: "Somando: 3x = 21 → x = 7 e y = 12 − 7 = 5. Logo afirmar que a solução é x = 5 e y = 7 é FALSO (troca os valores; teste: 2 × 5 − 7 = 3, não 9). É a alternativa INCORRETA.",
  porqueErradas: [
    "Está CORRETA: 7 + 5 = 12 e 14 − 5 = 9.",
    "Está CORRETA: há uma única solução (retas concorrentes).",
    null,
    "Está CORRETA: (x + y) + (2x − y) = 12 + 9 → 3x = 21."
  ],
  fonte: "Conteúdo: Sistemas de equações do 1º grau; método da adição."
},
{
  id: "MAT154",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Em um cercado há galinhas e porcos, totalizando 10 cabeças e 28 patas. O número de galinhas é:",
  alternativas: ["4", "5", "7", "6"],
  correta: 3,
  porqueCerta: "Sendo g as galinhas e p os porcos: g + p = 10 e 2g + 4p = 28. Da 1ª, g = 10 − p; substituindo: 20 − 2p + 4p = 28 → 2p = 8 → p = 4 e g = 6. Conferindo: 6 + 4 = 10 cabeças e 12 + 16 = 28 patas.",
  porqueErradas: [
    "4 é o número de PORCOS, não de galinhas.",
    "5 galinhas exigiriam 5 porcos: 10 + 20 = 30 patas, não 28.",
    "7 galinhas exigiriam 3 porcos: 14 + 12 = 26 patas, não 28.",
    null
  ],
  fonte: "Conteúdo: Sistemas de equações do 1º grau aplicados a problemas."
},
{
  id: "MAT155",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Uma função afim f satisfaz f(1) = 5 e f(3) = 11. O valor de f(5) é:",
  alternativas: ["14", "17", "19", "21"],
  correta: 1,
  porqueCerta: "Coeficiente angular a = (11 − 5)/(3 − 1) = 3; com f(1) = 5: b = 5 − 3 = 2, logo f(x) = 3x + 2 e f(5) = 15 + 2 = 17. Conferindo: f(3) = 9 + 2 = 11.",
  porqueErradas: [
    "14 seria f(4), não f(5).",
    null,
    "19 corresponderia a a = 3,5, que não passa pelos dois pontos dados.",
    "21 corresponderia a f(x) = 4x + 1, que dá f(3) = 13, não 11."
  ],
  fonte: "Conteúdo: Função afim — determinação da lei e cálculo de valores."
},
{
  id: "MAT156",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre a função f(x) = 4x − 8, assinale a alternativa INCORRETA:",
  alternativas: ["A função é decrescente", "Seu zero é x = 2", "Seu gráfico corta o eixo y em (0, −8)", "f(3) = 4"],
  correta: 0,
  porqueCerta: "O coeficiente angular é 4 > 0, logo a função é CRESCENTE — afirmar que é decrescente é FALSO (a alternativa INCORRETA). As demais estão corretas: 4 × 2 − 8 = 0; f(0) = −8; f(3) = 12 − 8 = 4.",
  porqueErradas: [
    null,
    "Está CORRETA: 4 × 2 − 8 = 0.",
    "Está CORRETA: f(0) = −8.",
    "Está CORRETA: 12 − 8 = 4."
  ],
  fonte: "Conteúdo: Função afim — zero, crescimento e gráfico."
},
{
  id: "MAT157",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O conjunto solução da inequação x² − 5x + 6 > 0, em ℝ, é:",
  alternativas: ["2 < x < 3", "x = 2 ou x = 3", "x < 2 ou x > 3", "x > 2"],
  correta: 2,
  porqueCerta: "Raízes: x = 2 e x = 3 (pois 2 + 3 = 5 e 2 × 3 = 6). Como a = 1 > 0 (parábola para cima), a expressão é positiva FORA das raízes: x < 2 ou x > 3. Teste: x = 0 dá 6 > 0 e x = 4 dá 2 > 0; x = 2,5 dá −0,25 < 0.",
  porqueErradas: [
    "2 < x < 3 é onde a expressão é NEGATIVA (entre as raízes).",
    "A igualdade só vale NOS pontos 2 e 3, onde a expressão é zero, não maior que zero.",
    null,
    "x > 2 inclui 2,5, onde 6,25 − 12,5 + 6 = −0,25 < 0."
  ],
  fonte: "Conteúdo: Inequações do 2º grau; estudo do sinal."
},
{
  id: "MAT158",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A solução da inequação 4(x − 2) + 5 ≥ 3x + 1, em ℝ, é:",
  alternativas: ["x ≤ 4", "x < 4", "x = 4", "x ≥ 4"],
  correta: 3,
  porqueCerta: "4x − 8 + 5 ≥ 3x + 1 → 4x − 3 ≥ 3x + 1 → x ≥ 4. Testando x = 5: 12 + 5 = 17 ≥ 16, verdadeiro; x = 4 dá 8 + 5 = 13 ≥ 13, verdadeiro.",
  porqueErradas: [
    "x = 0 dá −8 + 5 = −3 ≥ 1, falso; a desigualdade aponta para cima.",
    "x = 4 SATISFAZ (13 ≥ 13), logo não pode ser excluído.",
    "Apenas x = 4 ignora que 5, 6, ... também satisfazem.",
    null
  ],
  fonte: "Conteúdo: Inequações do 1º grau (Álgebra — nível médio)."
},
{
  id: "MAT159",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Em um evento, 150 ingressos foram vendidos (inteira a R$ 20,00 e meia a R$ 10,00), totalizando R$ 2.300,00. Quantos ingressos de inteira foram vendidos?",
  alternativas: ["80", "70", "90", "100"],
  correta: 0,
  porqueCerta: "Sendo i as inteiras e m as meias: i + m = 150 e 20i + 10m = 2.300. Substituindo m = 150 − i: 20i + 1.500 − 10i = 2.300 → 10i = 800 → i = 80. Conferindo: 80 × 20 + 70 × 10 = 1.600 + 700 = 2.300.",
  porqueErradas: [
    null,
    "70 inteiras dariam 1.400 + 800 = 2.200, abaixo do total.",
    "90 inteiras dariam 1.800 + 600 = 2.400, acima do total.",
    "100 inteiras dariam 2.000 + 500 = 2.500, acima do total."
  ],
  fonte: "Conteúdo: Sistemas de equações do 1º grau aplicados a problemas."
},
{
  id: "MAT160",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre a parábola y = x² + 2x − 8, assinale a alternativa INCORRETA:",
  alternativas: ["As raízes são −4 e 2", "O vértice é o ponto (−1, −9)", "A concavidade é voltada para baixo", "O valor mínimo da função é −9"],
  correta: 2,
  porqueCerta: "Como a = 1 > 0, a concavidade é voltada PARA CIMA — afirmar que é para baixo é FALSO (a INCORRETA). As demais estão corretas: (−4)² + 2(−4) − 8 = 16 − 8 − 8 = 0; 4 + 4 − 8 = 0; xv = −2/2 = −1 e yv = 1 − 2 − 8 = −9, que é o mínimo.",
  porqueErradas: [
    "Está CORRETA: ambas anulam a expressão, como conferido.",
    "Está CORRETA: xv = −1 e yv = −9.",
    null,
    "Está CORRETA: com a > 0, o vértice é ponto de mínimo."
  ],
  fonte: "Conteúdo: Função quadrática — raízes, vértice, concavidade e extremos."
},
{
  id: "MAT161",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Resolvendo a equação exponencial 5^x = 625, obtém-se x igual a:",
  alternativas: ["3", "4", "5", "25"],
  correta: 1,
  porqueCerta: "625 = 5 × 5 × 5 × 5 = 5^4, logo x = 4. Conferindo: 5^4 = 625.",
  porqueErradas: [
    "5³ = 125, não 625.",
    null,
    "5^5 = 3.125, não 625.",
    "25 é a RAIZ QUADRADA de 625, não o expoente (5^25 é um número gigantesco)."
  ],
  fonte: "Conteúdo: Equações exponenciais simples."
},
{
  id: "MAT162",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Uma colônia tem 500 bactérias e triplica a cada hora: N(t) = 500 × 3^t. Após quantas horas haverá 13.500 bactérias?",
  alternativas: ["2 horas", "4 horas", "4,5 horas", "3 horas"],
  correta: 3,
  porqueCerta: "500 × 3^t = 13.500 → 3^t = 27 → t = 3, pois 3³ = 27. Conferindo: 500 × 27 = 13.500.",
  porqueErradas: [
    "t = 2 dá 500 × 9 = 4.500.",
    "t = 4 dá 500 × 81 = 40.500.",
    "4,5 não é inteiro e 3^4,5 = 81√3 ≈ 140, bem acima de 27.",
    null
  ],
  fonte: "Conteúdo: Função exponencial — conceito e aplicações."
},
{
  id: "MAT163",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "O valor de log₃ 81 é:",
  alternativas: ["4", "3", "9", "27"],
  correta: 0,
  porqueCerta: "log₃ 81 = x significa 3^x = 81. Como 3^4 = 81, o logaritmo vale 4.",
  porqueErradas: [
    null,
    "3³ = 27, não 81.",
    "9 é 81/9, confusão entre divisão e logaritmo.",
    "27 é 81/3, confusão entre divisão e logaritmo."
  ],
  fonte: "Conteúdo: Função logarítmica — conceito."
},
{
  id: "MAT164",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A solução da equação log₂ x + log₂ (x − 2) = 3, com x real, é:",
  alternativas: ["x = 2", "x = −2", "x = 4", "x = 8"],
  correta: 2,
  porqueCerta: "Somando os logs: log₂ [x(x − 2)] = 3 → x(x − 2) = 2³ = 8 → x² − 2x − 8 = 0 → x = 4 ou x = −2. Como x > 0 e x − 2 > 0 (logaritmandos positivos), descarta-se −2. Conferindo: log₂ 4 + log₂ 2 = 2 + 1 = 3.",
  porqueErradas: [
    "x = 2 anula o 2º logaritmando (log₂ 0 não existe).",
    "x = −2 torna ambos os logaritmandos negativos; além disso o domínio exige x > 2.",
    null,
    "x = 8 dá log₂ 8 + log₂ 6 = 3 + (1 + log₂ 3) ≈ 5,58, não 3."
  ],
  fonte: "Conteúdo: Equações logarítmicas e condição de existência."
},
{
  id: "MAT165",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "Sobre a função f(x) = (1/2)^x, assinale a alternativa INCORRETA:",
  alternativas: ["f(0) = 1", "A função é decrescente", "f(−1) = 2", "f(2) = 4"],
  correta: 3,
  porqueCerta: "f(2) = (1/2)² = 1/4, não 4 — a alternativa é FALSA (a INCORRETA). As demais estão corretas: qualquer base não nula elevada a 0 vale 1; base entre 0 e 1 gera função decrescente; f(−1) = (1/2)^(−1) = 2.",
  porqueErradas: [
    "Está CORRETA: (1/2)^0 = 1.",
    "Está CORRETA: 0 < 1/2 < 1 implica decrescimento.",
    "Está CORRETA: inverter a base com expoente −1 dá 2.",
    null
  ],
  fonte: "Conteúdo: Função exponencial — gráfico, crescimento e valores."
},
{
  id: "MAT166",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Equações, sistemas e funções",
  enunciado: "A altura de uma bola (em metros) é dada por h(t) = −5t² + 20t, em que t é o tempo em segundos. Em que instante a bola atinge a altura máxima?",
  alternativas: ["2 s", "4 s", "10 s", "20 s"],
  correta: 0,
  porqueCerta: "O máximo ocorre no vértice: tv = −20/(2 × −5) = −20/−10 = 2 s. A altura máxima é h(2) = −20 + 40 = 20 m; em t = 4 a bola já voltou ao solo (h = −80 + 80 = 0).",
  porqueErradas: [
    null,
    "t = 4 s é o instante em que a bola TOCA O SOLO (h = 0), não o máximo.",
    "t = 10 s dá h = −500 + 200 = −300, valor sem sentido físico aqui (bem após a queda).",
    "20 é o coeficiente do termo linear, não o tempo do vértice."
  ],
  fonte: "Conteúdo: Função quadrática — máximo e aplicações."
}
];
