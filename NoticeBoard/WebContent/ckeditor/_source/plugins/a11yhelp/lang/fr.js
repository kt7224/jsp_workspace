/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'fr',
{
	accessibilityHelp :
	{
		title : 'Instructions pour l\'accessibilit챕',
		contents : 'Contenu de l\'aide. Pour fermer ce dialogue, appuyez sur la touche ESC (Echappement).',
		legend :
		[
			{
				name : 'G챕n챕ral',
				items :
						[
							{
								name : 'Barre d\'outils de l\'챕diteur',
								legend:
									'Appuyer sur ${toolbarFocus} pour acc챕der 횪 la barre d\'outils. Se d챕placer vers les groupes suivant ou pr챕c챕dent de la barre d\'outil avec les touches TAB et SHIFT-TAB. Se d챕placer vers les boutons suivant ou pr챕c챕dent de la barre d\'outils avec les touches FLECHE DROITE et FLECHE GAUCHE. Appuyer sur la barre d\'espace ou la touche ENTRER pour activer le bouton de barre d\'outils.'
							},

							{
								name : 'Dialogue de l챕diteur',
								legend :
									'A l\'int챕rieur d\'un dialogue, appuyer sur la touche TAB pour naviguer jusqu\'au champ de dalogue suivant, appuyez sur les touches SHIFT + TAB pour revenir au champ pr챕c챕dent, appuyez sur la touche ENTRER pour soumettre le dialogue, appuyer sur la touche ESC pour annuler le dialogue. Pour les dialogues avec plusieurs pages d\'onglets, appuyer sur ALT + F10 pour naviguer jusqu\'횪 la liste des onglets. Puis se d챕placer vers l\'onglet suivant avec la touche TAB ou FLECHE DROITE. Se d챕placer vers l\'onglet pr챕c챕dent avec les touches SHIFT + TAB ou FLECHE GAUCHE. Appuyer sur la barre d\'espace ou la touche ENTRER pour s챕lectionner la page de l\'onglet.'
							},

							{
								name : 'Menu contextuel de l\'챕diteur',
								legend :
									'Appuyer sur ${contextMenu} ou entrer le RACCOURCI CLAVIER pour ouvrir le menu contextuel. Puis se d챕placer vers l\'option suivante du menu avec les touches TAB ou FLECHE BAS. Se d챕placer vers l\'option pr챕c챕dente avec les touches  SHIFT+TAB ou FLECHE HAUT. appuyer sur la BARRE D\'ESPACE ou la touche ENTREE pour s챕lectionner l\'option du menu. Oovrir le sous-menu de l\'option courante avec la BARRE D\'ESPACE ou les touches ENTREE ou FLECHE DROITE. Revenir 횪 l\'챕l챕ment de menu parent avec les touches ESC ou FLECHE GAUCHE. Fermer le menu contextuel avec ESC.'
							},

							{
								name : 'Zone de liste en menu d챕roulant de l\'챕diteur',
								legend :
									'A l\'int챕rieur d\'une liste en menu d챕roulant, se d챕placer vers l\'챕l챕ment suivant de la liste avec les touches TAB ou FLECHE BAS. Se d챕placer vers l\'챕l챕ment pr챕c챕dent de la liste avec les touches SHIFT + TAB ou FLECHE HAUT. Appuyer sur la BARRE D\'ESPACE ou sur ENTREE pour s챕lectionner l\'option dans la liste. Appuyer sur ESC pour fermer le menu d챕roulant.'
							},

							{
								name : 'Barre d\'emplacement des 챕l챕ments de l챕diteur',
								legend :
									'Appuyer sur ${elementsPathFocus} pour naviguer vers la barre d\'emplacement des 챕l챕ments de l챕diteur. Se d챕placer vers le bouton d\'챕l챕ment suivant avec les touches TAB ou FLECHE DROITE. Se d챕placer vers le bouton d\'챕l챕ment pr챕c챕dent avec les touches SHIFT+TAB ou FLECHE GAUCHE. Appuyer sur la BARRE D\'ESPACE ou sur ENTREE pour s챕lectionner l\'챕l챕ment dans l\'챕diteur.'
							}
						]
			},
			{
				name : 'Commandes',
				items :
						[
							{
								name : ' Commande d챕faire',
								legend : 'Appuyer sur ${undo}'
							},
							{
								name : ' Commande refaire',
								legend : 'Appuyer sur ${redo}'
							},
							{
								name : ' Commande gras',
								legend : 'Appuyer sur ${bold}'
							},
							{
								name : ' Commande italique',
								legend : 'Appuyer sur ${italic}'
							},
							{
								name : ' Commande soulign챕',
								legend : 'Appuyer sur ${underline}'
							},
							{
								name : ' Commande lien',
								legend : 'Appuyer sur ${link}'
							},
							{
								name : ' Commande enrouler la barre d\'outils',
								legend : 'Appuyer sur ${toolbarCollapse}'
							},
							{
								name : ' Aide Accessibilit챕',
								legend : 'Appuyer sur ${a11yHelp}'
							}
						]
			}
		]
	}
});
