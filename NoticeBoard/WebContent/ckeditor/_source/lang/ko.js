/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Korean language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ko'] =
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
	source			: '�냼�뒪',
	newPage			: '�깉 臾몄꽌',
	save			: '���옣�븯湲�',
	preview			: '誘몃━蹂닿린',
	cut				: '�옒�씪�궡湲�',
	copy			: '蹂듭궗�븯湲�',
	paste			: '遺숈뿬�꽔湲�',
	print			: '�씤�뇙�븯湲�',
	underline		: '諛묒쨪',
	bold			: '吏꾪븯寃�',
	italic			: '�씠�뀛由�',
	selectAll		: '�쟾泥댁꽑�깮',
	removeFormat	: '�룷留� 吏��슦湲�',
	strike			: '痍⑥냼�꽑',
	subscript		: '�븘�옒 泥⑥옄',
	superscript		: '�쐞 泥⑥옄',
	horizontalrule	: '�닔�룊�꽑 �궫�엯',
	pagebreak		: 'Insert Page Break for Printing', // MISSING
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '留곹겕 �궘�젣',
	undo			: '痍⑥냼',
	redo			: '�옱�떎�뻾',

	// Common messages and labels.
	common :
	{
		browseServer	: '�꽌踰� 蹂닿린',
		url				: 'URL',
		protocol		: '�봽濡쒗넗肄�',
		upload			: '�뾽濡쒕뱶',
		uploadSubmit	: '�꽌踰꾨줈 �쟾�넚',
		image			: '�씠誘몄�',
		flash			: '�뵆�옒�돩',
		form			: '�뤌',
		checkbox		: '泥댄겕諛뺤뒪',
		radio			: '�씪�뵒�삤踰꾪듉',
		textField		: '�엯�젰�븘�뱶',
		textarea		: '�엯�젰�쁺�뿭',
		hiddenField		: '�닲源��븘�뱶',
		button			: '踰꾪듉',
		select			: '�렯移⑤ぉ濡�',
		imageButton		: '�씠誘몄�踰꾪듉',
		notSet			: '<�꽕�젙�릺吏� �븡�쓬>',
		id				: 'ID',
		name			: 'Name',
		langDir			: '�벐湲� 諛⑺뼢',
		langDirLtr		: '�쇊履쎌뿉�꽌 �삤瑜몄そ (LTR)',
		langDirRtl		: '�삤瑜몄そ�뿉�꽌 �쇊履� (RTL)',
		langCode		: '�뼵�뼱 肄붾뱶',
		longDescr		: 'URL �꽕紐�',
		cssClass		: 'Stylesheet Classes',
		advisoryTitle	: 'Advisory Title',
		cssStyle		: 'Style',
		ok				: '�삁',
		cancel			: '�븘�땲�삤',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'General', // MISSING
		advancedTab		: '�옄�꽭�엳',
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
		width			: '�꼫鍮�',
		height			: '�넂�씠',
		align			: '�젙�젹',
		alignLeft		: '�쇊履�',
		alignRight		: '�삤瑜몄そ',
		alignCenter		: '媛��슫�뜲',
		alignTop		: '�쐞',
		alignMiddle		: '以묎컙',
		alignBottom		: '�븘�옒',
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
		toolbar		: '�듅�닔臾몄옄 �궫�엯',
		title		: '�듅�닔臾몄옄 �꽑�깮',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '留곹겕 �궫�엯/蹂�寃�',
		other 		: '<湲고�>',
		menu		: '留곹겕 �닔�젙',
		title		: '留곹겕',
		info		: '留곹겕 �젙蹂�',
		target		: '��寃�',
		upload		: '�뾽濡쒕뱶',
		advanced	: '�옄�꽭�엳',
		type		: '留곹겕 醫낅쪟',
		toUrl		: 'URL', // MISSING
		toAnchor	: '梨낃컝�뵾',
		toEmail		: '�씠硫붿씪',
		targetFrame		: '<�봽�젅�엫>',
		targetPopup		: '<�뙘�뾽李�>',
		targetFrameName	: '��寃� �봽�젅�엫 �씠由�',
		targetPopupName	: '�뙘�뾽李� �씠由�',
		popupFeatures	: '�뙘�뾽李� �꽕�젙',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '�긽�깭諛�',
		popupLocationBar: '二쇱냼�몴�떆以�',
		popupToolbar	: '�댋諛�',
		popupMenuBar	: '硫붾돱諛�',
		popupFullScreen	: '�쟾泥댄솕硫� (IE)',
		popupScrollBars	: '�뒪�겕濡ㅻ컮',
		popupDependent	: 'Dependent (Netscape)',
		popupLeft		: '�쇊履� �쐞移�',
		popupTop		: '�쐵履� �쐞移�',
		id				: 'Id', // MISSING
		langDir			: '�벐湲� 諛⑺뼢',
		langDirLTR		: '�쇊履쎌뿉�꽌 �삤瑜몄そ (LTR)',
		langDirRTL		: '�삤瑜몄そ�뿉�꽌 �쇊履� (RTL)',
		acccessKey		: '�뿊�꽭�뒪 �궎',
		name			: 'Name',
		langCode			: '�벐湲� 諛⑺뼢',
		tabIndex			: '�꺆 �닚�꽌',
		advisoryTitle		: 'Advisory Title',
		advisoryContentType	: 'Advisory Content Type',
		cssClasses		: 'Stylesheet Classes',
		charset			: 'Linked Resource Charset',
		styles			: 'Style',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '梨낃컝�뵾 �꽑�깮',
		anchorName		: '梨낃컝�뵾 �씠由�',
		anchorId			: '梨낃컝�뵾 ID',
		emailAddress		: '�씠硫붿씪 二쇱냼',
		emailSubject		: '�젣紐�',
		emailBody		: '�궡�슜',
		noAnchors		: '(臾몄꽌�뿉 梨낃컝�뵾媛� �뾾�뒿�땲�떎.)',
		noUrl			: '留곹겕 URL�쓣 �엯�젰�븯�떗�떆�슂.',
		noEmail			: '�씠硫붿씪二쇱냼瑜� �엯�젰�븯�떗�떆�슂.'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '梨낃컝�뵾 �궫�엯/蹂�寃�',
		menu		: '梨낃컝�뵾 �냽�꽦',
		title		: '梨낃컝�뵾 �냽�꽦',
		name		: '梨낃컝�뵾 �씠由�',
		errorName	: '梨낃컝�뵾 �씠由꾩쓣 �엯�젰�븯�떗�떆�슂.',
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
		title				: '李얘린 & 諛붽씀湲�',
		find				: '李얘린',
		replace				: '諛붽씀湲�',
		findWhat			: '李얠쓣 臾몄옄�뿴:',
		replaceWith			: '諛붽� 臾몄옄�뿴:',
		notFoundMsg			: '臾몄옄�뿴�쓣 李얠쓣 �닔 �뾾�뒿�땲�떎.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '���냼臾몄옄 援щ텇',
		matchWord			: '�삩�쟾�븳 �떒�뼱',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '紐⑤몢 諛붽씀湲�',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '�몴',
		title		: '�몴 �꽕�젙',
		menu		: '�몴 �꽕�젙',
		deleteTable	: '�몴 �궘�젣',
		rows		: '媛�濡쒖쨪',
		columns		: '�꽭濡쒖쨪',
		border		: '�뀒�몢由� �겕湲�',
		widthPx		: '�뵿��',
		widthPc		: '�띁�꽱�듃',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '�� 媛꾧꺽',
		cellPad		: '�� �뿬諛�',
		caption		: '罹≪뀡',
		summary		: 'Summary', // MISSING
		headers		: 'Headers', // MISSING
		headersNone		: 'None', // MISSING
		headersColumn	: 'First column', // MISSING
		headersRow		: 'First Row', // MISSING
		headersBoth		: 'Both', // MISSING
		invalidRows		: 'Number of rows must be a number greater than 0.', // MISSING
		invalidCols		: 'Number of columns must be a number greater than 0.', // MISSING
		invalidBorder	: 'Border size must be a number.', // MISSING
		invalidWidth	: 'Table width must be a number.', // MISSING
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Cell spacing must be a positive number.', // MISSING
		invalidCellPadding	: 'Cell padding must be a positive number.', // MISSING

		cell :
		{
			menu			: '��/移�(Cell)',
			insertBefore	: '�븵�뿉 ��/移� �궫�엯',
			insertAfter		: '�뮘�뿉 ��/移� �궫�엯',
			deleteCell		: '�� �궘�젣',
			merge			: '�� �빀移섍린',
			mergeRight		: '�삤瑜몄そ 萸됱튂湲�',
			mergeDown		: '�쇊履� 萸됱튂湲�',
			splitHorizontal	: '�닔�룊 �굹�늻湲�',
			splitVertical	: '�닔吏� �굹�늻湲�',
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
			menu			: '�뻾(Row)',
			insertBefore	: '�븵�뿉 �뻾 �궫�엯',
			insertAfter		: '�뮘�뿉 �뻾 �궫�엯',
			deleteRow		: '媛�濡쒖쨪 �궘�젣'
		},

		column :
		{
			menu			: '�뿴(Column)',
			insertBefore	: '�븵�뿉 �뿴 �궫�엯',
			insertAfter		: '�뮘�뿉 �뿴 �궫�엯',
			deleteColumn	: '�꽭濡쒖쨪 �궘�젣'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '踰꾪듉 �냽�꽦',
		text		: '踰꾪듉湲��옄(媛�)',
		type		: '踰꾪듉醫낅쪟',
		typeBtn		: 'Button', // MISSING
		typeSbm		: 'Submit', // MISSING
		typeRst		: 'Reset' // MISSING
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '泥댄겕諛뺤뒪 �냽�꽦',
		radioTitle	: '�씪�뵒�삤踰꾪듉 �냽�꽦',
		value		: '媛�',
		selected	: '�꽑�깮�맖'
	},

	// Form Dialog.
	form :
	{
		title		: '�뤌 �냽�꽦',
		menu		: '�뤌 �냽�꽦',
		action		: '�떎�뻾寃쎈줈(Action)',
		method		: '諛⑸쾿(Method)',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: '�렯移⑤ぉ濡� �냽�꽦',
		selectInfo	: '�젙蹂�',
		opAvail		: '�꽑�깮�샃�뀡',
		value		: '媛�',
		size		: '�꽭濡쒗겕湲�',
		lines		: '以�',
		chkMulti	: '�뿬�윭�빆紐� �꽑�깮 �뿀�슜',
		opText		: '�씠由�',
		opValue		: '媛�',
		btnAdd		: '異붽�',
		btnModify	: '蹂�寃�',
		btnUp		: '�쐞濡�',
		btnDown		: '�븘�옒濡�',
		btnSetValue : '�꽑�깮�맂寃껋쑝濡� �꽕�젙',
		btnDelete	: '�궘�젣'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�엯�젰�쁺�뿭 �냽�꽦',
		cols		: '移몄닔',
		rows		: '以꾩닔'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�엯�젰�븘�뱶 �냽�꽦',
		name		: '�씠由�',
		value		: '媛�',
		charWidth	: '湲��옄 �꼫鍮�',
		maxChars	: '理쒕� 湲��옄�닔',
		type		: '醫낅쪟',
		typeText	: '臾몄옄�뿴',
		typePass	: '鍮꾨�踰덊샇'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�닲源��븘�뱶 �냽�꽦',
		name	: '�씠由�',
		value	: '媛�'
	},

	// Image Dialog.
	image :
	{
		title		: '�씠誘몄� �꽕�젙',
		titleButton	: '�씠誘몄�踰꾪듉 �냽�꽦',
		menu		: '�씠誘몄� �꽕�젙',
		infoTab		: '�씠誘몄� �젙蹂�',
		btnUpload	: '�꽌踰꾨줈 �쟾�넚',
		upload		: '�뾽濡쒕뱶',
		alt			: '�씠誘몄� �꽕紐�',
		lockRatio	: '鍮꾩쑉 �쑀吏�',
		resetSize	: '�썝�옒 �겕湲곕줈',
		border		: '�뀒�몢由�',
		hSpace		: '�닔�룊�뿬諛�',
		vSpace		: '�닔吏곸뿬諛�',
		alertUrl	: '�씠誘몄� URL�쓣 �엯�젰�븯�떗�떆�슂',
		linkTab		: '留곹겕',
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
		properties		: '�뵆�옒�돩 �냽�꽦',
		propertiesTab	: 'Properties', // MISSING
		title			: '�뵆�옒�돩 �벑濡앹젙蹂�',
		chkPlay			: '�옄�룞�옱�깮',
		chkLoop			: '諛섎났',
		chkMenu			: '�뵆�옒�돩硫붾돱 媛��뒫',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '�쁺�뿭',
		scaleAll		: '紐⑤몢蹂닿린',
		scaleNoBorder	: '寃쎄퀎�꽑�뾾�쓬',
		scaleFit		: '�쁺�뿭�옄�룞議곗젅',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: '以꾩븘�옒(Abs Bottom)',
		alignAbsMiddle	: '以꾩쨷媛�(Abs Middle)',
		alignBaseline	: '湲곗��꽑',
		alignTextTop	: '湲��옄�긽�떒',
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
		bgcolor			: '諛곌꼍 �깋�긽',
		hSpace			: '�닔�룊�뿬諛�',
		vSpace			: '�닔吏곸뿬諛�',
		validateSrc		: '留곹겕 URL�쓣 �엯�젰�븯�떗�떆�슂.',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '泥좎옄寃��궗',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '�궗�쟾�뿉 �뾾�뒗 �떒�뼱',
		changeTo		: '蹂�寃쏀븷 �떒�뼱',
		btnIgnore		: '嫄대꼫��',
		btnIgnoreAll	: '紐⑤몢 嫄대꼫��',
		btnReplace		: '蹂�寃�',
		btnReplaceAll	: '紐⑤몢 蹂�寃�',
		btnUndo			: '痍⑥냼',
		noSuggestions	: '- 異붿쿇�떒�뼱 �뾾�쓬 -',
		progress		: '泥좎옄寃��궗瑜� 吏꾪뻾以묒엯�땲�떎...',
		noMispell		: '泥좎옄寃��궗 �셿猷�: �옒紐삳맂 泥좎옄媛� �뾾�뒿�땲�떎.',
		noChanges		: '泥좎옄寃��궗 �셿猷�: 蹂�寃쎈맂 �떒�뼱媛� �뾾�뒿�땲�떎.',
		oneChange		: '泥좎옄寃��궗 �셿猷�: �떒�뼱媛� 蹂�寃쎈릺�뿀�뒿�땲�떎.',
		manyChanges		: '泥좎옄寃��궗 �셿猷�: %1 �떒�뼱媛� 蹂�寃쎈릺�뿀�뒿�땲�떎.',
		ieSpellDownload	: '泥좎옄 寃��궗湲곌� 泥좎튂�릺吏� �븡�븯�뒿�땲�떎. 吏�湲� �떎�슫濡쒕뱶�븯�떆寃좎뒿�땲源�?'
	},

	smiley :
	{
		toolbar	: '�븘�씠肄�',
		title	: '�븘�씠肄� �궫�엯',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '�닚�꽌�엳�뒗 紐⑸줉',
	bulletedlist	: '�닚�꽌�뾾�뒗 紐⑸줉',
	indent			: '�뱾�뿬�벐湲�',
	outdent			: '�궡�뼱�벐湲�',

	justify :
	{
		left	: '�쇊履� �젙�젹',
		center	: '媛��슫�뜲 �젙�젹',
		right	: '�삤瑜몄そ �젙�젹',
		block	: '�뼇履� 留욎땄'
	},

	blockquote : 'Block Quote', // MISSING

	clipboard :
	{
		title		: '遺숈뿬�꽔湲�',
		cutError	: '釉뚮씪�슦���쓽 蹂댁븞�꽕�젙�븣臾몄뿉 �옒�씪�궡湲� 湲곕뒫�쓣 �떎�뻾�븷 �닔 �뾾�뒿�땲�떎. �궎蹂대뱶 紐낅졊�쓣 �궗�슜�븯�떗�떆�슂. (Ctrl/Cmd+X).',
		copyError	: '釉뚮씪�슦���쓽 蹂댁븞�꽕�젙�븣臾몄뿉 蹂듭궗�븯湲� 湲곕뒫�쓣 �떎�뻾�븷 �닔 �뾾�뒿�땲�떎. �궎蹂대뱶 紐낅졊�쓣 �궗�슜�븯�떗�떆�슂.  (Ctrl/Cmd+C).',
		pasteMsg	: '�궎蹂대뱶�쓽 (<STRONG>Ctrl/Cmd+V</STRONG>) 瑜� �씠�슜�빐�꽌 �긽�옄�븞�뿉 遺숈뿬�꽔怨� <STRONG>OK</STRONG> 瑜� �늻瑜댁꽭�슂.',
		securityMsg	: '釉뚮윭�슦�� 蹂댁븞 �꽕�젙�쑝濡� �씤�빐, �겢由쎈낫�뱶�쓽 �옄猷뚮�� 吏곸젒 �젒洹쇳븷 �닔 �뾾�뒿�땲�떎. �씠 李쎌뿉 �떎�떆 遺숈뿬�꽔湲� �븯�떗�떆�삤.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: 'MS Word �삎�떇�뿉�꽌 遺숈뿬�꽔湲�',
		title			: 'MS Word �삎�떇�뿉�꽌 遺숈뿬�꽔湲�',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '�뀓�뒪�듃濡� 遺숈뿬�꽔湲�',
		title	: '�뀓�뒪�듃濡� 遺숈뿬�꽔湲�'
	},

	templates :
	{
		button			: '�뀥�뵆由�',
		title			: '�궡�슜 �뀥�뵆由�',
		options : 'Template Options', // MISSING
		insertOption	: '�쁽�옱 �궡�슜 諛붽씀湲�',
		selectPromptMsg	: '�뿉�뵒�꽣�뿉�꽌 �궗�슜�븷 �뀥�뵆由우쓣 �꽑�깮�븯�떗�떆�슂.<br>(吏�湲덇퉴吏� �옉�꽦�맂 �궡�슜�� �궗�씪吏묐땲�떎.):',
		emptyListMsg	: '(�뀥�뵆由우씠 �뾾�뒿�땲�떎.)'
	},

	showBlocks : 'Show Blocks', // MISSING

	stylesCombo :
	{
		label		: '�뒪���씪',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '�룷留�',
		panelTitle	: '�룷留�',

		tag_p		: 'Normal',
		tag_pre		: 'Formatted',
		tag_address	: 'Address',
		tag_h1		: 'Heading 1',
		tag_h2		: 'Heading 2',
		tag_h3		: 'Heading 3',
		tag_h4		: 'Heading 4',
		tag_h5		: 'Heading 5',
		tag_h6		: 'Heading 6',
		tag_div		: 'Normal (DIV)' // MISSING
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
		label		: '�룿�듃',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: '�룿�듃'
	},

	fontSize :
	{
		label		: '湲��옄 �겕湲�',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: '湲��옄 �겕湲�'
	},

	colorButton :
	{
		textColorTitle	: '湲��옄 �깋�긽',
		bgColorTitle	: '諛곌꼍 �깋�긽',
		panelTitle		: 'Colors', // MISSING
		auto			: '湲곕낯�깋�긽',
		more			: '�깋�긽�꽑�깮...'
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
		noSuggestions	: '異붿쿇�떒�뼱 �뾾�쓬',
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
		label : '臾몄꽌 �냽�꽦',
		title : '臾몄꽌 �냽�꽦',
		design : 'Design', // MISSING
		meta : '硫뷀��뜲�씠�꽣',
		chooseColor : 'Choose', // MISSING
		other : '<湲고�>',
		docTitle :	'�럹�씠吏�紐�',
		charset : 	'罹먮┃�꽣�뀑 �씤肄붾뵫',
		charsetOther : '�떎瑜� 罹먮┃�꽣�뀑 �씤肄붾뵫',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : 'Central European', // MISSING
		charsetCT : 'Chinese Traditional (Big5)', // MISSING
		charsetCR : 'Cyrillic', // MISSING
		charsetGR : 'Greek', // MISSING
		charsetJP : 'Japanese', // MISSING
		charsetKR : 'Korean', // MISSING
		charsetTR : 'Turkish', // MISSING
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : 'Western European', // MISSING
		docType : '臾몄꽌 �뿤�뱶',
		docTypeOther : '�떎瑜� 臾몄꽌�뿤�뱶',
		xhtmlDec : 'XHTML 臾몄꽌�젙�쓽 �룷�븿',
		bgColor : '諛곌꼍�깋�긽',
		bgImage : '諛곌꼍�씠誘몄� URL',
		bgFixed : '�뒪�겕濡ㅻ릺吏��븡�뒗 諛곌꼍',
		txtColor : '湲��옄 �깋�긽',
		margin : '�럹�씠吏� �뿬諛�',
		marginTop : '�쐞',
		marginLeft : '�쇊履�',
		marginRight : '�삤瑜몄そ',
		marginBottom : '�븘�옒',
		metaKeywords : '臾몄꽌 �궎�썙�뱶 (肄ㅻ쭏濡� 援щ텇)',
		metaDescription : '臾몄꽌 �꽕紐�',
		metaAuthor : '�옉�꽦�옄',
		metaCopyright : '���옉沅�',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
