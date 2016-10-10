/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Thai language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['th'] =
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
	source			: '錫붲많錫｀릊錫긍릉 HTML',
	newPage			: '錫む르仙됢림錫뉋릊錫쇸퉱錫꿋�錫�錫곟릉錫꿋르仙꺺릊錫□퉰',
	save			: '錫싟릴錫쇸툠錫뜩툈',
	preview			: '錫붲많錫ム툢仙됢림仙�錫�錫곟릉錫꿋르錫뺖릴錫㏅릎錫№퉰錫꿋툏',
	cut				: '錫뺖릴錫�',
	copy			: '錫む립仙�錫쇸림',
	paste			: '錫㏅림錫�',
	print			: '錫む릴仙댽툏錫왽릿錫□툧仙�',
	underline		: '錫뺖릴錫㏅툊錫듀툝仙�錫む퉱錫쇸퉫錫뺖퉱',
	bold			: '錫뺖릴錫㏅릊錫쇸림',
	italic			: '錫뺖릴錫㏅�錫�錫듀륭錫�',
	selectAll		: '仙�錫�錫룅릎錫곟툠錫긍퉱錫뉋릊錫□툝',
	removeFormat	: '錫�仙됢림錫뉋르錫밝툤仙곟툣錫�',
	strike			: '錫뺖릴錫㏅툊錫듀툝仙�錫む퉱錫쇸툠錫긍툣',
	subscript		: '錫뺖릴錫㏅릊仙됢릎錫�',
	superscript		: '錫뺖릴錫㏅륭錫�',
	horizontalrule	: '仙곟툠錫｀툈仙�錫む퉱錫쇸툌錫긍퉰錫쇸툣錫｀르錫쀠릴錫�',
	pagebreak		: '仙곟툠錫｀툈錫뺖릴錫㏅퉩錫싟퉰錫뉋릊錫쇸퉱錫� Page Break',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '錫�錫� 錫�錫닮툏錫꾝퉴',
	undo			: '錫№툈仙�錫�錫닮툈錫꾝립錫む릴仙댽툏',
	redo			: '錫쀠립錫뗠퉱錫녀툌錫녀릉錫긍퉰錫�',

	// Common messages and labels.
	common :
	{
		browseServer	: '仙�錫쎹릿錫붲릊錫쇸퉱錫꿋툞仙댽림錫뉋툑錫긍툝錫곟림錫｀퉬錫잀른仙뚟릎錫긍툧仙귖릊錫�錫�',
		url				: '錫쀠링仙댽릎錫№많仙댽릎仙됢림錫뉋릎錫닮툏 URL',
		protocol		: '仙귖툤錫｀퉪錫뺖툌錫�錫�',
		upload			: '錫�錫긍툧仙귖릊錫�錫붲퉬錫잀른仙�',
		uploadSubmit	: '錫�錫긍툧仙귖릊錫�錫붲퉬錫잀른仙뚟퉬錫쎹�錫곟퉯錫싟퉬錫㏅퉱錫쀠링仙댽�錫꾝르錫룅퉰錫�錫뉋퉩錫□퉰錫귖퉰錫꿋륭 (仙�錫뗠릿錫｀퉴錫잀�錫㏅릎錫｀퉴)',
		image			: '錫｀많錫쎹툩錫꿋툧',
		flash			: '仙꾝툨錫�仙� Flash',
		form			: '仙곟툣錫싟툨錫�錫｀퉴錫�',
		checkbox		: '仙�錫듺퉯錫꾝툣仙듺릎錫�',
		radio			: '仙�錫｀툝錫닮퉪錫�錫싟릴錫뺖툞錫�錫�',
		textField		: '仙�錫쀠퉯錫곟툔仙뚟툨錫닮른錫붲퉴',
		textarea		: '仙�錫쀠퉯錫곟툔仙뚟퉩錫�仙�錫｀링錫�',
		hiddenField		: '錫�錫닮툝仙�錫붲툢錫잀릿錫�錫붲퉴',
		button			: '錫쎹만仙댽륫',
		select			: '仙곟툟錫싟툞錫긍름仙�錫�錫룅릎錫�',
		imageButton		: '錫쎹만仙댽륫仙곟툣錫싟르錫밝툤錫졷림錫�',
		notSet			: '<仙꾝륫仙댽르錫겯툣錫�>',
		id				: '仙꾝릎錫붲링',
		name			: '錫듺막仙댽릎',
		langDir			: '錫곟림錫｀�錫귖링錫№툢-錫�仙댽림錫쇸툩錫꿋릇錫�',
		langDirLtr		: '錫댽림錫곟툔仙됢림錫№퉬錫쎹툊錫㏅림 (LTR)',
		langDirRtl		: '錫댽림錫곟툊錫㏅림錫□림錫뗠퉱錫꿋륭 (RTL)',
		langCode		: '錫｀릊錫긍릉錫졷림錫⒯림',
		longDescr		: '錫꾝립錫�錫섁릿錫싟림錫№툤錫｀린錫곟릎錫� URL',
		cssClass		: '錫꾝른錫꿋릉錫귖릎錫뉋퉬錫잀른仙뚟툈錫녀릊錫쇸툝錫�錫긍툈錫⒯툜錫겯툈錫꿋르仙곟릉錫붲툏錫쒉른',
		advisoryTitle	: '錫꾝립仙�錫곟르錫닮퉰錫쇸툢錫�',
		cssStyle		: '錫�錫긍툈錫⒯툜錫겯툈錫꿋르仙곟릉錫붲툏錫쒉른',
		ok				: '錫뺖툈錫�錫�',
		cancel			: '錫№툈仙�錫�錫닮툈',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'General', // MISSING
		advancedTab		: '錫귖릴仙됢툢錫む많錫�',
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
		width			: '錫꾝름錫꿋륫錫곟름仙됢림錫�',
		height			: '錫꾝름錫꿋륫錫む많錫�',
		align			: '錫곟림錫｀툑錫긍툝錫㏅림錫�',
		alignLeft		: '錫듺릿錫붲툔仙됢림錫�',
		alignRight		: '錫듺릿錫붲툊錫㏅림',
		alignCenter		: '錫곟마仙댽툏錫곟른錫꿋툏',
		alignTop		: '錫싟툢錫む만錫�',
		alignMiddle		: '錫곟마仙댽툏錫곟른錫꿋툏仙곟툢錫㏅툞錫긍퉱錫�',
		alignBottom		: '錫듺릿錫붲툝仙됢림錫쇸른仙댽림錫�',
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
		toolbar		: '仙곟툠錫｀툈錫뺖릴錫㏅릎錫긍툈錫⒯르錫왽릿仙�錫ⓣ릇',
		title		: '仙곟툠錫｀툈錫뺖릴錫㏅릎錫긍툈錫⒯르錫왽릿仙�錫ⓣ릇',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '仙곟툠錫｀툈/仙곟툈仙됢퉬錫� 錫�錫닮툏錫꾝퉴',
		other 		: '<錫�錫룅퉰錫� 仙�>',
		menu		: '仙곟툈仙됢퉬錫� 錫�錫닮툏錫꾝퉴',
		title		: '錫�錫닮툏錫꾝퉴仙�錫듺막仙댽릎錫□퉪錫№툏仙�錫㏅퉯錫� 錫�錫듀�錫□른仙� 錫｀많錫쎹툩錫꿋툧 錫ム르錫룅릎仙꾝툨錫�仙뚟릎錫룅퉰錫쇸퉮',
		info		: '錫｀림錫№른錫겯�錫�錫듀륭錫�',
		target		: '錫곟림錫｀�錫쎹릿錫붲릊錫쇸퉱錫꿋른錫닮툏錫꾝퉴',
		upload		: '錫�錫긍툧仙귖릊錫�錫붲퉬錫잀른仙�',
		advanced	: '錫귖릴仙됢툢錫む많錫�',
		type		: '錫쎹르錫겯�錫졷툠錫귖릎錫뉋른錫닮툏錫꾝퉴',
		toUrl		: 'URL', // MISSING
		toAnchor	: '錫댽만錫붲�錫듺막仙댽릎錫□퉪錫№툏 (Anchor)',
		toEmail		: '錫む퉰錫뉋릎錫듀�錫□른仙� (E-Mail)',
		targetFrame		: '<仙�錫쎹릿錫붲퉫錫쇸�錫잀르錫�>',
		targetPopup		: '<仙�錫쎹릿錫붲릊錫쇸퉱錫꿋툑錫�仙�錫�仙뉋툈 (Pop-up)>',
		targetFrameName	: '錫듺막仙댽릎錫쀠림錫｀퉴仙�錫곟퉯錫뺖�錫잀르錫�',
		targetPopupName	: '錫｀린錫싟만錫듺막仙댽릎錫ム툢仙됢림錫댽릎仙�錫�仙뉋툈 (Pop-up)',
		popupFeatures	: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫뉋릊錫쇸퉱錫꿋툑錫�仙�錫�仙뉋툈 (Pop-up)',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '仙곟릉錫붲툏仙곟툟錫싟릉錫뽤림錫쇸린',
		popupLocationBar: '仙곟릉錫붲툏錫쀠링仙댽릎錫№많仙댽툊錫�錫뉋퉬錫잀른仙�',
		popupToolbar	: '仙곟릉錫붲툏仙곟툟錫싟�錫꾝르錫룅퉰錫�錫뉋륫錫룅릎',
		popupMenuBar	: '仙곟릉錫붲툏仙곟툟錫싟�錫□툢錫�',
		popupFullScreen	: '仙곟릉錫붲툏仙�錫뺖퉯錫□릊錫쇸퉱錫꿋툑錫� (IE5.5++ 仙�錫쀠퉰錫꿋툢錫긍퉱錫�)',
		popupScrollBars	: '仙곟릉錫붲툏仙곟툟錫싟�錫�錫룅퉰錫�錫�',
		popupDependent	: '仙곟릉錫붲툏仙�錫뺖퉯錫□릊錫쇸퉱錫꿋툑錫� (Netscape)',
		popupLeft		: '錫왽릿錫곟릴錫붲툔仙됢림錫� (Left Position)',
		popupTop		: '錫왽릿錫곟릴錫붲툣錫� (Top Position)',
		id				: 'Id', // MISSING
		langDir			: '錫곟림錫｀�錫귖링錫№툢-錫�仙댽림錫쇸툩錫꿋릇錫�',
		langDirLTR		: '錫댽림錫곟툔仙됢림錫№퉬錫쎹툊錫㏅림 (LTR)',
		langDirRTL		: '錫댽림錫곟툊錫㏅림錫□림錫뗠퉱錫꿋륭 (RTL)',
		acccessKey		: '仙곟릎錫꾝�錫뗠릉 錫꾝링錫№퉴',
		name			: '錫듺막仙댽릎',
		langCode			: '錫곟림錫｀�錫귖링錫№툢-錫�仙댽림錫쇸툩錫꿋릇錫�',
		tabIndex			: '錫�錫녀툝錫긍툣錫귖릎錫� 仙곟툠仙뉋툣',
		advisoryTitle		: '錫꾝립仙�錫곟르錫닮퉰錫쇸툢錫�',
		advisoryContentType	: '錫듺툢錫닮툝錫귖릎錫뉋툌錫녀�錫곟르錫닮퉰錫쇸툢錫�',
		cssClasses		: '錫꾝른錫꿋릉錫귖릎錫뉋퉬錫잀른仙뚟툈錫녀릊錫쇸툝錫�錫긍툈錫⒯툜錫겯툈錫꿋르仙곟릉錫붲툏錫쒉른',
		charset			: '錫�錫닮툏錫꾝퉴仙�錫듺막仙댽릎錫□퉪錫№툏仙꾝툤錫№릴錫뉋툓錫멘툝錫뺖릴錫㏅릎錫긍툈錫⒯르',
		styles			: '錫�錫긍툈錫⒯툜錫겯툈錫꿋르仙곟릉錫붲툏錫쒉른',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '錫｀린錫싟만錫귖퉱錫�錫□많錫�錫귖릎錫뉋툑錫멘툝仙�錫듺막仙댽릎錫□퉪錫№툏 (Anchor)',
		anchorName		: '錫듺막仙댽릎',
		anchorId			: '仙꾝릎錫붲링',
		emailAddress		: '錫�錫듀�錫□른仙� (E-Mail)',
		emailSubject		: '錫ム릴錫㏅�錫｀막仙댽릎錫�',
		emailBody		: '錫귖퉱錫�錫꾝름錫꿋륫',
		noAnchors		: '(錫№릴錫뉋퉬錫□퉰錫□링錫댽만錫붲�錫듺막仙댽릎錫□퉪錫№툏錫졷림錫№퉫錫쇸릊錫쇸퉱錫꿋�錫�錫곟릉錫꿋르錫쇸링仙�)',
		noUrl			: '錫곟르錫멘툜錫꿋르錫겯툣錫멘툠錫듀퉰錫�錫№많仙댽릎仙됢림錫뉋릎錫닮툏錫�錫�錫쇸퉬錫�錫쇸퉴 (URL)',
		noEmail			: '錫곟르錫멘툜錫꿋르錫겯툣錫멘릎錫듀�錫□른仙� (E-mail)'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '仙곟툠錫｀툈/仙곟툈仙됢퉬錫� Anchor',
		menu		: '錫｀림錫№른錫겯�錫�錫듀륭錫� Anchor',
		title		: '錫｀림錫№른錫겯�錫�錫듀륭錫� Anchor',
		name		: '錫듺막仙댽릎 Anchor',
		errorName	: '錫곟르錫멘툜錫꿋르錫겯툣錫멘툓錫룅퉰錫�錫귖릎錫� Anchor',
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
		find				: '錫꾝퉱錫쇸릊錫�',
		replace				: '錫꾝퉱錫쇸릊錫꿋퉩錫�錫겯퉩錫쀠툢錫쀠링仙�',
		findWhat			: '錫꾝퉱錫쇸릊錫꿋툌錫녀름仙댽림:',
		replaceWith			: '仙곟툠錫쇸툠錫듀퉰錫붲퉱錫㏅륭:',
		notFoundMsg			: '仙꾝륫仙댽툧錫싟툌錫녀툠錫듀퉰錫꾝퉱錫쇸릊錫�.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '錫뺖릴錫㏅퉪錫ム툖仙�-仙�錫�仙뉋툈 錫뺖퉱錫�錫뉋툞錫｀툏錫곟릴錫�',
		matchWord			: '錫뺖퉱錫�錫뉋툞錫｀툏錫곟릴錫쇸툠錫멘툈錫꾝립',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '仙곟툠錫쇸툠錫듀퉰錫쀠릴仙됢툏錫ム륫錫붲툠錫듀퉰錫왽툣',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '錫뺖림錫｀림錫�',
		title		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 錫뺖림錫｀림錫�',
		menu		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 錫뺖림錫｀림錫�',
		deleteTable	: '錫�錫싟툞錫꿋르錫꿋툏',
		rows		: '仙곟툟錫�',
		columns		: '錫む툝錫□툢仙�',
		border		: '錫귖툢錫꿋툝仙�錫む퉱錫쇸툊錫�錫�',
		widthPx		: '錫댽만錫붲릉錫�',
		widthPc		: '仙�錫쎹릎錫｀퉴仙�錫뗠퉯錫�',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '錫｀린錫№린仙곟툢錫㏅툢錫�錫쇸툢',
		cellPad		: '錫｀린錫№린仙곟툢錫㏅툞錫긍퉱錫�',
		caption		: '錫ム릴錫㏅�錫｀막仙댽릎錫뉋툊錫�錫뉋툞錫꿋르錫꿋툏',
		summary		: '錫む르錫멘툤錫꾝름錫꿋륫',
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
			menu			: '錫듺퉰錫�錫뉋툞錫꿋르錫꿋툏',
			insertBefore	: 'Insert Cell Before', // MISSING
			insertAfter		: 'Insert Cell After', // MISSING
			deleteCell		: '錫�錫싟툓仙댽릎錫�',
			merge			: '錫쒉릉錫꿋툢錫듺퉰錫�錫�',
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
			menu			: '仙곟툟錫�',
			insertBefore	: 'Insert Row Before', // MISSING
			insertAfter		: 'Insert Row After', // MISSING
			deleteRow		: '錫�錫싟퉩錫뽤름'
		},

		column :
		{
			menu			: '錫꾝릎錫�錫긍륫錫쇸퉴',
			insertBefore	: 'Insert Column Before', // MISSING
			insertAfter		: 'Insert Column After', // MISSING
			deleteColumn	: '錫�錫싟릉錫붲륫錫쇸퉴'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '錫｀림錫№른錫겯�錫�錫듀륭錫붲툊錫�錫� 錫쎹만仙댽륫',
		text		: '錫귖퉱錫�錫꾝름錫꿋륫 (錫꾝퉰錫꿋툞錫긍름仙곟툤錫�)',
		type		: '錫귖퉱錫�錫꾝름錫꿋륫',
		typeBtn		: 'Button',
		typeSbm		: 'Submit',
		typeRst		: 'Reset'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 仙�錫듺퉯錫꾝툣仙듺릎錫�',
		radioTitle	: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 仙�錫｀툝錫닮퉪錫�錫싟릴錫뺖툞錫�錫�',
		value		: '錫꾝퉰錫꿋툞錫긍름仙곟툤錫�',
		selected	: '仙�錫�錫룅릎錫곟�錫쎹퉯錫쇸툌仙댽림仙�錫｀릿仙댽륫錫뺖퉱錫�'
	},

	// Form Dialog.
	form :
	{
		title		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 仙곟툣錫싟툨錫�錫｀퉴錫�',
		menu		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 仙곟툣錫싟툨錫�錫｀퉴錫�',
		action		: '仙곟릎錫꾝툓錫긍퉰錫�',
		method		: '仙�錫□툡錫�錫�',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 仙곟툟錫싟툞錫긍름仙�錫�錫룅릎錫�',
		selectInfo	: '錫�錫닮툢仙귖툨',
		opAvail		: '錫｀림錫№툈錫꿋르錫뺖릴錫㏅�錫�錫룅릎錫�',
		value		: '錫꾝퉰錫꿋툞錫긍름仙곟툤錫�',
		size		: '錫귖툢錫꿋툝',
		lines		: '錫싟르錫｀툠錫긍툝',
		chkMulti	: '仙�錫�錫룅릎錫곟릊錫�錫꿋륭錫꾝퉰錫꿋퉬錫붲퉱',
		opText		: '錫귖퉱錫�錫꾝름錫꿋륫',
		opValue		: '錫꾝퉰錫꿋툞錫긍름仙곟툤錫�',
		btnAdd		: '仙�錫왽릿仙댽륫',
		btnModify	: '仙곟툈仙됢퉬錫�',
		btnUp		: '錫싟툢',
		btnDown		: '錫�仙댽림錫�',
		btnSetValue : '仙�錫�錫룅릎錫곟�錫쎹퉯錫쇸툌仙댽림仙�錫｀릿仙댽륫錫뺖퉱錫�',
		btnDelete	: '錫�錫�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 仙�錫쀠퉯錫곟퉩錫�仙�錫｀링錫�',
		cols		: '錫む툝錫□툩仙�',
		rows		: '仙곟툟錫�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 仙�錫쀠퉯錫곟툔仙뚟툨錫닮른錫붲퉴',
		name		: '錫듺막仙댽릎',
		value		: '錫꾝퉰錫꿋툞錫긍름仙곟툤錫�',
		charWidth	: '錫꾝름錫꿋륫錫곟름仙됢림錫�',
		maxChars	: '錫댽립錫쇸름錫쇸툞錫긍름錫�錫긍툈錫⒯르錫む많錫뉋릉錫멘툝',
		type		: '錫듺툢錫닮툝',
		typeText	: '錫귖퉱錫�錫꾝름錫꿋륫',
		typePass	: '錫｀릊錫긍릉錫쒉퉰錫꿋툢'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 錫�錫닮툝仙�錫붲툢錫잀릿錫�錫붲퉴',
		name	: '錫듺막仙댽릎',
		value	: '錫꾝퉰錫꿋툞錫긍름仙곟툤錫�'
	},

	// Image Dialog.
	image :
	{
		title		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 錫｀많錫쎹툩錫꿋툧',
		titleButton	: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 錫쎹만仙댽륫仙곟툣錫싟르錫밝툤錫졷림錫�',
		menu		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫� 錫｀많錫쎹툩錫꿋툧',
		infoTab		: '錫귖퉱錫�錫□많錫�錫귖릎錫뉋르錫밝툤錫졷림錫�',
		btnUpload	: '錫�錫긍툧仙귖릊錫�錫붲퉬錫잀른仙뚟퉬錫쎹�錫곟퉯錫싟퉬錫㏅퉱錫쀠링仙댽�錫꾝르錫룅퉰錫�錫뉋퉩錫□퉰錫귖퉰錫꿋륭 (仙�錫뗠릿錫｀퉴錫잀�錫㏅릎錫｀퉴)',
		upload		: '錫�錫긍툧仙귖릊錫�錫붲퉬錫잀른仙�',
		alt			: '錫꾝립錫쎹르錫겯툈錫�錫싟르錫밝툤錫졷림錫�',
		lockRatio	: '錫곟립錫ム툢錫붲릎錫긍툞錫｀림錫む퉰錫㏅툢 錫곟름仙됢림錫�-錫む많錫� 仙곟툣錫싟툌錫뉋툠錫듀퉰',
		resetSize	: '錫곟립錫ム툢錫붲르錫밝툤仙�錫쀠퉰錫꿋툊錫쇸림錫붲툑錫｀릿錫�',
		border		: '錫귖툢錫꿋툝錫귖릎錫싟르錫밝툤',
		hSpace		: '錫｀린錫№린仙곟툢錫㏅툢錫�錫�',
		vSpace		: '錫｀린錫№린仙곟툢錫㏅툞錫긍퉱錫�',
		alertUrl	: '錫곟르錫멘툜錫꿋르錫겯툣錫멘툠錫듀퉰錫�錫№많仙댽릎仙됢림錫뉋릎錫닮툏錫�錫�錫쇸퉬錫�錫쇸퉴錫귖릎錫뉋퉬錫잀른仙뚟르錫밝툤錫졷림錫� (URL)',
		linkTab		: '錫�錫닮퉱錫뉋툌仙�',
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
		properties		: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫뉋퉬錫잀른仙� Flash',
		propertiesTab	: 'Properties', // MISSING
		title			: '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫뉋퉬錫잀른仙� Flash',
		chkPlay			: '仙�錫�仙댽툢錫�錫긍툞仙귖툢錫□릴錫뺖릿 Auto Play',
		chkLoop			: '仙�錫�仙댽툢錫㏅툢錫｀릎錫� Loop',
		chkMenu			: '仙꺺릊仙됢퉫錫듺퉱錫뉋림錫쇸�錫□툢錫밝툊錫�錫� Flash',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '錫�錫긍툞錫｀림錫む퉰錫㏅툢 Scale',
		scaleAll		: '仙곟릉錫붲툏仙꺺릊仙됢�錫ム퉯錫쇸툠錫긍퉱錫뉋릊錫□툝 Show all',
		scaleNoBorder	: '仙꾝륫仙댽퉩錫む툝錫뉋�錫む퉱錫쇸툊錫�錫� No Border',
		scaleFit		: '仙곟릉錫붲툏仙꺺릊仙됢툧錫�錫붲링錫곟릴錫싟툧錫룅퉱錫쇸툠錫듀퉰 Exact Fit',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: '錫듺릿錫붲툝仙됢림錫쇸른仙댽림錫뉋릉錫멘툝',
		alignAbsMiddle	: '錫곟마仙댽툏錫곟른錫꿋툏',
		alignBaseline	: '錫듺릿錫붲툣錫｀르錫쀠릴錫�',
		alignTextTop	: '仙꺺툞仙됢툞錫긍름錫�錫긍툈錫⒯르',
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
		bgcolor			: '錫む링錫왽막仙됢툢錫ム른錫긍툏',
		hSpace			: '錫｀린錫№린仙곟툢錫㏅툢錫�錫�',
		vSpace			: '錫｀린錫№린仙곟툢錫㏅툞錫긍퉱錫�',
		validateSrc		: '錫곟르錫멘툜錫꿋르錫겯툣錫멘툠錫듀퉰錫�錫№많仙댽릎仙됢림錫뉋릎錫닮툏錫�錫�錫쇸퉬錫�錫쇸퉴 (URL)',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '錫뺖르錫㏅툑錫곟림錫｀릉錫겯툈錫붲툌錫�',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '仙꾝륫仙댽툧錫싟퉫錫쇸툝錫닮툈錫듺릴錫쇸툢錫꿋르錫�',
		changeTo		: '仙곟툈仙됢퉬錫귖�錫쎹퉯錫�',
		btnIgnore		: '錫№툈仙�錫㏅퉱錫�',
		btnIgnoreAll	: '錫№툈仙�錫㏅퉱錫쇸툠錫긍퉱錫뉋릊錫□툝',
		btnReplace		: '仙곟툠錫쇸툠錫듀퉰',
		btnReplaceAll	: '仙곟툠錫쇸툠錫듀퉰錫쀠릴仙됢툏錫ム륫錫�',
		btnUndo			: '錫№툈仙�錫�錫닮툈',
		noSuggestions	: '- 仙꾝륫仙댽륫錫듀툌錫녀퉩錫쇸린錫쇸립仙꺺툝仙� -',
		progress		: '錫곟립錫�錫긍툏錫뺖르錫㏅툑錫む릎錫싟툌錫녀릉錫겯툈錫�...',
		noMispell		: '錫뺖르錫㏅툑錫む릎錫싟툌錫녀릉錫겯툈錫붲�錫む르仙뉋툑錫む릿仙됢툢: 仙꾝륫仙댽툧錫싟툌錫녀릉錫겯툈錫붲툥錫닮툝',
		noChanges		: '錫뺖르錫㏅툑錫む릎錫싟툌錫녀릉錫겯툈錫붲�錫む르仙뉋툑錫む릿仙됢툢: 仙꾝륫仙댽륫錫듀툈錫꿋르仙곟툈仙됢툌錫녀퉫錫붲퉮',
		oneChange		: '錫뺖르錫㏅툑錫む릎錫싟툌錫녀릉錫겯툈錫붲�錫む르仙뉋툑錫む릿仙됢툢: 仙곟툈仙됢퉬錫�1錫꾝립',
		manyChanges		: '錫뺖르錫㏅툑錫む릎錫싟툌錫녀릉錫겯툈錫붲�錫む르仙뉋툑錫む릿仙됢툢:: 仙곟툈仙됢퉬錫� %1 錫꾝립',
		ieSpellDownload	: '仙꾝륫仙댽퉬錫붲퉱錫뺖릿錫붲툞錫긍퉱錫뉋르錫겯툣錫싟툞錫｀름錫댽릉錫�錫싟툌錫녀릉錫겯툈錫�. 錫뺖퉱錫�錫뉋툈錫꿋르錫뺖릿錫붲툞錫긍퉱錫뉋퉬錫ム륫錫꾝르錫긍툣?'
	},

	smiley :
	{
		toolbar	: '錫｀많錫쎹릉錫룅퉰錫�錫�錫꿋르錫□툜仙�',
		title	: '仙곟툠錫｀툈錫む릴錫띭른錫긍툈錫⒯툜仙뚟릉錫룅퉰錫�錫�錫꿋르錫□툜仙�',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '錫�錫녀툝錫긍툣錫｀림錫№툈錫꿋르仙곟툣錫싟툞錫긍름仙�錫�錫�',
	bulletedlist	: '錫�錫녀툝錫긍툣錫｀림錫№툈錫꿋르仙곟툣錫싟릉錫긍툖錫�錫긍툈錫⒯툜仙�',
	indent			: '仙�錫왽릿仙댽륫錫｀린錫№린錫№퉰錫�錫ム툢仙됢림',
	outdent			: '錫�錫붲르錫겯륭錫겯륭仙댽릎錫ム툢仙됢림',

	justify :
	{
		left	: '錫댽릴錫붲툓錫닮툝錫뗠퉱錫꿋륭',
		center	: '錫댽릴錫붲툈錫뜩퉰錫뉋툈錫�錫꿋툏',
		right	: '錫댽릴錫붲툓錫닮툝錫귖름錫�',
		block	: '錫댽릴錫붲툧錫�錫붲링錫ム툢仙됢림錫곟르錫겯툝錫꿋릇'
	},

	blockquote : 'Block Quote', // MISSING

	clipboard :
	{
		title		: '錫㏅림錫�',
		cutError	: '仙꾝륫仙댽릉錫꿋륫錫꿋르錫뽤툞錫긍툝錫귖퉱錫�錫꾝름錫꿋륫錫쀠링仙댽�錫�錫룅릎錫곟퉬錫㏅퉱仙꾝툝仙됢�錫쇸막仙댽릎錫뉋툑錫꿋툈錫곟림錫｀툈錫녀릊錫쇸툝錫꾝퉰錫꿋르錫겯툝錫긍툣錫꾝름錫꿋륫錫쎹른錫�錫붲툩錫긍륭. 錫곟르錫멘툜錫꿋퉫錫듺퉱錫쎹만仙댽륫錫�錫긍툝仙�錫왽막仙댽릎錫㏅림錫뉋툊仙됢릎錫꾝름錫꿋륫仙곟툠錫� (錫곟툝錫쎹만仙댽륫 Ctrl/Cmd 仙곟른錫겯툞錫긍름 X 錫왽르仙됢릎錫□툈錫긍툢).',
		copyError	: '仙꾝륫仙댽릉錫꿋륫錫꿋르錫뽤릉錫녀�錫쇸림錫귖퉱錫�錫꾝름錫꿋륫錫쀠링仙댽�錫�錫룅릎錫곟퉬錫㏅퉱仙꾝툝仙됢�錫쇸막仙댽릎錫뉋툑錫꿋툈錫곟림錫｀툈錫녀릊錫쇸툝錫꾝퉰錫꿋르錫겯툝錫긍툣錫꾝름錫꿋륫錫쎹른錫�錫붲툩錫긍륭. 錫곟르錫멘툜錫꿋퉫錫듺퉱錫쎹만仙댽륫錫�錫긍툝仙�錫왽막仙댽릎錫㏅림錫뉋툊仙됢릎錫꾝름錫꿋륫仙곟툠錫� (錫곟툝錫쎹만仙댽륫 Ctrl/Cmd 仙곟른錫겯툞錫긍름 C 錫왽르仙됢릎錫□툈錫긍툢).',
		pasteMsg	: '錫곟르錫멘툜錫꿋퉫錫듺퉱錫꾝링錫№퉴錫싟릎錫｀퉴錫붲�錫쀠퉰錫꿋툢錫긍퉱錫� 仙귖툝錫№툈錫붲툤錫멘퉳錫� (<strong>Ctrl/Cmd 仙곟른錫� V</strong>)錫왽르仙됢릎錫□퉮錫곟릴錫� 仙곟른錫겯툈錫� <strong>OK</strong>.',
		securityMsg	: 'Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.', // MISSING
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: '錫㏅림錫뉋릉錫녀�錫쇸림錫댽림錫곟툞錫긍름錫�錫긍툈錫⒯르仙�錫㏅릿錫｀퉴錫�',
		title			: '錫㏅림錫뉋릉錫녀�錫쇸림錫댽림錫곟툞錫긍름錫�錫긍툈錫⒯르仙�錫㏅릿錫｀퉴錫�',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '錫㏅림錫뉋퉩錫싟툣錫뺖릴錫㏅릎錫긍툈錫⒯르錫섁르錫｀륫錫붲림',
		title	: '錫㏅림錫뉋퉩錫싟툣錫뺖릴錫㏅릎錫긍툈錫⒯르錫섁르錫｀륫錫붲림'
	},

	templates :
	{
		button			: '仙�錫쀠륫仙�錫왽른錫�',
		title			: '仙�錫쀠륫仙�錫왽른錫뺖툊錫�錫뉋릉仙댽름錫쇸�錫쇸막仙됢릎錫ム림仙�錫㏅퉯錫싟퉬錫뗠툞仙�',
		options : 'Template Options', // MISSING
		insertOption	: '仙곟툠錫쇸툠錫듀퉰仙�錫쇸막仙됢릎錫ム림仙�錫㏅퉯錫싟퉬錫뗠툞仙뚟툠錫듀퉰仙�錫�錫룅릎錫�',
		selectPromptMsg	: '錫곟르錫멘툜錫꿋�錫�錫룅릎錫� 仙�錫쀠륫仙�錫왽른錫� 仙�錫왽막仙댽릎錫쇸립仙꾝툤仙곟툈仙됢퉬錫귖퉫錫쇸릎錫듀툝錫닮툞仙�錫뺖릎錫｀퉴<br />(仙�錫쇸막仙됢릎錫ム림錫む퉰錫㏅툢錫쇸링仙됢툑錫겯릊錫꿋륭仙꾝툤):',
		emptyListMsg	: '(錫№릴錫뉋퉬錫□퉰錫□링錫곟림錫｀툈錫녀릊錫쇸툝仙�錫쀠륫仙�錫왽른錫�)'
	},

	showBlocks : 'Show Blocks', // MISSING

	stylesCombo :
	{
		label		: '錫�錫긍툈錫⒯툜錫�',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '錫｀많錫쎹퉩錫싟툣',
		panelTitle	: '錫｀많錫쎹퉩錫싟툣',

		tag_p		: 'Normal',
		tag_pre		: 'Formatted',
		tag_address	: 'Address',
		tag_h1		: 'Heading 1',
		tag_h2		: 'Heading 2',
		tag_h3		: 'Heading 3',
		tag_h4		: 'Heading 4',
		tag_h5		: 'Heading 5',
		tag_h6		: 'Heading 6',
		tag_div		: 'Paragraph (DIV)'
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
		label		: '仙곟툣錫싟릎錫긍툈錫⒯르',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: '仙곟툣錫싟릎錫긍툈錫⒯르'
	},

	fontSize :
	{
		label		: '錫귖툢錫꿋툝',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: '錫귖툢錫꿋툝'
	},

	colorButton :
	{
		textColorTitle	: '錫む링錫뺖릴錫㏅릎錫긍툈錫⒯르',
		bgColorTitle	: '錫む링錫왽막仙됢툢錫ム른錫긍툏',
		panelTitle		: 'Colors', // MISSING
		auto			: '錫む링錫�錫긍툞仙귖툢錫□릴錫뺖릿',
		more			: '仙�錫�錫룅릎錫곟릉錫듀릎錫룅퉰錫쇸퉮...'
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
		noSuggestions	: ' 仙꾝륫仙댽륫錫듀툌錫녀퉩錫쇸린錫쇸립仙꺺툝仙� ',
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
		label : '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫뉋�錫�錫곟릉錫꿋르',
		title : '錫꾝만錫볙릉錫□툣錫긍툞錫닮툊錫�錫뉋�錫�錫곟릉錫꿋르',
		design : 'Design', // MISSING
		meta : '錫귖퉱錫�錫□많錫�錫む립錫ム르錫긍툣仙�錫む릿錫｀퉴錫듺�錫�錫쇸툑錫닮퉱錫�',
		chooseColor : 'Choose', // MISSING
		other : '<錫�錫룅퉰錫� 仙�>',
		docTitle :	'錫듺막仙댽릎仙꾝툞仙�錫뺖릿仙됢른',
		charset : 	'錫듺만錫붲툞錫긍름錫�錫긍툈錫⒯르',
		charsetOther : '錫듺만錫붲툞錫긍름錫�錫긍툈錫⒯르錫�錫룅퉰錫쇸퉮',
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
		docType : '錫쎹르錫겯�錫졷툠錫귖릎錫뉋�錫�錫곟릉錫꿋르',
		docTypeOther : '錫쎹르錫겯�錫졷툠仙�錫�錫곟릉錫꿋르錫�錫룅퉰錫쇸퉮',
		xhtmlDec : '錫｀름錫□�錫�錫�  XHTML Declarations 仙꾝름仙됢툝仙됢름錫�',
		bgColor : '錫む링錫왽막仙됢툢錫ム른錫긍툏',
		bgImage : '錫쀠링仙댽릎錫№많仙댽릎仙됢림錫뉋릎錫닮툏錫�錫�錫쇸퉬錫�錫쇸퉴錫귖릎錫뉋르錫밝툤錫왽막仙됢툢錫ム른錫긍툏 (Image URL)',
		bgFixed : '錫왽막仙됢툢錫ム른錫긍툏仙곟툣錫싟퉬錫□퉰錫□링仙곟툟錫싟�錫�錫룅퉰錫�錫�',
		txtColor : '錫む링錫뺖릴錫㏅릎錫긍툈錫⒯르',
		margin : '錫｀린錫№린錫귖릎錫싟툊錫�錫뉋릊錫쇸퉱錫꿋�錫�錫곟릉錫꿋르',
		marginTop : '錫붲퉱錫꿋툢錫싟툢',
		marginLeft : '錫붲퉱錫꿋툢錫뗠퉱錫꿋륭',
		marginRight : '錫붲퉱錫꿋툢錫귖름錫�',
		marginBottom : '錫붲퉱錫꿋툢錫�仙댽림錫�',
		metaKeywords : '錫꾝립錫む립錫꾝릴錫띭릎錫섁릿錫싟림錫№�錫�錫곟릉錫꿋르 (錫꾝릴仙댽툢錫꾝립錫붲퉱錫㏅륭 錫꾝릎錫□륫仙댽림)',
		metaDescription : '錫쎹르錫겯퉪錫№툌錫�錫섁릿錫싟림錫№�錫곟링仙댽륭錫㏅툈錫긍툣仙�錫�錫곟릉錫꿋르',
		metaAuthor : '錫쒉많仙됢릉錫｀퉱錫꿋툏仙�錫�錫곟릉錫꿋르',
		metaCopyright : '錫む툏錫㏅툢錫�錫닮툊錫む릿錫쀠툡錫닮퉴',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
