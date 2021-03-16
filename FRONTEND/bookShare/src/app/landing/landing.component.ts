import { Component, OnInit } from '@angular/core'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  statusLogin : Boolean = false
  statusRegister : Boolean = false

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor (private authService: AuthService) {}

  ngOnInit (): void {
  }

  sendLoginInfo () {
    console.log('en el comp', this.registerForm.value)
    this.authService.loginFront(this.registerForm.value)
  }

  changeClassLogin () {
    this.statusLogin = !this.statusLogin
  }

  changeClassRegister () {
    this.statusRegister = !this.statusRegister
  }
}
