package com.object.csms.service;
import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Category;
import com.object.csms.entity.CategoryPrice;
import com.object.csms.entity.Company;
import com.object.csms.entity.User;
import com.object.csms.exceptions.DuplicateEntryException;
import com.object.csms.exceptions.InternalServerError;
import com.object.csms.exceptions.NotFoundException;
import com.object.csms.repository.CategoryPriceRepository;
import com.object.csms.repository.CategoryRepository;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.DeliveryBoyRepository;
import com.object.csms.repository.UserRepository;
import com.object.csms.repository.VehicleRepository;

@Service
public class CompanyService {

	@Autowired
	CompanyRepository repo;
	
	@Autowired
	VehicleRepository vrepo;
	
	@Autowired
	DeliveryBoyRepository drepo;
	
	@Autowired
	UserRepository urepo;
	
	@Autowired
	CategoryPriceRepository crepo;
	
	@Autowired
	CategoryRepository crrepo;
	
	UserService uservice;
	
	public Iterable<Company> listAll() {
        return this.repo.findAll();
    }

	public void saveOrUpdate(Company company) throws Exception  
	{   
		try {
		String password = company.getUser().getUserPassword();
		String encodePassword = Base64.getEncoder().encodeToString(password.getBytes());
		company.getUser().setUserPassword(encodePassword);
		repo.save(company); 
		}
		catch (Exception e)
		{
			throw new DuplicateEntryException(e.getMessage());
		}
	}
	
	public Company getCompanyById(int id)  
	{  
		return repo.findById(id).get();  
	}
	
	public void update(Company company, int id)  
	{  
		repo.save(company);  
	}  
	
	@Transactional
	public void delete(int id)  
	{  
		drepo.deleteByCompanyId(id);
		vrepo.deleteByCompanyId(id);
		crepo.deleteByCompanyId(id);
		repo.deleteById(id);  
	}
	
	@Transactional
	public List<Company> findByUserId() 
	{
		return repo.findPendingCompany();
	}
	@Transactional
	public List<Company> findByStatus() 
	{

		return repo.findApprovedCompany();
	}

	@Transactional
	public Optional<Company> approved(int id) throws Exception
	{		
		Optional<Company> c = repo.findById(id);
		
		if(c.isPresent()) 
		{			
			c.get().getUser().setUserStatus("true");
			repo.save(c.get());
		}
		else
			throw new NotFoundException("Company Not Found with id : "+ id);
		int price=99;
		List<Category> category = crrepo.findAll();
		try {
			for(int i=0;i<5;i++)
			{
				CategoryPrice categoryprice = new CategoryPrice(price, category.get(i), id);
				crepo.save(categoryprice);
			}
			return c;
		}
		catch(Exception e) {
			throw new InternalServerError("Unable to Save Category Price of Company having id : "+id);
		}
		
	}
	
}
