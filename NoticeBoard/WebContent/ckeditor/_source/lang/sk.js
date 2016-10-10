/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Slovak language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['sk'] =
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
	editorTitle : 'Editor form찼tovan챕ho textu, %1',
	editorHelp : 'Stla훾te ALT 0 pre n찼povedu',

	// ARIA descriptions.
	toolbars	: 'Li큄ty n찼strojov editora',
	editor		: 'Editor form찼tovan챕ho textu',

	// Toolbar buttons without dialogs.
	source			: 'Zdroj',
	newPage			: 'Nov찼 str찼nka',
	save			: 'Ulo탑i큐',
	preview			: 'N찼h컁ad',
	cut				: 'Vystrihn첬큐',
	copy			: 'Kop챠rova큐',
	paste			: 'Vlo탑i큐',
	print			: 'Tla훾',
	underline		: 'Pod훾iarknut챕',
	bold			: 'Tu훾n챕',
	italic			: 'Kurz챠va',
	selectAll		: 'Vybra큐 v큄etko',
	removeFormat	: 'Odstr찼ni큐 form찼tovanie',
	strike			: 'Pre훾iarknut챕',
	subscript		: 'Doln첵 index',
	superscript		: 'Horn첵 index',
	horizontalrule	: 'Vlo탑i큐 vodorovn첬 훾iaru',
	pagebreak		: 'Vlo탑i큐 odde컁ova훾 str찼nky pre tla훾',
	pagebreakAlt		: 'Zalomenie strany',
	unlink			: 'Odstr찼ni큐 odkaz',
	undo			: 'Sp채큐',
	redo			: 'Znovu',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Prech찼dza큐 server',
		url				: 'URL',
		protocol		: 'Protokol',
		upload			: 'Nahra큐',
		uploadSubmit	: 'Odosla큐 to na server',
		image			: 'Obr찼zok',
		flash			: 'Flash',
		form			: 'Formul찼r',
		checkbox		: 'Za큄krt찼vacie pol챠훾ko',
		radio			: 'Prep챠na훾',
		textField		: 'Textov챕 pole',
		textarea		: 'Textov찼 oblas큐',
		hiddenField		: 'Skryt챕 pole',
		button			: 'Tla훾idlo',
		select			: 'Rozba컁ovac챠 zoznam',
		imageButton		: 'Obr찼zkov챕 tla훾idlo',
		notSet			: '<nenastaven챕>',
		id				: 'Id',
		name			: 'Meno',
		langDir			: 'Orient찼cia jazyka',
		langDirLtr		: 'Z컁ava doprava (LTR)',
		langDirRtl		: 'Sprava do컁ava (RTL)',
		langCode		: 'K처d jazyka',
		longDescr		: 'Dlh첵 popis URL',
		cssClass		: 'Triedy 큄t첵lu',
		advisoryTitle	: 'Pomocn첵 titulok',
		cssStyle		: '힋t첵l',
		ok				: 'OK',
		cancel			: 'Zru큄i큐',
		close			: 'Zatvorit',
		preview			: 'N찼h컁ad',
		generalTab		: 'Hlavn챕',
		advancedTab		: 'Roz큄챠ren챕',
		validateNumberFailed : 'Hodnota nieje 훾챠slo.',
		confirmNewPage	: 'V큄etky neulo탑en챕 zmeny v tomto obsahu bud첬 straten챕. Ste si ist첵, 탑e chcete na훾챠ta큐 nov첬 str찼nku?',
		confirmCancel	: 'Niektore mo탑nosti boli zmenen챕. Naozaj chcete zavrie큐 okno?',
		options			: 'Mo탑nosti',
		target			: 'Cie컁',
		targetNew		: 'Nov챕 okno (_blank)',
		targetTop		: 'Najvrchnej큄ie okno (_top)',
		targetSelf		: 'To ist챕 okno (_self)',
		targetParent	: 'Rodi훾ovsk챕 okno (_parent)',
		langDirLTR		: 'Z컁ava doprava (LTR)',
		langDirRTL		: 'Sprava do컁ava (RTL)',
		styles			: '힋t첵l',
		cssClasses		: 'Triedy 큄t첵lu',
		width			: '힋챠rka',
		height			: 'V첵큄ka',
		align			: 'Zarovnanie',
		alignLeft		: 'V컁avo',
		alignRight		: 'Vpravo',
		alignCenter		: 'Na stred',
		alignTop		: 'Nahor',
		alignMiddle		: 'Na stred',
		alignBottom		: 'Dole',
		invalidValue	: 'Neplatn찼 hodnota.',
		invalidHeight	: 'V첵큄ka mus챠 by큐 훾챠slo.',
		invalidWidth	: '힋챠rka mus챠 by큐 훾챠slo.',
		invalidCssLength	: '힋pecifikovan찼 hodnota pre pole "%1" mus챠 by큐 kladn챕 훾챠slo s alebo bez platnej CSS mernej jednotky (px, %, in, cm, mm, em, ex, pt alebo pc).',
		invalidHtmlLength	: '힋pecifikovan찼 hodnota pre pole "%1" mus챠 by큐 kladn챕 훾챠slo s alebo bez platnej HTML mernej jednotky (px alebo %).',
		invalidInlineStyle	: 'Zadan찼 hodnota pre inline 큄t첵l mus챠 pozost찼va큐 s jedn챕ho, alebo viac dvoj챠c form찼tu "n찼zov: hodnota", oddelen첵ch bodko훾iarkou.',
		cssLengthTooltip	: 'Vlo탑te 훾챠slo pre hodnotu v pixeloch alebo 훾챠slo so spr찼vnou CSS jednotou (px, %, in, cm, mm, em, ex, pt, or pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, nedostupn첵</span>'
	},

	contextmenu :
	{
		options : 'Mo탑nosti kontextov챕ho menu'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Vlo탑i큐 큄peci찼lny znak',
		title		: 'V첵ber 큄peci찼lneho znaku',
		options : 'Mo탑nosti 큄peci찼lneho znaku'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Odkaz',
		other 		: '<in첵>',
		menu		: 'Upravi큐 odkaz',
		title		: 'Odkaz',
		info		: 'Inform찼cie o odkaze',
		target		: 'Cie컁',
		upload		: 'Nahra큐',
		advanced	: 'Roz큄챠ren챕',
		type		: 'Typ odkazu',
		toUrl		: 'URL',
		toAnchor	: 'Odkaz na kotvu v texte',
		toEmail		: 'E-mail',
		targetFrame		: '<r찼mec>',
		targetPopup		: '<vyskakovacie okno>',
		targetFrameName	: 'N찼zov r찼mu cie컁a',
		targetPopupName	: 'N찼zov vyskakovacieho okna',
		popupFeatures	: 'Vlastnosti vyskakovacieho okna',
		popupResizable	: 'Menite컁n찼 ve컁kos큐 (resizable)',
		popupStatusBar	: 'Stavov첵 riadok (status bar)',
		popupLocationBar: 'Panel umiestnenia (location bar)',
		popupToolbar	: 'Panel n찼strojov (toolbar)',
		popupMenuBar	: 'Panel ponuky (menu bar)',
		popupFullScreen	: 'Cel찼 obrazovka (IE)',
		popupScrollBars	: 'Posuvn챠ky (scroll bars)',
		popupDependent	: 'Z찼vislos큐 (Netscape)',
		popupLeft		: '캭av첵 okraj',
		popupTop		: 'Horn첵 okraj',
		id				: 'Id',
		langDir			: 'Orient찼cia jazyka',
		langDirLTR		: 'Z컁ava doprava (LTR)',
		langDirRTL		: 'Sprava do컁ava (RTL)',
		acccessKey		: 'Pr챠stupov첵 k컁첬훾',
		name			: 'N찼zov',
		langCode			: 'Orient찼cia jazyka',
		tabIndex			: 'Poradie prvku (tab index)',
		advisoryTitle		: 'Pomocn첵 titulok',
		advisoryContentType	: 'Pomocn첵 typ obsahu',
		cssClasses		: 'Triedy 큄t첵lu',
		charset			: 'Priraden찼 znakov찼 sada',
		styles			: '힋t첵l',
		rel			: 'Vz큐ah (rel)',
		selectAnchor		: 'Vybra큐 kotvu',
		anchorName		: 'Pod컁a mena kotvy',
		anchorId			: 'Pod컁a Id objektu',
		emailAddress		: 'E-Mailov찼 adresa',
		emailSubject		: 'Predmet spr찼vy',
		emailBody		: 'Telo spr찼vy',
		noAnchors		: '(V dokumente nie s첬 dostupn챕 탑iadne kotvy)',
		noUrl			: 'Zadajte pros챠m URL odkazu',
		noEmail			: 'Zadajte pros챠m e-mailov첬 adresu'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Kotva',
		menu		: 'Upravi큐 kotvu',
		title		: 'Vlastnosti kotvy',
		name		: 'N찼zov kotvy',
		errorName	: 'Zadajte pros챠m n찼zov kotvy',
		remove		: 'Odstr찼ni큐 kotvu'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Vlastnosti 훾챠seln챕ho zoznamu',
		bulletedTitle		: 'Vlastnosti odr찼탑kov챕ho zoznamu',
		type				: 'Typ',
		start				: 'Za훾iatok',
		validateStartNumber				:'Za훾iato훾n챕 훾챠slo 훾챠seln챕ho zoznamu mus챠 by큐 cel챕 훾챠slo.',
		circle				: 'Kruh',
		disc				: 'Disk',
		square				: '힋tvorec',
		none				: 'Ni훾',
		notset				: '<nenastaven챕>',
		armenian			: 'Arm챕nske 훾챠slovanie',
		georgian			: 'Gregori찼nske 훾챠slovanie (an, ban, gan, at휁.)',
		lowerRoman			: 'Mal챕 r챠mske (i, ii, iii, iv, v, at휁.)',
		upperRoman			: 'Ve컁k챕 r챠mske (I, II, III, IV, V, at휁.)',
		lowerAlpha			: 'Mal챕 latinsk챕 (a, b, c, d, e, at휁.)',
		upperAlpha			: 'Ve컁k챕 latinsk챕 (A, B, C, D, E, at휁.)',
		lowerGreek			: 'Mal챕 gr챕cke (alfa, beta, gama, at휁.)',
		decimal				: '훻챠seln챕 (1, 2, 3, at휁.)',
		decimalLeadingZero	: '훻챠seln챕 s nulou (01, 02, 03, at휁.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'N찼js큐 a nahradi큐',
		find				: 'H컁ada큐',
		replace				: 'Nahradi큐',
		findWhat			: '훻o h컁ada큐:',
		replaceWith			: '훻챠m nahradi큐:',
		notFoundMsg			: 'H컁adan첵 text nebol n찼jden첵.',
		findOptions			: 'N찼js큐 mo탑nosti',
		matchCase			: 'Rozli큄ova큐 mal챕 a ve컁k챕 p챠smen찼',
		matchWord			: 'Len cel챕 slov찼',
		matchCyclic			: 'Cykli큐 zhodu',
		replaceAll			: 'Nahradi큐 v큄etko',
		replaceSuccessMsg	: '%1 v첵skyt(ov) nahraden첵ch.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabu컁ka',
		title		: 'Vlastnosti tabu컁ky',
		menu		: 'Vlastnosti tabu컁ky',
		deleteTable	: 'Vymaza큐 tabu컁ku',
		rows		: 'Riadky',
		columns		: 'St캤pce',
		border		: '힋챠rka r찼mu (border)',
		widthPx		: 'pixelov',
		widthPc		: 'percent',
		widthUnit	: 'jednotka 큄챠rky',
		cellSpace	: 'Vzdialenos큐 buniek (cell spacing)',
		cellPad		: 'Odsadenie obsahu (cell padding)',
		caption		: 'Popis',
		summary		: 'Preh컁ad',
		headers		: 'Hlavi훾ka',
		headersNone		: '탐iadne',
		headersColumn	: 'Prv첵 st캤pec',
		headersRow		: 'Prv첵 riadok',
		headersBoth		: 'Obe',
		invalidRows		: 'Po훾et riadkov mus챠 by큐 훾챠slo v채훾큄ie ako 0.',
		invalidCols		: 'Po훾et st캤pcov mus챠 by큐 훾챠slo v채훾큄ie ako 0.',
		invalidBorder	: '힋irka r찼mu mus챠 by큐 훾챠slo.',
		invalidWidth	: '힋irka tabu컁ky mus챠 by큐 훾챠slo.',
		invalidHeight	: 'V첵큄ka tabu컁ky mus챠 by큐 훾챠slo.',
		invalidCellSpacing	: 'Medzera m채dzi bunkami (cell spacing) mus챠 by큐 kladn챕 훾챠slo.',
		invalidCellPadding	: 'Odsadenie v bunk찼ch (cell padding) mus챠 by큐 kladn챕 훾챠slo.',

		cell :
		{
			menu			: 'Bunka',
			insertBefore	: 'Vlo탑i큐 bunku pred',
			insertAfter		: 'Vlo탑i큐 bunku za',
			deleteCell		: 'Vymaza큐 bunky',
			merge			: 'Zl첬훾i큐 bunky',
			mergeRight		: 'Zl첬훾i큐 doprava',
			mergeDown		: 'Zl첬훾i큐 dole',
			splitHorizontal	: 'Rozdeli큐 bunky horizont찼lne',
			splitVertical	: 'Rozdeli큐 bunky vertik찼lne',
			title			: 'Vlastnosti bunky',
			cellType		: 'Typ bunky',
			rowSpan			: 'Rozsah riadkov',
			colSpan			: 'Rozsah st캤pcov',
			wordWrap		: 'Zalomovanie riadkov',
			hAlign			: 'Horizont찼lne zarovnanie',
			vAlign			: 'Vertik찼lne zarovnanie',
			alignBaseline	: 'Z찼kladn찼 훾iara (baseline)',
			bgColor			: 'Farba pozadia',
			borderColor		: 'Farba r찼mu',
			data			: 'D찼ta',
			header			: 'Hlavi훾ka',
			yes				: '횁no',
			no				: 'Nie',
			invalidWidth	: '힋챠rka bunky mus챠 by큐 훾챠slo.',
			invalidHeight	: 'V첵큄ka bunky mus챠 by큐 훾챠slo.',
			invalidRowSpan	: 'Rozsah riadkov mus챠 by큐 cel챕 훾챠slo.',
			invalidColSpan	: 'Rozsah st캤pcov mus챠 by큐 cel챕 훾챠slo.',
			chooseColor		: 'Vybra큐'
		},

		row :
		{
			menu			: 'Riadok',
			insertBefore	: 'Vlo탑i큐 riadok pred',
			insertAfter		: 'Vlo탑i큐 riadok po',
			deleteRow		: 'Vymaza큐 riadky'
		},

		column :
		{
			menu			: 'St캤pec',
			insertBefore	: 'Vlo탑i큐 st캤pec pred',
			insertAfter		: 'Vlo탑i큐 st캤pec po',
			deleteColumn	: 'Zmaza큐 st캤pce'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Vlastnosti tla훾idla',
		text		: 'Text (Hodnota)',
		type		: 'Typ',
		typeBtn		: 'Tla훾idlo',
		typeSbm		: 'Odosla큐',
		typeRst		: 'Resetova큐'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Vlastnosti za큄krt찼vacieho pol챠훾ka',
		radioTitle	: 'Vlastnosti prep챠na훾a (radio button)',
		value		: 'Hodnota',
		selected	: 'Vybran챕 (selected)'
	},

	// Form Dialog.
	form :
	{
		title		: 'Vlastnosti formul찼ra',
		menu		: 'Vlastnosti formul찼ra',
		action		: 'Akcia (action)',
		method		: 'Met처da (method)',
		encoding	: 'K처dovanie (encoding)'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Vlastnosti rozba컁ovacieho zoznamu',
		selectInfo	: 'Inform찼cie o v첵bere',
		opAvail		: 'Dostupn챕 mo탑nosti',
		value		: 'Hodnota',
		size		: 'Ve컁kos큐',
		lines		: 'riadkov',
		chkMulti	: 'Povoli큐 viacn찼sobn첵 v첵ber',
		opText		: 'Text',
		opValue		: 'Hodnota',
		btnAdd		: 'Prida큐',
		btnModify	: 'Upravi큐',
		btnUp		: 'Hore',
		btnDown		: 'Dole',
		btnSetValue : 'Nastavi큐 ako vybran첬 hodnotu',
		btnDelete	: 'Vymaza큐'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Vlastnosti textovej oblasti (textarea)',
		cols		: 'St캤pcov',
		rows		: 'Riadkov'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Vlastnosti textov챕ho po컁a',
		name		: 'N찼zov (name)',
		value		: 'Hodnota',
		charWidth	: '힋챠rka po컁a (pod컁a znakov)',
		maxChars	: 'Maxim찼lny po훾et znakov',
		type		: 'Typ',
		typeText	: 'Text',
		typePass	: 'Heslo'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Vlastnosti skryt챕ho po컁a',
		name	: 'N찼zov (name)',
		value	: 'Hodnota'
	},

	// Image Dialog.
	image :
	{
		title		: 'Vlastnosti obr찼zka',
		titleButton	: 'Vlastnosti obr찼zkov챕ho tla훾idla',
		menu		: 'Vlastnosti obr찼zka',
		infoTab		: 'Inform찼cie o obr찼zku',
		btnUpload	: 'Odosla큐 to na server',
		upload		: 'Nahra큐',
		alt			: 'Alternat챠vny text',
		lockRatio	: 'Pomer z찼mky',
		resetSize	: 'P척vodn찼 ve컁kos큐',
		border		: 'R찼m (border)',
		hSpace		: 'H-medzera',
		vSpace		: 'V-medzera',
		alertUrl	: 'Zadajte pros챠m URL obr찼zka',
		linkTab		: 'Odkaz',
		button2Img	: 'Chcete zmeni큐 vybran챕 obr찼zkov챕 tla훾idlo na jednoduch첵 obr찼zok?',
		img2Button	: 'Chcete zmeni큐 vybran첵 obr찼zok na obr찼zkov챕 tla훾idlo?',
		urlMissing	: 'Ch첵ba URL zdroja obr찼zka.',
		validateBorder	: 'R찼m (border) mus챠 by큐 cel챕 훾챠slo.',
		validateHSpace	: 'H-medzera mus챠 by큐 cel챕 훾챠slo.',
		validateVSpace	: 'V-medzera mus챠 by큐 cel챕 훾챠slo.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Vlastnosti Flashu',
		propertiesTab	: 'Vlastnosti',
		title			: 'Vlastnosti Flashu',
		chkPlay			: 'Automatick챕 prehr찼vanie',
		chkLoop			: 'Opakovanie',
		chkMenu			: 'Povoli큐 Flash Menu',
		chkFull			: 'Povoli큐 zobrazenie na cel첬 obrazovku (fullscreen)',
 		scale			: 'Mierka',
		scaleAll		: 'Zobrazi큐 v큄etko',
		scaleNoBorder	: 'Bez okrajov',
		scaleFit		: 'Roztiahnu큐, aby sedelo presne',
		access			: 'Pr챠stup skriptu',
		accessAlways	: 'V탑dy',
		accessSameDomain: 'Rovnak찼 dom챕na',
		accessNever		: 'Nikdy',
		alignAbsBottom	: '횣plne dole',
		alignAbsMiddle	: 'Do stredu',
		alignBaseline	: 'Na z찼kladn첬 훾iaru',
		alignTextTop	: 'Na horn첵 okraj textu',
		quality			: 'Kvalita',
		qualityBest		: 'Najlep큄ia',
		qualityHigh		: 'Vysok찼',
		qualityAutoHigh	: 'Automaticky vysok찼',
		qualityMedium	: 'Stredn찼',
		qualityAutoLow	: 'Automaticky n챠zka',
		qualityLow		: 'N챠zka',
		windowModeWindow: 'Okno',
		windowModeOpaque: 'Neprieh컁adn첵',
		windowModeTransparent : 'Prieh컁adn첵',
		windowMode		: 'M처d okna',
		flashvars		: 'Premenn챕 pre Flash',
		bgcolor			: 'Farba pozadia',
		hSpace			: 'H-medzera',
		vSpace			: 'V-medzera',
		validateSrc		: 'URL nesmie by큐 pr찼zdne.',
		validateHSpace	: 'H-medzera mus챠 by큐 훾챠slo.',
		validateVSpace	: 'V-medzera mus챠 by큐 훾챠slo'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Kontrola pravopisu',
		title			: 'Skontrolova큐 pravopis',
		notAvailable	: 'Prep찼훾te, ale slu탑ba je moment찼lne nedostupn찼.',
		errorLoading	: 'Chyba pri na훾챠tan챠 slovn챠ka z adresy: %s.',
		notInDic		: 'Nie je v slovn챠ku',
		changeTo		: 'Zmeni큐 na',
		btnIgnore		: 'Ignorova큐',
		btnIgnoreAll	: 'Ignorova큐 v큄etko',
		btnReplace		: 'Prep챠sat',
		btnReplaceAll	: 'Prep챠sat v큄etko',
		btnUndo			: 'Sp채큐',
		noSuggestions	: '- 탐iadny n찼vrh -',
		progress		: 'Prebieha kontrola pravopisu...',
		noMispell		: 'Kontrola pravopisu dokon훾en찼: Neboli n찼jden챕 탑iadne chyby pravopisu',
		noChanges		: 'Kontrola pravopisu dokon훾en찼: Neboli zmenen챕 탑iadne slov찼',
		oneChange		: 'Kontrola pravopisu dokon훾en찼: Bolo zmenen챕 jedno slovo',
		manyChanges		: 'Kontrola pravopisu dokon훾en찼: Bolo zmenen첵ch %1 slov',
		ieSpellDownload	: 'Kontrola pravopisu nie je nai큄talovan찼. Chcete ju teraz stiahnu큐?'
	},

	smiley :
	{
		toolbar	: 'Smajl챠ky',
		title	: 'Vlo탑i큐 smajl챠ka',
		options : 'Mo탑nosti smajl챠kov'
	},

	elementsPath :
	{
		eleLabel : 'Cesta prvkov',
		eleTitle : '%1 prvok'
	},

	numberedlist	: 'Vlo탑i큐/Odstr찼ni큐 훾챠slovan첵 zoznam',
	bulletedlist	: 'Vlo탑i큐/Odstr찼ni큐 zoznam s odr찼탑kami',
	indent			: 'Zv채훾큄i큐 odsadenie',
	outdent			: 'Zmen큄i큐 odsadenie',

	justify :
	{
		left	: 'Zarovna큐 v컁avo',
		center	: 'Zarovna큐 na stred',
		right	: 'Zarovna큐 vpravo',
		block	: 'Zarovna큐 do bloku'
	},

	blockquote : 'Cit찼cia',

	clipboard :
	{
		title		: 'Vlo탑i큐',
		cutError	: 'Bezpe훾nostn챕 nastavenia V찼큄ho prehliada훾a nedovo컁uj첬 editoru automaticky spusti큐 oper찼ciu vystrihnutia. Pros챠m, pou탑ite na to kl찼vesnicu (Ctrl/Cmd+X).',
		copyError	: 'Bezpe훾nostn챕 nastavenia V찼큄ho prehliada훾a nedovo컁uj첬 editoru automaticky spusti큐 oper찼ciu kop챠rovania. Pros챠m, pou탑ite na to kl찼vesnicu (Ctrl/Cmd+C).',
		pasteMsg	: 'Pros챠m, vlo탑te nasledovn첵 r찼m훾ek pou탑it챠m kl찼vesnice (<STRONG>Ctrl/Cmd+V</STRONG>) a stla훾te OK.',
		securityMsg	: 'Kv척li va큄im bezpe훾nostn첵m nastaveniam prehliada훾a editor nie je schopn첵 pristupova큐 k va큄ej schr찼nke na kop챠rovanie priamo. Vlo탑te to preto do tohto okna.',
		pasteArea	: 'Miesto pre vlo탑enie'
	},

	pastefromword :
	{
		confirmCleanup	: 'Vkladan첵 text vyzer찼 by큐 skop챠rovan첵 z Wordu. Chcete ho automaticky vy훾isti큐 pred vkladan챠m?',
		toolbar			: 'Vlo탑i큐 z Wordu',
		title			: 'Vlo탑i큐 z Wordu',
		error			: 'Nebolo mo탑n챕 vy훾isti큐 vlo탑en챕 d찼ta kv척li internej chybe'
	},

	pasteText :
	{
		button	: 'Vlo탑i큐 ako 훾ist첵 text',
		title	: 'Vlo탑i큐 ako 훾ist첵 text'
	},

	templates :
	{
		button			: '힋abl처ny',
		title			: '힋abl처ny obsahu',
		options : 'Mo탑nosti 큄abl처ny',
		insertOption	: 'Nahradi큐 aktu찼lny obsah',
		selectPromptMsg	: 'Pros챠m vyberte 큄abl처nu na otvorenie v editore',
		emptyListMsg	: '(탐iadne 큄abl처ny nedefinovan챕)'
	},

	showBlocks : 'Uk찼za큐 bloky',

	stylesCombo :
	{
		label		: '힋t첵ly',
		panelTitle	: 'Form찼tovanie 큄t첵lov',
		panelTitle1	: '힋t첵ly bloku',
		panelTitle2	: 'Vn첬troriadkov챕 (inline) 큄t첵ly',
		panelTitle3	: '힋t첵ly objeku'
	},

	format :
	{
		label		: 'Form찼t',
		panelTitle	: 'Form찼t',

		tag_p		: 'Norm찼lny',
		tag_pre		: 'Form찼tovan첵',
		tag_address	: 'Adresa',
		tag_h1		: 'Nadpis 1',
		tag_h2		: 'Nadpis 2',
		tag_h3		: 'Nadpis 3',
		tag_h4		: 'Nadpis 4',
		tag_h5		: 'Nadpis 5',
		tag_h6		: 'Nadpis 6',
		tag_div		: 'Norm찼lny (DIV)'
	},

	div :
	{
		title				: 'Vytvori큐 Div kontajner',
		toolbar				: 'Vytvori큐 Div kontajner',
		cssClassInputLabel	: 'Triedy 큄t첵lu',
		styleSelectLabel	: '힋t첵l',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'K처d jazyka',
		inlineStyleInputLabel	: 'Inline 큄t첵l',
		advisoryTitleInputLabel	: 'Pomocn첵 titulok',
		langDirLabel		: 'Smer jazyka',
		langDirLTRLabel		: 'Z컁ava doprava (LTR)',
		langDirRTLLabel		: 'Zprava do컁ava (RTL)',
		edit				: 'Upravi큐 Div',
		remove				: 'Odstr찼ni큐 Div'
  	},

	iframe :
	{
		title		: 'Vlastnosti IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Pros챠m, vlo탑te URL iframe',
		scrolling	: 'Povoli큐 skrolovanie',
		border		: 'Zobrazi큐 r찼m frame-u'
	},

	font :
	{
		label		: 'Font',
		voiceLabel	: 'Font',
		panelTitle	: 'N찼zov fontu'
	},

	fontSize :
	{
		label		: 'Ve컁kos큐',
		voiceLabel	: 'Ve컁kos큐 p챠sma',
		panelTitle	: 'Ve컁kos큐 p챠sma'
	},

	colorButton :
	{
		textColorTitle	: 'Farba textu',
		bgColorTitle	: 'Farba pozadia',
		panelTitle		: 'Farby',
		auto			: 'Automaticky',
		more			: 'Viac farieb...'
	},

	colors :
	{
		'000' : '훻ierna',
		'800000' : 'Maroon',
		'8B4513' : 'Sedlov찼 hned찼',
		'2F4F4F' : 'Tmavo bridlicovo siv찼',
		'008080' : 'Modrozelen찼',
		'000080' : 'Tmavomodr찼',
		'4B0082' : 'Indigo',
		'696969' : 'Tmav찼 siv찼',
		'B22222' : 'Oh흫ov찼 tehlov찼',
		'A52A2A' : 'Hned찼',
		'DAA520' : 'Zlatoby컁',
		'006400' : 'Tmav찼 zelen찼',
		'40E0D0' : 'Tyrkysov찼',
		'0000CD' : 'Stredn찼 modr찼',
		'800080' : 'Purpurov찼',
		'808080' : 'Siv찼',
		'F00' : '훻erven찼',
		'FF8C00' : 'Tmav찼 oran탑ov찼',
		'FFD700' : 'Zlat찼',
		'008000' : 'Zelen찼',
		'0FF' : 'Az첬rov찼',
		'00F' : 'Modr찼',
		'EE82EE' : 'Fialov찼',
		'A9A9A9' : 'Tmav찼 siv찼',
		'FFA07A' : 'Svetlo lososov찼',
		'FFA500' : 'Oran탑ov찼',
		'FFFF00' : '탐lt찼',
		'00FF00' : 'V찼penn찼',
		'AFEEEE' : 'Svetlo tyrkysov찼',
		'ADD8E6' : 'Svetlo modr찼',
		'DDA0DD' : 'Slivkov찼',
		'D3D3D3' : 'Svetlo siv찼',
		'FFF0F5' : 'Levandu컁ovo 훾erven찼',
		'FAEBD7' : 'Antick찼 biela',
		'FFFFE0' : 'Svetlo 탑lt찼',
		'F0FFF0' : 'Medov찼',
		'F0FFFF' : 'Az첬rov찼',
		'F0F8FF' : 'Alicovo modr찼',
		'E6E6FA' : 'Levandu컁ov찼',
		'FFF' : 'Biela'
	},

	scayt :
	{
		title			: 'Kontrola pravopisu po훾as p챠sania',
		opera_title		: 'Nepodporovan챕 Operou',
		enable			: 'Povoli큐 KPPP (Kontrola pravopisu po훾as p챠sania)',
		disable			: 'Zak찼za큐  KPPP (Kontrola pravopisu po훾as p챠sania)',
		about			: 'O KPPP (Kontrola pravopisu po훾as p챠sania)',
		toggle			: 'Prepn첬큐 KPPP (Kontrola pravopisu po훾as p챠sania)',
		options			: 'Mo탑nosti',
		langs			: 'Jazyky',
		moreSuggestions	: 'Viac n찼vrhov',
		ignore			: 'Ignorova큐',
		ignoreAll		: 'Ignorova큐 v큄etko',
		addWord			: 'Prida큐 slovo',
		emptyDic		: 'N찼zov slovn챠ka by nemal by큐 pr찼zdny.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: 'Mo탑nosti',
		allCaps			: 'Ignorova큐 slov찼 p챠san챕 ve컁k첵mi p챠smenami',
		ignoreDomainNames : 'Iznorova큐 n찼zvy dom챕n',
		mixedCase		: 'Ignorova큐 slov찼 so smie큄an첵mi ve컁k첵mi a mal첵mi p챠smenami',
		mixedWithDigits	: 'Ignorova큐 slov찼 s 훾챠slami',

		languagesTab	: 'Jazyky',

		dictionariesTab	: 'Slovn챠ky',
		dic_field_name	: 'N찼zov slovn챠ka',
		dic_create		: 'Vytvori큐',
		dic_restore		: 'Obnovi큐',
		dic_delete		: 'Vymaza큐',
		dic_rename		: 'Premenova큐',
		dic_info		: 'Spo훾iatku je u탑챠vate컁sk첵 slovn챠k ulo탑en첵 v cookie. Cookie v큄ak maj첬 obmedzen첬 ve컁kos큐. Ke휁 u탑챠vate컁sk첵 slovn챠k narastie do bodu, kedy nem척탑e by큐 ulo탑en첵 v cookie, potom mus챠 by큐 slovn챠k ulo탑en첵 na na큄om serveri. Pre ulo탑enie v찼큄ho osobn챕ho slovn챠ka na n찼큄 server by ste mali zada큐 n찼zov pre v찼큄 slovn챠k. Ak u탑 m찼te ulo탑en첵 slovn챠k, pros챠me, nap챠큄te jeho n찼zov a kliknite tla훾idlo Obnovi큐.',

		aboutTab		: 'O'
	},

	about :
	{
		title		: 'O CKEditor-e',
		dlgTitle	: 'O CKEditor-e',
		help	: 'Za큄krtnite $1 pre pomoc.',
		userGuide : 'Pou탑챠vate컁sk찼 pr챠ru훾ka KCEditor-a',
		moreInfo	: 'Pre inform찼cie o licenci찼ch, pros챠me, nav큄t챠vte na큄u web str찼nku:',
		copy		: 'Copyright &copy; $1. V큄etky pr찼va vyhraden챕.'
	},

	maximize : 'Maximalizova큐',
	minimize : 'Minimalizova큐',

	fakeobjects :
	{
		anchor		: 'Kotva',
		flash		: 'Flash anim찼cia',
		iframe		: 'IFrame',
		hiddenfield	: 'Skryt챕 pole',
		unknown		: 'Nezn찼my objekt'
	},

	resize : 'Potiahnite pre zmenu ve컁kosti',

	colordialog :
	{
		title		: 'Vyberte farbu',
		options	:	'Mo탑nosti farby',
		highlight	: 'Zv첵razni큐',
		selected	: 'Vybran찼 farba',
		clear		: 'Vy훾isti큐'
	},

	toolbarCollapse	: 'Zbali큐 li큄tu n찼strojov',
	toolbarExpand	: 'Rozbali큐 li큄tu n찼strojov',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'Schr찼nka pre kop챠rovanie/Sp채큐',
		editing : 'Upravovanie',
		forms : 'Formul찼re',
		basicstyles : 'Z찼kladn챕 큄t첵ly',
		paragraph : 'Odstavec',
		links : 'Odkazy',
		insert : 'Vlo탑i큐',
		styles : '힋t첵ly',
		colors : 'Farby',
		tools : 'N찼stroje'
	},

	bidi :
	{
		ltr : 'Smer textu z컁ava doprava',
		rtl : 'Smer textu sprava do컁ava'
	},

	docprops :
	{
		label : 'Vlastnosti dokumentu',
		title : 'Vlastnosti dokumentu',
		design : 'Design',
		meta : 'Meta zna훾ky',
		chooseColor : 'Vybra큐',
		other : 'In첵...',
		docTitle :	'Titulok str찼nky',
		charset : 	'Znakov찼 sada',
		charsetOther : 'In찼 znakov찼 sada',
		charsetASCII : 'ASCII',
		charsetCE : 'Stredoeur처pska',
		charsetCT : '훻챠n큄tina tradi훾n찼 (Big5)',
		charsetCR : 'Cyrillika',
		charsetGR : 'Gr챕훾tina',
		charsetJP : 'Japon훾ina',
		charsetKR : 'Korej훾ina',
		charsetTR : 'Ture훾tina',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Z찼padn찼 eur처pa',
		docType : 'Typ z찼hlavia dokumentu',
		docTypeOther : 'In첵 typ z찼hlavia dokumentu',
		xhtmlDec : 'Vlo탑i큐 deklar찼cie XHTML',
		bgColor : 'Farba pozadia',
		bgImage : 'URL obr찼zka na pozad챠',
		bgFixed : 'Fixn챕 pozadie',
		txtColor : 'Farba textu',
		margin : 'Okraje str찼nky (margins)',
		marginTop : 'Horn첵',
		marginLeft : '캭av첵',
		marginRight : 'Prav첵',
		marginBottom : 'Doln첵',
		metaKeywords : 'Indexovan챕 k컁첬훾ov챕 slov찼 dokumentu (oddelen챕 훾iarkou)',
		metaDescription : 'Popis dokumentu',
		metaAuthor : 'Autor',
		metaCopyright : 'Autorsk챕 pr찼va (copyright)',
		previewHtml : '<p>Toto je nejak첵 <strong>uk찼탑kov첵 text</strong>. Pou탑챠vate <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
