/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Greek language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['el'] =
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
	toolbars	: '�빾곊널귁뾔두민왁맺�觀琯�� �빾�琯刮琯�곊널귄꺩꾆�',
	editor		: '�빾�琯刮琯�곊널귄꺩꾆��� �졢뾔완띙꺨민완� �싋두민셰�館恝��',

	// Toolbar buttons without dialogs.
	source			: 'HTML 觀�롈늴민부귄�',
	newPage			: '�앂�慣 誇琯貫官灌慣',
	save			: '�뫯�恝罐冠觀琯�끥꺨�',
	preview			: '�졣곊왁둑�菅�꺨북뚌�菅�꺨�',
	cut				: '�뫯�恝觀恝�冠',
	copy			: '�뫮싹꾆민넒곊귄녞�',
	paste			: '�빾�菅觀�뚋뾔뾔록꺨�',
	print			: '�빺북꾇띙��됍꺨�',
	underline		: '跨�恝款�곊�關關菅�꺨�',
	bold			: '�댫싹꾆왁싸�',
	italic			: '�졢뾔�款菅慣',
	selectAll		: '�빾�菅貫恝款冠 �뚋뾰됌�',
	removeFormat	: '�뫯녞귁��곊둑꺨� �쑳완곋녞완�恝官管�꺨록�',
	strike			: '�붞민귁넒곊�關關菅�꺨�',
	subscript		: '�붞두�觀�꾆록�',
	superscript		: '�빺부맺��꾆록�',
	horizontalrule	: '�빺믿꺨귁넒됌널� �읧곊민뙤뚋싹꾆민귄� �볁곊귁셰셰���',
	pagebreak		: '�빺믿꺨귁넒됌널� �꾆�貫恝�끥� �꺨두뾔�灌慣��',
	pagebreakAlt		: '�뫮뾔뾔귁널� 誇琯貫官灌慣��',
	unlink			: '�뫯녞귁��곊둑꺨� 誇�끤싸늴��꺨셰완� (Link)',
	undo			: '�뫮싸귁��곊둑꺨�',
	redo			: '�빾�慣館慣�녞완곊�',

	// Common messages and labels.
	common :
	{
		browseServer	: '�빺앓둑곊둑띘싸록꺨� 灌菅慣觀恝關菅�꺩꾆�',
		url				: 'URL',
		protocol		: '�졣곋됍꾇뚋부왁뾔뾔�',
		upload			: '�뫮싸�棺慣�꺨셰�',
		uploadSubmit	: '�뫯�恝�꺩꾆왁뾔� �꺩꾆왁� �붞민귁부왁셰믿꺩꾆�',
		image			: '�빺민북뚋싸�',
		flash			: '�빺믿꺨귁넒됌널� Flash',
		form			: '過�뚌곊셰�',
		checkbox		: '�싋완끥꾆� 琯�菅貫恝款冠��',
		radio			: '�싋완끤셴�官 琯�菅貫恝款冠��',
		textField		: '�졢두늴�恝 觀琯菅關串館恝��',
		textarea		: '�졢둑곊민완눸� 觀琯菅關串館恝��',
		hiddenField		: '�싌곋끥녟� �琯灌官恝',
		button			: '�싋완끤셴�官',
		select			: '�졢두늴�恝 琯�菅貫恝款冠��',
		imageButton		: '�싋완끤셴�官 琯菅觀�뚋싸귄�',
		notSet			: '<灌琯館 串�눸두� �곋끤맺셰믿꺩꾆두�>',
		id				: 'Id',
		name			: '�뚋싸왁셰�',
		langDir			: '�싋귄꾆둑띘먀끤싹꺨� 觀琯菅關串館恝��',
		langDirLtr		: '�뫯곊믿꺩꾆둑곊� ��곊완� �붞두앓민� (LTR)',
		langDirRtl		: '�붞두앓민� ��곊완� �뫯곊믿꺩꾆둑곊� (RTL)',
		langCode		: '�싌됌늴민북뚌� �벿뾰롉꺩꺨귄�',
		longDescr		: '�뫮싸귁뾰끥꾆민부� �琯�곊민넒곊귄녞� URL',
		cssClass		: 'Stylesheet Classes',
		advisoryTitle	: '�빺싸늴두민북꾆민북뚌� �꾆��꾆뾔완�',
		cssStyle		: '�쑳완곋녞� 觀琯菅關串館恝��',
		ok				: 'OK',
		cancel			: '�뫮북띙곋됍꺨�',
		close			: '�싋뾔두��꺨민셰�',
		preview			: '�졣곊왁둑�菅�꺨북뚌�管�꺨�',
		generalTab		: '�벿두싸민부�',
		advancedTab		: '�벿민� ��곊완눹됍곊로셰�館恝�끥�',
		validateNumberFailed : '�뫯끥꾆� 管 �꾆민셰� 灌琯館 琯官館慣菅 慣�곊민맺셴뚌�.',
		confirmNewPage	: '�읦� �뚌�恝菅琯�� 慣貫貫慣款串�� �꺩꾆� �琯�곊민둑눹뚋셰두싸� 罐慣 �눸귁맺완띘�. �빺��꺨귄꺩꾆� �꺨�款恝�끥곊왁� �뚌꾆� 罐串貫琯�꾆� 館慣 �녞완곋꾇롉꺨둑꾆� 關菅慣 館串慣 �꺨두뾔�灌慣;',
		confirmCancel	: '�쑳둑곊민부��� 琯�菅貫恝款串�� 串�눸완끤� 慣貫貫郭刮琯菅. �빺��꺨귄꺩꾆� �꺨�款恝�끥곊왁� �뚌꾆� 罐串貫琯�꾆� 館慣 觀貫琯官�꺨둑꾆� �꾆� �慣�곊�罐�끥곊� 灌菅慣貫�뚋널완�;',
		options			: '�빾�菅貫恝款串��',
		target			: '�졣곊왁완곊믿꺨셴뚌�',
		targetNew		: '�앂�恝 �졢귄곊�罐�끥곊� (_blank)',
		targetTop		: '�뫯곋눸민부� �졢둑곊민완눸� (_top)',
		targetSelf		: '�듟늴민� �졢둑곊민완눸� (_self)',
		targetParent	: '�벿왁싸둑듟북� �졢귄곊�罐�끥곊� (_parent)',
		langDirLTR		: '�뫯곊믿꺩꾆둑곊� ��곊완� �붞두앓민� (LTR)',
		langDirRTL		: '�붞두앓민� ��곊완� �뫯곊믿꺩꾆둑곊� (RTL)',
		styles			: '�쑳완곋녞�',
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: '�졢뾔��꾆완�',
		height			: '�롉댫완�',
		align			: '誇�꾆왁��눸믿꺨�',
		alignLeft		: '�뫯곊믿꺩꾆둑곊�',
		alignRight		: '�붞두앓민�',
		alignCenter		: '�싋�館�꾇곊�',
		alignTop		: '�졢�館��',
		alignMiddle		: '�쑳��꺨�',
		alignBottom		: '�싋��꾇�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '課恝 �띙댫완� ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 慣�곊민맺셴뚌�.',
		invalidWidth	: '課恝 �貫郭�꾆완� ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 慣�곊민맺셴뚌�.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	contextmenu :
	{
		options : '�빾�菅貫恝款串�� �뫮싸귁니끥뚋셰두싸완� �쑳두싸완�'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�빺믿꺨귁넒됌널� �빺민늴민부완� 鍋慣�곊귁북꾆��곊�',
		title		: '�빾�菅貫串刮�꾆� 串館慣館 �빺민늴민북� 鍋慣�곊귁북꾆��곊�',
		options : '�빾�菅貫恝款串�� �빺민늴민북롈� 鍋慣�곊귁북꾆��곋됌�'
	},

	// Link dialog.
	link :
	{
		toolbar		: '誇�띘싸늴둑꺨셰완�',
		other 		: '<郭貫貫恝>',
		menu		: '�빾�琯刮琯�곊널귄꺨�慣 誇�끤싸늴��꺨셰완�',
		title		: '誇�띘싸늴둑꺨셰완�',
		info		: '�졢뾔록곊완녞완곊�琯�� 誇�끤싸늴��꺨셰완�',
		target		: '�졢귄곊�罐�끥곊� �졣곊왁완곊믿꺨셰완�',
		upload		: '�뫮싸�棺慣�꺨셰�',
		advanced	: '�벿민� ��곊완눹됍곊로셰�館恝�끥�',
		type		: '課�띙�恝�� 誇�끤싸늴��꺨셰완�',
		toUrl		: 'URL', // MISSING
		toAnchor	: '�녞널북끥곊� �꺨� 慣�끥꾆� �꾆� �꺨두뾔�灌慣',
		toEmail		: 'E-Mail',
		targetFrame		: '<�貫慣官�꺨민�>',
		targetPopup		: '<慣館慣灌�끥뚋셰두싸� �慣�곊�罐�끥곊�>',
		targetFrameName	: '�뚋싸왁셰� �졢귄곊귁먀띙곊완� �졣곊왁완곊믿꺨셰완�',
		targetPopupName	: '�뚋싸왁셰� �뫮싸귁니끥뚋셰두싸완� �졢귄곊귁먀띙곊완�',
		popupFeatures	: '�빾�菅貫恝款串�� �뫮싸귁니끥뚋셰두싸완� �졢귄곊귁먀띙곊완�',
		popupResizable	: '�졣곊완꺨귄곊셰왁뙤뚋셰두싸� �쑳�款琯罐恝��',
		popupStatusBar	: '�볁곊귁셰셰� �싋귄꾆��꺩꾆귄꺨록�',
		popupLocationBar: '�볁곊귁셰셰� 課恝�恝罐琯�꺨�慣��',
		popupToolbar	: '�빾곊널귁뾔두민왁맺�觀管',
		popupMenuBar	: '�볁곊귁셰셰� �빾�菅貫恝款�롈�',
		popupFullScreen	: '�졢뾔��곊록� �읦먀뚋싸� (IE)',
		popupScrollBars	: '�쑶�郭�곊둑� �싌띘뾔믿꺨록�',
		popupDependent	: '�빺앓귄곋꾆로셰�館恝 (Netscape)',
		popupLeft		: '�샩��꺨� �뫯곊믿꺩꾆둑곊�',
		popupTop		: '�샩��꺨� �졢�館��',
		id				: 'Id', // MISSING
		langDir			: '�싋귄꾆둑띘먀끤싹꺨� �싋두민셰�館恝��',
		langDirLTR		: '�뫯곊믿꺩꾆둑곊� ��곊완� �붞두앓민� (LTR)',
		langDirRTL		: '�붞두앓민� ��곊완� �뫯곊믿꺩꾆둑곊� (RTL)',
		acccessKey		: '誇�끤싹꾇뚋셰둑끥꺨�',
		name			: '�뚋싸왁셰�',
		langCode			: '�싋귄꾆둑띘먀끤싹꺨� �싋두민셰�館恝��',
		tabIndex			: '誇琯菅�곊� �쑳둑꾆귄�冠灌管�꺨록�',
		advisoryTitle		: '�빺싸늴두민북꾆민북뚌� 課官�꾆뾔완�',
		advisoryContentType	: '�빺싸늴두민북꾆민북뚌� 課�띙�恝�� �졢둑곊민둑눸왁셰�館恝��',
		cssClasses		: 'Stylesheet Classes',
		charset			: '�싌됌늴민부완�恝官管�꺨� 鍋慣�곊귁북꾆��곋됌� �졣곊완꺨귄곋꾆로셰�館管�� �졢로널���',
		styles			: '�쑳완곋녞�',
		rel			: '誇�눸��꺨�',
		selectAnchor		: '�빾�菅貫串刮�꾆� 關菅慣 郭款觀�끥곊�',
		anchorName		: '�믊��꺨두� �꾆완� �읦싹뚋셰귄꾆완� �꾆록� 郭款觀�끥곊귄�',
		anchorId			: '�믊��꺨두� �꾆완� Element Id',
		emailAddress		: '�붞민둑띘먀끤싹꺨� e-mail',
		emailSubject		: '�샩�關慣 �쑳로싹띘셰귄꾆완�',
		emailBody		: '�싋두�關琯館恝 �쑳로싹띘셰귄꾆완�',
		noAnchors		: '(�붞두� �끥�郭�곋눸완끤� 郭款觀�끥곊둑� �꺩꾆� 觀琯官關琯館恝)',
		noUrl			: '�빺믿꺨�款琯�꾆� �꾆로� �꾆완�恝罐琯�꺨�慣 (URL) �꾆완� �끥�琯�곋꺩끤싸늴��꺨셰완� (Link)',
		noEmail			: '�빺믿꺨�款琯�꾆� �꾆로� 灌菅琯�띘먀끤싹꺨� 管貫琯觀�꾇곊왁싸민부완� �꾆귄눹끤니곊왁셰두�恝��'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�빺믿꺨귁넒됌널�/琯�琯刮琯�곊널귄꺨�慣 �녞널북끥곊귄�',
		menu		: '�쇡늴믿뚌꾆록꾆둑� 郭款觀�끥곊귄�',
		title		: '�쇡늴믿뚌꾆록꾆둑� 郭款觀�끥곊귄�',
		name		: '�뚋싸왁셰� 郭款觀�끥곊귄�',
		errorName	: '�졢귄곊귁부귁뾔완띘셰� 琯菅�꺨�款琯�꾆� �뚋싸왁셰� 郭款觀�끥곊귄�',
		remove		: '�뫯녞귁��곊둑꺨� �녞널북끥곊귄�'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '�쇡늴믿뚌꾆록꾆둑� �뫯곊민맺셰로셰�館管�� �쎧��꺩꾆귄� ',
		bulletedTitle		: '�쇡늴믿뚌꾆록꾆둑� �쎧��꺩꾆귄� 誇管關琯官�됌�',
		type				: '課�띙�恝��',
		start				: '�빺부부�館管�꺨�',
		validateStartNumber				:'�� 慣�곊민맺셴뚌� 琯觀觀官館管�꺨록� �꾆록� 慣�곊�罐關管�꺨록� ��곊��琯菅 館慣 琯官館慣菅 慣觀串�곊귁민완� 慣�곊민맺셴뚌�.',
		circle				: '�싌띘부뾔완�',
		disc				: '�붞��꺨부완�',
		square				: '課琯�꾇곊�款�됌싸�',
		none				: '課官�恝�꾆�',
		notset				: '<灌琯館 串�눸두� 恝�곊믿꺩꾆두�>',
		armenian			: 'Armenian numbering', // MISSING
		georgian			: 'Georgian numbering (an, ban, gan, etc.)', // MISSING
		lowerRoman			: 'Lower Roman (i, ii, iii, iv, v, etc.)', // MISSING
		upperRoman			: 'Upper Roman (I, II, III, IV, V, etc.)', // MISSING
		lowerAlpha			: 'Lower Alpha (a, b, c, d, e, etc.)', // MISSING
		upperAlpha			: 'Upper Alpha (A, B, C, D, E, etc.)', // MISSING
		lowerGreek			: 'Lower Greek (alpha, beta, gamma, etc.)', // MISSING
		decimal				: '�붞두부귁늴민북뚌� (1, 2, 3, 觀�꾆�)',
		decimalLeadingZero	: 'Decimal leading zero (01, 02, 03, etc.)' // MISSING
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '�뫮싸귁뙈��꾆록꺨� 觀慣菅 �뫮싹꾆민부귄꾆��꺩꾆귄꺨�',
		find				: '�뫮싸귁뙈��꾆록꺨�',
		replace				: '�뫮싹꾆민부귄꾆��꺩꾆귄꺨�',
		findWhat			: '�뫮싸귁뙈��꾆록꺨� 款菅慣:',
		replaceWith			: '�뫮싹꾆민부귄꾆��꺩꾆귄꺨� 關琯:',
		notFoundMsg			: '課恝 觀琯官關琯館恝 灌琯館 棺�곊�罐管觀琯.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '�댫뾔두넒눸완� �琯瓘�롈�/觀琯�녞귁뾔귁��됌�',
		matchWord			: '�빾띙곊둑꺨� �貫冠�곊완끥� 貫串刮管��',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '�뫮싹꾆민부귄꾆��꺩꾆귄꺨� �뚋뾰됌�',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '�졢�館慣觀慣��',
		title		: '�쇡늴믿뚌꾆록꾆둑� �졢�館慣觀慣',
		menu		: '�쇡늴믿뚌꾆록꾆둑� �졢�館慣觀慣',
		deleteTable	: '�붞민귁넒곊귄녞� �官館慣觀慣',
		rows		: '�볁곊귁셰셰���',
		columns		: '�싋왁뾰롈싸둑�',
		border		: '�졢��눸완� �졢둑곊민넒곊�關關慣�꾆완�',
		widthPx		: 'pixels',
		widthPc		: '�꾆왁믿� 琯觀慣�꾇�',
		widthUnit	: '關恝館郭灌慣 �貫郭�꾆완끥�',
		cellSpace	: '�붞민��꺩꾆로셰� 觀琯貫菅�롈�',
		cellPad		: '�벿�關菅�꺨셰� 觀琯貫菅�롈�',
		caption		: '�쎧두뙈�館�꾆�',
		summary		: '�졢둑곊�貫管�댫�',
		headers		: '�싋둑녞귁뾔�灌琯��',
		headersNone		: '�싋귁싸�館慣',
		headersColumn	: '�졣곋롉꾆� 誇�꾆�貫管',
		headersRow		: '�졣곋롉꾆� 誇琯菅�곊�',
		headersBoth		: '�싋귁� �꾆� 灌�띘�',
		invalidRows		: '�� 慣�곊민맺셴뚌� �꾇됌� �꺨두믿곋롈� ��곊��琯菅 館慣 琯官館慣菅 關琯款慣貫�띙꾆둑곊완� 慣��� 0.',
		invalidCols		: '�� 慣�곊민맺셴뚌� �꾇됌� �꺩꾆로뾰롈� ��곊��琯菅 館慣 琯官館慣菅 關琯款慣貫�띙꾆둑곊완� 慣��� 0.',
		invalidBorder	: '課恝 �郭�눸완� �꾆완� �琯�곊민넒곊�關關慣�꾆완� ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 慣�곊민맺셴뚌�.',
		invalidWidth	: '課恝 �貫郭�꾆완� �꾆완� �官館慣觀慣 ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 慣�곊민맺셴뚌�.',
		invalidHeight	: '課恝 �띙댫완� �꾆완� �官館慣觀慣 ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 慣�곊민맺셴뚌�.',
		invalidCellSpacing	: '�� 慣��뚌꺩꾆귄꺨� 關琯�꾆귁암� �꾇됌� 觀琯貫菅�롈� ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 罐琯�꾆민북뚌� 慣�곊민맺셴뚌�.',
		invalidCellPadding	: '課恝 款串關菅�꺨셰� 關串�꺨� �꺩꾆� 觀琯貫菅郭 ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 罐琯�꾆민북뚌� 慣�곊민맺셴뚌�.',

		cell :
		{
			menu			: '�싋두뾔�',
			insertBefore	: '�빺믿꺨귁넒됌널� �싋두뾔민완� �졣곊민�',
			insertAfter		: '�빺믿꺨귁넒됌널� �싋두뾔민완� �쑳둑꾆�',
			deleteCell		: '�붞민귁넒곊귄녞� �싋두뾔믿롈�',
			merge			: '�빺싸완�恝官管�꺨� �싋두뾔믿롈�',
			mergeRight		: '誇�끤넒눹롈싸둑끥꺨� �쑳� �붞두앓민�',
			mergeDown		: '誇�끤넒눹롈싸둑끥꺨� �쑳� �싋��꾇�',
			splitHorizontal	: '�읧곊민뙤뚋싹꾆민� �쑳왁��곊귄꺨셰� �싋두뾔민완�',
			splitVertical	: '�싋귄꾆귁북뚌곋끥녞� �쑳왁��곊귄꺨셰� �싋두뾔민완�',
			title			: '�쇡늴믿뚌꾆록꾆둑� �싋두뾔민완�',
			cellType		: '課�띙�恝�� �싋두뾔민완�',
			rowSpan			: '�빾띙곊완� 誇琯菅�곋롈�',
			colSpan			: '�빾띙곊완� 誇�꾆로뾰롈�',
			wordWrap		: 'Word Wrap', // MISSING
			hAlign			: '�읧곊민뙤뚋싹꾆민� 誇�꾆왁��눸믿꺨�',
			vAlign			: '�싋�罐琯�꾆� 誇�꾆왁��눸믿꺨�',
			alignBaseline	: 'Baseline', // MISSING
			bgColor			: '鍋�곋롈셰� 過�뚋싹꾆완�',
			borderColor		: '鍋�곋롈셰� �졢둑곊민넒곊�關關慣�꾆완�',
			data			: '�붞두늴왁셰�館慣',
			header			: '�싋둑녞귁뾔�灌慣',
			yes				: '�앂귁�',
			no				: '�뚌눸�',
			invalidWidth	: '課恝 �貫郭�꾆완� �꾆완� 觀琯貫菅恝�� ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 慣�곊민맺셴뚌�.',
			invalidHeight	: '課恝 �띙댫완� �꾆완� 觀琯貫菅恝�� ��곊��琯菅 館慣 琯官館慣菅 串館慣�� 慣�곊민맺셴뚌�.',
			invalidRowSpan	: 'Rows span must be a whole number.', // MISSING
			invalidColSpan	: 'Columns span must be a whole number.', // MISSING
			chooseColor		: '�빾�菅貫串刮�꾆�'
		},

		row :
		{
			menu			: '誇琯菅�곊�',
			insertBefore	: '�빺믿꺨귁넒됌널� 誇琯菅�곊��� �뫯��� �졢�館��',
			insertAfter		: '�빺믿꺨귁넒됌널� 誇琯菅�곊��� �뫯��� �싋��꾇�',
			deleteRow		: '�붞민귁넒곊귄녞� �볁곊귁셰셴롈�'
		},

		column :
		{
			menu			: '誇�꾆�貫管',
			insertBefore	: '�빺믿꺨귁넒됌널� 誇�꾆�貫管�� �졣곊민�',
			insertAfter		: '�빺믿꺨귁넒됌널� 誇琯菅�곊��� �쑳둑꾆�',
			deleteColumn	: '�붞민귁넒곊귄녞� �싋왁뾰됌싹롈�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�쇡늴믿뚌꾆록꾆둑� �싋완끤셴�菅恝��',
		text		: '�싋두�關琯館恝 (課菅關冠)',
		type		: '課�띙�恝��',
		typeBtn		: '�싋완끤셴�官',
		typeSbm		: '跨�恝棺恝貫冠',
		typeRst		: '�빾�慣館慣�녞완곊�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�쇡늴믿뚌꾆록꾆둑� �싋완끥꾆민완� �빾�菅貫恝款冠��',
		radioTitle	: '�쇡늴믿뚌꾆록꾆둑� �싋완끤셴�菅恝�� �빾�菅貫恝款冠��',
		value		: '課菅關冠',
		selected	: '�빾�菅貫琯款關串館恝'
	},

	// Form Dialog.
	form :
	{
		title		: '�쇡늴믿뚌꾆록꾆둑� 過�뚌곊셰귄�',
		menu		: '�쇡늴믿뚌꾆록꾆둑� 過�뚌곊셰귄�',
		action		: '�붟곊��꺨�',
		method		: '�쑳�罐恝灌恝��',
		encoding	: '�싌됌늴민부완�恝官管�꺨�'
	},

	// Select Field Dialog.
	select :
	{
		title		: '�쇡늴믿뚌꾆록꾆둑� �졢두늴�恝�� �빾�菅貫恝款冠��',
		selectInfo	: '�졢뾔록곊완녞완곊�琯�� �졢두늴�恝�� �빾�菅貫恝款冠��',
		opAvail		: '�붞민귁맺��꺨민셰둑� �빾�菅貫恝款串��',
		value		: '課菅關冠',
		size		: '�쑳�款琯罐恝��',
		lines		: '款�곊귁셰셰���',
		chkMulti	: '�앂� 琯�菅�꾇곊��恝館�꾆귁� 恝菅 �恝貫貫慣�貫串�� 琯�菅貫恝款串��',
		opText		: '�싋두�關琯館恝',
		opValue		: '課菅關冠',
		btnAdd		: '�졣곊완꺨맺�觀管',
		btnModify	: '課�곊완�恝�恝官管�꺨�',
		btnUp		: '�졢�館��',
		btnDown		: '�싋��꾇�',
		btnSetValue : '�졣곊왁둑�菅貫恝款冠',
		btnDelete	: '�붞민귁넒곊귄녞�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�쇡늴믿뚌꾆록꾆둑� �졢둑곊민완눸��� �싋두민셰�館恝��',
		cols		: '誇�꾆�貫琯��',
		rows		: '誇琯菅�곊���'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�쇡늴믿뚌꾆록꾆둑� �졢두늴�恝�� �싋두민셰�館恝��',
		name		: '�뚋싸왁셰�',
		value		: '課菅關冠',
		charWidth	: '�졢뾔��꾆완� 鍋慣�곊귁북꾆��곋됌�',
		maxChars	: '�쑳�款菅�꺩꾆왁� �눸귄곊귁북꾆��곊둑�',
		type		: '課�띙�恝��',
		typeText	: '�싋두�關琯館恝',
		typePass	: '�싌됌늴민북뚌�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�쇡늴믿뚌꾆록꾆둑� �싌곋끥녞완� �졢두늴�恝��',
		name	: '�뚋싸왁셰�',
		value	: '課菅關冠'
	},

	// Image Dialog.
	image :
	{
		title		: '�쇡늴믿뚌꾆록꾆둑� �빺민북뚋싸귄�',
		titleButton	: '�쇡늴믿뚌꾆록꾆둑� �싋완끤셴�菅恝�� �빺민북뚋싸귄�',
		menu		: '�쇡늴믿뚌꾆록꾆둑� �빺민북뚋싸귄�',
		infoTab		: '�졢뾔록곊완녞완곊�琯�� �빺민북뚋싸귄�',
		btnUpload	: '�뫯�恝�꺩꾆왁뾔� �꺩꾆왁� �붞민귁부왁셰믿꺩꾆�',
		upload		: '�뫮싸�棺慣�꺨셰�',
		alt			: '�빺싸귁뾔뾔귁북꾆민북� �싋두�關琯館恝',
		lockRatio	: '�싋뾔두�灌�됌셰� �뫮싸귁뾔왁널�慣��',
		resetSize	: '�빾�慣館慣�녞완곊� �뫯곋눸민부완� �쑳두널�罐恝�끥�',
		border		: '�졢둑곊�款�곊귁셰셰�',
		hSpace		: '�읧곊민뙤뚋싹꾆민� �붞민��꺩꾆로셰�',
		vSpace		: '�싋�罐琯�꾆� �붞민��꺩꾆로셰�',
		alertUrl	: '�빺믿꺨�款琯�꾆� �꾆로� �꾆완�恝罐琯�꺨�慣 (URL) �꾆록� 琯菅觀�뚋싸귄�',
		linkTab		: '誇�띘싸늴둑꺨셰완�',
		button2Img	: '�샩�貫琯�꾆� 館慣 關琯�꾆귄꾇곊��댫둑꾆� �꾆� 琯�菅貫琯款關串館恝 觀恝�끤셴�官 琯菅觀�뚋싸귄� �꺨� 慣�貫冠 琯菅觀�뚋싸�;',
		img2Button	: 'Do you want to transform the selected image on a image button?', // MISSING
		urlMissing	: 'Image source URL is missing.', // MISSING
		validateBorder	: 'Border must be a whole number.', // MISSING
		validateHSpace	: 'HSpace must be a whole number.', // MISSING
		validateVSpace	: 'VSpace must be a whole number.' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: '�쇡늴믿뚌꾆록꾆둑� Flash',
		propertiesTab	: '�쇡늴믿뚌꾆록꾆둑�',
		title			: '�쇡늴믿뚌꾆록꾆둑� Flash',
		chkPlay			: '�뫯끥꾇뚋셰귄꾆� �빺북꾆�貫琯�꺨�',
		chkLoop			: '�빾�慣館郭貫管�댫�',
		chkMenu			: '�빺싸둑곊널완�恝官管�꺨� Flash Menu',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '�쑳두널�罐�끤싹꺨�',
		scaleAll		: '�빺셴녞�館菅�꺨� �뚋뾰됌�',
		scaleNoBorder	: '鍋�됍곊��� �졢둑곊�款�곊귁셰셰�',
		scaleFit		: '�뫮북곊민꽝��� �쑳�款琯罐恝��',
		access			: 'Script Access', // MISSING
		accessAlways	: '�졢�館�꾆�',
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: '�졢완꾆�',
		alignAbsBottom	: '�뫯��뚋뾰끥꾆� �싋��꾇�',
		alignAbsMiddle	: '�뫯��뚋뾰끥꾆� �꺩꾆� �쑳��꺨�',
		alignBaseline	: '�볁곊귁셰셰� �믊��꺨록�',
		alignTextTop	: '�싋완곋끥녞� �싋두민셰�館恝��',
		quality			: '�졢왁믿뚌꾆록꾆�',
		qualityBest		: '�싋귁뾰띙꾆둑곊�',
		qualityHigh		: '跨�댫로뾔�',
		qualityAutoHigh	: '�뫯끥꾇뚋셰귄꾆� 跨�댫로뾔�',
		qualityMedium	: '�쑳둑꺨귁�慣',
		qualityAutoLow	: '�뫯끥꾇뚋셰귄꾆� 鍋慣關管貫冠',
		qualityLow		: '鍋慣關管貫冠',
		windowModeWindow: '�졢귄곊�罐�끥곊�',
		windowModeOpaque: '誇�끤셴�慣款串��',
		windowModeTransparent : '�붞민��녞귁싸�',
		windowMode		: 'Window mode', // MISSING
		flashvars		: '�쑳둑꾆귁꽝뾔록꾆��� 款菅慣 Flash',
		bgcolor			: '鍋�곋롈셰� 跨�恝棺郭罐�곊완�',
		hSpace			: '�읧곊민뙤뚋싹꾆민� �붞민��꺩꾆로셰�',
		vSpace			: '�싋�罐琯�꾆� �붞민��꺩꾆로셰�',
		validateSrc		: '�빺믿꺨�款琯�꾆� �꾆로� �꾆완�恝罐琯�꺨�慣 (URL) �꾆완� �끥�琯�곋꺩끤싸늴��꺨셰완� (Link)',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�읧곊맺왁넒곊귄녞민북뚌� �댫뾔두넒눸완�',
		title			: '�읧곊맺왁넒곊귄녞민북뚌� �댫뾔두넒눸완�',
		notAvailable	: '�� �끥�管�곊둑꺨�慣 灌琯館 琯官館慣菅 灌菅慣罐串�꺨민셰� 慣�끥꾆�館 �꾆로� �꺩꾆민널셰�.',
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '�붞두� �끥�郭�곋눸두� �꺩꾆� 貫琯刮菅觀��',
		changeTo		: '�뫮뾔뾔귁널� �꺨�',
		btnIgnore		: '�뫮널싹뚋록꺨�',
		btnIgnoreAll	: '�뫮널싹뚋록꺨� �뚋뾰됌�',
		btnReplace		: '�뫮싹꾆민부귄꾆��꺩꾆귄꺨�',
		btnReplaceAll	: '�뫮싹꾆민부귄꾆��꺩꾆귄꺨� �뚋뾰됌�',
		btnUndo			: '�뫮싸귁��곊둑꺨�',
		noSuggestions	: '- �붞두� �끥�郭�곋눸완끤� ��곊완꾆��꺨두믿� -',
		progress		: '�벿�館琯�꾆귁� 恝�곊맺왁넒곊귄녞민북뚌� 串貫琯款�눸완�...',
		noMispell		: '�� 恝�곊맺왁넒곊귄녞민북뚌� 串貫琯款�눸완� 恝貫恝觀貫管�곋롈맺로부�: �붞두� 棺�곊�罐管觀慣館 貫郭罐管',
		noChanges		: '�� 恝�곊맺왁넒곊귄녞민북뚌� 串貫琯款�눸완� 恝貫恝觀貫管�곋롈맺로부�: �붞두� 郭貫貫慣刮慣館 貫串刮琯菅��',
		oneChange		: '�� 恝�곊맺왁넒곊귄녞민북뚌� 串貫琯款�눸완� 恝貫恝觀貫管�곋롈맺로부�: �녞뾔뾔귁앓� 關菅慣 貫串刮管',
		manyChanges		: '�� 恝�곊맺왁넒곊귄녞민북뚌� 串貫琯款�눸완� 恝貫恝觀貫管�곋롈맺로부�: �녞뾔뾔귁앓귁� %1 貫串刮琯菅��',
		ieSpellDownload	: '�붞두� �끥�郭�곋눸두� 琯款觀慣�꾆둑꺩꾆로셰�館恝�� 恝�곊맺왁넒곊��녞완�. �샩�貫琯�꾆� 館慣 �꾆왁� 觀慣�꾆두꽝��꺨둑꾆� �꾇롉곊�;'
	},

	smiley :
	{
		toolbar	: 'Smiley',
		title	: '�빾�菅貫串刮�꾆� 串館慣 Smiley',
		options : '�빾�菅貫恝款串�� Smiley'
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 �꺩꾆왁믿눸두�恝'
	},

	numberedlist	: '�빺믿꺨귁넒됌널�/�뫯�恝關郭觀�곋끤싹꺨� �뫯곊민맺셰로셰�館管�� �쎧��꺩꾆귄�',
	bulletedlist	: '�빺믿꺨귁넒됌널�/�뫯�恝關郭觀�곋끤싹꺨� �쎧��꺩꾆귄� �싋완끤부부�灌�됌�',
	indent			: '�뫯띘앓록꺨� �빾꺨완눸���',
	outdent			: '�쑳두��됍꺨� �빾꺨완눸���',

	justify :
	{
		left	: '誇�꾆왁��눸믿꺨� �뫯곊믿꺩꾆둑곊�',
		center	: '誇�꾆왁��눸믿꺨� �꺩꾆� �싋�館�꾇곊�',
		right	: '誇�꾆왁��눸믿꺨� �붞두앓민�',
		block	: '�졢뾔��곊록� 誇�꾆왁��눸믿꺨�'
	},

	blockquote : '�졢둑곊민완눸� �졢귄곊�罐琯�꺨록�',

	clipboard :
	{
		title		: '�빾�菅觀�뚋뾔뾔록꺨�',
		cutError	: '�읦� �곋끤맺셰��꺨두믿� 慣�꺩녞귁뾔두�慣�� �꾆완� �녟끤뾔뾔왁셰둑꾇곊록꾆� �꺨귄� 灌琯館 琯�菅�꾇곊��恝�끤� �꾆로� 琯�菅貫琯款關串館管 琯�곊널귄꺨�慣 慣�恝觀恝�冠��. 鍋�곊록꺨민셰완�恝菅琯官�꺩꾆� �꾆� �貫管觀�꾇곊왁뾰뚋널민� (Ctrl/Cmd+X).',
		copyError	: '�읦� �곋끤맺셰��꺨두믿� 慣�꺩녞귁뾔두�慣�� �꾆완� �녟끤뾔뾔왁셰둑꾇곊록꾆� �꺨귄� 灌琯館 琯�菅�꾇곊��恝�끤� �꾆로� 琯�菅貫琯款關串館管 琯�곊널귄꺨�慣 慣館�꾆민넒곊귄녞���. 鍋�곊록꺨민셰완�恝菅琯官�꺩꾆� �꾆� �貫管觀�꾇곊왁뾰뚋널민� (Ctrl/Cmd+C).',
		pasteMsg	: '�졢귄곊귁부귁뾰� 琯�菅觀恝貫冠�꺩꾆� �꺩꾆� 慣觀�뚋뾔완끤맺� 觀恝�끥꾆� �눹곊록꺨민셰완�恝菅�뚋싹꾆귄� �꾆� �貫管觀�꾇곊왁뾰뚋널민� (<strong>Ctrl/Cmd+V</strong>) 觀慣菅 �慣�꾆��꺩꾆� OK.',
		securityMsg	: 'Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.', // MISSING
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: '�빾�菅觀�뚋뾔뾔록꺨� 慣��� �꾆� Word',
		title			: '�빾�菅觀�뚋뾔뾔록꺨� 慣��� �꾆� Word',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '�빾�菅觀�뚋뾔뾔록꺨� �됍� �뫯�貫�� �싋두�關琯館恝',
		title	: '�빾�菅觀�뚋뾔뾔록꺨� �됍� �뫯�貫�� �싋두�關琯館恝'
	},

	templates :
	{
		button			: '�졣곋뚌꾇끥�慣',
		title			: '�졣곋뚌꾇끥�慣 �졢둑곊민둑눸왁셰�館恝��',
		options : 'Template Options', // MISSING
		insertOption	: '�뫮싹꾆민부귄꾆��꺩꾆귄꺨� �끥�郭�곋눸왁싹꾇됌� �琯�곊민둑눸왁셰�館�됌�',
		selectPromptMsg	: '�졢귄곊귁부귁뾰� 琯�菅貫串刮�꾆� ��곋뚌꾇끥�恝 款菅慣 琯菅�꺨귁넒됌널� �꺩꾆� ��곋뚋넒곊귁셰셰�',
		emptyListMsg	: '(�붞두� 串�눸완끤� 觀慣罐恝�곊믿꺩꾆두� ��곋뚌꾇끥�慣)'
	},

	showBlocks : '�졣곊왁꽝왁뾔� �졢둑곊민완눹롈�',

	stylesCombo :
	{
		label		: '�쑳완곋녞���',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '�쑳완곋녞완�恝官管�꺨�',
		panelTitle	: '�쑳완곋녞완�恝官管�꺨� �졢귄곊귁넒곊��녞완�',

		tag_p		: '�싋귁싸왁싸민북�',
		tag_pre		: '�쑳완곋녞완�恝菅管關串館恝',
		tag_address	: '�붞민둑띘먀끤싹꺨�',
		tag_h1		: '�빾�菅觀琯�녞귁뾔�灌慣 1',
		tag_h2		: '�빾�菅觀琯�녞귁뾔�灌慣 2',
		tag_h3		: '�빾�菅觀琯�녞귁뾔�灌慣 3',
		tag_h4		: '�빾�菅觀琯�녞귁뾔�灌慣 4',
		tag_h5		: '�빾�菅觀琯�녞귁뾔�灌慣 5',
		tag_h6		: '�빾�菅觀琯�녞귁뾔�灌慣 6',
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
		scrolling	: '�빺싸둑곊널완�恝官管�꺨� 關�慣�곋롈� 觀�띘뾔믿꺨록�',
		border		: 'Show frame border' // MISSING
	},

	font :
	{
		label		: '�볁곊귁셰셰귄꾆완꺨두믿곊�',
		voiceLabel	: '�볁곊귁셰셰귄꾆완꺨두믿곊�',
		panelTitle	: '�뚋싸왁셰� �볁곊귁셰셰귄꾆완꺨두믿곊���'
	},

	fontSize :
	{
		label		: '�쑳�款琯罐恝��',
		voiceLabel	: '�쑳�款琯罐恝�� 款�곊귁셰셰귄꾆완꺨두믿곊���',
		panelTitle	: '�쑳�款琯罐恝�� �볁곊귁셰셰귄꾆완꺨두믿곊���'
	},

	colorButton :
	{
		textColorTitle	: '鍋�곋롈셰� �싋두민셰�館恝��',
		bgColorTitle	: '鍋�곋롈셰� 過�뚋싹꾆완�',
		panelTitle		: '鍋�곋롈셰귄꾆�',
		auto			: '�뫯끥꾇뚋셰귄꾆�',
		more			: '�졢둑곊믿꺩꺩뚌꾆둑곊� �눹곋롈셰귄꾆�...'
	},

	colors :
	{
		'000' : '�쑳귄띙곊�',
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
		'800080' : '�쑶롈�',
		'808080' : '�벿북곊�',
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
		options			: '�빾�菅貫恝款串��',
		langs			: '�벿뾰롉꺩꺨둑�',
		moreSuggestions	: '�졢둑곊믿꺩꺩뚌꾆둑곊둑� ��곊완꾆��꺨두믿�',
		ignore			: '�뫮널싹뚋록꺨� �꾆�',
		ignoreAll		: '�앂� 慣款館恝管罐恝�띘� �뚋뾔�',
		addWord			: '�졣곊완꺨맺�觀管 �꺩꾆� 貫琯刮菅觀��',
		emptyDic		: '課恝 �뚋싸왁셰� �꾆완� 貫琯刮菅觀恝�� 灌琯館 ��곊��琯菅 館慣 琯官館慣菅 觀琯館��.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: '�빾�菅貫恝款串��',
		allCaps			: '�앂� 慣款館恝恝�띘싹꾆귁� �뚋뾔둑� 恝菅 貫串刮琯菅�� �꺨� 觀琯�녞귁뾔귁�慣',
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: 'Ignore Words with Numbers', // MISSING

		languagesTab	: '�벿뾰롉꺩꺨둑�',

		dictionariesTab	: '�쎧두앓민부�',
		dic_field_name	: '�뚋싸왁셰� 貫琯刮菅觀恝��',
		dic_create		: '�붞로셰민완끥곊널�慣',
		dic_restore		: '�뫮싸�觀�꾆록꺨�',
		dic_delete		: '�붞민귁넒곊귄녞�',
		dic_rename		: '�쑳둑꾆왁싸왁셰귄꺨�慣',
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: '�졢둑곊�'
	},

	about :
	{
		title		: '�졢둑곊� �꾆완� CKEditor',
		dlgTitle	: '�졢둑곊� �꾆완� CKEditor',
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: 'For licensing information please visit our web site:', // MISSING
		copy		: 'Copyright &copy; $1. All rights reserved.' // MISSING
	},

	maximize : '�쑳두널믿꺩꾆완�恝官管�꺨�',
	minimize : '�빺뾔귄눸믿꺩꾆완�恝官管�꺨�',

	fakeobjects :
	{
		anchor		: 'Anchor', // MISSING
		flash		: 'Flash Animation', // MISSING
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: '�녞널싹됍꺩꾆� �뫮싹꾆민부두�關琯館恝'
	},

	resize : '誇�띙곋꺨민셰� 款菅慣 慣貫貫慣款冠 關琯款串罐恝�끥�',

	colordialog :
	{
		title		: '�빾�菅貫恝款冠 鍋�곋롈셰귄꾆완�',
		options	:	'�빾�菅貫恝款串�� 鍋�곋됌셰��꾇됌�',
		highlight	: 'Highlight', // MISSING
		selected	: '�빾�菅貫琯款關串館恝 鍋�곋롈셰�',
		clear		: '�싋귁맺귄곊믿꺨셴뚌�'
	},

	toolbarCollapse	: '誇�띘셴��꾆로앓� �빾곊널귁뾔두민왁맺�觀管��',
	toolbarExpand	: '�뫮싸���꾇끤앓� �빾곊널귁뾔두민왁맺�觀管��',

	toolbarGroups :
	{
		document : '�댫널넒곊귄녞�',
		clipboard : 'Clipboard/Undo', // MISSING
		editing : '誇琯 琯�琯刮琯�곊널귄꺨�慣',
		forms : '過�뚌곊셰둑�',
		basicstyles : '�믊귄꺨민부� �꺩꾇끤�',
		paragraph : '�졢귄곊�款�곊귄녞완�',
		links : '誇�끤싸늴��꺨셰왁�',
		insert : '�빺믿꺨귁넒됌널�',
		styles : '誇�꾇끤�',
		colors : '鍋�곋롈셰귄꾆�',
		tools : '�빾곊널귁뾔두�慣'
	},

	bidi :
	{
		ltr : 'Text direction from left to right', // MISSING
		rtl : 'Text direction from right to left' // MISSING
	},

	docprops :
	{
		label : '�쇡늴믿뚌꾆록꾆둑� �빺널넒곊��녞완�',
		title : '�쇡늴믿뚌꾆록꾆둑� �빺널넒곊��녞완�',
		design : 'Design', // MISSING
		meta : '�붞두늴왁셰�館慣 Meta',
		chooseColor : 'Choose', // MISSING
		other : '�녞뾔뾔�...',
		docTitle :	'課官�꾆뾔완� 誇琯貫官灌慣��',
		charset : 	'�싌됌늴민부완�恝官管�꺨� 鍋慣�곊귁북꾆��곋됌�',
		charsetOther : '�녞뾔뾔� �싌됌늴민부완�恝官管�꺨� 鍋慣�곊귁북꾆��곋됌�',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : '�싋두싹꾇곊민부��� �빾끥곋롉�管��',
		charsetCT : '�졢귄곊귁늴완꺨민귁부� 觀菅館串瓘菅觀慣 (Big5)',
		charsetCR : '�싌끥곊민뾔뾔민부�',
		charsetGR : '�빺뾔뾔로싸민부�',
		charsetJP : '�쇡귄��됌싸민부�',
		charsetKR : '�싋완곊두��꾆민부�',
		charsetTR : '課恝�끥곊부민부�',
		charsetUN : '�붞민두맺싸��� (UTF-8)',
		charsetWE : '�붟끥꾆민부��� �빾끥곋롉�管��',
		docType : '�빾�菅觀琯�녞귁뾔�灌慣 �꾇띙�恝�� 琯款款�곊��녞완�',
		docTypeOther : '�녞뾔뾔� 琯�菅觀琯�녞귁뾔�灌慣 �꾇띙�恝�� 琯款款�곊��녞완�',
		xhtmlDec : '�앂� �꺩끤셴�琯�곊민뾔록녞맺완띘� 恝菅 灌管貫�롉꺨두믿� XHTML',
		bgColor : '鍋�곋롈셰� �녟뚋싹꾆완�',
		bgImage : '�붞민둑띘먀끤싹꺨� 琯菅觀�뚋싸귄� �녟뚋싹꾆완�',
		bgFixed : '過�뚋싹꾆� �눹됍곊��� 觀�띘뾔믿꺨�',
		txtColor : '鍋�곋롈셰� �볁곊귁셰셰��꾇됌�',
		margin : '�졢둑곊민먀롉곊민� �꺨두뾔�灌慣��',
		marginTop : '�싋완곋끥녞�',
		marginLeft : '�뫯곊믿꺩꾆둑곊�',
		marginRight : '�붞두앓민�',
		marginBottom : '�싋��꾇�',
		metaKeywords : '�쎧�刮琯菅�� 觀貫琯菅灌菅郭 灌琯官觀�꾆둑� 琯款款�곊��녞완� (灌菅慣�눹됍곊믿꺨셴뚌� 關琯 觀�뚋셰셰�)',
		metaDescription : '�졢둑곊민넒곊귄녞� 琯款款�곊��녞완�',
		metaAuthor : '誇�끤널넒곊귄녞�慣��',
		metaCopyright : '�졢싸둑끤셰귄꾆민부� �붞민부귁믿롈셰귄꾆�',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
