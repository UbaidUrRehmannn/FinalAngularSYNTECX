import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  disabled=true;
  constructor(private router: Router,) {}
 

  ngOnInit(): void {}
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
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
