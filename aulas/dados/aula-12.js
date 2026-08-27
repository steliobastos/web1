window.AULA = {
  id:'M12', unidade:'II', etapa:'N2', data:'2026-05-22', dataTexto:'sexta, 22/05',
  titulo:'Listas ordenadas, não ordenadas e de definição',
  resumo:'Lista é a tag mais subestimada do HTML. Menu de site, breadcrumb, passo a passo, FAQ — tudo é lista por baixo.',
  objetivos:[
    'Usar <code class="inline">ul</code>, <code class="inline">ol</code> e <code class="inline">dl</code> no contexto certo',
    'Aninhar listas em vários níveis',
    'Controlar numeração com <code class="inline">start</code>, <code class="inline">type</code> e <code class="inline">reversed</code>',
    'Reconhecer que menus de navegação são listas'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Três tipos, três sentidos',
     codigo:'<!-- ul: a ordem NAO importa -->\n<ul>\n  <li>Arroz</li>\n  <li>Feijao</li>\n</ul>\n\n<!-- ol: a ordem IMPORTA -->\n<ol>\n  <li>Abra o VS Code</li>\n  <li>Crie o index.html</li>\n</ol>\n\n<!-- dl: termo e definicao -->\n<dl>\n  <dt>HTML</dt>\n  <dd>Linguagem de marcacao que estrutura a pagina.</dd>\n  <dt>CSS</dt>\n  <dd>Linguagem que define a aparencia.</dd>\n</dl>',
     cards:[
       {t:'ul', d:'Unordered List. Ingredientes, características, opções — quando trocar a ordem não muda nada.'},
       {t:'ol', d:'Ordered List. Receita, tutorial, ranking, cronograma — a ordem tem significado.'},
       {t:'dl / dt / dd', d:'Description List. Glossário, FAQ, ficha técnica: termo (dt) seguido de descrição (dd).'},
       {t:'Aninhamento', d:'A lista de dentro fica DENTRO do <li>, nunca solta entre os itens.'},
       {t:'start e reversed', d:'&lt;ol start="5"&gt; começa no 5. &lt;ol reversed&gt; conta de trás para frente.'},
       {t:'Menu é lista', d:'&lt;nav&gt;&lt;ul&gt;&lt;li&gt;&lt;a&gt;. Esse é o padrão de mercado para navegação.'}
     ]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Você vai listar os <b>passos para instalar o VS Code</b>. Qual lista?',
     opcoes:['<code class="inline">&lt;ul&gt;</code>','<code class="inline">&lt;ol&gt;</code>','<code class="inline">&lt;dl&gt;</code>','Tanto faz'],
     correta:1,
     explica:'Passos têm ordem obrigatória — <code class="inline">ol</code>.'},

    {tipo:'parear', xp:12, titulo:'Desafio 1 · Qual lista usar?',
     pares:[
       {a:'Ingredientes de um bolo', b:'<code class="inline">&lt;ul&gt;</code>'},
       {a:'Modo de preparo passo a passo', b:'<code class="inline">&lt;ol&gt;</code>'},
       {a:'Glossário de termos técnicos', b:'<code class="inline">&lt;dl&gt;</code>'},
       {a:'Menu de navegação do site', b:'<code class="inline">&lt;nav&gt; + &lt;ul&gt;</code>'},
       {a:'Top 10 músicas mais tocadas', b:'<code class="inline">&lt;ol&gt;</code>'},
       {a:'Perguntas frequentes com resposta', b:'<code class="inline">&lt;dl&gt;</code>'}
     ]},

    {tipo:'quiz', xp:12, titulo:'Aninhamento correto',
     pergunta:'Qual está certo?',
     opcoes:[
       '<code class="inline">&lt;ul&gt;&lt;li&gt;A&lt;/li&gt;&lt;ul&gt;&lt;li&gt;A1&lt;/li&gt;&lt;/ul&gt;&lt;/ul&gt;</code>',
       '<code class="inline">&lt;ul&gt;&lt;li&gt;A&lt;ul&gt;&lt;li&gt;A1&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;</code>',
       '<code class="inline">&lt;ul&gt;&lt;ul&gt;&lt;li&gt;A1&lt;/li&gt;&lt;/ul&gt;&lt;/ul&gt;</code>',
       '<code class="inline">&lt;li&gt;&lt;ul&gt;A1&lt;/ul&gt;&lt;/li&gt;</code>'
     ],
     correta:1,
     explica:'A sublista vai <b>dentro do <code class="inline">&lt;li&gt;</code> pai</b>, antes de fechá-lo. Fora do li é HTML inválido.'},

    {tipo:'lacuna', xp:12, titulo:'Desafio 2 · Complete',
     texto:'<!-- lista sem ordem -->\n<{{1}}>\n  <{{2}}>Item</{{2}}>\n</{{1}}>\n\n<!-- lista numerada comecando do 10 -->\n<ol {{3}}="10">\n  <li>Decimo item</li>\n</ol>\n\n<!-- contagem regressiva -->\n<ol {{4}}>\n  <li>3</li><li>2</li><li>1</li>\n</ol>\n\n<!-- glossario -->\n<dl>\n  <{{5}}>API</{{5}}>\n  <{{6}}>Conjunto de comandos prontos.</{{6}}>\n</dl>',
     respostas:['ul','li','start','reversed','dt','dd']},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Menu de verdade', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte a navegação de um site do jeito profissional: <code class="inline">nav</code> + <code class="inline">ul</code> + <code class="inline">li</code> + <code class="inline">a</code>, com um submenu aninhado.</p>',
     requisitos:[
       'Um <code class="inline">&lt;nav&gt;</code> envolvendo tudo',
       'Uma <code class="inline">&lt;ul&gt;</code> com pelo menos 4 itens',
       'Cada item com um <code class="inline">&lt;a href&gt;</code>',
       'Um submenu <code class="inline">&lt;ul&gt;</code> aninhado DENTRO de um <code class="inline">&lt;li&gt;</code>',
       'O submenu com pelo menos 3 itens'
     ],
     base:{html:'<nav>\n  <ul>\n    <li><a href="#">Início</a></li>\n\n  </ul>\n</nav>\n'},
     checks:[
       {re:'<nav[^>]*>[\\s\\S]*<ul[^>]*>', msg:'nav envolvendo a lista'},
       {re:'(<li[^>]*>[\\s\\S]*){7}', msg:'Itens suficientes (menu + submenu)'},
       {re:'(<a[^>]*href[\\s\\S]*){6}', msg:'Itens com link'},
       {re:'<li[^>]*>[\\s\\S]*<ul[^>]*>[\\s\\S]*</ul>[\\s\\S]*</li>', msg:'Submenu aninhado dentro do li'}
     ],
     parabens:'Esse é o HTML por trás do menu de praticamente qualquer site que você abre.'},

    {tipo:'codigo', xp:24, titulo:'Desafio 4 · Página de receita completa', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte a página de uma receita usando os <b>três tipos de lista</b>.</p>',
     requisitos:[
       'Título da receita em <code class="inline">h1</code>',
       '<code class="inline">&lt;ul&gt;</code> com pelo menos 5 ingredientes',
       '<code class="inline">&lt;ol&gt;</code> com pelo menos 4 passos numerados',
       '<code class="inline">&lt;dl&gt;</code> com a ficha técnica (tempo, rendimento, dificuldade)',
       'Uma sublista aninhada em algum lugar',
       'Uma imagem com alt descritivo'
     ],
     base:{html:'<h1></h1>\n\n<h2>Ingredientes</h2>\n<ul>\n\n</ul>\n\n<h2>Modo de preparo</h2>\n<ol>\n\n</ol>\n\n<h2>Ficha técnica</h2>\n<dl>\n\n</dl>\n'},
     checks:[
       {re:'<h1[^>]*>[^<]+</h1>', msg:'Título preenchido'},
       {re:'<ul[^>]*>[\\s\\S]*(<li[^>]*>[\\s\\S]*){5}[\\s\\S]*</ul>', msg:'Cinco ingredientes'},
       {re:'<ol[^>]*>[\\s\\S]*(<li[^>]*>[\\s\\S]*){4}[\\s\\S]*</ol>', msg:'Quatro passos'},
       {re:'<dl[^>]*>[\\s\\S]*<dt[^>]*>[\\s\\S]*<dd[^>]*>[\\s\\S]*</dl>', msg:'Ficha técnica com dt e dd'},
       {re:'(<dt[^>]*>[\\s\\S]*){3}', msg:'Três termos na ficha'},
       {re:'<li[^>]*>[\\s\\S]*<(ul|ol)>', msg:'Sublista aninhada'},
       {re:'<img[^>]*alt\\s*=\\s*["\\\'][^"\\\']{8,}', msg:'Imagem com alt'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:30, linhas:3,
     enunciado:'<p>Cite <b>dois elementos de sites que você usa</b> que, por baixo, provavelmente são listas HTML.</p>'}
  ]
};
