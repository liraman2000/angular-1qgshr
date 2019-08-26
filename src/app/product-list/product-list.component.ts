import { Component } from '@angular/core';
import { products } from '../products';
import { consoles } from '../products';

var myObj = {
    firstname: "Ignacio",
    lastname: "Lira",
    website: "La_Tiendita_del_Nachan.net"
}
window.localStorage.setItem("saved", JSON.stringify(myObj));

var name = JSON.parse(window.localStorage.getItem("saved"));

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  consoles = consoles;
  share() {
    window.alert('The product has been shared!');
  };
  uno(){
      window.alert('Hola'); 
  }
}

    


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/