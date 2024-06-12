import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemModel} from "../../../models/item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  @Input()
  cartItems!: ItemModel[];

  @Output()
  addItem: EventEmitter<ItemModel> = new EventEmitter();
  @Output()
  removeItem: EventEmitter<ItemModel> = new EventEmitter();

  add(response: ItemModel): void {
    this.addItem.emit(response);
  }

  remove(response: ItemModel): void {
    this.removeItem.emit(response);
  }

}
