import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ResumeComponent,
    EducationComponent,
    ExperienceComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule { }
