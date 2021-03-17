import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { Book } from './model/Book'
import { CONSTANTS } from '../assets/const'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksURL: string = `${CONSTANTS.urlDDBB}${CONSTANTS.booksParams}`
  urlAPISearch = 'http://openlibrary.org/search.json?q='

  books$ = new BehaviorSubject<Book[]>([])

  constructor (private http: HttpClient) { }

  getAllBooks () {
    return this.http.get<Book[]>(this.booksURL).subscribe((data) => this.books$.next(data))
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

  filterBooks ({ term, input }) {
    return this.http.get<Book[]>(this.booksURL)
      .pipe(
        map(books => books.filter(book => {
          return input.checked === true
            ? book.title.toLowerCase() === term.toLowerCase()
            : book.author_name[0].toLowerCase() === term.toLowerCase()
        }))
      )
  }

  fetchAPI (searchInput) {
    return this.http.get(`${this.urlAPISearch}${searchInput}`)
  }
}
