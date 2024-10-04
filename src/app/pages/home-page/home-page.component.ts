import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [RouterLink, CommonModule],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
	public navList = [
		{ title: 'New collection Power place', link: '' },
		{ title: 'Seasun', link: '' },
		{ title: 'Blursday', link: '' },
		{ title: 'Stylecare', link: '' },
		{ title: 'Retro glamorous', link: '' }
	]
}
