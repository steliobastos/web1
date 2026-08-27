window.AULA = {
  id:'M19', unidade:'II', etapa:'N1', data:'2026-08-14', dataTexto:'sexta, 14/08',
  titulo:'Formulários III: seleção, múltipla escolha e agrupamento',
  resumo:'Nem tudo é caixa de texto. Hoje entram as opções: listas suspensas, botões de rádio, caixas de marcar e como agrupar tudo isso.',
  objetivos:[
    'Criar listas suspensas com <code class="inline">select</code> e <code class="inline">option</code>',
    'Diferenciar <code class="inline">radio</code> de <code class="inline">checkbox</code>',
    'Agrupar campos com <code class="inline">fieldset</code> e <code class="inline">legend</code>',
    'Usar <code class="inline">datalist</code> e <code class="inline">optgroup</code>'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Escolher uma ou escolher várias',
     codigo:'<!-- lista suspensa: uma opcao entre muitas -->\n<label for="turma">Turma</label>\n<select id="turma" name="turma">\n  <option value="">Selecione...</option>\n  <option value="1A">1o Ano A</option>\n  <option value="1B" selected>1o Ano B</option>\n</select>\n\n<!-- radio: UMA opcao. Todos com o MESMO name -->\n<input type="radio" id="m" name="turno" value="manha">\n<label for="m">Manha</label>\n<input type="radio" id="t" name="turno" value="tarde">\n<label for="t">Tarde</label>\n\n<!-- checkbox: VARIAS opcoes -->\n<input type="checkbox" id="html" name="interesses" value="html">\n<label for="html">HTML</label>\n<input type="checkbox" id="css" name="interesses" value="css">\n<label for="css">CSS</label>',
     cards:[
       {t:'radio', d:'Só uma escolha. O segredo é o name IGUAL em todos do grupo — é isso que os torna exclusivos.'},
       {t:'checkbox', d:'Várias escolhas. Cada um funciona sozinho, mas podem compartilhar o name para virar uma lista.'},
       {t:'select', d:'Economiza espaço quando há muitas opções. Acima de ~7 opções, prefira select a radio.'},
       {t:'value', d:'O que realmente é enviado. O texto visível pode ser diferente: <option value="1A">1º Ano A</option>'},
       {t:'fieldset + legend', d:'Agrupa campos relacionados e dá um título ao grupo. Essencial para grupos de radio.'},
       {t:'datalist', d:'Campo de texto com sugestões — o usuário pode escolher OU digitar algo diferente.'}
     ],
     dicas:[{icone:'🧠', txt:'<b>Regra de decisão:</b> uma escolha entre poucas → radio. Uma escolha entre muitas → select. Várias escolhas → checkbox. Escolha com liberdade de digitar → datalist.'}]},

    {tipo:'quiz', xp:10, titulo:'Aquecimento',
     pergunta:'Você criou 3 botões de rádio mas dá para marcar os três ao mesmo tempo. O que está errado?',
     opcoes:['Faltou o atributo <code class="inline">required</code>','Eles têm <code class="inline">name</code> diferentes','Faltou o <code class="inline">value</code>','Radio funciona assim mesmo'],
     correta:1,
     explica:'O agrupamento exclusivo vem do <code class="inline">name</code> compartilhado. Sem isso, cada rádio é um grupo de um só.'},

    {tipo:'parear', xp:14, titulo:'Desafio 1 · Que controle usar?',
     pares:[
       {a:'Sexo: masculino / feminino / outro', b:'<code class="inline">radio</code>'},
       {a:'Estado do Brasil (27 opções)', b:'<code class="inline">select</code>'},
       {a:'Linguagens que você já usou (várias)', b:'<code class="inline">checkbox</code>'},
       {a:'Aceito os termos de uso', b:'<code class="inline">checkbox</code> único'},
       {a:'Turno: manhã / tarde / noite', b:'<code class="inline">radio</code>'},
       {a:'Cidade, com sugestões mas livre para digitar', b:'<code class="inline">datalist</code>'}
     ]},

    {tipo:'lacuna', xp:14, titulo:'Desafio 2 · Complete',
     texto:'<!-- lista suspensa -->\n<{{1}} id="curso" name="curso">\n  <{{2}} value="info">Informatica</{{2}}>\n  <option value="eletro">Eletrotecnica</option>\n</{{1}}>\n\n<!-- agrupando um conjunto de campos -->\n<{{3}}>\n  <{{4}}>Dados pessoais</{{4}}>\n  <input type="text" name="nome">\n</{{3}}>\n\n<!-- so uma opcao pode ser marcada -->\n<input type="{{5}}" name="turno" value="manha">\n<input type="{{5}}" name="turno" value="tarde">\n\n<!-- varias opcoes -->\n<input type="{{6}}" name="linguagens" value="html">',
     respostas:['select','option','fieldset','legend','radio','checkbox']},

    {tipo:'codigo', xp:26, titulo:'Desafio 3 · Formulário de matrícula', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte a ficha de matrícula em oficinas. Teste na prévia: os rádios têm que ser exclusivos e os checkboxes acumuláveis.</p>',
     requisitos:[
       'Um <code class="inline">&lt;fieldset&gt;</code> com <code class="inline">&lt;legend&gt;</code> para "Dados pessoais"',
       'Outro <code class="inline">&lt;fieldset&gt;</code> para "Preferências"',
       'Um <code class="inline">&lt;select&gt;</code> com pelo menos 4 <code class="inline">&lt;option&gt;</code>',
       'Um grupo de 3 <code class="inline">radio</code> com o mesmo <code class="inline">name</code>',
       'Pelo menos 4 <code class="inline">checkbox</code>',
       'Todos os controles com <code class="inline">label for</code> ligado',
       'Um <code class="inline">value</code> em cada opção'
     ],
     base:{html:'<h2>Matrícula nas oficinas</h2>\n\n<form>\n\n  <fieldset>\n    <legend>Dados pessoais</legend>\n\n  </fieldset>\n\n  <!-- segundo fieldset -->\n\n  <button type="submit">Matricular</button>\n</form>\n'},
     checks:[
       {re:'(<fieldset[^>]*>[\\s\\S]*){2}', msg:'Dois fieldsets'},
       {re:'(<legend[^>]*>[^<]+</legend>[\\s\\S]*){2}', msg:'Duas legends preenchidas'},
       {re:'<select[\\s\\S]*(<option[\\s\\S]*){4}', msg:'Select com 4 opções'},
       {re:'(type\\s*=\\s*["\\\']radio[\\s\\S]*){3}', msg:'Três rádios'},
       {re:'type\\s*=\\s*["\\\']radio[^>]*name\\s*=\\s*["\\\'](\\w+)["\\\'][\\s\\S]*type\\s*=\\s*["\\\']radio[^>]*name\\s*=\\s*["\\\']\\1["\\\']', msg:'Rádios com o mesmo name'},
       {re:'(type\\s*=\\s*["\\\']checkbox[\\s\\S]*){4}', msg:'Quatro checkboxes'},
       {re:'(<label[^>]*for\\s*=[\\s\\S]*){6}', msg:'Labels ligados'},
       {re:'(value\\s*=[\\s\\S]*){6}', msg:'Values definidos'}
     ]},

    {tipo:'codigo', xp:22, titulo:'Desafio 4 · Select organizado', linguagem:'html', abas:['html'],
     enunciado:'<p>Monte um <code class="inline">select</code> de cursos usando <code class="inline">&lt;optgroup&gt;</code> para separar por eixo, e um campo de cidade com <code class="inline">&lt;datalist&gt;</code>.</p>',
     requisitos:[
       'Um <code class="inline">select</code> com pelo menos 2 <code class="inline">&lt;optgroup&gt;</code>',
       'Cada grupo com pelo menos 2 opções',
       'Uma primeira <code class="inline">option</code> vazia como "Selecione..."',
       'Um <code class="inline">&lt;input list&gt;</code> ligado a um <code class="inline">&lt;datalist&gt;</code>',
       'O datalist com pelo menos 4 sugestões'
     ],
     pista:'<code class="inline">&lt;input list="cidades"&gt;</code> e <code class="inline">&lt;datalist id="cidades"&gt;&lt;option value="Horizonte"&gt;&lt;/datalist&gt;</code>',
     base:{html:'<form>\n\n  <label for="curso">Curso</label>\n  <select id="curso" name="curso">\n\n  </select>\n\n  <label for="cidade">Cidade</label>\n\n</form>\n'},
     checks:[
       {re:'(<optgroup[\\s\\S]*){2}', msg:'Dois optgroups'},
       {re:'label\\s*=\\s*["\\\'][^"\\\']+["\\\']', msg:'Optgroups com label'},
       {re:'(<option[\\s\\S]*){5}', msg:'Opções suficientes'},
       {re:'<option value=""', msg:'Opção vazia "Selecione..."'},
       {re:'<input[^>]*list\\s*=', msg:'Input ligado ao datalist'},
       {re:'<datalist[^>]*id\\s*=', msg:'Datalist com id'},
       {re:'<datalist[\\s\\S]*(<option[\\s\\S]*){4}[\\s\\S]*</datalist>', msg:'Quatro sugestões'}
     ]},

    {tipo:'texto', xp:6, titulo:'Fecho', minimo:35, linhas:3,
     enunciado:'<p>Explique quando você usaria <code class="inline">radio</code> e quando usaria <code class="inline">select</code>, já que os dois permitem só uma escolha.</p>'}
  ]
};
