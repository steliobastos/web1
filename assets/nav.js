/* =========================================================================
   Barra de navegação fixa.
   Lida no <body> via data-atributos:
     data-base    "" para páginas na raiz, "../" para subpastas
     data-pagina  id do item que deve ficar destacado
     data-modo    "professor" acrescenta os links de uso interno
   ========================================================================= */
(function () {
  var b = document.body;
  var base = b.getAttribute('data-base') || '';
  var atual = b.getAttribute('data-pagina') || '';
  var prof = b.getAttribute('data-modo') === 'professor';

  var itens = [
    { id: 'missoes',    txt: 'Missões',    href: base + 'index.html' },
    { id: 'cronograma', txt: 'Cronograma', href: base + 'cronograma.html' }
  ];
  if (prof) {
    itens.push({ id: 'guia',      txt: 'Guia de regência', href: base + 'professor/guia.html' });
    itens.push({ id: 'gabarito',  txt: 'Gabarito',         href: base + 'professor/gabarito.html' });
    itens.push({ id: 'automacao', txt: 'Automação',        href: base + 'automacao/instalacao.html' });
    itens.push({ id: 'limpar',    txt: 'Limpar',           href: base + 'limpar.html' });
  }

  var nav = document.createElement('nav');
  nav.className = 'topo-fixo';
  nav.innerHTML =
    '<div class="topo-int">' +
      '<a class="marca" href="' + base + 'index.html">' +
        '<span class="marca-ic">&lt;/&gt;</span><span>WEB I</span>' +
      '</a>' +
      '<div class="topo-links">' +
        itens.map(function (i) {
          return '<a href="' + i.href + '"' + (i.id === atual ? ' class="ativo"' : '') + '>' + i.txt + '</a>';
        }).join('') +
      '</div>' +
      (prof ? '<div class="topo-dir"><span class="selo rosa">área do professor</span></div>' : '') +
    '</div>';

  b.insertBefore(nav, b.firstChild);
})();
