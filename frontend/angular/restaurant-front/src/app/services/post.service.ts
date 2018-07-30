import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    postRestaurant(restaurantName) {
        const data = JSON.stringify({
            name: restaurantName
        });

        this.httpClient.post(END_POINT, data);
    }

}
