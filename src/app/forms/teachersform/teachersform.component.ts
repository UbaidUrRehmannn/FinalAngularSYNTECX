import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-teachersform',
  templateUrl: './teachersform.component.html',
  styleUrls: ['./teachersform.component.css'],
})
export class TeachersformComponent implements OnInit {
  title = "Add Teacher's Data";
  reactiveForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        fname: new FormControl(  null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        lname: new FormControl(  null, Validators.required),
        uname: new FormControl(  null, Validators.required),
        email: new FormControl(  null, [Validators.required, Validators.email]),
        password: new FormControl(  null, [Validators.required, Validators.minLength(8)]),
      }),
      gender: new FormControl(  null, Validators.required),
      portfolio: new FormControl(  null, Validators.required),
     
        phone: new FormControl(  null, Validators.required),
        address: new FormControl(  null, Validators.required),
        city: new FormControl(  null, Validators.required),
        state: new FormControl(  null, Validators.required),
        zip: new FormControl(  null, Validators.required),

    
      joining: new FormControl(  null, Validators.required),
      
        role: new FormControl(  null, Validators.required),
        experience: new FormControl(  null, Validators.required),
     
      bio: new FormControl(  null, Validators.required),
    });
  }
  get password() { return this.reactiveForm.get('password')!; }
  onSubmit = () => {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.controls)
  };
}
