window.AULA = {
  id:'M04', unidade:'II', etapa:'N1', data:'2026-03-13', dataTexto:'sexta, 13/03',
  titulo:'Estrutura básica de um documento HTML',
  resumo:'Todo site do mundo começa igual. Hoje você aprende esse começo e nunca mais esquece.',
  objetivos:[
    'Escrever o esqueleto de uma página HTML',
    'Explicar o papel de <code class="inline">&lt;head&gt;</code> e <code class="inline">&lt;body&gt;</code>',
    'Declarar codificação e idioma corretamente',
    'Usar comentários no código'
  ],
  blocos:[
    {tipo:'conceito', titulo:'O esqueleto',
     codigo:'<!DOCTYPE html>                            <!-- avisa: isto e HTML5 -->\n<html lang="pt-br">                        <!-- idioma da pagina -->\n<head>                                     <!-- INVISIVEL: config -->\n  <meta charset="UTF-8">                   <!-- acentos funcionam -->\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Minha pagina</title>              <!-- aparece na aba -->\n</head>\n<body>                                     <!-- VISIVEL: conteudo -->\n  <h1>Ola, mundo!</h1>\n</body>\n</html>',
     cards:[
       {t:'DOCTYPE', d:'Primeira linha, sempre. Sem ele o navegador entra em "modo de compatibilidade" e o layout quebra.'},
       {t:'lang="pt-br"', d:'Ajuda leitores de tela, corretor ortográfico e tradutores. É acessibilidade de graça.'},
       {t:'charset UTF-8', d:'Sem isso, "ação" vira "aÃ§Ã£o". Sempre a primeira meta do head.'},
       {t:'viewport', d:'Faz o site se comportar bem no celular. Sem ela, o site aparece minúsculo e desalinhado.'},
       {t:'title', d:'É o nome da aba, o que aparece no favorito e no resultado do Google.'},
       {t:'Comentário', d:'&lt;!-- assim --&gt;. Não aparece na tela mas QUALQUER pessoa pode ler no código-fonte.'}
     ],
     dicas:[{icone:'👁️', txt:'Aperte <code class="inline">Ctrl+U</code> em qualquer site para ver o código-fonte. Todo HTML da web é público — é assim que se aprende observando os outros.'}]},

    {tipo:'ordenar', xp:12, titulo:'Desafio 1 · Monte o esqueleto',
     enunciado:'<p>Coloque as linhas na ordem correta.</p>',
     itens:['<!DOCTYPE html>','<html lang="pt-br">','<head>','<meta charset="UTF-8">','<title>Minha página</title>','</head>','<body>','<h1>Conteúdo</h1>','</body>','</html>']},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Onde vai o conteúdo que o visitante <b>vê</b> na tela?',
     opcoes:['Dentro do <code class="inline">&lt;head&gt;</code>','Dentro do <code class="inline">&lt;body&gt;</code>','Dentro do <code class="inline">&lt;title&gt;</code>','Direto dentro do <code class="inline">&lt;html&gt;</code>'],
     correta:1},

    {tipo:'quiz', xp:10, titulo:'O bug dos acentos',
     pergunta:'Você escreveu "Programação" e no navegador apareceu "ProgramaÃ§Ã£o". O que faltou?',
     opcoes:['O DOCTYPE','A meta charset UTF-8','O atributo lang','O CSS'],
     correta:1},

    {tipo:'lacuna', xp:14, titulo:'Desafio 2 · Preencha o esqueleto',
     texto:'<!{{1}} html>\n<html {{2}}="pt-br">\n<{{3}}>\n  <meta {{4}}="UTF-8">\n  <{{5}}>Portfolio da Ana</{{5}}>\n</{{3}}>\n<{{6}}>\n  <h1>Oi!</h1>\n</{{6}}>\n</html>',
     respostas:['DOCTYPE','lang','head','charset','title','body']},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Sua página oficial da disciplina', linguagem:'html', abas:['html'],
     enunciado:'<p>Crie do zero a página que vai crescer o ano inteiro. Guarde este código — vamos voltar nele nas próximas missões.</p>',
     requisitos:[
       'Esqueleto completo e correto',
       '<code class="inline">title</code> com seu nome + "— WEB I"',
       'Um <code class="inline">h1</code> com o nome da disciplina',
       'Um <code class="inline">h2</code> com seu nome e turma',
       'Pelo menos dois parágrafos',
       'Pelo menos um comentário explicando alguma parte'
     ],
     base:{html:'<!-- escreva sua pagina completa -->\n'},
     checks:[
       {re:'<!DOCTYPE\\s+html>', msg:'DOCTYPE presente'},
       {re:'<html[^>]*lang', msg:'html com lang'},
       {re:'<meta[^>]*charset', msg:'charset declarado'},
       {re:'<title>[^<]*WEB\\s*I', msg:'title com "WEB I"'},
       {re:'<h1[^>]*>[^<]+</h1>', msg:'h1 preenchido'},
       {re:'<h2[^>]*>[^<]+</h2>', msg:'h2 preenchido'},
       {re:'<p[^>]*>[\\s\\S]*<p[^>]*>', msg:'Dois parágrafos'},
       {re:'<!--[\\s\\S]*-->', msg:'Tem comentário no código'}
     ],
     parabens:'Guarde este arquivo como index.html na pasta da disciplina.'},

    {tipo:'quiz', xp:10, titulo:'head ou body?',
     pergunta:'A tag <code class="inline">&lt;link rel="stylesheet"&gt;</code> deve ficar onde?',
     opcoes:['No head','No body','Antes do DOCTYPE','Tanto faz'],
     correta:0,
     explica:'O CSS precisa ser carregado antes de a página ser desenhada, senão o usuário vê um "flash" da página sem estilo.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:30, linhas:3,
     enunciado:'<p>Explique para um colega: <b>qual a diferença entre o que vai no <code class="inline">head</code> e o que vai no <code class="inline">body</code>?</b></p>'}
  ]
};
