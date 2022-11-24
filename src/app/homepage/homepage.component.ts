import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
profileImage: any
userName:any
  constructor() { this.getImage()}

  ngOnInit(): void {
  }
  getImage()  {
this.profileImage = localStorage.getItem('Image')
let str = localStorage.getItem('User_Name')
this.userName = str!.slice(1, -1)
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
