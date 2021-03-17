import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: any = this.bookService.books$
  titleSearch
  authorSearch

  searchTerm$ = new Subject();
  books$ = this.searchTerm$
    .pipe(
      switchMap((search: any) => this.bookService.filterBooks(search))
    );

  constructor (private bookService: BooksService) {}

  ngOnInit (): void {
    this.bookService.getAllBooks()
  }

  search (input, term) {
    this.searchTerm$.next({ term, input })
  }
}
