import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
	selector: 'app-item',
	standalone: true,
	imports: [CommonModule, RouterLink, CardComponent],
	templateUrl: './item.component.html',
	styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input() item: any;

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
}
