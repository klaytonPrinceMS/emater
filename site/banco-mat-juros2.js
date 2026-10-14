/* Lote MAT — Juros, descontos e matemática financeira 2 (20 questões MAT127–MAT146). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_JUROS_2 = [
{
  id: "MAT127",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 1.800,00 foi aplicado a juros simples de 5% ao mês durante 3 meses. O montante ao final da aplicação é:",
  alternativas: ["R$ 270,00", "R$ 1.890,00", "R$ 2.070,00", "R$ 2.700,00"],
  correta: 2,
  porqueCerta: "J = 1.800 x 0,05 x 3 = R$ 270,00. Montante M = C + J = 1.800 + 270 = R$ 2.070,00.",
  porqueErradas: [
    "R$ 270,00 são só os JUROS, não o montante. Faltou somar o capital inicial.",
    "R$ 1.890,00 é o montante após apenas 1 mês (1.800 + 90). Faltaram 2 meses.",
    null,
    "R$ 2.700,00 somaria R$ 900,00 de juros (seria 50% em 3 meses, ou ~16,7% ao mês)."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT128",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 6.000,00 foi aplicado a juros simples de 18% ao ano durante 8 meses. O valor dos juros é:",
  alternativas: ["R$ 720,00", "R$ 240,00", "R$ 960,00", "R$ 6.720,00"],
  correta: 0,
  porqueCerta: "8 meses = 8/12 do ano. J = 6.000 x 0,18 x 8/12 = 6.000 x 0,12 = R$ 720,00.",
  porqueErradas: [
    null,
    "R$ 240,00 seria o juro de menos de 3 meses nessa taxa (ou de 8 meses a 6% ao ano).",
    "R$ 960,00 aplicaria 16% sobre o capital, sem a conversão correta de 18% a.a. para 8 meses.",
    "R$ 6.720,00 é o MONTANTE (6.000 + 720), não os juros."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT129",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 3.000,00 foi aplicado a juros compostos de 2% ao mês durante 2 meses. O montante ao final é:",
  alternativas: ["R$ 3.120,00", "R$ 3.060,00", "R$ 121,20", "R$ 3.121,20"],
  correta: 3,
  porqueCerta: "M = 3.000 x 1,02^2 = 3.000 x 1,0404 = R$ 3.121,20. No 2º mês os juros incidem sobre R$ 3.060,00.",
  porqueErradas: [
    "R$ 3.120,00 é o montante a JUROS SIMPLES (3.000 + 120). Erro clássico: não capitalizar o 2º mês.",
    "R$ 3.060,00 é o montante após apenas 1 mês. Faltou o 2º mês.",
    "R$ 121,20 são só os JUROS (3.121,20 − 3.000), não o montante.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros compostos."
},
{
  id: "MAT130",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Uma mercadoria de R$ 640,00 está com desconto de 25% para pagamento à vista. O preço à vista é:",
  alternativas: ["R$ 160,00", "R$ 480,00", "R$ 800,00", "R$ 400,00"],
  correta: 1,
  porqueCerta: "Desconto = 25% de 640 = R$ 160,00. Preço à vista = 640 − 160 = R$ 480,00 (ou 640 x 0,75).",
  porqueErradas: [
    "R$ 160,00 é o valor DO DESCONTO, não o preço final. Parou no meio do cálculo.",
    null,
    "R$ 800,00 soma o desconto em vez de subtrair (seria um acréscimo de 25%).",
    "R$ 400,00 seria um desconto de 37,5%, não de 25%."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT131",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um produto de R$ 1.000,00 sofreu dois aumentos sucessivos de 10% e 10%. O preço final é:",
  alternativas: ["R$ 1.200,00", "R$ 200,00", "R$ 1.210,00", "R$ 1.100,00"],
  correta: 2,
  porqueCerta: "1º aumento: 1.000 x 1,10 = 1.100. 2º aumento: 1.100 x 1,10 = R$ 1.210,00. A taxa acumulada é 21% (1,1 x 1,1 = 1,21), não 20%.",
  porqueErradas: [
    "R$ 1.200,00 soma as taxas (10% + 10% = 20%). Erro clássico: aumentos sucessivos se multiplicam, não se somam.",
    "R$ 200,00 é só o valor de um aumento de 20% sobre 1.000, não o preço final.",
    null,
    "R$ 1.100,00 aplica só o primeiro aumento e ignora o segundo."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT132",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Uma aplicação a juros simples de 2% ao mês rendeu R$ 800,00 de juros em 5 meses. O capital aplicado foi de:",
  alternativas: ["R$ 8.000,00", "R$ 880,00", "R$ 4.000,00", "R$ 800,00"],
  correta: 0,
  porqueCerta: "C = J / (i x t) = 800 / (0,02 x 5) = 800 / 0,10 = R$ 8.000,00. Conferindo: 8.000 x 0,02 x 5 = 800.",
  porqueErradas: [
    null,
    "R$ 880,00 confunde o cálculo e soma algo ao juro, sem relação com a fórmula do capital.",
    "R$ 4.000,00 renderia só R$ 400,00 em 5 meses a 2% ao mês, metade do observado.",
    "R$ 800,00 é o valor dos JUROS, não do capital."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT133",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Sobre juros simples e compostos, assinale a alternativa INCORRETA:",
  alternativas: ["Nos juros simples, os juros de cada período incidem sempre sobre o capital inicial.", "Nos juros compostos, os juros de cada período incidem sobre o montante do período anterior.", "O montante é sempre a soma do capital com os juros (M = C + J).", "No regime de juros simples, o montante cresce em progressão geométrica."],
  correta: 3,
  porqueCerta: "No regime simples o juro é constante (C x i) e o montante cresce em progressão ARITMÉTICA, não geométrica. O crescimento geométrico (juros sobre juros) é a marca dos juros compostos.",
  porqueErradas: [
    "Alternativa CORRETA: essa é exatamente a definição dos juros simples — base fixa no capital inicial.",
    "Alternativa CORRETA: é a definição de capitalização composta (juros sobre juros).",
    "Alternativa CORRETA: M = C + J vale nos dois regimes, por definição.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Conceitos de capital, juros e montante."
},
{
  id: "MAT134",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um título de R$ 5.000,00 foi pago com 4 meses de antecedência, com desconto simples de 3% ao mês. O valor atual (valor pago) é:",
  alternativas: ["R$ 5.600,00", "R$ 4.400,00", "R$ 600,00", "R$ 4.850,00"],
  correta: 1,
  porqueCerta: "Desconto = 5.000 x 0,03 x 4 = R$ 600,00. Valor atual = 5.000 − 600 = R$ 4.400,00.",
  porqueErradas: [
    "R$ 5.600,00 soma o desconto em vez de subtrair.",
    null,
    "R$ 600,00 é o valor DO DESCONTO, não o valor pago. Faltou subtrair do nominal.",
    "R$ 4.850,00 considera apenas 1 mês de antecipação (desconto de R$ 150,00)."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT135",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 4.000,00 foi aplicado a juros compostos de 1% ao mês durante 2 meses. O montante ao final é:",
  alternativas: ["R$ 4.080,40", "R$ 4.080,00", "R$ 80,40", "R$ 4.040,00"],
  correta: 0,
  porqueCerta: "M = 4.000 x 1,01^2 = 4.000 x 1,0201 = R$ 4.080,40. Os R$ 0,40 a mais vêm dos juros do 2º mês sobre os juros do 1º mês.",
  porqueErradas: [
    null,
    "R$ 4.080,00 é o montante a JUROS SIMPLES (4.000 + 80). Nos compostos há R$ 0,40 a mais.",
    "R$ 80,40 são só os JUROS (4.080,40 − 4.000), não o montante.",
    "R$ 4.040,00 é o montante após apenas 1 mês."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros compostos."
},
{
  id: "MAT136",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "A juros simples de 5% ao mês, em quanto tempo um capital dobra de valor (juros iguais ao capital)?",
  alternativas: ["10 meses", "15 meses", "20 meses", "25 meses"],
  correta: 2,
  porqueCerta: "Para dobrar, J = C: C x 0,05 x t = C, logo t = 1 / 0,05 = 20 meses.",
  porqueErradas: [
    "Em 10 meses os juros seriam 50% do capital (0,05 x 10), metade do necessário para dobrar.",
    "Em 15 meses os juros seriam 75% do capital; faltariam 5 meses.",
    null,
    "Em 25 meses os juros seriam 125% do capital, passando do dobro."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT137",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um produto de R$ 500,00 sofreu um acréscimo de 30%. O novo preço é:",
  alternativas: ["R$ 150,00", "R$ 650,00", "R$ 600,00", "R$ 350,00"],
  correta: 1,
  porqueCerta: "Acréscimo = 30% de 500 = R$ 150,00. Novo preço = 500 + 150 = R$ 650,00 (ou 500 x 1,30).",
  porqueErradas: [
    "R$ 150,00 é só o valor DO ACRÉSCIMO, não o preço final. Faltou somar ao valor inicial.",
    null,
    "R$ 600,00 seria um acréscimo de apenas 20%.",
    "R$ 350,00 subtrai 30% em vez de somar (é um desconto, não um acréscimo)."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT138",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Sobre descontos e acréscimos percentuais, assinale a alternativa INCORRETA:",
  alternativas: ["Um desconto de 20% equivale a multiplicar o valor por 0,80.", "Um acréscimo de 25% equivale a multiplicar o valor por 1,25.", "Um desconto de 50% seguido de um acréscimo de 100% retorna o valor ao original.", "Um aumento de 20% seguido de um desconto de 20% retorna o preço ao valor original."],
  correta: 3,
  porqueCerta: "1,20 x 0,80 = 0,96: o preço final fica 4% ABAIXO do original, porque o desconto incide sobre a base maior (já aumentada). Aumentos e descontos de mesma taxa não se anulam.",
  porqueErradas: [
    "Alternativa CORRETA: 1 − 0,20 = 0,80, fator clássico do desconto de 20%.",
    "Alternativa CORRETA: 1 + 0,25 = 1,25, fator clássico do acréscimo de 25%.",
    "Alternativa CORRETA: 0,50 x 2,00 = 1,00, logo retorna exatamente ao original.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT139",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 12.000,00 foi aplicado a juros simples de 1,5% ao mês durante 6 meses. O montante ao final é:",
  alternativas: ["R$ 13.080,00", "R$ 1.080,00", "R$ 12.180,00", "R$ 13.800,00"],
  correta: 0,
  porqueCerta: "J = 12.000 x 0,015 x 6 = 12.000 x 0,09 = R$ 1.080,00. Montante M = 12.000 + 1.080 = R$ 13.080,00.",
  porqueErradas: [
    null,
    "R$ 1.080,00 são só os JUROS, não o montante. Faltou somar o capital.",
    "R$ 12.180,00 considera apenas 1 mês de juros (R$ 180,00).",
    "R$ 13.800,00 seria o montante com o juro de 15% no período (10 vezes maior)."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT140",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 2.500,00 foi aplicado a juros compostos de 3% ao mês durante 2 meses. O montante ao final é:",
  alternativas: ["R$ 2.650,00", "R$ 152,25", "R$ 2.652,25", "R$ 2.575,00"],
  correta: 2,
  porqueCerta: "M = 2.500 x 1,03^2 = 2.500 x 1,0609 = R$ 2.652,25. No 2º mês os juros incidem sobre R$ 2.575,00.",
  porqueErradas: [
    "R$ 2.650,00 é o montante a JUROS SIMPLES (2.500 + 150). Erro clássico simples x composto.",
    "R$ 152,25 são só os JUROS (2.652,25 − 2.500), não o montante.",
    null,
    "R$ 2.575,00 é o montante após apenas 1 mês."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros compostos."
},
{
  id: "MAT141",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 3.000,00 rendeu R$ 540,00 de juros simples em 6 meses. A taxa mensal da aplicação foi de:",
  alternativas: ["2% ao mês", "3% ao mês", "6% ao mês", "18% ao mês"],
  correta: 1,
  porqueCerta: "i = J / (C x t) = 540 / (3.000 x 6) = 540 / 18.000 = 0,03 = 3% ao mês. Conferindo: 3.000 x 0,03 x 6 = 540.",
  porqueErradas: [
    "2% ao mês renderia só R$ 360,00 em 6 meses (3.000 x 0,02 x 6).",
    null,
    "6% ao mês renderia R$ 1.080,00, o dobro do observado.",
    "18% ao mês ignora o tempo (540 / 3.000): daria R$ 3.240,00 de juros em 6 meses."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT142",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Sobre taxas de juros, assinale a alternativa INCORRETA:",
  alternativas: ["Em juros simples, a taxa de 24% ao ano equivale a 2% ao mês, pois as taxas são proporcionais.", "Em juros compostos, taxas equivalentes se relacionam por potenciação, não por proporção direta.", "Uma taxa simples de 2% ao mês equivale a 24% ao ano (2% x 12).", "Em juros compostos, uma taxa de 10% ao mês equivale a 120% ao ano."],
  correta: 3,
  porqueCerta: "Em juros compostos a equivalência usa potência: (1,10^12 − 1) = 2,1384..., ou seja, cerca de 213,84% ao ano, bem acima de 120%. Somar 10% x 12 só vale nos juros simples.",
  porqueErradas: [
    "Alternativa CORRETA: 24% / 12 = 2% ao mês em juros simples (proporcionalidade).",
    "Alternativa CORRETA: é a definição de taxas equivalentes em capitalização composta.",
    "Alternativa CORRETA: 2% x 12 = 24% ao ano em juros simples.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples e compostos."
},
{
  id: "MAT143",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um produto de R$ 1.500,00 teve dois descontos sucessivos de 20% e 10%. O preço final é:",
  alternativas: ["R$ 1.080,00", "R$ 1.050,00", "R$ 450,00", "R$ 1.500,00"],
  correta: 0,
  porqueCerta: "1º desconto: 1.500 x 0,80 = 1.200. 2º desconto: 1.200 x 0,90 = R$ 1.080,00. O desconto total é 28% (1 − 0,8 x 0,9), não 30%.",
  porqueErradas: [
    null,
    "R$ 1.050,00 soma as taxas (20% + 10% = 30%). Erro clássico: o 2º desconto incide sobre o valor já reduzido.",
    "R$ 450,00 é o desconto de 30% sobre 1.500, não o preço final.",
    "R$ 1.500,00 ignora os dois descontos."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT144",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um valor de R$ 8.000,00 será atualizado por dois índices acumulados: 5% e depois 5%. O valor atualizado é:",
  alternativas: ["R$ 8.800,00", "R$ 820,00", "R$ 8.820,00", "R$ 8.400,00"],
  correta: 2,
  porqueCerta: "Atualização acumulada: 8.000 x 1,05 x 1,05 = 8.000 x 1,1025 = R$ 8.820,00. A taxa acumulada é 10,25%, não 10%.",
  porqueErradas: [
    "R$ 8.800,00 soma as taxas (5% + 5% = 10%). Erro clássico: índices acumulados se multiplicam, não se somam.",
    "R$ 820,00 é só a correção em reais (8.820 − 8.000), não o valor atualizado.",
    null,
    "R$ 8.400,00 aplica só o primeiro índice (5%)."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT145",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Sobre desconto simples de um título pago antes do vencimento, assinale a alternativa INCORRETA:",
  alternativas: ["O valor atual é o valor nominal menos o desconto (A = N − D).", "Quanto maior a antecipação, maior o desconto, mantida a mesma taxa.", "O desconto simples cresce proporcionalmente ao tempo de antecipação.", "O valor atual com desconto é maior que o valor nominal do título."],
  correta: 3,
  porqueCerta: "O desconto REDUZ o valor a pagar: o valor atual é sempre MENOR que o nominal (A = N − D, com D > 0). Afirmar o contrário inverte o conceito.",
  porqueErradas: [
    "Alternativa CORRETA: é a própria fórmula do valor atual com desconto.",
    "Alternativa CORRETA: D = N x d x t cresce com t.",
    "Alternativa CORRETA: a proporcionalidade ao tempo é a marca do desconto simples.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT146",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Uma aplicação rendeu 20% em um período em que a inflação foi de 10%. A taxa real de ganho (descontada a inflação) é, aproximadamente:",
  alternativas: ["10%", "9,09%", "20%", "30%"],
  correta: 1,
  porqueCerta: "Taxa real = (1 + 0,20) / (1 + 0,10) − 1 = 1,20 / 1,10 − 1 = 0,0909... = 9,09% aprox. Subtrair direto (20% − 10%) dá só uma aproximação.",
  porqueErradas: [
    "10% é a subtração direta (20% − 10%), uma aproximação que ignora a divisão pela base inflacionada.",
    null,
    "20% é a taxa NOMINAL (aparente), sem descontar a inflação.",
    "30% soma as taxas, o oposto do conceito de ganho real."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
}
];
