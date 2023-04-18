package com.object.csms.service;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.object.csms.entity.Customer;
import com.object.csms.repository.CustomerRepository;
@Service
public class CustomerService {
	@Autowired
	CustomerRepository repo;
	
	public Iterable<Customer> listAll() {
        return this.repo.findAll();
    }

	public void saveOrUpdate(Customer customer)  
	{  String password = customer.getUser().getUserPassword();
	   String encodePassword = Base64.getEncoder().encodeToString(password.getBytes());
	   customer.getUser().setUserPassword(encodePassword);
		repo.save(customer); 		
	}
	
	public Customer getCustomerById(int id)  
	{  
		return repo.findById(id).get();  
	}	
	
	public void update(Customer customer, int id)  
	{  
		repo.save(customer);  
	}  
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}
}
