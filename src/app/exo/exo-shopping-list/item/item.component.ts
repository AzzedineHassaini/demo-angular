import {Component, Input} from '@angular/core';
import {CartItem} from "../../../models/cartItem";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input({required: true})
  item!: CartItem;

}
