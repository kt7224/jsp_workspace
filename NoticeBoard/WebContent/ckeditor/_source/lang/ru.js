/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object for the
 * Russian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ru'] =
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
	editorTitle : '�믌먁롤꺪겆뿌뚍싼뗊� �筠畇逵克�궿앗� �궿둔붇곎궿�, %1',
	editorHelp : '戟逵菌劇龜�궿� ALT-0 畇剋�� 棘�궿붇��뗋궿먈� �곍왐�逵勻克龜',

	// ARIA descriptions.
	toolbars	: '�읩겆싻둔뿅� 龜戟�곎귂��꺪셸둔싼궿압� �筠畇逵克�궿앗�逵',
	editor		: '�믌먁롤꺪겆뿌뚍싼뗊� �筠畇逵克�궿앗� �궿둔붇곎궿�',

	// Toolbar buttons without dialogs.
	source			: '�샭곎궿앗눺싻먁�',
	newPage			: '�앆압꽥겉� �곎귂�逵戟龜�녡�',
	save			: '鬼棘�끧�逵戟龜�귂�',
	preview			: '�읪�筠畇勻逵�龜�궿둔뿌뚍싼뗊� 極�棘�곍셸앗귂�',
	cut				: '�믍뗋�筠鈞逵�귂�',
	copy			: '�싍압왈먈�棘勻逵�귂�',
	paste			: '�믍곎궿겆꽥먈귂�',
	print			: '�읩둘눺겉귂�',
	underline		: '�읩압닌눺둘�克戟�꺫귂뗊�',
	bold			: '�읩압뿌꺪뙨먈�戟�뗊�',
	italic			: '�싎꺫��곍먁�',
	selectAll		: '�믍뗊닉둔뿅먈귂� 勻�곍�',
	removeFormat	: '叫閨�逵�귂� �꾉앗�劇逵�궿먈�棘勻逵戟龜筠',
	strike			: '�쀐겉눺둘�克戟�꺫귂뗊�',
	subscript		: '�읩압닌곎귂�棘�눺싼뗊� 龜戟畇筠克��',
	superscript		: '�앆겆닌곎귂�棘�눺싼뗊� 龜戟畇筠克��',
	horizontalrule	: '�믍곎궿겆꽥먈귂� 均棘�龜鈞棘戟�궿겆뿌뚍싼꺫� 剋龜戟龜��',
	pagebreak		: '�믍곎궿겆꽥먈귂� �逵鈞��뗊� �곎귂�逵戟龜�녢� 畇剋�� 極筠�눺겉궿�',
	pagebreakAlt		: '�졤겆롤��뗊� �곎귂�逵戟龜�녢�',
	unlink			: '叫閨�逵�귂� �곎곎뗊뿅붇�',
	undo			: '�왨궿셸둔싻먈귂�',
	redo			: '�읩압꽹궿앗�龜�귂�',

	// Common messages and labels.
	common :
	{
		browseServer	: '�믍뗊귈앗� 戟逵 �곍둘�勻筠�筠',
		url				: '鬼�곎뗊뿅분�',
		protocol		: '�읪�棘�궿압분압�',
		upload			: '�쀐겆넘��꺪론분�',
		uploadSubmit	: '�쀐겆넘��꺪론먈귂� 戟逵 �곍둘�勻筠�',
		image			: '�샫론압귐�逵菌筠戟龜筠',
		flash			: 'Flash',
		form			: '圭棘�劇逵',
		checkbox		: '圭剋逵均棘勻逵�� 克戟棘極克逵',
		radio			: '�싍싻압왈분� 勻�뗊귈앗�逵',
		textField		: '龜筠克�곎궿압꽥압� 極棘剋筠',
		textarea		: '�쑷싻압넓앗곎귂�棘�눺싻압� �궿둔붇곎궿압꽥압� 極棘剋筠',
		hiddenField		: '鬼克��뗋궿압� 極棘剋筠',
		button			: '�싍싻압왈분�',
		select			: '鬼極龜�곍압� 勻�뗊귈앗�逵',
		imageButton		: '�샫론압귐�逵菌筠戟龜筠-克戟棘極克逵',
		notSet			: '<戟筠 �꺪분겆론겆싻�>',
		id				: '�샫닉둔싼궿먈꾉먁분겉궿앗�',
		name			: '�샫솅�',
		langDir			: '�앆겆왐�逵勻剋筠戟龜筠 �궿둔붇곎궿�',
		langDirLtr		: '鬼剋筠勻逵 戟逵極�逵勻棘 (LTR)',
		langDirRtl		: '鬼極�逵勻逵 戟逵剋筠勻棘 (RTL)',
		langCode		: '�싍압� �뤢롤뗊분�',
		longDescr		: '�붠뿅먁싻싻압� 棘極龜�곍겆싻먁� �곎곎뗊뿅분�',
		cssClass		: '�싍뿅겉곎� CSS',
		advisoryTitle	: '�쀐겆넓압뿅압꽥압�',
		cssStyle		: '鬼�궿먁뿌�',
		ok				: '�왧�',
		cancel			: '�왨궿셸둔싻�',
		close			: '�쀐겆붇��뗋귂�',
		preview			: '�읪�筠畇極�棘�곍셸앗귂�',
		generalTab		: '�왨곍싻압꽥싻압�',
		advancedTab		: '�붠압왈압뿅싻먈궿둔뿌뚍싻�',
		validateNumberFailed : '葵�궿� 鈞戟逵�눺둔싻먁� 戟筠 �뤢꽥뿌뤢둘귂곎� �눺먈곍뿅압�.',
		confirmNewPage	: '�앆둘곍앗끧�逵戟�뫰싻싼뗊� 龜鈞劇筠戟筠戟龜�� 閨�꺪닌꺫� 極棘�궿둘��뤢싼�! �믍� 畇筠橘�곎궿꽥먈궿둔뿌뚍싻� 菌筠剋逵筠�궿� 極筠�筠橘�궿� 戟逵 畇��꺪넘꺫� �곎귂�逵戟龜�녢�?',
		confirmCancel	: '�앆둔분앗궿앗��뗊� 極逵�逵劇筠�귂��� 閨�뗊뿅� 龜鈞劇筠戟筠戟��. �믍� �꺪꽥둘�筠戟��, �눻궿� 菌筠剋逵筠�궿� 鈞逵克��뗋귂� 閨筠鈞 �곍앗끧�逵戟筠戟龜��?',
		options			: '�읩겉�逵劇筠�귂���',
		target			: '揆筠剋��',
		targetNew		: '�앆압꽥압� 棘克戟棘 (_blank)',
		targetTop		: '�볂뿅겆꽥싻압� 棘克戟棘 (_top)',
		targetSelf		: '龜筠克�꺫됎둔� 棘克戟棘 (_self)',
		targetParent	: '�졤압닉먈궿둔뿌뚎곍분압� 棘克戟棘 (_parent)',
		langDirLTR		: '鬼剋筠勻逵 戟逵極�逵勻棘 (LTR)',
		langDirRTL		: '鬼極�逵勻逵 戟逵剋筠勻棘 (RTL)',
		styles			: '鬼�궿먁뿌�',
		cssClasses		: '�싍뿅겉곎곎� CSS',
		width			: '珪龜�龜戟逵',
		height			: '�믍뗋곍앗궿�',
		align			: '�믍뗋�逵勻戟龜勻逵戟龜筠',
		alignLeft		: '�읩� 剋筠勻棘劇�� 克�逵��',
		alignRight		: '�읩� 極�逵勻棘劇�� 克�逵��',
		alignCenter		: '�읩� �녡둔싼귂���',
		alignTop		: '�읩� 勻筠��끧�',
		alignMiddle		: '�읩� �곍둘�筠畇龜戟筠',
		alignBottom		: '�읩� 戟龜鈞��',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '�믍뗋곍앗궿� 鈞逵畇逵筠�귂곎� �눺먈곍뿅압�.',
		invalidWidth	: '珪龜�龜戟逵 鈞逵畇逵筠�귂곎� �눺먈곍뿅압�.',
		invalidCssLength	: '�쀐싻겉눺둔싻먁�, �꺪분겆론겆싻싻압� 勻 極棘剋筠 "%1", 畇棘剋菌戟棘 閨�뗋귂� 極棘剋棘菌龜�궿둔뿌뚍싼뗊� �녡둔뿌뗊� �눺먈곍뿅압�. �붠압왐꺫곍분겆둘귂곎� �꺪분겆론겆싻먁� 筠畇龜戟龜�� 劇筠��� CSS (px, %, in, cm, mm, em, ex, pt 龜剋龜 pc).',
		invalidHtmlLength	: '�쀐싻겉눺둔싻먁�, �꺪분겆론겆싻싻압� 勻 極棘剋筠 "%1", 畇棘剋菌戟棘 閨�뗋귂� 極棘剋棘菌龜�궿둔뿌뚍싼뗊� �녡둔뿌뗊� �눺먈곍뿅압�. �붠압왐꺫곍분겆둘귂곎� �꺪분겆론겆싻먁� 筠畇龜戟龜�� 劇筠��� HTML (px 龜剋龜 %).',
		invalidInlineStyle	: '�쀐싻겉눺둔싻먁�, �꺪분겆론겆싻싻압� 畇剋�� �곎궿먁뿌� �띚뿅둔셸둔싼궿�, 畇棘剋菌戟棘 �곍앗곎궿앗뤣귂� 龜鈞 棘畇戟棘橘 龜剋龜 戟筠�곍분압뿌뚍분먈� 極逵� 畇逵戟戟�뗋� 勻 �꾉앗�劇逵�궿� "極逵�逵劇筠�귂� : 鈞戟逵�눺둔싻먁�", �逵鈞畇筠剋�뫰싻싼뗋� �궿앗눺분압� �� 鈞逵極�뤣궿압�.',
		cssLengthTooltip	: '�믌꽥둔닉먈궿� 鈞戟逵�눺둔싻먁� 勻 極龜克�곍둔뿌뤣�, 剋龜閨棘 �눺먈곍뿅� �� 克棘��筠克�궿싻압� 筠畇龜戟龜�녡둔� 劇筠��� CSS (px, %, in, cm, mm, em, ex, pt 龜剋龜 pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, 戟筠畇棘�곎귂꺪왈싻�</span>'
	},

	contextmenu :
	{
		options : '�읩겉�逵劇筠�귂��� 克棘戟�궿둔붇곎궿싻압넓� 劇筠戟��'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�믍곎궿겆꽥먈귂� �곍왈둘녡먁겆뿌뚍싼뗊� �곍먁셸꽥압�',
		title		: '�믍뗊귈둘�龜�궿� �곍왈둘녡먁겆뿌뚍싼뗊� �곍먁셸꽥압�',
		options : '�믍뗊귈앗� �곍왈둘녡먁겆뿌뚍싻압넓� �곍먁셸꽥압뿅�'
	},

	// Link dialog.
	link :
	{
		toolbar		: '�믍곎궿겆꽥먈귂�/�졤둔닉겆붇궿먈�棘勻逵�귂� �곎곎뗊뿅붇�',
		other 		: '<畇��꺪넓압�>',
		menu		: '�졤둔닉겆붇궿먈�棘勻逵�귂� �곎곎뗊뿅붇�',
		title		: '鬼�곎뗊뿅분�',
		info		: '�샫싼꾉앗�劇逵�녡먈� 棘 �곎곎뗊뿅분�',
		target		: '揆筠剋��',
		upload		: '�쀐겆넘��꺪론분�',
		advanced	: '�붠압왈압뿅싻먈궿둔뿌뚍싻�',
		type		: '龜龜極 �곎곎뗊뿅분�',
		toUrl		: '鬼�곎뗊뿅분�',
		toAnchor	: '鬼�곎뗊뿅분� 戟逵 �뤢분앗��� 勻 �궿둔붇곎궿�',
		toEmail		: 'Email',
		targetFrame		: '<�꾊�筠橘劇>',
		targetPopup		: '<勻�곍왈뿌뗊꽥겉롋됎둔� 棘克戟棘>',
		targetFrameName	: '�샫솅� �녡둔뿅둔꽥압넓� �꾊�筠橘劇逵',
		targetPopupName	: '�샫솅� 勻�곍왈뿌뗊꽥겉롋됎둔넓� 棘克戟逵',
		popupFeatures	: '�읩겉�逵劇筠�귂��� 勻�곍왈뿌뗊꽥겉롋됎둔넓� 棘克戟逵',
		popupResizable	: '�샫론셸둔싼뤢둔솅뗊� �逵鈞劇筠�',
		popupStatusBar	: '鬼�귂�棘克逵 �곍앗곎궿앗뤢싻먈�',
		popupLocationBar: '�읩겆싻둔뿌� 逵畇�筠�곍�',
		popupToolbar	: '�읩겆싻둔뿌� 龜戟�곎귂��꺪셸둔싼궿압�',
		popupMenuBar	: '�읩겆싻둔뿌� 劇筠戟��',
		popupFullScreen	: '�읩압뿅싻앗띚붇�逵戟戟棘筠 (IE)',
		popupScrollBars	: '�읩압뿅앗곎� 極�棘克��꺫궿분�',
		popupDependent	: '�쀐겆꽥먈곍먁셸압� (Netscape)',
		popupLeft		: '�왨귂곎귂꺪� �곍뿅둔꽥�',
		popupTop		: '�왨귂곎귂꺪� �곍꽥둘��끧�',
		id				: '�샫닉둔싼궿먈꾉먁분겉궿앗�',
		langDir			: '�앆겆왐�逵勻剋筠戟龜筠 �궿둔붇곎궿�',
		langDirLTR		: '鬼剋筠勻逵 戟逵極�逵勻棘 (LTR)',
		langDirRTL		: '鬼極�逵勻逵 戟逵剋筠勻棘 (RTL)',
		acccessKey		: '�싍뿅겆꽥먈댭� 畇棘�곎귂꺪왈�',
		name			: '�샫솅�',
		langCode			: '�싍압� �뤢롤뗊분�',
		tabIndex			: '�읩앗곍뿅둔닉압꽥겉궿둔뿌뚍싻앗곎귂� 極筠�筠�끦압닉�',
		advisoryTitle		: '�쀐겆넓압뿅압꽥압�',
		advisoryContentType	: '龜龜極 �곍압닉둘�菌龜劇棘均棘',
		cssClasses		: '�싍뿅겉곎곎� CSS',
		charset			: '�싍압닉먈�棘勻克逵 �筠�곎꺫��곍�',
		styles			: '鬼�궿먁뿌�',
		rel			: '�왨궿싻앗댭둔싻먁�',
		selectAnchor		: '�믍뗊귈둘�龜�궿� �뤢분앗���',
		anchorName		: '�읩� 龜劇筠戟龜',
		anchorId			: '�읩� 龜畇筠戟�궿먈꾉먁분겉궿앗���',
		emailAddress		: 'Email 逵畇�筠��',
		emailSubject		: '龜筠劇逵 �곍압압귐됎둔싻먈�',
		emailBody		: '龜筠克�곎� �곍압압귐됎둔싻먈�',
		noAnchors		: '(�� 畇棘克�꺪셸둔싼궿� 戟筠�� 戟龜 棘畇戟棘均棘 �뤢분앗���)',
		noUrl			: '�읩압뙨겆뿌꺪밂곎궿�, 勻勻筠畇龜�궿� �곎곎뗊뿅붇�',
		noEmail			: '�읩압뙨겆뿌꺪밂곎궿�, 勻勻筠畇龜�궿� email 逵畇�筠��'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�믍곎궿겆꽥먈귂� / �筠畇逵克�궿먈�棘勻逵�귂� �뤢분앗���',
		menu		: '�샫론셸둔싻먈귂� �뤢분앗���',
		title		: '鬼勻棘橘�곎궿꽥� �뤢분앗���',
		name		: '�샫솅� �뤢분앗���',
		errorName	: '�읩압뙨겆뿌꺪밂곎궿�, 勻勻筠畇龜�궿� 龜劇�� �뤢분앗���',
		remove		: '叫畇逵剋龜�귂� �뤢분앗���'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '鬼勻棘橘�곎궿꽥� 戟�꺪셸둘�棘勻逵戟戟棘均棘 �곍왈먈곍분�',
		bulletedTitle		: '鬼勻棘橘�곎궿꽥� 劇逵�克龜�棘勻逵戟戟棘均棘 �곍왈먈곍분�',
		type				: '龜龜極',
		start				: '�앆겉눺먁싻겉� ��',
		validateStartNumber				:'�읩둘�勻�뗊� 戟棘劇筠� �곍왈먈곍분� 畇棘剋菌筠戟 閨�뗋귂� 鈞逵畇逵戟 棘閨�뗋눺싼뗊� �녡둔뿌뗊� �눺먈곍뿅압�.',
		circle				: '�싎��꺪�',
		disc				: '�왧붇��꺪뙨싻앗곎귂�',
		square				: '�싍꽥겆닌�逵��',
		none				: '�앆둘�',
		notset				: '<戟筠 �꺪분겆론겆싻�>',
		armenian			: '�먓�劇�뤢싼곍분겉� 戟�꺪셸둘�逵�녡먈�',
		georgian			: '�볃��꺪론먁싼곍분겉� 戟�꺪셸둘�逵�녡먈� (逵戟龜, 閨逵戟龜, 均逵戟龜, 龜 ��.畇.)',
		lowerRoman			: '鬼�귂�棘�눺싼뗊� �龜劇�곍분먁� (i, ii, iii, iv, v, 龜 ��.畇.)',
		upperRoman			: '�쀐겆넓뿅겆꽥싼뗊� �龜劇�곍분먁� (I, II, III, IV, V, 龜 ��.畇.)',
		lowerAlpha			: '鬼�귂�棘�눺싼뗊� 剋逵�궿먁싼곍분먁� (a, b, c, d, e, 龜 ��.畇.)',
		upperAlpha			: '�쀐겆넓뿅겆꽥싼뗊� 剋逵�궿먁싼곍분먁� (A, B, C, D, E, 龜 ��.畇.)',
		lowerGreek			: '鬼�귂�棘�눺싼뗊� 均�筠�눺둘곍분먁� (逵剋�뚎꾉�, 閨筠�궿�, 均逵劇劇逵, 龜 ��.畇.)',
		decimal				: '�붠둘곎뤣궿먈눺싼뗊� (1, 2, 3, 龜 ��.畇.)',
		decimalLeadingZero	: '�붠둘곎뤣궿먈눺싼뗊� �� 勻筠畇�꺫됎먁� 戟�꺪뿌뫰� (01, 02, 03, 龜 ��.畇.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '�읩압먈곍� 龜 鈞逵劇筠戟逵',
		find				: '�앆겆밂궿�',
		replace				: '�쀐겆셸둔싻먈귂�',
		findWhat			: '�앆겆밂궿�:',
		replaceWith			: '�쀐겆셸둔싻먈귂� 戟逵:',
		notFoundMsg			: '�샭곍분압솅뗊� �궿둔붇곎� 戟筠 戟逵橘畇筠戟.',
		findOptions			: '�왧왐녡먁� 極棘龜�곍분�',
		matchCase			: '叫�눺먈귂뗊꽥겉귂� �筠均龜�곎귂�',
		matchWord			: '龜棘剋�뚍분� �곍뿅압꽥� �녡둔뿅먁분압�',
		matchCyclic			: '�읩� 勻�곍둔솅� �궿둔붇곎귂�',
		replaceAll			: '�쀐겆셸둔싻먈귂� 勻�곎�',
		replaceSuccessMsg	: '叫�곍왈둘댭싻� 鈞逵劇筠戟筠戟棘 %1 �逵鈞(逵).'
	},

	// Table Dialog
	table :
	{
		toolbar		: '龜逵閨剋龜�녡�',
		title		: '鬼勻棘橘�곎궿꽥� �궿겆귈뿅먈녢�',
		menu		: '鬼勻棘橘�곎궿꽥� �궿겆귈뿅먈녢�',
		deleteTable	: '叫畇逵剋龜�귂� �궿겆귈뿅먈녢�',
		rows		: '鬼�귂�棘克龜',
		columns		: '�싍압뿅압싻분�',
		border		: '�졤겆론셸둘� 均�逵戟龜��',
		widthPx		: '極龜克�곍둔뿅둔�',
		widthPc		: '極�棘�녡둔싼궿압�',
		widthUnit	: '筠畇龜戟龜�녡� 龜鈞劇筠�筠戟龜��',
		cellSpace	: '�믌싻둘댭싻먁� 棘�귂곎귂꺪� �뤣눺둔둔�',
		cellPad		: '�믌싼꺫귂�筠戟戟龜橘 棘�귂곎귂꺪� �뤣눺둔둔�',
		caption		: '�쀐겆넓압뿅압꽥압�',
		summary		: '�샭궿압넓�',
		headers		: '�쀐겆넓압뿅압꽥분�',
		headersNone		: '�뫰둔� 鈞逵均棘剋棘勻克棘勻',
		headersColumn	: '�쎩둔꽥겉� 克棘剋棘戟克逵',
		headersRow		: '�믌둘��끦싼뤣� �곎귂�棘克逵',
		headersBoth		: '鬼勻筠��끧� 龜 �곍뿅둔꽥�',
		invalidRows		: '�싍압뿅먈눺둘곎궿꽥� �곎귂�棘克 畇棘剋菌戟棘 閨�뗋귂� 閨棘剋�뚎댭� 0.',
		invalidCols		: '�싍압뿅먈눺둘곎궿꽥� �곎궿압뿅귐녡압� 畇棘剋菌戟棘 閨�뗋귂� 閨棘剋�뚎댭� 0.',
		invalidBorder	: '�졤겆론셸둘� 均�逵戟龜�� 畇棘剋菌筠戟 閨�뗋귂� �눺먈곍뿅압�.',
		invalidWidth	: '珪龜�龜戟逵 �궿겆귈뿅먈녢� 畇棘剋菌戟逵 閨�뗋귂� �눺먈곍뿅압�.',
		invalidHeight	: '�믍뗋곍앗궿� �궿겆귈뿅먈녢� 畇棘剋菌戟逵 閨�뗋귂� �눺먈곍뿅압�.',
		invalidCellSpacing	: '�믌싻둘댭싻먁� 棘�귂곎귂꺪� �뤣눺둔둔� (cellspacing) 畇棘剋菌筠戟 閨�뗋귂� �눺먈곍뿅압�.',
		invalidCellPadding	: '�믌싼꺫귂�筠戟戟龜橘 棘�귂곎귂꺪� �뤣눺둔둔� (cellpadding) 畇棘剋菌筠戟 閨�뗋귂� �눺먈곍뿅압�.',

		cell :
		{
			menu			: '赳�눺둔밀분�',
			insertBefore	: '�믍곎궿겆꽥먈귂� �뤣눺둔밀붇� �곍뿅둔꽥�',
			insertAfter		: '�믍곎궿겆꽥먈귂� �뤣눺둔밀붇� �곍왐�逵勻逵',
			deleteCell		: '叫畇逵剋龜�귂� �뤣눺둔밀분�',
			merge			: '�왧귐듢둔닉먁싻먈귂� �뤣눺둔밀분�',
			mergeRight		: '�왧귐듢둔닉먁싻먈귂� �� 極�逵勻棘橘',
			mergeDown		: '�왧귐듢둔닉먁싻먈귂� �� 戟龜菌戟筠橘',
			splitHorizontal	: '�졤겆론닉둔뿅먈귂� �뤣눺둔밀붇� 極棘 均棘�龜鈞棘戟�궿겆뿅�',
			splitVertical	: '�졤겆론닉둔뿅먈귂� �뤣눺둔밀붇� 極棘 勻筠��궿먁분겆뿅�',
			title			: '鬼勻棘橘�곎궿꽥� �뤣눺둔밀분�',
			cellType		: '龜龜極 �뤣눺둔밀분�',
			rowSpan			: '�왧귐듢둔닉먁싼뤢둘� �곎귂�棘克',
			colSpan			: '�왧귐듢둔닉먁싼뤢둘� 克棘剋棘戟棘克',
			wordWrap		: '�읩둘�筠戟棘�� 極棘 �곍뿅압꽥겆�',
			hAlign			: '�볂앗�龜鈞棘戟�궿겆뿌뚍싻압� 勻�뗋�逵勻戟龜勻逵戟龜筠',
			vAlign			: '�믌둘��궿먁분겆뿌뚍싻압� 勻�뗋�逵勻戟龜勻逵戟龜筠',
			alignBaseline	: '�읩� 閨逵鈞棘勻棘橘 剋龜戟龜龜',
			bgColor			: '揆勻筠�� �꾉압싻�',
			borderColor		: '揆勻筠�� 均�逵戟龜��',
			data			: '�붠겆싻싼뗊�',
			header			: '�쀐겆넓압뿅압꽥압�',
			yes				: '�붠�',
			no				: '�앆둘�',
			invalidWidth	: '珪龜�龜戟逵 �뤣눺둔밀분� 畇棘剋菌戟逵 閨�뗋귂� �눺먈곍뿅압�.',
			invalidHeight	: '�믍뗋곍앗궿� �뤣눺둔밀분� 畇棘剋菌戟逵 閨�뗋귂� �눺먈곍뿅압�.',
			invalidRowSpan	: '�싍압뿅먈눺둘곎궿꽥� 棘閨�듢둔닉먁싼뤢둔솅뗋� �곎귂�棘克 畇棘剋菌戟棘 閨�뗋귂� 鈞逵畇逵戟棘 �눺먈곍뿅압�.',
			invalidColSpan	: '�싍압뿅먈눺둘곎궿꽥� 棘閨�듢둔닉먁싼뤢둔솅뗋� 克棘剋棘戟棘克 畇棘剋菌戟棘 閨�뗋귂� 鈞逵畇逵戟棘 �눺먈곍뿅압�.',
			chooseColor		: '�믍뗊귈둘�龜�궿�'
		},

		row :
		{
			menu			: '鬼�귂�棘克逵',
			insertBefore	: '�믍곎궿겆꽥먈귂� �곎귂�棘克�� �곍꽥둘��끧�',
			insertAfter		: '�믍곎궿겆꽥먈귂� �곎귂�棘克�� �곍싻먁롤�',
			deleteRow		: '叫畇逵剋龜�귂� �곎귂�棘克龜'
		},

		column :
		{
			menu			: '�싍압뿅압싻분�',
			insertBefore	: '�믍곎궿겆꽥먈귂� 克棘剋棘戟克�� �곍뿅둔꽥�',
			insertAfter		: '�믍곎궿겆꽥먈귂� 克棘剋棘戟克�� �곍왐�逵勻逵',
			deleteColumn	: '叫畇逵剋龜�귂� 克棘剋棘戟克龜'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '鬼勻棘橘�곎궿꽥� 克戟棘極克龜',
		text		: '龜筠克�곎� (�쀐싻겉눺둔싻먁�)',
		type		: '龜龜極',
		typeBtn		: '�싍싻압왈분�',
		typeSbm		: '�왨궿왐�逵勻克逵',
		typeRst		: '鬼閨�棘��'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '鬼勻棘橘�곎궿꽥� �꾉뿅겆넓압꽥압� 克戟棘極克龜',
		radioTitle	: '鬼勻棘橘�곎궿꽥� 克戟棘極克龜 勻�뗊귈앗�逵',
		value		: '�쀐싻겉눺둔싻먁�',
		selected	: '�믍뗊귐�逵戟棘'
	},

	// Form Dialog.
	form :
	{
		title		: '鬼勻棘橘�곎궿꽥� �꾉앗�劇��',
		menu		: '鬼勻棘橘�곎궿꽥� �꾉앗�劇��',
		action		: '�붠둔밂곎궿꽥먁�',
		method		: '�쑷둘궿압�',
		encoding	: '�싍압닉먈�棘勻克逵'
	},

	// Select Field Dialog.
	select :
	{
		title		: '鬼勻棘橘�곎궿꽥� �곍왈먈곍분� 勻�뗊귈앗�逵',
		selectInfo	: '�샫싼꾉앗�劇逵�녡먈� 棘 �곍왈먈곍분� 勻�뗊귈앗�逵',
		opAvail		: '�붠앗곎귂꺪왈싼뗊� 勻逵�龜逵戟�귂�',
		value		: '�쀐싻겉눺둔싻먁�',
		size		: '�졤겆론셸둘�',
		lines		: '�곎귂�棘克(龜)',
		chkMulti	: '�졤겆롤�筠�댭먈귂� 勻�뗊귈앗� 戟筠�곍분압뿌뚍분먈� 勻逵�龜逵戟�궿압�',
		opText		: '龜筠克�곎�',
		opValue		: '�쀐싻겉눺둔싻먁�',
		btnAdd		: '�붠압귈겆꽥먈귂�',
		btnModify	: '�샫론셸둔싻먈귂�',
		btnUp		: '�읩압닉싼뤣귂�',
		btnDown		: '�왧왐꺫곎궿먈귂�',
		btnSetValue : '�읩압셸둘궿먈귂� 克逵克 勻�뗊귐�逵戟戟棘筠',
		btnDelete	: '叫畇逵剋龜�귂�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '鬼勻棘橘�곎궿꽥� 劇戟棘均棘�곎귂�棘�눺싻압넓� �궿둔붇곎궿압꽥압넓� 極棘剋��',
		cols		: '�싍압뿅압싻압�',
		rows		: '鬼�귂�棘克'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '鬼勻棘橘�곎궿꽥� �궿둔붇곎궿압꽥압넓� 極棘剋��',
		name		: '�샫솅�',
		value		: '�쀐싻겉눺둔싻먁�',
		charWidth	: '珪龜�龜戟逵 極棘剋�� (勻 �곍먁셸꽥압뿅겉�)',
		maxChars	: '�쑷겆붇�. 克棘剋龜�눺둘곎궿꽥� �곍먁셸꽥압뿅압�',
		type		: '龜龜極 �곍압닉둘�菌龜劇棘均棘',
		typeText	: '龜筠克�곎�',
		typePass	: '�읩겉�棘剋��'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '鬼勻棘橘�곎궿꽥� �곍붇��뗋궿압넓� 極棘剋��',
		name	: '�샫솅�',
		value	: '�쀐싻겉눺둔싻먁�'
	},

	// Image Dialog.
	image :
	{
		title		: '鬼勻棘橘�곎궿꽥� 龜鈞棘閨�逵菌筠戟龜��',
		titleButton	: '鬼勻棘橘�곎궿꽥� 龜鈞棘閨�逵菌筠戟龜��-克戟棘極克龜',
		menu		: '鬼勻棘橘�곎궿꽥� 龜鈞棘閨�逵菌筠戟龜��',
		infoTab		: '�붠겆싻싼뗊� 棘閨 龜鈞棘閨�逵菌筠戟龜龜',
		btnUpload	: '�쀐겆넘��꺪론먈귂� 戟逵 �곍둘�勻筠�',
		upload		: '�쀐겆넘��꺪론먈귂�',
		alt			: '�먒뿌뚎궿둘�戟逵�궿먁꽥싼뗊� �궿둔붇곎�',
		lockRatio	: '鬼棘�끧�逵戟�뤣귂� 極�棘極棘��녡먁�',
		resetSize	: '�믌둘�戟�꺫귂� 棘閨�뗋눺싼뗊� �逵鈞劇筠���',
		border		: '�볃�逵戟龜�녡�',
		hSpace		: '�볂앗�龜鈞. 棘�귂곎귂꺪�',
		vSpace		: '�믌둘��궿먁�. 棘�귂곎귂꺪�',
		alertUrl	: '�읩압뙨겆뿌꺪밂곎궿�, 勻勻筠畇龜�궿� �곎곎뗊뿅붇� 戟逵 龜鈞棘閨�逵菌筠戟龜筠',
		linkTab		: '鬼�곎뗊뿅분�',
		button2Img	: '�믍� 菌筠剋逵筠�궿� 極�筠棘閨�逵鈞棘勻逵�귂� �띛궿� 龜鈞棘閨�逵菌筠戟龜筠-克戟棘極克�� 勻 棘閨�뗋눺싻압� 龜鈞棘閨�逵菌筠戟龜筠?',
		img2Button	: '�믍� 菌筠剋逵筠�궿� 極�筠棘閨�逵鈞棘勻逵�귂� �띛궿� 棘閨�뗋눺싻압� 龜鈞棘閨�逵菌筠戟龜筠 勻 龜鈞棘閨�逵菌筠戟龜筠-克戟棘極克��?',
		urlMissing	: '�앆� �꺪분겆론겆싻� �곎곎뗊뿅분� 戟逵 龜鈞棘閨�逵菌筠戟龜筠.',
		validateBorder	: '�졤겆론셸둘� 均�逵戟龜�� 畇棘剋菌筠戟 閨�뗋귂� 鈞逵畇逵戟 �눺먈곍뿅압�.',
		validateHSpace	: '�볂앗�龜鈞棘戟�궿겆뿌뚍싼뗊� 棘�귂곎귂꺪� 畇棘剋菌筠戟 閨�뗋귂� 鈞逵畇逵戟 �눺먈곍뿅압�.',
		validateVSpace	: '�믌둘��궿먁분겆뿌뚍싼뗊� 棘�귂곎귂꺪� 畇棘剋菌筠戟 閨�뗋귂� 鈞逵畇逵戟 �눺먈곍뿅압�.'
	},

	// Flash Dialog
	flash :
	{
		properties		: '鬼勻棘橘�곎궿꽥� Flash',
		propertiesTab	: '鬼勻棘橘�곎궿꽥�',
		title			: '鬼勻棘橘�곎궿꽥� Flash',
		chkPlay			: '�먒꽹궿압셸겉궿먈눺둘곍분압� 勻棘�곍왐�棘龜鈞勻筠畇筠戟龜筠',
		chkLoop			: '�읩압꽹궿앗��뤣귂�',
		chkMenu			: '�믌분뿌롋눺먈귂� 劇筠戟�� Flash',
		chkFull			: '�졤겆롤�筠�댭먈귂� 極棘剋戟棘�띚붇�逵戟戟�뗊� �筠菌龜劇',
 		scale			: '�쑷겉곎댮궿겆귈먈�棘勻逵�귂�',
		scaleAll		: '�읪�棘極棘��녡먁압싻겆뿌뚍싻�',
		scaleNoBorder	: '�쀐겉끦압닉먈귂� 鈞逵 均�逵戟龜�녢�',
		scaleFit		: '�쀐겆왈압뿅싼뤣귂�',
		access			: '�붠앗곎귂꺪� 克 �곍붇�龜極�궿겆�',
		accessAlways	: '�믍곍둔넓닉�',
		accessSameDomain: '�� �궿압� 菌筠 畇棘劇筠戟筠',
		accessNever		: '�앆먁분압넓닉�',
		alignAbsBottom	: '�읩� 戟龜鈞�� �궿둔붇곎궿�',
		alignAbsMiddle	: '�읩� �곍둘�筠畇龜戟筠 �궿둔붇곎궿�',
		alignBaseline	: '�읩� 閨逵鈞棘勻棘橘 剋龜戟龜龜',
		alignTextTop	: '�읩� 勻筠��끧� �궿둔붇곎궿�',
		quality			: '�싍겉눺둘곎궿꽥�',
		qualityBest		: '�쎪꺫눻댭둔�',
		qualityHigh		: '�믍뗋곍압분압�',
		qualityAutoHigh	: '�쀐겆왐꺫곍� 戟逵 勻�뗋곍압분압�',
		qualityMedium	: '鬼�筠畇戟筠筠',
		qualityAutoLow	: '�쀐겆왐꺫곍� 戟逵 戟龜鈞克棘劇',
		qualityLow		: '�앆먁론분압�',
		windowModeWindow: '�왧귐뗋눺싼뗊�',
		windowModeOpaque: '�앆둔왐�棘鈞�逵�눺싼뗊�',
		windowModeTransparent : '�읪�棘鈞�逵�눺싼뗊�',
		windowMode		: '�믌론겆먁셸압닉둔밂곎궿꽥먁� �� 棘克戟棘劇',
		flashvars		: '�읩둘�筠劇筠戟戟�뗊� 畇剋�� Flash',
		bgcolor			: '揆勻筠�� �꾉압싻�',
		hSpace			: '�볂앗�龜鈞. 棘�귂곎귂꺪�',
		vSpace			: '�믌둘��궿먁�. 棘�귂곎귂꺪�',
		validateSrc		: '�믍� 畇棘剋菌戟�� 勻勻筠�곎궿� �곎곎뗊뿅붇�',
		validateHSpace	: '�볂앗�龜鈞棘戟�궿겆뿌뚍싼뗊� 棘�귂곎귂꺪� 鈞逵畇逵筠�귂곎� �눺먈곍뿅압�.',
		validateVSpace	: '�믌둘��궿먁분겆뿌뚍싼뗊� 棘�귂곎귂꺪� 鈞逵畇逵筠�귂곎� �눺먈곍뿅압�.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�읪�棘勻筠�龜�귂� 棘��꾉압넘�逵�꾉먈�',
		title			: '�읪�棘勻筠�克逵 棘��꾉압넘�逵�꾉먁�',
		notAvailable	: '�샫론꽥먁싻먈궿�, 戟棘 勻 畇逵戟戟�뗊� 劇棘劇筠戟�� �곍둘�勻龜�� 戟筠畇棘�곎귂꺪왈둔�.',
		errorLoading	: '�읪�棘龜鈞棘�댭뿅� 棘�댭먁귈분� 極�龜 極棘畇克剋�롋눺둔싻먁� 克 �곍둘�勻筠��� 極�棘勻筠�克龜 棘��꾉압넘�逵�꾉먁�: %s.',
		notInDic		: '�왨귂곎꺫귂곎궿꽹꺪둘� 勻 �곍뿅압꽥겉�筠',
		changeTo		: '�샫론셸둔싻먈귂� 戟逵',
		btnIgnore		: '�읪�棘極�꺫곎궿먈귂�',
		btnIgnoreAll	: '�읪�棘極�꺫곎궿먈귂� 勻�곎�',
		btnReplace		: '�쀐겆셸둔싻먈귂�',
		btnReplaceAll	: '�쀐겆셸둔싻먈귂� 勻�곎�',
		btnUndo			: '�왨궿셸둔싻먈귂�',
		noSuggestions	: '- �믌겉�龜逵戟�귂� 棘�귂곎꺫귂곎궿꽹꺫롋� -',
		progress		: '�왨��꾉압넘�逵�꾉먈� 極�棘勻筠��뤢둘귂곎�...',
		noMispell		: '�읪�棘勻筠�克逵 棘��꾉압넘�逵�꾉먁� 鈞逵勻筠��댭둔싻�. �왨댭먁귈압� 戟筠 戟逵橘畇筠戟棘',
		noChanges		: '�읪�棘勻筠�克逵 棘��꾉압넘�逵�꾉먁� 鈞逵勻筠��댭둔싻�. �앆� 龜鈞劇筠戟筠戟棘 戟龜 棘畇戟棘均棘 �곍뿅압꽥�',
		oneChange		: '�읪�棘勻筠�克逵 棘��꾉압넘�逵�꾉먁� 鈞逵勻筠��댭둔싻�. �샫론셸둔싻둔싻� 棘畇戟棘 �곍뿅압꽥�',
		manyChanges		: '�읪�棘勻筠�克逵 棘��꾉압넘�逵�꾉먁� 鈞逵勻筠��댭둔싻�. �샫론셸둔싻둔싻� �곍뿅압�: %1',
		ieSpellDownload	: '�쑷압닌꺪뿌� 極�棘勻筠�克龜 棘��꾉압넘�逵�꾉먁� 戟筠 �꺫곎궿겆싻압꽥뿅둔�. 奎棘�궿먈궿� �곍분겉눺겉귂� 筠均棘?'
	},

	smiley :
	{
		toolbar	: '鬼劇逵橘剋��',
		title	: '�믍곎궿겆꽥먈귂� �곍셸겆밀�',
		options : '�믍뗊귈앗� �곍셸겆밀뿅�'
	},

	elementsPath :
	{
		eleLabel : '�읪꺫귂� �띚뿅둔셸둔싼궿압�',
		eleTitle : '葵剋筠劇筠戟�� %1'
	},

	numberedlist	: '�믍곎궿겆꽥먈귂� / �꺪닉겆뿅먈귂� 戟�꺪셸둘�棘勻逵戟戟�뗊� �곍왈먈곍압�',
	bulletedlist	: '�믍곎궿겆꽥먈귂� / �꺪닉겆뿅먈귂� 劇逵�克龜�棘勻逵戟戟�뗊� �곍왈먈곍압�',
	indent			: '叫勻筠剋龜�눺먈귂� 棘�귂곎귂꺪�',
	outdent			: '叫劇筠戟�뚎댭먈귂� 棘�귂곎귂꺪�',

	justify :
	{
		left	: '�읩� 剋筠勻棘劇�� 克�逵��',
		center	: '�읩� �녡둔싼귂���',
		right	: '�읩� 極�逵勻棘劇�� 克�逵��',
		block	: '�읩� �댭먈�龜戟筠'
	},

	blockquote : '揆龜�궿겉궿�',

	clipboard :
	{
		title		: '�믍곎궿겆꽥먈귂�',
		cutError	: '�앆겉곎귂�棘橘克龜 閨筠鈞棘極逵�곍싻앗곎궿� 勻逵�댭둔넓� 閨�逵�꺪론둘�逵 戟筠 �逵鈞�筠�댭겉롋� �筠畇逵克�궿앗��� 勻�뗊왈압뿅싼뤣귂� 棘極筠�逵�녡먁� 極棘 勻�뗋�筠鈞克筠 �궿둔붇곎궿�. �읩압뙨겆뿌꺪밂곎궿�, 龜�곍왈압뿌뚍롤꺪밂궿� 畇剋�� �띛궿압넓� 克剋逵勻龜逵�귂꺫��� (Ctrl/Cmd+X).',
		copyError	: '�앆겉곎귂�棘橘克龜 閨筠鈞棘極逵�곍싻앗곎궿� 勻逵�댭둔넓� 閨�逵�꺪론둘�逵 戟筠 �逵鈞�筠�댭겉롋� �筠畇逵克�궿앗��� 勻�뗊왈압뿅싼뤣귂� 棘極筠�逵�녡먁� 極棘 克棘極龜�棘勻逵戟龜�� �궿둔붇곎궿�. �읩압뙨겆뿌꺪밂곎궿�, 龜�곍왈압뿌뚍롤꺪밂궿� 畇剋�� �띛궿압넓� 克剋逵勻龜逵�귂꺫��� (Ctrl/Cmd+C).',
		pasteMsg	: '�읩압뙨겆뿌꺪밂곎궿�, 勻�곎궿겆꽹뚎궿� �궿둔붇곎� 勻 鈞棘戟�� 戟龜菌筠, 龜�곍왈압뿌뚍롤꺫� 克剋逵勻龜逵�귂꺫��� (<strong>Ctrl/Cmd+V</strong>) 龜 戟逵菌劇龜�궿� 克戟棘極克�� "OK".',
		securityMsg	: '�앆겉곎귂�棘橘克龜 閨筠鈞棘極逵�곍싻앗곎궿� 勻逵�댭둔넓� 閨�逵�꺪론둘�逵 戟筠 �逵鈞�筠�댭겉롋� �筠畇逵克�궿앗��� 戟逵極��뤢솅꺫� 棘閨�逵�됎겉귂뚎곎� 克 閨�꺫꾉둘��� 棘閨劇筠戟逵. �믍� 畇棘剋菌戟�� 勻�곎궿겆꽥먈귂� �궿둔붇곎� �곍싻압꽥� 勻 �띛궿� 棘克戟棘.',
		pasteArea	: '�쀐압싻� 畇剋�� 勻�곎궿겆꽥분�'
	},

	pastefromword :
	{
		confirmCleanup	: '龜筠克�곎�, 克棘�궿앗��뗊� 勻�� 菌筠剋逵筠�궿� 勻�곎궿겆꽥먈귂�, 極棘 勻�곍둔� 勻龜畇龜劇棘�곎궿�, 閨�뗊� �곍분압왈먈�棘勻逵戟 龜鈞 Word. 鬼剋筠畇�꺪둘� 剋龜 棘�눺먈곎궿먈귂� 筠均棘 極筠�筠畇 勻�곎궿겆꽥분압�?',
		toolbar			: '�믍곎궿겆꽥먈귂� 龜鈞 Word',
		title			: '�믍곎궿겆꽥먈귂� 龜鈞 Word',
		error			: '�앆둔꽥압론셸압뙨싻� 棘�눺먈곎궿먈귂� 勻�곎궿겆꽥뿅둔싻싼뗊� 畇逵戟戟�뗊� 龜鈞-鈞逵 勻戟�꺫귂�筠戟戟筠橘 棘�댭먁귈분�'
	},

	pasteText :
	{
		button	: '�믍곎궿겆꽥먈귂� �궿압뿌뚍분� �궿둔붇곎�',
		title	: '�믍곎궿겆꽥먈귂� �궿압뿌뚍분� �궿둔붇곎�'
	},

	templates :
	{
		button			: '珪逵閨剋棘戟��',
		title			: '珪逵閨剋棘戟�� �곍압닉둘�菌龜劇棘均棘',
		options : '�읩겉�逵劇筠�귂��� �댭겆귈뿅압싻�',
		insertOption	: '�쀐겆셸둔싻먈귂� �궿둔붇꺫됎둔� �곍압닉둘�菌龜劇棘筠',
		selectPromptMsg	: '�읩압뙨겆뿌꺪밂곎궿�, 勻�뗊귈둘�龜�궿�, 克逵克棘橘 �댭겆귈뿅압� �곍뿅둔닌꺪둘� 棘�궿붇��뗋귂� 勻 �筠畇逵克�궿앗�筠',
		emptyListMsg	: '(戟筠 棘極�筠畇筠剋筠戟棘 戟龜 棘畇戟棘均棘 �댭겆귈뿅압싻�)'
	},

	showBlocks : '�왨궿압귐�逵菌逵�귂� 閨剋棘克龜',

	stylesCombo :
	{
		label		: '鬼�궿먁뿅�',
		panelTitle	: '鬼�궿먁뿅� �꾉앗�劇逵�궿먈�棘勻逵戟龜��',
		panelTitle1	: '鬼�궿먁뿅� 閨剋棘克逵',
		panelTitle2	: '鬼�궿먁뿅� �띚뿅둔셸둔싼궿�',
		panelTitle3	: '鬼�궿먁뿅� 棘閨�듢둔붇궿�'
	},

	format :
	{
		label		: '圭棘�劇逵�궿먈�棘勻逵戟龜筠',
		panelTitle	: '圭棘�劇逵�궿먈�棘勻逵戟龜筠',

		tag_p		: '�왧귐뗋눺싻압�',
		tag_pre		: '�쑷압싻앗댭먈�龜戟戟棘筠',
		tag_address	: '�먒닌�筠��',
		tag_h1		: '�쀐겆넓압뿅압꽥압� 1',
		tag_h2		: '�쀐겆넓압뿅압꽥압� 2',
		tag_h3		: '�쀐겆넓압뿅압꽥압� 3',
		tag_h4		: '�쀐겆넓압뿅압꽥압� 4',
		tag_h5		: '�쀐겆넓압뿅압꽥압� 5',
		tag_h6		: '�쀐겆넓압뿅압꽥압� 6',
		tag_div		: '�왧귐뗋눺싻압� (div)'
	},

	div :
	{
		title				: '鬼棘鈞畇逵�귂� Div-克棘戟�궿둔밀싻둘�',
		toolbar				: '鬼棘鈞畇逵�귂� Div-克棘戟�궿둔밀싻둘�',
		cssClassInputLabel	: '�싍뿅겉곎곎� CSS',
		styleSelectLabel	: '鬼�궿먁뿌�',
		IdInputLabel		: '�샫닉둔싼궿먈꾉먁분겉궿앗�',
		languageCodeInputLabel	: '�싍압� �뤢롤뗊분�',
		inlineStyleInputLabel	: '鬼�궿먁뿌� �띚뿅둔셸둔싼궿�',
		advisoryTitleInputLabel	: '�쀐겆넓압뿅압꽥압�',
		langDirLabel		: '�앆겆왐�逵勻剋筠戟龜筠 �궿둔붇곎궿�',
		langDirLTRLabel		: '鬼剋筠勻逵 戟逵極�逵勻棘 (LTR)',
		langDirRTLLabel		: '鬼極�逵勻逵 戟逵剋筠勻棘 (RTL)',
		edit				: '�졤둔닉겆붇궿먈�棘勻逵�귂� 克棘戟�궿둔밀싻둘�',
		remove				: '叫畇逵剋龜�귂� 克棘戟�궿둔밀싻둘�'
  	},

	iframe :
	{
		title		: '鬼勻棘橘�곎궿꽥� iFrame',
		toolbar		: 'iFrame',
		noUrl		: '�읩압뙨겆뿌꺪밂곎궿�, 勻勻筠畇龜�궿� �곎곎뗊뿅붇� �꾊�筠橘劇逵',
		scrolling	: '�왨궿압귐�逵菌逵�귂� 極棘剋棘�곎� 極�棘克��꺫궿분�',
		border		: '�읩압분겆론겉귂� 均�逵戟龜�녢� �꾊�筠橘劇逵'
	},

	font :
	{
		label		: '珪�龜�꾊�',
		voiceLabel	: '珪�龜�꾊�',
		panelTitle	: '珪�龜�꾊�'
	},

	fontSize :
	{
		label		: '�졤겆론셸둘�',
		voiceLabel	: '�졤겆론셸둘� �댮�龜�꾊궿�',
		panelTitle	: '�졤겆론셸둘� �댮�龜�꾊궿�'
	},

	colorButton :
	{
		textColorTitle	: '揆勻筠�� �궿둔붇곎궿�',
		bgColorTitle	: '揆勻筠�� �꾉압싻�',
		panelTitle		: '揆勻筠�궿�',
		auto			: '�먒꽹궿압셸겉궿먈눺둘곍분�',
		more			: '�뺁됏� �녡꽥둘궿�...'
	},

	colors :
	{
		'000' : '槻�뫱�戟�뗊�',
		'800000' : '�뫰앗�畇棘勻�뗊�',
		'8B4513' : '�싍압뙨겆싻�-克棘�龜�눺싻둔꽹뗊�',
		'2F4F4F' : '龜筠劇戟�뗊� �곍먁싻둔꽥겉궿�-�곍둘��뗊�',
		'008080' : '鬼龜戟筠-鈞筠剋�뫰싼뗊�',
		'000080' : '龜�뫰셸싻�-�곍먁싻먁�',
		'4B0082' : '�샫싻닉먁넓�',
		'696969' : '龜�뫰셸싻�-�곍둘��뗊�',
		'B22222' : '�싍먈�極龜�눺싼뗊�',
		'A52A2A' : '�싍앗�龜�눺싻둔꽹뗊�',
		'DAA520' : '�쀐압뿅앗궿먈곎궿�-閨筠��뫰론압꽹뗊�',
		'006400' : '龜筠劇戟棘-鈞筠剋�뫰싼뗊�',
		'40E0D0' : '�뫰먈��롊론압꽹뗊�',
		'0000CD' : '叫劇筠�筠戟戟棘 �곍먁싻먁�',
		'800080' : '�읪꺫�極�꺫�戟�뗊�',
		'808080' : '鬼筠��뗊�',
		'F00' : '�싎�逵�곍싼뗊�',
		'FF8C00' : '龜筠劇戟棘-棘�逵戟菌筠勻�뗊�',
		'FFD700' : '�쀐압뿅앗궿먈곎귂뗊�',
		'008000' : '�쀐둔뿌뫰싼뗊�',
		'0FF' : '�믌겉곍먁뿌뚍분압꽹뗊�',
		'00F' : '鬼龜戟龜橘',
		'EE82EE' : '圭龜棘剋筠�궿압꽹뗊�',
		'A9A9A9' : '龜�꺫곍분뿅�-�곍둘��뗊�',
		'FFA07A' : '鬼勻筠�궿뿅�-剋棘�곍앗곍둔꽹뗊�',
		'FFA500' : '�왨�逵戟菌筠勻�뗊�',
		'FFFF00' : '�뽔뫰뿌귂뗊�',
		'00FF00' : '�쎩겆밀셸�',
		'AFEEEE' : '�뫰뿅둔닉싻�-�곍먁싻먁�',
		'ADD8E6' : '鬼勻筠剋�궿�-均棘剋�꺪귈압�',
		'DDA0DD' : '鬼剋龜勻棘勻�뗊�',
		'D3D3D3' : '鬼勻筠�궿뿅�-�곍둘��뗊�',
		'FFF0F5' : '�졤압론압꽥�-剋逵勻逵戟畇棘勻�뗊�',
		'FAEBD7' : '�먒싼궿먈눺싼뗊� 閨筠剋�뗊�',
		'FFFFE0' : '鬼勻筠�궿뿅�-菌�뫰뿌귂뗊�',
		'F0FFF0' : '�쑷둔닉꽹뤢싻압� �棘�곎�',
		'F0FFFF' : '�쎩겆롤꺫�戟�뗊�',
		'F0F8FF' : '�뫰뿅둔닉싻�-均棘剋�꺪귈압�',
		'E6E6FA' : '�쎩겆꽥겆싻닉압꽹뗊�',
		'FFF' : '�뫰둔뿌뗊�'
	},

	scayt :
	{
		title			: '�읪�棘勻筠�克逵 棘��꾉압넘�逵�꾉먁� 極棘 劇筠�筠 勻勻棘畇逵 (SCAYT)',
		opera_title		: '�앆� 極棘畇畇筠�菌龜勻逵筠�귂곎� Opera',
		enable			: '�믌분뿌롋눺먈귂� SCAYT',
		disable			: '�왨궿분뿌롋눺먈귂� SCAYT',
		about			: '�� SCAYT',
		toggle			: '�읩둘�筠克剋�롋눺먈귂� SCAYT',
		options			: '�앆겉곎귂�棘橘克龜',
		langs			: '赳鈞�뗊분�',
		moreSuggestions	: '�뺁됏� 勻逵�龜逵戟�귂�',
		ignore			: '�읪�棘極�꺫곎궿먈귂�',
		ignoreAll		: '�읪�棘極�꺫곎궿먈귂� 勻�곎�',
		addWord			: '�붠압귈겆꽥먈귂� �곍뿅압꽥�',
		emptyDic		: '�믍� 畇棘剋菌戟�� �꺪분겆론겉귂� 戟逵鈞勻逵戟龜筠 �곍뿅압꽥겉���.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: '�읩겉�逵劇筠�귂���',
		allCaps			: '�샫넓싻앗�龜�棘勻逵�귂� �곍뿅압꽥� 龜鈞 鈞逵均剋逵勻戟�뗋� 閨�꺪분�',
		ignoreDomainNames : '�샫넓싻앗�龜�棘勻逵�귂� 畇棘劇筠戟戟�뗊� 龜劇筠戟逵',
		mixedCase		: '�샫넓싻앗�龜�棘勻逵�귂� �곍뿅압꽥� 龜鈞 閨�꺪분� 勻 �逵鈞戟棘劇 �筠均龜�곎귂�筠',
		mixedWithDigits	: '�샫넓싻앗�龜�棘勻逵�귂� �곍뿅압꽥�, �곍압닉둘�菌逵�됎먁� �녡먈꾊���',

		languagesTab	: '赳鈞�뗊분�',

		dictionariesTab	: '鬼剋棘勻逵�龜',
		dic_field_name	: '�앆겆론꽥겆싻먁� �곍뿅압꽥겉���',
		dic_create		: '鬼棘鈞畇逵�귂�',
		dic_restore		: '�믌앗곎곎궿겆싻압꽥먈귂�',
		dic_delete		: '叫畇逵剋龜�귂�',
		dic_rename		: '�읩둘�筠龜劇筠戟棘勻逵�귂�',
		dic_info		: '�샫론싻겉눺겆뿌뚍싻�, 極棘剋�뚍론압꽥겉궿둔뿌뚎곍분먁� �곍뿅압꽥겉��� �끧�逵戟龜�귂곎� 勻 cookie, 克棘�궿앗��뗊� 棘均�逵戟龜�눺둔싼� 勻 �逵鈞劇筠�筠. �싍압넓닉� �곍뿅압꽥겉��� 極棘剋�뚍론압꽥겉궿둔뿌� 勻�뗋�逵�곎궿겆둘� 畇棘 �逵鈞劇筠�棘勻, �눻궿� 筠均棘 戟筠勻棘鈞劇棘菌戟棘 �끧�逵戟龜�귂� 勻 cookie, 棘戟 極筠�筠戟棘�곍먈귂곎� 戟逵 �끧�逵戟筠戟龜筠 戟逵 戟逵�� �곍둘�勻筠�. 槻�궿압귐� �곍앗끧�逵戟龜�귂� 勻逵�� �곍뿅압꽥겉��� 戟逵 戟逵�댭둔� �곍둘�勻筠�筠, 勻逵劇 �곍뿅둔닌꺪둘� �꺪분겆론겉귂� 戟逵鈞勻逵戟龜筠 勻逵�댭둔넓� �곍뿅압꽥겉���. �뺁곍뿅� �� 勻逵�� �꺪뙨� 閨�뗊� �곍뿅압꽥겉���, 克棘�궿앗��뗊� 勻�� �곍앗끧�逵戟�뤢뿅� 戟逵 戟逵�댭둔� �곍둘�勻筠�筠, �궿� �꺪분겆뙨먈궿� 鈞畇筠�곎� 筠均棘 戟逵鈞勻逵戟龜筠 龜 戟逵菌劇龜�궿� 克戟棘極克�� �믌앗곎곎궿겆싻압꽥먈귂�.',

		aboutTab		: '�� SCAYT'
	},

	about :
	{
		title		: '�� CKEditor',
		dlgTitle	: '�� CKEditor',
		help	: '$1 �곍압닉둘�菌龜�� 極棘畇�棘閨戟�꺫� �곍왐�逵勻克�� 極棘 龜�곍왈압뿌뚍론압꽥겆싻먈�.',
		userGuide : '�졥꺪분압꽥압닌곎궿꽥� 極棘剋�뚍론압꽥겉궿둔뿌� CKEditor',
		moreInfo	: '�붠뿌� 極棘剋�꺫눺둔싻먈� 龜戟�꾉앗�劇逵�녡먁� 棘 剋龜�녡둔싻론먁�, 極棘菌逵剋�꺪밂곎궿�, 極筠�筠橘畇龜�궿� 戟逵 戟逵�� �곍겆밂�:',
		copy		: 'Copyright &copy; $1. �믍곍� 極�逵勻逵 鈞逵�됎먈됎둔싼�.'
	},

	maximize : '�졤겆론꽥둘�戟�꺫귂�',
	minimize : '鬼勻筠�戟�꺫귂�',

	fakeobjects :
	{
		anchor		: '赳克棘���',
		flash		: 'Flash 逵戟龜劇逵�녡먈�',
		iframe		: 'iFrame',
		hiddenfield	: '鬼克��뗋궿압� 極棘剋筠',
		unknown		: '�앆둔먁론꽥둘곎궿싼뗊� 棘閨�듢둔붇�'
	},

	resize : '�읩둘�筠�궿겉됎먈궿� 畇剋�� 龜鈞劇筠戟筠戟龜�� �逵鈞劇筠�逵',

	colordialog :
	{
		title		: '�믍뗊귈둘�龜�궿� �녡꽥둘�',
		options	:	'�앆겉곎귂�棘橘克龜 �녡꽥둘궿�',
		highlight	: '�읩압� 克�꺫��곍앗�棘劇',
		selected	: '�믍뗊귐�逵戟戟�뗊� �녡꽥둘�',
		clear		: '�왨눺먈곎궿먈귂�'
	},

	toolbarCollapse	: '鬼勻筠�戟�꺫귂� 極逵戟筠剋�� 龜戟�곎귂��꺪셸둔싼궿압�',
	toolbarExpand	: '�졤겆론꽥둘�戟�꺫귂� 極逵戟筠剋�� 龜戟�곎귂��꺪셸둔싼궿압�',

	toolbarGroups :
	{
		document : '�붠압붇꺪셸둔싼�',
		clipboard : '�뫱꺫꾉둘� 棘閨劇筠戟逵 / �왨궿셸둔싻� 畇筠橘�곎궿꽥먁�',
		editing : '�싍앗��筠克�궿먈�棘勻克逵',
		forms : '圭棘�劇��',
		basicstyles : '�읪�棘�곎귂뗊� �곎궿먁뿅�',
		paragraph : '�먒귈론겉�',
		links : '鬼�곎뗊뿅분�',
		insert : '�믍곎궿겆꽥분�',
		styles : '鬼�궿먁뿅�',
		colors : '揆勻筠�궿�',
		tools : '�샫싼곎귂��꺪셸둔싼귂�'
	},

	bidi :
	{
		ltr : '�앆겆왐�逵勻剋筠戟龜筠 �궿둔붇곎궿� �곍뿅둔꽥� 戟逵極�逵勻棘',
		rtl : '�앆겆왐�逵勻剋筠戟龜筠 �궿둔붇곎궿� �곍왐�逵勻逵 戟逵剋筠勻棘'
	},

	docprops :
	{
		label : '鬼勻棘橘�곎궿꽥� 畇棘克�꺪셸둔싼궿�',
		title : '鬼勻棘橘�곎궿꽥� 畇棘克�꺪셸둔싼궿�',
		design : '�붠먁론겆밀�',
		meta : '�쑷둘궿겆닉겆싻싼뗊�',
		chooseColor : '�믍뗊귈둘�龜�궿�',
		other : '�붡��꺪넓압� ...',
		docTitle :	'�쀐겆넓압뿅압꽥압� �곎귂�逵戟龜�녢�',
		charset : 	'�싍압닉먈�棘勻克逵 戟逵閨棘�逵 �곍먁셸꽥압뿅압�',
		charsetOther : '�붡��꺪넓겉� 克棘畇龜�棘勻克逵 戟逵閨棘�逵 �곍먁셸꽥압뿅압�',
		charsetASCII : 'ASCII',
		charsetCE : '揆筠戟�귂�逵剋�뚍싻�-筠勻�棘極筠橘�곍분겉�',
		charsetCT : '�싍먈궿겆밂곍분겉� �귂�逵畇龜�녡먁압싻싻겉� (Big5)',
		charsetCR : '�싍먈�龜剋剋龜�녡�',
		charsetGR : '�볃�筠�눺둘곍분겉�',
		charsetJP : '赳極棘戟�곍분겉�',
		charsetKR : '�싍앗�筠橘�곍분겉�',
		charsetTR : '龜�꺫�筠�녡분겉�',
		charsetUN : '規戟龜克棘畇 (UTF-8)',
		charsetWE : '�쀐겆왈겆닉싻�-筠勻�棘極筠橘�곍분겉�',
		docType : '�쀐겆넓압뿅압꽥압� �궿먁왈� 畇棘克�꺪셸둔싼궿�',
		docTypeOther : '�붡��꺪넓압� 鈞逵均棘剋棘勻棘克 �궿먁왈� 畇棘克�꺪셸둔싼궿�',
		xhtmlDec : '�믌분뿌롋눺먈귂� 棘閨�듥뤢꽥뿅둔싻먈� XHTML',
		bgColor : '揆勻筠�� �꾉압싻�',
		bgImage : '鬼�곎뗊뿅분� 戟逵 �꾉압싻압꽥압� 龜鈞棘閨�逵菌筠戟龜筠',
		bgFixed : '圭棘戟 極�龜克�筠極剋�뫰� (戟筠 極�棘劇逵�귂뗊꽥겆둘귂곎�)',
		txtColor : '揆勻筠�� �궿둔붇곎궿�',
		margin : '�왨귂곎귂꺪왐� �곎귂�逵戟龜�녢�',
		marginTop : '�믌둘��끦싻먁�',
		marginLeft : '�쎩둔꽹뗊�',
		marginRight : '�읪�逵勻�뗊�',
		marginBottom : '�앆먁뙨싻먁�',
		metaKeywords : '�싍뿌롋눺둔꽹뗊� �곍뿅압꽥� 畇棘克�꺪셸둔싼궿� (�눺둘�筠鈞 鈞逵極�뤣귂꺫�)',
		metaDescription : '�왧왈먈곍겆싻먁� 畇棘克�꺪셸둔싼궿�',
		metaAuthor : '�먒꽹궿앗�',
		metaCopyright : '�먒꽹궿앗��곍분먁� 極�逵勻逵',
		previewHtml : '<p>葵�궿� <strong>極�龜劇筠�</strong> �궿둔붇곎궿�, 戟逵極龜�곍겆싻싻압넓� �� 極棘劇棘�됏뚎� <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
