import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { InputIntegerComponent } from '../input-integer/input-integer.component';
import { BookCartService } from '../book-cart.service';
import { MockApiService } from '../mock-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})


export class BookListComponent  implements OnInit{
  books: Book[] = [
 
  
  ]


  constructor(private cart: BookCartService, private mockApi : MockApiService){
  }
  ngOnInit(): void {
      this.getBooks();
  }
  maxReached(m: string){
    alert (m);
  }

  addToCart (book: Book): void{

    if (book.quantity>0){
      this.cart.addToCart(book);
      book.stock-=book.quantity;
    }
    book.quantity=0;
   
    }

    getBooks(){
      this.mockApi.getBooks().subscribe(
        data=> {this.books=data;},
        error=>{console.log('error al cargar libros', error);}
      )
    }
}
