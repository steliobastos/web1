/* =========================================================================
   MAPA DO CURSO — II1LDW Linguagem e Desenvolvimento Web I (80h, anual)
   Datas conferidas contra o Calendário Letivo 2026 do IFCE Campus Horizonte:
     2026.1  09/02 a 30/06   (N1 ate 23/04 | N2 de 24/04)
     2026.2  05/08 a 15/12   (N1 ate 08/10 | N2 de 09/10)
   Encontros: sextas-feiras, 09:45 as 11:45.
   Etapas do ROD (regime seriado anual, arts. 102-105): as quatro etapas do
   calendario viram N1..N4 com pesos 1, 2, 3 e 4 — campo "rod" de cada aula.
     2026.1 N1 -> N1 (peso 1)   2026.1 N2 -> N2 (peso 2)
     2026.2 N1 -> N3 (peso 3)   2026.2 N2 -> N4 (peso 4)
   MP = (1*N1 + 2*N2 + 3*N3 + 4*N4) / 10 · aprovado com MP >= 6,0 e frequencia >= 75%.
   Sextas removidas por feriado: 06/03, 03/04, 01/05, 20/11.
   ========================================================================= */
window.CURSO = {
  disciplina: 'II1LDW — Linguagem e Desenvolvimento Web I',
  curso: 'Técnico em Informática para Internet — Integrado ao Ensino Médio',
  cargaHoraria: '80h (40h teóricas + 40h práticas)',
  horario: 'Sextas-feiras, 09:45 às 11:45',
  aulas: [
    {n:1, id:'M01', data:'2026-02-13', sem:'2026.1', etapa:'N1', rod:'N1', un:'I',   pud:'1.1',            tit:'Ligando a Web: o que acontece quando você digita um endereço'},
    {n:2, id:'M02', data:'2026-02-20', sem:'2026.1', etapa:'N1', rod:'N1', un:'I',   pud:'1.2',            tit:'Estático x Dinâmico: quem monta a página?'},
    {n:3, id:'M03', data:'2026-02-27', sem:'2026.1', etapa:'N1', rod:'N1', un:'I',   pud:'1.3',            tit:'A bancada do dev: VS Code, Live Server e DevTools'},
    {n:4, id:'M04', data:'2026-03-13', sem:'2026.1', etapa:'N1', rod:'N1', un:'II',  pud:'2.1',            tit:'Estrutura básica de um documento HTML'},
    {n:5, id:'M05', data:'2026-03-20', sem:'2026.1', etapa:'N1', rod:'N1', un:'II',  pud:'2.2',            tit:'Elementos: as peças de montar do HTML'},
    {n:6, id:'M06', data:'2026-03-27', sem:'2026.1', etapa:'N1', rod:'N1', un:'II',  pud:'2.3',            tit:'Atributos: dando instruções aos elementos'},
    {n:7, id:'M07', data:'2026-04-10', sem:'2026.1', etapa:'N1', rod:'N1', un:'II',  pud:'2.4, 2.5',       tit:'Parágrafos e formatação de texto'},
    {n:8, id:'M08', data:'2026-04-17', sem:'2026.1', etapa:'N1', rod:'N1', un:'I-II',pud:'1.1–2.5',        tit:'Missão Avaliativa N1 · 2026.1', av:true},
    {n:9, id:'M09', data:'2026-04-24', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.6',            tit:'Links: costurando a Web'},
    {n:10,id:'M10', data:'2026-05-08', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.7',            tit:'Imagens e mídia na página'},
    {n:11,id:'M11', data:'2026-05-15', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.8',            tit:'Tabelas: dados em linhas e colunas'},
    {n:12,id:'M12', data:'2026-05-22', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.9',            tit:'Listas ordenadas, não ordenadas e de definição'},
    {n:13,id:'M13', data:'2026-05-29', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.10',           tit:'HTML semântico: dar sentido, não só aparência'},
    {n:14,id:'M14', data:'2026-06-05', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.11',           tit:'Formulários I: campos, rótulos e envio'},
    {n:15,id:'M15', data:'2026-06-12', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.11',           tit:'Formulários II: tipos de campo e validação'},
    {n:16,id:'M16', data:'2026-06-19', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.1–2.11',       tit:'Projeto: uma página completa só com HTML'},
    {n:17,id:'M17', data:'2026-06-26', sem:'2026.1', etapa:'N2', rod:'N2', un:'II',  pud:'2.1–2.11',       tit:'Missão Avaliativa N2 · 2026.1', av:true},
    {n:18,id:'M18', data:'2026-08-07', sem:'2026.2', etapa:'N1', rod:'N3', un:'II',  pud:'2.1–2.11',       tit:'Retomada: diagnóstico gamificado de HTML'},
    {n:19,id:'M19', data:'2026-08-14', sem:'2026.2', etapa:'N1', rod:'N3', un:'II',  pud:'2.11',           tit:'Formulários III: seleção, múltipla escolha e agrupamento'},
    {n:20,id:'M20', data:'2026-08-21', sem:'2026.2', etapa:'N1', rod:'N3', un:'II',  pud:'2.11',           tit:'Formulários IV: mini-projeto “Ficha de inscrição”'},
    {n:21,id:'M21', data:'2026-08-28', sem:'2026.2', etapa:'N1', rod:'N3', un:'II',  pud:'2.12',           tit:'Canvas: desenhando com código'},
    {n:22,id:'M22', data:'2026-09-04', sem:'2026.2', etapa:'N1', rod:'N3', un:'II',  pud:'2.13, 2.14',     tit:'HTML5 e as APIs do navegador'},
    {n:23,id:'M23', data:'2026-09-11', sem:'2026.2', etapa:'N1', rod:'N3', un:'III', pud:'3.1',            tit:'CSS I: ligando o CSS e dominando os seletores'},
    {n:24,id:'M24', data:'2026-09-18', sem:'2026.2', etapa:'N1', rod:'N3', un:'III', pud:'3.2, 3.3',       tit:'CSS II: cores, fundos e texto'},
    {n:25,id:'M25', data:'2026-09-25', sem:'2026.2', etapa:'N1', rod:'N3', un:'III', pud:'3.8, 3.9, 3.10', tit:'CSS III: o box model — borda, margem e padding'},
    {n:26,id:'M26', data:'2026-10-02', sem:'2026.2', etapa:'N1', rod:'N3', un:'II-III',pud:'2.12–3.10',    tit:'Missão Avaliativa N1 · 2026.2', av:true},
    {n:27,id:'M27', data:'2026-10-09', sem:'2026.2', etapa:'N2', rod:'N4', un:'III', pud:'3.4, 3.5, 3.7',  tit:'CSS IV: links, listas e tabelas com estilo'},
    {n:28,id:'M28', data:'2026-10-16', sem:'2026.2', etapa:'N2', rod:'N4', un:'III', pud:'3.11, 3.12',     tit:'CSS V: posicionamento e alinhamento'},
    {n:29,id:'M29', data:'2026-10-23', sem:'2026.2', etapa:'N2', rod:'N4', un:'IV',  pud:'4.1–4.4',        tit:'JS I: primeiros comandos, variáveis e tipos'},
    {n:30,id:'M30', data:'2026-10-30', sem:'2026.2', etapa:'N2', rod:'N4', un:'IV',  pud:'4.5, 4.6',       tit:'JS II: expressões, operadores e comandos'},
    {n:31,id:'M31', data:'2026-11-06', sem:'2026.2', etapa:'N2', rod:'N4', un:'IV',  pud:'4.10',           tit:'JS III: decisões com if, else e switch'},
    {n:32,id:'M32', data:'2026-11-13', sem:'2026.2', etapa:'N2', rod:'N4', un:'IV',  pud:'4.10',           tit:'JS IV: repetição com for e while'},
    {n:33,id:'M33', data:'2026-11-27', sem:'2026.2', etapa:'N2', rod:'N4', un:'IV',  pud:'4.7',            tit:'JS V: funções — empacotando o que se repete'},
    {n:34,id:'M34', data:'2026-12-04', sem:'2026.2', etapa:'N2', rod:'N4', un:'IV',  pud:'4.8, 4.9',       tit:'JS VI: objetos, vetores e o DOM'},
    {n:35,id:'M35', data:'2026-12-11', sem:'2026.2', etapa:'N2', rod:'N4', un:'IV',  pud:'1.1–4.10',       tit:'Missão Avaliativa N2 + Projeto Final', av:true}
  ],
  marcos: [
    {data:'2026-02-09', txt:'Início do período letivo 2026.1', tipo:'inicio'},
    {data:'2026-03-06', txt:'Feriado — Emancipação política de Horizonte (sexta sem aula)', tipo:'feriado'},
    {data:'2026-04-03', txt:'Feriado — Paixão de Cristo (sexta sem aula)', tipo:'feriado'},
    {data:'2026-04-23', txt:'Fim da Etapa N1 · 2026.1', tipo:'etapa'},
    {data:'2026-05-01', txt:'Feriado — Dia do Trabalho (sexta sem aula)', tipo:'feriado'},
    {data:'2026-06-30', txt:'Fim do período letivo 2026.1', tipo:'fim'},
    {data:'2026-08-05', txt:'Início do período letivo 2026.2', tipo:'inicio'},
    {data:'2026-10-08', txt:'Fim da Etapa N1 · 2026.2', tipo:'etapa'},
    {data:'2026-11-20', txt:'Feriado — Consciência Negra (sexta sem aula)', tipo:'feriado'},
    {data:'2026-12-15', txt:'Fim do período letivo 2026.2', tipo:'fim'},
    {data:'2026-12-16', txt:'Provas finais e fechamento do Q-Acadêmico (16 a 18/12)', tipo:'final'}
  ],
  pesosROD: { N1:1, N2:2, N3:3, N4:4 },
  sabadosLetivos2026_2: ['2026-08-15','2026-08-29','2026-09-12','2026-09-26','2026-10-17','2026-10-24','2026-11-07','2026-11-28','2026-12-05','2026-12-12']
};
