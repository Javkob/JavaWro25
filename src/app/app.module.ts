import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {HomeComponent} from './home/home.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

import {HttpClientModule} from '@angular/common/http';
import {RestaurantDetailsComponent} from "./restaurant-details/restaurant-details.component";
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RegisterComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
