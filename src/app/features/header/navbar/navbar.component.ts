import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends HeaderComponent implements OnInit {

  constructor() {
    super();
  }

  override async ngOnInit(): Promise<void> {
    await super.ngOnInit();
  }

}
