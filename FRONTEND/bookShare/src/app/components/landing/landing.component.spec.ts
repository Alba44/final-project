/* eslint-disable no-undef */
import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { By } from '@angular/platform-browser'
import { AuthService } from 'src/app/services/auth.service'

import { LandingComponent } from './landing.component'

describe('LandingComponent', () => {
  let component: LandingComponent
  let fixture: ComponentFixture<LandingComponent>
  let mockAuth: Partial<AuthService>
  let mockRouter: Partial<Router>
  let element: HTMLElement
  let debug: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
      providers: [
        { provide: AuthService, useValue: mockAuth },
        { provide: Router, useValue: mockRouter }],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    debug = fixture.debugElement.query(By.css('form'))
    element = debug.nativeElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('registerFront should have been called', () => {
    spyOn(component.authService, 'registerFront')
    component.sendRegisterInfo()

    expect(component.authService.registerFront).toHaveBeenCalled()
  })

  it('should call changeClassLogin method', () => {
    spyOn(component, 'changeClassLogin')
    element = fixture.debugElement.query(By.css('button')).nativeElement
    element.click()
    expect(component.changeClassLogin).toHaveBeenCalled()
  })
})
