window.AULA = {
  id:'M32', unidade:'IV', etapa:'N2', data:'2026-11-13', dataTexto:'sexta, 13/11',
  titulo:'JS IV: repetição com for e while',
  resumo:'Escrever a mesma linha 100 vezes é trabalho de quem não conhece laço. Hoje o computador repete por você.',
  objetivos:[
    'Escrever um <code class="inline">for</code> com início, condição e passo',
    'Escolher entre <code class="inline">for</code> e <code class="inline">while</code>',
    'Percorrer um vetor com <code class="inline">for</code> e <code class="inline">for...of</code>',
    'Evitar laços infinitos e usar <code class="inline">break</code> / <code class="inline">continue</code>'
  ],
  blocos:[
    {tipo:'conceito', titulo:'As três partes do for',
     codigo:'for (let i = 0; i < 5; i++) {\n  console.log("volta numero " + i);\n}\n//    ^inicio    ^condicao ^passo\n\nlet n = 0;\nwhile (n < 5) {   // enquanto for verdadeiro, repete\n  console.log(n);\n  n++;            // se esquecer isso, trava o navegador\n}',
     cards:[
       {t:'Início', d:'let i = 0 — roda uma vez só, antes de tudo. Programador conta a partir do zero.'},
       {t:'Condição', d:'i < 5 — testada ANTES de cada volta. Quando der false, o laço acaba.'},
       {t:'Passo', d:'i++ — roda no FIM de cada volta. Sem ele, laço infinito.'},
       {t:'for x while', d:'Sabe quantas vezes vai repetir? for. Depende de algo acontecer? while.'},
       {t:'break', d:'Abandona o laço na hora.'},
       {t:'continue', d:'Pula só a volta atual e vai para a próxima.'}
     ],
     dicas:[{icone:'🛑', tipo:'atencao', txt:'<b>Laço infinito trava a aba.</b> Se a prévia congelar, é isso. Feche a prévia clicando em <b>↺ Recomeçar</b> e confira se você esqueceu o <code class="inline">i++</code>.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Quantas vezes este laço executa?',
     codigo:'for (let i = 1; i <= 10; i += 2) {\n  console.log(i);\n}',
     opcoes:['10','5','4','Infinitas'],
     correta:1,
     explica:'i vale 1, 3, 5, 7, 9 — cinco voltas. Em 11 a condição falha.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Monte o laço',
     enunciado:'<p>Complete cada laço para fazer o que o comentário pede.</p>',
     texto:'// contar de 1 a 10\nfor (let i = {{1}}; i <= 10; i{{2}}) { }\n\n// contagem regressiva de 10 a 1\nfor (let i = 10; i >= 1; i{{3}}) { }\n\n// so os pares de 0 a 20\nfor (let i = 0; i <= 20; i += {{4}}) { }\n\n// percorrer um vetor pelo indice\nfor (let i = 0; i < lista.{{5}}; i++) { }\n\n// percorrer um vetor pegando o valor direto\nfor (const item {{6}} lista) { }',
     respostas:['1','++','--','2','length','of']},

    {tipo:'codigo', xp:22, titulo:'Desafio 2 · Tabuada animada', linguagem:'js', abas:['js'],
     enunciado:'<p>Gere a tabuada do 7 no console e, de quebra, monte-a na página dentro do <code class="inline">&lt;ul&gt;</code>.</p>',
     requisitos:[
       'Um <code class="inline">for</code> de 1 a 10',
       'Um <code class="inline">console.log</code> com template string dentro do laço',
       'Criar um <code class="inline">&lt;li&gt;</code> por volta e colocá-lo na lista',
       'Usar <code class="inline">innerHTML +=</code> ou <code class="inline">appendChild</code>'
     ],
     pista:'<code class="inline">lista.innerHTML += `&lt;li&gt;7 x ${i} = ${7*i}&lt;/li&gt;`;</code>',
     contexto:'<h3>Tabuada do 7</h3>\n<ul id="lista"></ul>',
     base:{js:'const lista = document.getElementById("lista");\nconst num = 7;\n\n// seu for aqui\n'},
     checks:[
       {re:'for\\s*\\(', msg:'Usou for'},
       {re:'i\\s*<=?\\s*10', msg:'Vai até 10'},
       {re:'console\\.log', msg:'Mostrou no console'},
       {re:'(innerHTML|appendChild)', msg:'Escreveu na página'},
       {re:'<li[^>]*>|createElement\\s*\\(\\s*["\\\']li', msg:'Criou itens de lista'}
     ]},

    {tipo:'quiz', xp:12, titulo:'for ou while?',
     pergunta:'Qual situação pede <code class="inline">while</code> em vez de <code class="inline">for</code>?',
     opcoes:[
       'Imprimir os 20 primeiros números',
       'Percorrer as 5 notas de um aluno',
       'Continuar pedindo a senha até o usuário acertar',
       'Montar uma tabela de 12 linhas'
     ],
     correta:2,
     explica:'Você não sabe quantas tentativas o usuário vai precisar — a repetição depende de um evento, não de uma contagem.'},

    {tipo:'codigo', xp:26, titulo:'Desafio 3 · Estatísticas da turma', linguagem:'js', abas:['js'],
     enunciado:'<p>Dado o vetor de notas, calcule <b>média, maior nota, menor nota e quantos foram aprovados</b> (≥ 6). Tudo com laço — nada de função pronta.</p>',
     requisitos:[
       'Percorrer o vetor com um laço',
       'Acumular a soma para calcular a média',
       'Descobrir a maior nota comparando dentro do laço',
       'Descobrir a menor nota',
       'Contar os aprovados com um <code class="inline">if</code> dentro do laço',
       'Mostrar os quatro resultados no console'
     ],
     contexto:'<h3>Estatísticas da turma</h3><p class="mudo">Resultados no console.</p>',
     base:{js:'const notas = [7.5, 4.0, 9.2, 6.1, 5.5, 8.8, 10, 3.4, 6.0, 7.7];\n\nlet soma = 0;\nlet maior = notas[0];\nlet menor = notas[0];\nlet aprovados = 0;\n\n// percorra o vetor aqui\n\n\n// mostre os resultados\n'},
     checks:[
       {re:'for\\s*\\(', msg:'Usou um laço'},
       {re:'soma\\s*\\+=|soma\\s*=\\s*soma\\s*\\+', msg:'Acumulou a soma'},
       {re:'>\\s*maior|maior\\s*<', msg:'Comparou para achar a maior'},
       {re:'<\\s*menor|menor\\s*>', msg:'Comparou para achar a menor'},
       {re:'aprovados\\s*(\\+\\+|\\+=)', msg:'Contou os aprovados'},
       {re:'soma\\s*/\\s*notas\\.length|soma\\s*/\\s*10', msg:'Calculou a média'},
       {re:'console\\.log[\\s\\S]*console\\.log[\\s\\S]*console\\.log[\\s\\S]*console\\.log', msg:'Mostrou os quatro resultados'}
     ],
     parabens:'Esse é o coração de qualquer relatório: percorrer, acumular, comparar, contar.'},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · FizzBuzz da turma', linguagem:'js', abas:['js'],
     enunciado:'<p>Clássico das entrevistas de emprego. De 1 a 30: múltiplo de 3 → escreva <b>WEB</b>; múltiplo de 5 → <b>IFCE</b>; múltiplo dos dois → <b>WEBIFCE</b>; senão, o próprio número.</p>',
     requisitos:[
       'Um <code class="inline">for</code> de 1 a 30',
       'Usar <code class="inline">%</code> para testar múltiplos',
       'Testar o caso dos DOIS múltiplos <b>primeiro</b>',
       'Mostrar cada resultado no console'
     ],
     contexto:'<h3>FizzBuzz</h3><p class="mudo">Saída no console.</p>',
     base:{js:'for (let i = 1; i <= 30; i++) {\n  // seu codigo\n\n}'},
     checks:[
       {re:'%\\s*3', msg:'Testou múltiplo de 3'},
       {re:'%\\s*5', msg:'Testou múltiplo de 5'},
       {re:'%\\s*3[^)]*===?\\s*0\\s*&&|&&[^)]*%\\s*5', msg:'Testou os dois juntos com &&'},
       {re:'else', msg:'Tratou o caso padrão'},
       {re:'console\\.log', msg:'Mostrou o resultado'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:30, linhas:3,
     enunciado:'<p>O que acontece se você esquecer o <code class="inline">i++</code> num <code class="inline">while</code>? Por quê?</p>'}
  ]
};
