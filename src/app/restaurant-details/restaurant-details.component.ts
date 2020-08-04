import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  _meals:any=[];
  restaurantName: any;
  restaurantAddress: any;
  _restaurants: any= [];

  constructor(private http:HttpClient, private route: ActivatedRoute) {
    this.restaurantName = route.snapshot.paramMap.get('name')
    this.restaurantAddress = route.snapshot.paramMap.get('address')
  // }
  //
  // ngOnInit(): void {
  //   this.http.get(`https://jedzonkopl.herokuapp.com/restaurant/${(this.restaurantName)}`)
  //     .toPromise()
  //     .then((m) => {
  //       this._meals = m;
  //     })
  }
  ngOnInit(): void {
    this.http.get("https://jedzonkopl.herokuapp.com/restaurants")
      .toPromise()
      .then((res)=>{this._restaurants=res;});

    // this.http.get(`https://jedzonkopl.herokuapp.com/restaurant/${(this.restaurantAddress)}`)
    //   .toPromise()
    //   .then(()=>{this.restaurantAddress})

  }

}
