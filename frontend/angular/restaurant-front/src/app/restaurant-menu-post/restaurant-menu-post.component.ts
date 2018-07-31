import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-restaurant-menu-post',
  templateUrl: './restaurant-menu-post.component.html',
  styleUrls: ['./restaurant-menu-post.component.css']
})
export class RestaurantMenuPostComponent implements OnInit {

  id: number;
  menuItems: any;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  postRestaurantMenu(menuItemName, menuItemCourse, menuItemDescription, menuItemPrice) {
    const newRestaurantMenuItems = {
      name: menuItemName,
      course: menuItemCourse,
      description: menuItemDescription,
      price: parseFloat(menuItemPrice)
    };

    this.postService.postMenu(newRestaurantMenuItems, this.id).subscribe(
      menuItem => this.menuItems.push(menuItem)
    );
    this.router.navigate(['/restaurant/', this.id]);
  }

}
