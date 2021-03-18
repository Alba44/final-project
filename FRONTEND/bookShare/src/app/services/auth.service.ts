/* eslint-disable no-debugger */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { CONSTANTS } from '../../assets/const'
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authRegisterURL = `${CONSTANTS.urlDDBB}${CONSTANTS.authRegisterParams}`
  authLoginURL = `${CONSTANTS.urlDDBB}${CONSTANTS.authLoginParams}`
  loggedUser$ = new BehaviorSubject<User[]>([])

  constructor (private http: HttpClient) { }

  registerFront (registerInfo) {
    return this.http.post<User>(this.authRegisterURL, registerInfo).subscribe()
  }

  public isAuthenticated () : Boolean {
    const userData = localStorage.getItem('userInfo')
    console.log('esto es userData en isAuthenticated', userData)
    if (userData) {
      return true
    }
    return false
  }

  public setUserInfo (userData) {
    this.loggedUser$.next(userData)
    localStorage.setItem('userInfo', userData.email)
  }

  public validate (email, password) {
    return this.http.post(this.authLoginURL, { email: email, password: password })
  }
}
