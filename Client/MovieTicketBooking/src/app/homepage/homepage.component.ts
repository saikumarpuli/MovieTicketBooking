import { Component, OnInit } from '@angular/core';
import {IImage} from "ng-simple-slideshow";
import {MovieDetailsService} from "../services/movie-details.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {
   movies: any;

constructor(private movieService:MovieDetailsService,private router:Router){}
ngOnInit(){
  this.getmovies();
}
  private getmovies() {
    this.movieService.getmoviedetails().subscribe(users=>{
      this.movies=users;
     })
  }

  getdetails(event) {
       this.router.navigate(['/moviedetails',event],{skipLocationChange: true});
       console.log(event)
    }

}

