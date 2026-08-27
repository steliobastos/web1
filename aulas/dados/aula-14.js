window.AULA = {
  id:'M14', unidade:'II', etapa:'N2', data:'2026-06-05', dataTexto:'sexta, 05/06',
  titulo:'Formulários I: campos, rótulos e envio',
  resumo:'Formulário é a porta de entrada de dados de todo sistema. Hoje você monta o primeiro — do jeito certo, com rótulo ligado ao campo.',
  objetivos:[
    'Montar um formulário com <code class="inline">&lt;form&gt;</code>',
    'Ligar <code class="inline">&lt;label&gt;</code> ao campo com <code class="inline">for</code> e <code class="inline">id</code>',
    'Usar <code class="inline">name</code>, <code class="inline">placeholder</code> e <code class="inline">value</code>',
    'Entender <code class="inline">action</code> e <code class="inline">method</code>'
  ],
  blocos:[
    {tipo:'conceito', titulo:'O formulário mínimo',
     codigo:'<form action="processa.php" method="post">\n\n  <label for="nome">Nome completo</label>\n  <input type="text" id="nome" name="nome" placeholder="Seu nome">\n\n  <label for="email">E-mail</label>\n  <input type="email" id="email" name="email">\n\n  <button type="submit">Enviar</button>\n</form>',
     cards:[
       {t:'action', d:'Para onde os dados vão. Vazio = para a própria página.'},
       {t:'method', d:'GET manda os dados na URL (visível). POST manda escondido no corpo. Dado sensível: sempre POST.'},
       {t:'name', d:'O NOME do dado quando chega no servidor. Sem name, o campo não é enviado. É o atributo mais importante.'},
       {t:'id + for', d:'O for do label tem que ser IGUAL ao id do input. Aí clicar no texto foca o campo.'},
       {t:'placeholder', d:'Texto de exemplo dentro do campo. NÃO substitui o label — some quando o usuário digita.'},
       {t:'button type', d:'submit envia; reset limpa; button não faz nada sozinho (é para o JavaScript).'}
     ],
     dicas:[{icone:'🏷️', tipo:'atencao', txt:'<b>Todo campo precisa de label.</b> Sem ele, o leitor de tela anuncia "caixa de edição" e nada mais. E a área clicável fica muito menor — problema real no celular.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Você montou o formulário mas os dados não chegam no servidor. O que provavelmente falta?',
     opcoes:['O atributo <code class="inline">id</code>','O atributo <code class="inline">name</code>','O atributo <code class="inline">placeholder</code>','O atributo <code class="inline">class</code>'],
     correta:1,
     explica:'O <code class="inline">name</code> é a chave com que o dado viaja. Sem ele o campo simplesmente não é enviado.'},

    {tipo:'quiz', xp:12, titulo:'GET ou POST?',
     pergunta:'Formulário de <b>login com senha</b>. Qual method?',
     opcoes:['GET, porque é mais rápido','POST, porque os dados não aparecem na URL','Tanto faz, os dois são iguais','Nenhum: senha não vai por formulário'],
     correta:1,
     explica:'Com GET a senha apareceria na barra de endereço, no histórico e nos logs do servidor.'},

    {tipo:'lacuna', xp:14, titulo:'Desafio 1 · Ligando label e campo',
     texto:'<form {{1}}="/cadastro" {{2}}="post">\n\n  <label {{3}}="cidade">Cidade</label>\n  <input type="text" {{4}}="cidade" {{5}}="cidade" {{6}}="Ex.: Horizonte">\n\n  <button type="{{7}}">Enviar</button>\n</form>',
     respostas:['action','method','for','id','name','placeholder','submit']},

    {tipo:'parear', xp:12, titulo:'Desafio 2 · Para que serve cada atributo',
     pares:[
       {a:'<code class="inline">name</code>', b:'Nome com que o dado chega ao servidor'},
       {a:'<code class="inline">id</code>', b:'Identifica o campo para o label e para o JS'},
       {a:'<code class="inline">for</code>', b:'Liga o label ao id do campo'},
       {a:'<code class="inline">placeholder</code>', b:'Texto de exemplo que some ao digitar'},
       {a:'<code class="inline">value</code>', b:'Valor já preenchido no campo'},
       {a:'<code class="inline">action</code>', b:'Endereço para onde os dados são enviados'}
     ]},

    {tipo:'codigo', xp:26, titulo:'Desafio 3 · Ficha de cadastro', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte a ficha de cadastro de um clube da escola. Teste clicando nos <b>rótulos</b>: se o campo focar, você ligou certo.</p>',
     requisitos:[
       'Um <code class="inline">&lt;form&gt;</code> com <code class="inline">action</code> e <code class="inline">method="post"</code>',
       'Pelo menos 5 campos: nome, e-mail, telefone, data de nascimento e turma',
       'Cada campo com <code class="inline">&lt;label for&gt;</code> ligado ao <code class="inline">id</code>',
       'Cada campo com <code class="inline">name</code>',
       'Pelo menos dois <code class="inline">placeholder</code>',
       'Um botão de enviar e um de limpar'
     ],
     base:{html:'<h2>Cadastro no clube de programação</h2>\n\n<form action="" method="post">\n\n  <p>\n    <label for="nome">Nome completo</label><br>\n    <input type="text" id="nome" name="nome" placeholder="Seu nome">\n  </p>\n\n  <!-- continue -->\n\n</form>\n'},
     checks:[
       {re:'<form[^>]*method\\s*=\\s*["\\\']post', msg:'form com method="post"'},
       {re:'(<input[\\s\\S]*){5}', msg:'Cinco campos'},
       {re:'(<label[^>]*for\\s*=[\\s\\S]*){5}', msg:'Cinco labels ligados'},
       {re:'(name\\s*=[\\s\\S]*){5}', msg:'Todos com name'},
       {re:'(placeholder\\s*=[\\s\\S]*){2}', msg:'Dois placeholders'},
       {re:'type\\s*=\\s*["\\\']submit', msg:'Botão de enviar'},
       {re:'type\\s*=\\s*["\\\']reset', msg:'Botão de limpar'}
     ]},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Conserte o formulário', linguagem:'html', abas:['html'],
     enunciado:'<p>Este formulário tem <b>4 problemas</b>: label desligado, campo sem name, id repetido e botão errado. Conserte.</p>',
     base:{html:'<form method="post">\n\n  <label for="usuario">Usuário</label>\n  <input type="text" id="user" name="usuario">\n\n  <label>Senha</label>\n  <input type="password" id="senha">\n\n  <label for="email">E-mail</label>\n  <input type="email" id="senha" name="email">\n\n  <button type="button">Enviar</button>\n</form>\n'},
     requisitos:[
       'Todo <code class="inline">for</code> batendo com o <code class="inline">id</code> correspondente',
       'Todo campo com <code class="inline">name</code>',
       'Nenhum <code class="inline">id</code> repetido',
       'O botão de envio com <code class="inline">type="submit"</code>'
     ],
     checks:[
       {re:'for\\s*=\\s*["\\\']usuario["\\\'][\\s\\S]{0,80}id\\s*=\\s*["\\\']usuario["\\\']|id\\s*=\\s*["\\\']usuario["\\\'][\\s\\S]{0,80}for\\s*=\\s*["\\\']usuario', msg:'label do usuário ligado ao campo'},
       {re:'<label[^>]*for\\s*=\\s*["\\\']senha', msg:'label da senha com for'},
       {re:'type\\s*=\\s*["\\\']password["\\\'][^>]*name\\s*=|name\\s*=[^>]*type\\s*=\\s*["\\\']password', msg:'Campo de senha com name'},
       {re:'id\\s*=\\s*["\\\']senha["\\\'][\\s\\S]*id\\s*=\\s*["\\\']senha["\\\']', negar:true, msg:'Nenhum id repetido'},
       {re:'type\\s*=\\s*["\\\']submit', msg:'Botão com type="submit"'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Qual a diferença entre <code class="inline">id</code> e <code class="inline">name</code> num campo de formulário? Para que serve cada um?</p>'}
  ]
};
