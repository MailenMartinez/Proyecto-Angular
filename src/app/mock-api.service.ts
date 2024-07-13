import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private url= 'https://668df5a8bf9912d4c92c5522.mockapi.io/books/book';
  constructor(private http: HttpClient) {
   }

  getBooks(){
    return this.http.get<Book[]>(this.url);
  }
}
