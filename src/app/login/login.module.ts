import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../shared/service/enroll.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastNoAnimationModule } from 'ngx-toastr';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot({positionClass: 'toast-bottom-right'}),
  

  ],
  providers: [LoginService],

})
export class LoginModule {}
