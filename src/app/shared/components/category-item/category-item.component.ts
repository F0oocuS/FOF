import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-category-item',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './category-item.component.html',
	styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent implements OnInit {
	@Input() public categoryItem: any;

	public isInWishList: boolean = false;

	public ngOnInit(): void {
		// console.log(this.categoryItem);
	}
}
