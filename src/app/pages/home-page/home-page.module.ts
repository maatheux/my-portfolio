import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '@features/header/header.module';
import { HomeModule } from '@features/home/home.module';
import { FooterModule } from '@features/footer/footer.module';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeModule,
    FooterModule,
  ]
})
export class HomePageModule { }
