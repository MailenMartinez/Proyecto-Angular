import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {

  private _cartList: Book[] = [];
  cartList: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor() { }

  addToCart(book: Book) {
    let item: Book | undefined = this._cartList.find((v1) => v1.name == book.name);
    if (!item) {
      if (book.quantity > 0) { // Solo añadir si la cantidad es mayor a 0
        this._cartList.push({ ...book });
      }
    } else {
      item.quantity += book.quantity;
      if (item.quantity <= 0) { // Remover el ítem si la cantidad es 0 o menor
        this._cartList = this._cartList.filter((v1) => v1.name != book.name);
      }
    }
    this.cartList.next(this._cartList);
  }


}