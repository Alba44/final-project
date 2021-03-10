import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }

  isAuthenticated (): Boolean {
    const userData = localStorage.getItem('userInfo')
    if (userData && JSON.parse(userData)) {
      return true
    }
    return false
  }

  setUserInfo (user) {
    localStorage.setItem('userInfo', JSON.stringify(user))
  }

  validate (email, password) {
    return this.http.post('http://localhost:5000/api/authenticate', { username: email, password: password }).toPromise()
  }
}
