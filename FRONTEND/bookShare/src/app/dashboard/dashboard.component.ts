import { Component, OnInit } from '@angular/core'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books = this.bookService.books$

  constructor (private bookService: BooksService) {}

  ngOnInit (): void {
  }
}
