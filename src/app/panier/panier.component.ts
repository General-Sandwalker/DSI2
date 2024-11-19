
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  products = [
    { name: 'Yeezy 350', price: 199.99 },
    { name: 'Air Jordans', price: 119.99 },

  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }

  confirmOrder() {
    alert('Order confirmed! Cart items: ' + JSON.stringify(this.cart));
    this.cart = [];
  }
}