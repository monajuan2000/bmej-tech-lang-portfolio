import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicToolbarComponent } from './util/components/basic_toolbar/basic-toolbar.component';
import { ProgrammingProjectsCarouselComponent } from './util/components/programming_projects_carousel/programming-projects-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BasicToolbarComponent,
    ProgrammingProjectsCarouselComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'bmej-tech-lang-portfolio';
}
