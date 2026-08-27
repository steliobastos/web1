window.AULA = {
  id:'M02', unidade:'I', etapa:'N1', data:'2026-02-20', dataTexto:'sexta, 20/02',
  titulo:'Estático x Dinâmico: quem monta a página?',
  resumo:'Dois sites podem parecer idênticos e serem construídos de formas completamente diferentes. Hoje você aprende a identificar qual é qual — só olhando.',
  objetivos:[
    'Diferenciar site estático de site dinâmico',
    'Reconhecer quando o conteúdo vem pronto e quando é montado na hora',
    'Identificar exemplos reais de cada tipo',
    'Entender onde a nossa disciplina se encaixa'
  ],
  blocos:[
    {tipo:'conceito', titulo:'A diferença em uma frase',
     texto:'<b>Estático:</b> o arquivo já existe pronto no servidor e é entregue igual para todo mundo. <b>Dinâmico:</b> o servidor (ou o JavaScript) <i>monta</i> a página na hora, com dados de um banco — e ela sai diferente para cada pessoa.',
     tabela:{cab:['','Estático','Dinâmico'],linhas:[
       ['Conteúdo','Igual para todos','Personalizado'],
       ['Como é feito','Arquivos .html prontos','Gerado por programa + banco de dados'],
       ['Velocidade','Muito rápido','Depende do processamento'],
       ['Custo','Baixíssimo','Maior (servidor, banco)'],
       ['Exemplo','Portfólio, landing page, blog simples','Instagram, loja virtual, sistema acadêmico']
     ]},
     cards:[
       {t:'Estático não é "parado"', d:'Pode ter animação, menu que abre e fecha, carrossel. O que não muda é o conteúdo entregue pelo servidor.'},
       {t:'O meio-termo', d:'Muitos sites hoje entregam HTML estático e o JavaScript busca dados depois. É o modelo das SPAs (React, Vue).'},
       {t:'Onde estamos', d:'Nesta disciplina fazemos front-end: HTML, CSS e JS. Back-end e banco vêm nos próximos anos do curso.'}
     ]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'O site do IFCE mostra o mesmo texto institucional para qualquer visitante. Já o Q-Acadêmico mostra as SUAS notas. Respectivamente, eles são:',
     opcoes:['Dinâmico e estático','Estático e dinâmico','Os dois estáticos','Os dois dinâmicos'],
     correta:1},

    {tipo:'multi', xp:14, titulo:'Desafio 1 · Classifique',
     pergunta:'Marque <b>todos</b> os casos que exigem um site <b>dinâmico</b>.',
     opcoes:[
       'Uma página de currículo com sua foto e experiências',
       'Um feed que mostra posts diferentes para cada usuário',
       'Um cardápio de restaurante em PDF na tela',
       'Um carrinho de compras que guarda o que você escolheu',
       'A página "Sobre nós" de uma empresa',
       'Um sistema de matrícula online'
     ],
     corretas:[1,3,5]},

    {tipo:'parear', xp:12, titulo:'Desafio 2 · Onde roda?',
     enunciado:'<p>Cada tecnologia roda no cliente ou no servidor? Ligue.</p>',
     pares:[
       {a:'HTML', b:'Cliente — interpretado pelo navegador'},
       {a:'CSS', b:'Cliente — aplica o visual no navegador'},
       {a:'JavaScript (no navegador)', b:'Cliente — roda na máquina do usuário'},
       {a:'PHP', b:'Servidor — gera o HTML antes de enviar'},
       {a:'MySQL', b:'Servidor — guarda e devolve os dados'},
       {a:'Node.js', b:'Servidor — JavaScript rodando fora do navegador'}
     ]},

    {tipo:'codigo', xp:22, titulo:'Desafio 3 · Estático vira "vivo"', linguagem:'html', abas:['html'],
     enunciado:'<p>Esta página é estática. Adicione um botão que troca o texto ao ser clicado — sem servidor nenhum. Isso mostra que <b>interatividade não é a mesma coisa que ser dinâmico</b>.</p>',
     requisitos:[
       'Um <code class="inline">&lt;button&gt;</code> na página',
       'Um <code class="inline">onclick</code> que muda o texto do parágrafo',
       'O texto novo deve mencionar seu nome'
     ],
     pista:'<code class="inline">&lt;button onclick="document.getElementById(\'msg\').textContent = \'Oi, sou o Pedro!\'"&gt;Clique&lt;/button&gt;</code>',
     base:{html:'<h1>Página estática</h1>\n<p id="msg">Este texto veio pronto do servidor.</p>\n\n<!-- adicione o botao abaixo -->\n\n'},
     checks:[
       {re:'<button', msg:'Criou o botão'},
       {re:'onclick', msg:'Ligou uma ação ao clique'},
       {re:'getElementById\\s*\\(\\s*["\\\']msg', msg:'Selecionou o parágrafo pelo id'},
       {re:'(textContent|innerHTML)\\s*=', msg:'Trocou o texto'}
     ],
     parabens:'Reparou? O servidor não foi consultado nenhuma vez. Isso é front-end puro.'},

    {tipo:'lacuna', xp:12, titulo:'Desafio 4 · Complete o raciocínio',
     texto:'Um site {{1}} entrega o mesmo arquivo para todos os visitantes.\n\nUm site {{2}} monta a resposta na hora, geralmente consultando um {{3}} de dados.\n\nO código que roda na maquina do usuario e chamado de {{4}}-end.\n\nO codigo que roda no servidor e chamado de {{5}}-end.',
     respostas:['estático','dinâmico','banco','front','back']},

    {tipo:'texto', xp:8, titulo:'Fecho', minimo:60, linhas:4,
     enunciado:'<p>Escolha <b>um site que você usa</b> e argumente: ele é estático ou dinâmico? Cite <b>duas evidências</b> que sustentam sua resposta.</p>'}
  ]
};
