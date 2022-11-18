import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mathstudents',
  templateUrl: './mathstudents.component.html',
  styleUrls: ['./mathstudents.component.css']
})

export class MathstudentsComponent implements OnInit {
  title = 'Math Students Information'

  rows = [
    {
      ID: 1,
      Name: 'Zain',
      Age: 17,
      Gender: 'Male',
      Class: '10TH',
      hostelites: true,
    },
    {
      ID: 2,
      Name: 'Zubair',
      Age: 19,
      Gender: 'Male',
      Class: '10TH',
      hostelites: false,
    },
   
    {
      ID: 3,
      Name: 'Fatima',
      Age: 17,
      Gender: 'Female',
      Class: '10TH',
      hostelites: false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
