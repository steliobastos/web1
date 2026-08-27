window.AULA = {
  id:'M10', unidade:'II', etapa:'N2', data:'2026-05-08', dataTexto:'sexta, 08/05',
  titulo:'Imagens e mídia na página',
  resumo:'Imagem é o que mais pesa num site. Hoje você aprende a usar bem: formato certo, tamanho certo e descrição certa.',
  objetivos:[
    'Inserir imagens com <code class="inline">&lt;img&gt;</code> e seus atributos',
    'Escolher entre JPG, PNG, SVG e WebP',
    'Usar <code class="inline">&lt;figure&gt;</code> e <code class="inline">&lt;figcaption&gt;</code>',
    'Escrever textos alternativos úteis'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Formato certo para cada coisa',
     tabela:{cab:['Formato','Melhor para','Transparência','Observação'],linhas:[
       ['JPG','Fotos','Não','Compressão com perda; arquivo leve'],
       ['PNG','Logos, prints, imagens com fundo transparente','Sim','Pesa mais que JPG'],
       ['SVG','Ícones, logos, gráficos vetoriais','Sim','Escala sem perder qualidade nenhuma'],
       ['WebP','Praticamente tudo','Sim','Mais leve que JPG e PNG; padrão moderno'],
       ['GIF','Animações curtas','Sim','Poucas cores; hoje usa-se vídeo no lugar']
     ]},
     codigo:'<img src="img/praia.jpg"\n     alt="Barracas coloridas na praia do Futuro ao entardecer"\n     width="600" height="400"\n     loading="lazy">\n\n<figure>\n  <img src="grafico.png" alt="Grafico de barras da evolucao de matriculas">\n  <figcaption>Matriculas no curso tecnico, 2020-2026.</figcaption>\n</figure>',
     cards:[
       {t:'width e height', d:'Declare sempre. O navegador reserva o espaço e a página para de "pular" enquanto carrega.'},
       {t:'loading="lazy"', d:'Só carrega a imagem quando ela chega perto da tela. Deixa o site muito mais rápido.'},
       {t:'figure + figcaption', d:'Para imagem COM legenda visível. Semanticamente correto e acessível.'},
       {t:'alt bom', d:'Descreve o que importa na imagem no contexto. "Foto" e "imagem.jpg" não descrevem nada.'},
       {t:'alt vazio', d:'alt="" para imagem puramente decorativa. Presente, mas vazio — assim o leitor pula.'},
       {t:'Tamanho do arquivo', d:'Nunca coloque uma foto de 4000px se ela vai aparecer com 400px. Redimensione antes de subir.'}
     ]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Você vai colocar o logotipo da escola, que precisa ficar nítido em qualquer tamanho. Melhor formato?',
     opcoes:['JPG','PNG','SVG','GIF'],
     correta:2,
     explica:'SVG é vetorial: descreve formas matemáticas, então escala infinitamente sem pixelar.'},

    {tipo:'multi', xp:12, titulo:'Desafio 1 · Escreva bons alts',
     pergunta:'Para a foto de um professor apresentando um projeto na feira, quais alts são <b>adequados</b>?',
     opcoes:[
       '<code class="inline">alt="foto"</code>',
       '<code class="inline">alt="IMG_2043.jpg"</code>',
       '<code class="inline">alt="Professor apresentando um braço robótico na feira de ciências"</code>',
       '<code class="inline">alt="imagem de professor"</code>',
       '<code class="inline">alt="Prof. Stelio explica o projeto de robótica para estudantes"</code>'
     ],
     corretas:[2,4]},

    {tipo:'lacuna', xp:12, titulo:'Desafio 2 · Complete a imagem',
     texto:'<img {{1}}="img/turma.jpg"\n     {{2}}="Alunos do 1o ano na sala de informatica"\n     {{3}}="640"\n     height="360"\n     {{4}}="lazy">\n\n<!-- imagem com legenda visivel -->\n<{{5}}>\n  <img src="mapa.png" alt="Mapa do campus">\n  <{{6}}>Campus Horizonte, bloco de informatica.</{{6}}>\n</{{5}}>',
     respostas:['src','alt','width','loading','figure','figcaption']},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Portfólio visual', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte uma galeria de 4 imagens com legendas. Use <code class="inline">https://picsum.photos/400/300?random=1</code> (troque o número em cada uma).</p>',
     requisitos:[
       'Quatro <code class="inline">&lt;figure&gt;</code>, cada uma com <code class="inline">&lt;img&gt;</code> e <code class="inline">&lt;figcaption&gt;</code>',
       'Todos os <code class="inline">alt</code> descritivos (mais de 10 caracteres)',
       '<code class="inline">width</code> e <code class="inline">height</code> em todas',
       '<code class="inline">loading="lazy"</code> em pelo menos duas',
       'Um <code class="inline">h2</code> apresentando a galeria'
     ],
     base:{html:'<h2></h2>\n\n<figure>\n  <img src="https://picsum.photos/400/300?random=1" alt="">\n  <figcaption></figcaption>\n</figure>\n\n<!-- repita mais 3 vezes -->\n'},
     checks:[
       {re:'(<figure[^>]*>[\\s\\S]*){4}', msg:'Quatro figures'},
       {re:'(<figcaption[^>]*>[^<]+</figcaption>[\\s\\S]*){4}', msg:'Quatro legendas preenchidas'},
       {re:'alt\\s*=\\s*["\\\'][^"\\\']{10,}', msg:'alt descritivo'},
       {re:'width\\s*=[\\s\\S]*height\\s*=', msg:'width e height declarados'},
       {re:'loading\\s*=\\s*["\\\']lazy[\\s\\S]*loading\\s*=\\s*["\\\']lazy', msg:'lazy em pelo menos duas'},
       {re:'<h2[^>]*>[^<]+</h2>', msg:'h2 preenchido'}
     ]},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Cartão de perfil', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte um cartão de perfil com foto, nome, descrição e link para uma rede social.</p>',
     requisitos:[
       'Uma imagem de avatar com alt adequado',
       'Um <code class="inline">h3</code> com o nome',
       'Um parágrafo de descrição',
       'Um link para uma rede (com <code class="inline">target="_blank"</code> e <code class="inline">rel="noopener"</code>)',
       'Tudo agrupado dentro de um <code class="inline">&lt;div class="perfil"&gt;</code>'
     ],
     base:{html:'<div class="perfil">\n\n</div>\n'},
     checks:[
       {re:'class\\s*=\\s*["\\\']perfil', msg:'div.perfil presente'},
       {re:'<img[^>]*alt\\s*=\\s*["\\\'][^"\\\']{8,}', msg:'Avatar com alt'},
       {re:'<h3[^>]*>[^<]+</h3>', msg:'Nome em h3'},
       {re:'<p[^>]*>[^<]{15,}</p>', msg:'Descrição preenchida'},
       {re:'<a[^>]*href\\s*=\\s*["\\\']https?://', msg:'Link externo'},
       {re:'rel\\s*=\\s*["\\\'][^"\\\']*noopener', msg:'rel noopener'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Por que uma foto de 5 MB numa página é um problema, mesmo que ela apareça pequena na tela?</p>'}
  ]
};
