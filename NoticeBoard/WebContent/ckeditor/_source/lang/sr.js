/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Serbian (Cyrillic) language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['sr'] =
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
	source			: 'K척畇',
	newPage			: '�앆압꽥� �곎귂�逵戟龜�녡�',
	save			: '鬼逵�눻꺪꽥겉�',
	preview			: '�샫론넓뿅둔� �곎귂�逵戟龜�녡�',
	cut				: '�샭곍둘녡�',
	copy			: '�싍압왈먈�逵��',
	paste			: '�쀐겆뿅둔왈�',
	print			: '珪�궿겆셸왈�',
	underline		: '�읩압닉꽹꺫눺둔싻�',
	bold			: '�읩압닉둔귐쇣겆싻�',
	italic			: '�싎꺫�鈞龜勻',
	selectAll		: '�왧론싻겉눺� �곍꽥�',
	removeFormat	: '叫克剋棘戟龜 �꾉앗�劇逵�궿먈�逵�싍�',
	strike			: '�읪�筠�녢��궿겆싻�',
	subscript		: '�샫싻닉둔붇�',
	superscript		: '鬼�궿둔왈둔�',
	horizontalrule	: '叫戟筠�곍� �끦앗�龜鈞棘戟�궿겆뿅싼� 剋龜戟龜�샭�',
	pagebreak		: 'Insert Page Break for Printing', // MISSING
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '叫克剋棘戟龜 剋龜戟克',
	undo			: '�읩압싻먈댮궿� 逵克�녡먈샭�',
	redo			: '�읩압싻압꽥� 逵克�녡먈샭�',

	// Common messages and labels.
	common :
	{
		browseServer	: '�읪�筠�귂�逵菌龜 �곍둘�勻筠�',
		url				: '叫�졤�',
		protocol		: '�읪�棘�궿압분압�',
		upload			: '�읩앗댭겉쇣�',
		uploadSubmit	: '�읩앗댭겉쇣� 戟逵 �곍둘�勻筠�',
		image			: '鬼剋龜克逵',
		flash			: '圭剋筠�� 筠剋筠劇筠戟��',
		form			: '圭棘�劇逵',
		checkbox		: '�읩앗쇣� 鈞逵 極棘�궿꽹�畇��',
		radio			: '�졤겆닉먁�-畇�꺪넓셸�',
		textField		: '龜筠克�곎귂꺪겆뿅싻� 極棘�쇣�',
		textarea		: '�쀐압싻� �궿둔붇곎궿�',
		hiddenField		: '鬼克�龜勻筠戟棘 極棘�쇣�',
		button			: '�붡꺪넓셸�',
		select			: '�샫론귈앗�戟棘 極棘�쇣�',
		imageButton		: '�붡꺪넓셸� �곍� �곍뿅먁분압�',
		notSet			: '<戟龜�샫� 極棘�곎궿겆꽹쇣둔싻�>',
		id				: '�샫�',
		name			: '�앆겆론먁�',
		langDir			: '鬼劇筠� �샫둔론먁분�',
		langDirLtr		: '鬼 剋筠勻逵 戟逵 畇筠�곍싻� (LTR)',
		langDirRtl		: '鬼 畇筠�곍싻� 戟逵 剋筠勻棘 (RTL)',
		langCode		: 'K척畇 �샫둔론먁분�',
		longDescr		: '�읪꺪� 棘極龜�� 叫�졤�',
		cssClass		: 'Stylesheet 克剋逵�곍�',
		advisoryTitle	: 'Advisory 戟逵�곍뿅압�',
		cssStyle		: '鬼�궿먁�',
		ok				: 'OK',
		cancel			: 'O�궿분겆뙨�',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'General', // MISSING
		advancedTab		: '�앆겆왐�筠畇戟龜 �궿겆넓압꽥�',
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
		width			: '珪龜�龜戟逵',
		height			: '�믌먈곍먁싻�',
		align			: '�졤겆꽥싻겉싍�',
		alignLeft		: '�쎩둔꽥�',
		alignRight		: '�붠둘곍싻�',
		alignCenter		: '鬼�筠畇龜戟逵',
		alignTop		: '�믍���',
		alignMiddle		: '鬼�筠畇龜戟逵',
		alignBottom		: '�붠압뿅�',
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
		toolbar		: '叫戟筠�곍� �곍왈둘녡먈샫겆뿅싻� 克逵�逵克�궿둘�',
		title		: '�왧닉겆귈둘�龜�궿� �곍왈둘녡먈샫겆뿅싻� 克逵�逵克�궿둘�',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '叫戟筠�곍�/龜鈞劇筠戟龜 剋龜戟克',
		other 		: '<other>', // MISSING
		menu		: '�읪�棘劇筠戟龜 剋龜戟克',
		title		: '�쎩먁싻�',
		info		: '�쎩먁싻� 龜戟�꾉�',
		target		: 'Me�괶',
		upload		: '�읩앗댭겉쇣�',
		advanced	: '�앆겆왐�筠畇戟龜 �궿겆넓압꽥�',
		type		: '�믍��곎궿� 剋龜戟克逵',
		toUrl		: 'URL', // MISSING
		toAnchor	: '鬼龜畇�棘 戟逵 棘勻棘�� �곎귂�逵戟龜�녡�',
		toEmail		: 'E剋筠克�귂�棘戟�곍분� 極棘�댮궿�',
		targetFrame		: '<棘克勻龜�>',
		targetPopup		: '<龜�곍분겉눻꺫쎩� 極�棘鈞棘�>',
		targetFrameName	: '�앆겆론먁� 棘畇�筠畇龜�댭싻압� �꾊�筠�샫셸�',
		targetPopupName	: '�앆겆론먁� 龜�곍분겉눻꺫쎩둔� 極�棘鈞棘�逵',
		popupFeatures	: '�쑷압넘꺫쎩싻앗곎궿� 龜�곍분겉눻꺫쎩둔� 極�棘鈞棘�逵',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '鬼�궿겉귂꺫곍싻� 剋龜戟龜�샫�',
		popupLocationBar: '�쎩압분겉녡먈샫�',
		popupToolbar	: 'Toolbar',
		popupMenuBar	: '�싍압싼궿둔붇곎궿싻� 劇筠戟龜',
		popupFullScreen	: '�읪�龜克逵鈞 極�筠克棘 �녡둔뿅압� 筠克�逵戟逵 (�쁄)',
		popupScrollBars	: '鬼克�棘剋 閨逵�',
		popupDependent	: '�쀐겆꽥먈곍싻� (Netscape)',
		popupLeft		: '�왧� 剋筠勻筠 龜勻龜�녡� 筠克�逵戟逵 (極龜克�곍둔뿅�)',
		popupTop		: '�왧� 勻��끦� 筠克�逵戟逵 (極龜克�곍둔뿅�)',
		id				: 'Id', // MISSING
		langDir			: '鬼劇筠� �샫둔론먁분�',
		langDirLTR		: '鬼 剋筠勻逵 戟逵 畇筠�곍싻� (LTR)',
		langDirRTL		: '鬼 畇筠�곍싻� 戟逵 剋筠勻棘 (RTL)',
		acccessKey		: '�읪�龜�곎귂꺪왈싻� �궿겉곎궿둘�',
		name			: '�앆겆론먁�',
		langCode			: '鬼劇筠� �샫둔론먁분�',
		tabIndex			: '龜逵閨 龜戟畇筠克��',
		advisoryTitle		: 'Advisory 戟逵�곍뿅압�',
		advisoryContentType	: 'Advisory 勻��곎궿� �곍겆닌�菌逵�샫�',
		cssClasses		: 'Stylesheet 克剋逵�곍�',
		charset			: 'Linked Resource Charset',
		styles			: '鬼�궿먁�',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '�왧닉겆귈둘�龜 �곍먁닌�棘',
		anchorName		: '�읩� 戟逵鈞龜勻�� �곍먁닌�逵',
		anchorId			: '�웣 �샫�-j�� 筠剋筠劇筠戟�궿�',
		emailAddress		: '�먒닌�筠�곍� 筠剋筠克�귂�棘戟�곍분� 極棘�댮궿�',
		emailSubject		: '�앆겉곍뿅압�',
		emailBody		: '鬼逵畇�菌逵�� 極棘��꺪분�',
		noAnchors		: '(�앆둔셸� 畇棘�곎귂꺪왈싻먈� �곍먁닌�逵)',
		noUrl			: '叫戟筠�곍먈궿� 叫�졤� 剋龜戟克逵',
		noEmail			: '�왨궿붇꺫녡겉샭궿� 逵畇�筠�곎� 筠剋筠克�귂�棘戟�곍분� 極棘�댮궿�'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '叫戟筠�곍�/龜鈞劇筠戟龜 �곍먁닌�棘',
		menu		: '�왨곍압귈먁싻� �곍먁닌�逵',
		title		: '�왨곍압귈먁싻� �곍먁닌�逵',
		name		: '�샫셸� �곍먁닌�逵',
		errorName	: '�쑷압뿅먁셸� �믌겉� 畇逵 �꺪싻둘곍둘궿� 龜劇筠 �곍먁닌�逵',
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
		title				: 'Find and Replace', // MISSING
		find				: '�읪�筠�귂�逵均逵',
		replace				: '�쀐겆셸둔싻�',
		findWhat			: '�읪�棘戟逵�믌�:',
		replaceWith			: '�쀐겆셸둔싻� �곍�:',
		notFoundMsg			: '龜�逵菌筠戟龜 �궿둔붇곎� 戟龜�샫� 極�棘戟逵�믌둔�.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '�졤겆론뿅먁붇꺫� 勻筠剋龜克逵 龜 劇逵剋逵 �곍뿅압꽥�',
		matchWord			: '叫極棘�筠畇龜 �녡둔뿅� �筠�눺�',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '�쀐겆셸둔싻� �곍꽥�',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '龜逵閨筠剋逵',
		title		: '�왨곍압귈먁싻� �궿겆귈둔뿅�',
		menu		: '�왨곍압귈먁싻� �궿겆귈둔뿅�',
		deleteTable	: 'Delete Table', // MISSING
		rows		: '�졤둔닉압꽥�',
		columns		: 'K棘剋棘戟逵',
		border		: '�믌둔뿅먈눺먁싻� 棘克勻龜�逵',
		widthPx		: '極龜克�곍둔뿅�',
		widthPc		: '極�棘�녡둔싻겉궿�',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '�뗊둔뿅먈샭곍분� 極�棘�곎궿앗�',
		cellPad		: '�졤겆론셸겆� �쎩둔뿅먈샫�',
		caption		: '�앆겉곍뿅압� �궿겆귈둔뿅�',
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
			menu			: 'Cell', // MISSING
			insertBefore	: 'Insert Cell Before', // MISSING
			insertAfter		: 'Insert Cell After', // MISSING
			deleteCell		: '�왧귐�龜�댭� �쎩둔뿅먈샫�',
			merge			: '鬼極棘�� �쎩둔뿅먈샫�',
			mergeRight		: 'Merge Right', // MISSING
			mergeDown		: 'Merge Down', // MISSING
			splitHorizontal	: 'Split Cell Horizontally', // MISSING
			splitVertical	: 'Split Cell Vertically', // MISSING
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
			menu			: 'Row', // MISSING
			insertBefore	: 'Insert Row Before', // MISSING
			insertAfter		: 'Insert Row After', // MISSING
			deleteRow		: '�왧귐�龜�댭� �筠畇棘勻筠'
		},

		column :
		{
			menu			: 'Column', // MISSING
			insertBefore	: 'Insert Column Before', // MISSING
			insertAfter		: 'Insert Column After', // MISSING
			deleteColumn	: '�왧귐�龜�댭� 克棘剋棘戟筠'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�왨곍압귈먁싻� 畇�꺪넓셸둘궿�',
		text		: '龜筠克�곎� (勻�筠畇戟棘�곎�)',
		type		: 'T龜極',
		typeBtn		: 'Button', // MISSING
		typeSbm		: 'Submit', // MISSING
		typeRst		: 'Reset' // MISSING
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�왨곍압귈먁싻� 極棘�쇣� 鈞逵 極棘�궿꽹�畇��',
		radioTitle	: '�왨곍압귈먁싻� �逵畇龜棘-畇�꺪넓셸둘궿�',
		value		: '�믍�筠畇戟棘�곎�',
		selected	: '�왧론싻겉눺둔싻�'
	},

	// Form Dialog.
	form :
	{
		title		: '�왨곍압귈먁싻� �꾉앗�劇筠',
		menu		: '�왨곍압귈먁싻� �꾉앗�劇筠',
		action		: 'A克�녡먈샫�',
		method		: 'M筠�궿압닉�',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: '�왨곍압귈먁싻� 龜鈞閨棘�戟棘均 極棘�쇣�',
		selectInfo	: '�샫싼꾉�',
		opAvail		: '�붠앗곎귂꺪왈싻� 棘極�녡먈샫�',
		value		: '�믍�筠畇戟棘�곎�',
		size		: '�믌둔뿅먈눺먁싻�',
		lines		: '剋龜戟龜�샫�',
		chkMulti	: '�붠압론꽥압뿅� 勻龜�댭둘곎귂��꺪붇� �곍둔뿅둔붇녡먈샭�',
		opText		: '龜筠克�곎�',
		opValue		: '�믍�筠畇戟棘�곎�',
		btnAdd		: '�붠압닉겉�',
		btnModify	: '�샫론셸둔싻�',
		btnUp		: '�볂앗�筠',
		btnDown		: '�붠압뿅�',
		btnSetValue : '�읩압닉둘곍� 克逵棘 棘鈞戟逵�눺둔싼� 勻�筠畇戟棘�곎�',
		btnDelete	: '�왧귐�龜�댭�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�왨곍압귈먁싻� 鈞棘戟筠 �궿둔붇곎궿�',
		cols		: '�뫱�棘�� 克棘剋棘戟逵',
		rows		: '�뫱�棘�� �筠畇棘勻逵'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�왨곍압귈먁싻� �궿둔붇곎귂꺪겆뿅싻압� 極棘�쇣�',
		name		: '�앆겆론먁�',
		value		: '�믍�筠畇戟棘�곎�',
		charWidth	: '珪龜�龜戟逵 (克逵�逵克�궿둘�逵)',
		maxChars	: '�쑷겆붇곍먁셸겆뿅싻� 克逵�逵克�궿둘�逵',
		type		: '龜龜極',
		typeText	: '龜筠克�곎�',
		typePass	: '�쎩압론먁싻분�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�왨곍압귈먁싻� �곍붇�龜勻筠戟棘均 極棘�쇣�',
		name	: '�앆겆론먁�',
		value	: '�믍�筠畇戟棘�곎�'
	},

	// Image Dialog.
	image :
	{
		title		: '�왨곍압귈먁싻� �곍뿅먁분�',
		titleButton	: '�왨곍압귈먁싻� 畇�꺪넓셸둘궿� �곍� �곍뿅먁분압�',
		menu		: '�왨곍압귈먁싻� �곍뿅먁분�',
		infoTab		: '�샫싼꾉� �곍뿅먁분�',
		btnUpload	: '�읩앗댭겉쇣� 戟逵 �곍둘�勻筠�',
		upload		: '�읩앗댭겉쇣�',
		alt			: '�먒뿌궿둘�戟逵�궿먁꽥싻� �궿둔붇곎�',
		lockRatio	: '�쀐겆붇쇥꺫눺겉� 棘畇戟棘��',
		resetSize	: '�졤둘곍둘귂꺫� 勻筠剋龜�눺먁싼�',
		border		: '�왧분꽥먈�',
		hSpace		: 'HSpace',
		vSpace		: 'VSpace',
		alertUrl	: '叫戟筠�곍먈궿� 叫�졤� �곍뿅먁분�',
		linkTab		: '�쎩먁싻�',
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
		properties		: '�왨곍압귈먁싻� 圭剋筠�댭�',
		propertiesTab	: 'Properties', // MISSING
		title			: '�왨곍압귈먁싻� �꾉뿅둘댭�',
		chkPlay			: '�먓꺫궿압셸겉귂곍분� �곎궿겉���',
		chkLoop			: '�읩압싻겆꽹쇣겉�',
		chkMenu			: '叫克�쇥꺫눺� �꾉뿅둘� 劇筠戟龜',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '鬼克逵剋龜�逵��',
		scaleAll		: '�읪�龜克逵菌龜 �곍꽥�',
		scaleNoBorder	: '�뫰둔� 龜勻龜�녡�',
		scaleFit		: '�읩압왐꺪싻� 極棘勻��댭먁싼�',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Abs 畇棘剋筠',
		alignAbsMiddle	: 'Abs �곎�筠畇龜戟逵',
		alignBaseline	: '�뫰겆론싻�',
		alignTextTop	: '�믍��� �궿둔붇곎궿�',
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
		bgcolor			: '�뫰앗샫� 極棘鈞逵畇龜戟筠',
		hSpace			: 'HSpace',
		vSpace			: 'VSpace',
		validateSrc		: '叫戟筠�곍먈궿� 叫�졤� 剋龜戟克逵',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�읪�棘勻筠�龜 �곍왈둔뿅압꽥겉싍�',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '�앆먈샫� �� �筠�눺싻먁붇�',
		changeTo		: '�샫론셸둔싻�',
		btnIgnore		: '�샫넓싻앗�龜�댭�',
		btnIgnoreAll	: '�샫넓싻앗�龜�댭� �곍꽥�',
		btnReplace		: '�쀐겆셸둔싻�',
		btnReplaceAll	: '�쀐겆셸둔싻� �곍꽥�',
		btnUndo			: '�믍�逵�궿� 逵克�녡먈샭�',
		noSuggestions	: '- �뫰둔� �곎꺪넓둘곎궿먈샫� -',
		progress		: '�읪�棘勻筠�逵 �곍왈둔뿅압꽥겉싍� �� �궿압붇�...',
		noMispell		: '�읪�棘勻筠�逵 �곍왈둔뿅압꽥겉싍� 鈞逵勻��댭둔싻�: 均�筠�댭분� 戟龜�곎� 極�棘戟逵�믌둔싻�',
		noChanges		: '�읪�棘勻筠�逵 �곍왈둔뿅압꽥겉싍� 鈞逵勻��댭둔싻�: �앆먈샫� 龜鈞劇筠�싍둔싻� 戟龜�샫둔닉싻� �筠��',
		oneChange		: '�읪�棘勻筠�逵 �곍왈둔뿅압꽥겉싍� 鈞逵勻��댭둔싻�: �샫론셸둘싍둔싻� �샫� �샫둔닉싻� �筠��',
		manyChanges		: '�읪�棘勻筠�逵 �곍왈둔뿅압꽥겉싍� 鈞逵勻��댭둔싻�:  %1 �筠��(龜) �샫� 龜鈞劇筠�싍둔싻�',
		ieSpellDownload	: '�읪�棘勻筠�逵 �곍왈둔뿅압꽥겉싍� 戟龜�샫� 龜戟�곎궿겆뿅먈�逵戟逵. �붠� 剋龜 菌筠剋龜�궿� 畇逵 �샫� �곍분먁싻둘궿� �곍� �샫싼궿둘�戟筠�궿�?'
	},

	smiley :
	{
		toolbar	: '鬼劇逵�샫뿅�',
		title	: '叫戟筠�곍� �곍셸겉샫뿅먈샫�',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '�앆겆귐�棘�샫먁꽹� 剋龜�곎귂�',
	bulletedlist	: '�앆둔싻겆귐�棘�샫먁꽥� 剋龜�곎궿�',
	indent			: '叫勻筠�쎩겉� 剋筠勻�� 劇逵�均龜戟��',
	outdent			: '鬼劇逵�싍� 剋筠勻�� 劇逵�均龜戟��',

	justify :
	{
		left	: '�쎩둔꽥� �逵勻戟逵�싍�',
		center	: '揆筠戟�귂�龜�逵戟 �궿둔붇곎�',
		right	: '�붠둘곍싻� �逵勻戟逵�싍�',
		block	: '�왧귈앗곎귂�逵戟棘 �逵勻戟逵�싍�'
	},

	blockquote : 'Block Quote', // MISSING

	clipboard :
	{
		title		: '�쀐겆뿅둔왈�',
		cutError	: '鬼龜均�꺫�戟棘�곍싻� 極棘畇筠�댭겆꽥겉싍� �믌겉댭둔� 極�筠�귂�逵菌龜勻逵�눺� 戟筠 畇棘鈞勻棘�쇣겆꽥겉샭� 棘極筠�逵�녡먈샫� 逵�꺫궿압셸겉귂곍분압� 龜�곍둘녡겉싍� �궿둔붇곎궿�. �쑷압뿅먁셸� �믌겉� 畇逵 克棘�龜�곎궿먈궿� 極�筠�눺먈녢� �곍� �궿겉곎궿겉귂꺫�筠 (Ctrl/Cmd+X).',
		copyError	: '鬼龜均�꺫�戟棘�곍싻� 極棘畇筠�댭겆꽥겉싍� �믌겉댭둔� 極�筠�귂�逵菌龜勻逵�눺� 戟筠 畇棘鈞勻棘�쇣겆꽥겉샭� 棘極筠�逵�녡먈샫� 逵�꺫궿압셸겉귂곍분압� 克棘極龜�逵�싍� �궿둔붇곎궿�. �쑷압뿅먁셸� �믌겉� 畇逵 克棘�龜�곎궿먈궿� 極�筠�눺먈녢� �곍� �궿겉곎궿겉귂꺫�筠 (Ctrl/Cmd+C).',
		pasteMsg	: '�쑷압뿅먁셸� �믌겉� 畇逵 鈞逵剋筠極龜�궿� �꺪싼꺫궿겉� 畇棘�싍� 極棘勻��댭먁싻� 克棘�龜�곎궿둘쎩� �궿겉곎궿겉귂꺫�戟�� 極�筠�눺먈녢� (<STRONG>Ctrl/Cmd+V</STRONG>) 龜 畇逵 極�龜�궿먈곍싻둘궿� <STRONG>OK</STRONG>.',
		securityMsg	: 'Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.', // MISSING
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: '�쀐겆뿅둔왈� 龜鈞 Worda',
		title			: '�쀐겆뿅둔왈� 龜鈞 Worda',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '�쀐겆뿅둔왈� 克逵棘 �눺먈곎� �궿둔붇곎�',
		title	: '�쀐겆뿅둔왈� 克逵棘 �눺먈곎� �궿둔붇곎�'
	},

	templates :
	{
		button			: '�왧귐�逵�곎녡�',
		title			: '�왧귐�逵�곎녡� 鈞逵 �곍겆닌�菌逵��',
		options : 'Template Options', // MISSING
		insertOption	: 'Replace actual contents', // MISSING
		selectPromptMsg	: '�쑷압뿅먁셸� �믌겉� 畇逵 棘畇逵閨筠�筠�궿� 棘閨�逵鈞逵�� 克棘�샫� �쎩� 閨龜�궿� 極�龜劇筠�싍둔� 戟逵 �곎귂�逵戟龜�녢� (�귂�筠戟�꺫궿싻� �곍겆닌�菌逵�� �쎩� 閨龜�궿� 棘閨�龜�곍겆�):',
		emptyListMsg	: '(�앆둔셸� 畇筠�꾉먁싻먈곍겆싻먈� 棘閨�逵鈞逵�녡�)'
	},

	showBlocks : 'Show Blocks', // MISSING

	stylesCombo :
	{
		label		: '鬼�궿먁�',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '圭棘�劇逵��',
		panelTitle	: '圭棘�劇逵��',

		tag_p		: 'Normal',
		tag_pre		: 'Formatirano',
		tag_address	: 'Adresa',
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
		label		: '圭棘戟��',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: '圭棘戟��'
	},

	fontSize :
	{
		label		: '�믌둔뿅먈눺먁싻� �꾉압싼궿�',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: '�믌둔뿅먈눺먁싻� �꾉압싼궿�'
	},

	colorButton :
	{
		textColorTitle	: '�뫰앗샫� �궿둔붇곎궿�',
		bgColorTitle	: '�뫰앗샫� 極棘鈞逵畇龜戟筠',
		panelTitle		: 'Colors', // MISSING
		auto			: '�먓꺫궿압셸겉귂곍분�',
		more			: '�믌먈댭� 閨棘�샫�...'
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
		noSuggestions	: '�뫰둔� �곎꺪넓둘곎궿먈샫�',
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
		label : '�왨곍압귈먁싻� 畇棘克�꺪셸둔싼궿�',
		title : '�왨곍압귈먁싻� 畇棘克�꺪셸둔싼궿�',
		design : 'Design', // MISSING
		meta : '�쑷둘궿겆왈압닉겉녡�',
		chooseColor : 'Choose', // MISSING
		other : '<other>',
		docTitle :	'�앆겉곍뿅압� �곎귂�逵戟龜�녡�',
		charset : 	'�싍압닉먈�逵�싍� �곍붇꺪왈� 克逵�逵克�궿둘�逵',
		charsetOther : '�왨곎궿겆뿅� 克棘畇龜�逵�싍� �곍붇꺪왈� 克逵�逵克�궿둘�逵',
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
		docType : '�쀐겆넓뿅겆꽹쇣� �궿먁왈� 畇棘克�꺪셸둔싼궿�',
		docTypeOther : '�왨곎궿겆뿅� 鈞逵均剋逵勻�쇣� �궿먁왈� 畇棘克�꺪셸둔싼궿�',
		xhtmlDec : '叫剋�쇥꺫눺� XHTML 畇筠克剋逵�逵�녡먈샫�',
		bgColor : '�뫰앗샫� 極棘鈞逵畇龜戟筠',
		bgImage : '叫�졤� 極棘鈞逵畇龜戟�곍분� �곍뿅먁분�',
		bgFixed : '圭龜克�곍먈�逵戟逵 極棘鈞逵畇龜戟逵',
		txtColor : '�뫰앗샫� �궿둔붇곎궿�',
		margin : '�쑷겉�均龜戟筠 �곎귂�逵戟龜�녡�',
		marginTop : '�볂앗��싍�',
		marginLeft : '�쎩둔꽥�',
		marginRight : '�붠둘곍싻�',
		marginBottom : '�붠앗싍�',
		metaKeywords : '�싎쇥꺫눺싻� �筠�눺� 鈞逵 龜戟畇筠克�곍먈�逵�싍� 畇棘克�꺪셸둔싼궿� (�逵鈞畇勻棘�샫둔싻� 鈞逵�筠鈞棘劇)',
		metaDescription : '�왧왈먈� 畇棘克�꺪셸둔싼궿�',
		metaAuthor : '�먓꺫궿앗�',
		metaCopyright : '�먓꺫궿앗��곍분� 極�逵勻逵',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
