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
  userId: string
  profilePic: string

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
      email: new FormControl('', (Validators.email, Validators.required)),
      password: new FormControl('', (Validators.required, Validators.minLength(8))),
      photo: new FormControl('')
    })

    this.userId = this.activatedRoute.snapshot.paramMap.get('id')
    this.usersService.getLoggedUser(this.userId).subscribe((data) => {
      this.updateDetailsForm.patchValue(data)
      this.loggedUser.next(data)
      if (!data.photo) {
        this.profilePic = '../../assets/media/394-3947083_round-profile-picture-png-transparent-png.png'
      }
    })

    this.booksService.getUserBooks(this.userId)
  }

  showNewBookDialog () {
    const modalComp = document.getElementsByClassName('profile__dialog')[0]
    modalComp.classList.add('display')
  }

  updateDetails (formInfo) {
    console.log(formInfo)
    this.usersService.updateUser(formInfo, this.userId)
  }

  selectProfilePic (event: Event) {
    console.log(event)
    const file = (event.target as HTMLInputElement).files[0]
    this.updateDetailsForm.patchValue({ photo: file })
    this.updateDetailsForm.get('photo').updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      this.profilePic = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }
}
