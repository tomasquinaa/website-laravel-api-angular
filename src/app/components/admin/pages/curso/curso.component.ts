import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent {
  course = [
    {
      id: 1,
      name: 'Angular',
      description:
        'Permite a criação de aplicativos robustos e escaláveis usando TypeScript/JavaScript',
      image: '../../../../../assets/angular.png',
    },
    {
      id: 2,
      name: 'Aprenda Vue',
      description:
        'É um framework progressivo de JavaScript utilizado para criar interfaces de usuário interativas',
      image: '../../../../../assets/vue.jpg',
    },
    {
      id: 3,
      name: 'Power BI',
      description:
        'É uma poderosa ferramenta de análise de dados e visualização desenvolvida pela Microsoft.',
      image: '../../../../../assets/power-bi.jpg',
    },
    {
      id: 4,
      name: 'Laravel PHP',
      description:
        'É um framework de desenvolvimento web em PHP conhecido por sua elegância,simplicidade.',
      image: '../../../../../assets/laravel.png',
    },
  ];
}
