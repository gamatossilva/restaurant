import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router, ParamMap } from '../../../node_modules/@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  posts: any;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(
        (data: PostInterface) => {
          this.posts = data;
        }
      );
  }

  onSelect(post) {
    this.router.navigate(['/restaurant', post.codigo]);
  }

}

interface PostInterface {
  codigo: number;
  name: string;
}
