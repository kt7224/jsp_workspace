/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
* @fileOverview
*/

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['tr'] =
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
	editorTitle : 'Zengin metin edit철r체, %1',
	editorHelp : 'Yard캇m i챌in ALT 0 tu힊una bas캇n',

	// ARIA descriptions.
	toolbars	: 'Ara챌 챌ubuklar캇 Edit철r체',
	editor		: 'Zengin Metin Edit철r체',

	// Toolbar buttons without dialogs.
	source			: 'Kaynak',
	newPage			: 'Yeni Sayfa',
	save			: 'Kaydet',
	preview			: '횜n 캅zleme',
	cut				: 'Kes',
	copy			: 'Kopyala',
	paste			: 'Yap캇힊t캇r',
	print			: 'Yazd캇r',
	underline		: 'Alt캇 횉izgili',
	bold			: 'Kal캇n',
	italic			: '캅talik',
	selectAll		: 'T체m체n체 Se챌',
	removeFormat	: 'Bi챌imi Kald캇r',
	strike			: '횥st체 횉izgili',
	subscript		: 'Alt Simge',
	superscript		: '횥st Simge',
	horizontalrule	: 'Yatay Sat캇r Ekle',
	pagebreak		: 'Sayfa Sonu Ekle',
	pagebreakAlt		: 'Sayfa Sonu',
	unlink			: 'K철pr체 Kald캇r',
	undo			: 'Geri Al',
	redo			: 'Tekrarla',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Sunucuyu Gez',
		url				: 'URL',
		protocol		: 'Protokol',
		upload			: 'Kar힊캇ya Y체kle',
		uploadSubmit	: 'Sunucuya Yolla',
		image			: 'Resim',
		flash			: 'Flash',
		form			: 'Form',
		checkbox		: 'Onay Kutusu',
		radio			: 'Se챌enek D체휓mesi',
		textField		: 'Metin Giri힊i',
		textarea		: '횉ok Sat캇rl캇 Metin',
		hiddenField		: 'Gizli Veri',
		button			: 'D체휓me',
		select			: 'Se챌im Men체s체',
		imageButton		: 'Resimli D체휓me',
		notSet			: '<tan캇mlanmam캇힊>',
		id				: 'Kimlik',
		name			: 'Ad',
		langDir			: 'Dil Y철n체',
		langDirLtr		: 'Soldan Sa휓a (LTR)',
		langDirRtl		: 'Sa휓dan Sola (RTL)',
		langCode		: 'Dil Kodlamas캇',
		longDescr		: 'Uzun Tan캇ml캇 URL',
		cssClass		: 'Bi챌em Sayfas캇 S캇n캇flar캇',
		advisoryTitle	: 'Dan캇힊ma Ba힊l캇휓캇',
		cssStyle		: 'Bi챌em',
		ok				: 'Tamam',
		cancel			: '캅ptal',
		close			: 'Kapat',
		preview			: '횜n g철sterim',
		generalTab		: 'Genel',
		advancedTab		: 'Geli힊mi힊',
		validateNumberFailed : 'Bu de휓er say캇 de휓ildir.',
		confirmNewPage	: '캅ceri휓iniz kay캇t edilmedi휓inden dolay캇 kaybolacakt캇r. Yeni bir sayfa y체klemek istedi휓inize eminsiniz?',
		confirmCancel	: 'Baz캇 se챌enekler de휓i힊mi힊tir. Dialog penceresini kapatmak istedi휓inize eminmisiniz?',
		options			: 'Se챌enekler',
		target			: 'Hedef',
		targetNew		: 'Yeni Pencere (_blank)',
		targetTop		: 'En체st Pencere (_top)',
		targetSelf		: 'Ayn캇 Pencere (_self)',
		targetParent	: 'Ana Pencere (_parent)',
		langDirLTR		: 'Soldan Sa휓a (LTR)',
		langDirRTL		: 'Sa휓dan Sola (RTL)',
		styles			: 'Stil',
		cssClasses		: 'Stil sayfas캇 S캇n캇f캇',
		width			: 'Geni힊lik',
		height			: 'Y체kseklik',
		align			: 'Hizalama',
		alignLeft		: 'Sol',
		alignRight		: 'Sa휓',
		alignCenter		: 'Merkez',
		alignTop		: 'Tepe',
		alignMiddle		: 'Orta',
		alignBottom		: 'Alt',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'Y체kseklik say캇 olmal캇d캇r.',
		invalidWidth	: 'Geni힊lik bir say캇 olmal캇d캇r.',
		invalidCssLength	: 'Belirtti휓iniz say캇 "%1" alan캇 i챌in pozitif bir say캇 CSS birim de휓eri olmal캇d캇r (px, %, in, cm, mm, em, ex, pt, veya pc).',
		invalidHtmlLength	: 'Belirtti휓iniz say캇 "%1" alan캇 i챌in pozitif bir say캇 HTML birim de휓eri olmal캇d캇r (px veya %).',
		invalidInlineStyle	: 'Noktal캇 virg체lle ayr캇lm캇힊: "de휓er ad캇," inline stil i챌in belirtilen de휓er bi챌iminde bir veya daha fazla dizilerden olu힊mal캇d캇r.',
		cssLengthTooltip	: 'Pikseller i챌in bir numara girin veya ge챌erli bir CSS numaras캇 (px, %, in, cm, mm, em, ex, pt, veya pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, haz캇r de휓ildir</span>'
	},

	contextmenu :
	{
		options : '캅챌erik Men체s체 Se챌enekleri'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '횜zel Karakter Ekle',
		title		: '횜zel Karakter Se챌',
		options : '횜zel Karakter Se챌enekleri'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Link Ekle/D체zenle',
		other 		: '<di휓er>',
		menu		: 'Link D체zenle',
		title		: 'Link',
		info		: 'Link Bilgisi',
		target		: 'Hedef',
		upload		: 'Kar힊캇ya Y체kle',
		advanced	: 'Geli힊mi힊',
		type		: 'Link T체r체',
		toUrl		: 'URL',
		toAnchor	: 'Bu sayfada 챌apa',
		toEmail		: 'E-Posta',
		targetFrame		: '<챌er챌eve>',
		targetPopup		: '<yeni a챌캇lan pencere>',
		targetFrameName	: 'Hedef 횉er챌eve Ad캇',
		targetPopupName	: 'Yeni A챌캇lan Pencere Ad캇',
		popupFeatures	: 'Yeni A챌캇lan Pencere 횜zellikleri',
		popupResizable	: 'Resizable',
		popupStatusBar	: 'Durum 횉ubu휓u',
		popupLocationBar: 'Yer 횉ubu휓u',
		popupToolbar	: 'Ara챌 횉ubu휓u',
		popupMenuBar	: 'Men체 횉ubu휓u',
		popupFullScreen	: 'Tam Ekran (IE)',
		popupScrollBars	: 'Kayd캇rma 횉ubuklar캇',
		popupDependent	: 'Ba휓캇ml캇 (Netscape)',
		popupLeft		: 'Sola G철re Konum',
		popupTop		: 'Yukar캇ya G철re Konum',
		id				: 'Id',
		langDir			: 'Dil Y철n체',
		langDirLTR		: 'Soldan Sa휓a (LTR)',
		langDirRTL		: 'Sa휓dan Sola (RTL)',
		acccessKey		: 'Eri힊im Tu힊u',
		name			: 'Ad',
		langCode			: 'Dil Y철n체',
		tabIndex			: 'Sekme 캅ndeksi',
		advisoryTitle		: 'Dan캇힊ma Ba힊l캇휓캇',
		advisoryContentType	: 'Dan캇힊ma 캅챌erik T체r체',
		cssClasses		: 'Bi챌em Sayfas캇 S캇n캇flar캇',
		charset			: 'Ba휓l캇 Kaynak Karakter Gurubu',
		styles			: 'Bi챌em',
		rel			: '캅li힊ki',
		selectAnchor		: 'Ba휓lant캇 Se챌',
		anchorName		: 'Ba휓lant캇 Ad캇 ile',
		anchorId			: 'Eleman Kimlik Numaras캇 ile',
		emailAddress		: 'E-Posta Adresi',
		emailSubject		: '캅leti Konusu',
		emailBody		: '캅leti G철vdesi',
		noAnchors		: '(Bu belgede hi챌 챌apa yok)',
		noUrl			: 'L체tfen Link URL\'sini yaz캇n',
		noEmail			: 'L체tfen E-posta adresini yaz캇n'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ba휓lant캇 Ekle/D체zenle',
		menu		: 'Ba휓lant캇 횜zellikleri',
		title		: 'Ba휓lant캇 횜zellikleri',
		name		: 'Ba휓lant캇 Ad캇',
		errorName	: 'L체tfen ba휓lant캇 i챌in ad giriniz',
		remove		: 'Ba휓lant캇y캇 Kald캇r'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Say캇land캇r캇lm캇힊 Liste 횜zellikleri',
		bulletedTitle		: 'Simgeli Liste 횜zellikleri',
		type				: 'Tipi',
		start				: 'Ba힊la',
		validateStartNumber				:'Liste ba힊lang캇c캇 tam say캇 olmal캇d캇r.',
		circle				: 'Daire',
		disc				: 'Disk',
		square				: 'Kare',
		none				: 'Yok',
		notset				: '<ayarlanmam캇힊>',
		armenian			: 'Ermenice say캇land캇rma',
		georgian			: 'G체rc체ce numaraland캇rma (an, ban, gan, vs.)',
		lowerRoman			: 'K체챌체k Roman (i, ii, iii, iv, v, vs.)',
		upperRoman			: 'B체y체k Roman (I, II, III, IV, V, vs.)',
		lowerAlpha			: 'K체챌체k Alpha (a, b, c, d, e, vs.)',
		upperAlpha			: 'B체y체k Alpha (A, B, C, D, E, vs.)',
		lowerGreek			: 'K체챌체k Greek (alpha, beta, gamma, vs.)',
		decimal				: 'Ondal캇k (1, 2, 3, vs.)',
		decimalLeadingZero	: 'Ba힊캇 s캇f캇rl캇 ondal캇k (01, 02, 03, vs.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Bul ve De휓i힊tir',
		find				: 'Bul',
		replace				: 'De휓i힊tir',
		findWhat			: 'Aranan:',
		replaceWith			: 'Bununla de휓i힊tir:',
		notFoundMsg			: 'Belirtilen yaz캇 bulunamad캇.',
		findOptions			: 'Se챌enekleri Bul',
		matchCase			: 'B체y체k/k체챌체k harf duyarl캇',
		matchWord			: 'Kelimenin tamam캇 uysun',
		matchCyclic			: 'E힊le힊en d철ng체',
		replaceAll			: 'T체m체n체 De휓i힊tir',
		replaceSuccessMsg	: '%1 bulunanlardan de휓i힊tirildi.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tablo',
		title		: 'Tablo 횜zellikleri',
		menu		: 'Tablo 횜zellikleri',
		deleteTable	: 'Tabloyu Sil',
		rows		: 'Sat캇rlar',
		columns		: 'S체tunlar',
		border		: 'Kenar Kal캇nl캇휓캇',
		widthPx		: 'piksel',
		widthPc		: 'y체zde',
		widthUnit	: 'geni힊lik birimi',
		cellSpace	: 'Izgara kal캇nl캇휓캇',
		cellPad		: 'Izgara yaz캇 aras캇',
		caption		: 'Ba힊l캇k',
		summary		: '횜zet',
		headers		: 'Ba힊l캇klar',
		headersNone		: 'Yok',
		headersColumn	: '캅lk S체tun',
		headersRow		: '캅lk Sat캇r',
		headersBoth		: 'Her 캅kisi',
		invalidRows		: 'Sat캇r say캇s캇 0 say캇s캇ndan b체y체k olmal캇d캇r.',
		invalidCols		: 'S체t체n say캇s캇 0 say캇s캇ndan b체y체k olmal캇d캇r.',
		invalidBorder	: '횉erceve b체y체kl체kl체휓체 say캇 olmal캇d캇r.',
		invalidWidth	: 'Tablo geni힊li휓i say캇 olmal캇d캇r.',
		invalidHeight	: 'Tablo y체ksekli휓i say캇 olmal캇d캇r.',
		invalidCellSpacing	: 'H체cre bo힊lu휓u (spacing) say캇 olmal캇d캇r.',
		invalidCellPadding	: 'H체cre aral캇휓캇 (padding) say캇 olmal캇d캇r.',

		cell :
		{
			menu			: 'H체cre',
			insertBefore	: 'H체cre Ekle - 횜nce',
			insertAfter		: 'H체cre Ekle - Sonra',
			deleteCell		: 'H체cre Sil',
			merge			: 'H체creleri Birle힊tir',
			mergeRight		: 'Birle힊tir - Sa휓daki 캅le ',
			mergeDown		: 'Birle힊tir - A힊a휓캇daki 캅le ',
			splitHorizontal	: 'H체creyi Yatay B철l',
			splitVertical	: 'H체creyi Dikey B철l',
			title			: 'H체cre 횜zellikleri',
			cellType		: 'H체cre Tipi',
			rowSpan			: 'Sat캇rlar Mesafesi (Span)',
			colSpan			: 'S체t체nlar Mesafesi (Span)',
			wordWrap		: 'Kelime Kayd캇rma',
			hAlign			: 'D체힊ey Hizalama',
			vAlign			: 'Yata힊 Hizalama',
			alignBaseline	: 'Tabana',
			bgColor			: 'Arkaplan Rengi',
			borderColor		: '횉er챌eve Rengi',
			data			: 'Veri',
			header			: 'Ba힊l캇k',
			yes				: 'Evet',
			no				: 'Hay캇r',
			invalidWidth	: 'H체cre geni힊li휓i say캇 olmal캇d캇r.',
			invalidHeight	: 'H체cre y체ksekli휓i say캇 olmal캇d캇r.',
			invalidRowSpan	: 'Sat캇rlar캇n mesafesi tam say캇 olmal캇d캇r.',
			invalidColSpan	: 'S체t체nlar캇n mesafesi tam say캇 olmal캇d캇r.',
			chooseColor		: 'Se챌iniz'
		},

		row :
		{
			menu			: 'Sat캇r',
			insertBefore	: 'Sat캇r Ekle - 횜nce',
			insertAfter		: 'Sat캇r Ekle - Sonra',
			deleteRow		: 'Sat캇r Sil'
		},

		column :
		{
			menu			: 'S체tun',
			insertBefore	: 'Kolon Ekle - 횜nce',
			insertAfter		: 'Kolon Ekle - Sonra',
			deleteColumn	: 'S체tun Sil'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'D체휓me 횜zellikleri',
		text		: 'Metin (De휓er)',
		type		: 'Tip',
		typeBtn		: 'D체휓me',
		typeSbm		: 'G철nder',
		typeRst		: 'S캇f캇rla'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Onay Kutusu 횜zellikleri',
		radioTitle	: 'Se챌enek D체휓mesi 횜zellikleri',
		value		: 'De휓er',
		selected	: 'Se챌ili'
	},

	// Form Dialog.
	form :
	{
		title		: 'Form 횜zellikleri',
		menu		: 'Form 횜zellikleri',
		action		: '캅힊lem',
		method		: 'Y철ntem',
		encoding	: 'Kodlama'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Se챌im Men체s체 횜zellikleri',
		selectInfo	: 'Bilgi',
		opAvail		: 'Mevcut Se챌enekler',
		value		: 'De휓er',
		size		: 'Boyut',
		lines		: 'sat캇r',
		chkMulti	: '횉oklu se챌ime izin ver',
		opText		: 'Metin',
		opValue		: 'De휓er',
		btnAdd		: 'Ekle',
		btnModify	: 'D체zenle',
		btnUp		: 'Yukar캇',
		btnDown		: 'A힊a휓캇',
		btnSetValue : 'Se챌ili de휓er olarak ata',
		btnDelete	: 'Sil'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '횉ok Sat캇rl캇 Metin 횜zellikleri',
		cols		: 'S체tunlar',
		rows		: 'Sat캇rlar'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Metin Giri힊i 횜zellikleri',
		name		: 'Ad',
		value		: 'De휓er',
		charWidth	: 'Karakter Geni힊li휓i',
		maxChars	: 'En Fazla Karakter',
		type		: 'T체r',
		typeText	: 'Metin',
		typePass	: '힇ifre'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Gizli Veri 횜zellikleri',
		name	: 'Ad',
		value	: 'De휓er'
	},

	// Image Dialog.
	image :
	{
		title		: 'Resim 횜zellikleri',
		titleButton	: 'Resimli D체휓me 횜zellikleri',
		menu		: 'Resim 횜zellikleri',
		infoTab		: 'Resim Bilgisi',
		btnUpload	: 'Sunucuya Yolla',
		upload		: 'Kar힊캇ya Y체kle',
		alt			: 'Alternatif Yaz캇',
		lockRatio	: 'Oran캇 Kilitle',
		resetSize	: 'Boyutu Ba힊a D철nd체r',
		border		: 'Kenar',
		hSpace		: 'Yatay Bo힊luk',
		vSpace		: 'Dikey Bo힊luk',
		alertUrl	: 'L체tfen resmin URL\'sini yaz캇n캇z',
		linkTab		: 'K철pr체',
		button2Img	: 'Se챌ili resim butonunu basit resime 챌evirmek istermisiniz?',
		img2Button	: 'Se챌ili olan resimi, resimli butona 챌evirmek istermisiniz?',
		urlMissing	: 'Resmin URL kayna휓캇 eksiktir.',
		validateBorder	: '횉er챌eve tam say캇 olmal캇d캇r.',
		validateHSpace	: 'HSpace tam say캇 olmal캇d캇r.',
		validateVSpace	: 'VSpace tam say캇 olmal캇d캇r.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash 횜zellikleri',
		propertiesTab	: '횜zellikler',
		title			: 'Flash 횜zellikleri',
		chkPlay			: 'Otomatik Oynat',
		chkLoop			: 'D철ng체',
		chkMenu			: 'Flash Men체s체n체 Kullan',
		chkFull			: 'Tam ekrana 캅zinver',
 		scale			: 'Boyutland캇r',
		scaleAll		: 'Hepsini G철ster',
		scaleNoBorder	: 'Kenar Yok',
		scaleFit		: 'Tam S캇휓d캇r',
		access			: 'Kod 캅zni',
		accessAlways	: 'Herzaman',
		accessSameDomain: 'Ayn캇 domain',
		accessNever		: 'Asla',
		alignAbsBottom	: 'Tam Alt캇',
		alignAbsMiddle	: 'Tam Ortas캇',
		alignBaseline	: 'Taban 횉izgisi',
		alignTextTop	: 'Yaz캇 Tepeye',
		quality			: 'Kalite',
		qualityBest		: 'En iyi',
		qualityHigh		: 'Y체ksek',
		qualityAutoHigh	: 'Otomatik Y체kseklik',
		qualityMedium	: 'Orta',
		qualityAutoLow	: 'Otomatik D체힊체kl체k',
		qualityLow		: 'D체힊체k',
		windowModeWindow: 'Pencere',
		windowModeOpaque: 'Opak',
		windowModeTransparent : '힇effaf',
		windowMode		: 'Pencere modu',
		flashvars		: 'Flash De휓erleri',
		bgcolor			: 'Arka Renk',
		hSpace			: 'Yatay Bo힊luk',
		vSpace			: 'Dikey Bo힊luk',
		validateSrc		: 'L체tfen k철pr체 URL\'sini yaz캇n',
		validateHSpace	: 'HSpace say캇 olmal캇d캇r.',
		validateVSpace	: 'VSpace say캇 olmal캇d캇r.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Yaz캇m Denetimi',
		title			: 'Yaz캇m캇 Denetle',
		notAvailable	: '횥z체g체n체z, bu servis 힊uanda hizmet d캇힊캇d캇r.',
		errorLoading	: 'Uygulamada y체klerken hata olu힊tu: %s.',
		notInDic		: 'S철zl체kte Yok',
		changeTo		: '힇una de휓i힊tir:',
		btnIgnore		: 'Yoksay',
		btnIgnoreAll	: 'T체m체n체 Yoksay',
		btnReplace		: 'De휓i힊tir',
		btnReplaceAll	: 'T체m체n체 De휓i힊tir',
		btnUndo			: 'Geri Al',
		noSuggestions	: '- 횜neri Yok -',
		progress		: 'Yaz캇m denetimi i힊lemde...',
		noMispell		: 'Yaz캇m denetimi tamamland캇: Yanl캇힊 yaz캇ma rastlanmad캇',
		noChanges		: 'Yaz캇m denetimi tamamland캇: Hi챌bir kelime de휓i힊tirilmedi',
		oneChange		: 'Yaz캇m denetimi tamamland캇: Bir kelime de휓i힊tirildi',
		manyChanges		: 'Yaz캇m denetimi tamamland캇: %1 kelime de휓i힊tirildi',
		ieSpellDownload	: 'Yaz캇m denetimi y체klenmemi힊. 힇imdi y체klemek ister misiniz?'
	},

	smiley :
	{
		toolbar	: '캅fade',
		title	: '캅fade Ekle',
		options : '캅fade Se챌enekleri'
	},

	elementsPath :
	{
		eleLabel : 'Elementlerin yolu',
		eleTitle : '%1 elementi'
	},

	numberedlist	: 'Numaral캇 Liste',
	bulletedlist	: 'Simgeli Liste',
	indent			: 'Sekme Artt캇r',
	outdent			: 'Sekme Azalt',

	justify :
	{
		left	: 'Sola Dayal캇',
		center	: 'Ortalanm캇힊',
		right	: 'Sa휓a Dayal캇',
		block	: '캅ki Kenara Yaslanm캇힊'
	},

	blockquote : 'Blok Olu힊tur',

	clipboard :
	{
		title		: 'Yap캇힊t캇r',
		cutError	: 'Gezgin yaz캇l캇m캇n캇z캇n g체venlik ayarlar캇 d체zenleyicinin otomatik kesme i힊lemine izin vermiyor. 캅힊lem i챌in (Ctrl/Cmd+X) tu힊lar캇n캇 kullan캇n.',
		copyError	: 'Gezgin yaz캇l캇m캇n캇z캇n g체venlik ayarlar캇 d체zenleyicinin otomatik kopyalama i힊lemine izin vermiyor. 캅힊lem i챌in (Ctrl/Cmd+C) tu힊lar캇n캇 kullan캇n.',
		pasteMsg	: 'L체tfen a힊a휓캇daki kutunun i챌ine yap캇힊t캇r캇n. (<STRONG>Ctrl/Cmd+V</STRONG>) ve <STRONG>Tamam</STRONG> butonunu t캇klay캇n.',
		securityMsg	: 'Gezgin yaz캇l캇m캇n캇z캇n g체venlik ayarlar캇 d체zenleyicinin direkt olarak panoya eri힊imine izin vermiyor. Bu pencere i챌ine tekrar yap캇힊t캇rmal캇s캇n캇z..',
		pasteArea	: 'Yap캇힊t캇rma Alan캇'
	},

	pastefromword :
	{
		confirmCleanup	: 'Yap캇힊t캇rmaya 챌al캇힊t캇휓캇n캇z metin Word\'den kopyalanm캇힊t캇r. Yap캇힊t캇rmadan 철nce silmek istermisiniz?',
		toolbar			: 'Word\'den Yap캇힊t캇r',
		title			: 'Word\'den Yap캇힊t캇r',
		error			: 'Yap캇힊t캇rmadaki veri bilgisi hata d체zelene kadar silinmeyecektir'
	},

	pasteText :
	{
		button	: 'D체z Metin Olarak Yap캇힊t캇r',
		title	: 'D체z Metin Olarak Yap캇힊t캇r'
	},

	templates :
	{
		button			: '힇ablonlar',
		title			: '캅챌erik 힇ablonlar캇',
		options : '힇ablon Se챌enekleri',
		insertOption	: 'Mevcut i챌erik ile de휓i힊tir',
		selectPromptMsg	: 'D체zenleyicide a챌mak i챌in l체tfen bir 힊ablon se챌in.<br>(hali haz캇rdaki i챌erik kaybolacakt캇r.):',
		emptyListMsg	: '(Belirli bir 힊ablon se챌ilmedi)'
	},

	showBlocks : 'Bloklar캇 G철ster',

	stylesCombo :
	{
		label		: 'Bi챌em',
		panelTitle	: 'Stilleri D체zenliyor',
		panelTitle1	: 'Blok Stilleri',
		panelTitle2	: 'Inline Stilleri',
		panelTitle3	: 'Nesne Stilleri'
	},

	format :
	{
		label		: 'Bi챌im',
		panelTitle	: 'Bi챌im',

		tag_p		: 'Normal',
		tag_pre		: 'Bi챌imli',
		tag_address	: 'Adres',
		tag_h1		: 'Ba힊l캇k 1',
		tag_h2		: 'Ba힊l캇k 2',
		tag_h3		: 'Ba힊l캇k 3',
		tag_h4		: 'Ba힊l캇k 4',
		tag_h5		: 'Ba힊l캇k 5',
		tag_h6		: 'Ba힊l캇k 6',
		tag_div		: 'Paragraf (DIV)'
	},

	div :
	{
		title				: 'Div 캅챌eri휓i Olu힊tur',
		toolbar				: 'Div 캅챌eri휓i Olu힊tur',
		cssClassInputLabel	: 'Stilltipi S캇n캇f캇',
		styleSelectLabel	: 'Stil',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Dil Kodu',
		inlineStyleInputLabel	: 'Inline Stili',
		advisoryTitleInputLabel	: 'Tavsiye Ba힊l캇휓캇',
		langDirLabel		: 'Dil Y철n체',
		langDirLTRLabel		: 'Soldan sa휓a (LTR)',
		langDirRTLLabel		: 'Sa휓dan sola (RTL)',
		edit				: 'Div D체zenle',
		remove				: 'Div Kald캇r'
  	},

	iframe :
	{
		title		: 'IFrame 횜zellikleri',
		toolbar		: 'IFrame',
		noUrl		: 'L체tfen IFrame k철pr체 (URL) ba휓lant캇s캇n캇 yaz캇n',
		scrolling	: 'Kayd캇rma 챌ubuklar캇n캇 aktif et',
		border		: '횉erceve s캇n캇rlar캇n캇 g철ster'
	},

	font :
	{
		label		: 'Yaz캇 T체r체',
		voiceLabel	: 'Font',
		panelTitle	: 'Yaz캇 T체r체'
	},

	fontSize :
	{
		label		: 'Boyut',
		voiceLabel	: 'Font Size',
		panelTitle	: 'Boyut'
	},

	colorButton :
	{
		textColorTitle	: 'Yaz캇 Rengi',
		bgColorTitle	: 'Arka Renk',
		panelTitle		: 'Renkler',
		auto			: 'Otomatik',
		more			: 'Di휓er renkler...'
	},

	colors :
	{
		'000' : 'Siyah',
		'800000' : 'Kestane',
		'8B4513' : 'Koyu Kahverengi',
		'2F4F4F' : 'Koyu Kur힊uni Gri',
		'008080' : 'Teal',
		'000080' : 'Mavi',
		'4B0082' : '횉ivit Mavisi',
		'696969' : 'Silik Gri',
		'B22222' : 'Ate힊 Tu휓las캇',
		'A52A2A' : 'Kahverengi',
		'DAA520' : 'Altun S캇r캇k',
		'006400' : 'Koyu Ye힊il',
		'40E0D0' : 'Turkuaz',
		'0000CD' : 'Orta Mavi',
		'800080' : 'Pembe',
		'808080' : 'Gri',
		'F00' : 'K캇rm캇z캇',
		'FF8C00' : 'Koyu Portakal',
		'FFD700' : 'Alt캇n',
		'008000' : 'Ye힊il',
		'0FF' : 'Ciyan',
		'00F' : 'Mavi',
		'EE82EE' : 'Menek힊e',
		'A9A9A9' : 'Koyu Gri',
		'FFA07A' : 'A챌캇k Sar캇ms캇',
		'FFA500' : 'Portakal',
		'FFFF00' : 'Sar캇',
		'00FF00' : 'A챌캇k Ye힊il',
		'AFEEEE' : 'S철n체k Turkuaz',
		'ADD8E6' : 'A챌캇k Mavi',
		'DDA0DD' : 'Mor',
		'D3D3D3' : 'A챌캇k Gri',
		'FFF0F5' : 'Eflatun Pembe',
		'FAEBD7' : 'Antik Beyaz',
		'FFFFE0' : 'A챌캇k Sar캇',
		'F0FFF0' : 'Balsar캇s캇',
		'F0FFFF' : 'G철k Mavisi',
		'F0F8FF' : 'Reha Mavi',
		'E6E6FA' : 'Eflatun',
		'FFF' : 'Beyaz'
	},

	scayt :
	{
		title			: 'Girmi힊 oldu휓unuz kelime denetimi',
		opera_title		: 'Opera taraf캇ndan desteklenmemektedir',
		enable			: 'SCAYT\'캇 etkinle힊tir',
		disable			: 'SCAYT\'캇 pasifle힊tir',
		about			: 'SCAYT\'캇 hakk캇nda',
		toggle			: 'SCAYT\'캇 de휓i힊tir',
		options			: 'Se챌enekler',
		langs			: 'Diller',
		moreSuggestions	: 'Daha fazla 철neri',
		ignore			: 'Yoksay',
		ignoreAll		: 'T체m체n체 Yoksay',
		addWord			: 'Kelime Ekle',
		emptyDic		: 'S철zl체k ad캇 bo힊 olamaz.',
		noSuggestions	: '횜neri Yok',
		optionsTab		: 'Se챌enekler',
		allCaps			: 'T체m b체y체k k체챌체k kelimeleri yoksay',
		ignoreDomainNames : 'Domain adlar캇n캇 yoksay',
		mixedCase		: 'Kar캇힊캇k b체y체kl체k ile S철zc체kler yoksay',
		mixedWithDigits	: 'Say캇larla Kelimeler yoksay',

		languagesTab	: 'Diller',

		dictionariesTab	: 'S철zl체kler',
		dic_field_name	: 'S철zl체k ad캇',
		dic_create		: 'Olu힊tur',
		dic_restore		: 'Geri al',
		dic_delete		: 'Sil',
		dic_rename		: 'Yeniden adland캇r',
		dic_info		: 'Ba힊lang캇챌ta Kullan캇c캇 S철zl체휓체 bir 챌erezde saklan캇r. Ancak, 횉erezler boyutu s캇n캇rl캇d캇r. Kullan캇c캇 S철zl체휓체, 챌erezin i챌inde saklanamayaca휓캇 bir noktada, bizim sunucular캇m캇z캇n i챌indeki s철zl체kte saklanabilir. Bizim sunucu 체zerinde ki힊isel S철zl체k saklaman캇z i챌in, S철zl체휓e bir ad belirtmelisiniz. E휓er zaten bir sakl캇 S철zl체k varsa, l체tfen ad캇n캇 yaz캇n ve Geri Y체kle d체휓mesini t캇klay캇n.',

		aboutTab		: 'Hakk캇nda'
	},

	about :
	{
		title		: 'CKEditor Hakk캇nda',
		dlgTitle	: 'CKEditor Hakk캇nda',
		help	: 'Yard캇m i챌in $1 kontrol edin.',
		userGuide : 'CKEditor Kullan캇c캇 K캇lavuzu',
		moreInfo	: 'Lisanslama hakk캇nda daha fazla bilgi almak i챌in l체tfen sitemizi ziyaret edin:',
		copy		: 'Copyright &copy; $1. T체m haklar캇 sakl캇d캇r.'
	},

	maximize : 'B체y체lt',
	minimize : 'K체챌체lt',

	fakeobjects :
	{
		anchor		: 'Ba휓lant캇',
		flash		: 'Flash Animasyonu',
		iframe		: 'IFrame',
		hiddenfield	: 'Gizli Alan',
		unknown		: 'Bilinmeyen Nesne'
	},

	resize : 'Boyutland캇rmak i챌in s체r체kle',

	colordialog :
	{
		title		: 'Renk se챌',
		options	:	'Renk Se챌enekleri',
		highlight	: '캅힊aretle',
		selected	: 'Se챌ilmi힊',
		clear		: 'Temizle'
	},

	toolbarCollapse	: 'Ara챌 챌ubuklar캇n캇 topla',
	toolbarExpand	: 'Ara챌 챌ubuklar캇n캇 a챌',

	toolbarGroups :
	{
		document : 'Belge',
		clipboard : 'Pano/Geri al',
		editing : 'D체zenleme',
		forms : 'Formlar',
		basicstyles : 'Temel Stiller',
		paragraph : 'Paragraf',
		links : 'Ba휓lant캇lar',
		insert : 'Ekle',
		styles : 'Stiller',
		colors : 'Renkler',
		tools : 'Ara챌lar'
	},

	bidi :
	{
		ltr : 'Metin y철n체 soldan sa휓a',
		rtl : 'Metin y철n체 sa휓dan sola'
	},

	docprops :
	{
		label : 'Belge 횜zellikleri',
		title : 'Belge 횜zellikleri',
		design : 'Dizayn',
		meta : 'Tan캇m Bilgisi (Meta)',
		chooseColor : 'Se챌iniz',
		other : '<di휓er>',
		docTitle :	'Sayfa Ba힊l캇휓캇',
		charset : 	'Karakter K체mesi Kodlamas캇',
		charsetOther : 'Di휓er Karakter K체mesi Kodlamas캇',
		charsetASCII : 'ASCII',
		charsetCE : 'Orta Avrupa',
		charsetCT : 'Geleneksel 횉ince (Big5)',
		charsetCR : 'Kiril',
		charsetGR : 'Yunanca',
		charsetJP : 'Japonca',
		charsetKR : 'Korece',
		charsetTR : 'T체rk챌e',
		charsetUN : 'Evrensel Kod (UTF-8)',
		charsetWE : 'Bat캇 Avrupa',
		docType : 'Belge T체r체 Ba힊l캇휓캇',
		docTypeOther : 'Di휓er Belge T체r체 Ba힊l캇휓캇',
		xhtmlDec : 'XHTML Bildirimlerini Dahil Et',
		bgColor : 'Arka Plan Rengi',
		bgImage : 'Arka Plan Resim URLsi',
		bgFixed : 'Sabit Arka Plan',
		txtColor : 'Yaz캇 Rengi',
		margin : 'Kenar Bo힊luklar캇',
		marginTop : 'Tepe',
		marginLeft : 'Sol',
		marginRight : 'Sa휓',
		marginBottom : 'Alt',
		metaKeywords : 'Belge Dizinleme Anahtar Kelimeleri (virg체lle ayr캇lm캇힊)',
		metaDescription : 'Belge Tan캇m캇',
		metaAuthor : 'Yazar',
		metaCopyright : 'Telif',
		previewHtml : '<p>Bu bir <strong>철rnek metindir</strong>. <a href="javascript:void(0)">CKEditor</a> kullan캇yorsunuz.</p>'
	}
};
