import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchComponent } from '../search/search.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, CommonModule, SidebarComponent, SearchComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	public longList = [
		{ title: 'верхній одяг', url: '' },
		{ title: 'жакети | жилети', url: '' },
		{ title: 'брюки | шорти', url: '' },
		{ title: 'сукні', url: '' },
		{ title: 'спідниці', url: '' },
		{ title: 'светри | кардигани', url: '' },
		{ title: 'футболки | поло', url: '' },
		{ title: 'денім', url: '' },
		{ title: 'сорочки | блузки', url: '' },
		{ title: 'майки | лонгсліви', url: '' },
		{ title: 'спорт-кежуал комплекти', url: '' },
		{ title: 'Купити все', url: '' }
	];

	public isOpenMenu: boolean = false;
	public activeTab: string = 'catalog';

	public isSearchSidebarOpen = false;

	public toggleMenu(): void {
		console.log(this.isOpenMenu);
		this.isOpenMenu = !this.isOpenMenu;
	}

	public setActiveTab(tabName: string): void {
		this.activeTab = tabName;
	}

	public closeSearchSidebar(): void {
		this.isSearchSidebarOpen = false;
	}

	public openSearchSidebar(): void {
		this.isSearchSidebarOpen = true;
	}
}
