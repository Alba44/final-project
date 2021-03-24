import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingComponent } from './components/landing/landing.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ProfileComponent } from './components/profile/profile.component'
import { SearchListComponent } from './components/search-list/search-list.component'
import { AuthGuardService as AuthGuard } from './services/auth-guard.service'
import { BookDetailsComponent } from './components/book-details/book-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchListComponent, canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookDetailsComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
