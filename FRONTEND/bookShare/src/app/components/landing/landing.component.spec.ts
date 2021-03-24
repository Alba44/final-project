/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'

import { LandingComponent } from './landing.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from 'src/app/services/auth.service'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'
import { User } from 'src/app/models/User'

describe('LandingComponent', () => {
  let component: LandingComponent
  let fixture: ComponentFixture<LandingComponent>
  let mockRouter: Partial<Router>
  let mockAuthServ: AuthService
  let user: User

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
      providers: [
        { provide: AuthService },
        { provide: HttpClient },
        { provide: Router, useValue: mockRouter }],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    mockAuthServ = TestBed.get(AuthService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call registerFront', () => {
    const spyServFunction = spyOn(mockAuthServ, 'registerFront').and.callThrough()
    component.sendRegisterInfo()

    expect(spyServFunction).toHaveBeenCalled()
  })

  it('should change statusLogin to true when changeClassLogin is called', () => {
    component.statusLogin = false
    component.changeClassLogin()

    expect(component.statusLogin).toBe(true)
  })

  it('should change statusRegister to false when changeClassLogin is called', () => {
    component.statusRegister = true
    component.changeClassLogin()

    expect(component.statusRegister).toBe(false)
  })

  it('should change statusRegister to true when changeClassRegister is called', () => {
    component.statusRegister = false
    component.changeClassRegister()

    expect(component.statusRegister).toBe(true)
  })

  it('should change statusLogin to false when changeClassRegister is called', () => {
    component.statusLogin = true
    component.changeClassRegister()

    expect(component.statusLogin).toBe(false)
  })

  it('should call validate', () => {
    const spyServFunction = spyOn(mockAuthServ, 'validate').and.callThrough()
    component.sendLoginInfo()

    expect(spyServFunction).toHaveBeenCalled()
  })

  it('should return a user when calling senRegisterInfo', () => {
    user = {
      _id: 'string',
      nickname: 'string',
      name: 'string',
      DOB: 'string',
      city: 'string',
      email: 'string',
      password: 'string',
      creationDate: 'string',
      books: [],
      photo: 'string'
    }
    const spyServFunction = spyOn(mockAuthServ, 'validate').and.returnValue(of(user))
    component.sendLoginInfo()

    expect(spyServFunction).toHaveBeenCalled()
  })

  it('should return a user when calling sendLoginInfo', () => {
    user = {
      _id: 'string',
      nickname: 'string',
      name: 'string',
      DOB: 'string',
      city: 'string',
      email: 'string',
      password: 'string',
      creationDate: 'string',
      books: [],
      photo: 'string'
    }
    const spyServFunction = spyOn(mockAuthServ, 'registerFront').and.returnValue(of(user))
    component.sendRegisterInfo()

    expect(spyServFunction).toHaveBeenCalled()
  })
})
