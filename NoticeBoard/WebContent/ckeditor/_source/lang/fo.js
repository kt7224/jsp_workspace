/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Faroese language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['fo'] =
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
	editorHelp : 'Tr첵st ALT og 0 fyri veglei챨ing',

	// ARIA descriptions.
	toolbars	: 'Editor toolbars',
	editor		: 'Rich Text Editor',

	// Toolbar buttons without dialogs.
	source			: 'Kelda',
	newPage			: 'N첵ggj s챠챨a',
	save			: 'Goym',
	preview			: 'Frums첵ning',
	cut				: 'Kvett',
	copy			: 'Avrita',
	paste			: 'Innrita',
	print			: 'Prenta',
	underline		: 'Undirstrika챨',
	bold			: 'Feit skrift',
	italic			: 'Skr찼skrift',
	selectAll		: 'Markera alt',
	removeFormat	: 'Strika sni챨geving',
	strike			: 'Yvirstrika챨',
	subscript		: 'L챈kka챨 skrift',
	superscript		: 'H챈kka챨 skrift',
	horizontalrule	: 'Ger vatnr챈tta linju',
	pagebreak		: 'Ger s챠챨uskift',
	pagebreakAlt		: 'S챠챨uskift',
	unlink			: 'Strika tilkn첵ti',
	undo			: 'Angra',
	redo			: 'Vend aftur',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Amb챈tarakagi',
		url				: 'URL',
		protocol		: 'Protokoll',
		upload			: 'Send til amb챈taran',
		uploadSubmit	: 'Send til amb챈taran',
		image			: 'Myndir',
		flash			: 'Flash',
		form			: 'Formur',
		checkbox		: 'Flugubein',
		radio			: 'Radiokn첩ttur',
		textField		: 'Tekstteigur',
		textarea		: 'Tekstumr찼챨i',
		hiddenField		: 'Fjaldur teigur',
		button			: 'Kn첩ttur',
		select			: 'Valskr찼',
		imageButton		: 'Myndakn첩ttur',
		notSet			: '<ikki sett>',
		id				: 'Id',
		name			: 'Navn',
		langDir			: 'Tekstk처s',
		langDirLtr		: 'Fr찼 vinstru til h첩gru (LTR)',
		langDirRtl		: 'Fr찼 h첩gru til vinstru (RTL)',
		langCode		: 'M찼lkoda',
		longDescr		: 'V챠챨ka챨 URL fr찼grei챨ing',
		cssClass		: 'Typografi klassar',
		advisoryTitle	: 'Veglei챨andi heiti',
		cssStyle		: 'Typografi',
		ok				: 'G처챨kent',
		cancel			: 'Avl첵st',
		close			: 'Lat aftur',
		preview			: 'Frums첵n',
		generalTab		: 'Generelt',
		advancedTab		: 'Fj첩lbroytt',
		validateNumberFailed : 'Hetta er ikki eitt tal.',
		confirmNewPage	: 'Allar ikki goymdar broytingar 챠 hesum innihaldi챨 hv첩rva. Skal n첵ggj s챠챨a lesast kortini?',
		confirmCancel	: 'Nakrir valm첩guleikar eru broyttir. Ert t첬 v챠sur 챠, at dialogurin skal latast aftur?',
		options			: 'Options',
		target			: 'Target',
		targetNew		: 'N첵tt vindeyga (_blank)',
		targetTop		: 'Vindeyga ovast (_top)',
		targetSelf		: 'Sama vindeyga (_self)',
		targetParent	: 'Upphavligt vindeyga (_parent)',
		langDirLTR		: 'Fr찼 vinstru til h첩gru (LTR)',
		langDirRTL		: 'Fr찼 h첩gru til vinstru (RTL)',
		styles			: 'Style',
		cssClasses		: 'Stylesheet Classes',
		width			: 'Breidd',
		height			: 'H챈dd',
		align			: 'Justering',
		alignLeft		: 'Vinstra',
		alignRight		: 'H첩gra',
		alignCenter		: 'Mi챨sett',
		alignTop		: 'Ovast',
		alignMiddle		: 'Mi챨ja',
		alignBottom		: 'Botnur',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'H챈dd m찼 vera eitt tal.',
		invalidWidth	: 'Breidd m찼 vera eitt tal.',
		invalidCssLength	: 'Vir챨i챨 sett 챠 "%1" felti챨 m찼 vera eitt positivt tal, vi챨 ella uttan gyldugum CSS m찼tieind (px, %, in, cm, mm, em, ex, pt, ella pc).',
		invalidHtmlLength	: 'Vir챨i챨 sett 챠 "%1" felti챨ield m찼 vera eitt positivt tal, vi챨 ella uttan gyldugum CSS m찼tieind (px ella %).',
		invalidInlineStyle	: 'Vir챨i specifisera챨 fyri inline style m찼 hava eitt ella fleiri p첩r (tuples) skriva챨 sum "name : value", hv첩rt pari챨 sundurskilt vi챨 semi-colon.',
		cssLengthTooltip	: 'Skriva eitt tal fyri eitt vir챨i 챠 pixels ella eitt tal vi챨 gyldigum CSS eind (px, %, in, cm, mm, em, ex, pt, ella pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, ikki t첩kt</span>'
	},

	contextmenu :
	{
		options : 'Context Menu Options'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Set inn sertekn',
		title		: 'Vel sertekn',
		options : 'M첩guleikar vi챨 serteknum'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Ger/broyt tilkn첵ti',
		other 		: '<anna챨>',
		menu		: 'Broyt tilkn첵ti',
		title		: 'Tilkn첵ti',
		info		: 'Tilkn첵tis uppl첵singar',
		target		: 'Target',
		upload		: 'Send til amb챈taran',
		advanced	: 'Fj첩lbroytt',
		type		: 'Tilkn첵tisslag',
		toUrl		: 'URL',
		toAnchor	: 'Tilkn첵ti til marknastein 챠 tekstinum',
		toEmail		: 'Teldupostur',
		targetFrame		: '<ramma>',
		targetPopup		: '<popup vindeyga>',
		targetFrameName	: 'V챠s navn vindeygans',
		targetPopupName	: 'Popup vindeygans navn',
		popupFeatures	: 'Popup vindeygans v챠챨ka챨u eginleikar',
		popupResizable	: 'St첩dd kann broytast',
		popupStatusBar	: 'St첩챨ufr찼grei챨ingarbj찼lki',
		popupLocationBar: 'Adressulinja',
		popupToolbar	: 'Ambo챨sbj찼lki',
		popupMenuBar	: 'Skr찼bj찼lki',
		popupFullScreen	: 'Fullur skermur (IE)',
		popupScrollBars	: 'Rullibj찼lki',
		popupDependent	: 'Bundi챨 (Netscape)',
		popupLeft		: 'Fr찼st첩챨a fr찼 vinstru',
		popupTop		: 'Fr찼st첩챨a fr찼 챠erva',
		id				: 'Id',
		langDir			: 'Tekstk처s',
		langDirLTR		: 'Fr찼 vinstru til h첩gru (LTR)',
		langDirRTL		: 'Fr찼 h첩gru til vinstru (RTL)',
		acccessKey		: 'Snarvegiskn철ttur',
		name			: 'Navn',
		langCode			: 'Tekstk처s',
		tabIndex			: 'Tabulator indeks',
		advisoryTitle		: 'Veglei챨andi heiti',
		advisoryContentType	: 'Veglei챨andi innihaldsslag',
		cssClasses		: 'Typografi klassar',
		charset			: 'Atkn첵tt teknsett',
		styles			: 'Typografi',
		rel			: 'Relati처n',
		selectAnchor		: 'Vel ein marknastein',
		anchorName		: 'Eftir navni 찼 marknasteini',
		anchorId			: 'Eftir element Id',
		emailAddress		: 'Teldupost-adressa',
		emailSubject		: 'Evni',
		emailBody		: 'Brey챨tekstur',
		noAnchors		: '(Eingir marknasteinar eru 챠 hesum dokumenti챨)',
		noUrl			: 'Vinarliga skriva tilkn첵ti (URL)',
		noEmail			: 'Vinarliga skriva teldupost-adressu'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ger/broyt marknastein',
		menu		: 'Eginleikar fyri marknastein',
		title		: 'Eginleikar fyri marknastein',
		name		: 'Heiti marknasteinsins',
		errorName	: 'Vinarliga rita marknasteinsins heiti',
		remove		: 'Strika marknastein'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Eginleikar fyri lista vi챨 t첩lum',
		bulletedTitle		: 'Eginleikar fyri lista vi챨 prikkum',
		type				: 'Slag',
		start				: 'Byrjan',
		validateStartNumber				:'Byrjunartali챨 fyri lista m찼 vera eitt heiltal.',
		circle				: 'Sirkul',
		disc				: 'Disc',
		square				: 'F첵rkantur',
		none				: 'Einki',
		notset				: '<ikki sett>',
		armenian			: 'Armensk talskipan',
		georgian			: 'Georgisk talskipan (an, ban, gan, osv.)',
		lowerRoman			: 'L챠til r처marat첩l (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'St처r r처marat첩l (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'L챠tlir b처kstavir (a, b, c, d, e, etc.)',
		upperAlpha			: 'St처rir b처kstavir (A, B, C, D, E, etc.)',
		lowerGreek			: 'Grikskt vi챨 l챠tlum (alpha, beta, gamma, etc.)',
		decimal				: 'Vanlig t첩l (1, 2, 3, etc.)',
		decimalLeadingZero	: 'T첩l vi챨 null frammanfyri (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Finn og broyt',
		find				: 'Leita',
		replace				: 'Yvirskriva',
		findWhat			: 'Finn:',
		replaceWith			: 'Yvirskriva vi챨:',
		notFoundMsg			: 'Leititeksturin var챨 ikki funnin',
		findOptions			: 'Finn m첩guleikar',
		matchCase			: 'Munur 찼 st처rum og sm찼um b처kstavum',
		matchWord			: 'Bert heil or챨',
		matchCyclic			: 'Match cyclic',
		replaceAll			: 'Yvirskriva alt',
		replaceSuccessMsg	: '%1 첬rslit broytt.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabell',
		title		: 'Eginleikar fyri tabell',
		menu		: 'Eginleikar fyri tabell',
		deleteTable	: 'Strika tabell',
		rows		: 'R첩챨ir',
		columns		: 'Kolonnur',
		border		: 'Bordabreidd',
		widthPx		: 'pixels',
		widthPc		: 'prosent',
		widthUnit	: 'breiddar unit',
		cellSpace	: 'Fjarst첩챨a millum meskar',
		cellPad		: 'Meskubreddi',
		caption		: 'Tabellfr찼grei챨ing',
		summary		: 'Samandr찼ttur',
		headers		: 'Yvirskriftir',
		headersNone		: 'Eingin',
		headersColumn	: 'Fyrsta kolonna',
		headersRow		: 'Fyrsta ra챨',
		headersBoth		: 'B찼챨ir',
		invalidRows		: 'Tali챨 av r첩챨um m찼 vera eitt tal st첩rri enn 0.',
		invalidCols		: 'Tali챨 av kolonnum m찼 vera eitt tal st첩rri enn 0.',
		invalidBorder	: 'Borda-st첩dd m찼 vera eitt tal.',
		invalidWidth	: 'Tabell-breidd m찼 vera eitt tal.',
		invalidHeight	: 'Tabell-h챈dd m찼 vera eitt tal.',
		invalidCellSpacing	: 'Cell spacing m찼 vera eitt tal.',
		invalidCellPadding	: 'Cell padding m찼 vera eitt tal.',

		cell :
		{
			menu			: 'Meski',
			insertBefore	: 'Set meska inn 찼챨renn',
			insertAfter		: 'Set meska inn aftan찼',
			deleteCell		: 'Strika meskar',
			merge			: 'Fl챈tta meskar',
			mergeRight		: 'Fl챈tta meskar til h첩gru',
			mergeDown		: 'Fl챈tta saman',
			splitHorizontal	: 'Kloyv meska vatnr챈tt',
			splitVertical	: 'Kloyv meska loddr챈tt',
			title			: 'Mesku eginleikar',
			cellType		: 'Mesku slag',
			rowSpan			: 'R챈챨 spenni',
			colSpan			: 'Kolonnu spenni',
			wordWrap		: 'Or챨kloyving',
			hAlign			: 'Horisontal plasering',
			vAlign			: 'Loddr첩tt plasering',
			alignBaseline	: 'Basislinja',
			bgColor			: 'Bakgrundslitur',
			borderColor		: 'Bordalitur',
			data			: 'Data',
			header			: 'Header',
			yes				: 'Ja',
			no				: 'Nei',
			invalidWidth	: 'Meskubreidd m찼 vera eitt tal.',
			invalidHeight	: 'Meskuh챈dd m찼 vera eitt tal.',
			invalidRowSpan	: 'Ra챨spenni챨 m찼 vera eitt heiltal.',
			invalidColSpan	: 'Kolonnuspenni챨 m찼 vera eitt heiltal.',
			chooseColor		: 'Vel'
		},

		row :
		{
			menu			: 'Ra챨',
			insertBefore	: 'Set ra챨 inn 찼챨renn',
			insertAfter		: 'Set ra챨 inn aftan찼',
			deleteRow		: 'Strika r첩챨ir'
		},

		column :
		{
			menu			: 'Kolonna',
			insertBefore	: 'Set kolonnu inn 찼챨renn',
			insertAfter		: 'Set kolonnu inn aftan찼',
			deleteColumn	: 'Strika kolonnur'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Eginleikar fyri kn첩tt',
		text		: 'Tekstur',
		type		: 'Slag',
		typeBtn		: 'Kn첩ttur',
		typeSbm		: 'Send',
		typeRst		: 'Nullstilla'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Eginleikar fyri flugubein',
		radioTitle	: 'Eginleikar fyri radiokn첩tt',
		value		: 'Vir챨i',
		selected	: 'Valt'
	},

	// Form Dialog.
	form :
	{
		title		: 'Eginleikar fyri Form',
		menu		: 'Eginleikar fyri Form',
		action		: 'Hending',
		method		: 'H찼ttur',
		encoding	: 'Encoding'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Eginleikar fyri valskr찼',
		selectInfo	: 'Uppl첵singar',
		opAvail		: 'T첩kir m첩guleikar',
		value		: 'Vir챨i',
		size		: 'St첩dd',
		lines		: 'Linjur',
		chkMulti	: 'Loyv fleiri valm첩guleikum samstundis',
		opText		: 'Tekstur',
		opValue		: 'Vir챨i',
		btnAdd		: 'Legg afturat',
		btnModify	: 'Broyt',
		btnUp		: 'Upp',
		btnDown		: 'Ni챨ur',
		btnSetValue : 'Set sum valt vir챨i',
		btnDelete	: 'Strika'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Eginleikar fyri tekstumr찼챨i',
		cols		: 'kolonnur',
		rows		: 'r첩챨ir'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Eginleikar fyri tekstteig',
		name		: 'Navn',
		value		: 'Vir챨i',
		charWidth	: 'Breidd (sj처nlig tekn)',
		maxChars	: 'Mest loyvdu tekn',
		type		: 'Slag',
		typeText	: 'Tekstur',
		typePass	: 'Loynior챨'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Eginleikar fyri fjaldan teig',
		name	: 'Navn',
		value	: 'Vir챨i'
	},

	// Image Dialog.
	image :
	{
		title		: 'Myndaeginleikar',
		titleButton	: 'Eginleikar fyri myndakn첩tt',
		menu		: 'Myndaeginleikar',
		infoTab		: 'Myndauppl첵singar',
		btnUpload	: 'Send til amb챈taran',
		upload		: 'Send',
		alt			: 'Alternativur tekstur',
		lockRatio	: 'L챈s lutfalli챨',
		resetSize	: 'Upprunast첩dd',
		border		: 'Bordi',
		hSpace		: 'H첩gri breddi',
		vSpace		: 'Vinstri breddi',
		alertUrl	: 'Rita sl처챨ina til myndina',
		linkTab		: 'Tilkn첵ti',
		button2Img	: 'Skal valdi myndakn첩ttur gerast til vanliga mynd?',
		img2Button	: 'Skal valda mynd gerast til myndakn첩tt?',
		urlMissing	: 'URL til mynd manglar.',
		validateBorder	: 'Bordi m찼 vera eitt heiltal.',
		validateHSpace	: 'HSpace m찼 vera eitt heiltal.',
		validateVSpace	: 'VSpace m찼 vera eitt heiltal.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash eginleikar',
		propertiesTab	: 'Eginleikar',
		title			: 'Flash eginleikar',
		chkPlay			: 'Avsp챈lingin byrjar sj찼lv',
		chkLoop			: 'Endursp챈l',
		chkMenu			: 'Ger Flash skr찼 virkna',
		chkFull			: 'Loyv fullan skerm',
 		scale			: 'Skalering',
		scaleAll		: 'V챠s alt',
		scaleNoBorder	: 'Eingin bordi',
		scaleFit		: 'Neyv skalering',
		access			: 'Script atgongd',
		accessAlways	: 'Alt챠챨',
		accessSameDomain: 'Sama navna첩ki',
		accessNever		: 'Ongant챠챨',
		alignAbsBottom	: 'Abs botnur',
		alignAbsMiddle	: 'Abs mi챨ja',
		alignBaseline	: 'Basislinja',
		alignTextTop	: 'Tekst toppur',
		quality			: 'G처챨ska',
		qualityBest		: 'Besta',
		qualityHigh		: 'H첩g',
		qualityAutoHigh	: 'Auto h첩g',
		qualityMedium	: 'Me챨al',
		qualityAutoLow	: 'Auto L찼g',
		qualityLow		: 'L찼g',
		windowModeWindow: 'R첬tur',
		windowModeOpaque: 'Ikki transparent',
		windowModeTransparent : 'Transparent',
		windowMode		: 'Slag av r첬ti',
		flashvars		: 'Variablar fyri Flash',
		bgcolor			: 'Bakgrundslitur',
		hSpace			: 'H첩gri breddi',
		vSpace			: 'Vinstri breddi',
		validateSrc		: 'Vinarliga skriva tilkn첵ti (URL)',
		validateHSpace	: 'HSpace m찼 vera eitt tal.',
		validateVSpace	: 'VSpace m찼 vera eitt tal.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Kanna stavseting',
		title			: 'Kanna stavseting',
		notAvailable	: 'T챠verri, ikki t첩kt 챠 l첩tuni.',
		errorLoading	: 'Feilur vi챨 innlesing av application service host: %s.',
		notInDic		: 'Finst ikki 챠 or챨ab처kini',
		changeTo		: 'Broyt til',
		btnIgnore		: 'Forfj처na',
		btnIgnoreAll	: 'Forfj처na alt',
		btnReplace		: 'Yvirskriva',
		btnReplaceAll	: 'Yvirskriva alt',
		btnUndo			: 'Angra',
		noSuggestions	: '- Einki uppskot -',
		progress		: 'R챈ttstavarin arbei챨ir...',
		noMispell		: 'R챈ttstavarin li챨ugur: Eingin feilur funnin',
		noChanges		: 'R챈ttstavarin li챨ugur: Einki or챨 var챨 broytt',
		oneChange		: 'R챈ttstavarin li챨ugur: Eitt or챨 er broytt',
		manyChanges		: 'R챈ttstavarin li챨ugur: %1 or챨 broytt',
		ieSpellDownload	: 'R챈ttstavarin er ikki t첩kur 챠 tekstvi챨geranum. Vilt t첬 heinta hann n첬?'
	},

	smiley :
	{
		toolbar	: 'Smiley',
		title	: 'Vel Smiley',
		options : 'M첩guleikar fyri Smiley'
	},

	elementsPath :
	{
		eleLabel : 'Sl처챨 til elementir',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Talmerktur listi',
	bulletedlist	: 'Punktmerktur listi',
	indent			: '횠kja reglubrotarinntriv',
	outdent			: 'Minka reglubrotarinntriv',

	justify :
	{
		left	: 'Vinstrasett',
		center	: 'Mi챨sett',
		right	: 'H첩grasett',
		block	: 'Javnir tekstkantar'
	},

	blockquote : 'Blockquote',

	clipboard :
	{
		title		: 'Innrita',
		cutError	: 'Trygdaruppseting aln처tskagans for챨ar tekstvi챨geranum 챠 at kvetta tekstin. Vinarliga n첵t knappabor챨i챨 til at kvetta tekstin (Ctrl/Cmd+X).',
		copyError	: 'Trygdaruppseting aln처tskagans for챨ar tekstvi챨geranum 챠 at avrita tekstin. Vinarliga n첵t knappabor챨i챨 til at avrita tekstin (Ctrl/Cmd+C).',
		pasteMsg	: 'Vinarliga koyr tekstin 챠 hendan r첬tin vi챨 knappabor챨inum (<strong>Ctrl/Cmd+V</strong>) og klikk 찼 <strong>G처챨tak</strong>.',
		securityMsg	: 'Trygdaruppseting aln처tskagans for챨ar tekstvi챨geranum 챠 beinlei챨is atgongd til avritingarminni챨. Tygum mugu royna aftur 챠 hesum r첬tinum.',
		pasteArea	: 'Avritingarumr찼챨i'
	},

	pastefromword :
	{
		confirmCleanup	: 'Teksturin, t첬 roynir at seta inn, s첵nist at stava fr찼 Word. Skal teksturin reinsast fyrst?',
		toolbar			: 'Innrita fr찼 Word',
		title			: 'Innrita fr찼 Word',
		error			: 'Ta챨 eydna챨ist ikki at reinsa tekstin vegna ein internan feil'
	},

	pasteText :
	{
		button	: 'Innrita som reinan tekst',
		title	: 'Innrita som reinan tekst'
	},

	templates :
	{
		button			: 'Skabel처nir',
		title			: 'Innihaldsskabel처nir',
		options : 'M첩guleikar fyri Template',
		insertOption	: 'Yvirskriva n첬verandi innihald',
		selectPromptMsg	: 'Vinarliga vel ta skabel처n, i챨 skal opnast 챠 tekstvi챨geranum<br>(Hetta yvirskrivar n첬verandi innihald):',
		emptyListMsg	: '(Ongar skabel처nir t첩kar)'
	},

	showBlocks : 'V챠s blokkar',

	stylesCombo :
	{
		label		: 'Typografi',
		panelTitle	: 'Formatterings st챠lir',
		panelTitle1	: 'Blokk st챠lir',
		panelTitle2	: 'Inline st챠lir',
		panelTitle3	: 'Object st챠lir'
	},

	format :
	{
		label		: 'Skriftsni챨',
		panelTitle	: 'Skriftsni챨',

		tag_p		: 'Vanligt',
		tag_pre		: 'Sni챨givi챨',
		tag_address	: 'Adressa',
		tag_h1		: 'Yvirskrift 1',
		tag_h2		: 'Yvirskrift 2',
		tag_h3		: 'Yvirskrift 3',
		tag_h4		: 'Yvirskrift 4',
		tag_h5		: 'Yvirskrift 5',
		tag_h6		: 'Yvirskrift 6',
		tag_div		: 'Vanligt (DIV)'
	},

	div :
	{
		title				: 'Ger Div Container',
		toolbar				: 'Ger Div Container',
		cssClassInputLabel	: 'Stylesheet Classes',
		styleSelectLabel	: 'Style',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Language Code',
		inlineStyleInputLabel	: 'Inline Style',
		advisoryTitleInputLabel	: 'Advisory Title',
		langDirLabel		: 'Language Direction',
		langDirLTRLabel		: 'Vinstru til h첩gru (LTR)',
		langDirRTLLabel		: 'H첩gru til vinstru (RTL)',
		edit				: 'Redigera Div',
		remove				: 'Strika Div'
  	},

	iframe :
	{
		title		: 'M첩guleikar fyri IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Vinarliga skriva URL til iframe',
		scrolling	: 'Loyv scrollbars',
		border		: 'V챠s frame kant'
	},

	font :
	{
		label		: 'Skrift',
		voiceLabel	: 'Skrift',
		panelTitle	: 'Skrift'
	},

	fontSize :
	{
		label		: 'Skriftst첩dd',
		voiceLabel	: 'Skriftst첩dd',
		panelTitle	: 'Skriftst첩dd'
	},

	colorButton :
	{
		textColorTitle	: 'Tekstlitur',
		bgColorTitle	: 'Bakgrundslitur',
		panelTitle		: 'Litir',
		auto			: 'Automatiskt',
		more			: 'Fleiri litir...'
	},

	colors :
	{
		'000' : 'Svart',
		'800000' : 'Maroon',
		'8B4513' : 'Sa챨ilsbr첬nt',
		'2F4F4F' : 'Dark Slate Gray',
		'008080' : 'Teal',
		'000080' : 'Navy',
		'4B0082' : 'Indigo',
		'696969' : 'Myrkagr찼tt',
		'B22222' : 'Fire Brick',
		'A52A2A' : 'Br첬nt',
		'DAA520' : 'Gullstavur',
		'006400' : 'Myrkagr첩nt',
		'40E0D0' : 'Turquoise',
		'0000CD' : 'Me챨al bl찼tt',
		'800080' : 'Purple',
		'808080' : 'Gr찼tt',
		'F00' : 'Reytt',
		'FF8C00' : 'Myrkt appelsingult',
		'FFD700' : 'Gull',
		'008000' : 'Gr첩nt',
		'0FF' : 'Cyan',
		'00F' : 'Bl찼tt',
		'EE82EE' : 'Violet',
		'A9A9A9' : 'D첩kt gr찼tt',
		'FFA07A' : 'Lj처sur laksur',
		'FFA500' : 'Appelsingult',
		'FFFF00' : 'Gult',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Pale Turquoise',
		'ADD8E6' : 'Lj처sabl찼tt',
		'DDA0DD' : 'Plum',
		'D3D3D3' : 'Lj처sagr찼tt',
		'FFF0F5' : 'Lavender Blush',
		'FAEBD7' : 'Klassiskt hv챠tt',
		'FFFFE0' : 'Lj처sagult',
		'F0FFF0' : 'Hunangsd첩ggur',
		'F0FFFF' : 'Azure',
		'F0F8FF' : 'Alice Bl찼tt',
		'E6E6FA' : 'Lavender',
		'FFF' : 'Hv챠tt'
	},

	scayt :
	{
		title			: 'Kanna stavseting, me챨an t첬 skrivar',
		opera_title		: 'Ikki stu챨la챨 챠 Opera',
		enable			: 'Loyv SCAYT',
		disable			: 'Nokta SCAYT',
		about			: 'Um SCAYT',
		toggle			: 'Toggle SCAYT',
		options			: 'Uppseting',
		langs			: 'Tungum찼l',
		moreSuggestions	: 'Fleiri tilr찼챨ingar',
		ignore			: 'Ignorera',
		ignoreAll		: 'Ignorera alt',
		addWord			: 'Legg or챨 afturat',
		emptyDic		: 'Heiti 찼 or챨ab처k eigur ikki at vera t처mt.',
		noSuggestions	: 'Einki uppskot',
		optionsTab		: 'Uppseting',
		allCaps			: 'Loyp or챨 vi챨 bert st처rum stavum um',
		ignoreDomainNames : 'loyp 첩kisn첩vn um',
		mixedCase		: 'Loyp or챨 vi챨 blanda챨um sm찼um og st처rum stavum um',
		mixedWithDigits	: 'Loyp or챨 vi챨 t첩lum um',

		languagesTab	: 'Tungum찼l',

		dictionariesTab	: 'Or챨ab첩kur',
		dic_field_name	: 'Or챨ab처kanavn',
		dic_create		: 'Uppr챈tta n첵ggja',
		dic_restore		: 'Endurskapa',
		dic_delete		: 'Strika',
		dic_rename		: 'Broyt',
		dic_info		: 'Upprunaliga er br첬kara-or챨ab처kin goymd 챠 eini cookie 챠 t챠num egna kaga. Men hesar cookies eru avmarka챨ar 챠 st첩dd. T찼 br첬kara-or챨ab처kin veksur seg ov st처ra til eina cookie, so er m첩guligt at goyma hana 찼 amb챈tara okkara. Fyri at goyma pers처nligu or챨ab처kina 찼 amb챈taranum eigur t첬 at velja eitt navn til t챠na skuffu. Hevur t첬 longu goymt eina or챨ab처k, so vinarliga skriva navni챨 og klikk 찼 kn첩ttin Endurskapa.',

		aboutTab		: 'Um'
	},

	about :
	{
		title		: 'Um CKEditor',
		dlgTitle	: 'Um CKEditor',
		help	: 'Kekka $1 fyri hj찼lp.',
		userGuide : 'CKEditor Br첬karaveglei챨ing',
		moreInfo	: 'Licens uppl첵singar finnast 찼 heimas챠챨u okkara:',
		copy		: 'Copyright &copy; $1. All rights reserved.'
	},

	maximize : 'Maksimera',
	minimize : 'Minimera',

	fakeobjects :
	{
		anchor		: 'Anchor',
		flash		: 'Flash Animation',
		iframe		: 'IFrame',
		hiddenfield	: 'Fjaldur teigur',
		unknown		: '횙kent Object'
	},

	resize : 'Drag fyri at broyta st첩dd',

	colordialog :
	{
		title		: 'Vel lit',
		options	:	'Litm첩guleikar',
		highlight	: 'Framheva',
		selected	: 'Valdur litur',
		clear		: 'Strika'
	},

	toolbarCollapse	: 'Lat Toolbar aftur',
	toolbarExpand	: 'V챠s Toolbar',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'Clipboard/Undo',
		editing : 'Editering',
		forms : 'Formar',
		basicstyles : 'Grundleggjandi Styles',
		paragraph : 'Reglubrot',
		links : 'Leinkjur',
		insert : 'Set inn',
		styles : 'Styles',
		colors : 'Litir',
		tools : 'T처l'
	},

	bidi :
	{
		ltr : 'Tekstk처s fr찼 vinstru til h첩gru',
		rtl : 'Tekstk처s fr찼 h첩gru til vinstru'
	},

	docprops :
	{
		label : 'Eginleikar fyri dokument',
		title : 'Eginleikar fyri dokument',
		design : 'Design',
		meta : 'META-uppl첵singar',
		chooseColor : 'Vel',
		other : '<anna챨>',
		docTitle :	'S챠챨uheiti',
		charset : 	'Teknsett koda',
		charsetOther : 'Onnur teknsett koda',
		charsetASCII : 'ASCII',
		charsetCE : 'Mi챨europa',
		charsetCT : 'Kinesiskt traditionelt (Big5)',
		charsetCR : 'Cyrilliskt',
		charsetGR : 'Grikst',
		charsetJP : 'Japanskt',
		charsetKR : 'Koreanskt',
		charsetTR : 'Turkiskt',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Vestureuropa',
		docType : 'Dokumentslag yvirskrift',
		docTypeOther : 'Anna챨 dokumentslag yvirskrift',
		xhtmlDec : 'Vi챨fest XHTML deklarati처nir',
		bgColor : 'Bakgrundslitur',
		bgImage : 'Lei챨 til bakgrundsmynd (URL)',
		bgFixed : 'L챈st bakgrund (rullar ikki)',
		txtColor : 'Tekstlitur',
		margin : 'S챠챨ubreddar',
		marginTop : 'Ovast',
		marginLeft : 'Vinstra',
		marginRight : 'H첩gra',
		marginBottom : 'Ni챨ast',
		metaKeywords : 'Dokument index lyklaor챨 (sundurb첵tt vi챨 komma)',
		metaDescription : 'Dokumentl첵sing',
		metaAuthor : 'H첩vundur',
		metaCopyright : 'Upphavsr챈ttindi',
		previewHtml : '<p>Hetta er ein <strong>royndartekstur</strong>. Tygum br첬ka <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
