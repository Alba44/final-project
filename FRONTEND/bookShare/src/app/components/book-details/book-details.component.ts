import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { BooksService } from 'src/app/services/books.service'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  allBooks: any = this.bookService.books$
  bookId
  selectedBook: any = this.bookService.selectedBook$

  updateBookForm: FormGroup

  constructor (private bookService: BooksService, private activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
    this.updateBookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author_name: new FormControl('', Validators.required),
      first_publish_year: new FormControl('', Validators.required),
      description: new FormControl('')
    })

    this.bookId = this.activatedRoute.snapshot.paramMap.get('id')
    this.bookService.getSelectedBook(this.bookId).subscribe((data) => {
      console.log(data)
      this.updateBookForm.patchValue(data)
      this.selectedBook.next(data)
    })

    this.bookService.getAllBooks().subscribe((data) => {
      const someBooks = this.bookService.sliceAllBooks(10, data)
      this.allBooks.next(someBooks)
    })
  }

  updateInfo (formInfo) {
    this.bookService.updateBook(formInfo, this.bookId)
  }
}
