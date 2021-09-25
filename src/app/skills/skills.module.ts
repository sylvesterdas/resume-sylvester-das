import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RoundProgressModule
  ],
  exports: [
    SkillsComponent
  ],
})
export class SkillsModule { }
