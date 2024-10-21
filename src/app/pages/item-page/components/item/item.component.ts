import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { DetailsComponent } from '../details/details.component';
import { SizeGuideComponent } from '../size-guide/size-guide.component';
import { CartStateService } from '../../../../core/services/cart-state.service';

@Component({
	selector: 'app-item',
	standalone: true,
	imports: [CommonModule, RouterLink, CardComponent, SidebarComponent, DetailsComponent, SizeGuideComponent],
	templateUrl: './item.component.html',
	styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input() item: any;

	public isDetailsSidebarOpen: boolean = false;
	public isSizeGuideActive: boolean = false;
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

	constructor(private cartStateService: CartStateService) {}

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
		if (this.isSizeGuideActive) {
			this.isSizeGuideActive = false;
			this.detailsSidebarActiveDropdown = 'sizes';
		} else {
			this.isDetailsSidebarOpen = false;
			this.detailsSidebarActiveDropdown = '';
		}
	}

	public openSizeGuide(): void {
		this.isSizeGuideActive = true;
	}

	public addToCart(): void {
		// TODO request for send item to cart;
		this.cartStateService.setCartState(this.item);
		this.cartStateService.setCartSidebarState(true);
	}
}
