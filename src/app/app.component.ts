import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectiveComponent } from './objective/objective.component';
import { InformationComponent } from './information/information.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InformationComponent,ObjectiveComponent,EducationComponent,ExperienceComponent,ProjectsComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume-angular';
}
