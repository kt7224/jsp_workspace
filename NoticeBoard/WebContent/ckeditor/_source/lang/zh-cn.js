/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Chinese Simplified language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['zh-cn'] =
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
	editorTitle : '野뚧뻼�쑍煐뽬풌�솳竊�%1',
	editorHelp : '�뙃 ALT+0 �렩孃쀥리�뒰',

	// ARIA descriptions.
	toolbars	: '藥ε끁�젎',
	editor		: '��鰲곩뜵��孃쀧폋渦묈솳',

	// Toolbar buttons without dialogs.
	source			: '繹먪쟻',
	newPage			: '�뼭兩�',
	save			: '岳앭춼',
	preview			: '窯꾥쭏',
	cut				: '�돦�늾',
	copy			: '鸚띶댍',
	paste			: '暎섋눼',
	print			: '�돀�뜲',
	underline		: '訝뗥닋瀛�',
	bold			: '�뒥暎�',
	italic			: '�얏뼔',
	selectAll		: '�뀲��',
	removeFormat	: '歷낂솮�졏凉�',
	strike			: '�닠�솮瀛�',
	subscript		: '訝뗦젃',
	superscript		: '訝딀젃',
	horizontalrule	: '�룖�뀯麗닷뭄瀛�',
	pagebreak		: '�룖�뀯�늽窈든Е',
	pagebreakAlt		: '�늽窈든Е',
	unlink			: '�룚易덅텈�벦�렏',
	undo			: '�뮘易�',
	redo			: '�뇥�걳',

	// Common messages and labels.
	common :
	{
		browseServer	: '役뤺쭏�쐨�뒦�솳',
		url				: '繹먩뻼餓�',
		protocol		: '�뜌溫�',
		upload			: '訝듾폖',
		uploadSubmit	: '訝듾폖�댆�쐨�뒦�솳訝�',
		image			: '�쎗穩�',
		flash			: 'Flash',
		form			: '烏ⓨ뜒',
		checkbox		: '鸚띺�됪죫',
		radio			: '�뜒�됪뙃�뮢',
		textField		: '�뜒烏뚧뻼�쑍',
		textarea		: '鸚싪죱�뻼�쑍',
		hiddenField		: '�쉺�뿈�윜',
		button			: '�뙃�뮢',
		select			: '�닓烏�/�룣�뜒',
		imageButton		: '�쎗�깗�윜',
		notSet			: '<亦→쐣溫양쉰>',
		id				: 'ID',
		name			: '�릫燁�',
		langDir			: '瑥�鼇��뼶�릲',
		langDirLtr		: '餓롥랩�댆�뤂 (LTR)',
		langDirRtl		: '餓롥뤂�댆藥� (RTL)',
		langCode		: '瑥�鼇�餓ｇ쟻',
		longDescr		: '瑥�瀯녻�닸삇�쑑��',
		cssClass		: '�졆凉뤹굳�릫燁�',
		advisoryTitle	: '�젃窯�',
		cssStyle		: '烏뚦냵�졆凉�',
		ok				: '簾�若�',
		cancel			: '�룚易�',
		close			: '�뀽�뿭',
		preview			: '窯꾥쭏',
		generalTab		: '躍멱쭊',
		advancedTab		: '遙섊벨',
		validateNumberFailed : '��誤곮풏�뀯�빊耶쀦졏凉�',
		confirmNewPage	: '壤볟뎺�뻼旅ｅ냵若방쑋岳앭춼,�삸�맔簾�溫ㅶ뼭兩뷸뻼旅ｏ폕',
		confirmCancel	: '�깿�늽岳��뵻弱싨쑋岳앭춼竊뚧삸�맔簾�溫ㅵ뀽�뿭野배캕旅놅폕',
		options			: '�됮」',
		target			: '�쎅�젃囹쀥룭',
		targetNew		: '�뼭囹쀥룭 (_blank)',
		targetTop		: '�빐窈� (_top)',
		targetSelf		: '�쑍囹쀥룭 (_self)',
		targetParent	: '�댍囹쀥룭 (_parent)',
		langDirLTR		: '餓롥랩�댆�뤂 (LTR)',
		langDirRTL		: '餓롥뤂�댆藥� (RTL)',
		styles			: '�졆凉�',
		cssClasses		: '�졆凉뤹굳',
		width			: '若썲벧',
		height			: '遙섇벧',
		align			: '野백퐧�뼶凉�',
		alignLeft		: '藥�野백퐧',
		alignRight		: '�뤂野백퐧',
		alignCenter		: '掠끺릎',
		alignTop		: '窈띄ク',
		alignMiddle		: '掠끺릎',
		alignBottom		: '佯뺡깿',
		invalidValue	: '�뿞�븞�쉪�쇈��',
		invalidHeight	: '遙섇벧恙낂』訝뷸빊耶쀦졏凉�',
		invalidWidth	: '若썲벧恙낂』訝뷸빊耶쀦졏凉�',
		invalidCssLength	: '瑥ε춻餘드퓚窈삡맏�릦凉뤹쉪CSS�빣佯��쇽펽�똿�떖�뜒鵝�(px, %, in, cm, mm, em, ex, pt �닑 pc)',
		invalidHtmlLength	: '瑥ε춻餘드퓚窈삡맏�릦凉뤹쉪HTML�빣佯��쇽펽�똿�떖�뜒鵝�(px �닑 %)',
		invalidInlineStyle	: '�냵�걫�졆凉뤷퓚窈삡맏�졏凉뤸삸餓ε늽�뤇�늽�슂�쉪訝�訝ゆ닑鸚싦릉�쒎콪�㎩릫 : 掠욄�㎩�쇄��',
		cssLengthTooltip	: '瑥ε춻餘드퓚窈삡맏�릦凉뤹쉪CSS�빣佯��쇽펽�똿�떖�뜒鵝�(px, %, in, cm, mm, em, ex, pt �닑 pc)',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, 訝띶룾�뵪</span>'
	},

	contextmenu :
	{
		options : '恙ユ뜼�룣�뜒�됮」'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�룖�뀯�돶餘딁Е�뤇',
		title		: '�됪떓�돶餘딁Е�뤇',
		options : '�돶餘딁Е�뤇�됮」'
	},

	// Link dialog.
	link :
	{
		toolbar		: '�룖�뀯/煐뽬풌擁낂벦�렏',
		other 		: '<�끀餓�>',
		menu		: '煐뽬풌擁낂벦�렏',
		title		: '擁낂벦�렏',
		info		: '擁낂벦�렏岳→겘',
		target		: '�쎅�젃',
		upload		: '訝듾폖',
		advanced	: '遙섊벨',
		type		: '擁낂벦�렏映삣엹',
		toUrl		: '�쑑��',
		toAnchor	: '窈드냵�뵚�궧�벦�렏',
		toEmail		: '�뵷耶먬궙餓�',
		targetFrame		: '<旅녷왃>',
		targetPopup		: '<凉밧눣囹쀥룭>',
		targetFrameName	: '�쎅�젃旅녷왃�릫燁�',
		targetPopupName	: '凉밧눣囹쀥룭�릫燁�',
		popupFeatures	: '凉밧눣囹쀥룭掠욄��',
		popupResizable	: '�룾煐⒵붂',
		popupStatusBar	: '�듁�곫젎',
		popupLocationBar: '�쑑���젎',
		popupToolbar	: '藥ε끁�젎',
		popupMenuBar	: '�룣�뜒�젎',
		popupFullScreen	: '�뀲掠� (IE)',
		popupScrollBars	: '譯싧뒯�씉',
		popupDependent	: '堊앶셿 (NS)',
		popupLeft		: '藥�',
		popupTop		: '�뤂',
		id				: 'ID',
		langDir			: '瑥�鼇��뼶�릲',
		langDirLTR		: '餓롥랩�댆�뤂 (LTR)',
		langDirRTL		: '餓롥뤂�댆藥� (RTL)',
		acccessKey		: '溫욥뿮�뵰',
		name			: '�릫燁�',
		langCode			: '瑥�鼇�餓ｇ쟻',
		tabIndex			: 'Tab �뵰轝▼틣',
		advisoryTitle		: '�젃窯�',
		advisoryContentType	: '�냵若밭굳�엹',
		cssClasses		: '�졆凉뤹굳�릫燁�',
		charset			: '耶쀧Е煐뽫쟻',
		styles			: '烏뚦냵�졆凉�',
		rel			: '�뀽�걫',
		selectAnchor		: '�됪떓訝�訝ら뵚�궧',
		anchorName		: '�뙃�뵚�궧�릫燁�',
		anchorId			: '�뙃�뵚�궧 ID',
		emailAddress		: '�쑑��',
		emailSubject		: '訝삯쥦',
		emailBody		: '�냵若�',
		noAnchors		: '(閭ㅶ뻼旅ｆ깹�쐣�룾�뵪�쉪�뵚�궧)',
		noUrl			: '瑥룩풏�뀯擁낂벦�렏�쑑��',
		noEmail			: '瑥룩풏�뀯�뵷耶먬궙餓뜹쑑��'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�룖�뀯/煐뽬풌�뵚�궧�벦�렏',
		menu		: '�뵚�궧�벦�렏掠욄��',
		title		: '�뵚�궧�벦�렏掠욄��',
		name		: '�뵚�궧�릫燁�',
		errorName	: '瑥룩풏�뀯�뵚�궧�릫燁�',
		remove		: '�닠�솮�뵚�궧'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '煐뽩뤇�닓烏ⓨ콪��',
		bulletedTitle		: '窈밭쎅�닓烏ⓨ콪��',
		type				: '�젃溫곁굳�엹',
		start				: '凉�冶뗥틣�뤇',
		validateStartNumber				:'�닓烏ⓨ�冶뗥틣�뤇恙낂』訝뷸빐�빊�졏凉�',
		circle				: '令뷴퓘�쐠',
		disc				: '若욃퓘�쐠',
		square				: '若욃퓘�뼶�쓼',
		none				: '�뿞�젃溫�',
		notset				: '<亦→쐣溫양쉰>',
		armenian			: '鴉좂퍨�쉪雅싩풆弱쇌틲煐뽩뤇�뼶凉�',
		georgian			: '鴉좂퍨�쉪阿붹꼇雅싩폋�뤇�뼶凉�(an, ban, gan, 嶺�)',
		lowerRoman			: '弱뤷넍營쀩ß�빊耶�(i, ii, iii, iv, v, 嶺�)',
		upperRoman			: '鸚㎩넍營쀩ß�빊耶�(I, II, III, IV, V, 嶺�)',
		lowerAlpha			: '弱뤷넍�떛�뻼耶쀦칾(a, b, c, d, e, 嶺�)',
		upperAlpha			: '鸚㎩넍�떛�뻼耶쀦칾(A, B, C, D, E, 嶺�)',
		lowerGreek			: '弱뤷넍躍뚩뀏耶쀦칾(alpha, beta, gamma, 嶺�)',
		decimal				: '�빊耶� (1, 2, 3, 嶺�)',
		decimalLeadingZero	: '0凉�鸚당쉪�빊耶쀦젃溫�(01, 02, 03, 嶺�)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '�윥�돻�뭽�쎘�뜟',
		find				: '�윥�돻',
		replace				: '�쎘�뜟',
		findWhat			: '�윥�돻:',
		replaceWith			: '�쎘�뜟:',
		notFoundMsg			: '�뙁若싨뻼�쑍亦→쐣�돻�댆',
		findOptions			: '�윥�돻�됮」',
		matchCase			: '�뙷�늽鸚㎩컦�넍',
		matchWord			: '�뀲耶쀥뙶�뀓',
		matchCyclic			: '孃ょ렞�뙶�뀓',
		replaceAll			: '�뀲�깿�쎘�뜟',
		replaceSuccessMsg	: '�뀻若뚧닇 %1 鸚꾣쎘�뜟.'
	},

	// Table Dialog
	table :
	{
		toolbar		: '烏ⓩ졏',
		title		: '烏ⓩ졏掠욄��',
		menu		: '烏ⓩ졏掠욄��',
		deleteTable	: '�닠�솮烏ⓩ졏',
		rows		: '烏뚧빊',
		columns		: '�닓�빊',
		border		: '渦방죫',
		widthPx		: '�깗榮�',
		widthPc		: '�쇍�늽驪�',
		widthUnit	: '若썲벧�뜒鵝�',
		cellSpace	: '�뿴瓮�',
		cellPad		: '渦배퇌',
		caption		: '�젃窯�',
		summary		: '�몮誤�',
		headers		: '�젃窯섇뜒�뀇�졏',
		headersNone		: '�뿞',
		headersColumn	: '寧т��닓',
		headersRow		: '寧т�烏�',
		headersBoth		: '寧т��닓�뭽寧т�烏�',
		invalidRows		: '�뙁若싩쉪�닓�빊恙낂』鸚㏛틢�쎏',
		invalidCols		: '�뙁若싩쉪烏뚧빊恙낂』鸚㏛틢�쎏',
		invalidBorder	: '渦방죫暎쀧퍏恙낂』訝뷸빊耶쀦졏凉�',
		invalidWidth	: '烏ⓩ졏若썲벧恙낂』訝뷸빊耶쀦졏凉�',
		invalidHeight	: '烏ⓩ졏遙섇벧恙낂』訝뷸빊耶쀦졏凉�',
		invalidCellSpacing	: '�뜒�뀇�졏�뿴瓮앭퓚窈삡맏�빊耶쀦졏凉�',
		invalidCellPadding	: '�뜒�뀇�졏櫻ュ뀉恙낂』訝뷸빊耶쀦졏凉�',

		cell :
		{
			menu			: '�뜒�뀇�졏',
			insertBefore	: '�쑉藥╊쑨�룖�뀯�뜒�뀇�졏',
			insertAfter		: '�쑉�뤂堊㎪룖�뀯�뜒�뀇�졏',
			deleteCell		: '�닠�솮�뜒�뀇�졏',
			merge			: '�릦亮뜹뜒�뀇�졏',
			mergeRight		: '�릲�뤂�릦亮뜹뜒�뀇�졏',
			mergeDown		: '�릲訝뗥릦亮뜹뜒�뀇�졏',
			splitHorizontal	: '麗닷뭄�땰�늽�뜒�뀇�졏',
			splitVertical	: '�엩�쎍�땰�늽�뜒�뀇�졏',
			title			: '�뜒�뀇�졏掠욄��',
			cellType		: '�뜒�뀇�졏映삣엹',
			rowSpan			: '瀛듣랬烏뚧빊',
			colSpan			: '與よ랬�닓�빊',
			wordWrap		: '�눎�뒯�뜟烏�',
			hAlign			: '麗닷뭄野백퐧',
			vAlign			: '�엩�쎍野백퐧',
			alignBaseline	: '�읃瀛�',
			bgColor			: '�깒�솺窯쒑돯',
			borderColor		: '渦방죫窯쒑돯',
			data			: '�빊�뜮',
			header			: '烏ⓨㅄ',
			yes				: '�삸',
			no				: '�맔',
			invalidWidth	: '�뜒�뀇�졏若썲벧恙낂』訝뷸빊耶쀦졏凉�',
			invalidHeight	: '�뜒�뀇�졏遙섇벧恙낂』訝뷸빊耶쀦졏凉�',
			invalidRowSpan	: '烏뚩랬佯�恙낂』訝뷸빐�빊�졏凉�',
			invalidColSpan	: '�닓瓮ⓨ벧恙낂』訝뷸빐�빊�졏凉�',
			chooseColor		: '�됪떓'
		},

		row :
		{
			menu			: '烏�',
			insertBefore	: '�쑉訝딀뼶�룖�뀯烏�',
			insertAfter		: '�쑉訝뗦뼶�룖�뀯烏�',
			deleteRow		: '�닠�솮烏�'
		},

		column :
		{
			menu			: '�닓',
			insertBefore	: '�쑉藥╊쑨�룖�뀯�닓',
			insertAfter		: '�쑉�뤂堊㎪룖�뀯�닓',
			deleteColumn	: '�닠�솮�닓'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '�뙃�뮢掠욄��',
		text		: '�젃嶺�(��)',
		type		: '映삣엹',
		typeBtn		: '�뙃�뮢',
		typeSbm		: '�룓雅�',
		typeRst		: '�뇥溫�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '鸚띺�됪죫掠욄��',
		radioTitle	: '�뜒�됪뙃�뮢掠욄��',
		value		: '�됧츣��',
		selected	: '藥꿨떮��'
	},

	// Form Dialog.
	form :
	{
		title		: '烏ⓨ뜒掠욄��',
		menu		: '烏ⓨ뜒掠욄��',
		action		: '�뒯鵝�',
		method		: '�뼶力�',
		encoding	: '烏ⓨ뜒煐뽫쟻'
	},

	// Select Field Dialog.
	select :
	{
		title		: '�룣�뜒/�닓烏ⓨ콪��',
		selectInfo	: '�됪떓岳→겘',
		opAvail		: '�룾�됮」',
		value		: '��',
		size		: '遙섇벧',
		lines		: '烏�',
		chkMulti	: '�뀅溫멨쩀��',
		opText		: '�됮」�뻼�쑍',
		opValue		: '�됮」��',
		btnAdd		: '曆삣뒥',
		btnModify	: '岳��뵻',
		btnUp		: '訝딁㎉',
		btnDown		: '訝뗧㎉',
		btnSetValue : '溫얌맏�닜冶뗩�됧츣',
		btnDelete	: '�닠�솮'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '鸚싪죱�뻼�쑍掠욄��',
		cols		: '耶쀧Е若썲벧',
		rows		: '烏뚧빊'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '�뜒烏뚧뻼�쑍掠욄��',
		name		: '�릫燁�',
		value		: '�닜冶뗥��',
		charWidth	: '耶쀧Е若썲벧',
		maxChars	: '��鸚싧춻寧��빊',
		type		: '映삣엹',
		typeText	: '�뻼�쑍',
		typePass	: '野녺쟻'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�쉺�뿈�윜掠욄��',
		name	: '�릫燁�',
		value	: '�닜冶뗥��'
	},

	// Image Dialog.
	image :
	{
		title		: '�쎗穩▼콪��',
		titleButton	: '�쎗�깗�윜掠욄��',
		menu		: '�쎗穩▼콪��',
		infoTab		: '�쎗穩�',
		btnUpload	: '訝듾폖�댆�쐨�뒦�솳訝�',
		upload		: '訝듾폖',
		alt			: '�쎘�뜟�뻼�쑍',
		lockRatio	: '�봺若싨캈堊�',
		resetSize	: '�렅冶뗥갰野�',
		border		: '渦방죫鸚㎩컦',
		hSpace		: '麗닷뭄�뿴瓮�',
		vSpace		: '�엩�쎍�뿴瓮�',
		alertUrl	: '瑥룩풏�뀯�쎗穩▼쑑��',
		linkTab		: '�벦�렏',
		button2Img	: '簾�若싪쫨�뒍壤볟뎺�뙃�뮢�뵻�룜訝뷴쎗�깗�릹?',
		img2Button	: '簾�若싪쫨�뒍壤볟뎺�쎗�깗�뵻�룜訝뷸뙃�뮢�릹?',
		urlMissing	: '煐뷴컩�쎗�깗繹먩뻼餓뜹쑑��',
		validateBorder	: '渦방죫鸚㎩컦恙낂』訝뷸빐�빊�졏凉�',
		validateHSpace	: '麗닷뭄�뿴瓮앭퓚窈삡맏�빐�빊�졏凉�',
		validateVSpace	: '�엩�쎍�뿴瓮앭퓚窈삡맏�빐�빊�졏凉�'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash 掠욄��',
		propertiesTab	: '掠욄��',
		title			: '�젃窯�',
		chkPlay			: '�눎�뒯�뮡�붂',
		chkLoop			: '孃ょ렞',
		chkMenu			: '�맦�뵪 Flash �룣�뜒',
		chkFull			: '�맦�뵪�뀲掠�',
 		scale			: '煐⒵붂',
		scaleAll		: '�뀲�깿�샑鹽�',
		scaleNoBorder	: '�뿞渦방죫',
		scaleFit		: '訝ζ졏�뙶�뀓',
		access			: '�뀅溫멱꽊�쑍溫욥뿮',
		accessAlways	: '�삥삸',
		accessSameDomain: '�릪�윜',
		accessNever		: '餓롣툖',
		alignAbsBottom	: '瀯앭�밧틫�깿',
		alignAbsMiddle	: '瀯앭�밧콉訝�',
		alignBaseline	: '�읃瀛�',
		alignTextTop	: '�뻼�쑍訝딀뼶',
		quality			: '兀③뇧',
		qualityBest		: '��也�',
		qualityHigh		: '遙�',
		qualityAutoHigh	: '遙�(�눎�뒯)',
		qualityMedium	: '訝�(�눎�뒯)',
		qualityAutoLow	: '鵝�(�눎�뒯)',
		qualityLow		: '鵝�',
		windowModeWindow: '囹쀤퐪',
		windowModeOpaque: '訝띺�뤸삇',
		windowModeTransparent : '�뤸삇',
		windowMode		: '囹쀤퐪與▼폀',
		flashvars		: 'Flash �룜�뇧',
		bgcolor			: '�깒�솺窯쒑돯',
		hSpace			: '麗닷뭄�뿴瓮�',
		vSpace			: '�엩�쎍�뿴瓮�',
		validateSrc		: '瑥룩풏�뀯繹먩뻼餓뜹쑑��',
		validateHSpace	: '麗닷뭄�뿴瓮앭퓚窈삡맏�빊耶쀦졏凉�',
		validateVSpace	: '�엩�쎍�뿴瓮앭퓚窈삡맏�빊耶쀦졏凉�'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '�떬�넍汝��윥',
		title			: '�떬�넍汝��윥',
		notAvailable	: '�뒻閭�, �쐨�뒦�쎅�뎺�쉨訝띶룾�뵪',
		errorLoading	: '�뒥饔썲틪瑥ζ쐨�뒦訝삥쑛�뿶�눣�뵗: %s.',
		notInDic		: '亦→쐣�쑉耶쀥끂�뇤',
		changeTo		: '�쎍�뵻訝�',
		btnIgnore		: '恙썹븼',
		btnIgnoreAll	: '�뀲�깿恙썹븼',
		btnReplace		: '�쎘�뜟',
		btnReplaceAll	: '�뀲�깿�쎘�뜟',
		btnUndo			: '�뮘易�',
		noSuggestions	: '- 亦→쐣兩븃�� -',
		progress		: '閭ｅ쑉瓦쏂죱�떬�넍汝��윥...',
		noMispell		: '�떬�넍汝��윥若뚧닇: 亦→쐣�룕�렟�떬�넍�뵗瑥�',
		noChanges		: '�떬�넍汝��윥若뚧닇: 亦→쐣�쎍�뵻餓삡퐬�뜒瑥�',
		oneChange		: '�떬�넍汝��윥若뚧닇: �쎍�뵻雅녵�訝ゅ뜒瑥�',
		manyChanges		: '�떬�넍汝��윥若뚧닇: �쎍�뵻雅� %1 訝ゅ뜒瑥�',
		ieSpellDownload	: '�떬�넍汝��윥�룖餓띈퓲亦▼츎獒�, �궓�삸�맔�꺍�렟�쑉弱긴툔饔�?'
	},

	smiley :
	{
		toolbar	: '烏ⓩ깄寧�',
		title	: '�룖�뀯烏ⓩ깄�쎗�젃',
		options : '烏ⓩ깄�쎗�젃�됮」'
	},

	elementsPath :
	{
		eleLabel : '�뀇榮좄러孃�',
		eleTitle : '%1 �뀇榮�'
	},

	numberedlist	: '煐뽩뤇�닓烏�',
	bulletedlist	: '窈밭쎅�닓烏�',
	indent			: '罌욃뒥煐⑵퓵�뇧',
	outdent			: '�뇧弱묊섄瓦쏃뇧',

	justify :
	{
		left	: '藥�野백퐧',
		center	: '掠끺릎',
		right	: '�뤂野백퐧',
		block	: '訝ㅷク野백퐧'
	},

	blockquote : '�쓼凉뺟뵪',

	clipboard :
	{
		title		: '暎섋눼',
		cutError	: '�궓�쉪役뤺쭏�솳若됧뀲溫양쉰訝띶뀅溫며폋渦묈솳�눎�뒯�돢烏뚦돦�늾�뱧鵝�, 瑥룝슴�뵪�뵰�썥恙ユ뜼�뵰(Ctrl/Cmd+X)�씎若뚧닇',
		copyError	: '�궓�쉪役뤺쭏�솳若됧뀲溫양쉰訝띶뀅溫며폋渦묈솳�눎�뒯�돢烏뚦쨳�댍�뱧鵝�, 瑥룝슴�뵪�뵰�썥恙ユ뜼�뵰(Ctrl/Cmd+C)�씎若뚧닇',
		pasteMsg	: '瑥룝슴�뵪�뵰�썥恙ユ뜼�뵰(<STRONG>Ctrl/Cmd+V</STRONG>)�뒍�냵若밭쿂兀닷댆訝뗩씊�쉪�뼶旅녽뇤竊뚦냽�뙃 <STRONG>簾�若�</STRONG>',
		securityMsg	: '�썱訝뷸궓�쉪役뤺쭏�솳�쉪若됧뀲溫양쉰�렅�썱, �쑍煐뽬풌�솳訝띹꺗�쎍�렏溫욥뿮�궓�쉪�돦兀닸씮�냵若�, 鵝좈�誤곩쑉�쑍囹쀥룭�뇥�뼭暎섋눼訝�轝▲��',
		pasteArea	: '暎섋눼�뙷�윜'
	},

	pastefromword :
	{
		confirmCleanup	: '�궓誤곭쿂兀당쉪�냵若밧�썲깗�삸�씎�눎 MS Word, �삸�맔誤곫툍�솮 MS Word �졏凉뤷릮�냽暎섋눼?',
		toolbar			: '餓� MS Word 暎섋눼',
		title			: '餓� MS Word 暎섋눼',
		error			: '�뵳雅롥냵�깿�뵗瑥��뿞力뺞툍�릤誤곭쿂兀당쉪�빊�뜮'
	},

	pasteText :
	{
		button	: '暎섋눼訝뷸뿞�졏凉뤸뻼�쑍',
		title	: '暎섋눼訝뷸뿞�졏凉뤸뻼�쑍'
	},

	templates :
	{
		button			: '與→씮',
		title			: '�냵若방Æ�씮',
		options : '與→씮�됮」',
		insertOption	: '�쎘�뜟壤볟뎺�냵若�',
		selectPromptMsg	: '瑥룬�됪떓煐뽬풌�솳�냵若방Æ�씮:',
		emptyListMsg	: '(亦→쐣與→씮)'
	},

	showBlocks : '�샑鹽뷴뙷�쓼',

	stylesCombo :
	{
		label		: '�졆凉�',
		panelTitle	: '�졆凉�',
		panelTitle1	: '�쓼瀛㎩뀇榮졿졆凉�',
		panelTitle2	: '�냵�걫�뀇榮졿졆凉�',
		panelTitle3	: '野배괌�뀇榮졿졆凉�'
	},

	format :
	{
		label		: '�졏凉�',
		panelTitle	: '�졏凉�',

		tag_p		: '�솹��',
		tag_pre		: '藥꿰폋�럲�졏凉�',
		tag_address	: '�쑑��',
		tag_h1		: '�젃窯� 1',
		tag_h2		: '�젃窯� 2',
		tag_h3		: '�젃窯� 3',
		tag_h4		: '�젃窯� 4',
		tag_h5		: '�젃窯� 5',
		tag_h6		: '�젃窯� 6',
		tag_div		: '餘듣맼(DIV)'
	},

	div :
	{
		title				: '�닗兩� DIV 若밧솳',
		toolbar				: '�닗兩� DIV 若밧솳',
		cssClassInputLabel	: '�졆凉뤹굳�릫燁�',
		styleSelectLabel	: '�졆凉�',
		IdInputLabel		: 'ID',
		languageCodeInputLabel	: '瑥�鼇�餓ｇ쟻',
		inlineStyleInputLabel	: '烏뚦냵�졆凉�',
		advisoryTitleInputLabel	: '�젃窯�',
		langDirLabel		: '瑥�鼇��뼶�릲',
		langDirLTRLabel		: '餓롥랩�댆�뤂 (LTR)',
		langDirRTLLabel		: '餓롥뤂�댆藥� (RTL)',
		edit				: '煐뽬풌 DIV',
		remove				: '燁삯솮 DIV'
  	},

	iframe :
	{
		title		: 'IFrame 掠욄��',
		toolbar		: 'IFrame',
		noUrl		: '瑥룩풏�뀯旅녷왃�쉪 URL',
		scrolling	: '�뀅溫멩퍣�뒯�씉',
		border		: '�샑鹽뷸죫�왃渦방죫'
	},

	font :
	{
		label		: '耶쀤퐪',
		voiceLabel	: '耶쀤퐪',
		panelTitle	: '耶쀤퐪'
	},

	fontSize :
	{
		label		: '鸚㎩컦',
		voiceLabel	: '�뻼耶쀥ㄷ弱�',
		panelTitle	: '鸚㎩컦'
	},

	colorButton :
	{
		textColorTitle	: '�뻼�쑍窯쒑돯',
		bgColorTitle	: '�깒�솺窯쒑돯',
		panelTitle		: '窯쒑돯',
		auto			: '�눎�뒯',
		more			: '�끀若껈쥪�돯...'
	},

	colors :
	{
		'000' : '容�',
		'800000' : '筽먪벚',
		'8B4513' : '曆김쨶',
		'2F4F4F' : '罌①뼁',
		'008080' : '瀯욘씭�윹',
		'000080' : '役룟넏�뱷',
		'4B0082' : '�씃�뱷',
		'696969' : '�슅�겙',
		'B22222' : '�젚瀛�',
		'A52A2A' : '筽�',
		'DAA520' : '�뇫容�',
		'006400' : '曆긺뼁',
		'40E0D0' : '�뱷瀯�',
		'0000CD' : '訝��뱷',
		'800080' : '榮�',
		'808080' : '�겙',
		'F00' : '瀛�',
		'FF8C00' : '曆길찙',
		'FFD700' : '�뇫',
		'008000' : '瀯�',
		'0FF' : '�쓵',
		'00F' : '�뱷',
		'EE82EE' : '榮ョ퐮�뀺',
		'A9A9A9' : '曆긺겙',
		'FFA07A' : '雅�艅�',
		'FFA500' : '艅�',
		'FFFF00' : '容�',
		'00FF00' : '麗당뼁',
		'AFEEEE' : '暎됭뱷',
		'ADD8E6' : '雅��뱷',
		'DDA0DD' : '歟끿벚',
		'D3D3D3' : '曆←겙',
		'FFF0F5' : '曆←눈瀛�',
		'FAEBD7' : '�룮�몿�쇋',
		'FFFFE0' : '曆↓퍍',
		'F0FFF0' : '�쐺�쇋',
		'F0FFFF' : '鸚⑵뱷',
		'F0F8FF' : '曆↑뱷',
		'E6E6FA' : '曆←눈',
		'FFF' : '�쇋'
	},

	scayt :
	{
		title			: '�뜵�뿶�떬�넍汝��윥',
		opera_title		: '訝띷뵱�똻 Opera 役뤺쭏�솳',
		enable			: '�맦�뵪�뜵�뿶�떬�넍汝��윥',
		disable			: '獵곭뵪�뜵�뿶�떬�넍汝��윥',
		about			: '�뀽雅롥뜵�뿶�떬�넍汝��윥',
		toggle			: '�쉨�걶/�맦�뵪�뜵�뿶�떬�넍汝��윥',
		options			: '�됮」',
		langs			: '瑥�鼇�',
		moreSuggestions	: '�쎍鸚싨떬�넍兩븃��',
		ignore			: '恙썹븼',
		ignoreAll		: '�뀲�깿恙썹븼',
		addWord			: '曆삣뒥�뜒瑥�',
		emptyDic		: '耶쀥끂�릫訝띶틪訝븀㈉.',
		noSuggestions	: '亦→쐣兩븃��',
		optionsTab		: '�됮」',
		allCaps			: '恙썹븼���쐣鸚㎩넍�뜒瑥�',
		ignoreDomainNames : '恙썹븼�윜�릫',
		mixedCase		: '恙썹븼鸚㎩컦�넍曆룟릦�쉪�뜒瑥�',
		mixedWithDigits	: '恙썹븼躍��빊耶쀧쉪�뜒瑥�',

		languagesTab	: '瑥�鼇�',

		dictionariesTab	: '耶쀥끂',
		dic_field_name	: '耶쀥끂�릫燁�',
		dic_create		: '�닗兩�',
		dic_restore		: '瓦섇렅',
		dic_delete		: '�닠�솮',
		dic_rename		: '�뇥�뫝�릫',
		dic_info		: '訝�凉�冶뗧뵪�댎瑥띶끂�궓耶섇쑉 Cookie 訝�, 鵝녷삸 Cookies �쉪若백뇧�삸�쐣�솏�쉪, 壤볡뵪�댎瑥띶끂罌욇빣�댆擁끻눣 Cookie �솏�댍�뿶弱길뿞力뺝냽�궓耶섆틙, 瓦숁뿶�궓�룾餓ε컛瑥띶끂�궓耶섇댆�닊餓х쉪�쐨�뒦�솳訝�. 誤곫뒍�궓�쉪訝や볶瑥띶끂�댆�궓耶섇댆�닊餓х쉪�쐨�뒦�솳訝딁쉪瑥�, ��誤곦맏�궓�쉪瑥띶끂�뙁若싦�訝ゅ릫燁�, 倻귝옖�궓�쑉�닊餓х쉪�쐨�뒦�솳訝듿럴瀯뤸쐣�궓耶섉쐣訝�訝よ칾�끂, 瑥룩풏�뀯瑥띶끂�릫燁겼뭉�뙃瓦섇렅�뙃�뮢.',

		aboutTab		: '�뀽雅�'
	},

	about :
	{
		title		: '�뀽雅랢KEditor',
		dlgTitle	: '�뀽雅랢KEditor',
		help	: '瑥룩�욥뿮 $1 餓θ렩�룚躍��뒰.',
		userGuide : 'CKEditor �뵪�댎�릲野�',
		moreInfo	: '溫욥뿮�닊餓х쉪營묊쳶餓θ렩�룚�쎍鸚싧뀽雅롥뜌溫��쉪岳→겘',
		copy		: 'Copyright &copy; $1. �뎵�쓢���쐣��'
	},

	maximize : '�뀲掠�',
	minimize : '��弱뤷뙑',

	fakeobjects :
	{
		anchor		: '�뵚�궧',
		flash		: 'Flash �뒯�뵽',
		iframe		: 'IFrame',
		hiddenfield	: '�쉺�뿈�윜',
		unknown		: '�쑋�윥野배괌'
	},

	resize : '�떀�떭餓ζ뵻�룜弱뷴��',

	colordialog :
	{
		title		: '�됪떓窯쒑돯',
		options	:	'窯쒑돯�됮」',
		highlight	: '遙섆벽',
		selected	: '�됪떓窯쒑돯',
		clear		: '歷낂솮'
	},

	toolbarCollapse	: '�뒛�룧藥ε끁�젎',
	toolbarExpand	: '掠뺝�藥ε끁�젎',

	toolbarGroups :
	{
		document : '�뻼旅�',
		clipboard : '�돦兀닸씮/�뮘��',
		editing : '煐뽬풌',
		forms : '烏ⓨ뜒',
		basicstyles : '�읃�쑍�졏凉�',
		paragraph : '餘듣맼',
		links : '�벦�렏',
		insert : '�룖�뀯',
		styles : '�졆凉�',
		colors : '窯쒑돯',
		tools : '藥ε끁'
	},

	bidi :
	{
		ltr : '�뻼耶쀦뼶�릲訝뷰퍗藥��눛�뤂',
		rtl : '�뻼耶쀦뼶�릲訝뷰퍗�뤂�눛藥�'
	},

	docprops :
	{
		label : '窈들씊掠욄��',
		title : '窈들씊掠욄��',
		design : '溫얕��',
		meta : 'Meta �빊�뜮',
		chooseColor : '�됪떓',
		other : '<�끀餓�>',
		docTitle :	'窈들씊�젃窯�',
		charset : 	'耶쀧Е煐뽫쟻',
		charsetOther : '�끀若껃춻寧�煐뽫쟻',
		charsetASCII : 'ASCII',
		charsetCE : '訝�轝�',
		charsetCT : '濚곦퐪訝��뻼 (Big5)',
		charsetCR : '蜈욥뇤弱붹뻼',
		charsetGR : '躍뚩뀏�뻼',
		charsetJP : '�뿥�뻼',
		charsetKR : '�윪�뻼',
		charsetTR : '�쐿�녑끀�뻼',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : '蜈욘Ё',
		docType : '�뻼旅ｇ굳�엹',
		docTypeOther : '�끀若껅뻼旅ｇ굳�엹',
		xhtmlDec : '�똿�맜 XHTML 鶯경삇',
		bgColor : '�깒�솺窯쒑돯',
		bgImage : '�깒�솺�쎗�깗',
		bgFixed : '訝띷퍣�뒯�깒�솺�쎗�깗',
		txtColor : '�뻼�쑍窯쒑돯',
		margin : '窈들씊渦배퇌',
		marginTop : '訝�',
		marginLeft : '藥�',
		marginRight : '�뤂',
		marginBottom : '訝�',
		metaKeywords : '窈들씊榮℡폊�뀽�뵰耶� (�뵪�뜇鰲믧�쀥뤇[,]�늽�슂)',
		metaDescription : '窈들씊瑥닸삇',
		metaAuthor : '鵝쒑��',
		metaCopyright : '�뎵�쓢',
		previewHtml : '<p>瓦숁삸訝�雅�<strong>轢붺ㅊ�뵪�뻼耶�</strong>�귝궓壤볟뎺閭ｅ쑉鵝욜뵪<a href="javascript:void(0)">CKEditor</a>��</p>'
	}
};
