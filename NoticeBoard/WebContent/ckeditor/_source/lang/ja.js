/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Japanese language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ja'] =
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
	editorTitle : '�꺁�긿�긽�깇�궘�궧�깉�궓�깈�궍�궭, %1',
	editorHelp : '�깦�꺂�깤�겘 ALT 0 �굮�듉�걮�겍�걦�걽�걬�걚',

	// ARIA descriptions.
	toolbars	: 'Editor toolbars', // MISSING
	editor		: '�꺁�긿�긽�깇�궘�궧�깉�궓�깈�궍�궭',

	// Toolbar buttons without dialogs.
	source			: '�궫�꺖�궧',
	newPage			: '�뼭�걮�걚�깪�꺖�궦',
	save			: '岳앭춼',
	preview			: '�깤�꺃�깛�깷�꺖',
	cut				: '�늾�굤�룚�굤',
	copy			: '�궠�깞�꺖',
	paste			: '縕쇈굤餓섅걨',
	print			: '�뜲�댎',
	underline		: '訝뗧퇉',
	bold			: '鸚ゅ춻',
	italic			: '�뼔鵝�',
	selectAll		: '�걲�겧�겍�겦�뒢',
	removeFormat	: '�깢�궔�꺖�깯�긿�깉�뎷�솮',
	strike			: '�돀�걾易덀걮渶�',
	subscript		: '曆삠걟耶�',
	superscript		: '訝듾퍡�걤�뻼耶�',
	horizontalrule	: '與ょ쉥渶�',
	pagebreak		: '�뵻�깪�꺖�궦�뙼�뀯',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '�꺁�꺍�궚�뎷�솮',
	undo			: '�뀇�겓�댗�걲',
	redo			: '�굜�굤�쎍�걮',

	// Common messages and labels.
	common :
	{
		browseServer	: '�궢�꺖�깘�꺖�깣�꺀�궑�궣�꺖',
		url				: 'URL',
		protocol		: '�깤�꺆�깉�궠�꺂',
		upload			: '�궋�긿�깤�꺆�꺖�깋',
		uploadSubmit	: '�궢�꺖�깘�꺖�겓�곦에',
		image			: '�궎�깳�꺖�궦',
		flash			: 'Flash',
		form			: '�깢�궔�꺖�깲',
		checkbox		: '�긽�궒�긿�궚�깭�긿�궚�궧',
		radio			: '�꺀�궦�궕�깭�궭�꺍',
		textField		: '竊묋죱�깇�궘�궧�깉',
		textarea		: '�깇�궘�궧�깉�궓�꺁�궋',
		hiddenField		: '訝띶룾誤뽧깢�궍�꺖�꺂�깋',
		button			: '�깭�궭�꺍',
		select			: '�겦�뒢�깢�궍�꺖�꺂�깋',
		imageButton		: '�뵽�깗�깭�궭�꺍',
		notSet			: '<�겒�걮>',
		id				: 'Id',
		name			: 'Name掠욄��',
		langDir			: '�뻼耶쀨〃鼇섅겗�뼶�릲',
		langDirLtr		: '藥╉걢�굢�뤂 (LTR)',
		langDirRtl		: '�뤂�걢�굢藥� (RTL)',
		langCode		: '鼇�沃욁궠�꺖�깋',
		longDescr		: 'longdesc掠욄��(�빓�뻼沃ф삇)',
		cssClass		: '�궧�궭�궎�꺂�궥�꺖�깉�궚�꺀�궧',
		advisoryTitle	: 'Title掠욄��',
		cssStyle		: '�궧�궭�궎�꺂�궥�꺖�깉',
		ok				: 'OK',
		cancel			: '�궘�깵�꺍�궩�꺂',
		close			: '�뻾�걯�굥',
		preview			: '�깤�꺃�깛�깷�꺖',
		generalTab		: '�뀲�닾',
		advancedTab		: '遙섇벧�겒鼇�若�',
		validateNumberFailed : '�ㅳ걣�빊�겎�겘�걗�굤�겲�걵�굯',
		confirmNewPage	: '鸚됪쎍�냵若밤굮岳앭춼�걵�걳�� �뼭�걮�걚�깪�꺖�궦�굮�뼀�걚�겍�굚�굠�굧�걮�걚�겎�걮�굟�걝�걢竊�',
		confirmCancel	: '�궕�깤�궥�깾�꺍鼇�若싥굮鸚됪쎍�걮�겲�걮�걼�귙��궎�궋�꺆�궛�굮�뻾�걯�겍�굚�굠�굧�걮�걚�겎�걮�굟�걝�걢竊�',
		options			: '�궕�깤�궥�깾�꺍',
		target			: '�궭�꺖�궟�긿�깉',
		targetNew		: '�뼭�걮�걚�궑�궍�꺍�깋�궑 (_令븀쇋)',
		targetTop		: '��訝딃깿�궑�궍�꺍�깋�궑 (_�깉�긿�깤)',
		targetSelf		: '�릪�걯�궑�궍�꺍�깋�궑 (_�릪訝�)',
		targetParent	: '誤ゃ궑�궍�꺍�깋�궑 (_誤�)',
		langDirLTR		: '藥╉걢�굢�뤂 (LTR)',
		langDirRTL		: '�뤂�걢�굢藥� (RTL)',
		styles			: '�궧�궭�궎�꺂',
		cssClasses		: '�궧�궭�궎�꺂�궥�꺖�깉�궚�꺀�궧',
		width			: '亮�',
		height			: '遙섅걬',
		align			: '烏뚧룂�걟',
		alignLeft		: '藥�',
		alignRight		: '�뤂',
		alignCenter		: '訝�鸚�',
		alignTop		: '訝�',
		alignMiddle		: '訝�鸚�',
		alignBottom		: '訝�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '遙섅걬�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidWidth	: '亮끹겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, �닶�뵪訝띶룾�꺗</span>'
	},

	contextmenu :
	{
		options : '�궠�꺍�깇�궘�궧�깉�깳�깑�깷�꺖�궕�깤�궥�깾�꺍'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�돶餘딀뻼耶쀦뙼�뀯',
		title		: '�돶餘딀뻼耶쀩겦�뒢',
		options : '�돶餘딀뻼耶쀣궕�깤�궥�깾�꺍'
	},

	// Link dialog.
	link :
	{
		toolbar		: '�꺁�꺍�궚�뙼�뀯/渶③썓',
		other 		: '<�걹�겗餓뽧겗>',
		menu		: '�꺁�꺍�궚渶③썓',
		title		: '�깗�궎�깙�꺖�꺁�꺍�궚',
		info		: '�깗�궎�깙�꺖�꺁�꺍�궚 �깄�젿',
		target		: '�궭�꺖�궟�긿�깉',
		upload		: '�궋�긿�깤�꺆�꺖�깋',
		advanced	: '遙섇벧�겒鼇�若�',
		type		: '�꺁�꺍�궚�궭�궎�깤',
		toUrl		: 'URL', // MISSING
		toAnchor	: '�걪�겗�깪�꺖�궦�겗�궋�꺍�궖�꺖',
		toEmail		: 'E-Mail',
		targetFrame		: '<�깢�꺃�꺖�깲>',
		targetPopup		: '<�깮�긿�깤�궋�긿�깤�궑�궍�꺍�깋�궑>',
		targetFrameName	: '�쎅�쉪�겗�깢�꺃�꺖�깲�릫',
		targetPopupName	: '�깮�긿�깤�궋�긿�깤�궑�궍�꺍�깋�궑�릫',
		popupFeatures	: '�깮�긿�깤�궋�긿�깤�궑�궍�꺍�깋�궑�돶孃�',
		popupResizable	: '�궢�궎�궨�룾鸚�',
		popupStatusBar	: '�궧�깇�꺖�궭�궧�깘�꺖',
		popupLocationBar: '�꺆�궞�꺖�궥�깾�꺍�깘�꺖',
		popupToolbar	: '�깂�꺖�꺂�깘�꺖',
		popupMenuBar	: '�깳�깑�깷�꺖�깘�꺖',
		popupFullScreen	: '�뀲�뵽�씊�깴�꺖�깋(IE)',
		popupScrollBars	: '�궧�궚�꺆�꺖�꺂�깘�꺖',
		popupDependent	: '�뼀�걚�걼�궑�궍�꺍�깋�궑�겓�ｅ땿�걮�겍�뻾�걯�굥 (Netscape)',
		popupLeft		: '藥�塋��걢�굢�겗佯㎪쮽�겎�뙁若�',
		popupTop		: '訝딁ク�걢�굢�겗佯㎪쮽�겎�뙁若�',
		id				: 'Id',
		langDir			: '�뻼耶쀨〃鼇섅겗�뼶�릲',
		langDirLTR		: '藥╉걢�굢�뤂 (LTR)',
		langDirRTL		: '�뤂�걢�굢藥� (RTL)',
		acccessKey		: '�궋�궚�궩�궧�궘�꺖',
		name			: 'Name掠욄��',
		langCode			: '鼇�沃욁궠�꺖�깋',
		tabIndex			: '�궭�깣�궎�꺍�깈�긿�궚�궧',
		advisoryTitle		: 'Title掠욄��',
		advisoryContentType	: 'Content Type掠욄��',
		cssClasses		: '�궧�궭�궎�꺂�궥�꺖�깉�궚�꺀�궧',
		charset			: '�꺁�꺍�궚charset掠욄��',
		styles			: '�궧�궭�궎�꺂�궥�꺖�깉',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '�궋�꺍�궖�꺖�굮�겦�뒢',
		anchorName		: '�궋�꺍�궖�꺖�릫',
		anchorId			: '�궓�꺃�깳�꺍�깉ID',
		emailAddress		: 'E-Mail �궋�깋�꺃�궧',
		emailSubject		: '餓뜹릫',
		emailBody		: '�쑍�뻼',
		noAnchors		: '(�깋�궘�깷�깳�꺍�깉�겓�걡�걚�겍�닶�뵪�룾�꺗�겒�궋�꺍�궖�꺖�겘�걗�굤�겲�걵�굯��)',
		noUrl			: '�꺁�꺍�궚URL�굮�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		noEmail			: '�깳�꺖�꺂�궋�깋�꺃�궧�굮�뀯�뒟�걮�겍�걦�걽�걬�걚��'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�궋�꺍�궖�꺖�뙼�뀯/渶③썓',
		menu		: '�궋�꺍�궖�꺖 �깤�꺆�깙�깇�궍',
		title		: '�궋�꺍�궖�꺖 �깤�꺆�깙�깇�궍',
		name		: '�궋�꺍�궖�꺖�릫',
		errorName	: '�궋�꺍�궖�꺖�릫�굮恙끹걳�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		remove		: 'Remove Anchor' // MISSING
	},

	// List style dialog
	list:
	{
		numberedTitle		: '餘듣맼�빁�뤇 �깤�꺆�깙�깇�궍',
		bulletedTitle		: '嶸뉑씉�쎑�걤 �깤�꺆�깙�깇�궍',
		type				: '�궭�궎�깤',
		start				: '�뼀冶�',
		validateStartNumber				:'�꺁�궧�깉�뼀冶뗧빁�뤇�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		circle				: '�쇋訝�',
		disc				: '容믢만',
		square				: '�썪鰲�',
		none				: '�겒�걮',
		notset				: '<�겒�걮>',
		armenian			: '�궋�꺂�깳�깑�궋�빊耶�',
		georgian			: '�궛�꺂�궦�궋�빊耶� (an, ban, gan, etc.)',
		lowerRoman			: '弱뤸뻼耶쀣꺆�꺖�깯�빊耶� (i, ii, iii, iv, v, etc.)',
		upperRoman			: '鸚㎪뻼耶쀣꺆�꺖�깯�빊耶� (I, II, III, IV, V, etc.)',
		lowerAlpha			: '弱뤸뻼耶쀣궋�꺂�깢�궊�깧�긿�깉 (a, b, c, d, e, etc.)',
		upperAlpha			: '鸚㎪뻼耶쀣궋�꺂�깢�궊�깧�긿�깉 (A, B, C, D, E, etc.)',
		lowerGreek			: '弱뤸뻼耶쀣궙�꺁�궥�깵�뻼耶� (alpha, beta, gamma, etc.)',
		decimal				: '�빊耶� (1, 2, 3, etc.)',
		decimalLeadingZero	: '訝듾퐤旅곥겓0�굮�겇�걨�걼�빊耶� (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '濾쒐뇨�걮�겍營��룢',
		find				: '濾쒐뇨',
		replace				: '營��걤�룢�걟',
		findWhat			: '濾쒐뇨�걲�굥�뻼耶쀥닓:',
		replaceWith			: '營��룢�걟�걲�굥�뻼耶쀥닓:',
		notFoundMsg			: '�뙁若싥걬�굦�걼�뻼耶쀥닓�겘誤뗣겇�걢�굤�겲�걵�굯�겎�걮�걼��',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '鸚㎪뻼耶쀣겏弱뤸뻼耶쀣굮�뙷�닪�걲�굥',
		matchWord			: '�뜕沃욃뜕鵝띲겎�렋�걲',
		matchCyclic			: '訝��뫅�걲�굥',
		replaceAll			: '�걲�겧�겍營��룢�걟',
		replaceSuccessMsg	: '%1 �뗧쉰�룢�걮�겲�걮�걼��'
	},

	// Table Dialog
	table :
	{
		toolbar		: '�깇�꺖�깣�꺂',
		title		: '�깇�꺖�깣�꺂 �깤�꺆�깙�깇�궍',
		menu		: '�깇�꺖�깣�꺂 �깤�꺆�깙�깇�궍',
		deleteTable	: '�깇�꺖�깣�꺂�뎷�솮',
		rows		: '烏�',
		columns		: '�닓',
		border		: '�깭�꺖���꺖�궢�궎�궨',
		widthPx		: '�깞�궚�궩�꺂',
		widthPc		: '�깙�꺖�궩�꺍�깉',
		widthUnit	: '�깺�깑�긿�깉',
		cellSpace	: '�궩�꺂�냵鵝숂쇋',
		cellPad		: '�궩�꺂�냵�뼋�슂',
		caption		: '�궘�깵�깤�궥�깾�꺍',
		summary		: '�깇�꺖�깣�꺂�겗礖귟쫨',
		headers		: '�깇�꺖�깣�꺂�깦�긿��(th)',
		headersNone		: '�겒�걮',
		headersColumn	: '�닜�굙�겗�닓�겗�겳',
		headersRow		: '�닜�굙�겗烏뚣겗�겳',
		headersBoth		: '訝→뼶',
		invalidRows		: '烏뚣겘0�굠�굤鸚㎯걤�겒�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidCols		: '�닓�겘0�굠�굤鸚㎯걤�겒�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidBorder	: '�깭�꺖���꺖�궢�궎�궨�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidWidth	: '亮끹겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidHeight	: '遙섅걬�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidCellSpacing	: '�궩�꺂�냵鵝숂쇋�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		invalidCellPadding	: '�궩�꺂�냵�뼋�슂�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',

		cell :
		{
			menu			: '�궩�꺂',
			insertBefore	: '�궩�꺂�겗�뎺�겓�뙼�뀯',
			insertAfter		: '�궩�꺂�겗孃뚣겓�뙼�뀯',
			deleteCell		: '�궩�꺂�뎷�솮',
			merge			: '�궩�꺂永먨릦',
			mergeRight		: '�뤂�겓永먨릦',
			mergeDown		: '訝뗣겓永먨릦',
			splitHorizontal	: '�궩�꺂�굮麗닷뭄�뼶�릲�늽�돯',
			splitVertical	: '�궩�꺂�굮�엩�쎍�뼶�릲�겓�늽�돯',
			title			: '�궩�꺂�깤�꺆�깙�깇�궍',
			cellType		: '�궩�꺂�궭�궎�깤',
			rowSpan			: '潁�亮�(烏뚧빊)',
			colSpan			: '與ゅ퉭(�닓�빊)',
			wordWrap		: '�뒛�굤瓦붵걮',
			hAlign			: '�궩�꺂與ゃ겗�빐�닓',
			vAlign			: '�궩�꺂潁╉겗�빐�닓',
			alignBaseline	: '�깧�꺖�궧�꺀�궎�꺍',
			bgColor			: '�깒�솺�돯',
			borderColor		: '�깭�꺖���꺖�궖�꺀�꺖',
			data			: '�깇�꺖�깣�꺂�깈�꺖�궭(td)',
			header			: '�깇�꺖�깣�꺂�깦�긿��(th)',
			yes				: 'Yes',
			no				: 'No',
			invalidWidth	: '�궩�꺂亮끹겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
			invalidHeight	: '�궩�꺂遙섅걬�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
			invalidRowSpan	: '潁�亮�(烏뚧빊)�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
			invalidColSpan	: '與ゅ퉭(�닓�빊)�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
			chooseColor		: '�돯�겗�겦�뒢'
		},

		row :
		{
			menu			: '烏�',
			insertBefore	: '烏뚣겗�뎺�겓�뙼�뀯',
			insertAfter		: '烏뚣겗孃뚣겓�뙼�뀯',
			deleteRow		: '烏뚦뎷�솮'
		},

		column :
		{
			menu			: '�궖�꺀�깲',
			insertBefore	: '�궖�꺀�깲�겗�뎺�겓�뙼�뀯',
			insertAfter		: '�궖�꺀�깲�겗孃뚣겓�뙼�뀯',
			deleteColumn	: '�닓�뎷�솮'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�깭�궭�꺍 �깤�꺆�깙�깇�궍',
		text		: '�깇�궘�궧�깉 (��)',
		type		: '�궭�궎�깤',
		typeBtn		: '�깭�궭�꺍',
		typeSbm		: '�곦에',
		typeRst		: '�꺁�궩�긿�깉'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�긽�궒�긿�궚�깭�긿�궚�궧 �깤�꺆�깙�깇�궍',
		radioTitle	: '�꺀�궦�궕�깭�궭�꺍 �깤�꺆�깙�깇�궍',
		value		: '��',
		selected	: '�겦�뒢歷덀겳'
	},

	// Form Dialog.
	form :
	{
		title		: '�깢�궔�꺖�깲 �깤�꺆�깙�깇�궍',
		menu		: '�깢�궔�꺖�깲 �깤�꺆�깙�깇�궍',
		action		: '�궋�궚�궥�깾�꺍',
		method		: '�깳�궫�긿�깋',
		encoding	: '�궓�꺍�궠�꺖�깈�궍�꺍�궛'
	},

	// Select Field Dialog.
	select :
	{
		title		: '�겦�뒢�깢�궍�꺖�꺂�깋 �깤�꺆�깙�깇�궍',
		selectInfo	: '�깄�젿',
		opAvail		: '�닶�뵪�룾�꺗�겒�궕�깤�궥�깾�꺍',
		value		: '�겦�뒢�쟿�쎅��',
		size		: '�궢�궎�궨',
		lines		: '烏�',
		chkMulti	: '筽뉑빊�쟿�쎅�겦�뒢�굮鼇긷룾',
		opText		: '�겦�뒢�쟿�쎅�릫',
		opValue		: '��',
		btnAdd		: '瓦썲뒥',
		btnModify	: '渶③썓',
		btnUp		: '訝듽겦',
		btnDown		: '訝뗣겦',
		btnSetValue : '�겦�뒢�걮�걼�ㅳ굮鼇�若�',
		btnDelete	: '�뎷�솮'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�깇�궘�궧�깉�궓�꺁�궋 �깤�꺆�깙�깇�궍',
		cols		: '�닓',
		rows		: '烏�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '竊묋죱�깇�궘�궧�깉 �깤�꺆�깙�깇�궍',
		name		: '�릫�뎺',
		value		: '��',
		charWidth	: '�궢�궎�궨',
		maxChars	: '��鸚㏝빓',
		type		: '�궭�궎�깤',
		typeText	: '�깇�궘�궧�깉',
		typePass	: '�깙�궧�꺈�꺖�깋�뀯�뒟'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '訝띶룾誤뽧깢�궍�꺖�꺂�깋 �깤�꺆�깙�깇�궍',
		name	: '�릫�뎺',
		value	: '��'
	},

	// Image Dialog.
	image :
	{
		title		: '�궎�깳�꺖�궦 �깤�꺆�깙�깇�궍',
		titleButton	: '�뵽�깗�깭�궭�꺍 �깤�꺆�깙�깇�궍',
		menu		: '�궎�깳�꺖�궦 �깤�꺆�깙�깇�궍',
		infoTab		: '�궎�깳�꺖�궦 �깄�젿',
		btnUpload	: '�궢�꺖�깘�꺖�겓�곦에',
		upload		: '�궋�긿�깤�꺆�꺖�깋',
		alt			: '餓ｆ쎘�깇�궘�궧�깉',
		lockRatio	: '�꺆�긿�궚驪붺럤',
		resetSize	: '�궢�궎�궨�꺁�궩�긿�깉',
		border		: '�깭�꺖���꺖',
		hSpace		: '與ら뼋�슂',
		vSpace		: '潁��뼋�슂',
		alertUrl	: '�궎�깳�꺖�궦�겗URL�굮�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		linkTab		: '�꺁�꺍�궚',
		button2Img	: '�겦�뒢�걮�걼�깭�궭�꺍�굮�뵽�깗�겓營��걤�룢�걟�겲�걲�걢竊�',
		img2Button	: '�겦�뒢�걮�걼�뵽�깗�굮�깭�궭�꺍�겓營��걤�룢�걟�겲�걲�걢竊�',
		urlMissing	: '�궎�깳�꺖�궦�겗URL�굮�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		validateBorder	: '�깭�꺖���꺖�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		validateHSpace	: '與ら뼋�슂�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		validateVSpace	: '潁��뼋�슂�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash �깤�꺆�깙�깇�궍',
		propertiesTab	: '�깤�꺆�깙�깇�궍',
		title			: 'Flash �깤�꺆�깙�깇�궍',
		chkPlay			: '�냽�뵟',
		chkLoop			: '�꺂�꺖�깤�냽�뵟',
		chkMenu			: 'Flash�깳�깑�깷�꺖�룾�꺗',
		chkFull			: '�깢�꺂�궧�궚�꺁�꺖�꺍鼇긷룾',
 		scale			: '�떋鸚㎫리弱뤺Þ若�',
		scaleAll		: '�걲�겧�겍烏①ㅊ',
		scaleNoBorder	: '鸚뽧걣誤뗣걟�겒�걚礪섅겓�떋鸚�',
		scaleFit		: '訝듾툔藥��뤂�겓�깢�궍�긿�깉',
		access			: '�궧�깤�꺁�궚�깉�궋�궚�궩�궧(AllowScriptAccess)',
		accessAlways	: '�걲�겧�겍�겗�졃�릦�겓�싦에�룾�꺗(Always)',
		accessSameDomain: '�릪訝��깋�깳�궎�꺍�겗�겳�겓�싦에�룾�꺗(Same domain)',
		accessNever		: '�걲�겧�겍�겗�졃�릦�겓�싦에訝띶룾�꺗(Never)',
		alignAbsBottom	: '訝뗩깿(永뜹�양쉪)',
		alignAbsMiddle	: '訝�鸚�(永뜹�양쉪)',
		alignBaseline	: '�깧�꺖�궧�꺀�궎�꺍',
		alignTextTop	: '�깇�궘�궧�깉訝딃깿',
		quality			: '�뵽蘊�',
		qualityBest		: '�뱚蘊ゅ꽛�뀍',
		qualityHigh		: '遙�',
		qualityAutoHigh	: '�눎�땿/遙�',
		qualityMedium	: '訝�',
		qualityAutoLow	: '�눎�땿/鵝�',
		qualityLow		: '鵝�',
		windowModeWindow: '與숁틬',
		windowModeOpaque: '�깒�솺�굮訝띺�뤸삇鼇�若�',
		windowModeTransparent : '�깒�솺�굮�뤻걥鼇�若�',
		windowMode		: '�궑�궍�꺍�깋�궑�깴�꺖�깋',
		flashvars		: '�깢�꺀�긿�궥�깷�겓歷▲걲鸚됪빊(FlashVars)',
		bgcolor			: '�깒�솺�돯',
		hSpace			: '與ら뼋�슂',
		vSpace			: '潁��뼋�슂',
		validateSrc		: '�꺁�꺍�궚URL�굮�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		validateHSpace	: '與ら뼋�슂�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��',
		validateVSpace	: '潁��뼋�슂�겘�빊�ㅳ겎�뀯�뒟�걮�겍�걦�걽�걬�걚��'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�궧�깪�꺂�긽�궒�긿�궚',
		title			: '�궧�깪�꺂�긽�궒�긿�궚',
		notAvailable	: '�뵵�걮鼇녈걗�굤�겲�걵�굯�곭뤎�쑉�궢�꺖�깛�궧�굮�닶�뵪�걲�굥�걪�겏�걣�겎�걤�겲�걵�굯',
		errorLoading	: '�궋�깤�꺁�궞�꺖�궥�깾�꺍�궢�꺖�깛�궧�깫�궧�깉沃�渦쇈겳�궓�꺀�꺖: %s.',
		notInDic		: '渦욄쎑�겓�걗�굤�겲�걵�굯',
		changeTo		: '鸚됪쎍',
		btnIgnore		: '�꽒誤�',
		btnIgnoreAll	: '�걲�겧�겍�꽒誤�',
		btnReplace		: '營��룢',
		btnReplaceAll	: '�걲�겧�겍營��룢',
		btnUndo			: '�굜�굤�쎍�걮',
		noSuggestions	: '- 屋꿨퐪�겒�걮 -',
		progress		: '�궧�깪�꺂�긽�궒�긿�궚�눇�릤訝�...',
		noMispell		: '�궧�깪�꺂�긽�궒�긿�궚若뚥틙: �궧�깪�꺂�겗沃ㅳ굤�겘�걗�굤�겲�걵�굯�겎�걮�걼',
		noChanges		: '�궧�깪�꺂�긽�궒�긿�궚若뚥틙: 沃욃룯�겘鸚됪쎍�걬�굦�겲�걵�굯�겎�걮�걼',
		oneChange		: '�궧�깪�꺂�긽�궒�긿�궚若뚥틙: 竊묋첑�룯鸚됪쎍�걬�굦�겲�걮�걼',
		manyChanges		: '�궧�깪�꺂�긽�궒�긿�궚若뚥틙: %1 沃욃룯鸚됪쎍�걬�굦�겲�걮�걼',
		ieSpellDownload	: '�궧�깪�꺂�긽�궒�긿�궖�꺖�걣�궎�꺍�궧�깉�꺖�꺂�걬�굦�겍�걚�겲�걵�굯�귚퍓�걲�걧���궑�꺍�꺆�꺖�깋�걮�겲�걲�걢?'
	},

	smiley :
	{
		toolbar	: '永득뻼耶�',
		title	: '窈붹뻼耶쀦뙼�뀯',
		options : '永득뻼耶쀣궕�깤�궥�깾�꺍'
	},

	elementsPath :
	{
		eleLabel : '�궓�꺃�깳�꺍�깉�깙�궧',
		eleTitle : '%1 �궓�꺃�깳�꺍�깉'
	},

	numberedlist	: '餘듣맼�빁�뤇',
	bulletedlist	: '嶸뉑씉�쎑�걤',
	indent			: '�궎�꺍�깈�꺍�깉',
	outdent			: '�궎�꺍�깈�꺍�깉鰲ｉ솮',

	justify :
	{
		left	: '藥��룂�걟',
		center	: '訝�鸚��룂�걟',
		right	: '�뤂�룂�걟',
		block	: '訝←ク�룂�걟'
	},

	blockquote : '�깣�꺆�긿�궚凉뺟뵪',

	clipboard :
	{
		title		: '縕쇈굤餓섅걨',
		cutError	: '�깣�꺀�궑�궣�꺖�겗�궩�궘�깷�꺁�깇�궍鼇�若싥겓�굠�굤�궓�깈�궍�궭�겗�늾�굤�룚�굤�뱧鵝쒌걣�눎�땿�겎若잒죱�걲�굥�걪�겏�걣�겎�걤�겲�걵�굯�귛츪烏뚣걲�굥�겓�겘�뎸�땿�겎�궘�꺖�깭�꺖�깋�겗(Ctrl/Cmd+X)�굮鵝욜뵪�걮�겍�걦�걽�걬�걚��',
		copyError	: '�깣�꺀�궑�궣�꺖�겗�궩�궘�깷�꺁�깇�궍鼇�若싥겓�굠�굤�궓�깈�궍�궭�겗�궠�깞�꺖�뱧鵝쒌걣�눎�땿�겎若잒죱�걲�굥�걪�겏�걣�겎�걤�겲�걵�굯�귛츪烏뚣걲�굥�겓�겘�뎸�땿�겎�궘�꺖�깭�꺖�깋�겗(Ctrl/Cmd+C)�굮鵝욜뵪�걮�겍�걦�걽�걬�걚��',
		pasteMsg	: '�궘�꺖�깭�꺖�깋(<STRONG>Ctrl/Cmd+V</STRONG>)�굮鵝욜뵪�걮�겍�곫А�겗�뀯�뒟�궓�꺁�궋�냵�겎縕쇈겂�겍��<STRONG>OK</STRONG>�굮�듉�걮�겍�걦�걽�걬�걚��',
		securityMsg	: '�깣�꺀�궑�궣�겗�궩�궘�깷�꺁�깇�궍鼇�若싥겓�굠�굤�곥궓�깈�궍�궭�겘�궚�꺁�긿�깤�깭�꺖�깋�꺕�깈�꺖�궭�겓�쎍�렏�궋�궚�궩�궧�걲�굥�걪�겏�걣�겎�걤�겲�걵�굯�귙걪�겗�궑�궍�꺍�깋�궑�겘縕쇈굤餓섅걨�뱧鵝쒌굮烏뚣걝佯╉겓烏①ㅊ�걬�굦�겲�걲��',
		pasteArea	: '縕쇈굤餓섅걨�졃��'
	},

	pastefromword :
	{
		confirmCleanup	: '縕쇈굤餓섅걨�굮烏뚣걝�깇�궘�궧�깉�겘�곥꺈�꺖�깋�뻼塋졼걢�굢�궠�깞�꺖�걬�굦�굠�걝�겏�걮�겍�걚�겲�걲�귟꼈�굤餓섅걨�굥�뎺�겓�궚�꺁�꺖�깑�꺍�궛�굮烏뚣걚�겲�걲�걢竊�',
		toolbar			: '�꺈�꺖�깋�뻼塋졼걢�굢縕쇈굤餓섅걨',
		title			: '�꺈�꺖�깋�뻼塋졼걢�굢縕쇈굤餓섅걨',
		error			: '�냵�깿�궓�꺀�꺖�겓�굠�굤縕쇈굤餓섅걨�걼�깈�꺖�궭�걣�궚�꺁�궋�겎�걤�겲�걵�굯�겎�걮�걼'
	},

	pasteText :
	{
		button	: '�깤�꺃�꺖�꺍�깇�궘�궧�깉縕쇈굤餓섅걨',
		title	: '�깤�꺃�꺖�꺍�깇�궘�궧�깉縕쇈굤餓섅걨'
	},

	templates :
	{
		button			: '�깇�꺍�깤�꺃�꺖�깉(�썪壤�)',
		title			: '�깇�꺍�깤�꺃�꺖�깉�냵若�',
		options : '�깇�꺍�깤�꺃�꺖�깉�궕�깤�궥�깾�꺍',
		insertOption	: '�뤎�쑉�겗�궓�깈�궍�궭�겗�냵若밤겏營��룢�걟�굮�걮�겲�걲',
		selectPromptMsg	: '�궓�깈�궍�궭�꺖�겎鵝욜뵪�걲�굥�깇�꺍�깤�꺃�꺖�깉�굮�겦�뒢�걮�겍�걦�걽�걬�걚��<br>(�뤎�쑉�겗�궓�깈�궍�궭�겗�냵若밤겘鸚긱굩�굦�겲�걲):',
		emptyListMsg	: '(�깇�꺍�깤�꺃�꺖�깉�걣若싩쑴�걬�굦�겍�걚�겲�걵�굯)'
	},

	showBlocks : '�깣�꺆�긿�궚烏①ㅊ',

	stylesCombo :
	{
		label		: '�궧�궭�궎�꺂',
		panelTitle	: '�궧�궭�궎�꺂',
		panelTitle1	: '�깣�꺆�긿�궚�궧�궭�궎�꺂',
		panelTitle2	: '�궎�꺍�꺀�궎�꺍�궧�궭�궎�꺂',
		panelTitle3	: '�궕�깣�궦�궒�궚�깉�궧�궭�궎�꺂'
	},

	format :
	{
		label		: '�깢�궔�꺖�깯�긿�깉',
		panelTitle	: '�깢�궔�꺖�깯�긿�깉',

		tag_p		: '與숁틬',
		tag_pre		: '�쎑凉뤶퍡�걤',
		tag_address	: '�궋�깋�꺃�궧',
		tag_h1		: '誤뗥눣�걮 1',
		tag_h2		: '誤뗥눣�걮 2',
		tag_h3		: '誤뗥눣�걮 3',
		tag_h4		: '誤뗥눣�걮 4',
		tag_h5		: '誤뗥눣�걮 5',
		tag_h6		: '誤뗥눣�걮 6',
		tag_div		: '與숁틬 (DIV)'
	},

	div :
	{
		title				: 'Div�궠�꺍�깇�깏',
		toolbar				: 'Div�궠�꺍�깇�깏',
		cssClassInputLabel	: '�궧�궭�궎�꺂�궥�꺖�깉�궚�꺀�궧',
		styleSelectLabel	: '�궧�궭�궎�꺂',
		IdInputLabel		: 'Id', // MISSING
		languageCodeInputLabel	: ' 鼇�沃욁궠�꺖�깋',
		inlineStyleInputLabel	: '�궎�꺍�꺀�궎�꺍�궧�궭�궎�꺂',
		advisoryTitleInputLabel	: 'Title掠욄��',
		langDirLabel		: '�뻼耶쀨〃鼇섅겗�뼶�릲',
		langDirLTRLabel		: '藥╉걢�굢�뤂 (LTR)',
		langDirRTLLabel		: '�뤂�걢�굢藥� (RTL)',
		edit				: 'Div�궠�꺍�깇�깏 渶③썓',
		remove				: 'Div�궠�꺍�깇�깏 �뎷�솮'
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
		label		: '�깢�궔�꺍�깉',
		voiceLabel	: '�깢�궔�꺍�깉',
		panelTitle	: '�깢�궔�꺍�깉'
	},

	fontSize :
	{
		label		: '�궢�궎�궨',
		voiceLabel	: '�깢�궔�꺍�깉�궢�궎�궨',
		panelTitle	: '�궢�궎�궨'
	},

	colorButton :
	{
		textColorTitle	: '�깇�궘�궧�깉�돯',
		bgColorTitle	: '�깒�솺�돯',
		panelTitle		: '�돯',
		auto			: '�눎�땿',
		more			: '�걹�겗餓뽧겗�돯...'
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
		title			: '�궧�깪�꺂�긽�궒�긿�궚鼇�若�(SCAYT)',
		opera_title		: 'Opera�겎�겘�궢�깮�꺖�깉�걬�굦�겲�걵�굯',
		enable			: 'SCAYT�쐣�듅',
		disable			: 'SCAYT�꽒�듅',
		about			: 'SCAYT絶딉풛節곤슨絶욑쉰絶�',
		toggle			: 'SCAYT�늾�쎘',
		options			: '�궕�깤�궥�깾�꺍',
		langs			: '鼇�沃�',
		moreSuggestions	: '餓뽧겗�숃짒',
		ignore			: '�꽒誤�',
		ignoreAll		: '�걲�겧�겍�꽒誤�',
		addWord			: '沃욃룯瓦썲뒥',
		emptyDic		: '渦욄쎑�릫�겘恙끹걳�뀯�뒟�걮�겍�걦�걽�걬�걚',
		noSuggestions	: '屋꿨퐪�겒�걮',
		optionsTab		: '�궕�깤�궥�깾�꺍',
		allCaps			: '�뀲�겍鸚㎪뻼耶쀣겗�뜕沃욁굮�꽒誤�',
		ignoreDomainNames : '�깋�깳�궎�꺍�릫�굮�꽒誤�',
		mixedCase		: '鸚㎪뻼耶쀥컦�뻼耶쀦렁�쑉�겗�뜕沃욁굮�꽒誤�',
		mixedWithDigits	: '�빊耶쀤퍡�걤�뜕沃욁굮�꽒誤�',

		languagesTab	: '鼇�沃�',

		dictionariesTab	: '渦욄쎑',
		dic_field_name	: '渦욄쎑�릫',
		dic_create		: '�쇉�뙯',
		dic_restore		: '�뀇�겓�댗�걲',
		dic_delete		: '�뎷�솮',
		dic_rename		: '�릫�뎺鸚됪쎍',
		dic_info		: '冶뗣굙�깺�꺖�궣�꺖�깈�궍�꺃�궚�깉�꺁�겘�갅ookie�겓岳앭춼�걬�굦�겲�걲�귚퐜�걮 Cookie �겘�궢�궎�궨�겓�댍�솏�걣�걗�굤�겲�걲�귙깺�꺖�궣�꺖�깈�궍�꺃�궚�깉�꺁�걣Cookie�겓岳앭춼�겎�걤�겒�걚�궢�궎�궨�겓�댆�걫�걲�굥�겏�깈�궍�꺃�궚�깉�꺁�겘�궢�꺖�깘�꺖訝듽겓岳앭춼�걬�굦�겲�걲�귛�뗤볶�겗�깈�궍�꺃�궚�깉�꺁�굮�궢�꺖�깘�꺖訝듽겓岳앭춼�걲�굥�겓�겘�곥깈�궍�꺃�궚�깉�꺁�릫�굮�삇鹽뷩걲�굥恙낁쫨�걣�걗�굤�겲�걲�귙굚�걮�뿢�겓岳앭춼�걬�굦�걼�깈�궍�꺃�궚�깉�꺁�걣�걗�굥�졃�릦�곥걹�겗�릫�뎺�굮�뀯�뒟�걮�곩뀇�겓�댗�걲�깭�궭�꺍�굮�듉�걮�겍�걦�걽�걬�걚��',

		aboutTab		: '�깘�꺖�궦�깾�꺍�깄�젿'
	},

	about :
	{
		title		: 'CKEditor�깘�꺖�궦�깾�꺍�깄�젿',
		dlgTitle	: 'CKEditor�깘�꺖�궦�깾�꺍�깄�젿',
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: '�꺀�궎�궩�꺍�궧�깄�젿�겗屋녕눗�겘�궑�궒�깣�궢�궎�깉�겓�겍閻븃첀�걮�겍�걦�걽�걬�걚:',
		copy		: 'Copyright &copy; $1. All rights reserved.'
	},

	maximize : '��鸚㎩뙑',
	minimize : '��弱뤷뙑',

	fakeobjects :
	{
		anchor		: '�궋�꺍�궖�꺖',
		flash		: 'Flash Animation',
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: 'Unknown Object'
	},

	resize : '�깋�꺀�긿�궛�걮�겍�꺁�궢�궎�궨',

	colordialog :
	{
		title		: '�돯�겦�뒢',
		options	:	'�궖�꺀�꺖�궕�깤�궥�깾�꺍',
		highlight	: '�깗�궎�꺀�궎�깉',
		selected	: '�겦�뒢�걬�굦�걼�돯',
		clear		: '�궚�꺁�궋'
	},

	toolbarCollapse	: '�깂�꺖�꺂�깘�꺖�굮�뻾�걯�굥',
	toolbarExpand	: '�깂�꺖�꺂�깘�꺖�굮�뼀�걦',

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
		ltr : '�깇�궘�궧�깉�겗�릲�걤 : 藥╉걢�굢�뤂�겦',
		rtl : '�깇�궘�궧�깉�겗�릲�걤 : �뤂�걢�굢藥╉겦'
	},

	docprops :
	{
		label : '�뻼�쎑 �깤�꺆�깙�깇�궍',
		title : '�뻼�쎑 �깤�꺆�깙�깇�궍',
		design : 'Design', // MISSING
		meta : '�깳�궭�깈�꺖�궭',
		chooseColor : '�돯�겗�겦�뒢',
		other : '<�걹�겗餓뽧겗>',
		docTitle :	'�깪�꺖�궦�궭�궎�깉�꺂',
		charset : 	'�뻼耶쀣궩�긿�깉寧��뤇�뙑',
		charsetOther : '餓뽧겗�뻼耶쀣궩�긿�깉寧��뤇�뙑',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : 'Central European', // MISSING
		charsetCT : 'Chinese Traditional (Big5)', // MISSING
		charsetCR : 'Cyrillic', // MISSING
		charsetGR : 'Greek', // MISSING
		charsetJP : 'Japanese', // MISSING
		charsetKR : 'Korean', // MISSING
		charsetTR : 'Turkish', // MISSING
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : 'Western European',
		docType : '�뻼�쎑�궭�궎�깤�깦�긿���꺖',
		docTypeOther : '�걹�겗餓뽪뻼�쎑�궭�궎�깤�깦�긿���꺖',
		xhtmlDec : 'XHTML若ｈ��굮�궎�꺍�궚�꺂�꺖�깋',
		bgColor : '�깒�솺�돯',
		bgImage : '�깒�솺�뵽�깗 URL',
		bgFixed : '�궧�궚�꺆�꺖�꺂�걮�겒�걚�깒�솺',
		txtColor : '�깇�궘�궧�깉�돯',
		margin : '�깪�꺖�궦�꺕�깯�꺖�궦�꺍',
		marginTop : '訝딃깿',
		marginLeft : '藥�',
		marginRight : '�뤂',
		marginBottom : '訝뗩깿',
		metaKeywords : '�뻼�쎑�겗�궘�꺖�꺈�꺖�깋(�궖�꺍�깯�뙷�늾�굤)',
		metaDescription : '�뻼�쎑�겗礖귟쫨',
		metaAuthor : '�뻼�쎑�겗鵝쒑��',
		metaCopyright : '�뻼�쎑�겗�몭鵝쒏Ł',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
