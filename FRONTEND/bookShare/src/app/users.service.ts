import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { User } from './model/User'
import { CONSTANTS } from '../assets/const'

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
}
