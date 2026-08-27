window.AULA = {
  id:'M08', unidade:'I-II', etapa:'N1', data:'2026-04-17', dataTexto:'sexta, 17/04',
  titulo:'Missão Avaliativa N1 · 2026.1',
  avaliativa:true, semFeedback:true,
  resumo:'Avaliação da Etapa N1. Cobre a Unidade I inteira e o HTML até formatação de texto.',
  aviso:'⏱️ Responda tudo e clique em <b>Enviar minhas respostas</b> no fim da página. Sem envio não há nota. Você pode reenviar — vale a última entrega.',
  blocos:[
    {tipo:'quiz', xp:7, titulo:'Questão 1', pergunta:'Qual afirmação é correta?',
     opcoes:['A Internet é um serviço que roda dentro da Web','A Web é um dos serviços que trafegam na Internet','Internet e Web são sinônimos exatos','A Web é o cabo e a Internet é o conteúdo'],
     correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 2', pergunta:'O que faz o DNS?',
     opcoes:['Criptografa a conexão','Traduz nomes de domínio em endereços IP','Armazena os arquivos do site','Compila o HTML'],
     correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 3', pergunta:'Qual destes é necessariamente um site <b>dinâmico</b>?',
     opcoes:['Uma landing page de divulgação','Um currículo online','Um sistema que mostra as notas de cada aluno','Uma página "Sobre nós"'],
     correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 4', pergunta:'Sem a linha <code class="inline">&lt;meta charset="UTF-8"&gt;</code>, o que acontece?',
     opcoes:['A página não abre','As imagens somem','Os acentos aparecem corrompidos','O CSS não carrega'],
     correta:-1},

    {tipo:'quiz', xp:7, titulo:'Questão 5', pergunta:'Qual está aninhado corretamente?',
     opcoes:['<code class="inline">&lt;p&gt;&lt;em&gt;oi&lt;/p&gt;&lt;/em&gt;</code>','<code class="inline">&lt;p&gt;&lt;em&gt;oi&lt;/em&gt;&lt;/p&gt;</code>','<code class="inline">&lt;em&gt;&lt;p&gt;oi&lt;/em&gt;&lt;/p&gt;</code>','<code class="inline">&lt;p&gt;oi&lt;/em&gt;&lt;/p&gt;</code>'],
     correta:-1},

    {tipo:'multi', xp:10, titulo:'Questão 6', pergunta:'Marque <b>todos</b> os elementos vazios (sem tag de fechamento).',
     opcoes:['<code class="inline">&lt;br&gt;</code>','<code class="inline">&lt;div&gt;</code>','<code class="inline">&lt;img&gt;</code>','<code class="inline">&lt;hr&gt;</code>','<code class="inline">&lt;meta&gt;</code>','<code class="inline">&lt;strong&gt;</code>'],
     corretas:[]},

    {tipo:'ordenar', xp:12, titulo:'Questão 7 · Caminho da requisição',
     enunciado:'<p>Ordene o que acontece do Enter até a página aparecer.</p>',
     itens:['Usuário digita o endereço','Navegador consulta o DNS','DNS devolve o IP do servidor','Navegador envia a requisição HTTP','Servidor devolve o HTML','Navegador pede CSS, imagens e JS','Página é renderizada na tela']},

    {tipo:'lacuna', xp:16, titulo:'Questão 8 · Esqueleto e atributos', semGabarito:true,
     enunciado:'<p>Complete o código.</p>',
     texto:'<!{{1}} html>\n<html {{2}}="pt-br">\n<head>\n  <meta {{3}}="UTF-8">\n  <{{4}}>Portfolio</{{4}}>\n</head>\n<body>\n  <h1>Ola</h1>\n  <img {{5}}="foto.jpg" {{6}}="Foto do autor">\n  <a {{7}}="https://ifce.edu.br">IFCE</a>\n  <p {{8}}="destaque">Texto</p>\n</body>\n</html>',
     respostas:[]},

    {tipo:'parear', xp:12, titulo:'Questão 9 · Sentido das tags',
     pares:[
       {a:'<code class="inline">&lt;strong&gt;</code>', b:'Conteúdo de forte importância'},
       {a:'<code class="inline">&lt;em&gt;</code>', b:'Ênfase de entonação'},
       {a:'<code class="inline">&lt;blockquote&gt;</code>', b:'Citação longa em bloco'},
       {a:'<code class="inline">&lt;abbr&gt;</code>', b:'Abreviação com significado no title'},
       {a:'<code class="inline">&lt;pre&gt;</code>', b:'Preserva espaços e quebras de linha'},
       {a:'<code class="inline">&lt;mark&gt;</code>', b:'Destaque tipo marca-texto'}
     ]},

    {tipo:'codigo', xp:30, titulo:'Questão 10 · Prática', linguagem:'html', abas:['html'],
     enunciado:'<p>Construa, do zero, a página de apresentação de um projeto (real ou inventado).</p>',
     requisitos:[
       'Esqueleto HTML5 completo e válido',
       '<code class="inline">title</code> preenchido',
       'Um <code class="inline">h1</code> e pelo menos dois <code class="inline">h2</code>',
       'No mínimo quatro parágrafos',
       'Uma imagem com <code class="inline">src</code> e <code class="inline">alt</code> descritivo',
       'Um link com <code class="inline">href</code>',
       'Um <code class="inline">&lt;strong&gt;</code> e um <code class="inline">&lt;em&gt;</code> usados com sentido correto',
       'Um <code class="inline">&lt;hr&gt;</code> e um comentário no código',
       'Um elemento com <code class="inline">id</code> e outro com <code class="inline">class</code>'
     ],
     base:{html:'<!-- escreva a pagina completa aqui -->\n'},
     checks:[{re:'(?!)',msg:'DOCTYPE'},{re:'(?!)',msg:'lang declarado'},{re:'(?!)',msg:'charset'},{re:'(?!)',msg:'title preenchido'},{re:'(?!)',msg:'h1'},{re:'(?!)',msg:'Dois h2'},{re:'(?!)',msg:'Quatro parágrafos'},{re:'(?!)',msg:'Imagem com alt descritivo'},{re:'(?!)',msg:'Link com href'},{re:'(?!)',msg:'strong'},{re:'(?!)',msg:'em'},{re:'(?!)',msg:'hr'},{re:'(?!)',msg:'Comentário'},{re:'(?!)',msg:'Elemento com id'},{re:'(?!)',msg:'Elemento com class'}]},

    {tipo:'texto', xp:10, titulo:'Questão 11 · Autoavaliação', minimo:120, linhas:5,
     enunciado:'<p>Responda: <b>(a)</b> o que você já consegue fazer sozinho; <b>(b)</b> o que ainda ficou confuso; <b>(c)</b> uma nota de 0 a 10 para o seu esforço nesta etapa, justificando.</p>'}
  ]
};
