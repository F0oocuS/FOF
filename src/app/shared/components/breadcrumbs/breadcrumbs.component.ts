import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-breadcrumbs',
	standalone: true,
	imports: [
		CommonModule,
		RouterLink
	],
	templateUrl: './breadcrumbs.component.html',
	styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
	@Input() list: any[];
}
