window.AULA = {
  id:'M33', unidade:'IV', etapa:'N2', data:'2026-11-27', dataTexto:'sexta, 27/11',
  titulo:'JS V: funções — empacotando o que se repete',
  resumo:'Copiar e colar código é dívida. Função é o jeito de escrever uma vez e usar em todo lugar.',
  objetivos:[
    'Declarar funções com parâmetros e <code class="inline">return</code>',
    'Diferenciar parâmetro de argumento',
    'Escrever arrow functions',
    'Entender escopo: o que existe dentro e fora da função'
  ],
  blocos:[
    {tipo:'conceito', titulo:'A máquina de fazer coisa',
     texto:'Função é uma máquina: entra alguma coisa (<b>parâmetros</b>), acontece um processo, sai um resultado (<b>return</b>). Enquanto você não <i>chamar</i> a função, nada acontece.',
     codigo:'// declaracao\nfunction calcularMedia(a, b, c) {   // a, b, c sao PARAMETROS\n  const media = (a + b + c) / 3;\n  return media;                     // devolve o resultado\n}\n\n// chamada\nconst m = calcularMedia(7, 8, 9);   // 7, 8, 9 sao ARGUMENTOS\nconsole.log(m);                     // 8\n\n// arrow function (versao moderna e curta)\nconst dobro = (n) => n * 2;',
     cards:[
       {t:'return encerra', d:'Qualquer linha depois do return dentro da função não roda.'},
       {t:'Sem return', d:'A função devolve undefined. Isso é normal quando ela só faz algo (ex.: pintar a tela).'},
       {t:'Escopo local', d:'Variáveis criadas DENTRO da função só existem lá. Fora dela, dá erro.'},
       {t:'Valor padrão', d:'function oi(nome = "visitante") — se ninguém passar nome, usa "visitante".'},
       {t:'Arrow function', d:'const f = (a, b) => a + b; — quando é uma linha só, o return é implícito.'},
       {t:'Nome importa', d:'calcularMedia diz o que faz. func1 não diz nada. Nome bom é documentação grátis.'}
     ],
     dicas:[{icone:'🔁', txt:'<b>Sinal de que falta uma função:</b> você copiou e colou o mesmo trecho com pequenas mudanças. Aquelas mudanças são os parâmetros.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'O que é impresso?',
     codigo:'function soma(a, b) {\n  return a + b;\n  console.log("somei!");\n}\nconsole.log(soma(2, 3));',
     opcoes:['"somei!" e depois 5','Só 5','Só "somei!"','undefined'],
     correta:1,
     explica:'O <code class="inline">return</code> encerra a função na hora — a linha do console.log nunca é alcançada.'},

    {tipo:'quiz', xp:10, titulo:'Escopo',
     pergunta:'O que acontece na última linha?',
     codigo:'function contar() {\n  let total = 10;\n  return total;\n}\ncontar();\nconsole.log(total);',
     opcoes:['Imprime 10','Imprime undefined','Erro: total is not defined','Imprime null'],
     correta:2,
     explica:'<code class="inline">total</code> nasce e morre dentro da função. Para usar fora, guarde o retorno: <code class="inline">const t = contar();</code>'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Anatomia',
     enunciado:'<p>Complete as partes da função.</p>',
     texto:'// declarar\n{{1}} saudacao(nome) {\n  {{2}} "Ola, " + nome + "!";\n}\n\n// chamar e guardar\nconst frase = {{3}}("Ana");\n\n// valor padrao para quando nao passam nada\nfunction saudacao2(nome {{4}} "visitante") { }\n\n// versao arrow de uma linha\nconst triplo = (n) {{5}} n * 3;\n\n// quantos parametros tem esta funcao?  answer: numero\nfunction area(base, altura) { return base * altura; }\n// resposta: {{6}}',
     respostas:['function','return','saudacao','=','=>','2']},

    {tipo:'codigo', xp:24, titulo:'Desafio 2 · Caixa de ferramentas', linguagem:'js', abas:['js'],
     enunciado:'<p>Escreva quatro funções pequenas e teste todas no console.</p>',
     requisitos:[
       '<code class="inline">celsiusParaFahrenheit(c)</code> → c × 9/5 + 32',
       '<code class="inline">ehPar(n)</code> → devolve true ou false',
       '<code class="inline">maiorDeTres(a,b,c)</code> → devolve o maior',
       '<code class="inline">inverter(texto)</code> → devolve o texto de trás para frente',
       'Pelo menos uma delas escrita como <b>arrow function</b>',
       'Um <code class="inline">console.log</code> testando cada uma'
     ],
     pista:'Inverter: <code class="inline">texto.split("").reverse().join("")</code>',
     contexto:'<h3>Caixa de ferramentas</h3><p class="mudo">Saída no console.</p>',
     base:{js:'// 1)\n\n\n// 2)\n\n\n// 3)\n\n\n// 4)\n\n\n// testes\n'},
     checks:[
       {re:'celsiusParaFahrenheit', msg:'Criou celsiusParaFahrenheit'},
       {re:'\\*\\s*9\\s*/\\s*5|9\\s*/\\s*5\\s*\\*|1\\.8', msg:'Fez a conta da conversão'},
       {re:'ehPar', msg:'Criou ehPar'},
       {re:'maiorDeTres', msg:'Criou maiorDeTres'},
       {re:'inverter', msg:'Criou inverter'},
       {re:'=>', msg:'Usou pelo menos uma arrow function'},
       {re:'console\\.log[\\s\\S]*console\\.log[\\s\\S]*console\\.log[\\s\\S]*console\\.log', msg:'Testou as quatro'}
     ]},

    {tipo:'ordenar', xp:12, titulo:'Desafio 3 · O que roda primeiro',
     enunciado:'<p>Ordene a sequência de execução deste programa.</p>',
     itens:[
       'A função é declarada (mas nada roda ainda)',
       'O programa chega na linha da chamada',
       'Os argumentos viram parâmetros dentro da função',
       'O corpo da função executa linha a linha',
       'O return devolve o valor',
       'O valor devolvido é guardado na variável'
     ]},

    {tipo:'codigo', xp:26, titulo:'Desafio 4 · Refatore este código', linguagem:'js', abas:['js'],
     enunciado:'<p>O código abaixo funciona, mas repete a mesma lógica 3 vezes. <b>Reescreva usando uma função só</b> e chame três vezes. O resultado no console deve ser idêntico.</p>',
     requisitos:[
       'Criar uma função que receba nome e as notas',
       'A função deve <code class="inline">return</code> a situação (Aprovado / Recuperação / Reprovado)',
       'Chamar a função três vezes',
       'Nenhum <code class="inline">if</code> repetido fora da função',
       'Deixar o código com menos linhas que o original'
     ],
     contexto:'<h3>Refatoração</h3><p class="mudo">Compare a saída antes e depois.</p>',
     base:{js:'/* ORIGINAL — repetitivo, apague e reescreva com funcao\n\nconst m1 = (7 + 8 + 6) / 3;\nif (m1 >= 6) console.log("Ana: Aprovado");\nelse if (m1 >= 4) console.log("Ana: Recuperacao");\nelse console.log("Ana: Reprovado");\n\nconst m2 = (3 + 5 + 4) / 3;\nif (m2 >= 6) console.log("Bruno: Aprovado");\nelse if (m2 >= 4) console.log("Bruno: Recuperacao");\nelse console.log("Bruno: Reprovado");\n\nconst m3 = (2 + 1 + 3) / 3;\nif (m3 >= 6) console.log("Carla: Aprovado");\nelse if (m3 >= 4) console.log("Carla: Recuperacao");\nelse console.log("Carla: Reprovado");\n\n*/\n\n// SUA VERSAO:\n'},
     checks:[
       {re:'function\\s+\\w+\\s*\\(|const\\s+\\w+\\s*=\\s*\\(', msg:'Criou uma função'},
       {re:'return', msg:'A função devolve a situação'},
       {re:'else\\s+if', msg:'Manteve a regra de três faixas'},
       {re:'\\w+\\s*\\([\\s\\S]{0,120}\\)[\\s\\S]*\\w+\\s*\\([\\s\\S]{0,120}\\)[\\s\\S]*\\w+\\s*\\(', msg:'Chamou a função três vezes'},
       {re:'console\\.log', msg:'Imprimiu os resultados'},
       {re:'if[\\s\\S]*if[\\s\\S]*if[\\s\\S]*if[\\s\\S]*if[\\s\\S]*if', negar:true, msg:'Não repetiu a cadeia de ifs várias vezes'}
     ],
     parabens:'Isso se chama refatorar. É metade do trabalho de um programador profissional.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Quantas linhas o seu código refatorado tem a menos que o original? O que ficou <b>mais fácil de mudar</b> agora?</p>'}
  ]
};
