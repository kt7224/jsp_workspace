/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Khmer language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['km'] =
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
	source			: '���왋�옃',
	newPage			: '�옉�웺�옏�윇�옔�옄�윊�옒�왆',
	save			: '�옔���윊�옝�왃�옉�왊��',
	preview			: '�옒�왍�옕�옝�왃���옕�윊�옍�엫',
	cut				: '���왃�옃�윀�옓��',
	copy			: '�엯�웺�옕�엫�옓��',
	paste			: '�엯�웺�옕�엫�엸�왃���윀',
	print			: '�옍�웶�웻�옏�왊�옒�윊�옑',
	underline		: '�엸�왅�옃�옍�옋�윊�옉�왃�옃�윀�옏�왆���윊�옔�웶�옒�옠���윊�옝�옔',
	bold			: '�옠���윊�옝�옔�엸�왅�옃�옊�웺',
	italic			: '�옠���윊�옝�옔�옎�윊�옃�웳��',
	selectAll		: '�엲�윊�옔�왍�옝�옔�왍�옝�옉�왃�웺�엫�옠�옝�윀',
	removeFormat	: '�옕�옍�윀�엯�웶�옕 ���왃�옔�옔�엯�옋�왃',
	strike			: '�엸�왅�옃�옍�옋�윊�옉�왃�옃�윀�옏�왃���윀���옂�윊�옃�왃�옕�옠���윊�옝�옔',
	subscript		: '�옠���윊�옝�옔�옃�왋�엯���윊�옔�웶�옒',
	superscript		: '�옠���윊�옝�옔�옃�왋�엯�옕�왍',
	horizontalrule	: '�옍�옋�윊�옄�웴�옒�옍�옋�윊�옉�왃�옃�윀�옎�윊�옃�웳��',
	pagebreak		: '�옍�옋�윊�옄�웴�옒 ���왃�옔�옎�윊�옃�왃�엯�윀�옉�웺�옏�윇�옔',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '�옕�옍�윀�엳�윊�옋�왃�옍�윀',
	undo			: '�옝�왃�옔�옟�왍�엫�옖�왅�엵',
	redo			: '�옊�윊�옖�왍�옟�왍�엫�옖�왅�엵',

	// Common messages and labels.
	common :
	{
		browseServer	: '�옒�왍�옕',
		url				: 'URL',
		protocol		: '�옍�윊�옔�왋�옃�왋���왋�옕',
		upload			: '�옉�왃�엵�옓��',
		uploadSubmit	: '�옍�엵�윊�엲�왋�옋�옉�웷���왃�옋�윀�옒�웾�왃�옝�웿�왆�옋�옎�윊�옃�옕�윀�옝�웳�옖�왃',
		image			: '�옔�왋�옍�옑�왃�옏',
		flash			: 'Flash',
		form			: '�옍�웴�옍�옍�옉',
		checkbox		: '�옍�윊�옔�옠�옍�윀�엲�윊�옔�왍�옝�옔�왍�옝',
		radio			: '�옍�웾�왋�옃�왊�옋�옔�엫�윊�옖�엫�윀�옒�왋�옕',
		textField		: '�엲�왌�옔�옝�옔�옝�웳�옔�옠�옃�윊�옄�옍�옉',
		textarea		: '�옃�웺�옍�옋�윀�옝�옔�옝�웳�옔�옠�옃�윊�옄�옍�옉',
		hiddenField		: '�엲�왌�옔�옕�왃���윀',
		button			: '�옍�웾�왋�옃�왊�옋',
		select			: '�엲�왌�옔�엲�윊�옔�왍�옝�옔�왍�옝',
		imageButton		: '�옍�웾�왋�옃�왊�옋�옔�왋�옍�옑�왃�옏',
		notSet			: '<�옒�왅�옋�옒�웴�옋>',
		id				: 'Id',
		name			: '�엳�윊�옒�웶�웻',
		langDir			: '�옉�왅�옝�엸�웷�옑�왃�옝�왃',
		langDirLtr		: '�옏�왆�엱�윊�옖�웳�엫�옉�웷�옝�윊�옃�왃�웺(LTR)',
		langDirRtl		: '�옏�왆�옝�윊�옃�왃�웺�옉�웷�엱�윊�옖�웳�엫(RTL)',
		langCode		: '�옕�웳�엨���왋�옃�옑�왃�옝�왃',
		longDescr		: '�옠�옊�왅�옍�윊�옍�왃�옓 URL �옖�웴�엫',
		cssClass		: 'Stylesheet Classes',
		advisoryTitle	: '�엯�웺�옂�엫�엲�왍�엫 �옍�윊�옔�왇���윊�옝�왃',
		cssStyle		: '�옒�웾�왋�옃',
		ok				: '�옓�옕�윀�옏�윊�옔�옒',
		cancel			: '�옒�왅�옋�옓�옕�윀�옏�윊�옔�옒',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'General', // MISSING
		advancedTab		: '���웺�옔�왅�옃�엨�윊�옏�옝�윀',
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
		width			: '�옉�옉�왇�엫',
		height			: '���웺�옏�옝�윀',
		align			: '���웺�옂�옃�윀�옉�왆�옃�왃�웺�엫',
		alignLeft		: '�엨�왃�엫�엱�윊�옖�엫',
		alignRight		: '�엨�왃�엫�옝�윊�옃�왃�웺',
		alignCenter		: '���옂�윊�옃�왃�옕',
		alignTop		: '�엨�왃�엫�옕�왍',
		alignMiddle		: '���옂�윊�옃�왃�옕',
		alignBottom		: '�엨�왃�엫���윊�옔�웶�옒',
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
		toolbar		: '�옍�옋�윊�옄�웴�옒�옠���윊�옝�옔�옏�왅�옝�웳�옝',
		title		: '�옃�왋�옠���윊�옝�옔�옏�왅�옝�웳�옝',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '�옍�옋�윊�옄�웴�옒/���웴�옍�윊�옔�웴 �엳�윊�옋�왃�옍�윀',
		other 		: '<other>', // MISSING
		menu		: '���웴�옍�윊�옔�웴�엳�윊�옋�왃�옍�윀',
		title		: '�엳�윊�옋�왃�옍�윀',
		info		: '�옏�옃�윁�옒�왃�옋�옠�웺�옏�왆�엳�윊�옋�왃�옍�윀',
		target		: '�엩�웶�옕�엸�웷',
		upload		: '�옉�왃�엵�옓��',
		advanced	: '���웺�옔�왅�옃�엨�윊�옏�옝�윀',
		type		: '�옍�윊�옔�옑�웳�옉�엳�윊�옋�왃�옍�윀',
		toUrl		: 'URL', // MISSING
		toAnchor	: '�옓�왊�옄�윊���왃�옋�웷���윊�옋�왊�엫�옉�웺�옏�윇�옔�옋�웳�웻',
		toEmail		: '�옠�웿�왆�옒�웴�옕',
		targetFrame		: '<�옞�윊�옖�윊�옔�웳�옒>',
		targetPopup		: '<�옖�왆�옋�엸�왋�옖 �옕�웶�옃>',
		targetFrameName	: '�엳�윊�옒�웶�웻�옞�윊�옔�윊�옖�웳�옒�엸�웴�옕�엲�왃�엩�웶�옕�엸�웷',
		targetPopupName	: '�엳�윊�옒�웶�웻�옖�왆�옋�엸�왋�옖�옕�웶�옃',
		popupFeatures	: '�옕���윊�엨�옂�웻�옔�옍�옝�윀�옖�왆�옋�엸�왋�옕�옕�웶�옃',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '�옔�옍�왃 �옏�옃�윁�옒�왃�옋',
		popupLocationBar: '�옔�옍�왃 �옉�왆�옃�왃�웺�엫',
		popupToolbar	: '�옔�옍�왃 �옪�옍���옔�옂�윂',
		popupMenuBar	: '�옔�옍�왃 �옒�왉�옋�왊�옓',
		popupFullScreen	: '�옠�웳���윊�옔�왊�엫�옏�웳�엵(IE)',
		popupScrollBars	: '�옔�옍�왃 �옉�왃�엵',
		popupDependent	: '�옠�왃�옝�윊�옔�윇�옓�옕�왍 (Netscape)',
		popupLeft		: '�옉�왆�옃�왃�웺�엫�엨�왃�엫�엱�윊�옖�웳�엫',
		popupTop		: '�옉�왆�옃�왃�웺�엫�엨�왃�엫�옕�왍',
		id				: 'Id', // MISSING
		langDir			: '�옉�왅�옝�엸�웷�옑�왃�옝�왃',
		langDirLTR		: '�옏�왆�엱�윊�옖�웳�엫�옉�웷�옝�윊�옃�왃�웺(LTR)',
		langDirRTL		: '�옏�왆�옝�윊�옃�왃�웺�옉�웷�엱�윊�옖�웳�엫(RTL)',
		acccessKey		: '�엪�왆 �옝�웺�옔�왃�옍�윀�엯�왋�옕',
		name			: '�엳�윊�옒�웶�웻',
		langCode			: '�옉�왅�옝�엸�웷�옑�왃�옝�왃',
		tabIndex			: '�옕�웳�엨 Tab',
		advisoryTitle		: '�엯�웺�옂�엫�엲�왍�엫 �옍�윊�옔�왇���윊�옝�왃',
		advisoryContentType	: '�옍�윊�옔�옑�웳�옉�옠�옃�윊�옄�옍�옉 �옍�윊�옔�왇���윊�옝�왃',
		cssClasses		: 'Stylesheet Classes',
		charset			: '�옕�웳�엨���왋�옃�옠���윊�옝�옔�옔�옍�옝�윀�엳�윊�옋�왃�옍�윀',
		styles			: '�옒�웾�왋�옃',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '�엲�윊�옔�왍�옝�옔�왍�옝�옓�왊�옄�윊���왃',
		anchorName		: '�옃�왃�옒�엳�윊�옒�웶�웻�옔�옍�옝�윀�옓�왊�옄�윊���왃',
		anchorId			: '�옃�왃�옒 Id',
		emailAddress		: '�옠�웿�왆�옒�웴�옕',
		emailSubject		: '�엯�웺�옂�엫�엲�왍�엫�옠�옃�윊�옄�옍�옉',
		emailBody		: '�옠�옃�윊�옄�옍�옉',
		noAnchors		: '(No anchors available in the document)', // MISSING
		noUrl			: '�옝�왋�옒�옝�옔�옝�웳�옔 �옠�왃�옝�윇�옓�엸�윊�엹�왃�옋 URL',
		noEmail			: '�옝�왋�옒�옝�옔�옝�웳�옔 �옠�왃�옝�윇�옓�엸�윊�엹�왃�옋 �옠�웿�왆�옒�웴�옕'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�옍�옋�윊�옄�웴�옒/���웴�옍�윊�옔�웴 �옓�왊�옄�윊���왃',
		menu		: '���왃�옔���웺�옂�옃�윀�옓�왊�옄�윊���왃',
		title		: '���왃�옔���웺�옂�옃�윀�옓�왊�옄�윊���왃',
		name		: '�엳�윊�옒�웶�웻�옓�왊�옉�윊�옊�옄�윊���왃',
		errorName	: '�옝�왋�옒�옝�옔�옝�웳�옔 �엳�윊�옒�웶�웻�옓�왊�옉�윊�옊�옄�윊���왃',
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
		find				: '�옝�윊�옖�웴�엫�옔��',
		replace				: '�엲�웺�옋�왌�옝',
		findWhat			: '�옝�윊�옖�웴�엫�옔���옠�윊�옖�왆:',
		replaceWith			: '�엲�웺�옋�왌�옝�엲�왃�옒�왌�옓:',
		notFoundMsg			: '�옏�왃���윊�옓�옋�웳�웻 �옔���옒�왅�옋�엪�왍�엵�옉�웳 �윍',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '���옔�옂�웾�옃�윊�옔�왋�옖�옔��',
		matchWord			: '�옃�윊�옔�왋�옖�옏�왃���윊�옓�옉�왃�웺�엫�옠�옝�윀',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '�엲�웺�옋�왌�옝�옉�왃�웺�엫�옠�옝�윀',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '�옃�왃�옔�왃�엫',
		title		: '���왃�옔���웺�옂�옃�윀 �옃�왃�옔�왃�엫',
		menu		: '���왃�옔���웺�옂�옃�윀 �옃�왃�옔�왃�엫',
		deleteTable	: '�옕�옍�윀�옃�왃�옔�왃�엫',
		rows		: '�엲�왌�옔�옎�윊�옃�웳��',
		columns		: '�엲�왌�옔�엳�옔',
		border		: '�옉�웺�옞�웺�옝�웿�왊�옒',
		widthPx		: '�옑�왆���옝�웴�옕',
		widthPc		: '�옑�왃�엩�옔�옓',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '�엩�웺�옕�왃�옃�옝�웴�옕',
		cellPad		: '�엩�웴�옒�옝�웴�옕',
		caption		: '�엯�웺�옂�엫�엲�왍�엫',
		summary		: '�옝�웳�엯���윊�옃�왆�옝�엫�윊�엨�웳�옍',
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
			deleteCell		: '�옕�옍�윀�옝�웴�옕',
			merge			: '�옍�엵�윊�엲�왋�옕�옝�웴�옕',
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
			deleteRow		: '�옕�옍�윀�엲�왌�옔�옎�윊�옃�웳��'
		},

		column :
		{
			menu			: 'Column', // MISSING
			insertBefore	: 'Insert Column Before', // MISSING
			insertAfter		: 'Insert Column After', // MISSING
			deleteColumn	: '�옕�옍�윀�엲�왌�옔�엳�옔'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '���왃�옔���웺�옂�옃�윀 �옍�웾�왋�옃�왊�옋',
		text		: '�옠�옃�윊�옄�옍�옉(�옃�웺�옕�웵)',
		type		: '�옍�윊�옔�옑�웳�옉',
		typeBtn		: 'Button', // MISSING
		typeSbm		: 'Submit', // MISSING
		typeRst		: 'Reset' // MISSING
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '���왃�옔���웺�옂�옃�윀�옍�윊�옔�옠�옍�윀�엲�윊�옔�왍�옝�옔�왍�옝',
		radioTitle	: '���왃�옔���웺�옂�옃�윀�옍�웾�왋�옃�왊�옋�옔�엫�윊�옖�엫�윀',
		value		: '�옃�웺�옕�웵',
		selected	: '�옍�왃�옋�엲�윊�옔�왍�옝�옔�왍�옝'
	},

	// Form Dialog.
	form :
	{
		title		: '���왃�옔���웺�옂�옃�윀�옍�웴�옍�옍�옉',
		menu		: '���왃�옔���웺�옂�옃�윀�옍�웴�옍�옍�옉',
		action		: '�옝���옒�윊�옒�옑�왃�옏',
		method		: '�옖�왅�옊�왆',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: '���왃�옔���웺�옂�옃�윀�엲�왌�옔�엲�윊�옔�왍�옝�옔�왍�옝',
		selectInfo	: '�옏�옃�윁�옒�왃�옋',
		opAvail		: '���왃�옔���웺�옂�옃�윀�엲�윊�옔�왍�옝�옔�왍�옝 �엸�웴�옕�옠�왃�엯���웺�옂�옃�윀�옍�왃�옋',
		value		: '�옃�웺�옕�웵',
		size		: '�옉�웺�옞�웺',
		lines		: '�옍�옋�윊�옉�왃�옃�윀',
		chkMulti	: '�옠�옋�왊�엵�윊�엵�왃�옃�옠�웶�옓�엲�윊�옔�왍�옝�옔�왍�옝�엯�윊�옔�왍�옋',
		opText		: '�옏�왃���윊�옓',
		opValue		: '�옃�웺�옕�웵',
		btnAdd		: '�옍�옋�윊�옄�웴�옒',
		btnModify	: '�옎�윊�옕�왃�옝�윀�옍�윊�옃�왋�옔',
		btnUp		: '�옕�왍',
		btnDown		: '���윊�옔�웶�옒',
		btnSetValue : 'Set as selected value', // MISSING
		btnDelete	: '�옕�옍�윀'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '���왃�옔���웺�옂�옃�윀���옋�윊�옕�웴�엫�옝�옔�옝�웳�옔�옠�옃�윊�옄�옍�옉',
		cols		: '�엲�왋�옔�엳�옔',
		rows		: '�엲�왋�옔�옎�윊�옃�웳��'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '���왃�옔���웺�옂�옃�윀�엲�왌�옔�옠�옃�윊�옄�옍�옉',
		name		: '�엳�윊�옒�웶�웻',
		value		: '�옃�웺�옕�웵',
		charWidth	: '�옉�옉�왇�엫 �옠���윊�옝�옔',
		maxChars	: '�옠���윊�옝�옔�옠�옃�왅�옍�옔�왅�옒�왃',
		type		: '�옍�윊�옔�옑�웳�옉',
		typeText	: '�옏�왃���윊�옓',
		typePass	: '�옏�왃���윊�옓�옝�웺�엫�왃�옃�윀'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '���왃�옔���웺�옂�옃�윀�엲�왌�옔�옕�왃���윀',
		name	: '�엳�윊�옒�웶�웻',
		value	: '�옃�웺�옕�웵'
	},

	// Image Dialog.
	image :
	{
		title		: '���왃�옔���웺�옂�옃�윀�옔�왋�옍�옑�왃�옏',
		titleButton	: '���왃�옔���웺�옂�옃�윀�옍�웾�왋�옃�왊�옋�옔�왋�옍�옑�왃�옏',
		menu		: '���왃�옔���웺�옂�옃�윀�옔�왋�옍�옑�왃�옏',
		infoTab		: '�옏�옃�윁�옒�왃�옋�옠�웺�옏�왆�옔�왋�옍�옑�왃�옏',
		btnUpload	: '�옍�엵�윊�엲�왋�옋�옉�웷���왃�옋�윀�옒�웾�왃�옝�웿�왆�옋�옎�윊�옃�옕�윀�옝�웳�옖�왃',
		upload		: '�옉�왃�엵�옓��',
		alt			: '�옠�옃�윊�옄�옍�옉�엲�웺�옋�왌�옝',
		lockRatio	: '�옠�옃�윊�옔�왃�옟�왊��',
		resetSize	: '���웺�옂�옃�윀�옉�웺�옞�웺�옟�왍�엫�옖�왅�엵',
		border		: '�옝�웿�왊�옒',
		hSpace		: '�엩�웺�옕�왃�옃�옉�옉�왇�엫',
		vSpace		: '�엩�웺�옕�왃�옃�옍�옂�윊�옃�웶�옓',
		alertUrl	: '�옝�왋�옒�옝�옔�옝�웳�옔�엫�왃�옝�윇�옓�엸�윊�엹�왃�옋�옔�옍�옝�윀�옔�왋�옍�옑�왃�옏',
		linkTab		: '�엳�윊�옋�왃�옍�윀',
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
		properties		: '���왃�옔���웺�옂�옃�윀 Flash',
		propertiesTab	: 'Properties', // MISSING
		title			: '���왃�옔���웺�옂�옃�윀 Flash',
		chkPlay			: '�옕�웳�엫�엸�웶�옓�옝�윊�옖�윇�옓�옍�윊�옔�옖�옃�윊�옃',
		chkLoop			: '�엯�웺�옋�왌�옋�엸�엫',
		chkMenu			: '�옍�엫�윊�옞�왃�엵 �옒�왉�옋�왊�옓�옔�옍�옝�윀 Flash',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '�옉�웺�옞�웺',
		scaleAll		: '�옍�엫�윊�옞�왃�엵�옉�왃�웺�엫�옠�옝�윀',
		scaleNoBorder	: '�옒�왅�옋�옍�엫�윊�옞�왃�엵�옝�웿�왊�옒',
		scaleFit		: '�옃�윊�옔�왋�옖�옕�윊�옒�옒',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Abs Bottom', // MISSING
		alignAbsMiddle	: 'Abs Middle', // MISSING
		alignBaseline	: '�옍�옋�윊�옉�왃�옃�윀�엲�왃�옒�왋�옕�엸�윊�엹�왃�옋',
		alignTextTop	: '�옕�왍�옠�옃�윊�옄�옍�옉',
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
		bgcolor			: '�옏�옂�윁�옎�윊�옉�웵�엨�왃�엫���윊�옔�웶�옓',
		hSpace			: '�엩�웺�옕�왃�옃�옉�옉�왇�엫',
		vSpace			: '�엩�웺�옕�왃�옃�옍�옂�윊�옃�웶�옓',
		validateSrc		: '�옝�왋�옒�옝�옔�옝�웳�옔 �옠�왃�옝�윇�옓�엸�윊�엹�왃�옋 URL',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�옏�왅�옋�왅�옃�윊�옓�옠���윊�엨�옔�왃�옖�왅�옔�왊�옉�윊�옊',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '�엩�윊�옒�왃�옋���윊�옋�왊�엫�옖�엯�옋�왃�옋�왊���윊�옔�옒',
		changeTo		: '�옎�윊�옕�왃�옝�윀�옍�윊�옃�왋�옔�옉�웷',
		btnIgnore		: '�옒�왅�옋�옎�윊�옕�왃�옝�윀�옍�윊�옃�왋�옔',
		btnIgnoreAll	: '�옒�왅�옋�옎�윊�옕�왃�옝�윀�옍�윊�옃�왋�옔 �옉�왃�웺�엫�옠�옝�윀',
		btnReplace		: '�엲�웺�옋�왌�옝',
		btnReplaceAll	: '�엲�웺�옋�왌�옝�옉�왃�웺�엫�옠�옝�윀',
		btnUndo			: '�옝�왃�옔�옟�왍�엫�옖�왅�엵',
		noSuggestions	: '- �엩�윊�옒�왃�옋�옝�웺�옂�왍�옔 -',
		progress		: '���웺�옏�왊�엫�옏�왅�옋�왅�옃�윊�옓�옠���윊�엨�옔�왃�옖�왅�옔�왊�옉�윊�옊...',
		noMispell		: '���왃�옔�옏�왅�옋�왅�옃�윊�옓�옠���윊�엨�옔�왃�옖�왅�옔�왊�옉�윊�옊�옍�왃�옋�엯�옍�윀: �엩�윊�옒�왃�옋���웺�옞�왊�옝',
		noChanges		: '���왃�옔�옏�왅�옋�왅�옃�윊�옓�옠���윊�엨�옔�왃�옖�왅�옔�왊�옉�윊�옊�옍�왃�옋�엯�옍�윀: �옏�왊�웺�옒�왃�옋�옎�윊�옕�왃�옝�윀�옍�윊�옃�왋�옔',
		oneChange		: '���왃�옔�옏�왅�옋�왅�옃�윊�옓�옠���윊�엨�옔�왃�옖�왅�옔�왊�옉�윊�옊�옍�왃�옋�엯�옍�윀: �옏�왃���윊�옓�옒�왌�옓�옃�윊�옔�왋�엯�옍�왃�옋�옎�윊�옕�왃�옝�윀�옍�윊�옃�왋�옔',
		manyChanges		: '���왃�옔�옏�왅�옋�왅�옃�윊�옓�옠���윊�엨�옔�왃�옖�왅�옔�왊�옉�윊�옊�옍�왃�옋�엯�옍�윀: %1 �옏�왃���윊�옓�옍�왃�옋�옎�윊�옕�왃�옝�윀�옍�윊�옃�왋�옔',
		ieSpellDownload	: '�옏�왊�웺�옒�왃�옋���옒�윊�옒�옖�왅�옊�왆�옏�왅�옋�왅�옃�윊�옓�옠���윊�엨�옔�왃�옖�왅�옔�왊�옉�윊�옊 �윍 �옃�왍�엯�엫�윀�옉�왃�엵�옓���옏�왆�옂�왃?'
	},

	smiley :
	{
		toolbar	: '�옔�왋�옍�옑�왃�옏',
		title	: '�옍�엵�윊�엲�왋�옕�옔�왋�옍�옑�왃�옏',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '�옍�엵�윊�엲�왆�엲�왃�옠���윊�옝�옔',
	bulletedlist	: '�옍�엵�윊�엲�왆�엲�왃�옔�엫�윊�옖�엫�윀�옒�왋�옕',
	indent			: '�옍�옋�윊�옄�웴�옒���왃�옔�엯�왋�옕�옍�옋�윊�옉�왃�옃�윀',
	outdent			: '�옍�옋�윊�옄�옓���왃�옔�엯�왋�옕�옍�옋�윊�옉�왃�옃�윀',

	justify :
	{
		left	: '�옃�웺�옔�왇�옒�엱�윊�옖�웳�엫',
		center	: '�옃�웺�옔�왇�옒���옂�윊�옃�왃�옕',
		right	: '�옃�웺�옔�왇�옒�옝�윊�옃�왃�웺',
		block	: '�옃�웺�옔�왇�옒�옝�엫�엨�왃�엫'
	},

	blockquote : 'Block Quote', // MISSING

	clipboard :
	{
		title		: '�엯�웺�옕�엫�엸�왃���윀',
		cutError	: '���왃�옔���웺�옂�옃�윀�옝�왊�옖�옃�윊�옄�옑�왃�옏�옔�옍�옝�윀���옒�윊�옒�옖�왅�옊�왆�옔�왊���옔���옔�옍�옝�윀�옕�웶���옠�윊�옋�� �옋�웳�웻\u200b�옒�왅�옋�옠�왃�엯�옊�윊�옖�왍���옒�윊�옒�옖�왅�옊�왆�옃�왃���윀�옃�웴�엫�옠�옃�윊�옄�옍�옉 ���왃�옃�윀�옠�옃�윊�옄�옍�옉�옓���엸�웶�옓�옝�윊�옖�윇�옓�옍�윊�옔�옖�옃�윊�옃�옍�왃�옋�옟�왍�옓 �윍 �옝�왋�옒�옍�윊�옔�왍�옍�윊�옔�왃�옝�윀�옍�옋�윊�옝�웺 �엪�왆�엸�왋�엯�옋�웳�웻  (Ctrl/Cmd+X) �윍',
		copyError	: '���왃�옔���웺�옂�옃�윀�옝�왊�옖�옃�윊�옄�옑�왃�옏�옔�옍�옝�윀���옒�윊�옒�옖�왅�옊�왆�옔�왊���옔���옔�옍�옝�윀�옕�웶���옠�윊�옋�� �옋�웳�웻\u200b�옒�왅�옋�옠�왃�엯�옊�윊�옖�왍���옒�윊�옒�옖�왅�옊�왆�옃�왃���윀�옃�웴�엫�옠�옃�윊�옄�옍�옉 �엯�웺�옕�엫�옠�옃�윊�옄�옍�옉�옓���엸�웶�옓�옝�윊�옖�윇�옓�옍�윊�옔�옖�옃�윊�옃�옍�왃�옋�옟�왍�옓 �윍 �옝�왋�옒�옍�윊�옔�왍�옍�윊�옔�왃�옝�윀�옍�옋�윊�옝�웺 �엪�왆�엸�왋�엯�옋�웳�웻 (Ctrl/Cmd+C)�윍',
		pasteMsg	: '�옝�왋�옒�엯�웺�옕�엫�옠�옃�윊�옄�옍�옉�옉�웷�엸�왃���윀���윊�옋�왊�엫�옍�윊�옔�옠�옍�윀�엸�왋�엯�엨�왃�엫���윊�옔�웶�옒�엸�웶�옓�옍�윊�옔�왍�옍�윊�옔�왃�옝�윀 �엪�왆 \u200b(<STRONG>Ctrl/Cmd+V</STRONG>) �옞�왍�옓�엯�왊�엯 <STRONG>OK</STRONG> �윍',
		securityMsg	: 'Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.', // MISSING
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: '�엯�웺�옕�엫�엸�왃���윀�옏�왆 Word',
		title			: '�엯�웺�옕�엫�엸�왃���윀�옏�왆 Word',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '�엯�웺�옕�엫�엸�왃���윀�옠�옃�윊�옄�옍�옉�옊�옒�윊�옒�옃�왃',
		title	: '�엯�웺�옕�엫�엸�왃���윀�옠�옃�윊�옄�옍�옉�옊�옒�윊�옒�옃�왃'
	},

	templates :
	{
		button			: '�옸���옝�왃�옔�엩�웺�옔�왋',
		title			: '�옸���옝�왃�옔�엩�웺�옔�왋 �옔�옍�옝�윀�옠�옃�윊�옄�옋�윇�옓',
		options : 'Template Options', // MISSING
		insertOption	: 'Replace actual contents', // MISSING
		selectPromptMsg	: '�옝�왋�옒�엲�윊�옔�왍�옝�옔�왍�옝�옸���옝�왃�옔�엩�웺�옔�왋 �엸�왍�옒�윊�옍�왆�옍�왍���옋�웷���윊�옋�왊�엫���옒�윊�옒�옖�왅�옊�왆�옃�왃���윀�옃�웴�엫�옠�옃�윊�옄�옍�옉<br>(�옠�옃�윊�옄�옍�옉�옋�왇�엫�옍�왃�옃�윀�옍�엫�윀):',
		emptyListMsg	: '(�옏�왊�웺�옒�왃�옋�옸���옝�왃�옔�엩�웺�옔�왋�옃�윊�옔�왋�옖�옍�왃�옋���웺�옂�옃�윀)'
	},

	showBlocks : 'Show Blocks', // MISSING

	stylesCombo :
	{
		label		: '�옒�웾�왋�옃',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '�옔�엯�옋�왃',
		panelTitle	: '�옔�엯�옋�왃',

		tag_p		: 'Normal',
		tag_pre		: 'Formatted',
		tag_address	: 'Address',
		tag_h1		: 'Heading 1',
		tag_h2		: 'Heading 2',
		tag_h3		: 'Heading 3',
		tag_h4		: 'Heading 4',
		tag_h5		: 'Heading 5',
		tag_h6		: 'Heading 6',
		tag_div		: 'Normal (DIV)'
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
		label		: '�옞�윊�옖�왊�엫',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: '�옞�윊�옖�왊�엫'
	},

	fontSize :
	{
		label		: '�옉�웺�옞�웺',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: '�옉�웺�옞�웺'
	},

	colorButton :
	{
		textColorTitle	: '�옏�옂�윁�옠���윊�옝�옔',
		bgColorTitle	: '�옏�옂�윁�옎�윊�옉�웵�엨�왃�엫���윊�옔�웶�옓',
		panelTitle		: 'Colors', // MISSING
		auto			: '�옝�윊�옖�윇�옓�옍�윊�옔�옖�옃�윊�옃',
		more			: '�옏�옂�윁�옎�윊�옝�웳�엫�옉���옃..'
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
		noSuggestions	: ' �엩�윊�옒�왃�옋�옝�웺�옂�왍�옔 ',
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
		label : '���왃�옔���웺�옂�옃�윀 �옸���옝�왃�옔',
		title : '���왃�옔���웺�옂�옃�윀 �옸���옝�왃�옔',
		design : 'Design', // MISSING
		meta : '�옉�왅�옋�윊�옋�옋�윇�옓�옒�웳',
		chooseColor : 'Choose', // MISSING
		other : '<other>',
		docTitle :	'�엯�웺�옂�엫�엲�왍�엫�옉�웺�옏�윇�옔',
		charset : 	'���웺�옂�옃�윀�옕�웳�엨���왋�옃�옑�왃�옝�왃',
		charsetOther : '���웺�옂�옃�윀�옕�웳�엨���왋�옃�옑�왃�옝�왃�옎�윊�옝�웳�엫�옉���옃',
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
		docType : '�옍�윊�옔�옑�웳�옉���윊�옍�왃�옕�옉�웺�옏�윇�옔',
		docTypeOther : '�옍�윊�옔�옑�웳�옉���윊�옍�왃�옕�옉�웺�옏�윇�옔�옎�윊�옝�웳�엫�옉���옃',
		xhtmlDec : '�옍�엵�윊�엲�왋�옕 XHTML',
		bgColor : '�옏�옂�윁�엨�왃�엫���윊�옔�웶�옒',
		bgImage : 'URL �옔�옍�옝�윀�옔�왋�옍�옑�왃�옏�엨�왃�엫���윊�옔�웶�옒',
		bgFixed : '�옉�웺�옏�윇�옔���윊�옔�웶�옒�옒�왅�옋�옍�윊�옃�왋�옔',
		txtColor : '�옏�옂�윁�옠���윊�옝�옔',
		margin : '�옝�웿�왊�옒�옉�웺�옏�윇�옔',
		marginTop : '�옕�왍',
		marginLeft : '�엱�윊�옖�웳�엫',
		marginRight : '�옝�윊�엸�왃�웺',
		marginBottom : '���윊�옔�웶�옒',
		metaKeywords : '�옏�왃���윊�옓�옋�웷���윊�옋�왊�엫�옸���옝�왃�옔 (�옎�윊�옃�왃�엯�윀�옏�왆�엩�윊�옋�왃�엸�웶�옓���윊�옍���옝)',
		metaDescription : '�옝�웳�엯���윊�옃�왆�옠�옃�윊�옄�왃�옊�왅�옍�윊�옍�왃�옓�옠�웺�옏�왆�옸���옝�왃�옔',
		metaAuthor : '�옠�윊�옋���옋�왅�옏�옋�윊�옊',
		metaCopyright : '�옔���윊�옝�왃�옝�왅�옉�윊�옊�왅�윆',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
