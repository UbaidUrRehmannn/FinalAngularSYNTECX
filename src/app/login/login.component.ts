import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../shared/service/enroll.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  faGithub = faGithub;
  x: any;
  y: any;
  tok: any;
  userName: any;
  reactiveForm!: FormGroup;
  router: Router;

  constructor(
    private toastr: ToastrService,
    private enrollServ: LoginService,
    router: Router
  ) {
    this.reactiveForm = new FormGroup({
      number: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.router = router;
  }
  ngOnInit(): void {}
  dataUpdateSuccess() {
    this.toastr.success('Login Successfull', 'Welcome ' + this.userName);
  }
  setItem() {
    localStorage.setItem('userLogin', JSON.stringify(this.reactiveForm.value));
  }
  userLogin() {
    // let plusSign = '+';
    // let result = plusSign.concat(this.reactiveForm.value!.number);
    this.enrollServ
      .login(this.reactiveForm.value!.number, this.reactiveForm.value.password)
      .subscribe((data: any) => {
        if (data.rescode === 1) {
          // console.log('Data is: ', data);
          const str = data.data;
          const splits = str.split('|');
          // console.log('Splits value: ', splits);
          localStorage.setItem('User_Name', JSON.stringify(splits[0]));
          this.userName = JSON.stringify(splits[0]);
          localStorage.setItem('User_id', splits[1]);
          localStorage.setItem('Token', splits[2]);
          localStorage.setItem('Image', splits[8]);
          this.router.navigate(['../employee/shift']);
        } else {
          this.x = data.message;
          // console.log('this.x', this.x);
        }
        this.y = data.rescode;
        this.tok = localStorage.getItem('Token');
        // console.log('Token from local storage is ', this.tok);
      });
      
  }
  hideAlert = () => {
    if (this.y === 1) {
      return false;
    } else return true;
  };
  closeAlert() {
    document.getElementById('alrclose')!.style.display = 'none';
  }
  onSubmit = () => {
    this.userLogin();
    // console.log('this.reactiveForm: ', this.reactiveForm);
    // console.log('this.reactiveForm.controls: ', this.reactiveForm.controls);
    // console.log('this.reactiveForm.value: ', this.reactiveForm.value);
    setTimeout(() => {
      this.dataUpdateSuccess();
    }, 1000);
  };
}
