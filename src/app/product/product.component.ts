import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productDetails: any;

  isModalOpen: boolean = false;
  isGiftsRoute: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isGiftsRoute = this.router.url.includes('/gifts');
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
