import { Item } from '../item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentsform',
  templateUrl: './studentsform.component.html',
  styleUrls: ['./studentsform.component.css'],
})
export class StudentsformComponent implements OnInit {
  title = "Add Students's Data";
  num = 5;
  display = false;
  log(x: any) {
    console.log(x);
  }
  func1 = () => {
    this.num = this.num + 5;
  };
  constructor() {}

  ngOnInit(): void {}

  searchValue: string = '';

  searchval = (e: any) => {
    console.log(e);
    this.searchValue = e.target.value;
    console.log(this.searchValue);
  };
  func2 = (e: any) => {
    console.log(e);
  };
  searchValue2: string = 'Iphone';
}
