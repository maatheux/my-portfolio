import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CarouselModule } from 'primeng/carousel';
import { AboutComponent } from './components/about/about.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonModule } from 'primeng/button';
import { ContactComponent } from './components/contact/contact.component';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TimelineModule,
    CardModule,
    TooltipModule,
    ButtonModule,
    ToastModule,
    OverlayPanelModule,
  ],
  exports: [
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  providers: [
    MessageService
  ]
})
export class HomeModule { }
