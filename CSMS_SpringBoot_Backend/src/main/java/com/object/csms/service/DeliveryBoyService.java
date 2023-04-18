package com.object.csms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.DeliveryBoy;
import com.object.csms.repository.DeliveryBoyRepository;

@Service
public class DeliveryBoyService {
	@Autowired
	DeliveryBoyRepository repo;
	
	public Iterable<DeliveryBoy> listAll() 
	{
        return this.repo.findAll();
    }
	
	public void saveOrUpdate(DeliveryBoy Delivery)  
	{  
		repo.save(Delivery); 		
	}
	
	public DeliveryBoy getDeliveryBoyById(int id)  
	{  
		return repo.findById(id).get();  
	}	
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}

	public List<DeliveryBoy> getDeliveryBoyByCompanyId(int id) {
		
		return repo.findByCompanyId(id);
	}
}
