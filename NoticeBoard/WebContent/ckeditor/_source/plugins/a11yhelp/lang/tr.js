/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'tr',
{
	accessibilityHelp :
	{
		title : 'Eri힊ilebilirlik Talimatlar캇',
		contents : 'Yard캇m i챌eri휓i. Bu pencereyi kapatmak i챌in ESC tu힊una bas캇n.',
		legend :
		[
			{
				name : 'Genel',
				items :
						[
							{
								name : 'Ara챌 횉ubu휓u Edit철r체',
								legend:
									'Ara챌 챌ubu휓unda gezinmek i챌in ${toolbarFocus} bas캇n. TAB ve SHIFT-TAB ile 철nceki ve sonraki ara챌 챌ubu휓u grubuna ta힊캇y캇n. SA휒 OK veya SOL OK ile 철nceki ve sonraki bir ara챌 챌ubu휓u d체휓mesini hareket ettirin. SPACE tu힊una bas캇n veya ara챌 챌ubu휓u d체휓mesini etkinle힊tirmek i챌in ENTER tu힊na bas캇n.'
							},

							{
								name : 'Dialog Edit철r체',
								legend :
									'Dialog penceresi i챌inde, sonraki ileti힊im alan캇na gitmek i챌in SEKME tu힊una bas캇n, 철nceki alana ge챌mek i챌in SHIFT + TAB tu힊una bas캇n, pencereyi g철ndermek i챌in ENTER tu힊una bas캇n, dialog penceresini iptal etmek i챌in ESC tu힊una bas캇n. Birden 챌ok sekme sayfalar캇 olan diyaloglar캇n, sekme listesine gitmek i챌in ALT + F10 tu힊lar캇na bas캇n. Sonra TAB veya SA휒 OK sonraki sekmeye ta힊캇y캇n. SHIFT + TAB veya SOL OK ile 철nceki sekmeye ge챌in. Sekme sayfay캇 se챌mek i챌in SPACE veya ENTER tu힊una bas캇n.'
							},

							{
								name : '캅챌erik Men체 Edit철r체',
								legend :
									'캅챌erik men체s체n체 a챌mak i챌in ${contextMenu} veya UYGULAMA TU힇U\'na bas캇n. Daha sonra SEKME veya A힇A휒I OK ile bir sonraki men체 se챌ene휓i ta힊캇y캇n. SHIFT + TAB veya YUKARI OK ile 철nceki se챌ene휓e gider. Men체 se챌ene휓ini se챌mek i챌in SPACE veya ENTER tu힊una bas캇n. Se챌ili se챌ene휓in alt men체s체n체 SPACE ya da ENTER veya SA휒 OK a챌캇n. 횥st men체 철휓esini ge챌mek i챌in ESC veya SOL OK ile geri d철n체n. ESC ile ba휓lam men체s체n체 kapat캇n.'
							},

							{
								name : 'Liste Kutusu Edit철r체',
								legend :
									'Liste kutusu i챌inde, bir sonraki liste 철휓esine SEKME VEYA A힇A휒I OK ile ta힊캇y캇n. SHIFT + TAB veya YUKARI 철nceki liste 철휓esi ta힊캇y캇n. Liste se챌ene휓i se챌mek i챌in SPACE veya ENTER tu힊una bas캇n. Liste kutusunu kapatmak i챌in ESC tu힊una bas캇n.'
							},

							{
								name : 'Element Yol 횉ubu휓u Edit철r체',
								legend :
									'Elementlerin yol 챌ubu휓unda gezinmek i챌in ${ElementsPathFocus} bas캇n. SEKME veya SA휒 OK ile sonraki element d체휓mesine ta힊캇y캇n. SHIFT + TAB veya SOL OK 철nceki d체휓meye hareket ettirin. Edit철r i챌indeki elementi se챌mek i챌in ENTER veya SPACE tu힊una bas캇n.'
							}
						]
			},
			{
				name : 'Komutlar',
				items :
						[
							{
								name : 'Komutu geri al',
								legend : '${undo} bas캇n'
							},
							{
								name : ' Tekrar komutu uygula',
								legend : '${redo} bas캇n'
							},
							{
								name : ' Kal캇n komut',
								legend : '${bold} bas캇n'
							},
							{
								name : ' 캅talik komutu',
								legend : '${italic} bas캇n'
							},
							{
								name : ' Alttan 챌izgi komutu',
								legend : '${underline} bas캇n'
							},
							{
								name : ' Ba휓lant캇 komutu',
								legend : '${link} bas캇n'
							},
							{
								name : ' Ara챌 챌ubu휓u Toplama komutu',
								legend : '${toolbarCollapse} bas캇n'
							},
							{
								name : 'Eri힊ilebilirlik Yard캇m캇',
								legend : '${a11yHelp} bas캇n'
							}
						]
			}
		]
	}
});
