package com.object.csms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.CategoryPrice;
import com.object.csms.service.CategoryPriceService;

@RestController
@CrossOrigin(origins="*")
public class CategoryPriceController {

	@Autowired
	CategoryPriceService services;
	
	@GetMapping("/getprice")
	public List<CategoryPrice> getAll()
	{
		return services.getAll();
	}
	
	@GetMapping("/{id}/getprice")
	public List<CategoryPrice> getByCompanyId(@PathVariable(name="id") int id)
	{
		return services.getByCompanyId(id);
	}
	@PutMapping("/updateprice/{id}")
	public CategoryPrice updatePrice(@RequestBody CategoryPrice price,@PathVariable(name="id") int id )
	{
		price.setCategoryPricingId(id);
		services.updatePrice(price); 
		return price;
	}
}
