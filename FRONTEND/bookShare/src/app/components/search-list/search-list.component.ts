import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { BooksService } from '../../services/books.service'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
filterForm = this.fb.group({
  searchBy: ['title', Validators.required]
})

  books$ = this.bookService.books$;

  searchTerm$ = new Subject();
  bookSearch$ = this.searchTerm$
    .pipe(
      switchMap((search: any) => this.bookService.filterBooks(search))
    ).subscribe();

  constructor (private bookService: BooksService, private fb: FormBuilder) {}

  ngOnInit (): void {
  }

  searchBook ({ searchBy }, term) {
    this.searchTerm$.next({ term, searchBy })
  }
}
