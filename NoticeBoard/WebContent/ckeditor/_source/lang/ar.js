/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Arabic language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ar'] =
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
	editorTitle : 'Rich text editor, %1', // MISSING
	editorHelp : 'Press ALT 0 for help', // MISSING

	// ARIA descriptions.
	toolbars	: 'Editor toolbars', // MISSING
	editor		: 'Rich Text Editor', // MISSING

	// Toolbar buttons without dialogs.
	source			: '碼�꾔끮뒈�邈',
	newPage			: '巒�곖�馬 寞膜�듰�馬',
	save			: '幕�곖�',
	preview			: '�끮밑Ω듲녩� 碼�꾓뒝곖�馬',
	cut				: '�귋�',
	copy			: '�녩넥�',
	paste			: '�꾓뒝�',
	print			: '慢磨碼晩馬',
	underline		: '魔卍慢�듰�',
	bold			: '曼碼�끯�',
	italic			: '�끮㎔┽�',
	selectAll		: '魔幕膜�듰� 碼�꾔꺳�',
	removeFormat	: '瑪万碼�꾓� 碼�꾓べ녩넨듲귋㎔�',
	strike			: '�듰べ댵넥뢨� 漠慢',
	subscript		: '�끯녩��곖�',
	superscript		: '�끮극べ곖�',
	horizontalrule	: '漠慢 �곖㎔뒝�',
	pagebreak		: '瑪膜漠碼�� 巒�곖�馬 寞膜�듰�馬',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '瑪万碼�꾓� 邈碼磨慢',
	undo			: '魔邈碼寞晩',
	redo			: '瑪晩碼膜馬',

	// Common messages and labels.
	common :
	{
		browseServer	: '魔巒�곖�',
		url				: '碼�꾓극㎔ⓛ�',
		protocol		: '碼�꾓ⓛ근댵べ댶꺳댶�',
		upload			: '邈�곖�',
		uploadSubmit	: '粒邈卍��',
		image			: '巒�댵극�',
		flash			: '�곘꾓㎔�',
		form			: '�녪끯댵겝�',
		checkbox		: '漠碼�녩� 瑪漠魔�듰㎔�',
		radio			: '万邈 碼漠魔�듰㎔�',
		textField		: '�끮극ⓛ� �녩�',
		textarea		: '�끮넥㎔�馬 �녩뒝듰�',
		hiddenField		: '瑪膜邈碼寞 幕�귌� 漠�곘�',
		button			: '万邈 彎曼慢',
		select			: '碼漠魔碼邈',
		imageButton		: '万邈 巒�댵극�',
		notSet			: '<磨膜�댶� 魔幕膜�듰�>',
		id				: '碼�꾓근귌�',
		name			: '碼�꾓㎔넨�',
		langDir			: '瑪魔寞碼�� 碼�꾔녩�',
		langDirLtr		: '碼�꾔듰넥㎔� �꾔꾔듲끯듲� (LTR)',
		langDirRtl		: '碼�꾔듲끯듲� �꾔꾔듰넥㎔� (RTL)',
		langCode		: '邈�끮� 碼�꾔꾓붕�',
		longDescr		: '碼�꾔댵뒝� 碼�꾓べ곖뒝듲꾔�',
		cssClass		: '�곖┺㎔� 碼�꾓べ녩넨듲�',
		advisoryTitle	: '晩�녪댵Ω� 碼�꾓べ귋근듰�',
		cssStyle		: '�녪끮�',
		ok				: '�끯댵Ω곘�',
		cancel			: '瑪�꾓붕㎔� 碼�꾓Ｙ끮�',
		close			: '粒曼�꾔�',
		preview			: '碼卍魔晩邈碼彎',
		generalTab		: '晩碼��',
		advancedTab		: '�끮べ귋���',
		validateNumberFailed : '�꾓Ω듲댵ж� �녩べ듰ж�',
		confirmNewPage	: '卍魔�곘귋� 粒�� �끮へ붙듲듰극㎔� 碼莫碼 �꾔� 魔�귌� 磨幕�곖멉뉃� 碼�댶꾓�. �뉄� 粒�녩� �끮へＹ꺲� 粒�녪� 魔邈�듰� 巒�곖�馬 寞膜�듰�馬��',
		confirmCancel	: '磨晩彎 碼�꾓��듰㎔극㎔� �귋� 魔曼�듰극�. �뉄� 粒�녩� �끮へＹ꺲� �끯� 瑪曼�꾓Ω� �끮극ⓛ� 碼�꾔녩뒈�',
		options			: '漠�듰㎔극㎔�',
		target			: 'Target', // MISSING
		targetNew		: 'New Window (_blank)', // MISSING
		targetTop		: 'Topmost Window (_top)', // MISSING
		targetSelf		: 'Same Window (_self)', // MISSING
		targetParent	: 'Parent Window (_parent)', // MISSING
		langDirLTR		: 'Left to Right (LTR)', // MISSING
		langDirRTL		: 'Right to Left (RTL)', // MISSING
		styles			: 'Style', // MISSING
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: '碼�꾓밑극�',
		height			: '碼�꾓Ω극べ곖㎔�',
		align			: '�끮�碼莫碼馬',
		alignLeft		: '�듰넥㎔�',
		alignRight		: '�듲끯듲�',
		alignCenter		: '�댵넥�',
		alignTop		: '粒晩�꾔�',
		alignMiddle		: '�댵넥�',
		alignBottom		: '粒卍�곘�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '碼�꾓㎔극べ곖㎔� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
		invalidWidth	: '碼�꾓밑극� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, 曼�듰� �끮へ㎔�</span>'
	},

	contextmenu :
	{
		options : 'Context Menu Options' // MISSING
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '瑪膜邈碼寞  漠碼巒.��',
		title		: '碼漠魔邈 碼�꾓��댵㎔�',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '邈碼磨慢',
		other 		: '<粒漠邈��>',
		menu		: '魔幕邈�듰� 邈碼磨慢',
		title		: '瑪邈魔磨碼慢 魔娩晩磨��',
		info		: '�끮바꾔댶끮㎔� 碼�꾓극㎔ⓛ�',
		target		: '�뉃��� 碼�꾓극㎔ⓛ�',
		upload		: '邈�곖�',
		advanced	: '�끮べ귋���',
		type		: '�녪댵� 碼�꾓극ⓛ�',
		toUrl		: 'URL', // MISSING
		toAnchor	: '�끯꺲Ω� �곘� �뉃겝� 碼�꾔끮넥べ녩�',
		toEmail		: '磨邈�듰� 瑪�꾔꺲へ근댶녪�',
		targetFrame		: '<瑪慢碼邈>',
		targetPopup		: '<�녩Ω곖겝� �끯녩ⓛベ귋�>',
		targetFrameName	: '碼卍�� 碼�꾓Ω뢍㎔� 碼�꾔끮넥べ뉃���',
		targetPopupName	: '碼卍�� 碼�꾔녩Ω곖겝� 碼�꾔끯녩ⓛベ귋�',
		popupFeatures	: '漠巒碼痲巒 碼�꾔녩Ω곖겝� 碼�꾔끯녩ⓛベ귋�',
		popupResizable	: '�귋㎔ⓜ꾓� 碼�꾓へ다꺳듲�',
		popupStatusBar	: '娩邈�듰� 碼�꾓�碼�꾓�',
		popupLocationBar: '娩邈�듰� 碼�꾓바녪댵Ω�',
		popupToolbar	: '娩邈�듰� 碼�꾓Ｘ��댵㎔�',
		popupMenuBar	: '碼�꾔귌댵㎔┽� 碼�꾓극┽듰넨듰�',
		popupFullScreen	: '�끯꾓� 碼�꾓닢㎔닢� (IE)',
		popupScrollBars	: '粒娩邈慢馬 碼�꾓べ끮근듰�',
		popupDependent	: '魔碼磨晩 (Netscape)',
		popupLeft		: '碼�꾓べ끮근꺲� �꾔꾔듰넥㎔�',
		popupTop		: '碼�꾓べ끮근꺲� �꾔꾓Ｘ바꾔�',
		id				: '�뉄댶듰�',
		langDir			: '瑪魔寞碼�� 碼�꾔녩�',
		langDirLTR		: '碼�꾔듰넥㎔� �꾔꾔듲끯듲� (LTR)',
		langDirRTL		: '碼�꾔듲끯듲� �꾔꾔듰넥㎔� (RTL)',
		acccessKey		: '�끯곖㎔べ듰� 碼�꾓Ω�魔巒碼邈',
		name			: '碼�꾓㎔넨�',
		langCode			: '�꺳댵� 碼�꾔녩�',
		tabIndex			: '碼�꾓へ극べ듰�',
		advisoryTitle		: '晩�녪댵Ω� 碼�꾓べ귋근듰�',
		advisoryContentType	: '�녪댵� 碼�꾓べ귋근듰�',
		cssClasses		: '�곖┺㎔� 碼�꾓べ녩넨듲�',
		charset			: '魔邈�끯듰� 碼�꾔끮㎔�馬 碼�꾔끮뢨꾔댵ⓛ�',
		styles			: '�녪끮�',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '碼漠魔邈 晩�꾓Ω끮� �끮극ж바듰�',
		anchorName		: '幕卍磨 碼�꾓㎔넨�',
		anchorId			: '幕卍磨 邈�귌� 碼�꾓바녩뒈�',
		emailAddress		: '晩�녪댵Ω� 碼�꾓ⓛ근듰� 瑪�꾔꺲へ근댶녪�',
		emailSubject		: '�끯댵뛰댵� 碼�꾓극넥Ω꾓�',
		emailBody		: '�끮�魔�댶� 碼�꾓극넥Ω꾓�',
		noAnchors		: '(�꾓� 魔�댵ж� 晩�꾓Ω끮㎔� �끮극ж바듰� �곘� �뉃겝� 碼�꾔끮넥べ녩�)',
		noUrl			: '�끯� �곖뛰꾔� 粒膜漠�� 晩�녪댵Ω� 碼�꾔끯댶귋� 碼�꾓겟� �듰다듰� 瑪�꾔듲� 碼�꾓극㎔ⓛ�',
		noEmail			: '�끯� �곖뛰꾔� 粒膜漠�� 晩�녪댵Ω� 碼�꾓ⓛ근듰� 碼�꾓��꾔꺲へ근댶녪�'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '瑪娩碼邈馬 �끮극ж바듰�',
		menu		: '魔幕邈�듰� 碼�꾓Ω닢㎔극� 碼�꾔끮극ж바듰�',
		title		: '漠巒碼痲巒 碼�꾓Ω닢㎔극� 碼�꾔끮극ж바듰�',
		name		: '碼卍�� 碼�꾓Ω닢㎔극� 碼�꾔끮극ж바듰�',
		errorName	: '碼�꾓극ж㎔� �꺲へ㎔ⓛ� 碼卍�� 碼�꾓Ω닢㎔극� 碼�꾔끮극ж바듰�',
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
		title				: '磨幕麻 �댵㎔넥へⓛ�碼��',
		find				: '磨幕麻',
		replace				: '瑪卍魔磨膜碼��',
		findWhat			: '碼�꾓ⓛ�麻 磨�:',
		replaceWith			: '瑪卍魔磨膜碼�� 磨�:',
		notFoundMsg			: '�꾔� �듰べ� 碼�꾓밑ベ댵� 晩�꾔� 碼�꾔녩� 碼�꾔끮�膜膜.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '�끮뢍㎔ⓜ귋� 幕碼�꾓� 碼�꾓Ｘ�邈��',
		matchWord			: '�끮뢍㎔ⓜ귋� 磨碼�꾔꺲Ω끯�',
		matchCyclic			: '�끮뢍㎔ⓜ귋� 膜�댵근듰�',
		replaceAll			: '瑪卍魔磨膜碼�� 碼�꾔꺳�',
		replaceSuccessMsg	: '魔�� 碼卍魔磨膜碼�� 1% �끯� 碼�꾓�碼�꾓㎔� '
	},

	// Table Dialog
	table :
	{
		toolbar		: '寞膜�댶�',
		title		: '漠巒碼痲巒 碼�꾓ж��댶�',
		menu		: '漠巒碼痲巒 碼�꾓ж��댶�',
		deleteTable	: '幕莫�� 碼�꾓ж��댶�',
		rows		: '巒�곘댶�',
		columns		: '粒晩�끮�馬',
		border		: '碼�꾓�膜�댵�',
		widthPx		: '磨�꺲넨�',
		widthPc		: '磨碼�꾔끮┺�',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '魔磨碼晩膜 碼�꾓��꾓Ω듰�',
		cellPad		: '碼�꾔끮넥Ω곖� 碼�꾓ⓛ㎔�痲馬',
		caption		: '碼�꾔댵뒝�',
		summary		: '碼�꾓��꾓㎔뒈�',
		headers		: '碼�꾓바녩Ω댶듲�',
		headersNone		: '磨膜�댶�',
		headersColumn	: '碼�꾓바끯댵� 碼�꾓Ｙ댶�',
		headersRow		: '碼�꾓뒝� 碼�꾓Ｙ댶�',
		headersBoth		: '�꺳꾓Ω뉄끮�',
		invalidRows		: '晩膜膜 碼�꾓뒝곘댶� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼�� 粒�꺲ⓛ� �끯� 巒�곖�.',
		invalidCols		: '晩膜膜 碼�꾓Ｘ바끮�馬 �듰ж� 粒�� �듲꺳댶� 晩膜膜碼�� 粒�꺲ⓛ� �끯� 巒�곖�.',
		invalidBorder	: '幕寞�� 碼�꾓�膜 �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
		invalidWidth	: '晩邈彎 碼�꾓ж��댶� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
		invalidHeight	: '碼邈魔�곖㎔� 碼�꾓ж��댶� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
		invalidCellSpacing	: '碼�꾔끮넥Ω곖� 磨�듲� 碼�꾓��꾓Ω듰� �듰ж� 粒�� 魔�꺳댶� 晩膜膜碼��.',
		invalidCellPadding	: '碼�꾔끮넥Ω곖� 碼�꾓ⓛ㎔�痲馬 �듰ж� 粒�� 魔�꺳댶� 晩膜膜碼��',

		cell :
		{
			menu			: '漠�꾔듰�',
			insertBefore	: '瑪膜邈碼寞 漠�꾔듰� �귋ⓜ�',
			insertAfter		: '瑪膜邈碼寞 漠�꾔듰� 磨晩膜',
			deleteCell		: '幕莫�� 漠�꾔듰�',
			merge			: '膜�끮� 漠�꾓Ω듰�',
			mergeRight		: '膜�끮� �꾔꾔듲끯듲�',
			mergeDown		: '膜�끮� �꾔꾓Ｘ넨곘�',
			splitHorizontal	: '魔�귋넨듲� 碼�꾓��꾔듰� 粒�곘귌듰Ω�',
			splitVertical	: '魔�귋넨듲� 碼�꾓��꾔듰� 晩�끯댵��듰Ω�',
			title			: '漠巒碼痲巒 碼�꾓��꾔듰�',
			cellType		: '�녪댵� 碼�꾓��꾔듰�',
			rowSpan			: '碼�끮へ�碼膜 碼�꾓뒝곘댶�',
			colSpan			: '碼�끮へ�碼膜 碼�꾓Ｘ바끮�馬',
			wordWrap		: '碼�꾓べ곖Ω� 碼�꾔녩�',
			hAlign			: '�끮�碼莫碼馬 粒�곘귌듰�',
			vAlign			: '�끮�碼莫碼馬 邈粒卍�듰�',
			alignBaseline	: '漠慢 碼�꾔귋㎔밑�馬',
			bgColor			: '�꾔댶� 碼�꾓��꾔곘듰�',
			borderColor		: '�꾔댶� 碼�꾓�膜�댵�',
			data			: '磨�듰Ω녩㎔�',
			header			: '晩�녪댵Ω�',
			yes				: '�녩바�',
			no				: '�꾓�',
			invalidWidth	: '晩邈彎 碼�꾓��꾔듰� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
			invalidHeight	: '碼邈魔�곖㎔� 碼�꾓��꾔듰� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
			invalidRowSpan	: '碼�끮へ�碼膜 碼�꾓뒝곘댶� �듰ж� 粒�� �듲꺳댶� 晩膜膜碼�� 巒幕�듰�碼��.',
			invalidColSpan	: '碼�끮へ�碼膜 碼�꾓Ｘ바끮�馬 �듰ж� 粒�� �듲꺳댶� 晩膜膜碼�� 巒幕�듰�碼��.',
			chooseColor		: '碼漠魔邈'
		},

		row :
		{
			menu			: '巒��',
			insertBefore	: '瑪膜邈碼寞 巒�� �귋ⓜ�',
			insertAfter		: '瑪膜邈碼寞 巒�� 磨晩膜',
			deleteRow		: '幕莫�� 巒�곘댶�'
		},

		column :
		{
			menu			: '晩�끯댵�',
			insertBefore	: '瑪膜邈碼寞 晩�끯댵� �귋ⓜ�',
			insertAfter		: '瑪膜邈碼寞 晩�끯댵� 磨晩膜',
			deleteColumn	: '幕莫�� 粒晩�끮�馬'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '漠巒碼痲巒 万邈 碼�꾓뛔붕�',
		text		: '碼�꾔귌듲끮�/碼�꾓へ넨끯듰�',
		type		: '�녪댵� 碼�꾓꾜�',
		typeBtn		: '万邈',
		typeSbm		: '瑪邈卍碼��',
		typeRst		: '瑪晩碼膜馬 魔晩�듲듲�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '漠巒碼痲巒 漠碼�녩� 碼�꾓Ω�魔�듰㎔�',
		radioTitle	: '漠巒碼痲巒 万邈 碼�꾓��듰㎔�',
		value		: '碼�꾔귌듲끮�',
		selected	: '�끮�膜膜'
	},

	// Form Dialog.
	form :
	{
		title		: '漠巒碼痲巒 碼�꾔녪끯댵겝�',
		menu		: '漠巒碼痲巒 碼�꾔녪끯댵겝�',
		action		: '碼卍�� 碼�꾔끯꾔�',
		method		: '碼�꾓Ｘ넨꾔댵�',
		encoding	: '魔娩�곘듰�'
	},

	// Select Field Dialog.
	select :
	{
		title		: '漠巒碼痲巒 碼漠魔�듰㎔� 碼�꾓��귌�',
		selectInfo	: '碼漠魔碼邈 �끮바꾔댶끮㎔�',
		opAvail		: '碼�꾓��듰㎔극㎔� 碼�꾔끮へ㎔�馬',
		value		: '碼�꾔귌듲끮�',
		size		: '碼�꾓�寞��',
		lines		: '碼�꾓Ｘ넥뢍�',
		chkMulti	: '碼�꾓넨끮㎔� 磨魔幕膜�듰�碼魔 �끮へ밑�膜馬',
		opText		: '碼�꾔녩�',
		opValue		: '碼�꾔귌듲끮�',
		btnAdd		: '瑪彎碼�곖�',
		btnModify	: '魔晩膜�듲�',
		btnUp		: '粒晩�꾔�',
		btnDown		: '粒卍�곘�',
		btnSetValue : '瑪寞晩�꾔뉃� �끮�膜膜馬',
		btnDelete	: '瑪万碼�꾓�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '漠巒碼痲巒 �끮넥㎔�馬 碼�꾔녩�',
		cols		: '碼�꾓Ｘ바끮�馬',
		rows		: '碼�꾓뒝곘댶�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '漠巒碼痲巒 �끮극ⓛ� 碼�꾔녩�',
		name		: '碼�꾓㎔넨�',
		value		: '碼�꾔귌듲끮�',
		charWidth	: '晩邈彎 碼�꾓넨끮㎔�',
		maxChars	: '碼�귋뒝� 晩膜膜 �꾔꾓넨끮㎔�',
		type		: '�녪댵� 碼�꾔끮�魔�댶�',
		typeText	: '�녩�',
		typePass	: '�꺳꾔끮� �끮근댵�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '漠巒碼痲巒 碼�꾓��귌� 碼�꾔끮��곘�',
		name	: '碼�꾓㎔넨�',
		value	: '碼�꾔귌듲끮�'
	},

	// Image Dialog.
	image :
	{
		title		: '漠巒碼痲巒 碼�꾓뒝댵극�',
		titleButton	: '漠巒碼痲巒 万邈 碼�꾓뒝댵극�',
		menu		: '漠巒碼痲巒 碼�꾓뒝댵극�',
		infoTab		: '�끮바꾔댶끮㎔� 碼�꾓뒝댵극�',
		btnUpload	: '粒邈卍�꾔뉃� �꾔꾓�碼膜��',
		upload		: '邈�곖�',
		alt			: '晩�녪댵Ω� 碼�꾓뒝댵극�',
		lockRatio	: '魔�녩㎔넨� 碼�꾓�寞��',
		resetSize	: '瑪卍魔晩碼膜馬 碼�꾓�寞�� 碼�꾓Ｘ뒝꾔�',
		border		: '卍�끯� 碼�꾓�膜�댵�',
		hSpace		: '魔磨碼晩膜 粒�곘귌�',
		vSpace		: '魔磨碼晩膜 晩�끯댵���',
		alertUrl	: '�곖뛰꾓Ω� 粒�꺲へ� 碼�꾔끯댶귋� 碼�꾓겟� 魔�댵ж� 晩�꾔듲� �뉃겟� 碼�꾓뒝댵극�.',
		linkTab		: '碼�꾓극㎔ⓛ�',
		button2Img	: '�뉄� 魔邈�듰� 魔幕�댶듲� 万邈 碼�꾓뒝댵극� 碼�꾔끮�魔碼邈 瑪�꾔� 巒�댵극� 磨卍�듰뢍⒧�',
		img2Button	: '�뉄� 魔邈�듰� 魔幕�댶듲� 碼�꾓뒝댵극� 碼�꾔끮�魔碼邈馬 瑪�꾔� 万邈 巒�댵극⒧�',
		urlMissing	: '晩�녪댵Ω� �끮뒈�邈 碼�꾓뒝댵극� �끯곘귌댵�',
		validateBorder	: 'Border must be a whole number.', // MISSING
		validateHSpace	: 'HSpace must be a whole number.', // MISSING
		validateVSpace	: 'VSpace must be a whole number.' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: '漠巒碼痲巒 碼�꾔곘꾓㎔�',
		propertiesTab	: '碼�꾓�巒碼痲巒',
		title			: '漠巒碼痲巒 �곘듲꾔� 碼�꾔곘꾓㎔�',
		chkPlay			: '魔娩曼�듲� 魔�꾔귋㎔┽�',
		chkLoop			: '魔�꺲극㎔�',
		chkMenu			: '魔�끯꺳듲� �귋㎔┽끮� �곘듲꾔� 碼�꾔곘꾓㎔�',
		chkFull			: '�끯꾓� 碼�꾓닢㎔닢�',
 		scale			: '碼�꾓�寞��',
		scaleAll		: '瑪挽�뉃㎔� 碼�꾔꺳�',
		scaleNoBorder	: '磨�꾓� 幕膜�댵�',
		scaleFit		: '彎磨慢 魔碼��',
		access			: '膜漠�댶� 碼�꾔녩� 碼�꾓ⓛ근끮з�',
		accessAlways	: '膜碼痲�끮Ω�',
		accessSameDomain: '�녪곖� 碼�꾔녩뢍Ω�',
		accessNever		: '�끮뢨꾔귋Ω�',
		alignAbsBottom	: '粒卍�곘� 碼�꾔녩�',
		alignAbsMiddle	: '�댵넥� 碼�꾓넥뢍�',
		alignBaseline	: '晩�꾔� 碼�꾓넥뢍�',
		alignTextTop	: '粒晩�꾔� 碼�꾔녩�',
		quality			: '寞�댵�馬',
		qualityBest		: '粒�곖뛰�',
		qualityHigh		: '晩碼�꾔듰�',
		qualityAutoHigh	: '晩碼�꾔듰� 魔�꾔귋㎔┽듰Ω�',
		qualityMedium	: '�끮べ댵넥뢍�',
		qualityAutoLow	: '�끯녩��곖뛔� 魔�꾔귋㎔┽듰Ω�',
		qualityLow		: '�끯녩��곖뛔�',
		windowModeWindow: '�녩Ω곖겝�',
		windowModeOpaque: '曼�듰� 娩�곖Ω�',
		windowModeTransparent : '娩�곖Ω�',
		windowMode		: '�댵뛔� 碼�꾔녩Ω곖겝�',
		flashvars		: '�끮へ붙듰극㎔� 碼�꾔곘꾓㎔�',
		bgcolor			: '�꾔댶� 碼�꾓��꾔곘듰�',
		hSpace			: '魔磨碼晩膜 粒�곘귌�',
		vSpace			: '魔磨碼晩膜 晩�끯댵���',
		validateSrc		: '�곖뛰꾓Ω� 粒膜漠�� 晩�녪댵Ω� 碼�꾔끯댶귋� 碼�꾓겟� �듰다듰� 瑪�꾔듲� 碼�꾓극㎔ⓛ�',
		validateHSpace	: 'HSpace �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.',
		validateVSpace	: 'VSpace �듰ж� 粒�� �듲꺳댶� 晩膜膜碼��.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '魔膜�귌듲� 瑪�끯꾓㎔┽�',
		title			: '碼�꾓へ��귌듲� 碼�꾓��끯꾓㎔┽�',
		notAvailable	: '晩�곘댵Ω뗗� �댶꾔꺳� �뉃겟� 碼�꾓�膜�끮� 曼�듰� �끮へ㎔�馬 碼�꾓Ω�',
		errorLoading	: '漠慢粒 �곘� 魔幕�끯듲� 魔慢磨�듲� 漠膜�끮� 碼�꾓㎔넥へ뛔Ω곖�: %s.',
		notInDic		: '�꾔듰넥� �곘� 碼�꾔귋Ω끯댵�',
		changeTo		: '碼�꾓へ붙듲듰� 瑪�꾔�',
		btnIgnore		: '魔寞碼�뉄�',
		btnIgnoreAll	: '魔寞碼�뉄� 碼�꾔꺳�',
		btnReplace		: '魔曼�듲듰�',
		btnReplaceAll	: '魔曼�듲듰� 碼�꾔꺳�',
		btnUndo			: '魔邈碼寞晩',
		noSuggestions	: '- �꾓� 魔�댵ж� 瑪�귋へ극㎔�碼魔 -',
		progress		: '寞碼邈�� 碼�꾓へ��귌듲� 碼�꾓Ω끯꾓㎔┽�',
		noMispell		: '魔�� 碼�꾓へ��귌듲� 碼�꾓��끯꾓㎔┽�: �꾔� �듰べ� 碼�꾓밑ベ댵� 晩�꾔� 粒�� 粒漠慢碼立 瑪�끯꾓㎔┽듰�',
		noChanges		: '魔�� 碼�꾓へ��귌듲� 碼�꾓��끯꾓㎔┽�: �꾔� �듰べ� 魔曼�듲듰� 粒�� �꺳꾔끮�',
		oneChange		: '魔�� 碼�꾓へ��귌듲� 碼�꾓��끯꾓㎔┽�: 魔�� 魔曼�듲듰� �꺳꾔끮� �댵㎔�膜馬 �곘귋�',
		manyChanges		: '魔�� 瑪�꺳끮Ω� 碼�꾓へ��귌듲� 碼�꾓��끯꾓㎔┽�: 魔�� 魔曼�듲듰� %1 �끯� �꺳꾔끮㎔�',
		ieSpellDownload	: '碼�꾔끮��귌� 碼�꾓��끯꾓㎔┽� (碼�꾓��녩з꾔듰꾸�) 曼�듰� �끮ヘⓜ뫸�. �뉄� 魔�댵� 魔幕�끯듲꾔� 碼�꾓↘녩�'
	},

	smiley :
	{
		toolbar	: '碼磨魔卍碼�끮㎔�',
		title	: '瑪膜邈碼寞 碼磨魔卍碼�끮㎔�',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '晩�녩뒈� 1%'
	},

	numberedlist	: '碼膜漠碼��/幕莫�� 魔晩膜碼膜 邈�귌끯�',
	bulletedlist	: '碼膜漠碼��/幕莫�� 魔晩膜碼膜 �녪귋뢨�',
	indent			: '万�듰㎔�馬 碼�꾔끮넥Ω곖� 碼�꾓ⓛ㎔�痲馬',
	outdent			: '瑪�녪귋㎔� 碼�꾔끮넥Ω곖� 碼�꾓ⓛ㎔�痲馬',

	justify :
	{
		left	: '�끮�碼莫碼馬 瑪�꾔� 碼�꾔듰넥㎔�',
		center	: '魔�댵넨듰�',
		right	: '�끮�碼莫碼馬 瑪�꾔� 碼�꾔듲끯듲�',
		block	: '彎磨慢'
	},

	blockquote : '碼�귋へⓛ㎔�',

	clipboard :
	{
		title		: '�꾓뒝�',
		cutError	: '碼�꾓Ω밑�碼膜碼魔 碼�꾓Ｙ끯녪듰� �꾔꾔끮へ뒝곖� 碼�꾓겟� 魔卍魔漠膜�끯� 魔�끯녩� 碼�꾔귋� 碼�꾓べ꾔귋㎔┽�. �곖뛰꾓Ω� 瑪卍魔漠膜�� �꾔댵�馬 碼�꾔끯곖㎔べ듰� �꾔곖바� 莫�꾔� (Ctrl/Cmd+X).',
		copyError	: '碼�꾓Ω밑�碼膜碼魔 碼�꾓Ｙ끯녪듰� �꾔꾔끮へ뒝곖� 碼�꾓겟� 魔卍魔漠膜�끯� 魔�끯녩� 碼�꾔녩넥� 碼�꾓べ꾔귋㎔┽�. �곖뛰꾓Ω� 瑪卍魔漠膜�� �꾔댵�馬 碼�꾔끯곖㎔べ듰� �꾔곖바� 莫�꾔� (Ctrl/Cmd+C).',
		pasteMsg	: '碼�꾓뒝� 膜碼漠�� 碼�꾓뒝녩��댶� 磨瑪卍魔漠膜碼�� 万邈碼痲邈 (<STRONG>Ctrl/Cmd+V</STRONG>) �곘� �꾔댵�馬 碼�꾔끯곖㎔べ듰��� 麻�� 碼彎曼慢 万邈  <STRONG>�끯댵Ω곘�</STRONG>.',
		securityMsg	: '�녩멈극Ω� �꾓Ω밑�碼膜碼魔 碼�꾓Ｙ끮Ω� 碼�꾓�碼巒馬 磨�끮へ뒝곖��꺲� �꾔� �듰べ끯꺳� �뉃겝� 碼�꾔끮�邈邈 �끯� 碼�꾔댵뒝댶� �꾔끮�魔�댶� 幕碼�곖멈べ꺲� �꾓겟꾔� �듰ж� 晩�꾔듲� �꾓뒝� 碼�꾔끮�魔�댶� �끮극� 粒漠邈�� �곘� �뉃겟� 碼�꾔녩Ω곖겝�.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: '�듰ⓛ��� 粒�� 碼�꾔녩� 碼�꾔끮극㎔� �꾓뒝귌� �끯녩넨댵� �끯� 磨邈�녩Ω끮� �댶댵극�. �뉄� 魔�댵� 魔�녩멉듲곘� �귋ⓜ� 碼�꾓닢근댵� �곘� 晩�끯꾔듰� 碼�꾔꾓뒝귋�',
		toolbar			: '�꾓뒝� �끯� �댶댵극�',
		title			: '�꾓뒝� �끯� �댶댵극�',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '�꾓뒝� �꺳녩� 磨卍�듰�',
		title	: '�꾓뒝� �꺳녩� 磨卍�듰�'
	},

	templates :
	{
		button			: '碼�꾔귌댵Ω꾓�',
		title			: '�귌댵Ω꾓� 碼�꾔끮�魔�댶�',
		options : 'Template Options', // MISSING
		insertOption	: '碼卍魔磨膜碼�� 碼�꾔끮�魔�댶�',
		selectPromptMsg	: '碼漠魔邈 碼�꾔귋Ω꾓� 碼�꾓겟� 魔�댵� �댵뛔바� �곘� 碼�꾔끮�邈邈',
		emptyListMsg	: '(�꾔� �듰べ� 魔晩邈�듲� 粒�� �귋Ω꾓�)'
	},

	showBlocks : '�끮�慢慢 魔�곖뒝듲꾔�',

	stylesCombo :
	{
		label		: '粒�녪끮㎔�',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: '粒�녪끮㎔� 碼�꾔곘귋극�',
		panelTitle2	: '粒�녪끮㎔� �끮뛰끯녩�',
		panelTitle3	: '粒�녪끮㎔� 碼�꾔꺲㎔┽�'
	},

	format :
	{
		label		: '魔�녩넨듲�',
		panelTitle	: '魔�녩넨듲� 碼�꾔곘귋극�',

		tag_p		: '晩碼膜��',
		tag_pre		: '�끯녩넨뫹�',
		tag_address	: '晩�녪댵Ω�',
		tag_h1		: '碼�꾓바녪댵Ω� 1',
		tag_h2		: '碼�꾓바녪댵Ω�  2',
		tag_h3		: '碼�꾓바녪댵Ω�  3',
		tag_h4		: '碼�꾓바녪댵Ω�  4',
		tag_h5		: '碼�꾓바녪댵Ω�  5',
		tag_h6		: '碼�꾓바녪댵Ω�  6',
		tag_div		: '晩碼膜�� (DIV)'
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
		label		: '漠慢',
		voiceLabel	: '幕寞�� 碼�꾓�慢',
		panelTitle	: '幕寞�� 碼�꾓�慢'
	},

	fontSize :
	{
		label		: '幕寞�� 碼�꾓�慢',
		voiceLabel	: '幕寞�� 碼�꾓�慢',
		panelTitle	: '幕寞�� 碼�꾓�慢'
	},

	colorButton :
	{
		textColorTitle	: '�꾔댶� 碼�꾔녩�',
		bgColorTitle	: '�꾔댶� 碼�꾓��꾔곘듰�',
		panelTitle		: 'Colors', // MISSING
		auto			: '魔�꾔귋㎔┽�',
		more			: '粒�꾔댵Ω� 瑪彎碼�곘듰�...'
	},

	colors :
	{
		'000' : '粒卍�댵�',
		'800000' : '�꺲넥べ녩㎔┽�',
		'8B4513' : '磨�녪� �곖㎔へ�',
		'2F4F4F' : '邈�끮㎔��� 粒邈膜�댵㎔꾸� 曼碼�끯�',
		'008080' : '粒万邈�� �끮�彎邈',
		'000080' : '粒万邈�� 膜碼�꺳�',
		'4B0082' : '�꺲��꾔�',
		'696969' : '邈�끮㎔��� 膜碼�꺳�',
		'B22222' : '慢�댵ⓜ�',
		'A52A2A' : '磨�녪�',
		'DAA520' : '莫�뉃ⓜ� 膜碼�꺳�',
		'006400' : '粒漠彎邈 膜碼�꺳�',
		'40E0D0' : '�곘듰근댵꾸�',
		'0000CD' : '粒万邈�� �끮べ댵넥�',
		'800080' : '磨�녪곖넥з� 曼碼�끯�',
		'808080' : '邈�끮㎔���',
		'F00' : '粒幕�끮�',
		'FF8C00' : '磨邈魔�귋Ω꾔� 膜碼�꺳�',
		'FFD700' : '莫�뉃ⓜ�',
		'008000' : '粒漠彎邈',
		'0FF' : '魔邈�꺳댵㎔�',
		'00F' : '粒万邈��',
		'EE82EE' : '磨�녪곖넥з�',
		'A9A9A9' : '邈�끮㎔��� 娩碼幕磨',
		'FFA07A' : '磨邈魔�귋Ω꾔� �댵극���',
		'FFA500' : '磨邈魔�귋Ω꾔�',
		'FFFF00' : '粒巒�곖�',
		'00FF00' : '�꾔듲끯댶녪�',
		'AFEEEE' : '�곘듰근댵꾸� 娩碼幕磨',
		'ADD8E6' : '粒万邈�� �곖㎔へ�',
		'DDA0DD' : '磨�녪곖넥з� �곖㎔へ�',
		'D3D3D3' : '邈�끮㎔��� �곖㎔へ�',
		'FFF0F5' : '�댵극��� �곖㎔へ�',
		'FAEBD7' : '粒磨�듰� 晩魔�듲�',
		'FFFFE0' : '粒巒�곖� �곖㎔へ�',
		'F0FFF0' : '粒磨�듰� �끮㎔┽� �꾔꾓Ｘ�彎邈',
		'F0FFFF' : '卍�끮Ω댶�',
		'F0F8FF' : '�꾓ⓜ녪�',
		'E6E6FA' : '粒邈寞�댵Ω녪�',
		'FFF' : '粒磨�듰�'
	},

	scayt :
	{
		title			: '魔膜�귌듲� 瑪�끯꾓㎔┽� 粒麻�녩㎔� 碼�꾔꺲へ㎔ⓛ�',
		opera_title		: 'Not supported by Opera', // MISSING
		enable			: '魔�곖바듲� SCAYT',
		disable			: '魔晩慢�듲� SCAYT',
		about			: '晩�� SCAYT',
		toggle			: '魔麻磨�듰� SCAYT',
		options			: '漠�듰㎔극㎔�',
		langs			: '�꾓붕㎔�',
		moreSuggestions	: '碼�꾔끮꾸듰� �끯� 碼�꾔끯귋へ극�碼魔',
		ignore			: '魔寞碼�뉄�',
		ignoreAll		: '魔寞碼�뉄� 碼�꾔꺳�',
		addWord			: '瑪彎碼�곖� �꺳꾔끮�',
		emptyDic		: '碼卍�� 碼�꾔귋Ω끯댵� �듰ж� 粒�꾓� �듲꺳댶� �곖㎔극붕Ω�.',
		noSuggestions	: '�꾓� 魔�댵ж� 瑪�귋へ극㎔�碼魔',
		optionsTab		: '漠�듰㎔극㎔�',
		allCaps			: 'Ignore All-Caps Words', // MISSING
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: 'Ignore Words with Numbers', // MISSING

		languagesTab	: '�꾓붕㎔�',

		dictionariesTab	: '�귌댵Ω끯듰�',
		dic_field_name	: 'Dictionary name', // MISSING
		dic_create		: 'Create', // MISSING
		dic_restore		: 'Restore', // MISSING
		dic_delete		: 'Delete', // MISSING
		dic_rename		: 'Rename', // MISSING
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: '晩��'
	},

	about :
	{
		title		: '晩�� CKEditor',
		dlgTitle	: '晩�� CKEditor',
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: '�꾔꾓�巒�댶� 晩�꾔� �끮바꾔댶끮㎔� 碼�꾓へ극��듰� �� �듰극з� 万�듰㎔극� �끯댶귋바녩� 晩�꾔� 娩磨�꺲� 碼�꾓Ω녩へ근녩�:',
		copy		: '幕�귌댶� 碼�꾔녩닢� &copy; $1. 寞�끯듰� 碼�꾓��귌댶� �끮��곘댵멈�.'
	},

	maximize : '魔�꺲ⓜ듰�',
	minimize : '魔巒曼�듰�',

	fakeobjects :
	{
		anchor		: '瑪邈卍碼立',
		flash		: '邈卍�� �끮へ�邈�� 磨碼�꾔곘꾓㎔�',
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: '�꺲㎔┽� 曼�듰� �끮밑근댶�'
	},

	resize : '碼卍幕磨 �꾓へ붙듲듰� 碼�꾓�寞��',

	colordialog :
	{
		title		: '碼漠魔邈 �꾔댶�',
		options	:	'Color Options', // MISSING
		highlight	: '瑪�꾔귋㎔� 碼�꾓뛰댵�',
		selected	: '�끯뤪�魔碼邈',
		clear		: '�끮넥�'
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
		label : '漠巒碼痲巒 碼�꾓뒝곖�馬',
		title : '漠巒碼痲巒 碼�꾓뒝곖�馬',
		design : 'Design', // MISSING
		meta : '碼�꾔끮밑근뫹곖㎔� 碼�꾓극Ｘ넨듰�',
		chooseColor : '碼漠魔邈',
		other : '<粒漠邈��>',
		docTitle :	'晩�녪댵Ω� 碼�꾓뒝곖�馬',
		charset : 	'魔邈�끯듰� 碼�꾓�邈�댶�',
		charsetOther : '魔邈�끯듰� 笠漠邈',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : '粒�댵근댵ⓛ� 碼�꾔댵넥뢨�',
		charsetCT : '碼�꾓뒝듲녪듰� 碼�꾓べ귌꾔듰��듰� (Big5)',
		charsetCR : '碼�꾓넨듰근듲꾔듰�',
		charsetGR : '碼�꾔듲댶녩Ω녪듰�',
		charsetJP : '碼�꾔듰㎔ⓛΩ녪듰�',
		charsetKR : '碼�꾔꺳댵근듰�',
		charsetTR : '碼�꾓へ근꺳듰�',
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : '粒�댵근댵ⓛ� 碼�꾓붕극ⓜ듰�',
		docType : '魔邈�댶듰넥� �녪댵�  碼�꾓뒝곖�馬',
		docTypeOther : '魔邈�댶듰넥� �녪댵�  巒�곖�馬 粒漠邈��',
		xhtmlDec : '魔彎�끯듲�   瑪晩�꾓Ω녩㎔� �꾓붕� XHTML��',
		bgColor : '�꾔댶� 碼�꾓��꾔곘듰�',
		bgImage : '邈碼磨慢 碼�꾓뒝댵극� 碼�꾓��꾔곘듰�',
		bgFixed : '寞晩�꾔뉃� 晩�꾓Ω끮� �끮㎔┽듰�',
		txtColor : '�꾔댶� 碼�꾔녩�',
		margin : '�뉄댵Ω끮� 碼�꾓뒝곖�馬',
		marginTop : '晩�꾔댶�',
		marginLeft : '粒�듰넥�',
		marginRight : '粒�듲끯�',
		marginBottom : '卍�곘꾔�',
		metaKeywords : '碼�꾔꺳꾔끮㎔� 碼�꾓Ｘ넥㎔넨듰� (�끯곖뒝댶꾓� 磨�곘댵㎔뒝�)��',
		metaDescription : '�댵뒝� 碼�꾓뒝곖�馬',
		metaAuthor : '碼�꾔꺲㎔へ�',
		metaCopyright : '碼�꾔끮Ω꾔�',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
