window.AULA = {
  id:'M34', unidade:'IV', etapa:'N2', data:'2026-12-04', dataTexto:'sexta, 04/12',
  titulo:'JS VI: objetos, vetores e o DOM',
  resumo:'A última peça: guardar muitos dados de forma organizada e fazer a página inteira reagir a eles.',
  objetivos:[
    'Criar e ler objetos com propriedades',
    'Trabalhar com vetores e seus métodos principais',
    'Combinar vetor de objetos — a estrutura de todo app real',
    'Alterar a página com <code class="inline">querySelector</code>, <code class="inline">innerHTML</code> e eventos'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Objeto, vetor e os dois juntos',
     codigo:'// objeto: dados COM NOME\nconst aluno = { nome: "Ana", turma: "1A", xp: 940 };\nconsole.log(aluno.nome);      // Ana\naluno.xp = 1000;              // muda\n\n// vetor: dados EM ORDEM\nconst notas = [7, 8.5, 6];\nconsole.log(notas[0]);        // 7  (comeca no zero!)\nnotas.push(9);                // adiciona no fim\n\n// vetor de objetos: o formato de TODO app real\nconst turma = [\n  { nome: "Ana",   xp: 940 },\n  { nome: "Bruno", xp: 780 }\n];\nconsole.log(turma[1].nome);   // Bruno',
     cards:[
       {t:'push / pop', d:'push adiciona no fim, pop remove do fim.'},
       {t:'length', d:'Quantidade de itens. O último índice é sempre length - 1.'},
       {t:'filter', d:'Devolve um NOVO vetor só com quem passa no teste: turma.filter(a => a.xp > 800)'},
       {t:'map', d:'Transforma cada item: notas.map(n => n * 10)'},
       {t:'querySelector', d:'Acha um elemento pelo seletor CSS: document.querySelector(".card")'},
       {t:'addEventListener', d:'Liga uma ação a um evento: botao.addEventListener("click", funcao)'}
     ],
     dicas:[{icone:'🧩', txt:'<b>DOM</b> é a página vista como objeto. Tudo que você fez em HTML está lá, e o JavaScript pode ler e mudar qualquer parte em tempo real.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'O que imprime?',
     codigo:'const cores = ["azul", "verde", "rosa"];\nconsole.log(cores[cores.length - 1]);',
     opcoes:['azul','verde','rosa','undefined'],
     correta:2,
     explica:'length é 3, então o último índice é 2 — "rosa". Usar <code class="inline">cores[3]</code> daria undefined.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Manipulando dados',
     enunciado:'<p>Complete os comandos.</p>',
     texto:'const aluno = { nome: "Ana", xp: 940 };\n\n// ler o xp\nconsole.log(aluno.{{1}});\n\n// adicionar uma propriedade nova\naluno.{{2}} = "1A";\n\nconst xps = [940, 780, 1120];\n\n// adicionar 650 no fim\nxps.{{3}}(650);\n\n// quantos itens tem\nconsole.log(xps.{{4}});\n\n// so os maiores que 800\nconst top = xps.{{5}}(x => x > 800);\n\n// pegar o elemento com id="painel"\nconst p = document.{{6}}("painel");',
     respostas:['xp','turma','push','length','filter','getElementById']},

    {tipo:'codigo', xp:24, titulo:'Desafio 2 · Ranking da turma', linguagem:'js', abas:['js'],
     enunciado:'<p>A partir do vetor de objetos, monte o ranking <b>na página</b>, do maior XP para o menor.</p>',
     requisitos:[
       'Ordenar o vetor com <code class="inline">sort</code>',
       'Percorrer o vetor com um laço ou <code class="inline">forEach</code>',
       'Montar um <code class="inline">&lt;li&gt;</code> por aluno com nome e XP',
       'Colocar tudo dentro de <code class="inline">#ranking</code>',
       'Mostrar a posição (1º, 2º, 3º…)'
     ],
     pista:'<code class="inline">turma.sort((a, b) => b.xp - a.xp)</code> ordena do maior para o menor.',
     contexto:'<h3>🏆 Ranking</h3>\n<ol id="ranking"></ol>',
     base:{js:'const turma = [\n  { nome: "Ana",   xp: 940 },\n  { nome: "Bruno", xp: 1180 },\n  { nome: "Carla", xp: 760 },\n  { nome: "Diego", xp: 1020 },\n  { nome: "Elis",  xp: 890 }\n];\n\nconst lista = document.getElementById("ranking");\n\n// seu codigo\n'},
     checks:[
       {re:'\\.sort\\s*\\(', msg:'Ordenou o vetor'},
       {re:'b\\.xp\\s*-\\s*a\\.xp|a\\.xp\\s*-\\s*b\\.xp', msg:'Comparou pelo XP'},
       {re:'(forEach|for\\s*\\()', msg:'Percorreu o vetor'},
       {re:'\\.nome', msg:'Leu o nome de cada objeto'},
       {re:'\\.xp', msg:'Leu o XP de cada objeto'},
       {re:'(innerHTML|appendChild)', msg:'Escreveu na página'}
     ]},

    {tipo:'parear', xp:12, titulo:'Desafio 3 · Métodos do DOM',
     enunciado:'<p>Ligue cada comando ao que ele faz.</p>',
     pares:[
       {a:'<code class="inline">document.getElementById("x")</code>', b:'Pega o elemento com id="x"'},
       {a:'<code class="inline">document.querySelector(".card")</code>', b:'Pega o PRIMEIRO elemento com a classe card'},
       {a:'<code class="inline">document.querySelectorAll("li")</code>', b:'Pega TODOS os itens de lista'},
       {a:'<code class="inline">el.textContent = "oi"</code>', b:'Troca o texto do elemento'},
       {a:'<code class="inline">el.classList.add("ativo")</code>', b:'Adiciona uma classe CSS ao elemento'},
       {a:'<code class="inline">el.addEventListener("click", f)</code>', b:'Executa a função f quando clicarem'}
     ]},

    {tipo:'codigo', xp:28, titulo:'Desafio 4 · Lista de tarefas de verdade', linguagem:'js', abas:['js'],
     enunciado:'<p>Missão final da unidade: uma lista de tarefas funcional. Digite, clique em Adicionar, e a tarefa aparece. Clique nela para riscar.</p>',
     requisitos:[
       'Guardar as tarefas num <b>vetor</b>',
       'O botão Adicionar coloca o texto no vetor com <code class="inline">push</code>',
       'Uma função que redesenha a lista inteira a partir do vetor',
       'Clicar numa tarefa risca ela (<code class="inline">text-decoration: line-through</code>)',
       'Não deixar adicionar tarefa vazia',
       'Mostrar quantas tarefas existem'
     ],
     pista:'Sempre que o vetor mudar, chame de novo a função que desenha. É assim que funcionam React, Vue e todos os frameworks modernos.',
     contexto:'<h3>Minhas tarefas</h3>\n<input id="txt" placeholder="Nova tarefa..." size="26">\n<button id="add">Adicionar</button>\n<p id="contador"></p>\n<ul id="lista"></ul>',
     base:{js:'const tarefas = [];\n\nconst txt      = document.getElementById("txt");\nconst lista    = document.getElementById("lista");\nconst contador = document.getElementById("contador");\n\nfunction desenhar() {\n  // 1) limpar a lista\n  // 2) percorrer o vetor e criar um <li> para cada tarefa\n  // 3) atualizar o contador\n\n}\n\ndocument.getElementById("add").onclick = function () {\n  // 4) validar e adicionar\n\n};\n\ndesenhar();'},
     checks:[
       {re:'tarefas\\.push\\s*\\(', msg:'Adicionou no vetor com push'},
       {re:'lista\\.innerHTML\\s*=\\s*["\\\'`]{2}|innerHTML\\s*=\\s*""', msg:'Limpou a lista antes de redesenhar'},
       {re:'(forEach|for\\s*\\()', msg:'Percorreu o vetor'},
       {re:'(onclick|addEventListener)[\\s\\S]*(onclick|addEventListener)', msg:'Tratou mais de um evento'},
       {re:'line-through', msg:'Riscou a tarefa concluída'},
       {re:'(trim\\s*\\(\\s*\\)|length\\s*===?\\s*0|!\\s*txt\\.value)', msg:'Impediu tarefa vazia'},
       {re:'contador\\.(textContent|innerHTML)', msg:'Atualizou o contador'},
       {re:'desenhar\\s*\\([\\s\\S]*desenhar\\s*\\(', msg:'Chamou desenhar() de novo após mudar o vetor'}
     ],
     parabens:'Você acabou de construir, do zero, o "Hello World" de todo framework moderno. Isso é front-end de verdade.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:40, linhas:3,
     enunciado:'<p>Se você fosse continuar essa lista de tarefas, <b>qual seria a próxima funcionalidade</b> que você adicionaria? Como você faria?</p>'}
  ]
};
