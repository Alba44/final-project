import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingComponent } from './landing/landing.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'
import { SearchListComponent } from './search-list/search-list.component'
// import { AuthGuardService as AuthGuard } from './auth-guard.service'

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
