import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [RouterLink, CommonModule],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	public itemsLists = [
		{
			title: 'Каталог',
			isOpen: false,
			items: [
				{ title: 'Каталог', url: '' },
				{ title: 'Нові надходження', url: '' },
				{ title: 'Bestsellers', url: '' },
				{ title: 'Special price', url: '' }
			]
		},
		{
			title: 'Про бренд',
			isOpen: false,
			items: [
				{ title: 'Fof club', url: '' },
				{ title: 'Система лояльності', url: '' },
				{ title: 'Вакансії', url: '' },
				{ title: 'Concept store', url: '' },
				{ title: 'Контакти', url: '' }
			]
		},
		{
			title: 'Контакти',
			isOpen: false,
			items: [
				{ title: 'Instagram', url: '' },
				{ title: 'Telegram', url: '' },
				{ title: 'Viber', url: '' },
				{ title: 'Mail', url: '' }
			]
		}
	];
	public helpLinks = {
		title: 'Правила використання',
		isOpen: false,
		items: [
			{ title: 'Публічна оферта', url: '' },
			{ title: 'Політика конфіденційності', url: '' },
			{ title: 'Політика cookies', url: '' },
			{ title: 'Правила користування сайтом', url: '' }
		]
	}

	public openCloseList(object: any) {
		object.isOpen = !object.isOpen;
	}
}
