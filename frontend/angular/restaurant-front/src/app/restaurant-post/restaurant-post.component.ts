import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-restaurant-post',
  templateUrl: './restaurant-post.component.html',
  styleUrls: ['./restaurant-post.component.css']
})
export class RestaurantPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onPost() {
    let restaurantName = 'restaurante 10';
    this.postService.postRestaurant(restaurantName);
  }

}
