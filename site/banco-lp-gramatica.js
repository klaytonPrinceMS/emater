/* Lote LP — Gramática: sintaxe/período (LP350–LP358), colocação pronominal (LP359–LP364), fonética e tonicidade (LP365–LP367). Estilo Fundep: 4 alternativas, 1 correta. */
var BANCO_LP_GRAMATICA = [
{
  id: "LP350",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Analise as afirmativas sobre período composto. I. “O servidor revisou o relatório e encaminhou o processo.” é período composto por coordenação aditiva, pois há duas orações independentes ligadas por “e”. II. “A banca avisou que o gabarito seria publicado hoje.” é período composto por subordinação, pois a segunda oração completa o sentido do verbo “avisou”. III. “O candidato, que chegou atrasado, perdeu a prova.” é período composto por coordenação, pois a oração destacada é independente da principal. Assinale:",
  alternativas: [
    "I, II e III estão corretas.",
    "Apenas I e II estão corretas.",
    "Apenas II e III estão corretas.",
    "Apenas III está correta."
  ],
  correta: 1,
  porqueCerta: "I está certa (duas orações independentes somadas pelo e aditivo); II está certa (a oração introduzida por que funciona como objeto direto oracional do verbo avisar, logo subordinada); III está errada (a oração destacada depende do antecedente candidato e o qualifica, logo é subordinada adjetiva, não coordenada).",
  porqueErradas: [
    "Inclui III, que está errada: a oração com pronome relativo que depende do antecedente, caracterizando subordinação adjetiva.",
    null,
    "Inclui III, que está errada, e exclui I, que está certa (há duas orações independentes somadas).",
    "III está errada e I e II estão certas, de modo que a análise isolada de III não se sustenta."
  ],
  fonte: "LP — Período composto: coordenação e subordinação."
},
{
  id: "LP351",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Assinale a alternativa INCORRETA quanto à classificação do período composto:",
  alternativas: [
    "“O fiscal abriu os portões e organizou as filas.” — período composto por coordenação aditiva.",
    "“O candidato estudou o edital, mas esqueceu o documento.” — período composto por coordenação adversativa.",
    "“A comissão informou que os recursos foram indeferidos.” — período composto por subordinação substantiva.",
    "“Entreguem os documentos, que o prazo termina hoje.” — subordinada adjetiva restritiva."
  ],
  correta: 3,
  porqueCerta: "A incorreção está na última: após verbo no imperativo, o que introduz explicação/justificativa (equivale a porque), formando oração coordenada sindética explicativa, e não subordinada adjetiva (não há antecedente retomado pelo pronome relativo).",
  porqueErradas: [
    "Classificação correta: o e soma duas orações independentes (aditiva).",
    "Classificação correta: o mas opõe estudar a esquecer (adversativa).",
    "Classificação correta: a oração completa o verbo informar como objeto direto oracional (substantiva objetiva direta).",
    null
  ],
  fonte: "LP — Período composto: coordenadas e subordinadas."
},
{
  id: "LP352",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “A chefia tinha certeza de que os prazos seriam cumpridos.”, a oração “de que os prazos seriam cumpridos” é subordinada substantiva:",
  alternativas: [
    "completiva nominal, pois completa o sentido do substantivo “certeza” por meio da preposição “de”.",
    "objetiva direta, pois completa o verbo “tinha” sem preposição.",
    "adjetiva restritiva, pois restringe o substantivo “chefia”.",
    "adverbial condicional, pois indica condição para a certeza."
  ],
  correta: 0,
  porqueCerta: "O substantivo certeza é de sentido incompleto e exige complemento introduzido por preposição (certeza de algo); a oração exerce essa função, típica da substantiva completiva nominal.",
  porqueErradas: [
    null,
    "Não completa diretamente o verbo: entre o verbo e a oração há o substantivo certeza + preposição, o que caracteriza a função nominal.",
    "Não restringe um antecedente com pronome relativo; a oração completa um nome abstrato, função substantiva.",
    "Não há conjunção condicional (se, caso) nem ideia de condição; há complementação de um nome."
  ],
  fonte: "LP — Subordinação: orações substantivas."
},
{
  id: "LP353",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Analise as afirmativas sobre orações reduzidas. I. “Terminada a conferência, os fiscais lacraram os envelopes.” equivale a “Quando a conferência foi terminada, os fiscais lacraram os envelopes.”, com valor temporal. II. “Para obter a isenção, o candidato apresentou o comprovante.” expressa finalidade, equivalendo a “Para que obtivesse a isenção...”. III. “Sendo aprovado, o candidato tomará posse.” expressa condição, equivalendo a “Se for aprovado, o candidato tomará posse.”. Assinale:",
  alternativas: [
    "Apenas I está correta.",
    "Apenas I e II estão corretas.",
    "I, II e III estão corretas.",
    "Apenas II e III estão corretas."
  ],
  correta: 2,
  porqueCerta: "As três equivalências estão certas: o particípio (Terminada...) tem valor temporal; o infinitivo com para tem valor final; o gerúndio (Sendo aprovado...) tem valor condicional. São os três valores mais cobrados das reduzidas.",
  porqueErradas: [
    "Reduz a análise só a I, ignorando os valores de finalidade (II) e condição (III), ambos corretos.",
    "Exclui III sem motivo: o gerúndio anteposto com valor hipotético equivale à condicional com se.",
    null,
    "Exclui I sem motivo: o particípio anteposto equivale à temporal com quando."
  ],
  fonte: "LP — Período composto: orações reduzidas."
},
{
  id: "LP354",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “O servidor tinha necessidade de apoio técnico para concluir o relatório.”, o termo “de apoio técnico” exerce a função de:",
  alternativas: [
    "objeto indireto, pois completa o verbo “tinha” com preposição.",
    "complemento nominal, pois completa o sentido do substantivo abstrato “necessidade”.",
    "adjunto adnominal, pois apenas acompanha um substantivo concreto.",
    "agente da passiva, pois pratica a ação de apoiar."
  ],
  correta: 1,
  porqueCerta: "Necessidade é substantivo abstrato de sentido incompleto (necessidade de algo) e exige complemento introduzido por preposição; o termo completa o nome, não o verbo, o que define o complemento nominal.",
  porqueErradas: [
    "O termo não completa o verbo tinha (que já tem como objeto necessidade); ele completa o substantivo necessidade.",
    null,
    "Adjunto adnominal acompanha nome concreto sem exigência de complementação; aqui o nome exige o complemento, função integrante, não acessória.",
    "Não há voz passiva na frase, logo não existe agente da passiva."
  ],
  fonte: "LP — Análise sintática: complemento nominal."
},
{
  id: "LP355",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Assinale a alternativa INCORRETA quanto à função sintática do termo destacado:",
  alternativas: [
    "“Os relatórios mensais foram arquivados.” — “mensais” é adjunto adnominal.",
    "“O atendimento será retomado amanhã.” — “amanhã” é adjunto adverbial de tempo.",
    "“A diretora, servidora experiente, revisou o edital.” — “servidora experiente” é aposto explicativo.",
    "“A entrega dos envelopes ocorreu sem atraso.” — “sem atraso” é objeto indireto."
  ],
  correta: 3,
  porqueCerta: "A incorreção está na última: sem atraso circunstancia o verbo ocorrer (modo), sendo adjunto adverbial de modo, e não objeto indireto, pois não é exigido pela regência do verbo.",
  porqueErradas: [
    "Análise correta: mensais delimita o substantivo relatórios (adnominal).",
    "Análise correta: amanhã circunstancia o verbo (quando?), valor adverbial de tempo.",
    "Análise correta: o termo explica a diretora entre vírgulas (aposto explicativo).",
    null
  ],
  fonte: "LP — Análise sintática: adjuntos e aposto."
},
{
  id: "LP356",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Em “A comissão elogiou aos servidores pelo empenho na aplicação da prova.”, o termo “aos servidores” exerce a função de:",
  alternativas: [
    "objeto direto preposicionado, pois completa o verbo “elogiar” com preposição por realce ao ser humano.",
    "objeto indireto, pois todo verbo seguido de preposição tem objeto indireto.",
    "adjunto adnominal, pois acompanha o substantivo “comissão”.",
    "complemento nominal, pois completa o substantivo “empenho”."
  ],
  correta: 0,
  porqueCerta: "Elogiar é transitivo direto (elogiar alguém); a preposição a antes de aos servidores é facultativa e enfática, típica do objeto direto preposicionado, recurso comum quando o objeto se refere a pessoa.",
  porqueErradas: [
    null,
    "Nem todo termo preposicionado é objeto indireto: aqui a preposição não é exigida pela regência de elogiar, que é transitivo direto.",
    "O termo completa o verbo, não acompanha um nome como caracterizador acessório.",
    "O termo não completa o substantivo empenho (que já vem seguido de seu próprio complemento: na aplicação); ele completa o verbo."
  ],
  fonte: "LP — Análise sintática: objeto direto preposicionado."
},
{
  id: "LP357",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Analise as afirmativas sobre sujeito. I. Em “O edital foi anulado pela banca.”, há sujeito indeterminado, pois o agente é desconhecido. II. Em “Atenderam os candidatos com atenção na recepção.”, sem sujeito expresso e com verbo na 3ª pessoa do plural, há sujeito indeterminado. III. Em “Faz dois anos que o edital foi publicado.”, há oração sem sujeito, pois o verbo “fazer” indica tempo decorrido. Assinale:",
  alternativas: [
    "I, II e III estão corretas.",
    "Apenas I e II estão corretas.",
    "Apenas II e III estão corretas.",
    "Apenas III está correta."
  ],
  correta: 2,
  porqueCerta: "I está errada (O edital é sujeito simples paciente na voz passiva; pela banca é o agente); II está certa (verbo na 3ª pessoa do plural sem sujeito identificável = indeterminação); III está certa (fazer temporal é impessoal, oração sem sujeito).",
  porqueErradas: [
    "Inclui I, que está errada: na passiva, o antigo objeto vira sujeito expresso (O edital).",
    "Inclui I, que está errada, e exclui III, que está certa (fazer indicando tempo é impessoal).",
    null,
    "Ignora que II também está certa: verbo na 3ª pessoa do plural sem referente configura sujeito indeterminado."
  ],
  fonte: "LP — Análise sintática: tipos de sujeito e oração sem sujeito."
},
{
  id: "LP358",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Sintaxe: termos da oração, período e análise sintática",
  enunciado: "Assinale a alternativa INCORRETA quanto à análise do termo destacado:",
  alternativas: [
    "“O protocolo, setor responsável pelos documentos, fica no térreo.” — “setor responsável pelos documentos” é aposto explicativo.",
    "“Candidatos, apresentem os documentos na entrada.” — “Candidatos” é sujeito da oração.",
    "“O relatório foi julgado incompleto pela comissão.” — “incompleto” é predicativo do sujeito.",
    "“A banca entregou o gabarito aos fiscais.” — “o gabarito” é objeto direto."
  ],
  correta: 1,
  porqueCerta: "A incorreção está na segunda: Candidatos é chamamento ao interlocutor (2ª pessoa, verbo no imperativo), logo vocativo, e não sujeito; o sujeito do imperativo está oculto (vós/vocês).",
  porqueErradas: [
    "Análise correta: o termo explica o protocolo entre vírgulas (aposto explicativo).",
    null,
    "Análise correta: na passiva, incompleto caracteriza o sujeito o relatório por meio do verbo julgar.",
    "Análise correta: o gabarito completa o verbo entregar sem preposição (entregou o quê?)."
  ],
  fonte: "LP — Análise sintática: vocativo, aposto e predicativo."
},
{
  id: "LP359",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com colocação pronominal correta, pela norma-padrão:",
  alternativas: [
    "Não me entregaram o comprovante de inscrição na portaria.",
    "Me entregaram o comprovante de inscrição na portaria.",
    "Entregaram-me o comprovante, mas não deram-me o protocolo.",
    "Sempre entregam-me o comprovante antes da prova."
  ],
  correta: 0,
  porqueCerta: "A palavra negativa (não) é atrativa e exige próclise: Não me entregaram. É o caso mais cobrado de próclise obrigatória.",
  porqueErradas: [
    null,
    "Não se inicia frase com pronome átono: o correto seria Entregaram-me.",
    "Com o mas coordenando orações, a segunda oração admite próclise (mas não me deram) e rejeita a ênclise após o verbo em oração iniciada por palavra atrativa; o correto seria mas não me deram.",
    "O advérbio sempre atrai o pronome: o correto seria Sempre me entregam."
  ],
  fonte: "LP — Colocação pronominal: próclise com palavra atrativa."
},
{
  id: "LP360",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com colocação pronominal correta, pela norma-padrão:",
  alternativas: [
    "Me diga o número da sua sala antes do sinal.",
    "Me passe o edital para eu conferir o horário.",
    "Diga-me o número da sua sala antes do sinal.",
    "Me informe, por favor, se o portão já fechou."
  ],
  correta: 2,
  porqueCerta: "Frase iniciada por verbo no imperativo afirmativo exige ênclise: Diga-me. A norma-padrão proíbe iniciar o período com pronome átono.",
  porqueErradas: [
    "Inicia a frase com pronome átono, o que a norma-padrão veda; o correto seria Diga-me.",
    "Inicia a frase com pronome átono; o correto seria Passe-me.",
    null,
    "Inicia a frase com pronome átono; o correto seria Informe-me."
  ],
  fonte: "LP — Colocação pronominal: ênclise no imperativo afirmativo."
},
{
  id: "LP361",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a alternativa INCORRETA quanto à colocação pronominal, pela norma-padrão:",
  alternativas: [
    "Nunca se atrasem para a prova, orientou o fiscal.",
    "Quando me chamarem, apresentarei o documento.",
    "Apresentar-me-ei à banca quando chamarem meu nome.",
    "Se inscreverão centenas de candidatos neste concurso."
  ],
  correta: 3,
  porqueCerta: "A incorreção está na última: inicia a frase com pronome átono (Se...) e ainda combina próclise com futuro, dupla infração; o correto seria Inscrever-se-ão centenas de candidatos (mesóclise no futuro).",
  porqueErradas: [
    "Colocação correta: o advérbio nunca atrai o pronome (próclise).",
    "Colocação correta: a conjunção subordinativa quando atrai o pronome (próclise).",
    "Colocação correta: sem palavra atrativa, o futuro do presente exige mesóclise (apresentar-me-ei).",
    null
  ],
  fonte: "LP — Colocação pronominal: próclise, ênclise e mesóclise."
},
{
  id: "LP362",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Analise as afirmativas sobre colocação pronominal. I. Em “Não se publicou o resultado ontem.”, a próclise é obrigatória por causa da palavra negativa. II. Em “Dir-se-ia que o edital foi claro.”, a mesóclise é correta, pois o futuro do pretérito sem atrativo a exige. III. Em “Me passa o edital, por favor.”, a colocação está correta para a norma-padrão em início de frase. Assinale:",
  alternativas: [
    "I, II e III estão corretas.",
    "Apenas I e II estão corretas.",
    "Apenas II e III estão corretas.",
    "Apenas III está correta."
  ],
  correta: 1,
  porqueCerta: "I está certa (não atrai o pronome); II está certa (futuro do pretérito sem palavra atrativa exige mesóclise: dir-se-ia); III está errada (frase iniciada por pronome átono viola a norma-padrão; o correto seria Passe-me).",
  porqueErradas: [
    "Inclui III, que está errada: a norma-padrão não admite frase iniciada por pronome átono.",
    null,
    "Inclui III, que está errada, e exclui I, que está certa (próclise após palavra negativa).",
    "III está errada e I e II estão certas, de modo que a análise isolada de III não se sustenta."
  ],
  fonte: "LP — Colocação pronominal: próclise, ênclise e mesóclise."
},
{
  id: "LP363",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a frase com colocação pronominal correta, pela norma-padrão:",
  alternativas: [
    "Para inscrever-se, o candidato deve ler o edital com atenção.",
    "Para se inscrever, o candidato deve ler o edital, pois a banca sempre exige a próclise após preposição.",
    "Os candidatos foram orientados a se inscreverem-se no prazo.",
    "O edital mandou que inscrever-se-iam os candidatos retardatários."
  ],
  correta: 0,
  porqueCerta: "Com verbo no infinitivo impessoal após a preposição para, sem palavra atrativa, usa-se a ênclise: inscrever-se. É a construção formal padrão.",
  porqueErradas: [
    null,
    "Após a preposição para seguida de infinitivo, sem palavra atrativa, a norma-padrão prefere a ênclise (inscrever-se); a justificativa apresentada é falsa.",
    "Há duplicação indevida de pronomes (se... -se); o correto seria a inscreverem-se ou a se inscreverem.",
    "Com a conjunção que (atrativa), o correto seria a próclise (que se inscreveriam), nunca a mesóclise."
  ],
  fonte: "LP — Colocação pronominal: ênclise com infinitivo."
},
{
  id: "LP364",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Concordância, regência e crase",
  enunciado: "Assinale a alternativa INCORRETA quanto à colocação pronominal em locuções verbais, pela norma-padrão:",
  alternativas: [
    "A equipe vem se destacando na organização da prova.",
    "A equipe vem destacando-se na organização da prova.",
    "Não vem destacando-se a equipe na organização, segundo o relatório.",
    "Não se vem destacando a equipe na organização, segundo o relatório."
  ],
  correta: 2,
  porqueCerta: "A incorreção está na terceira: com a palavra atrativa (Não), o pronome não pode ficar enclítico ao particípio/gerúndio; deve ocorrer próclise ao auxiliar ou ao verbo principal (Não se vem destacando / Não vem se destacando).",
  porqueErradas: [
    "Colocação correta: sem palavra atrativa, a próclise ao verbo principal da locução é admitida.",
    "Colocação correta: sem palavra atrativa, a ênclise ao verbo principal da locução é admitida.",
    null,
    "Colocação correta: com o atrativo Não, a próclise ao auxiliar é a construção exemplar."
  ],
  fonte: "LP — Colocação pronominal em locuções verbais."
},
{
  id: "LP365",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa correta quanto à relação entre letras e fonemas:",
  alternativas: [
    "Em “casa”, a letra s representa dois fonemas, pois aparece entre vogais.",
    "Em “cansaço”, há 7 letras e 7 fonemas, pois cada letra corresponde a um som.",
    "Em “exame”, a letra x representa o fonema /ʃ/ (como em “xícara”), em qualquer região do país.",
    "Em “cansaço”, há 7 letras e 6 fonemas, pois o n apenas nasaliza a vogal anterior, sem representar consoante."
  ],
  correta: 3,
  porqueCerta: "Em cansaço (c-a-n-s-a-ç-o), o n não forma sílaba própria: apenas nasaliza o a (/kɐ̃/), de modo que são 7 letras para 6 fonemas (/k/, /ɐ̃/, /s/, /a/, /s/, /u/). É o caso clássico de letra diacrítica.",
  porqueErradas: [
    "A letra s entre vogais representa um único fonema (/z/); uma letra nunca equivale a dois fonemas nesse caso.",
    "A contagem ignora a nasalização: o n não conta como fonema consonantal, logo são 6 fonemas, não 7.",
    "Em exame, o x soa como /z/ (ezame), não como /ʃ/ de xícara; a pronúncia varia conforme o vocábulo, não é fixa.",
    null
  ],
  fonte: "LP — Fonética: fonemas, letras e nasalização."
},
{
  id: "LP366",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Analise as afirmativas sobre tonicidade. I. “Lâmpada” é proparoxítona, pois a sílaba tônica é a antepenúltima (lâm-). II. “Café” é oxítona, pois a sílaba tônica é a última (fé). III. “Mesa” é oxítona, pois a sílaba tônica é a última (sa). Assinale:",
  alternativas: [
    "I, II e III estão corretas.",
    "Apenas I e II estão corretas.",
    "Apenas II e III estão corretas.",
    "Apenas I está correta."
  ],
  correta: 1,
  porqueCerta: "I está certa (lâm-pa-da, tônica na antepenúltima = proparoxítona); II está certa (ca-fé, tônica na última = oxítona); III está errada (me-sa tem a tônica na penúltima, me-, logo paroxítona).",
  porqueErradas: [
    "Inclui III, que está errada: mesa é paroxítona, não oxítona.",
    null,
    "Inclui III, que está errada, e exclui I, que está certa (lâmpada é proparoxítona).",
    "Ignora que II também está certa: café é oxítona terminada em é."
  ],
  fonte: "LP — Fonética: tonicidade e classificação das palavras."
},
{
  id: "LP367",
  disciplina: "LP",
  disciplinaNome: "Língua Portuguesa",
  tema: "Fonética, ortografia e acentuação",
  enunciado: "Assinale a alternativa correta quanto aos dígrafos:",
  alternativas: [
    "Em “chave”, “carro” e “passo”, há dígrafos (ch, rr e ss), pois duas letras representam um único fonema.",
    "Em “nota” e “prova”, há dígrafos, pois cada par de vogal + consoante forma um dígrafo.",
    "Em “claro” e “prato”, há dígrafos (cl e pr), pois são encontros consonantais.",
    "Em “candidato” e “edital”, há dígrafos, pois toda sílaba com duas consoantes contém um dígrafo."
  ],
  correta: 0,
  porqueCerta: "Dígrafo é o par de letras com um só som: ch (/ʃ/), rr (vibrante simples na escrita) e ss (/s/). Nos três vocábulos, duas letras valem por um fonema, definição exata de dígrafo.",
  porqueErradas: [
    null,
    "Não há par de letras com som único nesses vocábulos; vogal + consoante não define dígrafo.",
    "Cl e pr são encontros consonantais (dois fonemas preservados), não dígrafos (um fonema).",
    "Nem todo encontro de consoantes é dígrafo: em candidato e edital cada consoante mantém seu som."
  ],
  fonte: "LP — Fonética: dígrafos e encontros consonantais."
}
];
