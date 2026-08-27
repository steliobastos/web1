window.AULA = {
  id:'M09', unidade:'II', etapa:'N2', data:'2026-04-24', dataTexto:'sexta, 24/04',
  titulo:'Links: costurando a Web',
  resumo:'Sem link não existe Web — só páginas soltas. Hoje você aprende a conectar tudo: outras páginas, seções, e-mail, WhatsApp e download.',
  objetivos:[
    'Criar links internos e externos',
    'Diferenciar caminho absoluto de relativo',
    'Navegar dentro da própria página com âncoras',
    'Usar <code class="inline">target</code> e <code class="inline">rel</code> com segurança'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Um href, muitos destinos',
     codigo:'<a href="https://ifce.edu.br">Outro site (absoluto)</a>\n<a href="sobre.html">Outra pagina da minha pasta (relativo)</a>\n<a href="paginas/contato.html">Dentro de uma subpasta</a>\n<a href="../index.html">Uma pasta acima</a>\n<a href="#rodape">Ir para uma secao desta pagina</a>\n<a href="mailto:prof@ifce.edu.br">Abrir o e-mail</a>\n<a href="https://wa.me/5585999999999">Abrir o WhatsApp</a>\n<a href="edital.pdf" download>Baixar arquivo</a>',
     cards:[
       {t:'Absoluto', d:'Começa com https://. Aponta para qualquer lugar da internet.'},
       {t:'Relativo', d:'Aponta a partir de onde o arquivo atual está. É o que você usa dentro do seu próprio site.'},
       {t:'../', d:'Sobe uma pasta. ../../ sobe duas. Muito usado quando o site tem subpastas.'},
       {t:'Âncora #', d:'Pula para o elemento com aquele id na mesma página. É como funciona o menu de sites de página única.'},
       {t:'target="_blank"', d:'Abre em nova aba. Use com moderação: tira o controle do usuário.'},
       {t:'rel="noopener"', d:'Obrigatório junto com target="_blank". Sem ele, a página aberta pode manipular a sua.'}
     ],
     dicas:[{icone:'✍️', tipo:'atencao', txt:'<b>Nunca escreva "clique aqui".</b> O texto do link deve dizer para onde vai: "Ver o edital de matrícula" é melhor que "clique aqui". Quem usa leitor de tela navega saltando de link em link e só ouve o texto deles.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Seu arquivo é <code class="inline">/site/paginas/contato.html</code> e você quer linkar <code class="inline">/site/index.html</code>. Qual href?',
     opcoes:['<code class="inline">index.html</code>','<code class="inline">../index.html</code>','<code class="inline">/index.html</code>','<code class="inline">./paginas/index.html</code>'],
     correta:1,
     explica:'Você está dentro de <code class="inline">paginas/</code>, então precisa subir um nível com <code class="inline">../</code>.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · Cada link, um destino',
     pares:[
       {a:'<code class="inline">href="https://ifce.edu.br"</code>', b:'Outro site na internet'},
       {a:'<code class="inline">href="sobre.html"</code>', b:'Arquivo na mesma pasta'},
       {a:'<code class="inline">href="../index.html"</code>', b:'Arquivo uma pasta acima'},
       {a:'<code class="inline">href="#contato"</code>', b:'Uma seção desta mesma página'},
       {a:'<code class="inline">href="mailto:a@b.com"</code>', b:'Abre o programa de e-mail'},
       {a:'<code class="inline">href="tel:+5585999999999"</code>', b:'Inicia uma ligação no celular'},
       {a:'<code class="inline">href="doc.pdf" download</code>', b:'Baixa o arquivo em vez de abrir'}
     ]},

    {tipo:'lacuna', xp:14, titulo:'Desafio 2 · Complete os links',
     texto:'<!-- link externo abrindo em nova aba com seguranca -->\n<a href="https://ifce.edu.br" target="{{1}}" rel="{{2}}">IFCE</a>\n\n<!-- ancora para a secao com id="contato" -->\n<a href="{{3}}">Ir para contato</a>\n<section id="{{4}}">...</section>\n\n<!-- abrir e-mail -->\n<a href="{{5}}:prof@ifce.edu.br">Falar com o professor</a>\n\n<!-- subir duas pastas -->\n<a href="{{6}}index.html">Inicio</a>',
     respostas:['_blank','noopener','#contato','contato','mailto','../../']},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Menu com âncoras', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte uma página de uma página só, com menu no topo que salta para cada seção. Clique nos links da prévia para testar.</p>',
     requisitos:[
       'Um menu com pelo menos 3 links de âncora',
       'Três seções com <code class="inline">id</code> correspondente',
       'Cada seção com título e texto suficiente para gerar rolagem',
       'Um link "voltar ao topo" no fim',
       'Um link externo com <code class="inline">target="_blank"</code> e <code class="inline">rel="noopener"</code>'
     ],
     base:{html:'<nav id="topo">\n  <a href="#sobre">Sobre</a> |\n  <!-- adicione os outros -->\n</nav>\n\n<section id="sobre">\n  <h2>Sobre</h2>\n  <p style="height:300px">Texto longo para gerar rolagem...</p>\n</section>\n\n<!-- continue -->\n'},
     checks:[
       {re:'(href\\s*=\\s*["\\\']#[\\s\\S]*){3}', msg:'Três links de âncora'},
       {re:'(id\\s*=\\s*["\\\'][^"\\\']+["\\\'][\\s\\S]*){4}', msg:'Seções com id'},
       {re:'(<h2[^>]*>[\\s\\S]*){3}', msg:'Três títulos de seção'},
       {re:'href\\s*=\\s*["\\\']#topo', msg:'Link voltar ao topo'},
       {re:'target\\s*=\\s*["\\\']_blank', msg:'Link externo em nova aba'},
       {re:'rel\\s*=\\s*["\\\'][^"\\\']*noopener', msg:'rel="noopener" por segurança'}
     ],
     parabens:'Isso é uma one-page — o formato mais usado em sites de evento e portfólio.'},

    {tipo:'multi', xp:12, titulo:'Desafio 4 · Bons textos de link',
     pergunta:'Marque <b>todos</b> os textos de link considerados adequados.',
     opcoes:[
       '"Clique aqui"',
       '"Ver o edital de matrícula 2026"',
       '"Baixar o calendário acadêmico (PDF)"',
       '"Leia mais"',
       '"Saiba como se inscrever na Semana de Tecnologia"',
       '"http://ifce.edu.br/horizonte/documentos/2026/edital.pdf"'
     ],
     corretas:[1,2,4],
     explica:'O bom texto de link descreve o destino <b>fora de contexto</b> — porque é assim que leitores de tela o apresentam.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Quando você usaria caminho <b>absoluto</b> e quando usaria <b>relativo</b>? Dê um exemplo de cada.</p>'}
  ]
};
