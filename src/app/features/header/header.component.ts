import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidebarStateEmit = new EventEmitter();

  public sidebarState = false;

  constructor() { }

  ngOnInit(): void {
  }

  HandleSidebar() {
    this.sidebarState = this.sidebarState ? false : true;
    console.log(this.sidebarState);

    this.CloseSidebar();

  }

  CloseSidebar() {
    this.sidebarStateEmit.emit(this.sidebarState);
  }

  RouteToHome() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
