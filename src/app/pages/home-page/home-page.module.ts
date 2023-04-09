import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '@features/header/header.module';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
  ]
})
export class HomePageModule { }
