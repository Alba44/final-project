import { Component, OnInit } from '@angular/core'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: any = this.bookService.books$

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
      const titleSearch = this.books.filter((book) => searchInput === book.title)
      console.log(titleSearch)
    } else {
      const authorSearch = this.books.filter((book) => searchInput.toUppercase() === book.author_name.toUppercase())
      console.log(authorSearch)
    }
  }
}
