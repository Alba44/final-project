/* eslint-disable no-debugger */
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { Book } from '../models/Book'
import { CONSTANTS } from '../../assets/const'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksURL: string = `${CONSTANTS.urlDDBB}${CONSTANTS.booksParams}`

  urlAPISearch = 'http://openlibrary.org/search.json?q='

  books$ = new BehaviorSubject<Book[]>([])
  userBooks$ = new BehaviorSubject<Book[]>([])

  constructor (private http: HttpClient) { }

  getAllBooks () {
    return this.http.get<Book[]>(this.booksURL).subscribe((data) => this.books$.next(data))
  }

  getUserBooks (userId) {
    return this.http.get<Book[]>(`${this.booksURL}/${userId}`).subscribe((data) => this.userBooks$.next(data))
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

  filterBooks ({ term, searchBy }) {
    debugger
    return this.http.get<Book[]>(this.booksURL)
      .pipe(
        map(books => books.filter(book => {
          debugger
          return Array.isArray(book[searchBy])
            ? book[searchBy].find(field => field.toLowerCase() === term.toLowerCase())
            : book[searchBy].toLowerCase() === term.toLowerCase()
        })),
        tap(books => this.books$.next(books))
      )
  }

  fetchAPI (searchInput) {
    return this.http.get(`${this.urlAPISearch}${searchInput}`)
  }
}
