import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (public router: Router) {}

  navigate () {
    const userId = localStorage.getItem('userInfo')
    this.router.navigate([`/profile/${userId}`])
  }

  logout () {
    localStorage.removeItem('userInfo')
    this.router.navigate(['/landing'])
  }
}
