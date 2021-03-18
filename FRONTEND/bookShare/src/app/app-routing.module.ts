import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingComponent } from './components/landing/landing.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ProfileComponent } from './components/profile/profile.component'
import { SearchListComponent } from './components/search-list/search-list.component'
import { AuthGuardService as AuthGuard } from './services/auth-guard.service'

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchListComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
