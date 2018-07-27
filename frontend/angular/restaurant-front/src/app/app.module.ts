import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PostService } from './services/post.service';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

const appRoutes: Routes = [
  { path: 'restaurant', component: RestaurantMenuComponent },
  { path: '', component: RestaurantComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantMenuComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'restaurant/:id',
        component: RestaurantMenuComponent
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
