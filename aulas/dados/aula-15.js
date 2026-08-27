window.AULA = {
  id:'M15', unidade:'II', etapa:'N2', data:'2026-06-12', dataTexto:'sexta, 12/06',
  titulo:'Formulários II: tipos de campo e validação',
  resumo:'O HTML5 valida sozinho — se você usar o tipo certo. Hoje você para de escrever tudo como texto e deixa o navegador trabalhar por você.',
  objetivos:[
    'Escolher o <code class="inline">type</code> adequado para cada dado',
    'Validar com <code class="inline">required</code>, <code class="inline">min</code>, <code class="inline">max</code> e <code class="inline">pattern</code>',
    'Usar <code class="inline">textarea</code> e limites de tamanho',
    'Entender por que validação no cliente não substitui a do servidor'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Um type para cada dado',
     tabela:{cab:['type','Serve para','Ganho automático'],linhas:[
       ['<code class="inline">text</code>','Texto livre','—'],
       ['<code class="inline">email</code>','E-mail','Valida o formato e abre teclado com @'],
       ['<code class="inline">tel</code>','Telefone','Abre teclado numérico no celular'],
       ['<code class="inline">number</code>','Números','Setinhas de incremento; aceita min/max/step'],
       ['<code class="inline">date</code>','Datas','Calendário nativo do navegador'],
       ['<code class="inline">password</code>','Senhas','Esconde os caracteres'],
       ['<code class="inline">url</code>','Endereços','Valida se começa com http'],
       ['<code class="inline">range</code>','Escala','Vira uma barra deslizante'],
       ['<code class="inline">color</code>','Cores','Abre o seletor de cores'],
       ['<code class="inline">file</code>','Arquivos','Botão de escolher arquivo']
     ]},
     codigo:'<input type="email"  name="email"  required>\n<input type="number" name="idade"  min="12" max="19" step="1">\n<input type="date"   name="nasc"   max="2014-12-31">\n<input type="tel"    name="fone"   pattern="[0-9]{11}" placeholder="85999999999">\n<textarea name="msg" rows="4" maxlength="300" required></textarea>',
     dicas:[{icone:'🔓', tipo:'atencao', txt:'<b>Validação de HTML é conveniência, não segurança.</b> Qualquer pessoa pode desligá-la pelo DevTools em 5 segundos. O servidor SEMPRE tem que validar de novo. Isso vale para qualquer sistema que você fizer na vida.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Campo para o aluno informar a data de nascimento. Qual type?',
     opcoes:['text','number','date','datetime'],
     correta:2},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · Type certo',
     pares:[
       {a:'E-mail do aluno', b:'<code class="inline">type="email"</code>'},
       {a:'Nota de 0 a 10', b:'<code class="inline">type="number"</code>'},
       {a:'Senha de acesso', b:'<code class="inline">type="password"</code>'},
       {a:'Celular para contato', b:'<code class="inline">type="tel"</code>'},
       {a:'Data da matrícula', b:'<code class="inline">type="date"</code>'},
       {a:'Nível de satisfação de 1 a 5', b:'<code class="inline">type="range"</code>'},
       {a:'Foto do documento', b:'<code class="inline">type="file"</code>'},
       {a:'Link do seu portfólio', b:'<code class="inline">type="url"</code>'}
     ]},

    {tipo:'lacuna', xp:14, titulo:'Desafio 2 · Validando',
     texto:'<!-- campo obrigatorio -->\n<input type="text" name="nome" {{1}}>\n\n<!-- nota entre 0 e 10 -->\n<input type="number" name="nota" {{2}}="0" {{3}}="10" step="0.1">\n\n<!-- telefone com exatamente 11 digitos -->\n<input type="tel" name="fone" {{4}}="[0-9]{11}">\n\n<!-- texto longo com no maximo 200 caracteres -->\n<textarea name="bio" {{5}}="200"></textarea>\n\n<!-- senha com pelo menos 8 caracteres -->\n<input type="password" name="senha" {{6}}="8">',
     respostas:['required','min','max','pattern','maxlength','minlength']},

    {tipo:'codigo', xp:26, titulo:'Desafio 3 · Inscrição validada', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte a inscrição para a Semana de Tecnologia. <b>Teste enviando com campos vazios</b> — o navegador tem que reclamar sozinho, sem JavaScript.</p>',
     requisitos:[
       'Nome (<code class="inline">text</code>, obrigatório, mínimo 5 caracteres)',
       'E-mail (<code class="inline">email</code>, obrigatório)',
       'Telefone (<code class="inline">tel</code> com <code class="inline">pattern</code>)',
       'Data de nascimento (<code class="inline">date</code>)',
       'Idade (<code class="inline">number</code> com <code class="inline">min</code> e <code class="inline">max</code>)',
       'Uma <code class="inline">&lt;textarea&gt;</code> com <code class="inline">maxlength</code>',
       'Todos com <code class="inline">label</code> ligado',
       'Botão de envio'
     ],
     base:{html:'<h2>Inscrição — Semana de Tecnologia</h2>\n\n<form>\n\n  <p>\n    <label for="nome">Nome completo</label><br>\n    <input type="text" id="nome" name="nome" required minlength="5">\n  </p>\n\n  <!-- continue -->\n\n  <button type="submit">Inscrever</button>\n</form>\n'},
     checks:[
       {re:'type\\s*=\\s*["\\\']email["\\\'][^>]*required|required[^>]*type\\s*=\\s*["\\\']email', msg:'E-mail obrigatório'},
       {re:'type\\s*=\\s*["\\\']tel', msg:'Campo de telefone'},
       {re:'pattern\\s*=', msg:'Padrão de validação no telefone'},
       {re:'type\\s*=\\s*["\\\']date', msg:'Campo de data'},
       {re:'type\\s*=\\s*["\\\']number[^>]*min[\\s\\S]{0,60}max|min\\s*=[^>]*max\\s*=', msg:'Idade com min e max'},
       {re:'<textarea[^>]*maxlength', msg:'Textarea com limite'},
       {re:'(<label[^>]*for\\s*=[\\s\\S]*){6}', msg:'Seis labels ligados'},
       {re:'minlength\\s*=\\s*["\\\']?5', msg:'Nome com mínimo de 5 caracteres'}
     ],
     parabens:'Zero JavaScript e o formulário já valida sozinho. Isso é HTML5 trabalhando por você.'},

    {tipo:'quiz', xp:12, titulo:'Segurança',
     pergunta:'Um usuário mal-intencionado abre o DevTools e apaga o <code class="inline">required</code> de todos os campos. O que impede o envio de dados vazios?',
     opcoes:['Nada no cliente — só a validação no servidor','O navegador impede a edição','O atributo pattern','O method="post"'],
     correta:0,
     explica:'Por isso a regra: <b>nunca confie no cliente</b>. A validação do HTML melhora a experiência; a segurança mora no servidor.'},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Pesquisa de satisfação', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte uma pesquisa curta usando os tipos mais visuais do HTML5.</p>',
     requisitos:[
       'Um <code class="inline">type="range"</code> de 1 a 10',
       'Um <code class="inline">type="color"</code> ("cor favorita")',
       'Um <code class="inline">type="date"</code>',
       'Um <code class="inline">type="url"</code>',
       'Uma <code class="inline">textarea</code> para comentários',
       'Todos com label ligado'
     ],
     base:{html:'<h2>Pesquisa rápida</h2>\n\n<form>\n\n</form>\n'},
     checks:[
       {re:'type\\s*=\\s*["\\\']range[^>]*min[\\s\\S]{0,50}max|min\\s*=[^>]*max\\s*=[^>]*', msg:'Range com min e max'},
       {re:'type\\s*=\\s*["\\\']color', msg:'Seletor de cor'},
       {re:'type\\s*=\\s*["\\\']date', msg:'Campo de data'},
       {re:'type\\s*=\\s*["\\\']url', msg:'Campo de URL'},
       {re:'<textarea', msg:'Textarea presente'},
       {re:'(<label[^>]*for\\s*=[\\s\\S]*){5}', msg:'Cinco labels ligados'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:40, linhas:3,
     enunciado:'<p>Por que a validação feita pelo HTML no navegador <b>não é suficiente</b> para a segurança de um sistema?</p>'}
  ]
};
