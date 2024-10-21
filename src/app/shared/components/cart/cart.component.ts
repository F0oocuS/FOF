import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartStateService } from '../../../core/services/cart-state.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardHorizontalComponent } from '../card-horizontal/card-horizontal.component';

@Component({
	selector: 'app-cart',
	standalone: true,
	imports: [CommonModule, CardComponent, CardHorizontalComponent],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
	public cart: any[] = [];

	public cartStateSubscription: Subscription;

	constructor(private cartStateService: CartStateService) {}

	public ngOnInit(): void {
		console.log('Cart Component ==== OnInit START ====');
		this.cartStateSubscription = this.cartStateService.cartState$.subscribe((state: any[]) => {
			this.cart = [...state];
			console.log(this.cart);
		});
		console.log('Cart Component ==== OnInit END ====');
	}

	public ngOnDestroy(): void {
		console.log('Cart Component ==== OnDestroy START ====');
		this.cartStateSubscription.unsubscribe();
		console.log('Cart Component ==== OnDestroy END ====');
	}
}
