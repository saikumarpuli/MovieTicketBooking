import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {TheatreDetailsComponent} from './theatre-details/theatre-details.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import {AddMovieComponent} from "./add-movie/add-movie.component";
import {AddTheaterComponent} from "./add-theater/add-theater.component";
import {UserdetailsComponent} from "./userdetails/userdetails.component";
import {TheaterdetailsComponent} from "./theaterdetails/theaterdetails.component";

const routes: Routes = [
  {path: 'home', component : HomepageComponent},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'moviedetails', component: MovieDetailsComponent},
  {path: 'selectseats', component: SelectSeatsComponent},
  {path: 'theatredetails', component: TheatreDetailsComponent},
  {path: 'addmovie', component:AddMovieComponent},
  {path: 'addtheater', component:AddTheaterComponent},
  {path:'showusers',component:UserdetailsComponent},
  {path:'showtheaters' , component:TheaterdetailsComponent},
  {path: '**', redirectTo : '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

