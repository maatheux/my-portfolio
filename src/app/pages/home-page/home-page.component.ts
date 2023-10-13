import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public displayVisibility = false;

  public windowWidth?: number;

  private header: any;
  private headerHeight: any;

  private sideBarState: boolean = false;

  @HostListener('document:scroll', ['$event'])
  onWindowScroll(event?: Event) {
    if (window.scrollY > this.headerHeight + 10 && window.scrollY < this.headerHeight + 30 && !this.sideBarState) {
      this.header.classList.add('before-fixed-header');
    }
    else if (window.scrollY > this.headerHeight + 30 && !this.sideBarState) {
      this.header.classList.remove('before-fixed-header');
      this.header.classList.add('fixed-header');
    } else {
      this.header.classList.remove('fixed-header');
      this.header.classList.remove('before-fixed-header');
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.header = document.querySelector('header');
    this.headerHeight = this.header.offsetHeight;
  }

  HandleSidebar(event: boolean) {
    this.sideBarState = event;
    event ? this.header.classList.remove('fixed-header') : this.header.classList.add('fixed-header');
  }



}
