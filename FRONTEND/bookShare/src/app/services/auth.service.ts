import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
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
    if (userData) {
      return true
    }
    return false
  }

  validate (userInfo: User):Observable<User> {
    return this.http.post<User>(this.authLoginURL, userInfo)
  }
}
