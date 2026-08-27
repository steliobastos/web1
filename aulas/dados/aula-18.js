window.AULA = {
  id:'M18', unidade:'II', etapa:'N1', data:'2026-08-07', dataTexto:'sexta, 07/08',
  titulo:'Retomada: diagnóstico gamificado de HTML',
  resumo:'Volta das férias. Nada de revisão expositiva: você vai medir sozinho o que ficou e o que evaporou, resolvendo desafios cronometrados.',
  objetivos:[
    'Recuperar o que foi visto no primeiro semestre',
    'Identificar as próprias lacunas',
    'Reativar o ambiente de trabalho',
    'Preparar terreno para formulários avançados, Canvas e CSS'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Como funciona a retomada',
     texto:'Esta missão é um <b>diagnóstico</b>, não uma prova. A pontuação me mostra onde a turma precisa de reforço. Responda sem consultar — errar aqui é informação útil, não problema.',
     cards:[
       {t:'Rodada 1', d:'Rajada de perguntas rápidas cobrindo os pontos-chave do semestre.'},
       {t:'Rodada 2', d:'Caça ao erro: código quebrado para consertar.'},
       {t:'Rodada 3', d:'Construção livre: montar uma página do zero contra o relógio.'},
       {t:'Depois', d:'Eu leio os resultados e as próximas missões saem calibradas pelo que a turma errou mais.'}
     ]},

    {tipo:'quiz', xp:6, titulo:'Rodada 1 · #1', pergunta:'Qual tag define o conteúdo principal e único da página?',
     opcoes:['<code class="inline">&lt;section&gt;</code>','<code class="inline">&lt;main&gt;</code>','<code class="inline">&lt;body&gt;</code>','<code class="inline">&lt;article&gt;</code>'], correta:1},

    {tipo:'quiz', xp:6, titulo:'Rodada 1 · #2', pergunta:'O que faz o <code class="inline">&lt;meta charset="UTF-8"&gt;</code>?',
     opcoes:['Define o idioma da página','Garante que acentos apareçam corretamente','Carrega o CSS','Define o tamanho da tela'], correta:1},

    {tipo:'quiz', xp:6, titulo:'Rodada 1 · #3', pergunta:'Qual atributo liga o <code class="inline">&lt;label&gt;</code> ao campo?',
     opcoes:['<code class="inline">name</code>','<code class="inline">for</code>','<code class="inline">link</code>','<code class="inline">bind</code>'], correta:1},

    {tipo:'quiz', xp:6, titulo:'Rodada 1 · #4', pergunta:'Qual lista é a certa para um passo a passo?',
     opcoes:['<code class="inline">&lt;ul&gt;</code>','<code class="inline">&lt;ol&gt;</code>','<code class="inline">&lt;dl&gt;</code>','<code class="inline">&lt;li&gt;</code>'], correta:1},

    {tipo:'quiz', xp:6, titulo:'Rodada 1 · #5', pergunta:'Quantos <code class="inline">&lt;h1&gt;</code> deve ter uma página?',
     opcoes:['Nenhum','Um','Um por seção','Quantos quiser'], correta:1},

    {tipo:'multi', xp:10, titulo:'Rodada 1 · #6', pergunta:'Marque <b>todos</b> os elementos vazios.',
     opcoes:['<code class="inline">&lt;br&gt;</code>','<code class="inline">&lt;p&gt;</code>','<code class="inline">&lt;img&gt;</code>','<code class="inline">&lt;input&gt;</code>','<code class="inline">&lt;section&gt;</code>','<code class="inline">&lt;hr&gt;</code>'],
     corretas:[0,2,3,5]},

    {tipo:'parear', xp:14, titulo:'Rodada 1 · #7 · Relâmpago',
     enunciado:'<p>Ligue tudo o mais rápido que conseguir.</p>',
     pares:[
       {a:'<code class="inline">&lt;a href&gt;</code>', b:'Link'},
       {a:'<code class="inline">&lt;img alt&gt;</code>', b:'Descrição da imagem'},
       {a:'<code class="inline">&lt;th scope&gt;</code>', b:'Cabeçalho de tabela acessível'},
       {a:'<code class="inline">&lt;form method&gt;</code>', b:'Como os dados são enviados'},
       {a:'<code class="inline">&lt;figcaption&gt;</code>', b:'Legenda da imagem'},
       {a:'<code class="inline">&lt;abbr title&gt;</code>', b:'Significado de uma sigla'},
       {a:'<code class="inline">&lt;strong&gt;</code>', b:'Importância real'},
       {a:'<code class="inline">&lt;aside&gt;</code>', b:'Conteúdo lateral'}
     ]},

    {tipo:'codigo', xp:26, titulo:'Rodada 2 · Caça ao erro', linguagem:'html', abas:['html'],
     enunciado:'<p>Este código tem <b>7 erros</b>. Encontre e corrija todos.</p>',
     requisitos:[
       'DOCTYPE presente',
       'charset declarado',
       'Nenhuma tag cruzada',
       'Imagem com alt',
       'Label ligado ao campo',
       'Campo com name',
       'Nenhum id repetido'
     ],
     base:{html:'<html>\n<head>\n  <title>Contato</title>\n</head>\n<body>\n\n  <h1>Fale conosco</h1>\n\n  <p>Preencha o <strong>formulario abaixo</p></strong>\n\n  <img src="contato.jpg">\n\n  <form id="f1">\n    <label>Nome</label>\n    <input type="text" id="nome">\n\n    <label for="email">E-mail</label>\n    <input type="email" id="nome" name="email">\n\n    <button type="submit">Enviar</button>\n  </form>\n\n</body>\n</html>\n'},
     checks:[
       {re:'<!DOCTYPE\\s+html>', msg:'DOCTYPE adicionado'},
       {re:'<meta[^>]*charset', msg:'charset declarado'},
       {re:'<strong>[^<]*</strong>', msg:'strong fechado no lugar certo'},
       {re:'<img[^>]*alt\\s*=', msg:'Imagem com alt'},
       {re:'<label[^>]*for\\s*=\\s*["\\\']nome', msg:'Label do nome ligado'},
       {re:'id\\s*=\\s*["\\\']nome["\\\'][^>]*name\\s*=|name\\s*=\\s*["\\\']nome', msg:'Campo nome com name'},
       {re:'id\\s*=\\s*["\\\']nome["\\\'][\\s\\S]*id\\s*=\\s*["\\\']nome["\\\']', negar:true, msg:'Sem id repetido'}
     ]},

    {tipo:'codigo', xp:30, titulo:'Rodada 3 · Contra o relógio', linguagem:'html', abas:['html'],
     enunciado:'<p>Você tem o resto da aula. Monte, do zero, uma página de apresentação da sua turma.</p>',
     requisitos:[
       'Esqueleto HTML5 completo',
       'Estrutura semântica com header, nav, main e footer',
       'Um h1 e dois h2',
       'Uma lista com os nomes de 5 colegas',
       'Uma tabela com o horário de aulas de sexta-feira',
       'Um formulário de sugestões com 3 campos e labels ligados',
       'Uma imagem com alt',
       'Um link externo'
     ],
     base:{html:'<!DOCTYPE html>\n<html lang="pt-br">\n<head>\n  <meta charset="UTF-8">\n  <title>Minha turma</title>\n</head>\n<body>\n\n</body>\n</html>\n'},
     checks:[
       {re:'<header[\\s\\S]*<nav[\\s\\S]*<main[\\s\\S]*<footer', msg:'Estrutura semântica'},
       {re:'<h1>[^<]+</h1>', msg:'h1 preenchido'},
       {re:'(<h2>[\\s\\S]*){2}', msg:'Dois h2'},
       {re:'<ul>[\\s\\S]*(<li>[\\s\\S]*){5}', msg:'Cinco colegas na lista'},
       {re:'<table[\\s\\S]*<tr>[\\s\\S]*<td>', msg:'Tabela com dados'},
       {re:'<form[\\s\\S]*(<input[\\s\\S]*){3}', msg:'Formulário com 3 campos'},
       {re:'(<label[^>]*for\\s*=[\\s\\S]*){3}', msg:'Três labels ligados'},
       {re:'<img[^>]*alt\\s*=\\s*["\\\'][^"\\\']{6,}', msg:'Imagem com alt'},
       {re:'href\\s*=\\s*["\\\']https?://', msg:'Link externo'}
     ]},

    {tipo:'texto', xp:8, titulo:'Fecho · Diagnóstico honesto', minimo:80, linhas:4,
     enunciado:'<p>Sem medo de errar: <b>(a)</b> o que você lembrava bem; <b>(b)</b> o que tinha esquecido completamente; <b>(c)</b> qual assunto você quer que eu revise primeiro.</p>'}
  ]
};
