import { Component } from '@angular/core';
import {ItemModel} from "../../models/item.model";

@Component({
  selector: 'app-exo-shopping-list',
  templateUrl: './exo-shopping-list.component.html',
  styleUrl: './exo-shopping-list.component.scss'
})
export class ExoShoppingListComponent {

  cartItems: ItemModel[] = [
    {reference:'001', name:'Apple', price:1.30, quantity:5},
    {reference:'002', name:'Banana', price:1.75, quantity:6},
    {reference:'003', name:'Watermelon', price:3.80, quantity:1},
    {reference:'004', name:'Lemon', price:2.20, quantity:3},
  ];
  item: ItemModel = {reference:'', name:'', price:0, description:'', quantity:0};

  addItem(itemToAdd: ItemModel) {
    if (this.item.quantity <= 0) { return; }
    const index: number = this.findItem(itemToAdd.reference);
    if (index >= 0) {
      this.cartItems[index].quantity += itemToAdd.quantity;
    } else {
      this.cartItems.push(itemToAdd);
    }
    this.item = {reference:'', name:'', price:0, description:'', quantity:0};
  }

  addToCart(itemToAdd: ItemModel) {
    const index: number = this.findItem(itemToAdd.reference);
    if (index === -1) { return; }
    const existingItem: ItemModel = this.cartItems[index];
    if (existingItem) {
      existingItem.quantity ++;
    } else {
      //Erreur
      alert('error');
    }
  }

  removeFromCart(itemToAdd: ItemModel) {
    const index: number = this.findItem(itemToAdd.reference);
    if (index === -1) { return; }
    const existingItem: ItemModel = this.cartItems[index];
    if (existingItem) {
      existingItem.quantity --;
      if (existingItem.quantity === 0) {
        this.cartItems.splice(index, 1);
      }
    } else {
      //Erreur
      alert('error');
    }
  }

  private findItem(reference: string): number {
    return this.cartItems.findIndex((item) => {
      return item.reference === reference;
    });
  }

}
