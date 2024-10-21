import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-card-horizontal',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-horizontal.component.html',
	styleUrl: './card-horizontal.component.scss'
})
export class CardHorizontalComponent {
	@Input() item: any;

	public value: number = 1;

	public toggleFavorite(item: any): void {
		item.isFavorite = !item.isFavorite;
	}

	public incrementCount() {
		this.value++;
	}

	public decrementCount() {
		if (this.value > 1) {
			this.value--;
		}
	}
}
