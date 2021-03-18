import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { CONSTANTS } from '../../assets/const'
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersURL: string = `${CONSTANTS.urlDDBB}${CONSTANTS.usersParams}`
  users$ = new BehaviorSubject<User[]>([])

  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }

  getUsers () {
    return this.http.get<User[]>(this.usersURL)
  }

  updateUser (newUserInfo) {
    return this.http.put<User>(this.usersURL, newUserInfo).subscribe()
  }
}