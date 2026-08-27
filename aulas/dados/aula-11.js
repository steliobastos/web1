window.AULA = {
  id:'M11', unidade:'II', etapa:'N2', data:'2026-05-15', dataTexto:'sexta, 15/05',
  titulo:'Tabelas: dados em linhas e colunas',
  resumo:'Tabela serve para DADOS, nunca para layout. Hoje você aprende a montar tabelas corretas e acessíveis.',
  objetivos:[
    'Montar uma tabela com <code class="inline">tr</code>, <code class="inline">th</code> e <code class="inline">td</code>',
    'Estruturar com <code class="inline">thead</code>, <code class="inline">tbody</code> e <code class="inline">tfoot</code>',
    'Mesclar células com <code class="inline">colspan</code> e <code class="inline">rowspan</code>',
    'Tornar tabelas acessíveis com <code class="inline">caption</code> e <code class="inline">scope</code>'
  ],
  blocos:[
    {tipo:'conceito', titulo:'A tabela mínima',
     codigo:'<table>\n  <caption>Notas do 1o bimestre</caption>\n  <thead>\n    <tr>\n      <th scope="col">Aluno</th>\n      <th scope="col">Nota</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Ana</th>\n      <td>9,2</td>\n    </tr>\n    <tr>\n      <th scope="row">Bruno</th>\n      <td>7,5</td>\n    </tr>\n  </tbody>\n</table>',
     cards:[
       {t:'tr', d:'Table Row — uma LINHA. Tudo mora dentro de uma tr.'},
       {t:'th', d:'Table Header — célula de cabeçalho. Negrito e centralizada por padrão.'},
       {t:'td', d:'Table Data — célula de dado comum.'},
       {t:'caption', d:'Título da tabela. Vem logo depois de <table> e é lido pelos leitores de tela.'},
       {t:'scope', d:'scope="col" ou scope="row" diz se o th é cabeçalho da coluna ou da linha. Acessibilidade essencial.'},
       {t:'colspan / rowspan', d:'Fazem uma célula ocupar várias colunas ou várias linhas.'}
     ],
     dicas:[{icone:'🚫', tipo:'atencao', txt:'<b>Tabela não é layout.</b> Nos anos 2000 sites eram montados com tabelas — hoje isso é erro grave: quebra em celular e confunde leitores de tela. Layout é trabalho do CSS (flexbox e grid).'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Qual a ordem correta de aninhamento?',
     opcoes:['table → td → tr','table → tr → td','tr → table → td','td → tr → table'],
     correta:1},

    {tipo:'ordenar', xp:12, titulo:'Desafio 1 · Monte a estrutura',
     enunciado:'<p>Ordene as linhas de uma tabela completa.</p>',
     itens:['<table>','<caption>Título da tabela</caption>','<thead>','<tr><th>Coluna 1</th><th>Coluna 2</th></tr>','</thead>','<tbody>','<tr><td>dado</td><td>dado</td></tr>','</tbody>','</table>']},

    {tipo:'lacuna', xp:14, titulo:'Desafio 2 · Complete a tabela',
     texto:'<table>\n  <{{1}}>Horario da turma</{{1}}>\n  <{{2}}>\n    <tr>\n      <{{3}} scope="col">Horario</{{3}}>\n      <th scope="{{4}}">Sexta</th>\n    </tr>\n  </{{2}}>\n  <{{5}}>\n    <tr>\n      <th scope="row">09:45</th>\n      <{{6}}>Web I</{{6}}>\n    </tr>\n  </{{5}}>\n</table>',
     respostas:['caption','thead','th','col','tbody','td']},

    {tipo:'quiz', xp:12, titulo:'Mesclando células',
     pergunta:'Você quer um título que ocupe as 3 colunas do cabeçalho. O que usa?',
     codigo:'<tr>\n  <th ______>Boletim do 1º Ano</th>\n</tr>',
     opcoes:['<code class="inline">rowspan="3"</code>','<code class="inline">colspan="3"</code>','<code class="inline">span="3"</code>','<code class="inline">width="3"</code>'],
     correta:1,
     explica:'<b>col</b>span estende na horizontal (colunas). <b>row</b>span estende na vertical (linhas).'},

    {tipo:'codigo', xp:26, titulo:'Desafio 3 · Seu horário escolar', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte a tabela do <b>seu horário de aulas</b> da semana. Precisa ser uma tabela de verdade, acessível.</p>',
     requisitos:[
       'Um <code class="inline">&lt;caption&gt;</code> descrevendo a tabela',
       '<code class="inline">thead</code> com os dias da semana em <code class="inline">th scope="col"</code>',
       '<code class="inline">tbody</code> com pelo menos 4 horários',
       'A coluna do horário usando <code class="inline">th scope="row"</code>',
       'Pelo menos uma célula mesclada com <code class="inline">colspan</code> ou <code class="inline">rowspan</code>',
       'Um <code class="inline">border="1"</code> só para visualizar (depois isso vira CSS)'
     ],
     base:{html:'<table border="1">\n  <caption></caption>\n  <thead>\n    <tr>\n      <th scope="col">Horário</th>\n      <!-- dias da semana -->\n    </tr>\n  </thead>\n  <tbody>\n\n  </tbody>\n</table>\n'},
     checks:[
       {re:'<caption>[^<]+</caption>', msg:'Caption preenchido'},
       {re:'<thead>[\\s\\S]*scope\\s*=\\s*["\\\']col', msg:'Cabeçalhos de coluna com scope'},
       {re:'(<th[^>]*scope\\s*=\\s*["\\\']col[\\s\\S]*){4}', msg:'Pelo menos 4 colunas'},
       {re:'(<tr>[\\s\\S]*){5}', msg:'Pelo menos 4 linhas de dados'},
       {re:'scope\\s*=\\s*["\\\']row', msg:'Cabeçalhos de linha com scope="row"'},
       {re:'(colspan|rowspan)\\s*=', msg:'Célula mesclada'}
     ]},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Boletim com totais', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte um boletim com 4 disciplinas, 2 notas cada e a média — com uma linha de rodapé mostrando a média geral.</p>',
     requisitos:[
       '<code class="inline">thead</code>, <code class="inline">tbody</code> e <code class="inline">tfoot</code>',
       'Quatro disciplinas no corpo',
       'Colunas: Disciplina, N1, N2, Média',
       'Linha no <code class="inline">tfoot</code> com <code class="inline">colspan</code> para "Média geral"',
       'Caption descritivo'
     ],
     base:{html:'<table border="1">\n\n</table>\n'},
     checks:[
       {re:'<thead>', msg:'thead presente'},
       {re:'<tbody>', msg:'tbody presente'},
       {re:'<tfoot>', msg:'tfoot presente'},
       {re:'<caption>[^<]+', msg:'Caption preenchido'},
       {re:'(<tr>[\\s\\S]*){6}', msg:'Linhas suficientes'},
       {re:'<tfoot>[\\s\\S]*colspan', msg:'colspan usado no rodapé'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Por que usar tabela para montar o layout de um site é considerado erro hoje? Cite <b>dois problemas</b>.</p>'}
  ]
};
