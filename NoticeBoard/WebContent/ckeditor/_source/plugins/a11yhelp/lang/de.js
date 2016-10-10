/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'de',
{
	accessibilityHelp :
	{
		title : 'Barrierefreiheitinformationen',
		contents : 'Hilfeinhalt. Um den Dialog zu schliessen die Taste \'ESC\' dr체cken.',
		legend :
		[
			{
				name : 'Allgemein',
				items :
						[
							{
								name : 'Editor Symbolleiste',
								legend:
									'Dr체cken Sie ${toolbarFocus} auf der Symbolleiste. Gehen Sie zur n채chsten oder vorherigen Symbolleistengruppe mit TAB und SHIFT-TAB. Gehen Sie zur n채chsten oder vorherigen Symbolleiste auf die Schaltfl채che mit dem RECHTS- oder LINKS-Pfeil. Dr체cken Sie die Leertaste oder Eingabetaste, um die Schaltfl채che in der Symbolleiste aktivieren.'
							},

							{
								name : 'Editor Dialog',
								legend :
									'Innerhalb des Dialogs dr체cken Sie TAB um zum n채chsten Dialogfeld zu gelangen, dr체cken Sie SHIFT-TAG um zum vorherigen Feld zu wechseln, dr체cken Sie ENTER um den Dialog abzusenden und ESC um den Dialog zu abzubrechen. Um zwischen den Reitern innerhalb eines Dialogs zu wechseln dr체cken sie ALT-F10. Um zum n채chsten Reiter zu gelangen k철nnen Sie TAB oder die rechte Pfeiltaste. Zur체ck gelangt man mit SHIFT-TAB oder der linken Pfeiltaste. Mit der Leertaste oder Enter kann man den Reiter ausw채hlen.'
							},

							{
								name : 'Editor Kontextmen체',
								legend :
									'D체rcken Sie ${contextMenu} oder die Anwendungstaste um das Kontextmen체 zu 철ffnen. Man kann die Pfeiltasten zum Wechsel benutzen. Mit der Leertaste oder der Enter-Taste kann man den Men체punkt aufrufen. Schliessen Sie das Kontextmen체 mit der ESC-Taste.'
							},

							{
								name : 'Editor Listen',
								legend :
									'Innerhalb einer Listenbox kann man mit der TAB-Taste oder den Pfeilrunter-Taste den n채chsten Men체eintrag w채hlen. Mit der Shift-TAB Tastenkombination oder der Pfeilhoch-Taste gelangt man zum vorherigen Men체punkt. Mit der Leertaste oder Enter kann man den Men체punkt ausw채hlen. Dr체cken Sie ESC zum Verlassen des Men체s.'
							},

							{
								name : 'Editor Elementpfadleiste',
								legend :
									'Dr체cken Sie ${elementsPathFocus} um sich durch die Pfadleiste zu bewegen. Um zum n채chsten Element zu gelangen dr체cken Sie TAB oder die Pfeilrechts-Taste. Zum vorherigen Element gelangen Sie mit der SHIFT-TAB oder der Pfeillinks-Taste. Dr체cken Sie die Leertaste oder Enter um das Element auszuw채hlen.'
							}
						]
			},
			{
				name : 'Befehle',
				items :
						[
							{
								name : 'Wiederholen Befehl',
								legend : 'Dr체cken Sie ${undo}'
							},
							{
								name : 'R체ckg채ngig Befehl',
								legend : 'Dr체cken Sie ${redo}'
							},
							{
								name : 'Fettschrift Befehl',
								legend : 'Dr체cken Sie ${bold}'
							},
							{
								name : 'Italic Befehl',
								legend : 'Dr체cken Sie ${italic}'
							},
							{
								name : 'Unterstreichung Befehl',
								legend : 'Dr체cken Sie ${underline}'
							},
							{
								name : 'Link Befehl',
								legend : 'Dr체cken Sie ${link}'
							},
							{
								name : 'Symbolleiste zuammenklappen Befehl',
								legend : 'Dr체cken Sie ${toolbarCollapse}'
							},
							{
								name : 'Eingabehilfen',
								legend : 'Dr체cken Sie ${a11yHelp}'
							}
						]
			}
		]
	}
});
