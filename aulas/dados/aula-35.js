window.AULA = {
  id:'M35', unidade:'IV', etapa:'N2', data:'2026-12-11', dataTexto:'sexta, 11/12',
  titulo:'Missão Avaliativa N2 + Projeto Final',
  avaliativa:true, semFeedback:true,
  resumo:'Última missão do ano. Vale a nota da Etapa N2 e fecha as quatro unidades do PUD.',
  aviso:'⏱️ <b>Última aula do ano letivo.</b> Responda tudo e clique em <b>Enviar minhas respostas</b>. O Projeto Final (questão 8) é o que mais vale — capriche. Fechamento do período: 15/12; provas finais de 16 a 18/12.',
  objetivos:[
    'Integrar HTML, CSS e JavaScript numa página só',
    'Demonstrar domínio de laços, funções, objetos e DOM',
    'Entregar um projeto próprio, funcionando'
  ],
  blocos:[
    {tipo:'quiz', xp:6, titulo:'Questão 1', pergunta:'Qual afirmação está correta?',
     opcoes:['HTML define a aparência, CSS a estrutura','HTML define a estrutura, CSS a aparência e JS o comportamento','CSS define o comportamento e JS a aparência','Os três fazem exatamente a mesma coisa'],
     correta:-1},

    {tipo:'quiz', xp:6, titulo:'Questão 2', pergunta:'Qual o valor final de <code class="inline">total</code>?',
     codigo:'let total = 0;\nfor (let i = 1; i <= 4; i++) {\n  total += i;\n}',
     opcoes:['4','6','10','24'], correta:-1},

    {tipo:'quiz', xp:6, titulo:'Questão 3', pergunta:'O que <code class="inline">console.log(lista[3])</code> mostra?',
     codigo:'const lista = ["a", "b", "c"];',
     opcoes:['"c"','"b"','undefined','Erro'], correta:-1},

    {tipo:'quiz', xp:6, titulo:'Questão 4', pergunta:'Qual comando pega o primeiro elemento com <code class="inline">class="titulo"</code>?',
     opcoes:['<code class="inline">document.getElementById("titulo")</code>','<code class="inline">document.querySelector(".titulo")</code>','<code class="inline">document.getClass("titulo")</code>','<code class="inline">document.find("titulo")</code>'],
     correta:-1},

    {tipo:'multi', xp:10, titulo:'Questão 5', pergunta:'Marque <b>todas</b> as afirmações corretas.',
     opcoes:[
       'Uma função sem <code class="inline">return</code> devolve <code class="inline">undefined</code>',
       'Variáveis criadas dentro de uma função existem fora dela',
       '<code class="inline">const</code> impede uma nova atribuição à variável',
       '<code class="inline">"5" === 5</code> resulta em <code class="inline">false</code>',
       'O primeiro índice de um vetor é 1'
     ],
     corretas:[]},

    {tipo:'lacuna', xp:16, titulo:'Questão 6 · O ano inteiro em 8 lacunas', semGabarito:true,
     enunciado:'<p>Complete com o que foi visto ao longo do ano.</p>',
     texto:'<!-- 1. tag que agrupa o conteudo principal da pagina (semantica) -->\n<{{1}}>...</{{1}}>\n\n/* 2. propriedade que arredonda os cantos */\n{{2}}: 12px;\n\n/* 3. valor que faz a width incluir padding e borda */\nbox-sizing: {{3}};\n\n/* 4. propriedade que alinha itens no eixo principal do flex */\n{{4}}: space-between;\n\n// 5. palavra para criar uma variavel que NAO muda\n{{5}} PI = 3.14;\n\n// 6. operador que devolve o resto da divisao\nif (n {{6}} 2 === 0) { }\n\n// 7. metodo que adiciona um item no fim de um vetor\nlista.{{7}}("novo");\n\n// 8. metodo para reagir a um clique\nbotao.{{8}}("click", funcao);',
     respostas:[]},

    {tipo:'codigo', xp:24, titulo:'Questão 7 · Integração', linguagem:'js', abas:['js'],
     enunciado:'<p>O HTML já existe. Escreva o JavaScript que faz a página funcionar como um <b>contador de presença</b>.</p>',
     requisitos:[
       'Um vetor guardando os nomes presentes',
       'O botão adiciona o nome digitado ao vetor',
       'Uma <b>função</b> que redesenha a lista a partir do vetor',
       'O total de presentes atualizado a cada adição',
       'Não aceitar nome vazio nem repetido'
     ],
     contexto:'<h3>Chamada da turma</h3>\n<input id="nome" placeholder="Nome do aluno" size="24">\n<button id="marcar">Marcar presença</button>\n<p id="total"></p>\n<ol id="presentes"></ol>',
     base:{js:'const presentes = [];\n\n// seu codigo\n'},
     checks:[{re:'(?!)',msg:'Adicionou ao vetor'},{re:'(?!)',msg:'Criou uma função de desenho'},{re:'(?!)',msg:'Percorreu o vetor'},{re:'(?!)',msg:'Escreveu na página'},{re:'(?!)',msg:'Mostrou o total'},{re:'(?!)',msg:'Validou nome vazio'},{re:'(?!)',msg:'Verificou nome repetido'}]},

    {tipo:'codigo', xp:36, titulo:'Questão 8 ★ PROJETO FINAL', linguagem:'html', abas:['html','css','js'],
     enunciado:'<p>Construa uma <b>página completa sobre um tema que você escolher</b> — seu time, sua banda, um jogo, uma causa, seu portfólio. Use as três abas: HTML, CSS e JS.</p><p class="mudo pequeno">Dica: comece pelo HTML (estrutura), depois o CSS (aparência) e por último o JS (comportamento). Não tente fazer tudo de uma vez.</p>',
     requisitos:[
       '<b>HTML:</b> estrutura semântica com <code class="inline">header</code>, <code class="inline">main</code>, <code class="inline">section</code> e <code class="inline">footer</code>',
       '<b>HTML:</b> pelo menos um título, uma lista, uma imagem e um link',
       '<b>HTML:</b> um formulário com pelo menos dois campos e um botão',
       '<b>CSS:</b> cores, fonte, box model (padding/margin/border) e cantos arredondados',
       '<b>CSS:</b> um layout com <code class="inline">flex</code> e um efeito <code class="inline">:hover</code>',
       '<b>JS:</b> pelo menos uma função sua',
       '<b>JS:</b> reagir a um clique alterando a página',
       '<b>JS:</b> usar um vetor ou objeto com dados'
     ],
     base:{
       html:'<header>\n  <h1>Meu tema</h1>\n  <nav><a href="#sobre">Sobre</a> <a href="#contato">Contato</a></nav>\n</header>\n\n<main>\n  <section id="sobre">\n    <h2>Sobre</h2>\n    <p>Escreva aqui.</p>\n  </section>\n\n  <section id="lista">\n    <h2>Destaques</h2>\n    <ul id="itens"></ul>\n    <button id="btn">Mostrar mais</button>\n  </section>\n\n  <section id="contato">\n    <h2>Fale comigo</h2>\n    <form>\n      <!-- seus campos -->\n    </form>\n  </section>\n</main>\n\n<footer>\n  <p>Seu nome · 1º Ano · IFCE Campus Horizonte</p>\n</footer>',
       css:'* { box-sizing: border-box; }\n\nbody {\n  font-family: Segoe UI, sans-serif;\n  margin: 0;\n  color: #1f2937;\n  background: #f6f8fc;\n}\n\n/* continue */\n',
       js:'const destaques = [\n  "primeiro item",\n  "segundo item",\n  "terceiro item"\n];\n\n// sua funcao e seu evento aqui\n'
     },
     checks:[{re:'(?!)',msg:'HTML com header, main e footer'},{re:'(?!)',msg:'Usou section'},{re:'(?!)',msg:'Tem uma lista'},{re:'(?!)',msg:'Tem uma imagem'},{re:'(?!)',msg:'Tem um link'},{re:'(?!)',msg:'Formulário com pelo menos dois campos'},{re:'(?!)',msg:'Formulário com botão'},{re:'(?!)',msg:'CSS com padding e margin'},{re:'(?!)',msg:'CSS com cantos arredondados'},{re:'(?!)',msg:'CSS com flexbox'},{re:'(?!)',msg:'CSS com efeito hover'},{re:'(?!)',msg:'JS com pelo menos uma função'},{re:'(?!)',msg:'JS reagindo a um clique'},{re:'(?!)',msg:'JS percorrendo dados'},{re:'(?!)',msg:'JS alterando a página'}],
     parabens:''},

    {tipo:'texto', xp:10, titulo:'Questão 9 · Balanço do ano', minimo:150, linhas:6,
     enunciado:'<p>Feche o ano respondendo: <b>(a)</b> o que você sabe hoje que não sabia em fevereiro; <b>(b)</b> qual missão foi a mais difícil e por quê; <b>(c)</b> o que você mudaria na disciplina; <b>(d)</b> você pretende continuar programando? Por quê?</p>',
     exemplo:'(a) Em fevereiro eu não sabia... (b) A missão mais difícil foi... (c) Eu mudaria... (d) Pretendo...'}
  ]
};
