import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
 import {MovieDetailsService} from "../services/movie-details.service";
 import {NgFlashMessageService} from "ng-flash-messages";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  AddMovieForm: FormGroup;
  submitted = false;
  public moviedata: any;
   constructor(private router: Router,private formBuilder: FormBuilder,
              private movieService:MovieDetailsService,private ngFlashMessageService: NgFlashMessageService) {
  }
  ngOnInit() {
    this.AddMovieForm = this.formBuilder.group({
      Name:  ['', [Validators.required, Validators.minLength(3)]],
      ReleaseDate: ['', Validators.required],
      Synapsis: ['', [Validators.required, Validators.maxLength(255)]],
      Cast: ['', [Validators.required]],
      Crew: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.AddMovieForm.controls;
  }
  onSubmit(value) {
    this.submitted = true;
    this.moviedata = value;
    if (this.AddMovieForm.invalid) {
      return;
    }
    else{
      this.movieService.postmoviedetails(this.AddMovieForm.value).subscribe(users=>{})
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 10000,
        type: 'success'
      });
    }
  }

}

