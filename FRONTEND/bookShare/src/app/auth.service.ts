import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { User } from './model/User'
import { CONSTANTS } from '../assets/const'

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

  loginFront (loginInfo) {
    console.log('en el service', loginInfo)
    return this.http.post<User>(this.authLoginURL, loginInfo).subscribe()
  }

  // isAuthenticated (): Boolean {
  //   const userData = localStorage.getItem('userInfo')
  //   if (userData && JSON.parse(userData)) {
  //     return true
  //   }
  //   return false
  // }

  // setUserInfo (user) {
  //   localStorage.setItem('userInfo', JSON.stringify(user))
  // }

  // validate (email, password) {
  //   return this.http.post('http://localhost:5000/api/authenticate', { username: email, password: password }).toPromise()
  // }
}
