import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { BooksService } from 'src/app/services/books.service'
import { UsersService } from 'src/app/services/users.service'

import { ProfileComponent } from './profile.component'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>
  let mockUsersServ: Partial<UsersService>
  let mockBooksServ: Partial<BooksService>
  let mockAuthServ: Partial<AuthService>
  let mockActivatedRoute: Partial<Router>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: UsersService, useValue: mockUsersServ },
        { provide: BooksService, useValue: mockBooksServ },
        { provide: AuthService, useValue: mockAuthServ },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
