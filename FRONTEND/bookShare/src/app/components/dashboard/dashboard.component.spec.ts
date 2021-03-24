import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { of } from 'rxjs'
import { Book } from 'src/app/models/Book'
import { BooksService } from 'src/app/services/books.service'

import { DashboardComponent } from './dashboard.component'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>
  let mockBooksServ: BooksService
  let book: Book

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: BooksService },
        { provide: FormBuilder }],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    mockBooksServ = TestBed.get(BooksService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call getAllBooks on init', () => {
    const spyBookServUpdate = spyOn(mockBooksServ, 'getAllBooks').and.callThrough()

    component.ngOnInit()

    expect(spyBookServUpdate).toHaveBeenCalled()
  })

  it('should return a book when calling getAllBooks', () => {
    component.allBooks = mockBooksServ.books$

    book = {
      _id: 'string',
      lender: 'string',
      title: 'string',
      author_name: [],
      first_publish_year: 1,
      covers: 'string',
      description: 'string',
      available: true
    }
    const spyServFunction = spyOn(mockBooksServ, 'getAllBooks').and.returnValue(of([book]))
    component.ngOnInit()

    expect(spyServFunction).toHaveBeenCalled()
  })
})
