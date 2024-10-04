import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../core/services/category.service';
import { Subscription } from 'rxjs';
import { CategoryItemComponent } from '../../shared/components/category-item/category-item.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-category-page',
	standalone: true,
	imports: [CommonModule, CategoryItemComponent],
	templateUrl: './category-page.component.html',
	styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent implements OnInit {
	public routeSubscription: Subscription;
	public title: string = '';
	public categoryItems: any[] = [];
	public nextCategoryPageUrl: string = '';

	constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {}

	public ngOnInit(): void {
		this.routeSubscription = this.activatedRoute.params.subscribe(params => {
			const { id } = params;

			this.title = id;

			this.categoryService.getCategory(3).subscribe(category => {
				console.log(category);
				this.categoryItems = category.data;

				if (category.links.next) {
					this.nextCategoryPageUrl = category.links.next;
				}
			})
		});
	}

	public onLoadMore() {
		this.categoryService.getNextCategory(this.nextCategoryPageUrl).subscribe(category => {
			this.categoryItems = [...this.categoryItems, ...category.data];

			if (category.links.next) {
				this.nextCategoryPageUrl = category.links.next;
			} else {
				this.nextCategoryPageUrl = '';
			}
		});
	}

}
