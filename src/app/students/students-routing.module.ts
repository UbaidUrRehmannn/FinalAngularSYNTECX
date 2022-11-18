import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BiostudentsComponent} from './biostudents/biostudents.component'
import {MathstudentsComponent} from './mathstudents/mathstudents.component'

const routes: Routes = [
  {path:'biostudents', component: BiostudentsComponent},
  {path: 'mathstudents', component: MathstudentsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
