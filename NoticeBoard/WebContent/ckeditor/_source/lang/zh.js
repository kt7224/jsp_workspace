/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Chinese Traditional language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['zh'] =
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
	editorTitle : '野뚧뻼�쑍渶②섞�솳竊�%1',
	editorHelp : '�뙃 ALT+0 餓η뜴孃쀥무�뒰',

	// ARIA descriptions.
	toolbars	: '渶②섞�솳藥ε끁轝�',
	editor		: '野뚧뻼�쑍渶②섞�솳',

	// Toolbar buttons without dialogs.
	source			: '�렅冶뗧♠',
	newPage			: '�뼀�뼭茹붹죭',
	save			: '�꽧耶�',
	preview			: '�젏誤�',
	cut				: '�돦訝�',
	copy			: '筽뉓＝',
	paste			: '縕쇌툓',
	print			: '�닓�뜲',
	underline		: '佯뺟퇉',
	bold			: '暎쀩쳱',
	italic			: '�뼔遙�',
	selectAll		: '�뀲�겦',
	removeFormat	: '歷낂솮�졏凉�',
	strike			: '�닼�솮渶�',
	subscript		: '訝뗦쮽',
	superscript		: '訝딀쮽',
	horizontalrule	: '�룖�뀯麗닷뭄渶�',
	pagebreak		: '�룖�뀯�늽�쟻寧��솦',
	pagebreakAlt		: '�늽�쟻寧��솦',
	unlink			: '燁삯솮擁낂�ｇ탳',
	undo			: '孃⒴렅',
	redo			: '�뇥筽�',

	// Common messages and labels.
	common :
	{
		browseServer	: '�뤺┰鴉뷸쐨�솳塋�',
		url				: 'URL',
		protocol		: '�싪쮭�뜑若�',
		upload			: '訝듿궠',
		uploadSubmit	: '訝듿궠�눛鴉뷸쐨�솳',
		image			: '壤긷깗',
		flash			: 'Flash',
		form			: '烏ⓨ뼫',
		checkbox		: '�졇�룚�뼶櫻�',
		radio			: '�겦�쟿�뙃�닏',
		textField		: '�뻼耶쀦뼶櫻�',
		textarea		: '�뻼耶쀥��윜',
		hiddenField		: '�슧�뿈轝꾡퐤',
		button			: '�뙃�닏',
		select			: '歷끻뼫/�겦�뼫',
		imageButton		: '壤긷깗�뙃�닏',
		notSet			: '<弱싨쑋鼇�若�>',
		id				: 'ID',
		name			: '�릫葉�',
		langDir			: '沃욆��뼶�릲',
		langDirLtr		: '�뵳藥��뚦뤂 (LTR)',
		langDirRtl		: '�뵳�뤂�뚦랩 (RTL)',
		langCode		: '沃욆�餓ｇ♠',
		longDescr		: '屋녕눗 URL',
		cssClass		: '與ｅ폀烏③줊�닪',
		advisoryTitle	: '與숅죱',
		cssStyle		: '與ｅ폀',
		ok				: '閻뷴츣',
		cancel			: '�룚易�',
		close			: '�뀽�뿭',
		preview			: '窯꾥쭏',
		generalTab		: '訝��닾',
		advancedTab		: '�꿴쉸',
		validateNumberFailed : '��誤곮섯�뀯�빖耶쀦졏凉�',
		confirmNewPage	: '�뤎耶섊쉪岳��뵻弱싨쑋�꽧耶섓펽誤곲뼀�뼭茹붹죭竊�',
		confirmCancel	: '�깿餓썽겦�쟿弱싨쑋�꽧耶섓펽誤곲뿙�뻾弱띹㈀�썟竊�',
		options			: '�됮」',
		target			: '�쎅�젃',
		targetNew		: '�뼭囹쀥룭(_blank)',
		targetTop		: '�빐窈�(_top)',
		targetSelf		: '�쑍囹쀥룭(_self)',
		targetParent	: '�댍囹쀥룭(_parent)',
		langDirLTR		: 'Left to Right (LTR)', // MISSING
		langDirRTL		: 'Right to Left (RTL)', // MISSING
		styles			: 'Style', // MISSING
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: '野у벧',
		height			: '遙섇벧',
		align			: '弱띺퐡',
		alignLeft		: '�씈藥�弱띺퐡',
		alignRight		: '�씈�뤂弱띺퐡',
		alignCenter		: '營�訝�',
		alignTop		: '�씈訝듿컢慂�',
		alignMiddle		: '營�訝�弱띺퐡',
		alignBottom		: '�씈訝뗥컢慂�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '遙섇벧恙낂젅�궨�빖耶쀦졏凉�',
		invalidWidth	: '野у벧恙낂젅�궨�빖耶쀦졏凉�',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, 藥꿴뿙�뻾</span>'
	},

	contextmenu :
	{
		options : 'Context Menu Options' // MISSING
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�룖�뀯�돶餘딁Е�솦',
		title		: '獄뗩겦�뱡�돶餘딁Е�솦',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '�룖�뀯/渶②섞擁낂�ｇ탳',
		other 		: '<�끀餓�>',
		menu		: '渶②섞擁낂�ｇ탳',
		title		: '擁낂�ｇ탳',
		info		: '擁낂�ｇ탳蘊뉓쮭',
		target		: '�쎅與�',
		upload		: '訝듿궠',
		advanced	: '�꿴쉸',
		type		: '擁낂�ｆ렏窈욃엹',
		toUrl		: 'URL', // MISSING
		toAnchor	: '�쑍�쟻�뙣容�',
		toEmail		: '�쎔耶먬꺏餓�',
		targetFrame		: '<旅녷왃>',
		targetPopup		: '<恙ラ’誤뽫첊>',
		targetFrameName	: '�쎅與숁죫�왃�릫葉�',
		targetPopupName	: '恙ラ’誤뽫첊�릫葉�',
		popupFeatures	: '恙ラ’誤뽫첊掠ф��',
		popupResizable	: '�룾潁��붂',
		popupStatusBar	: '���뀑�닓',
		popupLocationBar: '泳꿨��닓',
		popupToolbar	: '藥ε끁�닓',
		popupMenuBar	: '�겦�뼫�닓',
		popupFullScreen	: '�뀲�옠亮� (IE)',
		popupScrollBars	: '�뜴邕�',
		popupDependent	: '孃욃괵 (NS)',
		popupLeft		: '藥�',
		popupTop		: '�뤂',
		id				: 'ID',
		langDir			: '沃욆��뼶�릲',
		langDirLTR		: '�뵳藥��뚦뤂 (LTR)',
		langDirRTL		: '�뵳�뤂�뚦랩 (RTL)',
		acccessKey		: '耶섇룚�뜷',
		name			: '�릫葉�',
		langCode			: '沃욆��뼶�릲',
		tabIndex			: '若싦퐤�젂佯�',
		advisoryTitle		: '與숅죱',
		advisoryContentType	: '�뀱若백줊�엹',
		cssClasses		: '與ｅ폀烏③줊�닪',
		charset			: '�ｇ탳蘊뉑틦阿뗧랬閻�',
		styles			: '與ｅ폀',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '獄뗩겦�뱡�뙣容�',
		anchorName		: '堊앶뙣容욃릫葉�',
		anchorId			: '堊앭뀇餓� ID',
		emailAddress		: '�쎔耶먬꺏餓�',
		emailSubject		: '�꺏餓뜸말�뿨',
		emailBody		: '�꺏餓뜹뀱若�',
		noAnchors		: '(�쑍�뻼餓뜹컶�꽒�룾�뵪阿뗩뙣容�)',
		noUrl			: '獄뗨섯�뀯轝꿴�ｇ탳�쉪 URL',
		noEmail			: '獄뗨섯�뀯�쎔耶먬꺏餓뜸퐤��'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�룖�뀯/渶②섞�뙣容�',
		menu		: '�뙣容욃괵��',
		title		: '�뙣容욃괵��',
		name		: '�뙣容욃릫葉�',
		errorName	: '獄뗨섯�뀯�뙣容욃릫葉�',
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
		title				: '弱뗦돻�늾�룚餓�',
		find				: '弱뗦돻',
		replace				: '�룚餓�',
		findWhat			: '弱뗦돻:',
		replaceWith			: '�룚餓�:',
		notFoundMsg			: '�쑋�돻�댆�뙁若싩쉪�뻼耶쀣��',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '鸚㎩컦野ラ젅�쎑寧�',
		matchWord			: '�뀲耶쀧쎑寧�',
		matchCyclic			: '孃ょ뮥�맂榮�',
		replaceAll			: '�뀲�깿�룚餓�',
		replaceSuccessMsg	: '�뀻若뚧닇 %1 轝▼룚餓�'
	},

	// Table Dialog
	table :
	{
		toolbar		: '烏ⓩ졏',
		title		: '烏ⓩ졏掠ф��',
		menu		: '烏ⓩ졏掠ф��',
		deleteTable	: '�닼�솮烏ⓩ졏',
		rows		: '�닓�빖',
		columns		: '轝꾣빖',
		border		: '�굤旅�',
		widthPx		: '�깗榮�',
		widthPc		: '�쇍�늽驪�',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '�뼋瓮�',
		cellPad		: '�뀱瓮�',
		caption		: '與숅죱',
		summary		: '�몮誤�',
		headers		: '與숅죱',
		headersNone		: '�꽒與숅죱',
		headersColumn	: '寧т�轝�',
		headersRow		: '寧т��닓',
		headersBoth		: '寧т�轝꾢뭽寧т��닓',
		invalidRows		: '恙낂젅�쐣訝��닑�쎍鸚싩쉪�닓',
		invalidCols		: '恙낂젅�쐣訝��닑�쎍鸚싩쉪轝�',
		invalidBorder	: '�굤旅녶ㄷ弱뤷퓚�젅�궨�빖耶쀦졏凉�',
		invalidWidth	: '烏ⓩ졏野у벧恙낂젅�궨�빖耶쀦졏凉�',
		invalidHeight	: '烏ⓩ졏遙섇벧恙낂젅�궨�빖耶쀦졏凉�',
		invalidCellSpacing	: '�꽧耶섉졏�뼋瓮앭퓚�젅�궨�빖耶쀦졏凉�',
		invalidCellPadding	: '�꽧耶섉졏�뀱瓮앭퓚�젅�궨�빖耶쀦졏凉�',

		cell :
		{
			menu			: '�꽧耶섉졏',
			insertBefore	: '�릲藥��룖�뀯�꽧耶섉졏',
			insertAfter		: '�릲�뤂�룖�뀯�꽧耶섉졏',
			deleteCell		: '�닼�솮�꽧耶섉졏',
			merge			: '�릦鵝드꽧耶섉졏',
			mergeRight		: '�릲�뤂�릦鵝드꽧耶섉졏',
			mergeDown		: '�릲訝뗥릦鵝드꽧耶섉졏',
			splitHorizontal	: '艅ュ릲�늽�돯�꽧耶섉졏',
			splitVertical	: '潁긷릲�늽�돯�꽧耶섉졏',
			title			: '�꽧耶섉졏掠ф��',
			cellType		: '�꽧耶섉졏窈욃닪',
			rowSpan			: '�꽧耶섉졏�닓�빖',
			colSpan			: '�꽧耶섉졏轝꾣빖',
			wordWrap		: '�눎�땿�룢烏�',
			hAlign			: '麗닷뭄弱띺퐡',
			vAlign			: '�엩�쎍弱띺퐡',
			alignBaseline	: '�읃渶싧컢慂�',
			bgColor			: '�깒�솺窈뤺돯',
			borderColor		: '�굤旅녽죴�돯',
			data			: '�빖�뱴',
			header			: '與숅죱',
			yes				: '�삸',
			no				: '�맔',
			invalidWidth	: '�꽧耶섉졏野у벧恙낂젅�궨�빖耶쀦졏凉�',
			invalidHeight	: '�꽧耶섉졏遙섇벧恙낂젅�궨�빖耶쀦졏凉�',
			invalidRowSpan	: '�꽧耶섉졏�닓�빖恙낂젅�궨�빐�빖�졏凉�',
			invalidColSpan	: '�꽧耶섉졏轝꾣빖佯�恙낂젅�궨�빐�빖�졏凉�',
			chooseColor		: 'Choose' // MISSING
		},

		row :
		{
			menu			: '�닓',
			insertBefore	: '�릲訝딀룖�뀯�닓',
			insertAfter		: '�릲訝뗦룖�뀯�닓',
			deleteRow		: '�닼�솮�닓'
		},

		column :
		{
			menu			: '轝�',
			insertBefore	: '�릲藥��룖�뀯轝�',
			insertAfter		: '�릲�뤂�룖�뀯轝�',
			deleteColumn	: '�닼�솮轝�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�뙃�닏掠ф��',
		text		: '窈�鹽뷸뻼耶� (��)',
		type		: '窈욃엹',
		typeBtn		: '�뙃�닏 (Button)',
		typeSbm		: '�곩눣 (Submit)',
		typeRst		: '�뇥鼇� (Reset)'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�졇�룚�뼶櫻듿괵��',
		radioTitle	: '�겦�쟿�뙃�닏掠ф��',
		value		: '�겦�룚��',
		selected	: '藥꿴겦�룚'
	},

	// Form Dialog.
	form :
	{
		title		: '烏ⓨ뼫掠ф��',
		menu		: '烏ⓨ뼫掠ф��',
		action		: '�땿鵝�',
		method		: '�뼶力�',
		encoding	: '烏ⓨ뼫渶①♠'
	},

	// Select Field Dialog.
	select :
	{
		title		: '歷끻뼫/�겦�뼫掠ф��',
		selectInfo	: '蘊뉓쮭',
		opAvail		: '�룾�뵪�겦�쟿',
		value		: '��',
		size		: '鸚㎩컦',
		lines		: '烏�',
		chkMulti	: '�룾鸚싮겦',
		opText		: '窈�鹽뷸뻼耶�',
		opValue		: '�겦�룚��',
		btnAdd		: '�뼭罌�',
		btnModify	: '岳��뵻',
		btnUp		: '訝딁㎉',
		btnDown		: '訝뗧㎉',
		btnSetValue : '鼇��궨�젏鼇���',
		btnDelete	: '�닼�솮'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�뻼耶쀥��윜掠ф��',
		cols		: '耶쀥뀇野у벧',
		rows		: '�닓�빖'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�뻼耶쀦뼶櫻듿괵��',
		name		: '�릫葉�',
		value		: '��',
		charWidth	: '耶쀥뀇野у벧',
		maxChars	: '��鸚싧춻�뀇�빖',
		type		: '窈욃엹',
		typeText	: '�뻼耶�',
		typePass	: '野녺♠'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�슧�뿈轝꾡퐤掠ф��',
		name	: '�릫葉�',
		value	: '��'
	},

	// Image Dialog.
	image :
	{
		title		: '壤긷깗掠ф��',
		titleButton	: '壤긷깗�뙃�닏掠ф��',
		menu		: '壤긷깗掠ф��',
		infoTab		: '壤긷깗蘊뉓쮭',
		btnUpload	: '訝듿궠�눛鴉뷸쐨�솳',
		upload		: '訝듿궠',
		alt			: '�쎘餓ｆ뻼耶�',
		lockRatio	: '嶺됪캈堊�',
		resetSize	: '�뇥鼇��궨�렅鸚㎩컦',
		border		: '�굤旅�',
		hSpace		: '麗닷뭄瓮앶썴',
		vSpace		: '�엩�쎍瓮앶썴',
		alertUrl	: '獄뗨섯�뀯壤긷깗 URL',
		linkTab		: '擁낂�ｇ탳',
		button2Img	: '誤곫뒍壤긷깗�뙃�닏�뵻�닇壤긷깗�뿇竊�',
		img2Button	: '誤곫뒍壤긷깗�뵻�닇壤긷깗�뙃�닏�뿇竊�',
		urlMissing	: 'Image source URL is missing.', // MISSING
		validateBorder	: 'Border must be a whole number.', // MISSING
		validateHSpace	: 'HSpace must be a whole number.', // MISSING
		validateVSpace	: 'VSpace must be a whole number.' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash 掠ф��',
		propertiesTab	: '掠ф��',
		title			: 'Flash 掠ф��',
		chkPlay			: '�눎�땿�뮡�붂',
		chkLoop			: '�뇥筽�',
		chkMenu			: '�뼀�븶�겦�뼫',
		chkFull			: '�븶�땿�뀲�옠亮뺡’鹽�',
 		scale			: '潁��붂',
		scaleAll		: '�뀲�깿窈�鹽�',
		scaleNoBorder	: '�꽒�굤旅�',
		scaleFit		: '暎양▶寧��릦',
		access			: '�뀅鼇김뀽�쑍鼇ゅ븦',
		accessAlways	: '麗면걽',
		accessSameDomain: '�쎑�릪�윜�릫',
		accessNever		: '麗멧툖',
		alignAbsBottom	: '永뺝컢訝뗦뼶',
		alignAbsMiddle	: '永뺝컢訝��뼋',
		alignBaseline	: '�읃繹뽫퇉',
		alignTextTop	: '�뻼耶쀤툓�뼶',
		quality			: '蘊ょ킔',
		qualityBest		: '��也�',
		qualityHigh		: '遙�',
		qualityAutoHigh	: '遙섓펷�눎�땿竊�',
		qualityMedium	: '訝�竊덅눎�땿竊�',
		qualityAutoLow	: '鵝롳펷�눎�땿竊�',
		qualityLow		: '鵝�',
		windowModeWindow: '誤뽫첊',
		windowModeOpaque: '訝띺�뤸삇',
		windowModeTransparent : '�뤸삇',
		windowMode		: '誤뽫첊與▼폀',
		flashvars		: 'Flash 溫딀빖',
		bgcolor			: '�깒�솺窈뤺돯',
		hSpace			: '麗닷뭄瓮앶썴',
		vSpace			: '�엩�쎍瓮앶썴',
		validateSrc		: '獄뗨섯�뀯轝꿴�ｇ탳�쉪 URL',
		validateHSpace	: '麗닷뭄�뼋瓮앭퓚�젅�궨�빖耶쀦졏凉�',
		validateVSpace	: '�엩�쎍�뼋瓮앭퓚�젅�궨�빖耶쀦졏凉�'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�떬耶쀦あ�윥',
		title			: '�떬耶쀦あ�윥',
		notAvailable	: '�뒻閭됵펽�쐨�떃�쎅�뎺�슟訝띶룾�뵪',
		errorLoading	: '�꽒力뺠겘楹삡풅�쐨�솳: %s.',
		notInDic		: '訝띶쑉耶쀥끂訝�',
		changeTo		: '�쎍�뵻�궨',
		btnIgnore		: '恙썹븼',
		btnIgnoreAll	: '�뀲�깿恙썹븼',
		btnReplace		: '�룚餓�',
		btnReplaceAll	: '�뀲�깿�룚餓�',
		btnUndo			: '孃⒴렅',
		noSuggestions	: '- �꽒兩븃�겼�� -',
		progress		: '�꿱죱�떬耶쀦あ�윥訝���',
		noMispell		: '�떬耶쀦あ�윥若뚧닇竊싨쑋�쇊�뤎�떬耶쀩뙬沃�',
		noChanges		: '�떬耶쀦あ�윥若뚧닇竊싨쑋�쎍�뵻餓삡퐬�뼫耶�',
		oneChange		: '�떬耶쀦あ�윥若뚧닇竊싨쎍�뵻雅� 1 �뗥뼫耶�',
		manyChanges		: '�떬耶쀦あ�윥若뚧닇竊싨쎍�뵻雅� %1 �뗥뼫耶�',
		ieSpellDownload	: '弱싨쑋若됭짔�떬耶쀦あ�윥�뀇餓뜰�귝궓�삸�맔�꺍誤곭뤎�쑉訝뗨펹竊�'
	},

	smiley :
	{
		toolbar	: '烏ⓩ깄寧��솦',
		title	: '�룖�뀯烏ⓩ깄寧��솦',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 �뀇榮�'
	},

	numberedlist	: '渶②솦歷끻뼫',
	bulletedlist	: '�쟿�쎅歷끻뼫',
	indent			: '罌욃뒥潁��럲',
	outdent			: '歷쎾컩潁��럲',

	justify :
	{
		left	: '�씈藥�弱띺퐡',
		center	: '營�訝�',
		right	: '�씈�뤂弱띺퐡',
		block	: '藥��뤂弱띺퐡'
	},

	blockquote : '凉뺟뵪�뻼耶�',

	clipboard :
	{
		title		: '縕쇌툓',
		cutError	: '�뤺┰�솳�쉪若됧뀲�㎬Þ若싦툖�뀅鼇긺랬雍��솳�눎�땿�윿烏뚦돦訝뗥땿鵝쒌�귟쳦鵝욜뵪恙ユ뜼�뜷 (Ctrl/Cmd+X) �돦訝뗣��',
		copyError	: '�뤺┰�솳�쉪若됧뀲�㎬Þ若싦툖�뀅鼇긺랬雍��솳�눎�땿�윿烏뚩쨭獒썲땿鵝쒌�귟쳦鵝욜뵪恙ユ뜼�뜷 (Ctrl/Cmd+C) 筽뉓＝��',
		pasteMsg	: '獄뗤슴�뵪恙ユ뜼�뜷 (<strong>Ctrl/Cmd+V</strong>) 縕쇔댆訝뗦뼶���윜訝�訝��뙃訝� <strong>閻뷴츣</strong>',
		securityMsg	: '�썱�궨�뤺┰�솳�쉪若됧뀲�㎬Þ若싷펽�쑍渶②섞�솳�꽒力뺟쎍�렏耶섇룚�궓�쉪�돦縕쇘걀蘊뉑뼑竊뚩쳦�궓�눎烏뚦쑉�쑍誤뽫첊�꿱죱縕쇌툓�땿鵝쒌��',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: '�궓�꺍縕쇌툓�쉪�뻼耶쀤세阿롦삸�눎 Word 筽뉓＝�뚥푺竊뚩쳦�븦�궓�삸�맔誤곩뀍歷낂솮 Word �쉪�졏凉뤷풄�냽烏뚩꼈訝딉폕',
		toolbar			: '�눎 Word 縕쇌툓',
		title			: '�눎 Word 縕쇌툓',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '縕쇘궨榮붹뻼耶쀦졏凉�',
		title	: '縕쇘궨榮붹뻼耶쀦졏凉�'
	},

	templates :
	{
		button			: '與ｇ뎵',
		title			: '�뀱若방ª�뎵',
		options : 'Template Options', // MISSING
		insertOption	: '�룚餓ｅ렅�쐣�뀱若�',
		selectPromptMsg	: '獄뗩겦�뱡轝꿴뼀�븶�쉪與ｇ뎵<br> (�렅�쐣�쉪�뀱若밧컜�쐝熬ユ툍�솮):',
		emptyListMsg	: '(�꽒與ｇ뎵)'
	},

	showBlocks : '窈�鹽뷴�櫻�',

	stylesCombo :
	{
		label		: '與ｅ폀',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: '櫻딁킎�뀇榮졿ª凉�',
		panelTitle2	: '�뀱�겘�뀇榮졿ª凉�',
		panelTitle3	: '�돥餓뜹뀇榮졿ª凉�'
	},

	format :
	{
		label		: '�졏凉�',
		panelTitle	: '�졏凉�',

		tag_p		: '訝��닾',
		tag_pre		: '藥꿩졏凉뤷뙑',
		tag_address	: '鵝띶�',
		tag_h1		: '與숅죱 1',
		tag_h2		: '與숅죱 2',
		tag_h3		: '與숅죱 3',
		tag_h4		: '與숅죱 4',
		tag_h5		: '與숅죱 5',
		tag_h6		: '與숅죱 6',
		tag_div		: '訝��닾 (DIV)'
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
		label		: '耶쀩쳱',
		voiceLabel	: '耶쀩쳱',
		panelTitle	: '耶쀩쳱'
	},

	fontSize :
	{
		label		: '鸚㎩컦',
		voiceLabel	: '�뻼耶쀥ㄷ弱�',
		panelTitle	: '鸚㎩컦'
	},

	colorButton :
	{
		textColorTitle	: '�뻼耶쀩죴�돯',
		bgColorTitle	: '�깒�솺窈뤺돯',
		panelTitle		: 'Colors', // MISSING
		auto			: '�눎�땿',
		more			: '�쎍鸚싮죴�돯��'
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
		title			: '�뜵�셽�떬野ユあ�윥',
		opera_title		: 'Not supported by Opera', // MISSING
		enable			: '�븶�뵪�뜵�셽�떬野ユあ�윥',
		disable			: '�뿙�뻾�뜵�셽�떬野ユあ�윥',
		about			: '�뿙�뼹�뜵�셽�떬野ユあ�윥',
		toggle			: '�븶�뵪竊뤻뿙�뻾�뜵�셽�떬野ユあ�윥',
		options			: '�겦�쟿',
		langs			: '沃욆�',
		moreSuggestions	: '�쎍鸚싨떬野ュ뻠鈺�',
		ignore			: '恙썹븼',
		ignoreAll		: '�뀲�깿恙썹븼',
		addWord			: '曆삣뒥�뼫屋�',
		emptyDic		: '耶쀥끂�릫訝띷뇡�궨令�.',
		noSuggestions	: '�꽒兩븃�겼��',
		optionsTab		: '�겦�쟿',
		allCaps			: 'Ignore All-Caps Words', // MISSING
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: 'Ignore Words with Numbers', // MISSING

		languagesTab	: '沃욆�',

		dictionariesTab	: '耶쀥끂',
		dic_field_name	: 'Dictionary name', // MISSING
		dic_create		: 'Create', // MISSING
		dic_restore		: 'Restore', // MISSING
		dic_delete		: 'Delete', // MISSING
		dic_rename		: 'Rename', // MISSING
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: '�뿙�뼹'
	},

	about :
	{
		title		: '�뿙�뼹 CKEditor',
		dlgTitle	: '�뿙�뼹 CKEditor',
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: '鼇ゅ븦�닊�묊쉪泳꿰쳶餓η뜴�룚�쎍鸚싮뿙�뼹�뜑鈺곁쉪岳→겘',
		copy		: 'Copyright &copy; $1. All rights reserved.'
	},

	maximize : '��鸚㎩뙑',
	minimize : '��弱뤷뙑',

	fakeobjects :
	{
		anchor		: '�뙣容�',
		flash		: 'Flash �땿�빂',
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: '訝띷삇�돥餓�'
	},

	resize : '�떀�떭�뵻溫듿ㄷ弱�',

	colordialog :
	{
		title		: 'Select color', // MISSING
		options	:	'Color Options', // MISSING
		highlight	: 'Highlight', // MISSING
		selected	: 'Selected Color', // MISSING
		clear		: 'Clear' // MISSING
	},

	toolbarCollapse	: '�뒛�룧藥ε끁�젎',
	toolbarExpand	: '掠뺝�藥ε끁�젎',

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
		label : '�뻼餓뜹괵��',
		title : '�뻼餓뜹괵��',
		design : 'Design', // MISSING
		meta : 'Meta 蘊뉑뼑',
		chooseColor : 'Choose', // MISSING
		other : '<�끀餓�>',
		docTitle :	'�쟻�씊與숅죱',
		charset : 	'耶쀥뀇渶①♠',
		charsetOther : '�끀餓뽩춻�뀇渶①♠',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : '訝�閭먫첑楹�',
		charsetCT : '閭ｉ쳱訝��뻼 (Big5)',
		charsetCR : '�뼬�땳鸚ユ뻼',
		charsetGR : '躍뚩뇴�뻼',
		charsetJP : '�뿥�뻼',
		charsetKR : '�윋�뻼',
		charsetTR : '�쐿�녑끀�뻼',
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : '蜈욘춴沃욅내',
		docType : '�뻼餓띌줊�엹',
		docTypeOther : '�끀餓뽪뻼餓띌줊�엹',
		xhtmlDec : '�똿�맜 XHTML 若싩쑴',
		bgColor : '�깒�솺窈뤺돯',
		bgImage : '�깒�솺壤긷깗',
		bgFixed : '役�麗닷뜲',
		txtColor : '�뻼耶쀩죴�돯',
		margin : '�쟻�씊�굤�븣',
		marginTop : '訝�',
		marginLeft : '藥�',
		marginRight : '�뤂',
		marginBottom : '訝�',
		metaKeywords : '�뻼餓띄뇨凉뺡뿙�뜷耶� (�뵪�뜇壤��쀨솦[,]�늽�슂)',
		metaDescription : '�뻼餓띈お�삇',
		metaAuthor : '鵝쒑��',
		metaCopyright : '�뎵轝딀��쐣',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
