import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CarouselModule } from 'primeng/carousel';
import { AboutComponent } from './components/about/about.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { ProjectsComponent } from './components/projects/projects.component';




@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TimelineModule,
    CardModule,
    TooltipModule,
  ],
  exports: [
    MainComponent,
    AboutComponent,
    ProjectsComponent,
  ]
})
export class HomeModule { }
