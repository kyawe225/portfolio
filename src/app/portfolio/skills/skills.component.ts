import { Component } from '@angular/core';
import { skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : skill[]=[];
  constructor(){
    this.skills=[
      {
        name:"HTML",
        value:80
      },
      {
        name:"CSS",
        value:80
      },
      {
        name:"JAVASCRIPT",
        value:80
      },
      {
        name:"PHP",
        value:80
      },
      {
        name:"AspNet Core",
        value:80
      },
      {
        name:"java",
        value:80
      }
    ]
  }
}
