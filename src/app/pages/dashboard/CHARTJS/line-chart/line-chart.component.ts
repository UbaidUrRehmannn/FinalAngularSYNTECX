import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ShiftService } from 'src/app/shared/service/shift.service';

@Component({
  selector: 'app-line-chart-CJS',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponentCJS implements OnInit {
  rows: any;
  token: any;
  userId: any;
  userName: any;
  constructor(private shiftServ: ShiftService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 400);
  }
  createChart() {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart('chart-line-cjs', {
      type: 'line',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count),
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
  viewOrgShift() {
    this.shiftServ
      .viewOrgShift(this.token, this.userId)
      .subscribe((res: any) => {
        this.rows = res.data;
        this.createChart();
      });
  }
}
