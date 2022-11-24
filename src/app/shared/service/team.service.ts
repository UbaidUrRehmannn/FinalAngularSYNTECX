import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalVariables } from '../app.global';
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient, private config: globalVariables) {
    localStorage.setItem('usersession', JSON.stringify(new Date()));
  }
  addTeam(
    token: string,
    userid: string,
    usertype: string,
    teamdesc: string,
    teamname: string,
    parent_team_id: string,
    teamtimezonetype: string
  ) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.ADD_TEAM,
      userid: userid,
      usertype: usertype,
      orgid: '44',
      teamdesc: teamdesc,
      teamname: teamname,
      teamcreatorid: 1,
      teamadminid: 1,
      parent_team_id: parent_team_id,
      teamtimezonetype: teamtimezonetype,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  viewOrgTeam(token: string, userid: string) {
    //console.log(token, userid);
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.VIEW_ORG_TEAMS,
      userid: userid,
      orgid: '44',
      plattype: this.config.PLATFORM_TYPE,
    };
    //console.log(data);
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  deteteTeam(token: string, userid: string, usertype: string, teamid: string) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.DELETE_TEAM,
      userid: userid,
      usertype: usertype,
      orgid: '44',
      teamid: teamid,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
   viewChildTeam(token: string, userid: string, parent_team_id: string) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.VIEW_CHILD_TEAMS,
      userid: userid,
      parent_team_id: parent_team_id,
      orgid: '44',
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  private data: any = undefined;
  setData(data: any) {
    this.data = data;
  }
  allTeamMembers(token: string, userid: string) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.ALL_TEAM_MEMBERS,
      userid: userid,
      orgid: '44',
      plattype: this.config.PLATFORM_TYPE,
    };

    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  updateTeam(
    token: string,
    userid: string,
    usertype: string,
    teamdesc: string,
    teamname: string,
    teamtimezonetype: string,
    teamid: string
  ) {
    console.log('Service File Data: ', token)
    console.log('Service File Data: ', userid)
    console.log('Service File Data: ', usertype)
    console.log('Service File Data: ', teamdesc)
    console.log('Service File Data: ', teamname)
    console.log('Service File Data: ', teamtimezonetype)
    console.log('Service File Data: ', teamid)
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.UPDATE_TEAM,
      userid: userid,
      usertype: usertype,
      orgid: '44',
      teamid: teamid,
      teamdesc: teamdesc,
      teamname: teamname,
      teamtimezonetype: teamtimezonetype,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
}
