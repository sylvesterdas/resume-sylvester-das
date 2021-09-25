import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills1: any = {
    AWS: 80,
    Firebase: 95,
    Electron: 60,
  }
  skills2: any = {
    Flutter: 90,
    Angular: 85,
    NodeJS: 90,
  }

  moreSkills = {
    leadership: 75,
    creativity: 80,
    management: 80,
    troubleshooting: 95,
    learning: 95,
    motivation: 100,
  }
}
