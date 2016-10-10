/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Icelandic language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['is'] =
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
	editorHelp : 'Press ALT 0 for help', // MISSING

	// ARIA descriptions.
	toolbars	: 'Editor toolbars', // MISSING
	editor		: 'Rich Text Editor', // MISSING

	// Toolbar buttons without dialogs.
	source			: 'K처챨i',
	newPage			: 'N첵 s챠챨a',
	save			: 'Vista',
	preview			: 'Forsko챨a',
	cut				: 'Klippa',
	copy			: 'Afrita',
	paste			: 'L챠ma',
	print			: 'Prenta',
	underline		: 'Undirstrika챨',
	bold			: 'Feitletra챨',
	italic			: 'Sk찼letra챨',
	selectAll		: 'Velja allt',
	removeFormat	: 'Fjarl챈gja sni챨',
	strike			: 'Yfirstrika챨',
	subscript		: 'Ni챨urskrifa챨',
	superscript		: 'Uppskrifa챨',
	horizontalrule	: 'L처챨r챕tt l챠na',
	pagebreak		: 'Setja inn s챠챨uskil',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: 'Fjarl챈gja stiklu',
	undo			: 'Afturkalla',
	redo			: 'H챈tta vi챨 afturk철llun',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Fletta 챠 skjalasafni',
		url				: 'Vefsl처챨',
		protocol		: 'Samskiptasta챨all',
		upload			: 'Senda upp',
		uploadSubmit	: 'Hla챨a upp',
		image			: 'Setja inn mynd',
		flash			: 'Flash',
		form			: 'Setja inn innsl찼ttarform',
		checkbox		: 'Setja inn h철kunarreit',
		radio			: 'Setja inn valhnapp',
		textField		: 'Setja inn textareit',
		textarea		: 'Setja inn textasv챈챨i',
		hiddenField		: 'Setja inn fali챨 sv챈챨i',
		button			: 'Setja inn hnapp',
		select			: 'Setja inn lista',
		imageButton		: 'Setja inn myndahnapp',
		notSet			: '<ekkert vali챨>',
		id				: 'Au챨kenni',
		name			: 'Nafn',
		langDir			: 'Lesstefna',
		langDirLtr		: 'Fr찼 vinstri til h챈gri (LTR)',
		langDirRtl		: 'Fr찼 h챈gri til vinstri (RTL)',
		langCode		: 'Tungum찼lak처챨i',
		longDescr		: 'N찼nari l첵sing',
		cssClass		: 'St챠lsni챨sflokkur',
		advisoryTitle	: 'Titill',
		cssStyle		: 'St챠ll',
		ok				: '횒 lagi',
		cancel			: 'H챈tta vi챨',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'Almennt',
		advancedTab		: 'T챈knilegt',
		validateNumberFailed : 'This value is not a number.', // MISSING
		confirmNewPage	: 'Any unsaved changes to this content will be lost. Are you sure you want to load new page?', // MISSING
		confirmCancel	: 'Some of the options have been changed. Are you sure to close the dialog?', // MISSING
		options			: 'Options', // MISSING
		target			: 'Target', // MISSING
		targetNew		: 'New Window (_blank)', // MISSING
		targetTop		: 'Topmost Window (_top)', // MISSING
		targetSelf		: 'Same Window (_self)', // MISSING
		targetParent	: 'Parent Window (_parent)', // MISSING
		langDirLTR		: 'Left to Right (LTR)', // MISSING
		langDirRTL		: 'Right to Left (RTL)', // MISSING
		styles			: 'Style', // MISSING
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: 'Breidd',
		height			: 'H챈챨',
		align			: 'J철fnun',
		alignLeft		: 'Vinstri',
		alignRight		: 'H챈gri',
		alignCenter		: 'Mi챨ja챨',
		alignTop		: 'Efst',
		alignMiddle		: 'Mi챨ju챨',
		alignBottom		: 'Ne챨st',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'Height must be a number.', // MISSING
		invalidWidth	: 'Width must be a number.', // MISSING
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	contextmenu :
	{
		options : 'Context Menu Options' // MISSING
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Setja inn merki',
		title		: 'Velja t찼kn',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Stofna/breyta stiklu',
		other 		: '<annar>',
		menu		: 'Breyta stiklu',
		title		: 'Stikla',
		info		: 'Almennt',
		target		: 'Mark',
		upload		: 'Senda upp',
		advanced	: 'T챈knilegt',
		type		: 'Stikluflokkur',
		toUrl		: 'URL', // MISSING
		toAnchor	: 'B처kamerki 찼 첸essari s챠챨u',
		toEmail		: 'Netfang',
		targetFrame		: '<rammi>',
		targetPopup		: '<sprettigluggi>',
		targetFrameName	: 'Nafn markglugga',
		targetPopupName	: 'Nafn sprettiglugga',
		popupFeatures	: 'Eigindi sprettiglugga',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: 'St철챨ustika',
		popupLocationBar: 'Fangl챠na',
		popupToolbar	: 'Verkf챈rastika',
		popupMenuBar	: 'Vall챠na',
		popupFullScreen	: 'Heilskj찼r (IE)',
		popupScrollBars	: 'Skrunstikur',
		popupDependent	: 'H찼챨 venslum (Netscape)',
		popupLeft		: 'Fjarl챈g챨 fr찼 vinstri',
		popupTop		: 'Fjarl챈g챨 fr찼 efri br첬n',
		id				: 'Id', // MISSING
		langDir			: 'Lesstefna',
		langDirLTR		: 'Fr찼 vinstri til h챈gri (LTR)',
		langDirRTL		: 'Fr찼 h챈gri til vinstri (RTL)',
		acccessKey		: 'Skammvalshnappur',
		name			: 'Nafn',
		langCode			: 'Lesstefna',
		tabIndex			: 'Ra챨n첬mer innsl찼ttarreits',
		advisoryTitle		: 'Titill',
		advisoryContentType	: 'Tegund innihalds',
		cssClasses		: 'St챠lsni챨sflokkur',
		charset			: 'T찼knr처f',
		styles			: 'St챠ll',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Veldu akkeri',
		anchorName		: 'Eftir akkerisnafni',
		anchorId			: 'Eftir au챨kenni einingar',
		emailAddress		: 'Netfang',
		emailSubject		: 'Efni',
		emailBody		: 'Meginm찼l',
		noAnchors		: '<Engin b처kamerki 찼 skr찼>',
		noUrl			: 'Sl찼챨u inn veffang stiklunnar!',
		noEmail			: 'Sl찼챨u inn netfang!'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Stofna/breyta kaflamerki',
		menu		: 'Eigindi kaflamerkis',
		title		: 'Eigindi kaflamerkis',
		name		: 'Nafn b처kamerkis',
		errorName	: 'Sl찼챨u inn nafn b처kamerkis!',
		remove		: 'Remove Anchor' // MISSING
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numbered List Properties', // MISSING
		bulletedTitle		: 'Bulleted List Properties', // MISSING
		type				: 'Type', // MISSING
		start				: 'Start', // MISSING
		validateStartNumber				:'List start number must be a whole number.', // MISSING
		circle				: 'Circle', // MISSING
		disc				: 'Disc', // MISSING
		square				: 'Square', // MISSING
		none				: 'None', // MISSING
		notset				: '<not set>', // MISSING
		armenian			: 'Armenian numbering', // MISSING
		georgian			: 'Georgian numbering (an, ban, gan, etc.)', // MISSING
		lowerRoman			: 'Lower Roman (i, ii, iii, iv, v, etc.)', // MISSING
		upperRoman			: 'Upper Roman (I, II, III, IV, V, etc.)', // MISSING
		lowerAlpha			: 'Lower Alpha (a, b, c, d, e, etc.)', // MISSING
		upperAlpha			: 'Upper Alpha (A, B, C, D, E, etc.)', // MISSING
		lowerGreek			: 'Lower Greek (alpha, beta, gamma, etc.)', // MISSING
		decimal				: 'Decimal (1, 2, 3, etc.)', // MISSING
		decimalLeadingZero	: 'Decimal leading zero (01, 02, 03, etc.)' // MISSING
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Finna og skipta',
		find				: 'Leita',
		replace				: 'Skipta 첬t',
		findWhat			: 'Leita a챨:',
		replaceWith			: 'Skipta 첬t fyrir:',
		notFoundMsg			: 'Leitartexti fannst ekki!',
		findOptions			: 'Find Options', // MISSING
		matchCase			: 'Gera greinarmun 찼징 h찼징- og l찼gst철fum',
		matchWord			: 'A챨eins heil or챨',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: 'Skipta 첬t allssta챨ar',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tafla',
		title		: 'Eigindi t철flu',
		menu		: 'Eigindi t철flu',
		deleteTable	: 'Fella t철flu',
		rows		: 'Ra챨ir',
		columns		: 'D찼lkar',
		border		: 'Breidd ramma',
		widthPx		: 'myndeindir',
		widthPc		: 'pr처sent',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: 'Bil milli reita',
		cellPad		: 'Reitasp찼ss챠a',
		caption		: 'Titill',
		summary		: '횁fram',
		headers		: 'Fyrirsagnir',
		headersNone		: 'Engar',
		headersColumn	: 'Fyrsti d찼lkur',
		headersRow		: 'Fyrsta r철챨',
		headersBoth		: 'Hvort tveggja',
		invalidRows		: 'Number of rows must be a number greater than 0.', // MISSING
		invalidCols		: 'Number of columns must be a number greater than 0.', // MISSING
		invalidBorder	: 'Border size must be a number.', // MISSING
		invalidWidth	: 'Table width must be a number.', // MISSING
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Cell spacing must be a positive number.', // MISSING
		invalidCellPadding	: 'Cell padding must be a positive number.', // MISSING

		cell :
		{
			menu			: 'Reitur',
			insertBefore	: 'Skj처ta inn reiti fyrir aftan',
			insertAfter		: 'Skj처ta inn reiti fyrir framan',
			deleteCell		: 'Fella reit',
			merge			: 'Sameina reiti',
			mergeRight		: 'Sameina til h챈gri',
			mergeDown		: 'Sameina ni챨ur 찼 vi챨',
			splitHorizontal	: 'Klj첬fa reit l찼r챕tt',
			splitVertical	: 'Klj첬fa reit l처챨r챕tt',
			title			: 'Cell Properties', // MISSING
			cellType		: 'Cell Type', // MISSING
			rowSpan			: 'Rows Span', // MISSING
			colSpan			: 'Columns Span', // MISSING
			wordWrap		: 'Word Wrap', // MISSING
			hAlign			: 'Horizontal Alignment', // MISSING
			vAlign			: 'Vertical Alignment', // MISSING
			alignBaseline	: 'Baseline', // MISSING
			bgColor			: 'Background Color', // MISSING
			borderColor		: 'Border Color', // MISSING
			data			: 'Data', // MISSING
			header			: 'Header', // MISSING
			yes				: 'Yes', // MISSING
			no				: 'No', // MISSING
			invalidWidth	: 'Cell width must be a number.', // MISSING
			invalidHeight	: 'Cell height must be a number.', // MISSING
			invalidRowSpan	: 'Rows span must be a whole number.', // MISSING
			invalidColSpan	: 'Columns span must be a whole number.', // MISSING
			chooseColor		: 'Choose' // MISSING
		},

		row :
		{
			menu			: 'R철챨',
			insertBefore	: 'Skj처ta inn r철챨 fyrir ofan',
			insertAfter		: 'Skj처ta inn r철챨 fyrir ne챨an',
			deleteRow		: 'Ey챨a r철챨'
		},

		column :
		{
			menu			: 'D찼lkur',
			insertBefore	: 'Skj처ta inn d찼lki vinstra megin',
			insertAfter		: 'Skj처ta inn d찼lki h챈gra megin',
			deleteColumn	: 'Fella d찼lk'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Eigindi hnapps',
		text		: 'Texti',
		type		: 'Ger챨',
		typeBtn		: 'Hnappur',
		typeSbm		: 'Sta챨festa',
		typeRst		: 'Hreinsa'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Eigindi markreits',
		radioTitle	: 'Eigindi valhnapps',
		value		: 'Gildi',
		selected	: 'Vali챨'
	},

	// Form Dialog.
	form :
	{
		title		: 'Eigindi innsl찼ttarforms',
		menu		: 'Eigindi innsl찼ttarforms',
		action		: 'A챨ger챨',
		method		: 'A챨fer챨',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Eigindi lista',
		selectInfo	: 'Uppl첵singar',
		opAvail		: 'Kostir',
		value		: 'Gildi',
		size		: 'St챈r챨',
		lines		: 'l챠nur',
		chkMulti	: 'Leyfa fleiri kosti',
		opText		: 'Texti',
		opValue		: 'Gildi',
		btnAdd		: 'B챈ta vi챨',
		btnModify	: 'Breyta',
		btnUp		: 'Upp',
		btnDown		: 'Ni챨ur',
		btnSetValue : 'Merkja sem vali챨',
		btnDelete	: 'Ey챨a'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Eigindi textasv챈챨is',
		cols		: 'D찼lkar',
		rows		: 'L챠nur'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Eigindi textareits',
		name		: 'Nafn',
		value		: 'Gildi',
		charWidth	: 'Breidd (leturt찼kn)',
		maxChars	: 'H찼marksfj철ldi leturt찼kna',
		type		: 'Ger챨',
		typeText	: 'Texti',
		typePass	: 'Lykilor챨'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Eigindi falins sv챈챨is',
		name	: 'Nafn',
		value	: 'Gildi'
	},

	// Image Dialog.
	image :
	{
		title		: 'Eigindi myndar',
		titleButton	: 'Eigindi myndahnapps',
		menu		: 'Eigindi myndar',
		infoTab		: 'Almennt',
		btnUpload	: 'Hla챨a upp',
		upload		: 'Hla챨a upp',
		alt			: 'Bakl챈gur texti',
		lockRatio	: 'Festa st챈r챨arhlutfall',
		resetSize	: 'Reikna st챈r챨',
		border		: 'Rammi',
		hSpace		: 'Vinstri bil',
		vSpace		: 'H챈gri bil',
		alertUrl	: 'Sl찼챨u inn sl처챨ina a챨 myndinni',
		linkTab		: 'Stikla',
		button2Img	: 'Do you want to transform the selected image button on a simple image?', // MISSING
		img2Button	: 'Do you want to transform the selected image on a image button?', // MISSING
		urlMissing	: 'Image source URL is missing.', // MISSING
		validateBorder	: 'Border must be a whole number.', // MISSING
		validateHSpace	: 'HSpace must be a whole number.', // MISSING
		validateVSpace	: 'VSpace must be a whole number.' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Eigindi Flash',
		propertiesTab	: 'Properties', // MISSING
		title			: 'Eigindi Flash',
		chkPlay			: 'Sj찼lfvirk spilun',
		chkLoop			: 'Endurtekning',
		chkMenu			: 'S첵na Flash-valmynd',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: 'Skali',
		scaleAll		: 'S첵na allt',
		scaleNoBorder	: '횁n ramma',
		scaleFit		: 'Fella skala a챨 st챈r챨',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Abs ne챨st',
		alignAbsMiddle	: 'Abs mi챨ju챨',
		alignBaseline	: 'Grunnl챠na',
		alignTextTop	: 'Efri br첬n texta',
		quality			: 'Quality', // MISSING
		qualityBest		: 'Best', // MISSING
		qualityHigh		: 'High', // MISSING
		qualityAutoHigh	: 'Auto High', // MISSING
		qualityMedium	: 'Medium', // MISSING
		qualityAutoLow	: 'Auto Low', // MISSING
		qualityLow		: 'Low', // MISSING
		windowModeWindow: 'Window', // MISSING
		windowModeOpaque: 'Opaque', // MISSING
		windowModeTransparent : 'Transparent', // MISSING
		windowMode		: 'Window mode', // MISSING
		flashvars		: 'Variables for Flash', // MISSING
		bgcolor			: 'Bakgrunnslitur',
		hSpace			: 'Vinstri bil',
		vSpace			: 'H챈gri bil',
		validateSrc		: 'Sl찼챨u inn veffang stiklunnar!',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Villuleit',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: 'Ekki 챠 or챨ab처kinni',
		changeTo		: 'Tillaga',
		btnIgnore		: 'Hunsa',
		btnIgnoreAll	: 'Hunsa allt',
		btnReplace		: 'Skipta',
		btnReplaceAll	: 'Skipta 철llu',
		btnUndo			: 'Til baka',
		noSuggestions	: '- engar till철gur -',
		progress		: 'Villuleit 챠 gangi...',
		noMispell		: 'Villuleit loki챨: Engin villa fannst',
		noChanges		: 'Villuleit loki챨: Engu or챨i breytt',
		oneChange		: 'Villuleit loki챨: Einu or챨i breytt',
		manyChanges		: 'Villuleit loki챨: %1 or챨um breytt',
		ieSpellDownload	: 'Villuleit ekki sett upp.<br>Viltu setja hana upp?'
	},

	smiley :
	{
		toolbar	: 'Svipur',
		title	: 'Velja svip',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: 'N첬mera챨ur listi',
	bulletedlist	: 'Punktalisti',
	indent			: 'Minnka inndr찼tt',
	outdent			: 'Auka inndr찼tt',

	justify :
	{
		left	: 'Vinstrij철fnun',
		center	: 'Mi챨ja texta',
		right	: 'H챈grij철fnun',
		block	: 'Jafna b찼챨um megin'
	},

	blockquote : 'Inndr찼ttur',

	clipboard :
	{
		title		: 'L챠ma',
		cutError	: '횜ryggisstillingar vafrans 첸챠ns leyfa ekki klippingu texta me챨 m첬sara챨ger챨. Nota챨u lyklabor챨i챨 챠 klippa (Ctrl/Cmd+X).',
		copyError	: '횜ryggisstillingar vafrans 첸챠ns leyfa ekki afritun texta me챨 m첬sara챨ger챨. Nota챨u lyklabor챨i챨 챠 afrita (Ctrl/Cmd+C).',
		pasteMsg	: 'L챠mdu 챠 sv챈챨i챨 h챕r a챨 ne챨an og (<STRONG>Ctrl/Cmd+V</STRONG>) og smelltu 찼 <STRONG>OK</STRONG>.',
		securityMsg	: 'Vegna 철ryggisstillinga 챠 vafranum 첸챠num f챈r ritillinn ekki beinan a챨gang a챨 klippubor챨inu. 횧첬 ver챨ur a챨 l챠ma innihaldi챨 aftur inn 챠 첸ennan glugga.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: 'L챠ma 첬r Word',
		title			: 'L챠ma 첬r Word',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: 'L챠ma sem 처sni챨inn texta',
		title	: 'L챠ma sem 처sni챨inn texta'
	},

	templates :
	{
		button			: 'Sni챨m찼t',
		title			: 'Innihaldssni챨m찼t',
		options : 'Template Options', // MISSING
		insertOption	: 'Skipta 첬t raunverulegu innihaldi',
		selectPromptMsg	: 'Veldu sni챨m찼t til a챨 opna 챠 ritlinum.<br>(N첬verandi innihald v챠kur fyrir 첸v챠!):',
		emptyListMsg	: '(Ekkert sni챨m찼t er skilgreint!)'
	},

	showBlocks : 'S첵na blokkir',

	stylesCombo :
	{
		label		: 'St챠lflokkur',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: 'St챠lsni챨',
		panelTitle	: 'St챠lsni챨',

		tag_p		: 'Venjulegt letur',
		tag_pre		: 'Forsni챨i챨',
		tag_address	: 'Vistfang',
		tag_h1		: 'Fyrirs철gn 1',
		tag_h2		: 'Fyrirs철gn 2',
		tag_h3		: 'Fyrirs철gn 3',
		tag_h4		: 'Fyrirs철gn 4',
		tag_h5		: 'Fyrirs철gn 5',
		tag_h6		: 'Fyrirs철gn 6',
		tag_div		: 'Venjulegt (DIV)'
	},

	div :
	{
		title				: 'Create Div Container', // MISSING
		toolbar				: 'Create Div Container', // MISSING
		cssClassInputLabel	: 'Stylesheet Classes', // MISSING
		styleSelectLabel	: 'Style', // MISSING
		IdInputLabel		: 'Id', // MISSING
		languageCodeInputLabel	: ' Language Code', // MISSING
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
		label		: 'Leturger챨 ',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: 'Leturger챨 '
	},

	fontSize :
	{
		label		: 'Leturst챈r챨 ',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: 'Leturst챈r챨 '
	},

	colorButton :
	{
		textColorTitle	: 'Litur texta',
		bgColorTitle	: 'Bakgrunnslitur',
		panelTitle		: 'Colors', // MISSING
		auto			: 'Sj찼lfval',
		more			: 'Fleiri liti...'
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
		noSuggestions	: 'engar till철gur',
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

	maximize : 'Maximize', // MISSING
	minimize : 'Minimize', // MISSING

	fakeobjects :
	{
		anchor		: 'Anchor', // MISSING
		flash		: 'Flash Animation', // MISSING
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: 'Unknown Object' // MISSING
	},

	resize : 'Drag to resize', // MISSING

	colordialog :
	{
		title		: 'Select color', // MISSING
		options	:	'Color Options', // MISSING
		highlight	: 'Highlight', // MISSING
		selected	: 'Selected Color', // MISSING
		clear		: 'Clear' // MISSING
	},

	toolbarCollapse	: 'Collapse Toolbar', // MISSING
	toolbarExpand	: 'Expand Toolbar', // MISSING

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
		label : 'Eigindi skjals',
		title : 'Eigindi skjals',
		design : 'Design', // MISSING
		meta : 'L첵sig철gn',
		chooseColor : 'Choose', // MISSING
		other : '<annar>',
		docTitle :	'Titill s챠챨u',
		charset : 	'Letursett',
		charsetOther : 'Anna챨 letursett',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : 'Mi챨-evr처pskt',
		charsetCT : 'K챠nverskt, hef챨bundi챨 (Big5)',
		charsetCR : 'K첵rilskt',
		charsetGR : 'Gr챠skt',
		charsetJP : 'Japanskt',
		charsetKR : 'K처reskt',
		charsetTR : 'Tyrkneskt',
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : 'Vestur-evr처pst',
		docType : 'Flokkur skjalategunda',
		docTypeOther : 'Annar flokkur skjalategunda',
		xhtmlDec : 'Fella inn XHTML l첵singu',
		bgColor : 'Bakgrunnslitur',
		bgImage : 'Sl처챨 bakgrunnsmyndar',
		bgFixed : 'L챈stur bakgrunnur',
		txtColor : 'Litur texta',
		margin : 'Hli챨arsp찼ss챠a',
		marginTop : 'Efst',
		marginLeft : 'Vinstri',
		marginRight : 'H챈gri',
		marginBottom : 'Ne챨st',
		metaKeywords : 'Lykilor챨 efnisor챨askr찼r (a챨greind me챨 kommum)',
		metaDescription : 'L첵sing skjals',
		metaAuthor : 'H철fundur',
		metaCopyright : 'H철fundarr챕ttur',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
