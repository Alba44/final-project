/* eslint-disable no-useless-constructor */
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { BooksService } from 'src/app/services/books.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
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
    covers: new FormControl('')
  })

  constructor (
    private element: ElementRef,
    private http: HttpClient,
    private booksService: BooksService) { }

  ngOnInit (): void {
  }

  closeDialog () {
    this.bookFormInfo.patchValue({})
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
    this.booksService.createBook(this.bookFormInfo.value)
    this.booksService.getAllBooks()

    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.remove('display')
  }
}
