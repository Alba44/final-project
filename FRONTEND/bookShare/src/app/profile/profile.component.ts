/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { BooksService } from '../books.service'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users = this.usersService.users$
  books: any = this.booksService.books$

  isPicUpdated: Boolean = false
  updatePicInput = new FormControl('')

  alternativeBookCover: string = 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'

  updateDetails: FormGroup

  constructor (
    private usersService: UsersService,
    private booksService: BooksService
  ) {}

  ngOnInit (): void {
    this.updateDetails = new FormGroup({
      nickname: new FormControl(''),
      name: new FormControl('', Validators.required),
      dob: new FormControl(''),
      email: new FormControl('', (Validators.email, Validators.required)),
      password: new FormControl('', (Validators.required, Validators.minLength(8)))
    })

    this.usersService.getUsers().subscribe((answer) => {
      this.updateDetails.patchValue(answer[1])
    })

    this.getBooks()
  }

  getBooks () {
    this.booksService.getAllBooks() // .get del backend en el booksService
    this.books.subscribe(data => { this.books = data })
  }

  get passwordControl () {
    return this.updateDetails.get('password')
  }

  openUpdateInput () {
    this.isPicUpdated = !this.isPicUpdated
  }

  endUpdatePic () {
    this.isPicUpdated = !this.isPicUpdated
  }

  showNewBookDialog () {
    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.add('display')
  }
}
