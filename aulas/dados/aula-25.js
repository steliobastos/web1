window.AULA = {
  id:'M25', unidade:'III', etapa:'N1', data:'2026-09-25', dataTexto:'sexta, 25/09',
  titulo:'CSS III: o box model — borda, margem e padding',
  resumo:'Todo elemento é uma caixa. Entender essa caixa é o que separa quem "briga com o CSS" de quem manda nele.',
  objetivos:[
    'Identificar as quatro camadas de uma caixa CSS',
    'Diferenciar <code class="inline">margin</code> de <code class="inline">padding</code>',
    'Usar <code class="inline">border</code>, <code class="inline">border-radius</code> e <code class="inline">box-shadow</code>',
    'Entender por que <code class="inline">box-sizing: border-box</code> salva a sua vida'
  ],
  blocos:[
    {tipo:'conceito', titulo:'A caixa por dentro',
     texto:'De dentro para fora: <b>conteúdo</b> → <b>padding</b> (recheio) → <b>border</b> (a casca) → <b>margin</b> (o afastamento dos vizinhos). Padding empurra o conteúdo para dentro; margin empurra os vizinhos para longe.',
     codigo:'.caixa {\n  width: 200px;\n  padding: 16px;        /* recheio: por dentro da borda */\n  border: 2px solid #3b6ef6;\n  margin: 24px;         /* respiro: por fora da borda */\n}',
     cards:[
       {t:'padding', d:'Espaço ENTRE o texto e a borda. Tem cor de fundo — faz parte da caixa.'},
       {t:'margin', d:'Espaço FORA da borda. É transparente: mostra o fundo do elemento de trás.'},
       {t:'Atalho de 4 valores', d:'padding: 10px 20px 30px 40px → cima, direita, baixo, esquerda (sentido horário).'},
       {t:'Atalho de 2 valores', d:'padding: 10px 20px → 10 em cima e embaixo, 20 nas laterais. É o mais usado.'},
       {t:'border-radius', d:'Arredonda os cantos. 50% num quadrado vira um círculo perfeito.'},
       {t:'box-sizing', d:'border-box faz a width incluir padding e borda. Sem isso a conta estoura.'}
     ],
     dicas:[{icone:'🔍', txt:'<b>Abra o DevTools (F12) e clique num elemento.</b> O painel mostra o box model desenhado, colorido, com os números reais. É a melhor ferramenta de depuração de CSS que existe.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Você quer afastar o texto da borda do cartão. Qual usar?',
     opcoes:['<code class="inline">margin</code>','<code class="inline">padding</code>','<code class="inline">border-spacing</code>','<code class="inline">line-height</code>'],
     correta:1,
     explica:'Texto para dentro = padding. Cartão para longe do vizinho = margin.'},

    {tipo:'quiz', xp:12, titulo:'A conta que estoura',
     pergunta:'Com este CSS, qual a largura <b>real</b> ocupada pela caixa na tela?',
     codigo:'.caixa {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}\n/* box-sizing padrao: content-box */',
     opcoes:['200px','230px','250px','290px'],
     correta:2,
     explica:'200 (conteúdo) + 20+20 (padding) + 5+5 (borda) = <b>250px</b>. Com <code class="inline">box-sizing: border-box</code> daria exatamente 200px — por isso quase todo projeto começa com <code class="inline">* { box-sizing: border-box; }</code>.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Traduzindo atalhos',
     enunciado:'<p>Escreva a forma <b>curta</b> equivalente.</p>',
     texto:'/* 10px em todos os lados */\npadding: {{1}};\n\n/* 8px em cima e embaixo, 16px nos lados */\npadding: {{2}};\n\n/* borda de 1px, solida, cinza #ddd */\nborder: {{3}};\n\n/* centralizar um bloco na horizontal (margem lateral automatica) */\nmargin: {{4}};\n\n/* transformar um quadrado em circulo */\nborder-radius: {{5}};',
     respostas:['10px','8px 16px','1px solid #ddd','0 auto','50%']},

    {tipo:'codigo', xp:24, titulo:'Desafio 2 · Reconstrua o cartão', linguagem:'css', abas:['css'],
     enunciado:'<p>À direita há três cartões idênticos e sem estilo. Faça-os virar cartões de verdade.</p>',
     requisitos:[
       '<code class="inline">box-sizing: border-box</code> aplicado a tudo',
       'Cada <code class="inline">.card</code> com <b>padding</b> de pelo menos 16px',
       'Uma <b>borda</b> visível e cantos arredondados',
       'Um <b>box-shadow</b> suave',
       'Espaço entre os cartões com <b>margin</b>',
       'A imagem do avatar redonda (<code class="inline">border-radius: 50%</code>)'
     ],
     contexto:'<div class="card"><div class="avatar">A</div><h3>Ana</h3><p>Front-end, vôlei e café.</p></div>\n<div class="card"><div class="avatar">B</div><h3>Bruno</h3><p>Games e redes.</p></div>\n<div class="card"><div class="avatar">C</div><h3>Carla</h3><p>Design e fotografia.</p></div>',
     base:{css:'* { box-sizing: border-box; }\n\nbody { background: #f6f8fc; font-family: Segoe UI, sans-serif; }\n\n.avatar {\n  width: 56px; height: 56px;\n  background: #cddcff; color: #1e40af;\n  display: grid; place-content: center;\n  font-weight: 800; font-size: 1.3rem;\n}\n\n.card {\n  width: 260px;\n  background: #fff;\n}\n\n/* continue */\n'},
     checks:[
       {re:'box-sizing\\s*:\\s*border-box', msg:'box-sizing definido'},
       {re:'\\.card[^{]*\\{[^}]*padding\\s*:\\s*(1[6-9]|[2-9]\\d)', msg:'Padding de 16px ou mais no cartão'},
       {re:'\\.card[^{]*\\{[^}]*border\\s*:', msg:'Cartão com borda'},
       {re:'\\.card[^{]*\\{[^}]*border-radius', msg:'Cantos arredondados'},
       {re:'box-shadow\\s*:', msg:'Sombra aplicada'},
       {re:'\\.card[^{]*\\{[^}]*margin', msg:'Margem separando os cartões'},
       {re:'\\.avatar[^{]*\\{[^}]*border-radius\\s*:\\s*50%|\\.avatar[^{]*\\{[^}]*border-radius\\s*:\\s*999', msg:'Avatar redondo'}
     ],
     parabens:'Esse é literalmente o cartão que aparece em 90% dos sites modernos.'},

    {tipo:'ordenar', xp:10, titulo:'Desafio 3 · De dentro para fora',
     enunciado:'<p>Ordene as camadas do box model, começando pela mais interna.</p>',
     itens:['content (o conteúdo)','padding','border','margin']},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · O alerta perfeito', linguagem:'css', abas:['css'],
     enunciado:'<p>Reproduza três caixas de aviso no estilo dos sites modernos: <b>uma verde de sucesso, uma amarela de atenção e uma rosa de erro</b>.</p>',
     requisitos:[
       'As três com <b>padding</b> e <b>border-radius</b>',
       'Cada uma com uma <b>faixa colorida à esquerda</b> usando <code class="inline">border-left</code> mais grossa',
       'Cores de fundo <b>claras</b> e texto escuro (legível)',
       'Margem entre elas'
     ],
     pista:'<code class="inline">border-left: 5px solid #12a150;</code> junto com <code class="inline">background: #e6f8ee;</code>',
     contexto:'<div class="aviso ok">Entrega registrada com sucesso.</div>\n<div class="aviso atencao">Faltam 2 exercícios para fechar a missão.</div>\n<div class="aviso erro">Não foi possível enviar. Verifique a internet.</div>',
     base:{css:'* { box-sizing: border-box; }\nbody { font-family: Segoe UI, sans-serif; background:#fff; }\n\n.aviso {\n  /* o que vale para as tres */\n}\n\n.ok      { }\n.atencao { }\n.erro    { }\n'},
     checks:[
       {re:'\\.aviso\\s*\\{[^}]*padding', msg:'Padding comum às três'},
       {re:'\\.aviso\\s*\\{[^}]*border-radius', msg:'Cantos arredondados'},
       {re:'\\.aviso\\s*\\{[^}]*margin', msg:'Margem entre elas'},
       {re:'\\.ok\\s*\\{[^}]*border-left\\s*:\\s*[3-9]', msg:'.ok com faixa esquerda grossa'},
       {re:'\\.atencao\\s*\\{[^}]*(background|border-left)', msg:'.atencao estilizada'},
       {re:'\\.erro\\s*\\{[^}]*(background|border-left)', msg:'.erro estilizada'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Explique com uma <b>analogia sua</b> (comida, roupa, casa, o que quiser) a diferença entre padding e margin.</p>'}
  ]
};
