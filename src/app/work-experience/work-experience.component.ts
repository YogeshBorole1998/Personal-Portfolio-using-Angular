import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior Software Engineer',
      company: 'Capgemini',
      duration: 'Dec 2021 - Present',
      description: [
        'Developed user-friendly applications using Angular, JavaScript, & AWS',
        'Worked with Velocloud Project Team to drive Protractor & Jest Automation',
        'Automated API & UI tests, review codes & provided feedback to peers',
        'Development bugs validation & Defect Fixes',
        'Automate test cases for VCO features covering UI, API, Workflow areas',
        'Angular UI test automation using Protractor',
        'Script Optimisation',
        'Regression Duty',
        'Test Plan Preparation',
        'Feature Testing'
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}