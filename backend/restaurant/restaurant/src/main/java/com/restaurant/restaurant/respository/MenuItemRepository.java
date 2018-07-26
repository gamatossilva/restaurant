package com.restaurant.restaurant.respository;

import org.springframework.data.repository.CrudRepository;

import com.restaurant.restaurant.models.MenuItem;
import com.restaurant.restaurant.models.Restaurant;

public interface MenuItemRepository extends CrudRepository<MenuItem, String> {
	Iterable<MenuItem> findByRestaurant(Restaurant restaurant);
	MenuItem findByCodigo(long codigo);
}
