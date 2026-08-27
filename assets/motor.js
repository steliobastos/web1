/* =========================================================================
   MOTOR DE MISSÕES — WEB I | IFCE Campus Horizonte
   Renderiza uma missão a partir do objeto AULA, corrige na hora,
   guarda o progresso no navegador e envia as respostas para a planilha.
   ========================================================================= */
(function () {
  'use strict';

  var CFG = window.CONFIG_WEB1 || {};
  var M = null;              // missão atual
  var estado = {};           // { blocoId: {resp:..., xp:n, ok:bool} }
  var iniciadoEm = Date.now();
  var CHAVE = '';

  /* ------------------------- utilidades ------------------------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function pintar(cod) {
    return esc(cod)
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="com">$1</span>')
      .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tag">$2</span>')
      .replace(/([a-zA-Z-]+)=(&quot;|")(.*?)\2/g, '<span class="atr">$1</span>=<span class="val">"$3"</span>');
  }
  function baralhar(a) {
    var r = a.slice(), i, j, t;
    for (i = r.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = r[i]; r[i] = r[j]; r[j] = t; }
    return r;
  }
  function salvar() {
    try {
      localStorage.setItem(CHAVE, JSON.stringify({
        aluno: valor('id-aluno'), matricula: valor('id-matricula'), turma: valor('id-turma'),
        estado: estado, iniciadoEm: iniciadoEm
      }));
    } catch (e) { /* modo privativo */ }
  }
  function carregar() {
    try {
      var d = JSON.parse(localStorage.getItem(CHAVE) || 'null');
      return d || null;
    } catch (e) { return null; }
  }
  function valor(id) { var e = document.getElementById(id); return e ? e.value.trim() : ''; }

  /* ------------------------- XP / HUD ------------------------- */
  function xpTotal() {
    var s = 0; for (var k in estado) if (estado[k] && estado[k].xp) s += estado[k].xp; return s;
  }
  function xpMax() {
    var s = 0; M.blocos.forEach(function (b) { if (b.xp) s += b.xp; }); return s;
  }
  function atualizarHud() {
    var got = xpTotal(), max = xpMax(), pct = max ? Math.round(got / max * 100) : 0;
    if (M.semFeedback) {
      var f0 = M.blocos.filter(function (x) { return x.xp && estado[x.id] && estado[x.id].feito; }).length;
      var t0 = M.blocos.filter(function (x) { return x.xp; }).length;
      pct = t0 ? Math.round(f0 / t0 * 100) : 0;
    }
    var b = document.querySelector('.barra i');
    if (b) { b.style.width = pct + '%'; b.classList.toggle('animando', pct > 0 && pct < 100); }
    var n = document.getElementById('hud-num');
    var feitosN = M.blocos.filter(function (x) { return x.xp && estado[x.id] && estado[x.id].feito; }).length;
    var totaisN = M.blocos.filter(function (x) { return x.xp; }).length;
    if (n) {
      n.innerHTML = M.semFeedback
        ? feitosN + ' <small>/ ' + totaisN + ' respondidas</small>'
        : got + ' <small>/ ' + max + ' XP</small>';
    }
    var f = document.getElementById('hud-feitos');
    var feitos = M.blocos.filter(function (x) { return x.xp && estado[x.id] && estado[x.id].feito; }).length;
    var totais = M.blocos.filter(function (x) { return x.xp; }).length;
    if (f) f.textContent = feitos + ' de ' + totais + ' desafios';
    var pl = document.getElementById('placar-xp'); if (pl) pl.textContent = got;
    var pp = document.getElementById('placar-pct'); if (pp) pp.textContent = pct + '%';
    var pd = document.getElementById('placar-des'); if (pd) pd.textContent = feitos + '/' + totais;
  }
  function pontuar(id, xp, ok, resp) {
    estado[id] = { xp: xp, feito: true, ok: !!ok, resp: resp };
    atualizarHud(); salvar();
    var bl = document.getElementById('bloco-' + id);
    if (bl && ok) bl.classList.add('ok');
    if (ok && !M.semFeedback) faisca();   // numa avaliativa, comemorar seria dizer que acertou
  }
  function faisca() {
    var cores = ['#3b6ef6', '#12a150', '#e08600', '#e0457b', '#7c5cf0', '#0e9bb0'];
    var c = el('div', 'confete');
    for (var i = 0; i < 26; i++) {
      var p = el('i');
      p.style.left = Math.random() * 100 + '%';
      p.style.background = cores[i % cores.length];
      p.style.animationDuration = (1.5 + Math.random() * 1.4) + 's';
      p.style.animationDelay = (Math.random() * .35) + 's';
      c.appendChild(p);
    }
    document.body.appendChild(c);
    setTimeout(function () { c.remove(); }, 3400);
  }
  function retorno(cont, tipo, html) {
    var r = cont.querySelector('.retorno');
    if (!r) { r = el('div', 'retorno'); cont.appendChild(r); }
    r.className = 'retorno mostrar ' + tipo;
    r.innerHTML = html;
  }

  /* ------------------------- blocos ------------------------- */
  function cabecalhoBloco(b, i) {
    var c = el('div', 'bloco-cab');
    c.appendChild(el('div', 'bloco-n', b.xp ? String(i) : '📘'));
    var t = el('div', 'bloco-tit');
    t.appendChild(el('h2', null, esc(b.titulo || '')));
    if (b.sub) t.appendChild(el('p', 'sub', esc(b.sub)));
    c.appendChild(t);
    if (b.xp) c.appendChild(el('div', 'bloco-xp', '+' + b.xp + ' XP'));
    return c;
  }

  function bConceito(b) {
    var w = el('div');
    if (b.texto) w.appendChild(el('p', null, b.texto));
    if (b.cards && b.cards.length) {
      var g = el('div', 'conceitos');
      b.cards.forEach(function (c) {
        var d = el('div', 'conceito');
        d.appendChild(el('h4', null, c.t));
        d.appendChild(el('p', null, c.d));
        g.appendChild(d);
      });
      w.appendChild(g);
    }
    if (b.codigo) { var p = el('pre', 'codigo'); p.innerHTML = pintar(b.codigo); w.appendChild(p); }
    if (b.tabela) w.appendChild(tabela(b.tabela));
    (b.dicas || []).forEach(function (d) {
      w.appendChild(el('div', 'dica ' + (d.tipo || ''), '<span>' + (d.icone || '💡') + '</span><div>' + d.txt + '</div>'));
    });
    return w;
  }
  function tabela(t) {
    var box = el('div', 'cx-rolagem'), tb = el('table', 'tab'), h = el('tr');
    t.cab.forEach(function (c) { h.appendChild(el('th', null, c)); });
    tb.appendChild(el('thead')).appendChild(h);
    var body = el('tbody');
    t.linhas.forEach(function (l) {
      var tr = el('tr');
      l.forEach(function (c) { tr.appendChild(el('td', null, c)); });
      body.appendChild(tr);
    });
    tb.appendChild(body); box.appendChild(tb); return box;
  }

  function bQuiz(b) {
    var w = el('div');
    if (b.pergunta) w.appendChild(el('p', null, '<strong>' + b.pergunta + '</strong>'));
    if (b.codigo) { var p = el('pre', 'codigo'); p.innerHTML = pintar(b.codigo); w.appendChild(p); }
    var multi = b.tipo === 'multi';
    var alts = el('div', 'alts'), marcadas = [];
    var letras = 'ABCDEFGH';
    b.opcoes.forEach(function (o, i) {
      var a = el('div', 'alt');
      a.appendChild(el('div', 'letra', letras[i]));
      a.appendChild(el('div', null, o));
      a.dataset.i = i;
      a.onclick = function () {
        if (a.classList.contains('travada')) return;
        if (multi) {
          a.classList.toggle('marcada');
          var k = marcadas.indexOf(i);
          if (k >= 0) marcadas.splice(k, 1); else marcadas.push(i);
        } else {
          alts.querySelectorAll('.alt').forEach(function (x) { x.classList.remove('marcada'); });
          a.classList.add('marcada'); marcadas = [i];
        }
      };
      alts.appendChild(a);
    });
    w.appendChild(alts);
    var certas = multi ? b.corretas.slice().sort() : [b.correta];
    var ac = el('div', 'acoes');
    var bt = el('button', 'btn', '✓ Conferir');
    bt.onclick = function () {
      if (!marcadas.length) { retorno(w, 'meio', 'Escolha ' + (multi ? 'pelo menos uma opção' : 'uma alternativa') + ' antes de conferir.'); return; }
      var m = marcadas.slice().sort();
      bt.disabled = true;
      if (M.semFeedback) {
        alts.querySelectorAll('.alt').forEach(function (x) { x.classList.add('travada'); });
        retorno(w, 'meio', '<strong>Resposta registrada.</strong><div style="margin-top:6px">Nesta missão avaliativa o acerto não é mostrado na hora — a correção é feita depois.</div>');
        pontuar(b.id, b.xp, true, multi ? m : m[0]);
        return;
      }
      var ok = m.length === certas.length && m.every(function (v, k) { return v === certas[k]; });
      alts.querySelectorAll('.alt').forEach(function (x) {
        var i = +x.dataset.i; x.classList.add('travada'); x.classList.remove('marcada');
        if (certas.indexOf(i) >= 0) x.classList.add('certa');
        else if (m.indexOf(i) >= 0) x.classList.add('errada');
      });
      retorno(w, ok ? 'bom' : 'ruim', (ok ? '<strong>Mandou bem! +' + b.xp + ' XP</strong>' : '<strong>Ainda não.</strong>') +
        (b.explica ? '<div style="margin-top:6px">' + b.explica + '</div>' : ''));
      pontuar(b.id, ok ? b.xp : 0, ok, multi ? m : m[0]);
    };
    ac.appendChild(bt); w.appendChild(ac);
    return w;
  }

  function bLacuna(b) {
    var w = el('div');
    if (b.enunciado) w.appendChild(el('p', null, b.enunciado));
    var box = el('div', 'lacunas');
    var partes = b.texto.split(/\{\{(\d+)\}\}/);
    partes.forEach(function (p, i) {
      if (i % 2 === 0) { box.appendChild(document.createTextNode(p)); }
      else {
        var inp = document.createElement('input');
        inp.type = 'text'; inp.dataset.i = (+p) - 1;
        inp.size = Math.max(b.respostas.length ? 6 : 14, (b.respostas[(+p) - 1] || '').length + 2);
        inp.setAttribute('aria-label', 'lacuna ' + p);
        box.appendChild(inp);
      }
    });
    w.appendChild(box);
    var ac = el('div', 'acoes');
    var bt = el('button', 'btn', '✓ Conferir');
    bt.onclick = function () {
      var ins = box.querySelectorAll('input'), acertos = 0, dadas = [];
      if (M.semFeedback) {
        ins.forEach(function (inp) { dadas[+inp.dataset.i] = inp.value.trim(); });
        retorno(w, 'meio', '<strong>Respostas registradas.</strong><div style="margin-top:6px">Você pode continuar ajustando até enviar a missão.</div>');
        pontuar(b.id, b.xp, true, dadas);
        return;
      }
      ins.forEach(function (inp) {
        var i = +inp.dataset.i;
        var dado = inp.value.trim(); dadas[i] = dado;
        var esperado = b.respostas[i];
        var ok = normaliza(dado) === normaliza(esperado);
        inp.classList.remove('certa', 'errada');
        inp.classList.add(ok ? 'certa' : 'errada');
        if (ok) acertos++; else inp.value = dado;
      });
      var frac = acertos / b.respostas.length;
      var xp = Math.round(b.xp * frac);
      retorno(w, frac === 1 ? 'bom' : (frac >= .5 ? 'meio' : 'ruim'),
        '<strong>' + acertos + ' de ' + b.respostas.length + ' corretas — +' + xp + ' XP</strong>' +
        (frac < 1 ? '<div style="margin-top:6px">Corrija as vermelhas e confira de novo (a maior pontuação é mantida).</div>' : ''));
      if (!estado[b.id] || xp > estado[b.id].xp) pontuar(b.id, xp, frac === 1, dadas);
    };
    ac.appendChild(bt);
    if (b.semGabarito || M.semFeedback) { w.appendChild(ac); return w; }
    var bg = el('button', 'btn fantasma', 'Ver gabarito');
    bg.onclick = function () {
      box.querySelectorAll('input').forEach(function (inp) { inp.value = b.respostas[+inp.dataset.i]; inp.classList.add('certa'); });
      retorno(w, 'meio', 'Gabarito preenchido — nesta tentativa não conta XP, mas leia com calma.');
      if (!estado[b.id]) pontuar(b.id, 0, false, 'gabarito');
    };
    ac.appendChild(bg);
    w.appendChild(ac);
    return w;
  }
  function normaliza(s) {
    return String(s || '').toLowerCase().replace(/\s+/g, ' ').replace(/["']/g, '').trim();
  }

  function bOrdenar(b) {
    var w = el('div');
    if (b.enunciado) w.appendChild(el('p', null, b.enunciado));
    var lista = el('div', 'ordenar');
    var itens = baralhar(b.itens.map(function (t, i) { return { t: t, i: i }; }));
    if (itens.every(function (o, k) { return o.i === k; })) itens.reverse();
    itens.forEach(function (o) {
      var d = el('div', 'ordem-item'); d.draggable = true; d.dataset.i = o.i;
      d.appendChild(el('span', 'pega', '⠿'));
      d.appendChild(el('span', 'txt', esc(o.t)));
      var st = el('div', 'ordem-setas');
      var up = el('button', null, '▲'); up.type = 'button';
      up.onclick = function (e) { e.stopPropagation(); if (d.previousElementSibling) lista.insertBefore(d, d.previousElementSibling); };
      var dn = el('button', null, '▼'); dn.type = 'button';
      dn.onclick = function (e) { e.stopPropagation(); if (d.nextElementSibling) lista.insertBefore(d.nextElementSibling, d); };
      st.appendChild(up); st.appendChild(dn); d.appendChild(st);
      d.addEventListener('dragstart', function () { d.classList.add('arrastando'); });
      d.addEventListener('dragend', function () { d.classList.remove('arrastando'); });
      lista.appendChild(d);
    });
    lista.addEventListener('dragover', function (e) {
      e.preventDefault();
      var arr = lista.querySelector('.arrastando'); if (!arr) return;
      var depois = null, y = e.clientY;
      lista.querySelectorAll('.ordem-item:not(.arrastando)').forEach(function (x) {
        var r = x.getBoundingClientRect();
        if (y > r.top + r.height / 2) depois = x;
      });
      if (depois) lista.insertBefore(arr, depois.nextSibling); else lista.insertBefore(arr, lista.firstChild);
    });
    w.appendChild(lista);
    var ac = el('div', 'acoes');
    var bt = el('button', 'btn', '✓ Conferir ordem');
    bt.onclick = function () {
      var ok = 0, seq = [];
      if (M.semFeedback) {
        lista.querySelectorAll('.ordem-item').forEach(function (x) { seq.push(+x.dataset.i); });
        retorno(w, 'meio', '<strong>Ordem registrada.</strong><div style="margin-top:6px">Dá para reorganizar e conferir de novo até enviar.</div>');
        pontuar(b.id, b.xp, true, seq);
        return;
      }
      lista.querySelectorAll('.ordem-item').forEach(function (x, k) {
        var i = +x.dataset.i; seq.push(i);
        x.classList.remove('certa', 'errada');
        if (i === k) { x.classList.add('certa'); ok++; } else x.classList.add('errada');
      });
      var frac = ok / b.itens.length, xp = Math.round(b.xp * frac);
      retorno(w, frac === 1 ? 'bom' : 'meio', '<strong>' + ok + ' de ' + b.itens.length + ' na posição certa — +' + xp + ' XP</strong>');
      if (!estado[b.id] || xp > estado[b.id].xp) pontuar(b.id, xp, frac === 1, seq);
    };
    ac.appendChild(bt); w.appendChild(ac);
    return w;
  }

  function bParear(b) {
    var w = el('div');
    if (b.enunciado) w.appendChild(el('p', null, b.enunciado));
    var g = el('div', 'pares'), ce = el('div', 'col'), cd = el('div', 'col');
    var sel = null, feitos = 0, erros = 0;
    b.pares.forEach(function (p, i) {
      var a = el('div', 'par-item', '<span class="par-num">' + (i + 1) + '</span>' + p.a);
      a.dataset.i = i; a.dataset.lado = 'a';
      a.onclick = function () { clicar(a); };
      ce.appendChild(a);
    });
    baralhar(b.pares.map(function (p, i) { return { p: p, i: i }; })).forEach(function (o) {
      var d = el('div', 'par-item', o.p.b);
      d.dataset.i = o.i; d.dataset.lado = 'b';
      d.onclick = function () { clicar(d); };
      cd.appendChild(d);
    });
    function clicar(x) {
      if (x.classList.contains('feito')) return;
      if (!sel) { sel = x; x.classList.add('sel'); return; }
      if (sel === x) { sel.classList.remove('sel'); sel = null; return; }
      if (sel.dataset.lado === x.dataset.lado) { sel.classList.remove('sel'); sel = x; x.classList.add('sel'); return; }
      if (sel.dataset.i === x.dataset.i) {
        sel.classList.remove('sel'); sel.classList.add('feito'); x.classList.add('feito');
        feitos++; sel = null;
        if (feitos === b.pares.length) {
          var xp = Math.max(0, b.xp - erros * Math.ceil(b.xp / (b.pares.length * 2)));
          retorno(w, erros === 0 ? 'bom' : 'meio', '<strong>Tudo pareado! ' + erros + ' erro(s) — +' + xp + ' XP</strong>');
          pontuar(b.id, xp, erros === 0, 'completo:' + erros);
        }
      } else {
        erros++;
        x.classList.add('errada'); sel.classList.remove('sel');
        var s = sel; sel = null;
        setTimeout(function () { x.classList.remove('errada'); }, 450);
      }
    }
    g.appendChild(ce); g.appendChild(cd); w.appendChild(g);
    return w;
  }

  /* ------------------------- editor de código ------------------------- */
  function montarDoc(b, arq) {
    var html = arq.html || '', css = arq.css || '', js = arq.js || '';
    if (b.contexto) {
      if (b.linguagem === 'css') html = b.contexto;
      if (b.linguagem === 'js') html = b.contexto;
    }
    var espiao = '<scr' + 'ipt>(function(){var p=function(t,c){parent.postMessage({__log:1,t:t,c:c},"*")};' +
      'var o=console.log;console.log=function(){o.apply(console,arguments);' +
      'p(Array.prototype.map.call(arguments,function(a){try{return typeof a==="object"?JSON.stringify(a):String(a)}catch(e){return String(a)}}).join(" "),"log")};' +
      'console.error=function(){p(Array.prototype.slice.call(arguments).join(" "),"erro")};' +
      'window.onerror=function(m,s,l){p(m+" (linha "+l+")","erro");return false};})();</scr' + 'ipt>';
    if (b.linguagem === 'html' && !css && !js) {
      return /<html/i.test(html) ? html.replace(/<head[^>]*>/i, function (m) { return m + espiao; }) : espiao + html;
    }
    return '<!doctype html><html lang="pt-br"><head><meta charset="utf-8">' + espiao +
      '<style>body{font-family:Segoe UI,system-ui,sans-serif;padding:14px;color:#1f2937;line-height:1.6}' +
      (css) + '</style></head><body>' + html + '<scr' + 'ipt>' + js + '</scr' + 'ipt></body></html>';
  }

  function bCodigo(b) {
    var w = el('div');
    if (b.enunciado) w.appendChild(el('div', null, b.enunciado));
    if (b.requisitos && b.requisitos.length) {
      var ul = '<ul>' + b.requisitos.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul>';
      w.appendChild(el('div', 'dica nota', '<span>🎯</span><div><b>Sua missão:</b>' + ul + '</div>'));
    }
    if (b.modelo) {
      var pm = el('pre', 'codigo'); pm.innerHTML = pintar(b.modelo);
      w.appendChild(el('p', 'pequeno mudo', 'Referência:'));
      w.appendChild(pm);
    }

    var linguas = b.abas || [b.linguagem || 'html'];
    var arq = {};
    linguas.forEach(function (l) { arq[l] = (b.base && b.base[l] != null) ? b.base[l] : ''; });

    var ed = el('div', 'editor');
    var abas = el('div', 'editor-abas');
    var corpo = el('div', 'editor-corpo');
    var area = el('div', 'editor-area');
    var ta = document.createElement('textarea');
    ta.spellcheck = false;
    area.appendChild(ta);
    var previa = el('div', 'editor-previa');
    previa.appendChild(el('div', 'rot', '<span>Prévia ao vivo</span><span class="mudo">atualiza sozinho</span>'));
    var ifr = document.createElement('iframe');
    ifr.setAttribute('sandbox', 'allow-scripts allow-forms allow-modals');
    ifr.title = 'prévia';
    previa.appendChild(ifr);
    var cons = el('div', 'console');
    previa.appendChild(cons);
    corpo.appendChild(area); corpo.appendChild(previa);

    var atual = linguas[0];
    linguas.forEach(function (l) {
      var t = el('button', l === atual ? 'ativa' : '', l.toUpperCase());
      t.type = 'button';
      t.onclick = function () {
        arq[atual] = ta.value; atual = l;
        abas.querySelectorAll('button').forEach(function (x) { x.classList.remove('ativa'); });
        t.classList.add('ativa'); ta.value = arq[l]; ta.focus();
      };
      abas.appendChild(t);
    });
    ta.value = arq[atual];

    var timer = null;
    function repintar() {
      arq[atual] = ta.value;
      cons.innerHTML = '';
      ifr.srcdoc = montarDoc(b, arq);
    }
    ta.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(repintar, 420); });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        var s = ta.selectionStart, f = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(f);
        ta.selectionStart = ta.selectionEnd = s + 2;
      }
    });
    window.addEventListener('message', function (ev) {
      if (ev.data && ev.data.__log) {
        var d = el('div', ev.data.c === 'erro' ? 'erro' : '', esc(ev.data.t));
        cons.appendChild(d); cons.scrollTop = cons.scrollHeight;
      }
    });

    var rod = el('div', 'editor-rodape');
    var bRun = el('button', 'btn suave', '▶ Rodar');
    bRun.type = 'button'; bRun.onclick = repintar;
    rod.appendChild(bRun);
    var bLimpa = el('button', 'btn fantasma', '↺ Recomeçar');
    bLimpa.type = 'button';
    bLimpa.onclick = function () {
      if (!confirm('Apagar o que você escreveu e voltar ao código inicial?')) return;
      linguas.forEach(function (l) { arq[l] = (b.base && b.base[l] != null) ? b.base[l] : ''; });
      ta.value = arq[atual]; repintar();
    };
    rod.appendChild(bLimpa);
    if (b.pista) {
      var bP = el('button', 'btn fantasma', '💡 Pista');
      bP.type = 'button';
      bP.onclick = function () { retorno(w, 'meio', '<strong>Pista:</strong> ' + b.pista); };
      rod.appendChild(bP);
    }

    ed.appendChild(abas); ed.appendChild(corpo); ed.appendChild(rod);
    w.appendChild(ed);
    setTimeout(repintar, 60);

    var ac = el('div', 'acoes');
    var bt = el('button', 'btn verde', M.semFeedback ? '✓ Registrar resposta' : '✓ Validar missão');
    bt.type = 'button';
    bt.onclick = function () {
      arq[atual] = ta.value;
      var texto = linguas.map(function (l) { return arq[l] || ''; }).join('\n');
      if (M.semFeedback) {
        retorno(w, texto.trim().length > 30 ? 'meio' : 'ruim',
          texto.trim().length > 30
            ? '<strong>Código registrado.</strong><div style="margin-top:6px">Continue mexendo se quiser — vale o que estiver aqui quando você enviar a missão.</div>'
            : '<strong>Ainda está vazio.</strong> Escreva o código antes de registrar.');
        estado[b.id] = { xp: texto.trim().length > 30 ? b.xp : 0, feito: true, ok: true, resp: JSON.stringify(arq) };
        atualizarHud(); salvar();
        return;
      }
      var passou = 0, itens = '';
      (b.checks || []).forEach(function (c) {
        var re = new RegExp(c.re, c.flags || 'i');
        var ok = re.test(texto);
        if (c.negar) ok = !ok;
        if (ok) passou++;
        itens += '<li class="' + (ok ? 'ok' : 'nao') + '">' + c.msg + '</li>';
      });
      var n = (b.checks || []).length || 1;
      var frac = passou / n, xp = Math.round(b.xp * frac);
      retorno(w, frac === 1 ? 'bom' : (frac >= .5 ? 'meio' : 'ruim'),
        '<strong>' + passou + ' de ' + n + ' requisitos cumpridos — +' + xp + ' XP</strong><ul>' + itens + '</ul>' +
        (frac === 1 && b.parabens ? '<div style="margin-top:6px">' + b.parabens + '</div>' : ''));
      var melhor = !estado[b.id] || xp >= estado[b.id].xp;
      estado[b.id] = { xp: melhor ? xp : estado[b.id].xp, feito: true, ok: frac === 1, resp: JSON.stringify(arq) };
      atualizarHud(); salvar();
      var bl = document.getElementById('bloco-' + b.id);
      if (bl && frac === 1) { bl.classList.add('ok'); if (!M.semFeedback) faisca(); }
    };
    ac.appendChild(bt); w.appendChild(ac);
    return w;
  }

  function bTexto(b) {
    var w = el('div');
    if (b.enunciado) w.appendChild(el('div', null, b.enunciado));
    var ta = document.createElement('textarea');
    ta.rows = b.linhas || 4; ta.spellcheck = true;
    ta.style.cssText = 'width:100%;padding:12px 14px;border:1.5px solid var(--linha);border-radius:11px;font:400 .95rem var(--fonte);background:#fff;outline:none;resize:vertical';
    ta.placeholder = b.exemplo || 'Escreva sua resposta com suas palavras...';
    w.appendChild(ta);
    var ac = el('div', 'acoes');
    var bt = el('button', 'btn', '✓ Guardar resposta');
    bt.onclick = function () {
      var t = ta.value.trim();
      if (t.length < (b.minimo || 20)) { retorno(w, 'meio', 'Escreva um pouco mais (mínimo ' + (b.minimo || 20) + ' caracteres).'); return; }
      retorno(w, 'bom', '<strong>Resposta guardada — +' + b.xp + ' XP</strong><div style="margin-top:6px">O professor vai ler esta resposta na correção.</div>');
      pontuar(b.id, b.xp, true, t);
    };
    ac.appendChild(bt); w.appendChild(ac);
    return w;
  }

  var CONSTRUTORES = {
    conceito: bConceito, quiz: bQuiz, multi: bQuiz, lacuna: bLacuna,
    ordenar: bOrdenar, parear: bParear, codigo: bCodigo, texto: bTexto
  };

  /* ------------------------- identificação ------------------------- */
  function painelIdentidade() {
    var d = el('div', 'identidade surge');
    d.innerHTML = '<h2 style="margin:0 0 4px">👤 Antes de começar</h2>' +
      '<p class="mudo pequeno" style="margin:0">Preencha seus dados. Sem isso a entrega não é registrada na planilha do professor.</p>';
    var c = el('div', 'campos');
    c.innerHTML =
      '<div class="campo"><label for="id-aluno">Nome completo</label><input id="id-aluno" autocomplete="name" placeholder="Seu nome"></div>' +
      '<div class="campo"><label for="id-matricula">Matrícula</label><input id="id-matricula" placeholder="Ex.: 2026010123"></div>' +
      '<div class="campo"><label for="id-turma">Turma</label><select id="id-turma">' +
      (CFG.TURMAS || ['1º ANO A']).map(function (t) { return '<option>' + t + '</option>'; }).join('') +
      '</select></div>';
    d.appendChild(c);
    return d;
  }

  /* ------------------------- entrega ------------------------- */
  function montarPayload() {
    var resp = {};
    M.blocos.forEach(function (b) { if (b.xp) resp[b.id] = estado[b.id] ? estado[b.id].resp : null; });
    return {
      versao: 1,
      aula: M.id, titulo: M.titulo, unidade: M.unidade, data: M.data,
      aluno: valor('id-aluno'), matricula: valor('id-matricula'), turma: valor('id-turma'),
      xp: xpTotal(), xpMax: xpMax(),
      minutos: Math.round((Date.now() - iniciadoEm) / 60000),
      enviadoEm: new Date().toISOString(),
      respostas: resp
    };
  }

  function painelEntrega() {
    var d = el('div', 'entrega revelar');
    d.id = 'painel-entrega';
    d.innerHTML =
      '<div class="medalha">🏅</div>' +
      '<h2>Fechar a missão</h2>' +
      '<p class="mudo">Confira sua pontuação e envie. Você pode enviar mais de uma vez — vale a última entrega.</p>' +
      '<div class="placar">' +
      (M.semFeedback ? '' : '<div><b id="placar-xp">0</b><span>XP</span></div>' +
      '<div><b id="placar-pct">0%</b><span>aproveitamento</span></div>') +
      '<div><b id="placar-des">0/0</b><span>' + (M.semFeedback ? 'questões respondidas' : 'desafios') + '</span></div>' +
      '</div>';
    var ac = el('div', 'acoes'); ac.style.justifyContent = 'center';
    var bt = el('button', 'btn verde grande', '📤 Enviar minhas respostas');
    bt.onclick = function () { enviar(bt, d); };
    ac.appendChild(bt);
    var bx = el('button', 'btn fantasma', '⬇ Baixar cópia (.json)');
    bx.onclick = function () {
      var p = montarPayload();
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(p, null, 2)], { type: 'application/json' }));
      a.download = M.id + '-' + (p.aluno || 'aluno').replace(/\s+/g, '_') + '.json';
      a.click();
    };
    ac.appendChild(bx);
    d.appendChild(ac);
    d.appendChild(el('div', 'retorno'));
    return d;
  }

  function faltaIdentidade() {
    var faltou = false;
    ['id-aluno', 'id-matricula'].forEach(function (id) {
      var e = document.getElementById(id);
      if (e && !e.value.trim()) { e.classList.add('faltando'); faltou = true; }
      else if (e) e.classList.remove('faltando');
    });
    return faltou;
  }

  function enviar(bt, painel) {
    if (faltaIdentidade()) {
      retorno(painel, 'ruim', 'Preencha <strong>nome</strong> e <strong>matrícula</strong> no topo da página antes de enviar.');
      document.querySelector('.identidade').scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    var feitos = M.blocos.filter(function (x) { return x.xp && estado[x.id] && estado[x.id].feito; }).length;
    var totais = M.blocos.filter(function (x) { return x.xp; }).length;
    if (feitos < totais && !confirm('Você respondeu ' + feitos + ' de ' + totais + ' desafios. Enviar assim mesmo?')) return;

    var p = montarPayload();
    var url = CFG.URL_ENVIO;
    if (!url) { mostrarCodigo(painel, p, 'O envio automático ainda não foi configurado pelo professor.'); return; }

    bt.disabled = true;
    bt.innerHTML = '<span class="girando"></span> Enviando...';
    fetch(url, {
      method: 'POST', redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(p)
    }).then(function (r) { return r.json(); })
      .then(function (r) {
        bt.disabled = false; bt.textContent = '📤 Enviar novamente';
        if (r && r.ok) {
          retorno(painel, 'bom', '<strong>Entrega registrada! ✅</strong><div style="margin-top:6px">Protocolo <code class="inline">' + (r.protocolo || '—') + '</code> — ' + (r.nota != null ? 'nota preliminar <strong>' + r.nota + '</strong>' : 'o professor fará a correção.') + '</div>');
          faisca();
        } else {
          mostrarCodigo(painel, p, 'A planilha respondeu com erro: ' + ((r && r.erro) || 'desconhecido') + '.');
        }
      })
      .catch(function () {
        bt.disabled = false; bt.textContent = '📤 Tentar enviar de novo';
        mostrarCodigo(painel, p, 'Não consegui falar com a planilha (internet ou link fora do ar).');
      });
  }

  function mostrarCodigo(painel, p, motivo) {
    var b64 = btoa(unescape(encodeURIComponent(JSON.stringify(p))));
    retorno(painel, 'meio',
      '<strong>' + motivo + '</strong>' +
      '<div style="margin-top:8px">Copie o <b>código de entrega</b> abaixo e mande para o professor (chat da turma, e-mail ou pendrive). Ele consegue importar direto na planilha.</div>' +
      '<div class="codigo-entrega" id="cod-entrega">' + b64 + '</div>' +
      '<button class="btn suave" style="margin-top:10px" onclick="navigator.clipboard.writeText(document.getElementById(\'cod-entrega\').textContent);this.textContent=\'Copiado! ✓\'">📋 Copiar código</button>');
  }

  /* ------------------------- render ------------------------- */
  function iniciarMissao(aula) {
    M = aula;
    CHAVE = 'web1:' + M.id;
    document.title = M.id + ' · ' + M.titulo + ' — WEB I';

    var raiz = document.getElementById('missao') || document.body;
    if (M.semFeedback) document.body.classList.add('aval');
    var env = el('div', 'envelope');

    // HUD
    var hud = el('div', 'hud');
    hud.innerHTML =
      '<a class="marca" href="../index.html"><span class="marca-ic">&lt;/&gt;</span><span>WEB I</span></a>' +
      '<div class="topo-links">' +
        '<a href="../index.html">Missões</a>' +
        '<a href="../cronograma.html">Cronograma</a>' +
      '</div>' +
      '<div class="hud-xp"><div class="hud-rot"><span id="hud-feitos">0 desafios</span><span>' + esc(M.id) + '</span></div>' +
      '<div class="barra"><i></i></div></div>' +
      '<div class="hud-num" id="hud-num">0 <small>/ 0 XP</small></div>';
    env.appendChild(hud);

    // capa
    var capa = el('div', 'capa');
    var topo = el('div', 'capa-topo');
    topo.innerHTML =
      '<span class="selo roxo">Unidade ' + esc(M.unidade) + '</span>' +
      '<span class="selo cinza">' + esc(M.dataTexto || M.data) + '</span>' +
      '<span class="selo ' + (M.etapa === 'N2' ? 'ciano' : 'verde') + '">Etapa ' + esc(M.etapa || 'N1') + '</span>' +
      (M.avaliativa ? '<span class="selo rosa">★ Missão avaliativa</span>' : '') +
      '<span class="selo ambar">' + xpMaxDe(M) + ' XP</span>';
    capa.appendChild(topo);
    capa.appendChild(el('h1', null, esc(M.id) + ' · ' + esc(M.titulo)));
    if (M.resumo) capa.appendChild(el('p', 'resumo', M.resumo));
    if (M.objetivos && M.objetivos.length) {
      var o = el('div', 'dica nota');
      o.innerHTML = '<span>🎯</span><div><b>No fim desta missão você consegue:</b><ul style="margin:6px 0 0;padding-left:18px">' +
        M.objetivos.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
      capa.appendChild(o);
    }
    env.appendChild(capa);

    if (M.aviso) env.appendChild(el('div', 'aviso-topo', M.aviso));
    if (M.semFeedback) env.appendChild(el('div', 'aviso-topo',
      '🔒 <b>Missão avaliativa.</b> Aqui o sistema não diz se você acertou — ele só registra a sua resposta. ' +
      'Revise com calma antes de enviar; você pode alterar qualquer questão até clicar em Enviar.'));
    env.appendChild(painelIdentidade());

    // blocos
    var n = 0;
    M.blocos.forEach(function (b) {
      if (b.xp) n++;
      if (!b.id) b.id = 'b' + n;
      var c = el('div', 'cartao bloco revelar');
      c.id = 'bloco-' + b.id;
      c.appendChild(cabecalhoBloco(b, n));
      var f = CONSTRUTORES[b.tipo] || bConceito;
      c.appendChild(f(b));
      env.appendChild(c);
    });

    env.appendChild(painelEntrega());

    var rod = el('div', 'centro mudo pequeno');
    rod.style.marginTop = '26px';
    rod.innerHTML = (CFG.CAMPUS || '') + ' · ' + (CFG.DISCIPLINA || '') + ' · ' + (CFG.PROFESSOR || '');
    env.appendChild(rod);

    raiz.appendChild(env);

    // restaurar progresso
    var d = carregar();
    if (d) {
      if (d.aluno) document.getElementById('id-aluno').value = d.aluno;
      if (d.matricula) document.getElementById('id-matricula').value = d.matricula;
      if (d.turma) { var s = document.getElementById('id-turma'); if (s) s.value = d.turma; }
      if (d.estado) {
        estado = d.estado;
        for (var k in estado) {
          if (estado[k] && estado[k].ok) {
            var bl = document.getElementById('bloco-' + k);
            if (bl) bl.classList.add('ok');
          }
        }
      }
    }
    ['id-aluno', 'id-matricula', 'id-turma'].forEach(function (id) {
      var e = document.getElementById(id); if (e) e.addEventListener('change', salvar);
    });
    atualizarHud();

    // revelação ao rolar
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visivel'); obs.unobserve(en.target); } });
    }, { threshold: .08 });
    document.querySelectorAll('.revelar').forEach(function (x) { obs.observe(x); });
  }
  function xpMaxDe(a) { var s = 0; a.blocos.forEach(function (b) { if (b.xp) s += b.xp; }); return s; }

  window.iniciarMissao = iniciarMissao;
})();
