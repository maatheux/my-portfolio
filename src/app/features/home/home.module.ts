import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CarouselModule } from 'primeng/carousel';
import { AboutComponent } from './components/about/about.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    MainComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TimelineModule,
    CardModule,
  ],
  exports: [
    MainComponent,
    AboutComponent,
  ]
})
export class HomeModule { }
