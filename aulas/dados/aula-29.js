window.AULA = {
  id:'M29', unidade:'IV', etapa:'N2', data:'2026-10-23', dataTexto:'sexta, 23/10',
  titulo:'JS I: primeiros comandos, variáveis e tipos',
  resumo:'HTML é o esqueleto, CSS é a roupa, JavaScript é o cérebro. Hoje a página começa a pensar.',
  objetivos:[
    'Escrever e rodar JavaScript no navegador',
    'Criar variáveis com <code class="inline">let</code> e <code class="inline">const</code>',
    'Reconhecer os tipos: number, string, boolean, null, undefined',
    'Ler e mostrar informação com <code class="inline">prompt</code>, <code class="inline">alert</code> e <code class="inline">console.log</code>'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Três formas de falar com o usuário',
     texto:'Antes de qualquer coisa: abra o console do navegador com <b>F12</b>. É onde o JavaScript conversa com você. Aqui na missão, a caixinha embaixo da prévia faz o mesmo papel.',
     codigo:'console.log("aparece no console");   // para o programador\nalert("aparece numa janelinha");     // para o usuario\nconst nome = prompt("Seu nome?");    // pergunta e guarda a resposta',
     cards:[
       {t:'let', d:'Cria uma variável que PODE mudar depois. let pontos = 0; pontos = 10;'},
       {t:'const', d:'Cria uma variável que NÃO muda. Use sempre que puder — evita bug bobo.'},
       {t:'number', d:'42, 3.14, -7. Não existe int e float separados: é tudo number.'},
       {t:'string', d:'Texto entre aspas: "oi", \'oi\' ou `oi`. As crases permitem colar variáveis dentro.'},
       {t:'boolean', d:'Só dois valores: true ou false. É a base de toda decisão.'},
       {t:'undefined x null', d:'undefined = ainda não recebeu valor. null = está vazio de propósito.'}
     ],
     dicas:[{icone:'⚠️', tipo:'atencao', txt:'<b>prompt sempre devolve texto.</b> Se o usuário digitar 5, você recebe a string <code class="inline">"5"</code>, não o número 5. Para converter: <code class="inline">Number(resposta)</code>.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'O que aparece no console?',
     codigo:'const a = "5";\nconst b = 3;\nconsole.log(a + b);',
     opcoes:['8','53','"53" com aspas','Erro'],
     correta:1,
     explica:'Com um texto de um lado, o <code class="inline">+</code> vira <b>concatenação</b>: gruda os dois. Para somar de verdade: <code class="inline">Number(a) + b</code>.'},

    {tipo:'parear', xp:12, titulo:'Desafio 1 · Que tipo é isso?',
     enunciado:'<p>Ligue cada valor ao seu tipo em JavaScript.</p>',
     pares:[
       {a:'<code class="inline">42</code>', b:'number'},
       {a:'<code class="inline">"42"</code>', b:'string'},
       {a:'<code class="inline">true</code>', b:'boolean'},
       {a:'<code class="inline">null</code>', b:'null (vazio de propósito)'},
       {a:'<code class="inline">let x;</code> → x vale', b:'undefined'},
       {a:'<code class="inline">[1, 2, 3]</code>', b:'object (um vetor)'}
     ]},

    {tipo:'lacuna', xp:14, titulo:'Desafio 2 · Declarando certo',
     enunciado:'<p>Complete com <code class="inline">let</code>, <code class="inline">const</code> ou a função pedida.</p>',
     texto:'// nao vai mudar nunca\n{{1}} PI = 3.14159;\n\n// o placar muda a cada jogada\n{{2}} pontos = 0;\npontos = pontos + 10;\n\n// perguntar a idade e converter para numero\nconst texto = {{3}}("Qual sua idade?");\nconst idade = {{4}}(texto);\n\n// descobrir o tipo de uma variavel\nconsole.log({{5}} idade);',
     respostas:['const','let','prompt','Number','typeof']},

    {tipo:'codigo', xp:22, titulo:'Desafio 3 · Cartão de apresentação', linguagem:'js', abas:['js'],
     enunciado:'<p>Crie variáveis com seus dados e mostre tudo no console usando <b>template string</b> (as crases).</p>',
     requisitos:[
       'Uma <code class="inline">const</code> com seu nome',
       'Um <code class="inline">let</code> com sua idade (number)',
       'Uma <code class="inline">const</code> com a turma',
       'Um <code class="inline">console.log</code> usando crases e <code class="inline">${}</code>',
       'Um <code class="inline">console.log(typeof ...)</code> mostrando o tipo de alguma variável'
     ],
     pista:'Template string: <code class="inline">console.log(`Oi, eu sou ${nome} e tenho ${idade} anos`);</code>',
     contexto:'<p>Abra a caixa de console abaixo da prévia para ver a saída.</p>',
     base:{js:'// 1) seus dados\n\n\n// 2) uma frase montada com crases\n\n\n// 3) o tipo de uma variavel\n'},
     checks:[
       {re:'const\\s+\\w+\\s*=\\s*["\\\'`]', msg:'Uma const com texto'},
       {re:'let\\s+\\w+\\s*=\\s*\\d', msg:'Um let com número'},
       {re:'console\\.log\\s*\\(\\s*`', msg:'console.log com crases'},
       {re:'\\$\\{\\s*\\w+', msg:'Interpolou uma variável com ${}'},
       {re:'typeof', msg:'Usou typeof'}
     ]},

    {tipo:'codigo', xp:24, titulo:'Desafio 4 · Calculadora de mesada', linguagem:'js', abas:['js'],
     enunciado:'<p>Some quanto você gasta por semana e mostre o total do mês. Sem <code class="inline">if</code> ainda — só contas.</p>',
     requisitos:[
       'Pelo menos 3 variáveis de gasto (números)',
       'Uma variável com o <b>total da semana</b> calculado a partir delas',
       'Uma variável com o <b>total do mês</b> (semana × 4)',
       'Mostrar os dois totais no console com template string',
       'Usar <code class="inline">toFixed(2)</code> para formatar com 2 casas'
     ],
     contexto:'<h3>Calculadora de mesada</h3><p class="mudo">Resultado aparece no console.</p>',
     base:{js:'// gastos da semana (em reais)\nconst lanche  = 25;\nconst transporte = 18;\n// adicione mais um gasto\n\n\n// totais\n\n\n// saida\n'},
     checks:[
       {re:'const\\s+\\w+\\s*=\\s*\\d[\\s\\S]*const\\s+\\w+\\s*=\\s*\\d[\\s\\S]*(const|let)\\s+\\w+\\s*=\\s*\\d', msg:'Pelo menos 3 gastos'},
       {re:'\\w+\\s*\\+\\s*\\w+\\s*\\+\\s*\\w+', msg:'Somou os gastos'},
       {re:'\\*\\s*4', msg:'Multiplicou por 4 para o mês'},
       {re:'toFixed\\s*\\(\\s*2\\s*\\)', msg:'Formatou com toFixed(2)'},
       {re:'console\\.log[\\s\\S]*console\\.log', msg:'Mostrou os dois totais'}
     ],
     parabens:'Você acabou de escrever seu primeiro programa útil.'},

    {tipo:'quiz', xp:10, titulo:'Pegadinha do const',
     pergunta:'O que acontece ao rodar este código?',
     codigo:'const time = "Ceará";\ntime = "Fortaleza";\nconsole.log(time);',
     opcoes:['Mostra "Fortaleza"','Mostra "Ceará"','Dá erro: Assignment to constant variable','Mostra undefined'],
     correta:2,
     explica:'<code class="inline">const</code> não aceita nova atribuição. Se o valor vai mudar, use <code class="inline">let</code>.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Descreva uma coisa que um site que você usa faz e que <b>só é possível com JavaScript</b> (não daria com HTML e CSS sozinhos).</p>'}
  ]
};
