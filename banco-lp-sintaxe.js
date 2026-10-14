/* Lote LP — Sintaxe: termos da oração, período e análise sintática (LP207–LP226). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_LP_SINTAXE = [
{
  id: "LP207",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “Os assistentes administrativos conferiram os relatórios antes do prazo.”, o sujeito da oração é:",
  alternativas: [
    "os relatórios, pois sofrem a ação de conferir.",
    "Os assistentes administrativos, pois praticam a ação expressa pelo verbo.",
    "antes do prazo, pois indica quem realizou a conferência.",
    "conferiram os relatórios, pois esse é o núcleo da declaração."
  ],
  correta: 1,
  porqueCerta: "O sujeito é o termo sobre o qual se declara algo e que comanda a concordância verbal (Os assistentes administrativos conferiram). É sujeito simples, com núcleo assistentes.",
  porqueErradas: [
    "Os relatórios é objeto direto: sofre a ação, não a pratica nem comanda a concordância.",
    null,
    "Antes do prazo é adjunto adverbial de tempo, termo acessório sem função de sujeito.",
    "Conferiram os relatórios é o predicado verbal, não o sujeito."
  ],
  fonte: "LP — Termos da oração: sujeito e predicado."
},
{
  id: "LP208",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “A diretoria regional nomeou a servidora chefe do setor.”, o predicado é classificado como:",
  alternativas: [
    "nominal, pois o verbo nomear é de ligação.",
    "verbal, pois há apenas objeto direto.",
    "verbo-nominal, pois há um verbo de ação (nomeou) e um predicativo do objeto (chefe do setor).",
    "inexistente, pois a oração não tem verbo."
  ],
  correta: 2,
  porqueCerta: "Há verbo significativo (nomeou, com objeto) e, ao mesmo tempo, um predicativo atribuído ao objeto (chefe do setor qualifica a servidora). Essa dupla estrutura define o predicado verbo-nominal.",
  porqueErradas: [
    "Nomear não é verbo de ligação; indica ação com objeto, logo não há predicado nominal.",
    "Há, além do objeto, um predicativo do objeto, o que afasta o predicado puramente verbal.",
    null,
    "A oração tem verbo explícito (nomeou), logo há predicado."
  ],
  fonte: "LP — Termos da oração: tipos de predicado."
},
{
  id: "LP209",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “O setor encaminhou ==os ofícios== ==ao diretor regional==.”, os termos destacados exercem, respectivamente, a função de:",
  alternativas: [
    "objeto direto e objeto indireto.",
    "objeto indireto e objeto direto.",
    "adjunto adnominal e adjunto adverbial.",
    "predicativo do sujeito e agente da passiva."
  ],
  correta: 0,
  porqueCerta: "Os ofícios completa o verbo sem preposição (encaminhou o quê? os ofícios = objeto direto); ao diretor completa com preposição (encaminhou a quem? = objeto indireto). Verbo bitransitivo típico.",
  porqueErradas: [
    null,
    "A ordem está invertida: o termo sem preposição é o direto, e o preposicionado é o indireto.",
    "Nenhum dos dois é adjunto: ambos são exigidos pela regência do verbo, logo são complementos verbais.",
    "Não há verbo de ligação nem voz passiva na frase, então não há predicativo nem agente da passiva."
  ],
  fonte: "LP — Termos da oração: objetos direto e indireto."
},
{
  id: "LP210",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “O atendimento ao público foi suspenso ontem à tarde.”, o termo “ontem à tarde” exerce a função sintática de:",
  alternativas: [
    "objeto direto, pois completa o sentido do verbo.",
    "predicativo do sujeito, pois caracteriza o atendimento.",
    "agente da passiva, pois pratica a suspensão.",
    "adjunto adverbial de tempo, pois indica quando ocorreu a suspensão."
  ],
  correta: 3,
  porqueCerta: "Ontem à tarde é termo acessório que circunstancia o verbo (quando?), sem ser exigido por ele. Essa mobilidade e o valor circunstancial definem o adjunto adverbial de tempo.",
  porqueErradas: [
    "O verbo já está completo na voz passiva; o termo não é exigido como complemento.",
    "Predicativo atribui característica ao sujeito por verbo de ligação; aqui há locução de tempo, não caracterização.",
    "O agente da passiva indicaria quem suspendeu; o termo indica tempo, não agente.",
    null
  ],
  fonte: "LP — Termos da oração: adjuntos adnominais e adverbiais."
},
{
  id: "LP211",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “Belo Horizonte, ==capital de Minas Gerais==, sedia a diretoria da EMATER-MG.”, o termo destacado é:",
  alternativas: [
    "vocativo, pois interpela o leitor.",
    "aposto explicativo, pois esclarece o termo anterior entre vírgulas.",
    "predicativo do objeto, pois completa o verbo sediar.",
    "adjunto adverbial de lugar, pois indica onde fica a diretoria."
  ],
  correta: 1,
  porqueCerta: "Capital de Minas Gerais retoma e explica Belo Horizonte, vindo isolado por vírgulas. É o aposto explicativo clássico, termo acessório de valor esclarecedor.",
  porqueErradas: [
    "Vocativo indica chamamento ao interlocutor, o que não ocorre: o termo refere-se ao sujeito, em 3ª pessoa.",
    null,
    "O objeto de sediar é a diretoria da EMATER-MG; o termo destacado refere-se ao sujeito, não ao objeto.",
    "O adjunto de lugar seria outro termo; capital de Minas Gerais explica um nome, não circunstancia o verbo."
  ],
  fonte: "LP — Termos da oração: aposto e vocativo."
},
{
  id: "LP212",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “O edital foi considerado extenso pelos candidatos.”, o termo “extenso” exerce a função de:",
  alternativas: [
    "objeto direto, pois completa o verbo considerar.",
    "adjunto adnominal, pois acompanha o substantivo edital.",
    "predicativo do sujeito, pois atribui uma característica ao sujeito por meio do verbo.",
    "agente da passiva, pois indica quem considerou."
  ],
  correta: 2,
  porqueCerta: "Na voz passiva (foi considerado), extenso caracteriza o sujeito O edital por intermédio do verbo. É predicativo do sujeito, estrutura típica dos verbos de opinião na passiva.",
  porqueErradas: [
    "Na voz passiva não há objeto direto; o antigo objeto virou sujeito.",
    "Adjunto adnominal se ligaria direto ao nome sem verbo; aqui a caracterização passa pelo verbo foi considerado.",
    null,
    "O agente da passiva é pelos candidatos; extenso é a característica atribuída, não o agente."
  ],
  fonte: "LP — Termos da oração: predicativo do sujeito e do objeto."
},
{
  id: "LP213",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Analise as afirmativas sobre período simples e composto. I. “O protocolo recebeu os documentos.” é período simples, pois tem uma só oração. II. “O candidato leu o edital e fez a inscrição.” é período composto por coordenação, pois tem orações independentes. III. “A comissão, que analisou os recursos, publicou o resultado.” é período composto por subordinação, pois uma oração depende da outra. Assinale:",
  alternativas: [
    "I, II e III estão corretas.",
    "Apenas I e II estão corretas.",
    "Apenas II e III estão corretas.",
    "Apenas I está correta."
  ],
  correta: 0,
  porqueCerta: "I descreve um verbo (período simples); II tem duas orações independentes ligadas por e (coordenação aditiva); III tem a adjetiva que analisou os recursos dependente da principal (subordinação). As três classificações estão certas.",
  porqueErradas: [
    null,
    "Exclui III incorretamente: há dependência sintática da adjetiva em relação à principal.",
    "Exclui I incorretamente: uma só oração caracteriza o período simples.",
    "Exclui II e III incorretamente: ambas as análises de período composto estão certas."
  ],
  fonte: "LP — Período simples e período composto."
},
{
  id: "LP214",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “A chefia informou que os prazos foram prorrogados.”, é correto afirmar que:",
  alternativas: [
    "há período simples, pois só existe um verbo.",
    "a oração “que os prazos foram prorrogados” é coordenada adversativa.",
    "a oração principal é “que os prazos foram prorrogados”.",
    "“A chefia informou” é a oração principal, e “que os prazos foram prorrogados” é subordinada substantiva objetiva direta."
  ],
  correta: 3,
  porqueCerta: "Há dois verbos (informou, foram), logo período composto. A primeira oração tem sentido incompleto e a segunda completa o verbo informar sem preposição (informou o quê?), funcionando como objeto direto oracional: subordinada substantiva objetiva direta.",
  porqueErradas: [
    "Há dois verbos (informou e foram), portanto período composto, não simples.",
    "Não há ideia de oposição nem conjunção coordenativa; há dependência, típica da subordinação.",
    "A principal é a que tem sentido estruturante (A chefia informou); a introduzida por que é a dependente.",
    null
  ],
  fonte: "LP — Oração principal e oração subordinada."
},
{
  id: "LP215",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Assinale a alternativa INCORRETA quanto à classificação da oração coordenada destacada:",
  alternativas: [
    "“O servidor chegou cedo e saiu tarde.” — coordenada sindética aditiva.",
    "“Estudou durante meses, mas não foi aprovado.” — coordenada sindética adversativa.",
    "“A equipe revisou o edital, portanto conhecia todas as regras.” — coordenada sindética adversativa.",
    "“Ou o candidato apresenta o documento, ou será desclassificado.” — coordenada sindética alternativa."
  ],
  correta: 2,
  porqueCerta: "A incorreção está na terceira: portanto exprime conclusão, não oposição. “A equipe revisou o edital, portanto conhecia todas as regras” é coordenada sindética conclusiva. É a pegadinha clássica entre adversativas e conclusivas.",
  porqueErradas: [
    "Classificação correta: e liga orações com ideia de soma (aditiva).",
    "Classificação correta: mas liga orações com ideia de oposição (adversativa).",
    null,
    "Classificação correta: ou... ou exprime alternância (alternativa)."
  ],
  fonte: "LP — Período composto: orações coordenadas."
},
{
  id: "LP216",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Analise as afirmativas. I. Em “O fiscal avisou que os portões seriam fechados.”, a segunda oração depende da primeira. II. Em “O fiscal avisou e fechou os portões.”, as orações são sintaticamente independentes. III. Em “O fiscal ==que chegou cedo== organizou a sala.”, a oração destacada depende da principal e exerce função de adjunto adnominal. Assinale:",
  alternativas: [
    "Apenas I está correta.",
    "I, II e III estão corretas.",
    "Apenas I e II estão corretas.",
    "Apenas II e III estão corretas."
  ],
  correta: 1,
  porqueCerta: "I descreve subordinação (a oração completa o verbo avisar); II descreve coordenação (orações independentes); III descreve a adjetiva, que equivale a um adjunto adnominal do antecedente fiscal. As três estão corretas.",
  porqueErradas: [
    "Reduz a análise só a I, ignorando que II e III também estão certas.",
    null,
    "Exclui III sem motivo: a adjetiva exerce função equivalente à de adjunto adnominal.",
    "Exclui I sem motivo: a oração introduzida por que depende do verbo avisar."
  ],
  fonte: "LP — Orações coordenadas e subordinadas."
},
{
  id: "LP217",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "No período “Embora o sistema estivesse fora do ar, o atendimento continuou e os pedidos foram registrados.”, há:",
  alternativas: [
    "três orações: uma subordinada adverbial concessiva, a oração principal e uma coordenada aditiva.",
    "duas orações coordenadas adversativas.",
    "período simples, pois há apenas uma informação central.",
    "uma oração principal e uma subordinada substantiva subjetiva."
  ],
  correta: 0,
  porqueCerta: "São três verbos (estivesse, continuou, foram): Embora... introduz concessão (subordinada adverbial); o atendimento continuou é a principal; e os pedidos foram registrados soma outra informação independente (coordenada aditiva).",
  porqueErradas: [
    null,
    "Não há mas/porém nem só duas orações; são três, e a relação inicial é de concessão, não de oposição coordenada.",
    "Três verbos significam três orações: é período composto, não simples.",
    "Não há oração exercendo função de sujeito; a dependente inicial tem valor adverbial de concessão."
  ],
  fonte: "LP — Período composto: principal, subordinada e coordenada."
},
{
  id: "LP218",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Assinale a alternativa INCORRETA sobre coordenação e subordinação:",
  alternativas: [
    "Em “O edital foi publicado e os prazos começaram a correr.”, há coordenação aditiva.",
    "Em “O atendimento foi rápido, mas as filas continuaram.”, há coordenação adversativa.",
    "Em “O candidato disse que entregaria os documentos.”, a segunda oração é subordinada substantiva.",
    "Em “O candidato estudou muito, logo será aprovado.”, a segunda oração é coordenada adversativa."
  ],
  correta: 3,
  porqueCerta: "A incorreção está na última: logo introduz conclusão (estudo → aprovação), não oposição. Trata-se de coordenada sindética conclusiva, e a banca cobra exatamente essa distinção.",
  porqueErradas: [
    "Análise correta: e soma duas informações independentes (aditiva).",
    "Análise correta: mas opõe rapidez a filas que continuam (adversativa).",
    "Análise correta: a oração completa o verbo dizer como objeto direto oracional (substantiva objetiva direta).",
    null
  ],
  fonte: "LP — Coordenação e subordinação."
},
{
  id: "LP219",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “É necessário ==que todos entreguem os documentos no prazo==.”, a oração destacada é subordinada substantiva:",
  alternativas: [
    "objetiva direta, pois completa um verbo transitivo direto.",
    "subjetiva, pois exerce a função de sujeito do verbo da oração principal.",
    "predicativa, pois atribui característica ao sujeito.",
    "apositiva, pois explica um termo anterior entre vírgulas."
  ],
  correta: 1,
  porqueCerta: "A principal (É necessário) tem verbo de ligação + predicativo sem sujeito explícito; a oração que todos entreguem... ocupa o lugar do sujeito (o que é necessário?). Logo, substantiva subjetiva.",
  porqueErradas: [
    "Não completa verbo transitivo: a principal é formada por ser + necessário, estrutura de predicado nominal.",
    null,
    "A oração não caracteriza o sujeito; ela própria É o sujeito oracional.",
    "Não há termo explicado entre vírgulas nem dois-pontos; a função é de sujeito, não de aposto."
  ],
  fonte: "LP — Subordinação: orações substantivas."
},
{
  id: "LP220",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “Os candidatos ==que entregaram a documentação== foram convocados para a posse.”, a oração destacada é subordinada adjetiva:",
  alternativas: [
    "explicativa, pois está entre vírgulas e expressa qualidade geral.",
    "adverbial causal, pois explica o motivo da convocação.",
    "restritiva, pois restringe o sentido do antecedente sem vírgulas.",
    "substantiva, pois exerce função de objeto direto."
  ],
  correta: 2,
  porqueCerta: "Sem vírgulas, a oração restringe quais candidatos foram convocados (só os que entregaram). É adjetiva restritiva, equivalente a um adjunto adnominal indispensável ao sentido.",
  porqueErradas: [
    "Explicativa exigiria vírgulas e valor de acréscimo dispensável; aqui não há vírgulas e a informação restringe.",
    "Não tem valor circunstancial de causa nem conjunção adverbial; o que retoma candidatos como pronome relativo.",
    null,
    "Não exerce função substantiva de complemento; ela caracteriza um nome, função típica do adjetivo."
  ],
  fonte: "LP — Subordinação: orações adjetivas."
},
{
  id: "LP221",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Analise as afirmativas sobre orações adverbiais. I. “==Como choveu forte==, a visita técnica foi adiada.” — a oração destacada indica causa. II. “==Se o candidato apresentar recurso==, a banca reavaliará a questão.” — a oração destacada indica condição. III. “==Embora o conteúdo seja extenso==, a revisão é possível.” — a oração destacada indica concessão. Assinale:",
  alternativas: [
    "I, II e III estão corretas.",
    "Apenas I e II estão corretas.",
    "Apenas II e III estão corretas.",
    "Apenas I está correta."
  ],
  correta: 0,
  porqueCerta: "I traz como com valor causal (= porque choveu); II traz se com valor condicional; III traz embora com valor concessivo (admite obstáculo sem impedir a revisão). As três classificações adverbiais estão certas.",
  porqueErradas: [
    null,
    "Exclui III sem motivo: embora é a conjunção concessiva por excelência.",
    "Exclui I sem motivo: como anteposto ao verbo equivale a causa.",
    "Reduz a análise só a I, ignorando a condição em II e a concessão em III."
  ],
  fonte: "LP — Subordinação: orações adverbiais."
},
{
  id: "LP222",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Assinale a alternativa INCORRETA em análise sintática:",
  alternativas: [
    "Em “Anulou-se a questão.”, o se é partícula apassivadora e “a questão” é sujeito.",
    "Em “Os candidatos inscreveram-se ontem.”, o se indica voz reflexiva recíproca do verbo pronominal.",
    "Em “Precisa-se de fiscais para a prova.”, o se é índice de indeterminação do sujeito, pois o verbo é transitivo indireto.",
    "Em “Entregaram-se os relatórios à chefia.”, o verbo deveria ficar no singular, pois o se é índice de indeterminação do sujeito."
  ],
  correta: 3,
  porqueCerta: "A última análise está errada: entregar é transitivo direto (entregar algo), logo o se é partícula apassivadora e o verbo concorda com o sujeito plural (Entregaram-se os relatórios). A indeterminação só ocorreria com verbo intransitivo ou transitivo indireto.",
  porqueErradas: [
    "Análise correta: anular é transitivo direto, então há passiva sintética com sujeito a questão.",
    "O verbo inscrever-se é pronominal e o se integra a voz reflexiva; a análise procede.",
    "Análise correta: precisar de é transitivo indireto, sem sujeito expresso, com se indeterminador.",
    null
  ],
  fonte: "LP — Análise sintática: vozes verbais e funções do se."
},
{
  id: "LP223",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “O gerente entregou o relatório à comissão.”, o termo “à comissão” exerce a função sintática de:",
  alternativas: [
    "agente da passiva, pois recebe a ação.",
    "objeto indireto, pois completa o verbo com preposição exigida pela regência.",
    "adjunto adnominal, pois acompanha o substantivo relatório.",
    "predicativo do objeto, pois caracteriza o relatório."
  ],
  correta: 1,
  porqueCerta: "Entregar é bitransitivo (entregar algo a alguém): o relatório é o objeto direto e à comissão, introduzido pela preposição a, é o objeto indireto, complemento exigido pelo verbo.",
  porqueErradas: [
    "Não há voz passiva na frase, logo não existe agente da passiva.",
    null,
    "Adjunto adnominal se ligaria a um nome sem preposição verbal; aqui o termo completa o verbo.",
    "Predicativo atribuiria característica ao objeto por verbo de opinião; à comissão indica destinatário, não característica."
  ],
  fonte: "LP — Análise sintática: complementos verbais."
},
{
  id: "LP224",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Analise as afirmativas em análise sintática. I. Em “O edital, ==publicado ontem==, alterou o cronograma.”, o termo destacado é aposto resumitivo do sujeito. II. Em “A comissão julgou o recurso improcedente.”, “improcedente” é predicativo do objeto. III. Em “Os documentos foram arquivados pelo protocolo.”, “pelo protocolo” é agente da passiva. Assinale:",
  alternativas: [
    "Apenas III está correta.",
    "Apenas II está correta.",
    "Apenas II e III estão corretas.",
    "Apenas I está correta."
  ],
  correta: 2,
  porqueCerta: "I está errada (publicado ontem é particípio/reduzida com valor de adjunto adnominal, não aposto); II está certa (improcedente caracteriza o recurso por meio do verbo julgar); III está certa (pelo protocolo pratica a ação na voz passiva). Logo, só II e III.",
  porqueErradas: [
    "Ignora que II também está correta: improcedente é predicativo do objeto.",
    "Ignora que III também está correta: pelo protocolo é o agente da passiva.",
    null,
    "I está errada: não há aposto, e sim oração reduzida/particípio equivalendo a adjunto adnominal."
  ],
  fonte: "LP — Análise sintática: termos acessórios e integrantes."
},
{
  id: "LP225",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Assinale a alternativa INCORRETA quanto à função sintática do termo destacado:",
  alternativas: [
    "“A lista definitiva dos aprovados saiu ontem.” — “definitiva” é adjunto adnominal.",
    "“O atendimento será retomado hoje.” — “hoje” é adjunto adverbial.",
    "“O diretor, homem experiente, conduziu a reunião.” — “homem experiente” é aposto.",
    "“A entrega dos relatórios ocorreu ontem.” — “ontem” é adjunto adnominal."
  ],
  correta: 3,
  porqueCerta: "A incorreção está na última: ontem circunstancia o verbo ocorrer (quando?), logo é adjunto adverbial de tempo, não adnominal. Adjunto adnominal acompanha nome; ontem acompanha o verbo.",
  porqueErradas: [
    "Análise correta: definitiva acompanha e delimita o substantivo lista (adnominal).",
    "Análise correta: hoje circunstancia o verbo (adverbial de tempo).",
    "Análise correta: homem experiente explica o diretor entre vírgulas (aposto explicativo).",
    null
  ],
  fonte: "LP — Análise sintática: adjuntos e aposto."
},
{
  id: "LP226",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “A EMATER-MG, ==que atende agricultores familiares==, ampliou os serviços no interior.”, a oração destacada é:",
  alternativas: [
    "subordinada substantiva objetiva direta.",
    "coordenada sindética explicativa.",
    "subordinada adverbial concessiva.",
    "subordinada adjetiva explicativa."
  ],
  correta: 3,
  porqueCerta: "A oração retoma o antecedente EMATER-MG por meio do pronome relativo que, entre vírgulas, acrescentando informação dispensável ao sentido principal. É adjetiva explicativa, equivalente a um aposto oracional.",
  porqueErradas: [
    "Não exerce função substantiva de complemento; ela qualifica um nome, função adjetiva.",
    "Não há conjunção coordenativa nem independência: a oração depende do antecedente.",
    "Não há conjunção concessiva (embora, ainda que) nem ideia de obstáculo.",
    null
  ],
  fonte: "LP — Subordinação: orações adjetivas explicativas."
}
];
