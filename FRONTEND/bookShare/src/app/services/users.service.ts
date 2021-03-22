import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { User } from '../models/User'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersURL: string = `${environment.server}${environment.usersParams}`
  users$ = new BehaviorSubject<User[]>([])

  constructor (private http: HttpClient) { }

  getUsers () {
    return this.http.get<User[]>(this.usersURL)
  }

  updateUser (newUserInfo: object, userId: string) {
    return this.http.put<User>(`${this.usersURL}/${userId}`, newUserInfo).subscribe()
  }

  addBookToUser (bookInfo: object, userId: string) {
    return this.http.post<User>(`${this.usersURL}/books/${userId}`, bookInfo).subscribe()
  }

  getLoggedUser (userId: string) {
    return this.http.get<User>(`${this.usersURL}/${userId}`)
  }
}
