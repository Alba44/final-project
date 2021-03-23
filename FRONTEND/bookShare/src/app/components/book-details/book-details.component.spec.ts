import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { BooksService } from 'src/app/services/books.service'

import { BookDetailsComponent } from './book-details.component'

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent
  let fixture: ComponentFixture<BookDetailsComponent>
  let mockActivatedRoute
  let mockBookServ

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: BooksService, useValue: mockBookServ }],
      imports: [HttpClientModule, ReactiveFormsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
