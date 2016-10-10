/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * French language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['fr'] =
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
	editorTitle : '횋diteur de Texte Enrichi, %1',
	editorHelp : 'Appuyez sur ALT-0 pour l\'aide',

	// ARIA descriptions.
	toolbars	: 'Barre d\'outils de l\'챕diteur',
	editor		: '횋diteur de Texte Enrichi',

	// Toolbar buttons without dialogs.
	source			: 'Source',
	newPage			: 'Nouvelle page',
	save			: 'Enregistrer',
	preview			: 'Aper챌u',
	cut				: 'Couper',
	copy			: 'Copier',
	paste			: 'Coller',
	print			: 'Imprimer',
	underline		: 'Soulign챕',
	bold			: 'Gras',
	italic			: 'Italique',
	selectAll		: 'Tout s챕lectionner',
	removeFormat	: 'Supprimer la mise en forme',
	strike			: 'Barr챕',
	subscript		: 'Indice',
	superscript		: 'Exposant',
	horizontalrule	: 'Ligne horizontale',
	pagebreak		: 'Saut de page',
	pagebreakAlt		: 'Saut de page',
	unlink			: 'Supprimer le lien',
	undo			: 'Annuler',
	redo			: 'R챕tablir',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Explorer le serveur',
		url				: 'URL',
		protocol		: 'Protocole',
		upload			: 'Envoyer',
		uploadSubmit	: 'Envoyer sur le serveur',
		image			: 'Image',
		flash			: 'Flash',
		form			: 'Formulaire',
		checkbox		: 'Case 횪 cocher',
		radio			: 'Bouton Radio',
		textField		: 'Champ texte',
		textarea		: 'Zone de texte',
		hiddenField		: 'Champ cach챕',
		button			: 'Bouton',
		select			: 'Liste d챕roulante',
		imageButton		: 'Bouton image',
		notSet			: '<non d챕fini>',
		id				: 'Id',
		name			: 'Nom',
		langDir			: 'Sens d\'챕criture',
		langDirLtr		: 'Gauche 횪 droite (LTR)',
		langDirRtl		: 'Droite 횪 gauche (RTL)',
		langCode		: 'Code de langue',
		longDescr		: 'URL de description longue (longdesc => malvoyant)',
		cssClass		: 'Classe CSS',
		advisoryTitle	: 'Description (title)',
		cssStyle		: 'Style',
		ok				: 'OK',
		cancel			: 'Annuler',
		close			: 'Fermer',
		preview			: 'Aper챌u',
		generalTab		: 'G챕n챕ral',
		advancedTab		: 'Avanc챕',
		validateNumberFailed : 'Cette valeur n\'est pas un nombre.',
		confirmNewPage	: 'Les changements non sauvegard챕s seront perdus. 횎tes-vous s청r de vouloir charger une nouvelle page?',
		confirmCancel	: 'Certaines options ont 챕t챕 modifi챕es. 횎tes-vous s청r de vouloir fermer?',
		options			: 'Options',
		target			: 'Cible (Target)',
		targetNew		: 'Nouvelle fen챗tre (_blank)',
		targetTop		: 'Fen챗tre sup챕rieure (_top)',
		targetSelf		: 'M챗me fen챗tre (_self)',
		targetParent	: 'Fen챗tre parent (_parent)',
		langDirLTR		: 'Gauche 횪 Droite (LTR)',
		langDirRTL		: 'Droite 횪 Gauche (RTL)',
		styles			: 'Style',
		cssClasses		: 'Classes de style',
		width			: 'Largeur',
		height			: 'Hauteur',
		align			: 'Alignement',
		alignLeft		: 'Gauche',
		alignRight		: 'Droite',
		alignCenter		: 'Centr챕',
		alignTop		: 'Haut',
		alignMiddle		: 'Milieu',
		alignBottom		: 'Bas',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'La hauteur doit 챗tre un nombre.',
		invalidWidth	: 'La largeur doit 챗tre un nombre.',
		invalidCssLength	: 'La valeur sp챕cifi챕e pour le champ "%1" doit 챗tre un nombre positif avec ou sans unit챕 de mesure CSS valide (px, %, in, cm, mm, em, ex, pt, or pc).',
		invalidHtmlLength	: 'La valeur sp챕cifi챕e pour le champ "%1" doit 챗tre un nombre positif avec ou sans unit챕 de mesure HTML valide (px or %).',
		invalidInlineStyle	: 'La valeur sp챕cifi챕e pour le style inline doit 챗tre compos챕e d\'un ou plusieurs couples de valeur au format "nom : valeur", separ챕s par des points-virgules.',
		cssLengthTooltip	: 'Entrer un nombre pour une valeur en pixels ou un nombre avec une unit챕 de mesure CSS valide (px, %, in, cm, mm, em, ex, pt, or pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, Indisponible</span>'
	},

	contextmenu :
	{
		options : 'Options du menu contextuel'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Ins챕rer un caract챔re sp챕cial',
		title		: 'S챕lectionnez un caract챔re',
		options : 'Options des caract챔res sp챕ciaux'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Lien',
		other 		: '<autre>',
		menu		: 'Editer le lien',
		title		: 'Lien',
		info		: 'Infos sur le lien',
		target		: 'Cible',
		upload		: 'Envoyer',
		advanced	: 'Avanc챕',
		type		: 'Type de lien',
		toUrl		: 'URL',
		toAnchor	: 'Transformer le lien en ancre dans le texte',
		toEmail		: 'E-mail',
		targetFrame		: '<cadre>',
		targetPopup		: '<fen챗tre popup>',
		targetFrameName	: 'Nom du Cadre destination',
		targetPopupName	: 'Nom de la fen챗tre popup',
		popupFeatures	: 'Options de la fen챗tre popup',
		popupResizable	: 'Redimensionnable',
		popupStatusBar	: 'Barre de status',
		popupLocationBar: 'Barre d\'adresse',
		popupToolbar	: 'Barre d\'outils',
		popupMenuBar	: 'Barre de menu',
		popupFullScreen	: 'Plein 챕cran (IE)',
		popupScrollBars	: 'Barres de d챕filement',
		popupDependent	: 'D챕pendante (Netscape)',
		popupLeft		: 'Position gauche',
		popupTop		: 'Position haute',
		id				: 'Id',
		langDir			: 'Sens d\'챕criture',
		langDirLTR		: 'Gauche 횪 droite',
		langDirRTL		: 'Droite 횪 gauche',
		acccessKey		: 'Touche d\'accessibilit챕',
		name			: 'Nom',
		langCode			: 'Code de langue',
		tabIndex			: 'Index de tabulation',
		advisoryTitle		: 'Description (title)',
		advisoryContentType	: 'Type de contenu (ex: text/html)',
		cssClasses		: 'Classe CSS',
		charset			: 'Charset de la cible',
		styles			: 'Style',
		rel			: 'Relation',
		selectAnchor		: 'S챕lectionner l\'ancre',
		anchorName		: 'Par nom d\'ancre',
		anchorId			: 'Par ID d\'챕l챕ment',
		emailAddress		: 'Adresse E-Mail',
		emailSubject		: 'Sujet du message',
		emailBody		: 'Corps du message',
		noAnchors		: '(Aucune ancre disponible dans ce document)',
		noUrl			: 'Veuillez entrer l\'adresse du lien',
		noEmail			: 'Veuillez entrer l\'adresse e-mail'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ancre',
		menu		: 'Editer l\'ancre',
		title		: 'Propri챕t챕s de l\'ancre',
		name		: 'Nom de l\'ancre',
		errorName	: 'Veuillez entrer le nom de l\'ancre.',
		remove		: 'Supprimer l\'ancre'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Propri챕t챕s de la liste num챕rot챕e',
		bulletedTitle		: 'Propri챕t챕s de la liste 횪 puces',
		type				: 'Type',
		start				: 'D챕but',
		validateStartNumber				:'Le premier 챕l챕ment de la liste doit 챗tre un nombre entier.',
		circle				: 'Cercle',
		disc				: 'Disque',
		square				: 'Carr챕',
		none				: 'Aucun',
		notset				: '<Non d챕fini>',
		armenian			: 'Num챕ration arm챕nienne',
		georgian			: 'Num챕ration g챕orgienne (an, ban, gan, etc.)',
		lowerRoman			: 'Nombres romains minuscules (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'Nombres romains majuscules (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'Alphab챕tique minuscules (a, b, c, d, e, etc.)',
		upperAlpha			: 'Alphab챕tique majuscules (A, B, C, D, E, etc.)',
		lowerGreek			: 'Grec minuscule (alpha, beta, gamma, etc.)',
		decimal				: 'D챕cimal (1, 2, 3, etc.)',
		decimalLeadingZero	: 'D챕cimal pr챕c챕d챕 par un 0 (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Trouver et remplacer',
		find				: 'Trouver',
		replace				: 'Remplacer',
		findWhat			: 'Expression 횪 trouver: ',
		replaceWith			: 'Remplacer par: ',
		notFoundMsg			: 'Le texte sp챕cifi챕 ne peut 챗tre trouv챕.',
		findOptions			: 'Options de recherche',
		matchCase			: 'Respecter la casse',
		matchWord			: 'Mot entier uniquement',
		matchCyclic			: 'Boucler',
		replaceAll			: 'Remplacer tout',
		replaceSuccessMsg	: '%1 occurrence(s) replac챕e(s).'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tableau',
		title		: 'Propri챕t챕s du tableau',
		menu		: 'Propri챕t챕s du tableau',
		deleteTable	: 'Supprimer le tableau',
		rows		: 'Lignes',
		columns		: 'Colonnes',
		border		: 'Taille de la bordure',
		widthPx		: 'pixels',
		widthPc		: '% pourcents',
		widthUnit	: 'unit챕 de largeur',
		cellSpace	: 'Espacement des cellules',
		cellPad		: 'Marge interne des cellules',
		caption		: 'Titre du tableau',
		summary		: 'R챕sum챕 (description)',
		headers		: 'En-T챗tes',
		headersNone		: 'Aucunes',
		headersColumn	: 'Premi챔re colonne',
		headersRow		: 'Premi챔re ligne',
		headersBoth		: 'Les deux',
		invalidRows		: 'Le nombre de lignes doit 챗tre sup챕rieur 횪 0.',
		invalidCols		: 'Le nombre de colonnes doit 챗tre sup챕rieur 횪 0.',
		invalidBorder	: 'La taille de la bordure doit 챗tre un nombre.',
		invalidWidth	: 'La largeur du tableau doit 챗tre un nombre.',
		invalidHeight	: 'La hauteur du tableau doit 챗tre un nombre.',
		invalidCellSpacing	: 'L\'espacement des cellules doit 챗tre un nombre positif.',
		invalidCellPadding	: 'La marge int챕rieure des cellules doit 챗tre un nombre positif.',

		cell :
		{
			menu			: 'Cellule',
			insertBefore	: 'Ins챕rer une cellule avant',
			insertAfter		: 'Ins챕rer une cellule apr챔s',
			deleteCell		: 'Supprimer les cellules',
			merge			: 'Fusionner les cellules',
			mergeRight		: 'Fusionner 횪 droite',
			mergeDown		: 'Fusionner en bas',
			splitHorizontal	: 'Fractionner horizontalement',
			splitVertical	: 'Fractionner verticalement',
			title			: 'Propri챕t챕s de la cellule',
			cellType		: 'Type de cellule',
			rowSpan			: 'Fusion de lignes',
			colSpan			: 'Fusion de colonnes',
			wordWrap		: 'C챕sure',
			hAlign			: 'Alignement Horizontal',
			vAlign			: 'Alignement Vertical',
			alignBaseline	: 'Bas du texte',
			bgColor			: 'Couleur d\'arri챔re-plan',
			borderColor		: 'Couleur de Bordure',
			data			: 'Donn챕es',
			header			: 'Ent챗te',
			yes				: 'Oui',
			no				: 'Non',
			invalidWidth	: 'La Largeur de Cellule doit 챗tre un nombre.',
			invalidHeight	: 'La Hauteur de Cellule doit 챗tre un nombre.',
			invalidRowSpan	: 'La fusion de lignes doit 챗tre un nombre entier.',
			invalidColSpan	: 'La fusion de colonnes doit 챗tre un nombre entier.',
			chooseColor		: 'Choisissez'
		},

		row :
		{
			menu			: 'Ligne',
			insertBefore	: 'Ins챕rer une ligne avant',
			insertAfter		: 'Ins챕rer une ligne apr챔s',
			deleteRow		: 'Supprimer les lignes'
		},

		column :
		{
			menu			: 'Colonnes',
			insertBefore	: 'Ins챕rer une colonne avant',
			insertAfter		: 'Ins챕rer une colonne apr챔s',
			deleteColumn	: 'Supprimer les colonnes'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Propri챕t챕s du bouton',
		text		: 'Texte (Value)',
		type		: 'Type',
		typeBtn		: 'Bouton',
		typeSbm		: 'Validation (submit)',
		typeRst		: 'Remise 횪 z챕ro'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Propri챕t챕s de la case 횪 cocher',
		radioTitle	: 'Propri챕t챕s du bouton Radio',
		value		: 'Valeur',
		selected	: 'S챕lectionn챕'
	},

	// Form Dialog.
	form :
	{
		title		: 'Propri챕t챕s du formulaire',
		menu		: 'Propri챕t챕s du formulaire',
		action		: 'Action',
		method		: 'M챕thode',
		encoding	: 'Encodage'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Propri챕t챕s du menu d챕roulant',
		selectInfo	: 'Informations sur le menu d챕roulant',
		opAvail		: 'Options disponibles',
		value		: 'Valeur',
		size		: 'Taille',
		lines		: 'Lignes',
		chkMulti	: 'Permettre les s챕lections multiples',
		opText		: 'Texte',
		opValue		: 'Valeur',
		btnAdd		: 'Ajouter',
		btnModify	: 'Modifier',
		btnUp		: 'Haut',
		btnDown		: 'Bas',
		btnSetValue : 'D챕finir comme valeur s챕lectionn챕e',
		btnDelete	: 'Supprimer'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Propri챕t챕s de la zone de texte',
		cols		: 'Colonnes',
		rows		: 'Lignes'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Propri챕t챕s du champ texte',
		name		: 'Nom',
		value		: 'Valeur',
		charWidth	: 'Taille des caract챔res',
		maxChars	: 'Nombre maximum de caract챔res',
		type		: 'Type',
		typeText	: 'Texte',
		typePass	: 'Mot de passe'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Propri챕t챕s du champ cach챕',
		name	: 'Nom',
		value	: 'Valeur'
	},

	// Image Dialog.
	image :
	{
		title		: 'Propri챕t챕s de l\'image',
		titleButton	: 'Propri챕t챕s du bouton image',
		menu		: 'Propri챕t챕s de l\'image',
		infoTab		: 'Informations sur l\'image',
		btnUpload	: 'Envoyer sur le serveur',
		upload		: 'Envoyer',
		alt			: 'Texte de remplacement',
		lockRatio	: 'Conserver les proportions',
		resetSize	: 'Taille d\'origine',
		border		: 'Bordure',
		hSpace		: 'Espacement horizontal',
		vSpace		: 'Espacement vertical',
		alertUrl	: 'Veuillez entrer l\'adresse de l\'image',
		linkTab		: 'Lien',
		button2Img	: 'Voulez-vous transformer le bouton image s챕lectionn챕 en simple image?',
		img2Button	: 'Voulez-vous transformer l\'image en bouton image?',
		urlMissing	: 'L\'adresse source de l\'image est manquante.',
		validateBorder	: 'Bordure doit 챗tre un entier.',
		validateHSpace	: 'HSpace doit 챗tre un entier.',
		validateVSpace	: 'VSpace doit 챗tre un entier.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Propri챕t챕s du Flash',
		propertiesTab	: 'Propri챕t챕s',
		title			: 'Propri챕t챕s du Flash',
		chkPlay			: 'Jouer automatiquement',
		chkLoop			: 'Boucle',
		chkMenu			: 'Activer le menu Flash',
		chkFull			: 'Permettre le plein 챕cran',
 		scale			: 'Echelle',
		scaleAll		: 'Afficher tout',
		scaleNoBorder	: 'Pas de bordure',
		scaleFit		: 'Taille d\'origine',
		access			: 'Acc챔s aux scripts',
		accessAlways	: 'Toujours',
		accessSameDomain: 'M챗me domaine',
		accessNever		: 'Jamais',
		alignAbsBottom	: 'Bas absolu',
		alignAbsMiddle	: 'Milieu absolu',
		alignBaseline	: 'Bas du texte',
		alignTextTop	: 'Haut du texte',
		quality			: 'Qualit챕',
		qualityBest		: 'Meilleure',
		qualityHigh		: 'Haute',
		qualityAutoHigh	: 'Haute Auto',
		qualityMedium	: 'Moyenne',
		qualityAutoLow	: 'Basse Auto',
		qualityLow		: 'Basse',
		windowModeWindow: 'Fen챗tre',
		windowModeOpaque: 'Opaque',
		windowModeTransparent : 'Transparent',
		windowMode		: 'Mode fen챗tre',
		flashvars		: 'Variables du Flash',
		bgcolor			: 'Couleur d\'arri챔re-plan',
		hSpace			: 'Espacement horizontal',
		vSpace			: 'Espacement vertical',
		validateSrc		: 'L\'adresse ne doit pas 챗tre vide.',
		validateHSpace	: 'L\'espacement horizontal doit 챗tre un nombre.',
		validateVSpace	: 'L\'espacement vertical doit 챗tre un nombre.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'V챕rifier l\'orthographe',
		title			: 'V챕rifier l\'orthographe',
		notAvailable	: 'D챕sol챕, le service est indisponible actuellement.',
		errorLoading	: 'Erreur du chargement du service depuis l\'h척te : %s.',
		notInDic		: 'N\'existe pas dans le dictionnaire.',
		changeTo		: 'Modifier pour',
		btnIgnore		: 'Ignorer',
		btnIgnoreAll	: 'Ignorer tout',
		btnReplace		: 'Remplacer',
		btnReplaceAll	: 'Remplacer tout',
		btnUndo			: 'Annuler',
		noSuggestions	: '- Aucune suggestion -',
		progress		: 'V챕rification de l\'orthographe en cours...',
		noMispell		: 'V챕rification de l\'orthographe termin챕e : aucune erreur trouv챕e.',
		noChanges		: 'V챕rification de l\'orthographe termin챕e : Aucun mot corrig챕.',
		oneChange		: 'V챕rification de l\'orthographe termin챕e : Un seul mot corrig챕.',
		manyChanges		: 'V챕rification de l\'orthographe termin챕e : %1 mots corrig챕s.',
		ieSpellDownload	: 'La v챕rification d\'orthographe n\'est pas install챕e. Voulez-vous la t챕l챕charger maintenant?'
	},

	smiley :
	{
		toolbar	: '횋moticones',
		title	: 'Ins챕rer un 챕moticone',
		options : 'Options des 챕moticones'
	},

	elementsPath :
	{
		eleLabel : 'Elements path',
		eleTitle : '%1 챕l챕ments'
	},

	numberedlist	: 'Ins챕rer/Supprimer la liste num챕rot챕e',
	bulletedlist	: 'Ins챕rer/Supprimer la liste 횪 puces',
	indent			: 'Augmenter le retrait (tabulation)',
	outdent			: 'Diminuer le retrait (tabulation)',

	justify :
	{
		left	: 'Aligner 횪 gauche',
		center	: 'Centrer',
		right	: 'Aligner 횪 droite',
		block	: 'Justifier'
	},

	blockquote : 'Citation',

	clipboard :
	{
		title		: 'Coller',
		cutError	: 'Les param챔tres de s챕curit챕 de votre navigateur ne permettent pas 횪 l\'챕diteur d\'ex챕cuter automatiquement l\'op챕ration "couper". Veuillez utiliser le raccourci clavier (Ctrl/Cmd+X).',
		copyError	: 'Les param챔tres de s챕curit챕 de votre navigateur ne permettent pas 횪 l\'챕diteur d\'ex챕cuter automatiquement des op챕rations de copie. Veuillez utiliser le raccourci clavier (Ctrl/Cmd+C).',
		pasteMsg	: 'Veuillez coller le texte dans la zone suivante en utilisant le raccourci clavier (<strong>Ctrl/Cmd+V</strong>) et cliquez sur OK.',
		securityMsg	: 'A cause des param챔tres de s챕curit챕 de votre navigateur, l\'챕diteur n\'est pas en mesure d\'acc챕der directement 횪 vos donn챕es contenues dans le presse-papier. Vous devriez r챕essayer de coller les donn챕es dans la fen챗tre.',
		pasteArea	: 'Coller la zone'
	},

	pastefromword :
	{
		confirmCleanup	: 'Le texte 횪 coller semble provenir de Word. D챕sirez-vous le nettoyer avant de coller?',
		toolbar			: 'Coller depuis Word',
		title			: 'Coller depuis Word',
		error			: 'Il n\'a pas 챕t챕 possible de nettoyer les donn챕es coll챕es 횪 la suite d\'une erreur interne.'
	},

	pasteText :
	{
		button	: 'Coller comme texte sans mise en forme',
		title	: 'Coller comme texte sans mise en forme'
	},

	templates :
	{
		button			: 'Mod챔les',
		title			: 'Contenu des mod챔les',
		options : 'Options des mod챔les',
		insertOption	: 'Remplacer le contenu actuel',
		selectPromptMsg	: 'Veuillez s챕lectionner le mod챔le pour l\'ouvrir dans l\'챕diteur',
		emptyListMsg	: '(Aucun mod챔le disponible)'
	},

	showBlocks : 'Afficher les blocs',

	stylesCombo :
	{
		label		: 'Styles',
		panelTitle	: 'Styles de mise en page',
		panelTitle1	: 'Styles de blocs',
		panelTitle2	: 'Styles en ligne',
		panelTitle3	: 'Styles d\'objet'
	},

	format :
	{
		label		: 'Format',
		panelTitle	: 'Format de paragraphe',

		tag_p		: 'Normal',
		tag_pre		: 'Format챕',
		tag_address	: 'Adresse',
		tag_h1		: 'Titre 1',
		tag_h2		: 'Titre 2',
		tag_h3		: 'Titre 3',
		tag_h4		: 'Titre 4',
		tag_h5		: 'Titre 5',
		tag_h6		: 'Titre 6',
		tag_div		: 'Normal (DIV)'
	},

	div :
	{
		title				: 'Cr챕er un container DIV',
		toolbar				: 'Cr챕er un container DIV',
		cssClassInputLabel	: 'Classe CSS',
		styleSelectLabel	: 'Style',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'Code de langue',
		inlineStyleInputLabel	: 'Style en ligne',
		advisoryTitleInputLabel	: 'Advisory Title',
		langDirLabel		: 'Sens d\'챕criture',
		langDirLTRLabel		: 'Gauche 횪 droite (LTR)',
		langDirRTLLabel		: 'Droite 횪 gauche (RTL)',
		edit				: '횋diter la DIV',
		remove				: 'Enlever la DIV'
  	},

	iframe :
	{
		title		: 'Propri챕t챕s de la IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Veuillez entrer l\'adresse du lien de la IFrame',
		scrolling	: 'Permettre 횪 la barre de d챕filement',
		border		: 'Afficher une bordure de la IFrame'
	},

	font :
	{
		label		: 'Police',
		voiceLabel	: 'Police',
		panelTitle	: 'Style de police'
	},

	fontSize :
	{
		label		: 'Taille',
		voiceLabel	: 'Taille de police',
		panelTitle	: 'Taille de police'
	},

	colorButton :
	{
		textColorTitle	: 'Couleur de texte',
		bgColorTitle	: 'Couleur d\'arri챔re plan',
		panelTitle		: 'Couleurs',
		auto			: 'Automatique',
		more			: 'Plus de couleurs...'
	},

	colors :
	{
		'000' : 'Noir',
		'800000' : 'Marron',
		'8B4513' : 'Brun moyen',
		'2F4F4F' : 'Vert sombre',
		'008080' : 'Canard',
		'000080' : 'Bleu marine',
		'4B0082' : 'Indigo',
		'696969' : 'Gris fonc챕',
		'B22222' : 'Rouge brique',
		'A52A2A' : 'Brun',
		'DAA520' : 'Or terni',
		'006400' : 'Vert fonc챕',
		'40E0D0' : 'Turquoise',
		'0000CD' : 'Bleu royal',
		'800080' : 'Pourpre',
		'808080' : 'Gris',
		'F00' : 'Rouge',
		'FF8C00' : 'Orange fonc챕',
		'FFD700' : 'Or',
		'008000' : 'Vert',
		'0FF' : 'Cyan',
		'00F' : 'Bleu',
		'EE82EE' : 'Violet',
		'A9A9A9' : 'Gris moyen',
		'FFA07A' : 'Saumon',
		'FFA500' : 'Orange',
		'FFFF00' : 'Jaune',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Turquoise clair',
		'ADD8E6' : 'Bleu clair',
		'DDA0DD' : 'Prune',
		'D3D3D3' : 'Gris clair',
		'FFF0F5' : 'Fard Lavande',
		'FAEBD7' : 'Blanc antique',
		'FFFFE0' : 'Jaune clair',
		'F0FFF0' : 'Honeydew',
		'F0FFFF' : 'Azur',
		'F0F8FF' : 'Bleu Alice',
		'E6E6FA' : 'Lavande',
		'FFF' : 'Blanc'
	},

	scayt :
	{
		title			: 'V챕rification de l\'Orthographe en Cours de Frappe (SCAYT)',
		opera_title		: 'Non support챕 par Opera',
		enable			: 'Activer SCAYT',
		disable			: 'D챕sactiver SCAYT',
		about			: 'A propos de SCAYT',
		toggle			: 'Activer/D챕sactiver SCAYT',
		options			: 'Options',
		langs			: 'Langues',
		moreSuggestions	: 'Plus de suggestions',
		ignore			: 'Ignorer',
		ignoreAll		: 'Ignorer Tout',
		addWord			: 'Ajouter le mot',
		emptyDic		: 'Le nom du dictionnaire ne devrait pas 챗tre vide.',
		noSuggestions	: 'Aucune suggestion',
		optionsTab		: 'Options',
		allCaps			: 'Ignorer les mots enti챔rement en majuscules',
		ignoreDomainNames : 'Ignorer les noms de domaines',
		mixedCase		: 'Ignorer les mots 횪 casse multiple',
		mixedWithDigits	: 'Ignorer les mots contenant des chiffres',

		languagesTab	: 'Langues',

		dictionariesTab	: 'Dictionnaires',
		dic_field_name	: 'Nom du dictionnaire',
		dic_create		: 'Cr챕er',
		dic_restore		: 'Restaurer',
		dic_delete		: 'Effacer',
		dic_rename		: 'Renommer',
		dic_info		: 'Initialement, le dictionnaire de l\'utilisateur est stock챕 dans un cookie. Cependant, les cookies sont limit챕s en taille. Quand le dictionnaire atteint une taille qu\'il n\'est plus possible de stocker dans un cookie, il peut alors 챗tre stock챕 sur nos serveurs. Afin de stocker votre dictionnaire personnel sur nos serveurs, vous devez sp챕cifier un nom pour ce dictionnaire. Si vous avez d챕j횪 un dictionnaire stock챕, merci de taper son nom puis cliquer sur Restaurer pour le r챕cup챕rer.',

		aboutTab		: '� propos de'
	},

	about :
	{
		title		: '� propos de CKEditor',
		dlgTitle	: '� propos de CKEditor',
		help	: 'Consulter $1 pour l\'aide.',
		userGuide : 'Guide de l\'utilisateur CKEditor en anglais',
		moreInfo	: 'Pour les informations de licence, veuillez visiter notre site web:',
		copy		: 'Copyright &copy; $1. Tous droits r챕serv챕s.'
	},

	maximize : 'Agrandir',
	minimize : 'Minimiser',

	fakeobjects :
	{
		anchor		: 'Ancre',
		flash		: 'Animation Flash',
		iframe		: 'IFrame',
		hiddenfield	: 'Champ cach챕',
		unknown		: 'Objet inconnu'
	},

	resize : 'D챕placer pour modifier la taille',

	colordialog :
	{
		title		: 'Choisir une couleur',
		options	:	'Option des couleurs',
		highlight	: 'D챕tails',
		selected	: 'Couleur choisie',
		clear		: 'Effacer'
	},

	toolbarCollapse	: 'Enrouler la barre d\'outils',
	toolbarExpand	: 'D챕rouler la barre d\'outils',

	toolbarGroups :
	{
		document : 'Document',
		clipboard : 'Presse-papier/D챕faire',
		editing : 'Editer',
		forms : 'Formulaires',
		basicstyles : 'Styles de base',
		paragraph : 'Paragraphe',
		links : 'Liens',
		insert : 'Ins챕rer',
		styles : 'Styles',
		colors : 'Couleurs',
		tools : 'Outils'
	},

	bidi :
	{
		ltr : 'Direction du texte de la gauche vers la droite',
		rtl : 'Direction du texte de la droite vers la gauche'
	},

	docprops :
	{
		label : 'Propri챕t챕s du document',
		title : 'Propri챕t챕s du document',
		design : 'Design',
		meta : 'M챕tadonn챕es',
		chooseColor : 'Choisissez',
		other : '<autre>',
		docTitle :	'Titre de la page',
		charset : 	'Encodage de caract챔re',
		charsetOther : 'Autre encodage de caract챔re',
		charsetASCII : 'ASCII',
		charsetCE : 'Europe Centrale',
		charsetCT : 'Chinois Traditionnel (Big5)',
		charsetCR : 'Cyrillique',
		charsetGR : 'Grec',
		charsetJP : 'Japonais',
		charsetKR : 'Cor챕en',
		charsetTR : 'Turc',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Occidental',
		docType : 'Type de document',
		docTypeOther : 'Autre type de document',
		xhtmlDec : 'Inclure les d챕clarations XHTML',
		bgColor : 'Couleur de fond',
		bgImage : 'Image de fond',
		bgFixed : 'Image fixe sans d챕filement',
		txtColor : 'Couleur de texte',
		margin : 'Marges',
		marginTop : 'Haut',
		marginLeft : 'Gauche',
		marginRight : 'Droite',
		marginBottom : 'Bas',
		metaKeywords : 'Mots-cl챕s (s챕par챕s par des virgules)',
		metaDescription : 'Description',
		metaAuthor : 'Auteur',
		metaCopyright : 'Copyright',
		previewHtml : '<p>Ceci est un <strong>texte d\'exemple</strong>. Vous utilisez <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
