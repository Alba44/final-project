import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { BooksService } from 'src/app/services/books.service'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  urlAPIBook = 'https://openlibrary.org/books/'
  urlCover = 'https://covers.openlibrary.org/b/id/'
  urlNoImage = 'https://www.ourbookshelves.com/media/pic_folder/default_pic/default.png'
  bookKey: string
  bookJSON: any
  coverString: string
  coverPicURL: string

  searchedBookInfo

  bookFormInfo = new FormGroup({
    title: new FormControl('', Validators.required),
    author_name: new FormControl('', Validators.required),
    first_publish_year: new FormControl('', Validators.required),
    covers: new FormControl(''),
    available: new FormControl(true)
  })

  constructor (
    private booksService: BooksService,
    private usersService: UsersService) { }

  closeDialog () {
    this.bookFormInfo.reset()
    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.remove('display')
  }

  searchAPI (rawInfo) {
    const regex = /\s/ig
    const info = rawInfo.replaceAll(regex, '+')
    this.booksService.fetchAPI(info).subscribe(data => {
      this.searchedBookInfo = data
      this.bookFormInfo.patchValue(this.searchedBookInfo.docs[0])
      this.bookKey = this.searchedBookInfo.docs[0].cover_i
      this.fetchAPICover(this.bookKey)
    })
  }

  fetchAPICover (infoKey) {
    if (infoKey === undefined || infoKey === null) {
      this.bookFormInfo.controls.covers.setValue(this.urlNoImage)
    } else {
      this.coverPicURL = `${this.urlCover}${infoKey}-M.jpg`
      this.bookFormInfo.controls.covers.setValue(this.coverPicURL)
    }
  }

  sendBookBack () {
    const userId = localStorage.getItem('userInfo')
    const newBook = { ...this.bookFormInfo.value, lender: userId }
    console.log('form value', this.bookFormInfo.value)
    this.booksService.createBook(newBook).subscribe((book) => {
      this.usersService.addBookToUser({ books: book._id }, userId)
    })
    this.bookFormInfo.reset()

    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.remove('display')
  }
}
