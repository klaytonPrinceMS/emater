/* app.js — lógica do site de estudo. JavaScript simples, sem internet, sem instalação. */
(function () {
  "use strict";

  var LETRAS = ["A", "B", "C", "D"];
  var NOME_DISC = { LP: "Língua Portuguesa", MAT: "Matemática e Raciocínio Lógico", CG: "Conhecimentos Gerais", CE: "Conhecimentos Específicos" };

  var filtroEl = document.getElementById("filtro");
  var filtroTemaEl = document.getElementById("filtroTema");
  var embaralharEl = document.getElementById("embaralhar");
  var box = document.getElementById("questoes");
  var acertosEl = document.getElementById("acertos");
  var respondidasEl = document.getElementById("respondidas");
  var totalEl = document.getElementById("total");

  var acertos = 0, respondidas = 0;
  var modoSimulado = false;
  var simuladoReal = false;
  var temasStats = {};
  try {
    var salvoT = JSON.parse(localStorage.getItem("emater_progresso_temas") || "{}");
    if (salvoT && typeof salvoT === "object") temasStats = salvoT;
  } catch (e) {}

  try {
    var salvo = JSON.parse(localStorage.getItem("emater_progresso") || "{}");
    acertos = salvo.acertos || 0; respondidas = salvo.respondidas || 0;
  } catch (e) { /* sem localStorage: segue sem salvar */ }

  function salvar() {
    try { localStorage.setItem("emater_progresso", JSON.stringify({ acertos: acertos, respondidas: respondidas })); } catch (e) {}
    try { localStorage.setItem("emater_progresso_temas", JSON.stringify(temasStats)); } catch (e) {}
  }
  function placar() {
    acertosEl.textContent = acertos;
    respondidasEl.textContent = respondidas;
    salvar();
    renderProgresso();
  }
  function somarTema(q, certa) {
    var t = temasStats[q.tema] || (temasStats[q.tema] = { d: q.disciplina, r: 0, c: 0 });
    t.r++;
    if (certa) t.c++;
  }
  function renderProgresso() {
    var boxP = document.getElementById("progresso");
    if (!boxP) return;
    var totais = {};
    banco().forEach(function (q) { totais[q.tema] = (totais[q.tema] || 0) + 1; });
    var html = "<div class='prog-grupo'>📊 Meu progresso por tema</div>";
    ["LP", "MAT", "CG", "CE"].forEach(function (d) {
      html += "<div class='prog-grupo'>" + NOME_DISC[d] + "</div>";
      Object.keys(totais).sort().forEach(function (t) {
        var ex = banco().filter(function (q) { return q.tema === t; })[0];
        if (!ex || ex.disciplina !== d) return;
        var s = temasStats[t] || { r: 0, c: 0 };
        var pctR = Math.min(100, Math.round(100 * s.r / totais[t]));
        var pctA = s.r ? Math.round(100 * s.c / s.r) : 0;
        html += "<div class='prog-linha'><span class='prog-nome'>" + t + "</span>" +
          "<span class='prog-bar'><span class='prog-fill' style='width:" + pctR + "%'></span></span>" +
          "<span class='prog-num'>" + s.r + "/" + totais[t] + " • " + pctA + "%</span></div>";
      });
    });
    boxP.innerHTML = html;
  }
  function embaralhar(lista) {
    for (var i = lista.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = lista[i]; lista[i] = lista[j]; lista[j] = t;
    }
    return lista;
  }

  function banco() {
    var base = (typeof QUESTIONS !== "undefined" ? QUESTIONS : []).slice();
    // Lotes extras: qualquer arquivo banco-*.js declara var BANCO_<nome> = [...]
    try {
      for (var k in window) {
        if (k.indexOf("BANCO_") === 0 && window[k] instanceof Array) base = base.concat(window[k]);
      }
    } catch (e) {}
    return base;
  }

  function atualizarTemas() {
    var f = filtroEl.value;
    var vistos = {};
    banco().forEach(function (q) {
      if (f === "TODAS" || q.disciplina === f) vistos[q.tema] = true;
    });
    var temas = Object.keys(vistos).sort();
    var atual = filtroTemaEl.value;
    filtroTemaEl.innerHTML = "";
    var op0 = document.createElement("option");
    op0.value = "TODOS";
    op0.textContent = "Todos os temas (" + temas.length + ")";
    filtroTemaEl.appendChild(op0);
    temas.forEach(function (t) {
      var op = document.createElement("option");
      op.value = t;
      op.textContent = t;
      filtroTemaEl.appendChild(op);
    });
    // mantém a escolha se o tema ainda existir no filtro atual
    filtroTemaEl.value = (atual && (atual === "TODOS" || vistos[atual])) ? atual : "TODOS";
  }

  function listaFiltrada() {
    var f = filtroEl.value;
    var t = filtroTemaEl.value;
    var lista = banco().filter(function (q) {
      if (f !== "TODAS" && q.disciplina !== f) return false;
      if (t && t !== "TODOS" && q.tema !== t) return false;
      return true;
    });
    if (embaralharEl.checked) embaralhar(lista);
    return lista;
  }

  var POR_PAGINA = 10;
  var paginaAtual = 0;
  var listaAtual = [];
  var respEstudo = {};
  var respSim = {};
  var vendoResultado = false;
  var resCertas = 0, resNota = 0;

  function totalPaginas() { return Math.max(1, Math.ceil(listaAtual.length / POR_PAGINA)); }

  function rolarTopo() { window.scrollTo(0, box.offsetTop - 10); }

  function barraNav(extra) {
    var nav = document.createElement("div");
    nav.className = "painel nav-pag";
    var tp = totalPaginas();
    var ini = paginaAtual * POR_PAGINA + 1;
    var fim = Math.min(listaAtual.length, (paginaAtual + 1) * POR_PAGINA);
    var info = document.createElement("p");
    info.innerHTML = "<strong>Página " + (paginaAtual + 1) + " de " + tp + "</strong> — questões " + ini + "–" + fim + " de " + listaAtual.length;
    nav.appendChild(info);
    var linha = document.createElement("div");
    linha.className = "linha";
    var ant = document.createElement("button");
    ant.className = "btn";
    ant.textContent = "◀ Anterior";
    ant.disabled = paginaAtual === 0;
    ant.onclick = function () { if (paginaAtual > 0) { paginaAtual--; renderAtual(); rolarTopo(); } };
    var prox = document.createElement("button");
    prox.className = "btn primario";
    prox.textContent = "Próxima ▶";
    prox.disabled = paginaAtual >= tp - 1;
    prox.onclick = function () { if (paginaAtual < tp - 1) { paginaAtual++; renderAtual(); rolarTopo(); } };
    linha.appendChild(ant);
    linha.appendChild(prox);
    if (extra) linha.appendChild(extra);
    nav.appendChild(linha);
    return nav;
  }

  function amostraReal() {
    // Formato exato da prova: 10 LP + 10 MAT + 10 CG + 10 CE (CE vale 2)
    var lista = [];
    ["LP", "MAT", "CG", "CE"].forEach(function (d) {
      var pool = banco().filter(function (q) { return q.disciplina === d; });
      embaralhar(pool);
      lista = lista.concat(pool.slice(0, 10));
    });
    return lista;
  }

  function novaLista(simulado, real) {
    modoSimulado = simulado;
    simuladoReal = !!real;
    vendoResultado = false;
    listaAtual = simuladoReal ? amostraReal() : listaFiltrada();
    paginaAtual = 0;
    respEstudo = {};
    respSim = {};
    totalEl.textContent = listaAtual.length;
    if (!listaAtual.length) { box.innerHTML = "<p>Nenhuma questão neste filtro. Ajuste a matéria ou o tema.</p>"; return; }
    renderAtual();
  }

  function renderAtual() {
    if (vendoResultado) renderPaginaResultado();
    else if (modoSimulado) renderPaginaSimulado();
    else renderPaginaEstudo();
  }

  function formatarEnunciado(texto) {
    var esc = String(texto).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    // palavras marcadas com == == viram destaque amarelo (<mark>)
    esc = esc.replace(/==([^=]+)==/g, "<mark>$1</mark>");
    // afirmativas em romanos (I. II. III. IV.): quebra antes de II. III. IV.
    esc = esc.replace(/\s+((?:IV|III|II)\.)(\s)/g, "<br><br>$1$2");
    // itens numerados 2. 3. 4. seguidos de maiúscula
    esc = esc.replace(/(\s)([2-4])\.(\s)(?=[A-ZÀ-Ú0-9"])/g, "$1<br><br>$2.$3");
    // itens V/F entre parênteses: quebra antes de cada "( )"
    esc = esc.replace(/(\S)\s+(\(\s*\))/g, "$1<br><br>$2");
    return esc;
  }

  function htmlExplica(q, titulo) {    var html = "<p class='ok'><strong>" + titulo + " letra " + LETRAS[q.correta] + ".</strong> " + q.porqueCerta + "</p>";
    html += "<p><strong>Por que as outras estão erradas:</strong></p><ul>";
    for (var k = 0; k < q.alternativas.length; k++) {
      if (k === q.correta) continue;
      html += "<li><span class='no'><strong>Letra " + LETRAS[k] + " errada:</strong></span> " + q.porqueErradas[k] + "</li>";
    }
    return html + "</ul><p class='fonte'>📖 " + q.fonte + "</p>";
  }

  function montarQuestao(q, numero) {
    var div = document.createElement("div");
    div.className = "questao";
    div.setAttribute("data-disc", q.disciplina);

    var meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = '<span class="tag ' + q.disciplina + '">' + q.disciplina + "</span>" +
      "<strong>" + q.id + " • " + NOME_DISC[q.disciplina] + " — " + q.tema + "</strong>";
    div.appendChild(meta);

    var en = document.createElement("div");
    en.className = "enunciado";
    en.innerHTML = numero + ". " + formatarEnunciado(q.enunciado);
    div.appendChild(en);

    var explica = document.createElement("div");
    explica.className = "explica";
    explica.style.display = "none";

    function mostrar(escolha, contar) {
      var botoes = div.querySelectorAll("button.alt");
      for (var i = 0; i < botoes.length; i++) {
        botoes[i].disabled = true;
        if (i === q.correta) botoes[i].classList.add("certa");
        if (i === escolha && escolha !== q.correta) botoes[i].classList.add("clicada-errada", "errada");
      }
      if (contar) {
        if (respEstudo[q.id] !== undefined) return;
        respEstudo[q.id] = escolha;
        respondidas++;
        if (escolha === q.correta) acertos++;
        somarTema(q, escolha === q.correta);
        placar();
      }
      explica.innerHTML = htmlExplica(q, "✔ Resposta certa:");
      explica.style.display = "block";
    }

    q.alternativas.forEach(function (texto, i) {
      var b = document.createElement("button");
      b.className = "alt";
      b.textContent = LETRAS[i] + ") " + texto;
      b.onclick = function () { if (respEstudo[q.id] !== undefined) return; mostrar(i, true); };
      div.appendChild(b);
    });

    div.appendChild(explica);
    if (respEstudo[q.id] !== undefined) mostrar(respEstudo[q.id], false);
    return div;
  }

  function renderPaginaEstudo() {
    box.innerHTML = "";
    var ini = paginaAtual * POR_PAGINA;
    listaAtual.slice(ini, ini + POR_PAGINA).forEach(function (q, i) {
      box.appendChild(montarQuestao(q, ini + i + 1));
    });
    box.appendChild(barraNav(null));
  }

  function renderPaginaSimulado() {
    box.innerHTML = "";
    box.appendChild(barraNav(null));
    var ini = paginaAtual * POR_PAGINA;
    listaAtual.slice(ini, ini + POR_PAGINA).forEach(function (q, i) {
      var div = document.createElement("div");
      div.className = "questao";
      div.setAttribute("data-disc", q.disciplina);
      div.innerHTML = '<div class="meta"><span class="tag ' + q.disciplina + '">' + q.disciplina + "</span><strong>" +
        q.id + " • " + NOME_DISC[q.disciplina] + " — " + q.tema + "</strong></div>" +
        '<div class="enunciado">' + (ini + i + 1) + ". " + formatarEnunciado(q.enunciado) + "</div>";
      q.alternativas.forEach(function (texto, k) {
        var b = document.createElement("button");
        b.className = "alt";
        b.textContent = LETRAS[k] + ") " + texto;
        if (respSim[q.id] === k) b.style.borderColor = "#14532d";
        b.onclick = function () {
          respSim[q.id] = k;
          var todos = div.querySelectorAll("button.alt");
          for (var t = 0; t < todos.length; t++) todos[t].style.borderColor = "#cbd5e1";
          b.style.borderColor = "#14532d";
        };
        div.appendChild(b);
      });
      box.appendChild(div);
    });

    var btnConf = document.createElement("button");
    btnConf.className = "btn primario";
    btnConf.textContent = "✔ Conferir simulado (todas as " + listaAtual.length + " filtradas)";
    btnConf.onclick = conferirSimulado;
    box.appendChild(barraNav(btnConf));
  }

  function conferirSimulado() {
    resCertas = 0; resNota = 0;
    var porArea = {};
    ["LP", "MAT", "CG", "CE"].forEach(function (d) { porArea[d] = { c: 0, t: 0, nota: 0 }; });
    listaAtual.forEach(function (q) {
      var peso = (q.disciplina === "CE" ? 2 : 1);
      porArea[q.disciplina].t++;
      var esc = respSim[q.id];
      if (esc !== undefined) somarTema(q, esc === q.correta);
      if (esc === q.correta) {
        resCertas++;
        resNota += peso;
        porArea[q.disciplina].c++;
        porArea[q.disciplina].nota += peso;
      }
    });
    respondidas += listaAtual.length;
    acertos += resCertas;
    placar();
    vendoResultado = true;
    paginaAtual = 0;
    if (simuladoReal) {
      var zeradas = ["LP", "MAT", "CG", "CE"].filter(function (d) { return porArea[d].c === 0; });
      window.__veredito = (resNota >= 30 && zeradas.length === 0)
        ? "<span class='veredito-aprovado'><strong>✅ APROVADO</strong> (≥ 30 pontos e nenhuma parte zerada)</span>"
        : "<span class='veredito-reprovado'><strong>❌ REPROVADO</strong> (" +
          (zeradas.length ? "zerou: " + zeradas.join(", ") + "; " : "") +
          (resNota < 30 ? "nota " + resNota + " &lt; 30" : "nota ok, mas há parte zerada") + ")</span>";
      window.__porArea = porArea;
    } else {
      window.__veredito = null;
      window.__porArea = null;
    }
    renderAtual();
    window.scrollTo(0, 0);
  }

  function renderPaginaResultado() {
    box.innerHTML = "";
    if (paginaAtual === 0) {
      var r = document.createElement("div");
      r.className = "painel";
      var htmlR = "<h2>Resultado do simulado</h2><p style='font-size:1.2rem'>Você acertou <strong>" + resCertas + "</strong> de <strong>" + listaAtual.length + "</strong> • Nota (com peso de CE): <strong>" + resNota + "</strong> pontos.</p>";
      if (window.__veredito) {
        var pa = window.__porArea;
        htmlR += "<p>Por área — LP: " + pa.LP.c + "/10 (nota " + pa.LP.nota + ") • MAT: " + pa.MAT.c + "/10 (nota " + pa.MAT.nota + ") • CG: " + pa.CG.c + "/10 (nota " + pa.CG.nota + ") • CE: " + pa.CE.c + "/10 (nota " + pa.CE.nota + ")</p>";
        htmlR += "<p>" + window.__veredito + "</p>";
      } else {
        htmlR += "<p>Lembrete da prova real (Assistente Administrativo II): 40 questões, 50 pontos, precisa de ≥ 30 e não zerar nenhuma das 4 partes.</p>";
      }
      r.innerHTML = htmlR;
      box.appendChild(r);
    }
    var ini = paginaAtual * POR_PAGINA;
    listaAtual.slice(ini, ini + POR_PAGINA).forEach(function (q, i) {
      var esc = respSim[q.id];
      var peso = (q.disciplina === "CE" ? 2 : 1);
      var div = document.createElement("div");
      div.className = "questao";
      div.setAttribute("data-disc", q.disciplina);
      div.innerHTML = '<div class="meta"><span class="tag ' + q.disciplina + '">' + q.disciplina + "</span><strong>" +
        q.id + " • " + NOME_DISC[q.disciplina] + " — " + q.tema + "</strong></div>" +
        '<div class="enunciado">' + (ini + i + 1) + ". " + formatarEnunciado(q.enunciado) + "</div>";
      q.alternativas.forEach(function (texto, k) {
        var s = document.createElement("button");
        s.className = "alt";
        s.disabled = true;
        s.textContent = LETRAS[k] + ") " + texto;
        if (k === q.correta) s.classList.add("certa");
        if (esc !== undefined && esc === k && esc !== q.correta) s.classList.add("errada");
        div.appendChild(s);
      });
      var sua = (esc === undefined) ? "você não marcou nenhuma" : ("você marcou " + LETRAS[esc] + (esc === q.correta ? " ✔" : " ✘"));
      var ex = document.createElement("div");
      ex.className = "explica";
      ex.innerHTML = "<p><strong>Sua resposta:</strong> " + sua + " • <strong>Gabarito: " + LETRAS[q.correta] + "</strong> (peso " + peso + " ponto(s))</p>" +
        htmlExplica(q, "Por que a certa está certa:");
      ex.style.display = "block";
      div.appendChild(ex);
      box.appendChild(div);
    });
    box.appendChild(barraNav(null));
  }

  document.getElementById("btnEstudo").onclick = function () { novaLista(false, false); rolarTopo(); };
  document.getElementById("btnSimulado").onclick = function () { novaLista(true, false); rolarTopo(); };
  document.getElementById("btnReal").onclick = function () { novaLista(true, true); rolarTopo(); };
  filtroEl.onchange = function () { atualizarTemas(); novaLista(modoSimulado, simuladoReal && modoSimulado); };
  filtroTemaEl.onchange = function () { novaLista(modoSimulado, simuladoReal && modoSimulado); };
  document.getElementById("btnLimpar").onclick = function () {
    acertos = 0; respondidas = 0; temasStats = {}; placar();
    try { localStorage.removeItem("emater_progresso"); localStorage.removeItem("emater_progresso_temas"); } catch (e) {}
  };

  // Abas: Questões x Redação TQS x Auditoria x Sobre
  var abaQ = document.getElementById("abaQuestoes");
  var abaR = document.getElementById("abaRedacao");
  var abaA = document.getElementById("abaAuditoria");
  var abaS = document.getElementById("abaSobre");
  var viewQ = document.getElementById("view-questoes");
  var viewR = document.getElementById("view-redacao");
  var viewA = document.getElementById("view-auditoria");
  var viewS = document.getElementById("view-sobre");
  function trocarAba(nome) {
    if (abaQ) abaQ.classList.toggle("ativa", nome === "questoes");
    if (abaR) abaR.classList.toggle("ativa", nome === "redacao");
    if (abaA) abaA.classList.toggle("ativa", nome === "auditoria");
    if (abaS) abaS.classList.toggle("ativa", nome === "sobre");
    if (viewQ) viewQ.hidden = nome !== "questoes";
    if (viewR) viewR.hidden = nome !== "redacao";
    if (viewA) viewA.hidden = nome !== "auditoria";
    if (viewS) viewS.hidden = nome !== "sobre";
    if (nome === "auditoria") renderAuditoria();
    window.scrollTo(0, 0);
  }
  if (abaQ) abaQ.onclick = function () { trocarAba("questoes"); };
  if (abaR) abaR.onclick = function () { trocarAba("redacao"); };
  if (abaA) abaA.onclick = function () { trocarAba("auditoria"); };
  if (abaS) abaS.onclick = function () { trocarAba("sobre"); };

  // Auditoria: cobertura do conteudo.pdf calculada ao vivo (sem acento, minúsculas)
  var AUDIT = [
    { d: "LP", item: "1 — Leitura e produção de sentidos", subs: [
      { t: "1.1 Leitura e interpretação", kws: ["interpretacao de texto", "ideia central", "titulo", "leitura"] },
      { t: "1.2 Explícitas e implícitas", kws: ["explicita", "implicita", "pressuposto", "depreende"] },
      { t: "1.3 Compreensão inferencial", kws: ["inferencia", "inferir", "conclui-se", "infere-se"] },
      { t: "1.4 Significação contextual", kws: ["significado", "sentido", "contexto", "vocabulario", "impreterivelmente"] },
      { t: "1.5 Ponto de vista do autor", kws: ["ponto de vista", "opiniao", "posicionamento"] },
      { t: "1.6 Denotação e conotação", kws: ["denotacao", "conotacao", "denotativo", "conotativo"] },
      { t: "1.7 Próprio e figurado", kws: ["figurado", "metafora", "sentido proprio", "sentido literal"] },
      { t: "1.8 Sinonímia e afins", kws: ["sinonimo", "antonimo", "homonimo", "polissemia", "paronimo"] },
      { t: "1.9 Verbal/não-verbal/mista", kws: ["nao verbal", "nao-verbal", "linguagem mista", "charge", "tirinha"] } ] },
    { d: "LP", item: "2 — Linguagem e discurso", subs: [
      { t: "2.1 Funções da linguagem", kws: ["funcao emotiva", "funcao conativa", "funcao poetica", "funcao metalinguistica", "funcao fatica", "funcao referencial", "funcoes da linguagem"] },
      { t: "2.2 Texto e discurso", kws: ["texto e discurso", "enunciado", "enunciacao", "discurso direto", "discurso indireto"] },
      { t: "2.3 Intertextualidade", kws: ["intertextualidade", "citacao", "parodia", "parafrase", "alusao", "plagio"] },
      { t: "2.4 Metalinguagem", kws: ["metalinguagem", "verbete", "dicionario"] },
      { t: "2.5 Dialogismo e polifonia", kws: ["dialogismo", "polifonia", "vozes do discurso", "discurso direto", "discurso indireto", "indireto livre"] },
      { t: "2.6 Variação linguística", kws: ["variacao linguistica", "dialeto", "socioleto", "regionalismo", "norma culta"] },
      { t: "2.7 Aspectos culturais/sociais", kws: ["historia da lingua", "aspectos sociais", "cultura"] },
      { t: "2.8 Formal e informal", kws: ["registro formal", "registro informal", "linguagem formal", "linguagem informal", "giria", "coloquial"] } ] },
    { d: "LP", item: "3 — Textualidade e gêneros", subs: [
      { t: "3.1 Tipologia e gêneros", kws: ["tipologia textual", "narrativo", "descritivo", "dissertativo", "injuntivo", "genero", "edital", "aviso", "requerimento"] },
      { t: "3.2 Estrutura composicional", kws: ["estrutura composicional", "introducao", "desenvolvimento"] },
      { t: "3.3 Objetivos discursivos", kws: ["objetivo do texto", "finalidade", "intencao comunicativa", "convencer", "informar"] },
      { t: "3.4 Contexto de circulação", kws: ["circulacao", "destinatario", "suporte", "esfera"] },
      { t: "3.5 Coesão e coerência", kws: ["coesao", "coerencia", "anafora", "catafora", "retomada", "conector"] },
      { t: "3.6 Argumentação", kws: ["argumentacao", "tese", "convencimento", "estrategia argumentativa"] },
      { t: "3.7 Operadores", kws: ["portanto", "operador argumentativo", "concessao", "oposicao", "contudo", "entretanto"] },
      { t: "3.8 Fatores de textualidade", kws: ["intencionalidade", "aceitabilidade", "informatividade", "situacionalidade", "fatores de textualidade"] },
      { t: "3.9 Pontuação", kws: ["virgula", "pontuacao", "dois-pontos", "aspas", "travessao"] } ] },
    { d: "LP", item: "4 — Gramática", subs: [
      { t: "4.1 Fonética e tonicidade", kws: ["fonema", "fonetica", "tonicidade", "oxitona", "paroxitona", "proparoxitona", "silaba", "digrafo"] },
      { t: "4.2 Ortografia e acentuação", kws: ["ortografia", "acordo ortografico", "hifen", "acentuacao", "grafia"] },
      { t: "4.3 Morfologia e classes", kws: ["substantivo", "adjetivo", "verbo", "adverbio", "pronome", "conjuncao", "preposicao", "morfolog", "flexao"] },
      { t: "4.4 Frase, oração e período", kws: ["frase", "oracao", "periodo simples", "sujeito", "predicado"] },
      { t: "4.5 Termos da oração", kws: ["objeto direto", "objeto indireto", "adjunto", "aposto", "vocativo", "predicativo", "complemento nominal"] },
      { t: "4.6 Período composto", kws: ["periodo composto", "oracao subordinada", "oracao coordenada", "oracao principal", "subordinada substantiva", "subordinada adjetiva", "subordinada adverbial"] },
      { t: "4.7 Coordenação/subordinação", kws: ["coordenacao", "subordinacao", "aditiva", "adversativa", "substantiva", "adjetiva", "adverbial"] },
      { t: "4.8 Relações lógico-semânticas", kws: ["causa", "consequencia", "condicao", "comparacao"] },
      { t: "4.9 Sequenciação textual", kws: ["sequencia", "encadeamento"] },
      { t: "4.10 Análise sintática", kws: ["analise sintatica", "funcao sintatica"] },
      { t: "4.11 Concordância", kws: ["concordancia", "plural", "haver", "fazer"] },
      { t: "4.12 Regência", kws: ["regencia", "transitivo", "assistir", "obedecer", "preferir"] },
      { t: "4.13 Crase", kws: ["crase"] },
      { t: "4.14 Colocação pronominal", kws: ["colocacao", "proclise", "enclise", "mesoclise"] },
      { t: "4.15 Norma-padrão", kws: ["norma-padrao", "norma culta", "alternativa correta", "alternativa incorreta"] } ] },
    { d: "MAT", item: "1 — Conjuntos e operações", subs: [
      { t: "1.1 Tipos de conjuntos", kws: ["conjunto", "venn", "naturais", "inteiros", "racionais", "uniao", "interseccao"] },
      { t: "1.2 Operações fundamentais", kws: ["adicao", "subtracao", "multiplicacao", "divisao", "expressao numerica", "quatro operacoes"] },
      { t: "1.3 Múltiplos/divisores/primos", kws: ["multiplo", "divisor", "primo", "mmc", "mdc", "divisibilidade"] },
      { t: "1.4 Potenciação/radiciação", kws: ["potencia", "radiciacao", "raiz quadrada", "expoente"] },
      { t: "1.5 Razão/proporção/porcentagem", kws: ["razao", "proporcao", "porcent", "regra de tres"] } ] },
    { d: "MAT", item: "2 — Álgebra", subs: [
      { t: "2.1 Expressões algébricas", kws: ["expressao algebrica", "valor numerico", "monomio", "polinomio"] },
      { t: "2.2 Produtos notáveis/fatoração", kws: ["produto notavel", "quadrado da soma", "quadrado da diferenca", "fatoracao", "fator comum", "diferenca de quadrados"] },
      { t: "2.3 Equações e inequações", kws: ["equacao", "inequacao", "bhaskara", "raizes", "discriminante"] },
      { t: "2.4 Sistemas lineares", kws: ["sistema", "incognitas", "substituicao"] } ] },
    { d: "MAT", item: "3 — Funções", subs: [
      { t: "3.1 Conceito/domínio/imagem", kws: ["funcao", "dominio", "imagem", "lei de formacao"] },
      { t: "3.2 Afim/quadrática/exp/log", kws: ["afim", "quadratica", "exponencial", "logarit", "vertice", "parabola"] },
      { t: "3.3 Gráficos e interpretação", kws: ["grafico", "crescente", "decrescente"] } ] },
    { d: "MAT", item: "4 — Matemática financeira", subs: [
      { t: "4.1–4.3 Razão/regra de três/porc.", kws: ["regra de tres", "grandezas", "proporcional", "porcent"] },
      { t: "4.4 Juros simples/compostos", kws: ["juros", "montante", "taxa", "capital"] },
      { t: "4.5 Descontos e acréscimos", kws: ["desconto", "acrescimo", "atualizacao monetaria", "a vista"] } ] },
    { d: "MAT", item: "5 — Sequências", subs: [
      { t: "5.1 PA", kws: ["progressao aritmetica", "pa,"] },
      { t: "5.2 PG", kws: ["progressao geometrica", "pg,"] } ] },
    { d: "MAT", item: "6 — Geometria", subs: [
      { t: "6.1 Perímetro e área", kws: ["perimetro", "retangulo", "quadrado", "figuras planas"] },
      { t: "6.2 Pitágoras", kws: ["pitagoras", "hipotenusa", "cateto"] },
      { t: "6.3 Polígonos", kws: ["poligono", "pentagono", "hexagono", "diagonais", "angulos internos"] },
      { t: "6.4 Circunferência e círculo", kws: ["circunferencia", "circulo", "raio", "diametro"] },
      { t: "6.5 Áreas e volumes", kws: ["volume", "prisma", "piramide", "cilindro", "cone", "esfera", "cubo", "paralelepipedo"] },
      { t: "6.6 Trigonometria", kws: ["seno", "cosseno", "tangente", "trigonometr"] } ] },
    { d: "MAT", item: "7 — Combinatória/probabilidade", subs: [
      { t: "7.1 Princípio da contagem", kws: ["principio fundamental", "principio multiplicativo", "principio aditivo", "contagem"] },
      { t: "7.2 Perm/arranjos/combinações", kws: ["permutacao", "arranjo", "combinacao", "fatorial", "anagrama"] },
      { t: "7.3 Probabilidade", kws: ["probabilidade", "ao acaso", "condicional", "sorteio", "urna", "dado", "moeda"] } ] },
    { d: "MAT", item: "8 — Estatística", subs: [
      { t: "8.1 Tabelas e gráficos", kws: ["tabela", "barras", "setores", "leitura de"] },
      { t: "8.2 Média/moda/mediana", kws: ["media", "moda", "mediana"] },
      { t: "8.3 Análise de dados", kws: ["interpretacao de dados", "variacao", "crescimento"] } ] },
    { d: "MAT", item: "9 — Raciocínio lógico", subs: [
      { t: "9.1 Proposições", kws: ["proposicao", "sentenca", "valor logico"] },
      { t: "9.2 Conectivos", kws: ["conectivo", "conjuncao", "disjuncao", "bicondicional"] },
      { t: "9.3 Tabelas-verdade", kws: ["tabela-verdade", "tautologia", "contradicao", "contingencia"] },
      { t: "9.4 Equivalências/negações", kws: ["negacao", "equivalencia", "quantificador", "de morgan"] },
      { t: "9.5 Argumentação", kws: ["argumento", "validade", "premissa", "silogismo", "deducao"] },
      { t: "9.6 Sequências lógicas", kws: ["sequencia logica", "padrao", "proximo termo", "figuras"] },
      { t: "9.7 Problemas lógicos", kws: ["mentira", "cavaleiro", "deducao"] } ] },
    { d: "CG", item: "1 — A EMATER-MG", subs: [
      { t: "História/natureza/vinculação", kws: ["emater", "empresa publica", "seapa", "historia"] },
      { t: "Missão e atuação", kws: ["missao", "visao", "valores", "atuacao", "territorio", "extensao rural"] },
      { t: "Agricultura familiar e políticas", kws: ["agricultura familiar", "pnater", "pronaf", "paa", "pnae"] } ] },
    { d: "CG", item: "2 — Ética no serviço público", subs: [
      { t: "Princípios (art. 37)", kws: ["legalidade", "impessoalidade", "moralidade", "publicidade", "eficiencia"] },
      { t: "Conduta e integridade", kws: ["conduta", "integridade", "nepotismo", "conflito de interesses"] } ] },
    { d: "CG", item: "3 — Transparência e LGPD", subs: [
      { t: "Acesso à informação", kws: ["acesso a informacao", "transparencia", "sic"] },
      { t: "LGPD", kws: ["lgpd", "dados pessoais", "titular", "privacidade"] } ] },
    { d: "CG", item: "4 — Minas Gerais", subs: [
      { t: "Território mineiro", kws: ["minas gerais", "mineiro", "territorio", "regioes", "belo horizonte"] },
      { t: "Meio rural e sustentabilidade", kws: ["rural", "sustentavel", "meio ambiente", "agropecuaria"] } ] },
    { d: "CG", item: "5 — Brasil e atualidades", subs: [
      { t: "Organização do Brasil", kws: ["brasil", "uniao", "estados", "municipios", "republica", "constituicao"] },
      { t: "Atualidades agro/ambiente", kws: ["desenvolvimento", "seguranca alimentar", "preservacao"] } ] },
    { d: "CE", item: "1 — RH e pessoal", subs: [
      { t: "Rotinas (férias/ponto/banco)", kws: ["ferias", "licenca-premio", "ponto", "banco de horas", "absenteismo", "frequencia"] },
      { t: "Provimento (recrut./selec./admiss.)", kws: ["recrutamento", "selecao", "admissao", "demissao", "treinamento", "desempenho"] },
      { t: "SISPATRI/aprendiz/folha", kws: ["sispatri", "aprendiz", "senac", "bens", "folha de pagamento"] } ] },
    { d: "CE", item: "2 — Licitações/convênios", subs: [
      { t: "Lei 14.133", kws: ["licitacao", "14.133", "pregao", "dispensa", "edital", "segregacao"] },
      { t: "Contratos", kws: ["contrato", "execucao", "fiscalizacao", "vigencia"] },
      { t: "Convênios 13.019", kws: ["convenio", "13.019", "colaboracao", "fomento", "chamamento"] } ] },
    { d: "CE", item: "3 — Estoques", subs: [
      { t: "Gestão de estoques", kws: ["estoque", "almoxarifado", "giro", "pedido", "niveis"] },
      { t: "Patrimônio/inventário", kws: ["inventario", "patrimonio", "armazenagem", "fornecedor"] } ] },
    { d: "CE", item: "4 — Logística e frotas", subs: [
      { t: "Frotas e distribuição", kws: ["logistica", "frota", "rota", "abastecimento", "manutencao", "transporte", "sinalizacao"] } ] },
    { d: "CE", item: "5 — Adm. geral e pública", subs: [
      { t: "Administração geral", kws: ["planejamento", "organizacao", "direcao", "controle", "qualidade", "valores organizacionais"] },
      { t: "Administração pública", kws: ["direta", "indireta", "descentralizacao", "desconcentracao"] } ] },
    { d: "CE", item: "6 — Documentos oficiais", subs: [
      { t: "Redação e documentos", kws: ["oficio", "memorando", "ata", "redacao oficial", "manual administrativo", "circular", "impessoalidade"] } ] },
    { d: "CE", item: "7 — Arquivos", subs: [
      { t: "Gestão de arquivos", kws: ["arquivo", "classificacao", "temporalidade", "corrente", "permanente", "guarda", "eliminacao"] } ] },
    { d: "CE", item: "8 — Finanças", subs: [
      { t: "Contas e prestação", kws: ["contas a pagar", "prestacao de contas", "caixa", "gmd", "gmr", "demonstrativo", "orcamento", "nota fiscal", "adiantamento"] } ] }
  ];
  function normAudit(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  var auditDisc = "LP";
  function renderAuditoria() {
    var boxA = document.getElementById("auditoriaBox");
    if (!boxA) return;
    var todas = banco();
    var porTema = {};
    todas.forEach(function (q) {
      var k = q.disciplina + " | " + q.tema;
      porTema[k] = (porTema[k] || 0) + 1;
    });
    var nD = todas.filter(function (q) { return q.disciplina === auditDisc; }).length;
    var html = "<div class='linha subabas'>";
    [["LP", "Português"], ["MAT", "Matemática"], ["CG", "Conhec. Gerais"], ["CE", "Conhec. Específicos"]].forEach(function (p) {
      html += "<button class='btn pequeno" + (auditDisc === p[0] ? " primario" : "") + "' data-disc='" + p[0] + "'>" + p[1] + "</button>";
    });
    html += "</div>";
    html += "<h3>Auditoria — " + NOME_DISC[auditDisc] + " (" + nD + " questões)</h3>";
    html += "<table class='audit'><tr><th>Item do edital</th><th>Questões</th><th>Status</th></tr>";
    AUDIT.filter(function (a) { return a.d === auditDisc; }).forEach(function (a) {
      html += "<tr class='audit-item'><td colspan='3'><strong>" + a.item + "</strong></td></tr>";
      a.subs.forEach(function (s) {
        var ids = {};
        todas.forEach(function (q) {
          if (q.disciplina !== a.d) return;
          var t = normAudit(q.enunciado + " " + q.alternativas.join(" ") + " " + q.fonte);
          for (var i = 0; i < s.kws.length; i++) {
            if (t.indexOf(s.kws[i]) >= 0) { ids[q.id] = true; break; }
          }
        });
        var n = Object.keys(ids).length;
        var st = n >= 10 ? "✅" : (n >= 5 ? "⚠️" : "❌");
        html += "<tr><td>&nbsp;&nbsp;▪ " + s.t + "</td><td><strong>" + n + "</strong></td><td>" + st + "</td></tr>";
      });
    });
    html += "</table><p class='fonte'>Por tema: ";
    html += Object.keys(porTema).sort().filter(function (k) { return k.indexOf(auditDisc + " |") === 0; })
      .map(function (k) { return k.split(" | ")[1] + " (" + porTema[k] + ")"; }).join(" • ");
    html += "</p><p class='fonte'>Total no banco: <strong>" + todas.length + "</strong> questões. Contagens por item podem somar mais que o total, pois uma questão pode tocar mais de um subitem.</p>";
    boxA.innerHTML = html;
    var btns = boxA.querySelectorAll("button[data-disc]");
    for (var b = 0; b < btns.length; b++) {
      (function (btn) {
        btn.onclick = function () { auditDisc = btn.getAttribute("data-disc"); renderAuditoria(); };
      })(btns[b]);
    }
  }

  placar();
  atualizarTemas();
  novaLista(false, false); // abre direto no modo estudo
})();
