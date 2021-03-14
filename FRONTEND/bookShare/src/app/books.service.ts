import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { Book } from './model/Book'
import { CONSTANTS } from '../assets/const'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksURL: string = `${CONSTANTS.urlDDBB}${CONSTANTS.booksParams}`
  books$ = new BehaviorSubject<Book[]>([])

  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }

  getAllBooks () {
    return this.http.get<Book[]>(this.booksURL).subscribe((data) => {
      this.books$.next(data)
    })
  }

  createBook (bookInfo) {
    return this.http.post<Book>(this.booksURL, bookInfo).subscribe((answer) => {
      console.log(answer)
    })
  }
}
