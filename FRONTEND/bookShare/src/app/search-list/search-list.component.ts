import { Component, OnInit } from '@angular/core'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  books: any = this.bookService.books$
  searchedBookTitle: any = this.bookService.title$
  searchByTitle
  searchByAuthor

  constructor (private bookService: BooksService) {}

  ngOnInit (): void {
    this.getSearchedBookFromDashboard()
    this.getBooks()
  }

  getBooks () {
    this.bookService.getAllBooks() // .get del backend en el booksService
    this.books.subscribe(data => { this.books = data })
  }

  getSearchedBookFromDashboard () {
    this.searchedBookTitle.subscribe(data => { this.searchedBookTitle = data })
  }

  searchBook (input, searchInput) {
    if (input.checked) {
      this.searchByTitle = this.books.filter((book) => searchInput === book.title)
      this.bookService.setTitle(this.searchByTitle)
    } else {
      this.searchByAuthor = this.books.filter((book) => searchInput === book.author_name)
      this.bookService.setAuthor(this.searchByAuthor)
    }
  }
}
