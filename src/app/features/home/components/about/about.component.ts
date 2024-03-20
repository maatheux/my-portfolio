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
      subtitle: '11/2022 - 01/2024',
      introduce: 'Working on the development of the Customer Success web portal for one of our clients, contributing to both the Front-end and Back-end development. This portal aims to provide various information and client indicators.',
      info: ["Assisted in the implementation of new features and maintaining existing features for a web API with ASP.NET that brings data of hundreds of customers.", "Improved the performance of some API requests, reducing the processing time from minutes to seconds.", "Developed pages in the team web system using Angular and created some upgrades using Angular features, resulting in a 100% reduction of browser crashes due to a massive amount of customer data.", "Automated some manual proccess using ETL, Python, Python libs, and Web Scraping, saving a few hours of team activities.", "Participated in tech team meetings about deployment and management of deploy server."],
      tools: 'C#, .NET, ASP.NET, Entity Framework, Dapper, JWT, Angular, Typescript, RxJs, PrimgNg, Sql Server, Python, ETL, CI/CD, AWS, EC2'
    },
    {
      title: 'Intern - Oi S.A.',
      subtitle: '08/2021 - 11/2022',
      info: ["Developing new features and improvements in layouts using Angular, Typescript, and SCSS.", "Making adjustments and improvements in Macros..", "Developing views in SQL Server."]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
