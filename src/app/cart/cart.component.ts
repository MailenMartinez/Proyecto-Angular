import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  
  
  cartList$: Observable <Book[] >| undefined;
    constructor(private cart: BookCartService){
      this.cartList$ = cart.cartList.asObservable();
  
    }

    ngOnInit(): void {
 

    
  }

}
