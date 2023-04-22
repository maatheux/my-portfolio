import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public jobHistory = [
    {
      title: 'Full Stack Developer - Maminfo',
      subtitle: '11/2023 - current',
      info: ["Developing web pages for our client's website, focused on the Customer Success team. Creating Customer Success metrics, charts, refreshable tables, and customer data registration forms. I work using Angular, Typescript, SCSS, RxJs, and PrimeNG.", "Developing new features on the Front End that help it to be more useful and faster. I am using Lazy Loading feature to avoid data overcharge.", "Developing unit tests on Angular projects with Karma and Jasmine.", "Updating  layouts.", "Developing new features in a C# Back End system with .NET and Entity Framework.", "Developing automatic activities using Python, Pandas, and some other libraries. Developing code to create and use CSV, XLSX and JSON data files. Connecting to SQL Servers database to insert, and get some data."]
    },
    {
      title: 'Intern - Oi S.A.',
      subtitle: '08/2021 - 11/2022',
      info: ["Developing our company's website. I work with Angular, Typescript, and SCSS.", "Coding new features and updating old code.", "Learning about Clean Code and how to use it in my projects."]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
