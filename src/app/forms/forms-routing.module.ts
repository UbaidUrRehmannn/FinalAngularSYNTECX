import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersformComponent } from './teachersform/teachersform.component';
import { StudentsformComponent } from './studentsform/studentsform.component';
import { ParentsformComponent } from './parentsform/parentsform.component';

const routes: Routes = [
  {path:'teachersform', component: TeachersformComponent},
  {path:'studentsform', component: StudentsformComponent},
  {path: 'parentsform', component: ParentsformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
