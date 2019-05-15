import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegisterService} from "../register.service";
import {Router} from '@angular/router';
import {NgFlashMessageService} from "ng-flash-messages";
import {HeaderService} from "../header.service";
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signinForm: FormGroup;
  submitted = false;
  loading: any;
  private users: any;
   private flag: number=0;

  constructor(private router: Router,private formBuilder: FormBuilder,private service:RegisterService,
              private ngFlashMessageService: NgFlashMessageService,private headerservice:HeaderService,
              private localstorage:LocalStorage) { }

  ngOnInit() {
    this.getdata();
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  private getdata() {
    this.service.getCourseDetails().subscribe((response) => {
      this.users = response;

    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.signinForm.controls; }

  onSubmit(value: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else {
      for (let user of this.users) {
        if ((user.email == value.email) && (user.password == value.password)) {
          this.flag=1;
            this.localstorage.setItem('data',this.flag).subscribe(()=>{});
          }
      }
      if(this.flag==1){
        this.localstorage.getItem('data').subscribe((params)=>{
         });
        this.router.navigate(['/home']);
      }
      else{
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Incorrect email or password."],
           type: 'danger'
        });
      }
    }
  }

}
