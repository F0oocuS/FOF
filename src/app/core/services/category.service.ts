import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	private url: string = 'https://test-bk.friendsoffashion.com.ua/api/'
	constructor(private httpClient: HttpClient) {}

	public getCategory(id: number): Observable<any> {
		return this.httpClient.get<any>(this.url + 'items/categories/' + id);
	}

	public getNextCategory(url: string): Observable<any> {
		return this.httpClient.get<any>(url);
	}
}
