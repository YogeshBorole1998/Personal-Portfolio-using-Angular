import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JavaScript',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'TypeScript',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Protractor Testing',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Selenium Testing',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'API Testing',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Jest',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Java',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Angular',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'AWS',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'Git',
      level: 'Intermidiate',
      rating: 75,
    }
  ];
  constructor() { }

  ngOnInit(): void { }
}
