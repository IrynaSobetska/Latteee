import { Injectable } from '@angular/core';
import { ProductDetails } from './productdetails';
@Injectable({
    providedIn: 'root',
})
export class ProductService {
    url = 'http://localhost:3000';

    async getAllProductDetails(category: string): Promise<ProductDetails[]> {
        try {
            const data = await fetch(`${this.url}/${category}`);
            const jsonData = await data.json();
            return jsonData ?? [];
        } catch (err) {
            console.error('Error fetching product details:', err);
            return [];
        }
    }
}