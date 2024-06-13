import { Component } from '@angular/core';
import {CartItem} from "../../models/cartItem";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-exo-shopping-list',
  templateUrl: './exo-shopping-list.component.html',
  styleUrl: './exo-shopping-list.component.scss'
})
export class ExoShoppingListComponent {


  cartItems!: CartItem[];
  item: CartItem = {reference:'', name:'', price:0, quantity:0, img:''};

  constructor(private readonly _shoppingCartService: ShoppingCartService) {
    this.cartItems = _shoppingCartService.cartItems;
  }

  addItem(itemToAdd: CartItem) {
    this._shoppingCartService.addItem(itemToAdd);
  }

  addOneToCart(itemToAdd: CartItem) {
    this._shoppingCartService.addOneToCart(itemToAdd);
  }

  removeOneFromCart(itemToRemove: CartItem) {
    this._shoppingCartService.removeOneFromCart(itemToRemove);
  }

}
