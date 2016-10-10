/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'fi',
{
	accessibilityHelp :
	{
		title : 'Saavutettavuus ohjeet',
		contents : 'Ohjeen sis채ll철t. Sulkeaksesi t채m채n dialogin paina ESC.',
		legend :
		[
			{
				name : 'Yleinen',
				items :
						[
							{
								name : 'Editorin ty철kalupalkki',
								legend:
									'Paina ${toolbarFocus} siirty채ksesi ty철kalupalkkiin. Siirry seuraavaan ja edelliseen ty철kalupalkin ryhm채채n TAB ja SHIFT-TAB n채pp채imill채. Siirry seuraavaan ja edelliseen ty철kalupainikkeeseen k채ytt채m채ll채 NUOLI OIKEALLE tai NUOLI VASEMMALLE n채pp채imill채. Paina V횆LILY횜NTI tai ENTER n채pp채int채 aktivoidaksesi ty철kalupainikkeen.'
							},

							{
								name : 'Editorin dialogi',
								legend :
									'Dialogin sis채ll채, painamalla TAB siirryt seuraavaan dialogin kentt채채n, painamalla SHIFT+TAB siirryt aiempaan kentt채채n, painamalla ENTER l채het채t dialogin, painamalla ESC peruutat dialogin. Dialogeille joissa on useita v채lilehti채, paina ALT+F10 siirty채ksesi v채lillehtilistaan. Siirty채ksesi seuraavaan v채lilehteen paina TAB tai NUOLI OIKEALLE. Siirry edelliseen v채lilehteen painamalla SHIFT+TAB tai nuoli vasemmalle. Paina V횆LILY횜NTI tai ENTER valitaksesi v채lilehden.'
							},

							{
								name : 'Editorin oheisvalikko',
								legend :
									'Paina ${contextMenu} tai SOVELLUSPAINIKETTA avataksesi oheisvalikon. Liiku seuraavaan valikon vaihtoehtoon TAB tai NUOLI ALAS n채pp채imill채. Siirry edelliseen vaihtoehtoon SHIFT+TAB tai NUOLI YL횜S n채pp채imill채. Paina V횆LILY횜NTI tai ENTER valitaksesi valikon kohdan. Avataksesi nykyisen kohdan alivalikon paina V횆LILY횜NTI tai ENTER tai NUOLI OIKEALLE painiketta. Siirty채ksesi takaisin valikon ylemm채lle tasolle paina ESC tai NUOLI vasemmalle. Oheisvalikko suljetaan ESC painikkeella.'
							},

							{
								name : 'Editorin listalaatikko',
								legend :
									'Listalaatikon sis채ll채 siirry seuraavaan listan kohtaan TAB tai NUOLI ALAS painikkeilla. Siirry edelliseen listan kohtaan SHIFT+TAB tai NUOLI YL횜S painikkeilla. Paina V횆LILY횜NTI tai ENTER valitaksesi listan vaihtoehdon. Paina ESC sulkeaksesi listalaatikon.'
							},

							{
								name : 'Editorin elementtipolun palkki',
								legend :
									'Paina ${elementsPathFocus} siirty채ksesi elementtipolun palkkiin. Siirry seuraavaan elementtipainikkeeseen TAB tai NUOLI OIKEALLE painikkeilla. Siirry aiempaan painikkeeseen SHIFT+TAB tai NUOLI VASEMMALLE painikkeilla. Paina V횆LILY횜NTI tai ENTER valitaksesi elementin editorissa.'
							}
						]
			},
			{
				name : 'Komennot',
				items :
						[
							{
								name : 'Peruuta komento',
								legend : 'Paina ${undo}'
							},
							{
								name : 'Tee uudelleen komento',
								legend : 'Paina ${redo}'
							},
							{
								name : 'Lihavoi komento',
								legend : 'Paina ${bold}'
							},
							{
								name : 'Kursivoi komento',
								legend : 'Paina ${italic}'
							},
							{
								name : 'Alleviivaa komento',
								legend : 'Paina ${underline}'
							},
							{
								name : 'Linkki komento',
								legend : 'Paina ${link}'
							},
							{
								name : 'Pienenn채 ty철kalupalkki komento',
								legend : 'Paina ${toolbarCollapse}'
							},
							{
								name : 'Saavutettavuus ohjeet',
								legend : 'Paina ${a11yHelp}'
							}
						]
			}
		]
	}
});
