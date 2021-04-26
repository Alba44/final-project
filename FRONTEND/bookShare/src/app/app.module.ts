import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LandingComponent } from './components/landing/landing.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ProfileComponent } from './components/profile/profile.component'
import { HttpClientModule } from '@angular/common/http'
import { ModalComponent } from './components/modal/modal.component'
import { SearchListComponent } from './components/search-list/search-list.component'
import { BookDetailsComponent } from './components/book-details/book-details.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ModalComponent,
    SearchListComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
