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
      rating: 80,
    },
    {
      name: 'Angular',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Protractor Testing',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Cypress Testing',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Playwright Testing',
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
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'AWS',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'Git',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'NodeJS',
      level: 'Intermediate',
      rating: 75,
    }
  ];
  constructor() { }

  ngOnInit(): void { }
}
