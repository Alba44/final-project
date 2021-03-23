/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
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

  it('should call navigate with logout function', () => {
    const mockRouter = {
      navigate: jasmine.createSpy('navigate')
    }
    component.logout()

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/'])
  })

  it('should call navigate with navigate function', () => {
    const spyFn = spyOn(component.router, 'navigate').and.callThrough()
    component.navigate()

    expect(spyFn).toHaveBeenCalled()
  })
})
