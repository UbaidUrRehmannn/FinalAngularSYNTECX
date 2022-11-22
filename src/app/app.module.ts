import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGuard } from './shared/service/loginGuard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { NgChartsModule } from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    // NgxSliderModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    NgChartsModule,
    MatButtonModule,
   
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
