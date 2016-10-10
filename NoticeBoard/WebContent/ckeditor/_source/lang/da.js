/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Danish language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['da'] =
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
	editorHelp : 'Tryk ALT 0 for hj챈lp',

	// ARIA descriptions.
	toolbars	: 'Editors v챈rkt첩jslinjer',
	editor		: 'Rich Text Editor',

	// Toolbar buttons without dialogs.
	source			: 'Kilde',
	newPage			: 'Ny side',
	save			: 'Gem',
	preview			: 'Vis eksempel',
	cut				: 'Klip',
	copy			: 'Kopi챕r',
	paste			: 'Inds챈t',
	print			: 'Udskriv',
	underline		: 'Understreget',
	bold			: 'Fed',
	italic			: 'Kursiv',
	selectAll		: 'V챈lg alt',
	removeFormat	: 'Fjern formatering',
	strike			: 'Gennemstreget',
	subscript		: 'S챈nket skrift',
	superscript		: 'H챈vet skrift',
	horizontalrule	: 'Inds챈t vandret streg',
	pagebreak		: 'Inds챈t sideskift',
	pagebreakAlt		: 'Sideskift',
	unlink			: 'Fjern hyperlink',
	undo			: 'Fortryd',
	redo			: 'Annull챕r fortryd',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Gennemse...',
		url				: 'URL',
		protocol		: 'Protokol',
		upload			: 'Upload',
		uploadSubmit	: 'Upload',
		image			: 'Inds챈t billede',
		flash			: 'Inds챈t Flash',
		form			: 'Inds챈t formular',
		checkbox		: 'Inds챈t afkrydsningsfelt',
		radio			: 'Inds챈t alternativknap',
		textField		: 'Inds챈t tekstfelt',
		textarea		: 'Inds챈t tekstboks',
		hiddenField		: 'Inds챈t skjult felt',
		button			: 'Inds챈t knap',
		select			: 'Inds챈t liste',
		imageButton		: 'Inds챈t billedknap',
		notSet			: '<intet valgt>',
		id				: 'Id',
		name			: 'Navn',
		langDir			: 'Tekstretning',
		langDirLtr		: 'Fra venstre mod h첩jre (LTR)',
		langDirRtl		: 'Fra h첩jre mod venstre (RTL)',
		langCode		: 'Sprogkode',
		longDescr		: 'Udvidet beskrivelse',
		cssClass		: 'Typografiark (CSS)',
		advisoryTitle	: 'Titel',
		cssStyle		: 'Typografi (CSS)',
		ok				: 'OK',
		cancel			: 'Annull챕r',
		close			: 'Luk',
		preview			: 'Forh책ndsvisning',
		generalTab		: 'Generelt',
		advancedTab		: 'Avanceret',
		validateNumberFailed : 'V챈rdien er ikke et tal.',
		confirmNewPage	: 'Alt indhold, der ikke er blevet gemt, vil g책 tabt. Er du sikker p책, at du vil indl챈se en ny side?',
		confirmCancel	: 'Nogle af indstillingerne er blevet 챈ndret. Er du sikker p책, at du vil lukke vinduet?',
		options			: 'Vis muligheder',
		target			: 'M책l',
		targetNew		: 'Nyt vindue (_blank)',
		targetTop		: '횠verste vindue (_top)',
		targetSelf		: 'Samme vindue (_self)',
		targetParent	: 'Samme vindue (_parent)',
		langDirLTR		: 'Venstre til h첩jre (LTR)',
		langDirRTL		: 'H첩jre til venstre (RTL)',
		styles			: 'Style',
		cssClasses		: 'Stylesheetklasser',
		width			: 'Bredde',
		height			: 'H첩jde',
		align			: 'Justering',
		alignLeft		: 'Venstre',
		alignRight		: 'H첩jre',
		alignCenter		: 'Centreret',
		alignTop		: '횠verst',
		alignMiddle		: 'Centreret',
		alignBottom		: 'Nederst',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'H첩jde skal v챈re et tal.',
		invalidWidth	: 'Bredde skal v챈re et tal.',
		invalidCssLength	: 'V챈rdien specificeret for "%1" feltet skal v챈re et positivt nummer med eller uden en CSS m책leenhed  (px, %, in, cm, mm, em, ex, pt, eller pc).',
		invalidHtmlLength	: 'V챈rdien specificeret for "%1" feltet skal v챈re et positivt nummer med eller uden en CSS m책leenhed  (px eller %).',
		invalidInlineStyle	: 'V챈rdien specificeret for inline style skal indeholde en eller flere elementer med et format som "name:value", separeret af semikoloner',
		cssLengthTooltip	: 'Inds챈t en numerisk v챈rdi i pixel eller nummer med en gyldig CSS v챈rdi (px, %, in, cm, mm, em, ex, pt, or pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, ikke tilg챈ngelig</span>'
	},

	contextmenu :
	{
		options : 'Muligheder for hj챈lpemenu'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Inds챈t symbol',
		title		: 'V챈lg symbol',
		options : 'Muligheder for specialkarakterer'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Inds챈t/redig챕r hyperlink',
		other 		: '<anden>',
		menu		: 'Redig챕r hyperlink',
		title		: 'Egenskaber for hyperlink',
		info		: 'Generelt',
		target		: 'M책l',
		upload		: 'Upload',
		advanced	: 'Avanceret',
		type		: 'Type',
		toUrl		: 'URL',
		toAnchor	: 'Bogm챈rke p책 denne side',
		toEmail		: 'E-mail',
		targetFrame		: '<ramme>',
		targetPopup		: '<popup vindue>',
		targetFrameName	: 'Destinationsvinduets navn',
		targetPopupName	: 'Popupvinduets navn',
		popupFeatures	: 'Egenskaber for popup',
		popupResizable	: 'Just챕rbar',
		popupStatusBar	: 'Statuslinje',
		popupLocationBar: 'Adresselinje',
		popupToolbar	: 'V챈rkt첩jslinje',
		popupMenuBar	: 'Menulinje',
		popupFullScreen	: 'Fuld sk챈rm (IE)',
		popupScrollBars	: 'Scrollbar',
		popupDependent	: 'Koblet/dependent (Netscape)',
		popupLeft		: 'Position fra venstre',
		popupTop		: 'Position fra toppen',
		id				: 'Id',
		langDir			: 'Tekstretning',
		langDirLTR		: 'Fra venstre mod h첩jre (LTR)',
		langDirRTL		: 'Fra h첩jre mod venstre (RTL)',
		acccessKey		: 'Genvejstast',
		name			: 'Navn',
		langCode			: 'Tekstretning',
		tabIndex			: 'Tabulatorindeks',
		advisoryTitle		: 'Titel',
		advisoryContentType	: 'Indholdstype',
		cssClasses		: 'Typografiark',
		charset			: 'Tegns챈t',
		styles			: 'Typografi',
		rel			: 'Relation',
		selectAnchor		: 'V챈lg et anker',
		anchorName		: 'Efter ankernavn',
		anchorId			: 'Efter element-Id',
		emailAddress		: 'E-mailadresse',
		emailSubject		: 'Emne',
		emailBody		: 'Besked',
		noAnchors		: '(Ingen bogm챈rker i dokumentet)',
		noUrl			: 'Indtast hyperlink-URL!',
		noEmail			: 'Indtast e-mailadresse!'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Inds챈t/redig챕r bogm챈rke',
		menu		: 'Egenskaber for bogm챈rke',
		title		: 'Egenskaber for bogm챈rke',
		name		: 'Bogm챈rkenavn',
		errorName	: 'Indtast bogm챈rkenavn',
		remove		: 'Fjern bogm챈rke'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Egenskaber for nummereret liste',
		bulletedTitle		: 'V챈rdier for cirkelpunktopstilling',
		type				: 'Type',
		start				: 'Start',
		validateStartNumber				:'Den nummererede liste skal starte med et rundt nummer',
		circle				: 'Cirkel',
		disc				: 'V챈rdier for diskpunktopstilling',
		square				: 'Firkant',
		none				: 'Ingen',
		notset				: '<ikke defineret>',
		armenian			: 'Armensk nummering',
		georgian			: 'Georgiansk nummering (an, ban, gan, etc.)',
		lowerRoman			: 'Sm책 romerske (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'Store romerske (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'Sm책 alfabet (a, b, c, d, e, etc.)',
		upperAlpha			: 'Store alfabet (A, B, C, D, E, etc.)',
		lowerGreek			: 'Sm책 gr챈sk (alpha, beta, gamma, etc.)',
		decimal				: 'Decimal (1, 2, 3, osv.)',
		decimalLeadingZero	: 'Decimaler med 0 f첩rst (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'S첩g og erstat',
		find				: 'S첩g',
		replace				: 'Erstat',
		findWhat			: 'S첩g efter:',
		replaceWith			: 'Erstat med:',
		notFoundMsg			: 'S첩geteksten blev ikke fundet',
		findOptions			: 'Find muligheder',
		matchCase			: 'Forskel p책 store og sm책 bogstaver',
		matchWord			: 'Kun hele ord',
		matchCyclic			: 'Match cyklisk',
		replaceAll			: 'Erstat alle',
		replaceSuccessMsg	: '%1 forekomst(er) erstattet.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabel',
		title		: 'Egenskaber for tabel',
		menu		: 'Egenskaber for tabel',
		deleteTable	: 'Slet tabel',
		rows		: 'R챈kker',
		columns		: 'Kolonner',
		border		: 'Rammebredde',
		widthPx		: 'pixels',
		widthPc		: 'procent',
		widthUnit	: 'Bredde p책 enhed',
		cellSpace	: 'Celleafstand',
		cellPad		: 'Cellemargen',
		caption		: 'Titel',
		summary		: 'Resum챕',
		headers		: 'Hoved',
		headersNone		: 'Ingen',
		headersColumn	: 'F첩rste kolonne',
		headersRow		: 'F첩rste r챈kke',
		headersBoth		: 'Begge',
		invalidRows		: 'Antallet af r챈kker skal v챈re st첩rre end 0.',
		invalidCols		: 'Antallet af kolonner skal v챈re st첩rre end 0.',
		invalidBorder	: 'Rammetykkelse skal v챈re et tal.',
		invalidWidth	: 'Tabelbredde skal v챈re et tal.',
		invalidHeight	: 'Tabelh첩jde skal v챈re et tal.',
		invalidCellSpacing	: 'Celleafstand skal v챈re et tal.',
		invalidCellPadding	: 'Cellemargen skal v챈re et tal.',

		cell :
		{
			menu			: 'Celle',
			insertBefore	: 'Inds챈t celle f첩r',
			insertAfter		: 'Inds챈t celle efter',
			deleteCell		: 'Slet celle',
			merge			: 'Flet celler',
			mergeRight		: 'Flet til h첩jre',
			mergeDown		: 'Flet nedad',
			splitHorizontal	: 'Del celle vandret',
			splitVertical	: 'Del celle lodret',
			title			: 'Celleegenskaber',
			cellType		: 'Celletype',
			rowSpan			: 'R챈kke span (rows span)',
			colSpan			: 'Kolonne span (columns span)',
			wordWrap		: 'Tekstombrydning',
			hAlign			: 'Vandret justering',
			vAlign			: 'Lodret justering',
			alignBaseline	: 'Grundlinje',
			bgColor			: 'Baggrundsfarve',
			borderColor		: 'Rammefarve',
			data			: 'Data',
			header			: 'Hoved',
			yes				: 'Ja',
			no				: 'Nej',
			invalidWidth	: 'Cellebredde skal v챈re et tal.',
			invalidHeight	: 'Celleh첩jde skal v챈re et tal.',
			invalidRowSpan	: 'R챈kke span skal v챈re et heltal.',
			invalidColSpan	: 'Kolonne span skal v챈re et heltal.',
			chooseColor		: 'V챈lg'
		},

		row :
		{
			menu			: 'R챈kke',
			insertBefore	: 'Inds챈t r챈kke f첩r',
			insertAfter		: 'Inds챈t r챈kke efter',
			deleteRow		: 'Slet r챈kke'
		},

		column :
		{
			menu			: 'Kolonne',
			insertBefore	: 'Inds챈t kolonne f첩r',
			insertAfter		: 'Inds챈t kolonne efter',
			deleteColumn	: 'Slet kolonne'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Egenskaber for knap',
		text		: 'Tekst',
		type		: 'Type',
		typeBtn		: 'Knap',
		typeSbm		: 'Send',
		typeRst		: 'Nulstil'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Egenskaber for afkrydsningsfelt',
		radioTitle	: 'Egenskaber for alternativknap',
		value		: 'V챈rdi',
		selected	: 'Valgt'
	},

	// Form Dialog.
	form :
	{
		title		: 'Egenskaber for formular',
		menu		: 'Egenskaber for formular',
		action		: 'Handling',
		method		: 'Metode',
		encoding	: 'Kodning (encoding)'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Egenskaber for liste',
		selectInfo	: 'Generelt',
		opAvail		: 'Valgmuligheder',
		value		: 'V챈rdi',
		size		: 'St첩rrelse',
		lines		: 'Linjer',
		chkMulti	: 'Tillad flere valg',
		opText		: 'Tekst',
		opValue		: 'V챈rdi',
		btnAdd		: 'Tilf첩j',
		btnModify	: 'Redig챕r',
		btnUp		: 'Op',
		btnDown		: 'Ned',
		btnSetValue : 'S챈t som valgt',
		btnDelete	: 'Slet'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Egenskaber for tekstboks',
		cols		: 'Kolonner',
		rows		: 'R챈kker'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Egenskaber for tekstfelt',
		name		: 'Navn',
		value		: 'V챈rdi',
		charWidth	: 'Bredde (tegn)',
		maxChars	: 'Max. antal tegn',
		type		: 'Type',
		typeText	: 'Tekst',
		typePass	: 'Adgangskode'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Egenskaber for skjult felt',
		name	: 'Navn',
		value	: 'V챈rdi'
	},

	// Image Dialog.
	image :
	{
		title		: 'Egenskaber for billede',
		titleButton	: 'Egenskaber for billedknap',
		menu		: 'Egenskaber for billede',
		infoTab		: 'Generelt',
		btnUpload	: 'Upload fil til serveren',
		upload		: 'Upload',
		alt			: 'Alternativ tekst',
		lockRatio	: 'L책s st첩rrelsesforhold',
		resetSize	: 'Nulstil st첩rrelse',
		border		: 'Ramme',
		hSpace		: 'Vandret margen',
		vSpace		: 'Lodret margen',
		alertUrl	: 'Indtast stien til billedet',
		linkTab		: 'Hyperlink',
		button2Img	: 'Vil du lave billedknappen om til et almindeligt billede?',
		img2Button	: 'Vil du lave billedet om til en billedknap?',
		urlMissing	: 'Kilde p책 billed-URL mangler',
		validateBorder	: 'Kant skal v챈re et helt nummer.',
		validateHSpace	: 'HSpace skal v챈re et helt nummer.',
		validateVSpace	: 'VSpace skal v챈re et helt nummer.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Egenskaber for Flash',
		propertiesTab	: 'Egenskaber',
		title			: 'Egenskaber for Flash',
		chkPlay			: 'Automatisk afspilning',
		chkLoop			: 'Gentagelse',
		chkMenu			: 'Vis Flash-menu',
		chkFull			: 'Tillad fuldsk챈rm',
 		scale			: 'Skal챕r',
		scaleAll		: 'Vis alt',
		scaleNoBorder	: 'Ingen ramme',
		scaleFit		: 'Tilpas st첩rrelse',
		access			: 'Scriptadgang',
		accessAlways	: 'Altid',
		accessSameDomain: 'Samme dom챈ne',
		accessNever		: 'Aldrig',
		alignAbsBottom	: 'Absolut nederst',
		alignAbsMiddle	: 'Absolut centreret',
		alignBaseline	: 'Grundlinje',
		alignTextTop	: 'Toppen af teksten',
		quality			: 'Kvalitet',
		qualityBest		: 'Bedste',
		qualityHigh		: 'H첩j',
		qualityAutoHigh	: 'Auto h첩j',
		qualityMedium	: 'Medium',
		qualityAutoLow	: 'Auto lav',
		qualityLow		: 'Lav',
		windowModeWindow: 'Vindue',
		windowModeOpaque: 'Gennemsigtig (opaque)',
		windowModeTransparent : 'Transparent',
		windowMode		: 'Vinduestilstand',
		flashvars		: 'Variabler for Flash',
		bgcolor			: 'Baggrundsfarve',
		hSpace			: 'Vandret margen',
		vSpace			: 'Lodret margen',
		validateSrc		: 'Indtast hyperlink URL!',
		validateHSpace	: 'Vandret margen skal v챈re et tal.',
		validateVSpace	: 'Lodret margen skal v챈re et tal.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Stavekontrol',
		title			: 'Stavekontrol',
		notAvailable	: 'Stavekontrol er desv챈rre ikke tilg챈ngelig.',
		errorLoading	: 'Fejl ved indl챈sning af host: %s.',
		notInDic		: 'Ikke i ordbogen',
		changeTo		: 'Forslag',
		btnIgnore		: 'Ignor챕r',
		btnIgnoreAll	: 'Ignor챕r alle',
		btnReplace		: 'Erstat',
		btnReplaceAll	: 'Erstat alle',
		btnUndo			: 'Tilbage',
		noSuggestions	: '(ingen forslag)',
		progress		: 'Stavekontrollen arbejder...',
		noMispell		: 'Stavekontrol f챈rdig: Ingen fejl fundet',
		noChanges		: 'Stavekontrol f챈rdig: Ingen ord 챈ndret',
		oneChange		: 'Stavekontrol f챈rdig: Et ord 챈ndret',
		manyChanges		: 'Stavekontrol f챈rdig: %1 ord 챈ndret',
		ieSpellDownload	: 'Stavekontrol ikke installeret. Vil du installere den nu?'
	},

	smiley :
	{
		toolbar	: 'Smiley',
		title	: 'V챈lg smiley',
		options : 'Smileymuligheder'
	},

	elementsPath :
	{
		eleLabel : 'Sti p책 element',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Talopstilling',
	bulletedlist	: 'Punktopstilling',
	indent			: 'For첩g indrykning',
	outdent			: 'Formindsk indrykning',

	justify :
	{
		left	: 'Venstrestillet',
		center	: 'Centreret',
		right	: 'H첩jrestillet',
		block	: 'Lige margener'
	},

	blockquote : 'Blokcitat',

	clipboard :
	{
		title		: 'Inds챈t',
		cutError	: 'Din browsers sikkerhedsindstillinger tillader ikke editoren at f책 automatisk adgang til udklipsholderen.<br><br>Brug i stedet tastaturet til at klippe teksten (Ctrl/Cmd+X).',
		copyError	: 'Din browsers sikkerhedsindstillinger tillader ikke editoren at f책 automatisk adgang til udklipsholderen.<br><br>Brug i stedet tastaturet til at kopiere teksten (Ctrl/Cmd+C).',
		pasteMsg	: 'Inds챈t i feltet herunder (<STRONG>Ctrl/Cmd+V</STRONG>) og klik p책 <STRONG>OK</STRONG>.',
		securityMsg	: 'Din browsers sikkerhedsindstillinger tillader ikke editoren at f책 automatisk adgang til udklipsholderen.<br><br>Du skal inds챈tte udklipsholderens indhold i dette vindue igen.',
		pasteArea	: 'Inds챈t omr책de'
	},

	pastefromword :
	{
		confirmCleanup	: 'Den tekst du fors첩ger at inds챈tte ser ud til at komme fra Word. Vil du rense teksten f첩r den inds챈ttes?',
		toolbar			: 'Inds챈t fra Word',
		title			: 'Inds챈t fra Word',
		error			: 'Det var ikke muligt at fjerne formatteringen p책 den indsatte tekst grundet en intern fejl'
	},

	pasteText :
	{
		button	: 'Inds챈t som ikke-formateret tekst',
		title	: 'Inds챈t som ikke-formateret tekst'
	},

	templates :
	{
		button			: 'Skabeloner',
		title			: 'Indholdsskabeloner',
		options : 'Skabelon muligheder',
		insertOption	: 'Erstat det faktiske indhold',
		selectPromptMsg	: 'V챈lg den skabelon, som skal 책bnes i editoren (nuv챈rende indhold vil blive overskrevet):',
		emptyListMsg	: '(Der er ikke defineret nogen skabelon)'
	},

	showBlocks : 'Vis afsnitsm챈rker',

	stylesCombo :
	{
		label		: 'Typografi',
		panelTitle	: 'Formattering p책 stylesheet',
		panelTitle1	: 'Block typografi',
		panelTitle2	: 'Inline typografi',
		panelTitle3	: 'Object typografi'
	},

	format :
	{
		label		: 'Formatering',
		panelTitle	: 'Formatering',

		tag_p		: 'Normal',
		tag_pre		: 'Formateret',
		tag_address	: 'Adresse',
		tag_h1		: 'Overskrift 1',
		tag_h2		: 'Overskrift 2',
		tag_h3		: 'Overskrift 3',
		tag_h4		: 'Overskrift 4',
		tag_h5		: 'Overskrift 5',
		tag_h6		: 'Overskrift 6',
		tag_div		: 'Normal (DIV)'
	},

	div :
	{
		title				: 'Opret Div Container',
		toolbar				: 'Opret Div Container',
		cssClassInputLabel	: 'Typografiark',
		styleSelectLabel	: 'Style',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Sprogkode',
		inlineStyleInputLabel	: 'Inline Style',
		advisoryTitleInputLabel	: 'Vejledende titel',
		langDirLabel		: 'Sprogretning',
		langDirLTRLabel		: 'Venstre til h첩jre (LTR)',
		langDirRTLLabel		: 'H첩jre til venstre (RTL)',
		edit				: 'Rediger Div',
		remove				: 'Slet Div'
  	},

	iframe :
	{
		title		: 'Iframe egenskaber',
		toolbar		: 'Iframe',
		noUrl		: 'Venligst inds챈t URL p책 iframen',
		scrolling	: 'Aktiver scrollbars',
		border		: 'Vis kant p책 rammen'
	},

	font :
	{
		label		: 'Skrifttype',
		voiceLabel	: 'Skrifttype',
		panelTitle	: 'Skrifttype'
	},

	fontSize :
	{
		label		: 'Skriftst첩rrelse',
		voiceLabel	: 'Skriftst첩rrelse',
		panelTitle	: 'Skriftst첩rrelse'
	},

	colorButton :
	{
		textColorTitle	: 'Tekstfarve',
		bgColorTitle	: 'Baggrundsfarve',
		panelTitle		: 'Farver',
		auto			: 'Automatisk',
		more			: 'Flere farver...'
	},

	colors :
	{
		'000' : 'Sort',
		'800000' : 'M첩rker첩d',
		'8B4513' : 'M첩rk orange',
		'2F4F4F' : 'Dark Slate Gr책',
		'008080' : 'Teal',
		'000080' : 'Navy',
		'4B0082' : 'Indigo',
		'696969' : 'M첩rkegr책',
		'B22222' : 'Scarlet / R첩d',
		'A52A2A' : 'Brun',
		'DAA520' : 'Guld',
		'006400' : 'M첩rkegr첩n',
		'40E0D0' : 'Tyrkis',
		'0000CD' : 'Mellembl책',
		'800080' : 'Lilla',
		'808080' : 'Gr책',
		'F00' : 'R첩d',
		'FF8C00' : 'M첩rk orange',
		'FFD700' : 'Guld',
		'008000' : 'Gr첩n',
		'0FF' : 'Cyan',
		'00F' : 'Bl책',
		'EE82EE' : 'Violet',
		'A9A9A9' : 'Matgr책',
		'FFA07A' : 'Laksefarve',
		'FFA500' : 'Orange',
		'FFFF00' : 'Gul',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Mat tyrkis',
		'ADD8E6' : 'Lysebl책',
		'DDA0DD' : 'Plum',
		'D3D3D3' : 'Lysegr책',
		'FFF0F5' : 'Lavender Blush',
		'FAEBD7' : 'Antikhvid',
		'FFFFE0' : 'Lysegul',
		'F0FFF0' : 'Gul / Beige',
		'F0FFFF' : 'Himmebl책',
		'F0F8FF' : 'Alice blue',
		'E6E6FA' : 'Lavendel',
		'FFF' : 'Hvid'
	},

	scayt :
	{
		title			: 'Stavekontrol mens du skriver',
		opera_title		: 'Ikke supporteret af Opera',
		enable			: 'Aktiv챕r SCAYT',
		disable			: 'Deaktiv챕r SCAYT',
		about			: 'Om SCAYT',
		toggle			: 'Skift/toggle SCAYT',
		options			: 'Indstillinger',
		langs			: 'Sprog',
		moreSuggestions	: 'Flere forslag',
		ignore			: 'Ignor챕r',
		ignoreAll		: 'Ignor챕r alle',
		addWord			: 'Tilf첩j ord',
		emptyDic		: 'Ordbogsnavn m책 ikke v챈re tom.',
		noSuggestions	: 'Ingen forslag',
		optionsTab		: 'Indstillinger',
		allCaps			: 'Ignorer alle store bogstaver',
		ignoreDomainNames : 'Ignor챕r dom챈nenavne',
		mixedCase		: 'Ignorer ord med store og sm책 bogstaver',
		mixedWithDigits	: 'Ignor챕r ord med numre',

		languagesTab	: 'Sprog',

		dictionariesTab	: 'Ordb첩ger',
		dic_field_name	: 'Navn p책 ordbog',
		dic_create		: 'Opret',
		dic_restore		: 'Gendan',
		dic_delete		: 'Slet',
		dic_rename		: 'Omd첩b',
		dic_info		: 'Til start er brugerordbogen gemt i en Cookie. Dog har Cookies en begr챈nsning p책 st첩rrelse. N책r ordbogen n책r en bestemt st첩rrelse kan den blive gemt p책 vores server. For at gemme din personlige ordbog p책 vores server skal du angive et navn for denne. S책fremt du allerede har gemt en ordbog, skriv navnet p책 denne og klik p책 Gendan knappen.',

		aboutTab		: 'Om'
	},

	about :
	{
		title		: 'Om CKEditor',
		dlgTitle	: 'Om CKEditor',
		help	: 'Se $1 for at f책 hj챈lp.',
		userGuide : 'CKEditor-brugermanual',
		moreInfo	: 'For informationer omkring licens, se venligst vores hjemmeside (p책 engelsk):',
		copy		: 'Copyright &copy; $1. Alle rettigheder forbeholdes.'
	},

	maximize : 'Maksim챕r',
	minimize : 'Minim챕r',

	fakeobjects :
	{
		anchor		: 'Anker',
		flash		: 'Flashanimation',
		iframe		: 'Iframe',
		hiddenfield	: 'Skjult felt',
		unknown		: 'Ukendt objekt'
	},

	resize : 'Tr챈k for at skalere',

	colordialog :
	{
		title		: 'V챈lg farve',
		options	:	'Farvemuligheder',
		highlight	: 'Mark챕r',
		selected	: 'Valgt farve',
		clear		: 'Nulstil'
	},

	toolbarCollapse	: 'Sammenklap v챈rkt첩jslinje',
	toolbarExpand	: 'Udvid v챈rkt첩jslinje',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'Udklipsholder/Fortryd',
		editing : 'Redigering',
		forms : 'Formularer',
		basicstyles : 'Basis styles',
		paragraph : 'Paragraf',
		links : 'Links',
		insert : 'Inds챈t',
		styles : 'Typografier',
		colors : 'Farver',
		tools : 'V챈rkt첩jer'
	},

	bidi :
	{
		ltr : 'Tekstretning fra venstre til h첩jre',
		rtl : 'Tekstretning fra h첩jre til venstre'
	},

	docprops :
	{
		label : 'Egenskaber for dokument',
		title : 'Egenskaber for dokument',
		design : 'Design',
		meta : 'Metatags',
		chooseColor : 'V챈lg',
		other : '<anden>',
		docTitle :	'Sidetitel',
		charset : 	'Tegns챈tskode',
		charsetOther : 'Anden tegns챈tskode',
		charsetASCII : 'ASCII',
		charsetCE : 'Centraleurop챈isk',
		charsetCT : 'Traditionel kinesisk (Big5)',
		charsetCR : 'Kyrillisk',
		charsetGR : 'Gr챈sk',
		charsetJP : 'Japansk',
		charsetKR : 'Koreansk',
		charsetTR : 'Tyrkisk',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Vesteurop챈isk',
		docType : 'Dokumenttype kategori',
		docTypeOther : 'Anden dokumenttype kategori',
		xhtmlDec : 'Inkludere XHTML deklartion',
		bgColor : 'Baggrundsfarve',
		bgImage : 'Baggrundsbillede URL',
		bgFixed : 'Fastl책st baggrund',
		txtColor : 'Tekstfarve',
		margin : 'Sidemargen',
		marginTop : '횠verst',
		marginLeft : 'Venstre',
		marginRight : 'H첩jre',
		marginBottom : 'Nederst',
		metaKeywords : 'Dokument index n첩gleord (kommasepareret)',
		metaDescription : 'Dokumentbeskrivelse',
		metaAuthor : 'Forfatter',
		metaCopyright : 'Copyright',
		previewHtml : '<p>Dette er et <strong>eksempel p책 noget tekst</strong>. Du benytter <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
