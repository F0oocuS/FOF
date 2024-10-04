import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-filters',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './filters.component.html',
	styleUrl: './filters.component.scss'
})
export class FiltersComponent {
	@Input() filters: any;

	public isFiltersChosen: boolean = false;

	public isCategoriesExpanded: boolean = false;
	public isColorsExpanded: boolean = false;

	public clickOnFilter(filter: any): void {
		console.log(filter);
		this.isFiltersChosen = !this.isFiltersChosen;
	}

	public showHideMoreCategories(): void {
		this.isCategoriesExpanded = !this.isCategoriesExpanded;
	}

	public showHideMoreColors(): void {
		this.isColorsExpanded = !this.isColorsExpanded;
	}
}
