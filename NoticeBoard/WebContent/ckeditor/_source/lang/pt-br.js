/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
* @fileOverview
*/

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['pt-br'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : 'Editor de texto rico, %1',
	editorHelp : 'Pressione ALT+0 para ajuda',

	// ARIA descriptions.
	toolbars	: 'Barra de Ferramentas do Editor',
	editor		: 'Editor de Texto',

	// Toolbar buttons without dialogs.
	source			: 'C처digo-Fonte',
	newPage			: 'Novo',
	save			: 'Salvar',
	preview			: 'Visualizar',
	cut				: 'Recortar',
	copy			: 'Copiar',
	paste			: 'Colar',
	print			: 'Imprimir',
	underline		: 'Sublinhado',
	bold			: 'Negrito',
	italic			: 'It찼lico',
	selectAll		: 'Selecionar Tudo',
	removeFormat	: 'Remover Formata챌찾o',
	strike			: 'Tachado',
	subscript		: 'Subscrito',
	superscript		: 'Sobrescrito',
	horizontalrule	: 'Inserir Linha Horizontal',
	pagebreak		: 'Inserir Quebra de P찼gina',
	pagebreakAlt		: 'Quebra de P찼gina',
	unlink			: 'Remover Link',
	undo			: 'Desfazer',
	redo			: 'Refazer',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Localizar no Servidor',
		url				: 'URL',
		protocol		: 'Protocolo',
		upload			: 'Enviar ao Servidor',
		uploadSubmit	: 'Enviar para o Servidor',
		image			: 'Imagem',
		flash			: 'Flash',
		form			: 'Formul찼rio',
		checkbox		: 'Caixa de Sele챌찾o',
		radio			: 'Bot찾o de Op챌찾o',
		textField		: 'Caixa de Texto',
		textarea		: '횁rea de Texto',
		hiddenField		: 'Campo Oculto',
		button			: 'Bot찾o',
		select			: 'Caixa de Listagem',
		imageButton		: 'Bot찾o de Imagem',
		notSet			: '<n찾o ajustado>',
		id				: 'Id',
		name			: 'Nome',
		langDir			: 'Dire챌찾o do idioma',
		langDirLtr		: 'Esquerda para Direita (LTR)',
		langDirRtl		: 'Direita para Esquerda (RTL)',
		langCode		: 'Idioma',
		longDescr		: 'Descri챌찾o da URL',
		cssClass		: 'Classe de CSS',
		advisoryTitle	: 'T챠tulo',
		cssStyle		: 'Estilos',
		ok				: 'OK',
		cancel			: 'Cancelar',
		close			: 'Fechar',
		preview			: 'Visualizar',
		generalTab		: 'Geral',
		advancedTab		: 'Avan챌ado',
		validateNumberFailed : 'Este valor n찾o 챕 um n첬mero.',
		confirmNewPage	: 'Todas as mudan챌as n찾o salvas ser찾o perdidas. Tem certeza de que quer abrir uma nova p찼gina?',
		confirmCancel	: 'Algumas op챌천es foram alteradas. Tem certeza de que quer fechar a caixa de di찼logo?',
		options			: 'Op챌천es',
		target			: 'Destino',
		targetNew		: 'Nova Janela (_blank)',
		targetTop		: 'Janela de Cima (_top)',
		targetSelf		: 'Mesma Janela (_self)',
		targetParent	: 'Janela Pai (_parent)',
		langDirLTR		: 'Esquerda para Direita (LTR)',
		langDirRTL		: 'Direita para Esquerda (RTL)',
		styles			: 'Estilo',
		cssClasses		: 'Classes',
		width			: 'Largura',
		height			: 'Altura',
		align			: 'Alinhamento',
		alignLeft		: 'Esquerda',
		alignRight		: 'Direita',
		alignCenter		: 'Centralizado',
		alignTop		: 'Superior',
		alignMiddle		: 'Centralizado',
		alignBottom		: 'Inferior',
		invalidValue	: 'Valor inv찼lido.',
		invalidHeight	: 'A altura tem que ser um n첬mero',
		invalidWidth	: 'A largura tem que ser um n첬mero.',
		invalidCssLength	: 'O valor do campo "%1" deve ser um n첬mero positivo opcionalmente seguido por uma v찼lida unidade de medida de CSS (px, %, in, cm, mm, em, ex, pt, or pc).',
		invalidHtmlLength	: 'O valor do campo "%1" deve ser um n첬mero positivo opcionalmente seguido por uma v찼lida unidade de medida de HTML (px or %).',
		invalidInlineStyle	: 'O valor v찼lido para estilo deve conter uma ou mais tuplas no formato "nome : valor", separados por ponto e v챠rgula.',
		cssLengthTooltip	: 'Insira um n첬mero para valor em pixels ou um n첬mero seguido de uma v찼lida unidade de medida de CSS (px, %, in, cm, mm, em, ex, pt, or pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, indispon챠vel</span>'
	},

	contextmenu :
	{
		options : 'Op챌천es Menu de Contexto'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Inserir Caractere Especial',
		title		: 'Selecione um Caractere Especial',
		options : 'Op챌천es de Caractere Especial'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Inserir/Editar Link',
		other 		: '<outro>',
		menu		: 'Editar Link',
		title		: 'Editar Link',
		info		: 'Informa챌천es',
		target		: 'Destino',
		upload		: 'Enviar ao Servidor',
		advanced	: 'Avan챌ado',
		type		: 'Tipo de hiperlink',
		toUrl		: 'URL',
		toAnchor	: '횂ncora nesta p찼gina',
		toEmail		: 'E-Mail',
		targetFrame		: '<frame>',
		targetPopup		: '<janela popup>',
		targetFrameName	: 'Nome do Frame de Destino',
		targetPopupName	: 'Nome da Janela Pop-up',
		popupFeatures	: 'Propriedades da Janela Pop-up',
		popupResizable	: 'Redimension찼vel',
		popupStatusBar	: 'Barra de Status',
		popupLocationBar: 'Barra de Endere챌os',
		popupToolbar	: 'Barra de Ferramentas',
		popupMenuBar	: 'Barra de Menus',
		popupFullScreen	: 'Modo Tela Cheia (IE)',
		popupScrollBars	: 'Barras de Rolagem',
		popupDependent	: 'Dependente (Netscape)',
		popupLeft		: 'Esquerda',
		popupTop		: 'Topo',
		id				: 'Id',
		langDir			: 'Dire챌찾o do idioma',
		langDirLTR		: 'Esquerda para Direita (LTR)',
		langDirRTL		: 'Direita para Esquerda (RTL)',
		acccessKey		: 'Chave de Acesso',
		name			: 'Nome',
		langCode			: 'Dire챌찾o do idioma',
		tabIndex			: '횒ndice de Tabula챌찾o',
		advisoryTitle		: 'T챠tulo',
		advisoryContentType	: 'Tipo de Conte첬do',
		cssClasses		: 'Classe de CSS',
		charset			: 'Charset do Link',
		styles			: 'Estilos',
		rel			: 'Tipo de Rela챌찾o',
		selectAnchor		: 'Selecione uma 창ncora',
		anchorName		: 'Nome da 창ncora',
		anchorId			: 'Id da 창ncora',
		emailAddress		: 'Endere챌o E-Mail',
		emailSubject		: 'Assunto da Mensagem',
		emailBody		: 'Corpo da Mensagem',
		noAnchors		: '(N찾o h찼 창ncoras no documento)',
		noUrl			: 'Por favor, digite o endere챌o do Link',
		noEmail			: 'Por favor, digite o endere챌o de e-mail'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Inserir/Editar 횂ncora',
		menu		: 'Formatar 횂ncora',
		title		: 'Formatar 횂ncora',
		name		: 'Nome da 횂ncora',
		errorName	: 'Por favor, digite o nome da 창ncora',
		remove		: 'Remover 횂ncora'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Propriedades da Lista Numerada',
		bulletedTitle		: 'Propriedades da Lista sem Numeros',
		type				: 'Tipo',
		start				: 'In챠cio',
		validateStartNumber				:'O n첬mero inicial da lista deve ser um n첬mero inteiro.',
		circle				: 'C챠rculo',
		disc				: 'Disco',
		square				: 'Quadrado',
		none				: 'Nenhum',
		notset				: '<n찾o definido>',
		armenian			: 'Numera챌찾o Arm챗na',
		georgian			: 'Numera챌찾o da Ge처rgia (an, ban, gan, etc.)',
		lowerRoman			: 'Numera챌찾o Romana min첬scula (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'Numera챌찾o Romana mai첬scula (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'Numera챌찾o Alfab챕tica min첬scula (a, b, c, d, e, etc.)',
		upperAlpha			: 'Numera챌찾o Alfab챕tica Mai첬scula (A, B, C, D, E, etc.)',
		lowerGreek			: 'Numera챌찾o Grega min첬scula (alpha, beta, gamma, etc.)',
		decimal				: 'Numera챌찾o Decimal (1, 2, 3, etc.)',
		decimalLeadingZero	: 'Numera챌찾o Decimal com zeros (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Localizar e Substituir',
		find				: 'Localizar',
		replace				: 'Substituir',
		findWhat			: 'Procurar por:',
		replaceWith			: 'Substituir por:',
		notFoundMsg			: 'O texto especificado n찾o foi encontrado.',
		findOptions			: 'Op챌천es',
		matchCase			: 'Coincidir Mai첬sculas/Min첬sculas',
		matchWord			: 'Coincidir a palavra inteira',
		matchCyclic			: 'Coincidir c챠clico',
		replaceAll			: 'Substituir Tudo',
		replaceSuccessMsg	: '%1 ocorr챗ncia(s) substitu챠da(s).'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabela',
		title		: 'Formatar Tabela',
		menu		: 'Formatar Tabela',
		deleteTable	: 'Apagar Tabela',
		rows		: 'Linhas',
		columns		: 'Colunas',
		border		: 'Borda',
		widthPx		: 'pixels',
		widthPc		: '%',
		widthUnit	: 'unidade largura',
		cellSpace	: 'Espa챌amento',
		cellPad		: 'Margem interna',
		caption		: 'Legenda',
		summary		: 'Resumo',
		headers		: 'Cabe챌alho',
		headersNone		: 'Nenhum',
		headersColumn	: 'Primeira coluna',
		headersRow		: 'Primeira linha',
		headersBoth		: 'Ambos',
		invalidRows		: 'O n첬mero de linhas tem que ser um n첬mero maior que 0.',
		invalidCols		: 'O n첬mero de colunas tem que ser um n첬mero maior que 0.',
		invalidBorder	: 'O tamanho da borda tem que ser um n첬mero.',
		invalidWidth	: 'A largura da tabela tem que ser um n첬mero.',
		invalidHeight	: 'A altura da tabela tem que ser um n첬mero.',
		invalidCellSpacing	: 'O espa챌amento das c챕lulas tem que ser um n첬mero.',
		invalidCellPadding	: 'A margem interna das c챕lulas tem que ser um n첬mero.',

		cell :
		{
			menu			: 'C챕lula',
			insertBefore	: 'Inserir c챕lula a esquerda',
			insertAfter		: 'Inserir c챕lula a direita',
			deleteCell		: 'Remover C챕lulas',
			merge			: 'Mesclar C챕lulas',
			mergeRight		: 'Mesclar com c챕lula a direita',
			mergeDown		: 'Mesclar com c챕lula abaixo',
			splitHorizontal	: 'Dividir c챕lula horizontalmente',
			splitVertical	: 'Dividir c챕lula verticalmente',
			title			: 'Propriedades da c챕lula',
			cellType		: 'Tipo de c챕lula',
			rowSpan			: 'Linhas cobertas',
			colSpan			: 'Colunas cobertas',
			wordWrap		: 'Quebra de palavra',
			hAlign			: 'Alinhamento horizontal',
			vAlign			: 'Alinhamento vertical',
			alignBaseline	: 'Patamar de alinhamento',
			bgColor			: 'Cor de fundo',
			borderColor		: 'Cor das bordas',
			data			: 'Dados',
			header			: 'Cabe챌alho',
			yes				: 'Sim',
			no				: 'N찾o',
			invalidWidth	: 'A largura da c챕lula tem que ser um n첬mero.',
			invalidHeight	: 'A altura da c챕lula tem que ser um n첬mero.',
			invalidRowSpan	: 'Linhas cobertas tem que ser um n첬mero inteiro.',
			invalidColSpan	: 'Colunas cobertas tem que ser um n첬mero inteiro.',
			chooseColor		: 'Escolher'
		},

		row :
		{
			menu			: 'Linha',
			insertBefore	: 'Inserir linha acima',
			insertAfter		: 'Inserir linha abaixo',
			deleteRow		: 'Remover Linhas'
		},

		column :
		{
			menu			: 'Coluna',
			insertBefore	: 'Inserir coluna a esquerda',
			insertAfter		: 'Inserir coluna a direita',
			deleteColumn	: 'Remover Colunas'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Formatar Bot찾o',
		text		: 'Texto (Valor)',
		type		: 'Tipo',
		typeBtn		: 'Bot찾o',
		typeSbm		: 'Enviar',
		typeRst		: 'Limpar'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Formatar Caixa de Sele챌찾o',
		radioTitle	: 'Formatar Bot찾o de Op챌찾o',
		value		: 'Valor',
		selected	: 'Selecionado'
	},

	// Form Dialog.
	form :
	{
		title		: 'Formatar Formul찼rio',
		menu		: 'Formatar Formul찼rio',
		action		: 'A챌찾o',
		method		: 'M챕todo',
		encoding	: 'Codifica챌찾o'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Formatar Caixa de Listagem',
		selectInfo	: 'Informa챌천es',
		opAvail		: 'Op챌천es dispon챠veis',
		value		: 'Valor',
		size		: 'Tamanho',
		lines		: 'linhas',
		chkMulti	: 'Permitir m첬ltiplas sele챌천es',
		opText		: 'Texto',
		opValue		: 'Valor',
		btnAdd		: 'Adicionar',
		btnModify	: 'Modificar',
		btnUp		: 'Para cima',
		btnDown		: 'Para baixo',
		btnSetValue : 'Definir como selecionado',
		btnDelete	: 'Remover'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Formatar 횁rea de Texto',
		cols		: 'Colunas',
		rows		: 'Linhas'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Formatar Caixa de Texto',
		name		: 'Nome',
		value		: 'Valor',
		charWidth	: 'Comprimento (em caracteres)',
		maxChars	: 'N첬mero M찼ximo de Caracteres',
		type		: 'Tipo',
		typeText	: 'Texto',
		typePass	: 'Senha'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Formatar Campo Oculto',
		name	: 'Nome',
		value	: 'Valor'
	},

	// Image Dialog.
	image :
	{
		title		: 'Formatar Imagem',
		titleButton	: 'Formatar Bot찾o de Imagem',
		menu		: 'Formatar Imagem',
		infoTab		: 'Informa챌천es da Imagem',
		btnUpload	: 'Enviar para o Servidor',
		upload		: 'Enviar',
		alt			: 'Texto Alternativo',
		lockRatio	: 'Travar Propor챌천es',
		resetSize	: 'Redefinir para o Tamanho Original',
		border		: 'Borda',
		hSpace		: 'HSpace',
		vSpace		: 'VSpace',
		alertUrl	: 'Por favor, digite a URL da imagem.',
		linkTab		: 'Link',
		button2Img	: 'Deseja transformar o bot찾o de imagem em uma imagem comum?',
		img2Button	: 'Deseja transformar a imagem em um bot찾o de imagem?',
		urlMissing	: 'URL da imagem est찼 faltando.',
		validateBorder	: 'A borda deve ser um n첬mero inteiro.',
		validateHSpace	: 'O HSpace deve ser um n첬mero inteiro.',
		validateVSpace	: 'O VSpace deve ser um n첬mero inteiro.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Propriedades do Flash',
		propertiesTab	: 'Propriedades',
		title			: 'Propriedades do Flash',
		chkPlay			: 'Tocar Automaticamente',
		chkLoop			: 'Tocar Infinitamente',
		chkMenu			: 'Habilita Menu Flash',
		chkFull			: 'Permitir tela cheia',
 		scale			: 'Escala',
		scaleAll		: 'Mostrar tudo',
		scaleNoBorder	: 'Sem Borda',
		scaleFit		: 'Escala Exata',
		access			: 'Acesso ao script',
		accessAlways	: 'Sempre',
		accessSameDomain: 'Acessar Mesmo Dom챠nio',
		accessNever		: 'Nunca',
		alignAbsBottom	: 'Inferior Absoluto',
		alignAbsMiddle	: 'Centralizado Absoluto',
		alignBaseline	: 'Baseline',
		alignTextTop	: 'Superior Absoluto',
		quality			: 'Qualidade',
		qualityBest		: 'Qualidade Melhor',
		qualityHigh		: 'Qualidade Alta',
		qualityAutoHigh	: 'Qualidade Alta Autom찼tica',
		qualityMedium	: 'Qualidade M챕dia',
		qualityAutoLow	: 'Qualidade Baixa Autom찼tica',
		qualityLow		: 'Qualidade Baixa',
		windowModeWindow: 'Janela',
		windowModeOpaque: 'Opaca',
		windowModeTransparent : 'Transparente',
		windowMode		: 'Modo da janela',
		flashvars		: 'Vari찼veis do Flash',
		bgcolor			: 'Cor do Plano de Fundo',
		hSpace			: 'HSpace',
		vSpace			: 'VSpace',
		validateSrc		: 'Por favor, digite o endere챌o do link',
		validateHSpace	: 'O HSpace tem que ser um n첬mero',
		validateVSpace	: 'O VSpace tem que ser um n첬mero.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Verificar Ortografia',
		title			: 'Corretor Ortogr찼fico',
		notAvailable	: 'Desculpe, o servi챌o n찾o est찼 dispon챠vel no momento.',
		errorLoading	: 'Erro carregando servidor de aplica챌찾o: %s.',
		notInDic		: 'N찾o encontrada',
		changeTo		: 'Alterar para',
		btnIgnore		: 'Ignorar uma vez',
		btnIgnoreAll	: 'Ignorar Todas',
		btnReplace		: 'Alterar',
		btnReplaceAll	: 'Alterar Todas',
		btnUndo			: 'Desfazer',
		noSuggestions	: '-sem sugest천es de ortografia-',
		progress		: 'Verifica챌찾o ortogr찼fica em andamento...',
		noMispell		: 'Verifica챌찾o encerrada: N찾o foram encontrados erros de ortografia',
		noChanges		: 'Verifica챌찾o ortogr찼fica encerrada: N찾o houve altera챌천es',
		oneChange		: 'Verifica챌찾o ortogr찼fica encerrada: Uma palavra foi alterada',
		manyChanges		: 'Verifica챌찾o ortogr찼fica encerrada: %1 palavras foram alteradas',
		ieSpellDownload	: 'A verifica챌찾o ortogr찼fica n찾o foi instalada. Voc챗 gostaria de realizar o download agora?'
	},

	smiley :
	{
		toolbar	: 'Emoticon',
		title	: 'Inserir Emoticon',
		options : 'Op챌천es de Emoticons'
	},

	elementsPath :
	{
		eleLabel : 'Caminho dos Elementos',
		eleTitle : 'Elemento %1'
	},

	numberedlist	: 'Lista numerada',
	bulletedlist	: 'Lista sem n첬meros',
	indent			: 'Aumentar Recuo',
	outdent			: 'Diminuir Recuo',

	justify :
	{
		left	: 'Alinhar Esquerda',
		center	: 'Centralizar',
		right	: 'Alinhar Direita',
		block	: 'Justificado'
	},

	blockquote : 'Cita챌찾o',

	clipboard :
	{
		title		: 'Colar',
		cutError	: 'As configura챌천es de seguran챌a do seu navegador n찾o permitem que o editor execute opera챌천es de recortar automaticamente. Por favor, utilize o teclado para recortar (Ctrl/Cmd+X).',
		copyError	: 'As configura챌천es de seguran챌a do seu navegador n찾o permitem que o editor execute opera챌천es de copiar automaticamente. Por favor, utilize o teclado para copiar (Ctrl/Cmd+C).',
		pasteMsg	: 'Transfira o link usado na caixa usando o teclado com (<STRONG>Ctrl/Cmd+V</STRONG>) e <STRONG>OK</STRONG>.',
		securityMsg	: 'As configura챌천es de seguran챌a do seu navegador n찾o permitem que o editor acesse os dados da 찼rea de transfer챗ncia diretamente. Por favor cole o conte첬do manualmente nesta janela.',
		pasteArea	: '횁rea para Colar'
	},

	pastefromword :
	{
		confirmCleanup	: 'O texto que voc챗 deseja colar parece ter sido copiado do Word. Voc챗 gostaria de remover a formata챌찾o antes de colar?',
		toolbar			: 'Colar do Word',
		title			: 'Colar do Word',
		error			: 'N찾o foi poss챠vel limpar os dados colados devido a um erro interno'
	},

	pasteText :
	{
		button	: 'Colar como Texto sem Formata챌찾o',
		title	: 'Colar como Texto sem Formata챌찾o'
	},

	templates :
	{
		button			: 'Modelos de layout',
		title			: 'Modelo de layout de conte첬do',
		options : 'Op챌천es de Template',
		insertOption	: 'Substituir o conte첬do atual',
		selectPromptMsg	: 'Selecione um modelo de layout para ser aberto no editor<br>(o conte첬do atual ser찼 perdido):',
		emptyListMsg	: '(N찾o foram definidos modelos de layout)'
	},

	showBlocks : 'Mostrar blocos de c처digo',

	stylesCombo :
	{
		label		: 'Estilo',
		panelTitle	: 'Estilos de Formata챌찾o',
		panelTitle1	: 'Estilos de bloco',
		panelTitle2	: 'Estilos de texto corrido',
		panelTitle3	: 'Estilos de objeto'
	},

	format :
	{
		label		: 'Formata챌찾o',
		panelTitle	: 'Formata챌찾o',

		tag_p		: 'Normal',
		tag_pre		: 'Formatado',
		tag_address	: 'Endere챌o',
		tag_h1		: 'T챠tulo 1',
		tag_h2		: 'T챠tulo 2',
		tag_h3		: 'T챠tulo 3',
		tag_h4		: 'T챠tulo 4',
		tag_h5		: 'T챠tulo 5',
		tag_h6		: 'T챠tulo 6',
		tag_div		: 'Normal (DIV)'
	},

	div :
	{
		title				: 'Criar Container de DIV',
		toolbar				: 'Criar Container de DIV',
		cssClassInputLabel	: 'Classes de CSS',
		styleSelectLabel	: 'Estilo',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'C처digo de Idioma',
		inlineStyleInputLabel	: 'Estilo Inline',
		advisoryTitleInputLabel	: 'T챠tulo Consulta',
		langDirLabel		: 'Dire챌찾o da Escrita',
		langDirLTRLabel		: 'Esquerda para Direita (LTR)',
		langDirRTLLabel		: 'Direita para Esquerda (RTL)',
		edit				: 'Editar Div',
		remove				: 'Remover Div'
  	},

	iframe :
	{
		title		: 'Propriedade do IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Insira a URL do iframe',
		scrolling	: 'Abilita scrollbars',
		border		: 'Mostra borda do iframe'
	},

	font :
	{
		label		: 'Fonte',
		voiceLabel	: 'Fonte',
		panelTitle	: 'Fonte'
	},

	fontSize :
	{
		label		: 'Tamanho',
		voiceLabel	: 'Tamanho da fonte',
		panelTitle	: 'Tamanho'
	},

	colorButton :
	{
		textColorTitle	: 'Cor do Texto',
		bgColorTitle	: 'Cor do Plano de Fundo',
		panelTitle		: 'Cores',
		auto			: 'Autom찼tico',
		more			: 'Mais Cores...'
	},

	colors :
	{
		'000' : 'Preto',
		'800000' : 'Foquete',
		'8B4513' : 'Marrom 1',
		'2F4F4F' : 'Cinza 1',
		'008080' : 'Cerceta',
		'000080' : 'Azul Marinho',
		'4B0082' : '횒ndigo',
		'696969' : 'Cinza 2',
		'B22222' : 'Tijolo de Fogo',
		'A52A2A' : 'Marrom 2',
		'DAA520' : 'Vara Dourada',
		'006400' : 'Verde Escuro',
		'40E0D0' : 'Turquesa',
		'0000CD' : 'Azul M챕dio',
		'800080' : 'Roxo',
		'808080' : 'Cinza 3',
		'F00' : 'Vermelho',
		'FF8C00' : 'Laranja Escuro',
		'FFD700' : 'Dourado',
		'008000' : 'Verde',
		'0FF' : 'Ciano',
		'00F' : 'Azul',
		'EE82EE' : 'Violeta',
		'A9A9A9' : 'Cinza Escuro',
		'FFA07A' : 'Salm찾o Claro',
		'FFA500' : 'Laranja',
		'FFFF00' : 'Amarelo',
		'00FF00' : 'Lima',
		'AFEEEE' : 'Turquesa P찼lido',
		'ADD8E6' : 'Azul Claro',
		'DDA0DD' : 'Ameixa',
		'D3D3D3' : 'Cinza Claro',
		'FFF0F5' : 'Lavanda 1',
		'FAEBD7' : 'Branco Antiguidade',
		'FFFFE0' : 'Amarelo Claro',
		'F0FFF0' : 'Orvalho',
		'F0FFFF' : 'Azure',
		'F0F8FF' : 'Azul Alice',
		'E6E6FA' : 'Lavanda 2',
		'FFF' : 'Branco'
	},

	scayt :
	{
		title			: 'Corre챌찾o ortogr찼fica durante a digita챌찾o',
		opera_title		: 'N찾o suportado no Opera',
		enable			: 'Habilitar corre챌찾o ortogr찼fica durante a digita챌찾o',
		disable			: 'Desabilitar corre챌찾o ortogr찼fica durante a digita챌찾o',
		about			: 'Sobre a corre챌찾o ortogr찼fica durante a digita챌찾o',
		toggle			: 'Ativar/desativar corre챌찾o ortogr찼fica durante a digita챌찾o',
		options			: 'Op챌천es',
		langs			: 'Idiomas',
		moreSuggestions	: 'Mais sugest천es',
		ignore			: 'Ignorar',
		ignoreAll		: 'Ignorar todas',
		addWord			: 'Adicionar palavra',
		emptyDic		: 'O nome do dicion찼rio n찾o deveria estar vazio.',
		noSuggestions	: 'sem sugest천es de ortografia',
		optionsTab		: 'Op챌천es',
		allCaps			: 'Ignorar palavras mai첬sculas',
		ignoreDomainNames : 'Ignorar nomes de dom챠nio',
		mixedCase		: 'Ignorar palavras com mai첬sculas e min첬sculas misturadas',
		mixedWithDigits	: 'Ignorar palavras com n첬meros',

		languagesTab	: 'Idiomas',

		dictionariesTab	: 'Dicion찼rios',
		dic_field_name	: 'Nome do Dicion찼rio',
		dic_create		: 'Criar',
		dic_restore		: 'Restaurar',
		dic_delete		: 'Excluir',
		dic_rename		: 'Renomear',
		dic_info		: 'Inicialmente, o dicion찼rio do usu찼rio fica armazenado em um Cookie. Por챕m, Cookies tem tamanho limitado, portanto quand o dicion찼rio do usu찼rio atingir o tamanho limite poder찼 ser armazenado no nosso servidor. Para armazenar seu dicion찼rio pessoal no nosso servidor dever찼 especificar um nome para ele. Se j찼 tiver um dicion찼rio armazenado por favor especifique o seu nome e clique em Restaurar.',

		aboutTab		: 'Sobre'
	},

	about :
	{
		title		: 'Sobre o CKEditor',
		dlgTitle	: 'Sobre o CKEditor',
		help	: 'Verifique o $1 para obter ajuda.',
		userGuide : 'Guia do Usu찼rio do CKEditor',
		moreInfo	: 'Para informa챌천es sobre a licen챌a por favor visite o nosso site:',
		copy		: 'Copyright &copy; $1. Todos os direitos reservados.'
	},

	maximize : 'Maximizar',
	minimize : 'Minimize',

	fakeobjects :
	{
		anchor		: '횂ncora',
		flash		: 'Anima챌찾o em Flash',
		iframe		: 'IFrame',
		hiddenfield	: 'Campo Oculto',
		unknown		: 'Objeto desconhecido'
	},

	resize : 'Arraste para redimensionar',

	colordialog :
	{
		title		: 'Selecione uma Cor',
		options	:	'Op챌천es de Cor',
		highlight	: 'Grifar',
		selected	: 'Cor Selecionada',
		clear		: 'Limpar'
	},

	toolbarCollapse	: 'Diminuir Barra de Ferramentas',
	toolbarExpand	: 'Aumentar Barra de Ferramentas',

	toolbarGroups :
	{
		document : 'Documento',
		clipboard : 'Clipboard/Desfazer',
		editing : 'Edi챌찾o',
		forms : 'Formul찼rios',
		basicstyles : 'Estilos B찼sicos',
		paragraph : 'Paragrafo',
		links : 'Links',
		insert : 'Inserir',
		styles : 'Estilos',
		colors : 'Cores',
		tools : 'Ferramentas'
	},

	bidi :
	{
		ltr : 'Dire챌찾o do texto da esquerda para a direita',
		rtl : 'Dire챌찾o do texto da direita para a esquerda'
	},

	docprops :
	{
		label : 'Propriedades Documento',
		title : 'Propriedades Documento',
		design : 'Design',
		meta : 'Meta Dados',
		chooseColor : 'Escolher',
		other : '<outro>',
		docTitle :	'T챠tulo da P찼gina',
		charset : 	'Codifica챌찾o de Caracteres',
		charsetOther : 'Outra Codifica챌찾o de Caracteres',
		charsetASCII : 'ASCII',
		charsetCE : 'Europa Central',
		charsetCT : 'Chin챗s Tradicional (Big5)',
		charsetCR : 'Cir챠lico',
		charsetGR : 'Grego',
		charsetJP : 'Japon챗s',
		charsetKR : 'Coreano',
		charsetTR : 'Turco',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Europa Ocidental',
		docType : 'Cabe챌alho Tipo de Documento',
		docTypeOther : 'Outro Tipo de Documento',
		xhtmlDec : 'Incluir Declara챌천es XHTML',
		bgColor : 'Cor do Plano de Fundo',
		bgImage : 'URL da Imagem de Plano de Fundo',
		bgFixed : 'Plano de Fundo Fixo',
		txtColor : 'Cor do Texto',
		margin : 'Margens da P찼gina',
		marginTop : 'Superior',
		marginLeft : 'Inferior',
		marginRight : 'Direita',
		marginBottom : 'Inferior',
		metaKeywords : 'Palavras-chave de Indexa챌찾o do Documento (separadas por v챠rgula)',
		metaDescription : 'Descri챌찾o do Documento',
		metaAuthor : 'Autor',
		metaCopyright : 'Direitos Autorais',
		previewHtml : '<p>Este 챕 um <strong>texto de exemplo</strong>. Voc챗 est찼 usando <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
