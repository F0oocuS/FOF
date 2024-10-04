import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { ItemComponent } from './components/item/item.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-item-page',
	standalone: true,
	imports: [
		CommonModule,
		BreadcrumbsComponent,
		ItemComponent
	],
	templateUrl: './item-page.component.html',
	styleUrl: './item-page.component.scss'
})
export class ItemPageComponent {
	public breadcrumbs = [
		{ title: 'FOF', link: '' },
		{ title: 'Power Place', link: '' },
		{ title: 'Жакет із вовни шоколадний', link: '' }
	];

	public item = {
		title: 'Жакет із вовни зі зʼємними акцентними деталями шоколадний',
		price: '4590 UAh',
		discountPrice: '2999 Uah',
		images: [{ url: 'assets/images/category-item.jpeg' }, { url: 'assets/images/home-page.png' }, { url: 'assets/images/item-page-image.png' }, { url: 'assets/images/home-page-about.png' }],
		sizes: [
			{
				name: 'xs',
				available: 10
			},
			{
				name: 's',
				available: 5
			},
			{
				name: 'm',
				available: 0
			},
			{
				name: 'l',
				available: 3
			}
		],
		colors: [
			{ color: '#2e242d', name: 'Коричневий' },
			{ color: '#ded5d3', name: 'Сірий' },
			{ color: '#edc2c9', name: 'Рожевий' }
		],
		isFavorite: false,
		about: 'Lorem'
	}
}
