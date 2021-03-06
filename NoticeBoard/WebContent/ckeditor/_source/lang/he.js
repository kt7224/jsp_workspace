/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Hebrew language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['he'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'rtl',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : '鬧�뺈ⓚ� �샳㎓§� 鬧漏�쇬�, %1',
	editorHelp : '�쑿쀗� �먚쑿� ALT + 0 �쑿↙뽛ⓚ�',

	// ARIA descriptions.
	toolbars	: '遼淚�믕쑿� �쎰쑿쇬� 漏�� �붨↙뺈ⓚ�',
	editor		: '鬧�뺈ⓚ� �샳㎓§� 鬧漏�쇬�',

	// Toolbar buttons without dialogs.
	source			: '�왰㎓뺈�',
	newPage			: '�볊� �쀗볊�',
	save			: '漏�왰쇬ⓚ�',
	preview			: '瘻屢�뺈믕� �왰㎓볊쇬왰�',
	cut				: '�믕뽛쇬ⓚ�',
	copy			: '�붨↙ぷ㎓�',
	paste			: '�붨볊뫷㎓�',
	print			: '�붨볊ㅧ§�',
	underline		: '樓�� 瘻�쀗ぷ뺈�',
	bold			: '�왰뺈볊믕�',
	italic			: '�졫샳뺈�',
	selectAll		: '�뫷쀗쇬ⓚ� �붨쎰�',
	removeFormat	: '�붨§ⓚ� �붨↙쇬┹뺈�',
	strike			: '�쎰ぷ쇬� �왰쀗뺈�',
	subscript		: '�쎰ぷ쇬� 瘻�쀗ぷ뺈�',
	superscript		: '�쎰ぷ쇬� 鬧�쑿쇬뺈�',
	horizontalrule	: '�붨뺈§ㅧ� 樓�� �먚뺈ㅧ㎓�',
	pagebreak		: '�붨뺈§ㅧ� 漏�뫷쇬ⓚ� �볊�',
	pagebreakAlt		: '漏�뫷쇬ⓚ� �볊�',
	unlink			: '�붨§ⓚ� �붨㎓쇬⒦뺈�',
	undo			: '�뫷쇬샳뺈� 屢鬧�� �먚쀗ⓚ뺈�',
	redo			: '�쀗뽛ⓚ� 鬧�� 屢鬧�� �먚쀗ⓚ뺈�',

	// Common messages and labels.
	common :
	{
		browseServer	: '遼�쇬쇬� �붨⒦ⓚ�',
		url				: '�쎰ぷ뺈뫷� (URL)',
		protocol		: '壘淚�뺈샳뺈㎓뺈�',
		upload			: '�붨↙쑿먚�',
		uploadSubmit	: '漏�쑿쇬쀗� �쑿⒦ⓚ�',
		image			: '瘻�왰뺈졫�',
		flash			: '壘�쑿먚�',
		form			: '�샳뺈ㅧ�',
		checkbox		: '瘻�쇬뫷� 遼�쇬왰뺈�',
		radio			: '�쑿쀗┹� �먚ㅧ⒦ⓚ뺈쇬뺈�',
		textField		: '漏�볊� �샳㎓§�',
		textarea		: '�먚쇬뽛뺈� �샳㎓§�',
		hiddenField		: '漏�볊� �쀗뫷뺈�',
		button			: '�쎰ㅧぷ뺈�',
		select			: '漏�볊� �뫷쀗쇬ⓚ�',
		imageButton		: '�쎰ㅧぷ뺈� 瘻�왰뺈졫�',
		notSet			: '<�쑿� �졫㎓뫷�>',
		id				: '�뽛쇬붨뺈� (ID)',
		name			: '漏��',
		langDir			: '�쎰쇬뺈뺈� 漏壘��',
		langDirLtr		: '漏�왰먚� �쑿쇬왰쇬� (LTR)',
		langDirRtl		: '�쇬왰쇬� �쑿⒦왰먚� (RTL)',
		langCode		: '樓�뺈� 漏壘��',
		longDescr		: '樓�쇬⒦뺈� �쑿ぷ쇬먚뺈� �왰ㅧ뺈ⓚ�',
		cssClass		: '�왰쀗쑿㎓� 鬧�쇬┹뺈� (CSS Class)',
		advisoryTitle	: '�쎰뺈ぷⓚ� �왰뺈┹↙�',
		cssStyle		: '遼�믕졫뺈�',
		ok				: '�먚쇬⒦뺈�',
		cancel			: '�뫷쇬샳뺈�',
		close			: '遼�믕쇬ⓚ�',
		preview			: '瘻屢�뺈믕� �왰㎓볊쇬왰�',
		generalTab		: '�쎰쑿쑿�',
		advancedTab		: '�먚ㅧ⒦ⓚ뺈쇬뺈� �왰ぷ㎓볊왰뺈�',
		validateNumberFailed : '�붨↙ⓚ� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧⓚ�.',
		confirmNewPage	: '�쎰� �붨⒦쇬졫뺈쇬쇬� 漏�쑿� �졫⒦왰ⓚ� �쇬먚뫷볊�. �붨먚� �쑿붨↙쑿뺈� �볊� �쀗볊�?',
		confirmCancel	: '�쀗쑿� �왰붨먚ㅧ⒦ⓚ뺈쇬뺈� 漏�뺈졫�, �붨먚� �쑿§믕뺈� �먚� �붨볊쇬먚쑿뺈�?',
		options			: '�먚ㅧ⒦ⓚ뺈쇬뺈�',
		target			: '�왰샳ⓚ�',
		targetNew		: '�쀗쑿뺈� �쀗볊� (_blank)',
		targetTop		: '�붨쀗쑿뺈� �붨↙쑿쇬뺈� �뫷쇬뺈ぷ� (_top)',
		targetSelf		: '�먚뺈ぷ� �쀗쑿뺈� (_self)',
		targetParent	: '�쀗쑿뺈� �붨먚� (_parent)',
		langDirLTR		: '漏�왰먚� �쑿쇬왰쇬� (LTR)',
		langDirRTL		: '�쇬왰쇬� �쑿⒦왰먚� (RTL)',
		styles			: '遼�믕졫뺈�',
		cssClasses		: '�왰쀗쑿㎓뺈� �믕쑿쇬뺈졫뺈� 遼�믕졫뺈�',
		width			: '淚�뺈쀗�',
		height			: '�믕뺈뫷�',
		align			: '�쇬쇬⒦뺈�',
		alignLeft		: '�쑿⒦왰먚�',
		alignRight		: '�쑿쇬왰쇬�',
		alignCenter		: '�왰ⓚ쎰�',
		alignTop		: '�쑿왰↙쑿�',
		alignMiddle		: '�쑿먚왰┹�',
		alignBottom		: '�쑿ぷ쀗ぷ쇬�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '�붨믕뺈뫷� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
		invalidWidth	: '�붨ⓚ뺈쀗� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
		invalidCssLength	: '�붨↙ⓚ� 漏屢�뺈쇬� �쑿⒦볊� "%1" �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� �쀗쇬뺈뫷� 鬧�� �먚� �쑿쑿� �쇬쀗쇬볊� �왰쇬볊� �쀗뺈㎓쇬� 漏�� CSS (px, %, in, cm, mm, em, ex, pt, �먚� pc).',
		invalidHtmlLength	: '�붨↙ⓚ� 漏屢�뺈쇬� �쑿⒦볊� "%1" �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� �쀗쇬뺈뫷� 鬧�� �먚� �쑿쑿� �쇬쀗쇬볊� �왰쇬볊� �쀗뺈㎓쇬� 漏�� HTML (px �먚� %).',
		invalidInlineStyle	: '�붨↙ⓚ� 漏屢�뺈쇬쇬� �쑿⒦볊� �붨§믕졫뺈� �쀗쇬쇬� �쑿붨쎰쇬� �뽛뺈� 鬧淚�쎰쇬� �먚쀗� �먚� �쇬뺈ぷ� �뫷ㅧ뺈ⓚ왰� "漏�� : 鬧淚��", �왰뺈ㅧⓚ볊쇬� 鬧�� �쇬볊� �졫㎓뺈볊�-壘遼�쇬�.',
		cssLengthTooltip	: '�쇬� �쑿붨쎰졫쇬� �왰§ㅧ� �붨왰쇬쇬┹� 壘�쇬㎓§쑿쇬� �먚� �왰§ㅧ� 鬧�� �쇬쀗쇬볊� �믕쑿쇬뺈졫뺈� 遼�믕졫뺈� 瘻樓�쇬졫� (px, %, in, cm, mm, em, ex, pt, or pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, �쑿� �뽛왰쇬�</span>'
	},

	contextmenu :
	{
		options : '�먚ㅧ⒦ⓚ뺈쇬뺈� 瘻壘淚�쇬� �붨붨㎓⒦�'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�붨뺈§ㅧ� 瘻�� �왰쇬뺈쀗�',
		title		: '�뫷쀗쇬ⓚ� 瘻�� �왰쇬뺈쀗�',
		options : '�먚ㅧ⒦ⓚ뺈쇬뺈� 瘻�뺈뺈쇬� �왰쇬뺈쀗볊쇬�'
	},

	// Link dialog.
	link :
	{
		toolbar		: '�붨뺈§ㅧ�/鬧淚�쇬쎰� 樓�쇬⒦뺈�',
		other 		: '<�먚쀗�>',
		menu		: '�왰먚ㅧ쇬쇬졫� 樓�쇬⒦뺈�',
		title		: '樓�쇬⒦뺈�',
		info		: '�왰쇬볊� 鬧�� �붨㎓쇬⒦뺈�',
		target		: '�왰샳ⓚ�',
		upload		: '�붨↙쑿먚�',
		advanced	: '�먚ㅧ⒦ⓚ뺈쇬뺈� �왰ぷ㎓볊왰뺈�',
		type		: '遼�뺈� 樓�쇬⒦뺈�',
		toUrl		: '�쎰ぷ뺈뫷� (URL)',
		toAnchor	: '鬧�뺈믕� �뫷↙왰뺈� �뽛�',
		toEmail		: '�볊뺈�"��',
		targetFrame		: '<�왰§믕ⓚ�>',
		targetPopup		: '<�쀗쑿뺈� 樓�뺈ㅧ�>',
		targetFrameName	: '漏�� �왰§믕ⓚ� �붨쇬↙�',
		targetPopupName	: '漏�� �붨쀗쑿뺈� �붨㎓뺈ㅧ�',
		popupFeatures	: '瘻�쎰뺈졫뺈� �붨쀗쑿뺈� �붨㎓뺈ㅧ�',
		popupResizable	: '漏�쇬졫뺈� �믕뺈볊�',
		popupStatusBar	: '遼淚�믕� �쀗쇬뺈뺈�',
		popupLocationBar: '遼淚�믕� �쎰ぷ뺈뫷�',
		popupToolbar	: '遼淚�믕� �붨쎰쑿쇬�',
		popupMenuBar	: '遼淚�믕� 瘻壘淚�쇬�',
		popupFullScreen	: '�왰§� �왰쑿� (IE)',
		popupScrollBars	: '�졫쇬ぷ� �쑿믕쑿쇬쑿�',
		popupDependent	: '瘻�쑿뺈� (Netscape)',
		popupLeft		: '�왰쇬㎓뺈� 屢�� 漏�왰먚�',
		popupTop		: '�왰쇬㎓뺈� 屢�� 鬧�쑿쇬뺈�',
		id				: '�뽛쇬붨뺈� (ID)',
		langDir			: '�쎰쇬뺈뺈� 漏壘��',
		langDirLTR		: '漏�왰먚� �쑿쇬왰쇬� (LTR)',
		langDirRTL		: '�쇬왰쇬� �쑿⒦왰먚� (RTL)',
		acccessKey		: '�왰㎓� �믕쇬⒦�',
		name			: '漏��',
		langCode			: '樓�뺈� 漏壘��',
		tabIndex			: '�왰§ㅧ� �샳먚�',
		advisoryTitle		: '�쎰뺈ぷⓚ� �왰뺈┹↙�',
		advisoryContentType	: 'Content Type �왰뺈┹�',
		cssClasses		: '�믕쇬쑿쇬뺈졫뺈� 鬧�쇬┹뺈� 樓�뫷뺈┹뺈�',
		charset			: '樓�쇬볊뺈� �붨왰⒦먚� �붨왰㎓뺈⒦�',
		styles			: '遼�믕졫뺈�',
		rel			: '樓漏淚 �믕뺈왰쑿쇬�',
		selectAnchor		: '�뫷쀗쇬ⓚ� 鬧�뺈믕�',
		anchorName		: '鬧壘"�� 漏�� �붨↙뺈믕�',
		anchorId			: '鬧壘"�� �뽛쇬붨뺈� (ID) �붨먚쑿왰졫�',
		emailAddress		: '�쎰ぷ뺈뫷� �붨볊뺈�"��',
		emailSubject		: '�졫뺈⒦� �붨붨뺈볊↙�',
		emailBody		: '�믕뺈� �붨붨뺈볊↙�',
		noAnchors		: '(�먚쇬� 鬧�뺈믕졫쇬� �뽛왰쇬졫쇬� �뫷볊�)',
		noUrl			: '�쇬� �쑿붨㎓쑿쇬� �먚� �쎰ぷ뺈뫷� �붨㎓쇬⒦뺈� (URL)',
		noEmail			: '�쇬� �쑿붨㎓쑿쇬� �먚� �쎰ぷ뺈뫷� �붨볊뺈�"��'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�붨뺈§ㅧ�/鬧淚�쇬쎰� �졫㎓뺈볊� 鬧�쇬믕뺈�',
		menu		: '�왰먚ㅧ쇬쇬졫� �졫㎓뺈볊� 鬧�쇬믕뺈�',
		title		: '�왰먚ㅧ쇬쇬졫� �졫㎓뺈볊� 鬧�쇬믕뺈�',
		name		: '漏�� �쑿졫㎓뺈볊� 鬧�쇬믕뺈�',
		errorName	: '�쇬� �쑿붨㎓쑿쇬� 漏�� �쑿졫㎓뺈볊� 鬧�쇬믕뺈�',
		remove		: '�왰쀗쇬㎓� �졫㎓뺈볊� 鬧�쇬믕뺈�'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '瘻�쎰뺈졫뺈� 淚漏�쇬왰� �왰왰뺈§ㅧⓚ�',
		bulletedTitle		: '瘻�쎰뺈졫뺈� 淚漏�쇬왰� 瘻�뫷쑿쇬샳쇬�',
		type				: '遼�뺈�',
		start				: '瘻�쀗쇬쑿� �왰§ㅧ뺈�',
		validateStartNumber				:'漏�볊� 瘻�쀗쇬쑿� �붨왰§ㅧ뺈� �쀗쇬쇬� �쑿붨쎰쇬� �왰§ㅧ� 漏�쑿�.',
		circle				: '鬧�쇬믕뺈� 淚�쇬�',
		disc				: '鬧�쇬믕뺈� �왰쑿�',
		square				: '淚�쇬뫷뺈�',
		none				: '�쑿쑿�',
		notset				: '<�쑿� �졫㎓뫷�>',
		armenian			: '遼壘淚�뺈� �먚ⓚ왰졫쇬뺈�',
		georgian			: '遼壘淚�뺈� �믕쇬먚뺈ⓚ믕쇬뺈� (an, ban, gan �뺈쎰�\')',
		lowerRoman			: '遼壘�쇬ⓚ� 淚�뺈왰쇬� �뫷먚뺈ぷ쇬뺈� 樓�샳졫뺈� (i, ii, iii, iv, v �뺈쎰�\')',
		upperRoman			: '遼壘�쇬ⓚ� 淚�뺈왰쇬뺈� �뫷먚뺈ぷ쇬뺈� �믕볊뺈쑿뺈� (I, II, III, IV, V �뺈쎰�\')',
		lowerAlpha			: '�먚뺈ぷ쇬뺈� �먚졫믕쑿쇬뺈� 樓�샳졫뺈� (a, b, c, d, e �뺈쎰�\')',
		upperAlpha			: '�먚뺈ぷ쇬뺈� �먚졫믕쑿쇬뺈� �믕볊뺈쑿뺈� (A, B, C, D, E �뺈쎰�\')',
		lowerGreek			: '�먚뺈ぷ쇬뺈� �쇬뺈뺈졫쇬뺈� 樓�샳졫뺈� (alpha, beta, gamma �뺈쎰�\')',
		decimal				: '遼壘淚�뺈� (1, 2, 3 �뺈쎰�\')',
		decimalLeadingZero	: '遼壘淚�뺈� 鬧�� 0 �뫷붨ぷ쀗쑿� (01, 02, 03 �뺈쎰�\')'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '�쀗쇬ㅧ뺈� �뺈붨쀗쑿ㅧ�',
		find				: '�쀗쇬ㅧ뺈�',
		replace				: '�붨쀗쑿ㅧ�',
		findWhat			: '�쀗쇬ㅧ뺈� �왰쀗ⓚ뺈뽛�:',
		replaceWith			: '�붨쀗쑿ㅧ� �뫷왰쀗ⓚ뺈뽛�:',
		notFoundMsg			: '�붨샳㎓§� �붨왰뫷뺈㎓� �쑿� �졫왰┹�.',
		findOptions			: '�먚ㅧ⒦ⓚ뺈쇬뺈� �쀗쇬ㅧ뺈�',
		matchCase			: '�붨뫷쀗졫� �뫷쇬� �먚뺈ぷ쇬뺈� 淚漏�쇬뺈� �쑿㎓샳졫뺈� (Case)',
		matchWord			: '�붨ぷ먚왰� �쑿왰쇬쑿� �붨왰쑿먚�',
		matchCyclic			: '�붨ぷ먚왰� �왰쀗뽛뺈ⓚ쇬�',
		replaceAll			: '�붨쀗쑿ㅧ� �뫷쎰� �붨↙왰뺈�',
		replaceSuccessMsg	: '%1 �샳㎓§샳쇬� �붨뺈쀗쑿ㅧ�.'
	},

	// Table Dialog
	table :
	{
		toolbar		: '�샳뫷쑿�',
		title		: '�왰먚ㅧ쇬쇬졫� �샳뫷쑿�',
		menu		: '�왰먚ㅧ쇬쇬졫� �샳뫷쑿�',
		deleteTable	: '�왰쀗� �샳뫷쑿�',
		rows		: '漏�뺈ⓚ뺈�',
		columns		: '鬧�왰뺈볊뺈�',
		border		: '�믕뺈볊� �왰§믕ⓚ�',
		widthPx		: '壘�쇬㎓§쑿쇬�',
		widthPc		: '�먚쀗뺈�',
		widthUnit	: '�쇬쀗쇬볊� 淚�뺈쀗�',
		cellSpace	: '�왰ⓚ뺈뺈� 瘻��',
		cellPad		: '淚�쇬ㅧ뺈� 瘻��',
		caption		: '�쎰쇬ぷ뺈�',
		summary		: '瘻樓屢�쇬�',
		headers		: '�쎰뺈ぷⓚ뺈�',
		headersNone		: '�먚쇬�',
		headersColumn	: '鬧�왰뺈볊� 淚�먚⒦뺈졫�',
		headersRow		: '漏�뺈ⓚ� 淚�먚⒦뺈졫�',
		headersBoth		: '漏�졫쇬붨�',
		invalidRows		: '漏�볊� �왰§ㅧ� �붨⒦뺈ⓚ뺈� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� �믕볊뺈� �� 0.',
		invalidCols		: '漏�볊� �왰§ㅧ� �붨↙왰뺈볊뺈� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� �믕볊뺈� �� 0.',
		invalidBorder	: '漏�볊� �믕뺈볊� �붨왰§믕ⓚ� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
		invalidWidth	: '漏�볊� 淚�뺈쀗� �붨샳뫷쑿� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
		invalidHeight	: '漏�볊� �믕뺈뫷� �붨샳뫷쑿� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
		invalidCellSpacing	: '漏�볊� 淚�쇬뺈뺈� �붨ぷ먚쇬� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� �쀗쇬뺈뫷�.',
		invalidCellPadding	: '漏�볊� 淚�쇬ㅧ뺈� �붨ぷ먚쇬� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� �쀗쇬뺈뫷�.',

		cell :
		{
			menu			: '�왰먚ㅧ쇬쇬졫� 瘻��',
			insertBefore	: '�붨뺈§ㅧ� 瘻�� �쑿ㅧ졫�',
			insertAfter		: '�붨뺈§ㅧ� 瘻�� �먚쀗ⓚ�',
			deleteCell		: '�왰쀗쇬㎓� 瘻�먚쇬�',
			merge			: '�왰쇬뽛뺈� 瘻�먚쇬�',
			mergeRight		: '�왰뽛� �쇬왰쇬졫�',
			mergeDown		: '�왰뽛� �쑿왰샳�',
			splitHorizontal	: '壘�쇬┹뺈� 瘻�� �먚뺈ㅧ㎓쇬�',
			splitVertical	: '壘�쇬┹뺈� 瘻�� �먚졫쎰쇬�',
			title			: '瘻�쎰뺈졫뺈� �붨ぷ�',
			cellType		: '遼�뺈� �붨ぷ�',
			rowSpan			: '�왰ぷ쇬쀗� �붨⒦뺈ⓚ뺈�',
			colSpan			: '�왰ぷ쇬쀗� �붨ぷ먚쇬�',
			wordWrap		: '�왰졫쇬↙� �믕쑿쇬⒦� 漏�뺈ⓚ뺈�',
			hAlign			: '�쇬쇬⒦뺈� �먚뺈ㅧ㎓�',
			vAlign			: '�쇬쇬⒦뺈� �먚졫쎰�',
			alignBaseline	: '漏�뺈ⓚ� �뫷§쇬�',
			bgColor			: '屢�뫷� 淚樓鬧',
			borderColor		: '屢�뫷� �왰§믕ⓚ�',
			data			: '�왰쇬볊�',
			header			: '�쎰뺈ぷⓚ�',
			yes				: '�쎰�',
			no				: '�쑿�',
			invalidWidth	: '漏�볊� 淚�뺈쀗� �붨ぷ� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
			invalidHeight	: '漏�볊� �믕뺈뫷� �붨ぷ� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
			invalidRowSpan	: '漏�볊� �왰ぷ쇬쀗� �붨⒦뺈ⓚ뺈� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� 漏�쑿�.',
			invalidColSpan	: '漏�볊� �왰ぷ쇬쀗� �붨↙왰뺈볊뺈� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� 漏�쑿�.',
			chooseColor		: '�뫷쀗�'
		},

		row :
		{
			menu			: '漏�뺈ⓚ�',
			insertBefore	: '�붨뺈§ㅧ� 漏�뺈ⓚ� �쑿ㅧ졫�',
			insertAfter		: '�붨뺈§ㅧ� 漏�뺈ⓚ� �먚쀗ⓚ�',
			deleteRow		: '�왰쀗쇬㎓� 漏�뺈ⓚ뺈�'
		},

		column :
		{
			menu			: '鬧�왰뺈볊�',
			insertBefore	: '�붨뺈§ㅧ� 鬧�왰뺈볊� �쑿ㅧ졫�',
			insertAfter		: '�붨뺈§ㅧ� 鬧�왰뺈볊� �먚쀗ⓚ�',
			deleteColumn	: '�왰쀗쇬㎓� 鬧�왰뺈볊뺈�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�왰먚ㅧ쇬쇬졫� �쎰ㅧぷ뺈�',
		text		: '�샳㎓§� (鬧淚��)',
		type		: '遼�뺈�',
		typeBtn		: '�쎰ㅧぷ뺈�',
		typeSbm		: '漏�쑿쇬쀗�',
		typeRst		: '�먚쇬ㅧ뺈�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '�왰먚ㅧ쇬쇬졫� 瘻�쇬뫷� 遼�쇬왰뺈�',
		radioTitle	: '�왰먚ㅧ쇬쇬졫� �쑿쀗┹� �먚ㅧ⒦ⓚ뺈쇬뺈�',
		value		: '鬧淚��',
		selected	: '�왰§뺈왰�'
	},

	// Form Dialog.
	form :
	{
		title		: '�왰먚ㅧ쇬졫� �샳뺈ㅧ�',
		menu		: '�왰먚ㅧ쇬졫� �샳뺈ㅧ�',
		action		: '漏�쑿� �먚�',
		method		: '遼�뺈� 漏�쑿쇬쀗�',
		encoding	: '樓�쇬볊뺈�'
	},

	// Select Field Dialog.
	select :
	{
		title		: '�왰먚ㅧ쇬쇬졫� 漏�볊� �뫷쀗쇬ⓚ�',
		selectInfo	: '�왰쇬볊�',
		opAvail		: '�먚ㅧ⒦ⓚ뺈쇬뺈� �뽛왰쇬졫뺈�',
		value		: '鬧淚��',
		size		: '�믕뺈볊�',
		lines		: '漏�뺈ⓚ뺈�',
		chkMulti	: '�먚쇬ㅧ⒦뺈� �뫷쀗쇬ⓚ뺈� �왰ⓚ뺈뫷뺈�',
		opText		: '�샳㎓§�',
		opValue		: '鬧淚��',
		btnAdd		: '�붨뺈§ㅧ�',
		btnModify	: '漏�쇬졫뺈�',
		btnUp		: '�쑿왰↙쑿�',
		btnDown		: '�쑿왰샳�',
		btnSetValue : '樓�뫷쇬↙� �쎰뫷ⓚ쇬ⓚ� �왰쀗볊�',
		btnDelete	: '�왰쀗쇬㎓�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '�왰먚ㅧ쇬쇬졫� �먚쇬뽛뺈� �샳㎓§�',
		cols		: '鬧�왰뺈볊뺈�',
		rows		: '漏�뺈ⓚ뺈�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�왰먚ㅧ쇬쇬졫� 漏�볊� �샳㎓§�',
		name		: '漏��',
		value		: '鬧淚��',
		charWidth	: '淚�뺈쀗� �쑿ㅧ� 瘻�뺈뺈쇬�',
		maxChars	: '�왰㎓§쇬왰뺈� 瘻�뺈뺈쇬�',
		type		: '遼�뺈�',
		typeText	: '�샳㎓§�',
		typePass	: '遼�쇬§왰�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�왰먚ㅧ쇬졫� 漏�볊� �쀗뫷뺈�',
		name	: '漏��',
		value	: '鬧淚��'
	},

	// Image Dialog.
	image :
	{
		title		: '�왰먚ㅧ쇬쇬졫� �붨ぷ왰뺈졫�',
		titleButton	: '�왰먚ㅧ쇬졫� �쎰ㅧぷ뺈� 瘻�왰뺈졫�',
		menu		: '瘻�쎰뺈졫뺈� �붨ぷ왰뺈졫�',
		infoTab		: '�왰쇬볊� 鬧�� �붨ぷ왰뺈졫�',
		btnUpload	: '漏�쑿쇬쀗� �쑿⒦ⓚ�',
		upload		: '�붨↙쑿먚�',
		alt			: '�샳㎓§� �쀗쑿뺈ㅧ�',
		lockRatio	: '�졫↙쇬쑿� �붨쇬쀗�',
		resetSize	: '�먚쇬ㅧ뺈� �붨믕뺈볊�',
		border		: '�왰§믕ⓚ�',
		hSpace		: '�왰ⓚ뺈뺈� �먚뺈ㅧ㎓�',
		vSpace		: '�왰ⓚ뺈뺈� �먚졫쎰�',
		alertUrl	: '�쇬� �쑿붨㎓쑿쇬� �먚� �쎰ぷ뺈뫷� �붨ぷ왰뺈졫�',
		linkTab		: '樓�쇬⒦뺈�',
		button2Img	: '�붨먚� �쑿붨ㅧ뺈� �먚� 瘻�왰뺈졫� �붨쎰ㅧぷ뺈� �쑿ぷ왰뺈졫� 壘漏�뺈샳�?',
		img2Button	: '�붨먚� �쑿붨ㅧ뺈� �먚� �붨ぷ왰뺈졫� �쑿쎰ㅧぷ뺈� 瘻�왰뺈졫�?',
		urlMissing	: '�쎰ぷ뺈뫷� �붨ぷ왰뺈졫� �쀗§ⓚ�.',
		validateBorder	: '漏�볊� �붨왰§믕ⓚ� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� 漏�쑿�.',
		validateHSpace	: '漏�볊� �붨왰ⓚ뺈뺈� �붨먚뺈ㅧ㎓� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� 漏�쑿�.',
		validateVSpace	: '漏�볊� �붨왰ⓚ뺈뺈� �붨먚졫쎰� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ� 漏�쑿�.'
	},

	// Flash Dialog
	flash :
	{
		properties		: '�왰먚ㅧ쇬쇬졫� 壘�쑿먚�',
		propertiesTab	: '�왰먚ㅧ쇬쇬졫쇬�',
		title			: '�왰먚ㅧ쇬졫� 壘�쑿먚�',
		chkPlay			: '�졫쇬믕뺈� �먚뺈샳뺈왰샳�',
		chkLoop			: '�쑿뺈쑿먚�',
		chkMenu			: '�먚ㅧ⒦� 瘻壘淚�쇬� 壘�쑿먚�',
		chkFull			: '�먚ㅧ⒦� �쀗쑿뺈� �왰쑿�',
 		scale			: '�믕뺈볊�',
		scaleAll		: '�붨┹� �붨쎰�',
		scaleNoBorder	: '�쑿쑿� �믕뫷뺈쑿뺈�',
		scaleFit		: '�붨ぷ먚왰� �왰뺈⒦쑿왰�',
		access			: '�믕쇬⒦� 遼樓淚�쇬ㅧ�',
		accessAlways	: '瘻�왰쇬�',
		accessSameDomain: '�볊뺈왰쇬쇬� �뽛붨�',
		accessNever		: '�먚� 壘鬧��',
		alignAbsBottom	: '�쑿ぷ쀗ぷ쇬� �붨먚뫷§뺈쑿뺈샳쇬�',
		alignAbsMiddle	: '�왰ⓚ쎰뺈� �먚뫷§뺈쑿뺈샳�',
		alignBaseline	: '�쑿㎓� �붨ぷ쀗ぷ쇬�',
		alignTextTop	: '�쑿ⓚ먚� �붨샳㎓§�',
		quality			: '�먚쇬쎰뺈�',
		qualityBest		: '�왰↙뺈쑿�',
		qualityHigh		: '�믕뫷뺈붨�',
		qualityAutoHigh	: '�믕뫷뺈붨� �먚뺈샳뺈왰샳쇬�',
		qualityMedium	: '�왰왰뺈┹↙�',
		qualityAutoLow	: '�졫왰뺈쎰� �먚뺈샳뺈왰샳쇬�',
		qualityLow		: '�졫왰뺈쎰�',
		windowModeWindow: '�쀗쑿뺈�',
		windowModeOpaque: '�먚샳뺈�',
		windowModeTransparent : '漏樓�뺈�',
		windowMode		: '�왰┹� �쀗쑿뺈�',
		flashvars		: '�왰⒦ぷ졫쇬� �쑿ㅧ쑿먚�',
		bgcolor			: '屢�뫷� 淚樓鬧',
		hSpace			: '�왰ⓚ뺈뺈� �먚뺈ㅧ㎓�',
		vSpace			: '�왰ⓚ뺈뺈� �먚졫쎰�',
		validateSrc		: '�쇬� �쑿붨㎓쑿쇬� �먚� �쎰ぷ뺈뫷� 遼淚�샳뺈� �붨ㅧ쑿먚� (URL)',
		validateHSpace	: '�붨왰ⓚ뺈뺈� �붨먚뺈ㅧ㎓� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.',
		validateVSpace	: '�붨왰ⓚ뺈뺈� �붨먚졫쎰� �쀗쇬쇬� �쑿붨쇬뺈� �왰§ㅧ�.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�뫷볊쇬㎓� �먚쇬뺈�',
		title			: '�뫷볊쇬㎓� �먚쇬뺈�',
		notAvailable	: '�쑿� �졫왰┹� 漏�쇬ⓚ뺈� �뽛왰쇬�.',
		errorLoading	: '漏�믕쇬먚� �뫷붨↙쑿먚� �붨⒦쇬ⓚ뺈�: %s.',
		notInDic		: '�쑿� �졫왰┹� �뫷왰쇬쑿뺈�',
		changeTo		: '漏�쇬졫뺈� ��',
		btnIgnore		: '�붨ぷ↙쑿왰뺈�',
		btnIgnoreAll	: '�붨ぷ↙쑿왰뺈� �왰붨쎰�',
		btnReplace		: '�붨쀗쑿ㅧ�',
		btnReplaceAll	: '�붨쀗쑿ㅧ� �붨쎰�',
		btnUndo			: '�붨쀗뽛ⓚ�',
		noSuggestions	: '- �먚쇬� �붨┹↙뺈� -',
		progress		: '�뫷뺈볊� �붨먚쇬뺈� �뫷ぷ붨쑿쇬� �뫷볊쇬㎓�....',
		noMispell		: '�뫷볊쇬㎓뺈� �먚쇬뺈� �붨§ぷ쇬쇬왰�: �쑿� �졫왰┹먚� 漏�믕쇬먚뺈� �쎰ぷ쇬�',
		noChanges		: '�뫷볊쇬㎓뺈� �먚쇬뺈� �붨§ぷ쇬쇬왰�: �쑿� 漏�뺈졫ぷ� �먚� �왰쇬쑿�',
		oneChange		: '�뫷볊쇬㎓뺈� �먚쇬뺈� �붨§ぷ쇬쇬왰�: 漏�뺈졫ぷ� �왰쇬쑿� �먚쀗�',
		manyChanges		: '�뫷볊쇬㎓뺈� �먚쇬뺈� �붨§ぷ쇬쇬왰�: %1 �왰쇬쑿쇬� 漏�뺈졫�',
		ieSpellDownload	: '�뫷뺈볊� �붨먚쇬뺈� �쑿� �왰뺈ぷ㎓�, �붨먚� �쑿붨뺈ⓚ쇬볊�?'
	},

	smiley :
	{
		toolbar	: '遼�왰쇬쇬쑿�',
		title	: '�붨뺈§ㅧ� 遼�왰쇬쇬쑿�',
		options : '�먚ㅧ⒦ⓚ뺈쇬뺈� 遼�왰쇬쇬쑿쇬�'
	},

	elementsPath :
	{
		eleLabel : '鬧婁 �붨먚쑿왰졫샳쇬�',
		eleTitle : '%1 �먚쑿왰졫�'
	},

	numberedlist	: '淚漏�쇬왰� �왰왰뺈§ㅧⓚ�',
	bulletedlist	: '淚漏�쇬왰� �졫㎓뺈볊뺈�',
	indent			: '�붨믕볊쑿� �붨뽛쀗�',
	outdent			: '�붨㎓샳졫� �붨뽛쀗�',

	justify :
	{
		left	: '�쇬쇬⒦뺈� �쑿⒦왰먚�',
		center	: '�왰ⓚ쎰뺈�',
		right	: '�쇬쇬⒦뺈� �쑿쇬왰쇬�',
		block	: '�쇬쇬⒦뺈� �쑿⒦뺈쑿쇬쇬�'
	},

	blockquote : '�뫷쑿뺈� 屢�쇬샳뺈�',

	clipboard :
	{
		title		: '�붨볊뫷㎓�',
		cutError	: '�붨믕볊ⓚ뺈� �붨먚뫷샳쀗� �뫷볊ㅧ볊ㅧ� 漏�쑿� �쑿� �왰먚ㅧ⒦ⓚ뺈� �쑿↙뺈ⓚ� �쑿뫷┹� 壘鬧�뺈쑿뺈� �믕뽛쇬ⓚ� �먚뺈샳뺈왰샳쇬뺈�. �쇬� �쑿붨⒦ぷ왰� �뫷왰㎓쑿볊� �쑿⒦� �쎰� (Ctrl/Cmd+X).',
		copyError	: '�붨믕볊ⓚ뺈� �붨먚뫷샳쀗� �뫷볊ㅧ볊ㅧ� 漏�쑿� �쑿� �왰먚ㅧ⒦ⓚ뺈� �쑿↙뺈ⓚ� �쑿뫷┹� 壘鬧�뺈쑿뺈� �붨↙ぷ㎓� �먚뺈샳뺈왰샳쇬뺈�. �쇬� �쑿붨⒦ぷ왰� �뫷왰㎓쑿볊� �쑿⒦� �쎰� (Ctrl/Cmd+C).',
		pasteMsg	: '�졫� �쑿붨볊뫷쇬� �뫷ぷ뺈� �붨㎓뺈ㅧ§� �뫷먚왰┹↙뺈� (<b>Ctrl/Cmd+V</b>) �뺈쑿쑿쀗뺈� 鬧�� <b>�먚쇬⒦뺈�</b>.',
		securityMsg	: '鬧樓�� �붨믕볊ⓚ뺈� �먚뫷샳쀗� �뫷볊ㅧ볊ㅧ�, �쑿� �졫쇬ぷ� �쑿믕⒦� �먚� �쑿뺈� �붨믕뽛쇬ⓚ쇬� (Clipboard) �뫷┹뺈ⓚ� �쇬⒦쇬ⓚ�. �졫� �쑿붨볊뫷쇬� 漏�뺈� �뫷쀗쑿뺈� �뽛�.',
		pasteArea	: '�먚쇬뽛뺈� �붨볊뫷㎓�'
	},

	pastefromword :
	{
		confirmCleanup	: '�졫ⓚ먚� �붨샳㎓§� 漏�뫷쎰뺈뺈졫ぷ� �쑿붨볊뫷쇬� �왰㎓뺈ⓚ� �뫷㎓뺈뫷� �뺈뺈ⓚ�. �붨먚� �뫷ⓚ┹뺈졫� �쑿졫㎓뺈� �먚뺈ぷ� �샳ⓚ� �붨붨볊뫷㎓�?',
		toolbar			: '�붨볊뫷㎓� ��-Word',
		title			: '�붨볊뫷㎓� ��-Word',
		error			: '�쑿� �졫쇬ぷ� �붨쇬� �쑿졫㎓뺈� �먚� �붨왰쇬볊� �뫷⒦� 瘻樓�쑿� 壘�졫쇬왰쇬�.'
	},

	pasteText :
	{
		button	: '�붨볊뫷㎓� �쎰샳㎓§� 壘漏�뺈�',
		title	: '�붨볊뫷㎓� �쎰샳㎓§� 壘漏�뺈�'
	},

	templates :
	{
		button			: '瘻�뫷졫쇬뺈�',
		title			: '瘻�뫷쇬뺈� 瘻�뺈쎰�',
		options : '�먚ㅧ⒦ⓚ뺈쇬뺈� �붨ぷ뫷졫쇬뺈�',
		insertOption	: '�붨쀗쑿ㅧ� 瘻�뺈쎰� �왰왰⒦�',
		selectPromptMsg	: '�쇬� �쑿뫷쀗뺈� 瘻�뫷졫쇬� �쑿ㅧぷ쇬쀗� �뫷↙뺈ⓚ�.<br />�붨ぷ뺈쎰� �붨왰㎓뺈ⓚ� �쇬왰쀗�:',
		emptyListMsg	: '(�쑿� �붨뺈믕볊ⓚ� 瘻�뫷졫쇬뺈�)'
	},

	showBlocks : '�붨┹믕� �뫷쑿뺈㎓쇬�',

	stylesCombo :
	{
		label		: '遼�믕졫뺈�',
		panelTitle	: '遼�믕졫뺈졫뺈� 壘�뺈ⓚ왰�',
		panelTitle1	: '遼�믕졫뺈졫뺈� �뫷쑿뺈�',
		panelTitle2	: '遼�믕졫뺈졫뺈� 淚屢龍',
		panelTitle3	: '遼�믕졫뺈졫뺈� �먚뺈뫷쇬쇬㎓�'
	},

	format :
	{
		label		: '鬧�쇬┹뺈�',
		panelTitle	: '鬧�쇬┹뺈�',

		tag_p		: '�졫뺈ⓚ왰쑿�',
		tag_pre		: '樓�뺈�',
		tag_address	: '�쎰ぷ뺈뫷�',
		tag_h1		: '�쎰뺈ぷⓚ�',
		tag_h2		: '�쎰뺈ぷⓚ� 2',
		tag_h3		: '�쎰뺈ぷⓚ� 3',
		tag_h4		: '�쎰뺈ぷⓚ� 4',
		tag_h5		: '�쎰뺈ぷⓚ� 5',
		tag_h6		: '�쎰뺈ぷⓚ� 6',
		tag_div		: '�졫뺈ⓚ왰쑿� (DIV)'
	},

	div :
	{
		title				: '�쇬┹쇬ⓚ� �왰쇬쎰� (Div)',
		toolbar				: '�쇬┹쇬ⓚ� �왰쇬쎰� (Div)',
		cssClassInputLabel	: '�왰쀗쑿㎓� 鬧�쇬┹뺈�',
		styleSelectLabel	: '遼�믕졫뺈�',
		IdInputLabel		: '�왰뽛붨� (ID)',
		languageCodeInputLabel	: '樓�뺈� 漏壘��',
		inlineStyleInputLabel	: '遼�믕졫뺈� 壘�졫쇬왰�',
		advisoryTitleInputLabel	: '�쎰뺈ぷⓚ� �왰뺈┹↙�',
		langDirLabel		: '�쎰쇬뺈뺈� 漏壘��',
		langDirLTRLabel		: '漏�왰먚� �쑿쇬왰쇬� (LTR)',
		langDirRTLLabel		: '�쇬왰쇬� �쑿⒦왰먚� (RTL)',
		edit				: '鬧淚�쇬쎰� �왰쇬쎰� (Div)',
		remove				: '�붨§ⓚ� �왰쇬쎰� (Div)'
  	},

	iframe :
	{
		title		: '�왰먚ㅧ쇬쇬졫� �쀗쑿뺈� 壘�졫쇬왰� (iframe)',
		toolbar		: '�쀗쑿뺈� 壘�졫쇬왰� (iframe)',
		noUrl		: '�쇬� �쑿붨쎰졫쇬� �쎰ぷ뺈뫷� �쑿쀗쑿뺈�.',
		scrolling	: '�먚ㅧ⒦� 壘遼�� �믕쑿쇬쑿�',
		border		: '�붨ⓚ먚� �왰§믕ⓚ� �쑿쀗쑿뺈�'
	},

	font :
	{
		label		: '�믕뺈ㅧ�',
		voiceLabel	: '�믕뺈ㅧ�',
		panelTitle	: '�믕뺈ㅧ�'
	},

	fontSize :
	{
		label		: '�믕뺈볊�',
		voiceLabel	: '�믕뺈볊�',
		panelTitle	: '�믕뺈볊�'
	},

	colorButton :
	{
		textColorTitle	: '屢�뫷� �샳㎓§�',
		bgColorTitle	: '屢�뫷� 淚樓鬧',
		panelTitle		: '屢�뫷↙쇬�',
		auto			: '�먚뺈샳뺈왰샳�',
		more			: '屢�뫷↙쇬� �졫뺈§ㅧ쇬�...'
	},

	colors :
	{
		'000' : '漏�쀗뺈�',
		'800000' : '遼�믕뺈� �쎰붨�',
		'8B4513' : '�쀗뺈� �뫷붨쇬�',
		'2F4F4F' : '�먚ㅧ뺈� 屢壘�쀗�',
		'008080' : '�쎰쀗뺈�-�쇬ⓚ뺈�',
		'000080' : '�쎰쀗뺈�-遼�믕뺈�',
		'4B0082' : '�먚쇬졫볊쇬믕�',
		'696969' : '�먚ㅧ뺈� �왰↙뺈왰↙�',
		'B22222' : '�먚볊뺈�-�쀗뺈�',
		'A52A2A' : '�쀗뺈�',
		'DAA520' : '�쎰ぷ뺈� �뽛붨�',
		'006400' : '�쇬ⓚ뺈� �쎰붨�',
		'40E0D0' : '�샳뺈ⓚ㎓쇬�',
		'0000CD' : '�쎰쀗뺈� �뫷쇬졫뺈졫�',
		'800080' : '遼�믕뺈�',
		'808080' : '�먚ㅧ뺈�',
		'F00' : '�먚볊뺈�',
		'FF8C00' : '�쎰ぷ뺈� �쎰붨�',
		'FFD700' : '�뽛붨�',
		'008000' : '�쇬ⓚ뺈�',
		'0FF' : '屢�쇬먚�',
		'00F' : '�쎰쀗뺈�',
		'EE82EE' : '遼�믕쑿믕�',
		'A9A9A9' : '�먚ㅧ뺈� �쎰붨�',
		'FFA07A' : '�쎰ぷ뺈�-�뺈뺈ⓚ뺈�',
		'FFA500' : '�쎰ぷ뺈�',
		'FFFF00' : '屢�붨뺈�',
		'00FF00' : '�쑿쇬쇬�',
		'AFEEEE' : '�샳뺈ⓚ㎓쇬� �뫷붨쇬�',
		'ADD8E6' : '�쎰쀗뺈� �뫷붨쇬�',
		'DDA0DD' : '漏�뽛쇬�',
		'D3D3D3' : '�먚ㅧ뺈� �뫷붨쇬�',
		'FFF0F5' : '�쑿뫷졫볊� �왰§왰쇬�',
		'FAEBD7' : '�쑿뫷� 鬧瘻�쇬�',
		'FFFFE0' : '屢�붨뺈� �뫷붨쇬�',
		'F0FFF0' : '�샳� �볊뫷�',
		'F0FFFF' : '瘻�쎰쑿�',
		'F0F8FF' : '�쎰쀗뺈� �샳쇬ㅧ� �왰쇬�',
		'E6E6FA' : '�쑿뫷졫볊�',
		'FFF' : '�쑿뫷�'
	},

	scayt :
	{
		title			: '�뫷볊쇬㎓� �먚쇬뺈� �뫷뽛왰� �쎰ぷ쇬뫷� (SCAYT)',
		opera_title		: '�쑿� �뽛왰쇬� �뫷볊ㅧ볊ㅧ� �먚뺈ㅧⓚ�',
		enable			: '�먚ㅧ⒦� SCAYT',
		disable			: '�뫷샳� SCAYT',
		about			: '�먚뺈볊뺈� SCAYT',
		toggle			: '漏�쇬졫뺈� SCAYT',
		options			: '�먚ㅧ⒦ⓚ뺈쇬뺈�',
		langs			: '漏壘�뺈�',
		moreSuggestions	: '�붨┹↙뺈� �졫뺈§ㅧ뺈�',
		ignore			: '�붨ぷ↙쑿왰뺈�',
		ignoreAll		: '�붨ぷ↙쑿왰뺈� �왰붨쎰�',
		addWord			: '�붨뺈§ㅧ� �왰쇬쑿�',
		emptyDic		: '�쇬� �쑿뫷쀗뺈� �왰쇬쑿뺈�.',
		noSuggestions	: '�먚쇬� �붨┹↙뺈�',
		optionsTab		: '�먚ㅧ⒦ⓚ뺈쇬뺈�',
		allCaps			: '�붨ぷ↙쑿� �왰왰쇬쑿쇬� 漏�쎰� �먚뺈ぷ쇬뺈ぷ쇬붨� �믕볊뺈쑿뺈�',
		ignoreDomainNames : '�붨ぷ↙쑿� �왰⒦왰뺈� �왰ぷ쀗�',
		mixedCase		: '�붨ぷ↙쑿� �왰왰쇬쑿쇬� 鬧�� �먚뺈ぷ쇬뺈� �믕볊뺈쑿뺈� �뺈㎓샳졫뺈� �뫷쇬쀗�',
		mixedWithDigits	: '�붨ぷ↙쑿� �왰왰쇬쑿쇬� 鬧�� �왰§ㅧⓚ쇬�',

		languagesTab	: '漏壘�뺈�',

		dictionariesTab	: '�왰쇬쑿뺈�',
		dic_field_name	: '漏�� �붨왰쇬쑿뺈�',
		dic_create		: '�쇬┹쇬ⓚ�',
		dic_restore		: '漏�쀗뽛뺈�',
		dic_delete		: '�왰쀗쇬㎓�',
		dic_rename		: '漏�쇬졫뺈� 漏��',
		dic_info		: '�뫷붨ぷ쀗쑿� �왰쇬쑿뺈� �붨왰⒦ぷ왰� �왰먚뺈쀗§� �뫷↙뺈믕쇬�, �먚� 鬧�뺈믕쇬뺈� �왰뺈믕뫷쑿뺈� �뫷왰㎓뺈�. �쎰먚⒦� �붨왰쇬쑿뺈� �왰믕쇬� �쑿믕뺈볊� �뫷� �붨뺈� �먚쇬졫� �쇬쎰뺈� �쑿붨ぷ먚쎰§� �뫷↙뺈믕쇬�, �붨왰쇬쑿뺈� 屢淚�쇬� �쑿붨ぷ먚쎰§� �뫷⒦ⓚぷ졫�. �쑿⒦� �쎰� 鬧�쑿쇬� �쑿ぷ� 漏�� �쑿왰쇬쑿뺈�. �먚� �쎰뫷� �쇬� �쑿� �왰쇬쑿뺈� �왰먚뺈쀗§�, �쇬� �쑿붨쎰졫쇬� �먚� 漏�왰� �뺈쑿쑿쀗뺈� 鬧�� �쎰ㅧぷ뺈� �붨⒦쀗뽛뺈�.',

		aboutTab		: '�먚뺈볊뺈�'
	},

	about :
	{
		title		: '�먚뺈볊뺈� CKEditor',
		dlgTitle	: '�먚뺈볊뺈� CKEditor',
		help	: '�붨쇬쎰졫§� ��$1 �쑿↙뽛ⓚ�.',
		userGuide : '�왰볊ⓚ쇬� �붨왰⒦ぷ왰� 漏�� CKEditor',
		moreInfo	: '�쑿왰쇬볊� �졫뺈§� �뫷㎓ⓚ� �뫷먚ぷⓚ졫�:',
		copy		: 'Copyright &copy; $1. �쎰� �붨뽛쎰뺈쇬뺈� 漏�왰뺈ⓚ뺈�.'
	},

	maximize : '�붨믕볊쑿� �쑿왰㎓§쇬왰뺈�',
	minimize : '�붨㎓샳졫� �쑿왰쇬졫쇬왰뺈�',

	fakeobjects :
	{
		anchor		: '鬧�뺈믕�',
		flash		: '遼淚�샳뺈� 壘�쑿먚�',
		iframe		: '�쀗쑿뺈� 壘�졫쇬왰� (iframe)',
		hiddenfield	: '漏�볊� �쀗뫷뺈�',
		unknown		: '�먚뺈뫷쇬쇬㎓� �쑿� �쇬볊뺈�'
	},

	resize : '�쇬� �쑿믕ⓚ뺈� �뫷쎰볊� �쑿⒦졫뺈� �먚� �붨믕뺈볊�',

	colordialog :
	{
		title		: '�뫷쀗쇬ⓚ� 屢�뫷�',
		options	:	'�먚ㅧ⒦ⓚ뺈쇬뺈� 屢�뫷�',
		highlight	: '遼�쇬왰뺈�',
		selected	: '�뫷쀗쇬ⓚ�',
		clear		: '�졫쇬㎓뺈�'
	},

	toolbarCollapse	: '�왰뽛↙뺈� 遼淚�믕� �쎰쑿쇬�',
	toolbarExpand	: '�붨ⓚ쀗뫷� 遼淚�믕� �쎰쑿쇬�',

	toolbarGroups :
	{
		document : '�왰§왰�',
		clipboard : '�쑿뺈� �붨믕뽛쇬ⓚ쇬� (Clipboard)/屢鬧�� �먚쀗ⓚ뺈�',
		editing : '鬧淚�쇬쎰�',
		forms : '�샳ㅧ§쇬�',
		basicstyles : '鬧�쇬┹뺈� �뫷§쇬§�',
		paragraph : '壘遼樓��',
		links : '樓�쇬⒦뺈ⓚ쇬�',
		insert : '�붨쎰졫§�',
		styles : '鬧�쇬┹뺈�',
		colors : '屢�뫷↙쇬�',
		tools : '�쎰쑿쇬�'
	},

	bidi :
	{
		ltr : '�쎰쇬뺈뺈� �샳㎓§� �왰⒦왰먚� �쑿쇬왰쇬� (LTR)',
		rtl : '�쎰쇬뺈뺈� �샳㎓§� �왰쇬왰쇬� �쑿⒦왰먚� (RTL)'
	},

	docprops :
	{
		label : '�왰먚ㅧ쇬쇬졫� �왰§왰�',
		title : '�왰먚ㅧ쇬쇬졫� �왰§왰�',
		design : '鬧�쇬┹뺈�',
		meta : '瘻�믕� Meta',
		chooseColor : '�뫷쀗쇬ⓚ�',
		other : '�먚쀗�...',
		docTitle :	'�쎰뺈ぷⓚ� 鬧�왰뺈�',
		charset : 	'樓�쇬볊뺈� 瘻�뺈뺈쇬�',
		charsetOther : '樓�쇬볊뺈� 瘻�뺈뺈쇬� �먚쀗�',
		charsetASCII : 'ASCII',
		charsetCE : '�왰ⓚ쎰� �먚쇬ⓚ뺈ㅧ먚�',
		charsetCT : '遼�쇬졫� �왰§뺈ⓚぷ� (Big5)',
		charsetCR : '樓�쇬ⓚ쇬쑿�',
		charsetGR : '�쇬뺈뺈졫�',
		charsetJP : '�쇬ㅧ졫�',
		charsetKR : '樓�뺈ⓚ쇬먚졫�',
		charsetTR : '�샳뺈ⓚ㎓�',
		charsetUN : '�쇬뺈졫쇬㎓뺈� (UTF-8)',
		charsetWE : '�왰↙ⓚ� �먚쇬ⓚ뺈ㅧ먚�',
		docType : '�쎰뺈ぷ� 遼�뺈� �왰§왰�',
		docTypeOther : '�쎰뺈ぷ� 遼�뺈� �왰§왰� �먚쀗�',
		xhtmlDec : '�쎰쑿뺈� �붨쎰ⓚ뽛뺈� XHTML',
		bgColor : '屢�뫷� 淚樓鬧',
		bgImage : '�쎰ぷ뺈뫷� 漏�� 瘻�왰뺈졫� 淚樓鬧',
		bgFixed : '淚樓鬧 �쑿� �졫믕쑿� (屢�왰뺈�)',
		txtColor : '屢�뫷� �샳㎓§�',
		margin : '�왰ⓚ뺈뺈쀗� 鬧�왰뺈�',
		marginTop : '鬧�쑿쇬뺈�',
		marginLeft : '漏�왰먚쑿�',
		marginRight : '�쇬왰졫�',
		marginBottom : '瘻�쀗ぷ뺈�',
		metaKeywords : '�왰쇬쑿뺈� �왰ㅧぷ� 漏�� �붨왰§왰� (�왰뺈ㅧⓚ볊뺈� �뫷ㅧ§쇬�)',
		metaDescription : '瘻�쇬먚뺈� �붨왰§왰�',
		metaAuthor : '�왰쀗뫷�/瘻',
		metaCopyright : '�뽛쎰뺈쇬뺈� �쇬뺈┹ⓚ쇬�',
		previewHtml : '<p>�뽛붨� <strong>�샳㎓§� �붨볊믕왰�</strong>. �먚�/�� �왰⒦ぷ왰�/瘻 ��<a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
