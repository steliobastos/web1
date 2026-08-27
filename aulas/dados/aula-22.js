window.AULA = {
  id:'M22', unidade:'II', etapa:'N1', data:'2026-09-04', dataTexto:'sexta, 04/09',
  titulo:'HTML5 e as APIs do navegador',
  resumo:'O navegador tem superpoderes escondidos: ele sabe onde você está, guarda dados, toca vídeo e conversa com a câmera. Hoje a gente liga esses botões.',
  objetivos:[
    'Reconhecer o que o HTML5 trouxe de novo',
    'Usar <code class="inline">&lt;video&gt;</code>, <code class="inline">&lt;audio&gt;</code> e <code class="inline">&lt;details&gt;</code>',
    'Guardar informação no navegador com <code class="inline">localStorage</code>',
    'Pedir a localização do usuário com a API de Geolocalização'
  ],
  blocos:[
    {tipo:'conceito', titulo:'O que é uma API, sem enrolação',
     texto:'<b>API</b> é um cardápio de comandos que alguém já programou pra você. O navegador tem dezenas deles prontos: você só chama pelo nome e ele faz. Ninguém precisa saber <i>como</i> o GPS funciona por dentro — basta pedir.',
     cards:[
       {t:'Geolocation', d:'navigator.geolocation.getCurrentPosition(...) — descobre latitude e longitude (o usuário precisa autorizar).'},
       {t:'localStorage', d:'localStorage.setItem("nome","Ana") guarda no navegador. Continua lá mesmo depois de fechar a aba.'},
       {t:'Clipboard', d:'navigator.clipboard.writeText("oi") copia algo para a área de transferência.'},
       {t:'Media', d:'&lt;video controls&gt; e &lt;audio controls&gt; tocam mídia sem plugin nenhum — isso era impossível antes do HTML5.'}
     ],
     dicas:[{icone:'🔒', tipo:'atencao', txt:'<b>APIs sensíveis pedem permissão.</b> Localização, câmera e microfone só funcionam se o usuário clicar em "Permitir" — e, em muitos navegadores, só em sites com <code class="inline">https</code>.'}]},

    {tipo:'multi', xp:12, titulo:'O que veio com o HTML5?',
     pergunta:'Marque <b>todas</b> as novidades que chegaram com o HTML5.',
     opcoes:['Tags semânticas como <code class="inline">&lt;header&gt;</code> e <code class="inline">&lt;article&gt;</code>','A tag <code class="inline">&lt;canvas&gt;</code>','A tag <code class="inline">&lt;font&gt;</code> para mudar a fonte','Tipos de input como <code class="inline">date</code>, <code class="inline">email</code> e <code class="inline">range</code>','<code class="inline">localStorage</code> para guardar dados no navegador'],
     corretas:[0,1,3,4],
     explica:'A <code class="inline">&lt;font&gt;</code> é o contrário: foi <b>removida</b>. Aparência agora é trabalho do CSS.'},

    {tipo:'codigo', xp:20, titulo:'Desafio 1 · A página multimídia', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte um pequeno "player" usando só HTML5. Nada de JavaScript aqui.</p>',
     requisitos:[
       'Um <code class="inline">&lt;video&gt;</code> com o atributo <code class="inline">controls</code>',
       'Um <code class="inline">&lt;audio&gt;</code> com <code class="inline">controls</code>',
       'Um bloco <code class="inline">&lt;details&gt;</code> com <code class="inline">&lt;summary&gt;</code> escondendo a ficha técnica',
       'Uma barra de progresso com <code class="inline">&lt;progress value="70" max="100"&gt;</code>'
     ],
     pista:'O <code class="inline">&lt;details&gt;</code> abre e fecha sozinho, sem JavaScript. Teste clicando no <code class="inline">&lt;summary&gt;</code>.',
     base:{html:'<h2>Meu player HTML5</h2>\n\n<!-- 1) video com controls (use o link abaixo como src) -->\n<!-- https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4 -->\n\n\n<!-- 2) audio com controls -->\n\n\n<!-- 3) details + summary com a ficha tecnica -->\n\n\n<!-- 4) progress -->\n\n'},
     checks:[
       {re:'<video[^>]*controls', msg:'Colocou um vídeo com controles'},
       {re:'<audio[^>]*controls', msg:'Colocou um áudio com controles'},
       {re:'<details', msg:'Usou <code class="inline">&lt;details&gt;</code>'},
       {re:'<summary', msg:'Usou <code class="inline">&lt;summary&gt;</code> dentro dele'},
       {re:'<progress[^>]*value', msg:'Adicionou a barra de progresso'}
     ]},

    {tipo:'lacuna', xp:15, titulo:'Desafio 2 · Guardando no navegador',
     enunciado:'<p>Complete o código que salva e recupera o apelido do usuário.</p>',
     texto:'// salvar\nlocalStorage.{{1}}("apelido", "Zé");\n\n// recuperar\nconst nome = localStorage.{{2}}("apelido");\nconsole.log(nome);\n\n// apagar so esse item\nlocalStorage.{{3}}("apelido");\n\n// apagar tudo\nlocalStorage.{{4}}();',
     respostas:['setItem','getItem','removeItem','clear']},

    {tipo:'codigo', xp:22, titulo:'Desafio 3 · O caderno que não esquece', linguagem:'html', abas:['html'],
     enunciado:'<p>Faça um bloquinho de anotações que <b>lembra</b> o que você escreveu, mesmo se recarregar a página. Escreva algo, clique em Salvar, depois em <b>▶ Rodar</b> — o texto tem que voltar.</p>',
     requisitos:[
       'Salvar o conteúdo com <code class="inline">localStorage.setItem</code>',
       'Recuperar com <code class="inline">localStorage.getItem</code> quando a página abre',
       'Um botão que limpa a anotação'
     ],
     pista:'Para ler quando a página abre: <code class="inline">area.value = localStorage.getItem("nota") || "";</code>',
     base:{html:'<h3>Meu caderno</h3>\n<textarea id="area" rows="4" cols="40" placeholder="Escreva aqui..."></textarea>\n<br>\n<button id="salvar">Salvar</button>\n<button id="limpar">Limpar</button>\n<p id="aviso"></p>\n\n<script>\n  const area   = document.getElementById("area");\n  const aviso  = document.getElementById("aviso");\n\n  // 1) ao abrir, recuperar o que estava salvo\n\n\n  document.getElementById("salvar").onclick = function () {\n    // 2) salvar o conteudo\n\n    aviso.textContent = "Salvo!";\n  };\n\n  document.getElementById("limpar").onclick = function () {\n    // 3) apagar\n\n    area.value = "";\n    aviso.textContent = "Apagado.";\n  };\n<\/script>'},
     checks:[
       {re:'localStorage\\.setItem\\s*\\(', msg:'Usou <code class="inline">setItem</code> para salvar'},
       {re:'localStorage\\.getItem\\s*\\(', msg:'Usou <code class="inline">getItem</code> para recuperar'},
       {re:'localStorage\\.(removeItem|clear)\\s*\\(', msg:'Fez o botão de limpar apagar de verdade'},
       {re:'area\\.value', msg:'Ligou o texto salvo à caixa de texto'}
     ],
     parabens:'Esse é o mesmo truque que sites usam para lembrar o carrinho de compras.'},

    {tipo:'quiz', xp:10, titulo:'Permissões',
     pergunta:'O que acontece se o usuário clicar em "Bloquear" quando o site pede a localização?',
     opcoes:['O site trava e mostra tela branca','A função de erro (segundo argumento) é chamada e o site precisa lidar com isso','O navegador manda a localização mesmo assim','A página recarrega automaticamente'],
     correta:1,
     explica:'<code class="inline">getCurrentPosition(sucesso, erro)</code> — o segundo parâmetro existe exatamente para o caso de negativa ou falha.'},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Onde eu estou?', linguagem:'html', abas:['html'],
     enunciado:'<p>Complete o botão que mostra a latitude e a longitude. <b>A prévia roda numa caixa protegida, então o navegador pode bloquear</b> — se bloquear, sua mensagem de erro tem que aparecer. Isso também vale ponto!</p>',
     requisitos:[
       'Chamar <code class="inline">navigator.geolocation.getCurrentPosition</code>',
       'Mostrar <code class="inline">coords.latitude</code> e <code class="inline">coords.longitude</code>',
       'Tratar o caso de erro com uma mensagem amigável'
     ],
     pista:'<code class="inline">navigator.geolocation.getCurrentPosition(function(p){...}, function(e){...});</code>',
     base:{html:'<button id="btn">Descobrir onde estou</button>\n<p id="saida">—</p>\n\n<script>\n  document.getElementById("btn").onclick = function () {\n    const saida = document.getElementById("saida");\n\n    if (!navigator.geolocation) {\n      saida.textContent = "Seu navegador nao tem geolocalizacao.";\n      return;\n    }\n\n    // complete aqui\n\n  };\n<\/script>'},
     checks:[
       {re:'getCurrentPosition\\s*\\(', msg:'Chamou <code class="inline">getCurrentPosition</code>'},
       {re:'coords\\.latitude', msg:'Leu a latitude'},
       {re:'coords\\.longitude', msg:'Leu a longitude'},
       {re:'getCurrentPosition\\s*\\([^)]*function[\\s\\S]{10,}?,\\s*function', msg:'Passou também a função de erro'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:40, linhas:3,
     enunciado:'<p>Pense num app que você usa. <b>Qual dessas APIs ele provavelmente usa e para quê?</b></p>',
     exemplo:'O iFood usa geolocalização para...'}
  ]
};
