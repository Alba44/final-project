import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BooksService } from 'src/app/services/books.service'

import { DashboardComponent } from './dashboard.component'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>
  let mockBooksServ: Partial<BooksService>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: BooksService, useValue: mockBooksServ }],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
