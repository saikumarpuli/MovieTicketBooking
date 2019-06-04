import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgFlashMessageService} from "ng-flash-messages";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
               private ngFlashMessageService: NgFlashMessageService) {
  }


  ngOnInit() {

    this.AddTheaterForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      ReleaseDate: ['', Validators.required],
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
      console.log(this.theaterdata)
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 10000,
        type: 'success'
      });
    }
  }
}

