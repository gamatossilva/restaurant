import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PostService } from './services/post.service';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantPostComponent } from './restaurant-post/restaurant-post.component';

const appRoutes: Routes = [
  { path: 'restaurant', component: RestaurantMenuComponent },
  { path: '', component: RestaurantComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantMenuComponent,
    RestaurantPostComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'restaurant/:id',
        component: RestaurantMenuComponent
      },
      {
        path: 'restaurants/post',
        component: RestaurantPostComponent
      },
      {
        path: '',
        component: RestaurantComponent
      }
    ]
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
