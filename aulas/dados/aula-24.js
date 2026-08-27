window.AULA = {
  id:'M24', unidade:'III', etapa:'N1', data:'2026-09-18', dataTexto:'sexta, 18/09',
  titulo:'CSS II: cores, fundos e texto',
  resumo:'Hoje a página ganha personalidade. Cores, fontes, espaçamento e fundos — os ajustes que mais mudam a cara de um site com menos esforço.',
  objetivos:[
    'Escrever cores em nome, hexadecimal e <code class="inline">rgb()</code>',
    'Controlar fundo: cor, imagem, repetição e tamanho',
    'Ajustar fonte, tamanho, peso, alinhamento e espaçamento',
    'Aplicar um degradê com <code class="inline">linear-gradient</code>'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Três jeitos de dizer a mesma cor',
     codigo:'color: tomato;                 /* nome  — 148 nomes prontos */\ncolor: #ff6347;                /* hex   — #RRGGBB, base 16 */\ncolor: rgb(255, 99, 71);       /* rgb   — 0 a 255 em cada canal */\ncolor: rgba(255, 99, 71, .5);  /* rgba  — o ultimo numero e a opacidade */',
     cards:[
       {t:'Hexadecimal', d:'#3b6ef6 → 3b de vermelho, 6e de verde, f6 de azul. Vai de 00 (nada) até ff (máximo).'},
       {t:'Atalho de 3', d:'#fff é o mesmo que #ffffff. Só funciona quando os pares são repetidos.'},
       {t:'color x background', d:'color muda a cor da LETRA. background-color muda o FUNDO da caixa.'},
       {t:'Contraste', d:'Texto claro em fundo claro ninguém lê. Regra prática: se você aperta os olhos e não lê, o contraste está ruim.'}
     ],
     dicas:[{icone:'🎨', txt:'No VS Code, clique no quadradinho colorido ao lado do valor para abrir o seletor de cores. No navegador, o DevTools (F12) também tem.'}]},

    {tipo:'lacuna', xp:12, titulo:'Aquecimento · Traduzindo cores',
     enunciado:'<p>Complete os valores equivalentes.</p>',
     texto:'/* branco puro em hexadecimal, forma curta */\nbackground: {{1}};\n\n/* preto puro em hexadecimal, forma curta */\ncolor: {{2}};\n\n/* vermelho puro em rgb */\ncolor: {{3}};\n\n/* preto com 50% de transparencia */\nbackground: {{4}};',
     respostas:['#fff','#000','rgb(255, 0, 0)','rgba(0, 0, 0, 0.5)']},

    {tipo:'codigo', xp:20, titulo:'Desafio 1 · Cartão de identidade', linguagem:'css', abas:['css'],
     enunciado:'<p>Transforme este bloco cru num cartão bonito, mexendo <b>só em cor, fundo e texto</b> (borda e espaçamento ficam para a próxima aula).</p>',
     requisitos:[
       'Fundo do <code class="inline">.cartao</code> em cor clara (não branco puro)',
       'Nome (<code class="inline">h2</code>) em outra cor e <code class="inline">text-align: center</code>',
       'A função (<code class="inline">.funcao</code>) em <b>maiúsculas</b> com <code class="inline">text-transform</code>',
       'Uma <code class="inline">letter-spacing</code> aplicada em algum lugar',
       'Um <code class="inline">line-height</code> maior que 1.4 no texto'
     ],
     contexto:'<div class="cartao">\n  <h2>Ana Beatriz Silva</h2>\n  <p class="funcao">estudante de informática para internet</p>\n  <p class="bio">Gosta de front-end, joga vôlei e está aprendendo CSS neste exato momento. Quer trabalhar com design de interfaces.</p>\n</div>',
     base:{css:'.cartao {\n  width: 320px;\n  padding: 20px;\n}\n\n/* continue */\n'},
     checks:[
       {re:'\\.cartao\\s*\\{[^}]*background', msg:'Definiu um fundo para o cartão'},
       {re:'h2\\s*\\{[^}]*text-align\\s*:\\s*center', msg:'Centralizou o nome'},
       {re:'h2\\s*\\{[^}]*color', msg:'Deu cor ao nome'},
       {re:'text-transform\\s*:\\s*uppercase', msg:'Colocou a função em maiúsculas'},
       {re:'letter-spacing\\s*:', msg:'Usou letter-spacing'},
       {re:'line-height\\s*:\\s*(1\\.[5-9]|[2-9])', msg:'Aumentou o line-height'}
     ]},

    {tipo:'quiz', xp:10, titulo:'Fundo que não repete',
     pergunta:'Você colocou uma imagem de fundo e ela ficou repetida em ladrilho. Qual propriedade resolve?',
     codigo:'body {\n  background-image: url("cidade.jpg");\n  ______;\n}',
     opcoes:['<code class="inline">background-size: cover</code>','<code class="inline">background-repeat: no-repeat</code>','<code class="inline">background-position: center</code>','<code class="inline">background-attachment: fixed</code>'],
     correta:1,
     explica:'As outras três são úteis, mas quem desliga o ladrilho é o <code class="inline">background-repeat: no-repeat</code>. O trio clássico é <code class="inline">no-repeat center / cover</code>.'},

    {tipo:'parear', xp:14, titulo:'Desafio 2 · Propriedade × efeito',
     enunciado:'<p>Ligue cada propriedade ao efeito que ela produz.</p>',
     pares:[
       {a:'<code class="inline">font-weight: 700</code>', b:'Deixa o texto em negrito'},
       {a:'<code class="inline">font-style: italic</code>', b:'Inclina as letras'},
       {a:'<code class="inline">text-align: justify</code>', b:'Alinha nas duas margens, como jornal'},
       {a:'<code class="inline">text-decoration: none</code>', b:'Tira o sublinhado do link'},
       {a:'<code class="inline">letter-spacing: 2px</code>', b:'Afasta uma letra da outra'},
       {a:'<code class="inline">line-height: 1.8</code>', b:'Afasta uma linha da outra'},
       {a:'<code class="inline">text-shadow</code>', b:'Coloca uma sombra atrás das letras'},
       {a:'<code class="inline">background-size: cover</code>', b:'Faz a imagem cobrir toda a caixa'}
     ]},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Capa de álbum', linguagem:'css', abas:['css'],
     enunciado:'<p>Crie a capa de um álbum (real ou inventado). O HTML já existe — você faz a arte só com CSS.</p>',
     requisitos:[
       'Um <b>degradê</b> de fundo com <code class="inline">linear-gradient</code>',
       'Título grande: <code class="inline">font-size</code> de pelo menos <code class="inline">2rem</code>',
       'Uma <code class="inline">text-shadow</code> no título',
       'Fonte diferente da padrão com <code class="inline">font-family</code>',
       'O nome do artista em maiúsculas e espaçado'
     ],
     pista:'<code class="inline">background: linear-gradient(135deg, #ffd6e8, #cfe3ff);</code> — o primeiro valor é a direção.',
     contexto:'<div class="capa">\n  <h1>Meia-Noite em Horizonte</h1>\n  <p class="artista">Coletivo 1A</p>\n  <p class="faixas">12 faixas · 2026</p>\n</div>',
     base:{css:'.capa {\n  width: 300px;\n  height: 300px;\n  display: grid;\n  place-content: center;\n  text-align: center;\n  padding: 20px;\n}\n\n/* sua arte */\n'},
     checks:[
       {re:'linear-gradient\\s*\\(', msg:'Usou um degradê'},
       {re:'font-size\\s*:\\s*([2-9]|\\d\\d)(\\.\\d+)?(rem|em)|font-size\\s*:\\s*([3-9]\\d|\\d{3})px', msg:'Título com pelo menos 2rem (ou 32px)'},
       {re:'text-shadow\\s*:', msg:'Aplicou sombra no texto'},
       {re:'font-family\\s*:', msg:'Escolheu uma família de fonte'},
       {re:'text-transform\\s*:\\s*uppercase', msg:'Nome do artista em maiúsculas'},
       {re:'letter-spacing\\s*:', msg:'Espaçou as letras'}
     ],
     parabens:'Tira um print e manda no grupo da turma — a melhor capa vira o banner da próxima missão.'},

    {tipo:'quiz', xp:10, titulo:'Unidades',
     pergunta:'Qual dessas unidades de tamanho de fonte <b>respeita</b> o zoom e a preferência de acessibilidade do usuário?',
     opcoes:['<code class="inline">px</code>','<code class="inline">rem</code>','<code class="inline">pt</code>','Todas se comportam igual'],
     correta:1,
     explica:'<code class="inline">rem</code> é relativo ao tamanho de fonte definido pelo usuário no navegador. <code class="inline">px</code> é fixo e ignora essa preferência.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Escolha um site que você acha <b>bonito</b>. Descreva duas escolhas de cor ou de texto que ele faz e que você quer copiar.</p>'}
  ]
};
