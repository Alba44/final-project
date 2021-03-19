import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BooksService } from 'src/app/services/books.service'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  books: any = this.bookService.books$

  updateBookForm: FormGroup

  constructor (private bookService: BooksService) { }

  ngOnInit (): void {

  }
}
