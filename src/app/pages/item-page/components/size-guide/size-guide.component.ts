import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-size-guide',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './size-guide.component.html',
	styleUrl: './size-guide.component.scss'
})
export class SizeGuideComponent {
	public activeTab: string = 'size-grid'; // cant be size-grid | item-size | size-guide

	selectTab(tab: string): void {
		this.activeTab = tab;
	}
}
