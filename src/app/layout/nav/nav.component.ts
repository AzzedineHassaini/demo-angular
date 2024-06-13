import { Component } from '@angular/core';
import {LinkModel} from "../../models/link.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  navItems: LinkModel[] = [
    {title: 'Acceuil', url: '/home'},
    {title: 'About',url: '/home/about'},
    {title: 'Démos',url: '/demo', children: [
        {title: '• Demo bindings',url: '/demo/demo01'},
        {title: '• Demo pipes',url: '/demo/demo02'},
        {title: '• Demo directives',url: '/demo/demo03'},
        {title: '• Demo input-output',url: '/demo/demo04'},
        {title: "• Demo reusable component", url: '/demo/demo05'},
        {title: "• Demo formulaires", url: '/demo/demo06'},
        {title: "• Demo HTTP", url: '/demo/demo07/143'}
      ], isVisible: false},
    {title: 'Exos', children: [
        {title: '• Exo timer',url: '/exo/exo01'},
        {title: '• Exo shopping cart',url: '/exo/exo02'},
        {title: '• Exo Pokedex',url: '/exo/exo03/0'},
        {title: '• Exo Pokedex fixed',url: '/exo/exo04'}
      ], isVisible: false}
  ];

  toggleVisible(clickedItem: LinkModel){
    for (let item of this.navItems) {
      item.isVisible = false;
    }
    clickedItem.isVisible = !clickedItem.isVisible;
  }

}
