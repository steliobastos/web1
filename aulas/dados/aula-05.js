window.AULA = {
  id:'M05', unidade:'II', etapa:'N1', data:'2026-03-20', dataTexto:'sexta, 20/03',
  titulo:'Elementos: as peças de montar do HTML',
  resumo:'HTML tem mais de 100 tags, mas você usa umas 20 no dia a dia. Hoje a gente domina essas 20.',
  objetivos:[
    'Identificar as partes de um elemento HTML',
    'Diferenciar elementos com e sem conteúdo',
    'Aninhar elementos corretamente',
    'Usar as tags de bloco e de linha mais comuns'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Anatomia de um elemento',
     codigo:'<p class="destaque">Texto do paragrafo</p>\n ^  ^                ^                 ^\n |  |                |                 |\n |  atributo         conteudo          tag de fechamento\n tag de abertura\n\n<!-- elementos vazios nao tem fechamento -->\n<br>\n<hr>\n<img src="foto.jpg" alt="Minha foto">',
     cards:[
       {t:'Elementos de bloco', d:'h1..h6, p, div, section, ul, table. Ocupam a linha inteira e começam numa linha nova.'},
       {t:'Elementos de linha', d:'a, span, strong, em, img. Ficam no meio do texto, sem quebrar a linha.'},
       {t:'Elementos vazios', d:'br, hr, img, input, meta, link. Não têm conteúdo, logo não têm tag de fechamento.'},
       {t:'Aninhamento', d:'Abriu por último, fecha primeiro. &lt;p&gt;&lt;strong&gt;ok&lt;/strong&gt;&lt;/p&gt; certo. Cruzar tags é erro.'},
       {t:'h1 a h6', d:'h1 é o mais importante — só UM por página. Não pule níveis: depois de h1 vem h2, não h4.'},
       {t:'div e span', d:'Caixas neutras, sem significado nenhum. Use só quando nenhuma tag semântica servir.'}
     ],
     dicas:[{icone:'📏', txt:'<b>Indente sempre.</b> Cada nível para dentro ganha 2 espaços. Código indentado é código que você consegue ler daqui a um mês.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Qual destes está aninhado <b>corretamente</b>?',
     opcoes:[
       '<code class="inline">&lt;p&gt;&lt;strong&gt;texto&lt;/p&gt;&lt;/strong&gt;</code>',
       '<code class="inline">&lt;p&gt;&lt;strong&gt;texto&lt;/strong&gt;&lt;/p&gt;</code>',
       '<code class="inline">&lt;strong&gt;&lt;p&gt;texto&lt;/strong&gt;&lt;/p&gt;</code>',
       '<code class="inline">&lt;p&gt;texto&lt;/strong&gt;&lt;/p&gt;</code>'
     ],
     correta:1,
     explica:'A regra é LIFO: o último que abriu é o primeiro que fecha. Igual a caixas encaixadas.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · O que cada tag faz',
     pares:[
       {a:'<code class="inline">&lt;h1&gt;</code>', b:'Título principal da página'},
       {a:'<code class="inline">&lt;p&gt;</code>', b:'Parágrafo de texto'},
       {a:'<code class="inline">&lt;br&gt;</code>', b:'Quebra de linha'},
       {a:'<code class="inline">&lt;hr&gt;</code>', b:'Linha horizontal separadora'},
       {a:'<code class="inline">&lt;strong&gt;</code>', b:'Texto de forte importância (negrito)'},
       {a:'<code class="inline">&lt;em&gt;</code>', b:'Texto enfatizado (itálico)'},
       {a:'<code class="inline">&lt;div&gt;</code>', b:'Caixa genérica de bloco'},
       {a:'<code class="inline">&lt;span&gt;</code>', b:'Caixa genérica dentro do texto'}
     ]},

    {tipo:'multi', xp:12, titulo:'Desafio 2 · Elementos vazios',
     pergunta:'Marque <b>todos</b> os elementos que NÃO têm tag de fechamento.',
     opcoes:['<code class="inline">&lt;br&gt;</code>','<code class="inline">&lt;p&gt;</code>','<code class="inline">&lt;img&gt;</code>','<code class="inline">&lt;hr&gt;</code>','<code class="inline">&lt;div&gt;</code>','<code class="inline">&lt;input&gt;</code>'],
     corretas:[0,2,3,5]},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Conserte a bagunça', linguagem:'html', abas:['html'],
     enunciado:'<p>O código abaixo tem <b>5 erros</b>: tags cruzadas, fechamento faltando e hierarquia errada. Conserte todos.</p>',
     requisitos:[
       'Todas as tags abertas devem ser fechadas',
       'Nenhuma tag pode cruzar com outra',
       'Só um <code class="inline">h1</code> na página',
       'Hierarquia de títulos sem pular nível',
       'Indentação correta'
     ],
     base:{html:'<h1>Meu site</h1>\n\n<h1>Sobre mim</h1>\n\n<p>Ola, eu sou <strong>estudante</p></strong>\n\n<h4>Meus hobbies</h4>\n\n<p>Games, musica e programacao.\n\n<p>Contato: <em>meu@email.com</p>\n'},
     checks:[
       {re:'<h1>[\\s\\S]*<h1>', negar:true, msg:'Só um h1 na página'},
       {re:'<strong>[^<]*</strong>', msg:'strong fechado no lugar certo'},
       {re:'<h2>', msg:'Usou h2 em vez de pular para h4'},
       {re:'<h4>', negar:true, msg:'Removeu o h4 fora de hierarquia'},
       {re:'<em>[^<]*</em>', msg:'em fechado corretamente'},
       {re:'</p>[\\s\\S]*</p>[\\s\\S]*</p>', msg:'Todos os parágrafos fechados'}
     ],
     parabens:'Esse tipo de erro é o que mais quebra layout. Saber achar já te coloca à frente.'},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Página de receita', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte a página de uma receita que você gosta usando só o que vimos hoje.</p>',
     requisitos:[
       'Um <code class="inline">h1</code> com o nome da receita',
       'Dois <code class="inline">h2</code>: "Ingredientes" e "Modo de preparo"',
       'Pelo menos 3 parágrafos',
       'Um <code class="inline">&lt;hr&gt;</code> separando as seções',
       'Pelo menos um <code class="inline">&lt;strong&gt;</code> e um <code class="inline">&lt;em&gt;</code>',
       'Uma quebra de linha com <code class="inline">&lt;br&gt;</code>'
     ],
     base:{html:'<h1></h1>\n\n'},
     checks:[
       {re:'<h1>[^<]+</h1>', msg:'h1 preenchido'},
       {re:'<h2>[^<]*[Ii]ngredientes', msg:'h2 de Ingredientes'},
       {re:'<h2>[^<]*[Mm]odo', msg:'h2 de Modo de preparo'},
       {re:'<p>[\\s\\S]*<p>[\\s\\S]*<p>', msg:'Três parágrafos'},
       {re:'<hr\\s*/?>', msg:'Separador hr'},
       {re:'<strong>', msg:'Usou strong'},
       {re:'<em>', msg:'Usou em'},
       {re:'<br\\s*/?>', msg:'Usou br'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:30, linhas:3,
     enunciado:'<p>Qual a diferença prática entre um elemento <b>de bloco</b> e um <b>de linha</b>? Dê um exemplo de cada.</p>'}
  ]
};
