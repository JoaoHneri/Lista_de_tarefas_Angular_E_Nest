import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { NavTollbarCComponent } from './components/nav-tollbar-c/nav-tollbar-c.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavTollbarCComponent,CustomSidenavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
