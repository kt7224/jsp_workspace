/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Croatian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['hr'] =
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
	editorTitle : 'Bogati ure휃iva훾 teksta, %1',
	editorHelp : 'Pritisni ALT 0 za pomo훶',

	// ARIA descriptions.
	toolbars	: 'Alatne trake ure휃iva훾a teksta',
	editor		: 'Bogati ure휃iva훾 teksta',

	// Toolbar buttons without dialogs.
	source			: 'K척d',
	newPage			: 'Nova stranica',
	save			: 'Snimi',
	preview			: 'Pregledaj',
	cut				: 'Izre탑i',
	copy			: 'Kopiraj',
	paste			: 'Zalijepi',
	print			: 'Ispi큄i',
	underline		: 'Potcrtano',
	bold			: 'Podebljaj',
	italic			: 'Ukosi',
	selectAll		: 'Odaberi sve',
	removeFormat	: 'Ukloni formatiranje',
	strike			: 'Precrtano',
	subscript		: 'Subscript',
	superscript		: 'Superscript',
	horizontalrule	: 'Ubaci vodoravnu liniju',
	pagebreak		: 'Ubaci prijelom stranice',
	pagebreakAlt		: 'Prijelom stranice',
	unlink			: 'Ukloni link',
	undo			: 'Poni큄ti',
	redo			: 'Ponovi',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Pretra탑i server',
		url				: 'URL',
		protocol		: 'Protokol',
		upload			: 'Po큄alji',
		uploadSubmit	: 'Po큄alji na server',
		image			: 'Slika',
		flash			: 'Flash',
		form			: 'Form',
		checkbox		: 'Checkbox',
		radio			: 'Radio Button',
		textField		: 'Text Field',
		textarea		: 'Textarea',
		hiddenField		: 'Hidden Field',
		button			: 'Button',
		select			: 'Selection Field',
		imageButton		: 'Image Button',
		notSet			: '<nije postavljeno>',
		id				: 'Id',
		name			: 'Naziv',
		langDir			: 'Smjer jezika',
		langDirLtr		: 'S lijeva na desno (LTR)',
		langDirRtl		: 'S desna na lijevo (RTL)',
		langCode		: 'K척d jezika',
		longDescr		: 'Duga훾ki opis URL',
		cssClass		: 'Stylesheet klase',
		advisoryTitle	: 'Advisory naslov',
		cssStyle		: 'Stil',
		ok				: 'OK',
		cancel			: 'Poni큄ti',
		close			: 'Zatvori',
		preview			: 'Pregledaj',
		generalTab		: 'Op훶enito',
		advancedTab		: 'Napredno',
		validateNumberFailed : 'Ova vrijednost nije broj.',
		confirmNewPage	: 'Sve napravljene promjene 훶e biti izgubljene ukoliko ih niste snimili. Sigurno 탑elite u훾itati novu stranicu?',
		confirmCancel	: 'Neke od opcija su promjenjene. Sigurno 탑elite zatvoriti ovaj prozor?',
		options			: 'Opcije',
		target			: 'Odredi큄te',
		targetNew		: 'Novi prozor (_blank)',
		targetTop		: 'Vr큄ni prozor (_top)',
		targetSelf		: 'Isti prozor (_self)',
		targetParent	: 'Roditeljski prozor (_parent)',
		langDirLTR		: 'S lijeva na desno (LTR)',
		langDirRTL		: 'S desna na lijevo (RTL)',
		styles			: 'Stil',
		cssClasses		: 'Klase stilova',
		width			: '힋irina',
		height			: 'Visina',
		align			: 'Poravnaj',
		alignLeft		: 'Lijevo',
		alignRight		: 'Desno',
		alignCenter		: 'Sredi큄nje',
		alignTop		: 'Vrh',
		alignMiddle		: 'Sredina',
		alignBottom		: 'Dolje',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'Visina mora biti broj.',
		invalidWidth	: '힋irina mora biti broj.',
		invalidCssLength	: 'Vrijednost odre휃ena za "%1" polje mora biti pozitivni broj sa ili bez va탑e훶ih CSS mjernih jedinica (px, %, in, cm, mm, em, ex, pt ili pc).',
		invalidHtmlLength	: 'Vrijednost odre휃ena za "%1" polje mora biti pozitivni broj sa ili bez va탑e훶ih HTML mjernih jedinica (px ili %).',
		invalidInlineStyle	: 'Vrijednost za linijski stil mora sadr탑avati jednu ili vi큄e definicija s formatom "naziv:vrijednost", odvojenih to훾ka-zarezom.',
		cssLengthTooltip	: 'Unesite broj za vrijednost u pikselima ili broj s va탑e훶im CSS mjernim jedinicama (px, %, in, cm, mm, em, ex, pt ili pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, nedostupno</span>'
	},

	contextmenu :
	{
		options : 'Opcije izbornika'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Ubaci posebne znakove',
		title		: 'Odaberite posebni karakter',
		options : 'Opcije specijalnih znakova'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Ubaci/promijeni link',
		other 		: '<drugi>',
		menu		: 'Promijeni link',
		title		: 'Link',
		info		: 'Link Info',
		target		: 'Meta',
		upload		: 'Po큄alji',
		advanced	: 'Napredno',
		type		: 'Link vrsta',
		toUrl		: 'URL',
		toAnchor	: 'Sidro na ovoj stranici',
		toEmail		: 'E-Mail',
		targetFrame		: '<okvir>',
		targetPopup		: '<popup prozor>',
		targetFrameName	: 'Ime ciljnog okvira',
		targetPopupName	: 'Naziv popup prozora',
		popupFeatures	: 'Mogu훶nosti popup prozora',
		popupResizable	: 'Promjenjiva veli훾ina',
		popupStatusBar	: 'Statusna traka',
		popupLocationBar: 'Traka za lokaciju',
		popupToolbar	: 'Traka s alatima',
		popupMenuBar	: 'Izborna traka',
		popupFullScreen	: 'Cijeli ekran (IE)',
		popupScrollBars	: 'Scroll traka',
		popupDependent	: 'Ovisno (Netscape)',
		popupLeft		: 'Lijeva pozicija',
		popupTop		: 'Gornja pozicija',
		id				: 'Id',
		langDir			: 'Smjer jezika',
		langDirLTR		: 'S lijeva na desno (LTR)',
		langDirRTL		: 'S desna na lijevo (RTL)',
		acccessKey		: 'Pristupna tipka',
		name			: 'Naziv',
		langCode			: 'Smjer jezika',
		tabIndex			: 'Tab Indeks',
		advisoryTitle		: 'Advisory naslov',
		advisoryContentType	: 'Advisory vrsta sadr탑aja',
		cssClasses		: 'Stylesheet klase',
		charset			: 'Kodna stranica povezanih resursa',
		styles			: 'Stil',
		rel			: 'Veza',
		selectAnchor		: 'Odaberi sidro',
		anchorName		: 'Po nazivu sidra',
		anchorId			: 'Po Id elementa',
		emailAddress		: 'E-Mail adresa',
		emailSubject		: 'Naslov',
		emailBody		: 'Sadr탑aj poruke',
		noAnchors		: '(Nema dostupnih sidra)',
		noUrl			: 'Molimo upi큄ite URL link',
		noEmail			: 'Molimo upi큄ite e-mail adresu'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ubaci/promijeni sidro',
		menu		: 'Svojstva sidra',
		title		: 'Svojstva sidra',
		name		: 'Ime sidra',
		errorName	: 'Molimo unesite ime sidra',
		remove		: 'Ukloni sidro'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Svojstva broj훾ane liste',
		bulletedTitle		: 'Svojstva liste',
		type				: 'Vrsta',
		start				: 'Po훾etak',
		validateStartNumber				:'Po훾etak broj훾ane liste mora biti cijeli broj.',
		circle				: 'Krug',
		disc				: 'Disk',
		square				: 'Kvadrat',
		none				: 'Bez',
		notset				: '<nije odre휃en>',
		armenian			: 'Armenijska numeracija',
		georgian			: 'Gruzijska numeracija(an, ban, gan, etc.)',
		lowerRoman			: 'Romanska numeracija mala slova (i, ii, iii, iv, v, itd.)',
		upperRoman			: 'Romanska numeracija velika slova (I, II, III, IV, V, itd.)',
		lowerAlpha			: 'Znakovi mala slova (a, b, c, d, e, itd.)',
		upperAlpha			: 'Znakovi velika slova (A, B, C, D, E, itd.)',
		lowerGreek			: 'Gr훾ka numeracija mala slova (alfa, beta, gama, itd).',
		decimal				: 'Decimalna numeracija (1, 2, 3, itd.)',
		decimalLeadingZero	: 'Decimalna s vode훶om nulom (01, 02, 03, itd)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Prona휃i i zamijeni',
		find				: 'Prona휃i',
		replace				: 'Zamijeni',
		findWhat			: 'Prona휃i:',
		replaceWith			: 'Zamijeni s:',
		notFoundMsg			: 'Tra탑eni tekst nije prona휃en.',
		findOptions			: 'Opcije tra탑enja',
		matchCase			: 'Usporedi mala/velika slova',
		matchWord			: 'Usporedi cijele rije훾i',
		matchCyclic			: 'Usporedi kru탑no',
		replaceAll			: 'Zamijeni sve',
		replaceSuccessMsg	: 'Zamijenjeno %1 pojmova.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tablica',
		title		: 'Svojstva tablice',
		menu		: 'Svojstva tablice',
		deleteTable	: 'Izbri큄i tablicu',
		rows		: 'Redova',
		columns		: 'Kolona',
		border		: 'Veli훾ina okvira',
		widthPx		: 'piksela',
		widthPc		: 'postotaka',
		widthUnit	: 'jedinica 큄irine',
		cellSpace	: 'Prostornost 훶elija',
		cellPad		: 'Razmak 훶elija',
		caption		: 'Naslov',
		summary		: 'Sa탑etak',
		headers		: 'Zaglavlje',
		headersNone		: 'Ni큄ta',
		headersColumn	: 'Prva kolona',
		headersRow		: 'Prvi red',
		headersBoth		: 'Oba',
		invalidRows		: 'Broj redova mora biti broj ve훶i od 0.',
		invalidCols		: 'Broj kolona mora biti broj ve훶i od 0.',
		invalidBorder	: 'Debljina ruba mora biti broj.',
		invalidWidth	: '힋irina tablice mora biti broj.',
		invalidHeight	: 'Visina tablice mora biti broj.',
		invalidCellSpacing	: 'Prostornost 훶elija mora biti broj.',
		invalidCellPadding	: 'Razmak 훶elija mora biti broj.',

		cell :
		{
			menu			: '훴elija',
			insertBefore	: 'Ubaci 훶eliju prije',
			insertAfter		: 'Ubaci 훶eliju poslije',
			deleteCell		: 'Izbri큄i 훶elije',
			merge			: 'Spoji 훶elije',
			mergeRight		: 'Spoji desno',
			mergeDown		: 'Spoji dolje',
			splitHorizontal	: 'Podijeli 훶eliju vodoravno',
			splitVertical	: 'Podijeli 훶eliju okomito',
			title			: 'Svojstva 훶elije',
			cellType		: 'Vrsta 훶elije',
			rowSpan			: 'Rows Span',
			colSpan			: 'Columns Span',
			wordWrap		: 'Prelazak u novi red',
			hAlign			: 'Vodoravno poravnanje',
			vAlign			: 'Okomito poravnanje',
			alignBaseline	: 'Osnovna linija',
			bgColor			: 'Boja pozadine',
			borderColor		: 'Boja ruba',
			data			: 'Podatak',
			header			: 'Zaglavlje',
			yes				: 'Da',
			no				: 'ne',
			invalidWidth	: '힋irina 훶elije mora biti broj.',
			invalidHeight	: 'Visina 훶elije mora biti broj.',
			invalidRowSpan	: 'Rows span mora biti cijeli broj.',
			invalidColSpan	: 'Columns span mora biti cijeli broj.',
			chooseColor		: 'Odaberi'
		},

		row :
		{
			menu			: 'Red',
			insertBefore	: 'Ubaci red prije',
			insertAfter		: 'Ubaci red poslije',
			deleteRow		: 'Izbri큄i redove'
		},

		column :
		{
			menu			: 'Kolona',
			insertBefore	: 'Ubaci kolonu prije',
			insertAfter		: 'Ubaci kolonu poslije',
			deleteColumn	: 'Izbri큄i kolone'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Image Button svojstva',
		text		: 'Tekst (vrijednost)',
		type		: 'Vrsta',
		typeBtn		: 'Gumb',
		typeSbm		: 'Po큄alji',
		typeRst		: 'Poni큄ti'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Checkbox svojstva',
		radioTitle	: 'Radio Button svojstva',
		value		: 'Vrijednost',
		selected	: 'Odabrano'
	},

	// Form Dialog.
	form :
	{
		title		: 'Form svojstva',
		menu		: 'Form svojstva',
		action		: 'Akcija',
		method		: 'Metoda',
		encoding	: 'Encoding'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Selection svojstva',
		selectInfo	: 'Info',
		opAvail		: 'Dostupne opcije',
		value		: 'Vrijednost',
		size		: 'Veli훾ina',
		lines		: 'linija',
		chkMulti	: 'Dozvoli vi큄estruki odabir',
		opText		: 'Tekst',
		opValue		: 'Vrijednost',
		btnAdd		: 'Dodaj',
		btnModify	: 'Promijeni',
		btnUp		: 'Gore',
		btnDown		: 'Dolje',
		btnSetValue : 'Postavi kao odabranu vrijednost',
		btnDelete	: 'Obri큄i'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Textarea svojstva',
		cols		: 'Kolona',
		rows		: 'Redova'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Text Field svojstva',
		name		: 'Ime',
		value		: 'Vrijednost',
		charWidth	: '힋irina',
		maxChars	: 'Najvi큄e karaktera',
		type		: 'Vrsta',
		typeText	: 'Tekst',
		typePass	: '힋ifra'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Hidden Field svojstva',
		name	: 'Ime',
		value	: 'Vrijednost'
	},

	// Image Dialog.
	image :
	{
		title		: 'Svojstva slika',
		titleButton	: 'Image Button svojstva',
		menu		: 'Svojstva slika',
		infoTab		: 'Info slike',
		btnUpload	: 'Po큄alji na server',
		upload		: 'Po큄alji',
		alt			: 'Alternativni tekst',
		lockRatio	: 'Zaklju훾aj odnos',
		resetSize	: 'Obri큄i veli훾inu',
		border		: 'Okvir',
		hSpace		: 'HSpace',
		vSpace		: 'VSpace',
		alertUrl	: 'Unesite URL slike',
		linkTab		: 'Link',
		button2Img	: '탐elite li promijeniti odabrani gumb u jednostavnu sliku?',
		img2Button	: '탐elite li promijeniti odabranu sliku u gumb?',
		urlMissing	: 'Nedostaje URL slike.',
		validateBorder	: 'Okvir mora biti cijeli broj.',
		validateHSpace	: 'HSpace mora biti cijeli broj',
		validateVSpace	: 'VSpace mora biti cijeli broj.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash svojstva',
		propertiesTab	: 'Svojstva',
		title			: 'Flash svojstva',
		chkPlay			: 'Auto Play',
		chkLoop			: 'Ponavljaj',
		chkMenu			: 'Omogu훶i Flash izbornik',
		chkFull			: 'Omogu훶i Fullscreen',
 		scale			: 'Omjer',
		scaleAll		: 'Prika탑i sve',
		scaleNoBorder	: 'Bez okvira',
		scaleFit		: 'To훾na veli훾ina',
		access			: 'Script Access',
		accessAlways	: 'Uvijek',
		accessSameDomain: 'Ista domena',
		accessNever		: 'Nikad',
		alignAbsBottom	: 'Abs dolje',
		alignAbsMiddle	: 'Abs sredina',
		alignBaseline	: 'Bazno',
		alignTextTop	: 'Vrh teksta',
		quality			: 'Kvaliteta',
		qualityBest		: 'Best',
		qualityHigh		: 'High',
		qualityAutoHigh	: 'Auto High',
		qualityMedium	: 'Medium',
		qualityAutoLow	: 'Auto Low',
		qualityLow		: 'Low',
		windowModeWindow: 'Window',
		windowModeOpaque: 'Opaque',
		windowModeTransparent : 'Transparent',
		windowMode		: 'Vrsta prozora',
		flashvars		: 'Varijable za Flash',
		bgcolor			: 'Boja pozadine',
		hSpace			: 'HSpace',
		vSpace			: 'VSpace',
		validateSrc		: 'Molimo upi큄ite URL link',
		validateHSpace	: 'HSpace mora biti broj.',
		validateVSpace	: 'VSpace mora biti broj.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Provjeri pravopis',
		title			: 'Provjera pravopisa',
		notAvailable	: '탐ao nam je, ali usluga trenutno nije dostupna.',
		errorLoading	: 'Gre큄ka u훾itavanja aplikacije: %s.',
		notInDic		: 'Nije u rje훾niku',
		changeTo		: 'Promijeni u',
		btnIgnore		: 'Zanemari',
		btnIgnoreAll	: 'Zanemari sve',
		btnReplace		: 'Zamijeni',
		btnReplaceAll	: 'Zamijeni sve',
		btnUndo			: 'Vrati',
		noSuggestions	: '-Nema preporuke-',
		progress		: 'Provjera u tijeku...',
		noMispell		: 'Provjera zavr큄ena: Nema gre큄aka',
		noChanges		: 'Provjera zavr큄ena: Nije napravljena promjena',
		oneChange		: 'Provjera zavr큄ena: Jedna rije훾 promjenjena',
		manyChanges		: 'Provjera zavr큄ena: Promijenjeno %1 rije훾i',
		ieSpellDownload	: 'Provjera pravopisa nije instalirana. 탐elite li skinuti provjeru pravopisa?'
	},

	smiley :
	{
		toolbar	: 'Smje큄ko',
		title	: 'Ubaci smje큄ka',
		options : 'Opcije smje큄ka'
	},

	elementsPath :
	{
		eleLabel : 'Putanja elemenata',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Broj훾ana lista',
	bulletedlist	: 'Obi훾na lista',
	indent			: 'Pomakni udesno',
	outdent			: 'Pomakni ulijevo',

	justify :
	{
		left	: 'Lijevo poravnanje',
		center	: 'Sredi큄nje poravnanje',
		right	: 'Desno poravnanje',
		block	: 'Blok poravnanje'
	},

	blockquote : 'Blockquote',

	clipboard :
	{
		title		: 'Zalijepi',
		cutError	: 'Sigurnosne postavke Va큄eg pretra탑iva훾a ne dozvoljavaju operacije automatskog izrezivanja. Molimo koristite kraticu na tipkovnici (Ctrl/Cmd+X).',
		copyError	: 'Sigurnosne postavke Va큄eg pretra탑iva훾a ne dozvoljavaju operacije automatskog kopiranja. Molimo koristite kraticu na tipkovnici (Ctrl/Cmd+C).',
		pasteMsg	: 'Molimo zaljepite unutar doljnjeg okvira koriste훶i tipkovnicu (<STRONG>Ctrl/Cmd+V</STRONG>) i kliknite <STRONG>OK</STRONG>.',
		securityMsg	: 'Zbog sigurnosnih postavki Va큄eg pretra탑iva훾a, editor nema direktan pristup Va큄em me휃uspremniku. Potrebno je ponovno zalijepiti tekst u ovaj prozor.',
		pasteArea	: 'Prostor za ljepljenje'
	},

	pastefromword :
	{
		confirmCleanup	: 'Tekst koji 탑elite zalijepiti 훾ini se da je kopiran iz Worda. 탐elite li prije o훾istiti tekst?',
		toolbar			: 'Zalijepi iz Worda',
		title			: 'Zalijepi iz Worda',
		error			: 'Nije mogu훶e o훾istiti podatke za ljepljenje zbog interne gre큄ke'
	},

	pasteText :
	{
		button	: 'Zalijepi kao 훾isti tekst',
		title	: 'Zalijepi kao 훾isti tekst'
	},

	templates :
	{
		button			: 'Predlo큄ci',
		title			: 'Predlo큄ci sadr탑aja',
		options : 'Opcije predlo탑aka',
		insertOption	: 'Zamijeni trenutne sadr탑aje',
		selectPromptMsg	: 'Molimo odaberite predlo탑ak koji 탑elite otvoriti<br>(stvarni sadr탑aj 훶e biti izgubljen):',
		emptyListMsg	: '(Nema definiranih predlo탑aka)'
	},

	showBlocks : 'Prika탑i blokove',

	stylesCombo :
	{
		label		: 'Stil',
		panelTitle	: 'Stilovi formatiranja',
		panelTitle1	: 'Block stilovi',
		panelTitle2	: 'Inline stilovi',
		panelTitle3	: 'Object stilovi'
	},

	format :
	{
		label		: 'Format',
		panelTitle	: 'Format',

		tag_p		: 'Normal',
		tag_pre		: 'Formatirano',
		tag_address	: 'Address',
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
		title				: 'Napravi DIV kontejner',
		toolbar				: 'Napravi DIV kontejner',
		cssClassInputLabel	: 'Klase stilova',
		styleSelectLabel	: 'Stil',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'Jezi훾ni kod',
		inlineStyleInputLabel	: 'Stil u liniji',
		advisoryTitleInputLabel	: 'Savjetodavni naslov',
		langDirLabel		: 'Smjer jezika',
		langDirLTRLabel		: 'S lijeva na desno (LTR)',
		langDirRTLLabel		: 'S desna na lijevo (RTL)',
		edit				: 'Uredi DIV',
		remove				: 'Ukloni DIV'
  	},

	iframe :
	{
		title		: 'IFrame svojstva',
		toolbar		: 'IFrame',
		noUrl		: 'Unesite URL iframe-a',
		scrolling	: 'Omogu훶i trake za skrolanje',
		border		: 'Prika탑i okvir IFrame-a'
	},

	font :
	{
		label		: 'Font',
		voiceLabel	: 'Font',
		panelTitle	: 'Font'
	},

	fontSize :
	{
		label		: 'Veli훾ina',
		voiceLabel	: 'Veli훾ina slova',
		panelTitle	: 'Veli훾ina'
	},

	colorButton :
	{
		textColorTitle	: 'Boja teksta',
		bgColorTitle	: 'Boja pozadine',
		panelTitle		: 'Boje',
		auto			: 'Automatski',
		more			: 'Vi큄e boja...'
	},

	colors :
	{
		'000' : 'Crna',
		'800000' : 'Kesten',
		'8B4513' : 'Sme휃a',
		'2F4F4F' : 'Tamno siva',
		'008080' : 'Teal',
		'000080' : 'Mornarska',
		'4B0082' : 'Indigo',
		'696969' : 'Tamno siva',
		'B22222' : 'Vatrena cigla',
		'A52A2A' : 'Sme휃a',
		'DAA520' : 'Zlatna',
		'006400' : 'Tamno zelena',
		'40E0D0' : 'Tirkizna',
		'0000CD' : 'Srednje plava',
		'800080' : 'Ljubi훾asta',
		'808080' : 'Siva',
		'F00' : 'Crvena',
		'FF8C00' : 'Tamno naran휃asta',
		'FFD700' : 'Zlatna',
		'008000' : 'Zelena',
		'0FF' : 'Cijan',
		'00F' : 'Plava',
		'EE82EE' : 'Ljubi훾asta',
		'A9A9A9' : 'Mutno siva',
		'FFA07A' : 'Svijetli losos',
		'FFA500' : 'Naran휃asto',
		'FFFF00' : '탐uto',
		'00FF00' : 'Limun',
		'AFEEEE' : 'Blijedo tirkizna',
		'ADD8E6' : 'Svijetlo plava',
		'DDA0DD' : '힋ljiva',
		'D3D3D3' : 'Svijetlo siva',
		'FFF0F5' : 'Lavanda rumeno',
		'FAEBD7' : 'Antikno bijela',
		'FFFFE0' : 'Svijetlo 탑uta',
		'F0FFF0' : 'Med',
		'F0FFFF' : 'Azurna',
		'F0F8FF' : 'Alice plava',
		'E6E6FA' : 'Lavanda',
		'FFF' : 'Bijela'
	},

	scayt :
	{
		title			: 'Provjeri pravopis tijekom tipkanja (SCAYT)',
		opera_title		: 'Nije podr탑ano u Operi',
		enable			: 'Omogu훶i SCAYT',
		disable			: 'Onemogu훶i SCAYT',
		about			: 'O SCAYT',
		toggle			: 'Omogu훶u/Onemogu훶i SCAYT',
		options			: 'Opcije',
		langs			: 'Jezici',
		moreSuggestions	: 'Vi큄e prijedloga',
		ignore			: 'Zanemari',
		ignoreAll		: 'Zanemari sve',
		addWord			: 'Dodaj rije훾',
		emptyDic		: 'Naziv rje훾nika ne smije biti prazno.',
		noSuggestions	: 'Nema preporuke',
		optionsTab		: 'Opcije',
		allCaps			: 'Ignoriraj rije훾i s velikim slovima',
		ignoreDomainNames : 'Ignoriraj nazive domena',
		mixedCase		: 'Ignoriraj rije훾i s mije큄anim slovima',
		mixedWithDigits	: 'Ignoriraj rije훾i s brojevima',

		languagesTab	: 'Jezici',

		dictionariesTab	: 'Rje훾nici',
		dic_field_name	: 'Naziv rije훾nika',
		dic_create		: 'Napravi',
		dic_restore		: 'Povrati',
		dic_delete		: 'Obri큄i',
		dic_rename		: 'Promijeni naziv',
		dic_info		: 'Na po훾etku se korisni훾ki Rije훾nik sprema u Cookie. Na탑alost, veli훾ina im je ograni훾ena. Kada korisni훾ki Rije훾nik naraste preko te veli훾ine, Rije훾nik 훶e biti smje큄ten na na큄 server. Kako bi se korisni훾ki Rije훾nik spremio na na큄 server morate odabrati naziv Va큄eg Rije훾nika. Ukoliko ste ve훶 prije spremali Rije훾nik na na큄e servere, unesite naziv Rije훾nika i pritisnite na Povrati.',

		aboutTab		: 'O SCAYT'
	},

	about :
	{
		title		: 'O CKEditoru',
		dlgTitle	: 'O CKEditoru',
		help	: 'Provjeri $1 za pomo훶.',
		userGuide : 'Vodi훾 za CKEditor korisnike',
		moreInfo	: 'Za informacije o licencama posjetite na큄u web stranicu:',
		copy		: 'Copyright &copy; $1. All rights reserved.'
	},

	maximize : 'Pove훶aj',
	minimize : 'Smanji',

	fakeobjects :
	{
		anchor		: 'Sidro',
		flash		: 'Flash animacija',
		iframe		: 'IFrame',
		hiddenfield	: 'Sakriveno polje',
		unknown		: 'Nepoznati objekt'
	},

	resize : 'Povuci za promjenu veli훾ine',

	colordialog :
	{
		title		: 'Odaberi boju',
		options	:	'Opcije boje',
		highlight	: 'Istaknuto',
		selected	: 'Odabrana boja',
		clear		: 'O훾isti'
	},

	toolbarCollapse	: 'Smanji alatnu traku',
	toolbarExpand	: 'Pro큄iri alatnu traku',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'Me휃uspremnik/Poni큄ti',
		editing : 'Ure휃ivanje',
		forms : 'Forme',
		basicstyles : 'Osnovni stilovi',
		paragraph : 'Paragraf',
		links : 'Veze',
		insert : 'Umetni',
		styles : 'Stilovi',
		colors : 'Boje',
		tools : 'Alatke'
	},

	bidi :
	{
		ltr : 'Smjer teksta s lijeva na desno',
		rtl : 'Smjer teksta s desna na lijevo'
	},

	docprops :
	{
		label : 'Svojstva dokumenta',
		title : 'Svojstva dokumenta',
		design : 'Dizajn',
		meta : 'Meta Data',
		chooseColor : 'Odaberi',
		other : '<drugi>',
		docTitle :	'Naslov stranice',
		charset : 	'Enkodiranje znakova',
		charsetOther : 'Ostalo enkodiranje znakova',
		charsetASCII : 'ASCII',
		charsetCE : 'Sredi큄nja Europa',
		charsetCT : 'Tradicionalna kineska (Big5)',
		charsetCR : '훴irilica',
		charsetGR : 'Gr훾ka',
		charsetJP : 'Japanska',
		charsetKR : 'Koreanska',
		charsetTR : 'Turska',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Zapadna Europa',
		docType : 'Zaglavlje vrste dokumenta',
		docTypeOther : 'Ostalo zaglavlje vrste dokumenta',
		xhtmlDec : 'Ubaci XHTML deklaracije',
		bgColor : 'Boja pozadine',
		bgImage : 'URL slike pozadine',
		bgFixed : 'Pozadine se ne pomi훾e',
		txtColor : 'Boja teksta',
		margin : 'Margine stranice',
		marginTop : 'Vrh',
		marginLeft : 'Lijevo',
		marginRight : 'Desno',
		marginBottom : 'Dolje',
		metaKeywords : 'Klju훾ne rije훾i dokumenta (odvojene zarezom)',
		metaDescription : 'Opis dokumenta',
		metaAuthor : 'Autor',
		metaCopyright : 'Autorska prava',
		previewHtml : '<p>Ovo je neki <strong>primjer teksta</strong>. Vi koristite <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
