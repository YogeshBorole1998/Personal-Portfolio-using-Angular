import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Velocloud (Client : Capgemini)',
      technologies: 'Angular, TypeScript, Protractor, Jest, NodeJs, HTML, Jenkins, LXC, UI Bug Fixing',
      description: [
        'Develop and maintain robust applications using Angular, JavaScript, HTML5, and CSS, and implement efficient CRUD operations in REST APIs.',
        'Spearheaded comprehensive end-to-end tests using Protractor and Jest, ensuring robust validation of critical functionalities, resulting in improved software reliability.',
        'Experience in Automation as well as manual testing (Test Case Design, Test preparation, Test data collection and Test execution)',
        'Expertise in DevOps tools like GitLab, GitHub, Maven, Jenkins, Docker, Slack, AWS(EC2), LXC, Selenium, ServiceNow, Gitlab CI/CD, Confluence & Bug Reporting Tools like JIRA & Issue Manager.',
        'Retesting defect fixes on each release build.',
        'Designed and developed user-friendly, responsive web interfaces with HTML and CSS, adhering to accessibility and usability standards, enhancing user experience.',
        'Mentored and coached junior developers, imparting best practices in Angular, Protractor, Jest, HTML, CSS, AWS, and Jenkins, significantly improving team productivity and code quality.',
        'Automate test cases for VCO (Velocloud Orchestrator henceforth referred to as VCO) features covering UI, API & Workflow areas, Script Optimization, Regression Duty, VCO Manual Regression testing & Test Plan preparation ',
        'Participated in Daily and weekly status meetings with the team, developers to discuss open issues and communicating with onsite team',
        'Development bugs validation & Defect Fixes : like Unable to delete DHСPv6 options for configured interface, Correction of case and wording under Configuration, not able to save the configs, [UI] [Angular] Error message is still displayed after Discarding the changes, [VCO] [UI] Wan Interface table is not showing in HA Tab, [VCO] UI- Change tab name “HA” tab as “Standby System, Changed icons for Profile and Segments, Resolved truncation issue, Added scroll bar, updating the vco-platform library version.'
      ],
    },
    {
      title: 'Disney-Plus-Hotstar-Clone (Client : Self)',
      technologies: 'HTML, CSS, and JavaScript',
      description: [
        'Our clone is very similar to the original disney plus website. It is only one page(homepage) website. It has navbar and search box with cool click effect same as disney+ and it also has a slider or carousel with infinity or endless effect. Which was very hard for me to make at first. And after that we also have movie cards. With awesome card hover effect. And we have much more.',
        'Disney Plus Hotstar Clone project aims to create a streaming platform similar to the popular entertainment service Disney+ Hotstar using HTML, CSS, and JavaScript. This project involves the development of a website that provides users with access to a vast library of movies, TV shows, and live sports events, replicating the key features and functionalities of the original platform.',
        'The Disney Plus Hotstar Clone project is a comprehensive endeavor to recreate the popular streaming service using HTML, CSS, and JavaScript. By combining these technologies, I create an engaging and feature-rich website that offers users a seamless streaming experience, complete with user authentication, content browsing, video playback, and interactive functionalities.'
      ],
    },
    {
      title: 'House-Rent-Angular-Appllication (Client : Self)',
      technologies: 'Angular, HTML, CSS, and JavaScript',
      description: [
        'The Angular app for listing houses for rent and showing individual house details is a web application built using the Angular framework. It serves as a platform for users to browse and explore available houses for rent and view detailed information about each property.'
      ]
    },
    {
      title: 'Social-Book-Application (Client : Self)',
      technologies: 'HTML, CSS, and JavaScript',
      description: [
        'In this project, I designed and implemented the user interface using HTML and CSS, focusing on creating an intuitive and visually appealing layout. The application features a responsive design, ensuring optimal user experience across different devices.',
        'Creating this Facebook-inspired social book application allowed me to showcase my proficiency in HTML, CSS, and JavaScript, along with my ability to replicate a popular user interface and implement interactive features. This project demonstrated my creativity, attention to detail, and ability to deliver a user-centric web application.'
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
