import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
	@Input() item: any;
	@Input() isSmallView: boolean = false;

	public ngOnInit(): void {
		console.log(this.item);
		console.log(this.isSmallView);
	}

	public toggleFavorite(item: any) {
		item.isFavorite = !item.isFavorite;
	}
}
