import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'

import { HeaderComponent } from './header.component'

describe('Given a HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let mockRouter: Partial<Router>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: Router, useValue: mockRouter }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    const spyFn = spyOn(component, 'navigate')
    component.navigate()

    expect(spyFn).toHaveBeenCalled()
  })
})
