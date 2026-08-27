window.AULA = {
  id:'M31', unidade:'IV', etapa:'N2', data:'2026-11-06', dataTexto:'sexta, 06/11',
  titulo:'JS III: decisões com if, else e switch',
  resumo:'Até agora seu código seguia sempre reto. Hoje ele aprende a escolher caminhos.',
  objetivos:[
    'Escrever <code class="inline">if</code>, <code class="inline">else if</code> e <code class="inline">else</code>',
    'Encadear condições na ordem certa',
    'Usar <code class="inline">switch</code> quando há muitos casos fixos',
    'Aplicar o operador ternário em decisões curtas'
  ],
  blocos:[
    {tipo:'conceito', titulo:'A bifurcação',
     codigo:'if (nota >= 6) {\n  console.log("Aprovado");\n} else if (nota >= 4) {\n  console.log("Recuperacao");\n} else {\n  console.log("Reprovado");\n}\n\n// versao curta (ternario)\nconst status = nota >= 6 ? "Aprovado" : "Reprovado";',
     cards:[
       {t:'A ordem importa', d:'O JS testa de cima para baixo e para na PRIMEIRA condição verdadeira. Coloque a mais restritiva primeiro.'},
       {t:'else if', d:'Encadeia quantas condições quiser. Só um bloco roda.'},
       {t:'else', d:'É o "senão" final. Não tem condição — pega tudo que sobrou.'},
       {t:'switch', d:'Quando você compara a MESMA variável com vários valores fixos. Não esqueça o break.'},
       {t:'Ternário', d:'condicao ? valorSeVerdadeiro : valorSeFalso — cabe numa linha só.'},
       {t:'Valores "falsy"', d:'0, "", null, undefined e NaN contam como false num if. Todo o resto é true.'}
     ],
     dicas:[{icone:'🪤', tipo:'atencao', txt:'<b>Armadilha clássica:</b> escrever <code class="inline">if (x = 5)</code> com um só igual. Isso ATRIBUI 5 a x e sempre dá verdadeiro. Comparar é <code class="inline">===</code>.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Com <code class="inline">nota = 8</code>, o que é impresso?',
     codigo:'if (nota >= 4) {\n  console.log("Recuperacao");\n} else if (nota >= 6) {\n  console.log("Aprovado");\n} else {\n  console.log("Reprovado");\n}',
     opcoes:['Aprovado','Recuperacao','Reprovado','Os dois primeiros'],
     correta:1,
     explica:'A ordem está errada! Como 8 já satisfaz <code class="inline">&gt;= 4</code>, o JS entra no primeiro bloco e nem testa o resto. Sempre da condição <b>mais restritiva</b> para a mais ampla.'},

    {tipo:'ordenar', xp:12, titulo:'Desafio 1 · Consertando a ordem',
     enunciado:'<p>Coloque as condições na ordem correta para classificar uma nota de 0 a 10 (Excelente ≥9, Bom ≥7, Regular ≥6, Recuperação ≥4, Reprovado abaixo disso).</p>',
     itens:['if (nota >= 9) { "Excelente" }','else if (nota >= 7) { "Bom" }','else if (nota >= 6) { "Regular" }','else if (nota >= 4) { "Recuperacao" }','else { "Reprovado" }']},

    {tipo:'lacuna', xp:14, titulo:'Desafio 2 · Complete as decisões',
     enunciado:'<p>Preencha as lacunas.</p>',
     texto:'// maior de idade?\n{{1}} (idade >= 18) {\n  console.log("Pode dirigir");\n} {{2}} {\n  console.log("Ainda nao");\n}\n\n// ternario: par ou impar\nconst tipo = n % 2 === 0 {{3}} "par" : "impar";\n\n// switch\n{{4}} (dia) {\n  case "sab":\n  case "dom":\n    console.log("Fim de semana");\n    {{5}};\n  default:\n    console.log("Dia util");\n}',
     respostas:['if','else','?','switch','break']},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Classificador de missões', linguagem:'js', abas:['js'],
     enunciado:'<p>Escreva a função que recebe o XP de um aluno e devolve a <b>patente</b>: até 40 = Iniciante, até 70 = Aprendiz, até 90 = Codificador, acima disso = Mestre do Front.</p>',
     requisitos:[
       'Um <code class="inline">if</code> com pelo menos dois <code class="inline">else if</code>',
       'Um <code class="inline">else</code> final',
       'Testar com pelo menos 4 valores diferentes',
       'Mostrar cada resultado no console'
     ],
     contexto:'<h3>Patente do aluno</h3><p class="mudo">Resultados no console.</p>',
     base:{js:'function patente(xp) {\n  // seu codigo aqui\n\n}\n\nconsole.log(30, "->", patente(30));\n// teste mais valores\n'},
     checks:[
       {re:'if\\s*\\(', msg:'Usou if'},
       {re:'else\\s+if[\\s\\S]*else\\s+if', msg:'Pelo menos dois else if'},
       {re:'else\\s*\\{', msg:'Tem else final'},
       {re:'return', msg:'A função devolve a patente com return'},
       {re:'patente\\s*\\([\\s\\S]*patente\\s*\\([\\s\\S]*patente\\s*\\([\\s\\S]*patente\\s*\\(', msg:'Testou com 4 valores'}
     ]},

    {tipo:'codigo', xp:26, titulo:'Desafio 4 · Quiz interativo', linguagem:'js', abas:['js'],
     enunciado:'<p>Agora o JavaScript encosta na página. Ao clicar em cada alternativa, o programa decide se acertou e pinta o botão.</p>',
     requisitos:[
       'Um <code class="inline">if</code> comparando a resposta escolhida com a correta',
       'Pintar de verde quando acerta (<code class="inline">style.background</code>)',
       'Pintar de rosa quando erra',
       'Escrever uma mensagem no elemento <code class="inline">#saida</code>',
       'Contar quantas tentativas foram feitas'
     ],
     pista:'<code class="inline">document.getElementById("saida").textContent = "Acertou!";</code>',
     contexto:'<h3>Qual tag cria um parágrafo?</h3>\n<button class="op" data-r="div">&lt;div&gt;</button>\n<button class="op" data-r="p">&lt;p&gt;</button>\n<button class="op" data-r="span">&lt;span&gt;</button>\n<p id="saida">Escolha uma opção.</p>',
     base:{js:'const CORRETA = "p";\nlet tentativas = 0;\n\ndocument.querySelectorAll(".op").forEach(function (botao) {\n  botao.onclick = function () {\n    const escolha = botao.dataset.r;\n    const saida = document.getElementById("saida");\n\n    // seu codigo aqui\n\n  };\n});'},
     checks:[
       {re:'if\\s*\\(\\s*escolha\\s*===\\s*CORRETA', msg:'Comparou a escolha com a resposta correta'},
       {re:'else', msg:'Tratou o caso de erro'},
       {re:'style\\.background', msg:'Mudou a cor do botão'},
       {re:'saida\\.(textContent|innerHTML)', msg:'Escreveu a mensagem na página'},
       {re:'tentativas\\s*(\\+\\+|\\+=)', msg:'Contou as tentativas'}
     ],
     parabens:'Parabéns — você acabou de construir a mecânica destas missões que você usa toda sexta.'},

    {tipo:'quiz', xp:10, titulo:'O break esquecido',
     pergunta:'O que este código imprime quando <code class="inline">nivel = "medio"</code>?',
     codigo:'switch (nivel) {\n  case "facil":\n    console.log("10 pontos");\n  case "medio":\n    console.log("20 pontos");\n  case "dificil":\n    console.log("30 pontos");\n}',
     opcoes:['Só "20 pontos"','"20 pontos" e "30 pontos"','Os três','Nada — dá erro'],
     correta:1,
     explica:'Sem <code class="inline">break</code>, o switch continua executando os casos seguintes. Isso se chama <i>fall-through</i> e é fonte de bug clássica.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Descreva uma decisão do seu dia a dia (o que vestir, que caminho pegar) como uma sequência de <code class="inline">if / else if / else</code>.</p>'}
  ]
};
