window.AULA = {
  id:'M17', unidade:'II', etapa:'N2', data:'2026-06-26', dataTexto:'sexta, 26/06',
  titulo:'Missão Avaliativa N2 · 2026.1',
  avaliativa:true, semFeedback:true,
  resumo:'Avaliação da Etapa N2 do primeiro semestre. Cobre HTML de links a formulários.',
  aviso:'⏱️ Última aula do semestre 2026.1 (o período termina em 30/06). Responda tudo e clique em <b>Enviar minhas respostas</b>. Sem envio não há nota.',
  blocos:[
    {tipo:'quiz', xp:7, titulo:'Questão 1', pergunta:'Seu arquivo está em <code class="inline">/site/pags/a.html</code>. Como linkar <code class="inline">/site/index.html</code>?',
     opcoes:['<code class="inline">index.html</code>','<code class="inline">../index.html</code>','<code class="inline">/pags/index.html</code>','<code class="inline">./index.html</code>'], correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 2', pergunta:'Qual formato é ideal para um logotipo que precisa ficar nítido em qualquer tamanho?',
     opcoes:['JPG','PNG','SVG','GIF'], correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 3', pergunta:'Qual a ordem correta de aninhamento numa tabela?',
     opcoes:['table → td → tr','table → tr → td','tr → td → table','table → th → tr'], correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 4', pergunta:'Um formulário envia dados mas um campo não chega ao servidor. O que falta nele?',
     opcoes:['<code class="inline">id</code>','<code class="inline">name</code>','<code class="inline">class</code>','<code class="inline">placeholder</code>'], correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 5', pergunta:'Num blog, cada post da listagem deve ser marcado como:',
     opcoes:['<code class="inline">&lt;section&gt;</code>','<code class="inline">&lt;article&gt;</code>','<code class="inline">&lt;aside&gt;</code>','<code class="inline">&lt;div&gt;</code>'], correta:-1},

    {tipo:'multi', xp:10, titulo:'Questão 6', pergunta:'Marque <b>todas</b> as afirmações corretas.',
     opcoes:[
       'A página deve ter apenas um <code class="inline">&lt;main&gt;</code>',
       'O <code class="inline">for</code> do label deve ser igual ao <code class="inline">id</code> do campo',
       'O <code class="inline">placeholder</code> pode substituir o <code class="inline">label</code>',
       'A validação do HTML5 dispensa validar no servidor',
       'Uma sublista deve ficar dentro do <code class="inline">&lt;li&gt;</code> pai'
     ],
     corretas:[]},

    {tipo:'parear', xp:12, titulo:'Questão 7 · Semântica',
     pares:[
       {a:'<code class="inline">&lt;nav&gt;</code>', b:'Bloco de navegação'},
       {a:'<code class="inline">&lt;aside&gt;</code>', b:'Conteúdo lateral relacionado'},
       {a:'<code class="inline">&lt;figure&gt;</code>', b:'Imagem com legenda'},
       {a:'<code class="inline">&lt;dl&gt;</code>', b:'Lista de termos e definições'},
       {a:'<code class="inline">&lt;caption&gt;</code>', b:'Título de uma tabela'},
       {a:'<code class="inline">&lt;th scope="row"&gt;</code>', b:'Cabeçalho de uma linha da tabela'}
     ]},

    {tipo:'lacuna', xp:16, titulo:'Questão 8 · Formulário e links', semGabarito:true,
     texto:'<!-- link externo seguro em nova aba -->\n<a href="https://ifce.edu.br" target="{{1}}" rel="{{2}}">IFCE</a>\n\n<!-- campo obrigatorio de e-mail -->\n<label {{3}}="mail">E-mail</label>\n<input type="{{4}}" id="mail" {{5}}="email" {{6}}>\n\n<!-- nota entre 0 e 10 -->\n<input type="number" name="nota" {{7}}="0" {{8}}="10">',
     respostas:[]},

    {tipo:'codigo', xp:20, titulo:'Questão 9 · Tabela acessível', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte uma tabela com o resultado de um campeonato: 4 times, colunas Time, Vitórias, Derrotas e Pontos.</p>',
     requisitos:['<code class="inline">caption</code> preenchido','<code class="inline">thead</code> com <code class="inline">th scope="col"</code>','<code class="inline">tbody</code> com 4 times','Nome do time em <code class="inline">th scope="row"</code>'],
     base:{html:'<table border="1">\n\n</table>\n'},
     checks:[{re:'(?!)',msg:'Caption preenchido'},{re:'(?!)',msg:'Cabeçalhos com scope="col"'},{re:'(?!)',msg:'Quatro colunas'},{re:'(?!)',msg:'Quatro linhas'},{re:'(?!)',msg:'Times com scope="row"'}]},

    {tipo:'codigo', xp:34, titulo:'Questão 10 · Página completa', linguagem:'html', abas:['html'],
     enunciado:'<p>Construa a página de um clube ou grupo da escola, integrando tudo o que foi visto na etapa.</p>',
     requisitos:[
       'Esqueleto HTML5 completo',
       'Semântica: <code class="inline">header</code>, <code class="inline">nav</code>, <code class="inline">main</code>, <code class="inline">section</code>, <code class="inline">footer</code>',
       'Menu com pelo menos 3 âncoras funcionando',
       'Uma imagem em <code class="inline">figure</code> com <code class="inline">figcaption</code> e <code class="inline">alt</code>',
       'Uma lista não ordenada e uma ordenada',
       'Uma tabela com <code class="inline">caption</code> e <code class="inline">thead</code>',
       'Um formulário com 4 campos, todos com <code class="inline">label for</code> e pelo menos dois <code class="inline">required</code>',
       'Um link externo com <code class="inline">rel="noopener"</code>'
     ],
     base:{html:'<!DOCTYPE html>\n<html lang="pt-br">\n<head>\n  <meta charset="UTF-8">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>\n'},
     checks:[{re:'(?!)',msg:'Esqueleto correto'},{re:'(?!)',msg:'title preenchido'},{re:'(?!)',msg:'Regiões semânticas'},{re:'(?!)',msg:'section presente'},{re:'(?!)',msg:'Três âncoras'},{re:'(?!)',msg:'Figure completa'},{re:'(?!)',msg:'Lista não ordenada'},{re:'(?!)',msg:'Lista ordenada'},{re:'(?!)',msg:'Tabela com caption e thead'},{re:'(?!)',msg:'Formulário com 4 campos'},{re:'(?!)',msg:'Labels ligados'},{re:'(?!)',msg:'Dois campos obrigatórios'},{re:'(?!)',msg:'Link externo seguro'}]},

    {tipo:'texto', xp:10, titulo:'Questão 11 · Autoavaliação', minimo:120, linhas:5,
     enunciado:'<p>Responda: <b>(a)</b> o que você aprendeu neste semestre que consegue aplicar sozinho; <b>(b)</b> o que ainda precisa revisar; <b>(c)</b> nota de 0 a 10 para seu esforço, justificando.</p>'}
  ]
};
