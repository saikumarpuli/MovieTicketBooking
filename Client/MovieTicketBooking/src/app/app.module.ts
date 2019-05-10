import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 import { MovieDetailsComponent } from './movie-details/movie-details.component';
 import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { TheatreDetailsComponent } from './theatre-details/theatre-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {SlideshowModule} from "ng-simple-slideshow";
import {HttpClientModule} from "@angular/common/http";
import {QueryApi} from "./commonservice/Request/QueryApi";
import {NgFlashMessagesModule} from "ng-flash-messages";
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    MovieDetailsComponent,
    SelectSeatsComponent,
    TheatreDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AddMovieComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    SlideshowModule,
    NgFlashMessagesModule.forRoot()

  ],
  providers: [QueryApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
