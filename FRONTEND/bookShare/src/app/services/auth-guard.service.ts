import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor (
    private authService: AuthService,
    private route: Router
  ) { }

  canActivate () {
    if (this.authService.isAuthenticated()) { // if the guard returns true, the navigation will continue;
      return true
    }
    this.route.navigate(['']) // otherwise, it navigates to login.
    return false
  }
}
