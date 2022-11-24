import { SubTeamsComponent } from './sub-teams/sub-teams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';

const routes: Routes = [{ path: '', component: TeamsComponent },
{path: 'sub-teams/:data', component: SubTeamsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
