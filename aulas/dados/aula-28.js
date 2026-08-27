window.AULA = {
  id:'M28', unidade:'III', etapa:'N2', data:'2026-10-16', dataTexto:'sexta, 16/10',
  titulo:'CSS V: posicionamento e alinhamento',
  resumo:'A parte que resolve o "por que essa div não fica no lugar?". Fluxo normal, display, flexbox e position — nesta ordem.',
  objetivos:[
    'Diferenciar elementos de bloco e em linha',
    'Alinhar e distribuir com <code class="inline">flexbox</code>',
    'Usar <code class="inline">position</code>: static, relative, absolute, fixed e sticky',
    'Empilhar elementos com <code class="inline">z-index</code>'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Primeiro o fluxo, depois o resto',
     texto:'Por padrão o navegador empilha os elementos de cima para baixo (blocos) ou lado a lado (linha). Antes de sair usando <code class="inline">position: absolute</code>, tente resolver com <b>display</b> e <b>flexbox</b> — 90% dos layouts saem assim.',
     cards:[
       {t:'block', d:'div, p, h1, section… ocupam a linha inteira. Aceitam width e height.'},
       {t:'inline', d:'span, a, strong… ficam no meio do texto. Ignoram width/height e margens verticais.'},
       {t:'inline-block', d:'O melhor dos dois: fica lado a lado MAS aceita tamanho e padding.'},
       {t:'flex', d:'display:flex no PAI. Os filhos viram itens alinháveis. justify-content = eixo principal; align-items = eixo cruzado.'},
       {t:'relative', d:'Sai do lugar visualmente mas guarda o espaço original. Serve de âncora para filhos absolutos.'},
       {t:'absolute / fixed / sticky', d:'absolute: em relação ao ancestral posicionado. fixed: colado na janela. sticky: normal até grudar ao rolar.'}
     ],
     codigo:'.linha {\n  display: flex;\n  justify-content: space-between; /* eixo principal (horizontal) */\n  align-items: center;            /* eixo cruzado (vertical)    */\n  gap: 16px;\n}',
     dicas:[{icone:'🧭', txt:'<b>Centralizar qualquer coisa:</b> no pai, <code class="inline">display:flex; justify-content:center; align-items:center;</code>. Funciona na horizontal e na vertical ao mesmo tempo.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Você aplicou <code class="inline">width: 200px</code> num <code class="inline">&lt;span&gt;</code> e nada mudou. Por quê?',
     opcoes:['Faltou <code class="inline">!important</code>','Porque span é inline e ignora width','Porque span precisa de id','Porque width só funciona com position'],
     correta:1,
     explica:'Basta <code class="inline">display: inline-block</code> (ou block) para o span passar a aceitar tamanho.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · Cada position no seu lugar',
     enunciado:'<p>Ligue o valor de <code class="inline">position</code> ao comportamento.</p>',
     pares:[
       {a:'<code class="inline">static</code>', b:'O padrão: segue o fluxo normal e ignora top/left'},
       {a:'<code class="inline">relative</code>', b:'Desloca a partir do próprio lugar, mas o espaço fica reservado'},
       {a:'<code class="inline">absolute</code>', b:'Sai do fluxo e se posiciona em relação ao ancestral posicionado'},
       {a:'<code class="inline">fixed</code>', b:'Fica colado na janela mesmo quando a página rola'},
       {a:'<code class="inline">sticky</code>', b:'Rola normalmente até bater no limite e então gruda'},
       {a:'<code class="inline">z-index</code>', b:'Decide quem fica por cima de quem'}
     ]},

    {tipo:'codigo', xp:24, titulo:'Desafio 2 · Barra de topo com flex', linguagem:'css', abas:['css'],
     enunciado:'<p>Monte o cabeçalho clássico: <b>logo à esquerda, menu no centro, botão à direita</b> — tudo alinhado verticalmente. Sem <code class="inline">position</code>, só flexbox.</p>',
     requisitos:[
       '<code class="inline">display: flex</code> no <code class="inline">.topo</code>',
       '<code class="inline">justify-content: space-between</code>',
       '<code class="inline">align-items: center</code>',
       'O menu também em flex, com <code class="inline">gap</code>',
       'O <code class="inline">.topo</code> grudado no alto ao rolar (<code class="inline">position: sticky</code>)'
     ],
     contexto:'<header class="topo">\n  <div class="logo">WEB I</div>\n  <nav class="menu"><a href="#">Missões</a><a href="#">Notas</a><a href="#">Ajuda</a></nav>\n  <button class="acao">Entrar</button>\n</header>\n<p style="height:900px;padding:16px">Role a página para testar o sticky. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
     base:{css:'body { margin:0; font-family: Segoe UI, sans-serif; }\n\n.topo {\n  background: #fff;\n  border-bottom: 1px solid #e3e9f2;\n  padding: 14px 22px;\n}\n\n.menu a { text-decoration: none; color: #3b6ef6; }\n\n/* continue */\n'},
     checks:[
       {re:'\\.topo[^{]*\\{[^}]*display\\s*:\\s*flex', msg:'.topo em flex'},
       {re:'justify-content\\s*:\\s*space-between', msg:'space-between separando os três blocos'},
       {re:'align-items\\s*:\\s*center', msg:'Itens alinhados verticalmente'},
       {re:'\\.menu[^{]*\\{[^}]*display\\s*:\\s*flex', msg:'Menu também em flex'},
       {re:'gap\\s*:', msg:'Usou gap para espaçar'},
       {re:'position\\s*:\\s*sticky', msg:'Sticky aplicado'},
       {re:'top\\s*:\\s*0', msg:'top: 0 (sem isso o sticky não gruda)'}
     ]},

    {tipo:'lacuna', xp:14, titulo:'Desafio 3 · Flexbox de cabeça',
     enunciado:'<p>Complete as propriedades para cada objetivo.</p>',
     texto:'/* ligar o flex no elemento PAI */\n.pai { display: {{1}}; }\n\n/* espalhar os itens deixando espaco IGUAL entre eles */\n.pai { justify-content: {{2}}; }\n\n/* centralizar no eixo vertical */\n.pai { align-items: {{3}}; }\n\n/* quebrar linha quando nao couber */\n.pai { flex-{{4}}: wrap; }\n\n/* empilhar em coluna em vez de linha */\n.pai { flex-{{5}}: column; }\n\n/* fazer UM item crescer e ocupar o espaco que sobra */\n.filho { flex-{{6}}: 1; }',
     respostas:['flex','space-between','center','wrap','direction','grow']},

    {tipo:'codigo', xp:24, titulo:'Desafio 4 · Galeria + selo flutuante', linguagem:'css', abas:['css'],
     enunciado:'<p>Monte uma galeria de cartões que se reorganiza sozinha, com um <b>selo "NOVO"</b> preso no canto de cada cartão.</p>',
     requisitos:[
       'A <code class="inline">.galeria</code> em flex com quebra de linha e <code class="inline">gap</code>',
       'Cada <code class="inline">.item</code> com <code class="inline">position: relative</code>',
       'O <code class="inline">.selo</code> com <code class="inline">position: absolute</code> no canto superior direito',
       'Um <code class="inline">z-index</code> garantindo o selo por cima',
       'Cartões centralizados na página'
     ],
     pista:'O filho absoluto se posiciona em relação ao <b>ancestral posicionado mais próximo</b>. Sem <code class="inline">position:relative</code> no pai, ele foge para o canto da página inteira.',
     contexto:'<div class="galeria">\n  <div class="item"><span class="selo">NOVO</span><h3>Missão 21</h3><p>Canvas</p></div>\n  <div class="item"><span class="selo">NOVO</span><h3>Missão 22</h3><p>APIs</p></div>\n  <div class="item"><span class="selo">NOVO</span><h3>Missão 23</h3><p>Seletores</p></div>\n  <div class="item"><span class="selo">NOVO</span><h3>Missão 24</h3><p>Cores</p></div>\n</div>',
     base:{css:'* { box-sizing: border-box; }\nbody { font-family: Segoe UI, sans-serif; background:#f6f8fc; padding:20px; }\n\n.item {\n  width: 170px;\n  background: #fff;\n  border: 1px solid #e3e9f2;\n  border-radius: 14px;\n  padding: 18px;\n}\n\n.selo {\n  background: #e0457b;\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 999px;\n}\n\n/* continue */\n'},
     checks:[
       {re:'\\.galeria[^{]*\\{[^}]*display\\s*:\\s*flex', msg:'Galeria em flex'},
       {re:'flex-wrap\\s*:\\s*wrap', msg:'Quebra de linha ativada'},
       {re:'\\.galeria[^{]*\\{[^}]*gap', msg:'gap entre os cartões'},
       {re:'\\.item[^{]*\\{[^}]*position\\s*:\\s*relative', msg:'.item como âncora (relative)'},
       {re:'\\.selo[^{]*\\{[^}]*position\\s*:\\s*absolute', msg:'.selo absoluto'},
       {re:'\\.selo[^{]*\\{[^}]*(top|right)\\s*:', msg:'Selo posicionado no canto'},
       {re:'z-index\\s*:', msg:'z-index definido'},
       {re:'justify-content\\s*:\\s*center', msg:'Galeria centralizada'}
     ],
     parabens:'Combinação relative + absolute é o padrão para badges, ícones de fechar e etiquetas de promoção.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Qual foi mais difícil: flexbox ou position? Explique o que ainda te confunde — vou usar isso para preparar a revisão.</p>'}
  ]
};
