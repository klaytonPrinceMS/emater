// Lote — LP: Fonética, ortografia e acentuação (12 questões inéditas LP247–LP258). Estilo Fundep: 4 alternativas, 1 correta.
var BANCO_LP_ORTOGRAFIA = [
{
  id: "LP247",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa correta quanto à relação entre letras e fonemas:",
  alternativas: [
    "“Campo” tem 5 letras e 5 fonemas, pois cada letra representa um som distinto.",
    "“Excesso” tem 7 letras e 5 fonemas, pois “x” e “c” têm o mesmo som de /s/ e “ss” é dígrafo (um só fonema).",
    "“Carro” tem 5 letras e 5 fonemas, pois “rr” representa dois sons vibrantes distintos.",
    "“Cantina” e “canto” têm o mesmo número de fonemas, pois o “n” sempre representa o fonema /n/."
  ],
  correta: 1,
  porqueCerta: "Em “excesso” (e-x-c-e-s-s-o): “x” vale /s/, “c” vale /s/ e “ss” é dígrafo consonantal (duas letras, um fonema /s/). Total: 7 letras e 5 fonemas (/e/-/s/-/e/-/s/-/u/).",
  porqueErradas: [
    "“Campo” tem 5 letras e 4 fonemas: o “m” apenas nasaliza a vogal “a” (/k/-/ã/-/p/-/u/), sem fonema consonantal próprio.",
    null,
    "“Rr” é dígrafo: duas letras para um só fonema vibrante. “Carro” tem 5 letras e 4 fonemas.",
    "Em “canto”, o “n” apenas nasaliza o “a” (não é fonema /n/ pleno); os totais de fonemas diferem."
  ],
  fonte: "LP — Fonética e fonologia: letra e fonema; dígrafos."
},
{
  id: "LP248",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Considere: I. “Parabéns” é palavra oxítona (tônica na última sílaba). II. “Fácil” é palavra paroxítona (tônica na penúltima sílaba). III. “Lâmpada” é palavra proparoxítona (tônica na antepenúltima sílaba). Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas I e II.",
    "Apenas II e III.",
    "I, II e III."
  ],
  correta: 3,
  porqueCerta: "As três classificações estão certas: pa-ra-BÉNS (oxítona), FÁ-cil (paroxítona) e LÂM-pa-da (proparoxítona), pela posição da sílaba tônica.",
  porqueErradas: [
    "Exclui II e III indevidamente: ambas as classificações estão corretas.",
    "Exclui III indevidamente: “lâmpada” é proparoxítona típica.",
    "Exclui I indevidamente: “parabéns” tem a tônica na última sílaba.",
    null
  ],
  fonte: "LP — Fonética: tonicidade; oxítonas, paroxítonas e proparoxítonas."
},
{
  id: "LP249",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa correta quanto aos encontros vocálicos:",
  alternativas: [
    "Em “saída”, há hiato, pois as vogais “a” e “í” pertencem a sílabas diferentes (sa-í-da).",
    "Em “cadeira”, há hiato, pois “e” e “i” se separam na divisão silábica.",
    "Em “enxaguou”, há apenas um ditongo crescente na última sílaba.",
    "Em “pão”, há tritongo, pois há três vogais na mesma sílaba."
  ],
  correta: 0,
  porqueCerta: "“Saída” apresenta hiato: vogal + vogal tônica em sílabas distintas (sa-Í-da), com o “i” tônico separado do “a”.",
  porqueErradas: [
    null,
    "Em “cadeira”, “ei” é ditongo decrescente (mesma sílaba: ca-dei-ra), não hiato.",
    "Em “enxaguou”, há tritongo (“uou”: semivogal + vogal + semivogal na mesma sílaba), não apenas ditongo.",
    "Em “pão”, há ditongo nasal decrescente (“ão”), não tritongo."
  ],
  fonte: "LP — Fonética: encontros vocálicos; ditongo, tritongo e hiato."
},
{
  id: "LP250",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa em que a palavra destacada contém dígrafo consonantal:",
  alternativas: [
    "O técnico elaborou a PLANta de visitas da semana.",
    "O servidor guardou o processo no arQUivo do setor.",
    "A PASSagem foi liberada no protocolo após a conferência.",
    "O fiscal encontrou o GLObo terrestre na sala de reuniões."
  ],
  correta: 2,
  porqueCerta: "“Passagem” contém o dígrafo “ss”: duas letras representando um único fonema /s/ (pas-sa-gem).",
  porqueErradas: [
    "“Pl” é encontro consonantal (dois fonemas: /p/ e /l/), não dígrafo.",
    "“Qu” em “arquivo” não configura o dígrafo no trecho destacado (“QU” + vogal “a” tônica): o dígrafo “qu” ocorre antes de “e/i” com “u” mudo; aqui o destaque não isola dígrafo consonantal.",
    null,
    "“Gl” é encontro consonantal (dois fonemas: /g/ e /l/), não dígrafo."
  ],
  fonte: "LP — Fonética: dígrafos consonantais; encontros consonantais."
},
{
  id: "LP251",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Considere: I. Toda palavra proparoxítona é acentuada graficamente (ex.: “técnico”, “público”). II. As paroxítonas terminadas em ditongo crescente são acentuadas (ex.: “história”, “polícia”). III. As paroxítonas terminadas em “a”, “e” e “o”, seguidas ou não de “s”, são acentuadas (ex.: “mesa”, “rebanho”). Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas I e II.",
    "Apenas II e III.",
    "I, II e III."
  ],
  correta: 1,
  porqueCerta: "I e II enunciam regras verdadeiras: proparoxítonas sempre se acentuam; paroxítonas em ditongo crescente (história, polícia, vácuo) se acentuam.",
  porqueErradas: [
    "Exclui II indevidamente: paroxítonas terminadas em ditongo crescente são acentuadas.",
    null,
    "Inclui III indevidamente: paroxítonas terminadas em “a/e/o (+s)” NÃO se acentuam (“mesa”, “rebanho”, “casas”).",
    "Inclui III indevidamente: a regra de III está invertida; “mesa” e “rebanho” não levam acento."
  ],
  fonte: "LP — Acentuação gráfica: proparoxítonas e paroxítonas."
},
{
  id: "LP252",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a frase escrita em conformidade com o Novo Acordo Ortográfico:",
  alternativas: [
    "A assembléia aprovou o relatório sem ressalvas.",
    "A equipe fez uma auto-análise do atendimento ao produtor.",
    "O vôo atrasou por causa da neblina na pista.",
    "A equipe fez a autoavaliação após o voo para o interior."
  ],
  correta: 3,
  porqueCerta: "“Autoavaliação” (vogais diferentes: sem hífen) e “voo” (sem acento nos hiatos “oo”) seguem o Acordo; a frase está integralmente correta.",
  porqueErradas: [
    "“Assembleia” perdeu o acento (ditongo aberto “eia”): o correto é “assembleia”.",
    "Com vogais diferentes (o + a), não há hífen: o correto é “autoanálise”.",
    "“Voo” perdeu o acento circunflexo do hiato “oo”: o correto é “voo”.",
    null
  ],
  fonte: "LP — Novo Acordo Ortográfico: ditongos abertos, hiatos “oo/ee”, hífen."
},
{
  id: "LP253",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa INCORRETA quanto à ortografia oficial:",
  alternativas: [
    "O candidato foi muito educado e enchergou o problema de longe.",
    "Houve exceção para os documentos entregues com atraso justificado.",
    "O técnico fez a pesquisa de campo e redigiu o laudo.",
    "A enxurrada danificou a estrada vicinal do município."
  ],
  correta: 0,
  porqueCerta: "A incorreta é a alternativa A: o verbo é “enxergar”, grafado com “x” (“enxergou”), não “enchergou” com “ch”.",
  porqueErradas: [
    null,
    "Frase correta: “exceção” com “xc” e “atraso” com “s” estão conforme a norma.",
    "Frase correta: “pesquisa” com “s” e “laudo” sem dificuldades estão conformes.",
    "Frase correta: “enxurrada” com “x” e “vicinal” com “c” estão conformes."
  ],
  fonte: "LP — Ortografia oficial: grafias problemáticas (x/ch, xc, s)."
},
{
  id: "LP254",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa INCORRETA quanto à ortografia oficial:",
  alternativas: [
    "A viagem dos técnicos ao interior foi adiada por causa da chuva.",
    "O jeito de redigir a ata facilita a leitura do documento.",
    "A comissão privilejiou os pequenos produtores na chamada pública.",
    "O gerente exigiu a correção imediata das planilhas."
  ],
  correta: 2,
  porqueCerta: "A incorreta é a alternativa C: o verbo “privilegiar” grafa-se com “g” (“privilegiou”), não “privilejiou” com “j”.",
  porqueErradas: [
    "Frase correta: “viagem” (substantivo) com “g” e “adiada” com “d” estão conformes.",
    "Frase correta: “jeito” com “j” e “ata” sem acento estão conformes.",
    null,
    "Frase correta: “exigiu” com “x/g” e “planilhas” com “lh” estão conformes."
  ],
  fonte: "LP — Ortografia oficial: grafias problemáticas (g/j, x)."
},
{
  id: "LP255",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Considere: I. “Micro-ondas” mantém o hífen, pois o segundo elemento começa com a mesma vogal que encerra o primeiro. II. “Autoescola” grafa-se sem hífen, pois as vogais de contato são diferentes. III. “Para-quedas” mantém o hífen pelo Novo Acordo Ortográfico. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas I e II.",
    "Apenas II e III.",
    "I, II e III."
  ],
  correta: 1,
  porqueCerta: "I e II aplicam corretamente a regra das vogais: iguais (o-o) mantêm o hífen; diferentes (o-e) perdem o hífen, com duplicação evitadA pela fusão gráfica.",
  porqueErradas: [
    "Exclui II indevidamente: “autoescola” sem hífen é a forma correta pós-Acordo.",
    null,
    "Inclui III indevidamente: “paraquedas” perdeu o hífen pelo Acordo (composto sem elemento de ligação com perda da noção de composição).",
    "Inclui III indevidamente: a forma correta é “paraquedas”, sem hífen."
  ],
  fonte: "LP — Novo Acordo Ortográfico: uso do hífen."
},
{
  id: "LP256",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa INCORRETA quanto à acentuação gráfica:",
  alternativas: [
    "O sofá da recepção foi trocado após a reforma.",
    "O álbum de fotos registra as visitas de campo.",
    "O médico atendeu os produtores na unidade local.",
    "O heróico servidor salvou o documênto do incêndio."
  ],
  correta: 3,
  porqueCerta: "A alternativa D viola duas regras: “heroico” perdeu o acento pelo Acordo (ditongo aberto “oi”, como em “ideia” e “jiboia”) e “documento” é paroxítona terminada em “o”, que não se acentua. É a única INCORRETA.",
  porqueErradas: [
    "Frase correta: “sofá” (oxítona em “a”) e “recepção” (oxítona em “ão”) acentuam-se pela regra.",
    "Frase correta: “álbum” (paroxítona em “um”) acentua-se pela regra.",
    "Frase correta: “médico” (proparoxítona) sempre se acentua.",
    null
  ],
  fonte: "LP — Acentuação gráfica: oxítonas, paroxítonas, ditongos abertos."
},
{
  id: "LP257",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a frase escrita segundo a ortografia oficial:",
  alternativas: [
    "O servidor fez mau uso do veículo, mas já regularizou a situação.",
    "Ele foi o mais votado, mas não tomou posse: foi um mal entendido.",
    "O atendimento foi ótimo, porisso o produtor elogiou a equipe.",
    "A chefia deu um geito na escala para atender a todos."
  ],
  correta: 0,
  porqueCerta: "“Mau” (adjetivo, contrário de “bom”) qualifica “uso”, e “mas” (adversativa) opõe as orações: frase integralmente correta.",
  porqueErradas: [
    null,
    "“Mal-entendido” (substantivo composto) exige hífen: “foi um mal-entendido”.",
    "“Por isso” grafa-se separado: “por isso o produtor”.",
    "“Jeito” grafa-se com “j”: “deu um jeito na escala”."
  ],
  fonte: "LP — Ortografia oficial: mal/mau, mas/mais, por isso, jeito."
},
{
  id: "LP258",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Considere: I. O trema foi abolido pelo Novo Acordo Ortográfico (ex.: “linguiça”, “sequência”). II. Os ditongos abertos “éi”, “éu” e “ói” perderam o acento agudo (ex.: “ideia”, “jiboia”). III. O acento diferencial foi totalmente eliminado, inclusive em “pôr” (verbo) e “pôde” (passado). Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas II.",
    "Apenas I e II.",
    "I, II e III."
  ],
  correta: 2,
  porqueCerta: "I e II descrevem mudanças reais do Acordo (fim do trema; fim do acento nos ditongos abertos). III é falsa: “pôr” (para distinguir de “por”) e “pôde” (para distinguir de “pode”) mantiveram o acento diferencial.",
  porqueErradas: [
    "Exclui II indevidamente: os ditongos abertos realmente perderam o acento.",
    "Exclui I indevidamente: o trema foi de fato abolido.",
    null,
    "Inclui III indevidamente: “pôr” e “pôde” são exceções que conservam o acento."
  ],
  fonte: "LP — Novo Acordo Ortográfico: trema, ditongos abertos, acento diferencial."
}
];
