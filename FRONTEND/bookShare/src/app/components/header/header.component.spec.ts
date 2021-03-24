import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { LandingComponent } from '../landing/landing.component'
import { ProfileComponent } from '../profile/profile.component'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule.withRoutes(
        [{ path: 'landing', component: LandingComponent },
          { path: 'profile/userId', component: ProfileComponent }]
      ), RouterModule.forRoot([])]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    router = TestBed.inject(Router)
  })

  it('should call navigate with navigate function', () => {
    spyOn(component, 'navigate').and.callThrough()

    const navigateSpy = spyOn(router, 'navigate')

    component.navigate()

    expect(navigateSpy).toHaveBeenCalled()
  })

  it('should call navigate with logout function', () => {
    spyOn(component, 'navigate').and.callThrough()

    const navigateSpy = spyOn(router, 'navigate')

    component.logout()

    expect(navigateSpy).toHaveBeenCalledWith(['/landing'])
  })
})
