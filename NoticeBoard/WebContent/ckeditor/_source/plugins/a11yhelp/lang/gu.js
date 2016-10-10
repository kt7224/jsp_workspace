/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'gu',
{
	accessibilityHelp :
	{
		title : '夕뤲첈奭띭첈奭띭し奭뉋が夕욈げ夕욈첒奭� 夕ⓣ� 夕듀た夕쀠い奭�',
		contents : '夕밝쳡夕꿋쳨夕�. 夕� 夕о챴夕� 夕뺖ぐ夕듀ぞ ESC 夕╆が夕약さ奭�.',
		legend :
		[
			{
				name : '夕쒉え夕겯げ',
				items :
						[
							{
								name : '夕뤲ぁ夕욈첒夕� 夕잀쳜夕꿋が夕약ぐ',
								legend:
									'Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button.'  // MISSING
							},

							{
								name : '夕뤲ぁ夕욈첒夕� 夕□ぞ夕�夕꿋쳦夕�',
								legend :
									'Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page.'  // MISSING
							},

							{
								name : 'Editor Context Menu', // MISSING
								legend :
									'Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC.'  // MISSING
							},

							{
								name : 'Editor List Box', // MISSING
								legend :
									'Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box.'  // MISSING
							},

							{
								name : 'Editor Element Path Bar', // MISSING
								legend :
									'Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor.'  // MISSING
							}
						]
			},
			{
				name : '夕뺖ぎ夕약챴夕□じ',
				items :
						[
							{
								name : '夕끶え奭띭ぁ奭곟챴 夕뺖ぎ夕약챴夕�',
								legend : '$ 夕╆が夕약さ奭� {undo}'
							},
							{
								name : '夕ムぐ奭� 夕뺖ぐ奭� 夕뺖ぎ夕약챴夕�',
								legend : '$ 夕╆が夕약さ奭� {redo}'
							},
							{
								name : '夕о쳦夕꿋쳨夕╆え奭� 夕뺖ぎ夕약챴夕�',
								legend : '$ 夕╆が夕약さ奭� {bold}'
							},
							{
								name : ' Italic command', // MISSING
								legend : 'Press ${italic}' // MISSING
							},
							{
								name : ' Underline command', // MISSING
								legend : 'Press ${underline}' // MISSING
							},
							{
								name : ' Link command', // MISSING
								legend : 'Press ${link}' // MISSING
							},
							{
								name : ' Toolbar Collapse command', // MISSING
								legend : 'Press ${toolbarCollapse}' // MISSING
							},
							{
								name : ' Accessibility Help', // MISSING
								legend : 'Press ${a11yHelp}' // MISSING
							}
						]
			}
		]
	}
});
