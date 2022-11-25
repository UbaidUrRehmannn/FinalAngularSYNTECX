import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ShiftService } from 'src/app/shared/service/shift.service';
import { TeamService } from 'src/app/shared/service/team.service';

@Component({
  selector: 'app-bar-chart-CJS',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponentCJS implements OnInit {
  rowsForTemas: any;
  token: any;
  userId: any;
  userName: any;
  rows: any;

  constructor(private shiftServ: ShiftService, private teamServe: TeamService) {
    this.getDetails();
    this.viewOrgShift()
    // this.viewAllTeams();
  }

  ngOnInit(): void {}
  createChart() {
    new Chart('chart-bar-cjs', {
      type: 'bar',
      data: {
        labels: this.rows.map((row: any) => row.shift_id),
        datasets: [
          {
            label: 'Number of Breaks',
            data: this.rows.map((row: any) => row.no_of_breaks),
          },
        ],
      },
    });
  }
  getDetails() {
    this.token = localStorage.getItem('Token');
    this.userId = localStorage.getItem('User_id');
    this.userName = localStorage.getItem('User_Name');
  }
  viewAllTeams() {
    this.teamServe
      .viewOrgTeam(this.token, this.userId)
      .subscribe((res: any) => {
        this.rowsForTemas = res.data;
        console.log('View All Teams DATA = ', this.rowsForTemas);
      });
  }
  viewOrgShift() {
    this.shiftServ
      .viewOrgShift(this.token, this.userId)
      .subscribe((res: any) => {
        this.rows = res.data;
        this.createChart();
      });
  }
}
