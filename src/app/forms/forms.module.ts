import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { TeachersformComponent } from './teachersform/teachersform.component';
import { StudentsformComponent } from './studentsform/studentsform.component';
import { ParentsformComponent } from './parentsform/parentsform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TeachersformComponent,
    StudentsformComponent,
    ParentsformComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormssModule { }
