import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingComponent } from './landing/landing.component'
import { DashboardComponent } from './main/dashboard/dashboard.component'
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
