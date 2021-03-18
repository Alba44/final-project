/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'
import { BooksService } from 'src/app/services/books.service'
import { UsersService } from 'src/app/services/users.service'

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
    private booksService: BooksService,
    private authService: AuthService
  ) {}

  ngOnInit (): void {
    this.updateDetailsForm = new FormGroup({
      nickname: new FormControl(''),
      name: new FormControl('', Validators.required),
      DOB: new FormControl(''),
      city: new FormControl(''),
      email: new FormControl('', (Validators.email, Validators.required)),
      password: new FormControl('', (Validators.required, Validators.minLength(8)))
    })

    this.authService.loggedUser$.subscribe((data) => {
      console.log('esto es data', data)
      this.updateDetailsForm.patchValue(data)
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
    console.log(formInfo)
    this.usersService.updateUser(formInfo) // hacer put al back con la info updated
  }
}
