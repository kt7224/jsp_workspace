/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'no',
{
	accessibilityHelp :
	{
		title : 'Instruksjoner for tilgjengelighet',
		contents : 'Innhold for hjelp. Trykk ESC for 책 lukke denne dialogen.',
		legend :
		[
			{
				name : 'Generelt',
				items :
						[
							{
								name : 'Verkt첩ylinje for editor',
								legend:
									'Trykk ${toolbarFocus} for 책 navigere til verkt첩ylinjen. Flytt til neste og forrige verkt첩ylinjegruppe med TAB og SHIFT-TAB. Flytt til neste og forrige verkt첩ylinjeknapp med H횠YRE PILTAST og VENSTRE PILTAST. Trykk MELLOMROM eller ENTER for 책 aktivere verkt첩ylinjeknappen.'
							},

							{
								name : 'Dialog for editor',
								legend :
									'Mens du er i en dialog, trykk TAB for 책 navigere til neste dialogfelt, press SHIFT + TAB for 책 flytte til forrige felt, trykk ENTER for 책 akseptere dialogen, trykk ESC for 책 avbryte dialogen. For dialoger med flere faner, trykk ALT + F10 for 책 navigere til listen over faner. G책 til neste fane med TAB eller H횠YRE PILTAST. G책 til forrige fane med SHIFT + TAB eller VENSTRE PILTAST. Trykk MELLOMROM eller ENTER for 책 velge fanen.'
							},

							{
								name : 'Kontekstmeny for editor',
								legend :
									'Trykk ${contextMenu} eller MENYKNAPP for 책 책pne kontekstmeny. G책 til neste alternativ i menyen med TAB eller PILTAST NED. G책 til forrige alternativ med SHIFT+TAB eller PILTAST OPP. Trykk MELLOMROM eller ENTER for 책 velge menyalternativet. 횇pne undermenyen p책 valgt alternativ med MELLOMROM eller ENTER eller H횠YRE PILTAST. G책 tilbake til overordnet menyelement med ESC eller VENSTRE PILTAST. Lukk kontekstmenyen med ESC.'
							},

							{
								name : 'Listeboks for editor',
								legend :
									'I en listeboks, g책 til neste alternativ i listen med TAB eller PILTAST NED. G책 til forrige alternativ i listen med SHIFT + TAB eller PILTAST OPP. Trykk MELLOMROM eller ENTER for 책 velge alternativet i listen. Trykk ESC for 책 lukke listeboksen.'
							},

							{
								name : 'Verkt첩ylinje for elementsti',
								legend :
									'Trykk ${elementsPathFocus} for 책 navigere til verkt첩ylinjen som viser elementsti. G책 til neste elementknapp med TAB eller H횠YRE PILTAST. G책 til forrige elementknapp med SHIFT+TAB eller VENSTRE PILTAST. Trykk MELLOMROM eller ENTER for 책 velge elementet i editoren.'
							}
						]
			},
			{
				name : 'Kommandoer',
				items :
						[
							{
								name : 'Angre',
								legend : 'Trykk ${undo}'
							},
							{
								name : 'Gj첩r om',
								legend : 'Trykk ${redo}'
							},
							{
								name : 'Fet tekst',
								legend : 'Trykk ${bold}'
							},
							{
								name : 'Kursiv tekst',
								legend : 'Trykk ${italic}'
							},
							{
								name : 'Understreking',
								legend : 'Trykk ${underline}'
							},
							{
								name : 'Link',
								legend : 'Trykk ${link}'
							},
							{
								name : 'Skjul verkt첩ylinje',
								legend : 'Trykk ${toolbarCollapse}'
							},
							{
								name : 'Hjelp for tilgjengelighet',
								legend : 'Trykk ${a11yHelp}'
							}
						]
			}
		]
	}
});
