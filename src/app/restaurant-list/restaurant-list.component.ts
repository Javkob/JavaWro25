import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})

export class RestaurantListComponent implements OnInit {

  _restaurants:any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
   this._restaurants= this.http.get("https://jedzonkopl.herokuapp.com/restaurants")
     .toPromise()
     .then((res)=>{this._restaurants=res;});
}}
