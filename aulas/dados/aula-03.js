window.AULA = {
  id:'M03', unidade:'I', etapa:'N1', data:'2026-02-27', dataTexto:'sexta, 27/02',
  titulo:'A bancada do dev: VS Code, Live Server e DevTools',
  resumo:'Antes de construir, monte a oficina. Hoje você configura as ferramentas que vai usar até dezembro — e aprende os atalhos que economizam horas.',
  objetivos:[
    'Instalar e configurar o VS Code',
    'Usar a extensão Live Server para ver mudanças na hora',
    'Organizar as pastas de um projeto web',
    'Inspecionar e depurar qualquer site com o DevTools'
  ],
  blocos:[
    {tipo:'conceito', titulo:'O kit mínimo',
     cards:[
       {t:'VS Code', d:'Editor de código gratuito da Microsoft. Colore o código, sugere e avisa dos erros. code.visualstudio.com'},
       {t:'Live Server', d:'Extensão que abre seu HTML num servidor local e recarrega a página SOZINHO a cada vez que você salva.'},
       {t:'DevTools (F12)', d:'Já vem no navegador. Elements para ver o HTML, Console para erros de JS, Network para as requisições.'},
       {t:'Emmet', d:'Já vem no VS Code. Digite ! e aperte Tab: ele escreve o esqueleto HTML inteiro para você.'},
       {t:'Estrutura de pastas', d:'index.html na raiz, css/ para estilos, js/ para scripts, img/ para imagens. Simples e universal.'},
       {t:'Nomes de arquivo', d:'Tudo minúsculo, sem acento, sem espaço. use-hifen-assim.html. Servidor Linux diferencia maiúscula de minúscula.'}
     ],
     codigo:'meu-site/\n├── index.html\n├── css/\n│   └── estilo.css\n├── js/\n│   └── script.js\n└── img/\n    └── foto.jpg',
     dicas:[
       {icone:'⚡', txt:'<b>Atalhos que valem ouro:</b> <code class="inline">Ctrl+S</code> salvar · <code class="inline">Ctrl+/</code> comentar linha · <code class="inline">Alt+↑/↓</code> mover linha · <code class="inline">Ctrl+D</code> selecionar próxima ocorrência igual · <code class="inline">Shift+Alt+F</code> formatar o arquivo inteiro.'},
       {icone:'📛', tipo:'atencao', txt:'<b>index.html é nome mágico.</b> Quando alguém acessa a pasta sem citar arquivo, o servidor entrega o index.html automaticamente. Sempre chame sua página principal assim.'}
     ]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Por que usar Live Server em vez de dar duplo clique no arquivo HTML?',
     opcoes:['Porque o arquivo não abre sem ele','Porque recarrega sozinho ao salvar e simula um servidor de verdade','Porque deixa o site mais rápido para os visitantes','Porque salva o arquivo automaticamente'],
     correta:1,
     explica:'Abrir direto usa o endereço <code class="inline">file://</code>, onde várias coisas (fetch, algumas APIs) simplesmente não funcionam. O Live Server usa <code class="inline">http://localhost</code>, igual a um servidor real.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · Atalhos do VS Code',
     enunciado:'<p>Ligue o atalho ao que ele faz.</p>',
     pares:[
       {a:'<code class="inline">! + Tab</code>', b:'Gera o esqueleto HTML completo (Emmet)'},
       {a:'<code class="inline">Ctrl + /</code>', b:'Comenta ou descomenta a linha'},
       {a:'<code class="inline">Alt + ↑/↓</code>', b:'Move a linha para cima ou para baixo'},
       {a:'<code class="inline">Ctrl + D</code>', b:'Seleciona a próxima ocorrência igual'},
       {a:'<code class="inline">Shift + Alt + F</code>', b:'Formata e indenta o arquivo'},
       {a:'<code class="inline">Ctrl + P</code>', b:'Abre um arquivo pelo nome'},
       {a:'<code class="inline">F12</code> (no navegador)', b:'Abre as ferramentas de desenvolvedor'}
     ]},

    {tipo:'ordenar', xp:12, titulo:'Desafio 2 · Do zero ao site rodando',
     enunciado:'<p>Ordene os passos para começar um projeto novo.</p>',
     itens:[
       'Criar uma pasta com o nome do projeto',
       'Abrir a pasta no VS Code (Arquivo → Abrir Pasta)',
       'Criar o arquivo index.html',
       'Digitar ! e apertar Tab para gerar o esqueleto',
       'Salvar com Ctrl+S',
       'Clicar em "Go Live" na barra inferior',
       'Ver a página abrir no navegador em localhost'
     ]},

    {tipo:'lacuna', xp:12, titulo:'Desafio 3 · Boas práticas de nome',
     enunciado:'<p>Reescreva cada nome de arquivo do jeito correto (minúsculo, sem acento, sem espaço, com hífen).</p>',
     texto:'Página Inicial.html      -> {{1}}\nEstilo Principal.CSS     -> {{2}}\nFoto do Perfil.JPG       -> {{3}}\nMinhas Anotações.txt     -> {{4}}',
     respostas:['pagina-inicial.html','estilo-principal.css','foto-do-perfil.jpg','minhas-anotacoes.txt']},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Esqueleto na mão', linguagem:'html', abas:['html'],
     enunciado:'<p>Sem usar o Emmet, escreva o esqueleto HTML completo de memória. É o que você vai digitar dezenas de vezes este ano.</p>',
     requisitos:[
       '<code class="inline">&lt;!DOCTYPE html&gt;</code>',
       '<code class="inline">&lt;html lang="pt-br"&gt;</code>',
       '<code class="inline">&lt;head&gt;</code> com <code class="inline">&lt;meta charset="UTF-8"&gt;</code>',
       'A meta viewport (para funcionar no celular)',
       'Um <code class="inline">&lt;title&gt;</code> com o nome do seu projeto',
       'Um <code class="inline">&lt;body&gt;</code> com um <code class="inline">&lt;h1&gt;</code>'
     ],
     base:{html:'<!-- escreva o esqueleto completo aqui -->\n'},
     checks:[
       {re:'<!DOCTYPE\\s+html>', msg:'DOCTYPE declarado'},
       {re:'<html[^>]*lang\\s*=\\s*["\\\']pt', msg:'html com lang="pt-br"'},
       {re:'<head>', msg:'Tem head'},
       {re:'<meta[^>]*charset\\s*=\\s*["\\\']?utf-8', msg:'Charset UTF-8 declarado'},
       {re:'<meta[^>]*viewport', msg:'Meta viewport presente'},
       {re:'<title>[^<]+</title>', msg:'Title preenchido'},
       {re:'<body>[\\s\\S]*<h1[^>]*>', msg:'Body com um h1'}
     ],
     parabens:'Decorou. A partir de agora, ! + Tab faz isso em 1 segundo — mas você já sabe o que cada linha significa.'},

    {tipo:'quiz', xp:10, titulo:'DevTools',
     pergunta:'Você abriu um site e o botão não funciona. Qual aba do DevTools você olha primeiro?',
     opcoes:['Elements','Console','Network','Sources'],
     correta:1,
     explica:'O <b>Console</b> mostra os erros de JavaScript em vermelho, com o arquivo e a linha. É o primeiro lugar para olhar quando algo "não funciona".'},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:30, linhas:3,
     enunciado:'<p>Qual atalho você achou mais útil? Escreva também <b>o caminho da pasta</b> onde você vai guardar os projetos desta disciplina o ano inteiro.</p>'}
  ]
};
