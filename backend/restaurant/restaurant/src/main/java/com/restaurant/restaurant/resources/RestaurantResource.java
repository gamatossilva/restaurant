package com.restaurant.restaurant.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.restaurant.models.Restaurant;
import com.restaurant.restaurant.respository.RestaurantRepository;

@RestController
@RequestMapping("/restaurantJson")
public class RestaurantResource {

	@Autowired
	private RestaurantRepository rr;
	
	@GetMapping()
	public List<Restaurant> getRestaurantList(){
		List<Restaurant> restaurantList = (List<Restaurant>) rr.findAll();
		return restaurantList;
	}
	
	@PostMapping()
	public Restaurant postRestaurant(@RequestBody Restaurant restaurant) {
		rr.save(restaurant);
		return restaurant;
	}
}
