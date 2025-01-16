import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetails } from '../productdetails';
import { ProductService } from '../products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, ProductComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  category: string = '';
  productDetailsList: ProductDetails[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      if (this.category) {
        this.loadCategoryData();
      }
    });
  }

  loadCategoryData() {
    if (this.category) {
      this.productService.getAllProductDetails(this.category).then((productDetailsList: ProductDetails[]) => {
        this.productDetailsList = productDetailsList;
      });
    }
  }
}
