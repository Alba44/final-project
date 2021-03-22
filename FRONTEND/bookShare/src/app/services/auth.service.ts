import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../models/User'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authRegisterURL = `${environment.server}${environment.authRegisterParams}`
  authLoginURL = `${environment.server}${environment.authLoginParams}`
  loggedUser$ = new BehaviorSubject<User[]>([])

  constructor (private http: HttpClient) { }

  registerFront (registerInfo) {
    return this.http.post<User>(this.authRegisterURL, registerInfo).subscribe()
  }

  public isAuthenticated () : boolean {
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
