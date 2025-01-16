import { Component, inject } from '@angular/core';
import { ProductDetails } from '../../productdetails';
import { ProductService } from '../../products.service';
import { ProductComponent } from '../../product/product.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gifts',
  imports: [ProductComponent, CommonModule],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent {
  productDetailsList: ProductDetails[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllProductDetails("gifts").then((productDetailsList: ProductDetails[]) => {
      this.productDetailsList = productDetailsList;
    });
  }


}
