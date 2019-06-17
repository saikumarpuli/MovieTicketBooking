import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgFlashMessageService} from "ng-flash-messages";
import {AddtheaterService} from "../addtheater.service";

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.css']
})
export class AddTheaterComponent implements OnInit {
  AddTheaterForm: FormGroup;
  submitted = false;
  public theaterdata: any;

  constructor(private router: Router, private formBuilder: FormBuilder,
               private ngFlashMessageService: NgFlashMessageService,private addtheater:AddtheaterService) {
  }


  ngOnInit() {

    this.AddTheaterForm = this.formBuilder.group({
      theatername: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      movie_id: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.AddTheaterForm.controls;
  }

  onSubmit(value) {
    this.submitted = true;
    this.theaterdata = value;
    if (this.AddTheaterForm.invalid) {
      return;
    } else {

      this.addtheater.posttheaterdetails(this.AddTheaterForm.value).subscribe(users=>{})
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 10000,
        type: 'success'
      });
    }
  }
}

