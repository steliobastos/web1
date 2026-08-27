window.AULA = {
  id:'M13', unidade:'II', etapa:'N2', data:'2026-05-29', dataTexto:'sexta, 29/05',
  titulo:'HTML semântico: dar sentido, não só aparência',
  resumo:'Trocar todas as div por tags com nome é a mudança mais barata que existe para melhorar acessibilidade e SEO. Hoje você faz isso.',
  objetivos:[
    'Usar <code class="inline">header</code>, <code class="inline">nav</code>, <code class="inline">main</code>, <code class="inline">section</code>, <code class="inline">article</code>, <code class="inline">aside</code> e <code class="inline">footer</code>',
    'Escolher entre <code class="inline">section</code> e <code class="inline">article</code>',
    'Entender o impacto em leitores de tela e buscadores',
    'Refatorar uma "div soup" em HTML semântico'
  ],
  blocos:[
    {tipo:'conceito', titulo:'A mesma página, dois códigos',
     texto:'Visualmente idênticas. Para um leitor de tela e para o Google, completamente diferentes.',
     codigo:'<!-- div soup: ninguem entende nada -->\n<div class="topo">\n  <div class="menu">...</div>\n</div>\n<div class="conteudo">\n  <div class="post">...</div>\n</div>\n<div class="rodape">...</div>\n\n<!-- semantico: qualquer maquina entende -->\n<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>...</article>\n</main>\n<footer>...</footer>',
     cards:[
       {t:'header', d:'Cabeçalho da página OU de uma seção. Pode haver vários na página.'},
       {t:'nav', d:'Bloco de navegação principal. Não use para todo link solto — só para menus.'},
       {t:'main', d:'O conteúdo principal e único da página. Só UM por página, e nunca dentro de header/footer.'},
       {t:'section', d:'Um trecho temático da página. Deve ter um título próprio.'},
       {t:'article', d:'Conteúdo que faz sentido sozinho: um post, uma notícia, um comentário, um card de produto.'},
       {t:'aside', d:'Conteúdo lateral relacionado: barra lateral, box "leia também", propaganda.'},
       {t:'footer', d:'Rodapé da página ou da seção: autoria, contato, copyright.'},
       {t:'figure', d:'Imagem, gráfico ou código com legenda, referenciado pelo texto.'}
     ],
     dicas:[{icone:'🎧', txt:'<b>O teste do leitor de tela:</b> quem usa NVDA ou VoiceOver navega saltando entre <i>regiões</i>. Sem tags semânticas, o usuário tem que ouvir a página inteira em ordem para achar o menu.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Quantos <code class="inline">&lt;main&gt;</code> uma página deve ter?',
     opcoes:['Nenhum','Exatamente um','Um por seção','Quantos quiser'],
     correta:1},

    {tipo:'quiz', xp:12, titulo:'section ou article?',
     pergunta:'Você está montando um blog. Cada post da lista deve ser:',
     opcoes:['<code class="inline">&lt;section&gt;</code>, porque é um trecho da página','<code class="inline">&lt;article&gt;</code>, porque faz sentido sozinho fora do site','<code class="inline">&lt;div&gt;</code>, porque não tem tag específica','<code class="inline">&lt;aside&gt;</code>, porque é conteúdo secundário'],
     correta:1,
     explica:'Teste prático: se o conteúdo pudesse ser publicado num feed RSS ou compartilhado isolado e ainda faria sentido, é <code class="inline">article</code>.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · Cada tag no seu lugar',
     pares:[
       {a:'Logo + menu no topo do site', b:'<code class="inline">&lt;header&gt;</code>'},
       {a:'A lista de links de navegação', b:'<code class="inline">&lt;nav&gt;</code>'},
       {a:'O conteúdo principal e único', b:'<code class="inline">&lt;main&gt;</code>'},
       {a:'Uma notícia completa do blog', b:'<code class="inline">&lt;article&gt;</code>'},
       {a:'A seção "Nossos serviços" com título', b:'<code class="inline">&lt;section&gt;</code>'},
       {a:'Box "Leia também" na lateral', b:'<code class="inline">&lt;aside&gt;</code>'},
       {a:'Copyright e contato no fim', b:'<code class="inline">&lt;footer&gt;</code>'},
       {a:'Gráfico com legenda explicativa', b:'<code class="inline">&lt;figure&gt;</code>'}
     ]},

    {tipo:'codigo', xp:26, titulo:'Desafio 2 · Refatore a div soup', linguagem:'html', abas:['html'],
     enunciado:'<p>Reescreva o código abaixo trocando <b>todas</b> as <code class="inline">div</code> por tags semânticas. A aparência não muda — o significado, sim.</p>',
     requisitos:[
       'Nenhuma <code class="inline">&lt;div&gt;</code> sobrando',
       '<code class="inline">header</code>, <code class="inline">nav</code>, <code class="inline">main</code>, <code class="inline">footer</code>',
       'Cada post virando um <code class="inline">&lt;article&gt;</code>',
       'A barra lateral virando <code class="inline">&lt;aside&gt;</code>',
       'Manter os títulos e o conteúdo'
     ],
     base:{html:'<div class="topo">\n  <h1>Blog da Turma</h1>\n  <div class="menu">\n    <a href="#">Início</a> <a href="#">Posts</a> <a href="#">Sobre</a>\n  </div>\n</div>\n\n<div class="conteudo">\n  <div class="post">\n    <h2>Feira de Ciências</h2>\n    <p>Nosso projeto ganhou o primeiro lugar.</p>\n  </div>\n  <div class="post">\n    <h2>Visita técnica</h2>\n    <p>Fomos conhecer uma empresa de software.</p>\n  </div>\n</div>\n\n<div class="lateral">\n  <h3>Leia também</h3>\n  <p>Como montar seu primeiro site.</p>\n</div>\n\n<div class="rodape">\n  <p>IFCE Campus Horizonte — 2026</p>\n</div>\n'},
     checks:[
       {re:'<div', negar:true, msg:'Nenhuma div restante'},
       {re:'<header>', msg:'header presente'},
       {re:'<nav>', msg:'nav presente'},
       {re:'<main>', msg:'main presente'},
       {re:'<article>[\\s\\S]*<article>', msg:'Dois article'},
       {re:'<aside>', msg:'aside presente'},
       {re:'<footer>', msg:'footer presente'},
       {re:'<h1>[\\s\\S]*<h2>[\\s\\S]*<h2>[\\s\\S]*<h3>', msg:'Títulos preservados'}
     ],
     parabens:'Zero div, mesmo visual, muito mais informação para máquinas e leitores de tela.'},

    {tipo:'ordenar', xp:10, titulo:'Desafio 3 · Ordem das regiões',
     enunciado:'<p>Ordene a estrutura semântica típica de uma página.</p>',
     itens:['<header> com o logo','<nav> com o menu','</header>','<main>','<article> com o conteúdo','</main>','<aside> com conteúdo relacionado','<footer> com o rodapé']},

    {tipo:'codigo', xp:24, titulo:'Desafio 4 · Sua página semântica', linguagem:'html', abas:['html'],
     enunciado:'<p>Construa do zero a página de um evento da escola, 100% semântica.</p>',
     requisitos:[
       'Esqueleto HTML5 completo',
       '<code class="inline">header</code> com <code class="inline">h1</code> e <code class="inline">nav</code>',
       '<code class="inline">main</code> com pelo menos duas <code class="inline">section</code>',
       'Pelo menos um <code class="inline">article</code>',
       'Um <code class="inline">aside</code>',
       'Um <code class="inline">footer</code>',
       'Cada section com seu próprio título',
       'Zero <code class="inline">div</code>'
     ],
     base:{html:'<!DOCTYPE html>\n<html lang="pt-br">\n<head>\n  <meta charset="UTF-8">\n  <title>Evento</title>\n</head>\n<body>\n\n</body>\n</html>\n'},
     checks:[
       {re:'<header>[\\s\\S]*<h1>[\\s\\S]*<nav>', msg:'header com h1 e nav'},
       {re:'<main>', msg:'main presente'},
       {re:'<section>[\\s\\S]*<section>', msg:'Duas sections'},
       {re:'<section>[\\s\\S]*<h2>', msg:'Sections com título'},
       {re:'<article>', msg:'article presente'},
       {re:'<aside>', msg:'aside presente'},
       {re:'<footer>', msg:'footer presente'},
       {re:'<div', negar:true, msg:'Nenhuma div'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:40, linhas:3,
     enunciado:'<p>Se o visual fica <b>igual</b>, por que trocar div por tags semânticas? Cite <b>duas vantagens concretas</b>.</p>'}
  ]
};
