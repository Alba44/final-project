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
  searchedBookAuthor: any = this.bookService.author$
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
    this.searchedBookAuthor.subscribe(data => { this.searchedBookAuthor = data })
  }

  searchBook (input, searchInput) {
    if (input.checked) {
      this.searchByTitle = this.books.filter((book) => searchInput.toUpperCase() === book.title.toUpperCase())
      this.bookService.setTitle(this.searchByTitle)
    } else {
      this.searchByAuthor = this.books.filter((book) => searchInput.toUpperCase() === book.author_name[0].toUpperCase())
      this.bookService.setAuthor(this.searchByAuthor)
    }
  }
}
