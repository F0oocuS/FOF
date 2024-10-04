import {
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	@Input() title!: string;
	@Input() isSidebarOpen: boolean = false;
	@Output() onSidebarClose = new EventEmitter<void>();

	constructor() {}

	public closeSidebar(): void {
		this.onSidebarClose.emit();
	}
}
