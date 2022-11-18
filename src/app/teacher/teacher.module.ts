import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { MathteacherComponent } from './mathteacher/mathteacher.component';
import { BioteacherComponent } from './bioteacher/bioteacher.component';
import { HttpClientModule } from '@angular/common/http';
import { ShiftService } from '../shared/service/shift.service';
import { BreakService } from '../shared/service/break.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastNoAnimationModule} from 'ngx-toastr';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SearchPipe } from './searchShift.pipe';
import { SearchBreakPipe } from './searchBreak.pipe';
@NgModule({
  declarations: [MathteacherComponent, BioteacherComponent, SearchPipe, SearchBreakPipe],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSliderModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot({positionClass: 'toast-bottom-right'}),
  ],
  providers: [ShiftService, BreakService],
})
export class TeacherModule {}
