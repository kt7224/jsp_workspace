/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'pt-br',
{
	accessibilityHelp :
	{
		title : 'Instru챌천es de Acessibilidade',
		contents : 'Conte첬do da Ajuda. Para fechar este di찼logo pressione ESC.',
		legend :
		[
			{
				name : 'Geral',
				items :
						[
							{
								name : 'Barra de Ferramentas do Editor',
								legend:
									'Pressione ${toolbarFocus} para navegar para a barra de ferramentas. Mova para o anterior ou pr처ximo grupo de ferramentas com TAB e SHIFT-TAB. Mova para o anterior ou pr처ximo bot찾o com SETA PARA DIREITA or SETA PARA ESQUERDA. Pressione ESPA횉O ou ENTER para ativar o bot찾o da barra de ferramentas.'
							},

							{
								name : 'Di찼logo do Editor',
								legend :
									'Dentro de um di찼logo, pressione TAB para navegar para o pr처ximo campo, pressione SHIFT + TAB para mover para o campo anterior, pressione ENTER para enviar o di찼logo, pressione ESC para cancelar o di찼logo. Para di찼logos que tem m첬ltiplas abas, pressione ALT + F10 para navegar para a lista de abas, ent찾o mova para a pr처xima aba com SHIFT + TAB ou SETA PARA ESQUERDA. Pressione ESPA횉O ou ENTER para selecionar a aba.'
							},

							{
								name : 'Menu de Contexto do Editor',
								legend :
									'Pressione ${contextMenu} ou TECLA DE MENU para abrir o menu de contexto, ent찾o mova para a pr처xima op챌찾o com TAB ou SETA PARA BAIXO. Mova para a anterior com SHIFT+TAB ou SETA PARA CIMA. Pressione ESPA횉O ou ENTER para selecionar a op챌찾o do menu. Abra o submenu da op챌찾o atual com ESPA횉O ou ENTER ou SETA PARA DIREITA. Volte para o menu pai com ESC ou SETA PARA ESQUERDA. Feche o menu de contexto com ESC.'
							},

							{
								name : 'Caixa de Lista do Editor',
								legend :
									'Dentro de uma caixa de lista, mova para o pr처ximo item com TAB ou SETA PARA BAIXO. Mova para o item anterior com SHIFT + TAB ou SETA PARA CIMA. Pressione ESPA횉O ou ENTER para selecionar uma op챌찾o na lista. Pressione ESC para fechar a caixa de lista.'
							},

							{
								name : 'Barra de Caminho do Elementos do Editor',
								legend :
									'Pressione ${elementsPathFocus} para a barra de caminho dos elementos. Mova para o pr처ximo bot찾o de elemento com TAB ou SETA PARA DIREITA. Mova para o bot찾o anterior com  SHIFT+TAB ou SETA PARA ESQUERDA. Pressione ESPA횉O ou ENTER para selecionar o elemento no editor.'
							}
						]
			},
			{
				name : 'Comandos',
				items :
						[
							{
								name : ' Comando Desfazer',
								legend : 'Pressione ${undo}'
							},
							{
								name : ' Comando Refazer',
								legend : 'Pressione ${redo}'
							},
							{
								name : ' Comando Negrito',
								legend : 'Pressione ${bold}'
							},
							{
								name : ' Comando It찼lico',
								legend : 'Pressione ${italic}'
							},
							{
								name : ' Comando Sublinhado',
								legend : 'Pressione ${underline}'
							},
							{
								name : ' Comando Link',
								legend : 'Pressione ${link}'
							},
							{
								name : ' Comando Fechar Barra de Ferramentas',
								legend : 'Pressione ${toolbarCollapse}'
							},
							{
								name : ' Ajuda de Acessibilidade',
								legend : 'Pressione ${a11yHelp}'
							}
						]
			}
		]
	}
});
