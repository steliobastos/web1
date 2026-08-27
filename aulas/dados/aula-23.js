window.AULA = {
  id:'M23', unidade:'III', etapa:'N1', data:'2026-09-11', dataTexto:'sexta, 11/09',
  titulo:'CSS I: ligando o CSS e dominando os seletores',
  resumo:'Sua página tem conteúdo mas está feia. Hoje você aprende a apontar exatamente para o elemento que quer mudar — e só para ele.',
  objetivos:[
    'Ligar um arquivo CSS ao HTML com <code class="inline">&lt;link&gt;</code>',
    'Escrever uma regra CSS: seletor, propriedade e valor',
    'Selecionar por tag, por <code class="inline">class</code> e por <code class="inline">id</code>',
    'Combinar seletores (descendente, agrupamento, pseudo-classes)'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Anatomia de uma regra',
     texto:'Toda regra CSS tem a mesma forma. O <b>seletor</b> diz <i>quem</i>; o <b>bloco</b> diz <i>como</i>.',
     codigo:'seletor {\n  propriedade: valor;\n  propriedade: valor;\n}\n\n/* exemplo */\nh1 {\n  color: #3b6ef6;\n  text-align: center;\n}',
     cards:[
       {t:'Por tag', d:'p { } — atinge TODOS os parágrafos da página.'},
       {t:'Por classe (.)', d:'.destaque { } — atinge quem tem class="destaque". Pode repetir quantas vezes quiser.'},
       {t:'Por id (#)', d:'#topo { } — atinge quem tem id="topo". O id é único: só um por página.'},
       {t:'Descendente', d:'nav a { } — só os links que estão dentro de um nav.'},
       {t:'Agrupado', d:'h1, h2, h3 { } — a mesma regra vale para os três.'},
       {t:'Pseudo-classe', d:'a:hover { } — só quando o mouse está em cima.'}
     ],
     dicas:[{icone:'⚖️', txt:'<b>Quem ganha na briga?</b> id (mais forte) &gt; classe &gt; tag. Se dois seletores têm a mesma força, vence o que estiver <b>por último</b> no arquivo.'}]},

    {tipo:'ordenar', xp:10, titulo:'Aquecimento · Força do seletor',
     enunciado:'<p>Ordene do <b>mais fraco</b> (em cima) para o <b>mais forte</b> (embaixo).</p>',
     itens:['p { color: red }','.aviso { color: red }','#alerta { color: red }','style="color:red" no próprio elemento','color: red !important']},

    {tipo:'quiz', xp:10, titulo:'Ligando os arquivos',
     pergunta:'Qual linha liga corretamente o arquivo <code class="inline">estilo.css</code> à página?',
     opcoes:[
       '<code class="inline">&lt;style src="estilo.css"&gt;</code>',
       '<code class="inline">&lt;link rel="stylesheet" href="estilo.css"&gt;</code>',
       '<code class="inline">&lt;css href="estilo.css"&gt;</code>',
       '<code class="inline">&lt;script src="estilo.css"&gt;</code>'
     ],
     correta:1, explica:'A tag <code class="inline">&lt;link&gt;</code> vai dentro do <code class="inline">&lt;head&gt;</code> e não tem tag de fechamento.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · O seletor certo',
     enunciado:'<p>Ligue cada seletor ao que ele realmente seleciona.</p>',
     pares:[
       {a:'<code class="inline">li</code>', b:'Todos os itens de lista da página'},
       {a:'<code class="inline">.menu</code>', b:'Todo elemento com <code class="inline">class="menu"</code>'},
       {a:'<code class="inline">#rodape</code>', b:'O único elemento com <code class="inline">id="rodape"</code>'},
       {a:'<code class="inline">ul li</code>', b:'Itens de lista que estão dentro de uma lista não ordenada'},
       {a:'<code class="inline">a:hover</code>', b:'Links, mas só enquanto o mouse está em cima'},
       {a:'<code class="inline">p.aviso</code>', b:'Parágrafos que tenham a classe aviso'},
       {a:'<code class="inline">*</code>', b:'Absolutamente todos os elementos'}
     ]},

    {tipo:'codigo', xp:22, titulo:'Desafio 2 · Acerte o alvo', linguagem:'css', abas:['css'],
     enunciado:'<p>O HTML à direita está pronto e você <b>não pode mudá-lo</b>. Escreva o CSS que cumpre a lista abaixo. Se acertar o seletor, a mudança aparece na hora.</p>',
     requisitos:[
       'Todos os <code class="inline">h2</code> em <b>azul</b> (<code class="inline">#3b6ef6</code>)',
       'A classe <code class="inline">.destaque</code> com fundo amarelo claro (<code class="inline">#fff4e0</code>)',
       'O elemento <code class="inline">#aviso</code> com texto em negrito',
       'Só os links dentro do <code class="inline">nav</code> sem sublinhado',
       'Links mudam de cor ao passar o mouse (<code class="inline">:hover</code>)'
     ],
     contexto:'<nav><a href="#">Início</a> · <a href="#">Notícias</a> · <a href="#">Contato</a></nav>\n<h2>Notícias da turma</h2>\n<p>Texto normal de exemplo.</p>\n<p class="destaque">Este parágrafo tem a classe destaque.</p>\n<p id="aviso">Prova na próxima sexta!</p>\n<h2>Segundo título</h2>\n<p>Fora do nav: <a href="#">este link não é do menu</a>.</p>',
     base:{css:'/* escreva suas regras aqui */\n\nh2 {\n\n}\n\n'},
     checks:[
       {re:'h2\\s*\\{[^}]*color\\s*:\\s*#3b6ef6', msg:'h2 em azul #3b6ef6'},
       {re:'\\.destaque\\s*\\{[^}]*background(-color)?\\s*:\\s*#fff4e0', msg:'.destaque com fundo #fff4e0'},
       {re:'#aviso\\s*\\{[^}]*font-weight\\s*:\\s*(bold|700)', msg:'#aviso em negrito'},
       {re:'nav\\s+a\\s*\\{[^}]*text-decoration\\s*:\\s*none', msg:'Links do nav sem sublinhado (seletor descendente)'},
       {re:'a\\s*:\\s*hover\\s*\\{[^}]*color', msg:'Efeito :hover mudando a cor'}
     ],
     parabens:'Perfeito — repare que <code class="inline">nav a</code> não mexeu no link do último parágrafo.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 3 · Traduza para CSS',
     enunciado:'<p>Escreva o <b>seletor</b> que faz o que o comentário pede.</p>',
     texto:'/* todos os paragrafos */\n{{1}} { line-height: 1.6; }\n\n/* quem tem class="card" */\n{{2}} { border: 1px solid #ddd; }\n\n/* o elemento com id="topo" */\n{{3}} { background: #eef3fb; }\n\n/* h1, h2 e h3 de uma vez so */\n{{4}} { font-family: Georgia; }\n\n/* imagens que estao dentro de um article */\n{{5}} { max-width: 100%; }\n\n/* botao enquanto o mouse esta em cima */\n{{6}} { cursor: pointer; }',
     respostas:['p','.card','#topo','h1, h2, h3','article img','button:hover']},

    {tipo:'quiz', xp:10, titulo:'Cascata na prática',
     pergunta:'Com este CSS, de que cor fica o parágrafo <code class="inline">&lt;p class="nota" id="x"&gt;</code>?',
     codigo:'p       { color: green; }\n.nota   { color: blue;  }\n#x      { color: red;   }\np.nota  { color: purple;}',
     opcoes:['Verde','Azul','Vermelho','Roxo'],
     correta:2,
     explica:'O <code class="inline">id</code> tem peso maior que qualquer combinação de classe e tag. Por isso a regra de ouro: use id com parcimônia.'},

    {tipo:'codigo', xp:20, titulo:'Desafio 4 · Repagine a sua página', linguagem:'css', abas:['css'],
     enunciado:'<p>Esta é a estrutura de um site de turma. Deixe-a apresentável usando <b>pelo menos 6 seletores diferentes</b> e <b>3 tipos de seletor</b> (tag, classe e id).</p>',
     requisitos:[
       'Pelo menos uma regra por <b>tag</b>','Pelo menos uma regra por <b>classe</b>','Pelo menos uma regra por <b>id</b>',
       'Um seletor <b>descendente</b> (dois nomes separados por espaço)','Um seletor <b>agrupado</b> (com vírgula)','Uma <b>pseudo-classe</b> (:hover, :first-child…)'
     ],
     contexto:'<header id="topo"><h1>Turma 1º Ano A</h1><nav><a href="#">Início</a> <a href="#">Galeria</a> <a href="#">Sobre</a></nav></header>\n<main>\n<article class="post"><h2>Feira de Ciências</h2><p>Nosso projeto ficou em primeiro lugar.</p></article>\n<article class="post"><h2>Passeio ao museu</h2><p>Foi no dia 12 e todo mundo foi.</p></article>\n<ul><li>Aviso 1</li><li>Aviso 2</li><li>Aviso 3</li></ul>\n</main>\n<footer id="rodape"><p>IFCE Campus Horizonte</p></footer>',
     base:{css:'body { font-family: Segoe UI, sans-serif; color: #1f2937; }\n\n/* continue */\n'},
     checks:[
       {re:'(^|\\})\\s*[a-z]+[0-9]?\\s*\\{', flags:'im', msg:'Tem regra por tag'},
       {re:'\\.[a-zA-Z][\\w-]*\\s*\\{', msg:'Tem regra por classe'},
       {re:'#[a-zA-Z][\\w-]*\\s*\\{', msg:'Tem regra por id'},
       {re:'[a-z#.][\\w-]*\\s+[a-z#.][\\w-]*\\s*\\{', msg:'Tem seletor descendente'},
       {re:',\\s*[.#a-z][\\w-]*[^{]*\\{', msg:'Tem seletor agrupado'},
       {re:':(hover|first-child|last-child|nth-child)', msg:'Tem pseudo-classe'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:40, linhas:3,
     enunciado:'<p>Explique com suas palavras para um colega que faltou: <b>qual a diferença entre class e id?</b></p>'}
  ]
};
