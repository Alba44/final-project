import { Component, OnInit } from '@angular/core'
// import { AuthService } from '../auth.service'
// import { Router } from '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  statusLogin : Boolean = false
  statusRegister : Boolean = false
  userEmail: String
  userPassword: String

  // eslint-disable-next-line no-useless-constructor
  // constructor (private authService: AuthService, private router: Router) {}

  ngOnInit (): void {
  }

  changeClassLogin () {
    this.statusLogin = !this.statusLogin
  }

  changeClassRegister () {
    this.statusRegister = !this.statusRegister
  }

  // login () {
  //   this.authService.validate(this.userEmail, this.userPassword)
  //     .then((response) => {
  //       // eslint-disable-next-line quotes
  //       // eslint-disable-next-line dot-notation
  //       this.authService.setUserInfo({ user: response['user'] })
  //       this.router.navigate(['profile'])
  //     })
  // }
}
