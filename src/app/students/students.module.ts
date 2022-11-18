import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { BiostudentsComponent } from './biostudents/biostudents.component';
import { MathstudentsComponent } from './mathstudents/mathstudents.component';


@NgModule({
  declarations: [
    BiostudentsComponent,
    MathstudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
