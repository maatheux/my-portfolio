import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public sidebarState = false;

  constructor() { }

  ngOnInit(): void {
  }

  HandleSidebar() {
    this.sidebarState = this.sidebarState ? false : true;
    console.log(this.sidebarState);


  }

}
