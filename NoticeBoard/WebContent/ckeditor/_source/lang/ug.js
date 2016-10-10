/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
* @fileOverview
*/

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ug'] =
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
	editorTitle : '�꺵녩글댶녬댵닥녩Ω� 魔�뺋앤근됗근꾔됚��댷녩� %1',
	editorHelp : 'ALT+0 �녪� 磨�먛넨됙� �듰㎔극��뺊끯녪� �꺵녩글댷�',

	// ARIA descriptions.
	toolbars	: '�귌댵극Ω� 磨碼�꾓�碼��',
	editor		: '魔�뺋앤근됗근꾔됚��댷�',

	// Toolbar buttons without dialogs.
	source			: '�끱뺊녩ⓞ�',
	newPage			: '�듴먝��� 磨�뺉�',
	save			: '卍碼�귌꾓�',
	preview			: '痲碼�꾓��됙� �꺵녩꾼뺉�',
	cut				: '�꺵뺉�',
	copy			: '�녬뺉닢� 岷�댶귎뉄귌됗붕� 痲�됚��� 磨�뺊꾖��됗넨�',
	paste			: '�녩Ω앨꾓�',
	print			: '磨碼卍 ',
	underline		: '痲碼卍魔�� 卍�됗꾸됙�',
	bold			: '魔�댶�',
	italic			: '�듰Ω녩ほ�',
	selectAll		: '岷�뺊끯끯됙녪� 魔碼�꾔꾓�',
	removeFormat	: '毛�됚녪됙끯녪� �녪됙귌됗근됛뗛뺉�',
	strike			: '痲�녫녬댵글댵� 卍�됗꾸됙귌�',
	subscript		: '魔�녬뗛뺊� 痲�됙녩��먜꺲�',
	superscript		: '�듴뉄귌됗근� 痲�됙녩��먜꺲�',
	horizontalrule	: '魔�댵붕극� 卍�됗꾸됙� �귌됗넥ほ뉃�',
	pagebreak		: '磨�뺉� 痲碼�듰근됗붜뉅� �귌됗넥ほ뉃�',
	pagebreakAlt		: '磨�뺉� 痲碼�듰근됗붜뉅�',
	unlink			: '痲�뉄꾓Ω녪끮� 磨�됙꺲㎔� �귌됙�',
	undo			: '�듴먜녪됛뗗Ω�',
	redo			: '�귋Ω듰べ됙꾓� ',

	// Common messages and labels.
	common :
	{
		browseServer	: '�꺵녩극넨됗べ됗� �끱뉄꾓㎔꾸됙끱먛べ됗�',
		url				: '痲�뺉넨꾔� 岷�녩жй뺉�',
		protocol		: '�꺵먜꾔됗다됙�',
		upload			: '�듴댶꺳꾗�',
		uploadSubmit	: '�끱뉄꾓㎔꾸됙끱먛べ됗극붕� �듴댶꺳꾗�',
		image			: '卍�댵글뺉�',
		flash			: 'Flash',
		form			: '寞�뺉��뗛뺊�',
		checkbox		: '�꺵녪� 魔碼�꾔꾓㎔� 邈碼�끯꺳됗넨�',
		radio			: '�듴뺊꺳꺵� 魔碼�꾔꾓㎔� 魔�댶앰녪됗넨�',
		textField		: '�듴뺊꺳꺵� �귎뉃� 魔�먜꺳됗넥�',
		textarea		: '�꺵녪� �귎뉃� 魔�먜꺳됗넥�',
		hiddenField		: '�듲댵닦뉃글뉄� 膜碼痲�됗글�',
		button			: '魔�댶앰녩�',
		select			: '魔�됗꾸됙�/魔�됗꾸됙끯꾔됙�',
		imageButton		: '卍�댵글뺉� 膜碼痲�됗글�',
		notSet			: '�밑ほ뺋�娩�뺊꾔끯됚��뺊녳��',
		id				: 'ID',
		name			: '痲碼魔',
		langDir			: '魔�됙� �듴녪녪됙꾔됗다�',
		langDirLtr		: '卍�댶꾓��됙� 痲�댷�曼碼 (LTR)',
		langDirRtl		: '痲�댷�膜�됙� 卍�댶꾓붕� (RTL)',
		langCode		: '魔�됙� �꺳댵���',
		longDescr		: '魔�뺊앤넨됙꾔됙� �녬댵닦뺊녩��댵글댵� 痲碼膜邈�먛넨�',
		cssClass		: '痲�뉃넨꾗뉃� 漠�됙꾔됙녪됚� 痲碼魔��',
		advisoryTitle	: '�끮㏁뗗꾼�',
		cssStyle		: '�귎뉃� 痲�됚녪됗��됙꺳� 痲�뉃넨꾗뉃ⓜ�',
		ok				: '寞�뺉꾸끯꾗�',
		cancel			: '�뗗㎔� �꺵뺋�',
		close			: '魔碼�귋�',
		preview			: '痲碼�꾓��됙� �꺵녩꾼뺉�',
		generalTab		: '痲碼膜�뺉へべ됙꺳�',
		advancedTab		: '痲碼�꾔됙�',
		validateNumberFailed : '卍碼�� 毛�됚녪됙끯됗�碼 �꺳됗귿��댵꾼댵� 万�녩글댵�',
		confirmNewPage	: '�녬녬뗛뺉へべ됙꺳� 毛�댵ほ댶� �끱뺉꾸끱뉄녪� 卍碼�귌꾓Ω녪끯됗��됗� �듴먝��� 毛�댵ほ댶� �귎뉃극Ω끮넨됗꾜�',
		confirmCancel	: '�귌됗넨끱뺊� 痲�녩꾹��뺉극べ됗� 卍碼�귌꾓Ω녪끯됗��됗� 磨�� 卍�녩꾸꾗뺉다꺵댶녪� 魔碼�귋Ω끮넨됗꾜�',
		options			: '魔碼�꾔꾓Ω녪끮�',
		target			: '�녪됗닢Ω� �꺵녩꾸녬뺊�',
		targetNew		: '�듴먝��� �꺵녩꾸녬뺊� (_blank)',
		targetTop		: '毛�댵ほ댶� 磨�뺉� (_top)',
		targetSelf		: '�끱뺉꾸꺵뉃� �꺵녩꾸녬뺊� (_self)',
		targetParent	: '痲碼魔碼 �꺵녩꾸녬뺊� (_parent)',
		langDirLTR		: '卍�댶꾓��됙� 痲�댷�曼碼 (LTR)',
		langDirRTL		: '痲�댷�膜�됙� 卍�댶꾓붕� (RTL)',
		styles			: '痲�뉃넨꾗뉃ⓜ꾓㎔�',
		cssClasses		: '痲�뉃넨꾗뉃� 漠�됙꾔꾔됗근�',
		width			: '�꺵뺋��꾔됙�',
		height			: '痲�먝��됗꾸꾔됙�',
		align			: '魔�댵붕근됙꾔됙녪됗다�',
		alignLeft		: '卍�댶�',
		alignRight		: '痲�댷�',
		alignCenter		: '痲�댵へほ뉃극�',
		alignTop		: '痲�댵넥べ�',
		alignMiddle		: '痲�댵へほ뉃극�',
		alignBottom		: '痲碼卍魔��',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '痲�먝��됗꾸꾔됙� �녪댶귎뉄� 邈�뺊귎뺊� 毛�됚녪됙끯됗�碼 磨�댶꾗뉃다� 万�녩글댵�',
		invalidWidth	: '�꺵뺋��꾔됙� �녪댶귎뉄� 邈�뺊귎뺊� 毛�됚녪됙끯됗�碼 磨�댶꾗뉃다� 万�녩글댵�',
		invalidCssLength	: '磨�� 卍�녩� 磨�녪꾔됙꺳� �녪댶귎뉄� �끱뉆뗗Ω앨됙� 磨�댶꾓붕Ω� CSS 痲�뉃꾼뉄녪꾗뉄� �귌됙끯끯됗べ� 磨�댶꾗뉃다� 万�녩글댵극� 磨�됗근꾔됙꺳� (px, %, in, cm, mm, em, ex, pt �듰Ω꺳� pc)',
		invalidHtmlLength	: '磨�� 卍�녩� 磨�녪꾔됙꺳� �녪댶귎뉄� 磨�됗근됙꺳끱� HTML 痲�뉃꾼뉄녪꾗뉄� �귌됙끯끯됗べ� 磨�댶꾗뉃다� �꺵먛글뺊�. 痲�녩� 痲�됚녪됚��� 痲碼�꾔됗��됗붕Ω� 磨�됗근꾔됙� (px �듰Ω꺳� %)',
		invalidInlineStyle	: '痲�됚녪꺳� 磨碼曼�꾓Ω녪끮� 痲�뉃넨꾗뉃ⓜ� �녪댶귎뉄� �녬먜꺳됗べ꾔됙� 毛�뺉� 磨�됙꾗뺊� 痲碼�듰근됙꾓붕Ω� 磨�됗� �듰Ω꺳� �꺵녪� 짬漠碼卍�꾔됙� 痲碼魔��:漠碼卍�꾔됙� �귌됙끯끯됗べ됀� 毛�됚녪됙끯됗�碼 磨�댶꾗뉃다� �꾓㎔꾸됙�',
		cssLengthTooltip	: '磨�� 卍�녩� 磨�녪꾔됙꺳� 磨�됗근됙꺳끱� CSS 痲�뉃꾼뉄녪꾗뉄� �귌됙끯끯됗べ� 磨�댶꾗뉃다� �꺵먛글뺊�. 痲�녩� 痲�됚녪됚��� 痲碼�꾔됗��됗붕Ω� 磨�됗근꾔됙� (px, %, in, cm, mm, em, ex, pt �듰Ω꺳� pc)',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class=\\\\"cke_accessibility\\\\">�� 痲�됗다꾗뺉べ꺳됙꾔� 磨�댶꾔끮Ω듰���</span>'
	},

	contextmenu :
	{
		options : '�귌됗넨귋� �듲댶� 魔�됗꾸됙끯꾔됙� 魔碼�꾔꾓Ω녪끯됗넨�'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '痲碼�꾓㏀앨됗��� 岷�뺉근� �귌됗넥ほ뉃�',
		title		: '痲碼�꾓㏀앨됗��� 岷�뺉근� 魔碼�꾔꾓㏀�',
		options : '痲碼�꾓㏀앨됗��� 岷�뺉근� 魔碼�꾔꾓Ω녪끯됗넨�'
	},

	// Link dialog.
	link :
	{
		toolbar		: '痲�뉄꾓Ω녪끮� �귌됗넥ほ뉃�/魔�뺋앤근됗근꾗�',
		other 		: '�밑ⓛ㎔다귋㎮��',
		menu		: '痲�뉄꾓Ω녪끮� 魔�뺋앤근됗�',
		title		: '痲�뉄꾓Ω녪끮�',
		info		: '痲�뉄꾓Ω녪끮� 痲�뉅녬뉃근�',
		target		: '�녪됗닢Ω�',
		upload		: '�듴댶꺳꾗�',
		advanced	: '痲碼�꾔됙�',
		type		: '痲�뉄꾓Ω녪끮� 魔�됙앨�',
		toUrl		: '痲碼膜邈�먛�',
		toAnchor	: '磨�뺉� 痲�됚녪됗��됙꺳� �꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲�뉄꾓Ω녪끯됗넨�',
		toEmail		: '痲�먜꾓��뺉�',
		targetFrame		: '�바꺲Ω녩��뉄꺿��',
		targetPopup		: '�바귋㏀��귌됗� �꺵녩꾸녬뺊꺿��',
		targetFrameName	: '�녪됗닢Ω� �꺲Ω녩��뉄� 痲碼魔��',
		targetPopupName	: '�귋㏀��귌됗� �꺵녩꾸녬뺊� 痲碼魔��',
		popupFeatures	: '�귋㏀��귌됗� �꺵녩꾸녬뺊� 漠碼卍�꾔됙귌�',
		popupResizable	: '�녪댷��꾗뉄귌� 痲�녩꾹��뺉극べ됗닥녩Ω�',
		popupStatusBar	: '岷碼�꾗뺉� 磨碼�꾓�碼��',
		popupLocationBar: '痲碼膜邈�먛� 磨碼�꾓�碼��',
		popupToolbar	: '�귌댵극Ω� 磨碼�꾓�碼��',
		popupMenuBar	: '魔�됗꾸됙끯꾔됙� 磨碼�꾓�碼��',
		popupFullScreen	: '毛�댵ほ댶� 痲�먜꺲극Ω� (IE)',
		popupScrollBars	: '膜�댶끯됙꾔됙끮� 卍�댵귿��댷�',
		popupDependent	: '魔�뺎뗛� (NS)',
		popupLeft		: '卍�댶�',
		popupTop		: '痲�댷�',
		id				: 'ID',
		langDir			: '魔�됙� �듴녪녪됙꾔됗다�',
		langDirLTR		: '卍�댶꾓��됙� 痲�댷�曼碼 (LTR)',
		langDirRTL		: '痲�댷�膜�됙� 卍�댶꾓붕� (RTL)',
		acccessKey		: '万�됙듰㎔글뺉� �꺵뉄녬뉄앨꺲�',
		name			: '痲碼魔',
		langCode			: '魔�됙� �꺳댵���',
		tabIndex			: 'Tab 魔�뺉극べ됙앨�',
		advisoryTitle		: '�끮㏁뗗꾼�',
		advisoryContentType	: '�끱뺉꾸끱뉄� 魔�됙앨�',
		cssClasses		: '痲�뉃넨꾗뉃� 漠�됙꾔� 痲碼魔��',
		charset			: '岷�뺉근� �꺳댵��꾔됙녪됗다�',
		styles			: '�귎뉃� 痲�됚녪됗��됙꺳� 痲�뉃넨꾗뉃ⓜ�',
		rel			: '磨碼曼�꾔됙녪됗�',
		selectAnchor		: '磨�됗� �꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 魔碼�꾔꾓㏀�',
		anchorName		: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲碼魔�� 磨�댶듲됚녬�',
		anchorId			: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� ID 卍�� 磨�댶듲됚녬�',
		emailAddress		: '痲碼膜邈�먛�',
		emailSubject		: '�끮㏁뗗꾼�',
		emailBody		: '�끱뺉꾸끱뉄�',
		noAnchors		: '(磨�� 毛�댵ほ댶꺲ほ� 痲�됗다꾗뺉べ꺳됙꾔� 磨�댶꾔됗��됗붕Ω� �꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� �듲댶�)',
		noUrl			: '痲�뉄꾓Ω녪끮� 痲碼膜邈�먛넨됙녪� �꺳됗귿��댵꾼댷�',
		noEmail			: '痲�먜꾓��뺉� 痲碼膜邈�먛넨됙녪� �꺳됗귿��댵꾼댷�'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲�뉄꾓Ω녪끯됗넨� �귌됗넥ほ뉃�/魔�뺋앤근됗근꾗�',
		menu		: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲�뉄꾓Ω녪끮� 漠碼卍�꾔됙귌�',
		title		: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲�뉄꾓Ω녪끮� 漠碼卍�꾔됙귌�',
		name		: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲碼魔��',
		errorName	: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲碼魔�됙녪� �꺳됗귿��댵꾼댷�',
		remove		: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ� 痲�녫녬댵�'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '魔�뺉극べ됙� �녪댶끱뉃� 魔�됗꾸됙� 漠碼卍�꾔됙귌�',
		bulletedTitle		: '魔�댵� 磨�뺊꾖��� 魔�됗꾸됙� 漠碼卍�꾔됙귌�',
		type				: '磨�뺊꾖��� 魔�됙앨�',
		start				: '磨碼娩�꾔됙녪됗� �녪댶끱뉃근�',
		validateStartNumber				:'魔�됗꾸됙� 磨碼娩�꾔됙녪됗� 魔�뺉극べ됙� �녪댶끱뉃근� �녪댶귎뉄� 毛�댵ほ댶� 卍碼�� 毛�됚녪됙끯됗�碼 磨�댶꾗뉃다� �꾓㎔꾸됙�',
		circle				: '磨�댵� �녬뺊끮ⓞ뺉�',
		disc				: '魔�댶꾓��뉃글뉄꾓붕Ω� �녬뺊끮ⓞ뺉�',
		square				: '魔�댶꾓��뉃글뉄꾓붕Ω� 魔�녩� �녩㎔넥�',
		none				: '磨�뺊꾖��� �듲댶�',
		notset				: '�밑ほ뺋�娩�뺊꾔끯됚��뺊녳��',
		armenian			: '�귎뺉��됙끯꺳� 痲�뺉근끯됙녪됙듴� 魔�뺉극べ됙� �녪댶끱뉃근� 娩�뺊꺳꾔�',
		georgian			: '�귎뺉��됙끯꺳� 寞�댵극з됙듴� 魔�뺉극べ됙� �녪댶끱뉃근� 娩�뺊꺳꾔� (an, ban, gan �귋㎔へ㎔근꾔됙�)',
		lowerRoman			: '�꺳됚녪됙� 岷�뺉근앨꾔됙� 邈�됙� 邈�뺊귌됙끯� (i, ii, iii, iv, v �귋㎔へ㎔근꾔됙�)',
		upperRoman			: '�녪댷� 岷�뺉근앨꾔됙� 邈�됙� 邈�뺊귌됙끯� (I, II, III, IV, V �귋㎔へ㎔근꾔됙�)',
		lowerAlpha			: '痲�됙녫��꾔됗꾹녬� �꺳됚녪됙� 岷�뺉근� (a, b, c, d, e �귋㎔へ㎔근꾔됙�)',
		upperAlpha			: '痲�됙녫��꾔됗꾹녬� �녪댷� 岷�뺉근� (A, B, C, D, E �귋㎔へ㎔근꾔됙�)',
		lowerGreek			: '彌邈�먜꺴녬� �꺳됚녪됙� 岷�뺉근� (alpha, beta, gamma �귋㎔へ㎔근꾔됙�)',
		decimal				: '卍碼�� (1, 2, 3 �귋㎔へ㎔근꾔됙�)',
		decimalLeadingZero	: '�녬녪꾓��됙� 磨碼娩�꾓Ω녩붕Ω� 卍碼�� 磨�뺊꾖��� (01, 02, 03 �귋㎔へ㎔근꾔됙�)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '痲�됗꾜��뺊� 痲碼�꾔끮㎔닢ほ뉃�',
		find				: '痲�됗꾜���',
		replace				: '痲碼�꾔끮㎔닢ほ뉃�',
		findWhat			: '痲�됗꾜���:',
		replaceWith			: '痲碼�꾔끮㎔닢ほ뉃�:',
		notFoundMsg			: '磨�뺊꾖��됙꾗뺊녫��뺊� 魔�먜꺳됗넥べ녪� 魔碼毛碼�꾔끯됗���',
		findOptions			: '痲�됗꾜��뺉� 魔碼�꾔꾓Ω녪끯됗넨�',
		matchCase			: '�녪댷� �꺳됚녪됙� 岷�뺉근앨녪� 毛�뺉근귌꾗뺊녩��댵�',
		matchWord			: '毛�댵ほ댶� 卍�녩� �끮㎔넨꾔됗다됗�',
		matchCyclic			: '痲碼�듲꾓Ω녪끮� �끮㎔넨꾔됗다됗�',
		replaceAll			: '岷�뺊끯끯됙녪� 痲碼�꾔끮㎔닢ほ뉃�',
		replaceSuccessMsg	: '寞�뺊끮┽� %1 寞碼�듰��됙꺳� 痲碼�꾔끮㎔닢ほ뉃글뉃� 魔碼�끮Ω끯꾓Ω녩���'
	},

	// Table Dialog
	table :
	{
		toolbar		: '寞�뺉��뗛뺊�',
		title		: '寞�뺉��뗛뺊� 漠碼卍�꾔됙귌�',
		menu		: '寞�뺉��뗛뺊� 漠碼卍�꾔됙귌�',
		deleteTable	: '寞�뺉��뗛뺊� 痲�녫녬댵�',
		rows		: '�귎뉃� 卍碼�녪�',
		columns		: '痲�됗넥べ댶� 卍碼�녪�',
		border		: '彌�됗글뗛뺊�',
		widthPx		: '毛�됙꺲넴먜�',
		widthPc		: '毛�됗극넴뺊녩�',
		widthUnit	: '�꺵뺋��꾔됙� 磨�됗근꾔됙꺳�',
		cellSpace	: '痲碼邈�됙꾔됙�',
		cellPad		: '�듰Ω� 痲碼邈�됙꾔됙�',
		caption		: '�끮㏁뗗꾼�',
		summary		: '痲�댵꾼댶녩���',
		headers		: '�끮㏁뗗꾼� �꺲㎔ほ뺊꺴녬�',
		headersNone		: '�듲댶�',
		headersColumn	: '磨�됗근됙녫녪� 痲�됗넥べ댶�',
		headersRow		: '磨�됗근됙녫녪� �귎뉃�',
		headersBoth		: '磨�됗근됙녫녪� 痲�됗넥べ댶� �뗛� 磨�됗근됙녫녪� �귎뉃�',
		invalidRows		: '磨�뺊꾖��됙꾗뺊녫��뺊� 痲�됗넥べ댶� 卍碼�녪� �녪댶귎뉄� �녬녪꾓��됙� �녪댷� 磨�댶꾔됗���',
		invalidCols		: '磨�뺊꾖��됙꾗뺊녫��뺊� �귎뉃� 卍碼�녪� �녪댶귎뉄� �녬녪꾓��됙� �녪댷� 磨�댶꾔됗���',
		invalidBorder	: '彌�됗글뗛뺊� 魔�댶끯꾗뉄귌� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
		invalidWidth	: '寞�뺉��뗛뺊� �꺵뺋��꾔됙꺳� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
		invalidHeight	: '寞�뺉��뗛뺊� 痲�먝��됗꾸꾔됙꺳� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
		invalidCellSpacing	: '�꺲㎔ほ뺊꺴녬� 痲碼邈�됙꾔됙귌� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
		invalidCellPadding	: '�꺲㎔ほ뺊꺴녪됚��� �녪댶귎뉄� 卍碼�� 魔�댶꾓��뉃글뉄꾔됗���',

		cell :
		{
			menu			: '�꺲㎔ほ뺊꺴녬�',
			insertBefore	: '卍�댶꾓붕� �꺲㎔ほ뺊꺴녬� �귌됗넥ほ뉃�',
			insertAfter		: '痲�댷�曼碼 �꺲㎔ほ뺊꺴녬� �귌됗넥ほ뉃�',
			deleteCell		: '�꺵뺉ほ뺊꺴녬� 痲�녫녬댵�',
			merge			: '�꺲㎔ほ뺊꺴녬� 磨�됗근꾗뺉닢ほ댵�',
			mergeRight		: '�꺲㎔ほ뺊꺴녪됙녪� 痲�댷�曼碼 磨�됗근꾗뺉닢ほ댵�',
			mergeDown		: '�꺲㎔ほ뺊꺴녪됙녪� 痲碼卍魔�됗붕� 磨�됗근꾗뺉닢ほ댵�',
			splitHorizontal	: '�꺲㎔ほ뺊꺴녪됙녪� 魔�댵붕근됗넨됗붕� 磨�됗근꾗뺉닢ほ댵�',
			splitVertical	: '�꺲㎔ほ뺊꺴녪됙녪� 磨�댶듲됗붕� 磨�됗근꾗뺉닢ほ댵�',
			title			: '�꺲㎔ほ뺊꺴녬� 漠碼卍�꾔됙귌�',
			cellType		: '�꺲㎔ほ뺊꺴녬� 魔�됙앨�',
			rowSpan			: '磨�댶듲됗붕� �녩㎔� 痲碼邈�됗넨� �귎뉃� 卍碼�녪�',
			colSpan			: '魔�댵붕근됗넨됗붕� �녩㎔� 痲碼邈�됗넨� 痲�됗넥べ댶� 卍碼�녪�',
			wordWrap		: '痲�녩꾸꾗댶꺳됗��됙� �귎뉃� �귋㎔べ꾓�',
			hAlign			: '魔�댵붕근됗넨됗붕� 魔�댵붕근됙꾓�',
			vAlign			: '磨�댶듲됗붕� 魔�댵붕근됙꾓�',
			alignBaseline	: '痲碼卍碼卍�됙� 卍�됗꾸됙�',
			bgColor			: '魔�뺋��꾔됙� 邈�뺋�彌��',
			borderColor		: '彌�됗글뗛뺊� 邈�뺋�彌��',
			data			: '卍碼�녪꾔됙� �끱뺊꾗뉄끮㎔�',
			header			: '寞�뺉��뗛뺊� 磨碼娩��',
			yes				: '岷�뺉╀�',
			no				: '�듰Ω�',
			invalidWidth	: '�꺲㎔ほ뺊꺴녬� �꺵뺋��꾔됙꺳� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
			invalidHeight	: '�꺲㎔ほ뺊꺴녬� 痲�먝��됗꾸꾔됙꺳� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
			invalidRowSpan	: '�귎뉃� �녩㎔� 痲碼邈�됗넨� �녪댶귎뉄� 毛�댵ほ댶� 卍碼�� 磨�댶꾔됗��� ',
			invalidColSpan	: '痲�됗넥べ댶� �녩㎔� 痲碼邈�됗넨� �녪댶귎뉄� 毛�댵ほ댶� 卍碼�� 磨�댶꾔됗���',
			chooseColor		: '魔碼�꾔꾓㏀�'
		},

		row :
		{
			menu			: '�귎뉃�',
			insertBefore	: '痲�댵넥べ됚��� �귎뉃� �귌됗넥ほ뉃�',
			insertAfter		: '痲碼卍魔�됗붕� �귎뉃� �귌됗넥ほ뉃�',
			deleteRow		: '�귎뉃� 痲�녫녬댵�'
		},

		column :
		{
			menu			: '痲�됗넥べ댶�',
			insertBefore	: '卍�댶꾓붕� 痲�됗넥べ댶� �귌됗넥ほ뉃�',
			insertAfter		: '痲�댷�曼碼 痲�됗넥べ댶� �귌됗넥ほ뉃�',
			deleteColumn	: '痲�됗넥べ댶� 痲�녫녬댵�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '魔�댶앰녩� 漠碼卍�꾔됙귌�',
		text		: '磨�뺊꾖��� (�귌됙끯끱뺉�)',
		type		: '魔�됙앨�',
		typeBtn		: '魔�댶앰녩�',
		typeSbm		: '魔碼毛娩�뉃�',
		typeRst		: '痲�뺉넨꾔됚��� �귋Ω듰ほ뉃�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�꺵녪� 魔碼�꾔꾓㎔� 漠碼卍�꾔됙귌�',
		radioTitle	: '魔碼�� 魔碼�꾔꾓㎔� 魔�댶앰녩� 漠碼卍�꾔됙귌�',
		value		: '魔碼�꾔꾔됗붕Ω� �귌됙끯끱뺉�',
		selected	: '魔碼�꾔꾓Ω녩붕Ω�'
	},

	// Form Dialog.
	form :
	{
		title		: '寞�뺉��뗛뺊� 漠碼卍�꾔됙귌�',
		menu		: '寞�뺉��뗛뺊� 漠碼卍�꾔됙귌�',
		action		: '�끱뺉닢붜뉄꾓㎔�',
		method		: '痲�뉃넴뉄�',
		encoding	: '寞�뺉��뗛뺊� �꺳댵��꾔됙녪됗다�'
	},

	// Select Field Dialog.
	select :
	{
		title		: '寞�뺉��뗛뺊�/魔�됗꾸됙� 漠碼卍�꾔됙귌�',
		selectInfo	: '痲�뉅녬뉃� 魔碼�꾔꾓㏀�',
		opAvail		: '魔碼�꾔꾓㎔� 魔�댵근꾔됗근�',
		value		: '�귌됙끯끱뺉�',
		size		: '痲�먝��됗꾸꾔됙꺳�',
		lines		: '�귎뉃�',
		chkMulti	: '�꺵녪� 魔碼�꾔꾓㎔닥녩Ω�',
		opText		: '魔碼�꾔꾓Ω녪끮� 魔�먜꺳됗넥べ�',
		opValue		: '魔碼�꾔꾓Ω녪끮� �귌됙끯끯됗べ�',
		btnAdd		: '�귌댵�',
		btnModify	: '痲�녩꾹��뺉극�',
		btnUp		: '痲�댵넥べ됚���',
		btnDown		: '痲碼卍魔�됗붕�',
		btnSetValue : '膜�뺉넨꾗뺊앨꺳� 魔碼�꾔꾓Ω녪끮� �귌됙끯끯됗べ됚��� 魔�뺋�娩��',
		btnDelete	: '痲�녫녬댵�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: ' �꺵녪� �귎뉃근꾗뉄� 魔�먜꺳됗넥� 漠碼卍�꾔됙귌�',
		cols		: '岷�뺉근� �꺵뺋��꾔됙꺳�',
		rows		: '�귎뉃� 卍碼�녪�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '魔碼�� �귎뉃근꾗뉄� 魔�먜꺳됗넥� 漠碼卍�꾔됙귌�',
		name		: '痲碼魔',
		value		: '膜�뺉넨꾗뺊앨꺳� �귌됙끯끯됗べ�',
		charWidth	: '岷�뺉근� �꺵뺋��꾔됙꺳�',
		maxChars	: '痲�뺋� �꺵녪� 岷�뺉근� 卍碼�녪�',
		type		: '魔�됙앨�',
		typeText	: '魔�먜꺳됗넥�',
		typePass	: '痲�됙�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�듲댵닦뉃글뉄� 膜碼痲�됗글� 漠碼卍�꾔됙귌�',
		name	: '痲碼魔',
		value	: '膜�뺉넨꾗뺊앨꺳� �귌됙끯끯됗べ�'
	},

	// Image Dialog.
	image :
	{
		title		: '卍�댵글뺉� 漠碼卍�꾔됙귌�',
		titleButton	: '卍�댵글뺉� 膜碼痲�됗글� 漠碼卍�꾔됙귌�',
		menu		: '卍�댵글뺉� 漠碼卍�꾔됙귌�',
		infoTab		: '卍�댵글뺉�',
		btnUpload	: '�끱뉄꾓㎔꾸됙끱먛べ됗극붕� �듴댶꺳꾗�',
		upload		: '�듴댶꺳꾗�',
		alt			: '魔�먜꺳됗넥� 痲碼�꾔끮㎔닢ほ뉃�',
		lockRatio	: '�녪됗넥ⓞ뺉べ녪� �귎뉄꾗뉄앨꾓�',
		resetSize	: '痲�뺉넨꾔� �녪댷��꾗뉄�',
		border		: '彌�됗글뗛뺊� �녪댷��꾗뉄귌�',
		hSpace		: '魔�댵붕근됗넨됗붕� 痲碼邈�됙꾔됙귌�',
		vSpace		: '磨�댶듲됗붕� 痲碼邈�됙꾔됙귌�',
		alertUrl	: '卍�댵글뺉� 痲碼膜邈�먛넨됙녪� �꺳됗귿��댵꾼댷�',
		linkTab		: '痲�뉄꾓Ω녪끮�',
		button2Img	: '�녬녬뗛뺉へべ됙꺳� 魔�댶앰녪됙녪� 卍�댵글뺉べ꺵� 痲�녩꾹��뺉극ほ뺊끮넨됗꾜�',
		img2Button	: '�녬녬뗛뺉へべ됙꺳� 卍�댵글뺉べ녪� 魔�댶앰녪됗붕� 痲�녩꾹��뺉극ほ뺊끮넨됗꾜�',
		urlMissing	: '卍�댵글뺉べ녪됚� 痲�뺉넨꾔� 岷�녩жй뺉� 痲碼膜邈�먛넨� �꺵뺊�',
		validateBorder	: '彌�됗글뗛뺊� �녪댷��꾗뉄귌� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
		validateHSpace	: '魔�댵붕근됗넨됗붕� 痲碼邈�됙꾔됙� �녪댶귎뉄� 毛�댵ほ댶� 卍碼�� 磨�댶꾔됗���',
		validateVSpace	: '磨�댶듲됗붕� 痲碼邈�됙꾔됙� �녪댶귎뉄� 毛�댵ほ댶� 卍碼�� 磨�댶꾔됗���'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash 漠碼卍�꾔됙�',
		propertiesTab	: '漠碼卍�꾔됙�',
		title			: '�끮㏁뗗꾼�',
		chkPlay			: '痲�녩꾸꾗댶꺳됗��됙� �녩Ω�',
		chkLoop			: '膜�뺎뗗근됙�',
		chkMenu			: 'Flash 魔�됗꾸됙끯꾔됙꺳녪� �귌댵꾜붕㎔�',
		chkFull			: '毛�댵ほ댶� 痲�먜꺲극Ω녪녪� �귌댵꾜붕㎔�',
 		scale			: '�녪됗넥ⓜ됗べ�',
		scaleAll		: '岷�뺊끯끯됙녪� �꺵녩극넴뺉�',
		scaleNoBorder	: '彌�됗글뗛뺊� �듲댶�',
		scaleFit		: '�귎뺉へ┽됙� �끮㎔넨꾔됗다됗�',
		access			: '�귌댶꾔듰㎔꾸끮� 万�됙듰㎔글뺉べ꺵� �듲댶� �귌댶�',
		accessAlways	: '岷�뺊끯됗닦�',
		accessSameDomain: '痲�댵�娩碼娩 膜碼痲�됗근됗���',
		accessNever		: '岷�뺉귿��됗�',
		alignAbsBottom	: '�끱뉃べ꾗뺊� 痲碼卍魔��',
		alignAbsMiddle	: '�끱뉃べ꾗뺊� 痲�댵へほ뉃극�',
		alignBaseline	: '痲碼卍碼卍�됙� 卍�됗꾸됙�',
		alignTextTop	: '魔�먜꺳됗넥� 痲�댵넥べ됗���',
		quality			: '卍�댶앱뺉�',
		qualityBest		: '痲�뺋� �듰㎔�娩��',
		qualityHigh		: '�듴뉄귌됗근�',
		qualityAutoHigh	: '�듴뉄귌됗근� (痲碼毛魔�댶끮㎔べ됙�)',
		qualityMedium	: '痲�댵へほ뉃극� (痲碼毛魔�댶끮㎔べ됙�)',
		qualityAutoLow	: '魔�녬뗛뺊� (痲碼毛魔�댶끮㎔べ됙�)',
		qualityLow		: '魔�녬뗛뺊�',
		windowModeWindow: '�꺵녩꾸녬뺊� 彌�뺎뗗��됗넨�',
		windowModeOpaque: '漠�됗글�',
		windowModeTransparent : '卍�댵꾼댶�',
		windowMode		: '�꺵녩꾸녬뺊� 岷碼�꾔됗べ�',
		flashvars		: 'Flash  痲�녩꾹��뺉귿��댷녪�',
		bgcolor			: '魔�뺋��꾔됙� 邈�뺋�彌��',
		hSpace			: '魔�댵붕근됗넨됗붕� 痲碼邈�됙꾔됙�',
		vSpace			: '磨�댶듲됗붕� 痲碼邈�됙꾔됙�',
		validateSrc		: '痲�뺉넨꾔� 岷�녩жй뺉� 痲碼膜邈�먛넨됙녪� �꺳됗귿��댵꾼댷�',
		validateHSpace	: '魔�댵붕근됗넨됗붕� 痲碼邈�됙꾔됙� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���',
		validateVSpace	: '磨�댶듲됗붕� 痲碼邈�됙꾔됙� �녪댶귎뉄� 卍碼�� 磨�댶꾔됗���'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '痲�됙끯꾓� 魔�뺊꺲닦댵�',
		title			: '痲�됙끯꾓� 魔�뺊꺲닦댵�',
		notAvailable	: '�꺵뺋녬댵글댷��� �끱뉄꾓㎔꾸됙끱먛べ됗근녪� �뗗Ω귋べ됙녫녬� 痲�됗다꾗뺉べ꺳됙꾔� 磨�댶꾔끮Ω듰���',
		errorLoading	: '�꾓㎔꾸됙끯꾔됙� �끱뉄꾓㎔꾸됙끱먛べ됗근녪� �듴댶꺳꾔됚��뺊녩��� 漠碼魔碼�꾔됙� �꺵녩글댶꾓���: %s.',
		notInDic		: '�꾗뉃붜뺉へほ� �듲댶�',
		changeTo		: '痲�녩꾹��뺉극�',
		btnIgnore		: '毛�뺉글뗗� �귌됙꾔끮�',
		btnIgnoreAll	: '岷�뺊끯끯됚��� 毛�뺉글뗗� �귌됙꾔끮�',
		btnReplace		: '痲碼�꾔끮㎔닢ほ뉃�',
		btnReplaceAll	: '岷�뺊끯끯됙녪� 痲碼�꾔끮㎔닢ほ뉃�',
		btnUndo			: '�듴먜녪됛뗗Ω�',
		noSuggestions	: '-魔�뺊꺳꾔됙� �듲댶�-',
		progress		: '痲�됙끯꾓� 魔�뺊꺲닦댵글댸뗗㎔べ됗��뉍��',
		noMispell		: '痲�됙끯꾓� 魔�뺊꺲닦댵글댵� 魔碼�끮Ω�: 痲�됙끯꾓� 漠碼魔碼�꾔됙귌� 磨碼�듲귋Ω꾔끯됗���',
		noChanges		: '痲�됙끯꾓� 魔�뺊꺲닦댵글댵� 魔碼�끮Ω�: 岷�먝녪귋Ω녩�碼�� 卍�녩꾸녪� 痲�녩꾹��뺉극べ끯됗���',
		oneChange		: '痲�됙끯꾓� 魔�뺊꺲닦댵글댵� 魔碼�끮Ω�: 磨�됗� 卍�녩꾸녪� 痲�녩꾹��뺉극へべ�',
		manyChanges		: '痲�됙끯꾓� 魔�뺊꺲닦댵글댵� 魔碼�끮Ω�: %1  卍�녩꾸녪� 痲�녩꾹��뺉극へべ�',
		ieSpellDownload	: '痲�됙끯꾓� 魔�뺊꺲닦댵글댵� �귌됗넥ほ뉃근끯됗넨� 魔�먛��� 痲�댵근녪됗べ됙꾔끯됗붕Ω녩� 岷碼万�됗근꾓� �녬댵닦댵글뺊끮넨됗꾜�'
	},

	smiley :
	{
		toolbar	: '�녪됗극Ω� 痲�됙앤㎔���',
		title	: '�녪됗극Ω� 痲�됙앤㎔��� 卍�됙녩ⓞ뺊꾖��� �귌됗넥ほ뉃�',
		options : '�녪됗극Ω� 痲�됙앤㎔��� 卍�됙녩ⓞ뺊꾖��� 魔碼�꾔꾓Ω녪끯됗넨�'
	},

	elementsPath :
	{
		eleLabel : '痲�먜꾗먜끱먜녩� �듲댶꾔�',
		eleTitle : '%1 痲�먜꾗먜끱먜녩�'
	},

	numberedlist	: '魔�뺉극べ됙� �녪댶끱뉃� 魔�됗꾸됙끯�',
	bulletedlist	: '魔�댵� 磨�뺊꾖��� 魔�됗꾸됙끯�',
	indent			: '魔碼邈碼�듰�',
	outdent			: '�꺵뺋��뺊듰�',

	justify :
	{
		left	: '卍�댶꾓붕� 魔�댵붕근됙꾓�',
		center	: '痲�댵へほ뉃근됗붕� 魔�댵붕근됙꾓�',
		right	: '痲�댷�曼碼 魔�댵붕근됙꾓�',
		block	: '痲�됙꺳꺳� 魔�뺉글뺊앤べ됙� 魔�댵붕근됙꾓�'
	},

	blockquote : '磨�녪꾗뺊� �녬뺊귌됙�',

	clipboard :
	{
		title		: '�녩Ω앨꾓�',
		cutError	: '魔�댵� �꺵녩귿��댷��됗꾸녪됚� 磨�됗��뺉ほ뺉근꾔됙� 魔�뺋�娩�됙꺳� 魔�뺋앤근됗근꾔됚��댷녪녪됚� �꺵뺉� �끱뺉닢붜뉄꾓㎔べ됙녪� 痲�녩꾸꾗댶꺳됗��됙� 痲�됗ж극� �귌됙꾔됗다됗붕� �듲댶� �귌댶듲끮Ω듰��뉃� 岷�뺉근앤へ㎔�魔碼 魔�먛� �꺵뉄녬뉄앨꺲� (Ctrl/Cmd+X) 痲碼邈�귌됙꾔됙� 魔碼�끮Ω끯꾓㏀�',
		copyError	: '魔�댵� �꺵녩귿��댷��됗꾸녪됚� 磨�됗��뺉ほ뺉근꾔됙� 魔�뺋�娩�됙꺳� 魔�뺋앤근됗근꾔됚��댷녪녪됚� �꺵녫녬댵� �끱뺉닢붜뉄꾓㎔べ됙녪� 痲�녩꾸꾗댶꺳됗��됙� 痲�됗ж극� �귌됙꾔됗다됗붕� �듲댶� �귌댶듲끮Ω듰��뉃� 岷�뺉근앤へ㎔�魔碼 魔�먛� �꺵뉄녬뉄앨꺲� (Ctrl/Cmd+C) 痲碼邈�귌됙꾔됙� 魔碼�끮Ω끯꾓㏀�',
		pasteMsg	: '岷�뺉근앤へ㎔�魔碼 魔�먛� �꺵뉄녬뉄앨꺲� (<STRONG>Ctrl/Cmd+V</STRONG>) �녪� 痲�됗다꾔됗べ됙� �끱뺉꾸끱뉄녪녪� 魔�녬뗛뺊녩��됙꺳� 邈碼�끯꺳됗붕� �꺵녫녬댵글댷��� 痲碼�녩��됙� <STRONG>寞�뺉꾸끯꾗�</STRONG>�녪� 磨�먛넨됚�',
		securityMsg	: '魔�댵근꺵녩귿��댷��됗꾸녪됚� 磨�됗��뺉ほ뺉근꾔됙� 魔�뺋�娩�됙꺳� 卍�뺎뗛뺉ⓜ됗��됙� 磨�� 魔�뺋앤근됗근꾔됚��댷� �녩Ω앨꾓㎔� 魔碼漠魔�됗넨됗��됙꺳� �끱뺉꾸끱뉄녪녪� 磨�됛뗗㎔넥ほ� 万�됙듰㎔글뺉� �귌됙꾓Ω꾔끮Ω듰��뉃� 磨�� �꺵녩꾸녬뺊꺲ほ� �귋Ω듰へ� 磨�됗� �귎먛べ됙� �녩Ω앨꾔됗다됚��됗� �꺵먛글뺊�.',
		pasteArea	: '�녩Ω앨꾓㎔� 膜碼痲�됗근됗넨�'
	},

	pastefromword :
	{
		confirmCleanup	: '卍�됗� �녩Ω앨꾔됙끮Ω귍녪� 磨�댶꾓붕Ω� �끱뺉꾸끱뉄� MS Word 魔�됙� �꺵뺊꾖��뺊녩��뺊� �귌됙꾔됗��뉃� MS Word 毛�됚녪됙끯됙녪� 魔碼万�됙꾔됛뗛뺉べ꺵뺊녩��됙� �꺵먜듲됙� 痲碼�녩��됙� �녩Ω앨꾓Ω끮��뉃�',
		toolbar			: 'MS Word 魔�됙� �녩Ω앨꾓�',
		title			: 'MS Word 魔�됙� �녩Ω앨꾓�',
		error			: '痲�됚녪꺳� 漠碼魔碼�꾔됙� 卍�뺎뗛뺉ⓜ됗��됙� �녩Ω앨꾓Ω듰��됗붕Ω� 卍碼�녪꾔됙� �끱뺊꾗뉄끮㎔べ녪� 魔碼万�됙꾔됙듰Ω꾔끮Ω듰���'
	},

	pasteText :
	{
		button	: '毛�됚녪됙끯� �듲댶� 魔�먜꺳됗넥� 卍�댶앨됗べ됗��� �녩Ω앨꾓�',
		title	: '毛�됚녪됙끯� �듲댶� 魔�먜꺳됗넥� 卍�댶앨됗べ됗��� �녩Ω앨꾓�'
	},

	templates :
	{
		button			: '�귎먜꾔됙�',
		title			: '�끱뺉꾸끱뉄� �귎먜꾔됙앨�',
		options : '�귎먜꾔됙� 魔碼�꾔꾓Ω녪끯됗넨�',
		insertOption	: '�녬녬뗛뺉へべ됙꺳� �끱뺉꾸끱뉄녪녪� 痲碼�꾔끮㎔닢ほ뉃�',
		selectPromptMsg	: '魔�뺋앤근됗근꾔됚��댷녪녪됚� �끱뺉꾸끱뉄� �귎먜꾔됙앨됙녪� 魔碼�꾔꾓㏀�:',
		emptyListMsg	: '(�귎먜꾔됙� �듲댶�)'
	},

	showBlocks : '磨�녪꾗뺊꺳녪� �꺵녩극넴뺉�',

	stylesCombo :
	{
		label		: '痲�뉃넨꾗뉃�',
		panelTitle	: '痲�뉃넨꾗뉃�',
		panelTitle1	: '磨�녪꾗뺊� 膜�뺉근됗з됗넨됗��됙꺳� 痲�먜꾗먜끱먜녩� 痲�뉃넨꾗뉃ⓜ�',
		panelTitle2	: '痲�됚녪꺳� 磨碼曼�꾓Ω녪끮� 痲�먜꾗먜끱먜녩� 痲�뉃넨꾗뉃ⓜ�',
		panelTitle3	: '�녬뺋� (Object) 痲�먜꾗먜끱먜녩� 痲�뉃넨꾗뉃ⓜ�'
	},

	format :
	{
		label		: '毛�됚녪됙�',
		panelTitle	: '毛�됚녪됙�',

		tag_p		: '痲碼膜�뺉へべ됙꺳�',
		tag_pre		: '魔�됗꾸됙꾓붕Ω� 毛�됚녪됙�',
		tag_address	: '痲碼膜邈�먛�',
		tag_h1		: '�끮㏁뗗꾼� 1',
		tag_h2		: '�끮㏁뗗꾼� 2',
		tag_h3		: '�끮㏁뗗꾼� 3',
		tag_h4		: '�끮㏁뗗꾼� 4',
		tag_h5		: '�끮㏁뗗꾼� 5',
		tag_h6		: '�끮㏁뗗꾼� 6',
		tag_div		: '痲碼磨万碼卍 (DIV)'
	},

	div :
	{
		title				: 'DIV �귋㏀녩� �귎뉃�',
		toolbar				: 'DIV �귋㏀녩� �귎뉃�',
		cssClassInputLabel	: '痲�뉃넨꾗뉃� 魔�됙앨됙녪됚� 痲碼魔��',
		styleSelectLabel	: '痲�뉃넨꾗뉃�',
		IdInputLabel		: 'ID',
		languageCodeInputLabel	: '魔�됙� �꺳댵���',
		inlineStyleInputLabel	: '�귎뉃� 痲�됚녪됗��됙꺳� 痲�뉃넨꾗뉃ⓜ�',
		advisoryTitleInputLabel	: '�끮㏁뗗꾼�',
		langDirLabel		: '魔�됙� �듴녪녪됙꾔됗다�',
		langDirLTRLabel		: '卍�댶꾓��됙� 痲�댷�曼碼 (LTR)',
		langDirRTLLabel		: '痲�댷�膜�됙� 卍�댶꾓붕� (RTL)',
		edit				: 'DIV 魔�뺋앤근됗�',
		remove				: 'DIV �녪됙귌됗근됛뗛뺉�'
  	},

	iframe :
	{
		title		: 'IFrame 漠碼卍�꾔됙�',
		toolbar		: 'IFrame ',
		noUrl		: '�꺲Ω녩��뉄꺳녪됚� 痲碼膜邈�먛넨�(Url)�녪� �꺳됗귿��댵꾼댷�',
		scrolling	: '膜�댶끯됙꾔됙끮� 卍�댵귿��댷녪꺵� �듲댶� �귌댶�',
		border		: '�꺲Ω녩��뉄� 彌�됗글뗛뺊꺳꾔됗근됙녪� �꺵녩극넴뺉�'
	},

	font :
	{
		label		: '漠�뺉� �녬뉃넥�碼',
		voiceLabel	: '漠�뺉� �녬뉃넥�碼',
		panelTitle	: '漠�뺉� �녬뉃넥�碼'
	},

	fontSize :
	{
		label		: '�녪댷��꾗뉄귌�',
		voiceLabel	: '漠�뺉� �녪댷��꾗뉄귌�',
		panelTitle	: '�녪댷��꾗뉄귌�'
	},

	colorButton :
	{
		textColorTitle	: '魔�먜꺳됗넥� 邈�뺋�彌��',
		bgColorTitle	: '魔�뺋��꾔됙� 邈�뺋�彌��',
		panelTitle		: '邈�뺋�',
		auto			: '痲�녩꾸꾗댶꺳됗��됙�',
		more			: '磨碼娩�귋� 邈�뺋�'
	},

	colors :
	{
		'000' : '�귋㎔극�',
		'800000' : '�귌됗꾜붜뉅� 卍�먛근됙�',
		'8B4513' : '魔�댶� �귌댷��뉃�',
		'2F4F4F' : '�귋㎔극Ω끮ほ뉄� �듴먛다됙�',
		'008080' : '�꺵녪꺵댵� �듴먛다됙�',
		'000080' : '�귋㎔극Ω끮ほ뉄� �꺵녪�',
		'4B0082' : '�꺵녪꺵댵� �꺵댶꾓글뺋�',
		'696969' : '�귋㎔극Ω끮ほ뉄� �꺵댶꾓글뺋�',
		'B22222' : '漠�됗� �귌됗꾸됙�',
		'A52A2A' : '�귌댷��뉃�',
		'DAA520' : '痲碼�꾓ほ뉄� 卍�먛근됙�',
		'006400' : '魔�댶� �듴먛다됙�',
		'40E0D0' : '�꺵녪꺵댷� �듴먛다됙�',
		'0000CD' : '痲�댵へほ뉃극㏀앤Ω� �꺵녪�',
		'800080' : '磨�됙녬뺊앤닦�',
		'808080' : '�꺵댶꾓글뺋�',
		'F00' : '�귌됗꾸됙�',
		'FF8C00' : '魔�댶� �귌됗꾜붜뉅� 卍�먛근됙�',
		'FFD700' : '痲碼�꾓ほ뉄�',
		'008000' : '�듴먛다됙�',
		'0FF' : '�듴먛다됙� �꺵녪�',
		'00F' : '�꺵녪�',
		'EE82EE' : '�귌됗꾜붜뉅� 磨�됙녬뺊앤닦�',
		'A9A9A9' : '魔�댶� �꺵댶꾓글뺋�',
		'FFA07A' : '�꺲㏁뗗� �녬먝녪됙꺳� 卍�먛근됙�',
		'FFA500' : '�귌됗꾜붜뉅� 卍�먛근됙�',
		'FFFF00' : '卍�먛근됙�',
		'00FF00' : 'Lime', // MISSING
		'AFEEEE' : '卍�뉃� 岷碼�뗗� 邈�뺋�',
		'ADD8E6' : '痲�댷녬뉄� �꺵녪�',
		'DDA0DD' : '�귌됗꾜붜뉅� 磨�됙녬뺊앤닦�',
		'D3D3D3' : '卍�뉃� �꺵녪꺵댷� �꺵댶꾓글뺋�',
		'FFF0F5' : '卍�뉃� �귌됗꾜붜뉅� 磨�됙녬뺊앤닦�',
		'FAEBD7' : 'Antique White', // MISSING
		'FFFFE0' : '卍�뉃� 卍�먛근됙�',
		'F0FFF0' : 'Honeydew', // MISSING
		'F0FFFF' : '痲碼卍�끮Ω� �꺵녪꺳�',
		'F0F8FF' : '卍�뉃� �꺵녪�',
		'E6E6FA' : '卍�뉃� 磨�됙녬뺊앤닦�',
		'FFF' : '痲碼��'
	},

	scayt :
	{
		title			: '娩�뉃┺Ω� 痲�됙끯꾓� 魔�뺊꺲닦댵�',
		opera_title		: 'Opera 魔�댵근꺵녩귿��댶녪� �귌댶꾔꾔됙끮Ω듰���',
		enable			: '娩�뉃┺Ω� 痲�됙끯꾓� 魔�뺊꺲닦댵글댵다녪� �귌댵꾜붕㎔�',
		disable			: '娩�뉃┺Ω� 痲�됙끯꾓� 魔�뺊꺲닦댵글댵다녪� �녬뺊꺳꾗�',
		about			: '娩�뉃┺Ω� 痲�됙끯꾓� 魔�뺊꺲닦댵글댵� 岷�뺊귌귌됗���',
		toggle			: '娩�뉃┺Ω� 痲�됙끯꾓� 魔�뺊꺲닦댵글댵다녪� �뗗Ω귌됗べ꾔됙� 魔�댵�魔碼魔/�귌댵꾜붕㎔�',
		options			: '魔碼�꾔꾓Ω녪끮�',
		langs			: '魔�됙�',
		moreSuggestions	: '魔�먛��됙끱� �꺵녪� 痲�됙끯꾓� 魔�뺎뗗넨됙듴뺉넨�',
		ignore			: '毛�뺉글뗗� �귌됙꾔끮�',
		ignoreAll		: '岷�뺊끯끯됗넨됚��� 毛�뺉글뗗� �귌됙꾔끮�',
		addWord			: '卍�녩� �귌댵�',
		emptyDic		: '�꾗뉃붜뺉� 痲碼魔�� 磨�댵� �귋Ω꾔끮Ω듰���',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: '魔碼�꾔꾓Ω녪끮�',
		allCaps			: '�녪댷� 岷�뺉근앤ほ� �듴먛꾸됙꾓붕Ω� 岷�뺊끯끱� 卍�녩꾹��� 毛�뺉글뗗� �귌됙꾔끮�',
		ignoreDomainNames : '膜碼痲�됗글� 痲碼魔�됗붕� 毛�뺉글뗗� �귌됙꾔끮�',
		mixedCase		: '�녪댷� �꺳됚녪됙� 岷�뺉근� 磨�됙꾗뺊� 痲碼邈�됙꾓㎔� �듴먛꾸됙꾓붕Ω� 卍�녩꾹��� 毛�뺉글뗗� �귌됙꾔끮�',
		mixedWithDigits	: '卍碼�� 磨碼邈 卍�녩꾹��� 毛�뺉글뗗� �귌됙꾔끮�',

		languagesTab	: '魔�됙�',

		dictionariesTab	: '�꾗뉃붜뺉�',
		dic_field_name	: '�꾗뉃붜뺉� 痲碼魔��',
		dic_create		: '�귎뉃�',
		dic_restore		: '痲�뺉넨꾔됚��� �꺵뺊꾓ほ댵�',
		dic_delete		: '痲�녫녬댵�',
		dic_rename		: '痲碼魔 痲�녩꾹��뺉극�',
		dic_info		: '磨碼娩�꾔됙녪됗닢へ� 痲�됗다꾗뺉べ꺵댷녪� �꾗뉃붙됗べ� Cookie  曼碼 卍碼�귌꾔됙녪됗��� 痲�뺊끯끮� Cookie �녪됚� 卍�됗붙됙끯� �녬뺊꺳꾔됙� 磨�댶꾓붕㏀녪귋㎔� 痲�됗다꾗뺉べ꺵댷녪� �꾗뉃붙됗べ� �꺵녪앨됙듲됙� Cookie  �녬뺊꺳꾔됙끯됗넨됗��됙� 痲�먛다됙� �꺵뺉べ꺵뺊녩��� 卍碼�귌꾔됗붙됙꾔� 磨�댶꾔끮Ω듰��뉃� 磨�� �녩㎔붕�碼 �꾗뉃붙됗べ됚��됗꾸녪� �끱뉄꾓㎔꾸됙끱먛べ됗근됙끯됗꾜붕� 卍碼�귌꾔됗넨됚��됗� 磨�댶꾔됗���. 娩�뺉�卍�됙� �꾗뉃붙됗べ됚��됗꾸녪� �끱뉄꾓㎔꾸됙끱먛べ됗근됙끯됗꾜붕� 卍碼�귌꾔됙끮Ω귍녪� 磨�댶꾓넨됚��됗� �꾗뉃붙됗べ됚��됗꾹��� 痲碼魔魔�됙� 磨�됗근녪� �귌댶듴뉅��� 痲�뺋��뺉� �끱뉄꾓㎔꾸됙끮ほ먛근됙끯됗꾜�碼 卍�됗꾸녪됚� �꾗뉃붙됗べ됚��됗꾜��됙� 磨�됗극넨� 磨�댶꾓넥� �꾗뉃붜뺉� 痲碼魔�됙녪� �꺳됗귿��댵꾼댶� 痲�뺉넨꾔됚��� �귋Ω듰ほ뉃� 魔�댶앰녪됗넨됙녪� 磨�먛넨됚�.',

		aboutTab		: '岷�뺊귌귌됗���'
	},

	about :
	{
		title		: 'CKEditor 岷�뺊귌귌됗���',
		dlgTitle	: 'CKEditor 岷�뺊귌귌됗���',
		help	: '$1 �녪� 万�됙듰㎔글뺉� �귌됙꾔됙� �듰㎔극��뺊끰��� 痲�먛근됗다됚�',
		userGuide : 'CKEditor 痲�됗다꾗뺉べ꺵댷녪� �귌댶꾔꾓Ω녪끯됗넨�',
		moreInfo	: '魔�댵� 魔�뉃극Ω듲됙끯됗꾸녪� 万�됙듰㎔글뺉� �귌됙꾔됙� �꺵먜꾔됗다됙끰��� 痲碼痲�됗� 魔�먛��됙끱� �꺵녪� 痲�뉅녬뉃극붕� 痲�먛근됗다됚�',
		copy		: 'Copyright &copy; $1. �녬뺉닢� 岷�댶귎뉄귌됗붕� 痲�됚���'
	},

	maximize : '�녪댷�碼�듰�',
	minimize : '�꺳됚녪됙꺳꾗뺉�',

	fakeobjects :
	{
		anchor		: '�꾗뺋�彌�뺉근꾔됙� �녬뉄귋へ�',
		flash		: 'Flash 寞碼�녪꾓Ω녩��뉃글뉄�',
		iframe		: 'IFrame',
		hiddenfield	: '�듲댵닦뉃글뉄� 膜碼痲�됗글�',
		unknown		: '�듲댷녬뉄� �녬뺋�'
	},

	resize : '�녪댷��꾗뉄귌됙녪� 痲�녩꾹��뺉극�',

	colordialog :
	{
		title		: '邈�뺋� 魔碼�꾔꾓㏀�',
		options	:	'邈�뺋� 魔碼�꾔꾓Ω녪끯됗넨�',
		highlight	: '�듲댵글뉃�',
		selected	: '邈�뺋� 魔碼�꾔꾓㏀�',
		clear		: '魔碼万�됙꾓�'
	},

	toolbarCollapse	: '�귌댵극Ω� 磨碼�꾓�碼�귌녪� �귋㎔べ꾓�',
	toolbarExpand	: '�귌댵극Ω� 磨碼�꾓�碼�귌녪� �듰Ω�',

	toolbarGroups :
	{
		document : '毛�댵ほ댶�',
		clipboard : '�녩Ω앨꾓㎔� 魔碼漠魔�됗넨�/�듴먜녪됛뗗Ω�',
		editing : '魔�뺋앤근됗�',
		forms : '寞�뺉��뗛뺊�',
		basicstyles : '痲碼卍碼卍�됙� 痲�뉃넨꾗뉃�',
		paragraph : '痲碼磨万碼卍',
		links : '痲�뉄꾓Ω녪끮�',
		insert : '�귌됗넥ほ뉃�',
		styles : '痲�뉃넨꾗뉃�',
		colors : '邈�뺋�',
		tools : '�귌댵극Ω�'
	},

	bidi :
	{
		ltr : '魔�먜꺳됗넥� �듴녪녪됙꾔됗다� 卍�댶꾓��됙� 痲�댷�曼碼',
		rtl : '魔�먜꺳됗넥� �듴녪녪됙꾔됗다� 痲�댷�膜�됙� 卍�댶꾓붕�'
	},

	docprops :
	{
		label : '磨�뺉� 漠碼卍�꾔됙귌�',
		title : '磨�뺉� 漠碼卍�꾔됙귌�',
		design : '�꾓Ω듲됚앱�',
		meta : '�끱먛へ� 卍碼�녪꾔됙� �끱뺊꾗뉄끮㎔�',
		chooseColor : '魔碼�꾔꾓㏀�',
		other : '磨碼娩�귋�',
		docTitle :	'磨�뺉� �끮㏁뗗꾼뉃넨�',
		charset : 	'岷�뺉근� �꺳댵��꾔됙녪됗다�',
		charsetOther : '磨碼娩�귋� 岷�뺉근� �꺳댵��꾔됙녪됗다�',
		charsetASCII : 'ASCII',
		charsetCE : '痲�댵へほ뉃극� �듰㏁뗗글뉄앤�',
		charsetCT : '�끱뉃글뺊꺳꺵뺊� 漠�뺊녩꾼뉅녬� (Big5)',
		charsetCR : '卍�됙꾓㏁뗙듰Ω녫녬�',
		charsetGR : '彌�됗글먜꺴녬�',
		charsetJP : '�듰Ω앨댶녫녬�',
		charsetKR : '�꺵녩근됙듴뺋녬�',
		charsetTR : '魔�댵근꺴녬�',
		charsetUN : '�듴뉄녪됙꺳댵� (UTF-8)',
		charsetWE : '曼�뺉극ⓜ됙� �듰㏁뗗글뉄앤�',
		docType : '毛�댵ほ댶� 魔�됙앨�',
		docTypeOther : '磨碼娩�귋� 毛�댵ほ댶� 魔�됙앨�',
		xhtmlDec : 'XHTML 痲�먜녪됙귌꾔됙끯됗넨됙녪� 痲�녩� 痲�됚녪됚��� 痲碼�꾔됗���',
		bgColor : '魔�뺋��꾔됙� 邈�뺋�彌��',
		bgImage : '魔�뺋��꾔됙� 卍�댵글뺉�',
		bgFixed : '魔�뺋��꾔됙� 卍�댵글뺉べ녪� 膜�댶끯됙꾓㎔べ끮�',
		txtColor : '魔�먜꺳됗넥� 邈�뺋�彌��',
		margin : '磨�뺉� 彌�됗글뗛뺊�',
		marginTop : '痲�댵넥べ�',
		marginLeft : '卍�댶�',
		marginRight : '痲�댷�',
		marginBottom : '痲碼卍魔��',
		metaKeywords : '磨�뺉� �듴댵꾸� 痲�됙녩��먜꺳됗� 岷碼�꾔귌됙꾔됙� 卍�녩꾸� (痲�됙녫��꾔됗꾹녬� 毛�뺉� [,] 磨�됙꾗뺊� 痲碼�듰근됙꾔됗���)',
		metaDescription : '磨�뺉� �듴댵꾸� �녬댵닦뺊녩��댵글댵다�',
		metaAuthor : '�듰㎔꾜붜뉅녪�',
		metaCopyright : '�녬뺉닢� 岷�댶귎뉄귌�',
		previewHtml : '<p>磨�� 磨�됗� �귌됗넨됙� <strong>�꺵녩극넴뺉べ끯됚��� 痲�됗다꾔됗べ됗��됗붕Ω� 魔�먜꺳됗넥� </strong>卍�됗� �녬녬뗛뺉へほ� <a href=\\\\"javascript:void(0)\\\\">CKEditor</a>.�녪� 痲�됗다꾔됗べ됛뗗㎔べ됗넨됗�.</p>'
	}
};
