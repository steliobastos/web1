window.AULA = {
  id:'M06', unidade:'II', etapa:'N1', data:'2026-03-27', dataTexto:'sexta, 27/03',
  titulo:'Atributos: dando instruções aos elementos',
  resumo:'A tag diz "o que é". O atributo diz "como é". É por eles que a página ganha imagem, link, id, classe e acessibilidade.',
  objetivos:[
    'Escrever atributos com a sintaxe correta',
    'Usar <code class="inline">id</code> e <code class="inline">class</code> com critério',
    'Aplicar atributos globais e específicos',
    'Entender por que <code class="inline">alt</code> não é opcional'
  ],
  blocos:[
    {tipo:'conceito', titulo:'nome="valor"',
     codigo:'<img src="gato.jpg" alt="Gato laranja dormindo" width="300">\n     ^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^\n     obrigatorio       obrigatorio (acessibilidade) opcional\n\n<a href="https://ifce.edu.br" target="_blank" rel="noopener">IFCE</a>\n\n<p id="intro" class="destaque grande" title="passe o mouse">Texto</p>',
     cards:[
       {t:'Sempre com aspas', d:'nome="valor". Aspas duplas por convenção. Sem aspas funciona às vezes — não faça.'},
       {t:'id', d:'Identificador ÚNICO na página. Só um elemento pode ter cada id.'},
       {t:'class', d:'Pode repetir e pode ter várias, separadas por espaço: class="card grande azul".'},
       {t:'alt', d:'Descreve a imagem para quem não a vê. Obrigatório por acessibilidade e conta pontos no Google.'},
       {t:'title', d:'Mostra uma dica ao passar o mouse. Não substitui o alt.'},
       {t:'Booleanos', d:'required, disabled, checked. Basta a presença — não precisa valor.'}
     ],
     dicas:[{icone:'♿', tipo:'atencao', txt:'<b>Imagem decorativa?</b> Use <code class="inline">alt=""</code> (vazio, mas presente). Assim o leitor de tela sabe que pode pular. Omitir o alt faz o leitor ler o nome do arquivo em voz alta.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Qual é a escrita correta?',
     opcoes:[
       '<code class="inline">&lt;img src=foto.jpg&gt;</code>',
       '<code class="inline">&lt;img src="foto.jpg" alt="Minha foto"&gt;</code>',
       '<code class="inline">&lt;img "foto.jpg"&gt;</code>',
       '<code class="inline">&lt;img&gt;foto.jpg&lt;/img&gt;</code>'
     ],
     correta:1},

    {tipo:'quiz', xp:12, titulo:'id ou class?',
     pergunta:'Você tem 8 cartões de produto iguais na página. O que usar?',
     opcoes:['id="card" nos oito','class="card" nos oito','id diferente em cada um e nenhuma classe','Nenhum dos dois'],
     correta:1,
     explica:'id é único. Repetir id é HTML inválido e quebra o JavaScript. Para grupos, sempre class.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Complete os atributos',
     texto:'<!-- imagem com descricao para leitor de tela -->\n<img {{1}}="logo.png" {{2}}="Logotipo do IFCE">\n\n<!-- link que abre em nova aba -->\n<a {{3}}="https://ifce.edu.br" {{4}}="_blank">IFCE</a>\n\n<!-- paragrafo unico identificado -->\n<p {{5}}="aviso">Prova sexta!</p>\n\n<!-- varios elementos do mesmo grupo -->\n<div {{6}}="card">...</div>',
     respostas:['src','alt','href','target','id','class']},

    {tipo:'multi', xp:12, titulo:'Desafio 2 · Atributos globais',
     pergunta:'Marque os atributos que podem ser usados em <b>qualquer</b> elemento HTML.',
     opcoes:['<code class="inline">id</code>','<code class="inline">class</code>','<code class="inline">src</code>','<code class="inline">title</code>','<code class="inline">href</code>','<code class="inline">style</code>'],
     corretas:[0,1,3,5],
     explica:'<code class="inline">src</code> só existe em img, script, iframe… e <code class="inline">href</code> em a e link. Os outros quatro são globais.'},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Galeria acessível', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte uma pequena galeria com três imagens da internet, cada uma com descrição adequada.</p>',
     requisitos:[
       'Três <code class="inline">&lt;img&gt;</code> com <code class="inline">src</code> e <code class="inline">alt</code> descritivo',
       'Cada imagem com <code class="inline">width</code> definido',
       'Cada uma dentro de um <code class="inline">&lt;div class="foto"&gt;</code>',
       'Um <code class="inline">id</code> único na galeria',
       'Uma legenda em <code class="inline">&lt;p&gt;</code> abaixo de cada imagem'
     ],
     pista:'Use imagens de <code class="inline">https://picsum.photos/300/200</code> — troque os números para variar.',
     base:{html:'<h2>Minha galeria</h2>\n\n<div id="">\n\n  <div class="foto">\n\n  </div>\n\n</div>\n'},
     checks:[
       {re:'<img[^>]*src[^>]*alt|<img[^>]*alt[^>]*src', msg:'Imagem com src e alt'},
       {re:'(<img[\\s\\S]*){3}', msg:'Três imagens'},
       {re:'alt\\s*=\\s*["\\\'][^"\\\']{8,}', msg:'alt com descrição real (não vazio)'},
       {re:'width\\s*=', msg:'Largura definida'},
       {re:'class\\s*=\\s*["\\\']foto', msg:'Divs com class="foto"'},
       {re:'id\\s*=\\s*["\\\'][^"\\\']+', msg:'Galeria com id'},
       {re:'(<p[^>]*>[\\s\\S]*){3}', msg:'Três legendas'}
     ]},

    {tipo:'codigo', xp:20, titulo:'Desafio 4 · Caça ao erro', linguagem:'html', abas:['html'],
     enunciado:'<p>Este código tem <b>4 problemas de atributo</b>. Encontre e corrija.</p>',
     requisitos:[
       'Aspas em todos os valores',
       'Nenhum id repetido',
       'Toda imagem com alt',
       'Link com href válido'
     ],
     base:{html:'<div id=topo>\n  <img src="banner.jpg">\n  <a href>Clique aqui</a>\n</div>\n\n<div id="topo">\n  <p class=texto>Conteudo</p>\n</div>\n'},
     checks:[
       {re:'id\\s*=\\s*["\\\']topo["\\\'][\\s\\S]*id\\s*=\\s*["\\\']topo["\\\']', negar:true, msg:'Não há mais id repetido'},
       {re:'<img[^>]*alt\\s*=', msg:'Imagem com alt'},
       {re:'href\\s*=\\s*["\\\'][^"\\\']+["\\\']', msg:'href com valor entre aspas'},
       {re:'class\\s*=\\s*["\\\']texto["\\\']', msg:'class com aspas'},
       {re:'id\\s*=\\s*[a-z]', negar:true, msg:'Nenhum atributo sem aspas'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Por que o atributo <code class="inline">alt</code> importa mesmo quando a imagem carrega normalmente? Cite <b>duas razões</b>.</p>'}
  ]
};
