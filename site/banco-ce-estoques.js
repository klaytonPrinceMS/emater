/* Lote CE — Estoques, almoxarifado e frotas (CE51–CE70). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_CE_ESTOQUES = [
{
  id: "CE51",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre os conceitos e as funções dos estoques em uma organização pública, assinale a alternativa correta:",
  alternativas: [
    "Estoques servem apenas para ocupar espaço no almoxarifado, sem função gerencial.",
    "A única função do estoque é gerar despesas, devendo ser sempre zerado.",
    "Estoques regulam o fluxo entre suprimento e consumo: evitam a paralisação por falta e, em excesso, imobilizam recursos financeiros.",
    "Manter estoques elevados é sempre vantajoso, pois elimina qualquer custo."
  ],
  correta: 2,
  porqueCerta: "Estoques têm função reguladora: garantem continuidade do serviço diante de variações de consumo e prazo de entrega, mas o excesso prende capital, gera obsolescência e custo de armazenagem. A boa gestão busca o equilíbrio.",
  porqueErradas: [
    "Estoques têm funções gerenciais claras: segurança, regulagem, lote econômico e atendimento da demanda.",
    "Zerar o estoque elimina a margem de segurança e paralisa o serviço a qualquer atraso de fornecedor.",
    null,
    "Estoque elevado tem custos: armazenagem, seguro, perdas, deterioração e capital parado."
  ],
  fonte: "Conteúdo específico: Gestão e controle de estoques — conceitos e funções."
},
{
  id: "CE52",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Um assistente administrativo recebe caixas de papel A4 no almoxarifado do escritório regional. Assinale a rotina correta de operação de almoxarifado:",
  alternativas: [
    "Conferir nota fiscal e quantidades, inspecionar avarias, registrar a entrada e guardar em local endereçado antes de liberar para uso.",
    "Guardar as caixas direto na prateleira mais próxima, sem conferir nem registrar, para ganhar tempo.",
    "Assinar a nota sem abrir as caixas e distribuir o material imediatamente, sem registro.",
    "Recusar qualquer conferência, pois a responsabilidade é só do fornecedor."
  ],
  correta: 0,
  porqueCerta: "A operação padrão é: recebimento com conferência documental e física, inspeção qualitativa, registro de entrada e armazenagem em endereço definido. Só depois ocorre a distribuição mediante requisição.",
  porqueErradas: [
    null,
    "Guardar sem conferir nem registrar impede rastreio, gera divergência de inventário e esconde avarias e faltas.",
    "Assinar sem conferir transfere o prejuízo ao órgão; distribuir sem registro inviabiliza o controle de consumo.",
    "A conferência no recebimento é dever do almoxarifado, não só do fornecedor."
  ],
  fonte: "Conteúdo específico: Operações de estoques e almoxarifados — recebimento e guarda."
},
{
  id: "CE53",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre compras e gestão de compras no setor público, assinale a alternativa correta:",
  alternativas: [
    "Comprar é apenas escolher o menor preço, sem avaliar qualidade, prazo ou histórico do fornecedor.",
    "A pesquisa de fornecedores é dispensável, pois um único orçamento basta para qualquer compra.",
    "Compras públicas dispensam planejamento e especificação do objeto.",
    "A gestão de compras envolve planejar a necessidade, especificar bem o objeto, pesquisar fornecedores e comparar preço, qualidade e prazo."
  ],
  correta: 3,
  porqueCerta: "Boa gestão de compras parte da necessidade real (previsão de consumo), especifica o objeto com clareza, pesquisa o mercado e avalia a proposta mais vantajosa — não só o preço, mas qualidade, prazo e condições.",
  porqueErradas: [
    "Menor preço sem qualidade gera material inadequado, retrabalho e desperdício; vantajosidade inclui qualidade e prazo.",
    "A pesquisa de preços/fornecedores é instrumento básico de planejamento e de controle; um único orçamento não revela o preço de mercado.",
    "Sem planejamento e especificação há compra errada, fracionamento indevido e desperdício — falha clássica cobrada em prova.",
    null
  ],
  fonte: "Conteúdo específico: Compras; gestão de compras; pesquisa de fornecedores."
},
{
  id: "CE54",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Na classificação e avaliação de fornecedores, é correto afirmar:",
  alternativas: [
    "O histórico de atrasos, a qualidade entregue e o cumprimento do contrato são irrelevantes para classificar fornecedores.",
    "Fornecedores devem ser avaliados por critérios como qualidade, prazo de entrega, preço, regularidade e cumprimento contratual, formando um cadastro atualizado.",
    "Uma vez cadastrado, o fornecedor nunca mais precisa ser avaliado.",
    "Classificar fornecedores significa comprar sempre do mesmo, sem concorrência."
  ],
  correta: 1,
  porqueCerta: "A classificação organiza o cadastro por desempenho (qualidade, prazo, preço, assistência, idoneidade), orientando futuras compras e reduzindo risco de atraso e material defeituoso.",
  porqueErradas: [
    "Atrasos e má qualidade são justamente os critérios centrais da avaliação de fornecedores.",
    null,
    "A avaliação é contínua: cada entrega atualiza o conceito do fornecedor no cadastro.",
    "Classificar é comparar para escolher melhor, não prender-se a um único fornecedor."
  ],
  fonte: "Conteúdo específico: Classificação de fornecedores."
},
{
  id: "CE55",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre a classificação de estoques e materiais (como a curva ABC), assinale a correta:",
  alternativas: [
    "A curva ABC classifica os itens por relevância (valor de consumo): poucos itens classe A concentram grande valor e exigem controle mais rigoroso.",
    "A curva ABC manda tratar todos os itens com o mesmo rigor, sem priorização.",
    "Materiais de consumo e materiais permanentes têm o mesmo tratamento patrimonial.",
    "Classificar materiais não ajuda em nada o inventário nem a contagem."
  ],
  correta: 0,
  porqueCerta: "Na curva ABC, itens A (poucos, alto valor) pedem controle rígido e contagens frequentes; itens C (muitos, baixo valor) admitem controle mais simples. Isso foca o esforço onde o impacto financeiro é maior.",
  porqueErradas: [
    null,
    "O objetivo da ABC é exatamente diferenciar o rigor do controle conforme a relevância de cada item.",
    "Material permanente (bem patrimonial, tombado) tem controle patrimonial próprio; material de consumo é baixado pelo uso. Tratamentos distintos.",
    "A classificação orienta o inventário: define frequência de contagem e nível de detalhe por classe."
  ],
  fonte: "Conteúdo específico: Classificação de estoques; curva ABC."
},
{
  id: "CE56",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "O escritório regional consome em média 100 resmas de papel por mês, com prazo de entrega do fornecedor de 1 mês. Sobre políticas de estoque e previsão, é correto afirmar:",
  alternativas: [
    "A previsão de consumo deve ignorar o histórico e comprar sempre uma quantidade aleatória.",
    "Política de estoque é deixar o almoxarifado decidir na hora, sem regra definida.",
    "A política de estoques usa a previsão de consumo e o prazo de entrega para definir quanto e quando comprar, evitando falta e excesso.",
    "Manter estoque de segurança é proibido, pois sempre gera desperdício."
  ],
  correta: 2,
  porqueCerta: "Com consumo de 100/mês e entrega em 1 mês, o pedido deve cobrir o consumo do prazo mais uma margem de segurança. Política de estoque é justamente essa regra pré-definida de reposição baseada em previsão.",
  porqueErradas: [
    "O histórico de consumo é a base da previsão; comprar no chute gera falta ou encalhe.",
    "Sem regra há improviso: cada um compra de um jeito, sem padrão nem controle.",
    null,
    "O estoque de segurança protege contra atrasos e picos de consumo; só é desperdício quando dimensionado sem critério."
  ],
  fonte: "Conteúdo específico: Políticas de estoques e almoxarifado; previsão."
},
{
  id: "CE57",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre custos de estoques e almoxarifado, assinale a alternativa correta:",
  alternativas: [
    "Estoques não geram custo algum além do preço pago na compra.",
    "O custo de armazenagem diminui quando se guarda material por mais tempo em área maior.",
    "Pedir em grandes lotes elimina todos os custos, sem nenhuma desvantagem.",
    "Compõem os custos de estoque, entre outros: custo de aquisição, custo de pedido, custo de armazenagem (espaço, seguro, perdas) e custo de falta."
  ],
  correta: 3,
  porqueCerta: "Além do preço, há custo de pedir (processar cada compra), de manter (aluguel, energia, seguro, deterioração, capital parado) e de faltar (paralisação do serviço, compra emergencial mais cara).",
  porqueErradas: [
    "O preço é só uma parte; armazenar, segurar, contar e perder material também custam.",
    "Mais tempo e mais área significam MAIOR custo de armazenagem, não menor.",
    "Lotes grandes reduzem o custo de pedido, mas aumentam o custo de armazenagem e o risco de obsolescência.",
    null
  ],
  fonte: "Conteúdo específico: Custos de estoques e almoxarifado."
},
{
  id: "CE58",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre custo de pedido e custo total de estoques, assinale a correta:",
  alternativas: [
    "Fazer muitos pedidos pequenos aumenta o custo total de armazenagem, mas zera o custo de pedido.",
    "O custo total resulta do equilíbrio: pedidos frequentes e pequenos elevam o custo de pedir e reduzem o de manter; pedidos grandes e espaçados fazem o inverso.",
    "O custo de pedido não existe quando a compra é pública.",
    "O custo total é sempre igual ao preço unitário do material."
  ],
  correta: 1,
  porqueCerta: "Cada pedido tem custo fixo (cotar, licitar, transportar, receber). Pedir pouco e sempre multiplica esse custo; pedir muito de uma vez enche o depósito e eleva o custo de manter. O ponto ideal equilibra os dois.",
  porqueErradas: [
    "Pedidos pequenos reduzem a armazenagem, mas MULTIPLICAM o custo de pedido — não o zeram.",
    null,
    "O custo de pedir existe em qualquer compra: processamento, frete, recebimento e conferência.",
    "O preço unitário é só um componente; o total soma pedir, manter e eventuais faltas."
  ],
  fonte: "Conteúdo específico: Custo de pedido e custo total."
},
{
  id: "CE59",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre níveis de estoque (mínimo, máximo, ponto de pedido e estoque de segurança), assinale a correta:",
  alternativas: [
    "O ponto de pedido é o momento em que o estoque chega a zero e o serviço para.",
    "Estoque mínimo e estoque de segurança são conceitos proibidos na gestão pública.",
    "O ponto de pedido é o nível que, ao ser atingido, dispara nova compra, considerando consumo médio, prazo de entrega e margem de segurança.",
    "O nível máximo deve ser infinito, pois quanto mais estoque, melhor."
  ],
  correta: 2,
  porqueCerta: "Ponto de pedido = consumo no prazo de entrega + segurança. Atingido esse nível, emite-se o pedido para que o material chegue antes da ruptura, sem estourar o nível máximo.",
  porqueErradas: [
    "Esperar zerar é gerenciar pela falta: o serviço paralisa. O pedido deve sair ANTES, no ponto calculado.",
    "Estoque mínimo/segurança são instrumentos básicos e legítimos para absorver atrasos e picos.",
    null,
    "Nível máximo limita o investimento e o espaço; estoque infinito é capital parado e risco de perda."
  ],
  fonte: "Conteúdo específico: Níveis de estoques; ponto de pedido."
},
{
  id: "CE60",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Um almoxarifado consumiu 1.200 unidades de toner no ano e manteve estoque médio de 100 unidades. O giro de estoques no ano foi de:",
  alternativas: [
    "12 vezes (1.200 ÷ 100), ou seja, o estoque se renovou em média uma vez por mês.",
    "100 vezes, pois o estoque médio define sozinho o giro.",
    "1.300 vezes, somando consumo e estoque médio.",
    "0,08 vez, dividindo estoque médio pelo consumo."
  ],
  correta: 0,
  porqueCerta: "Giro = consumo no período ÷ estoque médio = 1.200 ÷ 100 = 12. Giro alto indica boa renovação; giro baixo sugere excesso parado ou obsolescência.",
  porqueErradas: [
    null,
    "100 é o estoque médio, não o giro; giro exige a divisão pelo consumo.",
    "Somar consumo e estoque não tem sentido na fórmula do giro.",
    "Inverter a divisão (100 ÷ 1.200) dá 0,08, que é o inverso do giro — erro clássico de prova."
  ],
  fonte: "Conteúdo específico: Giro de estoques."
},
{
  id: "CE61",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre armazenagem no almoxarifado, assinale a alternativa correta:",
  alternativas: [
    "Empilhar qualquer material em qualquer lugar, sem endereço nem identificação, agiliza a localização.",
    "A armazenagem correta usa endereçamento, identificação, empilhamento seguro e critérios como PEPS (primeiro que entra, primeiro que sai) para itens com validade.",
    "Materiais pesados devem ficar nas prateleiras mais altas para facilitar a retirada.",
    "Produtos químicos e inflamáveis dispensam sinalização e separação dos demais."
  ],
  correta: 1,
  porqueCerta: "Endereço (rua, prateleira, posição) + etiqueta permitem achar e contar rápido; o PEPS evita vencimento; peso e risco definem altura e segregação. É o padrão de boas práticas de armazenagem.",
  porqueErradas: [
    "Sem endereço e identificação, cada retirada vira procura — aumenta tempo, erro e divergência.",
    null,
    "Pesados ficam embaixo por segurança (risco de queda) e ergonomia; leves e pequenos em cima.",
    "Inflamáveis exigem área segregada, ventilada e sinalizada, conforme normas de segurança."
  ],
  fonte: "Conteúdo específico: Armazenagem."
},
{
  id: "CE62",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre movimentação, distribuição e expedição de materiais, assinale a correta:",
  alternativas: [
    "A expedição deve entregar materiais sem documento, bastando a palavra do solicitante.",
    "A movimentação interna dispensa qualquer cuidado, podendo arrastar caixas pelo piso.",
    "A distribuição deve atender primeiro quem grita mais alto, sem ordem de requisições.",
    "A movimentação exige equipamento e manuseio adequados, e a expedição/distribuição ocorrem mediante requisição, com conferência, registro e baixa no estoque."
  ],
  correta: 3,
  porqueCerta: "Toda saída precisa de requisição autorizada, conferência do item/quantidade e baixa no sistema; o manuseio deve preservar embalagem e integridade. Sem isso há desvio, erro e divergência.",
  porqueErradas: [
    "Sem documento não há prova da entrega nem baixa correta — abre brecha para desvio.",
    "Arrastar danifica material e embalagem e causa acidente de trabalho; há técnicas e equipamentos próprios.",
    "O atendimento segue ordem, prioridade e autorização formal, não pressão ou simpatia.",
    null
  ],
  fonte: "Conteúdo específico: Movimentação, distribuição e expedição de materiais."
},
{
  id: "CE63",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre patrimônio e inventário, assinale a alternativa correta:",
  alternativas: [
    "Bens permanentes (móveis, veículos, equipamentos) são tombados com número patrimonial e controlados individualmente; o inventário confere periodicamente o registrado com o existente.",
    "Material de consumo (papel, caneta) também deve ser tombado como bem permanente.",
    "Inventário é desnecessário se o sistema informatizado estiver funcionando.",
    "Bens extraviados devem ser simplesmente esquecidos, sem apuração."
  ],
  correta: 0,
  porqueCerta: "Patrimônio = bens duráveis identificados por plaqueta e termo de responsabilidade; inventário (geral ou rotativo) verifica existência, estado e localização, apurando sobras, faltas e necessidade de baixa ou reposição.",
  porqueErradas: [
    null,
    "Material de consumo é controlado por quantidade e baixado pelo uso; tombamento é para bens permanentes/duráveis.",
    "O sistema registra, mas só a contagem física confirma a realidade — é a essência do inventário.",
    "Extravio exige apuração de responsabilidade e regularização contábil/patrimonial, não esquecimento."
  ],
  fonte: "Conteúdo específico: Patrimônio e inventário."
},
{
  id: "CE64",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "O almoxarifado fará a contagem sem fechar as atividades, dividindo os itens por grupos ao longo dos meses. Essa modalidade e sua vantagem são:",
  alternativas: [
    "Inventário geral anual, que paralisa todo o atendimento para contar tudo de uma vez.",
    "Baixa automática, que dispensa qualquer contagem física.",
    "Inventário rotativo, que conta parcelas do estoque em ciclos, sem paralisar o serviço e corrigindo divergências mais cedo.",
    "Avaliação de fornecedores, que substitui a contagem de materiais."
  ],
  correta: 2,
  porqueCerta: "No rotativo, cada classe de item é contada em intervalos programados (itens A com mais frequência), mantendo o almoxarifado funcionando e detectando erros continuamente.",
  porqueErradas: [
    "O geral anual conta tudo de uma vez e costuma exigir paralisação — é o oposto do descrito.",
    "Baixa automática é lançamento contábil, não contagem física; não confirma a existência real.",
    null,
    "Avaliar fornecedor qualifica quem vende; não conta o que está na prateleira."
  ],
  fonte: "Conteúdo específico: Patrimônio e inventário — inventário rotativo."
},
{
  id: "CE65",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre logística, transporte e distribuição de materiais, assinale a correta:",
  alternativas: [
    "Logística é só transportar: não envolve informação, armazenagem nem planejamento.",
    "Logística integra fluxos de materiais e informações — do pedido à entrega — planejando transporte, armazenagem e distribuição para atender no prazo e ao menor custo.",
    "Na distribuição, o roteiro mais longo e improvisado é sempre o mais econômico.",
    "O controle da entrega é inútil após a saída do veículo do depósito."
  ],
  correta: 1,
  porqueCerta: "Logística coordena suprimento, estoque, transporte e informação; no setor público, isso significa programar entregas às unidades, rastrear e comprovar recebimento com eficiência e economicidade.",
  porqueErradas: [
    "Transporte é só uma parte; gestão da informação e armazenagem são pilares da logística.",
    null,
    "Roteiro improvisado e longo eleva combustível, tempo e desgaste — o econômico é o planejado e consolidado.",
    "O acompanhamento até o recebimento (comprovante, avaria, prazo) fecha o ciclo e alimenta a avaliação."
  ],
  fonte: "Conteúdo específico: Logística; transporte e distribuição de materiais; gestão da informação."
},
{
  id: "CE66",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre gestão de veículos e frotas no serviço público estadual (como o controle via SIAD-MG), assinale a correta:",
  alternativas: [
    "Cada condutor usa o veículo oficial como quiser, sem autorização nem registro de saída.",
    "O controle de quilometragem, combustível e manutenção é burocracia inútil e deve ser abolido.",
    "Veículos oficiais podem ser usados para fins particulares sem restrição.",
    "A gestão de frotas exige cadastro dos veículos, autorização e registro de cada uso (motorista, destino, km), além de controles de abastecimento e manutenção."
  ],
  correta: 3,
  porqueCerta: "O padrão (Manual SIAD-MG e cartilhas de gestão de frotas) é rastrear cada deslocamento e cada gasto: quem dirigiu, para onde, quantos km, quanto abasteceu e quais revisões fez — base da economicidade e da responsabilização.",
  porqueErradas: [
    "Uso sem autorização nem registro inviabiliza controle, facilita desvio e viola normas do serviço público.",
    "Km, combustível e manutenção são os dados que revelam desperdício, fraude e necessidade de substituição.",
    "Veículo oficial destina-se ao serviço público, com uso autorizado e registrado — não a fins particulares.",
    null
  ],
  fonte: "Conteúdo específico: Gestão de veículos e frotas; planejamento e controles."
},
{
  id: "CE67",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Um assistente precisa organizar as visitas técnicas da semana a 6 propriedades rurais com um único veículo. Sobre gerenciamento de rotas, é correto afirmar:",
  alternativas: [
    "Agrupar visitas por região, em roteiro sequencial, reduz distância percorrida, combustível e tempo em relação a deslocamentos isolados.",
    "O melhor é fazer uma viagem separada para cada propriedade, voltando sempre à sede entre elas.",
    "Planejar rotas é perda de tempo; o condutor deve decidir o caminho a cada minuto.",
    "Consolidar entregas e visitas em um mesmo roteiro sempre aumenta o custo."
  ],
  correta: 0,
  porqueCerta: "Roteirizar por proximidade e janela de horário consolida a carga de trabalho, corta km repetidos e horas paradas — princípio básico do gerenciamento de rotas e fluxos.",
  porqueErradas: [
    null,
    "Voltar à sede entre cada visita multiplica km e combustível sem necessidade.",
    "Sem planejamento há retrabalho, atraso e km rodado à toa; roteirizar economiza.",
    "Consolidar bem planejado DILUI o custo por atendimento — só aumenta custo se o roteiro for mal desenhado."
  ],
  fonte: "Conteúdo específico: Gerenciamento de rotas; fluxos; planejamento."
},
{
  id: "CE68",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre análise e controle de abastecimento da frota, assinale a correta:",
  alternativas: [
    "Abastecer sem nota, sem registrar km e litragem, é prática aceitável se o valor for pequeno.",
    "O controle por veículo — km rodados, litros, consumo médio (km/l), data e local — permite detectar consumo anormal, fraude e necessidade de manutenção.",
    "Comparar o consumo entre veículos iguais é inútil para a gestão.",
    "Tanque cheio ou vazio não precisam de registro, pois o combustível não é recurso público."
  ],
  correta: 1,
  porqueCerta: "A ficha por veículo cruza hodômetro e litros: queda brusca de km/l indica pneu murcho, motor desregulado, desvio ou uso indevido. É o coração do controle de abastecimento.",
  porqueErradas: [
    "Sem nota e sem registro não há comprovação do gasto — irregularidade ainda que o valor pareça pequeno.",
    null,
    "Comparar iguais revela outliers: o veículo que bebe mais que os irmãos pede investigação.",
    "Combustível é recurso público e dos mais fraudáveis; todo litro precisa de documento e registro."
  ],
  fonte: "Conteúdo específico: Análise e controle de abastecimento."
},
{
  id: "CE69",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre manutenção de veículos da frota, assinale a alternativa correta:",
  alternativas: [
    "A manutenção corretiva deve ser a única estratégia: só mexer no veículo quando ele quebrar.",
    "Trocar óleo e revisar freios no prazo aumenta o risco de acidentes.",
    "A manutenção preventiva — revisões periódicas por km ou tempo (óleo, freios, pneus, elétrica) — reduz quebras, acidentes e custos com corretivas emergenciais.",
    "Registrar as manutenções é desnecessário e só atrasa o serviço."
  ],
  correta: 2,
  porqueCerta: "Prevenir custa menos que remediar: revisão programada evita pane em estrada de terra, preserva garantia, alonga a vida útil e dá previsibilidade ao orçamento — diretriz dos manuais de gestão de frotas.",
  porqueErradas: [
    "Só corrigir após quebrar gera socorro caro, serviço parado e risco — é a estratégia mais onerosa.",
    "Revisão em dia REDUZ o risco; negligenciá-la é que provoca acidentes por falha mecânica.",
    null,
    "O histórico por veículo orienta a próxima revisão, comprova o gasto e revela veículos antieconômicos."
  ],
  fonte: "Conteúdo específico: Gestão de frotas — manutenção preventiva."
},
{
  id: "CE70",
  disciplina: "CE",
  disciplinaNome: "Conhecimentos Específicos",
  tema: "Estoques, almoxarifado e frotas",
  enunciado: "Sobre circulação de veículos, segurança e sinalização nas atividades da frota, assinale a correta:",
  alternativas: [
    "Placas de sinalização no pátio e no depósito são mera decoração, sem efeito na segurança.",
    "O condutor de veículo oficial está dispensado de observar limites de velocidade e sinalização.",
    "Transportar ferramentas e materiais soltos na carroceria, sem amarração, é prática segura.",
    "Respeitar sinalização interna e viária, demarcar áreas de circulação e carga/descarga e usar EPIs e amarração adequada previne acidentes."
  ],
  correta: 3,
  porqueCerta: "Segurança de frota combina direção defensiva, respeito à sinalização, organização do fluxo no pátio/depósito e fixação correta da carga — com documentação e habilitação em dia.",
  porqueErradas: [
    "Sinalizar fluxos, vagas, áreas de pedestres e de inflamáveis orienta e evita colisões e atropelamentos.",
    "Normas de circulação valem para todos, inclusive veículos oficiais em serviço.",
    "Carga solta desloca-se na frenagem e pode cair sobre pessoas — exige amarração e compartimentação.",
    null
  ],
  fonte: "Conteúdo específico: Circulação de veículos; segurança e sinalização."
}
];