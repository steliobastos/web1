window.AULA = {
  id:'M01', unidade:'I', etapa:'N1', data:'2026-02-13', dataTexto:'sexta, 13/02',
  titulo:'Ligando a Web: o que acontece quando você digita um endereço',
  resumo:'Primeira missão do ano. Em 100 minutos você vai entender o caminho que um site percorre até chegar na sua tela — e já mexer no código de um site de verdade.',
  objetivos:[
    'Diferenciar Internet de Web',
    'Descrever o caminho cliente → servidor → resposta',
    'Reconhecer as partes de uma URL',
    'Usar o DevTools para inspecionar qualquer página'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Internet ≠ Web',
     texto:'A <b>Internet</b> é a estrada: cabos, antenas, satélites, roteadores. A <b>Web</b> é um dos serviços que trafegam nela — o serviço das páginas. E-mail, WhatsApp e jogos online também usam a Internet, mas não são a Web.',
     cards:[
       {t:'Cliente', d:'Seu navegador. Ele PEDE. Chrome, Firefox, Edge, Safari — todos fazem a mesma coisa.'},
       {t:'Servidor', d:'Um computador ligado 24h que RESPONDE. Guarda os arquivos do site.'},
       {t:'HTTP / HTTPS', d:'O idioma da conversa. O S é de seguro: a conversa vai criptografada.'},
       {t:'DNS', d:'A agenda telefônica da internet. Traduz ifce.edu.br no endereço numérico do servidor.'},
       {t:'IP', d:'O "CEP" de cada máquina na rede. Ex.: 200.129.24.10'},
       {t:'Front-end x Back-end', d:'Front-end roda no SEU aparelho (HTML, CSS, JS). Back-end roda no servidor. Nesta disciplina, front-end.'}
     ],
     dicas:[{icone:'🔍', txt:'Aperte <b>F12</b> em qualquer site e vá na aba <b>Network</b>. Recarregue a página: você vê, em tempo real, cada arquivo que o navegador pediu ao servidor.'}]},

    {tipo:'ordenar', xp:12, titulo:'Desafio 1 · O caminho da página',
     enunciado:'<p>Você digitou <code class="inline">ifce.edu.br</code> e apertou Enter. Coloque os passos na ordem em que acontecem.</p>',
     itens:[
       'Você digita o endereço e aperta Enter',
       'O navegador pergunta ao DNS qual é o IP daquele nome',
       'O DNS responde com o endereço IP do servidor',
       'O navegador envia uma requisição HTTP para esse IP',
       'O servidor processa o pedido e devolve o arquivo HTML',
       'O navegador lê o HTML e pede também o CSS, as imagens e o JS',
       'A página aparece montada na sua tela'
     ]},

    {tipo:'parear', xp:12, titulo:'Desafio 2 · Cada peça no lugar',
     pares:[
       {a:'Navegador', b:'Cliente — quem faz o pedido'},
       {a:'DNS', b:'Traduz nome de site em número de IP'},
       {a:'HTTPS', b:'Protocolo de comunicação com criptografia'},
       {a:'Servidor', b:'Guarda os arquivos e responde aos pedidos'},
       {a:'HTML', b:'A estrutura e o conteúdo da página'},
       {a:'CSS', b:'A aparência da página'},
       {a:'JavaScript', b:'O comportamento e a interatividade'}
     ]},

    {tipo:'lacuna', xp:14, titulo:'Desafio 3 · Anatomia de uma URL',
     enunciado:'<p>Analise a URL <code class="inline">https://www.ifce.edu.br/horizonte/cursos?nivel=medio</code> e complete.</p>',
     texto:'protocolo ........ {{1}}\ndominio .......... {{2}}\ncaminho .......... {{3}}\nparametro ........ {{4}}\n\n// o "s" de https significa\n{{5}}',
     respostas:['https','www.ifce.edu.br','/horizonte/cursos','nivel=medio','seguro']},

    {tipo:'quiz', xp:10, titulo:'Desafio 4 · Erro 404',
     pergunta:'Você acessa um link e aparece "404 Not Found". O que isso significa?',
     opcoes:['Sua internet caiu','O servidor respondeu, mas não encontrou o arquivo pedido','O site foi hackeado','O navegador está desatualizado'],
     correta:1,
     explica:'O 404 é um <b>código de status HTTP</b>. Ele só existe porque o servidor respondeu — se a internet tivesse caído, você nem chegaria lá. Outros comuns: 200 (deu certo), 403 (proibido), 500 (erro no servidor).'},

    {tipo:'codigo', xp:20, titulo:'Desafio 5 · Sua primeira página', linguagem:'html', abas:['html'],
     enunciado:'<p>Sim, já na primeira aula. Complete a página com seus dados e veja acontecer na hora, à direita.</p>',
     requisitos:[
       'Trocar o título pelo seu nome',
       'Escrever um parágrafo sobre você',
       'Adicionar um segundo parágrafo com o que você espera da disciplina',
       'Colocar um link para um site que você gosta'
     ],
     pista:'Link: <code class="inline">&lt;a href="https://www.ifce.edu.br"&gt;IFCE&lt;/a&gt;</code>',
     base:{html:'<h1>Seu nome aqui</h1>\n\n<p>Escreva algo sobre voce.</p>\n\n<!-- adicione o segundo paragrafo -->\n\n\n<!-- adicione o link -->\n\n'},
     checks:[
       {re:'<h1>\\s*(?!Seu nome aqui)\\S', msg:'Trocou o título pelo seu nome'},
       {re:'<p>[\\s\\S]*<p>', msg:'Tem pelo menos dois parágrafos'},
       {re:'<a\\s[^>]*href\\s*=', msg:'Adicionou um link'},
       {re:'href\\s*=\\s*["\\\']https?://', msg:'O link aponta para um endereço completo'}
     ],
     parabens:'Pronto: você já escreveu HTML. É literalmente isso que todo site do mundo é por baixo.'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:40, linhas:3,
     enunciado:'<p>Escolha um site que você usa todo dia. <b>O que nele é front-end e o que provavelmente é back-end?</b></p>'}
  ]
};
