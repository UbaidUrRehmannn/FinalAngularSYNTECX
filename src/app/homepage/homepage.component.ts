import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  removeLogin(){
    if(localStorage.getItem('Token') !== null){
      return false
    }else return true
  }
  removeLogout(){
    if(localStorage.getItem('Token') !== null){
      return true
    }else return false
  }
}
