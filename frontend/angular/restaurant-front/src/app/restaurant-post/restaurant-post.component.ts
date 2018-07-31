import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-restaurant-post',
  templateUrl: './restaurant-post.component.html',
  styleUrls: ['./restaurant-post.component.css']
})
export class RestaurantPostComponent implements OnInit {

  restaurants: any;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onPost(restaurantName) {
    const newRestaurant = {
      name: restaurantName
    };
    this.router.navigate(['']);
    //this.postService.postRestaurant(restaurantName);
    this.postService.postRestaurant(newRestaurant).subscribe(
      restaurant => this.restaurants.push(restaurant)
    );
  }

}


