import { Component } from '@angular/core';
import {ItemModel} from "../../models/item.model";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-exo-shopping-list',
  templateUrl: './exo-shopping-list.component.html',
  styleUrl: './exo-shopping-list.component.scss'
})
export class ExoShoppingListComponent {


  cartItems!: ItemModel[];
  item: ItemModel = {reference:'', name:'', price:0, quantity:0, img:''};

  constructor(private readonly _shoppingCartService: ShoppingCartService) {
    this.cartItems = _shoppingCartService.cartItems;
  }

  addItem(itemToAdd: ItemModel) {
    this._shoppingCartService.addItem(itemToAdd);
  }

  addOneToCart(itemToAdd: ItemModel) {
    this._shoppingCartService.addOneToCart(itemToAdd);
  }

  removeOneFromCart(itemToRemove: ItemModel) {
    this._shoppingCartService.removeOneFromCart(itemToRemove);
  }

}
