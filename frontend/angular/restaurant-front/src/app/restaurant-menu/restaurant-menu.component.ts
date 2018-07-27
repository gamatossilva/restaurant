import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  restaurantId;
  restaurantMenu: any;
  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.restaurantId = id;
    this.postService.getRestaurantMenu(id)
    .subscribe(
      (data: RestaurantMenuInterface) => {
        this.restaurantMenu = data;
      }
    );
  }

}

interface RestaurantMenuInterface {
  codigo: number;
  name: string;
  menuItems;
}
