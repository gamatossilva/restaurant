import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const END_POINT = 'http://localhost:8080/restaurantJson/';

@Injectable({
    providedIn: 'root'
})


export class PostService {



    constructor(private httpClient: HttpClient) { }

    getName() {
        return 'PostService';
    }

    getPosts() {
        return this.httpClient.get(END_POINT);
    }

    getRestaurantMenu(id) {
        return this.httpClient.get(END_POINT + '/' + id);
    }

    postRestaurant(restaurant: RestaurantInterface) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.httpClient.post(END_POINT, restaurant, httpOptions);
    }

    postMenu(menuItems: RestaurantMenuItems, id) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.httpClient.post(END_POINT + '/' + id + '/menu', menuItems, httpOptions);
    }

}


interface RestaurantInterface {
    name: string;
  }


  interface RestaurantMenuItems {
      name: string;
      course: string;
      description: string;
      price: any;
  }
