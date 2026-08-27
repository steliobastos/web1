window.AULA = {
  id:'M20', unidade:'II', etapa:'N1', data:'2026-08-21', dataTexto:'sexta, 21/08',
  titulo:'Formulários IV: mini-projeto “Ficha de inscrição”',
  resumo:'Oficina de fechamento dos formulários. Você entrega uma ficha de inscrição completa, acessível e validada — só com HTML.',
  objetivos:[
    'Integrar todos os tipos de campo vistos',
    'Organizar um formulário longo em grupos legíveis',
    'Aplicar validação HTML5 completa',
    'Revisar a acessibilidade do próprio formulário'
  ],
  blocos:[
    {tipo:'conceito', titulo:'Checklist de um formulário bem feito',
     cards:[
       {t:'1. Todo campo tem label', d:'E o for bate com o id. Clicar no texto foca o campo — teste sempre.'},
       {t:'2. Todo campo tem name', d:'Sem name o dado não chega. É o erro mais comum de todos.'},
       {t:'3. O type é o mais específico', d:'email, tel, date, number. Nunca "text" quando existe algo melhor.'},
       {t:'4. Campos agrupados', d:'fieldset + legend separam blocos e ajudam quem usa leitor de tela.'},
       {t:'5. Obrigatórios sinalizados', d:'required no HTML e um indicativo visual (*) no label.'},
       {t:'6. Ordem lógica de tabulação', d:'Navegue com Tab do começo ao fim. A ordem tem que fazer sentido.'},
       {t:'7. Botão claro', d:'"Enviar inscrição" diz mais que "Enviar". type="submit" sempre.'},
       {t:'8. Autocomplete', d:'autocomplete="name", "email", "tel" ajuda o navegador a preencher sozinho.'}
     ],
     dicas:[{icone:'⌨️', txt:'<b>Teste do teclado:</b> percorra seu formulário inteiro só com Tab, Espaço e Enter, sem tocar no mouse. Se der para preencher e enviar, ele é acessível.'}]},

    {tipo:'ordenar', xp:10, titulo:'Aquecimento · Ordem do formulário',
     enunciado:'<p>Ordene os blocos de uma ficha de inscrição bem estruturada.</p>',
     itens:['<form> abre','fieldset "Identificação" (nome, nascimento, CPF)','fieldset "Contato" (e-mail, telefone)','fieldset "Escolaridade" (curso, turma, turno)','fieldset "Interesses" (checkboxes)','textarea de observações','checkbox de aceite dos termos','botão de envio','</form> fecha']},

    {tipo:'multi', xp:12, titulo:'Desafio 1 · Boas práticas',
     pergunta:'Marque <b>todas</b> as práticas corretas num formulário.',
     opcoes:[
       'Usar <code class="inline">placeholder</code> no lugar do <code class="inline">label</code>',
       'Agrupar campos relacionados em <code class="inline">fieldset</code>',
       'Usar <code class="inline">type="email"</code> em vez de <code class="inline">type="text"</code> para e-mail',
       'Marcar campos obrigatórios com <code class="inline">required</code> e com um sinal visual',
       'Botão com texto genérico "Enviar" é sempre melhor que texto específico',
       'Usar <code class="inline">autocomplete</code> nos campos padrão'
     ],
     corretas:[1,2,3,5]},

    {tipo:'codigo', xp:50, titulo:'Desafio 2 ★ A ficha completa', linguagem:'html', abas:['html'],
     enunciado:'<p>Construa a <b>ficha de inscrição da Semana de Tecnologia</b>. Este é o mini-projeto avaliado da aula — cumpra todos os requisitos.</p>',
     requisitos:[
       '<code class="inline">&lt;form&gt;</code> com <code class="inline">method="post"</code>',
       'Quatro <code class="inline">&lt;fieldset&gt;</code> com <code class="inline">&lt;legend&gt;</code>: Identificação, Contato, Escolaridade e Interesses',
       'Nome (<code class="inline">text</code>, <code class="inline">required</code>, <code class="inline">minlength="5"</code>, <code class="inline">autocomplete</code>)',
       'Data de nascimento (<code class="inline">date</code>)',
       'E-mail (<code class="inline">email</code>, <code class="inline">required</code>)',
       'Telefone (<code class="inline">tel</code> com <code class="inline">pattern</code>)',
       'Curso em <code class="inline">&lt;select&gt;</code> com pelo menos 4 opções',
       'Turno em grupo de <code class="inline">radio</code> (mesmo <code class="inline">name</code>)',
       'Oficinas de interesse: pelo menos 5 <code class="inline">checkbox</code>',
       'Nível de experiência com <code class="inline">type="range"</code>',
       '<code class="inline">&lt;textarea&gt;</code> de observações com <code class="inline">maxlength</code>',
       'Checkbox obrigatório de aceite dos termos',
       'Todos os controles com <code class="inline">label for</code> ligado',
       'Botão de envio com texto específico'
     ],
     base:{html:'<h2>Inscrição — Semana de Tecnologia 2026</h2>\n<p><small>Campos marcados com * são obrigatórios.</small></p>\n\n<form method="post">\n\n  <fieldset>\n    <legend>Identificação</legend>\n\n    <p>\n      <label for="nome">Nome completo *</label><br>\n      <input type="text" id="nome" name="nome" required minlength="5" autocomplete="name">\n    </p>\n\n  </fieldset>\n\n  <!-- Contato -->\n\n  <!-- Escolaridade -->\n\n  <!-- Interesses -->\n\n  <button type="submit">Confirmar inscrição</button>\n</form>\n'},
     checks:[
       {re:'<form[^>]*method\\s*=\\s*["\\\']post', msg:'form com POST'},
       {re:'(<fieldset[^>]*>[\\s\\S]*){4}', msg:'Quatro fieldsets'},
       {re:'(<legend[^>]*>[^<]+</legend>[\\s\\S]*){4}', msg:'Quatro legends preenchidas'},
       {re:'minlength\\s*=\\s*["\\\']?5', msg:'Nome com minlength'},
       {re:'autocomplete\\s*=', msg:'autocomplete usado'},
       {re:'type\\s*=\\s*["\\\']date', msg:'Data de nascimento'},
       {re:'type\\s*=\\s*["\\\']email[^>]*required|required[^>]*type\\s*=\\s*["\\\']email', msg:'E-mail obrigatório'},
       {re:'type\\s*=\\s*["\\\']tel[^>]*pattern|pattern[^>]*type\\s*=\\s*["\\\']tel', msg:'Telefone com pattern'},
       {re:'<select[\\s\\S]*(<option[\\s\\S]*){4}', msg:'Select com 4 opções'},
       {re:'type\\s*=\\s*["\\\']radio[^>]*name\\s*=\\s*["\\\'](\\w+)["\\\'][\\s\\S]*type\\s*=\\s*["\\\']radio[^>]*name\\s*=\\s*["\\\']\\1["\\\']', msg:'Rádios agrupados pelo name'},
       {re:'(type\\s*=\\s*["\\\']checkbox[\\s\\S]*){5}', msg:'Cinco checkboxes'},
       {re:'type\\s*=\\s*["\\\']range', msg:'Range de experiência'},
       {re:'<textarea[^>]*maxlength', msg:'Textarea com limite'},
       {re:'type\\s*=\\s*["\\\']checkbox[^>]*required|required[^>]*type\\s*=\\s*["\\\']checkbox', msg:'Aceite dos termos obrigatório'},
       {re:'(<label[^>]*for\\s*=[\\s\\S]*){10}', msg:'Dez ou mais labels ligados'},
       {re:'<button[^>]*type\\s*=\\s*["\\\']submit[^>]*>[^<]{10,}', msg:'Botão com texto específico'}
     ],
     parabens:'Ficha de nível profissional: acessível, validada e organizada. Guarde — em setembro ela ganha CSS.'},

    {tipo:'texto', xp:10, titulo:'Fecho · Teste do teclado', minimo:80, linhas:4,
     enunciado:'<p>Percorra seu formulário só com <b>Tab</b>, <b>Espaço</b> e <b>Enter</b>, sem mouse. Relate: <b>(a)</b> a ordem fez sentido? <b>(b)</b> deu para marcar rádios e checkboxes? <b>(c)</b> algum campo ficou "invisível" para o teclado?</p>'}
  ]
};
