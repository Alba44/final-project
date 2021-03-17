import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { BooksService } from '../books.service'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  searchTerm$ = new Subject();
  books$ = this.searchTerm$
    .pipe(
      switchMap((search: any) => this.bookService.filterBooks(search))
    );

  constructor (private bookService: BooksService) {}

  ngOnInit (): void {

  }

  searchBook (input, term) {
    this.searchTerm$.next({ term, input })
  }
}
