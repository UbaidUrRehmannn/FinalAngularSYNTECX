import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BreakService } from '../../shared/service/break.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mathteacher',
  templateUrl: './mathteacher.component.html',
  styleUrls: ['./mathteacher.component.css'],
})
export class MathteacherComponent implements OnInit {
  title = 'Break information';
  secondReactiveForm: FormGroup;
  shiftId: any;
  token: any;
  userId: any;
  userName: any;
  rows: any;
  selectedBreakId: any;
  searchval: string = '';
  editableEndTime: any;
  editableStartTime: any;
  editableTitle: any;
  editableDesc: any;
  range: any;
  paid: any;
  updatebtn = false;

  constructor(
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private breakServ: BreakService
  ) {
    this.getDetails();
    this.viewAllBreak();
    this.secondReactiveForm = new FormGroup({
      breakTitle: new FormControl(null, Validators.required),
      breakStartTime: new FormControl(null, Validators.required),
      breakEndTime: new FormControl(null, Validators.required),
      breakDescription: new FormControl(null, Validators.required),
      range: new FormControl(null, [Validators.required]),
      paid: new FormControl(null),
    });
  }

  ngOnInit(): void {}
  changeBtn() {
    let patchingVal = {
      breakTitle: null,
      breakStartTime: null,
      breakDescription: null,
      breakEndTime: null,
      range: null,
      paid: null,
    };
    this.secondReactiveForm.patchValue(patchingVal);
    if (this.updatebtn === true) {
      this.updatebtn = false;
    } else return;
  }
  reversbtn() {
    if (this.updatebtn === false) {
      this.updatebtn = true;
    } else return;
  }
  getDetails() {
    this.shiftId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('this.shiftId ', this.shiftId);

    this.token = localStorage.getItem('Token');
    console.log('this.token ', this.token);
    this.userId = localStorage.getItem('User_id');
    console.log('this.userId', this.userId);
    this.userName = localStorage.getItem('User_Name');
    console.log('this.userName', this.userName);
  }
  options: Options = {
    floor: 0,
    ceil: 150,
  };
  addShiftBreak() {
    this.breakServ
      .addBreak(
        this.token,
        this.userId,
        this.secondReactiveForm.value.breakTitle,
        this.secondReactiveForm.value.breakDescription,
        this.secondReactiveForm.value.breakStartTime,
        this.secondReactiveForm.value.breakEndTime,
        this.shiftId,
        this.secondReactiveForm.value.paid,
        this.secondReactiveForm.value.range
      )
      .subscribe((res: any) => {
        console.log('response from addBreakShift', res);
        this.viewAllBreak();
        this.dataAdditionSuccess();
      });
  }
  viewAllBreak() {
    this.breakServ
      .viewAllBreak(this.token, this.userId, this.shiftId)
      .subscribe((res: any) => {
        this.rows = res.data;

        console.log('View All Breaks', res.data);
      });
  }
  dataUpdateSuccess() {
    this.toastr.success('Break Updated Successfully', 'Congratulations');
  }
  dataAdditionSuccess() {
    this.toastr.success('Break Added Successfully', 'Congratulations');
  }
  dataDeletionSuccess() {
    this.toastr.success('Break Deleted Successfully', 'Congratulations');
  }
  getId(id: any) {
    this.selectedBreakId = id;
  }
  editClick(id: any) {
    this.reversbtn();
    this.viewBreak(id);
  }

  updateSelectedBreak() {
    this.breakServ
      .updateBreak(
        this.token,
        this.userId,
        this.selectedBreakId,
        this.secondReactiveForm.value.breakTitle,
        this.secondReactiveForm.value.breakDescription,
        this.secondReactiveForm.value.breakStartTime,
        this.secondReactiveForm.value.range,
        this.secondReactiveForm.value.breakEndTime,
        this.shiftId,
        this.secondReactiveForm.value.paid
      )
      .subscribe((res) => {
        console.log('Updatebtn clicked:', res);
        this.viewAllBreak();
        // this.dataUpdateSuccess();
      });
  }
  viewBreak(id: any) {
    this.reversbtn();

    this.breakServ
      .viewSingleBreak(this.token, this.userId, id)
      .subscribe((res: any) => {
        console.log('Response of single break View is: ', res.data);

        this.editableTitle = res.data.break_name;
        console.log('break_name: ', this.editableTitle);

        this.editableDesc = res.data.break_desc;
        console.log('Break_desc: ', res.data.break_desc);

        this.editableStartTime = res.data.start_time;
        console.log('Break_start_time: ', res.data.start_time);

        this.editableEndTime = res.data.end_time;
        console.log('Break_end_time: ', res.data.end_time);

        this.paid = res.data.is_paid;
        console.log('is_paid: ', res.data.is_paid);

        this.range = res.data.break_duration;
        console.log('break_duration: ', res.data.break_duration);

        this.selectedBreakId = res.data.break_id;
        console.log('break_id: ', res.data.break_id);
        let patchingVal = {
          breakTitle: this.editableTitle,
          breakStartTime: this.editableStartTime,
          breakDescription: this.editableDesc,
          breakEndTime: this.editableEndTime,
          range: this.range,
          paid: this.paid,
        };
        console.log('PatchingValues are: ', patchingVal);
        this.secondReactiveForm.patchValue(patchingVal);
      });
  }
  delBreak() {
    this.breakServ
      .DeleteBreak(this.token, this.userId, this.shiftId, this.selectedBreakId)
      .subscribe((res) => {
        console.log('Delete Response: ', res);
        this.viewAllBreak();
        this.dataDeletionSuccess();
      });
  }
  submitBreak() {
    console.log('this.secondReactiveForm.invalid: ',this.secondReactiveForm.invalid)
    console.log('ViewALlBreak data');
    console.log('this.editableEntryId--ShiftID--BreakShiftID', this.shiftId);
    this.addShiftBreak();
    console.log('Submitted');
    console.log(
      'this.secondReactiveForm.value: ',
      this.secondReactiveForm.value
    );
  }
}
