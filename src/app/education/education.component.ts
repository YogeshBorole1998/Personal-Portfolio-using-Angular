import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Pune University (SPPU)",
      course: 'Bachelor of Engineering',
      duration: '2018-2021',
      score: '76.40%',
    },
    {
      institute: 'MSBTE',
      course: 'Diploma in Engineering',
      duration: '2016-2018',
      score: '72.55%',
    },
    {
      institute: 'M J College,Jalgaon',
      course: 'HSC',
      duration: '2014-2016',
      score: '53.38%',
    },
    {
      institute: 'Bharat Vidyalaya, Nhavi',
      course: 'SSC',
      duration: '2013-2014',
      score: '84.20%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

