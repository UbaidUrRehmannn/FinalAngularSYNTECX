import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/service/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  title = 'Teams Information';
  reactiveForm: FormGroup;
  token: any;
  userId: any;
  rows: any;
  updatebtn = false;
  teamsId: any;
  teamDescription: any;
  teamName: any;
  teamTimeZoneType: any;
  teamid: any;
  router: Router;
  searchval: string = '';
  constructor(private teamServe: TeamService, router: Router) {
    this.getData();
    this.viewAllTeams();
    this.reactiveForm = new FormGroup({
      teamAdminName: new FormControl(null, Validators.required),
      teamName: new FormControl(null, Validators.required),
      teamDescription: new FormControl(null, Validators.required),
      teamCreator: new FormControl(null, Validators.required),
      teamtimezone: new FormControl(null, Validators.required),
    });
    this.router = router;
  }

  ngOnInit(): void {}
  getData() {
    this.token = localStorage.getItem('Token');
    console.log('Token from Teams module: ', this.token);
    this.userId = localStorage.getItem('User_id');
    console.log('userId from Teams module: ', this.userId);
  }
  changeBtn() {
    let patchingVal = {
      teamAdminName: null,
      teamName: null,
      teamDescription: null,
      teamCreator: null,
      teamtimezone: null,
    };
    this.reactiveForm.patchValue(patchingVal);
    if (this.updatebtn === true) {
      this.updatebtn = false;
    } else return;
  }
  viewAllTeams() {
    this.teamServe
      .viewOrgTeam(this.token, this.userId)
      .subscribe((res: any) => {
        console.log('viewOrgTeam Response: ', res);
        this.rows = res.data;
        console.log('rows: ', this.rows);
      });
  }
  addNewTeam() {
    this.teamServe
      .addTeam(
        this.token,
        this.userId,
        '',
        this.reactiveForm.value.teamDescription,
        this.reactiveForm.value.teamName,
        '',
        this.reactiveForm.value.teamtimezone
      )
      .subscribe((res) => {
        console.log('Added Team: ', res);
      });
    this.viewAllTeams();
  }
  deleteTeam() {
    this.teamServe
      .deteteTeam(this.token, this.userId, '', this.teamsId)
      .subscribe((res) => {
        console.log('Delete API Response: ', res);
      });
    this.viewAllTeams();
  }
  getCurrentTeamId(id: any) {
    this.teamsId = id;
    console.log('Selected Team ID: ', id);
  }
  getClickedTeam(id: any) {
    this.teamServe.allTeamMembers(this.token, this.userId).subscribe((res) => {
      console.log('CurrentTeam Info:', res);
    });
  }
  reversbtn() {
    if (this.updatebtn === false) {
      this.updatebtn = true;
    } else return;
  }
  viewNestedTeams(parentId: any) {
    this.teamServe
      .viewChildTeam(this.token, this.userId, parentId)
      .subscribe((res) => {
        console.log('viewNestedTeams response: ', res);
      });
  }
  editTable(data: any) {
    console.log('DATA: ', data);
    this.teamDescription = data.team_desc;
    this.teamName = data.team_name;
    this.teamTimeZoneType = data.team_timezone_type;
  
    this.teamid = data.team_id;
    this.reversbtn();
    let patchingVal = {
      teamDescription: this.teamDescription,
      teamName: this.teamName,
      teamtimezone: this.teamTimeZoneType,
     
    };
    this.reactiveForm.patchValue(patchingVal);
    // console.log('Patching Values are: ', patchingVal )
    // console.log('AA: ',  teamId)
    // console.log("BB: ", parentTeamId )
    // this.getClickedTeam(teamId);
    // this.viewNestedTeams(parentTeamId)
  }
  updateTeamInfo() {
    this.teamServe
      .updateTeam(
        this.token,
        this.userId,
        '',
        this.reactiveForm.value.teamDescription,
        this.reactiveForm.value.teamName,
        this.reactiveForm.value.teamtimezone,
        this.teamid
      )
      .subscribe((res) => {
        
        console.log('Update API Response: ', res);
      });
      this.viewAllTeams()
  }
  onSubmit() {
    console.log('Submitedfirst');
    this.addNewTeam();
    console.log('this.reactiveForm.value: ', this.reactiveForm.value);
  }
  paramRoute(data: any) {
    this.router.navigate(['../teams/sub-teams', data]);
  }
}
