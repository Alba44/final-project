import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { BooksService } from '../../services/books.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: any = this.bookService.books$

  filterForm = this.fb.group({
    searchBy: ['title', Validators.required]
  })

  searchTerm$ = new Subject();
  books$ = this.searchTerm$
    .pipe(
      switchMap((search: any) => this.bookService.filterBooks(search))
    ).subscribe();

  constructor (private bookService: BooksService, private fb: FormBuilder) {}

  ngOnInit (): void {
    this.bookService.getAllBooks()
  }

  search ({ searchBy }, term) {
    this.searchTerm$.next({ term, searchBy })
  }
}
