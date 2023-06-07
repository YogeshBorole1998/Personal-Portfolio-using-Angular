import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Yogesh Borole'],
    ['DOB', '11-06-1998'],
    ['Work Exp', '1.7 Years'],
    ['Education', 'Bachelor of Engineering (BE) (2021)'],
    ['Interests', 'Cricket, Solving Coding Challanges'],
    ['Location', 'Pune, Maharashtra, India']
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1.7 years of experience in software industry.',
    'Worked as a Software Test Engineer in Capgemini for various testing technologies (Angular UI Protractor , API, End To End, Jest, PyTest & Selenium Testing).',
    'Seeking new opportunities in Software Testing (both Manual and Automation) in software development industry to utilize my expertise in delivering cutting-edge projects.',
    'Proficient in leveraging Angular UI, JavaScript end to end Automation skills to contribute to the success of innovative teams, Always eager to learn new technologies.',
    'Currently, working as Associate Software Engineer at Capgemini.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
