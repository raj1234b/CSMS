package com.object.csms.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.CategoryPrice;
import com.object.csms.repository.CategoryPriceRepository;

@Service
public class CategoryPriceService {

	@Autowired
	CategoryPriceRepository repo;
	
	public CategoryPrice getPrice(int id)
	{
		return repo.findById(id).get();
	}	
	
	public List<CategoryPrice> getAll()
	{
		return repo.findAll();
	}
	
	public List<CategoryPrice> getByCompanyId(int id)
	{
		return repo.getByCompanyId(id);
	}

	public void updatePrice(CategoryPrice price) 
	{		
		repo.save(price);
	}
}
