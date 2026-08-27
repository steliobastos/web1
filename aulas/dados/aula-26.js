window.AULA = {
  id:'M26', unidade:'II-III', etapa:'N1', data:'2026-10-02', dataTexto:'sexta, 02/10',
  titulo:'Missão Avaliativa N1 · 2026.2',
  avaliativa:true, semFeedback:true,
  resumo:'Avaliação prática da Etapa N1. Vale nota. Você tem os 100 minutos da aula — pode consultar suas anotações e as missões anteriores, mas o código é seu.',
  aviso:'⏱️ <b>Como funciona:</b> responda tudo, clique em <b>Enviar minhas respostas</b> no fim da página e confira se apareceu o protocolo. Sem envio não há nota. Você pode reenviar — vale a última entrega.',
  objetivos:[
    'Demonstrar domínio de canvas, HTML5 e APIs do navegador',
    'Aplicar seletores CSS corretos',
    'Controlar cor, texto e o box model'
  ],
  blocos:[
    {tipo:'quiz', xp:8, titulo:'Questão 1', pergunta:'Qual conjunto liga corretamente um arquivo externo de estilo?',
     opcoes:['<code class="inline">&lt;style href="a.css"&gt;</code>','<code class="inline">&lt;link rel="stylesheet" href="a.css"&gt;</code>','<code class="inline">&lt;css&gt;a.css&lt;/css&gt;</code>','<code class="inline">&lt;script type="css" src="a.css"&gt;</code>'],
     correta:-1},

    {tipo:'quiz', xp:8, titulo:'Questão 2', pergunta:'De que cor fica o texto do elemento <code class="inline">&lt;p class="destaque" id="hoje"&gt;</code>?',
     codigo:'p          { color: #333; }\n.destaque  { color: green; }\n#hoje      { color: crimson; }',
     opcoes:['#333','green','crimson','Nenhuma — há conflito e o navegador ignora'],
     correta:-1},

    {tipo:'quiz', xp:8, titulo:'Questão 3', pergunta:'Largura real da caixa na tela, considerando <code class="inline">box-sizing</code> padrão:',
     codigo:'.box { width: 300px; padding: 10px; border: 2px solid #000; }',
     opcoes:['300px','312px','320px','324px'],
     correta:-1},

    {tipo:'quiz', xp:8, titulo:'Questão 4', pergunta:'Qual linha obtém o contexto de desenho 2D de um canvas?',
     opcoes:['<code class="inline">canvas.draw("2d")</code>','<code class="inline">canvas.getContext("2d")</code>','<code class="inline">new Context(canvas)</code>','<code class="inline">canvas.context = "2d"</code>'],
     correta:-1},

    {tipo:'multi', xp:10, titulo:'Questão 5', pergunta:'Marque <b>todas</b> as afirmações corretas sobre <code class="inline">localStorage</code>.',
     opcoes:[
       'Os dados continuam salvos depois de fechar o navegador',
       'É acessado com <code class="inline">setItem</code> e <code class="inline">getItem</code>',
       'Guarda os dados no servidor do site',
       'Guarda os valores sempre como texto',
       'É apagado automaticamente a cada 5 minutos'
     ],
     corretas:[]},

    {tipo:'lacuna', xp:14, titulo:'Questão 6 · Seletores', semGabarito:true,
     enunciado:'<p>Escreva o seletor que atende cada comentário.</p>',
     texto:'/* todos os elementos com class="card" */\n{{1}} { }\n\n/* o unico elemento com id="menu" */\n{{2}} { }\n\n/* apenas os links dentro do footer */\n{{3}} { }\n\n/* h1 e h2 na mesma regra */\n{{4}} { }\n\n/* botao enquanto o mouse esta em cima */\n{{5}} { }',
     respostas:[]},

    {tipo:'lacuna', xp:12, titulo:'Questão 7 · Box model', semGabarito:true,
     enunciado:'<p>Complete com a propriedade ou o valor correto.</p>',
     texto:'/* espaco POR DENTRO da borda */\n{{1}}: 16px;\n\n/* espaco POR FORA da borda */\n{{2}}: 24px;\n\n/* faz a width incluir padding e borda */\nbox-sizing: {{3}};\n\n/* transforma um quadrado em circulo */\nborder-radius: {{4}};\n\n/* centraliza um bloco horizontalmente */\nmargin: {{5}};',
     respostas:[]},

    {tipo:'codigo', xp:22, titulo:'Questão 8 · Prática de Canvas', linguagem:'html', abas:['html'],
     enunciado:'<p>Desenhe no canvas uma <b>casa simples</b>: corpo retangular, telhado triangular, uma porta e o seu nome escrito embaixo.</p>',
     requisitos:[
       'Corpo da casa com <code class="inline">fillRect</code>',
       'Telhado com <code class="inline">beginPath</code> + <code class="inline">moveTo</code> + <code class="inline">lineTo</code>',
       'Porta em cor diferente',
       'Seu nome com <code class="inline">fillText</code>',
       'Pelo menos um contorno com <code class="inline">stroke</code>'
     ],
     base:{html:'<canvas id="tela" width="400" height="320" style="border:1px solid #ccc"></canvas>\n\n<script>\n  const ctx = document.getElementById("tela").getContext("2d");\n\n  // seu codigo\n\n<\/script>'},
     checks:[{re:'(?!)',msg:'Usou fillRect'},{re:'(?!)',msg:'Usou beginPath'},{re:'(?!)',msg:'Traçou o telhado com moveTo/lineTo'},{re:'(?!)',msg:'Usou pelo menos três cores'},{re:'(?!)',msg:'Escreveu o nome'},{re:'(?!)',msg:'Fez um contorno'}]},

    {tipo:'codigo', xp:26, titulo:'Questão 9 · Prática de CSS', linguagem:'css', abas:['css'],
     enunciado:'<p>Estilize a página de um evento da escola. O HTML está pronto e não pode ser alterado.</p>',
     requisitos:[
       '<code class="inline">box-sizing: border-box</code> global',
       'Um <b>degradê</b> no <code class="inline">header</code>',
       'Título centralizado, grande e com <code class="inline">text-shadow</code>',
       'Cada <code class="inline">.sessao</code> como cartão: fundo claro, padding, borda arredondada, sombra e margem',
       'Links do <code class="inline">nav</code> sem sublinhado e com efeito <code class="inline">:hover</code>',
       'Um seletor <b>descendente</b> e um seletor <b>agrupado</b>',
       'Datas (<code class="inline">.hora</code>) em maiúsculas e com <code class="inline">letter-spacing</code>'
     ],
     contexto:'<header id="capa"><h1>Semana de Tecnologia 2026</h1><nav><a href="#">Programação</a> <a href="#">Inscrição</a> <a href="#">Local</a></nav></header>\n<main>\n<section class="sessao"><h2>Oficina de HTML</h2><p class="hora">quinta, 14h</p><p>Monte seu primeiro site do zero.</p></section>\n<section class="sessao"><h2>Robótica</h2><p class="hora">quinta, 16h</p><p>Programe um braço mecânico.</p></section>\n<section class="sessao"><h2>Games</h2><p class="hora">sexta, 9h</p><p>Torneio e desenvolvimento de jogos 2D.</p></section>\n</main>\n<footer><p>IFCE Campus Horizonte</p></footer>',
     base:{css:'/* seu CSS */\n'},
     checks:[{re:'(?!)',msg:'box-sizing: border-box'},{re:'(?!)',msg:'Degradê no header'},{re:'(?!)',msg:'Sombra no título'},{re:'(?!)',msg:'Título centralizado'},{re:'(?!)',msg:'.sessao com padding e cantos arredondados'},{re:'(?!)',msg:'Sombra nos cartões'},{re:'(?!)',msg:'Seletor descendente tirando o sublinhado'},{re:'(?!)',msg:'Efeito :hover'},{re:'(?!)',msg:'Seletor agrupado'},{re:'(?!)',msg:'.hora em maiúsculas'},{re:'(?!)',msg:'letter-spacing aplicado'}]},

    {tipo:'texto', xp:10, titulo:'Questão 10 · Autoavaliação', minimo:120, linhas:5,
     enunciado:'<p>Responda em um parágrafo: <b>(a)</b> o que você aprendeu nesta etapa que consegue usar sozinho; <b>(b)</b> o que ainda não entendeu direito; <b>(c)</b> uma nota de 0 a 10 para o seu próprio esforço, justificando.</p>',
     exemplo:'(a) Consigo... (b) Ainda tenho dúvida em... (c) Me dou nota X porque...'}
  ]
};
