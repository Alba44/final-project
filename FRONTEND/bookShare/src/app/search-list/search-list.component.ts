import { Component, OnInit } from '@angular/core'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  books: any = this.bookService.books$
  booksListed

  constructor (private bookService: BooksService) {}

  ngOnInit (): void {
    this.booksListed = document.getElementsByClassName('own-books__container')
  }

  getBooks () {
    this.bookService.getAllBooks() // .get del backend en el booksService
    this.books.subscribe(data => { this.books = data })
  }
}
