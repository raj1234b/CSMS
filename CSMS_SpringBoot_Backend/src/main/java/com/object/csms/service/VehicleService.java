package com.object.csms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.object.csms.entity.VehicleDetails;
import com.object.csms.repository.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	VehicleRepository repo;
	
	public Iterable<VehicleDetails> listAll() 
	{
        return this.repo.findAll();
    }
	
	public void saveOrUpdate(VehicleDetails vehicle)  
	{  
		repo.save(vehicle); 		
	}
	
	public VehicleDetails getVehicleById(int id)  
	{  
		return repo.findById(id).get();  
	}	
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}

	public List<VehicleDetails> getVehicleByCompanyId(int id) {
		
		return repo.findByCompanyId(id);
	}
	
}
