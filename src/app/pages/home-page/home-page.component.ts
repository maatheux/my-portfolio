import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public displayVisibility = false;

  public windowWidth?: number;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event?: Event) {
    this.windowWidth = window.innerWidth;

    if (this.windowWidth > 1024) this.displayVisibility = true;

  }

  constructor() { }

  ngOnInit(): void {
    this.onWindowResize();
  }

}
