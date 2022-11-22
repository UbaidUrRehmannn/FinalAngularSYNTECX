import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../../shared/service/shift.service';
import { BreakService } from '../../shared/service/break.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-bioteacher',
  templateUrl: './bioteacher.component.html',
  styleUrls: ['./bioteacher.component.css'],
})
export class BioteacherComponent implements OnInit {
  title = 'Shift Information';
  token: any;
  userName: any;
  userId: any;
  reactiveForm: FormGroup;
  // secondReactiveForm: FormGroup;
  rows: any;
  router: Router;
  editableDesc: any;
  editableTitle: any;
  editableStartTime: any;
  editableEndTime: any;
  editableEntryId: any;
  updatebtn = false;
  searchval: string = '';

  constructor(
    private toastr: ToastrService,
    private shiftServ: ShiftService,

    router: Router
  ) {
    this.getDetails();
    this.viewOrgShift();
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      startTime: new FormControl(null, Validators.required),
      endTime: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });  

    this.router = router;
  }

  dataUpdateSuccess() {
    this.toastr.success('Shift Updated Successfully', 'Congratulations');
  }
  dataDeletionSuccess() {
    this.toastr.success('Shift Deleted Successfully', 'Congratulations');
  }
  dataAdditionSuccess() {
    this.toastr.success('Shift Added Successfully', 'Congratulations');
  }
  getDetails() {
    this.token = localStorage.getItem('Token');
    // console.log('this.token ', this.token);
    this.userId = localStorage.getItem('User_id');
    // console.log('this.userId', this.userId);
    this.userName = localStorage.getItem('User_Name');
    // console.log('this.userName', this.userName);
  }
  addShift() {
    this.shiftServ
      .addOrgShift(
        this.token,
        this.userId,
        this.reactiveForm.value.title,
        this.reactiveForm.value.description,
        this.reactiveForm.value.startTime,
        this.reactiveForm.value.endTime,
        this.userName
      )
      .subscribe((res: any) => {
        console.log('Add Shift DATA = ', res);
        // this.router.navigate(['../teachers/bioteachers']);
        this.dataAdditionSuccess();
        this.viewOrgShift();
      });
  }
  viewOrgShift() {
    this.shiftServ
      .viewOrgShift(this.token, this.userId)
      .subscribe((res: any) => {
        this.rows = res.data;
        console.log(res.data);
        // console.log('View Org Shift DATA = ', res);
      });
  }

 
  changeBtn() {
    let patchingVal = {
      title: null,
      startTime: null,
      description: null,
      endTime: null,
    };
    this.reactiveForm.patchValue(patchingVal);
    if (this.updatebtn === true) {
      this.updatebtn = false;
    } else return;
  }
  reversbtn() {
    if (this.updatebtn === false) {
      this.updatebtn = true;
    } else return;
  }
  updateData() {
    this.shiftServ
      .updateOrgShift(
        this.token,
        this.userId,
        this.reactiveForm.value.title,
        this.reactiveForm.value.description,
        this.reactiveForm.value.startTime,
        this.reactiveForm.value.endTime,
        this.userName,
        this.editableEntryId
      )
      .subscribe((res) => {
        console.log('Response of update shift', res);
        this.viewOrgShift();
        this.dataUpdateSuccess();
      });
  }
  viewSelfShift(id: any) {
    this.shiftServ
      .viewShift(this.token, this.userId, id)
      .subscribe((res: any) => {
        console.log('ID ID:', id)
        console.log('Resopnse from shift edit API is', res);
        this.editableDesc = res.data[0].shift_desc;
        console.log('shift_desc: ', res.data[0].shift_desc);

        this.editableTitle = res.data[0].shift_name;
        console.log('shift_name: ', res.data[0].shift_name);

        this.editableStartTime = res.data[0].shift_start_time;
        console.log('shift_start_time: ', res.data[0].shift_start_time);

        this.editableEndTime = res.data[0].shift_end_time;
        console.log('shift_end_time: ', res.data[0].shift_end_time);

        this.editableEntryId = res.data[0].shift_id;
        console.log('shift_id: ', res.data[0].shift_id);
        let patchingVal = {
          title: this.editableTitle,
          startTime: this.editableStartTime,
          description: this.editableDesc,
          endTime: this.editableEndTime,
        };
        console.log('Patching Values are: ', patchingVal )
        this.reactiveForm.patchValue(patchingVal);
      });
    console.log('Shift edited');
  }
  getId(id: any) {
    this.editableEntryId = id;
    console.log('selected id: ',id)
  }
  deleteItem() {
    this.shiftServ
      .deleteShift(this.token, this.editableEntryId, this.userId)
      .subscribe((res) => {
        console.log('deleteItem response', res);
        this.viewOrgShift();
        this.dataDeletionSuccess();
      });
    console.log('Item Deleted');
    // console.log('ID of selectrd item is: ',id)
  }
  editShift(id: any) {
    this.reversbtn();
    this.viewSelfShift(id);

    console.log('Shift edited');
  }

  ngOnInit(): void {}
  onSubmit() {
    this.viewOrgShift();
    this.addShift();
    // console.log('this.reactiveForm.value: ', this.reactiveForm.value);
    // console.log('submited');
  }
  paramRoute(id: any) {
    this.router.navigate(['../employee/break', id]);
  }

}
