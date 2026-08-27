window.AULA = {
  id:'M27', unidade:'III', etapa:'N2', data:'2026-10-09', dataTexto:'sexta, 09/10',
  titulo:'CSS IV: links, listas e tabelas com estilo',
  resumo:'Três elementos que todo site tem e quase ninguém arruma. Hoje você transforma link em botão, lista em menu e tabela em algo legível.',
  objetivos:[
    'Estilizar os quatro estados de um link',
    'Trocar, esconder ou customizar o marcador de uma lista',
    'Transformar uma lista vertical em menu horizontal',
    'Deixar tabelas legíveis com <code class="inline">border-collapse</code> e listras'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Os quatro estados de um link',
     texto:'Um link tem estados e a ordem das regras importa. O truque de decorar é <b>LoVe HAte</b>: <b>L</b>ink, <b>V</b>isited, <b>H</b>over, <b>A</b>ctive.',
     codigo:'a:link    { color: #3b6ef6; }  /* nunca visitado  */\na:visited { color: #7c5cf0; }  /* ja visitado     */\na:hover   { color: #12a150; }  /* mouse em cima   */\na:active  { color: #e0457b; }  /* no instante do clique */\na:focus   { outline: 2px solid #3b6ef6; } /* navegacao por teclado */',
     cards:[
       {t:'list-style-type', d:'disc, circle, square, decimal, lower-alpha, upper-roman… ou none para sumir com o marcador.'},
       {t:'Menu horizontal', d:'li { display: inline-block } coloca os itens lado a lado. É como quase todo menu de site é feito.'},
       {t:'border-collapse', d:'Sem ele, cada célula tem sua própria borda e fica com aparência de planilha de 1998.'},
       {t:'nth-child(even)', d:'Pinta só as linhas pares — o famoso "zebrado" que facilita a leitura.'}
     ],
     dicas:[{icone:'♿', tipo:'atencao', txt:'<b>Nunca remova o <code class="inline">:focus</code></b> sem colocar outro destaque no lugar. Quem navega só com o teclado fica perdido sem ele.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Por que <code class="inline">a:hover</code> tem que vir <b>depois</b> de <code class="inline">a:visited</code>?',
     opcoes:['Porque é ordem alfabética','Porque as duas têm a mesma força, então a última escrita vence','Porque hover é mais importante que visited por natureza','Não faz diferença nenhuma'],
     correta:1,
     explica:'Se <code class="inline">:visited</code> vier depois, ele sobrescreve o <code class="inline">:hover</code> em links já visitados e o efeito some.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Marcadores',
     enunciado:'<p>Complete os valores de <code class="inline">list-style-type</code> ou a propriedade pedida.</p>',
     texto:'/* sumir com a bolinha */\nul { list-style-type: {{1}}; }\n\n/* numeros romanos maiusculos */\nol { list-style-type: {{2}}; }\n\n/* letras minusculas: a) b) c) */\nol.letras { list-style-type: {{3}}; }\n\n/* quadradinho no lugar da bolinha */\nul.quad { list-style-type: {{4}}; }\n\n/* colocar os itens lado a lado */\nli { display: {{5}}; }',
     respostas:['none','upper-roman','lower-alpha','square','inline-block']},

    {tipo:'codigo', xp:24, titulo:'Desafio 2 · Menu de navegação', linguagem:'css', abas:['css'],
     enunciado:'<p>A lista à direita é o menu de um site. Transforme-a num menu horizontal de verdade.</p>',
     requisitos:[
       'Sumir com os marcadores da lista',
       'Zerar <code class="inline">padding</code> e <code class="inline">margin</code> da <code class="inline">ul</code>',
       'Itens lado a lado',
       'Links sem sublinhado, com padding, virando "botões"',
       'Efeito <code class="inline">:hover</code> mudando o fundo',
       'Um estado <code class="inline">.ativo</code> visualmente diferente'
     ],
     contexto:'<nav>\n  <ul class="menu">\n    <li><a class="ativo" href="#">Início</a></li>\n    <li><a href="#">Turmas</a></li>\n    <li><a href="#">Projetos</a></li>\n    <li><a href="#">Contato</a></li>\n  </ul>\n</nav>\n<p>Conteúdo da página abaixo do menu.</p>',
     base:{css:'body { font-family: Segoe UI, sans-serif; background:#f6f8fc; }\n\n.menu {\n\n}\n\n.menu li {\n\n}\n\n.menu a {\n\n}\n'},
     checks:[
       {re:'list-style(-type)?\\s*:\\s*none', msg:'Marcadores removidos'},
       {re:'\\.menu\\s*\\{[^}]*padding\\s*:\\s*0', msg:'Padding da ul zerado'},
       {re:'\\.menu\\s*\\{[^}]*margin\\s*:\\s*0', msg:'Margin da ul zerada'},
       {re:'display\\s*:\\s*(inline-block|inline|flex)', msg:'Itens lado a lado'},
       {re:'\\.menu a[^{]*\\{[^}]*text-decoration\\s*:\\s*none', msg:'Links sem sublinhado'},
       {re:'\\.menu a[^{]*\\{[^}]*padding', msg:'Links com padding (área clicável maior)'},
       {re:'a\\s*:\\s*hover[^{]*\\{[^}]*background', msg:'Hover mudando o fundo'},
       {re:'\\.ativo\\s*[,{]', msg:'Estilo específico para o item ativo'}
     ],
     parabens:'Esse é o esqueleto de praticamente todo menu que você já viu na internet.'},

    {tipo:'parear', xp:12, titulo:'Desafio 3 · Tabelas',
     enunciado:'<p>Ligue a propriedade ao problema que ela resolve.</p>',
     pares:[
       {a:'<code class="inline">border-collapse: collapse</code>', b:'Junta as bordas duplas em uma só'},
       {a:'<code class="inline">tr:nth-child(even)</code>', b:'Pinta só as linhas pares (zebrado)'},
       {a:'<code class="inline">th { text-align: left }</code>', b:'Tira a centralização automática do cabeçalho'},
       {a:'<code class="inline">td { padding: 10px }</code>', b:'Dá respiro dentro das células'},
       {a:'<code class="inline">tr:hover</code>', b:'Destaca a linha sob o mouse'},
       {a:'<code class="inline">width: 100%</code>', b:'Faz a tabela ocupar toda a largura disponível'}
     ]},

    {tipo:'codigo', xp:24, titulo:'Desafio 4 · Boletim legível', linguagem:'css', abas:['css'],
     enunciado:'<p>A tabela à direita está no estilo "planilha feia". Deixe-a profissional.</p>',
     requisitos:[
       '<code class="inline">border-collapse: collapse</code> e largura total',
       'Cabeçalho com fundo colorido e texto claro/escuro contrastante',
       'Padding em todas as células',
       'Linhas pares com fundo diferente',
       'Destaque na linha ao passar o mouse',
       'Bordas suaves (não pretas grossas)'
     ],
     contexto:'<table>\n<thead><tr><th>Aluno</th><th>Missões</th><th>XP</th><th>Média</th></tr></thead>\n<tbody>\n<tr><td>Ana Beatriz</td><td>12</td><td>1140</td><td>9,2</td></tr>\n<tr><td>Bruno Lima</td><td>11</td><td>980</td><td>8,4</td></tr>\n<tr><td>Carla Souza</td><td>12</td><td>1200</td><td>9,8</td></tr>\n<tr><td>Diego Alves</td><td>9</td><td>760</td><td>6,5</td></tr>\n<tr><td>Elis Moura</td><td>12</td><td>1090</td><td>8,9</td></tr>\n</tbody>\n</table>',
     base:{css:'body { font-family: Segoe UI, sans-serif; padding: 10px; }\n\ntable {\n\n}\n'},
     checks:[
       {re:'border-collapse\\s*:\\s*collapse', msg:'Bordas unificadas'},
       {re:'table\\s*\\{[^}]*width\\s*:\\s*100%', msg:'Tabela ocupando a largura'},
       {re:'th\\s*[,{][^}]*background|thead[^{]*\\{[^}]*background', msg:'Cabeçalho com fundo'},
       {re:'(th|td)\\s*[,{][^}]*padding', msg:'Células com padding'},
       {re:'nth-child\\s*\\(\\s*(even|odd|2n)', msg:'Zebrado com nth-child'},
       {re:'tr\\s*:\\s*hover', msg:'Destaque no hover da linha'},
       {re:'border\\s*:\\s*1px', msg:'Bordas finas'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>O que é mais fácil de ler: a tabela original ou a sua? Cite <b>duas mudanças</b> que mais ajudaram e por quê.</p>'}
  ]
};
