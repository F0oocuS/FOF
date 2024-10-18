import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { DetailsComponent } from '../details/details.component';

@Component({
	selector: 'app-item',
	standalone: true,
	imports: [CommonModule, RouterLink, CardComponent, SidebarComponent, DetailsComponent],
	templateUrl: './item.component.html',
	styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input() item: any;

	public isDetailsSidebarOpen: boolean = false;
	public detailsSidebarActiveDropdown: string = '' // can be 'sizes' | 'materials' | 'notes' | 'delivery' | 'available'

	public activeSize: any = null;
	public activeColor: any = null;
	public aboutList: any[] = [
		{ text: 'Преміальна вовна' },
		{ text: 'Зʼємні деталі, що імітують сорочку' },
		{ text: 'Однобортний крій' },
		{ text: 'Акуратна форма лацканів' },
		{ text: 'Преміальна вовна' },
		{ text: 'Зʼємні деталі, що імітують сорочку' },
		{ text: 'Однобортний крій' },
		{ text: 'Акуратна форма лацканів' }
	];

	public selectColor(color: any) {
		this.activeColor = color;
	}

	public selectSize(size: any): void {
		this.activeSize = size;
	}

	public openDetailsSidebar(activeDropdown: string): void {
		this.detailsSidebarActiveDropdown = activeDropdown;
		this.isDetailsSidebarOpen = true;
	}

	public closeDetailsSidebar(): void {
		this.isDetailsSidebarOpen = false;
		this.detailsSidebarActiveDropdown = '';
	}
}
