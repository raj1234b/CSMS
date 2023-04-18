package com.object.csms.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.object.csms.entity.VehicleDetails;
import com.object.csms.service.VehicleService;

@RestController
@CrossOrigin(origins="*")
public class VehicleController {

	@Autowired
	VehicleService services;
	
	@GetMapping("/getallvehicle")
	public Iterable<VehicleDetails> getVehicle()
	{
		Iterable<VehicleDetails> vehi = services.listAll();
		return vehi;    
	}
	
	//Get Vehicle with Company Id
	@GetMapping("/{id}/getvehicledetails")
	public List<VehicleDetails> getVehicleDetails(@PathVariable(name="id")int id)
	{
		List<VehicleDetails> resp = services.getVehicleByCompanyId(id);
		return resp;
	}
	
	@PostMapping("/vehicleregister")
	private int saveVehicle (@RequestBody VehicleDetails vehicle)  
	{  
		services.saveOrUpdate(vehicle);  
		return  vehicle.getVehicleDetailsId();
	}
	
	@RequestMapping("/vehicle/{id}")  
	private VehicleDetails getVehicle(@PathVariable(name = "id") int id)  
	{  
		return services.getVehicleById(id) ;
	}  

	@DeleteMapping("/{id}/deletevehicle")  
	private void deleteVehicle(@PathVariable("id") int id)  
	{  
		services.delete(id);
	}
}
