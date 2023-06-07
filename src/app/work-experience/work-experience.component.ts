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
      role: 'Associate Software Engineer',
      company: 'Capgemini',
      duration: 'Dec 2021 - Present',
      description: [
        'Worked with Vmware Project Team to Protractor & Jest Automation ',
        'Worked on various technologies : (Angular, JavaScript, TypeScript, Protractor)',
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}