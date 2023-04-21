import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '@features/header/header.module';
import { HomeModule } from '@features/home/home.module';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeModule,
  ]
})
export class HomePageModule { }
