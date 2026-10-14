/* Lote MAT Probabilidade — Probabilidade, combinatória e estatística (MAT67–MAT86). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_PROBABILIDADE = [
{
  id: "MAT67",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um refeitório oferece 4 opções de prato principal, 3 opções de salada e 2 opções de suco. De quantas maneiras diferentes um servidor pode montar uma refeição com um item de cada tipo?",
  alternativas: ["9", "12", "24", "29"],
  correta: 2,
  porqueCerta: "Pelo Princípio Fundamental da Contagem, multiplicam-se as possibilidades: 4 × 3 × 2 = 24 combinações.",
  porqueErradas: [
    "9 seria a SOMA (4 + 3 + 2). Em escolhas sucessivas e independentes, multiplica-se, não se soma.",
    "12 seria 4 × 3, esquecendo as 2 opções de suco.",
    null,
    "29 não resulta de nenhuma operação correta (seria algo como 24 + 5, sem sentido no problema)."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem."
},
{
  id: "MAT68",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Cinco livros diferentes serão enfileirados em uma prateleira. De quantas formas distintas eles podem ser ordenados?",
  alternativas: ["20", "25", "60", "120"],
  correta: 3,
  porqueCerta: "É permutação simples de 5 elementos: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120.",
  porqueErradas: [
    "20 seria 5 × 4 (só as duas primeiras posições). Faltou ordenar as demais.",
    "25 seria 5², que conta escolhas COM repetição — aqui cada livro entra uma única vez.",
    "60 é 5!/2 — não há divisão, pois não existe repetição nem restrição.",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Permutações."
},
{
  id: "MAT69",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Entre 6 candidatos, serão escolhidos um presidente e um vice-presidente de comissão, cargos distintos. Quantas duplas ordenadas são possíveis?",
  alternativas: ["15", "30", "12", "36"],
  correta: 1,
  porqueCerta: "A ordem importa (presidente ≠ vice): arranjo A(6,2) = 6 × 5 = 30.",
  porqueErradas: [
    "15 é a COMBINAÇÃO C(6,2), que ignora a ordem — erro clássico quando os cargos são distintos.",
    null,
    "12 seria 6 × 2, sem sentido: o segundo cargo tem 5 opções, não 2.",
    "36 seria 6², que admitiria a mesma pessoa nos dois cargos — impossível aqui."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Arranjos."
},
{
  id: "MAT70",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "De um grupo de 8 extensionistas, serão escolhidos 3 para uma visita técnica, sem distinção de função entre eles. Quantas equipes distintas podem ser formadas?",
  alternativas: ["56", "336", "24", "512"],
  correta: 0,
  porqueCerta: "A ordem não importa: C(8,3) = 8!/(3!·5!) = (8 × 7 × 6)/6 = 56.",
  porqueErradas: [
    null,
    "336 é o ARRANJO A(8,3) = 8 × 7 × 6 — conta cada trio 6 vezes, como se os cargos fossem distintos.",
    "24 é 4! ou 8 × 3 — sem relação com a fórmula da combinação.",
    "512 seria 8³, escolhas com repetição e ordem — não é o caso."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Combinações."
},
{
  id: "MAT71",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Lançando-se um dado comum de 6 faces, numeradas de 1 a 6, qual é a probabilidade de sair o número 5?",
  alternativas: ["1/3", "1/2", "1/6", "5/6"],
  correta: 2,
  porqueCerta: "Há 1 caso favorável em 6 possíveis, todos equiprováveis: P = 1/6.",
  porqueErradas: [
    "1/3 corresponderia a 2 faces favoráveis, não 1.",
    "1/2 valeria para eventos como “número par” (3 em 6), não para uma face específica.",
    null,
    "5/6 é a probabilidade de NÃO sair o 5 (evento complementar). Inversão típica."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples."
},
{
  id: "MAT72",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma caixa há 4 canetas vermelhas e 6 canetas azuis, idênticas ao tato. Retirando-se uma caneta ao acaso, qual é a probabilidade de ela ser vermelha?",
  alternativas: ["3/5", "2/5", "4/6", "1/10"],
  correta: 1,
  porqueCerta: "Casos favoráveis sobre total: 4/(4 + 6) = 4/10 = 2/5.",
  porqueErradas: [
    "3/5 é a probabilidade de sair AZUL (6/10). Inversão do evento pedido.",
    null,
    "4/6 compara vermelhas com azuis, mas o denominador deve ser o TOTAL (10).",
    "1/10 seria o caso de haver apenas 1 vermelha em 10."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples."
},
{
  id: "MAT73",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma urna contém 5 bolas brancas e 5 bolas pretas. Retiram-se duas bolas sucessivamente, SEM reposição. Qual é a probabilidade de ambas serem brancas?",
  alternativas: ["2/9", "1/4", "1/2", "5/9"],
  correta: 0,
  porqueCerta: "P = (5/10) × (4/9) = 20/90 = 2/9, pois após a 1ª branca restam 4 brancas em 9 bolas.",
  porqueErradas: [
    null,
    "1/4 seria o cálculo COM reposição (1/2 × 1/2) — ignora que a 1ª retirada muda o total.",
    "1/2 é a probabilidade de UMA bola ser branca, não de duas em sequência.",
    "5/9 não corresponde a nenhum passo correto (mistura numerador de um com denominador de outro)."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples."
},
{
  id: "MAT74",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em um levantamento com 100 agricultores, 60 são atendidos pela EMATER e 40 não. Entre os atendidos, 45 adotaram uma nova técnica; entre os não atendidos, 10 adotaram. Escolhido ao acaso um agricultor que ADOTOU a técnica, qual é a probabilidade de ele ser atendido pela EMATER?",
  alternativas: ["45/100", "45/60", "9/20", "9/11"],
  correta: 3,
  porqueCerta: "Adotaram: 45 + 10 = 55. Condicionando a esse grupo: P = 45/55 = 9/11.",
  porqueErradas: [
    "45/100 ignora o condicionamento (“dado que adotou”) e usa o total geral.",
    "45/60 é a probabilidade INVERSA: adotar dado que é atendido — troca condição e evento.",
    "9/20 não representa nenhuma razão correta da tabela (seria 45/100 simplificado errado).",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade condicional."
},
{
  id: "MAT75",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma moeda honesta é lançada 3 vezes. Qual é a probabilidade de sair PELO MENOS uma cara?",
  alternativas: ["1/8", "7/8", "1/2", "3/8"],
  correta: 1,
  porqueCerta: "O único caso contrário é “3 coroas”: (1/2)³ = 1/8. Logo, P = 1 − 1/8 = 7/8.",
  porqueErradas: [
    "1/8 é a probabilidade de NENHUMA cara (só coroas) — o complementar do pedido.",
    null,
    "1/2 é a probabilidade em UM lançamento, não em três com “pelo menos uma”.",
    "3/8 não corresponde ao cálculo (seria algo como somar 1/8 três vezes de forma indevida)."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples e condicional."
},
{
  id: "MAT76",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "A tabela mostra a produção de uma cooperativa: janeiro, 120 t; fevereiro, 150 t; março, 180 t. Qual foi a produção total do trimestre?",
  alternativas: ["450 t", "430 t", "400 t", "180 t"],
  correta: 0,
  porqueCerta: "Basta somar os três meses: 120 + 150 + 180 = 450 t.",
  porqueErradas: [
    null,
    "430 t resulta de erro de soma (faltam 20 t — confira 120 + 150 = 270, + 180 = 450).",
    "400 t subestima o total em 50 t; nenhum arredondamento justifica.",
    "180 t é só a produção de MARÇO, não do trimestre. Leitura parcial da tabela."
  ],
  fonte: "Conteúdo: Estatística — Leitura e interpretação de tabelas."
},
{
  id: "MAT77",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um gráfico de barras mostra os atendimentos de um escritório: segunda, 20; terça, 30; quarta, 25; quinta, 40; sexta, 35. É correto afirmar que:",
  alternativas: ["O maior movimento foi na quarta-feira, com 140 atendimentos na semana.", "O maior movimento foi na sexta-feira, com 155 atendimentos na semana.", "O maior movimento foi na quinta-feira, com 150 atendimentos na semana.", "O maior movimento foi na segunda-feira, com 150 atendimentos na semana."],
  correta: 2,
  porqueCerta: "A barra mais alta é a de quinta (40) e o total é 20 + 30 + 25 + 40 + 35 = 150.",
  porqueErradas: [
    "Quarta teve 25 (não o máximo) e o total não é 140.",
    "Sexta teve 35, menor que os 40 de quinta; e o total não é 155.",
    null,
    "Segunda teve o MENOR valor (20), embora o total da semana seja mesmo 150."
  ],
  fonte: "Conteúdo: Estatística — Leitura e interpretação de gráficos."
},
{
  id: "MAT78",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um candidato obteve em 5 simulados as notas: 6, 8, 7, 9 e 5. Qual é sua média aritmética?",
  alternativas: ["6,5", "6,8", "7,5", "7,0"],
  correta: 3,
  porqueCerta: "Média = (6 + 8 + 7 + 9 + 5)/5 = 35/5 = 7,0.",
  porqueErradas: [
    "6,5 seria a média se a soma fosse 32,5 — confira a soma: dá 35.",
    "6,8 seria a média se a soma fosse 34. Erro de soma ou de divisão.",
    "7,5 seria a média se a soma fosse 37,5 — acima do real.",
    null
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT79",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Na avaliação de um curso, a prova tem peso 3 e o trabalho tem peso 2. Um aluno tirou 6,0 na prova e 9,0 no trabalho. Qual é sua média ponderada?",
  alternativas: ["7,5", "7,2", "6,0", "9,0"],
  correta: 1,
  porqueCerta: "Média = (6×3 + 9×2)/(3 + 2) = (18 + 18)/5 = 36/5 = 7,2.",
  porqueErradas: [
    "7,5 é a média SIMPLES (6 + 9)/2 — ignora os pesos 3 e 2.",
    null,
    "6,0 é só a nota da prova, sem combinar com o trabalho.",
    "9,0 é só a nota do trabalho, sem combinar com a prova."
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT80",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "As idades de 8 participantes de um treinamento foram: 24, 27, 31, 31, 31, 35, 38, 42. Qual é a moda desse conjunto?",
  alternativas: ["31", "35", "33,25", "24"],
  correta: 0,
  porqueCerta: "Moda é o valor mais frequente: 31 aparece 3 vezes, mais que qualquer outro.",
  porqueErradas: [
    null,
    "35 aparece apenas 1 vez — não é o mais frequente.",
    "33,25 seria próximo da MÉDIA, não da moda (moda não se calcula, observa-se a frequência).",
    "24 é apenas o menor valor, que aparece 1 vez."
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT81",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Os tempos (em minutos) de 6 atendimentos foram: 5, 7, 9, 11, 20, 22. Qual é a mediana?",
  alternativas: ["9", "11", "10", "12,3"],
  correta: 2,
  porqueCerta: "Dados já ordenados e em quantidade par: mediana = média dos dois centrais = (9 + 11)/2 = 10.",
  porqueErradas: [
    "9 é o 3º valor, mas com quantidade par não se toma um único termo central.",
    "11 é o 4º valor — mesmo erro: é preciso a média dos dois centrais.",
    null,
    "12,3 é aproximadamente a MÉDIA (74/6 ≈ 12,33), não a mediana. Conceitos diferentes."
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT82",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma PA, o primeiro termo é 5 e a razão é 4. Qual é o 10º termo?",
  alternativas: ["36", "40", "45", "41"],
  correta: 3,
  porqueCerta: "an = a1 + (n − 1)·r → a10 = 5 + 9 × 4 = 5 + 36 = 41.",
  porqueErradas: [
    "36 seria 9 × 4 — faltou somar o 1º termo (5).",
    "40 seria 10 × 4 — usa n em vez de (n − 1) e ignora o a1.",
    "45 seria 5 + 10 × 4 — usa n em vez de (n − 1).",
    null
  ],
  fonte: "Conteúdo: Sequências — Progressão Aritmética (PA)."
},
{
  id: "MAT83",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Qual é a soma dos 20 primeiros números naturais positivos (1 + 2 + ... + 20)?",
  alternativas: ["210", "200", "190", "220"],
  correta: 0,
  porqueCerta: "Soma da PA: Sn = n·(a1 + an)/2 = 20 × 21/2 = 210.",
  porqueErradas: [
    null,
    "200 arredonda/erro de cálculo: 20 × 21 = 420, metade é 210.",
    "190 não corresponde à fórmula; confira a1 + an = 21.",
    "220 excede o valor em 10 — revise 20 × 21/2."
  ],
  fonte: "Conteúdo: Sequências — Progressão Aritmética (PA)."
},
{
  id: "MAT84",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Na PG (3, 6, 12, ...), qual é o 6º termo?",
  alternativas: ["48", "96", "93", "192"],
  correta: 1,
  porqueCerta: "Razão q = 2; an = a1·q^(n−1) → a6 = 3 × 2^5 = 3 × 32 = 96.",
  porqueErradas: [
    "48 é o 5º termo (3 × 16). Faltou uma multiplicação pela razão.",
    null,
    "93 seria 3 + algo (raciocínio de PA) — PG multiplica, não soma.",
    "192 é o 7º termo (96 × 2). Foi um passo além."
  ],
  fonte: "Conteúdo: Sequências — Progressão Geométrica (PG)."
},
{
  id: "MAT85",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Qual é a soma dos 5 primeiros termos da PG (2, 4, 8, 16, 32)?",
  alternativas: ["60", "64", "62", "30"],
  correta: 2,
  porqueCerta: "Soma direta: 2 + 4 + 8 + 16 + 32 = 62 (confere com Sn = 2·(2^5 − 1)/(2 − 1) = 62).",
  porqueErradas: [
    "60 erra a soma em 2 — some parcela a parcela para conferir.",
    "64 é 2^6, não a soma; confusão com potência da razão.",
    null,
    "30 seria 2 × 15 ou soma parcial — confira todas as 5 parcelas."
  ],
  fonte: "Conteúdo: Sequências — Progressão Geométrica (PG)."
},
{
  id: "MAT86",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "De um grupo de 5 técnicos (3 mulheres e 2 homens), sorteiam-se 2 ao acaso. Qual é a probabilidade de sair 1 mulher e 1 homem?",
  alternativas: ["1/5", "2/5", "1/2", "3/5"],
  correta: 3,
  porqueCerta: "Total: C(5,2) = 10. Favoráveis: C(3,1) × C(2,1) = 3 × 2 = 6. P = 6/10 = 3/5.",
  porqueErradas: [
    "1/5 seria 2/10 — conta só 2 casos favoráveis, ignorando as combinações mulher-homem.",
    "2/5 seria 4/10 — subconta os pares possíveis (são 3 × 2 = 6).",
    "1/2 é um “chute de equiprobabilidade” sem contar os casos do problema.",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Combinações e probabilidade simples."
}
];