import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from "../register.service";
import {NgFlashMessageService} from "ng-flash-messages";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  details:any;
  constructor(private formBuilder: FormBuilder,private service:RegisterService,private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(6)]],
      phoneNo: ['', [Validators.required,  Validators.maxLength(10), Validators.pattern(/(7|8|9)\d{9}/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(value: any) {
    this.submitted = true;
    this.details=value;
     // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else {
      this.postStudentDetails(this.details);
     }
  }
  postStudentDetails(formdata){
    this.service.PostStudentDetails(formdata).subscribe(users=>{
      this.ngFlashMessageService.showFlashMessage({
         messages: ["Successfully Registred"],
         dismissible: true,
         timeout: 10000,
         type: 'success'
      });
    });
  }
}
