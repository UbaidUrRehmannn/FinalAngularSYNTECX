import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShiftService } from '../shared/service/shift.service';



@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        DashboardModule
    ],
    providers: [ShiftService]
})
export class PagesModule { }
