/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Norwegian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['no'] =
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
	editorTitle : 'Rikteksteditor, %1',
	editorHelp : 'Trykk ALT 0 for hjelp',

	// ARIA descriptions.
	toolbars	: 'Verkt첩ylinjer for editor',
	editor		: 'Rikteksteditor',

	// Toolbar buttons without dialogs.
	source			: 'Kilde',
	newPage			: 'Ny side',
	save			: 'Lagre',
	preview			: 'Forh책ndsvis',
	cut				: 'Klipp ut',
	copy			: 'Kopier',
	paste			: 'Lim inn',
	print			: 'Skriv ut',
	underline		: 'Understreking',
	bold			: 'Fet',
	italic			: 'Kursiv',
	selectAll		: 'Merk alt',
	removeFormat	: 'Fjern formatering',
	strike			: 'Gjennomstreking',
	subscript		: 'Senket skrift',
	superscript		: 'Hevet skrift',
	horizontalrule	: 'Sett inn horisontal linje',
	pagebreak		: 'Sett inn sideskift for utskrift',
	pagebreakAlt		: 'Sideskift',
	unlink			: 'Fjern lenke',
	undo			: 'Angre',
	redo			: 'Gj첩r om',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Bla igjennom server',
		url				: 'URL',
		protocol		: 'Protokoll',
		upload			: 'Last opp',
		uploadSubmit	: 'Send det til serveren',
		image			: 'Bilde',
		flash			: 'Flash',
		form			: 'Skjema',
		checkbox		: 'Avmerkingsboks',
		radio			: 'Alternativknapp',
		textField		: 'Tekstboks',
		textarea		: 'Tekstomr책de',
		hiddenField		: 'Skjult felt',
		button			: 'Knapp',
		select			: 'Rullegardinliste',
		imageButton		: 'Bildeknapp',
		notSet			: '<ikke satt>',
		id				: 'Id',
		name			: 'Navn',
		langDir			: 'Spr책kretning',
		langDirLtr		: 'Venstre til h첩yre (VTH)',
		langDirRtl		: 'H첩yre til venstre (HTV)',
		langCode		: 'Spr책kkode',
		longDescr		: 'Utvidet beskrivelse',
		cssClass		: 'Stilarkklasser',
		advisoryTitle	: 'Tittel',
		cssStyle		: 'Stil',
		ok				: 'OK',
		cancel			: 'Avbryt',
		close			: 'Lukk',
		preview			: 'Forh책ndsvis',
		generalTab		: 'Generelt',
		advancedTab		: 'Avansert',
		validateNumberFailed : 'Denne verdien er ikke et tall.',
		confirmNewPage	: 'Alle ulagrede endringer som er gjort i dette innholdet vil bli tapt. Er du sikker p책 at du vil laste en ny side?',
		confirmCancel	: 'Noen av valgene har blitt endret. Er du sikker p책 at du vil lukke dialogen?',
		options			: 'Valg',
		target			: 'M책l',
		targetNew		: 'Nytt vindu (_blank)',
		targetTop		: 'Hele vindu (_top)',
		targetSelf		: 'Samme vindu (_self)',
		targetParent	: 'Foreldrevindu (_parent)',
		langDirLTR		: 'Venstre til h첩yre (VTH)',
		langDirRTL		: 'H첩yre til venstre (HTV)',
		styles			: 'Stil',
		cssClasses		: 'Stilarkklasser',
		width			: 'Bredde',
		height			: 'H첩yde',
		align			: 'Juster',
		alignLeft		: 'Venstre',
		alignRight		: 'H첩yre',
		alignCenter		: 'Midtjuster',
		alignTop		: 'Topp',
		alignMiddle		: 'Midten',
		alignBottom		: 'Bunn',
		invalidValue	: 'Ugyldig verdi.',
		invalidHeight	: 'H첩yde m책 v챈re et tall.',
		invalidWidth	: 'Bredde m책 v챈re et tall.',
		invalidCssLength	: 'Den angitte verdien for feltet "%1" m책 v챈re et positivt tall med eller uten en gyldig CSS-m책lingsenhet (px, %, in, cm, mm, em, ex, pt, eller pc).',
		invalidHtmlLength	: 'Den angitte verdien for feltet "%1" m책 v챈re et positivt tall med eller uten en gyldig HTML-m책lingsenhet (px eller %).',
		invalidInlineStyle	: 'Verdi angitt for inline stil m책 best책 av en eller flere sett med formatet "navn : verdi", separert med semikolon',
		cssLengthTooltip	: 'Skriv inn et tall for en piksel-verdi eller et tall med en gyldig CSS-enhet (px, %, in, cm, mm, em, ex, pt, eller pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, utilgjenglig</span>'
	},

	contextmenu :
	{
		options : 'Alternativer for h첩yreklikkmeny'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Sett inn spesialtegn',
		title		: 'Velg spesialtegn',
		options : 'Alternativer for spesialtegn'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Sett inn/Rediger lenke',
		other 		: '<annen>',
		menu		: 'Rediger lenke',
		title		: 'Lenke',
		info		: 'Lenkeinfo',
		target		: 'M책l',
		upload		: 'Last opp',
		advanced	: 'Avansert',
		type		: 'Lenketype',
		toUrl		: 'URL',
		toAnchor	: 'Lenke til anker i teksten',
		toEmail		: 'E-post',
		targetFrame		: '<ramme>',
		targetPopup		: '<popup-vindu>',
		targetFrameName	: 'M책lramme',
		targetPopupName	: 'Navn p책 popup-vindu',
		popupFeatures	: 'Egenskaper for popup-vindu',
		popupResizable	: 'Skalerbar',
		popupStatusBar	: 'Statuslinje',
		popupLocationBar: 'Adresselinje',
		popupToolbar	: 'Verkt첩ylinje',
		popupMenuBar	: 'Menylinje',
		popupFullScreen	: 'Fullskjerm (IE)',
		popupScrollBars	: 'Scrollbar',
		popupDependent	: 'Avhenging (Netscape)',
		popupLeft		: 'Venstre posisjon',
		popupTop		: 'Topp-posisjon',
		id				: 'Id',
		langDir			: 'Spr책kretning',
		langDirLTR		: 'Venstre til h첩yre (VTH)',
		langDirRTL		: 'H첩yre til venstre (HTV)',
		acccessKey		: 'Aksessknapp',
		name			: 'Navn',
		langCode			: 'Spr책kkode',
		tabIndex			: 'Tabindeks',
		advisoryTitle		: 'Tittel',
		advisoryContentType	: 'Type',
		cssClasses		: 'Stilarkklasser',
		charset			: 'Lenket tegnsett',
		styles			: 'Stil',
		rel			: 'Relasjon (rel)',
		selectAnchor		: 'Velg et anker',
		anchorName		: 'Anker etter navn',
		anchorId			: 'Element etter ID',
		emailAddress		: 'E-postadresse',
		emailSubject		: 'Meldingsemne',
		emailBody		: 'Melding',
		noAnchors		: '(Ingen anker i dokumentet)',
		noUrl			: 'Vennligst skriv inn lenkens URL',
		noEmail			: 'Vennligst skriv inn e-postadressen'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Sett inn/Rediger anker',
		menu		: 'Egenskaper for anker',
		title		: 'Egenskaper for anker',
		name		: 'Ankernavn',
		errorName	: 'Vennligst skriv inn ankernavnet',
		remove		: 'Fjern anker'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Egenskaper for nummerert liste',
		bulletedTitle		: 'Egenskaper for punktmerket liste',
		type				: 'Type',
		start				: 'Start',
		validateStartNumber				:'Starten p책 listen m책 v챈re et heltall.',
		circle				: 'Sirkel',
		disc				: 'Disk',
		square				: 'Firkant',
		none				: 'Ingen',
		notset				: '<ikke satt>',
		armenian			: 'Armensk nummerering',
		georgian			: 'Georgisk nummerering (an, ban, gan, osv.)',
		lowerRoman			: 'Romertall, sm책 (i, ii, iii, iv, v, osv.)',
		upperRoman			: 'Romertall, store (I, II, III, IV, V, osv.)',
		lowerAlpha			: 'Alfabetisk, sm책 (a, b, c, d, e, osv.)',
		upperAlpha			: 'Alfabetisk, store (A, B, C, D, E, osv.)',
		lowerGreek			: 'Gresk, sm책 (alpha, beta, gamma, osv.)',
		decimal				: 'Tall (1, 2, 3, osv.)',
		decimalLeadingZero	: 'Tall, med f첩rstesiffer null (01, 02, 03, osv.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'S첩k og erstatt',
		find				: 'S첩k',
		replace				: 'Erstatt',
		findWhat			: 'S첩k etter:',
		replaceWith			: 'Erstatt med:',
		notFoundMsg			: 'Fant ikke s첩keteksten.',
		findOptions			: 'S첩kealternativer',
		matchCase			: 'Skill mellom store og sm책 bokstaver',
		matchWord			: 'Bare hele ord',
		matchCyclic			: 'S첩k i hele dokumentet',
		replaceAll			: 'Erstatt alle',
		replaceSuccessMsg	: '%1 tilfelle(r) erstattet.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabell',
		title		: 'Egenskaper for tabell',
		menu		: 'Egenskaper for tabell',
		deleteTable	: 'Slett tabell',
		rows		: 'Rader',
		columns		: 'Kolonner',
		border		: 'Rammest첩rrelse',
		widthPx		: 'piksler',
		widthPc		: 'prosent',
		widthUnit	: 'Bredde-enhet',
		cellSpace	: 'Cellemarg',
		cellPad		: 'Cellepolstring',
		caption		: 'Tittel',
		summary		: 'Sammendrag',
		headers		: 'Overskrifter',
		headersNone		: 'Ingen',
		headersColumn	: 'F첩rste kolonne',
		headersRow		: 'F첩rste rad',
		headersBoth		: 'Begge',
		invalidRows		: 'Antall rader m책 v챈re et tall st첩rre enn 0.',
		invalidCols		: 'Antall kolonner m책 v챈re et tall st첩rre enn 0.',
		invalidBorder	: 'Rammest첩rrelse m책 v챈re et tall.',
		invalidWidth	: 'Tabellbredde m책 v챈re et tall.',
		invalidHeight	: 'Tabellh첩yde m책 v챈re et tall.',
		invalidCellSpacing	: 'Cellemarg m책 v챈re et positivt tall.',
		invalidCellPadding	: 'Cellepolstring m책 v챈re et positivt tall.',

		cell :
		{
			menu			: 'Celle',
			insertBefore	: 'Sett inn celle f첩r',
			insertAfter		: 'Sett inn celle etter',
			deleteCell		: 'Slett celler',
			merge			: 'Sl책 sammen celler',
			mergeRight		: 'Sl책 sammen h첩yre',
			mergeDown		: 'Sl책 sammen ned',
			splitHorizontal	: 'Del celle horisontalt',
			splitVertical	: 'Del celle vertikalt',
			title			: 'Celleegenskaper',
			cellType		: 'Celletype',
			rowSpan			: 'Radspenn',
			colSpan			: 'Kolonnespenn',
			wordWrap		: 'Tekstbrytning',
			hAlign			: 'Horisontal justering',
			vAlign			: 'Vertikal justering',
			alignBaseline	: 'Grunnlinje',
			bgColor			: 'Bakgrunnsfarge',
			borderColor		: 'Rammefarge',
			data			: 'Data',
			header			: 'Overskrift',
			yes				: 'Ja',
			no				: 'Nei',
			invalidWidth	: 'Cellebredde m책 v챈re et tall.',
			invalidHeight	: 'Celleh첩yde m책 v챈re et tall.',
			invalidRowSpan	: 'Radspenn m책 v챈re et heltall.',
			invalidColSpan	: 'Kolonnespenn m책 v챈re et heltall.',
			chooseColor		: 'Velg'
		},

		row :
		{
			menu			: 'Rader',
			insertBefore	: 'Sett inn rad f첩r',
			insertAfter		: 'Sett inn rad etter',
			deleteRow		: 'Slett rader'
		},

		column :
		{
			menu			: 'Kolonne',
			insertBefore	: 'Sett inn kolonne f첩r',
			insertAfter		: 'Sett inn kolonne etter',
			deleteColumn	: 'Slett kolonner'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Egenskaper for knapp',
		text		: 'Tekst (verdi)',
		type		: 'Type',
		typeBtn		: 'Knapp',
		typeSbm		: 'Send',
		typeRst		: 'Nullstill'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Egenskaper for avmerkingsboks',
		radioTitle	: 'Egenskaper for alternativknapp',
		value		: 'Verdi',
		selected	: 'Valgt'
	},

	// Form Dialog.
	form :
	{
		title		: 'Egenskaper for skjema',
		menu		: 'Egenskaper for skjema',
		action		: 'Handling',
		method		: 'Metode',
		encoding	: 'Encoding'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Egenskaper for rullegardinliste',
		selectInfo	: 'Info',
		opAvail		: 'Tilgjenglige alternativer',
		value		: 'Verdi',
		size		: 'St첩rrelse',
		lines		: 'Linjer',
		chkMulti	: 'Tillat flervalg',
		opText		: 'Tekst',
		opValue		: 'Verdi',
		btnAdd		: 'Legg til',
		btnModify	: 'Endre',
		btnUp		: 'Opp',
		btnDown		: 'Ned',
		btnSetValue : 'Sett som valgt',
		btnDelete	: 'Slett'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Egenskaper for tekstomr책de',
		cols		: 'Kolonner',
		rows		: 'Rader'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Egenskaper for tekstfelt',
		name		: 'Navn',
		value		: 'Verdi',
		charWidth	: 'Tegnbredde',
		maxChars	: 'Maks antall tegn',
		type		: 'Type',
		typeText	: 'Tekst',
		typePass	: 'Passord'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Egenskaper for skjult felt',
		name	: 'Navn',
		value	: 'Verdi'
	},

	// Image Dialog.
	image :
	{
		title		: 'Bildeegenskaper',
		titleButton	: 'Egenskaper for bildeknapp',
		menu		: 'Bildeegenskaper',
		infoTab		: 'Bildeinformasjon',
		btnUpload	: 'Send det til serveren',
		upload		: 'Last opp',
		alt			: 'Alternativ tekst',
		lockRatio	: 'L책s forhold',
		resetSize	: 'Tilbakestill st첩rrelse',
		border		: 'Ramme',
		hSpace		: 'HMarg',
		vSpace		: 'VMarg',
		alertUrl	: 'Vennligst skriv bilde-urlen',
		linkTab		: 'Lenke',
		button2Img	: 'Vil du endre den valgte bildeknappen til et vanlig bilde?',
		img2Button	: 'Vil du endre det valgte bildet til en bildeknapp?',
		urlMissing	: 'Bildets adresse mangler.',
		validateBorder	: 'Ramme m책 v챈re et heltall.',
		validateHSpace	: 'HMarg m책 v챈re et heltall.',
		validateVSpace	: 'VMarg m책 v챈re et heltall.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Egenskaper for Flash-objekt',
		propertiesTab	: 'Egenskaper',
		title			: 'Flash-egenskaper',
		chkPlay			: 'Autospill',
		chkLoop			: 'Loop',
		chkMenu			: 'Sl책 p책 Flash-meny',
		chkFull			: 'Tillat fullskjerm',
 		scale			: 'Skaler',
		scaleAll		: 'Vis alt',
		scaleNoBorder	: 'Ingen ramme',
		scaleFit		: 'Skaler til 책 passe',
		access			: 'Scripttilgang',
		accessAlways	: 'Alltid',
		accessSameDomain: 'Samme domene',
		accessNever		: 'Aldri',
		alignAbsBottom	: 'Abs bunn',
		alignAbsMiddle	: 'Abs midten',
		alignBaseline	: 'Bunnlinje',
		alignTextTop	: 'Tekst topp',
		quality			: 'Kvalitet',
		qualityBest		: 'Best',
		qualityHigh		: 'H첩y',
		qualityAutoHigh	: 'Auto h첩y',
		qualityMedium	: 'Medium',
		qualityAutoLow	: 'Auto lav',
		qualityLow		: 'Lav',
		windowModeWindow: 'Vindu',
		windowModeOpaque: 'Opaque',
		windowModeTransparent : 'Gjennomsiktig',
		windowMode		: 'Vindumodus',
		flashvars		: 'Variabler for flash',
		bgcolor			: 'Bakgrunnsfarge',
		hSpace			: 'HMarg',
		vSpace			: 'VMarg',
		validateSrc		: 'Vennligst skriv inn lenkens url.',
		validateHSpace	: 'HMarg m책 v챈re et tall.',
		validateVSpace	: 'VMarg m책 v챈re et tall.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Stavekontroll',
		title			: 'Stavekontroll',
		notAvailable	: 'Beklager, tjenesten er utilgjenglig n책.',
		errorLoading	: 'Feil under lasting av applikasjonstjenestetjener: %s.',
		notInDic		: 'Ikke i ordboken',
		changeTo		: 'Endre til',
		btnIgnore		: 'Ignorer',
		btnIgnoreAll	: 'Ignorer alle',
		btnReplace		: 'Erstatt',
		btnReplaceAll	: 'Erstatt alle',
		btnUndo			: 'Angre',
		noSuggestions	: '- Ingen forslag -',
		progress		: 'Stavekontroll p책g책r...',
		noMispell		: 'Stavekontroll fullf첩rt: ingen feilstavinger funnet',
		noChanges		: 'Stavekontroll fullf첩rt: ingen ord endret',
		oneChange		: 'Stavekontroll fullf첩rt: Ett ord endret',
		manyChanges		: 'Stavekontroll fullf첩rt: %1 ord endret',
		ieSpellDownload	: 'Stavekontroll er ikke installert. Vil du laste den ned n책?'
	},

	smiley :
	{
		toolbar	: 'Smil',
		title	: 'Sett inn smil',
		options : 'Alternativer for smil'
	},

	elementsPath :
	{
		eleLabel : 'Element-sti',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Legg til/Fjern nummerert liste',
	bulletedlist	: 'Legg til/Fjern punktmerket liste',
	indent			: '횠k innrykk',
	outdent			: 'Reduser innrykk',

	justify :
	{
		left	: 'Venstrejuster',
		center	: 'Midtstill',
		right	: 'H첩yrejuster',
		block	: 'Blokkjuster'
	},

	blockquote : 'Sitatblokk',

	clipboard :
	{
		title		: 'Lim inn',
		cutError	: 'Din nettlesers sikkerhetsinstillinger tillater ikke automatisk utklipping av tekst. Vennligst bruk snarveien (Ctrl/Cmd+X).',
		copyError	: 'Din nettlesers sikkerhetsinstillinger tillater ikke automatisk kopiering av tekst. Vennligst bruk snarveien (Ctrl/Cmd+C).',
		pasteMsg	: 'Vennligst lim inn i f첩lgende boks med tastaturet (<STRONG>Ctrl/Cmd+V</STRONG>) og trykk <STRONG>OK</STRONG>.',
		securityMsg	: 'Din nettlesers sikkerhetsinstillinger gir ikke redigeringsverkt첩yet direkte tilgang til utklippstavlen. Du m책 derfor lime det inn p책 nytt i dette vinduet.',
		pasteArea	: 'Innlimingsomr책de'
	},

	pastefromword :
	{
		confirmCleanup	: 'Teksten du limer inn ser ut til 책 v챈re kopiert fra Word. Vil du renske den f첩r du limer den inn?',
		toolbar			: 'Lim inn fra Word',
		title			: 'Lim inn fra Word',
		error			: 'Det var ikke mulig 책 renske den innlimte teksten p책 grunn av en intern feil'
	},

	pasteText :
	{
		button	: 'Lim inn som ren tekst',
		title	: 'Lim inn som ren tekst'
	},

	templates :
	{
		button			: 'Maler',
		title			: 'Innholdsmaler',
		options : 'Alternativer for mal',
		insertOption	: 'Erstatt gjeldende innhold',
		selectPromptMsg	: 'Velg malen du vil 책pne i redigeringsverkt첩yet:',
		emptyListMsg	: '(Ingen maler definert)'
	},

	showBlocks : 'Vis blokker',

	stylesCombo :
	{
		label		: 'Stil',
		panelTitle	: 'Stilformater',
		panelTitle1	: 'Blokkstiler',
		panelTitle2	: 'Inlinestiler',
		panelTitle3	: 'Objektstiler'
	},

	format :
	{
		label		: 'Format',
		panelTitle	: 'Avsnittsformat',

		tag_p		: 'Normal',
		tag_pre		: 'Formatert',
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
		title				: 'Sett inn Div Container',
		toolbar				: 'Sett inn Div Container',
		cssClassInputLabel	: 'Stilark-klasser',
		styleSelectLabel	: 'Stil',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Spr책kkode',
		inlineStyleInputLabel	: 'Inlinestiler',
		advisoryTitleInputLabel	: 'Tittel',
		langDirLabel		: 'Spr책kretning',
		langDirLTRLabel		: 'Venstre til h첩yre (VTH)',
		langDirRTLLabel		: 'H첩yre til venstre (HTV)',
		edit				: 'Rediger Div',
		remove				: 'Fjern Div'
  	},

	iframe :
	{
		title		: 'Egenskaper for IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Vennligst skriv inn URL for iframe',
		scrolling	: 'Aktiver scrollefelt',
		border		: 'Viss ramme rundt iframe'
	},

	font :
	{
		label		: 'Skrift',
		voiceLabel	: 'Font',
		panelTitle	: 'Skrift'
	},

	fontSize :
	{
		label		: 'St첩rrelse',
		voiceLabel	: 'Font St첩rrelse',
		panelTitle	: 'St첩rrelse'
	},

	colorButton :
	{
		textColorTitle	: 'Tekstfarge',
		bgColorTitle	: 'Bakgrunnsfarge',
		panelTitle		: 'Farger',
		auto			: 'Automatisk',
		more			: 'Flere farger...'
	},

	colors :
	{
		'000' : 'Svart',
		'800000' : 'R첩dbrun',
		'8B4513' : 'Salbrun',
		'2F4F4F' : 'Gr첩nnsvart',
		'008080' : 'Bl책gr첩nn',
		'000080' : 'Marinebl책tt',
		'4B0082' : 'Indigo',
		'696969' : 'M첩rk gr책',
		'B22222' : 'M첩rker첩d',
		'A52A2A' : 'Brun',
		'DAA520' : 'Lys brun',
		'006400' : 'M첩rk gr첩nn',
		'40E0D0' : 'Turkis',
		'0000CD' : 'Medium bl책',
		'800080' : 'Purpur',
		'808080' : 'Gr책',
		'F00' : 'R첩d',
		'FF8C00' : 'M첩rk oransje',
		'FFD700' : 'Gull',
		'008000' : 'Gr첩nn',
		'0FF' : 'Cyan',
		'00F' : 'Bl책',
		'EE82EE' : 'Fiolett',
		'A9A9A9' : 'Svak gr책',
		'FFA07A' : 'Rosa-oransje',
		'FFA500' : 'Oransje',
		'FFFF00' : 'Gul',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Svak turkis',
		'ADD8E6' : 'Lys Bl책',
		'DDA0DD' : 'Plomme',
		'D3D3D3' : 'Lys gr책',
		'FFF0F5' : 'Svak lavendelrosa',
		'FAEBD7' : 'Antikk-hvit',
		'FFFFE0' : 'Lys gul',
		'F0FFF0' : 'Honningmelon',
		'F0FFFF' : 'Svakt asurbl책tt',
		'F0F8FF' : 'Svak cyan',
		'E6E6FA' : 'Lavendel',
		'FFF' : 'Hvit'
	},

	scayt :
	{
		title			: 'Stavekontroll mens du skriver',
		opera_title		: 'Ikke st첩ttet av Opera',
		enable			: 'Sl책 p책 SCAYT',
		disable			: 'Sl책 av SCAYT',
		about			: 'Om SCAYT',
		toggle			: 'Veksle SCAYT',
		options			: 'Valg',
		langs			: 'Spr책k',
		moreSuggestions	: 'Flere forslag',
		ignore			: 'Ignorer',
		ignoreAll		: 'Ignorer Alle',
		addWord			: 'Legg til ord',
		emptyDic		: 'Ordboknavn b첩r ikke v챈re tom.',
		noSuggestions	: 'Ingen forslag',
		optionsTab		: 'Valg',
		allCaps			: 'Ikke kontroller ord med kun store bokstaver',
		ignoreDomainNames : 'Ikke kontroller domenenavn',
		mixedCase		: 'Ikke kontroller ord med blandet sm책 og store bokstaver',
		mixedWithDigits	: 'Ikke kontroller ord som inneholder tall',

		languagesTab	: 'Spr책k',

		dictionariesTab	: 'Ordb첩ker',
		dic_field_name	: 'Ordboknavn',
		dic_create		: 'Opprett',
		dic_restore		: 'Gjenopprett',
		dic_delete		: 'Slett',
		dic_rename		: 'Gi nytt navn',
		dic_info		: 'Brukerordboken lagres f첩rst i en informasjonskapsel p책 din maskin, men det er en begrensning p책 hvor mye som kan lagres her. N책r ordboken blir for stor til 책 lagres i en informasjonskapsel, vil vi i stedet lagre ordboken p책 v책r server. For 책 lagre din personlige ordbok p책 v책r server, burde du velge et navn for ordboken din. Hvis du allerede har lagret en ordbok, vennligst skriv inn ordbokens navn og klikk p책 Gjenopprett-knappen.',

		aboutTab		: 'Om'
	},

	about :
	{
		title		: 'Om CKEditor',
		dlgTitle	: 'Om CKEditor',
		help	: 'Se $1 for hjelp.',
		userGuide : 'CKEditors brukerveiledning',
		moreInfo	: 'For lisensieringsinformasjon, vennligst bes첩k v책rt nettsted:',
		copy		: 'Copyright &copy; $1. Alle rettigheter reservert.'
	},

	maximize : 'Maksimer',
	minimize : 'Minimer',

	fakeobjects :
	{
		anchor		: 'Anker',
		flash		: 'Flash-animasjon',
		iframe		: 'IFrame',
		hiddenfield	: 'Skjult felt',
		unknown		: 'Ukjent objekt'
	},

	resize : 'Dra for 책 skalere',

	colordialog :
	{
		title		: 'Velg farge',
		options	:	'Alternativer for farge',
		highlight	: 'Merk',
		selected	: 'Valgt',
		clear		: 'T첩m'
	},

	toolbarCollapse	: 'Skjul verkt첩ylinje',
	toolbarExpand	: 'Vis verkt첩ylinje',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'Utklippstavle/Angre',
		editing : 'Redigering',
		forms : 'Skjema',
		basicstyles : 'Basisstiler',
		paragraph : 'Avsnitt',
		links : 'Lenker',
		insert : 'Innsetting',
		styles : 'Stiler',
		colors : 'Farger',
		tools : 'Verkt첩y'
	},

	bidi :
	{
		ltr : 'Tekstretning fra venstre til h첩yre',
		rtl : 'Tekstretning fra h첩yre til venstre'
	},

	docprops :
	{
		label : 'Dokumentegenskaper',
		title : 'Dokumentegenskaper',
		design : 'Design',
		meta : 'Meta-data',
		chooseColor : 'Velg',
		other : '<annen>',
		docTitle :	'Sidetittel',
		charset : 	'Tegnsett',
		charsetOther : 'Annet tegnsett',
		charsetASCII : 'ASCII',
		charsetCE : 'Sentraleuropeisk',
		charsetCT : 'Tradisonell kinesisk(Big5)',
		charsetCR : 'Kyrillisk',
		charsetGR : 'Gresk',
		charsetJP : 'Japansk',
		charsetKR : 'Koreansk',
		charsetTR : 'Tyrkisk',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Vesteuropeisk',
		docType : 'Dokumenttype header',
		docTypeOther : 'Annet dokumenttype header',
		xhtmlDec : 'Inkluder XHTML-deklarasjon',
		bgColor : 'Bakgrunnsfarge',
		bgImage : 'URL for bakgrunnsbilde',
		bgFixed : 'L책s bakgrunnsbilde',
		txtColor : 'Tekstfarge',
		margin : 'Sidemargin',
		marginTop : 'Topp',
		marginLeft : 'Venstre',
		marginRight : 'H첩yre',
		marginBottom : 'Bunn',
		metaKeywords : 'Dokument n첩kkelord (kommaseparert)',
		metaDescription : 'Dokumentbeskrivelse',
		metaAuthor : 'Forfatter',
		metaCopyright : 'Kopirett',
		previewHtml : '<p>Dette er en <strong>eksempeltekst</strong>. Du bruker <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
