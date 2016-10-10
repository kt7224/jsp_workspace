/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * German language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['de'] =
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
	editorTitle : 'WYSIWYG-Editor, %1',
	editorHelp : 'Dr체cken Sie ALT 0 f체r Hilfe',

	// ARIA descriptions.
	toolbars	: 'Editor Symbolleisten',
	editor		: 'WYSIWYG-Editor',

	// Toolbar buttons without dialogs.
	source			: 'Quellcode',
	newPage			: 'Neue Seite',
	save			: 'Speichern',
	preview			: 'Vorschau',
	cut				: 'Ausschneiden',
	copy			: 'Kopieren',
	paste			: 'Einf체gen',
	print			: 'Drucken',
	underline		: 'Unterstrichen',
	bold			: 'Fett',
	italic			: 'Kursiv',
	selectAll		: 'Alles ausw채hlen',
	removeFormat	: 'Formatierungen entfernen',
	strike			: 'Durchgestrichen',
	subscript		: 'Tiefgestellt',
	superscript		: 'Hochgestellt',
	horizontalrule	: 'Horizontale Linie einf체gen',
	pagebreak		: 'Seitenumbruch einf체gen',
	pagebreakAlt		: 'Seitenumbruch einf체gen',
	unlink			: 'Link entfernen',
	undo			: 'R체ckg채ngig',
	redo			: 'Wiederherstellen',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Server durchsuchen',
		url				: 'URL',
		protocol		: 'Protokoll',
		upload			: 'Hochladen',
		uploadSubmit	: 'Zum Server senden',
		image			: 'Bild',
		flash			: 'Flash',
		form			: 'Formular',
		checkbox		: 'Checkbox',
		radio			: 'Radiobutton',
		textField		: 'Textfeld einzeilig',
		textarea		: 'Textfeld mehrzeilig',
		hiddenField		: 'Verstecktes Feld',
		button			: 'Klickbutton',
		select			: 'Auswahlfeld',
		imageButton		: 'Bildbutton',
		notSet			: '<nichts>',
		id				: 'ID',
		name			: 'Name',
		langDir			: 'Schreibrichtung',
		langDirLtr		: 'Links nach Rechts (LTR)',
		langDirRtl		: 'Rechts nach Links (RTL)',
		langCode		: 'Sprachenk체rzel',
		longDescr		: 'Langform URL',
		cssClass		: 'Stylesheet Klasse',
		advisoryTitle	: 'Titel Beschreibung',
		cssStyle		: 'Style',
		ok				: 'OK',
		cancel			: 'Abbrechen',
		close			: 'Schlie횩en',
		preview			: 'Vorschau',
		generalTab		: 'Allgemein',
		advancedTab		: 'Erweitert',
		validateNumberFailed : 'Dieser Wert ist keine Nummer.',
		confirmNewPage	: 'Alle nicht gespeicherten 횆nderungen gehen verlohren. Sind Sie sicher die neue Seite zu laden?',
		confirmCancel	: 'Einige Optionen wurden ge채ndert. Wollen Sie den Dialog dennoch schlie횩en?',
		options			: 'Optionen',
		target			: 'Zielseite',
		targetNew		: 'Neues Fenster (_blank)',
		targetTop		: 'Oberstes Fenster (_top)',
		targetSelf		: 'Gleiches Fenster (_self)',
		targetParent	: 'Oberes Fenster (_parent)',
		langDirLTR		: 'Links nach Rechts (LNR)',
		langDirRTL		: 'Rechts nach Links (RNL)',
		styles			: 'Style',
		cssClasses		: 'Stylesheet Klasse',
		width			: 'Breite',
		height			: 'H철he',
		align			: 'Ausrichtung',
		alignLeft		: 'Links',
		alignRight		: 'Rechts',
		alignCenter		: 'Zentriert',
		alignTop		: 'Oben',
		alignMiddle		: 'Mitte',
		alignBottom		: 'Unten',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'H철he muss eine Zahl sein.',
		invalidWidth	: 'Breite muss eine Zahl sein.',
		invalidCssLength	: 'Wert spezifiziert f체r "%1" Feld muss ein positiver numerischer Wert sein mit oder ohne korrekte CSS Messeinheit (px, %, in, cm, mm, em, ex, pt oder pc).',
		invalidHtmlLength	: 'Wert spezifiziert f체r "%1" Feld muss ein positiver numerischer Wert sein mit oder ohne korrekte HTML Messeinheit (px oder %).',
		invalidInlineStyle	: 'Wert spezifiziert f체r inline Stilart muss enthalten ein oder mehr Tupels mit dem Format "Name : Wert" getrennt mit Semikolons.',
		cssLengthTooltip	: 'Gebe eine Zahl ein f체r ein Wert in pixels oder eine Zahl mit einer korrekten CSS Messeinheit (px, %, in, cm, mm, em, ex, pt oder pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, nicht verf체gbar</span>'
	},

	contextmenu :
	{
		options : 'Kontextmen체 Optionen'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Sonderzeichen einf체gen/editieren',
		title		: 'Sonderzeichen ausw채hlen',
		options : 'Sonderzeichen Optionen'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Link einf체gen/editieren',
		other 		: '<andere>',
		menu		: 'Link editieren',
		title		: 'Link',
		info		: 'Link-Info',
		target		: 'Zielseite',
		upload		: 'Hochladen',
		advanced	: 'Erweitert',
		type		: 'Link-Typ',
		toUrl		: 'URL',
		toAnchor	: 'Anker in dieser Seite',
		toEmail		: 'E-Mail',
		targetFrame		: '<Frame>',
		targetPopup		: '<Pop-up Fenster>',
		targetFrameName	: 'Ziel-Fenster-Name',
		targetPopupName	: 'Pop-up Fenster-Name',
		popupFeatures	: 'Pop-up Fenster-Eigenschaften',
		popupResizable	: 'Gr철횩e 채nderbar',
		popupStatusBar	: 'Statusleiste',
		popupLocationBar: 'Adress-Leiste',
		popupToolbar	: 'Symbolleiste',
		popupMenuBar	: 'Men체-Leiste',
		popupFullScreen	: 'Vollbild (IE)',
		popupScrollBars	: 'Rollbalken',
		popupDependent	: 'Abh채ngig (Netscape)',
		popupLeft		: 'Linke Position',
		popupTop		: 'Obere Position',
		id				: 'Id',
		langDir			: 'Schreibrichtung',
		langDirLTR		: 'Links nach Rechts (LTR)',
		langDirRTL		: 'Rechts nach Links (RTL)',
		acccessKey		: 'Zugriffstaste',
		name			: 'Name',
		langCode			: 'Sprachenk체rzel',
		tabIndex			: 'Tab-Index',
		advisoryTitle		: 'Titel Beschreibung',
		advisoryContentType	: 'Inhaltstyp',
		cssClasses		: 'Stylesheet Klasse',
		charset			: 'Ziel-Zeichensatz',
		styles			: 'Style',
		rel			: 'Beziehung',
		selectAnchor		: 'Anker ausw채hlen',
		anchorName		: 'nach Anker Name',
		anchorId			: 'nach Element Id',
		emailAddress		: 'E-Mail Adresse',
		emailSubject		: 'Betreffzeile',
		emailBody		: 'Nachrichtentext',
		noAnchors		: '(keine Anker im Dokument vorhanden)',
		noUrl			: 'Bitte geben Sie die Link-URL an',
		noEmail			: 'Bitte geben Sie e-Mail Adresse an'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Anker einf체gen/editieren',
		menu		: 'Anker-Eigenschaften',
		title		: 'Anker-Eigenschaften',
		name		: 'Anker Name',
		errorName	: 'Bitte geben Sie den Namen des Ankers ein',
		remove		: 'Anker entfernen'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Nummerierte Listen-Eigenschaften',
		bulletedTitle		: 'Listen-Eigenschaften',
		type				: 'Typ',
		start				: 'Start',
		validateStartNumber				:'List Startnummer muss eine ganze Zahl sein.',
		circle				: 'Ring',
		disc				: 'Kreis',
		square				: 'Quadrat',
		none				: 'Keine',
		notset				: '<nicht gesetzt>',
		armenian			: 'Armenisch Nummerierung',
		georgian			: 'Georgisch Nummerierung (an, ban, gan, etc.)',
		lowerRoman			: 'Klein r철misch (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'Gro횩 r철misch (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'Klein alpha (a, b, c, d, e, etc.)',
		upperAlpha			: 'Gro횩 alpha (A, B, C, D, E, etc.)',
		lowerGreek			: 'Klein griechisch (alpha, beta, gamma, etc.)',
		decimal				: 'Dezimal (1, 2, 3, etc.)',
		decimalLeadingZero	: 'Dezimal mit f체hrende  Null (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Suchen und Ersetzen',
		find				: 'Suchen',
		replace				: 'Ersetzen',
		findWhat			: 'Suche nach:',
		replaceWith			: 'Ersetze mit:',
		notFoundMsg			: 'Der gesuchte Text wurde nicht gefunden.',
		findOptions			: 'Suchoptionen',
		matchCase			: 'Gro횩-Kleinschreibung beachten',
		matchWord			: 'Nur ganze Worte suchen',
		matchCyclic			: 'Zyklische Suche',
		replaceAll			: 'Alle ersetzen',
		replaceSuccessMsg	: '%1 vorkommen ersetzt.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabelle',
		title		: 'Tabellen-Eigenschaften',
		menu		: 'Tabellen-Eigenschaften',
		deleteTable	: 'Tabelle l철schen',
		rows		: 'Zeile',
		columns		: 'Spalte',
		border		: 'Rahmen',
		widthPx		: 'Pixel',
		widthPc		: '%',
		widthUnit	: 'Breite Einheit',
		cellSpace	: 'Zellenabstand au횩en',
		cellPad		: 'Zellenabstand innen',
		caption		: '횥berschrift',
		summary		: 'Inhalts체bersicht',
		headers		: 'Kopfzeile',
		headersNone		: 'Keine',
		headersColumn	: 'Erste Spalte',
		headersRow		: 'Erste Zeile',
		headersBoth		: 'Beide',
		invalidRows		: 'Die Anzahl der Zeilen mu횩 gr철횩er als 0 sein.',
		invalidCols		: 'Die Anzahl der Spalten mu횩 gr철횩er als 0 sein..',
		invalidBorder	: 'Die Rahmenbreite mu횩 eine Zahl sein.',
		invalidWidth	: 'Die Tabellenbreite muss eine Zahl sein.',
		invalidHeight	: 'Die Tabellenbreite mu횩 eine Zahl sein.',
		invalidCellSpacing	: 'Der Zellenabstand au횩en mu횩 eine positive Zahl sein.',
		invalidCellPadding	: 'Der Zellenabstand innen mu횩 eine positive Zahl sein.',

		cell :
		{
			menu			: 'Zelle',
			insertBefore	: 'Zelle davor einf체gen',
			insertAfter		: 'Zelle danach einf체gen',
			deleteCell		: 'Zelle l철schen',
			merge			: 'Zellen verbinden',
			mergeRight		: 'Nach rechts verbinden',
			mergeDown		: 'Nach unten verbinden',
			splitHorizontal	: 'Zelle horizontal teilen',
			splitVertical	: 'Zelle vertikal teilen',
			title			: 'Zellen-Eigenschaften',
			cellType		: 'Zellart',
			rowSpan			: 'Anzahl Zeilen verbinden',
			colSpan			: 'Anzahl Spalten verbinden',
			wordWrap		: 'Zeilenumbruch',
			hAlign			: 'Horizontale Ausrichtung',
			vAlign			: 'Vertikale Ausrichtung',
			alignBaseline	: 'Grundlinie',
			bgColor			: 'Hintergrundfarbe',
			borderColor		: 'Rahmenfarbe',
			data			: 'Daten',
			header			: '횥berschrift',
			yes				: 'Ja',
			no				: 'Nein',
			invalidWidth	: 'Zellenbreite mu횩 eine Zahl sein.',
			invalidHeight	: 'Zellenh철he mu횩 eine Zahl sein.',
			invalidRowSpan	: '"Anzahl Zeilen verbinden" muss eine Ganzzahl sein.',
			invalidColSpan	: '"Anzahl Spalten verbinden" muss eine Ganzzahl sein.',
			chooseColor		: 'W채hlen'
		},

		row :
		{
			menu			: 'Zeile',
			insertBefore	: 'Zeile oberhalb einf체gen',
			insertAfter		: 'Zeile unterhalb einf체gen',
			deleteRow		: 'Zeile entfernen'
		},

		column :
		{
			menu			: 'Spalte',
			insertBefore	: 'Spalte links davor einf체gen',
			insertAfter		: 'Spalte rechts danach einf체gen',
			deleteColumn	: 'Spalte l철schen'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Button-Eigenschaften',
		text		: 'Text (Wert)',
		type		: 'Typ',
		typeBtn		: 'Button',
		typeSbm		: 'Absenden',
		typeRst		: 'Zur체cksetzen'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Checkbox-Eigenschaften',
		radioTitle	: 'Optionsfeld-Eigenschaften',
		value		: 'Wert',
		selected	: 'ausgew채hlt'
	},

	// Form Dialog.
	form :
	{
		title		: 'Formular-Eigenschaften',
		menu		: 'Formular-Eigenschaften',
		action		: 'Action',
		method		: 'Method',
		encoding	: 'Zeichenkodierung'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Auswahlfeld-Eigenschaften',
		selectInfo	: 'Info',
		opAvail		: 'M철gliche Optionen',
		value		: 'Wert',
		size		: 'Gr철횩e',
		lines		: 'Linien',
		chkMulti	: 'Erlaube Mehrfachauswahl',
		opText		: 'Text',
		opValue		: 'Wert',
		btnAdd		: 'Hinzuf체gen',
		btnModify	: '횆ndern',
		btnUp		: 'Hoch',
		btnDown		: 'Runter',
		btnSetValue : 'Setze als Standardwert',
		btnDelete	: 'Entfernen'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Textfeld (mehrzeilig) Eigenschaften',
		cols		: 'Spalten',
		rows		: 'Reihen'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Textfeld (einzeilig) Eigenschaften',
		name		: 'Name',
		value		: 'Wert',
		charWidth	: 'Zeichenbreite',
		maxChars	: 'Max. Zeichen',
		type		: 'Typ',
		typeText	: 'Text',
		typePass	: 'Passwort'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Verstecktes Feld-Eigenschaften',
		name	: 'Name',
		value	: 'Wert'
	},

	// Image Dialog.
	image :
	{
		title		: 'Bild-Eigenschaften',
		titleButton	: 'Bildbutton-Eigenschaften',
		menu		: 'Bild-Eigenschaften',
		infoTab		: 'Bild-Info',
		btnUpload	: 'Zum Server senden',
		upload		: 'Hochladen',
		alt			: 'Alternativer Text',
		lockRatio	: 'Gr철횩enverh채ltnis beibehalten',
		resetSize	: 'Gr철횩e zur체cksetzen',
		border		: 'Rahmen',
		hSpace		: 'Horizontal-Abstand',
		vSpace		: 'Vertikal-Abstand',
		alertUrl	: 'Bitte geben Sie die Bild-URL an',
		linkTab		: 'Link',
		button2Img	: 'M철chten Sie den gew채hlten Bild-Button in ein einfaches Bild umwandeln?',
		img2Button	: 'M철chten Sie das gew채hlten Bild in einen Bild-Button umwandeln?',
		urlMissing	: 'Imagequelle URL fehlt.',
		validateBorder	: 'Rahmen mu횩 eine ganze Zahl sein.',
		validateHSpace	: 'Horizontal-Abstand mu횩 eine ganze Zahl sein.',
		validateVSpace	: 'Vertikal-Abstand mu횩 eine ganze Zahl sein.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash-Eigenschaften',
		propertiesTab	: 'Eigenschaften',
		title			: 'Flash-Eigenschaften',
		chkPlay			: 'Automatisch Abspielen',
		chkLoop			: 'Endlosschleife',
		chkMenu			: 'Flash-Men체 aktivieren',
		chkFull			: 'Vollbildmodus erlauben',
 		scale			: 'Skalierung',
		scaleAll		: 'Alles anzeigen',
		scaleNoBorder	: 'Ohne Rand',
		scaleFit		: 'Passgenau',
		access			: 'Skript Zugang',
		accessAlways	: 'Immer',
		accessSameDomain: 'Gleiche Domain',
		accessNever		: 'Nie',
		alignAbsBottom	: 'Abs Unten',
		alignAbsMiddle	: 'Abs Mitte',
		alignBaseline	: 'Baseline',
		alignTextTop	: 'Text Oben',
		quality			: 'Qualit채t',
		qualityBest		: 'Beste',
		qualityHigh		: 'Hoch',
		qualityAutoHigh	: 'Auto Hoch',
		qualityMedium	: 'Medium',
		qualityAutoLow	: 'Auto Niedrig',
		qualityLow		: 'Niedrig',
		windowModeWindow: 'Fenster',
		windowModeOpaque: 'Deckend',
		windowModeTransparent : 'Transparent',
		windowMode		: 'Fenster Modus',
		flashvars		: 'Variablen f체r Flash',
		bgcolor			: 'Hintergrundfarbe',
		hSpace			: 'Horizontal-Abstand',
		vSpace			: 'Vertikal-Abstand',
		validateSrc		: 'Bitte geben Sie die Link-URL an',
		validateHSpace	: 'HSpace muss eine Zahl sein.',
		validateVSpace	: 'VSpace muss eine Zahl sein.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Rechtschreibpr체fung',
		title			: 'Rechtschreibpr체fung',
		notAvailable	: 'Entschuldigung, aber dieser Dienst steht im Moment nicht zur Verf체gung.',
		errorLoading	: 'Fehler beim laden des Dienstanbieters: %s.',
		notInDic		: 'Nicht im W철rterbuch',
		changeTo		: '횆ndern in',
		btnIgnore		: 'Ignorieren',
		btnIgnoreAll	: 'Alle Ignorieren',
		btnReplace		: 'Ersetzen',
		btnReplaceAll	: 'Alle Ersetzen',
		btnUndo			: 'R체ckg채ngig',
		noSuggestions	: ' - keine Vorschl채ge - ',
		progress		: 'Rechtschreibpr체fung l채uft...',
		noMispell		: 'Rechtschreibpr체fung abgeschlossen - keine Fehler gefunden',
		noChanges		: 'Rechtschreibpr체fung abgeschlossen - keine Worte ge채ndert',
		oneChange		: 'Rechtschreibpr체fung abgeschlossen - ein Wort ge채ndert',
		manyChanges		: 'Rechtschreibpr체fung abgeschlossen - %1 W철rter ge채ndert',
		ieSpellDownload	: 'Rechtschreibpr체fung nicht installiert. M철chten Sie sie jetzt herunterladen?'
	},

	smiley :
	{
		toolbar	: 'Smiley',
		title	: 'Smiley ausw채hlen',
		options : 'Smiley Optionen'
	},

	elementsPath :
	{
		eleLabel : 'Elements Pfad',
		eleTitle : '%1 Element'
	},

	numberedlist	: 'Nummerierte Liste',
	bulletedlist	: 'Liste',
	indent			: 'Einzug erh철hen',
	outdent			: 'Einzug verringern',

	justify :
	{
		left	: 'Linksb체ndig',
		center	: 'Zentriert',
		right	: 'Rechtsb체ndig',
		block	: 'Blocksatz'
	},

	blockquote : 'Zitatblock',

	clipboard :
	{
		title		: 'Einf체gen',
		cutError	: 'Die Sicherheitseinstellungen Ihres Browsers lassen es nicht zu, den Text automatisch auszuschneiden. Bitte benutzen Sie die System-Zwischenablage 체ber STRG-X (ausschneiden) und STRG-V (einf체gen).',
		copyError	: 'Die Sicherheitseinstellungen Ihres Browsers lassen es nicht zu, den Text automatisch kopieren. Bitte benutzen Sie die System-Zwischenablage 체ber STRG-C (kopieren).',
		pasteMsg	: 'Bitte f체gen Sie den Text in der folgenden Box 체ber die Tastatur (mit <STRONG>Strg+V</STRONG>) ein und best채tigen Sie mit <STRONG>OK</STRONG>.',
		securityMsg	: 'Aufgrund von Sicherheitsbeschr채nkungen Ihres Browsers kann der Editor nicht direkt auf die Zwischenablage zugreifen. Bitte f체gen Sie den Inhalt erneut in diesem Fenster ein.',
		pasteArea	: 'Einf체gebereich'
	},

	pastefromword :
	{
		confirmCleanup	: 'Der Text, den Sie einf체gen m철chten, scheint aus MS-Word kopiert zu sein. M철chten Sie ihn zuvor bereinigen lassen?',
		toolbar			: 'Aus MS-Word einf체gen',
		title			: 'Aus MS-Word einf체gen',
		error			: 'Aufgrund eines internen Fehlers war es nicht m철glich die eingef체gten Daten zu bereinigen'
	},

	pasteText :
	{
		button	: 'Als Text einf체gen',
		title	: 'Als Text einf체gen'
	},

	templates :
	{
		button			: 'Vorlagen',
		title			: 'Vorlagen',
		options : 'Vorlagen Optionen',
		insertOption	: 'Aktuellen Inhalt ersetzen',
		selectPromptMsg	: 'Klicken Sie auf eine Vorlage, um sie im Editor zu 철ffnen (der aktuelle Inhalt wird dabei gel철scht!):',
		emptyListMsg	: '(keine Vorlagen definiert)'
	},

	showBlocks : 'Bl철cke anzeigen',

	stylesCombo :
	{
		label		: 'Stil',
		panelTitle	: 'Formatierungenstil',
		panelTitle1	: 'Block Stilart',
		panelTitle2	: 'Inline Stilart',
		panelTitle3	: 'Objekt Stilart'
	},

	format :
	{
		label		: 'Format',
		panelTitle	: 'Format',

		tag_p		: 'Normal',
		tag_pre		: 'Formatiert',
		tag_address	: 'Addresse',
		tag_h1		: '횥berschrift 1',
		tag_h2		: '횥berschrift 2',
		tag_h3		: '횥berschrift 3',
		tag_h4		: '횥berschrift 4',
		tag_h5		: '횥berschrift 5',
		tag_h6		: '횥berschrift 6',
		tag_div		: 'Normal (DIV)'
	},

	div :
	{
		title				: 'Div Container erzeugen',
		toolbar				: 'Div Container erzeugen',
		cssClassInputLabel	: 'Stylesheet Klasse',
		styleSelectLabel	: 'Style',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'Sprachenk체rzel',
		inlineStyleInputLabel	: 'Inline Stil',
		advisoryTitleInputLabel	: 'Tooltip',
		langDirLabel		: 'Sprache Richtung',
		langDirLTRLabel		: 'Links nach Rechs (LTR)',
		langDirRTLLabel		: 'Rechs nach Links (RTL)',
		edit				: 'Div bearbeiten',
		remove				: 'Div entfernen'
  	},

	iframe :
	{
		title		: 'IFrame-Eigenschaften',
		toolbar		: 'IFrame',
		noUrl		: 'Bitte geben Sie die IFrame-URL an',
		scrolling	: 'Rollbalken anzeigen',
		border		: 'Rahmen anzeigen'
	},

	font :
	{
		label		: 'Schriftart',
		voiceLabel	: 'Schriftart',
		panelTitle	: 'Schriftart'
	},

	fontSize :
	{
		label		: 'Gr철횩e',
		voiceLabel	: 'Schrifgr철횩e',
		panelTitle	: 'Gr철횩e'
	},

	colorButton :
	{
		textColorTitle	: 'Textfarbe',
		bgColorTitle	: 'Hintergrundfarbe',
		panelTitle		: 'Farben',
		auto			: 'Automatisch',
		more			: 'Weitere Farben...'
	},

	colors :
	{
		'000' : 'Schwarz',
		'800000' : 'Kastanienbraun',
		'8B4513' : 'Braun',
		'2F4F4F' : 'Dunkles Schiefergrau',
		'008080' : 'Blaugr체n',
		'000080' : 'Navy',
		'4B0082' : 'Indigo',
		'696969' : 'Dunkelgrau',
		'B22222' : 'Ziegelrot',
		'A52A2A' : 'Braun',
		'DAA520' : 'Goldgelb',
		'006400' : 'Dunkelgr체n',
		'40E0D0' : 'T체rkis',
		'0000CD' : 'Medium Blau',
		'800080' : 'Lila',
		'808080' : 'Grau',
		'F00' : 'Rot',
		'FF8C00' : 'Dunkelorange',
		'FFD700' : 'Gold',
		'008000' : 'Gr체n',
		'0FF' : 'Cyan',
		'00F' : 'Blau',
		'EE82EE' : 'Hellviolett',
		'A9A9A9' : 'Dunkelgrau',
		'FFA07A' : 'Helles Lachsrosa',
		'FFA500' : 'Orange',
		'FFFF00' : 'Gelb',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Bla횩-T체rkis',
		'ADD8E6' : 'Hellblau',
		'DDA0DD' : 'Pflaumenblau',
		'D3D3D3' : 'Hellgrau',
		'FFF0F5' : 'Lavendel',
		'FAEBD7' : 'Antik Wei횩',
		'FFFFE0' : 'Hellgelb',
		'F0FFF0' : 'Honigtau',
		'F0FFFF' : 'Azurblau',
		'F0F8FF' : 'Alice Blau',
		'E6E6FA' : 'Lavendel',
		'FFF' : 'Wei횩'
	},

	scayt :
	{
		title			: 'Rechtschreibpr체fung w채hrend der Texteingabe (SCAYT)',
		opera_title		: 'Nicht von Opera unterst체tzt',
		enable			: 'SCAYT einschalten',
		disable			: 'SCAYT ausschalten',
		about			: '횥ber SCAYT',
		toggle			: 'SCAYT umschalten',
		options			: 'Optionen',
		langs			: 'Sprachen',
		moreSuggestions	: 'Mehr Vorschl채ge',
		ignore			: 'Ignorieren',
		ignoreAll		: 'Alle ignorieren',
		addWord			: 'Wort hinzuf체gen',
		emptyDic		: 'W철rterbuchname sollte leer sein.',
		noSuggestions	: 'keine Vorschl채ge',
		optionsTab		: 'Optionen',
		allCaps			: 'Gro횩 geschriebenen W철rter ignorieren',
		ignoreDomainNames : 'Domain-Namen ignorieren',
		mixedCase		: 'W철rter mit gemischte Setzkasten ignorieren',
		mixedWithDigits	: 'W철rter mit Zahlen ignorieren',

		languagesTab	: 'Sprachen',

		dictionariesTab	: 'W철rterb체cher',
		dic_field_name	: 'W철rterbuchname',
		dic_create		: 'Erzeugen',
		dic_restore		: 'Wiederherstellen',
		dic_delete		: 'L철schen',
		dic_rename		: 'Umbenennen',
		dic_info		: 'Anfangs wird das Benutzerw철rterbuch in einem Cookie gespeichert. Allerdings sind Cookies in der Gr철횩e begrenzt. Wenn das Benutzerw철rterbuch bis zu einem Punkt w채chst, wo es nicht mehr in einem Cookie gespeichert werden kann, wird das Benutzerw철rterbuch auf dem Server gespeichert. Um Ihr pers철nliches W철rterbuch auf dem Server zu speichern, m체ssen Sie einen Namen f체r das W철rterbuch angeben. Falls  Sie schon ein gespeicherte W철rterbuch haben, geben Sie bitte dessen Namen ein und klicken Sie auf die Schaltfl채che Wiederherstellen.',

		aboutTab		: '횥ber'
	},

	about :
	{
		title		: '횥ber CKEditor',
		dlgTitle	: '횥ber CKEditor',
		help	: 'Pr체fe $1 f체r Hilfe.',
		userGuide : 'CKEditor Benutzerhandbuch',
		moreInfo	: 'F체r Informationen 체ber unsere Lizenzbestimmungen besuchen sie bitte unsere Webseite:',
		copy		: 'Copyright &copy; $1. Alle Rechte vorbehalten.'
	},

	maximize : 'Maximieren',
	minimize : 'Minimieren',

	fakeobjects :
	{
		anchor		: 'Anker',
		flash		: 'Flash Animation',
		iframe		: 'IFrame',
		hiddenfield	: 'Verstecktes Feld',
		unknown		: 'Unbekanntes Objekt'
	},

	resize : 'Zum Vergr철횩ern ziehen',

	colordialog :
	{
		title		: 'Farbe w채hlen',
		options	:	'Farbeoptionen',
		highlight	: 'Hervorheben',
		selected	: 'Ausgew채hlte Farbe',
		clear		: 'Entfernen'
	},

	toolbarCollapse	: 'Symbolleiste einklappen',
	toolbarExpand	: 'Symbolleiste ausklappen',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'Zwischenablage/R체ckg채ngig',
		editing : 'Editieren',
		forms : 'Formularen',
		basicstyles : 'Grundstile',
		paragraph : 'Absatz',
		links : 'Links',
		insert : 'Einf체gen',
		styles : 'Stile',
		colors : 'Farben',
		tools : 'Werkzeuge'
	},

	bidi :
	{
		ltr : 'Leserichtung von Links nach Rechts',
		rtl : 'Leserichtung von Rechts nach Links'
	},

	docprops :
	{
		label : 'Dokument-Eigenschaften',
		title : 'Dokument-Eigenschaften',
		design : 'Design',
		meta : 'Metadaten',
		chooseColor : 'W채hlen',
		other : '<andere>',
		docTitle :	'Seitentitel',
		charset : 	'Zeichenkodierung',
		charsetOther : 'Andere Zeichenkodierung',
		charsetASCII : 'ASCII',
		charsetCE : 'Zentraleurop채isch',
		charsetCT : 'traditionell Chinesisch (Big5)',
		charsetCR : 'Kyrillisch',
		charsetGR : 'Griechisch',
		charsetJP : 'Japanisch',
		charsetKR : 'Koreanisch',
		charsetTR : 'T체rkisch',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Westeurop채isch',
		docType : 'Dokumententyp',
		docTypeOther : 'Anderer Dokumententyp',
		xhtmlDec : 'Beziehe XHTML Deklarationen ein',
		bgColor : 'Hintergrundfarbe',
		bgImage : 'Hintergrundbild URL',
		bgFixed : 'feststehender Hintergrund',
		txtColor : 'Textfarbe',
		margin : 'Seitenr채nder',
		marginTop : 'Oben',
		marginLeft : 'Links',
		marginRight : 'Rechts',
		marginBottom : 'Unten',
		metaKeywords : 'Schl체sselw철rter (durch Komma getrennt)',
		metaDescription : 'Dokument-Beschreibung',
		metaAuthor : 'Autor',
		metaCopyright : 'Copyright',
		previewHtml : '<p>Das ist ein <strong>Beispieltext</strong>. Du schreibst in <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
