import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/shared/service/shift.service';
import { TeamService } from 'src/app/shared/service/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  rowsForShift: any;
  rowsForTemas: any;
  token: any;
  userId: any;
  userName: any;
  constructor(private shiftServ: ShiftService, private teamServe: TeamService) {
    this.getDetails();
    // this.viewAllTeams();
    // this.viewOrgShift();
  }

  ngOnInit(): void {}

  getDetails() {
    this.token = localStorage.getItem('Token');
    this.userId = localStorage.getItem('User_id');
    this.userName = localStorage.getItem('User_Name');
  }
  viewOrgShift() {
    this.shiftServ
      .viewOrgShift(this.token, this.userId)
      .subscribe((res: any) => {
        this.rowsForShift = res.data;
        console.log('View Org Shift DATA = ', this.rowsForShift);
      });
  }
  viewAllTeams() {
    this.teamServe
      .viewOrgTeam(this.token, this.userId)
      .subscribe((res: any) => {
        this.rowsForTemas = res.data;
        console.log('View All Teams DATA = ', this.rowsForTemas);
      });
  }
}
