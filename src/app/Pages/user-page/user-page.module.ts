import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomePageComponent } from './Components/user-home-page/user-home-page.component';
import { MoviesBoxComponent } from './Components/movies-box/movies-box.component';



@NgModule({
  declarations: [
  
    UserHomePageComponent,
       MoviesBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserPageModule { }
