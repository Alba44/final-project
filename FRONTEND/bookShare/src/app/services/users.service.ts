import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { CONSTANTS } from '../../assets/const'
import { User } from '../models/User'
import { ActivatedRoute } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersURL: string = `${CONSTANTS.urlDDBB}${CONSTANTS.usersParams}`
  users$ = new BehaviorSubject<User[]>([])

  constructor (private http: HttpClient) { }

  getUsers () {
    return this.http.get<User[]>(this.usersURL)
  }

  updateUser (newUserInfo, userId) {
    return this.http.put<User>(`${this.usersURL}/${userId}`, newUserInfo).subscribe()
  }

  getLoggedUser (userId) {
    return this.http.get<User>(`${this.usersURL}/${userId}`)
  }
}
