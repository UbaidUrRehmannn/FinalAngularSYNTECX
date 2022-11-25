import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/shared/service/shift.service';
declare const Chart: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  rows: any;
  token: any;
  userId: any;
  userName: any;
  constructor(private shiftServ: ShiftService) {
    this.getDetails();
    this.viewOrgShift();
  }

  ngOnInit() {}
  createChart() {
    console.log('Chart come');
    new Chart('chart-2', {
      type: 'line',
      data: {
        labels: this.rows.map((row: any) => {
          return 'Shift Id: ' + row.shift_id;
        }),
        datasets: [
          {
            backgroundColor: '#7E57C2',
            borderColor: '#7E57C2',
            data: this.rows.map((row: any) => row.no_of_breaks),
            label: 'No. Of Breaks: ',
            fill: 'false',
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        elements: {
          line: {
            tension: 0.000001,
          },
        },
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false,
          },
        },
        title: {
          display: true,
          text: 'Breaks During Each Shift',
        },
      },
    });
  }
  getDetails() {
    this.token = localStorage.getItem('Token');
    this.userId = localStorage.getItem('User_id');
    this.userName = localStorage.getItem('User_Name');
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
