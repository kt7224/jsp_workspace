/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Vietnamese language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['vi'] =
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
	editorTitle : 'Tr챙nh so梳죒 th梳즣 phong ph첬, %1',
	editorHelp : 'Nh梳쩸 ALT + 0 휃沼� 휃튼沼즓 gi첬p 휃沼�',

	// ARIA descriptions.
	toolbars	: 'Thanh c척ng c沼�',
	editor		: 'B沼� so梳죒 th梳즣',

	// Toolbar buttons without dialogs.
	source			: 'M찾 HTML',
	newPage			: 'Trang m沼쌻',
	save			: 'L튼u',
	preview			: 'Xem tr튼沼쌵',
	cut				: 'C梳칣',
	copy			: 'Sao ch챕p',
	paste			: 'D찼n',
	print			: 'In',
	underline		: 'G梳죅h ch창n',
	bold			: '휂梳춎',
	italic			: 'Nghi챗ng',
	selectAll		: 'Ch沼뛫 t梳쩿 c梳�',
	removeFormat	: 'Xo찼 휃沼땙h d梳죒g',
	strike			: 'G梳죅h xuy챗n ngang',
	subscript		: 'Ch沼� s沼� d튼沼쌻',
	superscript		: 'Ch沼� s沼� tr챗n',
	horizontalrule	: 'Ch챔n 휃튼沼쓓g ph창n c찼ch ngang',
	pagebreak		: 'Ch챔n ng梳칣 trang',
	pagebreakAlt		: 'Ng梳칣 trang',
	unlink			: 'Xo찼 li챗n k梳퓍',
	undo			: 'Kh척i ph沼쩭 thao t찼c',
	redo			: 'L횪m l梳죍 thao t찼c',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Duy沼뇍 tr챗n m찼y ch沼�',
		url				: 'URL',
		protocol		: 'Giao th沼쯢',
		upload			: 'T梳즜 l챗n',
		uploadSubmit	: 'T梳즜 l챗n m찼y ch沼�',
		image			: 'H챙nh 梳즢h',
		flash			: 'Flash',
		form			: 'Bi沼긳 m梳쳕',
		checkbox		: 'N첬t ki沼긩',
		radio			: 'N첬t ch沼뛫',
		textField		: 'Tr튼沼쓓g v훱n b梳즢',
		textarea		: 'V첫ng v훱n b梳즢',
		hiddenField		: 'Tr튼沼쓓g 梳쯰',
		button			: 'N첬t',
		select			: '횚 ch沼뛫',
		imageButton		: 'N첬t h챙nh 梳즢h',
		notSet			: '<kh척ng thi梳퓍 l梳춑>',
		id				: '휂沼땙h danh',
		name			: 'T챗n',
		langDir			: 'H튼沼썀g ng척n ng沼�',
		langDirLtr		: 'Tr찼i sang ph梳즜 (LTR)',
		langDirRtl		: 'Ph梳즜 sang tr찼i (RTL)',
		langCode		: 'M찾 ng척n ng沼�',
		longDescr		: 'M척 t梳� URL',
		cssClass		: 'L沼썂 Stylesheet',
		advisoryTitle	: 'Nhan 휃沼� h튼沼썀g d梳쳌',
		cssStyle		: 'Ki沼긳 (style)',
		ok				: '휂沼뱊g 첵',
		cancel			: 'B沼� qua',
		close			: '휂처ng',
		preview			: 'Xem tr튼沼쌵',
		generalTab		: 'Tab chung',
		advancedTab		: 'Tab m沼� r沼셬g',
		validateNumberFailed : 'Gi찼 tr沼� n횪y kh척ng ph梳즜 l횪 s沼�.',
		confirmNewPage	: 'M沼뛦 thay 휃沼뷼 kh척ng 휃튼沼즓 l튼u l梳죍, n沼셢 dung n횪y s梳� b沼� m梳쩿. B梳죒 c처 ch梳칌 ch梳칗 mu沼몁 t梳즜 m沼셳 trang m沼쌻?',
		confirmCancel	: 'M沼셳 v횪i t첫y ch沼뛫 휃찾 b沼� thay 휃沼뷼. B梳죒 c처 ch梳칌 ch梳칗 mu沼몁 휃처ng h沼셮 tho梳죍?',
		options			: 'T첫y ch沼뛫',
		target			: '휂챠ch 휃梳퓆',
		targetNew		: 'C沼춁 s沼� m沼쌻 (_blank)',
		targetTop		: 'C沼춁 s沼� tr챗n c첫ng (_top)',
		targetSelf		: 'T梳죍 trang (_self)',
		targetParent	: 'C沼춁 s沼� cha (_parent)',
		langDirLTR		: 'Tr찼i sang ph梳즜 (LTR)',
		langDirRTL		: 'Ph梳즜 sang tr찼i (RTL)',
		styles			: 'Ki沼긳',
		cssClasses		: 'L沼썂 CSS',
		width			: 'Chi沼걏 r沼셬g',
		height			: 'chi沼걏 cao',
		align			: 'V沼� tr챠',
		alignLeft		: 'Tr찼i',
		alignRight		: 'Ph梳즜',
		alignCenter		: 'Gi沼칊',
		alignTop		: 'Tr챗n',
		alignMiddle		: 'Gi沼칊',
		alignBottom		: 'D튼沼쌻',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'Chi沼걏 cao ph梳즜 l횪 s沼� nguy챗n.',
		invalidWidth	: 'Chi沼걏 r沼셬g ph梳즜 l횪 s沼� nguy챗n.',
		invalidCssLength	: 'Gi찼 tr沼� quy 휃沼땙h cho tr튼沼쓓g "%1" ph梳즜 l횪 m沼셳 s沼� d튼퉤ng c처 ho梳톍 kh척ng c처 m沼셳 휃퉤n v沼� 휃o CSS h沼즤 l沼� (px, %, in, cm, mm, em, ex, pt, ho梳톍 pc).',
		invalidHtmlLength	: 'Gi찼 tr沼� quy 휃沼땙h cho tr튼沼쓓g "%1" ph梳즜 l횪 m沼셳 s沼� d튼퉤ng c처 ho梳톍 kh척ng c처 m沼셳 휃퉤n v沼� 휃o HTML h沼즤 l沼� (px ho梳톍 %).',
		invalidInlineStyle	: 'Gi찼 tr沼� quy 휃沼땙h cho ki沼긳 n沼셢 tuy梳퓆 ph梳즜 bao g沼뱈 m沼셳 ho梳톍 nhi沼걏 d沼� li沼뇎 v沼쌻 휃沼땙h d梳죒g "t챗n:gi찼 tr沼�", c찼ch nhau b梳켷g d梳쪀 ch梳쩷 ph梳쯻.',
		cssLengthTooltip	: 'Nh梳춑 m沼셳 gi찼 tr沼� theo pixel ho梳톍 m沼셳 s沼� v沼쌻 m沼셳 휃퉤n v沼� CSS h沼즤 l沼� (px, %, in, cm, mm, em, ex, pt, ho梳톍 pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, kh척ng c처</span>'
	},

	contextmenu :
	{
		options : 'T첫y ch沼뛫 menu b沼� xung'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Ch챔n k첵 t沼� 휃梳톍 bi沼뇍',
		title		: 'H찾y ch沼뛫 k첵 t沼� 휃梳톍 bi沼뇍',
		options : 'T첫y ch沼뛫 c찼c k첵 t沼� 휃梳톍 bi沼뇍'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Ch챔n/S沼춁 li챗n k梳퓍',
		other 		: '<kh찼c>',
		menu		: 'S沼춁 li챗n k梳퓍',
		title		: 'Li챗n k梳퓍',
		info		: 'Th척ng tin li챗n k梳퓍',
		target		: '휂챠ch',
		upload		: 'T梳즜 l챗n',
		advanced	: 'M沼� r沼셬g',
		type		: 'Ki沼긳 li챗n k梳퓍',
		toUrl		: 'URL',
		toAnchor	: 'Neo trong trang n횪y',
		toEmail		: 'Th튼 휃i沼뇆 t沼�',
		targetFrame		: '<khung>',
		targetPopup		: '<c沼춁 s沼� popup>',
		targetFrameName	: 'T챗n khung 휃챠ch',
		targetPopupName	: 'T챗n c沼춁 s沼� Popup',
		popupFeatures	: '휂梳톍 휃i沼긩 c沼쬪 c沼춁 s沼� Popup',
		popupResizable	: 'C처 th沼� thay 휃沼뷼 k챠ch c沼�',
		popupStatusBar	: 'Thanh tr梳죒g th찼i',
		popupLocationBar: 'Thanh v沼� tr챠',
		popupToolbar	: 'Thanh c척ng c沼�',
		popupMenuBar	: 'Thanh Menu',
		popupFullScreen	: 'To횪n m횪n h챙nh (IE)',
		popupScrollBars	: 'Thanh cu沼셬',
		popupDependent	: 'Ph沼� thu沼셛 (Netscape)',
		popupLeft		: 'V沼� tr챠 b챗n tr찼i',
		popupTop		: 'V沼� tr챠 ph챠a tr챗n',
		id				: '휂沼땙h danh',
		langDir			: 'H튼沼썀g ng척n ng沼�',
		langDirLTR		: 'Tr찼i sang ph梳즜 (LTR)',
		langDirRTL		: 'Ph梳즜 sang tr찼i (RTL)',
		acccessKey		: 'Ph챠m h沼� tr沼� truy c梳춑',
		name			: 'T챗n',
		langCode			: 'M찾 ng척n ng沼�',
		tabIndex			: 'Ch沼� s沼� c沼쬪 Tab',
		advisoryTitle		: 'Nhan 휃沼� h튼沼썀g d梳쳌',
		advisoryContentType	: 'N沼셢 dung h튼沼썀g d梳쳌',
		cssClasses		: 'L沼썂 Stylesheet',
		charset			: 'B梳즢g m찾 c沼쬪 t횪i nguy챗n 휃튼沼즓 li챗n k梳퓍 휃梳퓆',
		styles			: 'Ki沼긳 (style)',
		rel			: 'Quan h沼�',
		selectAnchor		: 'Ch沼뛫 m沼셳 휃i沼긩 neo',
		anchorName		: 'Theo t챗n 휃i沼긩 neo',
		anchorId			: 'Theo 휃沼땙h danh th횪nh ph梳쬷',
		emailAddress		: 'Th튼 휃i沼뇆 t沼�',
		emailSubject		: 'Ti챗u 휃沼� th척ng 휃i沼뇈',
		emailBody		: 'N沼셢 dung th척ng 휃i沼뇈',
		noAnchors		: '(Kh척ng c처 휃i沼긩 neo n횪o trong t횪i li沼뇎)',
		noUrl			: 'H찾y 휃튼a v횪o 휃튼沼쓓g d梳쳌 li챗n k梳퓍 (URL)',
		noEmail			: 'H찾y 휃튼a v횪o 휃沼땇 ch沼� th튼 휃i沼뇆 t沼�'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ch챔n/S沼춁 휃i沼긩 neo',
		menu		: 'Thu沼셛 t챠nh 휃i沼긩 neo',
		title		: 'Thu沼셛 t챠nh 휃i沼긩 neo',
		name		: 'T챗n c沼쬪 휃i沼긩 neo',
		errorName	: 'H찾y nh梳춑 v횪o t챗n c沼쬪 휃i沼긩 neo',
		remove		: 'X처a neo'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Thu沼셛 t챠nh danh s찼ch c처 th沼� t沼�',
		bulletedTitle		: 'Thu沼셛 t챠nh danh s찼ch kh척ng th沼� t沼�',
		type				: 'Ki沼긳 lo梳죍',
		start				: 'B梳칣 휃梳쬾',
		validateStartNumber				:'S沼� b梳칣 휃梳쬾 danh s찼ch ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
		circle				: 'Khuy챗n tr챵n',
		disc				: 'H챙nh 휃칫a',
		square				: 'H챙nh vu척ng',
		none				: 'Kh척ng g챙 c梳�',
		notset				: '<kh척ng thi梳퓍 l梳춑>',
		armenian			: 'S沼� theo ki沼긳 Armenian',
		georgian			: 'S沼� theo ki沼긳 Georgian (an, ban, gan...)',
		lowerRoman			: 'S沼� La M찾 ki沼긳 th튼沼쓓g (i, ii, iii, iv, v...)',
		upperRoman			: 'S沼� La M찾 ki沼긳 HOA (I, II, III, IV, V...)',
		lowerAlpha			: 'Ki沼긳 abc th튼沼쓓g (a, b, c, d, e...)',
		upperAlpha			: 'Ki沼긳 ABC HOA (A, B, C, D, E...)',
		lowerGreek			: 'Ki沼긳 Hy L梳죖 (alpha, beta, gamma...)',
		decimal				: 'Ki沼긳 s沼� (1, 2, 3 ...)',
		decimalLeadingZero	: 'Ki沼긳 s沼� (01, 02, 03...)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'T챙m ki梳퓅 v횪 thay th梳�',
		find				: 'T챙m ki梳퓅',
		replace				: 'Thay th梳�',
		findWhat			: 'T챙m chu沼뾦:',
		replaceWith			: 'Thay b梳켷g:',
		notFoundMsg			: 'Kh척ng t챙m th梳쪅 chu沼뾦 c梳쬷 t챙m.',
		findOptions			: 'T챙m t첫y ch沼뛫',
		matchCase			: 'Ph창n bi沼뇍 ch沼� hoa/th튼沼쓓g',
		matchWord			: 'Gi沼몁g to횪n b沼� t沼�',
		matchCyclic			: 'Gi沼몁g m沼셳 ph梳쬷',
		replaceAll			: 'Thay th梳� t梳쩿 c梳�',
		replaceSuccessMsg	: '%1 v沼� tr챠 휃찾 휃튼沼즓 thay th梳�.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'B梳즢g',
		title		: 'Thu沼셛 t챠nh b梳즢g',
		menu		: 'Thu沼셛 t챠nh b梳즢g',
		deleteTable	: 'X처a b梳즢g',
		rows		: 'S沼� h횪ng',
		columns		: 'S沼� c沼셳',
		border		: 'K챠ch th튼沼쌵 휃튼沼쓓g vi沼걆',
		widthPx		: '휂i沼긩 梳즢h (px)',
		widthPc		: 'Ph梳쬷 tr훱m (%)',
		widthUnit	: '휂퉤n v沼�',
		cellSpace	: 'Kho梳즢g c찼ch gi沼칊 c찼c 척',
		cellPad		: 'Kho梳즢g 휃沼뇅 gi沼� 척 v횪 n沼셢 dung',
		caption		: '휂梳쬾 휃沼�',
		summary		: 'T처m l튼沼즓',
		headers		: '휂梳쬾 휃沼�',
		headersNone		: 'Kh척ng c처',
		headersColumn	: 'C沼셳 휃梳쬾 ti챗n',
		headersRow		: 'H횪ng 휃梳쬾 ti챗n',
		headersBoth		: 'C梳� hai',
		invalidRows		: 'S沼� l튼沼즢g h횪ng ph梳즜 l횪 m沼셳 s沼� l沼썀 h퉤n 0.',
		invalidCols		: 'S沼� l튼沼즢g c沼셳 ph梳즜 l횪 m沼셳 s沼� l沼썀 h퉤n 0.',
		invalidBorder	: 'K챠ch c沼� c沼쬪 휃튼沼쓓g bi챗n ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
		invalidWidth	: 'Chi沼걏 r沼셬g c沼쬪 b梳즢g ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
		invalidHeight	: 'Chi沼걏 cao c沼쬪 b梳즢g ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
		invalidCellSpacing	: 'Kho梳즢g c찼ch gi沼칊 c찼c 척 ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
		invalidCellPadding	: 'Kho梳즢g 휃沼뇅 gi沼칊 척 v횪 n沼셢 dung ph梳즜 l횪 m沼셳 s沼� nguy챗n.',

		cell :
		{
			menu			: '횚',
			insertBefore	: 'Ch챔n 척 Ph챠a tr튼沼쌵',
			insertAfter		: 'Ch챔n 척 Ph챠a sau',
			deleteCell		: 'Xo찼 척',
			merge			: 'K梳퓍 h沼즤 척',
			mergeRight		: 'K梳퓍 h沼즤 sang ph梳즜',
			mergeDown		: 'K梳퓍 h沼즤 xu沼몁g d튼沼쌻',
			splitHorizontal	: 'Ph창n t찼ch 척 theo chi沼걏 ngang',
			splitVertical	: 'Ph창n t찼ch 척 theo chi沼걏 d沼뛠',
			title			: 'Thu沼셛 t챠nh c沼쬪 척',
			cellType		: 'Ki沼긳 c沼쬪 척',
			rowSpan			: 'K梳퓍 h沼즤 h횪ng',
			colSpan			: 'K梳퓍 h沼즤 c沼셳',
			wordWrap		: 'Ch沼� li沼걆 h횪ng',
			hAlign			: 'Canh l沼� ngang',
			vAlign			: 'Canh l沼� d沼뛠',
			alignBaseline	: '휂튼沼쓓g c퉤 s沼�',
			bgColor			: 'M횪u n沼걆',
			borderColor		: 'M횪u vi沼걆',
			data			: 'D沼� li沼뇎',
			header			: '휂梳쬾 휃沼�',
			yes				: 'C처',
			no				: 'Kh척ng',
			invalidWidth	: 'Chi沼걏 r沼셬g c沼쬪 척 ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
			invalidHeight	: 'Chi沼걏 cao c沼쬪 척 ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
			invalidRowSpan	: 'S沼� h횪ng k梳퓍 h沼즤 ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
			invalidColSpan	: 'S沼� c沼셳 k梳퓍 h沼즤 ph梳즜 l횪 m沼셳 s沼� nguy챗n.',
			chooseColor		: 'Ch沼뛫 m횪u'
		},

		row :
		{
			menu			: 'H횪ng',
			insertBefore	: 'Ch챔n h횪ng ph챠a tr튼沼쌵',
			insertAfter		: 'Ch챔n h횪ng ph챠a sau',
			deleteRow		: 'Xo찼 h횪ng'
		},

		column :
		{
			menu			: 'C沼셳',
			insertBefore	: 'Ch챔n c沼셳 ph챠a tr튼沼쌵',
			insertAfter		: 'Ch챔n c沼셳 ph챠a sau',
			deleteColumn	: 'Xo찼 c沼셳'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Thu沼셛 t챠nh c沼쬪 n첬t',
		text		: 'Chu沼뾦 hi沼긪 th沼� (gi찼 tr沼�)',
		type		: 'Ki沼긳',
		typeBtn		: 'N첬t b梳쩷',
		typeSbm		: 'N첬t g沼춊',
		typeRst		: 'N첬t nh梳춑 l梳죍'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Thu沼셛 t챠nh n첬t ki沼긩',
		radioTitle	: 'Thu沼셛 t챠nh n첬t ch沼뛫',
		value		: 'Gi찼 tr沼�',
		selected	: '휂튼沼즓 ch沼뛫'
	},

	// Form Dialog.
	form :
	{
		title		: 'Thu沼셛 t챠nh bi沼긳 m梳쳕',
		menu		: 'Thu沼셛 t챠nh bi沼긳 m梳쳕',
		action		: 'H횪nh 휃沼셬g',
		method		: 'Ph튼퉤ng th沼쯢',
		encoding	: 'B梳즢g m찾'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Thu沼셛 t챠nh 척 ch沼뛫',
		selectInfo	: 'Th척ng tin',
		opAvail		: 'C찼c t첫y ch沼뛫 c처 th沼� s沼� d沼쩸g',
		value		: 'Gi찼 tr沼�',
		size		: 'K챠ch c沼�',
		lines		: 'd챵ng',
		chkMulti	: 'Cho ph챕p ch沼뛫 nhi沼걏',
		opText		: 'V훱n b梳즢',
		opValue		: 'Gi찼 tr沼�',
		btnAdd		: 'Th챗m',
		btnModify	: 'Thay 휃沼뷼',
		btnUp		: 'L챗n',
		btnDown		: 'Xu沼몁g',
		btnSetValue : 'Gi찼 tr沼� 휃튼沼즓 ch沼뛫',
		btnDelete	: 'N첬t xo찼'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Thu沼셛 t챠nh v첫ng v훱n b梳즢',
		cols		: 'S沼� c沼셳',
		rows		: 'S沼� h횪ng'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Thu沼셛 t챠nh tr튼沼쓓g v훱n b梳즢',
		name		: 'T챗n',
		value		: 'Gi찼 tr沼�',
		charWidth	: '휂沼� r沼셬g c沼쬪 k첵 t沼�',
		maxChars	: 'S沼� k첵 t沼� t沼멼 휃a',
		type		: 'Ki沼긳',
		typeText	: 'K첵 t沼�',
		typePass	: 'M梳춗 kh梳쯷'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Thu沼셛 t챠nh tr튼沼쓓g 梳쯰',
		name	: 'T챗n',
		value	: 'Gi찼 tr沼�'
	},

	// Image Dialog.
	image :
	{
		title		: 'Thu沼셛 t챠nh c沼쬪 梳즢h',
		titleButton	: 'Thu沼셛 t챠nh n첬t c沼쬪 梳즢h',
		menu		: 'Thu沼셛 t챠nh c沼쬪 梳즢h',
		infoTab		: 'Th척ng tin c沼쬪 梳즢h',
		btnUpload	: 'T梳즜 l챗n m찼y ch沼�',
		upload		: 'T梳즜 l챗n',
		alt			: 'Ch첬 th챠ch 梳즢h',
		lockRatio	: 'Gi沼� nguy챗n t沼� l沼�',
		resetSize	: 'K챠ch th튼沼쌵 g沼멵',
		border		: '휂튼沼쓓g vi沼걆',
		hSpace		: 'Kho梳즢g 휃沼뇅 ngang',
		vSpace		: 'Kho梳즢g 휃沼뇅 d沼뛠',
		alertUrl	: 'H찾y 휃튼a v횪o 휃튼沼쓓g d梳쳌 c沼쬪 梳즢h',
		linkTab		: 'Tab li챗n k梳퓍',
		button2Img	: 'B梳죒 c처 mu沼몁 chuy沼긪 n첬t b梳쩷 b梳켷g 梳즢h 휃튼沼즓 ch沼뛫 th횪nh 梳즢h?',
		img2Button	: 'B梳죒 c처 mu沼몁 chuy沼긪 휃沼뷼 梳즢h 휃튼沼즓 ch沼뛫 th횪nh n첬t b梳쩷 b梳켷g 梳즢h?',
		urlMissing	: 'Thi梳퓎 휃튼沼쓓g d梳쳌 h챙nh 梳즢h',
		validateBorder	: 'Chi沼걏 r沼셬g c沼쬪 휃튼沼쓓g vi沼걆 ph梳즜 l횪 m沼셳 s沼� nguy챗n d튼퉤ng',
		validateHSpace	: 'Kho梳즢g 휃沼뇅 ngang ph梳즜 l횪 m沼셳 s沼� nguy챗n d튼퉤ng',
		validateVSpace	: 'Kho梳즢g 휃沼뇅 d沼뛠 ph梳즜 l횪 m沼셳 s沼� nguy챗n d튼퉤ng'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Thu沼셛 t챠nh Flash',
		propertiesTab	: 'Thu沼셛 t챠nh',
		title			: 'Thu沼셛 t챠nh Flash',
		chkPlay			: 'T沼� 휃沼셬g ch梳죣',
		chkLoop			: 'L梳톚',
		chkMenu			: 'Cho ph챕p b梳춗 menu c沼쬪 Flash',
		chkFull			: 'Cho ph챕p to횪n m횪n h챙nh',
 		scale			: 'T沼� l沼�',
		scaleAll		: 'Hi沼긪 th沼� t梳쩿 c梳�',
		scaleNoBorder	: 'Kh척ng 휃튼沼쓓g vi沼걆',
		scaleFit		: 'V沼첺 v梳톘',
		access			: 'Truy c梳춑 m찾',
		accessAlways	: 'Lu척n lu척n',
		accessSameDomain: 'C첫ng t챗n mi沼걆',
		accessNever		: 'Kh척ng bao gi沼�',
		alignAbsBottom	: 'D튼沼쌻 tuy沼뇍 휃沼멼',
		alignAbsMiddle	: 'Gi沼칊 tuy沼뇍 휃沼멼',
		alignBaseline	: '휂튼沼쓓g c퉤 s沼�',
		alignTextTop	: 'Ph챠a tr챗n ch沼�',
		quality			: 'Ch梳쩿 l튼沼즢g',
		qualityBest		: 'T沼몋 nh梳쩿',
		qualityHigh		: 'Cao',
		qualityAutoHigh	: 'Cao t沼� 휃沼셬g',
		qualityMedium	: 'Trung b챙nh',
		qualityAutoLow	: 'Th梳쩺 t沼� 휃沼셬g',
		qualityLow		: 'Th梳쩺',
		windowModeWindow: 'C沼춁 s沼�',
		windowModeOpaque: 'M沼� 휃沼쩭',
		windowModeTransparent : 'Trong su沼몋',
		windowMode		: 'Ch梳� 휃沼� c沼춁 s沼�',
		flashvars		: 'C찼c bi梳퓆 s沼� d횪nh cho Flash',
		bgcolor			: 'M횪u n沼걆',
		hSpace			: 'Kho梳즢g 휃沼뇅 ngang',
		vSpace			: 'Kho梳즢g 휃沼뇅 d沼뛠',
		validateSrc		: 'H찾y 휃튼a v횪o 휃튼沼쓓g d梳쳌 li챗n k梳퓍',
		validateHSpace	: 'Kho梳즢g 휃沼뇅 ngang ph梳즜 l횪 s沼� nguy챗n.',
		validateVSpace	: 'Kho梳즢g 휃沼뇅 d沼뛠 ph梳즜 l횪 s沼� nguy챗n.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Ki沼긩 tra ch챠nh t梳�',
		title			: 'Ki沼긩 tra ch챠nh t梳�',
		notAvailable	: 'Xin l沼뾦, d沼땉h v沼� n횪y hi沼뇆 t梳죍 kh척ng c처.',
		errorLoading	: 'L沼뾦 khi 휃ang n梳죖 d沼땉h v沼� 沼쯰g d沼쩸g: %s.',
		notInDic		: 'Kh척ng c처 trong t沼� 휃i沼긪',
		changeTo		: 'Chuy沼긪 th횪nh',
		btnIgnore		: 'B沼� qua',
		btnIgnoreAll	: 'B沼� qua t梳쩿 c梳�',
		btnReplace		: 'Thay th梳�',
		btnReplaceAll	: 'Thay th梳� t梳쩿 c梳�',
		btnUndo			: 'Ph沼쩭 h沼밿 l梳죍',
		noSuggestions	: '- Kh척ng 휃튼a ra g沼즜 첵 v沼� t沼� -',
		progress		: '휂ang ti梳퓆 h횪nh ki沼긩 tra ch챠nh t梳�...',
		noMispell		: 'Ho횪n t梳쩿 ki沼긩 tra ch챠nh t梳�: Kh척ng c처 l沼뾦 ch챠nh t梳�',
		noChanges		: 'Ho횪n t梳쩿 ki沼긩 tra ch챠nh t梳�: Kh척ng c처 t沼� n횪o 휃튼沼즓 thay 휃沼뷼',
		oneChange		: 'Ho횪n t梳쩿 ki沼긩 tra ch챠nh t梳�: M沼셳 t沼� 휃찾 휃튼沼즓 thay 휃沼뷼',
		manyChanges		: 'Ho횪n t梳쩿 ki沼긩 tra ch챠nh t梳�: %1 t沼� 휃찾 휃튼沼즓 thay 휃沼뷼',
		ieSpellDownload	: 'Ch沼쯢 n훱ng ki沼긩 tra ch챠nh t梳� ch튼a 휃튼沼즓 c횪i 휃梳톞. B梳죒 c처 mu沼몁 t梳즜 v沼� ngay b창y gi沼�?'
	},

	smiley :
	{
		toolbar	: 'H챙nh bi沼긳 l沼� c梳즡 x첬c (m梳톞 c튼沼쓎)',
		title	: 'Ch챔n h챙nh bi沼긳 l沼� c梳즡 x첬c (m梳톞 c튼沼쓎)',
		options : 'T첫y ch沼뛫 h챙nh  bi沼긳 l沼� c梳즡 x첬c'
	},

	elementsPath :
	{
		eleLabel : 'Nh찾n th횪nh ph梳쬷',
		eleTitle : '%1 th횪nh ph梳쬷'
	},

	numberedlist	: 'Ch챔n/Xo찼 Danh s찼ch c처 th沼� t沼�',
	bulletedlist	: 'Ch챔n/Xo찼 Danh s찼ch kh척ng th沼� t沼�',
	indent			: 'D沼땉h v횪o trong',
	outdent			: 'D沼땉h ra ngo횪i',

	justify :
	{
		left	: 'Canh tr찼i',
		center	: 'Canh gi沼칊',
		right	: 'Canh ph梳즜',
		block	: 'Canh 휃沼걏'
	},

	blockquote : 'Kh沼멼 tr챠ch d梳쳌',

	clipboard :
	{
		title		: 'D찼n',
		cutError	: 'C찼c thi梳퓍 l梳춑 b梳즣 m梳춗 c沼쬪 tr챙nh duy沼뇍 kh척ng cho ph챕p tr챙nh bi챗n t梳춑 t沼� 휃沼셬g th沼켧 thi l沼뇆h c梳칣. H찾y s沼� d沼쩸g b횪n ph챠m cho l沼뇆h n횪y (Ctrl/Cmd+X).',
		copyError	: 'C찼c thi梳퓍 l梳춑 b梳즣 m梳춗 c沼쬪 tr챙nh duy沼뇍 kh척ng cho ph챕p tr챙nh bi챗n t梳춑 t沼� 휃沼셬g th沼켧 thi l沼뇆h sao ch챕p. H찾y s沼� d沼쩸g b횪n ph챠m cho l沼뇆h n횪y (Ctrl/Cmd+C).',
		pasteMsg	: 'H찾y d찼n n沼셢 dung v횪o trong khung b챗n d튼沼쌻, s沼� d沼쩸g t沼� h沼즤 ph챠m (<STRONG>Ctrl/Cmd+V</STRONG>) v횪 nh梳쩸 v횪o n첬t <STRONG>휂沼뱊g 첵</STRONG>.',
		securityMsg	: 'Do thi梳퓍 l梳춑 b梳즣 m梳춗 c沼쬪 tr챙nh duy沼뇍 n챗n tr챙nh bi챗n t梳춑 kh척ng th沼� truy c梳춑 tr沼켧 ti梳퓈 v횪o n沼셢 dung 휃찾 sao ch챕p. B梳죒 c梳쬷 ph梳즜 d찼n l梳죍 n沼셢 dung v횪o c沼춁 s沼� n횪y.',
		pasteArea	: 'Khu v沼켧 d찼n'
	},

	pastefromword :
	{
		confirmCleanup	: 'V훱n b梳즢 b梳죒 mu沼몁 d찼n c처 k챔m 휃沼땙h d梳죒g c沼쬪 Word. B梳죒 c처 mu沼몁 lo梳죍 b沼� 휃沼땙h d梳죒g Word tr튼沼쌵 khi d찼n?',
		toolbar			: 'D찼n v沼쌻 휃沼땙h d梳죒g Word',
		title			: 'D찼n v沼쌻 휃沼땙h d梳죒g Word',
		error			: 'Kh척ng th沼� 휃沼� l횪m s梳죅h c찼c d沼� li沼뇎 d찼n do m沼셳 l沼뾦 n沼셢 b沼�'
	},

	pasteText :
	{
		button	: 'D찼n theo 휃沼땙h d梳죒g v훱n b梳즢 thu梳쬷',
		title	: 'D찼n theo 휃沼땙h d梳죒g v훱n b梳즢 thu梳쬷'
	},

	templates :
	{
		button			: 'M梳쳕 d沼켷g s梳탇',
		title			: 'N沼셢 dung M梳쳕 d沼켷g s梳탇',
		options : 'T첫y ch沼뛫 m梳쳕 d沼켷g s梳탇',
		insertOption	: 'Thay th梳� n沼셢 dung hi沼뇆 t梳죍',
		selectPromptMsg	: 'H찾y ch沼뛫 m梳쳕 d沼켷g s梳탇 휃沼� m沼� trong tr챙nh bi챗n t梳춑<br>(n沼셢 dung hi沼뇆 t梳죍 s梳� b沼� m梳쩿):',
		emptyListMsg	: '(Kh척ng c처 m梳쳕 d沼켷g s梳탇 n횪o 휃튼沼즓 휃沼땙h ngh칫a)'
	},

	showBlocks : 'Hi沼긪 th沼� c찼c kh沼멼',

	stylesCombo :
	{
		label		: 'Ki沼긳',
		panelTitle	: 'Phong c찼ch 휃沼땙h d梳죒g',
		panelTitle1	: 'Ki沼긳 kh沼멼',
		panelTitle2	: 'Ki沼긳 tr沼켧 ti梳퓈',
		panelTitle3	: 'Ki沼긳 휃沼멼 t튼沼즢g'
	},

	format :
	{
		label		: '휂沼땙h d梳죒g',
		panelTitle	: '휂沼땙h d梳죒g',

		tag_p		: 'B챙nh th튼沼쓓g (P)',
		tag_pre		: '휂찾 thi梳퓍 l梳춑',
		tag_address	: 'Address',
		tag_h1		: 'Heading 1',
		tag_h2		: 'Heading 2',
		tag_h3		: 'Heading 3',
		tag_h4		: 'Heading 4',
		tag_h5		: 'Heading 5',
		tag_h6		: 'Heading 6',
		tag_div		: 'B챙nh th튼沼쓓g (DIV)'
	},

	div :
	{
		title				: 'T梳죓 kh沼멼 c찼c th횪nh ph梳쬷',
		toolbar				: 'T梳죓 kh沼멼 c찼c th횪nh ph梳쬷',
		cssClassInputLabel	: 'C찼c l沼썂 CSS',
		styleSelectLabel	: 'Ki沼긳 (style)',
		IdInputLabel		: '휂沼땙h danh (id)',
		languageCodeInputLabel	: 'M찾 ng척n ng沼�',
		inlineStyleInputLabel	: 'Ki沼긳 n沼셢 d챵ng',
		advisoryTitleInputLabel	: 'Nhan 휃沼� h튼沼썀g d梳쳌',
		langDirLabel		: 'H튼沼썀g ng척n ng沼�',
		langDirLTRLabel		: 'Tr찼i sang ph梳즜 (LTR)',
		langDirRTLLabel		: 'Ph梳즜 qua tr찼i (RTL)',
		edit				: 'Ch沼뎝h s沼춁',
		remove				: 'X처a b沼�'
  	},

	iframe :
	{
		title		: 'Thu沼셛 t챠nh iframe',
		toolbar		: 'Iframe',
		noUrl		: 'Vui l챵ng nh梳춑 휃沼땇 ch沼� iframe',
		scrolling	: 'K챠ch ho梳죜 thanh cu沼셬',
		border		: 'Hi沼긪 th沼� vi沼걆 khung'
	},

	font :
	{
		label		: 'Ph척ng',
		voiceLabel	: 'Ph척ng',
		panelTitle	: 'Ph척ng'
	},

	fontSize :
	{
		label		: 'C沼� ch沼�',
		voiceLabel	: 'K챠ch c沼� ph척ng',
		panelTitle	: 'C沼� ch沼�'
	},

	colorButton :
	{
		textColorTitle	: 'M횪u ch沼�',
		bgColorTitle	: 'M횪u n沼걆',
		panelTitle		: 'M횪u s梳칌',
		auto			: 'T沼� 휃沼셬g',
		more			: 'M횪u kh찼c...'
	},

	colors :
	{
		'000' : '휂en',
		'800000' : 'Maroon',
		'8B4513' : 'Saddle Brown',
		'2F4F4F' : 'Dark Slate Gray',
		'008080' : 'Teal',
		'000080' : 'Navy',
		'4B0082' : 'Indigo',
		'696969' : 'Dark Gray',
		'B22222' : 'Fire Brick',
		'A52A2A' : 'N창u',
		'DAA520' : 'Golden Rod',
		'006400' : 'Dark Green',
		'40E0D0' : 'Turquoise',
		'0000CD' : 'Medium Blue',
		'800080' : 'Purple',
		'808080' : 'X찼m',
		'F00' : '휂沼�',
		'FF8C00' : 'Dark Orange',
		'FFD700' : 'V횪ng',
		'008000' : 'Xanh l찼 c창y',
		'0FF' : 'Cyan',
		'00F' : 'Xanh da tr沼쓎',
		'EE82EE' : 'T챠m',
		'A9A9A9' : 'X찼m t沼멼',
		'FFA07A' : 'Light Salmon',
		'FFA500' : 'M횪u cam',
		'FFFF00' : 'V횪ng',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Pale Turquoise',
		'ADD8E6' : 'Light Blue',
		'DDA0DD' : 'Plum',
		'D3D3D3' : 'Light Grey',
		'FFF0F5' : 'Lavender Blush',
		'FAEBD7' : 'Antique White',
		'FFFFE0' : 'Light Yellow',
		'F0FFF0' : 'Honeydew',
		'F0FFFF' : 'Azure',
		'F0F8FF' : 'Alice Blue',
		'E6E6FA' : 'Lavender',
		'FFF' : 'Tr梳칗g'
	},

	scayt :
	{
		title			: 'Ki沼긩 tra ch챠nh t梳� ngay khi g천 ch沼� (SCAYT)',
		opera_title		: 'Kh척ng h沼� tr沼� tr챗n tr챙nh duy沼뇍 Opera',
		enable			: 'B梳춗 SCAYT',
		disable			: 'T梳칣 SCAYT',
		about			: 'Th척ng tin v沼� SCAYT',
		toggle			: 'B梳춗 t梳칣 SCAYT',
		options			: 'T첫y ch沼뛫',
		langs			: 'Ng척n ng沼�',
		moreSuggestions	: '휂沼� xu梳쩿 th챗m',
		ignore			: 'B沼� qua',
		ignoreAll		: 'B沼� qua t梳쩿 c梳�',
		addWord			: 'Th챗m t沼�',
		emptyDic		: 'T챗n c沼쬪 t沼� 휃i沼긪 kh척ng 휃튼沼즓 휃沼� tr沼몁g.',
		noSuggestions	: 'Kh척ng 휃튼a ra g沼즜 첵 v沼� t沼�',
		optionsTab		: 'T첫y ch沼뛫',
		allCaps			: 'Kh척ng ph창n bi沼뇍 ch沼� HOA ch沼� th튼沼쓓g',
		ignoreDomainNames : 'B沼� qua t챗n mi沼걆',
		mixedCase		: 'Kh척ng ph창n bi沼뇍 lo梳죍 ch沼�',
		mixedWithDigits	: 'Kh척ng ph창n bi沼뇍 ch沼� v횪 s沼�',

		languagesTab	: 'Tab ng척n ng沼�',

		dictionariesTab	: 'T沼� 휃i沼긪',
		dic_field_name	: 'T챗n t沼� 휃i沼긪',
		dic_create		: 'T梳죓',
		dic_restore		: 'Ph沼쩭 h沼밿',
		dic_delete		: 'X처a',
		dic_rename		: 'Thay t챗n',
		dic_info		: 'Ban 휃梳쬾, t沼� 휃i沼긪 ng튼沼쓎 d첫ng 휃튼沼즓 l튼u tr沼� trong m沼셳 cookie. Tuy nhi챗n, k챠ch th튼沼쌵 cookie b沼� gi沼쌻 h梳죒. Khi ng튼沼쓎 s沼� d沼쩸g t沼� 휃i沼긪 ph찼t tri沼긪 휃梳퓆 휃i沼긩 kh척ng th沼� 휃튼沼즓 l튼u tr沼� trong cookie, t沼� 휃i沼긪 s梳� 휃튼沼즓 l튼u tr沼� tr챗n m찼y ch沼� c沼쬪 ch첬ng t척i. 휂沼� l튼u tr沼� t沼� 휃i沼긪 c찼 nh창n c沼쬪 b梳죒 tr챗n m찼y ch沼� c沼쬪 ch첬ng t척i, b梳죒 n챗n x찼c 휃沼땙h m沼셳 t챗n cho t沼� 휃i沼긪 c沼쬪 b梳죒. N梳퓎 b梳죒 휃찾 c처 m沼셳 cu沼몁 t沼� 휃i沼긪 휃튼沼즓 l튼u tr沼�, xin vui l챵ng g천 t챗n c沼쬪 n처 v횪 nh梳쩸 v횪o n첬t Kh척i ph沼쩭.',

		aboutTab		: 'Th척ng tin'
	},

	about :
	{
		title		: 'Th척ng tin v沼� CKEditor',
		dlgTitle	: 'Th척ng tin v沼� CKEditor',
		help	: 'Ki沼긩 tra $1 휃沼� 휃튼沼즓 gi첬p 휃沼�.',
		userGuide : 'H튼沼썀g d梳쳌 s沼� d沼쩸g CKEditor',
		moreInfo	: 'Vui l챵ng gh챕 th훱m trang web c沼쬪 ch첬ng t척i 휃沼� c처 th척ng tin v沼� gi梳쪅 ph챕p:',
		copy		: 'B梳즢 quy沼걆 &copy; $1. Gi沼� to횪n quy沼걆.'
	},

	maximize : 'Ph처ng to t沼멼 휃a',
	minimize : 'Thu nh沼�',

	fakeobjects :
	{
		anchor		: '휂i沼긩 neo',
		flash		: 'Flash',
		iframe		: 'IFrame',
		hiddenfield	: 'Tr튼沼쓓g 梳쯰',
		unknown		: '휂沼멼 t튼沼즢g kh척ng r천 r횪ng'
	},

	resize : 'K챕o r챗 휃沼� thay 휃沼뷼 k챠ch c沼�',

	colordialog :
	{
		title		: 'Ch沼뛫 m횪u',
		options	:	'T첫y ch沼뛫 m횪u',
		highlight	: 'M횪u ch沼뛫',
		selected	: 'M횪u 휃찾 ch沼뛫',
		clear		: 'X처a b沼�'
	},

	toolbarCollapse	: 'Thu g沼뛫 thanh c척ng c沼�',
	toolbarExpand	: 'M沼� r沼셬g thnah c척ng c沼�',

	toolbarGroups :
	{
		document : 'T횪i li沼뇎',
		clipboard : 'Clipboard/Undo',
		editing : 'Ch沼뎝h s沼춁',
		forms : 'B梳즢g bi沼긳',
		basicstyles : 'Ki沼긳 c퉤 b梳즢',
		paragraph : '휂o梳죒',
		links : 'Li챗n k梳퓍',
		insert : 'Ch챔n',
		styles : 'Ki沼긳',
		colors : 'M횪u s梳칌',
		tools : 'C척ng c沼�'
	},

	bidi :
	{
		ltr : 'V훱n b梳즢 h튼沼썀g t沼� tr찼i sang ph梳즜',
		rtl : 'V훱n b梳즢 h튼沼썀g t沼� ph梳즜 sang tr찼i'
	},

	docprops :
	{
		label : 'Thu沼셛 t챠nh T횪i li沼뇎',
		title : 'Thu沼셛 t챠nh T횪i li沼뇎',
		design : 'Thi梳퓍 k梳�',
		meta : 'Si챗u d沼� li沼뇎',
		chooseColor : 'Ch沼뛫 m횪u',
		other : '<kh찼c>',
		docTitle :	'Ti챗u 휃沼� Trang',
		charset : 	'B梳즢g m찾 k첵 t沼�',
		charsetOther : 'B梳즢g m찾 k첵 t沼� kh찼c',
		charsetASCII : 'ASCII',
		charsetCE : 'Trung 횂u',
		charsetCT : 'Ti梳퓆g Trung Qu沼멵 (Big5)',
		charsetCR : 'Ti梳퓆g Kirin',
		charsetGR : 'Ti梳퓆g Hy L梳죖',
		charsetJP : 'Ti梳퓆g Nh梳춗',
		charsetKR : 'Ti梳퓆g H횪n',
		charsetTR : 'Ti梳퓆g Th沼� Nh칫 K沼�',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'T창y 횂u',
		docType : 'Ki沼긳 휂沼� m沼쩭 T횪i li沼뇎',
		docTypeOther : 'Ki沼긳 휂沼� m沼쩭 T횪i li沼뇎 kh찼c',
		xhtmlDec : 'Bao g沼뱈 c梳� 휃沼땙h ngh칫a XHTML',
		bgColor : 'M횪u n沼걆',
		bgImage : 'URL c沼쬪 H챙nh 梳즢h n沼걆',
		bgFixed : 'Kh척ng cu沼셬 n沼걆',
		txtColor : 'M횪u ch沼�',
		margin : '휂튼沼쓓g bi챗n c沼쬪 Trang',
		marginTop : 'Tr챗n',
		marginLeft : 'Tr찼i',
		marginRight : 'Ph梳즜',
		marginBottom : 'D튼沼쌻',
		metaKeywords : 'C찼c t沼� kh처a ch沼� m沼쩭 t횪i li沼뇎 (ph창n c찼ch b沼웙 d梳쪀 ph梳쯻)',
		metaDescription : 'M척 t梳� t횪i li沼뇎',
		metaAuthor : 'T찼c gi梳�',
		metaCopyright : 'B梳즢 quy沼걆',
		previewHtml : '<p>휂창y l횪 m沼셳 s沼� <strong>v훱n b梳즢 m梳쳕</strong>. B梳죒 휃ang s沼� d沼쩸g <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
