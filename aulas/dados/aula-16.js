window.AULA = {
  id:'M16', unidade:'II', etapa:'N2', data:'2026-06-19', dataTexto:'sexta, 19/06',
  titulo:'Projeto: uma página completa só com HTML',
  resumo:'Aula de oficina. Nada de conteúdo novo — hoje você junta tudo o que aprendeu numa página só, do zero.',
  objetivos:[
    'Planejar a estrutura de uma página antes de codar',
    'Integrar semântica, texto, links, imagens, listas, tabelas e formulário',
    'Revisar o próprio código com uma checklist',
    'Entregar um projeto funcional'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Como não travar na frente da tela branca',
     texto:'Todo projeto começa igual: <b>rascunhe primeiro</b>. Antes de escrever uma linha, desenhe no papel os blocos da página. Depois escreva o HTML de cima para baixo, um bloco por vez.',
     cards:[
       {t:'1. Escolha o tema', d:'Algo que você conhece: seu time, sua banda, um jogo, uma ONG, um evento da escola.'},
       {t:'2. Liste as seções', d:'Topo, sobre, destaques, tabela de dados, contato, rodapé. Cinco a sete blocos bastam.'},
       {t:'3. Rascunhe no papel', d:'Caixas e rótulos. Dois minutos aqui economizam trinta depois.'},
       {t:'4. Escreva o esqueleto', d:'Só as tags semânticas vazias. Confira que fecha tudo certo.'},
       {t:'5. Preencha bloco a bloco', d:'Um de cada vez, salvando e vendo no navegador.'},
       {t:'6. Revise com a checklist', d:'A checklist do Desafio 3 é a mesma que eu vou usar para corrigir.'}
     ],
     dicas:[{icone:'💾', txt:'Salve seu arquivo como <code class="inline">index.html</code> numa pasta com o nome do projeto. Você vai adicionar CSS nele em setembro e JavaScript em outubro — este projeto vai te acompanhar o ano todo.'}]},

    {tipo:'ordenar', xp:10, titulo:'Aquecimento · Ordem de trabalho',
     enunciado:'<p>Ordene as etapas de construção de uma página.</p>',
     itens:['Escolher o tema','Listar as seções necessárias','Rascunhar o layout no papel','Escrever o esqueleto HTML5','Criar as regiões semânticas vazias','Preencher o conteúdo de cada região','Revisar com a checklist','Testar no navegador e no celular']},

    {tipo:'texto', xp:10, titulo:'Etapa 1 · Seu plano', minimo:120, linhas:5,
     enunciado:'<p>Antes de codar, escreva aqui: <b>(a)</b> o tema da sua página; <b>(b)</b> quais seções ela vai ter, na ordem; <b>(c)</b> que dados vão na tabela; <b>(d)</b> o que o formulário vai perguntar.</p>',
     exemplo:'(a) Tema: ... (b) Seções: topo, sobre, ... (c) Tabela: ... (d) Formulário: ...'},

    {tipo:'codigo', xp:50, titulo:'Etapa 2 ★ O projeto', linguagem:'html', abas:['html'],
     enunciado:'<p>Agora construa. Cumpra <b>todos</b> os requisitos — cada um vale ponto e a barra à direita mostra quantos você já tem.</p>',
     requisitos:[
       'Esqueleto HTML5 completo, com <code class="inline">lang</code>, <code class="inline">charset</code>, <code class="inline">viewport</code> e <code class="inline">title</code>',
       'Estrutura semântica: <code class="inline">header</code>, <code class="inline">nav</code>, <code class="inline">main</code>, <code class="inline">section</code>, <code class="inline">article</code>, <code class="inline">aside</code>, <code class="inline">footer</code>',
       'Um <code class="inline">h1</code> e pelo menos três <code class="inline">h2</code>',
       'Menu de navegação com âncoras funcionando',
       'Pelo menos seis parágrafos de conteúdo real',
       'Duas imagens com <code class="inline">alt</code> descritivo, uma delas em <code class="inline">figure</code> com legenda',
       'Uma lista não ordenada e uma ordenada',
       'Uma tabela com <code class="inline">caption</code>, <code class="inline">thead</code> e <code class="inline">tbody</code>',
       'Um formulário com pelo menos 4 campos, labels ligados e validação HTML5',
       'Um link externo com <code class="inline">target="_blank"</code> e <code class="inline">rel="noopener"</code>',
       'Formatação com <code class="inline">strong</code> e <code class="inline">em</code> usados com sentido',
       'Comentários organizando as seções do código',
       'Nenhuma <code class="inline">&lt;div&gt;</code> onde caberia uma tag semântica'
     ],
     base:{html:'<!DOCTYPE html>\n<html lang="pt-br">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Meu projeto — WEB I</title>\n</head>\n<body>\n\n<!-- ===== TOPO ===== -->\n<header id="topo">\n\n</header>\n\n<!-- ===== CONTEUDO ===== -->\n<main>\n\n</main>\n\n<!-- ===== RODAPE ===== -->\n<footer>\n\n</footer>\n\n</body>\n</html>\n'},
     checks:[
       {re:'<!DOCTYPE\\s+html>[\\s\\S]*lang\\s*=[\\s\\S]*charset[\\s\\S]*viewport[\\s\\S]*<title>[^<]+', msg:'Esqueleto completo'},
       {re:'<header[\\s\\S]*<nav[\\s\\S]*<main[\\s\\S]*<footer', msg:'Regiões semânticas principais'},
       {re:'<section', msg:'section presente'},
       {re:'<article', msg:'article presente'},
       {re:'<aside', msg:'aside presente'},
       {re:'<h1[^>]*>[^<]+</h1>', msg:'h1 preenchido'},
       {re:'(<h2[^>]*>[\\s\\S]*){3}', msg:'Três h2'},
       {re:'href\\s*=\\s*["\\\']#[\\s\\S]*href\\s*=\\s*["\\\']#', msg:'Menu com âncoras'},
       {re:'(<p[^>]*>[\\s\\S]*){6}', msg:'Seis parágrafos'},
       {re:'(<img[^>]*alt\\s*=\\s*["\\\'][^"\\\']{8,}[\\s\\S]*){2}', msg:'Duas imagens com alt descritivo'},
       {re:'<figure[^>]*>[\\s\\S]*<figcaption[^>]*>[^<]+', msg:'Figure com legenda'},
       {re:'<ul[^>]*>[\\s\\S]*<li[^>]*>', msg:'Lista não ordenada'},
       {re:'<ol[^>]*>[\\s\\S]*<li[^>]*>', msg:'Lista ordenada'},
       {re:'<table[\\s\\S]*<caption>[^<]+[\\s\\S]*<thead[^>]*>[\\s\\S]*<tbody[^>]*>', msg:'Tabela completa'},
       {re:'<form[\\s\\S]*(<input[\\s\\S]*){4}', msg:'Formulário com 4 campos'},
       {re:'(<label[^>]*for\\s*=[\\s\\S]*){4}', msg:'Labels ligados'},
       {re:'required|pattern|minlength|min\\s*=', msg:'Validação HTML5'},
       {re:'target\\s*=\\s*["\\\']_blank[\\s\\S]*noopener|noopener[\\s\\S]*_blank', msg:'Link externo seguro'},
       {re:'<strong[^>]*>[^<]+</strong>', msg:'strong com sentido'},
       {re:'<em[^>]*>[^<]+</em>', msg:'em com sentido'},
       {re:'(<!--[\\s\\S]*){3}', msg:'Comentários organizando o código'}
     ],
     parabens:'🎉 Você construiu um site completo. Guarde esse arquivo — em setembro ele ganha CSS e em outubro, JavaScript.'},

    {tipo:'texto', xp:10, titulo:'Etapa 3 · Autorrevisão', minimo:100, linhas:4,
     enunciado:'<p>Releia seu código e responda: <b>(a)</b> qual requisito foi mais difícil de cumprir; <b>(b)</b> o que você faria diferente se recomeçasse; <b>(c)</b> qual parte você tem mais orgulho.</p>'}
  ]
};
