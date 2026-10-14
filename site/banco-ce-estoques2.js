/* Lote CE — Estoques, almoxarifado e frotas 2 (CE151–CE170). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_CE_ESTOQUES_2 = [
{
  id: "CE151",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "O almoxarifado de um escritório regional ficou sem fertilizante no meio do plantio porque o pedido só foi feito quando o estoque zerou. Sobre estoque de segurança, é correto afirmar:",
  alternativas: [
    "Estoque de segurança é desperdício em qualquer situação e deve ser sempre zero.",
    "Estoque de segurança é uma reserva para cobrir atrasos de fornecedor e picos de consumo, evitando a paralisação do serviço.",
    "Estoque de segurança significa dobrar todo pedido, sem nenhum critério de cálculo.",
    "Estoque de segurança dispensa controle, pois nunca precisa ser reposto."
  ],
  correta: 1,
  porqueCerta: "A reserva de segurança absorve variações de prazo e demanda. Dimensionada com critério (consumo médio e prazo de entrega), ela impede a ruptura sem gerar excesso.",
  porqueErradas: [
    "Zerar a segurança deixa o serviço vulnerável a qualquer atraso ou pico — foi o que causou a falta no caso.",
    null,
    "Dobrar sem critério gera excesso e custo; segurança se calcula, não se chuta.",
    "A reserva também gira e precisa de reposição e controle como qualquer item."
  ],
  fonte: "Conteúdo específico: Níveis de estoques; estoque de segurança."
},
{
  id: "CE152",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre a rotina de recebimento no almoxarifado, analise: I. Conferir nota fiscal, quantidades e estado das embalagens antes de atestar o recebimento. II. Registrar a entrada no sistema e endereçar o material em local definido. III. Dispensar qualquer conferência quando o fornecedor é conhecido e antigo. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas III.",
    "Apenas I e II.",
    "I, II e III."
  ],
  correta: 2,
  porqueCerta: "I e II descrevem o recebimento padrão: conferência documental e física, registro e guarda endereçada. Conhecer o fornecedor não dispensa conferência.",
  porqueErradas: [
    "I está correta, mas II também está — a alternativa deixa de fora etapa obrigatória.",
    "III está errada: fornecedor antigo também atrasa e erra; a conferência é dever do almoxarifado.",
    null,
    "III invalida o conjunto: dispensa de conferência gera divergência e prejuízo."
  ],
  fonte: "Conteúdo específico: Operações de estoques e almoxarifados — recebimento."
},
{
  id: "CE153",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Avalie como V (verdadeira) ou F (falsa): ( ) O custo de armazenagem inclui espaço, seguro, perdas e capital parado. ( ) O custo de falta inclui paralisação do serviço e compra emergencial mais cara. ( ) Manter estoques não gera nenhum custo além do preço de compra. A sequência correta é:",
  alternativas: [
    "V – V – F.",
    "F – F – V.",
    "V – F – V.",
    "F – V – F."
  ],
  correta: 0,
  porqueCerta: "As duas primeiras afirmativas listam componentes reais dos custos de manter e de faltar; a terceira é falsa porque armazenar, segurar, contar e perder material também custam.",
  porqueErradas: [
    null,
    "Inverte tudo: os dois primeiros itens são verdadeiros e o terceiro é falso.",
    "O segundo item é verdadeiro — a falta paralisa e encarece a reposição emergencial.",
    "O primeiro item é verdadeiro e o terceiro é falso — armazenagem tem vários custos."
  ],
  fonte: "Conteúdo específico: Custos de estoques e almoxarifado."
},
{
  id: "CE154",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre a curva ABC aplicada ao almoxarifado, assinale a alternativa INCORRETA:",
  alternativas: [
    "Itens classe A concentram grande valor de consumo e pedem controle mais rigoroso e contagens frequentes.",
    "Itens classe C, de baixo valor, admitem controle mais simples e contagens mais espaçadas.",
    "A curva ABC prioriza o esforço de controle onde o impacto financeiro é maior.",
    "A curva ABC obriga tratar todos os itens com o mesmo rigor e proíbe qualquer priorização."
  ],
  correta: 3,
  porqueCerta: "A alternativa D inverte a lógica da ABC: o método existe justamente para diferenciar o rigor do controle por relevância, concentrando esforço nos itens A.",
  porqueErradas: [
    "Está correta: poucos itens A respondem por grande parcela do valor — merecem rigor.",
    "Está correta: muitos itens C de baixo valor aceitam rotina simplificada.",
    "Está correta: priorizar pelo valor evita desperdiçar energia com itens irrelevantes.",
    null
  ],
  fonte: "Conteúdo específico: Classificação de estoques; curva ABC."
},
{
  id: "CE155",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Um almoxarifado consumiu 900 sacas de sementes no ano e manteve estoque médio de 150 sacas. O giro de estoques no ano foi de:",
  alternativas: [
    "1.050 vezes, somando consumo e estoque médio.",
    "6 vezes (900 ÷ 150), ou seja, o estoque se renovou em média a cada dois meses.",
    "150 vezes, pois o estoque médio define sozinho o giro.",
    "0,16 vez, dividindo o consumo pelo número de meses."
  ],
  correta: 1,
  porqueCerta: "Giro = consumo ÷ estoque médio = 900 ÷ 150 = 6. Significa renovação média de 6 vezes no ano, cerca de uma a cada dois meses.",
  porqueErradas: [
    "Somar consumo e estoque não tem sentido na fórmula do giro.",
    null,
    "150 é o estoque médio, não o giro; giro exige dividir o consumo pelo estoque médio.",
    "0,16 inverte a conta (150 ÷ 900) e mistura com meses sem base."
  ],
  fonte: "Conteúdo específico: Giro de estoques."
},
{
  id: "CE156",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre níveis de estoque, analise: I. O ponto de pedido considera consumo médio, prazo de entrega e margem de segurança. II. O nível máximo limita o investimento e o espaço ocupado. III. Esperar o estoque zerar para pedir é a melhor prática de reposição. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I e II.",
    "Apenas I.",
    "Apenas III.",
    "I, II e III."
  ],
  correta: 0,
  porqueCerta: "I e II estão corretas: ponto de pedido antecipa a compra e nível máximo contém o investimento. III está errada porque comprar só após zerar paralisa o serviço.",
  porqueErradas: [
    null,
    "II também está correta: o teto evita capital parado e falta de espaço.",
    "III está errada: gerenciar pela falta é a prática que mais paralisa o atendimento.",
    "III invalida o conjunto por defender a ruptura como rotina."
  ],
  fonte: "Conteúdo específico: Níveis de estoques; ponto de pedido."
},
{
  id: "CE157",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Avalie como V ou F: ( ) Defensivos com validade devem sair pelo PEPS (primeiro que entra, primeiro que sai). ( ) Materiais pesados devem ficar nas prateleiras mais altas. ( ) Endereçamento e etiquetas agilizam localização e inventário. A sequência correta é:",
  alternativas: [
    "V – V – V.",
    "F – F – F.",
    "V – F – V.",
    "F – V – F."
  ],
  correta: 2,
  porqueCerta: "PEPS evita vencimento (V), pesados ficam embaixo por segurança e ergonomia (segunda é F) e endereço com etiqueta acelera achar e contar (V).",
  porqueErradas: [
    "A segunda é falsa: peso em cima gera risco de queda e dificulta o manuseio.",
    "A primeira e a terceira são verdadeiras — não podem ser marcadas como falsas.",
    null,
    "Inverte todas: PEPS e endereçamento são práticas corretas, e peso no alto é errado."
  ],
  fonte: "Conteúdo específico: Armazenagem; PEPS e endereçamento."
},
{
  id: "CE158",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre patrimônio e inventário em um escritório regional, assinale a alternativa INCORRETA:",
  alternativas: [
    "Bens permanentes recebem número patrimonial e termo de responsabilidade individualizado.",
    "O inventário físico confere o registrado com o existente e apura sobras, faltas e estado de conservação.",
    "O sistema informatizado atualizado dispensa qualquer contagem física dos bens.",
    "Bens extraviados exigem apuração de responsabilidade e regularização patrimonial."
  ],
  correta: 2,
  porqueCerta: "A alternativa C está errada: o sistema registra, mas só a contagem física confirma a realidade — é a essência do inventário, que nenhum sistema dispensa.",
  porqueErradas: [
    "Está correta: tombamento com plaqueta e termo individualiza a guarda do bem.",
    "Está correta: confrontar registro e existência é a finalidade do inventário.",
    null,
    "Está correta: extravio pede apuração e baixa regular, nunca esquecimento."
  ],
  fonte: "Conteúdo específico: Patrimônio e inventário."
},
{
  id: "CE159",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Uma caminhonete da frota roda em estrada de terra e teve a revisão dos freios adiada três vezes. Sobre manutenção, assinale a correta:",
  alternativas: [
    "A manutenção preventiva, por km ou tempo, evita panes e acidentes e sai mais barata que o conserto emergencial.",
    "A melhor estratégia é só corrigir após quebrar, pois revisão programada não evita nada.",
    "Adiar revisão de freios em veículo de estrada de terra não traz nenhum risco.",
    "Registrar revisões por veículo é inútil e deve ser abolido."
  ],
  correta: 0,
  porqueCerta: "Prevenir (óleo, freios, pneus, elétrica) evita pane em local isolado, preserva vidas e reduz corretivas caras e serviço parado — ainda mais em uso severo como estrada de terra.",
  porqueErradas: [
    null,
    "Só corrigir após quebrar é a estratégia mais cara: soma guincho, urgência e serviço parado.",
    "Freio negligenciado em estrada de terra é risco grave de acidente por falha mecânica.",
    "O histórico orienta a próxima revisão, comprova o gasto e revela veículos antieconômicos."
  ],
  fonte: "Conteúdo específico: Gestão de frotas — manutenção preventiva."
},
{
  id: "CE160",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre controle de abastecimento da frota, analise: I. Registrar por veículo data, km, litros e local permite calcular o consumo médio (km/l). II. Queda brusca de km/l pode indicar pneu murcho, motor desregulado ou desvio. III. Comparar veículos iguais é inútil e deve ser evitado. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I.",
    "Apenas II.",
    "Apenas I e III.",
    "Apenas I e II."
  ],
  correta: 3,
  porqueCerta: "I e II descrevem o controle: ficha por veículo gera o km/l e revela anomalias mecânicas ou de uso. III está errada porque comparar iguais é justamente o que destaca outliers.",
  porqueErradas: [
    "II também está correta: consumo anormal é alerta clássico de problema ou fraude.",
    "I também está correta: sem km e litros não há consumo médio nem controle.",
    "III está errada: comparar iguais é técnica básica de gestão.",
    null
  ],
  fonte: "Conteúdo específico: Análise e controle de abastecimento."
},
{
  id: "CE161",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Avalie como V ou F: ( ) Agrupar visitas por região em roteiro sequencial reduz km e combustível. ( ) Voltar à sede entre cada visita isolada é sempre o mais econômico. ( ) Roteiro improvisado a cada minuto planeja melhor que roteiro programado. A sequência correta é:",
  alternativas: [
    "V – V – V.",
    "V – F – F.",
    "F – V – V.",
    "F – F – V."
  ],
  correta: 1,
  porqueCerta: "Consolidar por região corta deslocamentos repetidos (V); voltar à sede entre cada visita multiplica km (segunda é F); improviso gera atraso e km à toa (terceira é F).",
  porqueErradas: [
    "Só a primeira é verdadeira — as outras duas defendem práticas antieconômicas.",
    null,
    "A primeira é verdadeira e as outras são falsas — essa opção inverte os valores.",
    "Nenhuma das duas últimas é verdadeira: improviso e retorno repetido elevam o custo."
  ],
  fonte: "Conteúdo específico: Gerenciamento de rotas; planejamento."
},
{
  id: "CE162",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre compras e fornecedores no setor público, assinale a alternativa INCORRETA:",
  alternativas: [
    "A boa compra parte da necessidade real e de especificação clara do objeto.",
    "A pesquisa de fornecedores e preços orienta a proposta mais vantajosa, considerando qualidade e prazo.",
    "Escolher só pelo menor preço, sem avaliar qualidade e histórico, é sempre a melhor decisão.",
    "O cadastro de fornecedores deve ser atualizado pelo desempenho de cada entrega."
  ],
  correta: 2,
  porqueCerta: "A alternativa C está errada: menor preço sem qualidade gera material inadequado, retrabalho e desperdício; vantajosidade inclui qualidade, prazo e cumprimento contratual.",
  porqueErradas: [
    "Está correta: necessidade e especificação evitam compra errada e desperdício.",
    "Está correta: pesquisar o mercado revela o preço justo e as condições reais.",
    null,
    "Está correta: avaliação contínua alimenta o cadastro e reduz risco futuro."
  ],
  fonte: "Conteúdo específico: Compras; classificação de fornecedores."
},
{
  id: "CE163",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "O almoxarifado precisa contar os itens sem fechar o atendimento. O encarregado divide os materiais em grupos e conta uma parte a cada mês, com itens de maior valor contados mais vezes. Essa modalidade é:",
  alternativas: [
    "Inventário rotativo, que corrige divergências ao longo do ano sem paralisar o serviço.",
    "Inventário geral anual com paralisação total de uma só vez.",
    "Baixa contábil automática, que substitui a contagem física.",
    "Avaliação de fornecedores, que conta as prateleiras por amostragem de preços."
  ],
  correta: 0,
  porqueCerta: "Contar parcelas em ciclos programados, com frequência maior para itens de alto valor, é o rotativo: mantém o atendimento e detecta erros continuamente.",
  porqueErradas: [
    null,
    "O geral conta tudo de uma vez e costuma parar o atendimento — oposto do caso.",
    "Baixa automática é lançamento, não confirmação física da existência.",
    "Avaliar fornecedor qualifica quem vende; não conta o estoque."
  ],
  fonte: "Conteúdo específico: Patrimônio e inventário — inventário rotativo."
},
{
  id: "CE164",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre logística e distribuição de materiais às unidades do interior, analise: I. Logística integra pedido, armazenagem, transporte e informação até a entrega. II. O acompanhamento termina com o comprovante de recebimento e registro de avarias. III. Logística se resume ao transporte, sem envolver planejamento nem informação. Está correto o que se afirma em:",
  alternativas: [
    "Apenas III.",
    "Apenas I e II.",
    "Apenas II e III.",
    "I, II e III."
  ],
  correta: 1,
  porqueCerta: "I e II estão corretas: logística coordena fluxos físicos e de informação até o recebimento comprovado. III está errada por reduzir logística a transporte.",
  porqueErradas: [
    "III está errada: sem planejamento e informação não há logística, só deslocamento.",
    null,
    "III invalida a opção por definir logística de forma restrita e incorreta.",
    "III contamina o conjunto: transporte é só uma parte do sistema logístico."
  ],
  fonte: "Conteúdo específico: Logística; transporte e distribuição de materiais."
},
{
  id: "CE165",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Avalie como V ou F: ( ) Carga de ferramentas na carroceria deve ir amarrada e compartimentada. ( ) Sinalização de pátio e áreas de carga evita colisões e atropelamentos. ( ) Condutor de veículo oficial está dispensado de limites e sinalização. A sequência correta é:",
  alternativas: [
    "V – V – V.",
    "V – F – F.",
    "F – V – F.",
    "V – V – F."
  ],
  correta: 3,
  porqueCerta: "Amarrar a carga evita deslocamento na frenagem (V), sinalizar organiza fluxos de veículos e pedestres (V) e normas de circulação valem para todos, inclusive oficiais (terceira é F).",
  porqueErradas: [
    "A terceira é falsa: veículo oficial não tem dispensa genérica de regras de trânsito.",
    "A segunda é verdadeira: demarcar circulação e carga/descarga previne acidentes.",
    "A primeira é verdadeira: carga solta pode cair sobre pessoas.",
    null
  ],
  fonte: "Conteúdo específico: Circulação de veículos; segurança e sinalização."
},
{
  id: "CE166",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre movimentação e expedição de materiais, assinale a alternativa INCORRETA:",
  alternativas: [
    "Toda saída do almoxarifado exige requisição autorizada, conferência e baixa no estoque.",
    "A entrega pode ser feita sem documento, bastando a palavra de quem retira.",
    "O manuseio deve preservar embalagens com técnica e equipamento adequados.",
    "O atendimento segue ordem e prioridade formal, não pressão ou simpatia."
  ],
  correta: 1,
  porqueCerta: "A alternativa B está errada: sem documento não há prova da entrega nem baixa correta — abre brecha para desvio e divergência de inventário.",
  porqueErradas: [
    "Está correta: requisição, conferência e baixa são o tripé da saída regular.",
    null,
    "Está correta: arrastar ou empilhar sem técnica danifica o material e causa acidentes.",
    "Está correta: critério formal e isonômico, não atendimento por influência."
  ],
  fonte: "Conteúdo específico: Movimentação, distribuição e expedição de materiais."
},
{
  id: "CE167",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Um escritório consome 60 cartuchos por mês e o fornecedor entrega em 2 meses. Desconsiderando segurança, o ponto de pedido é:",
  alternativas: [
    "60 cartuchos, pois basta um mês de consumo.",
    "30 cartuchos, dividindo o consumo pelo prazo.",
    "120 cartuchos (60 × 2), para cobrir o consumo durante o prazo de entrega.",
    "180 cartuchos, somando consumo e prazo sem multiplicar."
  ],
  correta: 2,
  porqueCerta: "Ponto de pedido = consumo no prazo de entrega = 60 × 2 = 120. Atingido esse nível, o pedido garante chegada antes da ruptura.",
  porqueErradas: [
    "60 cobre só 1 mês, mas a entrega leva 2 — faltaria metade do período.",
    "Dividir consumo por prazo não tem sentido na fórmula do ponto de pedido.",
    null,
    "Somar (60 + 2) daria 62, não 180; e a operação correta é multiplicar."
  ],
  fonte: "Conteúdo específico: Níveis de estoques; ponto de pedido — cálculo."
},
{
  id: "CE168",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre classificação de materiais, analise: I. Material de consumo é baixado pelo uso e controlado por quantidade. II. Material permanente é tombado e controlado individualmente. III. Papel e caneta devem ser tombados como bens permanentes. Está correto o que se afirma em:",
  alternativas: [
    "Apenas I e II.",
    "Apenas I.",
    "Apenas III.",
    "I, II e III."
  ],
  correta: 0,
  porqueCerta: "Consumo (quantidade e baixa pelo uso) e permanente (tombamento individual) têm tratamentos distintos; papel e caneta são consumo, não patrimônio tombado.",
  porqueErradas: [
    null,
    "II também está correta: bens duráveis pedem plaqueta e termo de responsabilidade.",
    "III está errada: tombar consumo gera burocracia inútil e distorce o patrimônio.",
    "III invalida o conjunto por tratar consumo como permanente."
  ],
  fonte: "Conteúdo específico: Classificação de materiais; consumo x permanente."
},
{
  id: "CE169",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Avalie como V ou F: ( ) Pedidos pequenos e frequentes elevam o custo de pedir e reduzem o de manter. ( ) Pedidos grandes e espaçados reduzem o custo de pedir e elevam o de manter. ( ) O ponto ideal equilibra os dois custos no custo total. A sequência correta é:",
  alternativas: [
    "F – F – F.",
    "V – F – V.",
    "F – V – F.",
    "V – V – V."
  ],
  correta: 3,
  porqueCerta: "Todas verdadeiras: cada pedido tem custo fixo (multiplicado na frequência) e cada unidade parada tem custo de manutenção; o total mínimo está no equilíbrio entre os dois.",
  porqueErradas: [
    "Todas são verdadeiras — marcar tudo como falso inverte a teoria de custos.",
    "A segunda também é verdadeira: lote grande dilui o pedir e enche o depósito.",
    "A primeira e a terceira também são verdadeiras.",
    null
  ],
  fonte: "Conteúdo específico: Custo de pedido e custo total."
},
{
  id: "CE170",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre uso e controle de veículos oficiais, assinale a alternativa INCORRETA:",
  alternativas: [
    "Cada uso exige autorização e registro de motorista, destino e quilometragem.",
    "Abastecimentos e manutenções devem ser documentados por veículo.",
    "Veículo oficial destina-se ao serviço público, com uso registrado e comprovado.",
    "O veículo oficial pode ser usado livremente para fins particulares, sem autorização nem registro."
  ],
  correta: 3,
  porqueCerta: "A alternativa D está errada: veículo oficial serve ao interesse público, com autorização, registro e prestação de contas — uso particular livre configura desvio.",
  porqueErradas: [
    "Está correta: autorização e diário de bordo são a base da gestão de frotas.",
    "Está correta: notas e histórico por veículo comprovam gasto e orientam revisão.",
    "Está correta: finalidade pública e rastreabilidade são exigências normativas.",
    null
  ],
  fonte: "Conteúdo específico: Gestão de veículos e frotas; uso e controles."
}
];
