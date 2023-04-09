import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
