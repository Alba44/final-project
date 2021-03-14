import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit } from '@angular/core'
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  urlAPIBooks = 'http://openlibrary.org/search.json?q='
  urlAPICover = 'https://openlibrary.org/books/'
  urlCover = 'https://covers.openlibrary.org/b/id/'
  coverKey
  coverJSON
  ultimateURL

  searchedBookInfo

  bookFormInfo = new FormGroup({
    title: new FormControl('', Validators.required),
    author_name: new FormControl('', Validators.required),
    first_publish_year: new FormControl('', Validators.required),
    description: new FormControl(''),
    covers: new FormControl('')
  })

  constructor (
    private element: ElementRef,
    private http: HttpClient,
    private booksService: BooksService) { }

  ngOnInit (): void {
  }

  closeDialog () {
    // hacer un post con la info
    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.remove('display')
  }

  fetchAPI (rawInfo) {
    const regex = /\s/ig
    const info = rawInfo.replaceAll(regex, '+')
    return this.http.get(`${this.urlAPIBooks}${info}`).subscribe(data => {
      this.searchedBookInfo = data
      this.bookFormInfo.patchValue(this.searchedBookInfo.docs[0])
      this.coverKey = this.searchedBookInfo.docs[0].cover_edition_key
      this.fetchAPICover()
    })
  }

  fetchAPICover () {
    return this.http.get(`${this.urlAPICover}${this.coverKey}.json`).subscribe(data => {
      this.coverJSON = data
      this.coverKey = this.coverJSON.covers[0]
      this.ultimateURL = `${this.urlAPICover}${this.coverKey}-M.jpg`
      this.bookFormInfo.patchValue(this.ultimateURL)
    })
  }

  sendBookBack () {
    this.booksService.createBook(this.bookFormInfo.value)

    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.remove('display')
  }
}
