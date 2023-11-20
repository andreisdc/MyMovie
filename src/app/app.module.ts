import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MoviesBoxComponent } from './Pages/user-page/Components/movies-box/movies-box.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LoginBoxComponent } from './Pages/login-page/login-box/login-box.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { SignupBoxComponent } from './Pages/signup-page/signup-box/signup-box.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { AuthGuard } from './Guard/auth.guard';
import { HeaderComponent } from './Pages/user-page/Components/header/header.component';
import { UserHomePageComponent } from './Pages/user-page/Components/user-home-page/user-home-page.component';
import { DeleteMovieBoxComponent } from './Pages/admin-page/Components/delete-movie-box/delete-movie-box.component';
import { AddMovieBoxComponent } from './Pages/admin-page/Components/add-movie-box/add-movie-box.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginBoxComponent,
    SignupPageComponent,
    SignupBoxComponent,
    UserPageComponent,
    HeaderComponent,
    UserHomePageComponent,
    MoviesBoxComponent,
    AdminPageComponent,
    AddMovieBoxComponent,
    DeleteMovieBoxComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    MatSliderModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
