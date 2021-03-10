import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// import { LandingComponent } from './landing/landing.component'
// import { ProfileComponent } from './main/profile/profile.component'
// import { AuthGuardService as AuthGuard } from './auth-guard.service'

const routes: Routes = [
  // { path: '/', component: LandingComponent },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
