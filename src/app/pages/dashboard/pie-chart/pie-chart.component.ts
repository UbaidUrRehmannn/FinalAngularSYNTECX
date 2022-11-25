import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/service/team.service';
declare const Chart: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  rowsForTemas: any;
  token: any;
  userId: any;
  constructor(private teamServe: TeamService) {
    this.getDetails();
    this.viewAllTeams();
  }

  ngOnInit() {}
  createChart() {
    console.log('1');
    new Chart('piechart', {
      type: 'doughnut',
      data: {
        labels: ['Organization ', 'People'],
        datasets: [
          {
            // team_timezone_type
            // data: this.rowsForTemas.map((row: any) => row.team_timezone_type),
            data: this.rowsForTemas.map((row: any) => {
              if (row.team_timezone_type === '1') {
                return '1';
              } else  {
                return '0';
              }
            }),

            // data: [46.97, 46.91, 24.56],

            backgroundColor: [
              'rgba(255, 99, 132,.7)',
              'rgba(66, 165, 245,.7)',
              'rgba(38, 166, 154,.7)',
            ],
          },
        ],
      },
      options: {
        elements: {
          line: {
            tension: 0.000001,
          },
        },
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          filler: {
            propagate: false,
          },
        },
        title: {
          display: true,
          text: 'Teams in People & Organization',
        },
      },
    });
  }
  getDetails() {
    this.token = localStorage.getItem('Token');
    this.userId = localStorage.getItem('User_id');
  }
  viewAllTeams() {
    this.teamServe
      .viewOrgTeam(this.token, this.userId)
      .subscribe((res: any) => {
        this.rowsForTemas = res.data;
        console.log('View All Teams DATA = ', this.rowsForTemas);
        this.createChart();
      });
  }
}
