import { Component, OnInit } from '@angular/core';
interface data {
  ID: number;
  Name: string;
  Age: number;
  Gender: string;
  Class: string;
  hostelites: boolean;
}
@Component({
  selector: 'app-biostudents',
  templateUrl: './biostudents.component.html',
  styleUrls: ['./biostudents.component.css']
})
export class BiostudentsComponent implements OnInit {
  title = 'Biology Students Information'

  rows:data[] = [
    {
      ID: 1,
      Name: 'Ayesha',
      Age: 17,
      Gender: 'Male',
      Class: '10TH',
      hostelites: true,
    },
    {
      ID: 2,
      Name: 'Khadija',
      Age: 19,
      Gender: 'Female',
      Class: '12TH',
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
