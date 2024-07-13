import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {

 
private _cartList: Book[]=[];
cartList: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  
  constructor() { 
   
  }

  addToCart(book: Book){
  
   let item: Book | undefined  = this._cartList.find((v1) => v1.name==book.name)
    if (!item){
      this._cartList.push({ ... book});

    }else{
      item.quantity += book.quantity;

    }
    this._cartList.push(book);
    console.log(this._cartList.length);
    this.cartList.next(this._cartList);

  }

}