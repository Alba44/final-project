import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // eslint-disable-next-line no-useless-constructor
  constructor (private authService: AuthService, private route: Router) { }

  canActivate () {
    if (this.authService.isAuthenticated()) {
      return true
    }
    this.route.navigate(['home'])
    return false
  }
}
