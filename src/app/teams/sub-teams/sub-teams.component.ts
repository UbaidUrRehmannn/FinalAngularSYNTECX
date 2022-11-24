import { TeamService } from './../../shared/service/team.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-teams',
  templateUrl: './sub-teams.component.html',
  styleUrls: ['./sub-teams.component.css'],
})
export class SubTeamsComponent implements OnInit {
  title = 'Sub Teams Information';

  token: any;
  userId: any;
  parentId: any;
  searchval: string = '';
  rows: any;
  reactiveForm: FormGroup;
  teamsId: any;
  x: any;
  y: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private subTeamserve: TeamService,
    private toastr: ToastrService
  ) {
    this.getData();
    this.viewNestedTeams();
    this.reactiveForm = new FormGroup({
      teamAdminName: new FormControl(null),
      teamName: new FormControl(null, Validators.required),
      teamDescription: new FormControl(null, Validators.required),
      teamCreator: new FormControl(null),
      teamtimezone: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}
  dataAdditionSuccess() {
    this.toastr.success('Break Added Successfully', 'Congratulations');
  }
  dataDeletionSuccess() {
    this.toastr.success('Break Deleted Successfully', 'Congratulations');
  }
  getData() {
    this.token = localStorage.getItem('Token');
    console.log('Token from Sub-Teams module: ', this.token);
    this.userId = localStorage.getItem('User_id');
    console.log('userId from Sub-Teams module: ', this.userId);
    this.parentId = this.activatedRoute.snapshot.paramMap.get('data');
    console.log('parentId from Sub-Teams module: ', this.parentId);
  }
  getCurrentSubTeamId(id: any) {
    this.teamsId = id;
    console.log('Selected Team ID: ', id);
  }
  deleteTeam() {
    this.subTeamserve
      .deteteTeam(this.token, this.userId, '', this.teamsId)
      .subscribe((res) => {
        console.log('Delete API Response: ', res);
      });
    this.dataDeletionSuccess();
    this.viewNestedTeams();
  }
  viewNestedTeams() {
    this.subTeamserve
      .viewChildTeam(this.token, this.userId, this.parentId)
      .subscribe((res: any) => {
        if (res.rescode === 1) {
          this.rows = res.data;
          console.log('viewNestedTeams response: ', res);
        } else {
          this.x = res.message;
        }
        this.y = res.rescode;
      });
  }
  hideAlert = () => {
    if (this.y === 1) {
      return false;
    } else return true;
  };
  addNewSubTeam() {
    this.subTeamserve
      .addTeam(
        this.token,
        this.userId,
        '',
        this.reactiveForm.value.teamDescription,
        this.reactiveForm.value.teamName,
        this.parentId,
        this.reactiveForm.value.teamtimezone
      )
      .subscribe((res) => {
        console.log('Added Team: ', res);
      });
    this.dataAdditionSuccess();
    this.viewNestedTeams();
  }
  onSubmit() {
    console.log('ADDED');
    this.addNewSubTeam();
  }
}
