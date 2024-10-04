import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'catalog/:id', component: CatalogPageComponent },
	{ path: 'item/:id', component: ItemPageComponent },
	{ path: 'shop/:id', component: CategoryPageComponent },
	{ path: '**', component: NotFoundPageComponent }
];
