/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object for the
 * Persian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['fa'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'rtl',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : '�댸뚕극㏁뚕닥�邈 �끮べ� 曼�녬�, %1',
	editorHelp : '沕�꾗뚕� Alt+0 邈碼 磨邈碼�� 邈碼�뉄녪끮㏁뚘� 磨�곖닢㎔글뚕�',

	// ARIA descriptions.
	toolbars	: '�녪댵㎔� 碼磨万碼邈',
	editor		: '�댸뚕극㏁뚕닥�邈 �끮べ� 曼�녬�',

	// Toolbar buttons without dialogs.
	source			: '�끯녩ⓛ�',
	newPage			: '磨邈彌�뉄� 魔碼万��',
	save			: '莫漠�뚕근�',
	preview			: '毛�뚕다녪끮㏁뚕�',
	cut				: '磨邈娩',
	copy			: '沕毛��',
	paste			: '�녩넥ⓛΩ녩���',
	print			: '�녩Ω�',
	underline		: '万�뚕극�慢膜碼邈',
	bold			: '膜邈娩魔',
	italic			: '漠�끱뚕���',
	selectAll		: '彌万�뚖녩� �뉄끯�',
	removeFormat	: '磨邈膜碼娩魔�� �곖근끮�',
	strike			: '�끱뚕Ω녩�慢',
	subscript		: '万�뚕근녪댸뚕�',
	superscript		: '磨碼�꾓Ω녪댸뚕�',
	horizontalrule	: '彌�녩жΩ녩��� 漠慢 碼�곘귎�',
	pagebreak		: '彌�녩жΩ녩��� 娩沕卍魔彌�� 毛碼�뚕Ω� 磨邈彌��',
	pagebreakAlt		: '娩沕卍魔�� 巒�곖���',
	unlink			: '磨邈膜碼娩魔�� 毛�뚖댶녩�',
	undo			: '�댵㏀녬뚕���',
	redo			: '磨碼万�녬뚕���',

	// Common messages and labels.
	common :
	{
		browseServer	: '�곘뉃극넥べ녪끮㏁뚘� 卍邈�댵�',
		url				: 'URL',
		protocol		: '毛邈�댵ぺ⒨�',
		upload			: '碼�녩べ귋Ω� 磨�� 卍邈�댵�',
		uploadSubmit	: '磨�� 卍邈�댵� 磨�곖극넥�',
		image			: '魔巒�댸뚕�',
		flash			: '�곘꾓�',
		form			: '�곖근�',
		checkbox		: '漠碼�녪뉄� 彌万�뚖녪뉃㏁�',
		radio			: '膜沕�끯뉄� 邈碼膜�뚖댸뚘�',
		textField		: '�곚뚖꾓� �끮べ녬�',
		textarea		: '�녩㎔��뚖뉄� �끮べ녬�',
		hiddenField		: '�곚뚖꾓� 毛�녪뉃Ω�',
		button			: '膜沕�끯�',
		select			: '�곚뚖꾓� �녪녩�彌万�뚖녪뉃㏁�',
		imageButton		: '膜沕�끯뉄� 魔巒�댸뚕글�',
		notSet			: '<魔晩�뚖� �녩닢���>',
		id				: '娩�녩㎔넨�',
		name			: '�녩Ω�',
		langDir			: '寞�뉃べ녪끮㏁� 万磨碼��',
		langDirLtr		: '�녪� 磨�� 邈碼卍魔 (LTR)',
		langDirRtl		: '邈碼卍魔 磨�� �녪� (RTL)',
		langCode		: '沕膜 万磨碼��',
		longDescr		: 'URL 魔�댵뒨뚖� 慢�댶꾓Ω녬�',
		cssClass		: '沕�꾓㎔넨뉃㏁� 娩�뚖댶뉄녩Ω끯�(Stylesheet)',
		advisoryTitle	: '晩�녪댵Ω� 沕�끰⒪�',
		cssStyle		: '娩�뚖댶�(style)',
		ok				: '毛莫�뚕극�',
		cancel			: '碼�녩뒈극Ω�',
		close			: '磨卍魔��',
		preview			: '毛�뚕다녪끮㏁뚕�',
		generalTab		: '晩�끯댶끱�',
		advancedTab		: '毛�뚕닢근곖べ�',
		validateNumberFailed : '碼�뚖� �끯귋�碼邈 �뚗� 晩膜膜 �녬뚕넥�.',
		confirmNewPage	: '�뉃� 魔曼�뚘뚕� 碼�뚕ж㎔� 娩膜�뉆� 莫漠�뚕근� �녩닢��� 碼万 磨�뚖� 漠�댵Ω뉃� 邈�곖�. 笠�뚕� 碼慢�끱뚖녩Ω� 膜碼邈�뚕� 沕�� �귋뒈� 磨碼邈彌�뚕글� 巒�곖��� 寞膜�뚕��� 邈碼 膜碼邈�뚕���',
		confirmCancel	: '磨邈漠�� 碼万 彌万�뚖녪뉄뉃� 魔曼�뚘뚕� 沕邈膜�뉃Ω녩�. 笠�뚕� �댵Ω귋밑� �귋뒈� 磨卍魔�� 碼�뚖� 毛�녩ж근� 邈碼 膜碼邈�뚕���',
		options			: '彌万�뚖녪뉄뉃�',
		target			: '�끮넴뚕�',
		targetNew		: '毛�녩ж근� 寞膜�뚕� (_blank)',
		targetTop		: '磨碼�꾓㎔へ글뚖� 毛�녩ж근� (_top)',
		targetSelf		: '�뉄끮Ω� 毛�녩ж근� (_self)',
		targetParent	: '毛�녩ж근� �댵Ω꾓� (_parent)',
		langDirLTR		: '�녪� 磨�� 邈碼卍魔 (LTR)',
		langDirRTL		: '邈碼卍魔 磨�� �녪� (RTL)',
		styles			: '卍磨沕',
		cssClasses		: '沕�꾓㎔넨뉃㏁� 娩�뚖댶뉄녩Ω끯�',
		width			: '毛�뉄녩�',
		height			: '膜邈碼万碼',
		align			: '�녬뚖녩�',
		alignLeft		: '�녪�',
		alignRight		: '邈碼卍魔',
		alignCenter		: '�댵넥�',
		alignTop		: '磨碼�꾓�',
		alignMiddle		: '�댵넥�',
		alignBottom		: '毛碼痲�뚖�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '碼邈魔�곖㎔� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		invalidWidth	: '毛�뉄녩� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		invalidCssLength	: '晩膜膜 魔晩�뚘뚖� 娩膜�� 磨邈碼�� �곚뚖꾓� "%1" 磨碼�뚕� �뚗� 晩膜膜 �끮ヘⓛ� 磨碼 �뚕� 磨膜�댶� �뚗� �댵㎔�膜 碼�녩�碼万�� 彌�뚕글� CSS �끮밑へⓛ� 磨碼娩膜 (px, %, in, cm, mm, em, ex, pt, or pc).',
		invalidHtmlLength	: '晩膜膜 魔晩�뚘뚖� 娩膜�� 磨邈碼�� �곚뚖꾓� "%1" 磨碼�뚕� �뚗� 晩膜膜 �끮ヘⓛ� 磨碼 �뚕� 磨膜�댶� �뚗� �댵㎔�膜 碼�녩�碼万�� 彌�뚕글� HTML �끮밑へⓛ� 磨碼娩膜 (px or %).',
		invalidInlineStyle	: '晩膜膜 魔晩�뚘뚖� 娩膜�� 磨邈碼�� 卍磨沕 膜邈�댶녩�慢��(Inline Style) 磨碼�뚕� 膜碼邈碼�� �뚗� �뚕� �녪녩� �녪녩�魔碼�뚘� 磨碼 娩沕�꾗� 娩磨�뚖� "name : value" 沕�� 磨碼�뚕� 磨碼 �뚗� ","(semi-colons) 碼万 �뉄� 寞膜碼 娩�댶녩�.',
		cssLengthTooltip	: '�뚗� 晩膜膜 磨邈碼�� �뚗� �끯귋�碼邈 磨邈 幕卍磨 毛�뚗⒧넨� �� �뚕� �뚗� 晩膜膜 磨碼 �뚗� �댵㎔�膜 CSS �끮밑へⓛ� �댵㎔극� 沕�녬뚕� (px, %, in, cm, mm, em, ex, pt, or pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">�� 曼�뚕� �귋㎔ⓜ� 膜卍魔邈卍</span>'
	},

	contextmenu :
	{
		options : '彌万�뚖녪뉄뉃㏁� �끯녪댸� 万�끱뚖녪�'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '彌�녩жΩ녩��� �녪댸뚕넨뉄� �댸뚗샸�',
		title		: '彌万�뚖녩� �녪댸뚕넨뉄� �댸뚗샸�',
		options : '彌万�뚖녪뉄뉃㏁� �녪댸뚕넨뉄뉃㏁� �댸뚗샸�'
	},

	// Link dialog.
	link :
	{
		toolbar		: '彌�녩жΩ녩���/�댸뚕극㏁뚕� 毛�뚖댶녩�',
		other 		: '<卍碼�뚕�>',
		menu		: '�댸뚕극㏁뚕� 毛�뚖댶녩�',
		title		: '毛�뚖댶녩�',
		info		: '碼慢�꾓㎔밑㎔� 毛�뚖댶녩�',
		target		: '�끯귋뒈�',
		upload		: '碼�녩べ귋Ω� 磨�� 卍邈�댵�',
		advanced	: '毛�뚕닢근곖べ�',
		type		: '�녪댵� 毛�뚖댶녩�',
		toUrl		: 'URL',
		toAnchor	: '�꾔녫�邈 膜邈 �뉄끱뚖� 巒�곖���',
		toEmail		: '毛卍魔 碼�꾖⒧へ근댶녬뚗⒪�',
		targetFrame		: '<�곖글뚖�>',
		targetPopup		: '<毛�녩ж근뉄� 毛碼毛碼毛>',
		targetFrameName	: '�녩Ω� �곖글뚖� �끯귋뒈�',
		targetPopupName	: '�녩Ω� 毛�녩ж근뉄� 毛碼毛碼毛',
		popupFeatures	: '�댸뚗샺��뚖뉃㏁� 毛�녩ж근뉄� 毛碼毛碼毛',
		popupResizable	: '�귋㎔ⓜ� 魔曼�뚘뚕� 碼�녩�碼万��',
		popupStatusBar	: '�녪댵㎔� �댵뛔밖뚕�',
		popupLocationBar: '�녪댵㎔� �끯댶귋밖뚕�',
		popupToolbar	: '�녪댵㎔극㎔ⓛ꾜㎔�',
		popupMenuBar	: '�녪댵㎔� �끯녪�',
		popupFullScreen	: '魔�끮Ω끮뒝곖��� (IE)',
		popupScrollBars	: '�끱뚖꾔뉄뉃㏁� 毛�뚖끮㏁뚕�',
		popupDependent	: '�댵㎔ⓛ넥べ� (Netscape)',
		popupLeft		: '�끯댶귋밖뚕� �녪�',
		popupTop		: '�끯댶귋밖뚕� 磨碼�꾓�',
		id				: '娩�녩㎔넨�',
		langDir			: '寞�뉃べ녪끮㏁� 万磨碼��',
		langDirLTR		: '�녪� 磨�� 邈碼卍魔 (LTR)',
		langDirRTL		: '邈碼卍魔 磨�� �녪� (RTL)',
		acccessKey		: '沕�꾗뚕� 膜卍魔�뚕㎔ⓞ�',
		name			: '�녩Ω�',
		langCode			: '寞�뉃べ녪끮㏁� 万磨碼��',
		tabIndex			: '�녪끮㏁뚖뉄� 膜卍魔邈卍�� 磨碼 磨邈彌��',
		advisoryTitle		: '晩�녪댵Ω� 沕�끰⒪�',
		advisoryContentType	: '�녪댵� �끮�魔�댵㏁� 沕�끰⒪�',
		cssClasses		: '沕�꾓㎔넨뉃㏁� 娩�뚖댶뉄녩Ω끯�(Stylesheet)',
		charset			: '�녪댸뚕넨뉅�碼�� �끯녩ⓛ� 毛�뚖댶녩� 娩膜��',
		styles			: '娩�뚖댶�(style)',
		rel			: '�댵㎔ⓛ넥ぺ���',
		selectAnchor		: '�뚗� �꾔녫�邈 磨邈彌万�뚖녬뚕�',
		anchorName		: '磨碼 �녩Ω� �꾔녫�邈',
		anchorId			: '磨碼 娩�녩㎔넨뉄� 碼�꾔끮Ω�',
		emailAddress		: '�녩닢Ω녬� 毛卍魔 碼�꾖⒧へ근댶녬뚗⒪�',
		emailSubject		: '�끯댵뛰댵� 毛�뚕Ω�',
		emailBody		: '�끮べ� 毛�뚕Ω�',
		noAnchors		: '(膜邈 碼�뚖� 卍�녩� �꾔녫�邈�� 膜邈膜卍魔邈卍 �녬뚕넥�)',
		noUrl			: '�꾓뢨곖� URL 毛�뚖댶녩� 邈碼 磨�녪댸뚕넴뚕�',
		noEmail			: '�꾓뢨곖� �녩닢Ω녬� 毛卍魔 碼�꾖⒧へ근댶녬뚗⒪� 邈碼 磨�녪댸뚕넴뚕�'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '彌�녩жΩ녩���/�댸뚕극㏁뚕� �꾔녫�邈',
		menu		: '�댸뚗샺��뚖뉃㏁� �꾔녫�邈',
		title		: '�댸뚗샺��뚖뉃㏁� �꾔녫�邈',
		name		: '�녩Ω� �꾔녫�邈',
		errorName	: '�꾓뢨곖� �녩Ω� �꾔녫�邈 邈碼 磨�녪댸뚕넴뚕�',
		remove		: '幕莫�� �꾔녫�邈'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '�댸뚗샺��뚖뉃㏁� �곘뉃극넥� 娩�끮㎔근뉃�碼邈',
		bulletedTitle		: '�댸뚗샺��뚖뉃㏁� �곘뉃극넥� 彌�꾔댶꾔뉃�碼邈',
		type				: '�녪댵�',
		start				: '娩邈�댵�',
		validateStartNumber				:'�곘뉃극넥� 娩�끮㎔근� 娩邈�댵� 磨碼�뚕� �뚗� 晩膜膜 巒幕�뚕� 磨碼娩膜.',
		circle				: '膜碼�뚕근�',
		disc				: '巒�곖��� 彌邈膜',
		square				: '�녪뉃㎔귿��댵�',
		none				: '�뉆뚗�',
		notset				: '<魔�녩멍뚖� �녩닢���>',
		armenian			: '娩�끮㎔근뉅�莫碼邈�� 碼邈�끯녬�',
		georgian			: '娩�끮㎔근뉅�莫碼邈�� 彌邈�뚗��댵글뚖� (an, ban, gan, etc.)',
		lowerRoman			: '毛碼�녪댸뚕� 邈�댶끱� (i, ii, iii, iv, v, etc.)',
		upperRoman			: '磨碼�꾓Ω녪댸뚕� 邈�댶끱� (I, II, III, IV, V, etc.)',
		lowerAlpha			: '毛碼�녪댸뚕� 碼�꾔곖ⓛ㏁뚘� (a, b, c, d, e, etc.)',
		upperAlpha			: '磨碼�꾓Ω녪댸뚕� 碼�꾔곖ⓛ㏁뚘� (A, B, C, D, E, etc.)',
		lowerGreek			: '毛碼�녪댸뚕� �뚖댶녩Ω녬� (alpha, beta, gamma, etc.)',
		decimal				: '膜�뉃��뉆� (1, 2, 3, etc.)',
		decimalLeadingZero	: '膜�뉃��뉆� �뉄끮극Ω� 磨碼 巒�곖� (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '寞卍魔寞�� �� 寞碼�뚗�万�뚖녬�',
		find				: '寞卍魔寞��',
		replace				: '寞碼�뚗�万�뚖녬�',
		findWhat			: '�녪� �녬뚕� 邈碼 �끱뚘뚕㎔ⓞ뚕�:',
		replaceWith			: '寞碼�뚗�万�뚖녬� 磨碼:',
		notFoundMsg			: '�끮べ� �끯댵극��녩멈� �뚕Ω곖� �녩닢�.',
		findOptions			: '彌万�뚖녪뉄뉃㏁� 寞卍魔寞��',
		matchCase			: '�뉄끮넥Ω녬� 膜邈 磨万邈彌�� �� 沕�댷녫⒪� �녪댸뚕넨뉄뉃�',
		matchWord			: '�뉄끮넥Ω녬� 磨碼 �댵㏀샸뉄� 沕碼�끯�',
		matchCyclic			: '�뉄끮넥Ω녬� 磨碼 �녩극���',
		replaceAll			: '寞碼�뚗�万�뚖녬� �뉄끯뉄� �뚕Ω곖べ뉄뉃�',
		replaceSuccessMsg	: '%1 邈漠膜碼膜 寞碼�뚗�万�뚖� 娩膜.'
	},

	// Table Dialog
	table :
	{
		toolbar		: '寞膜�댶�',
		title		: '�댸뚗샺��뚖뉃㏁� 寞膜�댶�',
		menu		: '�댸뚗샺��뚖뉃㏁� 寞膜�댶�',
		deleteTable	: '毛碼沕 沕邈膜�� 寞膜�댶�',
		rows		: '卍慢邈�뉃�',
		columns		: '卍魔�댶녪뉃�',
		border		: '碼�녩�碼万�뉄� �꾓ⓜ�',
		widthPx		: '毛�뚗⒧넨�',
		widthPc		: '膜邈巒膜',
		widthUnit	: '�댵㎔�膜 毛�뉄녩�',
		cellSpace	: '�곖㎔뒝꾔뉄� �끱뚕Ω� 卍�꾔댶꾔뉃�',
		cellPad		: '�곖㎔뒝꾔뉄� 毛邈娩膜�� 膜邈 卍�꾔댶�',
		caption		: '晩�녪댵Ω�',
		summary		: '漠�꾓㎔뒝�',
		headers		: '卍邈�녪댸뚕넨뉃�',
		headersNone		: '�뉆뚗�',
		headersColumn	: '碼�댶꾗뚖� 卍魔�댶�',
		headersRow		: '碼�댶꾗뚖� 邈膜�뚖�',
		headersBoth		: '�뉃극���',
		invalidRows		: '魔晩膜碼膜 邈膜�뚖곘뉃� 磨碼�뚕� �뚗� 晩膜膜 磨万邈彌魔邈 碼万 0 磨碼娩膜.',
		invalidCols		: '魔晩膜碼膜 卍魔�댶녪뉃� 磨碼�뚕� �뚗� 晩膜膜 磨万邈彌魔邈 碼万 0 磨碼娩膜.',
		invalidBorder	: '�끯귋�碼邈 碼�녩�碼万�� 漠慢�댵� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		invalidWidth	: '�끯귋�碼邈 毛�뉄녩㏁� 寞膜�댶� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		invalidHeight	: '�끯귋�碼邈 碼邈魔�곖㎔�  寞膜�댶� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		invalidCellSpacing	: '�끯귋�碼邈 �곖㎔뒝꾔뉅�莫碼邈�� 卍�꾔댶� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		invalidCellPadding	: '磨碼�꾓닢ぺ� 卍�꾔댶� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',

		cell :
		{
			menu			: '卍�꾔댶�',
			insertBefore	: '碼�곖꾸댵��� 卍�꾔댶� �귋ⓜ� 碼万',
			insertAfter		: '碼�곖꾸댵��� 卍�꾔댶� 磨晩膜 碼万',
			deleteCell		: '幕莫�� 卍�꾔댶꾔뉃�',
			merge			: '碼膜曼碼�� 卍�꾔댶꾔뉃�',
			mergeRight		: '碼膜曼碼�� 磨�� 邈碼卍魔',
			mergeDown		: '碼膜曼碼�� 磨�� 毛碼�뚘뚖�',
			splitHorizontal	: '寞膜碼 沕邈膜�� 碼�곘귎� 卍�꾔댶�',
			splitVertical	: '寞膜碼 沕邈膜�� 晩�끯댵��� 卍�꾔댶�',
			title			: '�댸뚗샺��뚖뉃㏁� 卍�꾔댶�',
			cellType		: '�녪댵� 卍�꾔댶�',
			rowSpan			: '�끮�膜�댵��� 邈膜�뚖곘뉃�',
			colSpan			: '�끮�膜�댵��� 卍魔�댶녪뉃�',
			wordWrap		: '娩沕卍魔�� 沕�꾔끯�',
			hAlign			: '�녬뚖녩� 碼�곘귎�',
			vAlign			: '�녬뚖녩� 晩�끯댵���',
			alignBaseline	: '漠慢 �끮ⓜ녩�',
			bgColor			: '邈�녫� 万�끱뚖녪�',
			borderColor		: '邈�녫� 漠慢�댵�',
			data			: '碼慢�꾓㎔밑㎔�',
			header			: '卍邈�녪댸뚕�',
			yes				: '磨�꾔�',
			no				: '漠�뚕�',
			invalidWidth	: '晩邈彎 卍�꾔댶� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
			invalidHeight	: '碼邈魔�곖㎔� 卍�꾔댶� 磨碼�뚕� 晩膜膜 磨碼娩膜.',
			invalidRowSpan	: '�끯귋�碼邈 �끮�膜�댵��� 邈膜�뚖곘뉃� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
			invalidColSpan	: '�끯귋�碼邈 �끮�膜�댵��� 卍魔�댶녪뉃� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
			chooseColor		: '碼�녩へ�碼磨'
		},

		row :
		{
			menu			: '卍慢邈',
			insertBefore	: '碼�곖꾸댵��� 卍慢邈 �귋ⓜ� 碼万',
			insertAfter		: '碼�곖꾸댵��� 卍慢邈 磨晩膜 碼万',
			deleteRow		: '幕莫�� 卍慢邈�뉃�'
		},

		column :
		{
			menu			: '卍魔�댶�',
			insertBefore	: '碼�곖꾸댵��� 卍魔�댶� �귋ⓜ� 碼万',
			insertAfter		: '碼�곖꾸댵��� 卍魔�댶� 磨晩膜 碼万',
			deleteColumn	: '幕莫�� 卍魔�댶녪뉃�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�댸뚗샺��뚖뉃㏁� 膜沕�끯�',
		text		: '�끮べ� (�끯귋�碼邈)',
		type		: '�녪댵�',
		typeBtn		: '膜沕�끯�',
		typeSbm		: '麻磨魔',
		typeRst		: '磨碼万�녩닢Ω녬� (Reset)'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�댸뚗샺��뚖뉃㏁� 漠碼�녪뉄� 彌万�뚖녪뉃㏁�',
		radioTitle	: '�댸뚗샺��뚖뉃㏁� 膜沕�끯뉄� 邈碼膜�뚖댸뚘�',
		value		: '�끯귋�碼邈',
		selected	: '磨邈彌万�뚕���'
	},

	// Form Dialog.
	form :
	{
		title		: '�댸뚗샺��뚖뉃㏁� �곖근�',
		menu		: '�댸뚗샺��뚖뉃㏁� �곖근�',
		action		: '邈�댸뚕�碼膜',
		method		: '�끮へ�',
		encoding	: '邈�끮꾸녫�碼邈��'
	},

	// Select Field Dialog.
	select :
	{
		title		: '�댸뚗샺��뚖뉃㏁� �곚뚖꾓� �녪녩�彌万�뚖녪뉃㏁�',
		selectInfo	: '碼慢�꾓㎔밑㎔�',
		opAvail		: '彌万�뚖녪뉄뉃㏁� 膜邈膜卍魔邈卍',
		value		: '�끯귋�碼邈',
		size		: '碼�녩�碼万��',
		lines		: '漠慢�댵�',
		chkMulti	: '彌万�뚖녩� �녪녩�彌碼�녪� �곖극Ω뉄� 磨碼娩膜',
		opText		: '�끮べ�',
		opValue		: '�끯귋�碼邈',
		btnAdd		: '碼�곖꾸댵���',
		btnModify	: '�댸뚕극㏁뚕�',
		btnUp		: '磨碼�꾓�',
		btnDown		: '毛碼痲�뚖�',
		btnSetValue : '魔�녩멍뚖� 磨�� 晩�녪댵Ω� �끯귋�碼邈 磨邈彌万�뚕���',
		btnDelete	: '毛碼沕沕邈膜��'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�댸뚗샺��뚖뉃㏁� �녩㎔��뚖뉄� �끮べ녬�',
		cols		: '卍魔�댶녪뉃�',
		rows		: '卍慢邈�뉃�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�댸뚗샺��뚖뉃㏁� �곚뚖꾓� �끮べ녬�',
		name		: '�녩Ω�',
		value		: '�끯귋�碼邈',
		charWidth	: '毛�뉄녩㏁� �녪댸뚕넨�',
		maxChars	: '磨�뚕닦뚖녪뉄� �녪댸뚕넨뉄뉃�',
		type		: '�녪댵�',
		typeText	: '�끮べ�',
		typePass	: '彌莫邈�댵㏀샸�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�댸뚗샺��뚖뉃㏁� �곚뚖꾓� 毛�녪뉃Ω�',
		name	: '�녩Ω�',
		value	: '�끯귋�碼邈'
	},

	// Image Dialog.
	image :
	{
		title		: '�댸뚗샺��뚖뉃㏁� 魔巒�댸뚕�',
		titleButton	: '�댸뚗샺��뚖뉃㏁� 膜沕�끯뉄� 魔巒�댸뚕글�',
		menu		: '�댸뚗샺��뚖뉃㏁� 魔巒�댸뚕�',
		infoTab		: '碼慢�꾓㎔밑㎔� 魔巒�댸뚕�',
		btnUpload	: '磨�� 卍邈�댵� 磨�곖극넥�',
		upload		: '碼�녩べ귋Ω� 磨�� 卍邈�댵�',
		alt			: '�끮べ� 寞碼�뚗�万�뚖�',
		lockRatio	: '�귌곘� 沕邈膜�� �녩넥ⓛ�',
		resetSize	: '磨碼万�녩닢Ω녬� 碼�녩�碼万��',
		border		: '�꾓ⓜ�',
		hSpace		: '�곖㎔뒝꾔뉄� 碼�곘귎�',
		vSpace		: '�곖㎔뒝꾔뉄� 晩�끯댵���',
		alertUrl	: '�꾓뢨곖� URL 魔巒�댸뚕� 邈碼 磨�녪댸뚕넴뚕�',
		linkTab		: '毛�뚖댶녩�',
		button2Img	: '笠�뚕� �끮㏁뚖꾗뚕� 碼万 �뚗� 魔巒�댸뚕� 卍碼膜�� 邈�댸� 膜沕�끯� 魔巒�댸뚕글� 碼�녩へ�碼磨 娩膜�� 碼卍魔�곖㎔��� 沕�녬뚕���',
		img2Button	: '笠�뚕� �끮㏁뚖꾗뚕� 碼万 �뚗� 膜沕�끯� 魔巒�댸뚕글� 邈�댸� 魔巒�댸뚕� 碼�녩へ�碼磨 娩膜�� 碼卍魔�곖㎔��� 沕�녬뚕���',
		urlMissing	: '笠膜邈卍 URL 碼巒�꾗� 魔巒�댸뚕� �뚕Ω곖� �녩닢�.',
		validateBorder	: '�끯귋�碼邈 漠慢�댵� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		validateHSpace	: '�끯귋�碼邈 �곖㎔뒝꾔뉅�莫碼邈�� 碼�곘귎� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		validateVSpace	: '�끯귋�碼邈 �곖㎔뒝꾔뉅�莫碼邈�� 晩�끯댵��� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.'
	},

	// Flash Dialog
	flash :
	{
		properties		: '�댸뚗샺��뚖뉃㏁� �곘꾓�',
		propertiesTab	: '�댸뚗샺��뚖뉃�',
		title			: '�댸뚗샺��뚖뉃㏁� �곘꾓�',
		chkPlay			: '笠曼碼万 漠�댵�沕碼邈',
		chkLoop			: '碼寞邈碼�� 毛�뚕Ω앱�',
		chkMenu			: '膜邈 膜卍魔邈卍 磨�댵��� �끯녪댸� �곘꾓�',
		chkFull			: '碼寞碼万�� 魔�끮Ω� 巒�곖���',
 		scale			: '�끯귎뚕㎔�',
		scaleAll		: '�녪끮㏁뚕� �뉄끯�',
		scaleNoBorder	: '磨膜�댶� 沕邈碼��',
		scaleFit		: '寞碼�뚗��뚕글� 沕碼�끯�',
		access			: '膜卍魔邈卍�� 磨�� 碼卍沕邈�뚖앤�',
		accessAlways	: '�뉄끱뚕다�',
		accessSameDomain: '�뉄끮Ω� 膜碼�끯녪�',
		accessNever		: '�뉃귿�万',
		alignAbsBottom	: '毛碼痲�뚖� �끮뢨꾔�',
		alignAbsMiddle	: '�댵넥� �끮뢨꾔�',
		alignBaseline	: '漠慢 毛碼�뚖�',
		alignTextTop	: '�끮べ� 磨碼�꾓�',
		quality			: '沕�뚖곚뚕�',
		qualityBest		: '磨�뉃へ글뚖�',
		qualityHigh		: '磨碼�꾓�',
		qualityAutoHigh	: '磨碼�꾓� - 漠�댵�沕碼邈',
		qualityMedium	: '�끮べ댵넥�',
		qualityAutoLow	: '毛碼�뚘뚖� - 漠�댵�沕碼邈',
		qualityLow		: '毛碼�뚘뚖�',
		windowModeWindow: '毛�녩ж근�',
		windowModeOpaque: '�끮㎔�',
		windowModeTransparent : '娩�곖Ω�',
		windowMode		: '幕碼�꾓� 毛�녩ж근�',
		flashvars		: '�끯귋㎔��뚕� 磨邈碼�� �곘꾓�',
		bgcolor			: '邈�녫� 毛卍万�끱뚖녪�',
		hSpace			: '�곖㎔뒝꾔뉄� 碼�곘귎�',
		vSpace			: '�곖㎔뒝꾔뉄� 晩�끯댵���',
		validateSrc		: '�꾓뢨곖� URL 毛�뚖댶녩� 邈碼 磨�녪댸뚕넴뚕�',
		validateHSpace	: '�끯귋�碼邈 �곖㎔뒝꾔뉅�莫碼邈�� 碼�곘귎� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.',
		validateVSpace	: '�끯귋�碼邈 �곖㎔뒝꾔뉅�莫碼邈�� 晩�끯댵��� 磨碼�뚕� �뚗� 晩膜膜 磨碼娩膜.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '磨邈邈卍�� 碼�끯꾓�',
		title			: '磨邈邈卍�� 碼�끯꾓�',
		notAvailable	: '磨碼 晩邈彎 毛�댵꾜� 漠膜�끮㎔� 碼�꾓Ω� 膜邈 膜卍魔邈卍 �녬뚕넥べ녩�.',
		errorLoading	: '漠慢碼 膜邈 磨碼邈彌�뚕글� 磨邈�녩Ω끯� 漠膜�끮㎔� �끱뚕꾜ⓛΩ�: %s.',
		notInDic		: '膜邈 �댵㏀샸�~�녩Ω끯� �뚕Ω곖� �녩닢�',
		changeTo		: '魔曼�뚘뚕� 磨��',
		btnIgnore		: '�녩다끯앨댵닦�',
		btnIgnoreAll	: '�녩다끯앨댵닦� �뉄끯�',
		btnReplace		: '寞碼�뚗�万�뚖녬�',
		btnReplaceAll	: '寞碼�뚗�万�뚖녬� �뉄끯�',
		btnUndo			: '�댵㏀녬뚖녩�',
		noSuggestions	: '- 毛�뚕다녪뉃㎔��� �녬뚕넥� -',
		progress		: '磨邈邈卍�� 碼�끯꾓� 膜邈 幕碼�� 碼�녩жΩ�...',
		noMispell		: '磨邈邈卍�� 碼�끯꾓� 碼�녩жΩ� 娩膜. �뉆뚗� 曼�꾓� 碼�끯꾓㎔╀� �뚕Ω곖� �녩닢�',
		noChanges		: '磨邈邈卍�� 碼�끯꾓� 碼�녩жΩ� 娩膜. �뉆뚗� �댵㏀샸뉃㏁� 魔曼�뚘뚕� �녬뚕Ω곖�',
		oneChange		: '磨邈邈卍�� 碼�끯꾓� 碼�녩жΩ� 娩膜. �뚗� �댵㏀샸� 魔曼�뚘뚕� �뚕Ω곖�',
		manyChanges		: '磨邈邈卍�� 碼�끯꾓� 碼�녩жΩ� 娩膜. %1 �댵㏀샸� 魔曼�뚘뚕� �뚕Ω곖�',
		ieSpellDownload	: '磨邈邈卍�� 沕�녪녩��뉄� 碼�끯꾓� �녩뒈� �녩닢��� 碼卍魔. 笠�뚕� �끱뚕��댵Ω뉆뚕� 笠�� 邈碼 �뉄끮㏀⒨녪댶� 膜邈�뚕Ω곖� 沕�녬뚕���'
	},

	smiley :
	{
		toolbar	: '漠�녩�碼�녫�',
		title	: '彌�녩жΩ녩��� 漠�녩�碼�녫�',
		options : '彌万�뚖녪뉄뉃㏁� 漠�녩�碼�녫�'
	},

	elementsPath :
	{
		eleLabel : '�끮넴뚕� 晩�녩㎔뒈�',
		eleTitle : '%1 晩�녩뒈�'
	},

	numberedlist	: '�곘뉃극넥� 娩�끮㎔근뉃�碼邈',
	bulletedlist	: '�곘뉃극넥� �녪귋뢨뉃㏁�',
	indent			: '碼�곖꾜㏁뚕� 魔�댵근곖ぺ���',
	outdent			: '沕碼�뉃� 魔�댵근곖ぺ���',

	justify :
	{
		left	: '�녪앰녬뚖�',
		center	: '�끱뚕Ω녫녬뚖�',
		right	: '邈碼卍魔�녬뚖�',
		block	: '磨�꾔댷⒩녬뚖�'
	},

	blockquote : '磨�꾔댷� �녪귌� �귌댶�',

	clipboard :
	{
		title		: '�녩넥ⓛΩ녩���',
		cutError	: '魔�녩멍뚖끮㎔� 碼�끯녬뚕ほ� �끮근댵귿�邈 娩�끮� 碼寞碼万�� �녪끱뚕��뉃� 沕�� �댸뚕극㏁뚕닥�邈 磨�� 慢�댵� 漠�댵�沕碼邈 晩�끯꾖⒧극��뉃㏁� 磨邈娩 邈碼 碼�녩жΩ� 膜�뉃�. �꾓뢨곖� 磨碼 膜沕�끯뉄뉃㏁� 巒�곖��� 沕�꾗뚕� 碼�뚖� 沕碼邈 邈碼 碼�녩жΩ� 膜�뉆뚕� (Ctrl/Cmd+X).',
		copyError	: '魔�녩멍뚖끮㎔� 碼�끯녬뚕ほ� �끮근댵귿�邈 娩�끮� 碼寞碼万�� �녪끱뚕��뉃� 沕�� �댸뚕극㏁뚕닥�邈 磨�� 慢�댵� 漠�댵�沕碼邈 晩�끯꾖⒧극��뉃㏁� 沕毛�� 沕邈膜�� 邈碼 碼�녩жΩ� 膜�뉃�. �꾓뢨곖� 磨碼 膜沕�끯뉄뉃㏁� 巒�곖��� 沕�꾗뚕� 碼�뚖� 沕碼邈 邈碼 碼�녩жΩ� 膜�뉆뚕� (Ctrl/Cmd+C).',
		pasteMsg	: '�꾓뢨곖� �끮べ� 邈碼 磨碼 沕�꾗뚕��뉃㏁� (<STRONG>Ctrl/Cmd+V</STRONG>) 膜邈 碼�뚖� 寞晩磨�뉄� �끮べ녬� 磨�녩넥ⓛΩ녬뚕� �� <STRONG>毛莫�뚕극�</STRONG> 邈碼 磨万�녬뚕�.',
		securityMsg	: '磨�� 漠碼慢邈 魔�녩멍뚖끮㎔� 碼�끯녬뚕ほ� �끮근댵귿�邈 娩�끮㎔� �댸뚕극㏁뚕닥�邈 �녪끱뚕べ댵Ω녩� 膜卍魔邈卍�� �끮넥べ귎뚖� 磨�� 膜碼膜�뉄뉃㏁� clipboard 膜碼娩魔�� 磨碼娩膜. 娩�끮� 磨碼�뚕� 膜�댵ⓛ㎔근� 笠�녩극� 膜邈 碼�뚖� 毛�녩ж근� 磨�녩넥ⓛΩ녬뚕�.',
		pasteArea	: '�끮��� �녩넥ⓛΩ녩���'
	},

	pastefromword :
	{
		confirmCleanup	: '�끮べ녬� 沕�� �끱뚕��댵Ω뉆뚕� 磨�녩넥ⓛΩ녬뚕� 磨�� �녩멈� �끱뚕극넥� 沕�� 碼万 Word 沕毛�� 娩膜�� 碼卍魔. 笠�뚕� �끱뚕��댵Ω뉆뚕� �귋ⓜ� 碼万 �녩넥ⓛΩ녩��� 笠�� 邈碼 毛碼沕卍碼万�� 沕�녬뚕���',
		toolbar			: '�녩넥ⓛΩ녩��� 碼万 Word',
		title			: '�녩넥ⓛΩ녩��� 碼万 Word',
		error			: '磨�� 膜�꾗뚖� 磨邈�댵� 漠慢碼�� 膜碼漠�꾗� 碼�끰⒧Ω� 毛碼沕卍碼万�� 碼慢�꾓㎔밑㎔� 磨碼万�녩닢Ω녬� 娩膜�� �댵з댵� �녩�碼邈膜.'
	},

	pasteText :
	{
		button	: '�녩넥ⓛΩ녩��� 磨�� 晩�녪댵Ω� �끮べ� �먛넥㎔���',
		title	: '�녩넥ⓛΩ녩��� 磨�� 晩�녪댵Ω� �끮べ� �먛넥㎔���'
	},

	templates :
	{
		button			: '碼�꾖��댶뉃�',
		title			: '碼�꾖��댶뉃㏁� �끮�魔�댸뚕㎔�',
		options : '彌万�뚖녪뉄뉃㏁� 碼�꾖���',
		insertOption	: '�끮�魔�댸뚕㎔� 沕�녪댶녬� 寞碼�뚗�万�뚖� 娩�댶녩�',
		selectPromptMsg	: '�꾓뢨곖� 碼�꾖��댸� �끯댵극��녩멈� 邈碼 磨邈碼�� 磨碼万沕邈膜�� 膜邈 �댸뚕극㏁뚕닥�邈 磨邈彌万�뚖녬뚕�<br>(�끮�魔�댸뚕㎔� 沕�녪댶녬� 碼万 膜卍魔 漠�댵Ω뉄녩� 邈�곖�):',
		emptyListMsg	: '(碼�꾖��댵╀� 魔晩邈�뚖� �녩닢��� 碼卍魔)'
	},

	showBlocks : '�녪끮㏁뚕� 磨�꾔댷⒨뉃�',

	stylesCombo :
	{
		label		: '卍磨沕',
		panelTitle	: '卍磨沕�뉃㏁� �귋Ω꾓ⓛⓜ녩���',
		panelTitle1	: '卍磨沕�뉃㏁� 磨�꾔댷�',
		panelTitle2	: '卍磨沕�뉃㏁� 膜邈�댶녩�慢��',
		panelTitle3	: '卍磨沕�뉃㏁� 娩�뚕�'
	},

	format :
	{
		label		: '�곖근끮�',
		panelTitle	: '�곖근끮�',

		tag_p		: '�녩근끮Ω�',
		tag_pre		: '�곖근끮� 娩膜��',
		tag_address	: '笠膜邈卍',
		tag_h1		: '卍邈�녪댸뚕� 1',
		tag_h2		: '卍邈�녪댸뚕� 2',
		tag_h3		: '卍邈�녪댸뚕� 3',
		tag_h4		: '卍邈�녪댸뚕� 4',
		tag_h5		: '卍邈�녪댸뚕� 5',
		tag_h6		: '卍邈�녪댸뚕� 6',
		tag_div		: '磨�녩�'
	},

	div :
	{
		title				: '碼�뚕ж㎔� �뚗� �끮��� DIV',
		toolbar				: '碼�뚕ж㎔� �뚗� �끮��� DIV',
		cssClassInputLabel	: '沕�꾓㎔넨뉃㏁� 娩�뚖댶뉄녩Ω끯�',
		styleSelectLabel	: '卍磨沕',
		IdInputLabel		: '娩�녩㎔넨�',
		languageCodeInputLabel	: ' 沕膜 万磨碼��',
		inlineStyleInputLabel	: '卍磨沕 膜邈�댶녩�慢��(Inline Style)',
		advisoryTitleInputLabel	: '晩�녪댵Ω� �끮닢Ω댵근�',
		langDirLabel		: '寞�뉃� �녪댵닢へ㎔글� 万磨碼��',
		langDirLTRLabel		: '�녪� 磨�� 邈碼卍魔 (LTR)',
		langDirRTLLabel		: '邈碼卍魔 磨�� �녪� (RTL)',
		edit				: '�댸뚕극㏁뚕� Div',
		remove				: '幕莫�� Div'
  	},

	iframe :
	{
		title		: '�댸뚗샺��뚖뉃㏁� IFrame',
		toolbar		: 'IFrame',
		noUrl		: '�꾓뢨곖� �끮넴뚕� URL iframe 邈碼 膜邈寞 沕�녬뚕�',
		scrolling	: '�녪끮㏁뚕� 漠慢沕娩�뉃�',
		border		: '�녪끮㏁뚕� 漠慢�댵� frame'
	},

	font :
	{
		label		: '�귌꾔�',
		voiceLabel	: '�귌꾔�',
		panelTitle	: '�귌꾔�'
	},

	fontSize :
	{
		label		: '碼�녩�碼万��',
		voiceLabel	: '碼�녩�碼万�� �귌꾔�',
		panelTitle	: '碼�녩�碼万��'
	},

	colorButton :
	{
		textColorTitle	: '邈�녫� �끮べ�',
		bgColorTitle	: '邈�녫� 毛卍万�끱뚖녪�',
		panelTitle		: '邈�녫��뉃�',
		auto			: '漠�댵�沕碼邈',
		more			: '邈�녫��뉃㏁� 磨�뚕닢へ�...'
	},

	colors :
	{
		'000' : '卍�뚕Ω�',
		'800000' : '漠邈�끮㏁뚘�',
		'8B4513' : '�귌뉄댶뉃㏁� 娩沕�꾓㎔ほ�',
		'2F4F4F' : '碼邈曼�댵Ω녬� �끮㏁뚖� 磨�� 漠碼沕卍魔邈��',
		'008080' : '笠磨�� �끮㏁뚖� 磨�� 漠碼沕卍魔邈��',
		'000080' : '笠磨�� 卍�뚕�',
		'4B0082' : '�녬뚖꾗�',
		'696969' : '漠碼沕卍魔邈�� 魔�뚕근�',
		'B22222' : '笠魔娩 笠寞邈��',
		'A52A2A' : '�귌뉄댶뉃㏁�',
		'DAA520' : '�끱뚖꾔뉆� 慢�꾓㏁뚘�',
		'006400' : '卍磨万 魔�뚕근�',
		'40E0D0' : '�곚뚕근댵꾸뉃㏁�',
		'0000CD' : '笠磨�� 邈�댵다�',
		'800080' : '碼邈曼�댵Ω녬�',
		'808080' : '漠碼沕卍魔邈��',
		'F00' : '�귋근끮�',
		'FF8C00' : '�녩㎔근녩й� 毛邈邈�녫�',
		'FFD700' : '慢�꾓㏁뚘�',
		'008000' : '卍磨万',
		'0FF' : '笠磨�� �끮㏁뚖� 磨�� 卍磨万',
		'00F' : '笠磨��',
		'EE82EE' : '磨�녪곖�',
		'A9A9A9' : '漠碼沕卍魔邈�� �끮㎔�',
		'FFA07A' : '巒�댵극ほ� 沕膜邈 邈�댵다�',
		'FFA500' : '�녩㎔근녩й�',
		'FFFF00' : '万邈膜',
		'00FF00' : '�곖넨곖글�',
		'AFEEEE' : '�곚뚕근댵꾸뉃㏁� 邈�녫� 毛邈�뚕���',
		'ADD8E6' : '笠磨�� 沕�끮근녫�',
		'DDA0DD' : '笠�꾔댸뚘�',
		'D3D3D3' : '漠碼沕卍魔邈�� 邈�댵다�',
		'FFF0F5' : '磨�녪곖� 沕�끮근녫�',
		'FAEBD7' : '晩魔�뚖귌� 卍�곚뚕�',
		'FFFFE0' : '万邈膜 邈�댵다�',
		'F0FFF0' : '晩卍�꾗�',
		'F0FFFF' : '�꾓㎔з댵극���',
		'F0F8FF' : '笠磨�� 磨邈碼��',
		'E6E6FA' : '磨�녪곖� 沕�끮근녫�',
		'FFF' : '卍�곚뚕�'
	},

	scayt :
	{
		title			: '磨邈邈卍�� 碼�끯꾓㏁� 魔碼�뚖� 娩�끮�',
		opera_title		: '魔�댵넥� 碼毛邈碼 毛娩魔�뚕ⓛΩ녬� �녪끱뚕다댵�',
		enable			: '�곖밑Ω꾓넥㎔꾼� SCAYT',
		disable			: '曼�뚕근곖밑Ω꾓넥㎔꾼� SCAYT',
		about			: '膜邈磨碼邈�� SCAYT',
		toggle			: '彎碼�끯� SCAYT',
		options			: '彌万�뚖녪뉄뉃�',
		langs			: '万磨碼�녪뉃�',
		moreSuggestions	: '毛�뚕다녪뉃㎔��뉃㏁� 磨�뚕닢へ�',
		ignore			: '晩磨�댵� 沕邈膜��',
		ignoreAll		: '晩磨�댵� 沕邈膜�� 碼万 �뉄끯�',
		addWord			: '碼�곖꾸댵��� Word',
		emptyDic		: '�녩Ω� 膜�뚗⒧다녩글� �녩ⓛ㏁뚕� 漠碼�꾗� 磨碼娩膜.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: '彌万�뚖녪뉄뉃�',
		allCaps			: '�녩㎔��뚕��� 彌邈�곖べ� �뉄끯� 沕�꾓Ω�-�댵㏀샸뉄뉃�',
		ignoreDomainNames : '晩磨�댵� 碼万 �녩Ω끯뉃㏁� 膜碼�끯녪�',
		mixedCase		: '晩磨�댵� 碼万 沕�꾔끮㎔ほ� �끮귿⒧� 碼万 幕邈�댶� 磨万邈彌 �� 沕�댷녫�',
		mixedWithDigits	: '晩磨�댵� 碼万 沕�꾔끮㎔� 磨�� �뉄끮극Ω� 晩膜膜',

		languagesTab	: '万磨碼�녪뉃�',

		dictionariesTab	: '膜�뚗⒧다녩글뚖뉃�',
		dic_field_name	: '�녩Ω� 膜�뚗⒧다녩글�',
		dic_create		: '碼�뚕ж㎔�',
		dic_restore		: '磨碼万�뚕Ω곖�',
		dic_delete		: '幕莫��',
		dic_rename		: '魔曼�뚘뚕� �녩Ω�',
		dic_info		: '膜邈 碼磨魔膜碼 膜�뚗⒧다녩글� 沕碼邈磨邈 膜邈 沕�댷⒪� 莫漠�뚕근� �끱뚕다댵�. 磨碼 碼�뚖� 幕碼�꾓� 沕�댷⒪뚖뉃� 膜邈 碼�녩�碼万�� �끮�膜�댵� 娩膜�뉃Ω녩�. �댶귋ほ� 沕�� 膜�뚗⒧다녩글� 沕碼邈磨邈�� 磨万邈彌 �끱뚕다댵� �� 磨�� �녪귋뢨뉃㏁� 沕�� �녪끱뚕べ댵Ω녩� 膜邈 沕�댷⒪� 莫漠�뚕근� 娩�댵��� 毛卍 碼万 笠�� 膜�뚗⒧다녩글� �끯끰⒨� 碼卍魔 磨邈 邈�댸� 卍邈�댵� �끮� 莫漠�뚕근� 娩�댵�. 磨邈碼�� 莫漠�뚕근� 膜�뚗⒧다녩글� 娩漠巒�� 娩�끮� 磨邈 邈�댸� 卍邈�댵� �끮㎔� 磨碼�뚕� �뚗� �녩Ω� 磨邈碼�� 膜�뚗⒧다녩글� 漠�댵� �끮닢�巒 �녪끮㏁뚘뚕�. 碼彌邈 娩�끮� �귋ⓜ꾓� �뚗� 膜�뚗⒧다녩글� 邈�댸� 卍邈�댵� �끮� 莫漠�뚕근� 沕邈膜�뉃㏁뚕��� �꾓뢨곖� �녩Ω� 笠�녩극� 膜邈寞 �� 邈�댸� 膜沕�끯� 磨碼万�뚕Ω곖� 沕�꾗뚗� �녪끮㏁뚘뚕�.',

		aboutTab		: '膜邈磨碼邈��'
	},

	about :
	{
		title		: '膜邈磨碼邈�� CKEditor',
		dlgTitle	: '膜邈磨碼邈�� CKEditor',
		help	: '磨邈邈卍�� $1 磨邈碼�� 邈碼�뉄녪끮㏁뚘�.',
		userGuide : '邈碼�뉄녪끮㏁� 沕碼邈磨邈碼�� CKEditor',
		moreInfo	: '磨邈碼�� 沕卍磨 碼慢�꾓㎔밑㎔� �끮з댵� �꾓뢨곖� 磨�� �댵� 卍碼�뚕� �끮� �끮극㎔ж바� 沕�녬뚕�:',
		copy		: '幕�� �녩닢� &copy; $1. 沕�꾗뚖� 幕�귌댶� �끮��곘댵� 碼卍魔.'
	},

	maximize : '幕膜碼沕麻邈 沕邈膜��',
	minimize : '幕膜碼�귌� 沕邈膜��',

	fakeobjects :
	{
		anchor		: '�꾔녫�邈',
		flash		: '碼�녬뚖끮다� �곘꾓�',
		iframe		: 'IFrame',
		hiddenfield	: '�곚뚖꾓� 毛�녪뉃Ω�',
		unknown		: '娩�뚕� �녩㎔다녩㎔�魔��'
	},

	resize : '沕娩�뚕��� 磨邈碼�� 魔曼�뚘뚕� 碼�녩�碼万��',

	colordialog :
	{
		title		: '碼�녩へ�碼磨 邈�녫�',
		options	:	'彌万�뚖녪뉄뉃㏁� 邈�녫�',
		highlight	: '�끮べ끮㏁뚕�',
		selected	: '邈�녫� 碼�녩へ�碼磨 娩膜��',
		clear		: '毛碼沕 沕邈膜��'
	},

	toolbarCollapse	: '磨卍魔�� �녪댵㎔� 碼磨万碼邈',
	toolbarExpand	: '磨碼万沕邈膜�� �녪댵㎔� 碼磨万碼邈',

	toolbarGroups :
	{
		document : '卍�녩�',
		clipboard : '幕碼�곖멉� �끯댶귋�/磨邈彌娩魔',
		editing : '膜邈 幕碼�� �댸뚕극㏁뚕�',
		forms : '�곖근끯뉃�',
		basicstyles : '娩�뚖댶뉄뉃㏁� 毛碼�뚖�',
		paragraph : '磨�녩�',
		links : '毛�뚖댶녩��뉃�',
		insert : '�댵근댵�',
		styles : '娩�뚖댶뉄뉃�',
		colors : '邈�녫��뉃�',
		tools : '碼磨万碼邈�뉃�'
	},

	bidi :
	{
		ltr : '�녪댵닢へ㎔� �끮べ� 碼万 �녪� 磨�� 邈碼卍魔',
		rtl : '�녪댵닢へ㎔� �끮べ� 碼万 邈碼卍魔 磨�� �녪�'
	},

	docprops :
	{
		label : '�댸뚗샺��뚖뉃㏁� 卍�녩�',
		title : '�댸뚗샺��뚖뉃㏁� 卍�녩�',
		design : '慢邈碼幕��',
		meta : '�곖극㎔�碼膜��',
		chooseColor : '碼�녩へ�碼磨',
		other : '<卍碼�뚕�>',
		docTitle :	'晩�녪댵Ω� 巒�곖���',
		charset : 	'邈�끮꾹�莫碼邈�� �녪댸뚕넨뉅�碼��',
		charsetOther : '邈�끮꾹�莫碼邈�� �녪댸뚕넨뉅�碼�� 膜�뚗�邈',
		charsetASCII : 'ASCII',
		charsetCE : '碼邈�댶앤㏁� �끮귿⒧꾼�',
		charsetCT : '�녬뚖녬� 邈卍�끱� (Big5)',
		charsetCR : '卍�뚕글뚖꾗뚗�',
		charsetGR : '�뚖댶녩Ω녬�',
		charsetJP : '�샶Ω앨녬�',
		charsetKR : '沕邈�뉃㏁�',
		charsetTR : '魔邈沕��',
		charsetUN : '�뚖댶녬뚗⒨뤪� (UTF-8)',
		charsetWE : '碼邈�댶앤㏁� 曼邈磨��',
		docType : '晩�녪댵Ω� �녪댵� 卍�녩�',
		docTypeOther : '晩�녪댵Ω� �녪댵� 卍�녩� 膜�뚗�邈',
		xhtmlDec : '娩碼�끯� 魔晩碼邈�뚖� XHTML',
		bgColor : '邈�녫� 毛卍万�끱뚖녪�',
		bgImage : 'URL 魔巒�댸뚕� 毛卍万�끱뚖녪�',
		bgFixed : '毛卍万�끱뚖녪뉄� 毛�뚖끮㏁뚕� �녩Ω앤겡뚕�',
		txtColor : '邈�녫� �끮べ�',
		margin : '幕碼娩�뚖뉄뉃㏁� 巒�곖���',
		marginTop : '磨碼�꾓�',
		marginLeft : '�녪�',
		marginRight : '邈碼卍魔',
		marginBottom : '毛碼�뚘뚖�',
		metaKeywords : '沕�꾗뚕��댵㏀샺�碼�� �녪끮㏁뚖뉅�莫碼邈�� 卍�녩� (磨碼 沕碼�끮� 寞膜碼 娩�댶녩�)',
		metaDescription : '魔�댵뒨뚖� 卍�녩�',
		metaAuthor : '�녪댸뚕넨녩���',
		metaCopyright : '幕�� 碼�녩へ닢㎔�',
		previewHtml : '<p>碼�뚖� �뚗� <strong>�끮べ� �녪끯댶녪�</strong> 碼卍魔. 娩�끮� 膜邈 幕碼�� 碼卍魔�곖㎔��� 碼万 <a href="javascript:void(0)">CKEditor</a> �뉃넥ほ뚕�.</p>'
	}
};
