import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalVariables } from '../app.global';
@Injectable({
  providedIn: 'root',
})
export class BreakService {
  constructor(private http: HttpClient, private config: globalVariables) {
    localStorage.setItem('usersession', JSON.stringify(new Date()));
  }
  // Add Break Service
  addBreak(
    token: string,
    userid: string,
    breakname: string,
    breakdesc: string,
    breakstart: string,
    breakend: string,
    breakshiftid: string,
    ispaid: string,
    breakduration: string
  ) {
    // console.log('token', token);
    // console.log('userId', userid);
    // console.log('breakname', breakname);
    // console.log('breakdesc', breakdesc);
    // console.log('breakstart', breakstart);
    // console.log('breakend', breakend);
    // console.log('breakshiftid', breakshiftid);
    // console.log('ispaid', ispaid);
    // console.log('breakduration', breakduration);
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.ADD_BREAK,
      userid: userid,
      orgid: '44',
      breakname: breakname,
      breakdesc: breakdesc,
      breakstart: breakstart,
      breakend: breakend,
      breakshiftid: breakshiftid,
      ispaid: ispaid,
      breakduration: breakduration,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }

  DeleteBreak(
    token: string,
    userid: string,
    breakshiftid: string,
    breakid: string
  ) {
    // console.log('token', token);
    // console.log('userId', userid);
    console.log('breakshiftid', breakshiftid);
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.DELETE_BREAK,
      userid: userid,
      orgid: '44',
      breakshiftid: breakshiftid,
      breakid: breakid,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }

  viewSingleBreak(token: string, userid: string, breakid: string) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.VIEW_BREAK,
      userid: userid,
      orgid: '44',
      breakid: breakid,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  viewAllBreak(token: string, userid: string, breakshiftid: string) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.VIEW_SHIFT_BREAKS,
      userid: userid,
      orgid: '44',
      breakshiftid: breakshiftid,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
  updateBreak(
    token: string,
    userid: string,
    breakid: string,
    breakname: string,
    breakdesc: string,
    breakstart: string,
    breakduration: string,
    breakend: string,
    breakshiftid: string,
    ispaid: string
  ) {
    const reqheader = new HttpHeaders({
      'x-access-token': token,
      'Content-Type': 'application/json',
    });
    const data = {
      process: this.config.UPDATE_BREAK,
      userid: userid,
      orgid: '44',
      breakshiftid: breakshiftid,
      breakid: breakid,
      breakname: breakname,
      breakdesc: breakdesc,
      breakstart: breakstart,
      breakduration: breakduration,
      breakend: breakend,
      ispaid: ispaid,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
}
