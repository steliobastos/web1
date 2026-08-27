window.AULA = {
  id:'M21', unidade:'II', etapa:'N1', data:'2026-08-28', dataTexto:'sexta, 28/08',
  titulo:'Canvas: desenhando com código',
  resumo:'Hoje a página vira uma folha de desenho. Você vai pintar retângulos, círculos e uma arte sua — tudo escrevendo comando.',
  objetivos:[
    'Criar uma área de desenho com a tag <code class="inline">&lt;canvas&gt;</code>',
    'Pegar o "pincel" com <code class="inline">getContext("2d")</code>',
    'Desenhar retângulos, linhas, círculos e texto',
    'Escolher cores de preenchimento e de contorno'
  ],
  blocos:[
    {tipo:'conceito', titulo:'A folha em branco', sub:'3 minutos de leitura — depois é só mão na massa',
     texto:'O <code class="inline">&lt;canvas&gt;</code> é um retângulo vazio na página. Sozinho ele não mostra nada: quem desenha é o JavaScript, usando um objeto chamado <b>contexto</b>. Pense assim: o canvas é o papel, o contexto é o pincel.',
     cards:[
       {t:'1. O papel', d:'&lt;canvas id="tela" width="400" height="300"&gt;&lt;/canvas&gt; cria a área. Largura e altura vão como atributos, não no CSS.'},
       {t:'2. O pincel', d:'const ctx = document.getElementById("tela").getContext("2d"); — a partir daqui, tudo é ctx.'},
       {t:'3. A tinta', d:'ctx.fillStyle = "coral" escolhe a cor de preenchimento; ctx.strokeStyle escolhe a cor da linha.'},
       {t:'4. A pincelada', d:'ctx.fillRect(x, y, largura, altura) pinta. O ponto (0,0) é o canto superior esquerdo.'}
     ],
     codigo:'<canvas id="tela" width="300" height="150"></canvas>\n\n<script>\n  const ctx = document.getElementById("tela").getContext("2d");\n  ctx.fillStyle = "#3b6ef6";\n  ctx.fillRect(20, 20, 120, 80);\n<\/script>',
     dicas:[{icone:'📐', txt:'<b>Coordenadas:</b> x cresce para a <b>direita</b>, y cresce para <b>baixo</b>. Não é igual ao plano cartesiano da Matemática!'}]
    },

    {tipo:'quiz', xp:10, titulo:'Aquecimento', pergunta:'Qual linha pega o "pincel" para desenhar em 2D?',
     opcoes:['<code class="inline">tela.desenhar("2d")</code>','<code class="inline">tela.getContext("2d")</code>','<code class="inline">tela.style.context = "2d"</code>','<code class="inline">new Canvas2D(tela)</code>'],
     correta:1, explica:'<code class="inline">getContext("2d")</code> devolve o objeto com todos os comandos de desenho.'},

    {tipo:'quiz', xp:10, titulo:'Onde vai o tamanho?',
     pergunta:'Onde é o lugar certo de definir a largura e a altura do canvas?',
     codigo:'<canvas id="tela" ______></canvas>',
     opcoes:['Nos atributos: <code class="inline">width="400" height="300"</code>','Só no CSS: <code class="inline">style="width:400px"</code>','No JavaScript, com <code class="inline">ctx.tamanho()</code>','Não precisa definir, ele se ajusta sozinho'],
     correta:0, explica:'Definir só pelo CSS <b>estica</b> a imagem e deixa o desenho borrado. Os atributos definem quantos pixels de verdade a tela tem.'},

    {tipo:'codigo', xp:20, titulo:'Desafio 1 · A bandeira', linguagem:'html', abas:['html'],
     enunciado:'<p>O código já desenha o fundo verde. Complete para virar uma bandeira simples: um <b>losango amarelo</b> não precisa — use um <b>retângulo amarelo</b> no meio e um <b>círculo azul</b> dentro dele.</p>',
     requisitos:['Um <code class="inline">fillRect</code> amarelo por cima do verde','Um círculo azul usando <code class="inline">arc</code> + <code class="inline">fill</code>'],
     pista:'Círculo: <code class="inline">ctx.beginPath(); ctx.arc(200, 130, 45, 0, Math.PI*2); ctx.fill();</code>',
     base:{html:'<canvas id="tela" width="400" height="260"></canvas>\n\n<script>\n  const ctx = document.getElementById("tela").getContext("2d");\n\n  // fundo verde (pronto)\n  ctx.fillStyle = "#12a150";\n  ctx.fillRect(0, 0, 400, 260);\n\n  // 1) retangulo amarelo no meio — escreva abaixo\n\n\n  // 2) circulo azul — escreva abaixo\n\n\n<\/script>'},
     checks:[
       {re:'fillStyle\\s*=\\s*["\\\']?(yellow|#f|#e|gold|amarelo)', msg:'Escolheu uma cor amarela com <code class="inline">fillStyle</code>'},
       {re:'fillRect\\s*\\([^)]*\\)[\\s\\S]*fillRect\\s*\\(', msg:'Desenhou um segundo retângulo (o amarelo)'},
       {re:'beginPath\\s*\\(', msg:'Começou um novo caminho com <code class="inline">beginPath()</code>'},
       {re:'arc\\s*\\(', msg:'Usou <code class="inline">arc()</code> para o círculo'},
       {re:'\\bfill\\s*\\(\\s*\\)', msg:'Preencheu o círculo com <code class="inline">fill()</code>'}
     ],
     parabens:'Boa! Repare que sem <code class="inline">beginPath()</code> as formas grudam umas nas outras.'},

    {tipo:'lacuna', xp:15, titulo:'Desafio 2 · Complete o círculo',
     enunciado:'<p>Este trecho desenha um sol amarelo com contorno laranja. Preencha as lacunas.</p>',
     texto:'const ctx = tela.{{1}}("2d");\n\nctx.{{2}} = "gold";       // cor de dentro\nctx.{{3}} = "orange";     // cor da borda\nctx.lineWidth = 6;\n\nctx.{{4}}();              // inicia o caminho\nctx.arc(150, 120, 60, 0, Math.{{5}} * 2);\nctx.fill();\nctx.{{6}}();              // desenha o contorno',
     respostas:['getContext','fillStyle','strokeStyle','beginPath','PI','stroke']},

    {tipo:'parear', xp:12, titulo:'Desafio 3 · Cada pincelada no seu lugar',
     enunciado:'<p>Ligue cada comando ao que ele faz na tela.</p>',
     pares:[
       {a:'<code class="inline">fillRect(x,y,l,a)</code>', b:'Pinta um retângulo cheio'},
       {a:'<code class="inline">strokeRect(x,y,l,a)</code>', b:'Desenha só o contorno de um retângulo'},
       {a:'<code class="inline">clearRect(x,y,l,a)</code>', b:'Apaga uma área, deixando transparente'},
       {a:'<code class="inline">arc(x,y,r,0,Math.PI*2)</code>', b:'Traça um círculo completo'},
       {a:'<code class="inline">fillText("oi",x,y)</code>', b:'Escreve um texto na tela'},
       {a:'<code class="inline">moveTo</code> + <code class="inline">lineTo</code>', b:'Traça uma linha de um ponto a outro'}
     ]},

    {tipo:'ordenar', xp:12, titulo:'Desafio 4 · Na ordem certa',
     enunciado:'<p>Coloque os passos na ordem em que precisam aparecer no código para desenhar um triângulo com contorno.</p>',
     itens:[
       'const ctx = tela.getContext("2d");',
       'ctx.strokeStyle = "#7c5cf0";',
       'ctx.beginPath();',
       'ctx.moveTo(100, 30);',
       'ctx.lineTo(170, 150);',
       'ctx.lineTo(30, 150);',
       'ctx.closePath();',
       'ctx.stroke();'
     ]},

    {tipo:'codigo', xp:25, titulo:'Desafio 5 · Sua arte', linguagem:'html', abas:['html'],
     enunciado:'<p>Agora é livre — desenhe <b>o que você quiser</b> (uma casa, um emoji, o escudo do seu time, um personagem). Só precisa cumprir os requisitos abaixo.</p>',
     requisitos:[
       'Pelo menos <b>3 formas</b> diferentes (retângulo, círculo, linha…)',
       'Pelo menos <b>2 cores</b> diferentes',
       'Um <b>texto</b> na tela com <code class="inline">fillText</code> (pode ser seu nome)',
       'Pelo menos um <b>contorno</b> com <code class="inline">stroke</code>'
     ],
     pista:'Para escrever: <code class="inline">ctx.font = "20px Segoe UI"; ctx.fillText("Stelio", 20, 40);</code>',
     base:{html:'<canvas id="tela" width="420" height="300" style="border:1px solid #ddd"></canvas>\n\n<script>\n  const ctx = document.getElementById("tela").getContext("2d");\n\n  // fundo (pode mudar a cor)\n  ctx.fillStyle = "#eef3fb";\n  ctx.fillRect(0, 0, 420, 300);\n\n  // >>> sua arte comeca aqui <<<\n\n\n<\/script>'},
     checks:[
       {re:'fillRect\\s*\\(', msg:'Usou retângulo'},
       {re:'(arc|lineTo)\\s*\\(', msg:'Usou círculo ou linha'},
       {re:'(fillStyle|strokeStyle)[\\s\\S]*(fillStyle|strokeStyle)[\\s\\S]*(fillStyle|strokeStyle)', msg:'Usou pelo menos 3 definições de cor'},
       {re:'fillText\\s*\\(', msg:'Escreveu um texto na tela'},
       {re:'\\bstroke\\s*\\(|strokeRect\\s*\\(', msg:'Fez pelo menos um contorno'},
       {re:'font\\s*=', msg:'Definiu o tamanho da fonte com <code class="inline">font</code>'}
     ],
     parabens:'Isso aí. Guarde este código — vamos animar ele quando chegarmos em JavaScript.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:30, linhas:3,
     enunciado:'<p>Em 2 ou 3 linhas: <b>qual comando de canvas você achou mais difícil de entender hoje e por quê?</b></p>',
     exemplo:'Achei difícil o arc porque...'}
  ]
};
