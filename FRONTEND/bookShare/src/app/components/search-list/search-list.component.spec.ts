import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BooksService } from 'src/app/services/books.service'

import { SearchListComponent } from './search-list.component'

describe('SearchListComponent', () => {
  let component: SearchListComponent
  let fixture: ComponentFixture<SearchListComponent>
  let mockBooksServ: Partial<BooksService>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchListComponent],
      providers: [{ provide: BooksService, useValue: mockBooksServ }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
