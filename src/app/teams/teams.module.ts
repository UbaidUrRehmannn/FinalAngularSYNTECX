import { SearchSubTeamPipe } from './searchSubTeams.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import {TeamService } from '../shared/service/team.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubTeamsComponent } from './sub-teams/sub-teams.component';
import { SearchTeamPipe } from './searchTeam.pipe';
import { ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    TeamsComponent,
    SubTeamsComponent,
    SearchTeamPipe,
    SearchSubTeamPipe
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot({positionClass: 'toast-bottom-right'}),

  ],
  providers: [TeamService]
})
export class TeamsModule { }
