import { Component, OnInit } from '@angular/core'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: any = this.bookService.books$
  titleSearch
  authorSearch

  constructor (private bookService: BooksService) {}

  ngOnInit (): void {
    this.getBooks()
  }

  getBooks () {
    this.bookService.getAllBooks() // .get del backend en el booksService
    this.books.subscribe(data => { this.books = data })
  }

  search (input, searchInput) {
    if (input.checked) {
      this.titleSearch = this.books.filter((book) => searchInput === book.title)
      this.bookService.setTitle(this.titleSearch)
    } else {
      this.authorSearch = this.books.filter((book) => searchInput === book.author_name)
      this.bookService.setAuthor(this.authorSearch)
    }
  }
}
