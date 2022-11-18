import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BioteacherComponent} from './bioteacher/bioteacher.component'
import {MathteacherComponent} from './mathteacher/mathteacher.component'

const routes: Routes = [
  {path:'shift', component: BioteacherComponent},
  {path: 'break/:id', component: MathteacherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
