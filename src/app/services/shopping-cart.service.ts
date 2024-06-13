import { Injectable } from '@angular/core';
import {CartItem} from "../models/cartItem";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {
    console.log('Service created');
  }

  private _cartItems: CartItem[] = [
    {reference:'001', name:'Apple', price:1.30, quantity:5, img:'./images/apple.png'},
    {reference:'002', name:'Banana', price:1.75, quantity:6, img:'./images/banana.png'},
    {reference:'003', name:'Watermelon', price:3.80, quantity:1, img:'./images/watermelon.png'},
    {reference:'004', name:'Lemon', price:2.20, quantity:3, img:'./images/lemon.png'},
  ];

  addItem(itemToAdd: CartItem) {
    if (itemToAdd.quantity <= 0) { return; }
    const index: number = this.findItem(itemToAdd.reference);
    if (index >= 0) {
      this._cartItems[index].quantity += itemToAdd.quantity;
    } else {
      this._cartItems.push(itemToAdd);
    }
  }

  addOneToCart(itemToAdd: CartItem) {
    // const index: number = this.findItem(itemToAdd.reference);
    // if (index === -1) { return; }
    // const existingItem: CartItem = this._cartItems[index];
    // if (existingItem) {
    //   existingItem.quantity ++;
    // } else {
    //   //Erreur
    //   alert('error');
    // }

    itemToAdd.quantity ++;
  }

  removeOneFromCart(itemToRemove: CartItem) {
    // const index: number = this.findItem(itemToRemove.reference);
    // if (index === -1) { return; }
    // const existingItem: CartItem = this._cartItems[index];
    // if (existingItem) {
    //   existingItem.quantity --;
    //   if (existingItem.quantity === 0) {
    //     this._cartItems.splice(index, 1);
    //   }
    // } else {
    //   //Erreur
    //   alert('error');
    // }

    itemToRemove.quantity --;
    if (itemToRemove.quantity === 0) {
      const index: number = this.findItem(itemToRemove.reference);
      this._cartItems.splice(index, 1);
    }

  }

  private findItem(reference: string): number {
    return this._cartItems.findIndex((item) => {
      return item.reference === reference;
    });
  }

  get cartItems(): CartItem[]{
    return this._cartItems;
  }

}
