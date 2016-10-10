/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Hindi language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['hi'] =
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
	editorTitle : '西겯ㅏ西� 西잀쪍西뺖쪓西멘쪓西� 西뤲ㄱ西욈쩅西�, %1',
	editorHelp : '西�西╆ㄶ 西뺖쪍 西꿋ㅏ西�誓� ALT 0 西╆ㄼ西약쨵',

	// ARIA descriptions.
	toolbars	: '西뤲ㄱ西욈쩅西� 西잀쪈西꿋ㄼ西약ㅀ',
	editor		: '西겯ㅏ西� 西잀쪍西뺖쪓西멘쪓西� 西뤲ㄱ西욈쩅西�',

	// Toolbar buttons without dialogs.
	source			: '西멘쪑西겯쪓西�',
	newPage			: '西ⓣㄿ西� 西む쪍西�',
	save			: '西멘쪍西�',
	preview			: '西む쪓西겯�西듀쪓西�誓�',
	cut				: '西뺖쩅',
	copy			: '西뺖쪏西む�',
	paste			: '西む쪍西멘쪓西�',
	print			: '西む쪓西겯ㅏ西ⓣ쪓西�',
	underline		: '西겯쪍西뽤ㅎ西귖쨻西�',
	bold			: '西о쪑西꿋쪓西�',
	italic			: '西뉋쩅誓댽ㅂ西욈쨻',
	selectAll		: '西멘ㄼ 西멘쪋西꿋쪋西뺖쪓西� 西뺖ㅀ誓뉋쨧',
	removeFormat	: '誓왽쪏西겯쪓西�誓댽쩅 西밝쩅西약ㄿ誓뉋쨧',
	strike			: '西멘쪓西잀쪓西겯ㅎ西뉋쨻 西�誓띭ㅀ誓�',
	subscript		: '西끶ㄷ誓뗠ㅂ誓뉋쨼',
	superscript		: '西끶ㄽ西욈ㅂ誓뉋쨼',
	horizontalrule	: '西밝쪏西겯ㅏ誓쎹쪏西ⓣ쪓西잀ㅂ 西겯쪍西뽤ㅎ 西뉋ㄸ誓띭ㅈ西겯쪓西� 西뺖ㅀ誓뉋쨧',
	pagebreak		: '西む쪍西� 西о쪓西겯쪍西� 西뉋ㄸ誓띭ㅈ西겯쪓西잀쪓 西뺖ㅀ誓뉋쨧',
	pagebreakAlt		: '西む쪍西� 西о쪓西겯쪍西�',
	unlink			: '西꿋ㅏ西귖쨻 西밝쩅西약ㄿ誓뉋쨧',
	undo			: '西끶ㄸ誓띭ㄱ誓�',
	redo			: '西겯�西□쪈',

	// Common messages and labels.
	common :
	{
		browseServer	: '西멘ㅀ誓띭ㅅ西� 西о쪓西겯ㅎ西됢쪢 西뺖ㅀ誓뉋쨧',
		url				: 'URL',
		protocol		: '西む쪓西겯쪑西잀쪑西뺖쪏西�',
		upload			: '西끶ㄺ西꿋쪑西�',
		uploadSubmit	: '西뉋ㅈ誓� 西멘ㅀ誓띭ㅅ西� 西뺖쪑 西�誓뉋쩂誓뉋쨧',
		image			: '西ㅰㅈ誓띭ㅅ誓�西�',
		flash			: '誓왽쪓西꿋쪎西�',
		form			: '誓왽쪏西겯쪓西�',
		checkbox		: '西싟쪋西� 西о쪏西뺖쪓西�',
		radio			: '西겯쪍西□ㅏ西� 西о쩅西�',
		textField		: '西잀쪍西뺖쪓西멘쪓西� 誓왽�西꿋쪓西�',
		textarea		: '西잀쪍西뺖쪓西멘쪓西� 西뤲ㅀ西욈ㄿ西�',
		hiddenField		: '西쀠쪇西む쪓西� 誓왽�西꿋쪓西�',
		button			: '西о쩅西�',
		select			: '西싟쪇西ⓣㅎ西� 誓왽�西꿋쪓西�',
		imageButton		: '西ㅰㅈ誓띭ㅅ誓�西� 西о쩅西�',
		notSet			: '<西멘쪋西� 西ⓣㅉ誓�西�>',
		id				: 'Id',
		name			: '西ⓣㅎ西�',
		langDir			: '西�西약ㅇ西� 西꿋ㅏ西뽤ㄸ誓� 西뺖� 西╆ㅏ西뜩ㅎ',
		langDirLtr		: '西оㅎ西�誓뉋쨧 西멘쪍 西╆ㅎ西�誓뉋쨧 (LTR)',
		langDirRtl		: '西╆ㅎ西�誓뉋쨧 西멘쪍 西оㅎ西�誓뉋쨧 (RTL)',
		langCode		: '西�西약ㅇ西� 西뺖쪑西�',
		longDescr		: '西끶ㄷ西욈쨻 西듀ㅏ西듀ㅀ西� 西뺖쪍 西꿋ㅏ西� URL',
		cssClass		: '西멘쪓西잀ㅎ西뉋ㅂ-西뜩�西� 西뺖쪓西꿋ㅎ西�',
		advisoryTitle	: '西むㅀ西약ㄾ西겯쪓西� 西뜩�西겯쪓西뜩쨻',
		cssStyle		: '西멘쪓西잀ㅎ西뉋ㅂ',
		ok				: '西졷�西� 西밝쪎',
		cancel			: '西겯ㄶ誓띭ㄶ 西뺖ㅀ誓뉋쨧',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: '西멘ㅎ西�西약ㄸ誓띭ㄿ',
		advancedTab		: '西띭ㄱ誓띭ㅅ西약ㄸ誓띭ㅈ誓띭ㄱ',
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
		width			: '西싟쪒誓쒉ㅎ西�',
		height			: '西듺쨦西싟ㅎ西�',
		align			: '西띭ㅂ西약쨭西�',
		alignLeft		: '西╆ㅎ西�誓뉋쨧',
		alignRight		: '西╆ㅎ西�誓뉋쨧',
		alignCenter		: '西о�西� 西�誓뉋쨧',
		alignTop		: '西듺ㄺ西�',
		alignMiddle		: '西�西㏅쪓西�',
		alignBottom		: '西ⓣ�西싟쪍',
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
		toolbar		: '西듀ㅏ西뜩쪍西� 西뺖ㅀ誓끶쨻誓띭쩅西� 西뉋ㄸ誓띭ㅈ西겯쪓西� 西뺖ㅀ誓뉋쨧',
		title		: '西듀ㅏ西뜩쪍西� 西뺖ㅀ誓끶쨻誓띭쩅西� 西싟쪇西ⓣ쪍西�',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '西꿋ㅏ西귖쨻 西뉋ㄸ誓띭ㅈ西겯쪓西�/西멘쨧西むㅎ西╆ㄸ',
		other 		: '<西끶ㄸ誓띭ㄿ>',
		menu		: '西꿋ㅏ西귖쨻 西멘쨧西むㅎ西╆ㄸ',
		title		: '西꿋ㅏ西귖쨻',
		info		: '西꿋ㅏ西귖쨻  ',
		target		: '西잀ㅎ西겯쪓西쀠쪍西�',
		upload		: '西끶ㄺ西꿋쪑西�',
		advanced	: '西띭ㄱ誓띭ㅅ西약ㄸ誓띭ㅈ誓띭ㄱ',
		type		: '西꿋ㅏ西귖쨻 西む쪓西겯쨻西약ㅀ',
		toUrl		: 'URL', // MISSING
		toAnchor	: '西뉋ㅈ 西む쪍西� 西뺖ㅎ 西먣쨧西뺖ㅀ',
		toEmail		: '西�-西�誓뉋ㅂ',
		targetFrame		: '<誓왽쪓西겯쪍西�>',
		targetPopup		: '<西む쪏西�-西끶ㄺ 西듀ㅏ西ⓣ쪓西□쪑>',
		targetFrameName	: '西잀ㅎ西겯쪓西쀠쪍西� 誓왽쪓西겯쪍西� 西뺖ㅎ 西ⓣㅎ西�',
		targetPopupName	: '西む쪏西�-西끶ㄺ 西듀ㅏ西ⓣ쪓西□쪑 西뺖ㅎ 西ⓣㅎ西�',
		popupFeatures	: '西む쪏西�-西끶ㄺ 西듀ㅏ西ⓣ쪓西□쪑 誓왽�西싟ㅀ誓띭ㅈ',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '西멘쪓西잀쪍西잀ㅈ 西оㅎ西�',
		popupLocationBar: '西꿋쪑西뺖쪍西뜩ㄸ 西оㅎ西�',
		popupToolbar	: '西잀쪈西� 西оㅎ西�',
		popupMenuBar	: '西�誓끶ㄸ誓띭ㄿ誓� 西оㅎ西�',
		popupFullScreen	: '誓왽쪇西� 西멘쪓西뺖쪓西겯�西� (IE)',
		popupScrollBars	: '西멘쪓西뺖쪓西겯쪏西� 西оㅎ西�',
		popupDependent	: '西□ㅏ西む쪍西ⓣ쪓西□쪋西ⓣ쪓西� (Netscape)',
		popupLeft		: '西оㅎ西�誓�西� 西ㅰㅀ西�',
		popupTop		: '西╆ㅎ西�誓�西� 西ㅰㅀ西�',
		id				: 'Id', // MISSING
		langDir			: '西�西약ㅇ西� 西꿋ㅏ西뽤ㄸ誓� 西뺖� 西╆ㅏ西뜩ㅎ',
		langDirLTR		: '西оㅎ西�誓뉋쨧 西멘쪍 西╆ㅎ西�誓뉋쨧 (LTR)',
		langDirRTL		: '西╆ㅎ西�誓뉋쨧 西멘쪍 西оㅎ西�誓뉋쨧 (RTL)',
		acccessKey		: '西띭쨻誓띭ㅈ誓끶ㅈ 西뺖�',
		name			: '西ⓣㅎ西�',
		langCode			: '西�西약ㅇ西� 西꿋ㅏ西뽤ㄸ誓� 西뺖� 西╆ㅏ西뜩ㅎ',
		tabIndex			: '西잀쪎西� 西뉋ㄸ誓띭ㄱ誓끶쨻誓띭ㅈ',
		advisoryTitle		: '西むㅀ西약ㄾ西겯쪓西� 西뜩�西겯쪓西뜩쨻',
		advisoryContentType	: '西むㅀ西약ㄾ西겯쪓西� 西뺖ㄸ誓띭쩅誓끶ㄸ誓띭쩅 西む쪓西겯쨻西약ㅀ',
		cssClasses		: '西멘쪓西잀ㅎ西뉋ㅂ-西뜩�西� 西뺖쪓西꿋ㅎ西�',
		charset			: '西꿋ㅏ西귖쨻 西겯ㅏ西멘쪑西겯쪓西� 西뺖ㅀ誓끶쨻誓띭쩅西� 西멘쪋西�',
		styles			: '西멘쪓西잀ㅎ西뉋ㅂ',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '西먣쨧西뺖ㅀ 西싟쪇西ⓣ쪍西�',
		anchorName		: '西먣쨧西뺖ㅀ 西ⓣㅎ西� 西멘쪍',
		anchorId			: '西띭ㅂ誓�西�誓끶ㄸ誓띭쩅 Id 西멘쪍',
		emailAddress		: '西�-西�誓뉋ㅂ 西むㄴ西�',
		emailSubject		: '西멘쨧西╆쪍西� 西듀ㅏ西룅ㄿ',
		emailBody		: '西멘쨧西╆쪍西�',
		noAnchors		: '(西□쪏西뺖쪓西�誓귖ㄾ誓끶ㄸ誓띭쩅 西�誓뉋쨧 西먣쨧西뺖ㅀ誓띭ㅈ 西뺖� 西멘쨧西뽤쪓西�西�)',
		noUrl			: '西꿋ㅏ西귖쨻 URL 西잀ㅎ西뉋ㄺ 西뺖ㅀ誓뉋쨧',
		noEmail			: '西�-西�誓뉋ㅂ 西むㄴ西� 西잀ㅎ西뉋ㄺ 西뺖ㅀ誓뉋쨧'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '西먣쨧西뺖ㅀ 西뉋ㄸ誓띭ㅈ西겯쪓西�/西멘쨧西むㅎ西╆ㄸ',
		menu		: '西먣쨧西뺖ㅀ 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		title		: '西먣쨧西뺖ㅀ 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		name		: '西먣쨧西뺖ㅀ 西뺖ㅎ 西ⓣㅎ西�',
		errorName	: '西먣쨧西뺖ㅀ 西뺖ㅎ 西ⓣㅎ西� 西잀ㅎ西뉋ㄺ 西뺖ㅀ誓뉋쨧',
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
		title				: '西뽤쪑西쒉쪍西� 西붲ㅀ 西оㄶ西꿋쪍西�',
		find				: '西뽤쪑西쒉쪍西�',
		replace				: '西겯�西む쪓西꿋쪍西�',
		findWhat			: '西�西� 西뽤쪑西쒉쪍西�:',
		replaceWith			: '西뉋ㅈ西멘쪍 西겯ㅏ西む쪓西꿋쪍西� 西뺖ㅀ誓뉋쨧:',
		notFoundMsg			: '西녱ㄺ西뺖쪍 西╆쪓西듀ㅎ西겯ㅎ 西╆ㅏ西�西� 西쀠ㄿ西� 西잀쪍西뺖쪓西멘쪓西� 西ⓣㅉ誓�西� 西�西욈ㅂ西�',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '西뺖쪍西� 西�西욈ㅂ西약ㄿ誓뉋쨧',
		matchWord			: '西む쪈西겯ㅎ 西뜩ㄼ誓띭ㄶ 西�西욈ㅂ西약ㄿ誓뉋쨧',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '西멘ㄽ誓� 西겯ㅏ西む쪓西꿋쪍西� 西뺖ㅀ誓뉋쨧',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '西잀쪍西оㅂ',
		title		: '西잀쪍西оㅂ 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		menu		: '西잀쪍西оㅂ 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		deleteTable	: '西잀쪍西оㅂ 西□ㅏ西꿋�西� 西뺖ㅀ誓뉋쨧',
		rows		: '西む쨧西뺖쪓西ㅰㅏ西�西약쨦',
		columns		: '西뺖ㅎ西꿋ㄾ',
		border		: '西о쪏西겯쪓西□ㅀ 西멘ㅎ西뉋쪢',
		widthPx		: '西むㅏ西뺖쪓西멘쪎西�',
		widthPc		: '西む쪓西겯ㄴ西욈ㅆ西�',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '西멘쪎西� 西끶쨧西ㅰㅀ',
		cellPad		: '西멘쪎西� 西む쪎西□ㅏ西귖쨽',
		caption		: '西뜩�西겯쪓西룅쨻',
		summary		: '西멘ㅎ西겯ㅎ西귖ㅆ',
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
			menu			: '西뽤ㅎ西ⓣㅎ',
			insertBefore	: '西むㅉ西꿋쪍 西멘쪎西� 西□ㅎ西꿋쪍西�',
			insertAfter		: '西оㅎ西� 西�誓뉋쨧 西멘쪎西� 西□ㅎ西꿋쪍西�',
			deleteCell		: '西멘쪎西� 西□ㅏ西꿋�西� 西뺖ㅀ誓뉋쨧',
			merge			: '西멘쪎西� 西�西욈ㅂ西약ㄿ誓뉋쨧',
			mergeRight		: '西оㅎ西곟ㄿ西� 西듀ㅏ西꿋ㄿ',
			mergeDown		: '西ⓣ�西싟쪍 西듀ㅏ西꿋ㄿ 西뺖ㅀ誓뉋쨧',
			splitHorizontal	: '西멘쪎西� 西뺖쪑 西뺖쪓西룅쪎西ㅰㅏ西� 西멘쪓西�西욈ㄴ西� 西�誓뉋쨧 西듀ㅏ西�西약쩂西욈ㄴ 西뺖ㅀ誓뉋쨧',
			splitVertical	: '西멘쪎西� 西뺖쪑 西꿋ㄾ誓띭ㄼ西약쨻西약ㅀ 西�誓뉋쨧 西듀ㅏ西�西약쩂西욈ㄴ 西뺖ㅀ誓뉋쨧',
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
			menu			: '西む쨧西뺖쪓西ㅰㅏ',
			insertBefore	: '西むㅉ西꿋쪍 西む쨧西뺖쪓西ㅰㅏ 西□ㅎ西꿋쪍西�',
			insertAfter		: '西оㅎ西� 西�誓뉋쨧 西む쨧西뺖쪓西ㅰㅏ 西□ㅎ西꿋쪍西�',
			deleteRow		: '西む쨧西뺖쪓西ㅰㅏ西�西약쨦 西□ㅏ西꿋�西� 西뺖ㅀ誓뉋쨧'
		},

		column :
		{
			menu			: '西뺖ㅎ西꿋ㄾ',
			insertBefore	: '西むㅉ西꿋쪍 西뺖ㅎ西꿋ㄾ 西□ㅎ西꿋쪍西�',
			insertAfter		: '西оㅎ西� 西�誓뉋쨧 西뺖ㅎ西꿋ㄾ 西□ㅎ西꿋쪍西�',
			deleteColumn	: '西뺖ㅎ西꿋ㄾ 西□ㅏ西꿋�西� 西뺖ㅀ誓뉋쨧'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '西о쩅西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		text		: '西잀쪍西뺖쪓西멘쪓西� (西듀쪎西꿋쪓西�誓�)',
		type		: '西む쪓西겯쨻西약ㅀ',
		typeBtn		: '西о쩅西�',
		typeSbm		: '西멘ㄼ誓띭ㄾ西욈쩅',
		typeRst		: '西겯ㅏ西멘쪍西�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '西싟쪋西� 西о쪏西뺖쪓西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		radioTitle	: '西겯쪍西□ㅏ西� 西о쩅西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		value		: '西듀쪎西꿋쪓西�誓�',
		selected	: '西멘쪋西꿋쪋西뺖쪓西잀쪋西�'
	},

	// Form Dialog.
	form :
	{
		title		: '誓왽쪏西겯쪓西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		menu		: '誓왽쪏西겯쪓西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		action		: '西뺖쪓西겯ㅏ西�西�',
		method		: '西ㅰㅀ誓�西뺖ㅎ',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: '西싟쪇西ⓣㅎ西� 誓왽�西꿋쪓西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		selectInfo	: '西멘쪈西싟ㄸ西�',
		opAvail		: '西됢ㄺ西꿋ㄼ誓띭ㄷ 西듀ㅏ西뺖ㅂ誓띭ㄺ',
		value		: '西듀쪎西꿋쪓西�誓�',
		size		: '西멘ㅎ西뉋쪢',
		lines		: '西む쨧西뺖쪓西ㅰㅏ西�西약쨦',
		chkMulti	: '西뤲쨻 西멘쪍 西쒉쪓西�西약ㄶ西� 西듀ㅏ西뺖ㅂ誓띭ㄺ 西싟쪇西ⓣㄸ誓� 西╆쪍西�',
		opText		: '西잀쪍西뺖쪓西멘쪓西�',
		opValue		: '西듀쪎西꿋쪓西�誓�',
		btnAdd		: '西쒉쪑誓쒉쪍西�',
		btnModify	: '西оㄶ西꿋쪍西�',
		btnUp		: '西듺ㄺ西�',
		btnDown		: '西ⓣ�西싟쪍',
		btnSetValue : '西싟쪇西ⓣ� 西쀠쨮 西듀쪎西꿋쪓西�誓� 西멘쪋西� 西뺖ㅀ誓뉋쨧',
		btnDelete	: '西□ㅏ西꿋�西�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '西잀쪍西뺖쪓西멘쪓西� 西뤲ㅀ西욈ㄿ西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		cols		: '西뺖ㅎ西꿋ㄾ',
		rows		: '西む쨧西뺖쪓西ㅰㅏ西�西약쨧'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '西잀쪍西뺖쪓西멘쪓西� 誓왽�西꿋쪓西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		name		: '西ⓣㅎ西�',
		value		: '西듀쪎西꿋쪓西�誓�',
		charWidth	: '西뺖ㅀ誓끶쨻誓띭쩅西� 西뺖� 西싟쪒誓앧ㅎ西�',
		maxChars	: '西끶ㄷ西욈쨻西ㅰㄾ 西뺖ㅀ誓끶쨻誓띭쩅西�',
		type		: '西잀ㅎ西뉋ㄺ',
		typeText	: '西잀쪍西뺖쪓西멘쪓西�',
		typePass	: '西むㅎ西멘쪓西듀ㅀ誓띭ㄱ'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '西쀠쪇西む쪓西� 誓왽�西꿋쪓西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		name	: '西ⓣㅎ西�',
		value	: '西듀쪎西꿋쪓西�誓�'
	},

	// Image Dialog.
	image :
	{
		title		: '西ㅰㅈ誓띭ㅅ誓�西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		titleButton	: '西ㅰㅈ誓띭ㅅ誓�西� 西о쩅西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		menu		: '西ㅰㅈ誓띭ㅅ誓�西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		infoTab		: '西ㅰㅈ誓띭ㅅ誓�西� 西뺖� 西쒉ㅎ西ⓣ쨻西약ㅀ誓�',
		btnUpload	: '西뉋ㅈ誓� 西멘ㅀ誓띭ㅅ西� 西뺖쪑 西�誓뉋쩂誓뉋쨧',
		upload		: '西끶ㄺ西꿋쪑西�',
		alt			: '西듀쪎西뺖ㅂ誓띭ㄺ西욈쨻 西잀쪍西뺖쪓西멘쪓西�',
		lockRatio	: '西꿋쪏西� 西끶ㄸ誓곟ㄺ西약ㄴ',
		resetSize	: '西겯�西멘쪋西� 西멘ㅎ西뉋쪢',
		border		: '西о쪏西겯쪓西□ㅀ',
		hSpace		: '西밝쪏西겯ㅏ誓쎹쪏西ⓣ쪓西잀ㅂ 西멘쪓西む쪍西�',
		vSpace		: '西듀ㅀ誓띭쩅西욈쨻西� 西멘쪓西む쪍西�',
		alertUrl	: '西ㅰㅈ誓띭ㅅ誓�西� 西뺖ㅎ URL 西잀ㅎ西뉋ㄺ 西뺖ㅀ誓뉋쨧 ',
		linkTab		: '西꿋ㅏ西귖쨻',
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
		properties		: '誓왽쪓西꿋쪎西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		propertiesTab	: 'Properties', // MISSING
		title			: '誓왽쪓西꿋쪎西� 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		chkPlay			: '西묂쩅誓� 西む쪓西꿋쪍',
		chkLoop			: '西꿋쪈西�',
		chkMenu			: '誓왽쪓西꿋쪎西� 西�誓끶ㄸ誓띭ㄿ誓� 西뺖ㅎ 西む쪓西겯ㄿ誓뗠쨽 西뺖ㅀ誓뉋쨧',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '西멘쪓西뺖쪍西�',
		scaleAll		: '西멘ㄽ誓� 西╆ㅏ西뽤ㅎ西�誓뉋쨧',
		scaleNoBorder	: '西뺖쪑西� 西о쪏西겯쪓西□ㅀ 西ⓣㅉ誓�西�',
		scaleFit		: '西оㅏ西꿋쪓西뺖쪇西� 誓왽ㅏ西�',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Abs 西ⓣ�西싟쪍',
		alignAbsMiddle	: 'Abs 西듺ㄺ西�',
		alignBaseline	: '西�誓귖ㅂ 西겯쪍西뽤ㅎ',
		alignTextTop	: '西잀쪍西뺖쪓西멘쪓西� 西듺ㄺ西�',
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
		bgcolor			: '西о쪎西뺖쪓西쀠쪓西겯ㅎ西됢ㄸ誓띭ㄱ 西겯쨧西�',
		hSpace			: '西밝쪏西겯ㅏ誓쎹쪏西ⓣ쪓西잀ㅂ 西멘쪓西む쪍西�',
		vSpace			: '西듀ㅀ誓띭쩅西욈쨻西� 西멘쪓西む쪍西�',
		validateSrc		: '西꿋ㅏ西귖쨻 URL 西잀ㅎ西뉋ㄺ 西뺖ㅀ誓뉋쨧',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '西듀ㅀ誓띭ㄴ西ⓣ� (西멘쪓西む쪍西꿋ㅏ西귖쨽) 西쒉ㅎ西곟쩀',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '西뜩ㄼ誓띭ㄶ西뺖쪑西� 西�誓뉋쨧 西ⓣㅉ誓�西�',
		changeTo		: '西뉋ㅈ西�誓뉋쨧 西оㄶ西꿋쪍西�',
		btnIgnore		: '西뉋쨽誓띭ㄸ誓뗠ㅀ',
		btnIgnoreAll	: '西멘ㄽ誓� 西뉋쨽誓띭ㄸ誓뗠ㅀ 西뺖ㅀ誓뉋쨧',
		btnReplace		: '西겯ㅏ西む쪓西꿋쪍西�',
		btnReplaceAll	: '西멘ㄽ誓� 西겯ㅏ西む쪓西꿋쪍西� 西뺖ㅀ誓뉋쨧',
		btnUndo			: '西끶ㄸ誓띭ㄱ誓�',
		noSuggestions	: '- 西뺖쪑西� 西멘쪇西앧ㅎ西� 西ⓣㅉ誓�西� -',
		progress		: '西듀ㅀ誓띭ㄴ西ⓣ� 西뺖� 西쒉ㅎ西곟쩀 (西멘쪓西む쪋西�-西싟쪋西�) 西쒉ㅎ西겯� 西밝쪎...',
		noMispell		: '西듀ㅀ誓띭ㄴ西ⓣ� 西뺖� 西쒉ㅎ西곟쩀 : 西뺖쪑西� 西쀠ㅂ西� 西듀ㅀ誓띭ㄴ西ⓣ� (西멘쪓西む쪋西꿋ㅏ西귖쨽) 西ⓣㅉ誓�西� 西むㅎ西� 西쀠쨮',
		noChanges		: '西듀ㅀ誓띭ㄴ西ⓣ� 西뺖� 西쒉ㅎ西곟쩀 :西뺖쪑西� 西뜩ㄼ誓띭ㄶ 西ⓣㅉ誓�西� 西оㄶ西꿋ㅎ 西쀠ㄿ西�',
		oneChange		: '西듀ㅀ誓띭ㄴ西ⓣ� 西뺖� 西쒉ㅎ西곟쩀 : 西뤲쨻 西뜩ㄼ誓띭ㄶ 西оㄶ西꿋ㅎ 西쀠ㄿ西�',
		manyChanges		: '西듀ㅀ誓띭ㄴ西ⓣ� 西뺖� 西쒉ㅎ西곟쩀 : %1 西뜩ㄼ誓띭ㄶ 西оㄶ西꿋쪍 西쀠ㄿ誓�',
		ieSpellDownload	: '西멘쪓西む쪋西�-西싟쪋西뺖ㅀ 西뉋ㄸ誓띭ㅈ誓띭쩅西약ㅂ 西ⓣㅉ誓�西� 西뺖ㅏ西�西� 西쀠ㄿ西� 西밝쪎誓� 西뺖쪓西�西� 西녱ㄺ 西뉋ㅈ誓� 西□ㅎ西됢ㄸ西꿋쪑西� 西뺖ㅀ西ⓣㅎ 西싟ㅎ西밝쪍西귖쨽誓�?'
	},

	smiley :
	{
		toolbar	: '西멘쪓西�西약쨭西꿋�',
		title	: '西멘쪓西�西약쨭西꿋� 西뉋ㄸ誓띭ㅈ西겯쪓西� 西뺖ㅀ誓뉋쨧',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '西끶쨧西뺖�西� 西멘쪈西싟�',
	bulletedlist	: '西о쪇西꿋쪋西� 西멘쪈西싟�',
	indent			: '西뉋ㄸ誓띭ㄱ誓끶ㄸ誓띭쩅 西о쪤西약ㄿ誓뉋쨧',
	outdent			: '西뉋ㄸ誓띭ㄱ誓끶ㄸ誓띭쩅 西뺖ㄾ 西뺖ㅀ誓뉋쨧',

	justify :
	{
		left	: '西оㅎ西�誓�西� 西ㅰㅀ西�',
		center	: '西о�西� 西�誓뉋쨧',
		right	: '西╆ㅎ西�誓�西� 西ㅰㅀ西�',
		block	: '西о쪓西꿋쪏西� 西쒉ㅈ誓띭쩅誓�誓왽ㅎ西�'
	},

	blockquote : '西о쪓西꿋쪏西�-西뺖쪑西�',

	clipboard :
	{
		title		: '西む쪍西멘쪓西�',
		cutError	: '西녱ㄺ西뺖쪍 西о쪓西겯ㅎ西됢쪢西� 西뺖� 西멘쪇西겯쨻誓띭ㅇ西� 西멘쪋西잀ㅏ西ⓣ쪓西쀠쪓西� 西ⓣ쪍 西뺖쩅 西뺖ㅀ西ⓣ쪍 西뺖� 西끶ㄸ誓곟ㄾ西ㅰㅏ 西ⓣㅉ誓�西� 西む쪓西겯ㄶ西약ㄸ 西뺖� 西밝쪎誓� (Ctrl/Cmd+X) 西뺖ㅎ 西む쪓西겯ㄿ誓뗠쨽 西뺖ㅀ誓뉋쨧誓�',
		copyError	: '西녱ㄺ西뺖쪍 西о쪓西겯ㅎ西녱쨯誓쎹ㅀ 西뺖� 西멘쪇西겯쨻誓띭ㅇ西� 西멘쪋西잀ㅏ西ⓣ쪓西쀠쪓西� 西ⓣ쪍 西뺖쪏西む� 西뺖ㅀ西ⓣ쪍 西뺖� 西끶ㄸ誓곟ㄾ西ㅰㅏ 西ⓣㅉ誓�西� 西む쪓西겯ㄶ西약ㄸ 西뺖� 西밝쪎誓� (Ctrl/Cmd+C) 西뺖ㅎ 西む쪓西겯ㄿ誓뗠쨽 西뺖ㅀ誓뉋쨧誓�',
		pasteMsg	: 'Ctrl/Cmd+V 西뺖ㅎ 西む쪓西겯ㄿ誓뗠쨽 西뺖ㅀ西뺖쪍 西む쪍西멘쪓西� 西뺖ㅀ誓뉋쨧 西붲ㅀ 西졷�西� 西밝쪎 西뺖ㅀ誓뉋쨧.',
		securityMsg	: '西녱ㄺ西뺖쪍 西о쪓西겯ㅎ西됢쪢西� 西뺖� 西멘쪇西겯쨻誓띭ㅇ西� 西녱ㄺ西뺖쪍 西о쪓西겯ㅎ西됢쪢西� 西뺖� 西멘쪇西캩西� 西멘쪎西잀ㅏ西귖쨽 西뺖쪍 西뺖ㅎ西겯ㄳ, 西뤲ㄱ西욈쩅西� 西녱ㄺ西뺖쪍 西뺖쪓西꿋ㅏ西むㄼ誓뗠ㅀ誓띭ㄱ 西□쪍西잀ㅎ 西뺖쪑 西ⓣㅉ誓�西� 西むㅎ 西멘쨻西ㅰㅎ 西밝쪎. 西녱ㄺ西뺖쪑 西됢ㅈ誓� 西뉋ㅈ 西듀ㅏ西ⓣ쪓西□쪑 西�誓뉋쨧 西╆쪑西оㅎ西겯ㅎ 西む쪍西멘쪓西� 西뺖ㅀ西ⓣㅎ 西밝쪑西쀠ㅎ.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: '西む쪍西멘쪓西� (西듀ㅀ誓띭ㄱ 西멘쪍)',
		title			: '西む쪍西멘쪓西� (西듀ㅀ誓띭ㄱ 西멘쪍)',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '西む쪍西멘쪓西� (西멘ㅎ西╆ㅎ 西잀쪋西뺖쪓西멘쪓西�)',
		title	: '西む쪍西멘쪓西� (西멘ㅎ西╆ㅎ 西잀쪋西뺖쪓西멘쪓西�)'
	},

	templates :
	{
		button			: '西잀쪋西�誓띭ㄺ誓띭ㅂ誓뉋쩅',
		title			: '西뺖ㄸ誓띭쩅誓뉋ㄸ誓띭쩅 西잀쪋西�誓띭ㄺ誓띭ㅂ誓뉋쩅',
		options : 'Template Options', // MISSING
		insertOption	: '西�誓귖ㅂ 西뜩ㄼ誓띭ㄶ誓뗠쨧 西뺖쪑 西оㄶ西꿋쪍西�',
		selectPromptMsg	: '西띭ㄱ西욈쩅西� 西�誓뉋쨧 西볙ㄺ西� 西뺖ㅀ西ⓣ쪍 西밝쪍西ㅰ쪇 西잀쪋西�誓띭ㄺ誓띭ㅂ誓뉋쩅 西싟쪇西ⓣ쪍西�(西듀ㅀ誓띭ㄴ西�西약ㄸ 西뺖ㄸ誓띭쩅誓끶ㄸ誓띭쩅 西멘쪍西� 西ⓣㅉ誓�西� 西밝쪑西귖쨽誓�):',
		emptyListMsg	: '(西뺖쪑西� 西잀쪋西�誓띭ㄺ誓띭ㅂ誓뉋쩅 西□ㅏ誓왽ㅎ西뉋ㄸ 西ⓣㅉ誓�西� 西뺖ㅏ西�西� 西쀠ㄿ西� 西밝쪎)'
	},

	showBlocks : '西о쪓西꿋쪏西� 西╆ㅏ西뽤ㅎ西�誓뉋쨧',

	stylesCombo :
	{
		label		: '西멘쪓西잀ㅎ西뉋ㅂ',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '誓왽쪏西겯쪓西�誓댽쩅',
		panelTitle	: '誓왽쪏西겯쪓西�誓댽쩅',

		tag_p		: '西멘ㅎ西㏅ㅎ西겯ㄳ',
		tag_pre		: '誓왽쪏西겯쪓西�誓댽쩅誓끶ㄱ',
		tag_address	: '西むㄴ西�',
		tag_h1		: '西뜩�西겯쪓西룅쨻 1',
		tag_h2		: '西뜩�西겯쪓西룅쨻 2',
		tag_h3		: '西뜩�西겯쪓西룅쨻 3',
		tag_h4		: '西뜩�西겯쪓西룅쨻 4',
		tag_h5		: '西뜩�西겯쪓西룅쨻 5',
		tag_h6		: '西뜩�西겯쪓西룅쨻 6',
		tag_div		: '西뜩�西겯쪓西룅쨻 (DIV)'
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
		label		: '誓왽쪏西ⓣ쪓西�',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: '誓왽쪏西ⓣ쪓西�'
	},

	fontSize :
	{
		label		: '西멘ㅎ西뉋쪢',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: '西멘ㅎ西뉋쪢'
	},

	colorButton :
	{
		textColorTitle	: '西잀쪍西뺖쪓西멘쪓西� 西겯쨧西�',
		bgColorTitle	: '西о쪎西뺖쪓西쀠쪓西겯ㅎ西됢ㄸ誓띭ㄱ 西겯쨧西�',
		panelTitle		: 'Colors', // MISSING
		auto			: '西멘쪓西듀쩀西약ㅂ西욈ㄴ',
		more			: '西붲ㅀ 西겯쨧西�...'
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
		noSuggestions	: '西뺖쪑西� 西멘쪇西앧ㅎ西� 西ⓣㅉ誓�西�',
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

	maximize : '西�誓뉋쨻誓띭ㅈ西욈ㄾ西약쨮西쒉ㅌ',
	minimize : '西�西욈ㄸ西욈ㄾ西약쨮誓�',

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
		label : '西□쪏西뺖쪓西�誓귖ㄾ誓끶ㄸ誓띭쩅 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		title : '西□쪏西뺖쪓西�誓귖ㄾ誓끶ㄸ誓띭쩅 西む쪓西겯쪏西むㅀ誓띭쩅誓�誓�',
		design : 'Design', // MISSING
		meta : '西�誓끶쩅西약ㄱ誓뉋쩅西�',
		chooseColor : 'Choose', // MISSING
		other : '<西끶ㄸ誓띭ㄿ>',
		docTitle :	'西む쪍西� 西뜩�西겯쪓西룅쨻',
		charset : 	'西뺖ㅀ誓뉋쨻誓띭쩅西� 西멘쪋西� 西띭ㄸ誓띭쨻誓뗠ㄱ西욈쨧西�',
		charsetOther : '西끶ㄸ誓띭ㄿ 西뺖ㅀ誓뉋쨻誓띭쩅西� 西멘쪋西� 西띭ㄸ誓띭쨻誓뗠ㄱ西욈쨧西�',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : '西�西㏅쪓西� 西�誓귖ㅀ誓뗠ㄺ誓�西� (Central European)',
		charsetCT : '西싟�西ⓣ� (Chinese Traditional Big5)',
		charsetCR : '西멘ㅏ西겯�西꿋ㅏ西� (Cyrillic)',
		charsetGR : '西�西듀ㄸ (Greek)',
		charsetJP : '西쒉ㅎ西むㅎ西ⓣ� (Japanese)',
		charsetKR : '西뺖쪑西겯�西�西� (Korean)',
		charsetTR : '西ㅰ쪇西겯쪓西뺖� (Turkish)',
		charsetUN : '西�誓귖ㄸ誓�西뺖쪑西� (UTF-8)',
		charsetWE : '西むㅆ誓띭쩀西욈ㄾ 西�誓귖ㅀ誓뗠ㄺ誓�西� (Western European)',
		docType : '西□쪏西뺖쪓西�誓귖ㄾ誓끶ㄸ誓띭쩅 西む쪓西겯쨻西약ㅀ 西뜩�西겯쪓西룅쨻',
		docTypeOther : '西끶ㄸ誓띭ㄿ 西□쪏西뺖쪓西�誓귖ㄾ誓끶ㄸ誓띭쩅 西む쪓西겯쨻西약ㅀ 西뜩�西겯쪓西룅쨻',
		xhtmlDec : 'XHTML 西멘쪈西싟ㄸ西� 西멘ㄾ誓띭ㄾ西욈ㅂ西욈ㄴ 西뺖ㅀ誓뉋쨧',
		bgColor : '西о쪎西뺖쪓西쀠쪓西겯ㅎ西됢ㄸ誓띭ㄱ 西겯쨧西�',
		bgImage : '西о쪎西뺖쪓西쀠쪓西겯ㅎ西됢ㄸ誓띭ㄱ 西ㅰㅈ誓띭ㅅ誓�西� URL',
		bgFixed : '西멘쪓西뺖쪓西겯쪏西� 西� 西뺖ㅀ西ⓣ쪍 西듀ㅎ西꿋ㅎ 西о쪎西뺖쪓西쀠쪓西겯ㅎ西됢ㄸ誓띭ㄱ',
		txtColor : '西잀쪍西뺖쪓西멘쪓西� 西겯쨧西�',
		margin : '西む쪍西� 西�西약ㅀ誓띭쩂西욈ㄸ',
		marginTop : '西듺ㄺ西�',
		marginLeft : '西оㅎ西�誓뉋쨧',
		marginRight : '西╆ㅎ西�誓뉋쨧',
		marginBottom : '西ⓣ�西싟쪍',
		metaKeywords : '西□쪏西뺖쪓西�誓곟ㄾ誓끶ㄸ誓띭쩅 西뉋ㄸ誓띭ㄱ誓뉋쨻誓띭ㅈ 西멘쨧西뺖쪍西ㅰㅆ西о쪓西� (西끶ㅂ誓띭ㄺ西듀ㅏ西겯ㅎ西� 西멘쪍 西끶ㅂ西� 西뺖ㅀ誓뉋쨧)',
		metaDescription : '西□쪏西뺖쪓西�誓귖ㄾ誓끶ㄸ誓띭쩅 西뺖ㅀ誓끶쨻誓띭쩅西겯ㄸ',
		metaAuthor : '西꿋쪍西뽤쨻',
		metaCopyright : '西뺖쪏西む�西겯ㅎ西뉋쩅',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
