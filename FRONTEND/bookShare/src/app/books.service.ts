import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Book } from './model/Book'
import { CONSTANTS } from '../assets/const'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksURL: string = `${CONSTANTS.urlDDBB}${CONSTANTS.booksParams}`
  books$ = new BehaviorSubject<Book[]>([])
  title$ = new BehaviorSubject<Book[]>([])
  author$ = new BehaviorSubject<Book[]>([])

  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }

  getAllBooks () {
    return this.http.get<Book[]>(this.booksURL).subscribe((data) => {
      this.books$.next(data)
    })
  }

  setTitle (book) {
    this.title$.next(book)
  }

  setAuthor (book) {
    this.author$.next(book)
  }

  createBook (bookInfo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Book>(this.booksURL, bookInfo, httpOptions).pipe(
      tap()
    ).subscribe()
  }
}
