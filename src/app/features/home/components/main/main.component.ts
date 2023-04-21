import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public programmingLanguagesLinks = ["https://angular.io/assets/images/logos/angular/angular.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg", /* "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",  */"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"]

  constructor() { }

  ngOnInit(): void {
  }

}
