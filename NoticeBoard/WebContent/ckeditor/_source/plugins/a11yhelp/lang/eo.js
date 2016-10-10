/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'eo',
{
	accessibilityHelp :
	{
		title : 'Uzindikoj pri atingeblo',
		contents : 'Helpilenhavo. Por fermi tiun dialogon, premu la ESKAPAN klavon.',
		legend :
		[
			{
				name : '휏enerala캔oj',
				items :
						[
							{
								name : 'Ilbreto de la redaktilo',
								legend:
									'Premu ${toolbarFocus} por atingi la ilbreton. Movi휐u al la sekva a큼 anta큼a grupoj de la ilbreto per la klavoj TABA kaj MAJUSKLIGA-TABA. Movi휐u al la sekva a큼 anta큼a butonoj de la ilbreto per la klavoj SAGO DEKSTREN kaj SAGO MALDEKSTREN. Premu la SPACETklavon a큼 la ENENklavon por aktivigi la ilbretbutonon.'
							},

							{
								name : 'Redaktildialogo',
								legend :
									'En dialogo, premu la TABAN klavon por navigi al la sekva dialogkampo, premu la MAJUSKLIGAN + TABAN klavojn por reveni al la anta큼a kampo, premu la ENENklavon por sendi la dialogon, premu la ESKAPAN klavon por nuligi la dialogon. Por dialogoj kun pluraj retpa휐oj sub langetoj, premu ALT + F10 por navigi al la langetlisto. Poste movi휐u al la sekva langeto per la klavo TABA a큼 SAGO DEKSTREN. Movi휐u al la anta큼a langeto per la klavoj MAJUSKLIGA + TABA a큼  SAGO MALDEKSTREN. Premu la SPACETklavon a큼 la ENENklavon por selekti la langetretpa휐on.'
							},

							{
								name : 'Kunteksta menuo de la redaktilo',
								legend :
									'Premu ${contextMenu} a큼 entajpu la KLAVKOMBINA캑ON por malfermi la kuntekstan menuon. Poste movi휐u al la sekva opcio de la menuo per la klavoj TABA a큼 SAGO SUBEN. Movi휐u al la anta큼a opcio per la klavoj MAJUSKLGA + TABA a큼 SAGO SUPREN. Premu la SPACETklavon a큼 ENENklavon por selekti la menuopcion. Malfermu la submenuon de la kuranta opcio per la SPACETklavo a큼 la ENENklavo a큼 la SAGO DEKSTREN. Revenu al la elemento de la patra menuo per la klavoj ESKAPA a큼 SAGO MALDEKSTREN. Fermu la kuntekstan menuon per la ESKAPA klavo.'
							},

							{
								name : 'Fallisto de la redaktilo',
								legend :
									'En fallisto, movi휐u al la sekva listelemento per la klavoj TABA a큼 SAGO SUBEN. Movi휐u al la anta큼a listelemento per la klavoj MAJUSKLIGA + TABA a큼 SAGO SUPREN. Premu la SPACETklavon a큼 ENENklavon por selekti la opcion en la listo. Premu la ESKAPAN klavon por fermi la falmenuon.'
							},

							{
								name : 'Breto indikanta la vojon al la redaktilelementoj',
								legend :
									'Premu ${elementsPathFocus} por navigi al la breto indikanta la vojon al la redaktilelementoj. Movi휐u al la butono de la sekva elemento per la klavoj TABA a큼 SAGO DEKSTREN. Movi휐u al la butono de la anta큼a elemento per la klavoj MAJUSKLIGA + TABA a큼 SAGO MALDEKSTREN. Premu la SPACETklavon a큼 ENENklavon por selekti la elementon en la redaktilo.'
							}
						]
			},
			{
				name : 'Komandoj',
				items :
						[
							{
								name : 'Komando malfari',
								legend : 'Premu ${undo}'
							},
							{
								name : 'Komando refari',
								legend : 'Premu ${redo}'
							},
							{
								name : 'Komando grasa',
								legend : 'Premu ${bold}'
							},
							{
								name : 'Komando kursiva',
								legend : 'Premu ${italic}'
							},
							{
								name : 'Komando substreki',
								legend : 'Premu ${underline}'
							},
							{
								name : 'Komando ligilo',
								legend : 'Premu ${link}'
							},
							{
								name : 'Komando faldi la ilbreton',
								legend : 'Premu ${toolbarCollapse}'
							},
							{
								name : 'Helpilo pri atingeblo',
								legend : 'Premu ${a11yHelp}'
							}
						]
			}
		]
	}
});
