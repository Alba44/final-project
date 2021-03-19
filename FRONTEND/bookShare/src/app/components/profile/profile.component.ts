import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { Book } from 'src/app/models/Book'
import { User } from 'src/app/models/User'
import { AuthService } from 'src/app/services/auth.service'
import { BooksService } from 'src/app/services/books.service'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users: BehaviorSubject<User[]> = this.usersService.users$
  userBooks: BehaviorSubject<Book[]> = this.booksService.userBooks$
  loggedUser: any = this.authService.loggedUser$
  userId

  updateDetailsForm: FormGroup

  constructor (
    private usersService: UsersService,
    private booksService: BooksService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.updateDetailsForm = new FormGroup({
      nickname: new FormControl(''),
      name: new FormControl('', Validators.required),
      DOB: new FormControl(''),
      city: new FormControl(''),
      email: new FormControl({ value: '', disabled: true }, (Validators.email, Validators.required)),
      password: new FormControl('', (Validators.required, Validators.minLength(8)))
    })

    this.userId = this.activatedRoute.snapshot.paramMap.get('id')
    this.usersService.getLoggedUser(this.userId).subscribe((data) => {
      this.updateDetailsForm.patchValue(data)
      this.loggedUser.next(data)
    })

    this.booksService.getUserBooks(this.userId)
  }

  showNewBookDialog () {
    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.add('display')
  }

  updateDetails (formInfo) {
    this.usersService.updateUser(formInfo)
  }
}
