import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LandingComponent } from './landing.component'

describe('LandingComponent', () => {
  let component: LandingComponent
  let fixture: ComponentFixture<LandingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent]
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

  it('should show login option when clicked', () => {
    const compToTest = new LandingComponent()
    expect(compToTest.statusLogin).toBe(false) // at first

    compToTest.changeClassLogin()
    expect(compToTest.statusLogin).toBe(true) // when clicked

    compToTest.changeClassLogin()
    expect(compToTest.statusLogin).toBe(false) // when clicked again
  })
  it('should show register option when clicked', () => {
    const compToTest = new LandingComponent()
    expect(compToTest.statusRegister).toBe(false)

    compToTest.changeClassRegister()
    expect(compToTest.statusRegister).toBe(true)

    compToTest.changeClassRegister()
    expect(compToTest.statusRegister).toBe(false)
  })
})
