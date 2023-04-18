package com.object.csms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.Category;
import com.object.csms.service.CategoryService;

@RestController
@CrossOrigin(origins="*")
public class CategoryController {

	@Autowired
	CategoryService services;
	
	@GetMapping("/getcategory")
	public List<Category> getAll()
	{
		return services.getAll();
	}
	
	@GetMapping("/{id}/getcategory")
	public Category getById(@PathVariable(name = "id") int id)
	{
		return services.getCategory(id);
	}
}
