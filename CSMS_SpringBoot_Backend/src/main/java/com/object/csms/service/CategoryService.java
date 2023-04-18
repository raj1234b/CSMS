package com.object.csms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Category;
import com.object.csms.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository repo;
	
	public Category getCategory(int id)
	{
		return repo.findById(id).get();	
	}	
	
	public List<Category> getAll()
	{
		return repo.findAll();
	}
}
