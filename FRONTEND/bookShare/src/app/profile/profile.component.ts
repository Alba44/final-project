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
  loggedUser

  isPicUpdated: Boolean = false
  updatePicInput = new FormControl('')

  updateDetailsForm: FormGroup

  constructor (
    private usersService: UsersService,
    private booksService: BooksService
  ) {}

  ngOnInit (): void {
    this.updateDetailsForm = new FormGroup({
      nickname: new FormControl(''),
      name: new FormControl('', Validators.required),
      dob: new FormControl(''),
      city: new FormControl(''),
      email: new FormControl('', (Validators.email, Validators.required)),
      password: new FormControl('', (Validators.required, Validators.minLength(8)))
    })

    this.usersService.getUsers().subscribe((answer) => {
      this.loggedUser = answer[0]
      this.updateDetailsForm.patchValue(answer[0])
    })

    this.getBooks()
  }

  getBooks () {
    this.booksService.getAllBooks() // .get del backend en el booksService
    this.books.subscribe(data => { this.books = data })
  }

  showNewBookDialog () {
    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.add('display')
  }

  updateDetails (formInfo) {
    this.usersService.updateUser(formInfo) // hacer put al back con la info updated
  }
}
