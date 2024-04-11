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
    ['Work Exp', '2.5 Years'],
    ['Education', 'Bachelor of Engineering (BE) (2021)'],
    ['Interests', 'Cricket, Solving Coding Challanges'],
    ['Location', 'Pune, Maharashtra, India']
  ];

  aboutMe: string[] = [
    'Hi, I have been working as Associate-II Software Engineer for more than 2.5 years at Capgemini - Pune, Maharashtra.',
    'As a Senior Software Engineer at Capgemini, I develop and maintain robust applications using a skillset encompassing Angular, JavaScript, HTML5, CSS and implement efficient CRUD operations in REST APIs. My work thrives within dynamic, fast-paced environments, where I collaborate seamlessly with highly skilled developers, clients, and stakeholders to deliver top-tier solutions.',
    'Expertise in UI development, troubleshooting, and testing using Jest, Protractor, Selenium, API and web inspectors. I have also earned multiple certifications, such as Angular - The Complete Guide, Programming with JavaScript, Protractor(Angular Testing) Framework. I am passionate about learning new technologies and improving my existing skills, and I aim to create user-friendly and innovative applications that solve real-world problems.',
    'Seeking new opportunities as a Software Tester & Developer to utilize expertise in delivering cutting-edge projects.',
    'Proficient in leveraging Angular developement, JavaScript end to end Automation skills to contribute to the success of innovative teams, Always eager to learn new technologies.',
  ];

  constructor() { }

  ngOnInit(): void { }
}
