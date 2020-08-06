import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  meals:any=[]
  restaurant: any;
  restaurantId: any;

  constructor(private http:HttpClient, private route: ActivatedRoute) {
    this.restaurantId = route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.http.get("https://jedzonkopl.herokuapp.com/restaurant/${(this.restaurantId)}")
      .subscribe((data)=>{
      this.restaurant=data;})
}}
