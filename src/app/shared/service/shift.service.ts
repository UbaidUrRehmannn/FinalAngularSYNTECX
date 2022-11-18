import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalVariables } from '../app.global';

@Injectable({
  providedIn: 'root',
})
export class ShiftService {
  // constructor(private http: HttpClient, private config: globalVariables) {
  //   localStorage.setItem('usersession', JSON.stringify(new Date()));

  // }
  constructor(
    private http: HttpClient,
  
    private config: globalVariables
  ) {
    localStorage.setItem('usersession', JSON.stringify(new Date()));
  }
  // ADD_ORG_SHIFT
  addOrgShift(
    token: string,
    userId: string,
    shiftname: string,
    shiftdesc: string,
    shiftstart: string,
    shiftend: string,
    shiftwriter: string
  ) {
    //  console.log('token', token)
    // console.log('userId', userId)
    // console.log('shiftname', shiftname)
    // console.log('shiftdesc', shiftdesc)
    // console.log('shiftstart', shiftstart)
    // console.log('shiftend', shiftend)
    // console.log('shiftwriter', shiftwriter)
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.ADD_ORG_SHIFT,
      userid: userId,
      orgid: '44',
      shiftname: shiftname,
      shiftdesc: shiftdesc,
      shiftstart: shiftstart,
      shiftend: shiftend,
      shiftwriter: shiftwriter,
      plattype: this.config.PLATFORM_TYPE,
    };
    // console.log('data from service file: ', data);
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  // addOrgShift(
  //   token:string,
  //   userId: string,
  //   shiftname: string,
  //   shiftdesc: string,
  //   shiftstart: string,
  //   shiftend: string,
  //   shiftwriter: string
  // ) {
  //   console.log('token', token)
  //   console.log('userId', userId)
  //   console.log('shiftname', shiftname)
  //   console.log('shiftdesc', shiftdesc)
  //   console.log('shiftstart', shiftstart)
  //   console.log('shiftend', shiftend)
  //   console.log('shiftwriter', shiftwriter)
  //   const reqheader = new HttpHeaders({'x-access-token': token, 'Content-Type': 'application/json' });

  //   const data = {
  //     process: this.config.ADD_ORG_SHIFT,
  //     userid: userId,
  //     ordid: '44',
  //     shiftname: shiftname,
  //     shiftdesc: shiftdesc,
  //     shiftstart: shiftstart,
  //     shiftend: shiftend,
  //     shiftwriter: shiftwriter,
  //     plattype: this.config.PLATFORM_TYPE,
  //   };
  //   return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  // }
  viewOrgShift(token: string, userid: string) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.VIEW_ORG_SHIFTS,
      userid: userid,
      orgid: '44',
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  viewShift = (token: string, userid: string, shiftid: string) => {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.VIEW_SHIFT,
      userid: userid,
      shiftid: shiftid,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  };
  updateOrgShift(
    token: string,
    userid: string,
    shiftname: string,
    shiftdesc: string,
    shiftstart: string,
    shiftend: string,
    shiftwriter: string,
    shiftid: string
  ) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.UPDATE_ORG_SHIFT,
      userid: userid,
      ordid: '44',
      shiftname: shiftname,
      shiftdesc: shiftdesc,
      shiftstart: shiftstart,
      shiftend: shiftend,
      shiftwriter: shiftwriter,
      shiftid: shiftid,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  deleteShift(token: string, shiftid: string, userid: string) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.DELETE_ORG_SHIFT,
      userid: userid,
      shiftid: shiftid,
      orgid: '44',
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
}
