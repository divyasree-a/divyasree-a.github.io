import { Component } from '@angular/core';

import { Project } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }
  
  projects: Array<Project> = [{
    title: 'CTC Prediction',
    content: 'Predicting CTC with past 5 years data using XGBoost Language – Python Libraries used – NumPy, Pandas, Matplotlib, and XGBoost'
  },{
    title: 'Bookstore website',
    content: 'Angular'
  }]
}
