import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CarouselModule } from 'primeng/carousel';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    MainComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    MainComponent,
    AboutComponent,
  ]
})
export class HomeModule { }
