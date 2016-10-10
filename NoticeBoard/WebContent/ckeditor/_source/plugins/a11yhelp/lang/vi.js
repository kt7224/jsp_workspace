/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'vi',
{
	accessibilityHelp :
	{
		title : 'Accessibility Instructions', // MISSING
		contents : 'N沼셢 dung H沼� tr沼�. Nh梳쩸 ESC 휃沼� 휃처ng h沼셮 tho梳죍.',
		legend :
		[
			{
				name : 'Chung',
				items :
						[
							{
								name : 'Thanh c척ng c沼� so梳죒 th',
								legend:
									'Nh梳쩸 ${toolbarFocus} 휃沼� 휃i沼걏 h튼沼썀g 휃梳퓆 thanh c척ng c沼�. Nh梳쩸 TAB v횪 SHIFT-TAB 휃沼� chuy沼긪 휃梳퓆 nh처m thanh c척ng c沼� kh찼c. Nh梳쩸 M큠I T횎N PH梳줚 ho梳톍 M큠I T횎N TR횁I 휃沼� chuy沼긪 sang n첬t kh찼c tr챗n thanh c척ng c沼�. Nh梳쩸 PH횒M C횁CH ho梳톍 ENTER 휃沼� k챠ch ho梳죜 n첬t tr챗n thanh c척ng c.'
							},

							{
								name : 'H沼셮 tho梳죍 Bi챗n t',
								legend :
									'Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page.'  // MISSING
							},

							{
								name : 'Tr챙nh 휃퉤n Ng沼� c梳즢h cB沼� so梳죒 th梳즣',
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
				name : 'Commands', // MISSING
				items :
						[
							{
								name : ' Undo command', // MISSING
								legend : 'Press ${undo}' // MISSING
							},
							{
								name : ' Redo command', // MISSING
								legend : 'Press ${redo}' // MISSING
							},
							{
								name : ' Bold command', // MISSING
								legend : 'Press ${bold}' // MISSING
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
