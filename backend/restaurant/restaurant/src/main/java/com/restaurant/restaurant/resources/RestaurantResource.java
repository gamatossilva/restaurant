package com.restaurant.restaurant.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.restaurant.restaurant.models.MenuItem;
import com.restaurant.restaurant.models.Restaurant;
import com.restaurant.restaurant.respository.MenuItemRepository;
import com.restaurant.restaurant.respository.RestaurantRepository;

@RestController
@RequestMapping("/restaurantJson")
public class RestaurantResource {

	@Autowired
	private RestaurantRepository rr;

	@Autowired
	private MenuItemRepository mir;

	@GetMapping()
	public List<Restaurant> getRestaurantList(){
		List<Restaurant> restaurantList = (List<Restaurant>) rr.findAll();
		for(Restaurant restaurant : restaurantList) {
			List<MenuItem> menuItems = (List<MenuItem>) mir.findByRestaurant(restaurant);
			restaurant.setMenuItems(menuItems);
		}
		return restaurantList;
	}

	@PostMapping()
	public Restaurant postRestaurant(@RequestBody Restaurant restaurant) {
		rr.save(restaurant);
		return restaurant;
	}

	@GetMapping(path="/{codigo}")
	public Restaurant getRestaurantByCodigo(@PathVariable("codigo") long codigo) {
		Restaurant restaurant = rr.findByCodigo(codigo);
		List<MenuItem> menuItems = (List<MenuItem>) mir.findByRestaurant(restaurant);
		restaurant.setMenuItems(menuItems);
		return restaurant;
	}

	@GetMapping(path="/{codigo}/menu")
	public List<MenuItem> getMenuOfRestaurant(@PathVariable("codigo") long codigo) {
		Restaurant restaurant = rr.findByCodigo(codigo);
		List<MenuItem> menuItems = (List<MenuItem>) mir.findByRestaurant(restaurant);
		//restaurant.setMenuItems(menuItems);
		return menuItems;
	}

	@PostMapping(path="/{codigo}/menu")
	public MenuItem postMenuOfRestaurant(@PathVariable("codigo") long codigo, @RequestBody MenuItem menuItem) {
		Restaurant restaurant = rr.findByCodigo(codigo);
		menuItem.setRestaurant(restaurant);
		mir.save(menuItem);
		//restaurant.setMenuItems(menuItems);
		return menuItem;
	}


}
