import { Component, OnInit } from '@angular/core';
import {IImage} from "ng-simple-slideshow";
import {MovieDetailsService} from "../movie-details.service";
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
      console.log(users)
    })
  }



  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/118.jpg', caption: '118 movie', href: '#config' },
    { url: 'assets/images/f2.jpg',caption: 'f2', clickAction: () => alert('custom click function') },
    { url: 'assets/images/viswasam.jpg', caption: 'viswasam', href: 'https://www.apple.com/' },
    {url:'assets/images/urihindi.jpg', caption:'URI'},
    { url: 'assets/images/captain-marvel.jpg', backgroundSize: 'contain', backgroundPosition: 'center',}
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'contain';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
   hideOnNoSlides: boolean = false;
  fullscreen: boolean = false;

  getdetails(event) {
       this.router.navigate(['/moviedetails',event],{skipLocationChange: true});
       console.log(event)
    }

}

