import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CartStateService {
	private cartSidebarStateSubject = new BehaviorSubject<boolean>(false);
	private cartStateSubject = new BehaviorSubject<any[]>([]);

	public cartSidebarState$: Observable<boolean> = this.cartSidebarStateSubject.asObservable();
	public cartState$: Observable<any[]> = this.cartStateSubject.asObservable();

	constructor() {}

	public setCartSidebarState(state: boolean): void {
		this.cartSidebarStateSubject.next(state);
	}

	public setCartState(item: any): void {
		const currentCart = this.cartStateSubject.value;
		const updatedCart = [...currentCart, item]

		this.cartStateSubject.next(updatedCart);
	}
}
