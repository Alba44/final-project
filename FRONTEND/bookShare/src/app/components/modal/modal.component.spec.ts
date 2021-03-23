import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BooksService } from 'src/app/services/books.service'
import { UsersService } from 'src/app/services/users.service'

import { ModalComponent } from './modal.component'

describe('ModalComponent', () => {
  let component: ModalComponent
  let fixture: ComponentFixture<ModalComponent>
  let mockUsersServ: Partial<UsersService>
  let mockBooksServ: Partial<BooksService>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        { provide: UsersService, useValue: mockUsersServ },
        { provide: BooksService, useValue: mockBooksServ }],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
