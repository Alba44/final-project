import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { Book } from 'src/app/models/Book'
import { BooksService } from 'src/app/services/books.service'

import { BookDetailsComponent } from './book-details.component'

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent
  let fixture: ComponentFixture<BookDetailsComponent>
  let mockBooksServ: BooksService
  let book: Book

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      providers: [{ provide: BooksService }],
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    mockBooksServ = TestBed.get(BooksService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should return a book when calling getSelectedBook onInit', () => {
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
    const spyServFunction = spyOn(mockBooksServ, 'getSelectedBook').and.returnValue(of(book))
    component.ngOnInit()

    expect(spyServFunction).toHaveBeenCalled()
  })

  it('should return a book when calling getAllBooks onInit', () => {
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

  it('should return a book when calling getSelectedBook to rerender', () => {
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
    const spyServFunction = spyOn(mockBooksServ, 'getSelectedBook').and.returnValue(of(book))
    component.renderBookInfo('string')

    expect(spyServFunction).toHaveBeenCalled()
  })

  it('should call updateBook', () => {
    const spyFn = spyOn(mockBooksServ, 'updateBook').and.callThrough()

    component.updateInfo({})

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call deleteBookFromBooks', () => {
    const spyFn = spyOn(mockBooksServ, 'deleteBookFromBooks').and.callThrough()

    component.removeBook()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call deleteBookFromUser', () => {
    const spyFn = spyOn(mockBooksServ, 'deleteBookFromUser').and.callThrough()

    component.removeBook()

    expect(spyFn).toHaveBeenCalled()
  })

  it('should call updateBook', () => {
    component.isAvailable = true
    const spyFn = spyOn(mockBooksServ, 'updateBook').and.callThrough()

    component.borrowBook()

    expect(spyFn).toHaveBeenCalled()
    expect(component.isAvailable).toBe(false)
  })
})
