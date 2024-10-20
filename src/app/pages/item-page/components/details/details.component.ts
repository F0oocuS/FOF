import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-details',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './details.component.html',
	styleUrl: './details.component.scss'
})
export class DetailsComponent {
	@Input() openedDropdown: string = '';
	@Output() onSizeGuideOpen = new EventEmitter<boolean>;

	public selectDropdown(dropdownName: string): void {
		if (dropdownName === this.openedDropdown) {
			this.openedDropdown = '';
		} else {
			this.openedDropdown = dropdownName;
		}
	}

	public openSizeGuide() {
		this.onSizeGuideOpen.emit(true);
	}
}
