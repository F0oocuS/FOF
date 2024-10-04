import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-search',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		CardComponent,
		RouterLink
	],
	templateUrl: './search.component.html',
	styleUrl: './search.component.scss'
})
export class SearchComponent {
	public searchTextRequest: string = '';
	public banWord: string = 'work';
	public searchRecommendation = [
		{ name: 'верхній одяг' },
		{ name: 'денім' },
		{ name: 'Сукні' },
		{ name: 'bestsellers' }
	];
	public items = [
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
	]
}
