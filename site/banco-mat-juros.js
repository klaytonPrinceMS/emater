/* Lote MAT — Juros, descontos e matemática financeira (20 questões MAT27–MAT46). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_JUROS = [
{
  id: "MAT27",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 3.000,00 foi aplicado a juros simples de 2% ao mês durante 5 meses. O valor dos juros obtidos é:",
  alternativas: ["R$ 120,00", "R$ 150,00", "R$ 300,00", "R$ 3.300,00"],
  correta: 2,
  porqueCerta: "J = C x i x t = 3.000 x 0,02 x 5 = 3.000 x 0,10 = R$ 300,00.",
  porqueErradas: [
    "R$ 120,00 é o juro de apenas 2 meses (3.000 x 0,02 x 2). Faltou considerar os 5 meses.",
    "R$ 150,00 seria o juro a 1% ao mês em 5 meses, ou a 2% em 2,5 meses — metade do correto.",
    null,
    "R$ 3.300,00 é o MONTANTE (capital + juros), não os juros. Pegadinha clássica."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT28",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 1.500,00 foi aplicado a juros simples de 3% ao mês durante 4 meses. O montante ao final da aplicação é:",
  alternativas: ["R$ 1.680,00", "R$ 180,00", "R$ 1.500,00", "R$ 1.860,00"],
  correta: 0,
  porqueCerta: "J = 1.500 x 0,03 x 4 = R$ 180,00. Montante M = C + J = 1.500 + 180 = R$ 1.680,00.",
  porqueErradas: [
    null,
    "R$ 180,00 são só os JUROS, não o montante. Faltou somar o capital.",
    "R$ 1.500,00 é o capital inicial, sem nenhum rendimento.",
    "R$ 1.860,00 seria o montante com o dobro do tempo (8 meses) ou o dobro da taxa (6% ao mês)."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT29",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 4.000,00 foi aplicado a juros simples de 12% ao ano durante 9 meses. O valor dos juros é:",
  alternativas: ["R$ 480,00", "R$ 4.480,00", "R$ 3.600,00", "R$ 360,00"],
  correta: 3,
  porqueCerta: "9 meses = 9/12 do ano. J = 4.000 x 0,12 x 9/12 = 4.000 x 0,09 = R$ 360,00. É preciso compatibilizar taxa anual com tempo em meses.",
  porqueErradas: [
    "R$ 480,00 aplica os 12% sobre o ano inteiro, ignorando que foram só 9 meses.",
    "R$ 4.480,00 é o montante com esse mesmo erro (4.000 + 480), além de trocar juros por montante.",
    "Valor sem relação com o cálculo; 3.600 seria quase o próprio capital.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT30",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 2.000,00 foi aplicado a juros compostos de 10% ao mês durante 2 meses. O montante ao final é:",
  alternativas: ["R$ 2.400,00", "R$ 2.420,00", "R$ 420,00", "R$ 2.200,00"],
  correta: 1,
  porqueCerta: "M = C x (1 + i)^t = 2.000 x 1,10^2 = 2.000 x 1,21 = R$ 2.420,00. No 2º mês os juros incidem sobre R$ 2.200,00.",
  porqueErradas: [
    "R$ 2.400,00 é o montante a JUROS SIMPLES (2.000 + 400). Erro clássico: não capitalizar o 2º mês.",
    null,
    "R$ 420,00 são só os JUROS (2.420 − 2.000), não o montante.",
    "R$ 2.200,00 é o montante após apenas 1 mês. Faltou o 2º mês."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros compostos."
},
{
  id: "MAT31",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 1.000,00 foi aplicado a juros compostos de 5% ao mês durante 3 meses. O montante é, aproximadamente:",
  alternativas: ["R$ 1.157,63", "R$ 1.150,00", "R$ 157,63", "R$ 1.050,00"],
  correta: 0,
  porqueCerta: "M = 1.000 x 1,05^3 = 1.000 x 1,157625 = R$ 1.157,63 (aprox.). Juros sobre juros a cada mês.",
  porqueErradas: [
    null,
    "R$ 1.150,00 é o montante a JUROS SIMPLES (1.000 + 150). Nos compostos o valor é maior.",
    "R$ 157,63 são só os JUROS (1.157,63 − 1.000), não o montante.",
    "R$ 1.050,00 é o montante após 1 único mês. Faltaram 2 capitalizações."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros compostos."
},
{
  id: "MAT32",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 5.000,00 foi aplicado a 4% ao mês durante 2 meses. Em quanto os juros compostos superam os juros simples nesse período?",
  alternativas: ["R$ 400,00", "R$ 408,00", "Não há diferença", "R$ 8,00"],
  correta: 3,
  porqueCerta: "Simples: J = 5.000 x 0,04 x 2 = R$ 400,00. Compostos: M = 5.000 x 1,04^2 = 5.408, logo J = R$ 408,00. Diferença: 408 − 400 = R$ 8,00.",
  porqueErradas: [
    "R$ 400,00 são os juros SIMPLES totais, não a diferença entre os regimes.",
    "R$ 408,00 são os juros COMPOSTOS totais, não a diferença.",
    "Há diferença sim: a partir do 2º mês os compostos incidem sobre os juros do 1º mês.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples e compostos."
},
{
  id: "MAT33",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Uma dívida de R$ 5.000,00 será paga à vista com desconto de 10%. O valor líquido a pagar é:",
  alternativas: ["R$ 500,00", "R$ 4.500,00", "R$ 5.500,00", "R$ 4.000,00"],
  correta: 1,
  porqueCerta: "Desconto = 10% de 5.000 = R$ 500,00. Valor líquido = 5.000 − 500 = R$ 4.500,00 (ou 5.000 x 0,90).",
  porqueErradas: [
    "R$ 500,00 é o valor DO DESCONTO, não o valor a pagar. Parou no meio do cálculo.",
    null,
    "R$ 5.500,00 soma o desconto em vez de subtrair (seria um acréscimo de 10%).",
    "R$ 4.000,00 seria um desconto de 20%, o dobro do anunciado."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT34",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um produto de R$ 800,00 teve dois descontos sucessivos de 10% e 20%. O preço final é:",
  alternativas: ["R$ 560,00", "R$ 240,00", "R$ 576,00", "R$ 800,00"],
  correta: 2,
  porqueCerta: "1º desconto: 800 x 0,90 = 720. 2º desconto: 720 x 0,80 = R$ 576,00. O desconto total é 28% (1 − 0,9 x 0,8), não 30%.",
  porqueErradas: [
    "R$ 560,00 soma as taxas (10% + 20% = 30%) e erra: o 2º desconto incide sobre o valor já reduzido.",
    "R$ 240,00 é o desconto de 30% sobre 800, não o preço final.",
    null,
    "R$ 800,00 ignora os dois descontos."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT35",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um serviço de R$ 1.200,00 sofreu um acréscimo de 15%. O novo valor é:",
  alternativas: ["R$ 1.380,00", "R$ 180,00", "R$ 1.320,00", "R$ 1.020,00"],
  correta: 0,
  porqueCerta: "Acréscimo = 15% de 1.200 = R$ 180,00. Novo valor = 1.200 + 180 = R$ 1.380,00 (ou 1.200 x 1,15).",
  porqueErradas: [
    null,
    "R$ 180,00 é só o valor DO ACRÉSCIMO, não o preço final. Faltou somar ao valor inicial.",
    "R$ 1.320,00 seria um acréscimo de apenas 10%.",
    "R$ 1.020,00 subtrai 15% em vez de somar (é um desconto, não um acréscimo)."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT36",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um título de R$ 2.000,00 foi pago com 3 meses de antecedência, com desconto simples de 2% ao mês. O valor atual (valor pago) é:",
  alternativas: ["R$ 120,00", "R$ 2.120,00", "R$ 1.940,00", "R$ 1.880,00"],
  correta: 3,
  porqueCerta: "Desconto = 2.000 x 0,02 x 3 = R$ 120,00. Valor atual = 2.000 − 120 = R$ 1.880,00.",
  porqueErradas: [
    "R$ 120,00 é o valor DO DESCONTO, não o valor pago. Faltou subtrair do título.",
    "R$ 2.120,00 soma o desconto em vez de subtrair.",
    "R$ 1.940,00 considera apenas 1 mês de antecipação (desconto de R$ 60,00).",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT37",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "No regime de juros simples, a taxa mensal equivalente a 36% ao ano é:",
  alternativas: ["0,3% ao mês", "3% ao mês", "6% ao mês", "12% ao mês"],
  correta: 1,
  porqueCerta: "Em juros simples as taxas são proporcionais: 36% ao ano / 12 meses = 3% ao mês.",
  porqueErradas: [
    "0,3% ao mês divide por 120, como se 36% fosse 3,6%. Erro de casa decimal.",
    null,
    "6% ao mês divide por 6, sem relação com os 12 meses do ano.",
    "12% ao mês divide por 3; 12% ao mês dariam 144% ao ano em juros simples."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT38",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "A juros simples de 25% ao ano, em quanto tempo um capital dobra de valor (juros iguais ao capital)?",
  alternativas: ["2 anos", "3 anos", "4 anos", "5 anos"],
  correta: 2,
  porqueCerta: "Para dobrar, J = C: C x 0,25 x t = C, logo t = 1 / 0,25 = 4 anos.",
  porqueErradas: [
    "Em 2 anos os juros seriam 50% do capital (0,25 x 2), não 100%.",
    "Em 3 anos os juros seriam 75% do capital; esse seria o valor aproximado em JUROS COMPOSTOS.",
    null,
    "Em 5 anos os juros seriam 125% do capital, passando do dobro."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT39",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 1.000,00 foi aplicado a juros compostos de 1% ao mês durante 12 meses. O montante é, aproximadamente:",
  alternativas: ["R$ 1.126,83", "R$ 1.120,00", "R$ 126,83", "R$ 1.010,00"],
  correta: 0,
  porqueCerta: "M = 1.000 x 1,01^12 = 1.000 x 1,126825... = R$ 1.126,83. Por isso 1% ao mês rende mais que 12% ao ano em juros compostos.",
  porqueErradas: [
    null,
    "R$ 1.120,00 é o montante a JUROS SIMPLES (1.000 + 120). Nos compostos o juro sobre juro eleva o valor.",
    "R$ 126,83 são só os JUROS (1.126,83 − 1.000), não o montante.",
    "R$ 1.010,00 é o montante após apenas 1 mês."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros compostos."
},
{
  id: "MAT40",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Uma dívida de R$ 10.000,00 será atualizada por dois índices acumulados: 4% e depois 6%. O valor atualizado é:",
  alternativas: ["R$ 10.400,00", "R$ 11.000,00", "R$ 1.024,00", "R$ 11.024,00"],
  correta: 3,
  porqueCerta: "Atualização acumulada: 10.000 x 1,04 x 1,06 = 10.000 x 1,1024 = R$ 11.024,00. A taxa acumulada é 10,24%, não 10%.",
  porqueErradas: [
    "R$ 10.400,00 aplica só o primeiro índice (4%).",
    "R$ 11.000,00 soma as taxas (4% + 6% = 10%). Erro clássico: índices acumulados se multiplicam, não se somam.",
    "R$ 1.024,00 é só a correção em reais (11.024 − 10.000), não o valor atualizado.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT41",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Uma loja anuncia um produto de R$ 2.500,00 com 20% de desconto para pagamento à vista. O preço à vista é:",
  alternativas: ["R$ 500,00", "R$ 2.000,00", "R$ 2.500,00", "R$ 3.000,00"],
  correta: 1,
  porqueCerta: "Desconto = 20% de 2.500 = R$ 500,00. Preço à vista = 2.500 − 500 = R$ 2.000,00 (ou 2.500 x 0,80).",
  porqueErradas: [
    "R$ 500,00 é o valor DO DESCONTO, não o preço final.",
    null,
    "R$ 2.500,00 é o preço SEM desconto.",
    "R$ 3.000,00 soma o desconto em vez de subtrair."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT42",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 8.000,00 rendeu R$ 2.000,00 de juros simples em 5 meses. A taxa mensal foi de:",
  alternativas: ["2,5% ao mês", "4% ao mês", "5% ao mês", "25% ao mês"],
  correta: 2,
  porqueCerta: "i = J / (C x t) = 2.000 / (8.000 x 5) = 2.000 / 40.000 = 0,05 = 5% ao mês.",
  porqueErradas: [
    "2,5% ao mês renderia só R$ 1.000,00 em 5 meses, metade dos juros observados.",
    "4% ao mês renderia R$ 1.600,00 (8.000 x 0,04 x 5), não R$ 2.000,00.",
    null,
    "25% ao mês ignora o tempo (2.000 / 8.000): daria R$ 10.000,00 de juros em 5 meses."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT43",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 6.000,00 aplicado a juros simples de 2% ao mês rendeu R$ 720,00 de juros. O tempo da aplicação foi de:",
  alternativas: ["2 meses", "3 meses", "5 meses", "6 meses"],
  correta: 3,
  porqueCerta: "t = J / (C x i) = 720 / (6.000 x 0,02) = 720 / 120 = 6 meses.",
  porqueErradas: [
    "Em 2 meses os juros seriam R$ 240,00 (6.000 x 0,02 x 2).",
    "Em 3 meses os juros seriam R$ 360,00, metade do valor observado.",
    "Em 5 meses os juros seriam R$ 600,00.",
    null
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros simples."
},
{
  id: "MAT44",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um capital de R$ 4.000,00 foi aplicado a juros compostos de 10% ao mês durante 3 meses. O montante é:",
  alternativas: ["R$ 5.324,00", "R$ 5.200,00", "R$ 1.324,00", "R$ 4.400,00"],
  correta: 0,
  porqueCerta: "M = 4.000 x 1,10^3 = 4.000 x 1,331 = R$ 5.324,00.",
  porqueErradas: [
    null,
    "R$ 5.200,00 é o montante a JUROS SIMPLES (4.000 + 1.200). Erro clássico simples x composto.",
    "R$ 1.324,00 são só os JUROS (5.324 − 4.000), não o montante.",
    "R$ 4.400,00 é o montante após apenas 1 mês."
  ],
  fonte: "Conteúdo: Matemática Financeira — Juros compostos."
},
{
  id: "MAT45",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Um produto de R$ 1.000,00 sofreu um aumento de 20% e, em seguida, um desconto de 20% sobre o novo valor. O preço final é:",
  alternativas: ["R$ 1.000,00", "R$ 960,00", "R$ 1.200,00", "R$ 800,00"],
  correta: 1,
  porqueCerta: "Aumento: 1.000 x 1,20 = 1.200. Desconto: 1.200 x 0,80 = R$ 960,00. O desconto incide sobre a base maior, por isso o final fica abaixo do inicial.",
  porqueErradas: [
    "R$ 1.000,00 supõe que aumento e desconto se anulam, mas as bases são diferentes (1.000 e 1.200). Erro clássico.",
    null,
    "R$ 1.200,00 ignora o desconto de 20% aplicado depois do aumento.",
    "R$ 800,00 aplica o desconto de 20% sobre o valor original, não sobre o valor já aumentado."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
},
{
  id: "MAT46",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Juros, descontos e matemática financeira",
  enunciado: "Uma aplicação rendeu 15% em um período em que a inflação foi de 10%. A taxa real de ganho (descontada a inflação) é, aproximadamente:",
  alternativas: ["5%", "15%", "4,55%", "25%"],
  correta: 2,
  porqueCerta: "Taxa real = (1 + 0,15) / (1 + 0,10) − 1 = 1,15 / 1,10 − 1 = 0,04545... = 4,55% aprox. Subtrair direto (15% − 10%) dá só uma aproximação.",
  porqueErradas: [
    "5% é a subtração direta (15% − 10%), uma aproximação que ignora a divisão pela base inflacionada.",
    "15% é a taxa NOMINAL (aparente), sem descontar a inflação.",
    null,
    "25% soma as taxas, o oposto do conceito de ganho real."
  ],
  fonte: "Conteúdo: Matemática Financeira — Descontos, acréscimos e atualização monetária."
}
];
