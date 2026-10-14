/* Lote MAT Probabilidade 2 — Probabilidade, combinatória e estatística (MAT167–MAT186). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_PROBABILIDADE_2 = [
{
  id: "MAT167",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Quantos anagramas distintos podem ser formados com as letras da palavra EMATER?",
  alternativas: ["180", "240", "360", "720"],
  correta: 2,
  porqueCerta: "São 6 letras com a letra E repetida 2 vezes: 6!/2! = 720/2 = 360 anagramas.",
  porqueErradas: [
    "180 é a metade do valor correto (dividiu por 2 duas vezes, sem motivo).",
    "240 não corresponde a nenhuma operação correta com 6 letras e 1 repetição dupla.",
    null,
    "720 seria o total SEM desconto da repetição do E (6!). É preciso dividir por 2!."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Permutação com repetição."
},
{
  id: "MAT168",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Entre 10 servidores, serão escolhidos 2 para representar o setor em uma reunião, sem distinção de função entre eles. Quantas duplas distintas podem ser formadas?",
  alternativas: ["45", "90", "20", "100"],
  correta: 0,
  porqueCerta: "A ordem não importa: C(10,2) = 10×9/2 = 45.",
  porqueErradas: [
    null,
    "90 é o ARRANJO A(10,2) = 10 × 9 — conta cada dupla duas vezes, como se a ordem importasse.",
    "20 seria 10 × 2, sem sentido na fórmula da combinação.",
    "100 seria 10², que admite repetição e ordem — não é o caso."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Combinações."
},
{
  id: "MAT169",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma senha de 3 algarismos distintos será formada com os dígitos de 1 a 9. Quantas senhas diferentes são possíveis?",
  alternativas: ["81", "243", "729", "504"],
  correta: 3,
  porqueCerta: "A ordem importa e não há repetição: 9 × 8 × 7 = 504.",
  porqueErradas: [
    "81 seria 9² — conta só 2 posições, faltando a terceira.",
    "243 é 3^5, sem relação com 9 dígitos em 3 posições distintas.",
    "729 seria 9³, que admite repetição — aqui os algarismos devem ser distintos.",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Arranjos."
},
{
  id: "MAT170",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Lançam-se dois dados honestos de 6 faces. Assinale a alternativa INCORRETA:",
  alternativas: ["A probabilidade de a soma ser 7 é 1/6.", "A probabilidade de a soma ser 2 é 2/36.", "A probabilidade de a soma ser 12 é 1/36.", "A probabilidade de a soma ser 7 ou 11 é 2/9."],
  correta: 1,
  porqueCerta: "A soma 2 ocorre de 1 único modo (1+1) em 36 resultados: P = 1/36, não 2/36. Logo, a afirmativa B é a incorreta.",
  porqueErradas: [
    "Está correta: a soma 7 tem 6 casos em 36, ou seja, 6/36 = 1/6.",
    null,
    "Está correta: a soma 12 só ocorre com (6,6): 1/36.",
    "Está correta: somas 7 (6 casos) e 11 (2 casos) somam 8/36 = 2/9."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples."
},
{
  id: "MAT171",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma urna contém 6 bolas vermelhas e 4 bolas brancas. Retiram-se duas bolas sucessivamente, SEM reposição. Qual é a probabilidade de ambas serem vermelhas?",
  alternativas: ["1/4", "1/5", "1/3", "3/5"],
  correta: 2,
  porqueCerta: "P = (6/10) × (5/9) = 30/90 = 1/3, pois após a 1ª vermelha restam 5 vermelhas em 9 bolas.",
  porqueErradas: [
    "1/4 não corresponde ao produto correto (6/10 × 5/9). Confira as frações passo a passo.",
    "1/5 subestima a probabilidade — o cálculo correto dá 30/90.",
    null,
    "3/5 é a probabilidade de UMA bola ser vermelha, não de duas em sequência sem reposição."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples."
},
{
  id: "MAT172",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em um mutirão, 120 produtores participaram: 80 receberam visita técnica e 40 não. Entre os que receberam visita, 60 ampliaram a área plantada; entre os que não receberam, 10 ampliaram. Escolhido ao acaso um produtor que AMPLIOU a área, qual é a probabilidade de ele ter recebido visita técnica?",
  alternativas: ["6/7", "3/4", "1/2", "60/120"],
  correta: 0,
  porqueCerta: "Ampliaram: 60 + 10 = 70. Condicionando a esse grupo: P = 60/70 = 6/7.",
  porqueErradas: [
    null,
    "3/4 é 60/80, a probabilidade INVERSA (ampliar dado que recebeu visita) — troca condição e evento.",
    "1/2 é um chute sem contar os casos da tabela.",
    "60/120 ignora o condicionamento (“dado que ampliou”) e usa o total geral."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade condicional."
},
{
  id: "MAT173",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Considere o conjunto {2, 3, 5, 5, 7, 9}. Assinale a alternativa INCORRETA:",
  alternativas: ["A moda do conjunto é 5.", "A mediana do conjunto é 5.", "A média do conjunto é maior que a moda.", "A média do conjunto é 7."],
  correta: 3,
  porqueCerta: "A soma é 2+3+5+5+7+9 = 31 e a média é 31/6 ≈ 5,17, não 7. Logo, a afirmativa D é a incorreta.",
  porqueErradas: [
    "Está correta: 5 aparece 2 vezes, mais que qualquer outro valor — é a moda.",
    "Está correta: com 6 valores ordenados, a mediana é a média dos dois centrais (5+5)/2 = 5.",
    "Está correta: 31/6 ≈ 5,17, que é maior que a moda (5).",
    null
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT174",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Os tempos (em minutos) de 5 atendimentos foram: 12, 15, 14, 10 e 18. Qual é a mediana?",
  alternativas: ["12", "14", "15", "13,8"],
  correta: 1,
  porqueCerta: "Ordenando (10, 12, 14, 15, 18), com quantidade ímpar a mediana é o termo central: 14.",
  porqueErradas: [
    "12 é o 2º valor ordenado, não o central (é preciso ordenar antes de localizar o meio).",
    null,
    "15 é o 4º valor ordenado, acima do centro.",
    "13,8 é a MÉDIA (69/5), não a mediana. Conceitos diferentes."
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT175",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma avaliação tem três partes com pesos 2, 3 e 5. Um candidato tirou 8, 7 e 6, respectivamente. Qual é sua média ponderada?",
  alternativas: ["7,0", "6,0", "6,7", "7,3"],
  correta: 2,
  porqueCerta: "Média = (8×2 + 7×3 + 6×5)/(2+3+5) = (16+21+30)/10 = 67/10 = 6,7.",
  porqueErradas: [
    "7,0 é a média SIMPLES (8+7+6)/3 — ignora os pesos 2, 3 e 5.",
    "6,0 é só a menor nota, sem combinar as três partes.",
    null,
    "7,3 não resulta do cálculo ponderado correto; refaça (16+21+30)/10."
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT176",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um gráfico de setores mostra 200 produtores: milho 40%, feijão 30%, café 20% e outros 10%. Assinale a alternativa INCORRETA:",
  alternativas: ["O número de produtores de “outros” é 30.", "O número de produtores de milho é 80.", "O número de produtores de feijão é 60.", "O número de produtores de café é 40."],
  correta: 0,
  porqueCerta: "10% de 200 = 20, não 30. Logo, a afirmativa A é a incorreta.",
  porqueErradas: [
    null,
    "Está correta: 40% de 200 = 80.",
    "Está correta: 30% de 200 = 60.",
    "Está correta: 20% de 200 = 40."
  ],
  fonte: "Conteúdo: Estatística — Leitura e interpretação de gráficos."
},
{
  id: "MAT177",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Em uma PA, o primeiro termo é 8 e a razão é 5. Qual é o 12º termo?",
  alternativas: ["58", "63", "68", "60"],
  correta: 1,
  porqueCerta: "an = a1 + (n − 1)·r → a12 = 8 + 11 × 5 = 8 + 55 = 63.",
  porqueErradas: [
    "58 seria 8 + 10 × 5, isto é, o 11º termo — faltou um passo da razão.",
    null,
    "68 seria o 13º termo (8 + 12 × 5). Foi um passo além.",
    "60 seria 12 × 5 — usa n em vez de (n − 1) e ignora o a1."
  ],
  fonte: "Conteúdo: Sequências — Progressão Aritmética (PA)."
},
{
  id: "MAT178",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Na PG (5, 10, 20, ...), qual é o 7º termo?",
  alternativas: ["160", "640", "80", "320"],
  correta: 3,
  porqueCerta: "Razão q = 2; an = a1·q^(n−1) → a7 = 5 × 2^6 = 5 × 64 = 320.",
  porqueErradas: [
    "160 é o 6º termo (5 × 32). Faltou uma multiplicação pela razão.",
    "640 é o 8º termo (320 × 2). Foi um passo além.",
    "80 é o 5º termo (5 × 16). Faltaram dois passos.",
    null
  ],
  fonte: "Conteúdo: Sequências — Progressão Geométrica (PG)."
},
{
  id: "MAT179",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Observe a sequência: 2, 6, 12, 20, 30, ... Qual é o próximo termo?",
  alternativas: ["36", "40", "42", "44"],
  correta: 2,
  porqueCerta: "As diferenças são 4, 6, 8, 10, ... (aumentam de 2 em 2). A próxima diferença é 12: 30 + 12 = 42.",
  porqueErradas: [
    "36 seria 30 + 6 — repete uma diferença antiga em vez de seguir o padrão +2.",
    "40 seria 30 + 10 — repete a última diferença, sem avançar o padrão.",
    null,
    "44 seria 30 + 14 — pula uma etapa do padrão de diferenças."
  ],
  fonte: "Conteúdo: Sequências Lógicas."
},
{
  id: "MAT180",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Sobre contagem, assinale a alternativa INCORRETA:",
  alternativas: ["O número de trios sem ordem entre 8 pessoas é 8 × 7 × 6 = 336.", "O número de trios sem ordem entre 8 pessoas é C(8,3) = 56.", "Permutar 4 objetos distintos dá 4! = 24.", "Com 4 × 3 × 2 possibilidades sucessivas, o total é 24 pelo Princípio Fundamental da Contagem."],
  correta: 0,
  porqueCerta: "8 × 7 × 6 = 336 é o ARRANJO (com ordem). Sem ordem, divide-se por 3! = 6: 336/6 = 56. Logo, a afirmativa A é a incorreta.",
  porqueErradas: [
    null,
    "Está correta: C(8,3) = (8×7×6)/6 = 56.",
    "Está correta: 4! = 4×3×2×1 = 24.",
    "Está correta: escolhas sucessivas e independentes se multiplicam."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Combinações e Princípio Fundamental da Contagem."
},
{
  id: "MAT181",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "A previsão indica 70% de chance de chuva em certo dia. Qual é a probabilidade de NÃO chover nesse dia?",
  alternativas: ["70%", "30%", "35%", "50%"],
  correta: 1,
  porqueCerta: "Eventos complementares somam 100%: P(não chover) = 100% − 70% = 30%.",
  porqueErradas: [
    "70% é a probabilidade de CHOVER, o evento oposto ao pedido.",
    null,
    "35% seria a metade de 70%, sem relação com complementaridade.",
    "50% é um chute de equiprobabilidade que ignora o dado do problema."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples."
},
{
  id: "MAT182",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um dado comum é lançado 2 vezes. Qual é a probabilidade de sair PELO MENOS um 6?",
  alternativas: ["1/6", "1/3", "25/36", "11/36"],
  correta: 3,
  porqueCerta: "O caso contrário (nenhum 6) tem P = (5/6)² = 25/36. Logo, P = 1 − 25/36 = 11/36.",
  porqueErradas: [
    "1/6 é a probabilidade em UM lançamento, não em dois com “pelo menos um”.",
    "1/3 não corresponde ao cálculo (seria algo como somar 1/6 + 1/6 de forma indevida).",
    "25/36 é a probabilidade de NENHUM 6 (o complementar do pedido).",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Probabilidade simples."
},
{
  id: "MAT183",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um cofre tem senha de 3 dígitos (cada um de 0 a 9), com repetição permitida. Quantas senhas diferentes são possíveis?",
  alternativas: ["30", "300", "1000", "504"],
  correta: 2,
  porqueCerta: "Com repetição, cada posição tem 10 opções: 10 × 10 × 10 = 1000.",
  porqueErradas: [
    "30 seria 10 + 10 + 10 — em escolhas sucessivas multiplica-se, não se soma.",
    "300 seria 3 × 100 ou 10 × 10 × 3 — cálculo sem base no problema.",
    null,
    "504 seria 9 × 8 × 7 — vale para 9 dígitos DISTINTOS, não para 10 dígitos com repetição."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem."
},
{
  id: "MAT184",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "A produção de leite (em litros) de uma propriedade em 5 dias foi: 20, 22, 22, 25 e 26. Qual é a produção média diária?",
  alternativas: ["22", "23", "22,5", "25"],
  correta: 1,
  porqueCerta: "Média = (20 + 22 + 22 + 25 + 26)/5 = 115/5 = 23 litros.",
  porqueErradas: [
    "22 é a MODA (valor mais frequente), não a média.",
    null,
    "22,5 não resulta da soma correta ( confira: 20+22+22+25+26 = 115).",
    "25 é apenas um dos valores observados, não a média do conjunto."
  ],
  fonte: "Conteúdo: Estatística — Média, moda e mediana."
},
{
  id: "MAT185",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Qual é a soma dos 30 primeiros números naturais positivos (1 + 2 + ... + 30)?",
  alternativas: ["450", "435", "480", "465"],
  correta: 3,
  porqueCerta: "Soma da PA: Sn = n·(a1 + an)/2 = 30 × 31/2 = 465.",
  porqueErradas: [
    "450 não corresponde à fórmula; confira 30 × 31 = 930, metade é 465.",
    "435 é a soma de 1 até 29 — faltou o último termo (30).",
    "480 excede o valor em 15 — revise a1 + an = 31.",
    null
  ],
  fonte: "Conteúdo: Sequências — Progressão Aritmética (PA)."
},
{
  id: "MAT186",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Sobre a PG (4, 12, 36, ...), assinale a alternativa INCORRETA:",
  alternativas: ["A soma dos 4 primeiros termos é 150.", "A razão da PG é 3.", "O 4º termo da PG é 108.", "A soma dos 3 primeiros termos é 52."],
  correta: 0,
  porqueCerta: "Os 4 primeiros termos são 4, 12, 36 e 108, cuja soma é 160, não 150. Logo, a afirmativa A é a incorreta.",
  porqueErradas: [
    null,
    "Está correta: 12/4 = 3 (cada termo é o anterior × 3).",
    "Está correta: 36 × 3 = 108.",
    "Está correta: 4 + 12 + 36 = 52."
  ],
  fonte: "Conteúdo: Sequências — Progressão Geométrica (PG)."
}
];
