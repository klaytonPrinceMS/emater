/* Lote MAT — Porcentagem, razão, proporção e regra de três (20 questões). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_MAT_PORCENTAGEM = [
{
  id: "MAT07",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "O almoxarifado recebeu 800 resmas de papel e já utilizou 20% desse total. Quantas resmas ainda restam em estoque?",
  alternativas: ["640", "160", "600", "660"],
  correta: 0,
  porqueCerta: "20% de 800 = 0,20 × 800 = 160 resmas utilizadas. Restam: 800 − 160 = 640 resmas.",
  porqueErradas: [
    null,
    "160 é a parte UTILIZADA (20%), não o restante. Erro típico: parar no meio do cálculo.",
    "600 corresponderia a 25% de uso, não 20%.",
    "660 não resulta de nenhum passo correto do cálculo."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT08",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Um servidor recebe R$ 2.400,00 e terá reajuste de 10%. Qual será o novo salário?",
  alternativas: ["R$ 2.400,00", "R$ 2.640,00", "R$ 2.610,00", "R$ 2.880,00"],
  correta: 1,
  porqueCerta: "Reajuste: 10% de 2.400 = 240. Novo salário: 2.400 + 240 = 2.640, ou direto: 2.400 × 1,10 = R$ 2.640,00.",
  porqueErradas: [
    "R$ 2.400,00 é o salário ANTES do reajuste. Faltou aplicar os 10%.",
    null,
    "R$ 2.610,00 corresponderia a cerca de 8,75% de reajuste, não 10%.",
    "R$ 2.880,00 seria um reajuste de 20%, o dobro do anunciado."
  ],
  fonte: "Conteúdo: Porcentagem; acréscimos."
},
{
  id: "MAT09",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Um computador cotado por R$ 500,00 para o escritório teve desconto de 15% à vista. Qual o preço final pago?",
  alternativas: ["R$ 75,00", "R$ 575,00", "R$ 425,00", "R$ 400,00"],
  correta: 2,
  porqueCerta: "Desconto: 15% de 500 = 0,15 × 500 = 75. Preço final: 500 − 75 = R$ 425,00 (ou 500 × 0,85 = 425).",
  porqueErradas: [
    "R$ 75,00 é o valor DO DESCONTO, não o preço final. Erro típico: parar no meio do cálculo.",
    "R$ 575,00 soma o desconto em vez de subtrair (500 + 75).",
    null,
    "R$ 400,00 seria um desconto de 20%, não de 15%."
  ],
  fonte: "Conteúdo: Porcentagem; descontos."
},
{
  id: "MAT10",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Uma equipe com 9 técnicos atendeu 36 produtores rurais. Mantida a proporção, a razão entre o número de técnicos e o número de produtores é:",
  alternativas: ["4/1", "3/1", "1/3", "1/4"],
  correta: 3,
  porqueCerta: "Razão técnicos/produtores = 9/36. Simplificando por 9: 1/4. Ou seja, 1 técnico para cada 4 produtores.",
  porqueErradas: [
    "4/1 inverte a ordem (produtores/técnicos = 36/9 = 4/1). A questão pede técnicos/produtores.",
    "3/1 não resulta da divisão de 9 por 36.",
    "1/3 seria a razão se fossem 12 técnicos para 36 produtores.",
    null
  ],
  fonte: "Conteúdo: Razão e proporção."
},
{
  id: "MAT11",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Com 9 sacos de sementes planta-se uma área de 15 hectares. Mantida a proporção, quantos hectares são plantados com 6 sacos?",
  alternativas: ["10", "9", "12", "11"],
  correta: 0,
  porqueCerta: "Proporção direta: 9/15 = 6/x → 9x = 90 → x = 10 hectares.",
  porqueErradas: [
    null,
    "9 repete um dado do enunciado, sem resolver a proporção.",
    "12 resultaria de somar a diferença (15 − 9 = 6; 6 + 6), sem base proporcional.",
    "11 não satisfaz a igualdade 9/15 = 6/11."
  ],
  fonte: "Conteúdo: Razão e proporção."
},
{
  id: "MAT12",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Uma impressora imprime 120 páginas em 4 minutos, em ritmo constante. Em 10 minutos, quantas páginas imprime?",
  alternativas: ["240", "300", "480", "250"],
  correta: 1,
  porqueCerta: "Grandezas diretamente proporcionais: 120/4 = x/10 → 4x = 1.200 → x = 300 páginas.",
  porqueErradas: [
    "240 seria a produção em 8 minutos (120 × 2), não em 10.",
    null,
    "480 seria a produção em 16 minutos, ou o erro de multiplicar 120 × 4.",
    "250 é um arredondamento/chute sem base na proporção (seria 25 páginas/min)."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT13",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "6 tratores aram um campo em 8 dias, no mesmo ritmo. Com apenas 4 tratores, em quantos dias o mesmo campo será arado?",
  alternativas: ["6 dias", "10 dias", "12 dias", "16 dias"],
  correta: 2,
  porqueCerta: "Tratores e dias são inversamente proporcionais: 6 × 8 = 4 × x → 48 = 4x → x = 12 dias. Menos tratores, mais dias.",
  porqueErradas: [
    "6 dias aplica proporção direta (erro clássico: ignorar a inversão).",
    "10 dias soma/diferença sem base proporcional.",
    null,
    "16 dias seria o dobro de 8 sem relação com a razão 6/4."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT14",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "3 digitadores, trabalhando 6 horas por dia, concluem 360 processos em 4 dias. Mantido o ritmo, em quantos dias 4 digitadores, trabalhando 6 horas por dia, concluem os mesmos 360 processos?",
  alternativas: ["4 dias", "2 dias", "5 dias", "3 dias"],
  correta: 3,
  porqueCerta: "Volume de trabalho: 3 × 6 × 4 = 72 horas-homem. Nova equipe: 4 × 6 = 24 horas-homem/dia. Dias: 72/24 = 3 dias (regra de três composta; digitadores e dias são inversos).",
  porqueErradas: [
    "4 dias repete o prazo original, ignorando o reforço da equipe.",
    "2 dias dividiria o prazo pela metade sem base no cálculo (seria preciso dobrar a força de trabalho).",
    "5 dias aumenta o prazo mesmo com mais gente — contraria a proporção inversa.",
    null
  ],
  fonte: "Conteúdo: Regra de três simples e composta."
},
{
  id: "MAT15",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "30% das sacas de café de um lote correspondem a 90 sacas. Qual é o total de sacas do lote?",
  alternativas: ["300", "270", "120", "333"],
  correta: 0,
  porqueCerta: "Se 30% = 90, então 1% = 90/30 = 3 e 100% = 3 × 100 = 300 sacas. Ou: x = 90/0,30 = 300.",
  porqueErradas: [
    null,
    "270 corresponde a 90% do total correto (300 − 30), não ao total.",
    "120 seria 90 + 30 (somar o percentual ao valor — erro clássico de confundir parte com taxa).",
    "333 arredonda uma divisão errada (90/0,27) sem base no enunciado."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT16",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Um insumo custava R$ 1.000,00, sofreu aumento de 10% e, em seguida, desconto de 10% sobre o novo preço. Qual o preço final?",
  alternativas: ["R$ 1.000,00", "R$ 990,00", "R$ 1.100,00", "R$ 900,00"],
  correta: 1,
  porqueCerta: "Aumento: 1.000 × 1,10 = 1.100. Desconto: 1.100 × 0,90 = R$ 990,00. Aumento e desconto sucessivos de mesma taxa não se anulam.",
  porqueErradas: [
    "R$ 1.000,00 supõe que +10% e −10% se anulam, mas as bases são diferentes (1.000 × 1,10 × 0,90 = 990).",
    null,
    "R$ 1.100,00 aplica só o aumento e esquece o desconto.",
    "R$ 900,00 aplica o desconto sobre o preço original (1.000 − 100), ignorando o aumento."
  ],
  fonte: "Conteúdo: Porcentagem; acréscimos e descontos."
},
{
  id: "MAT17",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "R$ 3.000,00 serão divididos entre dois escritórios em partes diretamente proporcionais a 2 e 3. Qual o valor da maior parte?",
  alternativas: ["R$ 1.000,00", "R$ 1.500,00", "R$ 1.800,00", "R$ 2.000,00"],
  correta: 2,
  porqueCerta: "Total de partes: 2 + 3 = 5. Cada parte: 3.000/5 = 600. Maior parte: 3 × 600 = R$ 1.800,00.",
  porqueErradas: [
    "R$ 1.000,00 dividiria em 3 partes iguais, não na razão 2:3.",
    "R$ 1.500,00 seria metade igualitária, ignorando a proporção.",
    null,
    "R$ 2.000,00 corresponderia à razão 1:2, não 2:3."
  ],
  fonte: "Conteúdo: Razão e proporção; divisão proporcional."
},
{
  id: "MAT18",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Em um setor com 50 servidores, 32 são mulheres. Qual é o percentual de mulheres no setor?",
  alternativas: ["32%", "36%", "60%", "64%"],
  correta: 3,
  porqueCerta: "32/50 = 0,64 = 64%. (Multiplicando por 2: 64/100.)",
  porqueErradas: [
    "32% confunde o número absoluto (32) com o percentual — esquece de dividir pelo total 50.",
    "36% seria o percentual dos homens (18/50), não das mulheres.",
    "60% seria 30 mulheres em 50, não 32.",
    null
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT19",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "8 kg de ração alimentam 20 frangos por um dia. Mantida a proporção, quantos quilogramas são necessários para alimentar 35 frangos por um dia?",
  alternativas: ["14 kg", "12 kg", "16 kg", "10 kg"],
  correta: 0,
  porqueCerta: "Proporção direta: 8/20 = x/35 → 20x = 280 → x = 14 kg.",
  porqueErradas: [
    null,
    "12 kg não satisfaz a proporção (12/35 ≠ 8/20).",
    "16 kg seria o consumo de 40 frangos (8 × 2), não de 35.",
    "10 kg subestima: corresponderia a 25 frangos."
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT20",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "5 máquinas produzem 2.000 mudas em 4 dias. Mantido o ritmo, quantas mudas 3 máquinas produzem em 6 dias?",
  alternativas: ["2.000", "1.800", "2.400", "1.500"],
  correta: 1,
  porqueCerta: "Regra de três composta (máquinas e dias diretos com a produção): x = 2.000 × (3/5) × (6/4) = 2.000 × 0,6 × 1,5 = 1.800 mudas.",
  porqueErradas: [
    "2.000 repete o dado original, ignorando as mudanças nas máquinas e nos dias.",
    null,
    "2.400 inverte a fração das máquinas (usa 5/3 em vez de 3/5).",
    "1.500 considera só a redução de máquinas (2.000 × 3/4), ignorando os dias."
  ],
  fonte: "Conteúdo: Regra de três simples e composta."
},
{
  id: "MAT21",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "A produtividade de um talhão passou de 40 para 50 sacas por hectare. Qual foi o aumento percentual?",
  alternativas: ["10%", "20%", "25%", "30%"],
  correta: 2,
  porqueCerta: "Aumento absoluto: 50 − 40 = 10. Percentual sobre o valor ORIGINAL: 10/40 = 0,25 = 25%.",
  porqueErradas: [
    "10% confunde o aumento absoluto (10 sacas) com o percentual.",
    "20% divide pelo valor FINAL (10/50) — erro clássico: a base é o valor inicial (40).",
    null,
    "30% não corresponde a nenhuma razão correta entre 10, 40 e 50."
  ],
  fonte: "Conteúdo: Porcentagem; acréscimos."
},
{
  id: "MAT22",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Um veículo a 60 km/h percorre uma rota de visitas em 3 horas. Mantidas as condições, a 90 km/h o mesmo percurso será feito em:",
  alternativas: ["4h30", "4h", "2h30", "2h"],
  correta: 3,
  porqueCerta: "Velocidade e tempo são inversamente proporcionais: 60 × 3 = 90 × x → 180 = 90x → x = 2 horas.",
  porqueErradas: [
    "4h30 aplica proporção direta (3 × 90/60) — erro clássico de não inverter.",
    "4h não resulta de nenhum cálculo proporcional correto.",
    "2h30 confunde com meia hora a mais, sem base no cálculo 180/90.",
    null
  ],
  fonte: "Conteúdo: Regra de três simples."
},
{
  id: "MAT23",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "De um orçamento de R$ 4.800,00, 25% serão destinados à compra de material de escritório. Qual o valor destinado ao material?",
  alternativas: ["R$ 1.200,00", "R$ 1.000,00", "R$ 1.440,00", "R$ 900,00"],
  correta: 0,
  porqueCerta: "25% = 1/4. Valor: 4.800/4 = R$ 1.200,00 (ou 0,25 × 4.800).",
  porqueErradas: [
    null,
    "R$ 1.000,00 corresponderia a cerca de 20,8%, não 25%.",
    "R$ 1.440,00 seria 30% de 4.800.",
    "R$ 900,00 seria 18,75% de 4.800."
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
},
{
  id: "MAT24",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "Dois talhões têm áreas de 12 ha e 18 ha. A razão entre a menor e a maior área, na forma simplificada, é:",
  alternativas: ["3/2", "2/3", "1/2", "4/3"],
  correta: 1,
  porqueCerta: "Razão: 12/18. Simplificando por 6: 2/3.",
  porqueErradas: [
    "3/2 inverte a ordem pedida (maior/menor = 18/12 = 3/2).",
    null,
    "1/2 seria a razão entre 9 e 18, não entre 12 e 18.",
    "4/3 não resulta da simplificação de 12/18."
  ],
  fonte: "Conteúdo: Razão e proporção."
},
{
  id: "MAT25",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "6 servidores, trabalhando 6 horas por dia, arquivam 900 processos em 3 dias. Mantido o ritmo, em quantos dias 4 servidores, trabalhando 9 horas por dia, arquivam os mesmos 900 processos?",
  alternativas: ["2 dias", "4 dias", "3 dias", "6 dias"],
  correta: 2,
  porqueCerta: "Trabalho total: 6 × 6 × 3 = 108 horas-homem. Nova jornada diária: 4 × 9 = 36 horas-homem/dia. Dias: 108/36 = 3 dias. (Dias = 3 × 6/4 × 6/9 = 3.)",
  porqueErradas: [
    "2 dias aplica só uma das inversões (servidores ou horas), não as duas compensações.",
    "4 dias inverte apenas parcialmente a proporção.",
    null,
    "6 dias dobra o prazo sem base: a redução de servidores é compensada pelo aumento da jornada."
  ],
  fonte: "Conteúdo: Regra de três simples e composta."
},
{
  id: "MAT26",
  disciplina: "MAT",
  disciplinaNome: "Matemática e Raciocínio Lógico",
  tema: "Porcentagem, razão, proporção e regra de três",
  enunciado: "De 180 mudas plantadas, 45 não germinaram. Qual é o percentual de mudas que germinaram?",
  alternativas: ["20%", "25%", "70%", "75%"],
  correta: 3,
  porqueCerta: "Germinaram: 180 − 45 = 135. Percentual: 135/180 = 0,75 = 75%. (Perda: 45/180 = 25%.)",
  porqueErradas: [
    "20% não corresponde a nenhuma razão entre 45, 135 e 180.",
    "25% é o percentual de PERDA (45/180), não de germinação. Erro típico: confundir parte com total.",
    "70% seria 126 mudas germinadas, não 135.",
    null
  ],
  fonte: "Conteúdo: Razões, proporções e porcentagens."
}
];
