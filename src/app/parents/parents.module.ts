import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { DetailsComponent } from './details/details.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [DetailsComponent],

  imports: [
    CommonModule,
    ParentsRoutingModule,
    AgmCoreModule.forRoot({
      // apiKey: '',
    }),
  ],
})
// AIzaSyATA7a18z80T41bjA8kmOKPx6Amo3CqGIk
export class ParentsModule {}
