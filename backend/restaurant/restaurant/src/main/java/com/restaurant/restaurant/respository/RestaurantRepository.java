package com.restaurant.restaurant.respository;

import org.springframework.data.repository.CrudRepository;

import com.restaurant.restaurant.models.Restaurant;

public interface RestaurantRepository extends CrudRepository<Restaurant, String>{

}
