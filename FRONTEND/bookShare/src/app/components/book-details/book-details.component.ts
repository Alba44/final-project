import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { BooksService } from '../../services/books.service'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  allBooks: any = this.bookService.books$
  bookCover
  bookId: string
  userId: string = localStorage.getItem('userInfo')
  bookLender: string
  isAvailable: boolean

  updateBookForm: FormGroup

  constructor (
    private bookService: BooksService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
    this.updateBookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author_name: new FormControl('', Validators.required),
      first_publish_year: new FormControl('', Validators.required),
      description: new FormControl(''),
      covers: new FormControl(),
      available: new FormControl()
    })

    this.bookId = this.activatedRoute.snapshot.paramMap.get('id')
    this.bookService.getSelectedBook(this.bookId).subscribe((data) => {
      this.bookCover = data.covers
      this.bookLender = data.lender
      this.isAvailable = data.available
      this.updateBookForm.patchValue(data)
    })

    this.bookService.getAllBooks().subscribe((data) => {
      const someBooks = this.bookService.sliceAllBooks(8, data)
      this.allBooks.next(someBooks)
    })
  }

  updateInfo (formInfo) {
    this.bookService.updateBook(formInfo, this.bookId)
  }

  selectImage (event: Event) {
    const file = (event.target as HTMLInputElement).files[0]
    this.updateBookForm.patchValue({ covers: file })
    this.updateBookForm.get('covers').updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      this.bookCover = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }

  borrowBook () {
    this.isAvailable = !this.isAvailable
    this.bookService.updateBook({ available: this.isAvailable }, this.bookId)
  }

  removeBook () {
    this.bookService.deleteBook(this.bookId)
  }

  renderBookInfo (bookId) {
    this.bookService.getSelectedBook(bookId).subscribe((data) => {
      this.bookCover = data.covers
      this.bookLender = data.lender
      this.isAvailable = data.available
      this.updateBookForm.patchValue(data)
    })
  }
}
