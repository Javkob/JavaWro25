import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {RegisterComponent} from './register/register.component';
import {RestaurantDetailsComponent} from "./restaurant-details/restaurant-details.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'restaurant', component: RestaurantListComponent},
  // {path: 'details', component: DetailsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'restaurant', component: RestaurantListComponent},
  {path: 'restaurant/:name', component: RestaurantDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
