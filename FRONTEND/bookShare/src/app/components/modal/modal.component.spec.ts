import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { of } from 'rxjs'
import { Book } from 'src/app/models/Book'
import { BooksService } from 'src/app/services/books.service'
import { UsersService } from 'src/app/services/users.service'

import { ModalComponent } from './modal.component'

describe('ModalComponent', () => {
  let component: ModalComponent
  let fixture: ComponentFixture<ModalComponent>
  let mockBooksServ: BooksService
  let book: Book

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        { provide: UsersService },
        { provide: BooksService }],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    mockBooksServ = TestBed.get(BooksService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should return book', () => {
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
    const spyServFunction = spyOn(mockBooksServ, 'createBook').and.returnValue(of(book))
    component.sendBookBack()

    expect(spyServFunction).toHaveBeenCalled()
  })

  it('should return the book info from API', () => {
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
    const spyServFunction = spyOn(mockBooksServ, 'fetchAPI').and.returnValue(of(book))
    component.searchAPI('string')

    expect(spyServFunction).toHaveBeenCalled()
  })

  it('should call fetchAPICover', () => {
    component.bookKey = 'string'
    const spyFetch = spyOn(component, 'fetchAPICover').and.callThrough()

    component.searchAPI('string')

    expect(spyFetch).toHaveBeenCalled()
  })
})
