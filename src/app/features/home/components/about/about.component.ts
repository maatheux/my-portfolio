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
      info: ["Making adjustments and creating new features for a .NET API connected to a SQL Server database, executing queries on thousands of data points to be consumed by the Front-end.", "Developing modules for the portal built in Angular, utilizing various functionalities such as indicators, charts, updatable tables, and Excel extraction.", "Implementing new features in the Front-end that enhance performance and speed, such as utilizing Lazy Loading in components to prevent data overload.", "Automating processes using ETL, Python, and Python libraries for loading and querying SQL Server databases."],
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
