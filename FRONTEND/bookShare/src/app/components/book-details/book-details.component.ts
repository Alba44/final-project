import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { BooksService } from 'src/app/services/books.service'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  allBooks: any = this.bookService.books$
  bookCover: string
  bookId: string
  userId: string = localStorage.getItem('userInfo')
  selectedBook: any = this.bookService.selectedBook$
  bookLender: string
  isAvailable: boolean

  updateBookForm: FormGroup

  constructor (
    private bookService: BooksService,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit (): void {
    this.updateBookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author_name: new FormControl('', Validators.required),
      first_publish_year: new FormControl('', Validators.required),
      description: new FormControl(''),
      covers: new FormControl('../../../assets/media/cover_example.jpg'),
      available: new FormControl()
    })

    this.bookId = this.activatedRoute.snapshot.paramMap.get('id')
    this.bookService.getSelectedBook(this.bookId).subscribe((data) => {
      this.bookCover = data.covers
      this.updateBookForm.patchValue(data)
      this.selectedBook.next(data)
    })

    this.bookService.getAllBooks().subscribe((data) => {
      const someBooks = this.bookService.sliceAllBooks(8, data)
      this.allBooks.next(someBooks)
    })
    this.selectedBook.subscribe((info) => {
      this.bookLender = info.lender
      this.isAvailable = info.available
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
}
