import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
 import {MovieDetailsService} from "../movie-details.service";
 import {NgFlashMessageService} from "ng-flash-messages";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  AddCourseForm: FormGroup;
  submitted = false;
  public coursedata: any;
   constructor(private router: Router,private formBuilder: FormBuilder,
              private movieService:MovieDetailsService,private ngFlashMessageService: NgFlashMessageService) {
  }
  ngOnInit() {
    this.AddCourseForm = this.formBuilder.group({
      Name:  ['', [Validators.required, Validators.minLength(3)]],
      ReleaseDate: ['', Validators.required],
      Synapsis: ['', [Validators.required]],
      Cast: ['', [Validators.required]],
      Crew: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.AddCourseForm.controls;
  }
  onSubmit(value) {
    this.submitted = true;
    this.coursedata = value;
    if (this.AddCourseForm.invalid) {
      return;
    }
    else{
      this.movieService.postmoviedetails(this.AddCourseForm.value).subscribe(users=>{})
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 10000,
        type: 'success'
      });
    }
  }

}

