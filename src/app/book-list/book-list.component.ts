import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books: Book[] = [
    {
    id: 1,
    name: "nombre",
    description : "descripcion",
    price : 123,
    stock : 0,
    image:"../../img/encantado.jpg",
    clearance: false,
    quantity: 0,
    },
    {
      id: 1,
      name: "nombre2",
      description : "descripcion",
      price : 123,
      stock : 123,
      image:"../../img/encantado.jpg",
      clearance: true,
      quantity: 0,
    },
    {
        id: 1,
      name: "nombre3",
      description : "descripcion",
      price : 123,
      stock : 3,
      image:"../../img/encantado.jpg",
      clearance: false,
      quantity: 0,
    }
  ]
  upQuantity (book : Book) : void {
    if (book.stock> book.quantity){
      book.quantity++;
    }
  
  }
  downQuantity (book : Book) : void {
    if (book.quantity>0){
      book.quantity--;
    }
  }
}
