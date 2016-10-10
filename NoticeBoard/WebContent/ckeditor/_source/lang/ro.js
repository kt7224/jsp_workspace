/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Romanian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ro'] =
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
	editorTitle : 'Rich text editor, %1', // MISSING
	editorHelp : 'Apas훱 ALT 0 pentru ajutor',

	// ARIA descriptions.
	toolbars	: 'Editeaz훱 bara de unelte',
	editor		: 'Rich Text Editor',

	// Toolbar buttons without dialogs.
	source			: 'Sursa',
	newPage			: 'Pagin훱 nou훱',
	save			: 'Salveaz훱',
	preview			: 'Previzualizare',
	cut				: 'Taie',
	copy			: 'Copiaz훱',
	paste			: 'Adaug훱',
	print			: 'Printeaz훱',
	underline		: 'Subliniat (underline)',
	bold			: '횓ngro힊at (bold)',
	italic			: '횓nclinat (italic)',
	selectAll		: 'Selecteaz훱 tot',
	removeFormat	: '횓nl훱tur훱 formatarea',
	strike			: 'T훱iat (strike through)',
	subscript		: 'Indice (subscript)',
	superscript		: 'Putere (superscript)',
	horizontalrule	: 'Insereaz훱 linie orizontal훱',
	pagebreak		: 'Insereaz훱 separator de pagin훱 (Page Break)',
	pagebreakAlt		: 'Page Break',
	unlink			: '횓nl훱tur훱 link (leg훱tur훱 web)',
	undo			: 'Starea anterioar훱 (undo)',
	redo			: 'Starea ulterioar훱 (redo)',

	// Common messages and labels.
	common :
	{
		browseServer	: 'R훱sfoie힊te server',
		url				: 'URL',
		protocol		: 'Protocol',
		upload			: '횓ncarc훱',
		uploadSubmit	: 'Trimite la server',
		image			: 'Imagine',
		flash			: 'Flash',
		form			: 'Formular (Form)',
		checkbox		: 'Bif훱 (Checkbox)',
		radio			: 'Buton radio (RadioButton)',
		textField		: 'C창mp text (TextField)',
		textarea		: 'Suprafa큇훱 text (Textarea)',
		hiddenField		: 'C창mp ascuns (HiddenField)',
		button			: 'Buton',
		select			: 'C창mp selec큇ie (SelectionField)',
		imageButton		: 'Buton imagine (ImageButton)',
		notSet			: '<nesetat>',
		id				: 'Id',
		name			: 'Nume',
		langDir			: 'Direc큇ia cuvintelor',
		langDirLtr		: 'st창nga-dreapta (LTR)',
		langDirRtl		: 'dreapta-st창nga (RTL)',
		langCode		: 'Codul limbii',
		longDescr		: 'Descrierea lung훱 URL',
		cssClass		: 'Clasele cu stilul paginii (CSS)',
		advisoryTitle	: 'Titlul consultativ',
		cssStyle		: 'Stil',
		ok				: 'OK',
		cancel			: 'Anulare',
		close			: '횓nchide',
		preview			: 'Previzualizare',
		generalTab		: 'General',
		advancedTab		: 'Avansat',
		validateNumberFailed : 'Aceast훱 valoare nu este un num훱r.',
		confirmNewPage	: 'Orice modific훱ri nesalvate ale acestui con�쌻nut, vor fi pierdute. Sigur dori�쌻 챤nc훱rcarea unei noi pagini?',
		confirmCancel	: 'C창teva op�쌻uni au fost schimbate. Sigur dori�쌻 s훱 챤nchide�쌻 dialogul?',
		options			: 'Op�쌻uni',
		target			: '�쉏nt훱',
		targetNew		: 'Fereastr훱 nou훱 (_blank)',
		targetTop		: 'Topmost Window (_top)',
		targetSelf		: '횓n aceea�셢 fereastr훱 (_self)',
		targetParent	: 'Parent Window (_parent)',
		langDirLTR		: 'St창nga spre Dreapta (LTR)',
		langDirRTL		: 'Dreapta spre St창nga (RTL)',
		styles			: 'Stil',
		cssClasses		: 'Stylesheet Classes',
		width			: 'L훱큇ime',
		height			: '횓n훱l큇ime',
		align			: 'Aliniere',
		alignLeft		: 'M훱re�셳e Bara',
		alignRight		: 'Dreapta',
		alignCenter		: 'Centru',
		alignTop		: 'Sus',
		alignMiddle		: 'Mijloc',
		alignBottom		: 'Jos',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '횓n훱l�쌻mea trebuie s훱 fie un num훱r.',
		invalidWidth	: 'L훱�쌻mea trebuie s훱 fie un num훱r.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	contextmenu :
	{
		options : 'Op�쌻uni Meniu Contextual'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Insereaz훱 caracter special',
		title		: 'Selecteaz훱 caracter special',
		options : 'Op�쌻uni caractere speciale'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Insereaz훱/Editeaz훱 link (leg훱tur훱 web)',
		other 		: '<alt>',
		menu		: 'Editeaz훱 Link',
		title		: 'Link (Leg훱tur훱 web)',
		info		: 'Informa큇ii despre link (Leg훱tur훱 web)',
		target		: '큅int훱 (Target)',
		upload		: '횓ncarc훱',
		advanced	: 'Avansat',
		type		: 'Tipul link-ului (al leg훱turii web)',
		toUrl		: 'URL',
		toAnchor	: 'Ancor훱 챤n aceast훱 pagin훱',
		toEmail		: 'E-Mail',
		targetFrame		: '<frame>',
		targetPopup		: '<fereastra popup>',
		targetFrameName	: 'Numele frameului 큇int훱',
		targetPopupName	: 'Numele ferestrei popup',
		popupFeatures	: 'Propriet훱큇ile ferestrei popup',
		popupResizable	: 'Redimensionabil',
		popupStatusBar	: 'Bara de status',
		popupLocationBar: 'Bara de loca큇ie',
		popupToolbar	: 'Bara de op큇iuni',
		popupMenuBar	: 'Bara de meniu',
		popupFullScreen	: 'Tot ecranul (Full Screen)(IE)',
		popupScrollBars	: 'Bare de derulare',
		popupDependent	: 'Dependent (Netscape)',
		popupLeft		: 'Pozi큇ia la st창nga',
		popupTop		: 'Pozi큇ia la dreapta',
		id				: 'Id',
		langDir			: 'Direc큇ia cuvintelor',
		langDirLTR		: 'st창nga-dreapta (LTR)',
		langDirRTL		: 'dreapta-st창nga (RTL)',
		acccessKey		: 'Tasta de acces',
		name			: 'Nume',
		langCode			: 'Direc큇ia cuvintelor',
		tabIndex			: 'Indexul tabului',
		advisoryTitle		: 'Titlul consultativ',
		advisoryContentType	: 'Tipul consultativ al titlului',
		cssClasses		: 'Clasele cu stilul paginii (CSS)',
		charset			: 'Setul de caractere al resursei legate',
		styles			: 'Stil',
		rel			: 'Rela�쌻e',
		selectAnchor		: 'Selecta큇i o ancor훱',
		anchorName		: 'dup훱 numele ancorei',
		anchorId			: 'dup훱 Id-ul elementului',
		emailAddress		: 'Adres훱 de e-mail',
		emailSubject		: 'Subiectul mesajului',
		emailBody		: 'Op�쌻uni Meniu Contextual',
		noAnchors		: '(Nicio ancor훱 disponibil훱 챤n document)',
		noUrl			: 'V훱 rug훱m s훱 scrie큇i URL-ul',
		noEmail			: 'V훱 rug훱m s훱 scrie큇i adresa de e-mail'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Insereaz훱/Editeaz훱 ancor훱',
		menu		: 'Propriet훱큇i ancor훱',
		title		: 'Propriet훱큇i ancor훱',
		name		: 'Numele ancorei',
		errorName	: 'V훱 rug훱m scrie큇i numele ancorei',
		remove		: 'Elimin훱 ancora'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Propriet훱�쌻le listei numerotate',
		bulletedTitle		: 'Propriet훱�쌻le listei cu simboluri',
		type				: 'Tip',
		start				: 'Start',
		validateStartNumber				:'횓nceputul listei trebuie s훱 fie un num훱r 챤ntreg.',
		circle				: 'Cerc',
		disc				: 'Disc',
		square				: 'P훱trat',
		none				: 'Nimic',
		notset				: '<nesetat>',
		armenian			: 'Numerotare armenian훱',
		georgian			: 'Numerotare georgian훱 (an, ban, gan, etc.)',
		lowerRoman			: 'Cifre romane mici (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'Cifre romane mari (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'Litere mici (a, b, c, d, e, etc.)',
		upperAlpha			: 'Litere mari (A, B, C, D, E, etc.)',
		lowerGreek			: 'Litere grece�셳i mici (alpha, beta, gamma, etc.)',
		decimal				: 'Decimale (1, 2, 3, etc.)',
		decimalLeadingZero	: 'Decimale cu zero 챤n fa�쎝� (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'G훱se힊te 힊i 챤nlocuie힊te',
		find				: 'G훱se힊te',
		replace				: '횓nlocuie힊te',
		findWhat			: 'G훱se힊te:',
		replaceWith			: '횓nlocuie힊te cu:',
		notFoundMsg			: 'Textul specificat nu a fost g훱sit.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: 'Deosebe힊te majuscule de minuscule (Match case)',
		matchWord			: 'Doar cuvintele 챤ntregi',
		matchCyclic			: 'Potrive�셳e ciclic',
		replaceAll			: '횓nlocuie힊te tot',
		replaceSuccessMsg	: '%1 c훱ut훱ri 챤nlocuite.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabel',
		title		: 'Propriet훱큇ile tabelului',
		menu		: 'Propriet훱큇ile tabelului',
		deleteTable	: '힇terge tabel',
		rows		: 'R창nduri',
		columns		: 'Coloane',
		border		: 'M훱rimea marginii',
		widthPx		: 'pixeli',
		widthPc		: 'procente',
		widthUnit	: 'unitate l훱�쌻me',
		cellSpace	: 'Spa큇iu 챤ntre celule',
		cellPad		: 'Spa큇iu 챤n cadrul celulei',
		caption		: 'Titlu (Caption)',
		summary		: 'Rezumat',
		headers		: 'Antente',
		headersNone		: 'Nimic',
		headersColumn	: 'Prima coloan훱',
		headersRow		: 'Primul r창nd',
		headersBoth		: 'Ambele',
		invalidRows		: 'Num훱rul r창ndurilor trebuie s훱 fie mai mare dec창t 0.',
		invalidCols		: 'Num훱rul coloanelor trebuie s훱 fie mai mare dec창t 0.',
		invalidBorder	: 'Dimensiunea bordurii trebuie s훱 aibe un num훱r.',
		invalidWidth	: 'L훱�쌻mea tabelului trebuie s훱 fie un num훱r.',
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Spa�쌻erea celului trebuie s훱 fie un num훱r pozitiv.',
		invalidCellPadding	: 'Cell padding must be a positive number.', // MISSING

		cell :
		{
			menu			: 'Celul훱',
			insertBefore	: 'Insereaz훱 celul훱 챤nainte',
			insertAfter		: 'Insereaz훱 celul훱 dup훱',
			deleteCell		: '힇terge celule',
			merge			: 'Une힊te celule',
			mergeRight		: 'Une힊te la dreapta',
			mergeDown		: 'Une힊te jos',
			splitHorizontal	: '횓mparte celula pe orizontal훱',
			splitVertical	: '횓mparte celula pe vertical훱',
			title			: 'Propriet훱�쌻 celul훱',
			cellType		: 'Tipul celulei',
			rowSpan			: 'Rows Span', // MISSING
			colSpan			: 'Columns Span', // MISSING
			wordWrap		: 'Word Wrap', // MISSING
			hAlign			: 'Aliniament orizontal',
			vAlign			: 'Aliniament vertical',
			alignBaseline	: 'Baseline', // MISSING
			bgColor			: 'Culoare fundal',
			borderColor		: 'Culoare bordur훱',
			data			: 'Data',
			header			: 'Antet',
			yes				: 'Da',
			no				: 'Nu',
			invalidWidth	: 'L훱�쌻mea celulei trebuie s훱 fie un num훱r.',
			invalidHeight	: '횓n훱l�쌻mea celulei trebuie s훱 fie un num훱r.',
			invalidRowSpan	: 'Rows span must be a whole number.', // MISSING
			invalidColSpan	: 'Columns span must be a whole number.', // MISSING
			chooseColor		: 'Alege'
		},

		row :
		{
			menu			: 'R창nd',
			insertBefore	: 'Insereaz훱 r창nd 챤nainte',
			insertAfter		: 'Insereaz훱 r창nd dup훱',
			deleteRow		: '힇terge r창nduri'
		},

		column :
		{
			menu			: 'Coloan훱',
			insertBefore	: 'Insereaz훱 coloan훱 챤nainte',
			insertAfter		: 'Insereaz훱 coloan훱 dup훱',
			deleteColumn	: '힇terge celule'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Propriet훱큇i buton',
		text		: 'Text (Valoare)',
		type		: 'Tip',
		typeBtn		: 'Buton',
		typeSbm		: 'Trimite',
		typeRst		: 'Reset'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Propriet훱큇i bif훱 (Checkbox)',
		radioTitle	: 'Propriet훱큇i buton radio (Radio Button)',
		value		: 'Valoare',
		selected	: 'Selectat'
	},

	// Form Dialog.
	form :
	{
		title		: 'Propriet훱큇i formular (Form)',
		menu		: 'Propriet훱큇i formular (Form)',
		action		: 'Ac큇iune',
		method		: 'Metod훱',
		encoding	: 'Encodare'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Propriet훱큇i c창mp selec큇ie (Selection Field)',
		selectInfo	: 'Informa큇ii',
		opAvail		: 'Op큇iuni disponibile',
		value		: 'Valoare',
		size		: 'M훱rime',
		lines		: 'linii',
		chkMulti	: 'Permite selec큇ii multiple',
		opText		: 'Text',
		opValue		: 'Valoare',
		btnAdd		: 'Adaug훱',
		btnModify	: 'Modific훱',
		btnUp		: 'Sus',
		btnDown		: 'Jos',
		btnSetValue : 'Seteaz훱 ca valoare selectat훱',
		btnDelete	: '힇terge'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Propriet훱큇i suprafa큇훱 text (Textarea)',
		cols		: 'Coloane',
		rows		: 'Linii'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Propriet훱큇i c창mp text (Text Field)',
		name		: 'Nume',
		value		: 'Valoare',
		charWidth	: 'L훱rgimea caracterului',
		maxChars	: 'Caractere maxime',
		type		: 'Tip',
		typeText	: 'Text',
		typePass	: 'Parol훱'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Propriet훱큇i c창mp ascuns (Hidden Field)',
		name	: 'Nume',
		value	: 'Valoare'
	},

	// Image Dialog.
	image :
	{
		title		: 'Propriet훱큇ile imaginii',
		titleButton	: 'Propriet훱큇i buton imagine (Image Button)',
		menu		: 'Propriet훱큇ile imaginii',
		infoTab		: 'Informa큇ii despre imagine',
		btnUpload	: 'Trimite la server',
		upload		: '횓ncarc훱',
		alt			: 'Text alternativ',
		lockRatio	: 'P훱streaz훱 propor큇iile',
		resetSize	: 'Reseteaz훱 m훱rimea',
		border		: 'Margine',
		hSpace		: 'HSpace',
		vSpace		: 'VSpace',
		alertUrl	: 'V훱 rug훱m s훱 scrie큇i URL-ul imaginii',
		linkTab		: 'Link (Leg훱tur훱 web)',
		button2Img	: 'Do you want to transform the selected image button on a simple image?', // MISSING
		img2Button	: 'Do you want to transform the selected image on a image button?', // MISSING
		urlMissing	: 'Sursa URL a imaginii lipse�셳e.',
		validateBorder	: 'Bordura trebuie s훱 fie un num훱r 챤ntreg.',
		validateHSpace	: 'Hspace trebuie s훱 fie un num훱r 챤ntreg.',
		validateVSpace	: 'Vspace trebuie s훱 fie un num훱r 챤ntreg.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Propriet훱큇ile flashului',
		propertiesTab	: 'Propriet훱�쌻',
		title			: 'Propriet훱큇ile flashului',
		chkPlay			: 'Ruleaz훱 automat',
		chkLoop			: 'Repet훱 (Loop)',
		chkMenu			: 'Activeaz훱 meniul flash',
		chkFull			: 'Permite pe tot ecranul',
 		scale			: 'Scal훱',
		scaleAll		: 'Arat훱 tot',
		scaleNoBorder	: 'F훱r훱 bordur훱 (No border)',
		scaleFit		: 'Potrive힊te',
		access			: 'Acces script',
		accessAlways	: '횓ntotdeauna',
		accessSameDomain: 'Acela�셢 domeniu',
		accessNever		: 'Niciodat훱',
		alignAbsBottom	: 'Jos absolut (Abs Bottom)',
		alignAbsMiddle	: 'Mijloc absolut (Abs Middle)',
		alignBaseline	: 'Linia de jos (Baseline)',
		alignTextTop	: 'Text sus',
		quality			: 'Calitate',
		qualityBest		: 'Cea mai bun훱',
		qualityHigh		: '횓nalt훱',
		qualityAutoHigh	: 'Auto 챤nalt훱',
		qualityMedium	: 'Medie',
		qualityAutoLow	: 'Auto Joas훱',
		qualityLow		: 'Joas훱',
		windowModeWindow: 'Fereastr훱',
		windowModeOpaque: 'Opac훱',
		windowModeTransparent : 'Transparent훱',
		windowMode		: 'Mod fereastr훱',
		flashvars		: 'Variabile pentru flash',
		bgcolor			: 'Coloarea fundalului',
		hSpace			: 'HSpace',
		vSpace			: 'VSpace',
		validateSrc		: 'V훱 rug훱m s훱 scrie큇i URL-ul',
		validateHSpace	: 'Hspace trebuie s훱 fie un num훱r.',
		validateVSpace	: 'VSpace trebuie s훱 fie un num훱r'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Verific훱 scrierea textului',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Scuza�쌻, dar serviciul nu este disponibil momentan.',
		errorLoading	: 'Eroare 챤n lansarea aplica�쌻ei service host %s.',
		notInDic		: 'Nu e 챤n dic큇ionar',
		changeTo		: 'Schimb훱 챤n',
		btnIgnore		: 'Ignor훱',
		btnIgnoreAll	: 'Ignor훱 toate',
		btnReplace		: '횓nlocuie힊te',
		btnReplaceAll	: '횓nlocuie힊te tot',
		btnUndo			: 'Starea anterioar훱 (undo)',
		noSuggestions	: '- F훱r훱 sugestii -',
		progress		: 'Verificarea textului 챤n desf훱힊urare...',
		noMispell		: 'Verificarea textului terminat훱: Nicio gre힊eal훱 g훱sit훱',
		noChanges		: 'Verificarea textului terminat훱: Niciun cuv창nt modificat',
		oneChange		: 'Verificarea textului terminat훱: Un cuv창nt modificat',
		manyChanges		: 'Verificarea textului terminat훱: 1% cuvinte modificate',
		ieSpellDownload	: 'Unealta pentru verificat textul (Spell checker) neinstalat훱. Dori큇i s훱 o desc훱rca큇i acum?'
	},

	smiley :
	{
		toolbar	: 'Figur훱 expresiv훱 (Emoticon)',
		title	: 'Insereaz훱 o figur훱 expresiv훱 (Emoticon)',
		options : 'Op�쌻uni figuri expresive'
	},

	elementsPath :
	{
		eleLabel : 'Calea elementelor',
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: 'Insereaz훱 / Elimin훱 List훱 numerotat훱',
	bulletedlist	: 'Insereaz훱 / Elimin훱 List훱 cu puncte',
	indent			: 'Cre힊te indentarea',
	outdent			: 'Scade indentarea',

	justify :
	{
		left	: 'Aliniere la st창nga',
		center	: 'Aliniere central훱',
		right	: 'Aliniere la dreapta',
		block	: 'Aliniere 챤n bloc (Block Justify)'
	},

	blockquote : 'Citat',

	clipboard :
	{
		title		: 'Adaug훱',
		cutError	: 'Set훱rile de securitate ale navigatorului (browser) pe care 챤l folosi큇i nu permit editorului s훱 execute automat opera큇iunea de t훱iere. V훱 rug훱m folosi큇i tastatura (Ctrl/Cmd+X).',
		copyError	: 'Set훱rile de securitate ale navigatorului (browser) pe care 챤l folosi큇i nu permit editorului s훱 execute automat opera큇iunea de copiere. V훱 rug훱m folosi큇i tastatura (Ctrl/Cmd+C).',
		pasteMsg	: 'V훱 rug훱m ad훱uga큇i 챤n c훱su큇a urm훱toare folosind tastatura (<strong>Ctrl/Cmd+V</strong>) 힊i ap훱sa큇i OK',
		securityMsg	: 'Din cauza set훱rilor de securitate ale programului dvs. cu care naviga큇i pe internet (browser), editorul nu poate accesa direct datele din clipboard. Va trebui s훱 ad훱uga큇i din nou datele 챤n aceast훱 fereastr훱.',
		pasteArea	: 'Suprafa�쌳 de ad훱ugare'
	},

	pastefromword :
	{
		confirmCleanup	: 'Textul pe care dori�쌻 s훱-l lipi�쌻 este din Word. Dori�쌻 cur훱�쌳rea textului 챤nante de a-l ad훱uga?',
		toolbar			: 'Adaug훱 din Word',
		title			: 'Adaug훱 din Word',
		error			: 'Nu a fost posibil훱 cur훱�쌳rea datelor ad훱ugate datorit훱 unei erori interne'
	},

	pasteText :
	{
		button	: 'Adaug훱 ca text simplu (Plain Text)',
		title	: 'Adaug훱 ca text simplu (Plain Text)'
	},

	templates :
	{
		button			: 'Template-uri (힊abloane)',
		title			: 'Template-uri (힊abloane) de con큇inut',
		options : 'Op�쌻uni �셙bloane',
		insertOption	: '횓nlocuie힊te cuprinsul actual',
		selectPromptMsg	: 'V훱 rug훱m selecta큇i template-ul (힊ablonul) ce se va deschide 챤n editor<br>(con큇inutul actual va fi pierdut):',
		emptyListMsg	: '(Niciun template (힊ablon) definit)'
	},

	showBlocks : 'Arat훱 blocurile',

	stylesCombo :
	{
		label		: 'Stil',
		panelTitle	: 'Formatarea stilurilor',
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: 'Formatare',
		panelTitle	: 'Formatare',

		tag_p		: 'Normal',
		tag_pre		: 'Formatat',
		tag_address	: 'Adres훱',
		tag_h1		: 'Heading 1',
		tag_h2		: 'Heading 2',
		tag_h3		: 'Heading 3',
		tag_h4		: 'Heading 4',
		tag_h5		: 'Heading 5',
		tag_h6		: 'Heading 6',
		tag_div		: 'Normal (DIV)'
	},

	div :
	{
		title				: 'Create Div Container', // MISSING
		toolbar				: 'Create Div Container', // MISSING
		cssClassInputLabel	: 'Stylesheet Classes', // MISSING
		styleSelectLabel	: 'Stil',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'Codul limbii',
		inlineStyleInputLabel	: 'Inline Style', // MISSING
		advisoryTitleInputLabel	: 'Advisory Title', // MISSING
		langDirLabel		: 'Language Direction', // MISSING
		langDirLTRLabel		: 'Left to Right (LTR)', // MISSING
		langDirRTLLabel		: 'Right to Left (RTL)', // MISSING
		edit				: 'Edit Div', // MISSING
		remove				: 'Remove Div' // MISSING
  	},

	iframe :
	{
		title		: 'IFrame Properties', // MISSING
		toolbar		: 'IFrame', // MISSING
		noUrl		: 'Please type the iframe URL', // MISSING
		scrolling	: 'Enable scrollbars', // MISSING
		border		: 'Show frame border' // MISSING
	},

	font :
	{
		label		: 'Font',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: 'Font'
	},

	fontSize :
	{
		label		: 'M훱rime',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: 'M훱rime'
	},

	colorButton :
	{
		textColorTitle	: 'Culoarea textului',
		bgColorTitle	: 'Coloarea fundalului',
		panelTitle		: 'Colors', // MISSING
		auto			: 'Automatic',
		more			: 'Mai multe culori...'
	},

	colors :
	{
		'000' : 'Black', // MISSING
		'800000' : 'Maroon', // MISSING
		'8B4513' : 'Saddle Brown', // MISSING
		'2F4F4F' : 'Dark Slate Gray', // MISSING
		'008080' : 'Teal', // MISSING
		'000080' : 'Navy', // MISSING
		'4B0082' : 'Indigo', // MISSING
		'696969' : 'Dark Gray', // MISSING
		'B22222' : 'Fire Brick', // MISSING
		'A52A2A' : 'Brown', // MISSING
		'DAA520' : 'Golden Rod', // MISSING
		'006400' : 'Dark Green', // MISSING
		'40E0D0' : 'Turquoise', // MISSING
		'0000CD' : 'Medium Blue', // MISSING
		'800080' : 'Purple', // MISSING
		'808080' : 'Gray', // MISSING
		'F00' : 'Red', // MISSING
		'FF8C00' : 'Dark Orange', // MISSING
		'FFD700' : 'Gold', // MISSING
		'008000' : 'Green', // MISSING
		'0FF' : 'Cyan', // MISSING
		'00F' : 'Blue', // MISSING
		'EE82EE' : 'Violet', // MISSING
		'A9A9A9' : 'Dim Gray', // MISSING
		'FFA07A' : 'Light Salmon', // MISSING
		'FFA500' : 'Orange', // MISSING
		'FFFF00' : 'Yellow', // MISSING
		'00FF00' : 'Lime', // MISSING
		'AFEEEE' : 'Pale Turquoise', // MISSING
		'ADD8E6' : 'Light Blue', // MISSING
		'DDA0DD' : 'Plum', // MISSING
		'D3D3D3' : 'Light Grey', // MISSING
		'FFF0F5' : 'Lavender Blush', // MISSING
		'FAEBD7' : 'Antique White', // MISSING
		'FFFFE0' : 'Light Yellow', // MISSING
		'F0FFF0' : 'Honeydew', // MISSING
		'F0FFFF' : 'Azure', // MISSING
		'F0F8FF' : 'Alice Blue', // MISSING
		'E6E6FA' : 'Lavender', // MISSING
		'FFF' : 'White' // MISSING
	},

	scayt :
	{
		title			: 'Spell Check As You Type', // MISSING
		opera_title		: 'Not supported by Opera', // MISSING
		enable			: 'Enable SCAYT', // MISSING
		disable			: 'Disable SCAYT', // MISSING
		about			: 'About SCAYT', // MISSING
		toggle			: 'Toggle SCAYT', // MISSING
		options			: 'Options', // MISSING
		langs			: 'Languages', // MISSING
		moreSuggestions	: 'More suggestions', // MISSING
		ignore			: 'Ignore', // MISSING
		ignoreAll		: 'Ignore All', // MISSING
		addWord			: 'Add Word', // MISSING
		emptyDic		: 'Dictionary name should not be empty.', // MISSING
		noSuggestions	: 'F훱r훱 sugestii',
		optionsTab		: 'Options', // MISSING
		allCaps			: 'Ignore All-Caps Words', // MISSING
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: 'Ignore Words with Numbers', // MISSING

		languagesTab	: 'Languages', // MISSING

		dictionariesTab	: 'Dictionaries', // MISSING
		dic_field_name	: 'Dictionary name', // MISSING
		dic_create		: 'Create', // MISSING
		dic_restore		: 'Restore', // MISSING
		dic_delete		: 'Delete', // MISSING
		dic_rename		: 'Rename', // MISSING
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: 'About' // MISSING
	},

	about :
	{
		title		: 'About CKEditor', // MISSING
		dlgTitle	: 'About CKEditor', // MISSING
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: 'For licensing information please visit our web site:', // MISSING
		copy		: 'Copyright &copy; $1. All rights reserved.' // MISSING
	},

	maximize : 'M훱re�셳e',
	minimize : 'Mic�셭reaz훱',

	fakeobjects :
	{
		anchor		: 'Anchor', // MISSING
		flash		: 'Flash Animation', // MISSING
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: 'Unknown Object' // MISSING
	},

	resize : 'Trage pentru a redimensiona',

	colordialog :
	{
		title		: 'Select color', // MISSING
		options	:	'Color Options', // MISSING
		highlight	: 'Highlight', // MISSING
		selected	: 'Selected Color', // MISSING
		clear		: 'Clear' // MISSING
	},

	toolbarCollapse	: 'Mic�셭reaz훱 Bara',
	toolbarExpand	: 'M훱re�셳e Bara',

	toolbarGroups :
	{
		document : 'Document', // MISSING
		clipboard : 'Clipboard/Undo', // MISSING
		editing : 'Editing', // MISSING
		forms : 'Forms', // MISSING
		basicstyles : 'Basic Styles', // MISSING
		paragraph : 'Paragraph', // MISSING
		links : 'Links', // MISSING
		insert : 'Insert', // MISSING
		styles : 'Styles', // MISSING
		colors : 'Colors', // MISSING
		tools : 'Tools' // MISSING
	},

	bidi :
	{
		ltr : 'Text direction from left to right', // MISSING
		rtl : 'Text direction from right to left' // MISSING
	},

	docprops :
	{
		label : 'Propriet훱큇ile documentului',
		title : 'Propriet훱큇ile documentului',
		design : 'Design', // MISSING
		meta : 'Meta Tags', // MISSING
		chooseColor : 'Choose', // MISSING
		other : '<alt>',
		docTitle :	'Titlul paginii',
		charset : 	'Encoding setului de caractere',
		charsetOther : 'Alt encoding al setului de caractere',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : 'Central European', // MISSING
		charsetCT : 'Chinezesc tradi큇ional (Big5)',
		charsetCR : 'Chirilic',
		charsetGR : 'Grecesc',
		charsetJP : 'Japonez',
		charsetKR : 'Corean',
		charsetTR : 'Turcesc',
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : 'Vest european',
		docType : 'Document Type Heading', // MISSING
		docTypeOther : 'Alt Document Type Heading',
		xhtmlDec : 'Include declara큇ii XHTML',
		bgColor : 'Culoarea fundalului (Background Color)',
		bgImage : 'URL-ul imaginii din fundal (Background Image URL)',
		bgFixed : 'Fundal neflotant, fix (Non-scrolling Background)',
		txtColor : 'Culoarea textului',
		margin : 'Marginile paginii',
		marginTop : 'Sus',
		marginLeft : 'St창nga',
		marginRight : 'Dreapta',
		marginBottom : 'Jos',
		metaKeywords : 'Cuvinte cheie dup훱 care se va indexa documentul (separate prin virgul훱)',
		metaDescription : 'Descrierea documentului',
		metaAuthor : 'Autor',
		metaCopyright : 'Drepturi de autor',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
