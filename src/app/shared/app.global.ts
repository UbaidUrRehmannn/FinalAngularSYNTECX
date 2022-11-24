import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class globalVariables {
  public readonly apiUrl =
    window.location.host == 'localhost' ||
    window.location.host == 'localhost:4200'
      ? 'https://staging.where.works' + '/DAL/'
      : 'https://staging.where.works' + '/DAL/';

  public readonly USER_LOGIN = 'USER_LOGIN';
  public readonly ADD_ORG_SHIFT = 'ADD_ORG_SHIFT';
  public readonly VIEW_ORG_SHIFTS = 'VIEW_ORG_SHIFTS';
  public readonly VIEW_SHIFT = 'VIEW_SHIFT';
  public readonly UPDATE_ORG_SHIFT = 'UPDATE_ORG_SHIFT';
  public readonly DELETE_ORG_SHIFT = 'DELETE_ORG_SHIFT';
  public readonly ADD_BREAK = 'ADD_BREAK';
  public readonly VIEW_SHIFT_BREAKS = 'VIEW_SHIFT_BREAKS';
  public readonly DELETE_BREAK = 'DELETE_BREAK';
  public readonly VIEW_BREAK = 'VIEW_BREAK';
  public readonly UPDATE_BREAK = 'UPDATE_BREAK';
  public readonly ADD_TEAM = 'ADD_TEAM';
  public readonly VIEW_ORG_TEAMS = 'VIEW_ORG_TEAMS';
  public readonly DELETE_TEAM = 'DELETE_TEAM';
  public readonly UPDATE_TEAM = 'UPDATE_TEAM';
  public readonly ALL_TEAM_MEMBERS = 'ALL_TEAM_MEMBERS';
  public readonly VIEW_CHILD_TEAMS = 'VIEW_CHILD_TEAMS';
  PLATFORM_TYPE = 1;
}

 