window.AULA = {
  id:'M07', unidade:'II', etapa:'N1', data:'2026-04-10', dataTexto:'sexta, 10/04',
  titulo:'Parágrafos e formatação de texto',
  resumo:'90% de um site é texto. Hoje você aprende a organizar esse texto com significado — e não só com aparência.',
  objetivos:[
    'Estruturar texto em parágrafos e títulos',
    'Usar tags de formatação com o sentido correto',
    'Diferenciar <code class="inline">strong</code> de <code class="inline">b</code> e <code class="inline">em</code> de <code class="inline">i</code>',
    'Formatar citações, código e texto pré-formatado'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Significado x aparência',
     texto:'Duas tags podem produzir o <i>mesmo visual</i> e ter <b>sentidos diferentes</b>. Leitores de tela e buscadores usam o sentido, não o visual.',
     tabela:{cab:['Tag','Aparência','Significado'],linhas:[
       ['<code class="inline">&lt;strong&gt;</code>','negrito','Isto é <b>importante</b>'],
       ['<code class="inline">&lt;b&gt;</code>','negrito','Só destaque visual, sem importância extra'],
       ['<code class="inline">&lt;em&gt;</code>','itálico','Ênfase na entonação'],
       ['<code class="inline">&lt;i&gt;</code>','itálico','Termo técnico, nome científico, palavra estrangeira'],
       ['<code class="inline">&lt;mark&gt;</code>','marca-texto','Trecho relevante para a busca atual'],
       ['<code class="inline">&lt;small&gt;</code>','fonte menor','Letras miúdas, rodapé legal']
     ]},
     cards:[
       {t:'blockquote', d:'Citação longa, em bloco. Aceita o atributo cite com a URL da fonte.'},
       {t:'q', d:'Citação curta, no meio da frase. O navegador coloca as aspas sozinho.'},
       {t:'code', d:'Trecho de código dentro do texto.'},
       {t:'pre', d:'Preserva espaços e quebras de linha exatamente como você escreveu.'},
       {t:'abbr', d:'Abreviação. Com title, mostra o significado ao passar o mouse.'},
       {t:'sub e sup', d:'H₂O usa sub; x² usa sup.'}
     ],
     dicas:[{icone:'📝', txt:'<b>Espaços e Enter não contam.</b> O HTML "esmaga" espaços múltiplos e quebras de linha em um espaço só. Para quebrar linha de verdade use <code class="inline">&lt;br&gt;</code>; para preservar tudo, <code class="inline">&lt;pre&gt;</code>.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Você quer destacar um <b>aviso de segurança</b> num manual. Qual tag é a mais correta?',
     opcoes:['<code class="inline">&lt;b&gt;</code>','<code class="inline">&lt;strong&gt;</code>','<code class="inline">&lt;i&gt;</code>','<code class="inline">&lt;big&gt;</code>'],
     correta:1,
     explica:'É importância de verdade, então <code class="inline">strong</code>. O leitor de tela muda a entonação.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · Tag certa para cada caso',
     pares:[
       {a:'"Não toque no fio desencapado"', b:'<code class="inline">&lt;strong&gt;</code>'},
       {a:'"Eu <i>realmente</i> não acredito"', b:'<code class="inline">&lt;em&gt;</code>'},
       {a:'"O <i>Homo sapiens</i> surgiu…"', b:'<code class="inline">&lt;i&gt;</code>'},
       {a:'Trecho relevante da busca destacado', b:'<code class="inline">&lt;mark&gt;</code>'},
       {a:'"Preços sujeitos a alteração"', b:'<code class="inline">&lt;small&gt;</code>'},
       {a:'Uma frase citada de um livro inteiro', b:'<code class="inline">&lt;blockquote&gt;</code>'},
       {a:'<code class="inline">console.log()</code> no meio do texto', b:'<code class="inline">&lt;code&gt;</code>'},
       {a:'H₂O', b:'<code class="inline">&lt;sub&gt;</code>'}
     ]},

    {tipo:'lacuna', xp:12, titulo:'Desafio 2 · Escreva as tags',
     texto:'<!-- aviso importante -->\n<p><{{1}}>Nao compartilhe sua senha.</{{1}}></p>\n\n<!-- citacao longa em bloco -->\n<{{2}} cite="https://ifce.edu.br">A educacao transforma.</{{2}}>\n\n<!-- formula da agua -->\n<p>H<{{3}}>2</{{3}}>O</p>\n\n<!-- 2 elevado a 10 -->\n<p>2<{{4}}>10</{{4}}> = 1024</p>\n\n<!-- abreviacao com significado -->\n<{{5}} title="Instituto Federal do Ceara">IFCE</{{5}}>',
     respostas:['strong','blockquote','sub','sup','abbr']},

    {tipo:'codigo', xp:24, titulo:'Desafio 3 · Artigo bem escrito', linguagem:'html', abas:['html'],
     enunciado:'<p>Escreva um pequeno artigo (pode ser sobre qualquer assunto que você domina) usando formatação com <b>sentido</b>.</p>',
     requisitos:[
       'Um <code class="inline">h1</code> e pelo menos dois <code class="inline">h2</code>',
       'No mínimo quatro parágrafos',
       'Um <code class="inline">&lt;strong&gt;</code> em algo realmente importante',
       'Um <code class="inline">&lt;em&gt;</code> dando ênfase',
       'Uma citação em <code class="inline">&lt;blockquote&gt;</code>',
       'Uma abreviação com <code class="inline">&lt;abbr title="..."&gt;</code>',
       'Um <code class="inline">&lt;mark&gt;</code> destacando um termo-chave'
     ],
     base:{html:'<h1></h1>\n\n<p></p>\n'},
     checks:[
       {re:'<h1>[^<]+</h1>', msg:'h1 preenchido'},
       {re:'(<h2>[\\s\\S]*){2}', msg:'Dois h2'},
       {re:'(<p>[\\s\\S]*){4}', msg:'Quatro parágrafos'},
       {re:'<strong>[^<]+</strong>', msg:'strong usado'},
       {re:'<em>[^<]+</em>', msg:'em usado'},
       {re:'<blockquote', msg:'Citação em bloco'},
       {re:'<abbr[^>]*title', msg:'Abreviação com title'},
       {re:'<mark>', msg:'mark usado'}
     ]},

    {tipo:'codigo', xp:20, titulo:'Desafio 4 · Preservando o código', linguagem:'html', abas:['html'],
     enunciado:'<p>Mostre um trecho de código na página <b>com a indentação preservada</b>. Depois explique numa frase o que ele faz, usando <code class="inline">&lt;code&gt;</code> no meio do texto.</p>',
     requisitos:[
       'Um bloco <code class="inline">&lt;pre&gt;</code> com <code class="inline">&lt;code&gt;</code> dentro',
       'A indentação visível na prévia',
       'Um parágrafo explicativo com <code class="inline">&lt;code&gt;</code> em linha',
       'Usar <code class="inline">&amp;lt;</code> para mostrar sinais de menor sem virar tag'
     ],
     pista:'Para escrever <code class="inline">&lt;p&gt;</code> na tela sem ele virar uma tag, digite <code class="inline">&amp;lt;p&amp;gt;</code>.',
     base:{html:'<h2>Trecho comentado</h2>\n\n<pre><code>\n\n</code></pre>\n\n<p></p>\n'},
     checks:[
       {re:'<pre>[\\s\\S]*<code>', msg:'pre com code dentro'},
       {re:'<pre>[\\s\\S]{40,}</pre>', msg:'Tem código de verdade dentro'},
       {re:'<p>[\\s\\S]*<code>[^<]+</code>[\\s\\S]*</p>', msg:'code em linha dentro do parágrafo'},
       {re:'&lt;|&gt;', msg:'Usou entidades HTML (&amp;lt; / &amp;gt;)'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Se <code class="inline">&lt;b&gt;</code> e <code class="inline">&lt;strong&gt;</code> ficam iguais na tela, <b>por que a escolha importa?</b></p>'}
  ]
};
