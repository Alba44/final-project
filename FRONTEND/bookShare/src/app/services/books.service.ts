/* eslint-disable no-debugger */
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { Book } from '../models/Book'
import { environment } from 'src/environments/environment'
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksURL: string = `${environment.server}${environment.booksParams}`
  usersURL: string = `${environment.server}${environment.usersParams}`
  urlAPISearch = `${environment.searchURL}`

  books$ = new BehaviorSubject<Book[]>([])
  userBooks$ = new BehaviorSubject<Book[]>([])
  selectedBook$ = new BehaviorSubject<Book[]>([])

  constructor (private http: HttpClient) { }

  getAllBooks () {
    return this.http.get<Book[]>(this.booksURL)
  }

  getSelectedBook (bookId: string) {
    return this.http.get<Book>(`${this.booksURL}/book/${bookId}`)
  }

  getUserBooks (userId) {
    return this.http.get<Book[]>(`${this.booksURL}/user/${userId}`).subscribe((data) => this.userBooks$.next(data))
  }

  sliceAllBooks (numSlice, books) {
    const booksLength = books.length
    const minIndex = Math.random() * ((booksLength - numSlice) - 0)
    const maxIndex = minIndex + numSlice
    return books.slice(minIndex, maxIndex)
  }

  createBook (bookInfo: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Book>(this.booksURL, bookInfo, httpOptions).pipe(
      tap()
    )
  }

  filterBooks ({ term, searchBy }) {
    return this.http.get<Book[]>(this.booksURL)
      .pipe(
        map(books => books.filter(book => {
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

  updateBook (newBookrInfo: object, bookId: string) {
    return this.http.put<Book>(`${this.booksURL}/book/${bookId}`, newBookrInfo).subscribe()
  }

  deleteBookFromBooks (bookId: string) {
    return this.http.delete<Book>(`${this.booksURL}/book/${bookId}`).subscribe()
  }

  deleteBookFromUser (bookId: string, userId: string) {
    return this.http.put<User>(`${this.usersURL}/books/${userId}`, bookId).subscribe()
  }
}
