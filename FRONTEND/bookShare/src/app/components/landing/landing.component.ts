/* eslint-disable dot-notation */
import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  statusLogin : Boolean = false
  statusRegister : Boolean = false

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

    email = new FormControl('', Validators.required)
    password = new FormControl('', Validators.required)

    constructor (private authService: AuthService, private router : Router) {}

    sendRegisterInfo () {
      this.authService.registerFront(this.registerForm.value)
    }

    sendLoginInfo () {
      this.authService.validate(this.email.value, this.password.value).subscribe((data) => {
        this.authService.setUserInfo(data)
      })
      this.router.navigate(['profile'])
    }

    changeClassLogin () {
      this.statusLogin = !this.statusLogin
    }

    changeClassRegister () {
      this.statusRegister = !this.statusRegister
    }
}
