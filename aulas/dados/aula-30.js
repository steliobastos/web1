window.AULA = {
  id:'M30', unidade:'IV', etapa:'N2', data:'2026-10-30', dataTexto:'sexta, 30/10',
  titulo:'JS II: expressões, operadores e comandos',
  resumo:'Contas, comparações e a diferença entre = , == e === . É aqui que a maioria dos bugs de iniciante nasce — e morre.',
  objetivos:[
    'Usar operadores aritméticos, incluindo <code class="inline">%</code> e <code class="inline">**</code>',
    'Comparar valores com <code class="inline">===</code> e entender por que evitar <code class="inline">==</code>',
    'Combinar condições com <code class="inline">&&</code>, <code class="inline">||</code> e <code class="inline">!</code>',
    'Converter texto em número e vice-versa'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Os três iguais',
     texto:'Esse é o campeão de confusão. Decore agora e economize horas de depuração no futuro.',
     tabela:{cab:['Símbolo','Nome','O que faz'], linhas:[
       ['<code class="inline">=</code>','atribuição','<b>Guarda</b> um valor: <code class="inline">let x = 5</code>'],
       ['<code class="inline">==</code>','igualdade frouxa','Compara <b>convertendo</b> tipos: <code class="inline">"5" == 5</code> é <b>true</b>'],
       ['<code class="inline">===</code>','igualdade estrita','Compara valor <b>e</b> tipo: <code class="inline">"5" === 5</code> é <b>false</b>']
     ]},
     cards:[
       {t:'% (resto)', d:'10 % 3 → 1. Serve para descobrir se um número é par: n % 2 === 0.'},
       {t:'** (potência)', d:'2 ** 10 → 1024.'},
       {t:'+= -= *= ', d:'pontos += 10 é o mesmo que pontos = pontos + 10.'},
       {t:'++ e --', d:'contador++ soma 1. Muito usado dentro de repetições.'},
       {t:'&& (E)', d:'true só se AS DUAS condições forem verdadeiras.'},
       {t:'|| (OU)', d:'true se PELO MENOS UMA for verdadeira.'}
     ],
     dicas:[{icone:'✅', txt:'<b>Regra prática:</b> use sempre <code class="inline">===</code>. Se você precisou do <code class="inline">==</code>, provavelmente o problema é que faltou converter o tipo antes.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Qual o resultado?',
     codigo:'console.log(17 % 5);',
     opcoes:['3','2','3.4','85'],
     correta:1,
     explica:'17 dividido por 5 dá 3 e sobra <b>2</b>. O <code class="inline">%</code> devolve o resto.'},

    {tipo:'quiz', xp:12, titulo:'== ou === ?',
     pergunta:'Quais dessas comparações resultam em <code class="inline">true</code>? Marque a alternativa que descreve corretamente.',
     codigo:'"10" == 10\n"10" === 10\n0 == false\n0 === false',
     opcoes:['Só a primeira','Primeira e terceira','Todas as quatro','Nenhuma'],
     correta:1,
     explica:'<code class="inline">==</code> converte antes de comparar, então <code class="inline">"10"==10</code> e <code class="inline">0==false</code> dão true. Com <code class="inline">===</code> os tipos são diferentes, então dá false.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Escolha o operador',
     enunciado:'<p>Preencha com o operador correto.</p>',
     texto:'// somar 5 ao placar de forma curta\nplacar {{1}} 5;\n\n// verificar se o numero e par\nif (n {{2}} 2 === 0) { }\n\n// idade entre 12 e 17 (as DUAS precisam valer)\nif (idade >= 12 {{3}} idade <= 17) { }\n\n// sabado OU domingo\nif (dia === "sab" {{4}} dia === "dom") { }\n\n// o contrario de logado\nif ({{5}}logado) { }\n\n// 2 elevado a 8\nconst v = 2 {{6}} 8;',
     respostas:['+=','%','&&','||','!','**']},

    {tipo:'codigo', xp:24, titulo:'Desafio 2 · Conversor de notas', linguagem:'js', abas:['js'],
     enunciado:'<p>Calcule a média de 4 notas e diga <b>quantos pontos faltam para 6,0</b>. Só operadores — nada de <code class="inline">if</code> ainda.</p>',
     requisitos:[
       'As 4 notas em variáveis',
       'A média calculada com <code class="inline">/ 4</code>',
       'Quanto falta para 6 (pode dar negativo, tudo bem)',
       'Média formatada com <code class="inline">toFixed(1)</code>',
       'Um <code class="inline">console.log</code> com template string'
     ],
     contexto:'<h3>Fechamento de nota</h3><p class="mudo">Veja o resultado no console abaixo.</p>',
     base:{js:'const n1 = 7.5;\nconst n2 = 5.0;\nconst n3 = 8.2;\nconst n4 = 6.4;\n\n// media\n\n\n// quanto falta para 6.0\n\n\n// saida\n'},
     checks:[
       {re:'\\(\\s*n1\\s*\\+\\s*n2\\s*\\+\\s*n3\\s*\\+\\s*n4\\s*\\)\\s*/\\s*4|n1\\s*\\+\\s*n2\\s*\\+\\s*n3\\s*\\+\\s*n4\\s*\\)\\s*/', msg:'Somou as quatro e dividiu por 4'},
       {re:'6\\s*-\\s*\\w+|\\w+\\s*-\\s*6', msg:'Calculou a diferença para 6,0'},
       {re:'toFixed\\s*\\(\\s*1\\s*\\)', msg:'Formatou com uma casa decimal'},
       {re:'console\\.log\\s*\\(\\s*`', msg:'Usou template string'},
       {re:'\\$\\{', msg:'Interpolou variáveis'}
     ]},

    {tipo:'ordenar', xp:12, titulo:'Desafio 3 · Precedência',
     enunciado:'<p>O JavaScript resolve as operações numa ordem. Ordene da <b>primeira a ser resolvida</b> até a última.</p>',
     itens:['( ) — parênteses','** — potência','* / % — multiplicação, divisão, resto','+ - — soma e subtração','< > <= >= — comparações','=== !== — igualdade','&& — E lógico','|| — OU lógico']},

    {tipo:'codigo', xp:24, titulo:'Desafio 4 · Validador de senha (sem if)', linguagem:'js', abas:['js'],
     enunciado:'<p>Use só operadores lógicos para produzir um <code class="inline">true</code>/<code class="inline">false</code> dizendo se a senha é forte.</p>',
     requisitos:[
       'Uma condição para o tamanho mínimo (<code class="inline">.length >= 8</code>)',
       'Uma condição verificando se tem número (<code class="inline">/\\d/.test(senha)</code>)',
       'Uma condição verificando se tem letra maiúscula',
       'Combinar as três com <code class="inline">&&</code> numa variável <code class="inline">forte</code>',
       'Mostrar cada teste e o resultado final no console'
     ],
     pista:'<code class="inline">const temNumero = /[0-9]/.test(senha);</code> e <code class="inline">const temMaiuscula = /[A-Z]/.test(senha);</code>',
     contexto:'<h3>Validador de senha</h3><p class="mudo">Troque o valor da variável senha e clique em Rodar.</p>',
     base:{js:'const senha = "ifce2026A";\n\n// 1) tamanho\n\n\n// 2) tem numero?\n\n\n// 3) tem maiuscula?\n\n\n// 4) juntar tudo\n\n\n// 5) mostrar\n'},
     checks:[
       {re:'\\.length\\s*>=?\\s*8', msg:'Testou o tamanho'},
       {re:'\\/\\[?0-9|\\\\d', msg:'Testou se tem número'},
       {re:'A-Z', msg:'Testou se tem maiúscula'},
       {re:'&&[\\s\\S]*&&', msg:'Combinou as três condições com &&'},
       {re:'console\\.log[\\s\\S]*console\\.log', msg:'Mostrou mais de um resultado'}
     ],
     parabens:'É exatamente assim que sites checam a força da senha enquanto você digita.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:30, linhas:3,
     enunciado:'<p>Com suas palavras: <b>por que <code class="inline">"5" == 5</code> dá true mas <code class="inline">"5" === 5</code> dá false?</b></p>'}
  ]
};
