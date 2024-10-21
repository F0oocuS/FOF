import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { Subscription } from 'rxjs';
import { CartStateService } from './core/services/cart-state.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, CartComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
	public title = 'FOF';
	public isCartSidebarOpen = true;

	public cartSidebarStateSubscription: Subscription;

	constructor(public cartStateService: CartStateService) {}

	public ngOnInit(): void {
		this.cartSidebarStateSubscription = this.cartStateService.cartSidebarState$.subscribe((value: boolean) => this.isCartSidebarOpen = value);
	}

	public ngOnDestroy(): void {
		this.cartSidebarStateSubscription.unsubscribe();
	}

	public closeCartSidebar(): void {
		this.cartStateService.setCartSidebarState(false);
	}
}
