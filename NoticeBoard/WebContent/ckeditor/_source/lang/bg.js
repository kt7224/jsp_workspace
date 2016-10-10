/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Bulgarian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['bg'] =
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
	editorTitle : '龜筠克�곎궿압� �筠畇逵克�궿앗� 鈞逵 �꾉앗�劇逵�궿먈�逵戟 �궿둔붇곎�, %1',
	editorHelp : '戟逵�궿먈곍싻둘궿� ALT 0 鈞逵 極棘劇棘��',

	// ARIA descriptions.
	toolbars	: '�쎩둔싼궿� �� 龜戟�곎귂��꺪셸둔싼궿�',
	editor		: '龜筠克�곎궿압� �筠畇逵克�궿앗� 鈞逵 �꾉앗�劇逵�궿먈�逵戟 �궿둔붇곎�',

	// Toolbar buttons without dialogs.
	source			: '�샫롤궿앗눺싻먁�',
	newPage			: '�앆압꽥� �곎귂�逵戟龜�녡�',
	save			: '�쀐겆왈먈�',
	preview			: '�읪�筠均剋筠畇',
	cut				: '�왨귂�筠菌龜',
	copy			: '�싍압왈먈�逵橘',
	paste			: '�믌솅듢분싻�',
	print			: '�읩둘눺겉�',
	underline		: '�읩압닌눺둘��궿겆�',
	bold			: '叫畇筠閨筠剋筠戟',
	italic			: '�앆겆분뿅압싻둔�',
	selectAll		: '�샫론귈둘�龜 勻�곍먈눺분�',
	removeFormat	: '�읪�筠劇逵�끦꽥겆싻� 戟逵 �꾉앗�劇逵�궿먈�逵戟筠�궿�',
	strike			: '�쀐겉눺둘��궿겆� �궿둔붇곎�',
	subscript		: '�샫싻닉둔붇곍먈�逵戟 �궿둔붇곎�',
	superscript		: '鬼�꺪왈둘��곍붇�龜極��',
	horizontalrule	: '�믌솅듢분꽥겆싻� 戟逵 �끦앗�龜鈞棘戟�궿겆뿅싻� 剋龜戟龜��',
	pagebreak		: '�믌솅듢분꽥겆싻� 戟逵 戟棘勻逵 �곎귂�逵戟龜�녡� 極�龜 極筠�눺겉�',
	pagebreakAlt		: '�졤겆론닉둔뿌뤢싻� 戟逵 �곎귂�逵戟龜�녡�',
	unlink			: '�읪�筠劇逵�끦싻� 勻��듢론분겉궿�',
	undo			: '�믍듢롤궿겆싻압꽥�',
	redo			: '�믍��듥됎겆싻� 戟逵 極�筠畇龜�댭둔� �곎궿겉귂꺫�',

	// Common messages and labels.
	common :
	{
		browseServer	: '�샫론귈앗� 棘�� �곎듥�勻�듥�逵',
		url				: 'URL',
		protocol		: '�읪�棘�궿압분압�',
		upload			: '�싍겉눺꽥겆싻�',
		uploadSubmit	: '�샫론왐�逵�됎겆싻� 克�듢� �곎듥�勻�듥�逵',
		image			: '鬼戟龜劇克逵',
		flash			: '圭剋逵��',
		form			: '圭棘�劇逵',
		checkbox		: '�읩압뿅� 鈞逵 龜鈞閨棘�',
		radio			: '�졤겆닉먁� 閨�꺫궿압�',
		textField		: '龜筠克�곎궿압꽥� 極棘剋筠',
		textarea		: '龜筠克�곎궿압꽥� 鈞棘戟逵',
		hiddenField		: '鬼克�龜�궿� 極棘剋筠',
		button			: '�뫱꺫궿압�',
		select			: '�읩압뿅� 鈞逵 龜鈞閨棘�',
		imageButton		: '�뫱꺫궿압� 鈞逵 �곍싻먁셸분�',
		notSet			: '<戟筠 筠 龜鈞閨�逵戟棘>',
		id				: 'ID',
		name			: '�샫셸�',
		langDir			: '�읩앗곍압분� 戟逵 筠鈞龜克逵',
		langDirLtr		: '�쎪뤢꽥� 戟逵 畇�뤣곍싻� (�쎩싻�)',
		langDirRtl		: '�붡뤣곍싻� 戟逵 剋�뤢꽥� (�붠싻�)',
		langCode		: '�싍압� 戟逵 筠鈞龜克逵',
		longDescr		: '叫筠閨 逵畇�筠�� 鈞逵 畇�듢뿅넓� 棘極龜�곍겆싻먁�',
		cssClass		: '�싍뿅겉곍압꽥� 鈞逵 CSS',
		advisoryTitle	: 'Advisory Title', // MISSING
		cssStyle		: '鬼�궿먁�',
		ok				: '�왧�',
		cancel			: '�왨궿분겆�',
		close			: '�쀐겉궿꽥앗�龜',
		preview			: '�읪�筠均剋筠畇',
		generalTab		: '�왧귐됎�',
		advancedTab		: '�졤겆롤댭먈�筠戟棘',
		validateNumberFailed : '龜逵鈞龜 �곎궿압밀싻앗곎� 戟筠 筠 �눺먈곍뿅�',
		confirmNewPage	: 'Any unsaved changes to this content will be lost. Are you sure you want to load new page?', // MISSING
		confirmCancel	: 'Some of the options have been changed. Are you sure to close the dialog?', // MISSING
		options			: '�왧왐녡먁�',
		target			: '揆筠剋',
		targetNew		: '�앆압� 極�棘鈞棘�筠�� (_blank)',
		targetTop		: '�볂앗�戟逵 極棘鈞龜�녡먈� (_top)',
		targetSelf		: '龜筠克�꺫됎먈� 極�棘鈞棘�筠�� (_self)',
		targetParent	: '�왨곍싻압꽥둔� 極�棘鈞棘�筠�� (_parent)',
		langDirLTR		: '�쎪뤢꽥� 戟逵 畇�뤣곍싻� (�쎩싻�)',
		langDirRTL		: '�붡뤣곍싻� 戟逵 剋�뤢꽥� (�붠싻�)',
		styles			: '鬼�궿먁�',
		cssClasses		: '�싍뿅겉곍압꽥� 鈞逵 CSS',
		width			: '珪龜�龜戟逵',
		height			: '�믌먈곍앗눺먁싻�',
		align			: '�읩압닌�逵勻戟�뤢꽥겆싻�',
		alignLeft		: '�쎪뤢꽥�',
		alignRight		: '�붡뤣곍싻�',
		alignCenter		: '揆筠戟�귂듥�',
		alignTop		: '�볂앗�筠',
		alignMiddle		: '�읩� �곎�筠畇逵�궿�',
		alignBottom		: '�붠압뿌�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '�믌먈곍앗눺먁싻겉궿� �귂��뤢귈꽥� 畇逵 筠 �눺먈곍뿅�.',
		invalidWidth	: '珪龜�龜戟逵 �귂�筠閨筠 畇逵 筠 �눺먈곍뿅�.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	contextmenu :
	{
		options : '�왧왐녡먁� 戟逵 克棘戟�궿둔붇곎궿싻앗궿� 劇筠戟��'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�믌솅듢분꽥겆싻� 戟逵 �곍왈둘녡먁겆뿅둔� 鈞戟逵克',
		title		: '�샫론귈앗� 戟逵 �곍왈둘녡먁겆뿅둔� 鈞戟逵克',
		options : '�왧왐녡먁� 鈞逵 �곍왈둘녡먁겆뿅둔� 鈞戟逵克'
	},

	// Link dialog.
	link :
	{
		toolbar		: '�믍��듢론분�',
		other 		: '<畇��꺪넓�>',
		menu		: '�읪�棘劇�뤢싻� 戟逵 勻��듢론분�',
		title		: '�믍��듢론분�',
		info		: '�샫싼꾉� 鈞逵 勻��듢론분겉궿�',
		target		: '揆筠剋',
		upload		: '�싍겉눺꽥겆싻�',
		advanced	: '�졤겆롤댭먈�筠戟棘',
		type		: '龜龜極 戟逵 勻��듢론분겉궿�',
		toUrl		: '叫筠閨 逵畇�筠��',
		toAnchor	: '�믍��듢론분� 克�듢� 克棘�궿꽥� 勻 �궿둔붇곎궿�',
		toEmail		: 'E-mail',
		targetFrame		: '<frame>',
		targetPopup		: '<龜鈞克逵�눺겉� 極�棘鈞棘�筠��>',
		targetFrameName	: '�샫셸� 戟逵 �녡둔뿅둔꽥먈뤣� 極�棘鈞棘�筠��',
		targetPopupName	: '�샫셸� 戟逵 龜鈞克逵�눺겉� 極�棘鈞棘�筠��',
		popupFeatures	: '圭�꺪싻붇녡먁� 戟逵 龜鈞克逵�눺겉� 極�棘鈞棘�筠��',
		popupResizable	: '�왨�逵鈞劇筠��뤢둔�',
		popupStatusBar	: '鬼�궿겉귂꺫곍싻� 剋筠戟�궿�',
		popupLocationBar: '�쎩둔싼궿� �� 剋棘克逵�녡먈뤣궿�',
		popupToolbar	: '�쎩둔싼궿� �� 龜戟�곎귂��꺪셸둔싼궿�',
		popupMenuBar	: '�쎩둔싼궿� 鈞逵 劇筠戟��',
		popupFullScreen	: '揆�뤢� 筠克�逵戟 (IE)',
		popupScrollBars	: '鬼克�棘剋筠�龜',
		popupDependent	: '�쀐겆꽥먈곍먁셸앗곎� (Netscape)',
		popupLeft		: '�쎪뤢꽥� 極棘鈞龜�녡먈�',
		popupTop		: '�볂앗�戟逵 極棘鈞龜�녡먈�',
		id				: 'ID',
		langDir			: '�읩앗곍압분� 戟逵 筠鈞龜克逵',
		langDirLTR		: '�쎪뤢꽥� 戟逵 �붡뤣곍싻� (�쎩싻�)',
		langDirRTL		: '�붡뤣곍싻� 戟逵 �쎪뤢꽥� (�붠싻�)',
		acccessKey		: '�싍뿌롋� 鈞逵 畇棘�곎귂듢�',
		name			: '�샫셸�',
		langCode			: '�싍압� 鈞逵 筠鈞龜克逵',
		tabIndex			: 'Tab Index', // MISSING
		advisoryTitle		: 'Advisory Title', // MISSING
		advisoryContentType	: 'Advisory Content Type', // MISSING
		cssClasses		: '�싍뿅겉곍압꽥� 鈞逵 CSS',
		charset			: 'Linked Resource Charset', // MISSING
		styles			: '鬼�궿먁�',
		rel			: '�믍��듢론분�',
		selectAnchor		: '�샫론귈둘�筠�궿� 克棘�궿꽥�',
		anchorName		: '�읩� 龜劇筠 戟逵 克棘�궿꽥�',
		anchorId			: '�읩� ID 戟逵 筠剋筠劇筠戟��',
		emailAddress		: 'E-mail a畇�筠��',
		emailSubject		: '龜筠劇逵',
		emailBody		: '鬼�듢닌듥�菌逵戟龜筠',
		noAnchors		: '(No anchors available in the document)', // MISSING
		noUrl			: '�쑷압뿌� 勻�듢꽥둔닉둘궿� URL 逵畇�筠�곍�',
		noEmail			: '�쑷압뿌� 勻�듢꽥둔닉둘궿� e-mail a畇�筠��'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�싍앗궿꽥�',
		menu		: '�읪�棘劇�뤢싻� 戟逵 克棘�궿꽥�',
		title		: '�앆겉곎귂�棘橘克龜 戟逵 克棘�궿꽥�',
		name		: '�샫셸� 戟逵 克棘�궿꽥�',
		errorName	: '�쑷압뿌� 勻�듢꽥둔닉둘궿� 龜劇筠 戟逵 克棘�궿꽥겉궿�',
		remove		: '�읪�筠劇逵�끦꽥겆싻� 戟逵 克棘�궿꽥�'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numbered List Properties', // MISSING
		bulletedTitle		: 'Bulleted List Properties', // MISSING
		type				: '龜龜極',
		start				: '鬼�궿겉���',
		validateStartNumber				:'List start number must be a whole number.', // MISSING
		circle				: '�싎��듢�',
		disc				: '�붠먈곍�',
		square				: '�싍꽥겆닌�逵��',
		none				: '�앇뤢셸�',
		notset				: '<戟筠 筠 �꺪분겆론겆싻�>',
		armenian			: '�먓�劇筠戟�곍분� 戟棘劇筠�龜�逵戟筠',
		georgian			: '�볃��꺪론먁싼곍분� 戟棘劇筠�龜�逵戟筠 (an, ban, gan, 龜 ��.戟.)',
		lowerRoman			: '�쑷겆뿅분� �龜劇�곍분� �눺먈곍뿅� (i, ii, iii, iv, v 龜 ��.戟.)',
		upperRoman			: '�볂압뿅둔셸� �龜劇�곍분� �눺먈곍뿅� (I, II, III, IV, V 龜 ��.戟.)',
		lowerAlpha			: '�쑷겆뿅분� 閨�꺪분꽥� (逵, 閨, 勻, 均, 畇 龜 ��.戟.)',
		upperAlpha			: '�볂압뿅둔셸� 閨�꺪분꽥� (��, ��, ��, ��, �� 龜 ��.戟.)',
		lowerGreek			: '�쑷겆뿅분� 均��듥녡분� 閨�꺪분꽥� (逵剋�꾉�, 閨筠�궿�, 均逵劇逵 龜 ��.戟.)',
		decimal				: '槻龜�곍뿅� (1, 2, 3 龜 畇�.)',
		decimalLeadingZero	: '槻龜�곍뿅� �� 勻棘畇筠�됎� 戟�꺪뿅� (01, 02, 03 龜 ��.戟.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '龜�듥��곍둔싻� 龜 極�筠極棘克�龜勻逵戟筠',
		find				: '龜�듥��곍둔싻�',
		replace				: '�읪�筠極棘克�龜勻逵戟筠',
		findWhat			: '龜�듥��곍� 鈞逵:',
		replaceWith			: '�읪�筠極棘克�龜勻逵 ��:',
		notFoundMsg			: '叫克逵鈞逵戟龜�뤣� �궿둔붇곎� 戟筠 筠 戟逵劇筠�筠戟.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: '鬼�듢꽥왈겆닉둔싻먁�',
		matchWord			: '鬼�듢꽥왈겆닉둔싻먁� �� 畇�꺪셸�',
		matchCyclic			: '揆龜克剋龜�눺싻� �곎듢꽥왈겆닉둔싻먁�',
		replaceAll			: '�읪�筠極棘克�龜橘 勻�곍먈눺분�',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '龜逵閨剋龜�녡�',
		title		: '�앆겉곎귂�棘橘克龜 戟逵 �궿겆귈뿅먈녡겉궿�',
		menu		: '�앆겉곎귂�棘橘克龜 戟逵 �궿겆귈뿅먈녡겉궿�',
		deleteTable	: '�샫롤귂�龜勻逵戟筠 戟逵 �궿겆귈뿅먈녡�',
		rows		: '�졤둔닉압꽥�',
		columns		: '�싍압뿅압싻�',
		border		: '�졤겆론셸둘� 戟逵 �逵劇克逵�궿�',
		widthPx		: '極龜克�곍둔뿅�',
		widthPc		: '極�棘�녡둔싼�',
		widthUnit	: '筠畇龜戟龜�녡� 鈞逵 �댭먈�龜戟逵',
		cellSpace	: '�졤겆롤궿앗뤢싻먁� 劇筠菌畇�� 克剋筠�궿분먈궿�',
		cellPad		: '�왨궿닉둔뿌뤢싻� 戟逵 克剋筠�궿분먈궿�',
		caption		: '�쀐겆넓뿅겆꽥먁�',
		summary		: '�왧귐됎� 龜戟�꾉앗�劇逵�녡먈�',
		headers		: '奎筠畇�듥�龜',
		headersNone		: '�앇뤢셸�',
		headersColumn	: '�읪듥�勻逵 克棘剋棘戟逵',
		headersRow		: '�읪듥�勻龜 �筠畇',
		headersBoth		: '�쀐겆둔닉싻�',
		invalidRows		: '�뫱�棘�뤣� �筠畇棘勻筠 �귂��뤢귈꽥� 畇逵 筠 極棘-均棘剋�뤢� 棘�� 0.',
		invalidCols		: '�뫱�棘�뤣� 克棘剋棘戟龜 �귂��뤢귈꽥� 畇逵 筠 極棘-均棘剋�뤢� 棘�� 0.',
		invalidBorder	: 'Border size must be a number.', // MISSING
		invalidWidth	: 'Table width must be a number.', // MISSING
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Cell spacing must be a positive number.', // MISSING
		invalidCellPadding	: 'Cell padding must be a positive number.', // MISSING

		cell :
		{
			menu			: '�싍뿅둘궿분�',
			insertBefore	: '�믌솅듢분꽥겆싻� 戟逵 克剋筠�궿분� 極�筠畇龜',
			insertAfter		: '�믌솅듢분꽥겆싻� 戟逵 克剋筠�궿분� �곍뿅둔�',
			deleteCell		: '�샫롤귂�龜勻逵戟筠 戟逵 克剋筠�궿분�',
			merge			: '鬼剋龜勻逵戟筠 戟逵 克剋筠�궿분�',
			mergeRight		: '鬼剋龜勻逵戟筠 勻 畇�뤣곍싻�',
			mergeDown		: 'Merge Down', // MISSING
			splitHorizontal	: 'Split Cell Horizontally', // MISSING
			splitVertical	: 'Split Cell Vertically', // MISSING
			title			: '�앆겉곎귂�棘橘克龜 戟逵 克剋筠�궿분겉궿�',
			cellType		: '龜龜極 戟逵 克剋筠�궿분겉궿�',
			rowSpan			: 'Rows Span', // MISSING
			colSpan			: 'Columns Span', // MISSING
			wordWrap		: '�먒꽹궿�. 極�筠戟棘��',
			hAlign			: '奎棘�龜鈞棘戟�궿겆뿅싻� 極棘畇�逵勻戟�뤢꽥겆싻�',
			vAlign			: '�믌둘��궿먁분겆뿅싻� 極棘畇�逵勻戟�뤢꽥겆싻�',
			alignBaseline	: '�뫰겆론압꽥� 剋龜戟龜��',
			bgColor			: '圭棘戟',
			borderColor		: '揆勻�뤣� 戟逵 �逵劇克逵�궿�',
			data			: '�붠겆싻싻�',
			header			: '奎筠畇�듥�',
			yes				: '�붠�',
			no				: '�앆�',
			invalidWidth	: 'Cell width must be a number.', // MISSING
			invalidHeight	: 'Cell height must be a number.', // MISSING
			invalidRowSpan	: 'Rows span must be a whole number.', // MISSING
			invalidColSpan	: 'Columns span must be a whole number.', // MISSING
			chooseColor		: '�샫론귈둘�筠�궿�'
		},

		row :
		{
			menu			: '�졤둔�',
			insertBefore	: 'Insert Row Before', // MISSING
			insertAfter		: '�믌솅듢분꽥겆싻� 戟逵 �筠畇 �곍뿅둔�',
			deleteRow		: '�샫롤귂�龜勻逵戟筠 戟逵 �筠畇棘勻筠'
		},

		column :
		{
			menu			: '�싍압뿅압싻�',
			insertBefore	: '�믌솅듢분꽥겆싻� 戟逵 克棘剋棘戟逵 極�筠畇龜',
			insertAfter		: '�믌솅듢분꽥겆싻� 戟逵 克棘剋棘戟逵 �곍뿅둔�',
			deleteColumn	: '�샫롤귂�龜勻逵戟筠 戟逵 克棘剋棘戟龜'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�앆겉곎귂�棘橘克龜 戟逵 閨�꺫궿압싻�',
		text		: '龜筠克�곎� (�곎궿압밀싻앗곎�)',
		type		: '龜龜極',
		typeBtn		: '�뫱꺫궿압�',
		typeSbm		: '�붠압귈겆꽥�',
		typeRst		: '�앇꺪뿅먈�逵戟筠'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Checkbox Properties', // MISSING
		radioTitle	: '�앆겉곎귂�棘橘克龜 戟逵 �逵畇龜棘閨�꺫궿압�',
		value		: '鬼�궿압밀싻앗곎�',
		selected	: '�샫론귐�逵戟棘'
	},

	// Form Dialog.
	form :
	{
		title		: '�앆겉곎귂�棘橘克龜 戟逵 �꾉앗�劇逵�궿�',
		menu		: '�앆겉곎귂�棘橘克龜 戟逵 �꾉앗�劇逵�궿�',
		action		: '�붠둔밂곎궿꽥먁�',
		method		: '�쑷둘궿압�',
		encoding	: '�싍압닉먈�逵戟筠'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Selection Field Properties', // MISSING
		selectInfo	: 'Select Info', // MISSING
		opAvail		: '�앆겆뿅먈눺싻� 棘極�녡먁�',
		value		: '鬼�궿압밀싻앗곎�',
		size		: '�졤겆론셸둘�',
		lines		: '剋龜戟龜龜',
		chkMulti	: 'Allow multiple selections', // MISSING
		opText		: '龜筠克�곎�',
		opValue		: '鬼�궿압밀싻앗곎�',
		btnAdd		: '�붠압귈겆꽥�',
		btnModify	: '�읪�棘劇筠戟龜',
		btnUp		: '�앆� 均棘�筠',
		btnDown		: '�앆� 畇棘剋��',
		btnSetValue : 'Set as selected value', // MISSING
		btnDelete	: '�샫롤귂�龜勻逵戟筠'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�왧왐녡먁� 鈞逵 �궿둔붇곎궿압꽥겉궿� 鈞棘戟逵',
		cols		: '�싍압뿅압싻�',
		rows		: '�졤둔닉압꽥�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�앆겉곎귂�棘橘克龜 鈞逵 �궿둔붇곎궿압꽥� 極棘剋筠',
		name		: '�샫셸�',
		value		: '鬼�궿압밀싻앗곎�',
		charWidth	: '珪龜�龜戟逵 戟逵 鈞戟逵�녡먈궿�',
		maxChars	: '�쑷겆붇�. 鈞戟逵�녡�',
		type		: '龜龜極',
		typeText	: '龜筠克�곎�',
		typePass	: '�읩겉�棘剋逵'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�앆겉곎귂�棘橘克龜 鈞逵 �곍붇�龜�궿� 極棘剋筠',
		name	: '�샫셸�',
		value	: '鬼�궿압밀싻앗곎�'
	},

	// Image Dialog.
	image :
	{
		title		: '�앆겉곎귂�棘橘克龜 鈞逵 �곍싻먁셸분�',
		titleButton	: '�앆겉곎궿압밀분� 鈞逵 閨�꺫궿압� 鈞逵 �곍싻먁셸분�',
		menu		: '�앆겉곎귂�棘橘克龜 鈞逵 �곍싻먁셸분�',
		infoTab		: '�샫싼꾉� 鈞逵 �곍싻먁셸분�',
		btnUpload	: '�샫론왐�逵�궿� �� 戟逵 �곎듥�勻�듥�逵',
		upload		: '�싍겉눺꽥겆싻�',
		alt			: '�먒뿌궿둘�戟逵�궿먁꽥둔� �궿둔붇곎�',
		lockRatio	: '�쀐겆분뿌롋눺꽥겆싻� 戟逵 �곎듢앗궿싻앗댭둔싻먁둘궿�',
		resetSize	: '�앇꺪뿅먈�逵戟筠 戟逵 �逵鈞劇筠�',
		border		: '�졤겆셸분�',
		hSpace		: 'HSpace', // MISSING
		vSpace		: 'VSpace', // MISSING
		alertUrl	: 'Please type the image URL', // MISSING
		linkTab		: '�믍��듢론분�',
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
		properties		: '�앆겉곎귂�棘橘克龜 鈞逵 �꾉뿅겉�',
		propertiesTab	: '�앆겉곎귂�棘橘克龜',
		title			: '�앆겉곎귂�棘橘克龜 鈞逵 �꾉뿅겉�',
		chkPlay			: '�먒꽹궿�. 極�꺫곍분겆싻�',
		chkLoop			: '揆龜克�듢�',
		chkMenu			: 'Enable Flash Menu', // MISSING
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: 'Scale', // MISSING
		scaleAll		: '�읩압분겆론꽥� 勻�곍먈눺분�',
		scaleNoBorder	: '�뫰둔� �逵劇克逵',
		scaleFit		: 'Exact Fit', // MISSING
		access			: 'Script Access', // MISSING
		accessAlways	: '�믌먁싻겆넓�',
		accessSameDomain: '鬼�듥됎먈뤣� 畇棘劇筠橘戟',
		accessNever		: '�앆먁분압넓�',
		alignAbsBottom	: 'Abs Bottom', // MISSING
		alignAbsMiddle	: 'Abs Middle', // MISSING
		alignBaseline	: 'Baseline', // MISSING
		alignTextTop	: 'Text Top', // MISSING
		quality			: '�싍겉눺둘곎궿꽥�',
		qualityBest		: '�왨궿뿅먈눺싻�',
		qualityHigh		: '�믌먈곍압분�',
		qualityAutoHigh	: '�먒꽹궿�. 勻龜�곍압분�',
		qualityMedium	: '鬼�筠畇戟棘',
		qualityAutoLow	: '�먒꽹궿�. 戟龜�곍분�',
		qualityLow		: '�앆먈곍분�',
		windowModeWindow: '�읪�棘鈞棘�筠��',
		windowModeOpaque: '�읩뿌듥궿싻앗곎�',
		windowModeTransparent : '�읪�棘鈞�逵�눺싻앗곎�',
		windowMode		: '�졤둔뙨먁� 戟逵 極�棘鈞棘�筠�녡�',
		flashvars		: '�읪�棘劇筠戟剋龜勻龜 鈞逵 圭剋逵��',
		bgcolor			: 'Background color', // MISSING
		hSpace			: 'HSpace', // MISSING
		vSpace			: 'VSpace', // MISSING
		validateSrc		: '叫筠閨 逵畇�筠�곍� 戟筠 �귂��뤢귈꽥� 畇逵 筠 極�逵鈞筠戟.',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�읪�棘勻筠�克逵 戟逵 極�逵勻棘極龜��',
		title			: '�읪�棘勻筠�克逵 戟逵 極�逵勻棘極龜��',
		notAvailable	: '鬼�듢뙨겆뿌뤢꽥겆셸�, 戟棘 �꺫곍뿌꺪넓겉궿� 戟筠 筠 畇棘�곎귂듢왈싻� 鈞逵 劇棘劇筠戟�궿�',
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '�앆� 筠 勻 �筠�눺싻먁분�',
		changeTo		: '�읪�棘劇筠戟龜 戟逵',
		btnIgnore		: '�샫넓싻앗�龜�逵橘',
		btnIgnoreAll	: '�샫넓싻앗�龜�逵橘 勻�곍먈눺분�',
		btnReplace		: '�읪�筠極棘克�龜勻逵戟筠',
		btnReplaceAll	: '�읪�筠極棘克�龜橘 勻�곍먈눺분�',
		btnUndo			: '�믍듢롤궿겆싻압꽥�',
		noSuggestions	: '- �앇뤢셸� 極�筠極棘��듥눺겆싻� -',
		progress		: '�읪�棘勻筠��뤢꽥� �곍� 極�逵勻棘極龜�곍�...',
		noMispell		: 'Spell check complete: No misspellings found', // MISSING
		noChanges		: 'Spell check complete: No words changed', // MISSING
		oneChange		: 'Spell check complete: One word changed', // MISSING
		manyChanges		: 'Spell check complete: %1 words changed', // MISSING
		ieSpellDownload	: 'Spell checker not installed. Do you want to download it now?' // MISSING
	},

	smiley :
	{
		toolbar	: '叫�곍셸먁꽥분�',
		title	: '�믌솅듢분꽥겆싻� 戟逵 �꺫곍셸먁꽥분�',
		options : '�왧왐녡먁� 鈞逵 �꺫곍셸먁꽥분겉궿�'
	},

	elementsPath :
	{
		eleLabel : '�읪듥� 鈞逵 筠剋筠劇筠戟�궿먈궿�',
		eleTitle : '%1 筠剋筠劇筠戟��'
	},

	numberedlist	: '�믌솅듢분꽥겆싻�/�읪�筠劇逵�끦꽥겆싻� 戟逵 戟棘劇筠�龜�逵戟 �곍왈먈곎듢�',
	bulletedlist	: '�믌솅듢분꽥겆싻�/�읪�筠劇逵�끦꽥겆싻� 戟逵 �궿앗눺분압� �곍왈먈곎듢�',
	indent			: '叫勻筠剋龜�눺겆꽥겆싻� 戟逵 棘�귂곎귂듢왈�',
	outdent			: '�앆겆셸겆뿌뤢꽥겆싻� 戟逵 棘�귂곎귂듢왈�',

	justify :
	{
		left	: '�읩압닌�逵勻戟龜 勻 剋�뤢꽥�',
		center	: '揆筠戟�귂듥�',
		right	: '�읩압닌�逵勻戟龜 勻 畇�뤣곍싻�',
		block	: 'Justify' // MISSING
	},

	blockquote : '�뫰뿅압� 鈞逵 �녡먈궿겉�',

	clipboard :
	{
		title		: 'Paste', // MISSING
		cutError	: '�앆겉곎귂�棘橘克龜�궿� 鈞逵 �곍먁넘꺫�戟棘�곎� 戟逵 �믌겉댭먈� 閨�逵�꺪롤듥� 戟筠 極棘鈞勻棘剋�뤢꽥겉� 戟逵 �筠畇逵克�궿앗�逵 逵勻�궿압셸겉궿먈눺싻� 畇逵 龜鈞�듢왈뿅싻� 畇筠橘�곎궿꽥먈뤣궿� 鈞逵 棘�귂��뤢론꽥겆싻�. �쑷압뿌� 極棘剋鈞勻逵橘�궿� 克剋逵勻龜逵�귂꺫�戟龜�궿� 克棘劇逵戟畇龜 鈞逵 �녡둔뿌궿� (ctrl+x).',
		copyError	: 'Your browser security settings don\'t permit the editor to automatically execute copying operations. Please use the keyboard for that (Ctrl/Cmd+C).', // MISSING
		pasteMsg	: 'Please paste inside the following box using the keyboard (<strong>Ctrl/Cmd+V</strong>) and hit OK', // MISSING
		securityMsg	: 'Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.', // MISSING
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: 'Paste from Word', // MISSING
		title			: 'Paste from Word', // MISSING
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: 'Paste as plain text', // MISSING
		title	: 'Paste as Plain Text' // MISSING
	},

	templates :
	{
		button			: 'Templates', // MISSING
		title			: 'Content Templates', // MISSING
		options : 'Template Options', // MISSING
		insertOption	: 'Replace actual contents', // MISSING
		selectPromptMsg	: 'Please select the template to open in the editor', // MISSING
		emptyListMsg	: '(No templates defined)' // MISSING
	},

	showBlocks : '�읩압분겆론꽥� 閨剋棘克棘勻筠',

	stylesCombo :
	{
		label		: 'Styles', // MISSING
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: 'Format', // MISSING
		panelTitle	: 'Paragraph Format', // MISSING

		tag_p		: 'Normal', // MISSING
		tag_pre		: 'Formatted', // MISSING
		tag_address	: 'Address', // MISSING
		tag_h1		: 'Heading 1', // MISSING
		tag_h2		: 'Heading 2', // MISSING
		tag_h3		: 'Heading 3', // MISSING
		tag_h4		: 'Heading 4', // MISSING
		tag_h5		: 'Heading 5', // MISSING
		tag_h6		: 'Heading 6', // MISSING
		tag_div		: 'Normal (DIV)' // MISSING
	},

	div :
	{
		title				: 'Create Div Container', // MISSING
		toolbar				: 'Create Div Container', // MISSING
		cssClassInputLabel	: 'Stylesheet Classes', // MISSING
		styleSelectLabel	: '鬼�궿먁�',
		IdInputLabel		: 'ID',
		languageCodeInputLabel	: ' �싍압� 戟逵 筠鈞龜克逵',
		inlineStyleInputLabel	: 'Inline Style', // MISSING
		advisoryTitleInputLabel	: 'Advisory Title', // MISSING
		langDirLabel		: 'Language Direction', // MISSING
		langDirLTRLabel		: 'Left to Right (LTR)', // MISSING
		langDirRTLLabel		: 'Right to Left (RTL)', // MISSING
		edit				: '�읪�棘劇�뤢싻� 戟逵 Div',
		remove				: '�읪�筠劇逵�끦꽥겆싻� 戟逵 Div'
  	},

	iframe :
	{
		title		: 'IFrame 戟逵�곎귂�棘橘克龜',
		toolbar		: 'IFrame',
		noUrl		: 'Please type the iframe URL', // MISSING
		scrolling	: 'Enable scrollbars', // MISSING
		border		: 'Show frame border' // MISSING
	},

	font :
	{
		label		: '珪�龜�꾊�',
		voiceLabel	: '珪�龜�꾊�',
		panelTitle	: '�샫셸� 戟逵 �댮�龜�꾊�'
	},

	fontSize :
	{
		label		: '�졤겆론셸둘�',
		voiceLabel	: '�졤겆론셸둘� 戟逵 �댮�龜�꾊�',
		panelTitle	: '�졤겆론셸둘� 戟逵 �댮�龜�꾊�'
	},

	colorButton :
	{
		textColorTitle	: '揆勻�뤣� 戟逵 �댮�龜�꾊�',
		bgColorTitle	: '圭棘戟棘勻 �녡꽹뤣�',
		panelTitle		: '揆勻筠�궿압꽥�',
		auto			: '�먒꽹궿압셸겉궿먈눺싻�',
		more			: '�왨됎� �녡꽥둘궿압꽥�'
	},

	colors :
	{
		'000' : '槻筠�戟棘',
		'800000' : '�싍둘곎궿둔싼뤢꽥�',
		'8B4513' : '鬼勻筠�궿뿅압분겉꾊뤢꽥�',
		'2F4F4F' : 'Dark Slate Gray', // MISSING
		'008080' : 'Teal', // MISSING
		'000080' : 'Navy', // MISSING
		'4B0082' : '�샫싻닉먁넓�',
		'696969' : '龜�듢셸싻� �곍먁꽥�',
		'B22222' : '�왧넓싻둔싻� �눺둘�勻筠戟棘',
		'A52A2A' : '�싍겉꾊뤢꽥�',
		'DAA520' : '�쀐뿅겉궿먈곎궿�',
		'006400' : '龜�듢셸싻� 鈞筠剋筠戟棘',
		'40E0D0' : '龜�롋�克�꺪겆론둔싻�',
		'0000CD' : '鬼�筠畇戟棘 �곍먁싼뚍�',
		'800080' : '�읪꺫�極�꺫�戟棘',
		'808080' : '鬼龜勻棘',
		'F00' : '槻筠�勻筠戟棘',
		'FF8C00' : '龜�듢셸싻� 棘�逵戟菌筠勻棘',
		'FFD700' : '�쀐뿅겉궿싻�',
		'008000' : '�쀐둔뿅둔싻�',
		'0FF' : '鬼勻筠�궿뿅� �곍먁싼뚍�',
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
		noSuggestions	: '�앇뤢셸� 極�筠畇剋棘菌筠戟龜��',
		optionsTab		: 'Options', // MISSING
		allCaps			: 'Ignore All-Caps Words', // MISSING
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: '�샫넓싻앗�龜�逵戟龜 畇�꺪셸� 龜 �녡먈꾊�龜',

		languagesTab	: '�빿론먈녡�',

		dictionariesTab	: '�졤둘눺싻먈녡�',
		dic_field_name	: '�샫셸� 戟逵 �筠�눺싻�',
		dic_create		: '�앆압�',
		dic_restore		: '�믍듢롤궿겆싻압꽹뤢꽥겆싻�',
		dic_delete		: '�샫롤귂�龜勻逵戟筠',
		dic_rename		: '�읪�筠龜劇筠戟�꺪꽥겆싻�',
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: '�왨궿싻앗곍싻�'
	},

	about :
	{
		title		: '�왨궿싻앗곍싻� CKEditor',
		dlgTitle	: '�왨궿싻앗곍싻� CKEditor',
		help	: '�읪�棘勻筠�筠�궿� $1 鈞逵 極棘劇棘��.',
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: '�쀐� 剋龜�녡둔싻론먁압싻싻� 龜戟�꾉앗�劇逵�녡먈� 劇棘剋�� 極棘�곍둘궿둘궿� �곍겆밂궿� 戟龜:',
		copy		: 'Copyright &copy; $1. All rights reserved.'
	},

	maximize : '�쑷겆붇곍먁셸먁론먈�逵戟筠',
	minimize : '�쑷먁싻먁셸먁론먈�逵戟筠',

	fakeobjects :
	{
		anchor		: '�싎꺪분�',
		flash		: '圭剋逵�� 逵戟龜劇逵�녡먈�',
		iframe		: 'IFrame',
		hiddenfield	: '鬼克�龜�궿� 極棘剋筠',
		unknown		: '�앆둔먁론꽥둘곎궿둔� 棘閨筠克��'
	},

	resize : '�믌뿅겉눺둘궿� 鈞逵 畇逵 棘�逵鈞劇筠�龜�궿�',

	colordialog :
	{
		title		: '�샫론귈둘�筠�궿� �녡꽹뤣�',
		options	:	'揆勻筠�궿압꽥� 棘極�녡먁�',
		highlight	: '�왨곍꽥둘귂뤢꽥겆싻�',
		selected	: '�샫론귈둘�筠�궿� �녡꽹뤣�',
		clear		: '�샫롤눺먈곎궿꽥겆싻�'
	},

	toolbarCollapse	: '鬼勻龜勻逵戟筠 戟逵 剋筠戟�궿겉궿� �� 龜戟�곎귂��꺪셸둔싼궿�',
	toolbarExpand	: '�졤겆롤댭먈��뤢꽥겆싻� 戟逵 剋筠戟�궿겉궿� �� 龜戟�곎귂��꺪셸둔싼궿�',

	toolbarGroups :
	{
		document : '�붠압붇꺪셸둔싼�',
		clipboard : 'Clipboard/Undo', // MISSING
		editing : '�읪�棘劇�뤢싻�',
		forms : '圭棘�劇龜',
		basicstyles : '�뫰겆론압꽥� �곎궿먁뿅압꽥�',
		paragraph : '�읩겉�逵均�逵��',
		links : '�믍��듢론분�',
		insert : '�믌솅듢분꽥겆싻�',
		styles : '鬼�궿먁뿅압꽥�',
		colors : '揆勻筠�궿압꽥�',
		tools : '�샫싼곎귂��꺪셸둔싼궿�'
	},

	bidi :
	{
		ltr : 'Text direction from left to right', // MISSING
		rtl : 'Text direction from right to left' // MISSING
	},

	docprops :
	{
		label : '�앆겉곎귂�棘橘克龜 戟逵 畇棘克�꺪셸둔싼궿�',
		title : '�앆겉곎귂�棘橘克龜 戟逵 畇棘克�꺪셸둔싼궿�',
		design : '�붠먁론겆밀�',
		meta : '�쑷둘궿� 筠�궿먁분둘궿�',
		chooseColor : '�샫론귈둘�筠�궿�',
		other : '�붡��꺪넓�...',
		docTitle :	'�쀐겆넓뿅겆꽥먁� 戟逵 �곎귂�逵戟龜�녡겉궿�',
		charset : 	'�싍압닉압꽥� �궿겆귈뿅먈녡�',
		charsetOther : '�붡��꺪넓� 克棘畇棘勻逵 �궿겆귈뿅먈녡�',
		charsetASCII : 'ASCII',
		charsetCE : '揆筠戟�귂�逵剋戟逵 筠勻�棘極筠橘�곍분�',
		charsetCT : '�싍먈궿겆밂곍분� �귂�逵畇龜�녡먁압싻둔�',
		charsetCR : 'Cyrillic', // MISSING
		charsetGR : 'Greek', // MISSING
		charsetJP : 'Japanese', // MISSING
		charsetKR : 'Korean', // MISSING
		charsetTR : 'Turkish', // MISSING
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : 'Western European', // MISSING
		docType : 'Document Type Heading', // MISSING
		docTypeOther : 'Other Document Type Heading', // MISSING
		xhtmlDec : 'Include XHTML Declarations', // MISSING
		bgColor : 'Background Color', // MISSING
		bgImage : 'Background Image URL', // MISSING
		bgFixed : 'Non-scrolling (Fixed) Background', // MISSING
		txtColor : 'Text Color', // MISSING
		margin : 'Page Margins', // MISSING
		marginTop : 'Top', // MISSING
		marginLeft : 'Left', // MISSING
		marginRight : 'Right', // MISSING
		marginBottom : 'Bottom', // MISSING
		metaKeywords : 'Document Indexing Keywords (comma separated)', // MISSING
		metaDescription : 'Document Description', // MISSING
		metaAuthor : 'Author', // MISSING
		metaCopyright : 'Copyright', // MISSING
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
