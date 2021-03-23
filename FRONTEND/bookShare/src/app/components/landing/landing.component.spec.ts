import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'

import { LandingComponent } from './landing.component'

describe('LandingComponent', () => {
  let component: LandingComponent
  let fixture: ComponentFixture<LandingComponent>
  let mockAuth: Partial<AuthService>
  let mockRouter: Partial<Router>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
      providers: [
        { provide: AuthService, useValue: mockAuth },
        { provide: Router, useValue: mockRouter }],
      imports: []
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  // it('should show login option when clicked', () => {
  //   const compToTest = new LandingComponent(mockAuth, mockRouter)
  //   expect(compToTest.statusLogin).toBe(false) // at first

  //   compToTest.changeClassLogin()
  //   expect(compToTest.statusLogin).toBe(true) // when clicked

  //   compToTest.changeClassLogin()
  //   expect(compToTest.statusLogin).toBe(false) // when clicked again
  // })
  // it('should show register option when clicked', () => {
  //   const compToTest = new LandingComponent(mockAuth, mockRouter)
  //   expect(compToTest.statusRegister).toBe(false)

  //   compToTest.changeClassRegister()
  //   expect(compToTest.statusRegister).toBe(true)

  //   compToTest.changeClassRegister()
  //   expect(compToTest.statusRegister).toBe(false)
  // })
  it('should create', () => {
    // eslint-disable-next-line no-undef
    const spyFn = spyOn(component.authService, 'registerFront').and.callThrough
    component.sendRegisterInfo()

    expect(spyFn).toHaveBeenCalled()
  })
})
