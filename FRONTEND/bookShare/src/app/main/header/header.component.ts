import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false

  ngOnInit (): void {
  }

  changeLogin () : void {
    this.isLogged ? this.isLogged = false : this.isLogged = true
  }
}
