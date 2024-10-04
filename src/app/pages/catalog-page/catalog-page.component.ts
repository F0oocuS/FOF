import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FiltersComponent } from '../../shared/components/filters/filters.component';

@Component({
	selector: 'app-catalog-page',
	standalone: true,
	imports: [
		CommonModule,
		BreadcrumbsComponent,
		CardComponent,
		SidebarComponent,
		FiltersComponent
	],
	templateUrl: './catalog-page.component.html',
	styleUrl: './catalog-page.component.scss'
})
export class CatalogPageComponent {
	public viewMode = 'product';
	public isShowFilters = false;

	public breadcrumbs = [
		{ title: 'FOF', link: '' },
		{ title: 'Power Place', link: '' }
	];
	public filters = {
		sizes: {
			title: 'розмір',
			list: [
				{ name: 'xs', value: '' },
				{ name: 's', value: '' },
				{ name: 'm', value: '' },
				{ name: 'l', value: '' },
				{ name: 'xs/s', value: '' },
				{ name: 'm/l', value: '' },
				{ name: 'onesize', value: '' }
			]
		},
		categories: {
			title: 'категорія',
			list: [
				{ name: 'hello', value: '' },
				{ name: 'well', value: '' },
				{ name: 'world', value: '' },
				{ name: 'test', value: '' },
				{ name: '123', value: '' },
				{ name: 'lorem', value: '' },
				{ name: 'dolor', value: '' },
				{ name: 'hello world', value: '' },
				{ name: 'well', value: '' },
				{ name: 'world', value: '' },
				{ name: 'test', value: '' },
				{ name: '123', value: '' },
				{ name: 'lorem', value: '' },
				{ name: 'dolor', value: '' },
				{ name: 'hello world', value: '' },
				{ name: 'well', value: '' },
				{ name: 'world', value: '' },
				{ name: 'test', value: '' },
				{ name: '123', value: '' },
				{ name: 'lorem', value: '' },
				{ name: 'dolor', value: '' },
				{ name: 'hello world', value: '' },
				{ name: 'hearthstone', value: '' }
			]
		},
		colors: {
			title: 'колір',
			list: [
				{ name: 'white', color: 'white' },
				{ name: 'black', color: 'black' },
				{ name: 'pink', color: 'pink' },
				{ name: 'lightcoral', color: 'lightcoral' },
				{ name: 'lightblue', color: 'lightblue' },
				{ name: 'green', color: 'green' },
				{ name: 'red', color: 'red' },
				{ name: 'purple', color: 'purple' },
				{ name: 'black', color: 'black' },
				{ name: 'pink', color: 'pink' },
				{ name: 'lightcoral', color: 'lightcoral' },
				{ name: 'lightblue', color: 'lightblue' },
				{ name: 'green', color: 'green' },
				{ name: 'red', color: 'red' },
				{ name: 'purple', color: 'purple' },
				{ name: 'black', color: 'black' },
				{ name: 'pink', color: 'pink' },
				{ name: 'lightcoral', color: 'lightcoral' },
				{ name: 'lightblue', color: 'lightblue' },
				{ name: 'green', color: 'green' },
				{ name: 'red', color: 'red' },
				{ name: 'purple', color: 'purple' },
				{ name: 'orange', color: 'orange' }
			]
		}
	};
	public items = [
		{
			title: 'Жакет із вовни зі зʼємними акцентними деталями шоколадний',
			price: '4590 UAh',
			discountPrice: null,
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
	];

	public changeModeView(mode: string): void {
		this.viewMode = mode;
	}

	public openFilters(): void {
		this.isShowFilters = true;
	}

	public closeFilters(): void {
		this.isShowFilters = false;
	}
}
