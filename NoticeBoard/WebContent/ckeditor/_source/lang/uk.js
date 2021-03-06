/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Ukrainian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['uk'] =
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
	editorTitle : '龜筠克�곎궿압꽥먁� �筠畇逵克�궿앗�, %1',
	editorHelp : '戟逵�궿먈곍싼뽔귂� ALT 0 畇剋�� 畇棘勻�뽓닉분�',

	// ARIA descriptions.
	toolbars	: '�읩겆싻둔뿌� �뽓싼곎귂��꺪셸둔싼귂뽓� �筠畇逵克�궿앗�逵',
	editor		: '龜筠克�곎궿압꽥먁� �筠畇逵克�궿앗�',

	// Toolbar buttons without dialogs.
	source			: '�붠뙨둘�筠剋棘',
	newPage			: '�앆압꽥� �곎궿앗��뽓싻분�',
	save			: '�쀐귈둘�筠均�궿�',
	preview			: '�읩압왈둘�筠畇戟�뽓� 極筠�筠均剋�뤢�',
	cut				: '�믌먈��뽓론겉궿�',
	copy			: '�싍압왐뽔롊꽥겉궿�',
	paste			: '�믍곎궿겆꽥먈궿�',
	print			: '�붡��꺪�',
	underline		: '�읪뽓닉붇�筠�곍뿅둔싻먁�',
	bold			: '�뽓먈�戟龜橘',
	italic			: '�싎꺫��곍먁�',
	selectAll		: '�믌먁닌뽓뿅먈궿� 勻�곍�',
	removeFormat	: '�왨눺먈곎궿먈궿� �꾉앗�劇逵�귂꺪꽥겆싻싼�',
	strike			: '�쀐겆붇�筠�곍뿅둔싻먁�',
	subscript		: '�앆먁뙨싼뽓� �뽓싻닉둔붇�',
	superscript		: '�믌둘��끦싼뽓� �뽓싻닉둔붇�',
	horizontalrule	: '�볂앗�龜鈞棘戟�궿겆뿌뚍싻� 剋�뽓싼뽔�',
	pagebreak		: '�믍곎궿겆꽥먈궿� �棘鈞�龜勻 �곎궿앗��뽓싻분�',
	pagebreakAlt		: '�졤압롤�龜勻 鬼�궿앗��뽓싻분�',
	unlink			: '�믌먁닉겆뿅먈궿� 極棘�곍먁뿅겆싻싼�',
	undo			: '�읩압꽥둘�戟�꺫궿�',
	redo			: '�읩압꽹궿앗�龜�궿�',

	// Common messages and labels.
	common :
	{
		browseServer	: '�왧넓뿌뤢�',
		url				: 'URL',
		protocol		: '�읪�棘�궿압분압�',
		upload			: '�앆겆닌뽔곍뿅겉궿�',
		uploadSubmit	: '�앆겆닌뽔곍뿅겉궿� 戟逵 �곍둘�勻筠�',
		image			: '�쀐압귐�逵菌筠戟戟��',
		flash			: 'Flash',
		form			: '圭棘�劇逵',
		checkbox		: '�볂겆뿅앗눺분�',
		radio			: '�싍싻압왈분� 勻龜閨棘���',
		textField		: '龜筠克�곎궿압꽥� 極棘剋筠',
		textarea		: '龜筠克�곎궿압꽥� 棘閨剋逵�곎귂�',
		hiddenField		: '�읪�龜�끦압꽥겆싻� 極棘剋筠',
		button			: '�싍싻압왈분�',
		select			: '鬼極龜�곍압�',
		imageButton		: '�싍싻압왈분� �뽓� 鈞棘閨�逵菌筠戟戟�뤢�',
		notSet			: '<戟筠 勻龜鈞戟逵�눺둔싻�>',
		id				: '�녡닉둔싼궿먈꾊뽓분겉궿앗�',
		name			: '�녡�\'��',
		langDir			: '�앆겆왐��뤢셸압� 劇棘勻龜',
		langDirLtr		: '�쀐뿌뽓꽥� 戟逵極�逵勻棘 (LTR)',
		langDirRtl		: '鬼極�逵勻逵 戟逵剋�뽓꽥� (RTL)',
		langCode		: '�싍압� 劇棘勻龜',
		longDescr		: '�붠압꽥넓먁� 棘極龜�� URL',
		cssClass		: '�싍뿅겉� CSS',
		advisoryTitle	: '�쀐겆넓압뿅압꽥압�',
		cssStyle		: '鬼�궿먁뿌� CSS',
		ok				: '�왧�',
		cancel			: '鬼克逵�곎꺪꽥겉궿�',
		close			: '�쀐겆붇�龜�궿�',
		preview			: '�읩압왈둘�筠畇戟�뽓� 極筠�筠均剋�뤢�',
		generalTab		: '�왨곍싻압꽥싻�',
		advancedTab		: '�붠압닉겉궿분압꽥�',
		validateNumberFailed : '�쀐싻겉눺둔싻싼� 戟筠 �� �녢뽓뿅먁� �눺먈곍뿅압�.',
		confirmNewPage	: '�믍곎� 戟筠鈞閨筠�筠菌筠戟�� 鈞劇�뽓싻� 閨�꺪닌꺫귂� 勻�귂�逵�눺둔싼�. �믌� 勻極筠勻戟筠戟��, �됎� �끦앗눺둘궿� 鈞逵勻逵戟�궿겆뙨먈궿� 戟棘勻�� �곎궿앗��뽓싻붇�?',
		confirmCancel	: '�붠둘뤢붇� 棘極�녢뽔� 鈞劇�뽓싻둔싻�. �쀐겆붇�龜�궿� 勻�뽓분싻� 閨筠鈞 鈞閨筠�筠菌筠戟戟�� 鈞劇�뽓�?',
		options			: '�왧왐녢뽔�',
		target			: '揆�뽓뿌�',
		targetNew		: '�앆압꽥� 勻�뽓분싻� (_blank)',
		targetTop		: '�읩앗궿앗눺싻� 勻�뽓분싻� (_top)',
		targetSelf		: '�읩앗궿앗눺싻먁� �꾊�筠橘劇/勻�뽓분싻� (_self)',
		targetParent	: '�뫰겉귂뚍붇뽓꽹곎뚍분먁� �꾊�筠橘劇/勻�뽓분싻� (_parent)',
		langDirLTR		: '�쀐뿌뽓꽥� 戟逵極�逵勻棘 (LTR)',
		langDirRTL		: '鬼極�逵勻逵 戟逵剋�뽓꽥� (RTL)',
		styles			: '鬼�궿먁뿌� CSS',
		cssClasses		: '�싍뿅겉� CSS',
		width			: '珪龜�龜戟逵',
		height			: '�믌먈곍앗궿�',
		align			: '�믌먈��뽓꽥싼롊꽥겆싻싼�',
		alignLeft		: '�읩� 剋�뽓꽥압솅� 克�逵��',
		alignRight		: '�읩� 極�逵勻棘劇�� 克�逵��',
		alignCenter		: '�읩� �녡둔싼귂���',
		alignTop		: '�읩� 勻筠��끦싼뚍압솅� 克�逵��',
		alignMiddle		: '�읩� �곍둘�筠畇龜戟��',
		alignBottom		: '�읩� 戟龜菌戟�뚍압솅� 克�逵��',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '�믌먈곍앗궿� 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		invalidWidth	: '珪龜�龜戟逵 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		invalidCssLength	: '�쀐싻겉눺둔싻싼�, 勻克逵鈞逵戟筠 畇剋�� "%1" 勻 極棘剋�� 極棘勻龜戟戟棘 閨�꺫궿� 極棘鈞龜�궿먁꽥싻먁� �눺먈곍뿅압� 逵閨棘 閨筠鈞 畇�뽓밂곍싻압넓� 勻龜劇�뽔��� CSS 閨剋棘克�� (px, %, in, cm, mm, em, ex, pt, or pc).',
		invalidHtmlLength	: '�쀐싻겉눺둔싻싼�, 勻克逵鈞逵戟筠 畇剋�� "%1" 勻 極棘剋�� 極棘勻龜戟戟棘 閨�꺫궿� 極棘鈞龜�궿먁꽥싻먁� �눺먈곍뿅압� 逵閨棘 閨筠鈞 畇�뽓밂곍싻압넓� 勻龜劇�뽔��� HTML 閨剋棘克�� (px or %).',
		invalidInlineStyle	: '�쀐싻겉눺둔싻싼�, 勻克逵鈞逵戟筠 畇剋�� 勻閨�꺪닉압꽥겆싻압넓� �곎궿먁뿌� 極棘勻龜戟戟筠 �곍분뿅겆닉겉궿먈곎� 鈞 棘畇戟棘均棘 �눺� 克�뽓뿌뚍분앗� 克棘��궿둔뚜뽓� �� �꾉앗�劇逵�귂� "�뽓�\'�� : 鈞戟逵�눺둔싻싼�", �棘鈞畇�뽓뿅둔싻먈� 克�逵極克棘�� 鈞 克棘劇棘��.',
		cssLengthTooltip	: '�믌꽥둔닌뽔귂� 戟棘劇筠� 鈞戟逵�눺둔싻싼� 勻 極�뽓붇곍둔뿌뤣� 逵閨棘 �눺먈곍뿅� 鈞 畇�뽓밂곍싻앗� 棘畇龜戟龜�녢� CSS (px, %, in, cm, mm, em, ex, pt, or pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, 戟筠 畇棘�곎귂꺪왈싻�</span>'
	},

	contextmenu :
	{
		options : '�왧왐녢뽔� 克棘戟�궿둔붇곎궿싻압넓� 劇筠戟��'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '鬼極筠�녢뽓겆뿌뚍싻먁� �곍먁셸꽥압�',
		title		: '�왧귈둘��뽔귂� �곍왈둘녢뽓겆뿌뚍싻먁� �곍먁셸꽥압�',
		options : '�왧왐녢뽔�'
	},

	// Link dialog.
	link :
	{
		toolbar		: '�믍곎궿겆꽥먈궿�/�졤둔닉겆넘꺪꽥겉궿� 極棘�곍먁뿅겆싻싼�',
		other 		: '<�뽓싼댭먁�>',
		menu		: '�믍곎궿겆꽥먈궿� 極棘�곍먁뿅겆싻싼�',
		title		: '�읩앗곍먁뿅겆싻싼�',
		info		: '�녡싼꾉앗�劇逵�녢뽔� 極棘�곍먁뿅겆싻싼�',
		target		: '揆�뽓뿌�',
		upload		: '�앆겆닌뽔곍뿅겉궿�',
		advanced	: '�붠압닉겉궿분압꽥�',
		type		: '龜龜極 極棘�곍먁뿅겆싻싼�',
		toUrl		: 'URL',
		toAnchor	: '赳克�뽔� 戟逵 �녢� �곎궿앗��뽓싻붇�',
		toEmail		: '�빿�. 極棘�댮궿�',
		targetFrame		: '<�꾊�筠橘劇>',
		targetPopup		: '<勻龜極剋龜勻逵�롋눺� 勻�뽓분싻�>',
		targetFrameName	: '�녡�\'�� �녢뽓뿌뚍압꽥압넓� �꾊�筠橘劇��',
		targetPopupName	: '�녡�\'�� 勻龜極剋龜勻逵�롋눺압넓� 勻�뽓분싻�',
		popupFeatures	: '�믌뿅겉곎궿먁꽥앗곎귂� 勻龜極剋龜勻逵�롋눺압넓� 勻�뽓분싻�',
		popupResizable	: '�쑷겉곎댮궿겆귈압꽥겆싻�',
		popupStatusBar	: '�졥뤢닉압� �곎궿겉귂꺫곎�',
		popupLocationBar: '�읩겆싻둔뿌� 剋棘克逵�녢뽔�',
		popupToolbar	: '�읩겆싻둔뿌� �뽓싼곎귂��꺪셸둔싼귂뽓�',
		popupMenuBar	: '�읩겆싻둔뿌� 劇筠戟��',
		popupFullScreen	: '�읩압꽥싻먁� 筠克�逵戟 (IE)',
		popupScrollBars	: '鬼�귂��뽔눺분� 極�棘克��꺫궿분�',
		popupDependent	: '�쀐겆뿅둔뙨싻먁� (Netscape)',
		popupLeft		: '�읩압론먈녢뽔� 鈞剋�뽓꽥�',
		popupTop		: '�읩압론먈녢뽔� 鈞勻筠��끧�',
		id				: '�녡닉둔싼궿먈꾊뽓분겉궿앗�',
		langDir			: '�앆겆왐��뤢셸압� 劇棘勻龜',
		langDirLTR		: '�쀐뿌뽓꽥� 戟逵極�逵勻棘 (LTR)',
		langDirRTL		: '鬼極�逵勻逵 戟逵剋�뽓꽥� (RTL)',
		acccessKey		: '�볂겉��뤣눺� 克剋逵勻�뽔댭�',
		name			: '�녡�\'��',
		langCode			: '�싍압� 劇棘勻龜',
		tabIndex			: '�읩앗곍뿌뽓닉압꽥싼뽔곎귂� 極筠�筠�끦압닌�',
		advisoryTitle		: '�쀐겆넓압뿅압꽥압�',
		advisoryContentType	: '龜龜極 勻劇�뽔곎귂�',
		cssClasses		: '�싍뿅겉� CSS',
		charset			: '�싍압닌꺪꽥겆싻싼�',
		styles			: '鬼�궿먁뿌� CSS',
		rel			: '�쀐�\'�뤢론압�',
		selectAnchor		: '�왧귈둘��뽔귂� �뤢붇뽔�',
		anchorName		: '�쀐� �뽓�\'�뤢� 筠剋筠劇筠戟�귂�',
		anchorId			: '�쀐� �뽓닉둔싼궿먈꾊뽓분겉궿앗�棘劇 筠剋筠劇筠戟�귂�',
		emailAddress		: '�먒닌�筠�곍� 筠剋. 極棘�댮궿�',
		emailSubject		: '龜筠劇逵 剋龜�곎궿�',
		emailBody		: '龜�뽓뿅� 極棘勻�뽓닉압셸뿅둔싻싼�',
		noAnchors		: '(�� �녢뚍압솅� 畇棘克�꺪셸둔싼귂� 戟筠劇逵�� �뤢분앗��뽓�)',
		noUrl			: '�뫱꺪닌� 剋逵�곍분�, 勻克逵菌�뽔귂� URL 極棘�곍먁뿅겆싻싼�',
		noEmail			: '�뫱꺪닌� 剋逵�곍분�, 勻克逵菌�뽔귂� 逵畇�筠�� 筠剋. 極棘�댮궿�'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�믍곎궿겆꽥먈궿�/�졤둔닉겆넘꺪꽥겉궿� �뤢붇뽔�',
		menu		: '�믌뿅겉곎궿먁꽥앗곎귂� �뤢분앗���',
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� �뤢분앗���',
		name		: '�녡�\'�� �뤢분앗���',
		errorName	: '�뫱꺪닌� 剋逵�곍분�, 勻克逵菌�뽔귂� �뽓�\'�� �뤢분앗���',
		remove		: '�읪�龜閨�逵�궿� �뤢붇뽔�'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '�왧왐녢뽔� 戟�꺪셸둘�棘勻逵戟棘均棘 �곍왈먈곍붇�',
		bulletedTitle		: '�왧왐녢뽔� 劇逵�克棘勻逵戟棘均棘 �곍왈먈곍붇�',
		type				: '龜龜極',
		start				: '�읩앗눺겉궿� 鈞...',
		validateStartNumber				:'�읩앗눺겉궿분압꽥먁� 戟棘劇筠� �곍왈먈곍붇� 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		circle				: '�싎뽓뿌뚎녡�',
		disc				: '�싎��꺪뙨둘눺압�',
		square				: '�싍꽥겆닌�逵�궿먁�',
		none				: '�앆둔셸�',
		notset				: '<戟筠 勻克逵鈞逵戟棘>',
		armenian			: '�믍뽔�劇筠戟�곎뚍분� 戟�꺪셸둘�逵�녢뽔�',
		georgian			: '�볃��꺪론먁싼곎뚍분� 戟�꺪셸둘�逵�녢뽔� (an, ban, gan �� ��.畇.)',
		lowerRoman			: '�쑷겆뿌� �龜劇�곎뚍붇� (i, ii, iii, iv, v �� ��.畇.)',
		upperRoman			: '�믌둔뿅먁붇� �龜劇�곎뚍붇� (I, II, III, IV, V �� ��.畇.)',
		lowerAlpha			: '�쑷겆뿌� 剋逵��. 閨�꺪분꽥� (a, b, c, d, e �� ��.畇.)',
		upperAlpha			: '�믌둔뿅먁붇� 剋逵��. 閨�꺪분꽥� (A, B, C, D, E �� ��.畇.)',
		lowerGreek			: '�쑷겆뿌� 均�. 閨�꺪분꽥� (逵剋�뚎꾉�, 閨筠�궿�, 均逵劇劇逵 �� ��.畇.)',
		decimal				: '�붠둘곎뤣궿분압꽹� (1, 2, 3 �� ��.畇.)',
		decimalLeadingZero	: '�붠둘곎뤣궿분압꽹� 鈞 戟�꺪뿅둔� (01, 02, 03 �� ��.畇.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '�쀐싻겆밂궿� �� 鈞逵劇�뽓싻먈궿�',
		find				: '�읩앗댮꺪�',
		replace				: '�쀐겆솅뽓싻�',
		findWhat			: '珪�꺪분겉궿�:',
		replaceWith			: '�쀐겆솅뽓싻먈궿� 戟逵:',
		notFoundMsg			: '�믌분겆론겆싻먁� �궿둔붇곎� 戟筠 鈞戟逵橘畇筠戟棘.',
		findOptions			: '�읩겉�逵劇筠�귂�龜 �읩앗댮꺪붇�',
		matchCase			: '�믍�逵�끦압꽹꺪꽥겉궿� �筠均�뽔곎귂�',
		matchWord			: '�쀐귐뽓� �녢뽓뿅먈� �곍뿌뽓�',
		matchCyclic			: '揆龜克剋�뽔눺싻� 鈞逵劇�뽓싻�',
		replaceAll			: '�쀐겆솅뽓싻먈궿� 勻�곍�',
		replaceSuccessMsg	: '%1 �곍왐뽓꽥왈겆닌뽓싼�(戟��) 鈞逵劇�뽓싻둔싻�.'
	},

	// Table Dialog
	table :
	{
		toolbar		: '龜逵閨剋龜�녢�',
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� �궿겆귈뿅먈녢�',
		menu		: '�믌뿅겉곎궿먁꽥앗곎귂� �궿겆귈뿅먈녢�',
		deleteTable	: '�믌먁닉겆뿅먈궿� �궿겆귈뿅먈녢�',
		rows		: '�졥뤢닉분�',
		columns		: '鬼�궿압꽥귐녢�',
		border		: '�졤압론솅뽔� �逵劇克龜',
		widthPx		: '極�뽓붇곍둔뿌뽓�',
		widthPc		: '勻�뽓닌곍앗궿붇뽓�',
		widthUnit	: '�왧닉먁싻먈녢� 勻龜劇�뽔�.',
		cellSpace	: '�읪�棘劇�뽓뙨압�',
		cellPad		: '�믌싼꺫귂�. 勻�뽓닌곎귂꺪�',
		caption		: '�쀐겆넓압뿅압꽥압� �궿겆귈뿅먈녢�',
		summary		: '�붠둘궿겆뿌뚍싻먁� 棘極龜�� 鈞逵均棘剋棘勻克�� �궿겆귈뿅먈녢�',
		headers		: '�쀐겆넓압뿅압꽥분� �곎궿압꽥귐녢뽓�/��뤢닉붇뽓�',
		headersNone		: '�뫰둔� 鈞逵均棘剋棘勻克�뽓�',
		headersColumn	: '鬼�궿압꽥귐녢�',
		headersRow		: '�졥뤢닉분�',
		headersBoth		: '鬼�궿압꽥귐녢� �� ��뤢닉분�',
		invalidRows		: '�싎뽓뿌뚍붇뽔곎귂� ��뤢닉붇뽓� 極棘勻龜戟戟逵 閨�꺫궿� 閨�뽓뿌뚎댭앗� 0.',
		invalidCols		: '�싎뽓뿌뚍붇뽔곎귂� �곎궿압꽥귐녢뽓� 極棘勻龜戟戟逵 閨�꺫궿� 閨�뽓뿌뚎댭앗� 0.',
		invalidBorder	: '�졤압론솅뽔� �逵劇克龜 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		invalidWidth	: '珪龜�龜戟逵 �궿겆귈뿅먈녢� 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		invalidHeight	: '�믌먈곍앗궿� �궿겆귈뿅먈녢� 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		invalidCellSpacing	: '�읪�棘劇�뽓뙨압� 劇�뽓� 克棘劇�뽔�克逵劇龜 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		invalidCellPadding	: '�믌싼꺫귂�. 勻�뽓닌곎귂꺪� 克棘劇�뽔�克龜 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',

		cell :
		{
			menu			: '�싍압솅뽔�克龜',
			insertBefore	: '�믍곎궿겆꽥먈궿� 克棘劇�뽔�克�� 極筠�筠畇',
			insertAfter		: '�믍곎궿겆꽥먈궿� 克棘劇�뽔�克�� 極�뽔곍뿌�',
			deleteCell		: '�믌먁닉겆뿅먈궿� 克棘劇�뽔�克龜',
			merge			: '�왧�\'�붠닉싻겉궿� 克棘劇�뽔�克龜',
			mergeRight		: '�왧�\'�붠닉싻겉궿� �곍왐�逵勻逵',
			mergeDown		: '�왧�\'�붠닉싻겉궿� 畇棘戟龜鈞��',
			splitHorizontal	: '�졤압론닌뽓뿅먈궿� 克棘劇�뽔�克�� 極棘 均棘�龜鈞棘戟�궿겆뿌�',
			splitVertical	: '�졤압론닌뽓뿅먈궿� 克棘劇�뽔�克�� 極棘 勻筠��궿먁분겆뿌�',
			title			: '�믌뿅겉곎궿먁꽥앗곎귂� 克棘劇�뽔�克龜',
			cellType		: '龜龜極 克棘劇�뽔�克龜',
			rowSpan			: '�왧�\'�붠닉싻겆싻싼� ��뤢닉붇뽓�',
			colSpan			: '�왧�\'�붠닉싻겆싻싼� �곎궿압꽥왐녢뽓�',
			wordWrap		: '�먒꽹궿압왈둘�筠戟筠�곍둔싻싼� �궿둔붇곎귂�',
			hAlign			: '�볂앗�龜鈞. 勻龜��뽓꽥싼롊꽥겆싻싼�',
			vAlign			: '�믌둘���. 勻龜��뽓꽥싼롊꽥겆싻싼�',
			alignBaseline	: '�읩� 閨逵鈞棘勻�뽓� 剋�뽓싼뽔�',
			bgColor			: '�싍압뿌뽔� �꾉압싼�',
			borderColor		: '�싍압뿌뽔� �逵劇克龜',
			data			: '�붠겆싼�',
			header			: '�쀐겆넓압뿅압꽥압�',
			yes				: '龜逵克',
			no				: '�앇�',
			invalidWidth	: '珪龜�龜戟逵 克棘劇�뽔�克龜 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
			invalidHeight	: '�믌먈곍앗궿� 克棘劇�뽔�克龜 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
			invalidRowSpan	: '�싎뽓뿌뚍붇뽔곎귂� 棘閨\'�붠닉싼꺪꽥겆싻먈� ��뤢닉붇뽓� 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
			invalidColSpan	: '�싎뽓뿌뚍붇뽔곎귂� 棘閨\'�붠닉싼꺪꽥겆싻먈� �곎궿압꽥귐녢뽓� 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
			chooseColor		: '�왧귐�逵�궿�'
		},

		row :
		{
			menu			: '�졥뤢닉분�',
			insertBefore	: '�믍곎궿겆꽥먈궿� ��뤢닉압� 極筠�筠畇',
			insertAfter		: '�믍곎궿겆꽥먈궿� ��뤢닉압� 極�뽔곍뿌�',
			deleteRow		: '�믌먁닉겆뿅먈궿� ��뤢닉분�'
		},

		column :
		{
			menu			: '鬼�궿압꽥귐녢�',
			insertBefore	: '�믍곎궿겆꽥먈궿� �곎궿압꽥귈둘녢� 極筠�筠畇',
			insertAfter		: '�믍곎궿겆꽥먈궿� �곎궿압꽥귈둘녢� 極�뽔곍뿌�',
			deleteColumn	: '�믌먁닉겆뿅먈궿� �곎궿압꽥귐녢�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� 克戟棘極克龜',
		text		: '�쀐싻겉눺둔싻싼�',
		type		: '龜龜極',
		typeBtn		: '�싍싻압왈분� (button)',
		typeSbm		: '�앆겆닌뽔곍뿅겉궿� (submit)',
		typeRst		: '�왨눺먈곎궿먈궿� (reset)'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�믌뿅겉곎궿먁꽥앗곎귂� 均逵剋棘�눺분�',
		radioTitle	: '�믌뿅겉곎궿먁꽥앗곎귂� 克戟棘極克龜 勻龜閨棘���',
		value		: '�쀐싻겉눺둔싻싼�',
		selected	: '�왧귐�逵戟逵'
	},

	// Form Dialog.
	form :
	{
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� �꾉앗�劇龜',
		menu		: '�믌뿅겉곎궿먁꽥앗곎귂� �꾉앗�劇龜',
		action		: '�붡뽔�',
		method		: '�쑷둘궿압�',
		encoding	: '�싍압닌꺪꽥겆싻싼�'
	},

	// Select Field Dialog.
	select :
	{
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� �곍왈먈곍붇�',
		selectInfo	: '�녡싼꾉�',
		opAvail		: '�붠앗곎귂꺪왈싼� 勻逵��뽓겆싼궿�',
		value		: '�쀐싻겉눺둔싻싼�',
		size		: '�싎뽓뿌뚍붇뽔곎귂�',
		lines		: '勻龜畇龜劇龜�� 極棘鈞龜�녢뽓� �� �곍왈먈곍붇�',
		chkMulti	: '鬼極龜�곍압� 鈞 劇�꺪뿌뚎궿먁꽥먁귈앗�棘劇',
		opText		: '龜筠克�곎�',
		opValue		: '�쀐싻겉눺둔싻싼�',
		btnAdd		: '�붠압귈겆꽥먈궿�',
		btnModify	: '�쀐솅뽓싻먈궿�',
		btnUp		: '�믌넓앗���',
		btnDown		: '�믌싻먁�',
		btnSetValue : '�믍곎궿겆싻압꽥먈궿� �뤢� 棘閨�逵戟筠 鈞戟逵�눺둔싻싼�',
		btnDelete	: '�믌먁닉겆뿅먈궿�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� �궿둔붇곎궿압꽥앗� 棘閨剋逵�곎귂�',
		cols		: '鬼�궿압꽥귐녢�',
		rows		: '�졥뤢닉분�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� �궿둔붇곎궿압꽥압넓� 極棘剋��',
		name		: '�녡�\'��',
		value		: '�쀐싻겉눺둔싻싼�',
		charWidth	: '珪龜�龜戟逵',
		maxChars	: '�쑷겆붇�. 克-�귂� �곍먁셸꽥압뿌뽓�',
		type		: '龜龜極',
		typeText	: '龜筠克�곎�',
		typePass	: '�읩겉�棘剋��'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�믌뿅겉곎궿먁꽥앗곎귂� 極�龜�끦압꽥겆싻압넓� 極棘剋��',
		name	: '�녡�\'��',
		value	: '�쀐싻겉눺둔싻싼�'
	},

	// Image Dialog.
	image :
	{
		title		: '�믌뿅겉곎궿먁꽥앗곎귂� 鈞棘閨�逵菌筠戟戟��',
		titleButton	: '�믌뿅겉곎궿먁꽥앗곎귂� 克戟棘極克龜 �뽓� 鈞棘閨�逵菌筠戟戟�뤢�',
		menu		: '�믌뿅겉곎궿먁꽥앗곎귂� 鈞棘閨�逵菌筠戟戟��',
		infoTab		: '�녡싼꾉앗�劇逵�녢뽔� 極�棘 鈞棘閨�逵菌筠戟戟��',
		btnUpload	: '�앆겆닌뽔곍뿅겉궿� 戟逵 �곍둘�勻筠�',
		upload		: '�앆겆닌뽔곍뿅겉궿�',
		alt			: '�먒뿌뚎궿둘�戟逵�궿먁꽥싻먁� �궿둔붇곎�',
		lockRatio	: '�쀐귈둘�筠均�궿� 極�棘極棘��녢뽔�',
		resetSize	: '�왨눺먈곎궿먈궿� 極棘剋�� �棘鈞劇�뽔��뽓�',
		border		: '�졤겆셸분�',
		hSpace		: '�볂앗�龜鈞. 勻�뽓닌곎귂꺪�',
		vSpace		: '�믌둘���. 勻�뽓닌곎귂꺪�',
		alertUrl	: '�뫱꺪닌� 剋逵�곍분�, 勻克逵菌�뽔귂� URL 鈞棘閨�逵菌筠戟戟��',
		linkTab		: '�읩앗곍먁뿅겆싻싼�',
		button2Img	: '�뫰겆뙨겉붡궿� 極筠�筠�궿꽥앗�龜�궿� 棘閨�逵戟�� 克戟棘極克��-鈞棘閨�逵菌筠戟戟�� 戟逵 極�棘�곎궿� 鈞棘閨�逵菌筠戟戟��?',
		img2Button	: '�뫰겆뙨겉붡궿� 極筠�筠�궿꽥앗�龜�궿� 棘閨�逵戟筠 鈞棘閨�逵菌筠戟戟�� 戟逵 克戟棘極克��-鈞棘閨�逵菌筠戟戟��?',
		urlMissing	: '�믌분겆뚜뽔귂� URL 鈞棘閨�逵菌筠戟戟��.',
		validateBorder	: '珪龜�龜戟逵 �逵劇克龜 極棘勻龜戟戟逵 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		validateHSpace	: '�볂앗�龜鈞. 勻�뽓닌곎귂꺪� 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		validateVSpace	: '�믌둘���. 勻�뽓닌곎귂꺪� 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.'
	},

	// Flash Dialog
	flash :
	{
		properties		: '�믌뿅겉곎궿먁꽥앗곎귂� Flash',
		propertiesTab	: '�믌뿅겉곎궿먁꽥앗곎귂�',
		title			: '�믌뿅겉곎궿먁꽥앗곎귂� Flash',
		chkPlay			: '�먒꽹궿압왐�棘均�逵勻逵戟戟��',
		chkLoop			: '揆龜克剋�뽔눺싻�',
		chkMenu			: '�붠압론꽥압뿅먈궿� 劇筠戟�� Flash',
		chkFull			: '�붠압론꽥압뿅먈궿� 極棘勻戟棘筠克�逵戟戟龜橘 極筠�筠均剋�뤢�',
 		scale			: '�쑷겉곎댮궿겆�',
		scaleAll		: '�읩압분겆론겉궿� 勻�곍�',
		scaleNoBorder	: '�뫰둔� �逵劇克龜',
		scaleFit		: '�읩앗�. �棘鈞劇�뽔�',
		access			: '�붠앗곎귂꺪� 畇棘 �곍붇�龜極�궿�',
		accessAlways	: '�쀐겆꽥뙨닉�',
		accessSameDomain: '�� �궿압넓� 菌 畇棘劇筠戟逵',
		accessNever		: '�앇뽓분압뿅�',
		alignAbsBottom	: '�읩� 戟龜菌戟�뚍압솅� 克�逵�� (abs)',
		alignAbsMiddle	: '�읩� �곍둘�筠畇龜戟�� (abs)',
		alignBaseline	: '�읩� 閨逵鈞棘勻�뽓� 剋�뽓싼뽔�',
		alignTextTop	: '龜筠克�곎� 極棘 勻筠��끦싼뚍압솅� 克�逵��',
		quality			: '赳克�뽔곎귂�',
		qualityBest		: '�믍뽓닉솅뽓싻싻�',
		qualityHigh		: '�믌먈곍압분�',
		qualityAutoHigh	: '�먒꽹궿압�. 勻�뽓닉솅뽓싻싻�',
		qualityMedium	: '鬼筠�筠畇戟��',
		qualityAutoLow	: '�먒꽹궿압�. 戟龜鈞�뚍분�',
		qualityLow		: '�앆먁롤뚍분�',
		windowModeWindow: '�믍뽓분싻�',
		windowModeOpaque: '�앆둔왐�棘鈞棘��뽔곎귂�',
		windowModeTransparent : '�읪�棘鈞棘��뽔곎귂�',
		windowMode		: '�믍뽓분압싻싻먁� �筠菌龜劇',
		flashvars		: '�쀐솅뽓싻싼� Flash',
		bgcolor			: '�싍압뿌뽔� �꾉압싼�',
		hSpace			: '�볂앗�龜鈞. 勻�뽓닌곎귂꺪�',
		vSpace			: '�믌둘���. 勻�뽓닌곎귂꺪�',
		validateSrc		: '�뫱꺪닌� 剋逵�곍분�, 勻克逵菌�뽔귂� URL 極棘�곍먁뿅겆싻싼�',
		validateHSpace	: '�볂앗�龜鈞. 勻�뽓닌곎귂꺪� 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.',
		validateVSpace	: '�믌둘���. 勻�뽓닌곎귂꺪� 極棘勻龜戟筠戟 閨�꺫궿� �녢뽓뿅먁� �눺먈곍뿅압�.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�읩둘�筠勻�뽔�龜�궿� 棘��꾉압넘�逵�꾊뽔�',
		title			: '�읩둘�筠勻�뽔�克逵 棘��꾉압넘�逵�꾊뽔�',
		notAvailable	: '�믌먁귈겉눻궿�, 逵剋筠 �곍둘�勻�뽔� 戟逵�逵鈞�� 戟筠畇棘�곎귂꺪왈싻먁�.',
		errorLoading	: '�읩압셸먁뿅분� 鈞逵勻逵戟�궿겆뙨둔싻싼� : %s.',
		notInDic		: '�앆둔셸겉� 勻 �곍뿅압꽥싻먁붇�',
		changeTo		: '�쀐겆솅뽓싻먈궿� 戟逵',
		btnIgnore		: '�읪�棘極�꺫곎궿먈궿�',
		btnIgnoreAll	: '�읪�棘極�꺫곎궿먈궿� 勻�곍�',
		btnReplace		: '�쀐겆솅뽓싻먈궿�',
		btnReplaceAll	: '�쀐겆솅뽓싻먈궿� 勻�곍�',
		btnUndo			: '�앆겆론겆�',
		noSuggestions	: '- 戟筠劇逵�� 勻逵��뽓겆싼귂뽓� -',
		progress		: '�믌먁분압싼꺫붡귂뚎곎� 極筠�筠勻�뽔�克逵 棘��꾉압넘�逵�꾊뽔�...',
		noMispell		: '�읩둘�筠勻�뽔�克�� 棘��꾉압넘�逵�꾊뽔� 鈞逵勻筠��댭둔싻�: 極棘劇龜剋棘克 戟筠 鈞戟逵橘畇筠戟棘',
		noChanges		: '�읩둘�筠勻�뽔�克�� 棘��꾉압넘�逵�꾊뽔� 鈞逵勻筠��댭둔싻�: 菌棘畇戟筠 �곍뿅압꽥� 戟筠 鈞劇�뽓싻둔싻�',
		oneChange		: '�읩둘�筠勻�뽔�克�� 棘��꾉압넘�逵�꾊뽔� 鈞逵勻筠��댭둔싻�: 鈞劇�뽓싻둔싻� 棘畇戟筠 �곍뿅압꽥�',
		manyChanges		: '�읩둘�筠勻�뽔�克�� 棘��꾉압넘�逵�꾊뽔� 鈞逵勻筠��댭둔싻�: 1% �곍뿌뽓�(棘勻逵) 鈞劇�뽓싻둔싻�',
		ieSpellDownload	: '�쑷압닌꺪뿌� 極筠�筠勻�뽔�克龜 棘��꾉압넘�逵�꾊뽔� 戟筠 勻�곎궿겆싻압꽥뿅둔싻�. �뫰겆뙨겉붡궿� 鈞逵勻逵戟�궿겆뙨먈궿� 橘棘均棘 鈞逵�逵鈞?'
	},

	smiley :
	{
		toolbar	: '鬼劇逵橘剋龜克',
		title	: '�믍곎궿겆꽥먈궿� �곍셸겆밀뿅먁�',
		options : '�왧왐녢뽔� �곍셸겆밀뿅먁붇뽓�'
	},

	elementsPath :
	{
		eleLabel : '珪剋�뤣�',
		eleTitle : '%1 筠剋筠劇筠戟��'
	},

	numberedlist	: '�앇꺪셸둘�棘勻逵戟龜橘 �곍왈먈곍압�',
	bulletedlist	: '�쑷겉�克�뽔�棘勻逵戟龜橘 �곍왈먈곍압�',
	indent			: '�쀐귐뽓뿌뚎댭먈궿� 勻�뽓닌곎귂꺪�',
	outdent			: '�쀐셸둔싼댭먈궿� 勻�뽓닌곎귂꺪�',

	justify :
	{
		left	: '�읩� 剋�뽓꽥압솅� 克�逵��',
		center	: '�읩� �녡둔싼귂���',
		right	: '�읩� 極�逵勻棘劇�� 克�逵��',
		block	: '�읩� �댭먈�龜戟��'
	},

	blockquote : '揆龜�궿겉궿�',

	clipboard :
	{
		title		: '�믍곎궿겆꽥먈궿�',
		cutError	: '�앆겆뿅겉댮귂꺪꽥겆싻싼� 閨筠鈞極筠克龜 �믌겉댭압넓� 閨�逵�꺪론둘�逵 戟筠 畇棘鈞勻棘剋�뤣롋귂� �筠畇逵克�궿앗��� 逵勻�궿압셸겉궿먈눺싻� 勻龜克棘戟�꺪꽥겉궿� 棘極筠�逵�녢뽔� 勻龜��뽓롤꺪꽥겆싻싼�. �뫱꺪닌� 剋逵�곍분�, 勻龜克棘�龜�곎궿압꽹꺪밂궿� 克剋逵勻�뽓겉귂꺫��� 畇剋�� �녢뚍압넓� (Ctrl/Cmd+X)',
		copyError	: '�앆겆뿅겉댮귂꺪꽥겆싻싼� 閨筠鈞極筠克龜 �믌겉댭압넓� 閨�逵�꺪론둘�逵 戟筠 畇棘鈞勻棘剋�뤣롋귂� �筠畇逵克�궿앗��� 逵勻�궿압셸겉궿먈눺싻� 勻龜克棘戟�꺪꽥겉궿� 棘極筠�逵�녢뽔� 克棘極�뽔롊꽥겆싻싼�. �뫱꺪닌� 剋逵�곍분�, 勻龜克棘�龜�곎궿압꽹꺪밂궿� 克剋逵勻�뽓겉귂꺫��� 畇剋�� �녢뚍압넓� (Ctrl/Cmd+C).',
		pasteMsg	: '�뫱꺪닌� 剋逵�곍분�, 勻�곎궿겆꽹궿� �뽓싼꾉앗�劇逵�녢뽔� 鈞 閨�꺫꾉둘�逵 棘閨劇�뽓싼� 勻 �녢� 棘閨剋逵�곎귂�, 克棘�龜�곎귂꺫롋눺먈곎� 克棘劇閨�뽓싻겉녢뽔붡� 克剋逵勻�뽔� (<STRONG>Ctrl/Cmd+V</STRONG>), �궿� 戟逵�궿먈곍싼뽔귂� <STRONG>OK</STRONG>.',
		securityMsg	: '�졤둔닉겆붇궿앗� 戟筠 劇棘菌筠 棘�귂�龜劇逵�궿� 極��뤢셸먁� 畇棘�곎귂꺪� 畇棘 閨�꺫꾉둘��� 棘閨劇�뽓싼� �� 鈞勻\'�뤢론붇� 鈞 戟逵剋逵�댮귂꺪꽥겆싻싼뤢셸� �믌겉댭압넓� 閨�逵�꺪론둘�逵. �믌겆� 極棘�귂��뽓귈싻� 勻�곎궿겆꽥먈궿� �뽓싼꾉앗�劇逵�녢뽔� 勻 �녡� 勻�뽓분싻�.',
		pasteArea	: '�왧귈뿅겉곎귂� 勻�곎궿겆꽥분�'
	},

	pastefromword :
	{
		confirmCleanup	: '龜筠克�곎�, �됎� �믌� 戟逵劇逵均逵�붡궿둘곎� 勻�곎궿겆꽥먈궿�, �곎끦압뙨먁� 戟逵 �곍분압왐뽓밀압꽥겆싻먁� 鈞 Word. �뫰겆뙨겉붡궿� 棘�눺먈곎궿먈궿� 橘棘均棘 �꾉앗�劇逵�귂꺪꽥겆싻싼� 極筠�筠畇 勻�곎궿겆꽥뿌뤢싻싼뤢�?',
		toolbar			: '�믍곎궿겆꽥먈궿� 鈞 Word',
		title			: '�믍곎궿겆꽥먈궿� 鈞 Word',
		error			: '�앆둔셸압뙨뿅먁꽥� 棘�눺먈곎궿먈궿� �꾉앗�劇逵�귂꺪꽥겆싻싼� �눺둘�筠鈞 勻戟�꺫귂��뽔댭싼� 極棘劇龜剋克��.'
	},

	pasteText :
	{
		button	: '�믍곎궿겆꽥먈궿� �귂뽓뿌뚍분� �궿둔붇곎�',
		title	: '�믍곎궿겆꽥먈궿� �귂뽓뿌뚍분� �궿둔붇곎�'
	},

	templates :
	{
		button			: '珪逵閨剋棘戟龜',
		title			: '珪逵閨剋棘戟龜 鈞劇�뽔곎귂�',
		options : '�왧왐녢뽔� �댭겆귈뿅압싼�',
		insertOption	: '�쀐겆솅뽓싻먈궿� 極棘�궿앗눺싻먁� 勻劇�뽔곎�',
		selectPromptMsg	: '�왧귈둘��뽔귂�, 閨�꺪닌� 剋逵�곍분�, �댭겆귈뿅압� 畇剋�� 勻�뽓닉붇�龜�귂귂� 勻 �筠畇逵克�궿앗���<br>(極棘�궿앗눺싻먁� 鈞劇�뽔곎� 閨�꺪닉� 勻�귂�逵�눺둔싻�):',
		emptyListMsg	: '(�앆� 鈞戟逵橘畇筠戟棘 菌棘畇戟棘均棘 �댭겆귈뿅압싼�)'
	},

	showBlocks : '�읩압분겆롤꺪꽥겉궿� 閨剋棘克龜',

	stylesCombo :
	{
		label		: '鬼�궿먁뿌�',
		panelTitle	: '鬼�궿먁뿌� �꾉앗�劇逵�귂꺪꽥겆싻싼�',
		panelTitle1	: '�뫰뿅앗눺싼� �곎궿먁뿌�',
		panelTitle2	: '�졥뤢닉분압꽹� �곎궿먁뿌�',
		panelTitle3	: '�왧�\'�붠붇궿싼� �곎궿먁뿌�'
	},

	format :
	{
		label		: '圭棘�劇逵�귂꺪꽥겆싻싼�',
		panelTitle	: '圭棘�劇逵�귂꺪꽥겆싻싼� 極逵�逵均�逵�꾉�',

		tag_p		: '�앆앗�劇逵剋�뚍싻먁�',
		tag_pre		: '圭棘�劇逵�궿압꽥겆싻먁�',
		tag_address	: '�먒닌�筠�곍�',
		tag_h1		: '�쀐겆넓압뿅압꽥압� 1',
		tag_h2		: '�쀐겆넓압뿅압꽥압� 2',
		tag_h3		: '�쀐겆넓압뿅압꽥압� 3',
		tag_h4		: '�쀐겆넓압뿅압꽥압� 4',
		tag_h5		: '�쀐겆넓압뿅압꽥압� 5',
		tag_h6		: '�쀐겆넓압뿅압꽥압� 6',
		tag_div		: '�앆앗�劇逵剋�뚍싻먁� (div)'
	},

	div :
	{
		title				: '鬼�궿꽥앗�龜�궿� 閨剋棘克-克棘戟�궿둔밀싻둘�',
		toolbar				: '鬼�궿꽥앗�龜�궿� 閨剋棘克-克棘戟�궿둔밀싻둘�',
		cssClassInputLabel	: '�싍뿅겉� CSS',
		styleSelectLabel	: '鬼�궿먁뿌� CSS',
		IdInputLabel		: '�녡닉둔싼궿먈꾊뽓분겉궿앗�',
		languageCodeInputLabel	: '�싍압� 劇棘勻龜',
		inlineStyleInputLabel	: '�믌왈먈곍겆싻먁� �곎궿먁뿌�',
		advisoryTitleInputLabel	: '�쀐솅뽔곎� 勻龜極剋龜勻逵�롋눺앗� 極�뽓닉분겆론분�',
		langDirLabel		: '�앆겆왐��뤢셸압� 劇棘勻龜',
		langDirLTRLabel		: '�쀐뿌뽓꽥� 戟逵極�逵勻棘 (LTR)',
		langDirRTLLabel		: '鬼極�逵勻逵 戟逵剋�뽓꽥� (RTL)',
		edit				: '�졤둔닉겆넘꺪꽥겉궿� 閨剋棘克',
		remove				: '�믌먁닉겆뿅먈궿� 閨剋棘克'
  	},

	iframe :
	{
		title		: '�앆겆뿅겉댮귂꺪꽥겆싻싼� 畇剋�� IFrame',
		toolbar		: 'IFrame',
		noUrl		: '�뫱꺪닌� 剋逵�곍분� 勻勻筠畇�뽔귂� 極棘�곍먁뿅겆싻싼� 畇剋�� IFrame',
		scrolling	: '叫勻�뽓셸분싼꺫궿� 極�棘克��꺫궿붇�',
		border		: '�읩압분겆론겉궿� �逵劇克龜 �꾊�筠橘劇��'
	},

	font :
	{
		label		: '珪�龜�꾊�',
		voiceLabel	: '珪�龜�꾊�',
		panelTitle	: '珪�龜�꾊�'
	},

	fontSize :
	{
		label		: '�졤압론솅뽔�',
		voiceLabel	: '�졤압론솅뽔� �댮�龜�꾊귂�',
		panelTitle	: '�졤압론솅뽔�'
	},

	colorButton :
	{
		textColorTitle	: '�싍압뿌뽔� �궿둔붇곎귂�',
		bgColorTitle	: '�싍압뿌뽔� �꾉압싼�',
		panelTitle		: '�싍압뿌뚍앗�龜',
		auto			: '�먒꽹궿�',
		more			: '�싍압뿌뚍앗�龜...'
	},

	colors :
	{
		'000' : '槻棘�戟龜橘',
		'800000' : '�뫰앗�畇棘勻龜橘',
		'8B4513' : '�싍앗�龜�눺싻둔꽥먁�',
		'2F4F4F' : '龜筠劇戟龜橘 �곎뽔�棘-鈞筠剋筠戟龜橘',
		'008080' : '�쑷앗��곎뚍분앗� �끦꽥먁뿌�',
		'000080' : '鬼剋龜勻棘勻龜橘',
		'4B0082' : '�녡싻닉먁넓�',
		'696969' : '龜筠劇戟棘�곎뽔�龜橘',
		'B22222' : '龜筠劇戟棘�눺둘�勻棘戟龜橘',
		'A52A2A' : '�싍겉댮궿겆싻압꽥먁�',
		'DAA520' : '�뫰둔뙨둔꽥먁�',
		'006400' : '龜筠劇戟棘鈞筠剋筠戟龜橘',
		'40E0D0' : '�뫱뽔��롊론압꽥먁�',
		'0000CD' : '龜筠劇戟棘�곍먁싼뽓�',
		'800080' : '�읪꺫�極�꺫�戟龜橘',
		'808080' : '鬼�뽔�龜橘',
		'F00' : '槻筠�勻棘戟龜橘',
		'FF8C00' : '龜筠劇戟棘棘�逵戟菌筠勻龜橘',
		'FFD700' : '�뽓압꽹궿먁�',
		'008000' : '�쀐둔뿅둔싻먁�',
		'0FF' : '鬼龜戟�뚍�-鈞筠剋筠戟龜橘',
		'00F' : '鬼龜戟�뽓�',
		'EE82EE' : '圭�뽓압뿅둘궿압꽥먁�',
		'A9A9A9' : '鬼勻�뽔궿뿅앗곎뽔�龜橘',
		'FFA07A' : '�졤압뙨둔꽥먁�',
		'FFA500' : '�왨�逵戟菌筠勻龜橘',
		'FFFF00' : '赳�곍붇�逵勻棘菌棘勻�궿먁�',
		'00FF00' : '鬼逵剋逵�궿압꽥먁�',
		'AFEEEE' : '鬼勻�뽔궿뿅압귐뽔��롊론압꽥먁�',
		'ADD8E6' : '�뫰뿅겆분먈궿싻먁�',
		'DDA0DD' : '鬼勻�뽔궿뿅앗꾊뽓압뿅둘궿압꽥먁�',
		'D3D3D3' : '鬼��뽓귈뿌뤣곎궿먁�',
		'FFF0F5' : '鬼勻�뽔궿뿅앗�棘菌筠勻龜橘',
		'FAEBD7' : '鬼勻�뽔궿뿅압앗�逵戟菌筠勻龜橘',
		'FFFFE0' : '鬼勻�뽔궿뿅압뙨압꽹궿먁�',
		'F0FFF0' : '鬼勻�뽔궿뿅압론둔뿅둔싻먁�',
		'F0FFFF' : '鬼勻�뽔궿뿅먁� �곍먁싼뚍�-鈞筠剋筠戟龜橘',
		'F0F8FF' : '鬼勻�뽔궿뿅압귈뿅겆분먈궿싻먁�',
		'E6E6FA' : '�쎩겆꽥겆싻닉압꽥먁�',
		'FFF' : '�뫱뽓뿅먁�'
	},

	scayt :
	{
		title			: '�읩둘�筠�꾊뽔�克逵 棘��꾉압넘�逵�꾊뽔� 極棘 劇�뽔��� 戟逵閨棘���',
		opera_title		: '�앆� 極�뽓닌귂�龜劇�꺫붡귂뚎곎� 勻 Opera',
		enable			: '�믌꽹뽓셸분싼꺫궿� SCAYT',
		disable			: '�믌먁셸분싼꺫궿� SCAYT',
		about			: '�읪�棘 SCAYT',
		toggle			: '�읩둘�筠劇克戟�꺫궿� SCAYT',
		options			: '�왧왐녢뽔�',
		langs			: '�쑷압꽥�',
		moreSuggestions	: '�뫱뽓뿌뚎댭� 勻逵��뽓겆싼귂뽓�',
		ignore			: '�읪�棘極�꺫곎궿먈궿�',
		ignoreAll		: '�읪�棘極�꺫곎궿먈궿� 勻�곎�',
		addWord			: '�붠압닉겉궿� �곍뿅압꽥�',
		emptyDic		: '�앆겆론꽥� �곍뿅압꽥싻먁분� 極棘勻龜戟戟逵 閨�꺫궿� 勻克逵鈞逵戟逵.',
		noSuggestions	: '�앆둔셸겉� 勻逵��뽓겆싼귂뽓�',
		optionsTab		: '�왧왐녢뽔�',
		allCaps			: '�읪�棘極�꺫곎궿먈궿� 極�棘極龜�곍싼� �곍뿅압꽥�',
		ignoreDomainNames : '�읪�棘極�꺫곎궿먈궿� 畇棘劇筠戟戟�� 戟逵鈞勻龜',
		mixedCase		: '�읪�棘極�꺫곎궿먈궿� �곍뿅압꽥� 鈞�� 鈞劇�뽔댭겆싻먁� �筠均�뽔곎귂�棘劇',
		mixedWithDigits	: '�읪�棘極�꺫곎궿먈궿� �곍뿅압꽥�, �됎� 劇�뽔곎귂뤣귂� �녡먈꾊�龜',

		languagesTab	: '�쑷압꽥�',

		dictionariesTab	: '鬼剋棘勻戟龜克龜',
		dic_field_name	: '�앆겆론꽥� �곍뿅압꽥싻먁분�',
		dic_create		: '鬼�궿꽥앗�龜�궿�',
		dic_restore		: '�믍뽓닉싻압꽥먈궿�',
		dic_delete		: '�믌먁닉겆뿅먈궿�',
		dic_rename		: '�읩둘�筠橘劇筠戟�꺪꽥겉궿�',
		dic_info		: '赳克 極�逵勻龜剋棘, 克棘�龜�곎귂꺪꽥겉녢뚍붇� �곍뿅압꽥싻먁분� 鈞閨筠��뽓넓겉롋귂뚎곎� �� cookie-�꾉겆밀뿅겉�. �왧닉싻겆�, cookie-�꾉겆밀뿅� 劇逵�롋귂� 棘閨劇筠菌筠戟戟�� 戟逵 �棘鈞劇�뽔�. 赳克�됎� 克棘�龜�곎귂꺪꽥겉녢뚍분먁� �곍뿅압꽥싻먁� 鈞�棘�곎궿겉� 勻 棘閨�곎뤢롤� 戟逵�곎귂뽓뿌뚍분�, �됎� 勻菌筠 戟筠 劇棘菌筠 閨�꺫궿� 鈞閨筠�筠菌筠戟龜橘 �� cookie-�꾉겆밀뿌�, �궿압닌� 橘棘均棘 劇棘菌戟逵 鈞閨筠�筠均�궿� 戟逵 戟逵�댭압솅� �곍둘�勻筠���. 硅棘閨 鈞閨筠�筠均�궿� �믌겉� 極筠��곍압싻겆뿌뚍싻먁� �곍뿅압꽥싻먁� 戟逵 戟逵�댭압솅� �곍둘�勻筠��� 戟筠棘閨�끧뽓닉싻� 勻克逵鈞逵�궿� 戟逵鈞勻�� �곍뿅압꽥싻먁분�. 赳克�됎� �믌� 勻菌筠 鈞閨筠��뽓넓겆뿅� �곍뿅압꽥싻먁� 戟逵 �곍둘�勻筠���, 閨�꺪닌� 剋逵�곍분�, 勻克逵菌�뽔귂� 戟逵鈞勻�� 鈞閨筠�筠菌筠戟棘均棘 �곍뿅압꽥싻먁분� �� 戟逵�궿먈곍싼뽔귂� 克戟棘極克�� �믍뽓닉싻압꽥먈궿�.',

		aboutTab		: '�읪�棘 SCAYT'
	},

	about :
	{
		title		: '�읪�棘 CKEditor',
		dlgTitle	: '�읪�棘 CKEditor',
		help	: '�읩둘�筠勻�뽔��궿� $1 畇剋�� 畇棘極棘劇棘均龜.',
		userGuide : '�녡싼곎귂��꺪붇녢뽔� �싍앗�龜�곎귂꺪꽥겉눺� 畇剋�� CKEditor',
		moreInfo	: '硅棘畇棘 �뽓싼꾉앗�劇逵�녢뽔� 鈞 剋�뽔녡둔싻롤꺪꽥겆싻싼� 鈞逵勻�뽔궿겆밂궿� 戟逵 戟逵�� �곍겆밂�:',
		copy		: 'Copyright &copy; $1. �믍곎� 極�逵勻逵 鈞逵�곎궿둘�筠菌筠戟棘.'
	},

	maximize : '�쑷겆붇곍먁솅뽓롤꺪꽥겉궿�',
	minimize : '�쑸뽓싼뽓솅뽓롤꺪꽥겉궿�',

	fakeobjects :
	{
		anchor		: '赳克�뽔�',
		flash		: 'Flash-逵戟�뽓셸겉녢뽔�',
		iframe		: 'IFrame',
		hiddenfield	: '�읪�龜�끦압꽥겆싼� �읩압뿌�',
		unknown		: '�앆둔꽹뽓닉압셸먁� 棘閨\'�붠붇�'
	},

	resize : '�읩앗귂뤢넓싼뽔귂� 畇剋�� 鈞劇�뽓싻� �棘鈞劇�뽔��뽓�',

	colordialog :
	{
		title		: '�왧귐�逵�궿� 克棘剋�뽔�',
		options	:	'�왧왐녢뽔� 克棘剋�뚍앗��뽓�',
		highlight	: '�싍압뿌뽔�, 戟逵 �뤢분먁� 勻克逵鈞�꺫� 克�꺫��곍앗�',
		selected	: '�왧귐�逵戟龜橘 克棘剋�뽔�',
		clear		: '�왨눺먈곎궿먈궿�'
	},

	toolbarCollapse	: '�쀐넓앗�戟�꺫궿� 極逵戟筠剋�� �뽓싼곎귂��꺪셸둔싼귂뽓�',
	toolbarExpand	: '�졤압론넓앗�戟�꺫궿� 極逵戟筠剋�� �뽓싼곎귂��꺪셸둔싼귂뽓�',

	toolbarGroups :
	{
		document : '�붠압붇꺪셸둔싼�',
		clipboard : '�뫱꺫꾉둘� 棘閨劇�뽓싼� / 鬼克逵�곎꺪꽥겉궿�',
		editing : '�졤둔닉겆넘꺪꽥겆싻싼�',
		forms : '圭棘�劇龜',
		basicstyles : '�왨곍싻압꽥싻먁� 鬼�궿먁뿌�',
		paragraph : '�읩겉�逵均�逵��',
		links : '�읩앗곍먁뿅겆싻싼�',
		insert : '�믍곎궿겆꽥먈궿�',
		styles : '鬼�궿먁뿌�',
		colors : '�싍압뿌뚍앗�龜',
		tools : '�녡싼곎귂��꺪셸둔싼궿�'
	},

	bidi :
	{
		ltr : '�앆겆왐��뤢셸압� �궿둔붇곎귂� 鈞剋�뽓꽥� 戟逵極�逵勻棘',
		rtl : '�앆겆왐��뤢셸압� �궿둔붇곎귂� �곍왐�逵勻逵 戟逵剋�뽓꽥�'
	},

	docprops :
	{
		label : '�믌뿅겉곎궿먁꽥앗곎귂� 畇棘克�꺪셸둔싼궿�',
		title : '�믌뿅겉곎궿먁꽥앗곎귂� 畇棘克�꺪셸둔싼궿�',
		design : '�붠먁론겆밀�',
		meta : '�쑷둘궿� 畇逵戟��',
		chooseColor : '�왧귐�逵�궿�',
		other : '<�뽓싼댭먁�>',
		docTitle :	'�쀐겆넓압뿅압꽥압� �곎궿앗��뽓싻분�',
		charset : 	'�싍압닌꺪꽥겆싻싼� 戟逵閨棘��� �곍먁셸꽥압뿌뽓�',
		charsetOther : '�녡싼댭� 克棘畇�꺪꽥겆싻싼� 戟逵閨棘��� �곍먁셸꽥압뿌뽓�',
		charsetASCII : 'ASCII',
		charsetCE : '揆筠戟�귂�逵剋�뚍싻�-�붠꽹�棘極筠橘�곎뚍분�',
		charsetCT : '�싍먈궿겆밂곎뚍분� �귂�逵畇龜�녢뽓밀싻� (Big5)',
		charsetCR : '�싍먈�龜剋龜�녢�',
		charsetGR : '�볃�筠�녢뚍분�',
		charsetJP : '赳極棘戟�곎뚍분�',
		charsetKR : '�싍앗�筠橘�곎뚍분�',
		charsetTR : '龜�꺫�筠�녢뚍분�',
		charsetUN : '規戟�뽓분압� (UTF-8)',
		charsetWE : '�쀐겉끧뽓닉싻�-筠勻�棘極筠橘�곍분겉�',
		docType : '�쀐겆넓압뿅압꽥압� �궿먁왐� 畇棘克�꺪셸둔싼귂�',
		docTypeOther : '�녡싼댭먁� 鈞逵均棘剋棘勻棘克 �궿먁왐� 畇棘克�꺪셸둔싼귂�',
		xhtmlDec : '�믌꽹뽓셸분싼꺫궿� XHTML 棘均棘剋棘�댭둔싻싼�',
		bgColor : '�싍압뿌뽔� �궿뿅�',
		bgImage : 'URL 鈞棘閨�逵菌筠戟戟�� �궿뿅�',
		bgFixed : '龜剋棘 閨筠鈞 極�棘克��꺫궿분�',
		txtColor : '�싍압뿌뽔� �궿둔붇곎귂�',
		margin : '�믍뽓닌곎귂꺪왈� �곎궿앗��뽓싻분�',
		marginTop : '�믌둘��끦싼뽓�',
		marginLeft : '�쎪뽓꽥먁�',
		marginRight : '�읪�逵勻龜橘',
		marginBottom : '�앆먁뙨싼뽓�',
		metaKeywords : '�싍뿌롋눺압꽹� �곍뿅압꽥� 畇棘克�꺪셸둔싼궿� (�棘鈞畇�뽓뿅둔싼� 克棘劇逵劇龜)',
		metaDescription : '�왧왈먈� 畇棘克�꺪셸둔싼궿�',
		metaAuthor : '�먒꽹궿앗�',
		metaCopyright : '�먒꽹궿앗��곎뚍붇� 極�逵勻逵',
		previewHtml : '<p>揆筠 極�龜克剋逵畇<strong>�궿둔붇곎귂�</strong>. �믌� 勻龜克棘�龜�곎궿압꽹꺫붡궿�<a href="javascript:void(0)"> CKEditor </a>.</p>'
	}
};
