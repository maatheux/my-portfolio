import { Component, OnInit } from '@angular/core';
import { CarouselResponsiveOptions } from '@features/home/models/projects/carousel-responsive-options';
import { Carousel } from 'primeng/carousel';
import { ProjectsInfo } from '@features/home/models/projects/projects-info';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projectsInfo: ProjectsInfo[] = [];

  public responsiveOptions: CarouselResponsiveOptions[] = [];

  constructor() {
    Carousel.prototype.onTouchMove = () => { };

    this.responsiveOptions = [
      {
        breakpoint: '19800px',
        numVisible: 2,
        numScroll: 2
      },
      /* {
        breakpoint: '1980px',
        numVisible: 3,
        numScroll: 3
      }, */
      {
          breakpoint: '1024px',
          numVisible: 2,
          numScroll: 2
      },
      /* {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      }, */
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    this.projectsInfo = [
      {
        title: 'Theater System API',
        imageUrl: '../../../../../assets/images/projects/theater-img.jpeg',
        githubUrl: 'https://github.com/maatheux/theater-system-api',
        isUnderConstruction: false,
      },
      {
        title: 'My Games Project',
        imageUrl: '../../../../../assets/images/projects/my-games-img.png',
        githubUrl: 'https://github.com/maatheux/my-games-dotnet',
        isUnderConstruction: false,
      },
      {
        title: 'COH-PIAH Project',
        imageUrl: '../../../../../assets/images/projects/coh-piah-project-img.jpeg',
        githubUrl: 'https://github.com/maatheux/algoritmo-detecta-copia',
        isUnderConstruction: false,
      },
      {
        title: 'Meu Time Project',
        imageUrl: '../../../../../assets/images/projects/meu-time-img.png',
        githubUrl: 'https://github.com/maatheux/football-project',
        projectUrl: 'https://meutime.matheuslima.net',
        isUnderConstruction: false,
      },
      {
        title: 'Pokedex Project',
        imageUrl: '../../../../../assets/images/projects/pokedex-img.png',
        githubUrl: 'https://github.com/maatheux/pokedex',
        projectUrl: 'https://pokedex-maatheux.vercel.app/',
        isUnderConstruction: false,
      },
      {
        title: 'Weather Forecast Project',
        imageUrl: '../../../../../assets/images/projects/weather-img.png',
        githubUrl: 'https://github.com/maatheux/weather-forecast-project',
        isUnderConstruction: true,
      },
      {
        title: 'Beauty Salon Project',
        imageUrl: '../../../../../assets/images/projects/beauty-salon-img.png',
        githubUrl: 'https://github.com/maatheux/Origin-Six',
        projectUrl: 'https://maatheux.github.io/beauty-salon-webpage/',
        isUnderConstruction: false,
      },
      {
        title: 'To-Do List Project',
        imageUrl: '../../../../../assets/images/projects/to-do-list-img.png',
        githubUrl: 'https://github.com/maatheux/todo-list',
        projectUrl: 'https://todo-list-green-sigma.vercel.app',
        isUnderConstruction: false,
      },
      {
        title: 'Calculator Project',
        imageUrl: '../../../../../assets/images/projects/calculadora-img.png',
        githubUrl: 'https://github.com/maatheux/Calculator',
        projectUrl: 'https://calculator-marinhoo.vercel.app',
        isUnderConstruction: false,
      },
      {
        title: 'Star Wars Project',
        imageUrl: '../../../../../assets/images/projects/may-the-forth-be-with-you-img.png',
        githubUrl: 'https://github.com/maatheux/maythe4thbewithyou',
        projectUrl: 'https://maatheux.github.io/maythe4thbewithyou/',
        isUnderConstruction: false,
      },
      {
        title: 'Spider Man Project',
        imageUrl: '../../../../../assets/images/projects/spider-man-img.png',
        githubUrl: 'https://github.com/maatheux/spider-man-website',
        projectUrl: 'https://maatheux.github.io/spider-man-website/',
        isUnderConstruction: false,
      },
      {
        title: 'Fitness App Project',
        imageUrl: '../../../../../assets/images/projects/fitness-img.png',
        githubUrl: 'https://github.com/maatheux/fitness-app',
        isUnderConstruction: false,
      },
    ]
  }

  ngOnInit(): void {
  }

}
