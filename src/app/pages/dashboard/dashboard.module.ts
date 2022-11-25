import { TeamService } from './../../shared/service/team.service';
import { BreakService } from './../../shared/service/break.service';
import { BarChartComponentCJS } from './CHARTJS/bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-chartjs';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponentCJS } from './CHARTJS/line-chart/line-chart.component';
import { RadarChartComponent } from './CHARTJS/radar-chart/radar-chart.component';
import { PolarareaChartComponent } from './CHARTJS/polararea-chart/polararea-chart.component';
import { ShiftService } from 'src/app/shared/service/shift.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, BarChartComponent, LineChartComponent, PieChartComponent, AreaChartComponent, BarChartComponentCJS, LineChartComponentCJS, RadarChartComponent, PolarareaChartComponent],
  bootstrap: [DashboardComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgChartsModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [ShiftService, BreakService, TeamService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
