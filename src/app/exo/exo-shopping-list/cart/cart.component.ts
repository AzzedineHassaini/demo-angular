import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from "../../../models/cartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  @Input()
  cartItems!: CartItem[];

  item!: CartItem;

  @Output()
  addItem: EventEmitter<CartItem> = new EventEmitter();
  @Output()
  removeItem: EventEmitter<CartItem> = new EventEmitter();
  @Output()
  viewItem: EventEmitter<CartItem> = new EventEmitter();

  add(response: CartItem): void {
    this.addItem.emit(response);
  }

  remove(response: CartItem): void {
    this.removeItem.emit(response);
  }

  view(response: CartItem) : void {
    this.item = response;
    this.viewItem.emit(response);
  }

}
