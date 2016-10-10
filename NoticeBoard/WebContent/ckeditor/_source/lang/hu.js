/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Hungarian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['hu'] =
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
	editorTitle : 'HTML szerkeszt흷, %1',
	editorHelp : 'Press ALT 0 for help', // MISSING

	// ARIA descriptions.
	toolbars	: 'Szerkeszt흷 Eszk철zt찼r',
	editor		: 'HTML szerkeszt흷',

	// Toolbar buttons without dialogs.
	source			: 'Forr찼sk처d',
	newPage			: '횣j oldal',
	save			: 'Ment챕s',
	preview			: 'El흷n챕zet',
	cut				: 'Kiv찼g찼s',
	copy			: 'M찼sol찼s',
	paste			: 'Beilleszt챕s',
	print			: 'Nyomtat찼s',
	underline		: 'Al찼h첬zott',
	bold			: 'F챕lk철v챕r',
	italic			: 'D흷lt',
	selectAll		: 'Mindent kijel철l',
	removeFormat	: 'Form찼z찼s elt찼vol챠t찼sa',
	strike			: '횁th첬zott',
	subscript		: 'Als처 index',
	superscript		: 'Fels흷 index',
	horizontalrule	: 'Elv찼laszt처vonal beilleszt챕se',
	pagebreak		: 'Oldalt철r챕s beilleszt챕se',
	pagebreakAlt		: 'Oldalt철r챕s',
	unlink			: 'Hivatkoz찼s t철rl챕se',
	undo			: 'Visszavon찼s',
	redo			: 'Ism챕tl챕s',

	// Common messages and labels.
	common :
	{
		browseServer	: 'B철ng챕sz챕s a szerveren',
		url				: 'Hivatkoz찼s',
		protocol		: 'Protokoll',
		upload			: 'Felt철lt챕s',
		uploadSubmit	: 'K체ld챕s a szerverre',
		image			: 'K챕p',
		flash			: 'Flash',
		form			: '키rlap',
		checkbox		: 'Jel철l흷n챕gyzet',
		radio			: 'V찼laszt처gomb',
		textField		: 'Sz철vegmez흷',
		textarea		: 'Sz철vegter체let',
		hiddenField		: 'Rejtettmez흷',
		button			: 'Gomb',
		select			: 'Leg철rd체l흷 lista',
		imageButton		: 'K챕pgomb',
		notSet			: '<nincs be찼ll챠tva>',
		id				: 'Azonos챠t처',
		name			: 'N챕v',
		langDir			: '횒r찼s ir찼nya',
		langDirLtr		: 'Balr처l jobbra',
		langDirRtl		: 'Jobbr처l balra',
		langCode		: 'Nyelv k처dja',
		longDescr		: 'R챕szletes le챠r찼s webc챠me',
		cssClass		: 'St챠lusk챕szlet',
		advisoryTitle	: 'S첬g처cimke',
		cssStyle		: 'St챠lus',
		ok				: 'Rendben',
		cancel			: 'M챕gsem',
		close			: 'Bez찼r찼s',
		preview			: 'El흷n챕zet',
		generalTab		: '횁ltal찼nos',
		advancedTab		: 'Tov찼bbi opci처k',
		validateNumberFailed : 'A mez흷be csak sz찼mokat 챠rhat.',
		confirmNewPage	: 'Minden nem mentett v찼ltoz찼s el fog veszni! Biztosan be szeretn챕 t철lteni az oldalt?',
		confirmCancel	: 'Az 킥rlap tartalma megv찼ltozott, 찼m a v찼ltoz찼sokat nem r철gz챠tette. Biztosan be szeretn챕 z찼rni az 킥rlapot?',
		options			: 'Be찼ll챠t찼sok',
		target			: 'C챕l',
		targetNew		: '횣j ablak (_blank)',
		targetTop		: 'Legfels흷 ablak (_top)',
		targetSelf		: 'Aktu찼lis ablakban (_self)',
		targetParent	: 'Sz체l흷 ablak (_parent)',
		langDirLTR		: 'Balr처l jobbra (LTR)',
		langDirRTL		: 'Jobbr처l balra (RTL)',
		styles			: 'St챠lus',
		cssClasses		: 'St챠luslap oszt찼ly',
		width			: 'Sz챕less챕g',
		height			: 'Magass찼g',
		align			: 'Igaz챠t찼s',
		alignLeft		: 'Bal',
		alignRight		: 'Jobbra',
		alignCenter		: 'K철z챕pre',
		alignTop		: 'Tetej챕re',
		alignMiddle		: 'K철z챕pre',
		alignBottom		: 'Alj찼ra',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'A magass찼g mez흷be csak sz찼mokat 챠rhat.',
		invalidWidth	: 'A sz챕less챕g mez흷be csak sz찼mokat 챠rhat.',
		invalidCssLength	: '"%1"-hez megadott 챕rt챕k csakis egy pozit챠v sz찼m lehet, esetleg egy 챕rv챕nyes CSS egys챕ggel megjel철lve(px, %, in, cm, mm, em, ex, pt vagy pc).',
		invalidHtmlLength	: '"%1"-hez megadott 챕rt챕k csakis egy pozit챠v sz찼m lehet, esetleg egy 챕rv챕nyes HTML egys챕ggel megjel철lve(px vagy %).',
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, nem el챕rhet흷</span>'
	},

	contextmenu :
	{
		options : 'Helyi men체 opci처k'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Speci찼lis karakter beilleszt챕se',
		title		: 'Speci찼lis karakter v찼laszt찼sa',
		options : 'Speci찼lis karakter opci처k'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Hivatkoz찼s beilleszt챕se/m처dos챠t찼sa',
		other 		: '<m찼s>',
		menu		: 'Hivatkoz찼s m처dos챠t찼sa',
		title		: 'Hivatkoz찼s tulajdons찼gai',
		info		: 'Alaptulajdons찼gok',
		target		: 'Tartalom megjelen챠t챕se',
		upload		: 'Felt철lt챕s',
		advanced	: 'Tov찼bbi opci처k',
		type		: 'Hivatkoz찼s t챠pusa',
		toUrl		: 'URL',
		toAnchor	: 'Horgony az oldalon',
		toEmail		: 'E-Mail',
		targetFrame		: '<keretben>',
		targetPopup		: '<felugr처 ablakban>',
		targetFrameName	: 'Keret neve',
		targetPopupName	: 'Felugr처 ablak neve',
		popupFeatures	: 'Felugr처 ablak jellemz흷i',
		popupResizable	: '횁tm챕retez챕s',
		popupStatusBar	: '횁llapotsor',
		popupLocationBar: 'C챠msor',
		popupToolbar	: 'Eszk철zt찼r',
		popupMenuBar	: 'Men체 sor',
		popupFullScreen	: 'Teljes k챕perny흷 (csak IE)',
		popupScrollBars	: 'G철rd챠t흷s찼v',
		popupDependent	: 'Sz체l흷h철z kapcsolt (csak Netscape)',
		popupLeft		: 'Bal poz챠ci처',
		popupTop		: 'Fels흷 poz챠ci처',
		id				: 'Id',
		langDir			: '횒r찼s ir찼nya',
		langDirLTR		: 'Balr처l jobbra',
		langDirRTL		: 'Jobbr처l balra',
		acccessKey		: 'Billenty킥kombin찼ci처',
		name			: 'N챕v',
		langCode			: '횒r찼s ir찼nya',
		tabIndex			: 'Tabul찼tor index',
		advisoryTitle		: 'S첬g처cimke',
		advisoryContentType	: 'S첬g처 tartalomt챠pusa',
		cssClasses		: 'St챠lusk챕szlet',
		charset			: 'Hivatkozott tartalom k처dlapja',
		styles			: 'St챠lus',
		rel			: 'Kapcsolat t챠pusa',
		selectAnchor		: 'Horgony v찼laszt찼sa',
		anchorName		: 'Horgony n챕v szerint',
		anchorId			: 'Azonos챠t처 szerint',
		emailAddress		: 'E-Mail c챠m',
		emailSubject		: '횥zenet t찼rgya',
		emailBody		: '횥zenet',
		noAnchors		: '(Nincs horgony a dokumentumban)',
		noUrl			: 'Adja meg a hivatkoz찼s webc챠m챕t',
		noEmail			: 'Adja meg az E-Mail c챠met'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Horgony beilleszt챕se/szerkeszt챕se',
		menu		: 'Horgony tulajdons찼gai',
		title		: 'Horgony tulajdons찼gai',
		name		: 'Horgony neve',
		errorName	: 'K챕rem adja meg a horgony nev챕t',
		remove		: 'Horgony elt찼vol챠t찼sa'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Sorsz찼mozott lista tulajdons찼gai',
		bulletedTitle		: 'Pontozott lista tulajdons찼gai',
		type				: 'T챠pus',
		start				: 'Kezd흷sz찼m',
		validateStartNumber				:'A kezd흷sz찼m nem lehet t철rt 챕rt챕k.',
		circle				: 'K철r',
		disc				: 'Korong',
		square				: 'N챕gyzet',
		none				: 'Nincs',
		notset				: '<Nincs be찼ll챠tva>',
		armenian			: '횜rm챕ny sz찼moz찼s',
		georgian			: 'Gr첬z sz찼moz찼s (an, ban, gan, stb.)',
		lowerRoman			: 'R처mai kisbet킥s (i, ii, iii, iv, v, stb.)',
		upperRoman			: 'R처mai nagybet킥s (I, II, III, IV, V, stb.)',
		lowerAlpha			: 'Kisbet킥s (a, b, c, d, e, stb.)',
		upperAlpha			: 'Nagybet킥s (A, B, C, D, E, stb.)',
		lowerGreek			: 'G철r철g (alpha, beta, gamma, stb.)',
		decimal				: 'Arab sz찼moz찼s (1, 2, 3, stb.)',
		decimalLeadingZero	: 'Sz찼moz찼s bevezet흷 null찼kkal (01, 02, 03, stb.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Keres챕s 챕s csere',
		find				: 'Keres챕s',
		replace				: 'Csere',
		findWhat			: 'Keresett sz철veg:',
		replaceWith			: 'Csere erre:',
		notFoundMsg			: 'A keresett sz철veg nem tal찼lhat처.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: 'kis- 챕s nagybet킥 megk체l철nb철ztet챕se',
		matchWord			: 'csak ha ez a teljes sz처',
		matchCyclic			: 'Ciklikus keres챕s',
		replaceAll			: 'Az 철sszes cser챕je',
		replaceSuccessMsg	: '%1 egyez흷s챕g cser챕lve.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'T찼bl찼zat',
		title		: 'T찼bl찼zat tulajdons찼gai',
		menu		: 'T찼bl찼zat tulajdons찼gai',
		deleteTable	: 'T찼bl찼zat t철rl챕se',
		rows		: 'Sorok',
		columns		: 'Oszlopok',
		border		: 'Szeg챕lym챕ret',
		widthPx		: 'k챕ppont',
		widthPc		: 'sz찼zal챕k',
		widthUnit	: 'Sz챕less챕g egys챕g',
		cellSpace	: 'Cella t챕rk철z',
		cellPad		: 'Cella bels흷 marg처',
		caption		: 'Felirat',
		summary		: 'Le챠r찼s',
		headers		: 'Fejl챕cek',
		headersNone		: 'Nincsenek',
		headersColumn	: 'Els흷 oszlop',
		headersRow		: 'Els흷 sor',
		headersBoth		: 'Mindkett흷',
		invalidRows		: 'A sorok sz찼m찼nak nagyobbnak kell lenni mint 0.',
		invalidCols		: 'Az oszlopok sz찼m찼nak nagyobbnak kell lenni mint 0.',
		invalidBorder	: 'A szeg챕lym챕ret mez흷be csak sz찼mokat 챠rhat.',
		invalidWidth	: 'A sz챕less챕g mez흷be csak sz찼mokat 챠rhat.',
		invalidHeight	: 'A magass찼g mez흷be csak sz찼mokat 챠rhat.',
		invalidCellSpacing	: 'A cella t챕rk철z mez흷be csak sz찼mokat 챠rhat.',
		invalidCellPadding	: 'A cella bels흷 marg처 mez흷be csak sz찼mokat 챠rhat.',

		cell :
		{
			menu			: 'Cella',
			insertBefore	: 'Besz첬r찼s balra',
			insertAfter		: 'Besz첬r찼s jobbra',
			deleteCell		: 'Cell찼k t철rl챕se',
			merge			: 'Cell찼k egyes챠t챕se',
			mergeRight		: 'Cell찼k egyes챠t챕se jobbra',
			mergeDown		: 'Cell찼k egyes챠t챕se lefel챕',
			splitHorizontal	: 'Cell찼k sz챕tv찼laszt찼sa v챠zszintesen',
			splitVertical	: 'Cell찼k sz챕tv찼laszt찼sa f체gg흷legesen',
			title			: 'Cella tulajdons찼gai',
			cellType		: 'Cella t챠pusa',
			rowSpan			: 'F체gg흷leges egyes챠t챕s',
			colSpan			: 'V챠zszintes egyes챠t챕s',
			wordWrap		: 'Hossz첬 sorok t철r챕se',
			hAlign			: 'V챠zszintes igaz챠t찼s',
			vAlign			: 'F체gg흷leges igaz챠t찼s',
			alignBaseline	: 'Alapvonalra',
			bgColor			: 'H찼tt챕r sz챠ne',
			borderColor		: 'Keret sz챠ne',
			data			: 'Adat',
			header			: 'Fejl챕c',
			yes				: 'Igen',
			no				: 'Nem',
			invalidWidth	: 'A sz챕less챕g mez흷be csak sz찼mokat 챠rhat.',
			invalidHeight	: 'A magass찼g mez흷be csak sz찼mokat 챠rhat.',
			invalidRowSpan	: 'A f체gg흷leges egyes챠t챕s mez흷be csak sz찼mokat 챠rhat.',
			invalidColSpan	: 'A v챠zszintes egyes챠t챕s mez흷be csak sz찼mokat 챠rhat.',
			chooseColor		: 'V찼lasszon'
		},

		row :
		{
			menu			: 'Sor',
			insertBefore	: 'Besz첬r찼s f철l챕',
			insertAfter		: 'Besz첬r찼s al찼',
			deleteRow		: 'Sorok t철rl챕se'
		},

		column :
		{
			menu			: 'Oszlop',
			insertBefore	: 'Besz첬r찼s balra',
			insertAfter		: 'Besz첬r찼s jobbra',
			deleteColumn	: 'Oszlopok t철rl챕se'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Gomb tulajdons찼gai',
		text		: 'Sz철veg (횋rt챕k)',
		type		: 'T챠pus',
		typeBtn		: 'Gomb',
		typeSbm		: 'K체ld챕s',
		typeRst		: 'Alaphelyzet'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Jel철l흷n챕gyzet tulajdons찼gai',
		radioTitle	: 'V찼laszt처gomb tulajdons찼gai',
		value		: '횋rt챕k',
		selected	: 'Kiv찼lasztott'
	},

	// Form Dialog.
	form :
	{
		title		: '키rlap tulajdons찼gai',
		menu		: '키rlap tulajdons찼gai',
		action		: 'Adatfeldolgoz찼st v챕gz흷 hivatkoz찼s',
		method		: 'Adatk체ld챕s m처dja',
		encoding	: 'K처dol찼s'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Leg철rd체l흷 lista tulajdons찼gai',
		selectInfo	: 'Alaptulajdons찼gok',
		opAvail		: 'El챕rhet흷 opci처k',
		value		: '횋rt챕k',
		size		: 'M챕ret',
		lines		: 'sor',
		chkMulti	: 't철bb sor is kiv찼laszthat처',
		opText		: 'Sz철veg',
		opValue		: '횋rt챕k',
		btnAdd		: 'Hozz찼ad',
		btnModify	: 'M처dos챠t',
		btnUp		: 'Fel',
		btnDown		: 'Le',
		btnSetValue : 'Legyen az alap챕rtelmezett 챕rt챕k',
		btnDelete	: 'T철r철l'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Sz철vegter체let tulajdons찼gai',
		cols		: 'Karakterek sz찼ma egy sorban',
		rows		: 'Sorok sz찼ma'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Sz철vegmez흷 tulajdons찼gai',
		name		: 'N챕v',
		value		: '횋rt챕k',
		charWidth	: 'Megjelen챠tett karakterek sz찼ma',
		maxChars	: 'Maxim찼lis karaktersz찼m',
		type		: 'T챠pus',
		typeText	: 'Sz철veg',
		typePass	: 'Jelsz처'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Rejtett mez흷 tulajdons찼gai',
		name	: 'N챕v',
		value	: '횋rt챕k'
	},

	// Image Dialog.
	image :
	{
		title		: 'K챕p tulajdons찼gai',
		titleButton	: 'K챕pgomb tulajdons찼gai',
		menu		: 'K챕p tulajdons찼gai',
		infoTab		: 'Alaptulajdons찼gok',
		btnUpload	: 'K체ld챕s a szerverre',
		upload		: 'Felt철lt챕s',
		alt			: 'Bubor챕k sz철veg',
		lockRatio	: 'Ar찼ny megtart찼sa',
		resetSize	: 'Eredeti m챕ret',
		border		: 'Keret',
		hSpace		: 'V챠zsz. t찼v',
		vSpace		: 'F체gg. t찼v',
		alertUrl	: 'T철ltse ki a k챕p webc챠m챕t',
		linkTab		: 'Hivatkoz찼s',
		button2Img	: 'A kiv찼lasztott k챕pgombb처l sima k챕pet szeretne csin찼lni?',
		img2Button	: 'A kiv찼lasztott k챕pb흷l k챕pgombot szeretne csin찼lni?',
		urlMissing	: 'Hi찼nyzik a k챕p URL-je',
		validateBorder	: 'A keret m챕ret챕nek eg챕sz sz찼mot kell be챠rni!',
		validateHSpace	: 'V챠zszintes t찼vols찼gnak eg챕sz sz찼mot kell be챠rni!',
		validateVSpace	: 'F체gg흷leges t찼vols찼gnak eg챕sz sz찼mot kell be챠rni!'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash tulajdons찼gai',
		propertiesTab	: 'Tulajdons찼gok',
		title			: 'Flash tulajdons찼gai',
		chkPlay			: 'Automata lej찼tsz찼s',
		chkLoop			: 'Folyamatosan',
		chkMenu			: 'Flash men체 enged챕lyez챕se',
		chkFull			: 'Teljes k챕perny흷 enged챕lyez챕se',
 		scale			: 'M챕retez챕s',
		scaleAll		: 'Mindent mutat',
		scaleNoBorder	: 'Keret n챕lk체l',
		scaleFit		: 'Teljes kit철lt챕s',
		access			: 'Szkript hozz찼f챕r챕s',
		accessAlways	: 'Mindig',
		accessSameDomain: 'Azonos domainr흷l',
		accessNever		: 'Soha',
		alignAbsBottom	: 'Legalj찼ra',
		alignAbsMiddle	: 'K철zep챕re',
		alignBaseline	: 'Alapvonalhoz',
		alignTextTop	: 'Sz철veg tetej챕re',
		quality			: 'Min흷s챕g',
		qualityBest		: 'Legjobb',
		qualityHigh		: 'J처',
		qualityAutoHigh	: 'Automata j처',
		qualityMedium	: 'K철zepes',
		qualityAutoLow	: 'Automata gyenge',
		qualityLow		: 'Gyenge',
		windowModeWindow: 'Window',
		windowModeOpaque: 'Opaque',
		windowModeTransparent : 'Transparent',
		windowMode		: 'Ablak m처d',
		flashvars		: 'Flash v찼ltoz처k',
		bgcolor			: 'H찼tt챕rsz챠n',
		hSpace			: 'V챠zsz. t찼v',
		vSpace			: 'F체gg. t찼v',
		validateSrc		: 'Adja meg a hivatkoz찼s webc챠m챕t',
		validateHSpace	: 'A v챠zszintes t찼vols킥찼g mez흷be csak sz찼mokat 챠rhat.',
		validateVSpace	: 'A f체gg흷leges t찼vols킥찼g mez흷be csak sz찼mokat 챠rhat.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Helyes챠r찼s-ellen흷rz챕s',
		title			: 'Helyes챠r찼s ellen철rz흷',
		notAvailable	: 'Sajn찼lom, de a szolg찼ltat찼s jelenleg nem el챕rhet흷.',
		errorLoading	: 'Hiba a szolg찼ltat찼s host bet철lt챕se k철zben: %s.',
		notInDic		: 'Nincs a sz처t찼rban',
		changeTo		: 'M처dos챠t찼s',
		btnIgnore		: 'Kihagyja',
		btnIgnoreAll	: 'Mindet kihagyja',
		btnReplace		: 'Csere',
		btnReplaceAll	: '횜sszes cser챕je',
		btnUndo			: 'Visszavon찼s',
		noSuggestions	: 'Nincs javaslat',
		progress		: 'Helyes챠r찼s-ellen흷rz챕s folyamatban...',
		noMispell		: 'Helyes챠r찼s-ellen흷rz챕s k챕sz: Nem tal찼ltam hib찼t',
		noChanges		: 'Helyes챠r찼s-ellen흷rz챕s k챕sz: Nincs v찼ltoztatott sz처',
		oneChange		: 'Helyes챠r찼s-ellen흷rz챕s k챕sz: Egy sz처 cser챕lve',
		manyChanges		: 'Helyes챠r찼s-ellen흷rz챕s k챕sz: %1 sz처 cser챕lve',
		ieSpellDownload	: 'A helyes챠r찼s-ellen흷rz흷 nincs telep챠tve. Szeretn챕 let철lteni most?'
	},

	smiley :
	{
		toolbar	: 'Hangulatjelek',
		title	: 'Hangulatjel besz첬r찼sa',
		options : 'Hangulatjel opci처k'
	},

	elementsPath :
	{
		eleLabel : 'Elem utak',
		eleTitle : '%1 elem'
	},

	numberedlist	: 'Sz찼moz찼s',
	bulletedlist	: 'Felsorol찼s',
	indent			: 'Beh첬z찼s n철vel챕se',
	outdent			: 'Beh첬z찼s cs철kkent챕se',

	justify :
	{
		left	: 'Balra',
		center	: 'K철z챕pre',
		right	: 'Jobbra',
		block	: 'Sorkiz찼rt'
	},

	blockquote : 'Id챕zet blokk',

	clipboard :
	{
		title		: 'Beilleszt챕s',
		cutError	: 'A b철ng챕sz흷 biztons찼gi be찼ll챠t찼sai nem enged챕lyezik a szerkeszt흷nek, hogy v챕grehajtsa a kiv찼g찼s m킥veletet. Haszn찼lja az al찼bbi billenty킥kombin찼ci처t (Ctrl/Cmd+X).',
		copyError	: 'A b철ng챕sz흷 biztons찼gi be찼ll챠t찼sai nem enged챕lyezik a szerkeszt흷nek, hogy v챕grehajtsa a m찼sol찼s m킥veletet. Haszn찼lja az al찼bbi billenty킥kombin찼ci처t (Ctrl/Cmd+X).',
		pasteMsg	: 'M찼solja be az al찼bbi mez흷be a <STRONG>Ctrl/Cmd+V</STRONG> billenty킥k lenyom찼s찼val, majd nyomjon <STRONG>Rendben</STRONG>-t.',
		securityMsg	: 'A b철ng챕sz흷 biztons찼gi be찼ll챠t찼sai miatt a szerkeszt흷 nem k챕pes hozz찼f챕rni a v찼g처lap adataihoz. Illeszd be 첬jra ebben az ablakban.',
		pasteArea	: 'Besz첬r찼s mez흷'
	},

	pastefromword :
	{
		confirmCleanup	: '횣gy t킥nik a beillesztett sz철veget Word-b흷l m찼solt 찼t. Meg szeretn챕 tiszt챠tani a sz철veget? (aj찼nlott)',
		toolbar			: 'Beilleszt챕s Word-b흷l',
		title			: 'Beilleszt챕s Word-b흷l',
		error			: 'Egy bels흷 hiba miatt nem siker체lt megtiszt챠tani a sz철veget'
	},

	pasteText :
	{
		button	: 'Beilleszt챕s form찼zatlan sz철vegk챕nt',
		title	: 'Beilleszt챕s form찼zatlan sz철vegk챕nt'
	},

	templates :
	{
		button			: 'Sablonok',
		title			: 'El챕rhet흷 sablonok',
		options : 'Sablon opci처k',
		insertOption	: 'Kicser챕li a jelenlegi tartalmat',
		selectPromptMsg	: 'V찼lassza ki melyik sablon ny챠ljon meg a szerkeszt흷ben<br>(a jelenlegi tartalom elveszik):',
		emptyListMsg	: '(Nincs sablon megadva)'
	},

	showBlocks : 'Blokkok megjelen챠t챕se',

	stylesCombo :
	{
		label		: 'St챠lus',
		panelTitle	: 'Form찼z찼si st챠lusok',
		panelTitle1	: 'Blokk st챠lusok',
		panelTitle2	: 'Inline st챠lusok',
		panelTitle3	: 'Objektum st챠lusok'
	},

	format :
	{
		label		: 'Form찼tum',
		panelTitle	: 'Form찼tum',

		tag_p		: 'Norm찼l',
		tag_pre		: 'Form찼zott',
		tag_address	: 'C챠msor',
		tag_h1		: 'Fejl챕c 1',
		tag_h2		: 'Fejl챕c 2',
		tag_h3		: 'Fejl챕c 3',
		tag_h4		: 'Fejl챕c 4',
		tag_h5		: 'Fejl챕c 5',
		tag_h6		: 'Fejl챕c 6',
		tag_div		: 'Bekezd챕s (DIV)'
	},

	div :
	{
		title				: 'DIV t찼rol처 l챕trehoz찼sa',
		toolbar				: 'DIV t찼rol처 l챕trehoz찼sa',
		cssClassInputLabel	: 'St챠luslap oszt찼ly',
		styleSelectLabel	: 'St챠lus',
		IdInputLabel		: 'Azonos챠t처',
		languageCodeInputLabel	: ' Nyelv k처dja',
		inlineStyleInputLabel	: 'Inline st챠lus',
		advisoryTitleInputLabel	: 'Tipp sz철veg',
		langDirLabel		: 'Nyelvi ir찼ny',
		langDirLTRLabel		: 'Balr처l jobbra (LTR)',
		langDirRTLLabel		: 'Jobbr처l balra (RTL)',
		edit				: 'DIV szerkeszt챕se',
		remove				: 'DIV elt찼vol챠t찼sa'
  	},

	iframe :
	{
		title		: 'IFrame Tulajdons찼gok',
		toolbar		: 'IFrame',
		noUrl		: 'K챕rem 챠rja be a iframe URL-t',
		scrolling	: 'G철rd챠t흷s찼v bekapcsol찼sa',
		border		: 'Legyen keret'
	},

	font :
	{
		label		: 'Bet킥t챠pus',
		voiceLabel	: 'Bet킥t챠pus',
		panelTitle	: 'Bet킥t챠pus'
	},

	fontSize :
	{
		label		: 'M챕ret',
		voiceLabel	: 'Bet킥m챕ret',
		panelTitle	: 'M챕ret'
	},

	colorButton :
	{
		textColorTitle	: 'Bet킥sz챠n',
		bgColorTitle	: 'H찼tt챕rsz챠n',
		panelTitle		: 'Sz챠nek',
		auto			: 'Automatikus',
		more			: 'Tov찼bbi sz챠nek...'
	},

	colors :
	{
		'000' : 'Fekete',
		'800000' : 'Bord처',
		'8B4513' : 'Barna',
		'2F4F4F' : 'S철t챕t t체rkiz',
		'008080' : 'T체rkiz',
		'000080' : 'Kir찼ly k챕k',
		'4B0082' : 'Indig처 k챕k',
		'696969' : 'Sz체rke',
		'B22222' : 'T챕gla v철r철s',
		'A52A2A' : 'V철r철s',
		'DAA520' : 'Arany s찼rga',
		'006400' : 'S철t챕t z철ld',
		'40E0D0' : 'T체rkiz',
		'0000CD' : 'K챕k',
		'800080' : 'Lila',
		'808080' : 'Sz체rke',
		'F00' : 'Piros',
		'FF8C00' : 'S철t챕t narancs',
		'FFD700' : 'Arany',
		'008000' : 'Z철ld',
		'0FF' : 'T체rkiz',
		'00F' : 'K챕k',
		'EE82EE' : 'R처zsasz챠n',
		'A9A9A9' : 'S철t챕t sz체rke',
		'FFA07A' : 'Lazac',
		'FFA500' : 'Narancs',
		'FFFF00' : 'Citroms찼rga',
		'00FF00' : 'Neon z철ld',
		'AFEEEE' : 'Vil찼gos t체rkiz',
		'ADD8E6' : 'Vil찼gos k챕k',
		'DDA0DD' : 'Vil찼gos lila',
		'D3D3D3' : 'Vil찼gos sz체rke',
		'FFF0F5' : 'Lavender Blush',
		'FAEBD7' : 'T철rtfeh챕r',
		'FFFFE0' : 'Vil찼gos s찼rga',
		'F0FFF0' : 'Menta',
		'F0FFFF' : 'Az첬r k챕k',
		'F0F8FF' : 'Halv찼ny k챕k',
		'E6E6FA' : 'Lavender',
		'FFF' : 'Feh챕r'
	},

	scayt :
	{
		title			: 'Helyes챠r찼s ellen흷rz챕s g챕pel챕s k철zben',
		opera_title		: 'Az Opera nem t찼mogatja',
		enable			: 'SCAYT enged챕lyez챕se',
		disable			: 'SCAYT letilt찼sa',
		about			: 'SCAYT n챕vjegy',
		toggle			: 'SCAYT kapcsol찼sa',
		options			: 'Be찼ll챠t찼sok',
		langs			: 'Nyelvek',
		moreSuggestions	: 'Tov찼bbi javaslatok',
		ignore			: 'Kihagy',
		ignoreAll		: '횜sszes kihagy찼sa',
		addWord			: 'Sz처 hozz찼ad찼sa',
		emptyDic		: 'A sz처t찼r nev챕t meg kell adni.',
		noSuggestions	: 'Nincs javaslat',
		optionsTab		: 'Be찼ll챠t찼sok',
		allCaps			: 'Nagybet킥s szavak kihagy찼sa',
		ignoreDomainNames : 'Domain nevek kihagy찼sa',
		mixedCase		: 'Kis 챕s nagybet킥t is tartalmaz처 szavak kihagy찼sa',
		mixedWithDigits	: 'Sz찼mokat tartalmaz처 szavak kihagy찼sa',

		languagesTab	: 'Nyelvek',

		dictionariesTab	: 'Sz처t찼r',
		dic_field_name	: 'Sz처t찼r neve',
		dic_create		: 'L챕trehoz찼s',
		dic_restore		: 'Vissza찼ll챠t찼s',
		dic_delete		: 'T철rl챕s',
		dic_rename		: '횁tnevez챕s',
		dic_info		: 'Kezdetben a felhaszn찼l처i sz처t찼r b철ng챕sz흷 s체tiben t찼rol처dik. Azonban a s체tik maxim찼lis m챕rete korl찼tozott. Amikora a sz처t찼r akkora lesz, hogy m찼r s체tiben nem lehet t찼rolni, akkor a sz처t찼rat t찼rolhatja a szerveren is. Ehhez egy nevet kell megadni a sz처t찼rhoz. Amennyiben m찼r van szerveren t찼rolt sz처t찼ra, adja meg a nev챕t 챕s kattintson a vissza찼ll챠t찼s gombra.',

		aboutTab		: 'N챕vjegy'
	},

	about :
	{
		title		: 'CKEditor n챕vjegy',
		dlgTitle	: 'CKEditor n챕vjegy',
		help	: 'Itt tal찼lsz seg챠ts챕get: $1',
		userGuide : 'CKEditor Felhaszn찼l처i 첬tmutat처',
		moreInfo	: 'Licenszel챕si inform찼ci처k챕rt k챕rj체k l찼togassa meg weboldalunkat:',
		copy		: 'Copyright &copy; $1. Minden jog fenntartva.'
	},

	maximize : 'Teljes m챕ret',
	minimize : 'Kis m챕ret',

	fakeobjects :
	{
		anchor		: 'Horgony',
		flash		: 'Flash anim찼ci처',
		iframe		: 'IFrame',
		hiddenfield	: 'Rejtett mez천',
		unknown		: 'Ismeretlen objektum'
	},

	resize : 'H첬zza az 찼tm챕retez챕shez',

	colordialog :
	{
		title		: 'V찼lasszon sz챠nt',
		options	:	'Sz챠n opci처k',
		highlight	: 'Nagy챠t찼s',
		selected	: 'Kiv찼lasztott',
		clear		: '횥r챠t챕s'
	},

	toolbarCollapse	: 'Eszk철zt찼r 철sszecsuk찼sa',
	toolbarExpand	: 'Eszk철zt찼r sz챕tnyit찼sa',

	toolbarGroups :
	{
		document : 'Dokumentum',
		clipboard : 'V찼g처lap/Visszavon찼s',
		editing : 'Szerkeszt챕s',
		forms : '키rlapok',
		basicstyles : 'Alapst챠lusok',
		paragraph : 'Bekezd챕s',
		links : 'Hivatkoz찼sok',
		insert : 'Besz첬r찼s',
		styles : 'St챠lusok',
		colors : 'Sz챠nek',
		tools : 'Eszk철z철k'
	},

	bidi :
	{
		ltr : 'Sz철veg ir찼nya balr처l jobbra',
		rtl : 'Sz철veg ir찼nya jobbr처l balra'
	},

	docprops :
	{
		label : 'Dokumentum tulajdons찼gai',
		title : 'Dokumentum tulajdons찼gai',
		design : 'Design',
		meta : 'Meta adatok',
		chooseColor : 'V찼lasszon',
		other : '<m찼s>',
		docTitle :	'Oldalc챠m',
		charset : 	'Karakterk처dol찼s',
		charsetOther : 'M찼s karakterk처dol찼s',
		charsetASCII : 'ASCII',
		charsetCE : 'K철z챕p-Eur처pai',
		charsetCT : 'K챠nai Tradicion찼lis (Big5)',
		charsetCR : 'Cyrill',
		charsetGR : 'G철r철g',
		charsetJP : 'Jap찼n',
		charsetKR : 'Koreai',
		charsetTR : 'T철r철k',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Nyugat-Eur처pai',
		docType : 'Dokumentum t챠pus fejl챕c',
		docTypeOther : 'M찼s dokumentum t챠pus fejl챕c',
		xhtmlDec : 'XHTML deklar찼ci처k beilleszt챕se',
		bgColor : 'H찼tt챕rsz챠n',
		bgImage : 'H찼tt챕rk챕p c챠m',
		bgFixed : 'Nem g철rd챠thet흷 h찼tt챕r',
		txtColor : 'Bet킥sz챠n',
		margin : 'Oldal marg처k',
		marginTop : 'Fels흷',
		marginLeft : 'Bal',
		marginRight : 'Jobb',
		marginBottom : 'Als처',
		metaKeywords : 'Dokumentum keres흷szavak (vessz흷vel elv찼lasztva)',
		metaDescription : 'Dokumentum le챠r찼s',
		metaAuthor : 'Szerz흷',
		metaCopyright : 'Szerz흷i jog',
		previewHtml : '<p>Ez itt egy <strong>p챕lda</strong>. A <a href="javascript:void(0)">CKEditor</a>-t haszn찼lod.</p>'
	}
};
