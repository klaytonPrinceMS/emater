/* Lote MAT reforço — PFC / princípio multiplicativo e aditivo (MAT247–MAT251) + argumentação lógica (MAT252–MAT257). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_REFORCO = [
{
  id: "MAT247",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um kit de atendimento é montado com 1 modelo de pasta (5 modelos), 1 cor de etiqueta (3 cores) e 1 tamanho de envelope (2 tamanhos). Quantos kits diferentes podem ser montados?",
  alternativas: ["10", "30", "15", "60"],
  correta: 1,
  porqueCerta: "Escolhas sucessivas e independentes: pelo Princípio Fundamental da Contagem (multiplicativo), 5 × 3 × 2 = 30 kits.",
  porqueErradas: [
    "10 seria a SOMA (5 + 3 + 2). Em etapas sucessivas, multiplica-se, não se soma.",
    null,
    "15 é 5 × 3 — faltou multiplicar pelos 2 tamanhos de envelope.",
    "60 seria 5 × 3 × 2 × 2 — multiplica por 2 uma vez a mais, sem base no problema."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem (princípio multiplicativo)."
},
{
  id: "MAT248",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Para ir ao local da prova, um candidato pode escolher 1 horário entre 4 ônibus disponíveis OU 1 horário entre 3 vans disponíveis. De quantas maneiras ele pode escolher o transporte?",
  alternativas: ["12", "5", "6", "7"],
  correta: 3,
  porqueCerta: "As opções são excludentes (ou um, ou outro): aplica-se o princípio aditivo, 4 + 3 = 7 maneiras.",
  porqueErradas: [
    "12 seria 4 × 3 — multiplicação indevida: ela valeria para escolhas SUCESSIVAS (um E outro), não para alternativas excludentes.",
    "5 não resulta de nenhuma operação correta com 4 e 3.",
    "6 seria 3 × 2 ou 4 + 2 — sem relação com os dados (4 ônibus e 3 vans).",
    null
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem (princípio aditivo)."
},
{
  id: "MAT249",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma senha de 4 dígitos (cada dígito de 0 a 9, com repetição permitida) não pode começar com zero. Quantas senhas diferentes são possíveis?",
  alternativas: ["9.000", "10.000", "900", "5.040"],
  correta: 0,
  porqueCerta: "1ª posição: 9 opções (1 a 9); demais: 10 cada. Pelo princípio multiplicativo: 9 × 10 × 10 × 10 = 9.000.",
  porqueErradas: [
    null,
    "10.000 seria 10 × 10 × 10 × 10 — ignora a restrição de que o 1º dígito não pode ser zero.",
    "900 seria 9 × 10 × 10 — conta só 3 posições, faltando um dígito.",
    "5.040 não corresponde ao cálculo (é da ordem de 9 × 8 × 7 × 10, que valeria para dígitos distintos — aqui a repetição é permitida)."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem com restrição."
},
{
  id: "MAT250",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Uma comissão terá 1 representante dos técnicos (5 candidatos) e 1 representante dos administrativos (4 candidatos). Quantas formações distintas são possíveis?",
  alternativas: ["9", "10", "20", "40"],
  correta: 2,
  porqueCerta: "Duas escolhas sucessivas e independentes: 5 × 4 = 20 formações (princípio multiplicativo).",
  porqueErradas: [
    "9 seria a SOMA (5 + 4) — em escolhas sucessivas multiplica-se, não se soma.",
    "10 seria 5 × 2 ou 5 + 5 — sem relação com os 4 administrativos.",
    null,
    "40 seria 5 × 4 × 2 — dobra o total sem motivo (não há terceira etapa nem ordem a considerar)."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio Fundamental da Contagem (princípio multiplicativo)."
},
{
  id: "MAT251",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Probabilidade, combinatória e estatística",
  enunciado: "Um servidor deve escolher 1 equipamento (2 impressoras OU 3 scanners) e, em seguida, 1 tipo de papel entre 3 tipos. Quantas combinações equipamento + papel são possíveis?",
  alternativas: ["8", "15", "10", "25"],
  correta: 1,
  porqueCerta: "Primeiro o princípio aditivo (2 + 3 = 5 equipamentos possíveis) e depois o multiplicativo com o papel: 5 × 3 = 15 combinações.",
  porqueErradas: [
    "8 seria a soma total (2 + 3 + 3) — soma etapas que devem ser multiplicadas (equipamento E papel).",
    null,
    "10 seria 2 × 5 ou 5 + 5 — ignora que são 3 tipos de papel, não 2.",
    "25 seria 5 × 5 — usa 5 opções de papel em vez das 3 informadas."
  ],
  fonte: "Conteúdo: Análise Combinatória e Probabilidade — Princípio aditivo combinado ao multiplicativo."
},
{
  id: "MAT252",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Lógica proposicional",
  enunciado: "Considere o argumento: “Se o relatório está completo, então será arquivado. O relatório NÃO foi arquivado. Logo, o relatório não está completo.” O argumento é:",
  alternativas: ["Inválido, pois a conclusão nega uma premissa.", "Inválido, pois afirma o consequente.", "Válido, pois aplica o modus tollens (negação do consequente).", "Válido, pois afirma o antecedente."],
  correta: 2,
  porqueCerta: "Forma p → q, ~q ⊢ ~p: negando o consequente, o antecedente cai necessariamente. Se o relatório estivesse completo, teria sido arquivado; como não foi, não está completo. É o modus tollens, válido.",
  porqueErradas: [
    "Negar o consequente é justamente o passo legítimo do modus tollens, não um defeito.",
    "Nada foi afirmado; o consequente foi NEGADO (“não foi arquivado”), não afirmado.",
    null,
    "Nada foi afirmado; o antecedente aparece negado na conclusão (“não está completo”). Afirmar o antecedente seria o modus ponens, que não é o caso."
  ],
  fonte: "Conteúdo: Raciocínio Lógico-Matemático — argumentação lógica; validade de argumentos (modus tollens)."
},
{
  id: "MAT253",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Lógica proposicional",
  enunciado: "Considere o argumento: “Se o candidato pagou a taxa, então está inscrito. O candidato NÃO pagou a taxa. Logo, o candidato não está inscrito.” O argumento é:",
  alternativas: ["Inválido, pois nega o antecedente: ele pode estar inscrito por isenção, por exemplo.", "Válido (modus ponens).", "Válido (modus tollens).", "Válido, pois a negação do antecedente garante a negação do consequente."],
  correta: 0,
  porqueCerta: "Forma p → q, ~p ⊢ ~q: falácia da negação do antecedente. Com p=F e q=V a condicional é V e a conclusão é F, logo a conclusão não é garantida (isenção é um contraexemplo concreto).",
  porqueErradas: [
    null,
    "Modus ponens afirmaria o antecedente (“pagou a taxa”), o que não ocorre.",
    "Modus tollens negaria o consequente (“não está inscrito” como premissa), o que não ocorre — a negação está na conclusão.",
    "É exatamente a falácia: negar o antecedente NADA garante sobre o consequente."
  ],
  fonte: "Conteúdo: Raciocínio Lógico-Matemático — argumentação lógica; validade ou invalidade de argumentos."
},
{
  id: "MAT254",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Lógica proposicional",
  enunciado: "Considere o argumento: “Todos os documentos do lote Y são arquivos permanentes. Todos os arquivos permanentes têm guarda definitiva. Logo, todos os documentos do lote Y têm guarda definitiva.” O argumento é:",
  alternativas: ["Inválido, pois tem duas premissas universais.", "Inválido, pois a conclusão repete termos das premissas.", "Válido, pois afirma o consequente.", "Válido, pois é um silogismo categórico correto (Todo C é A; Todo A é B; logo Todo C é B)."],
  correta: 3,
  porqueCerta: "O termo médio (“arquivos permanentes”) distribui a propriedade: tudo que vale para a categoria maior (guarda definitiva) vale para o lote incluído nela. Premissas verdadeiras garantem a conclusão — silogismo válido.",
  porqueErradas: [
    "Ter duas premissas universais não invalida; essa é justamente a forma clássica do silogismo válido (modo Barbara).",
    "Repetir termos é exigido no silogismo (termo médio liga as premissas); não é defeito.",
    "Nada de condicional foi afirmado aqui; são proposições categóricas (“todo ... é ...”), não “se... então”.",
    null
  ],
  fonte: "Conteúdo: Raciocínio Lógico-Matemático — argumentação lógica; silogismos."
},
{
  id: "MAT255",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Lógica proposicional",
  enunciado: "Considere o argumento: “Todos os chefes participaram da reunião. Alguns servidores participaram da reunião. Logo, alguns servidores são chefes.” O argumento é:",
  alternativas: ["Válido, pois as premissas são verdadeiras.", "Inválido: participar da reunião não identifica ninguém como chefe — os servidores podem ter participado por outro motivo.", "Válido, pois a conclusão é particular.", "Válido, pois é um silogismo com duas premissas."],
  correta: 1,
  porqueCerta: "O termo médio (“participaram da reunião”) não é distribuído em nenhuma premissa: saber que dois grupos participaram não permite concluir que um pertence ao outro. Contraexemplo: todos os chefes (5) e 20 servidores participaram; nenhum servidor é chefe e as premissas seguem verdadeiras.",
  porqueErradas: [
    "Premissas verdadeiras não bastam: validade é garantia formal — com essas premissas a conclusão pode ser falsa.",
    null,
    "A conclusão ser particular não a torna válida; é a ligação com as premissas que decide.",
    "Ter duas premissas não garante validade; a forma (termo médio não distribuído) é falaciosa."
  ],
  fonte: "Conteúdo: Raciocínio Lógico-Matemático — argumentação lógica; validade ou invalidade de silogismos."
},
{
  id: "MAT256",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Lógica proposicional",
  enunciado: "Sobre validade e verdade na argumentação lógica, assinale a alternativa correta:",
  alternativas: ["Todo argumento com conclusão verdadeira é válido.", "Todo argumento válido tem premissas verdadeiras.", "Um argumento válido com premissas verdadeiras tem conclusão necessariamente verdadeira.", "Um argumento inválido nunca tem conclusão verdadeira."],
  correta: 2,
  porqueCerta: "É a definição de argumento válido (preserva a verdade): sendo impossível ter premissas V e conclusão F, premissas verdadeiras forçam a conclusão verdadeira. Validade é da FORMA; verdade é do CONTEÚDO.",
  porqueErradas: [
    "A conclusão pode ser verdadeira por acaso num argumento inválido (premissas sem ligação com ela). Verdade da conclusão não prova validade.",
    "Validade independe do conteúdo: um argumento pode ser válido com premissas falsas (a garantia é condicional: SE as premissas fossem V, a conclusão seria V).",
    null,
    "Um argumento inválido pode concluir algo verdadeiro por coincidência; a invalidade só diz que as premissas não GARANTEM a conclusão."
  ],
  fonte: "Conteúdo: Raciocínio Lógico-Matemático — argumentação lógica; validade, premissas e conclusão."
},
{
  id: "MAT257",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Lógica proposicional",
  enunciado: "Considere o argumento: “Se choveu, então a estrada ficou interditada. Se a estrada ficou interditada, então a visita foi adiada. Choveu. Logo, a visita foi adiada.” O argumento é:",
  alternativas: ["Válido, por dedução encadeada: de “choveu” segue a interdição e dela o adiamento.", "Inválido, pois tem três premissas.", "Inválido, pois a conclusão não é condicional.", "Válido, pois nega o consequente."],
  correta: 0,
  porqueCerta: "Dedução em cadeia: choveu (p), logo estrada interditada (q, por modus ponens na 1ª premissa); logo visita adiada (r, por modus ponens na 2ª). Cada passo é válido, então a conclusão segue necessariamente.",
  porqueErradas: [
    null,
    "O número de premissas não invalida; três premissas bem encadeadas sustentam a dedução.",
    "A conclusão não precisa ser condicional; aqui as condicionais encadeadas mais o fato (“choveu”) deduzem um fato.",
    "Nada foi negado; os antecedentes foram afirmados em sequência (modus ponens duplo), não negados."
  ],
  fonte: "Conteúdo: Raciocínio Lógico-Matemático — argumentação lógica; dedução e silogismo hipotético."
}
];
