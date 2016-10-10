/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Bengali/Bangla language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['bn'] =
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
	source			: '逝멘쭓逝겯쭕逝�',
	newPage			: '逝ⓣ┐鋤곟┬ 逝む쭎逝�',
	save			: '逝멘쫩逝겯쫾鋤띭┠逝� 逝뺖┛',
	preview			: '逝む쭕逝겯┸逝�逝욈쫱',
	cut				: '逝뺖┥逝�',
	copy			: '逝뺖┴逝�',
	paste			: '逝む쭎逝멘쭕逝�',
	print			: '逝む쭕逝겯┸逝ⓣ쭕逝�',
	underline		: '逝녱┬鋤띭─逝약┛逝꿋┥逝뉋┬',
	bold			: '逝о쭓逝꿋쭕逝�',
	italic			: '逝뉋쬉逝약┣逝욈쫾',
	selectAll		: '逝멘━ 逝멘┸逝꿋쭎逝뺖쭕逝� 逝뺖┛',
	removeFormat	: '逝ム┛逝�鋤뉋쬉 逝멘┛逝약쫼',
	strike			: '逝멘쭕逝잀쭕逝겯┥逝뉋쫾 逝�鋤띭┛鋤�',
	subscript		: '逝끶├鋤뗠┣鋤뉋쫿',
	superscript		: '逝끶┃逝욈┣鋤뉋쫿',
	horizontalrule	: '逝겯쭎逝뽤┥ 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
	pagebreak		: '逝む쭎逝� 逝о쭕逝겯쭎逝�',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '逝꿋┸逝귖쫾 逝멘┛逝약쫼',
	undo			: '逝녱┬逝□쭅',
	redo			: '逝겯┸-逝□쭅',

	// Common messages and labels.
	common :
	{
		browseServer	: '逝о쭕逝겯┥逝됢쬅 逝멘┥逝겯쭕逝�逝약┛',
		url				: 'URL',
		protocol		: '逝む쭕逝겯쭓逝잀쭓逝뺖┣',
		upload			: '逝녱┴逝꿋쭓逝�',
		uploadSubmit	: '逝뉋┨逝약쫾鋤� 逝멘┥逝겯쭕逝�逝약┛鋤� 逝む쭕逝겯쭎逝겯┬ 逝뺖┛',
		image			: '逝쎹━逝욈┛ 逝꿋쭎逝о쭎逝� 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
		flash			: '逝ム쭕逝꿋┥逝� 逝꿋쭎逝о쭎逝� 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
		form			: '逝ム┛鋤띭┏',
		checkbox		: '逝싟쭎逝� 逝о┥逝뺖쭕逝�',
		radio			: '逝겯쭎逝□┸逝� 逝о┥逝잀┬',
		textField		: '逝잀쭎逝뺖쭕逝멘쬉 逝ム�逝꿋쭕逝�',
		textarea		: '逝잀쭎逝뺖쭕逝멘쬉 逝뤲┛逝욈쭫逝�',
		hiddenField		: '逝쀠쭅逝む쭕逝� 逝ム�逝꿋쭕逝�',
		button			: '逝о┥逝잀┬',
		select			: '逝о┥逝쎹┥逝� 逝ム�逝꿋쭕逝�',
		imageButton		: '逝쎹━逝욈┛ 逝о┥逝잀┬',
		notSet			: '<逝멘쭎逝� 逝ⓣ쭎逝�>',
		id				: '逝녱쫯逝□┸',
		name			: '逝ⓣ┥逝�',
		langDir			: '逝�逝약┠逝� 逝꿋쭎逝뽤┥逝� 逝╆┸逝�',
		langDirLtr		: '逝о┥逝� 逝�鋤뉋쫾鋤� 逝□┥逝� (LTR)',
		langDirRtl		: '逝□┥逝� 逝�鋤뉋쫾鋤� 逝о┥逝� (RTL)',
		langCode		: '逝�逝약┠逝� 逝뺖쭓逝�',
		longDescr		: 'URL 逝뤲┛ 逝꿋┏鋤띭━逝� 逝о┛鋤띭┌逝ⓣ┥',
		cssClass		: '逝멘쭕逝잀┥逝뉋┣-逝뜩�逝� 逝뺖쭕逝꿋┥逝�',
		advisoryTitle	: '逝む┛逝약┏逝겯쭕逝� 逝뜩�逝겯쭕逝룅쫾',
		cssStyle		: '逝멘쭕逝잀┥逝뉋┣',
		ok				: '逝볙쫾鋤�',
		cancel			: '逝о┥逝ㅰ┸逝�',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'General', // MISSING
		advancedTab		: '逝뤲─逝�逝약┬鋤띭┯逝�',
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
		width			: '逝む쭕逝겯┯鋤띭┘',
		height			: '逝╆쭏逝겯쭕逝섁쭕逝�',
		align			: '逝뤲┣逝약쫯逝�',
		alignLeft		: '逝о┥逝�鋤�',
		alignRight		: '逝□┥逝ⓣ쭎',
		alignCenter		: '逝�逝약쬆逝뽤┥逝ⓣ쭎',
		alignTop		: '逝됢┴逝�',
		alignMiddle		: '逝�逝㏅쭕逝�',
		alignBottom		: '逝ⓣ�逝싟쭎',
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
		toolbar		: '逝о┸逝뜩쭎逝� 逝끶쫾鋤띭┠逝� 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
		title		: '逝о┸逝뜩쭎逝� 逝뺖쭕逝�逝약┛鋤뉋쫾鋤띭쬉逝약┛ 逝о┥逝쎹┥逝� 逝뺖┛',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '逝꿋┸逝귖쫾 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
		other 		: '<other>', // MISSING
		menu		: '逝꿋┸逝귖쫾 逝멘┏鋤띭┴逝약└逝�',
		title		: '逝꿋┸逝귖쫾',
		info		: '逝꿋┸逝귖쫾 逝ㅰ┘鋤띭┓',
		target		: '逝잀┥逝겯쭕逝쀠쭎逝�',
		upload		: '逝녱┴逝꿋쭓逝�',
		advanced	: '逝뤲─逝�逝약┬鋤띭┯逝�',
		type		: '逝꿋┸逝귖쫾 逝む쭕逝겯쫾逝약┛',
		toUrl		: 'URL', // MISSING
		toAnchor	: '逝뤲쫯 逝む쭎逝쒉쭎 逝ⓣ쭓逝쇸┛ 逝뺖┛',
		toEmail		: '逝뉋┏鋤뉋쫯逝�',
		targetFrame		: '<逝ム쭕逝겯쭎逝�>',
		targetPopup		: '<逝む┴逝녱┴ 逝됢쫯逝ⓣ쭕逝□쭓>',
		targetFrameName	: '逝잀┥逝겯쭕逝쀠쭎逝� 逝ム쭕逝겯쭎逝�鋤뉋┛ 逝ⓣ┥逝�',
		targetPopupName	: '逝む┴逝녱┴ 逝됢쫯逝ⓣ쭕逝□쭓逝� 逝ⓣ┥逝�',
		popupFeatures	: '逝む┴逝녱┴ 逝됢쫯逝ⓣ쭕逝□쭓 逝ム�逝싟┥逝� 逝멘┏鋤귖┨',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '逝멘쭕逝잀쭕逝�逝약쬉逝약┯ 逝о┥逝�',
		popupLocationBar: '逝꿋쭓逝뺖쭎逝뜩┬ 逝о┥逝�',
		popupToolbar	: '逝잀쭅逝� 逝о┥逝�',
		popupMenuBar	: '逝�鋤뉋┬鋤띭┓鋤� 逝о┥逝�',
		popupFullScreen	: '逝む쭆逝겯쭕逝� 逝む┛鋤띭└逝� 逝쒉쭅鋤쒉쭎 (IE)',
		popupScrollBars	: '逝멘쭕逝뺖쭕逝겯┣ 逝о┥逝�',
		popupDependent	: '逝□┸逝む쭎逝ⓣ쭕逝□쭎逝ⓣ쭕逝� (Netscape)',
		popupLeft		: '逝о┥逝�鋤뉋┛ 逝む쬅逝욈╋逝�',
		popupTop		: '逝□┥逝ⓣ쭎逝� 逝む쬅逝욈╋逝�',
		id				: 'Id', // MISSING
		langDir			: '逝�逝약┠逝� 逝꿋쭎逝뽤┥逝� 逝╆┸逝�',
		langDirLTR		: '逝о┥逝� 逝�鋤뉋쫾鋤� 逝□┥逝� (LTR)',
		langDirRTL		: '逝□┥逝� 逝�鋤뉋쫾鋤� 逝о┥逝� (RTL)',
		acccessKey		: '逝뤲쫾鋤띭┯鋤뉋┯ 逝뺖�',
		name			: '逝ⓣ┥逝�',
		langCode			: '逝�逝약┠逝� 逝꿋쭎逝뽤┥逝� 逝╆┸逝�',
		tabIndex			: '逝잀쭕逝�逝약━ 逝뉋┬鋤띭─鋤뉋쫾鋤띭┯',
		advisoryTitle		: '逝む┛逝약┏逝겯쭕逝� 逝뜩�逝겯쭕逝룅쫾',
		advisoryContentType	: '逝む┛逝약┏逝겯쭕逝� 逝뺖┬鋤띭쬉鋤뉋┬鋤띭쬉鋤뉋┛ 逝む쭕逝겯쫾逝약┛',
		cssClasses		: '逝멘쭕逝잀┥逝뉋┣-逝뜩�逝� 逝뺖쭕逝꿋┥逝�',
		charset			: '逝꿋┸逝귖쫾 逝겯┸逝멘쭓逝겯쭕逝� 逝뺖쭕逝�逝약┛鋤뉋쫾鋤띭쬉逝� 逝멘쭎逝�',
		styles			: '逝멘쭕逝잀┥逝뉋┣',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '逝ⓣ쭓逝쇸┛ 逝о┥逝쎹┥逝�',
		anchorName		: '逝ⓣ쭓逝쇸┛鋤뉋┛ 逝ⓣ┥逝� 逝╆┸鋤잀쭎',
		anchorId			: '逝ⓣ쭓逝쇸┛鋤뉋┛ 逝녱쫯逝□┸ 逝╆┸鋤잀쭎',
		emailAddress		: '逝뉋┏鋤뉋쫯逝� 逝졷┸逝뺖┥逝ⓣ┥',
		emailSubject		: '逝�鋤뉋┯鋤뉋쬅鋤뉋┛ 逝о┸逝룅쭫',
		emailBody		: '逝�鋤뉋┯鋤뉋쬅鋤뉋┛ 逝╆쭎逝�',
		noAnchors		: '(No anchors available in the document)', // MISSING
		noUrl			: '逝끶┬鋤곟쬀鋤띭┛逝� 逝뺖┛鋤� URL 逝꿋┸逝귖쫾 逝잀┥逝뉋┴ 逝뺖┛鋤곟┬',
		noEmail			: '逝끶┬鋤곟쬀鋤띭┛逝� 逝뺖┛鋤� 逝뉋┏鋤뉋쫯逝� 逝뤲─鋤띭┛鋤뉋┯ 逝잀┥逝뉋┴ 逝뺖┛鋤곟┬'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '逝ⓣ쭓逝쇸쭕逝쀠┛',
		menu		: '逝ⓣ쭓逝쇸┛ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		title		: '逝ⓣ쭓逝쇸┛ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		name		: '逝ⓣ쭓逝쇸┛鋤뉋┛ 逝ⓣ┥逝�',
		errorName	: '逝ⓣ쭓逝쇸┛鋤뉋┛ 逝ⓣ┥逝� 逝잀┥逝뉋┴ 逝뺖┛鋤곟┬',
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
		find				: '逝뽤쭓逝쒉쭓',
		replace				: '逝겯┸逝む쭕逝꿋쭎逝�',
		findWhat			: '逝�逝� 逝뽤쭅逝곟쬅逝ㅰ쭎 逝밝━鋤�:',
		replaceWith			: '逝�逝약┛ 逝멘┥逝�鋤� 逝о└逝꿋┥逝ㅰ쭎 逝밝━鋤�:',
		notFoundMsg			: '逝녱┴逝ⓣ┥逝� 逝됢┣鋤띭┣鋤뉋쫿逝욈┐ 逝잀쭎逝뺖┯鋤띭쬉 逝む┥逝볙쭫逝� 逝�逝약쭫逝ⓣ┸',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '逝뺖쭎逝� 逝�逝욈┣逝약쫼',
		matchWord			: '逝む쭅逝겯┥ 逝뜩━鋤띭└ 逝�鋤뉋┣逝약쫼',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '逝멘━ 逝о└逝꿋쭎 逝╆┥逝�',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '逝잀쭎逝о┸逝꿋쭎逝� 逝꿋쭎逝о쭎逝� 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
		title		: '逝잀쭎逝о┸逝� 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		menu		: '逝잀쭎逝о┸逝� 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		deleteTable	: '逝잀쭎逝о┸逝� 逝□┸逝꿋�逝� 逝뺖┛',
		rows		: '逝겯쭓',
		columns		: '逝뺖┣逝약┏',
		border		: '逝о┛鋤띭─逝약┛ 逝멘┥逝뉋쬅',
		widthPx		: '逝む┸逝뺖쭕逝멘쭎逝�',
		widthPc		: '逝뜩┐逝뺖┛逝�',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '逝멘쭎逝� 逝멘쭕逝む쭎逝�',
		cellPad		: '逝멘쭎逝� 逝む쭕逝�逝약─逝욈쫩',
		caption		: '逝뜩�逝겯쭕逝룅쫾',
		summary		: '逝멘┥逝겯┥逝귖╋',
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
			menu			: '逝멘쭎逝�',
			insertBefore	: 'Insert Cell Before', // MISSING
			insertAfter		: 'Insert Cell After', // MISSING
			deleteCell		: '逝멘쭎逝� 逝�鋤곟쬄鋤� 逝╆┥逝�',
			merge			: '逝멘쭎逝� 逝쒉쭓鋤쒉┥ 逝╆┥逝�',
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
			menu			: '逝겯쭓',
			insertBefore	: 'Insert Row Before', // MISSING
			insertAfter		: 'Insert Row After', // MISSING
			deleteRow		: '逝겯쭓 逝�鋤곟쬄鋤� 逝╆┥逝�'
		},

		column :
		{
			menu			: '逝뺖┣逝약┏',
			insertBefore	: 'Insert Column Before', // MISSING
			insertAfter		: 'Insert Column After', // MISSING
			deleteColumn	: '逝뺖┣逝약┏ 逝�鋤곟쬄鋤� 逝╆┥逝�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '逝о┥逝잀┬ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		text		: '逝잀쭎逝뺖쭕逝멘쬉 (逝�鋤띭┓逝약┣鋤�)',
		type		: '逝む쭕逝겯쫾逝약┛',
		typeBtn		: 'Button', // MISSING
		typeSbm		: 'Submit', // MISSING
		typeRst		: 'Reset' // MISSING
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '逝싟쭎逝� 逝о쫾鋤띭┯ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		radioTitle	: '逝겯쭎逝□┸逝� 逝о┥逝잀┬ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		value		: '逝�鋤띭┓逝약┣鋤�',
		selected	: '逝멘┸逝꿋쭎逝뺖쭕逝잀쭎逝�'
	},

	// Form Dialog.
	form :
	{
		title		: '逝ム┛鋤띭┏ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		menu		: '逝ム┛鋤띭┏ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		action		: '逝뤲쫾逝뜩쭕逝�逝�',
		method		: '逝む└鋤띭├逝ㅰ┸',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: '逝о┥逝쎹┥逝� 逝ム�逝꿋쭕逝� 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		selectInfo	: '逝ㅰ┘鋤띭┓',
		opAvail		: '逝끶┬鋤띭┓逝약┬鋤띭┓ 逝о┸逝뺖┣鋤띭┴',
		value		: '逝�鋤띭┓逝약┣鋤�',
		size		: '逝멘┥逝뉋쬅',
		lines		: '逝꿋┥逝뉋┬ 逝멘┏鋤귖┨',
		chkMulti	: '逝뤲쫾逝약├逝욈쫾 逝멘┸逝꿋쭎逝뺖╋逝� 逝뤲┣逝약쫱 逝뺖┛',
		opText		: '逝잀쭎逝뺖쭕逝멘쬉',
		opValue		: '逝�鋤띭┓逝약┣鋤�',
		btnAdd		: '逝�鋤곟쫾鋤띭┐',
		btnModify	: '逝о└逝꿋쭎 逝╆┥逝�',
		btnUp		: '逝됢┴逝�',
		btnDown		: '逝ⓣ�逝싟쭎',
		btnSetValue : '逝о┥逝쎹┥逝� 逝뺖┛逝� 逝�鋤띭┓逝약┣鋤� 逝밝┸逝멘쭎逝о쭎 逝멘쭎逝� 逝뺖┛',
		btnDelete	: '逝□┸逝꿋�逝�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '逝잀쭎逝뺖쭕逝멘쬉 逝뤲┛逝욈쭫逝� 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		cols		: '逝뺖┣逝약┏',
		rows		: '逝겯쭓'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '逝잀쭎逝뺖쭕逝멘쬉 逝ム�逝꿋쭕逝� 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		name		: '逝ⓣ┥逝�',
		value		: '逝�鋤띭┓逝약┣鋤�',
		charWidth	: '逝뺖쭕逝�逝약┛鋤뉋쫾鋤띭쬉逝약┛ 逝む쭕逝겯╋逝멘쭕逝ㅰ┐逝�',
		maxChars	: '逝멘┛鋤띭━逝약├逝욈쫾 逝뺖쭕逝�逝약┛鋤뉋쫾鋤띭쬉逝약┛',
		type		: '逝잀┥逝뉋┴',
		typeText	: '逝잀쭎逝뺖쭕逝멘쬉',
		typePass	: '逝む┥逝멘쫼鋤잀┥逝겯쭕逝�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '逝쀠쭅逝む쭕逝� 逝ム�逝꿋쭕逝� 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		name	: '逝ⓣ┥逝�',
		value	: '逝�鋤띭┓逝약┣鋤�'
	},

	// Image Dialog.
	image :
	{
		title		: '逝쎹━逝욈┛ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		titleButton	: '逝쎹━逝� 逝о┥逝잀┬ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		menu		: '逝쎹━逝욈┛ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		infoTab		: '逝쎹━逝욈┛ 逝ㅰ┘鋤띭┓',
		btnUpload	: '逝뉋┨逝약쫾鋤� 逝멘┥逝겯쭕逝�逝약┛鋤� 逝む쭕逝겯쭎逝겯┬ 逝뺖┛',
		upload		: '逝녱┴逝꿋쭓逝�',
		alt			: '逝о┸逝뺖┣鋤띭┴ 逝잀쭎逝뺖쭕逝멘쬉',
		lockRatio	: '逝끶┬鋤곟┴逝약┐ 逝꿋쫾 逝뺖┛',
		resetSize	: '逝멘┥逝뉋쬅 逝む쭆逝겯쭕逝о┥逝о┯鋤띭┘逝약쭫 逝ム┸逝겯┸鋤잀쭎 逝╆┥逝�',
		border		: '逝о┛鋤띭─逝약┛',
		hSpace		: '逝밝┛逝약쫯逝쒉┬鋤띭쬉逝약┣ 逝멘쭕逝む쭎逝�',
		vSpace		: '逝�逝약┛鋤띭쬉逝욈쫾鋤뉋┣ 逝멘쭕逝む쭎逝�',
		alertUrl	: '逝끶┬鋤곟쬀鋤띭┛逝밝쫾 逝뺖┛鋤� 逝쎹━逝욈┛ URL 逝잀┥逝뉋┴ 逝뺖┛鋤곟┬',
		linkTab		: '逝꿋┸逝귖쫾',
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
		properties		: '逝ム쭕逝꿋┥逝� 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		propertiesTab	: 'Properties', // MISSING
		title			: '逝ム쭕逝꿋쭕逝�逝약╋ 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		chkPlay			: '逝끶쬉鋤� 逝む쭕逝꿋쭎',
		chkLoop			: '逝꿋쭆逝�',
		chkMenu			: '逝ム쭕逝꿋쭕逝�逝약╋ 逝�鋤뉋┬鋤� 逝뤲┬逝약━逝� 逝뺖┛',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '逝멘쭕逝뺖쭎逝�',
		scaleAll		: '逝멘━ 逝╆쭎逝뽤┥逝�',
		scaleNoBorder	: '逝뺖쭓逝ⓣ쭓 逝о┛鋤띭─逝약┛ 逝ⓣ쭎逝�',
		scaleFit		: '逝ⓣ┸逝뽤쭅逝곟┐ 逝ム┸逝�',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Abs 逝ⓣ�逝싟쭎',
		alignAbsMiddle	: 'Abs 逝됢┴逝�',
		alignBaseline	: '逝�鋤귖┣ 逝겯쭎逝뽤┥',
		alignTextTop	: '逝잀쭎逝뺖쭕逝멘쬉 逝됢┴逝�',
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
		bgcolor			: '逝о쭎逝뺖쬀鋤띭┛逝약쫱逝ⓣ쭕逝� 逝겯쫩',
		hSpace			: '逝밝┛逝약쫯逝쒉┬鋤띭쬉逝약┣ 逝멘쭕逝む쭎逝�',
		vSpace			: '逝�逝약┛鋤띭쬉逝욈쫾鋤뉋┣ 逝멘쭕逝む쭎逝�',
		validateSrc		: '逝끶┬鋤곟쬀鋤띭┛逝� 逝뺖┛鋤� URL 逝꿋┸逝귖쫾 逝잀┥逝뉋┴ 逝뺖┛鋤곟┬',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '逝о┥逝ⓣ┥逝� 逝싟쭎逝�',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '逝뜩━鋤띭└逝뺖쭓逝룅쭎 逝ⓣ쭎逝�',
		changeTo		: '逝뤲┐鋤� 逝о└逝꿋┥逝�',
		btnIgnore		: '逝뉋쬀逝ⓣ쭓逝� 逝뺖┛',
		btnIgnoreAll	: '逝멘━ 逝뉋쬀逝ⓣ쭓逝� 逝뺖┛',
		btnReplace		: '逝о└逝꿋쭎 逝╆┥逝�',
		btnReplaceAll	: '逝멘━ 逝о└逝꿋쭎 逝╆┥逝�',
		btnUndo			: '逝녱┬鋤띭─鋤�',
		noSuggestions	: '- 逝뺖쭓逝� 逝멘┥逝쒉쭎逝뜩┬ 逝ⓣ쭎逝� -',
		progress		: '逝о┥逝ⓣ┥逝� 逝む┛鋤�逝뺖쭕逝룅┥ 逝싟┣逝쎹쭎...',
		noMispell		: '逝о┥逝ⓣ┥逝� 逝む┛鋤�逝뺖쭕逝룅┥ 逝뜩쭎逝�: 逝뺖쭓逝� 逝�鋤곟┣ 逝о┥逝ⓣ┥逝� 逝む┥逝볙쭫逝� 逝�逝약쭫逝ⓣ┸',
		noChanges		: '逝о┥逝ⓣ┥逝� 逝む┛鋤�逝뺖쭕逝룅┥ 逝뜩쭎逝�: 逝뺖쭓逝� 逝뜩━鋤띭└ 逝む┛逝욈━逝겯쭕逝ㅰ┬ 逝뺖┛逝� 逝밝쭫逝ⓣ┸',
		oneChange		: '逝о┥逝ⓣ┥逝� 逝む┛鋤�逝뺖쭕逝룅┥ 逝뜩쭎逝�: 逝뤲쫾逝잀┸ 逝�逝약┐鋤띭┛ 逝뜩━鋤띭└ 逝む┛逝욈━逝겯쭕逝ㅰ┬ 逝뺖┛逝� 逝밝쭫鋤뉋쬄鋤�',
		manyChanges		: '逝о┥逝ⓣ┥逝� 逝む┛鋤�逝뺖쭕逝룅┥ 逝뜩쭎逝�: %1 逝쀠쭅逝꿋쭓 逝뜩━鋤띭└ 逝о└逝꿋쭎 逝쀠쭕逝�逝약쬄鋤�',
		ieSpellDownload	: '逝о┥逝ⓣ┥逝� 逝む┛鋤�逝뺖쭕逝룅쫾 逝뉋┬逝멘쭕逝잀┣ 逝뺖┛逝� 逝ⓣ쭎逝뉋ⅳ 逝녱┴逝ⓣ┸ 逝뺖┸ 逝뤲쫿逝ⓣ쫯 逝뤲쬉逝� 逝□┥逝됢┬逝꿋쭓逝� 逝뺖┛逝ㅰ쭎 逝싟┥逝�?'
	},

	smiley :
	{
		toolbar	: '逝멘쭕逝�逝약쫯逝꿋�',
		title	: '逝멘쭕逝�逝약쫯逝꿋� 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '逝멘┥逝귖쫿鋤띭┓逝욈쫾 逝꿋┸逝멘쭕逝잀쭎逝� 逝꿋쭎逝о쭎逝�',
	bulletedlist	: '逝о쭅逝꿋쭎逝� 逝꿋┸逝멘쭕逝� 逝꿋쭎逝о쭎逝�',
	indent			: '逝뉋┬逝□쭎逝ⓣ쭕逝� 逝о┥鋤쒉┥逝�',
	outdent			: '逝뉋┬逝□쭎逝ⓣ쭕逝� 逝뺖┏逝약쫼',

	justify :
	{
		left	: '逝о┥ 逝╆┸逝뺖쭎 逝섁쭎逝곟┠逝�',
		center	: '逝�逝약쬆 逝о┛逝약━逝� 逝섁쭎逝룅┥',
		right	: '逝□┥逝� 逝╆┸逝뺖쭎 逝섁쭎逝곟┠逝�',
		block	: '逝о쭕逝꿋쫾 逝쒉┥逝멘쭕逝잀┸逝ム┥逝�'
	},

	blockquote : 'Block Quote', // MISSING

	clipboard :
	{
		title		: '逝む쭎逝멘쭕逝�',
		cutError	: '逝녱┴逝ⓣ┥逝� 逝о쭕逝겯┥逝됢쬅逝약┛鋤뉋┛ 逝멘쭅逝겯쫾鋤띭┠逝� 逝멘쭎逝잀┸逝귖┯ 逝뤲─逝욈쬉逝겯쫾鋤� 逝끶쬉鋤뗠┏鋤뉋쬉逝욈쫾 逝뺖┥逝� 逝뺖┛逝약┛ 逝끶┬鋤곟┏逝ㅰ┸ 逝╆쭎鋤잀┬逝욈ⅳ 逝╆쭫逝� 逝뺖┛鋤� 逝뤲쫯 逝뺖┥逝쒉쭎逝� 逝쒉┬鋤띭┓ 逝뺖┸逝о쭓逝겯쭕逝� 逝о쭕逝�逝о┨逝약┛ 逝뺖┛鋤곟┬ (Ctrl/Cmd+X)誓�',
		copyError	: '逝녱┴逝ⓣ┥逝� 逝о쭕逝겯┥逝됢쬅逝약┛鋤뉋┛ 逝멘쭅逝겯쫾鋤띭┠逝� 逝멘쭎逝잀┸逝귖┯ 逝뤲─逝욈쬉逝겯쫾鋤� 逝끶쬉鋤뗠┏鋤뉋쬉逝욈쫾 逝뺖┴逝� 逝뺖┛逝약┛ 逝끶┬鋤곟┏逝ㅰ┸ 逝╆쭎鋤잀┬逝욈ⅳ 逝╆쭫逝� 逝뺖┛鋤� 逝뤲쫯 逝뺖┥逝쒉쭎逝� 逝쒉┬鋤띭┓ 逝뺖┸逝о쭓逝겯쭕逝� 逝о쭕逝�逝о┨逝약┛ 逝뺖┛鋤곟┬ (Ctrl/Cmd+C)誓�',
		pasteMsg	: '逝끶┬鋤곟쬀鋤띭┛逝� 逝뺖┛鋤� 逝ⓣ�逝싟쭎逝� 逝о┥逝뺖쭕逝멘쭎 逝뺖┸逝о쭓逝겯쭕逝� 逝о쭕逝�逝о┨逝약┛ 逝뺖┛鋤� (<STRONG>Ctrl/Cmd+V</STRONG>) 逝む쭎逝멘쭕逝� 逝뺖┛鋤곟┬ 逝뤲━逝� <STRONG>OK</STRONG> 逝싟┥逝� 逝╆┸逝�',
		securityMsg	: 'Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.', // MISSING
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: '逝む쭎逝멘쭕逝� (逝뜩━鋤띭└)',
		title			: '逝む쭎逝멘쭕逝� (逝뜩━鋤띭└)',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '逝멘┥逝╆┥ 逝잀쭎逝뺖쭕逝멘쬉 逝밝┸逝멘쭎逝о쭎 逝む쭎逝멘쭕逝� 逝뺖┛',
		title	: '逝멘┥逝╆┥ 逝잀쭎逝뺖쭕逝멘쬉 逝밝┸逝멘쭎逝о쭎 逝む쭎逝멘쭕逝� 逝뺖┛'
	},

	templates :
	{
		button			: '逝잀쭎逝�逝む쭕逝꿋쭎逝�',
		title			: '逝뺖┬逝잀쭎逝ⓣ쭕逝� 逝잀쭎逝�逝む쭕逝꿋쭎逝�',
		options : 'Template Options', // MISSING
		insertOption	: 'Replace actual contents', // MISSING
		selectPromptMsg	: '逝끶┬鋤곟쬀鋤띭┛逝� 逝뺖┛鋤� 逝뤲─逝욈쬉逝겯쭎 逝볙┴鋤뉋┬ 逝뺖┛逝약┛ 逝쒉┬鋤띭┓ 逝잀쭎逝�逝む쭕逝꿋쭎逝� 逝о┥逝쎹┥逝� 逝뺖┛鋤곟┬<br>(逝녱┯逝� 逝뺖┬逝잀쭎逝ⓣ쭕逝� 逝밝┥逝겯┸鋤잀쭎 逝�逝약━鋤�):',
		emptyListMsg	: '(逝뺖쭓逝� 逝잀쭎逝�逝む쭕逝꿋쭎逝� 逝□┸逝ム┥逝뉋┬ 逝뺖┛逝� 逝ⓣ쭎逝�)'
	},

	showBlocks : 'Show Blocks', // MISSING

	stylesCombo :
	{
		label		: '逝멘쭕逝잀┥逝뉋┣',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '逝ム┬鋤띭쬉 逝ム┛逝�鋤뉋쬉',
		panelTitle	: '逝ム┬鋤띭쬉 逝ム┛逝�鋤뉋쬉',

		tag_p		: '逝멘┥逝㏅┥逝겯┌',
		tag_pre		: '逝ム┛鋤띭┏鋤뉋쬉鋤뉋─',
		tag_address	: '逝졷┸逝뺖┥逝ⓣ┥',
		tag_h1		: '逝뜩�逝겯쭕逝룅쫾 鋤�',
		tag_h2		: '逝뜩�逝겯쭕逝룅쫾 鋤�',
		tag_h3		: '逝뜩�逝겯쭕逝룅쫾 鋤�',
		tag_h4		: '逝뜩�逝겯쭕逝룅쫾 鋤�',
		tag_h5		: '逝뜩�逝겯쭕逝룅쫾 鋤�',
		tag_h6		: '逝뜩�逝겯쭕逝룅쫾 鋤�',
		tag_div		: '逝뜩�逝겯쭕逝룅쫾 (DIV)'
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
		label		: '逝ム┬鋤띭쬉',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: '逝ム┬鋤띭쬉'
	},

	fontSize :
	{
		label		: '逝멘┥逝뉋쬅',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: '逝멘┥逝뉋쬅'
	},

	colorButton :
	{
		textColorTitle	: '逝잀쭎逝뺖쭕逝멘쭕逝� 逝겯쫩',
		bgColorTitle	: '逝о쭎逝뺖쬀鋤띭┛逝약쫱逝ⓣ쭕逝� 逝겯쫩',
		panelTitle		: 'Colors', // MISSING
		auto			: '逝끶쬉鋤뗠┏鋤뉋쬉逝욈쫾',
		more			: '逝녱┛逝� 逝겯쫩...'
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
		noSuggestions	: '逝뺖쭓逝� 逝멘┥逝쒉쭎逝뜩┬ 逝ⓣ쭎逝�',
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
		label : '逝□쫾鋤띭┓鋤곟┏鋤뉋┬鋤띭쬉 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		title : '逝□쫾鋤띭┓鋤곟┏鋤뉋┬鋤띭쬉 逝む쭕逝겯쭓逝む┥逝겯쭕逝잀┸',
		design : 'Design', // MISSING
		meta : '逝�鋤뉋쬉逝약─鋤뉋쬉逝�',
		chooseColor : 'Choose', // MISSING
		other : '<other>',
		docTitle :	'逝む쭎逝� 逝뜩�逝겯쭕逝룅쫾',
		charset : 	'逝뺖쭕逝�逝약┛鋤뉋쫾鋤띭쬉逝약┛ 逝멘쭎逝� 逝뤲┬逝뺖쭓逝□┸逝�',
		charsetOther : '逝끶┬鋤띭┓ 逝뺖쭕逝�逝약┛鋤뉋쫾鋤띭쬉逝약┛ 逝멘쭎逝� 逝뤲┬逝뺖쭓逝□┸逝�',
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
		docType : '逝□쫾鋤띭┓鋤곟┏鋤뉋┬鋤띭쬉 逝잀┥逝뉋┴ 逝밝쭎逝□┸逝�',
		docTypeOther : '逝끶┬鋤띭┓ 逝□쫾鋤띭┓鋤곟┏鋤뉋┬鋤띭쬉 逝잀┥逝뉋┴ 逝밝쭎逝□┸逝�',
		xhtmlDec : 'XHTML 逝□쭎逝뺖쭕逝꿋┥逝겯쭎逝뜩┬ 逝�鋤곟쫾鋤띭┐ 逝뺖┛',
		bgColor : '逝о쭕逝�逝약쫾逝쀠쭕逝겯┥逝됢┬鋤띭─ 逝겯쫩',
		bgImage : '逝о쭕逝�逝약쫾逝쀠쭕逝겯┥逝됢┬鋤띭─ 逝쎹━逝욈┛ URL',
		bgFixed : '逝멘쭕逝뺖쭕逝겯┣逝밝�逝� 逝о쭕逝�逝약쫾逝쀠쭕逝겯┥逝됢┬鋤띭─',
		txtColor : '逝잀쭎逝뺖쭕逝멘쭕逝� 逝겯쫩',
		margin : '逝む쭎逝� 逝�逝약┛鋤띭쬅逝욈┬',
		marginTop : '逝됢┴逝�',
		marginLeft : '逝о┥逝�鋤�',
		marginRight : '逝□┥逝ⓣ쭎',
		marginBottom : '逝ⓣ�逝싟쭎',
		metaKeywords : '逝□쫾鋤띭┓鋤곟┏鋤뉋┬鋤띭쬉 逝뉋┬鋤띭─鋤뉋쫾鋤띭┯ 逝뺖┸逝볙쭫逝약┛鋤띭─ (逝뺖┏逝� 逝╆쭕逝о┥逝겯┥ 逝о┸逝싟쭕逝쎹┸逝ⓣ쭕逝�)',
		metaDescription : '逝□쫾鋤띭┓鋤귖┏鋤뉋┬鋤띭쬉 逝о┛鋤띭┌逝ⓣ┥',
		metaAuthor : '逝꿋쭎逝뽤쫾',
		metaCopyright : '逝뺖┴鋤�逝겯┥逝뉋쬉',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
